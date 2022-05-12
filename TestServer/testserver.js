const express = require('express')
const app = express()
const PORT = 8080

const print = require('./lib/print.js');

app.post('/user', (request, response) => {
    print.requested(request);

    data = {"statusCode": 1};
    response.send(data);

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

app.post('/measureresult', (request, response) => {
    print.requested(request);

    data = [
        {
            phone_number: '01023456789',
            date: '20220512',
            time: '165322',
            position: 2,
        },
        {
            phone_number: '01023456789',
            date: '20220512',
            time: '165324',
            position: 1,
        },
        {
            phone_number: '01023456789',
            date: '20220512',
            time: '165326',
            position: 2,
        },
    ];

    response.send(data);

    print.requested(request);
});

app.post('/statistic', (request, response) => {
    print.requested(request);

    data = [
        {
            phone_number: '01012345678',
            date: '20220512',
            time: '073733',
            position: 0,
        },
        {
            phone_number: '01012345678',
            date: '20220512',
            time: '073735',
            position: 0,
        },
        {
            phone_number: '01012345678',
            date: '20220512',
            time: '073737',
            position: 1
        },
    ];
    response.send(data);

    print.sended(request);
});

app.listen(PORT, () => {
    console.log(`Weltried test app listening on port ${PORT}`)
})
