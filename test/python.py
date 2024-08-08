import concurrent.futures
import psycopg2
import time
import csv
import psutil

# TimeScale connection parameters
timescale_conn_params = {
    'dbname': 'tsdb',
    'user': 'tsdbadmin',
    'host': 'tns0cgyv7n.v13136x09a.tsdb.cloud.timescale.com',
    'password': "t76ou62inq5j89c2",
    'port': 36711
}

# Function to connect to PostgreSQL and execute query
def execute_query(query):
    try:
        # Connect to PostgreSQL
        conn = psycopg2.connect(**timescale_conn_params)
        cursor = conn.cursor()

        # Execute query and measure time taken
        start_time = time.time()
        cursor.execute(query)
        conn.commit()
        end_time = time.time()

        # Calculate time taken for query execution
        execution_time = end_time - start_time

        # Close cursor and connection
        cursor.close()
        conn.close()

        return execution_time

    except psycopg2.Error as e:
        print(f"Error executing query: {e}")
        return None

# Function to load queries from an external file
def load_queries_from_file(file_path):
    with open(file_path, 'r') as file:
        queries = file.read().split(';')
        return [query.strip() for query in queries if query.strip()]

# Function to fetch data using generated queries
def fetch_data(csv_writer, min_workers=100, max_workers=300, increment=10):
    # Load queries from file
    queries = load_queries_from_file('queries.txt')
    original_queries = queries[:]

    num_batches = 0
    total_execution_time = 0
    total_cpu_usage = 0
    total_memory_usage = 0

    num_workers = min_workers
    while num_workers <= max_workers:
        batch_size = min(len(queries), num_workers)
        if batch_size == 0:
            queries = original_queries[:]
            batch_size = min(len(queries), num_workers)

        print(f"Executing with {num_workers} workers.")

        # Get initial CPU and memory usage before the batch execution
        process = psutil.Process()
        cpu_usage_before = process.cpu_percent(interval=None)
        memory_usage_before = process.memory_info().rss

        batch_execution_time = 0
        batch_cpu_usage = 0
        batch_memory_usage = 0

        with concurrent.futures.ThreadPoolExecutor(max_workers=num_workers) as executor:
            future_to_query = {executor.submit(execute_query, query): query for query in queries[:batch_size]}
            queries = queries[batch_size:]
            for future in concurrent.futures.as_completed(future_to_query):
                query = future_to_query[future]
                try:
                    execution_time = future.result()
                    if execution_time is not None:
                        batch_execution_time += execution_time
                except Exception as e:
                    print(f"Error executing query: {query}, Error: {e}")

        # Get final CPU and memory usage after the batch execution
        cpu_usage_after = process.cpu_percent(interval=None)
        memory_usage_after = process.memory_info().rss

        # Calculate usage
        cpu_usage = (cpu_usage_after - cpu_usage_before) / psutil.cpu_count()
        memory_usage = abs(memory_usage_after - memory_usage_before) / 1024 / 1024  # Convert to MB

        # Ensure non-negative values
        cpu_usage = max(cpu_usage, 0)
        memory_usage = max(memory_usage, 0)

        total_execution_time += batch_execution_time
        total_cpu_usage += cpu_usage
        total_memory_usage += memory_usage

        num_batches += 1

        # Write batch data to CSV
        csv_writer.writerow([num_workers, batch_execution_time, cpu_usage, memory_usage])

        # Increment the number of workers
        num_workers += increment

    # Write averages to CSV
    average_execution_time = total_execution_time / num_batches if num_batches > 0 else 0
    average_cpu_usage = total_cpu_usage / num_batches if num_batches > 0 else 0
    average_memory_usage = total_memory_usage / num_batches if num_batches > 0 else 0

    csv_writer.writerow(['Average', average_execution_time, average_cpu_usage, average_memory_usage])

    print("Data fetching completed.")

# Create a CSV file to write the results
csv_filename = "timescale_results_multi_new.csv"
with open(csv_filename, mode='w', newline='') as file:
    csv_writer = csv.writer(file)
    csv_writer.writerow(['Parallel Workers', 'Execution Time (seconds)', 'CPU Usage (%)', 'Memory Usage (MB)'])

    # Call function to fetch data using generated queries
    fetch_data(csv_writer)

print(f"CSV file '{csv_filename}' created successfully.")