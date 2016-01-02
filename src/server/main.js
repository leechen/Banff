var port = process.env.PORT || 3000;

var Express = require('express');
var Parser = require('body-parser');
var Server = Express();
var ApiRouter = Express.Router();

Server.use('/api', ApiRouter);
Server.use(Parser.json());
Server.use(Parser.urlencoded({extended:false}));

ApiRouter.use(function(req, res, next) {  
    res.header('Access-Control-Allow-Origin', 'http://localhost:9005');
    next();
});

Server.get('/', function (req, res) {
    res.send('welcome to RV API!');
});

Server.listen(port, function (err) {
    console.log('server running on port ' + port);
});

require('./users.js')(Server);