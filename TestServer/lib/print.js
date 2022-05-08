module.exports = {
    requested: function(request) {
        const dateObject = new Date();
        const date = dateObject.toDateString();
        const time = dateObject.toTimeString().substring(0, 8);

        console.log(`${date} ${time}|| ${request.ip} requested to ${request.path}`);
    },
    sended: function(request) {
        const dateObject = new Date();
        const date = dateObject.toDateString();
        const time = dateObject.toTimeString().substring(0, 8);

        console.log(`${date} ${time}|| response is sended to ${request.ip} who requested to ${request.path}`);
    }
};
