var Express = require('express');

var Server = Express();

var port = process.env.PORT || 3000;

Server.listen(port, function(err){
    console.log('server running on port ' + port);
});
