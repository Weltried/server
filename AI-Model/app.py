import pickle
import flask
import os
import MySQLdb
from flask import request
import mysql_config as database_account

# temp
import random

app = flask.Flask(__name__)
port = int(os.getenv("PORT", 9099))

# model = pickle.load(open("model.pkl", "rb"))

@app.route('/', methods=['POST'])
def root():
    return "You've been requested to Weltried AI-Model Server."

@app.route('/predict', methods=['POST'])
def predict():
    ### Model Prediction (below 3 lines)
    # features = flask.request.get_json(force=True)['features']
    # prediction = model.predict([features])
    # response = {'prediction': prediction}

    ### Create randon number instead of model prediction.
    random_number = random.randint(0, 8)
    data = {'position': random_number}


    """try:
        connect = MySQLdb.connect(database_account.host, database_account.id, database_account.password, database_account.database)

        phone_number    = request.json['phone_number']
        date            = request.json['date']
        time            = request.json['time']
        position        = random_number

        cursor = connect.cursor()
        cursor.execute("insert into posture values (%s, %s, %s, %s)", (phone_number, date, time, position))

        connect.commit()

        connect.close()
    except MySQLdb.Error as err:
        print(err, flush=True)"""


    return flask.json.jsonify(data)

    # return flask.jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
