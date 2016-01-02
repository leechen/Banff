var port = process.env.PORT || 3000;

var Express = require('express');
var Server = Express();
var ApiRouter = Express.Router();

Server.use('/api', ApiRouter);

Server.get('/', function (req, res) {
    res.send('welcome to RV API!');
});

Server.listen(port, function (err) {
    console.log('server running on port ' + port);
});

require('./users.js')(Server);