const express = require('express')
const app = express()
const PORT = 8080

app.post('/', (request, response) => {
    console.log('/ requested')
    response.send("You've been requested to Weltried test server.")
    console.log('/ sended')
})

app.post('/userinformation', (request, response) => {
    console.log('/userinformation requested')

    user = [{
        phone_number: '010-2672-3889',
        height: 167,
        weight: 74
    }, {
        phone_number: '010-1234-5678',
        height: 180,
        weight: 77
    }, {
        phone_number: '010-9876-5432',
        height: 153,
        weight: 50
    }]

    random_number = Math.floor(Math.random() * 3)

    response.send(user[random_number])
    console.log('/userinformation sended')
})


app.post('/currentposition', (request, response) => {
    console.log('/currentposition requested');

    random_number = Math.floor(Math.random() * 9 + 1)

    response.send(random_number.toString())
    console.log('/currentposition sended')
})

app.listen(PORT, () => {
    console.log(`Weltried test app listening on port ${PORT}`)
})
