const express = require('express')
const app = express()
const PORT = 8080

const print = require('./lib/print.js');

app.post('/', (request, response) => {
    print.requested(request);
    response.send("You've been requested to Weltried test server.")
    print.sended(request);
})

app.post('/currentposition', (request, response) => {
    print.requested(request);

    random_number = Math.floor(Math.random() * 9)
    data = {
        position: random_number,
    }

    response.send(data);
    print.sended(request);
})

app.listen(PORT, () => {
    console.log(`Weltried test app listening on port ${PORT}`)
})
