const DOMAIN = '10.177.236.231'
const AI_MODEL_PORT = 9099
const http = require('http');

const data = JSON.stringify({
    boo: 'foo',
});

const options = {
         hostname: DOMAIN,
         port: AI_MODEL_PORT,
         path: '/predict',
         method: 'POST',
         headers: {
             'Content-Type': 'application/json',
             'Content-Length': data.length,
         },
};

let result = '';
const req = http.request(options, res => {
         res.on('data', d => {
             result += d;
            //process.stdout.write(d);
         });

    res.on('end', () => {
        console.log(result);
    });
});

req.on('error', error => {
    console.error(error);
});

//req.write(data);
req.end();
