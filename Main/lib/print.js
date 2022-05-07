module.exports = {
    requested: function(request) {
        console.log(`${request.ip} requested to ${request.path}`);
    },
    sended: function(request) {
        console.log(`response is sended to ${request.ip} who requested to ${request.path}`);
    }
};
