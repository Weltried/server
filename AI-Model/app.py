import flask
import os
import joblib

app = flask.Flask(__name__)
port = int(os.getenv("PORT", 9099))

model = joblib.load('./ai_model.pkl')

@app.route('/', methods=['POST'])
def root():
    return "You've been requested to Weltried AI-Model Server."

@app.route('/predict', methods=['POST'])
def predict():
    data = flask.request.get_json(force=True)
    x = data['x']
    y = data['y']
    z = data['z']
    features = [x, y, z]

    prediction = model.predict([features])[0]

    response = {'position': int(prediction)}
    return flask.jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
