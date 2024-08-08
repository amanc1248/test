import psycopg2
import requests
import jwt
import json
from datetime import datetime, timedelta
from tqdm import tqdm
from concurrent.futures import ThreadPoolExecutor, as_completed

# Database connection parameters
db_params = {
    'dbname': 'tsdb',
    'user': 'tsdbadmin',
    'password': 'Ywl9!2V-60kWlU',
    'host': 'k37pc26aon.p5o3xdwhsl.vpc.tsdb.forge.timescale.com',
    'port': '5432'
}

# Function to process each webhook
def process_webhook(row, customer_webhook_url, missing_events):
    carrier = row[0]
    webhook_data_str = row[1]
    
    # Parse webhookData JSON string to a dictionary
    webhook_data = json.loads(webhook_data_str)

    # Extract data from webhookData with default values if keys are missing
    old_data = webhook_data.get('oldData', {})
    new_data = webhook_data.get('newData', {})
    is_remove_field = webhook_data.get('isRemoveField', False)
    webhook_key = webhook_data.get('webhookKey', '')

    # Check if webhook_key is available
    if not webhook_key:
        print("Error: 'webhookKey' is missing in webhookData.")
        return

    # Prepare the JWT payload with expiration time
    jwt_payload = {
        'carrier': carrier,
        'exp': datetime.utcnow() + timedelta(hours=1)  # Token expires in 1 hour
    }

    # Generate the token
    token = jwt.encode(jwt_payload, webhook_key, algorithm='HS256')

    results = []

    for missing_event in missing_events:
        # Prepare the API payload
        payload = {
            'carrier': carrier,
            'eventTypes': [missing_event],
            'oldData': old_data,
            'newData': new_data,
            'isRemoveField': is_remove_field
        }

        # Prepare the API call
        headers = {
            'authorization': f'bearer {token}'
        }

        response = requests.post(customer_webhook_url, headers=headers, json=payload)
        results.append((response.status_code, response.text))

    return results

def generate_webhooks(carrier_id, event_type, missing_events=[]):
    # Query parameters
    state = 'PENDING'
    start_time = '2024-08-03 03:15:00'
    end_time = '2024-08-05 20:15:00'

    # JWT parameters
    customer_webhook_url = 'http://localhost:7001/v1/webhook/trigger-webhook'

    # Connect to the database
    conn = psycopg2.connect(**db_params)
    cursor = conn.cursor()

    # Execute the query
    query = """
    SELECT "carrier", "webhookData"
    FROM public.carrier_webhook_audit 
    WHERE "carrier" = %s
    AND "eventType" = %s
    AND "state" = %s
    AND "createdAt" BETWEEN %s AND %s;
    """
    cursor.execute(query, (carrier_id, event_type, state, start_time, end_time))

    # Fetch all rows
    rows = cursor.fetchall()

    # Use ThreadPoolExecutor to process webhooks concurrently
    with ThreadPoolExecutor(max_workers=5) as executor:
        futures = [
            executor.submit(process_webhook, row, customer_webhook_url, missing_events)
            for row in rows
        ]

        for future in tqdm(as_completed(futures), total=len(rows), desc="Processing webhooks"):
            try:
                result = future.result()
                # Handle the result if necessary
                # print(result)
            except Exception as exc:
                print(f'Generated an exception: {exc}')

    # Close the database connection
    cursor.close()
    conn.close()

generate_webhooks('654a747974b973153ca273e0', 'load#routing_update', ['load#chassis_pick', 'load#pull_container','load#drop_container','load#hook_container','load#deliver_load','load#return_container','load#chassis_termination'])

