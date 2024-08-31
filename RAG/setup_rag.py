from dotenv import load_dotenv
import os
import json
from pinecone import Pinecone, ServerlessSpec
from openai import OpenAI

load_dotenv()

# Your Pinecone API key and environment
PINECONE_API_KEY = os.environ["PINECONE_API_KEY"]
PINECONE_ENV = os.environ["NEXT_PUBLIC_PINECONE_ENV"]
OPENAI_API_KEY = os.environ["OPENAI_API_KEY"]

# Initialize Pinecone
pc = Pinecone(api_key=PINECONE_API_KEY, environment=PINECONE_ENV)

# Load the existing Pinecone index
index = pc.Index("rag")  # Assuming "rag" is the name of the existing index

# Load the professor data from data.json
with open("data.json", "r") as f:
    professor_data = json.load(f)

processed_data = []
client = OpenAI(api_key=OPENAI_API_KEY)

# Create embeddings for each professor entry
for professor in professor_data:
    review = f"Professor {professor['name']} from {professor['department']} at {professor['college']} has a quality rating of {professor['quality_rating']} with a difficulty rating of {professor['difficulty_rating']} and a would-take-again percentage of {professor['would_take_again_percentage']}."
    
    response = client.embeddings.create(
        input=review, model="text-embedding-ada-002"  # Use an appropriate embedding model
    )
    embedding = response.data[0].embedding
    processed_data.append(
        {
            "values": embedding,
            "id": professor["name"],  # Using professor's name as the ID
            "metadata": {
                "review": review,
                "subject": professor["department"],
                "college": professor["college"],
                "stars": professor["quality_rating"],
                "difficulty": professor["difficulty_rating"],
                "would_take_again": professor["would_take_again_percentage"],
            }
        }
    )

# Insert the embeddings into the Pinecone index
upsert_response = index.upsert(
    vectors=processed_data,
    namespace="ns1",
)
print(f"Upserted count: {upsert_response['upserted_count']}")

# Print index statistics
print(index.describe_index_stats())