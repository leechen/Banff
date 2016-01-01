var Express = require('express');

var Server = Express();

var port = process.env.PORT || 3000;

var apiRouter = Express.Router();

apiRouter.route('/users')
    .get(function (req, res) {
        var trips =
            [
                {
                    id: '1',
                    name: 'Utah Kevin'
                },
                {
                    id: '2',
                    name: 'Wild Dan'
                },
                {
                    id: '3',
                    name: 'Desert Jose',
                },
                {
                    id: '4',
                    name: 'Sky Pacific'
                }
            ]
        res.json(trips);
    });

Server.use('/api', apiRouter);

Server.get('/', function (req, res) {
    res.send('welcome to RV API!');
})

Server.listen(port, function (err) {
    console.log('server running on port ' + port);
});
