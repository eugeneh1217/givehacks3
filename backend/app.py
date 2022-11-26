import os

from flask import Flask, request
import pymongo

app = Flask(__name__)

client = pymongo.MongoClient(
    f"mongodb+srv://{os.environ['TEST_USERNAME']}:{os.environ['TEST_PASSWORD']}"
    "@cluster0.6emgq5g.mongodb.net/?retryWrites=true&w=majority")

db = client["database"]
patients = db["patients"]

@app.route('/')
def home():
    return "Hello World"

@app.route('/create_patient', methods=['POST'])
def create_patient():
    data = request.json
    if data.get("email") is None:
        return "email_required", 422
    result = patients.find_one({"email": data["email"]})
    if result is not None:
        return "account_exists", 422
    print(result)
    ret = patients.insert_one({
        "email": data["email"]
    })
    return "success", 200

if __name__ == "__main__":
	app.run(debug=True)
