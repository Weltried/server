const express = require('express')
const app = express()
const httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer({});

const PORT = 80
const AI_MODEL_SERVER = 'http://172.17.0.4:9099'

const print = require('./lib/print.js');
const pool = require('./lib/mysql_config.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/***
 * Client Story 1
 */
app.post('/user', (request, response) => {
    print.requested(request);

    const phone_number  = request.body.phone_number;
    const height        = request.body.height;
    const weight        = request.body.weight;

    pool.query_user(phone_number, height, weight, (status_code) => {
        if(status_code)
            response.send({"statusCode": 1});
        else
            response.send({"statusCode": 0});
    });

    print.sended(request);
})

/***
 * Client Story 2
 */
app.post("/currentposition", (request, response) =>{
    print.requested(request);

    var phone_number  = request.body.phone_number;
    var date          = request.body.date;
    var time          = request.body.time;

    request.url = '/predict';

    apiProxy.web(request, response, {
        target: AI_MODEL_SERVER,
        selfHandleResponse: true
    });

    apiProxy.on('proxyRes', (proxyRes, req, res) => {
        var proxy_response_body = [];

        proxyRes.on('data', (d) => {
            proxy_response_body.push(d);
        });

        proxyRes.on('end', () => {
            proxy_response_body = Buffer.concat(proxy_response_body).toString();
            proxy_response_body = JSON.parse(proxy_response_body);
            // error emit block
            /*const position = proxy_response_body.position;

            pool.query_currentposition(phone_number, date, time, position, (error) => {
                if(error)
                    res.end();
                else
                    res.send(proxy_response_body);
            });*/

            res.send(proxy_response_body);
        });

    });

    print.sended(request);
});

/***
 * Client Story 3
 */
app.post('/measureresult', (request, response) => {
    print.requested(request);

    const phone_number  = request.body.phone_number;
    const start_time    = request.body.start_time;
    const end_time      = request.body.end_time;

    pool.query_measureresult(phone_number, start_time, end_time, (error, results) => {
        if(error)
            response.send({"statusCode": 0});
        else
            response.send(results);
    });

    print.sended(request);
});

/***
 * Client Story 4
 */
app.post('/statistic', (request, response) => {
    print.requested(request);

    const phone_number  = request.body.phone_number;
    const date          = request.body.date;

    pool.query_statistic(phone_number, date, (error, results) => {
        if(error)
            response.send({"statusCode": 0});
        else
            response.send(results);
    });

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
