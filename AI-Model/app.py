import pickle
import flask
import os

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
    # features = flask.request.get_json(force=True)['features']
    # prediction = model.predict([features])
    # response = {'prediction': prediction}

    # return flask.jsonify(response)

    random_number = random.randint(0, 8)
    data = {'position': random_number}
    return data

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
