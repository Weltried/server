const express = require('express')
const app = express()
const morgan = require('morgan');
const httpProxy = require('http-proxy');
const apiProxy = httpProxy.createProxyServer();

const PORT = 80
const AI_MODEL_SERVER = 'http://172.17.0.4:9099'

app.use(morgan('dev'));

app.post('/', (request, response) => {
    console.log('/ requested');

    response.send("You've been requested to Weltried application !!!");

    console.log('/ sended');
})

app.post("/currentposition/", (request, response) =>{
    console.log(' /currentposition requested');

    request.url = '/predict'
    apiProxy.web(request, response, {target: AI_MODEL_SERVER});

    console.log(' /currentposition is ended');
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
