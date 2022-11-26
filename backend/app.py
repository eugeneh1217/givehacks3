import os

from flask import Flask
import pymongo

app = Flask(__name__)

client = pymongo.MongoClient(
    f"mongodb+srv://{os.environ['TEST_USERNAME']}:{os.environ['TEST_PASSWORD']}"
    "@cluster0.6emgq5g.mongodb.net/?retryWrites=true&w=majority")

@app.route('/')
def home():
    return "Hello World"

if __name__ == "__main__":
	app.run(debug=True)
