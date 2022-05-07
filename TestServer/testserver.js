const express = require('express')
const app = express()
const PORT = 8080

function print_requested(request) {
    console.log(`${request.ip} requested to ${request.path}`);
}
function print_sended(request) {
    console.log(`response is sended to ${request.ip} who requested to ${request.path}`);
}

app.post('/', (request, response) => {
    print_requested(request);
    response.send("You've been requested to Weltried test server.")
    print_sended(request);
})

app.post('/currentposition', (request, response) => {
    print_requested(request);

    random_number = Math.floor(Math.random() * 9)
    data = {
        position: random_number,
    }

    response.send(data);
    print_sended(request);
})

app.listen(PORT, () => {
    console.log(`Weltried test app listening on port ${PORT}`)
})
