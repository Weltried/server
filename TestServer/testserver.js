const express = require('express')
const app = express()
const PORT = 8080

app.post('/', (request, response) => {
    console.log('/ requested')
    response.send("You've been requested to Weltried test server.")
    console.log('/ sended')
})

app.post('/currentposition', (request, response) => {
    console.log('/currentposition requested');

    random_number = Math.floor(Math.random() * 9)
    data = {
        position: random_number,
    }

    response.send(data);
    console.log('/currentposition sended')
})

app.listen(PORT, () => {
    console.log(`Weltried test app listening on port ${PORT}`)
})
