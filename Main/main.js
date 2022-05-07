const express = require('express')
const app = express()
const morgan = require('morgan');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

const PORT = 80
const AI_MODEL_SERVER = 'http://172.17.0.4:9099'

const print = require('./lib/print.js');
const pool = require('./lib/mysql_config.js');

app.use(morgan('dev'));

app.post('/', (request, response) => {
    print.requested(request);

    response.send("You've been requested to Weltried application !!!");

<<<<<<< HEAD
    print.sended(request);
=======
    console.log('/ sended');
>>>>>>> 09ccbfba89930e963146809b2260b4d45c3aab8e
})

app.post("/currentposition/", (request, response) =>{
    print.requested(request);

    request.url = '/predict'
    apiProxy.web(request, response, {target: AI_MODEL_SERVER});

    print.sended(request);
});

app.use((request, response, next) => {
  response.status(404).send('Sorry cant find that!');
});

app.use((error, request, response, next) => {
  console.error(error.stack);
  response.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Weltried app listening on port ${PORT}`)
})
