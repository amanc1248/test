import psycopg2
import requests
import jwt
import json
from datetime import datetime, timedelta
from tqdm import tqdm

# Database connection parameters
db_params = {
    'dbname': 'tsdb',
    'user': 'tsdbadmin',
    'password': 'Ywl9!2V-60kWlU',
    'host': 'k37pc26aon.p5o3xdwhsl.vpc.tsdb.forge.timescale.com',
    'port': '5432'
}

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
    AND "createdAt" BETWEEN %s AND %s
    LIMIT 50;
    """
    cursor.execute(query, (carrier_id, event_type, state, start_time, end_time))

    # Fetch all rows
    rows = cursor.fetchall()

    # Process each row with progress bar
    for row in tqdm(rows, desc="Processing webhooks"):
        carrier = row[0]  # Assuming carrier is the first column
        webhook_data_str = row[1]  # Assuming webhookData is the second column
        
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
            continue

        # Prepare the JWT payload with expiration time
        jwt_payload = {
            'carrier': carrier,
            'exp': datetime.utcnow() + timedelta(hours=1)  # Token expires in 1 hour
        }

        # Generate the token
        token = jwt.encode(jwt_payload, webhook_key, algorithm='HS256')

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

            # Print response (for debugging)
            # print(response.status_code, response.text)

    # Close the database connection
    cursor.close()
    conn.close()

generate_webhooks('654a747974b973153ca273e0', 'appointments#port_pickup', ['appointments#consignee', 'appointments#port_return'])