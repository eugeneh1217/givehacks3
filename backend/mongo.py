import os

import pymongo
from dotenv import load_dotenv

load_dotenv()


client = pymongo.MongoClient(f"mongodb+srv://{os.environ['TEST_USERNAME']}:{os.environ['TEST_PASSWORD']}@cluster0.6emgq5g.mongodb.net/?retryWrites=true&w=majority")
db = client.test
