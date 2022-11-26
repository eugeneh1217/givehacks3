import pymongo

client = pymongo.MongoClient("mongodb+srv://test:test@cluster0.6emgq5g.mongodb.net/?retryWrites=true&w=majority")
db = client.test
