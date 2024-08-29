import os
import json
from pinecone import Pinecone

# Your Pinecone API key and environment
PINECONE_API_KEY = ''  # Replace with your actual API key
PINECONE_ENV = 'https://project5-yxbf4cq.svc.aped-4627-b74a.pinecone.io'

# Initialize Pinecone
pc = Pinecone(api_key=PINECONE_API_KEY, environment=PINECONE_ENV)

# Connect to your existing index
index_name = 'project5'  # Use the actual index name if different
index = pc.Index(index_name)

# Function to convert data entry to vector
def convert_to_vector(data_entry):
    # Create a vector with dimensions based on your data
    # Example: If you have 5 fields, you can convert them into a vector
    vector = []
    
    # Convert fields to numerical representation
    qr = data_entry.get('quality_rating', 0)
    wtap = data_entry.get('would_take_again_percentage', 0)
    dr = data_entry.get('difficulty_rating', 0)
    
    if qr == 'N/A':
        qr = 0.0
    if wtap == 'N/A':
        wtap = 0.0
    if dr == 'N/A':
        dr = 0.0

    vector.append(float(qr))
    vector.append(float(wtap))
    vector.append(float(dr))

    if 0.0 in set(vector):
        return False
    else:

    # vector.append(float(data_entry.get('quality_rating', 0)))
    # vector.append(float(data_entry.get('would_take_again_percentage', 0)))
    # vector.append(float(data_entry.get('difficulty_rating', 0)))
    
    # You might need to handle cases where fields are missing or have 'N/A'
    # Ensure all values are numeric, if not, convert them (e.g., using a default value)
        return vector + [0.0] * (3072 - len(vector))  # Padding to ensure vector size of 3072

# Read the JSON file
with open('data.json', 'r') as file:
    data = json.load(file)

# Upsert data into Pinecone one entry at a time
for i, entry in enumerate(data):
    print(f"Uploading entry {i + 1} of {len(data)}\n")
    print(entry)
    if isinstance(entry, dict):
        vector = convert_to_vector(entry)
        print(f"Vector: {vector}\n")
        # index.upsert(vectors=[(str(i), vector)])  # Upsert one vector at a time
    
    if vector:
        index.upsert(vectors=[(str(i), vector)]) 

print("Data has been uploaded to Pinecone.")
