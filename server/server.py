from flask import Flask, render_template, jsonify, request
import pandas as pd
import numpy as np
import json
from pymongo import MongoClient
from pymongo import ReturnDocument
from bson.objectid import ObjectId
import os
from flask import send_from_directory


app = Flask(__name__, static_folder="../static")

@app.route("/")
def index():
    return render_template("index.html")

@app.errorhandler(404)
def page_not_found(e):
    return render_template('index.html')

@app.route("/images/<path:path>")
def get_public_file(path):
    full_path = os.path.join('../static/images/', path)
    head, tail = os.path.split(full_path)
    return send_from_directory(head, tail)
      
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8000, debug=True)
