module.exports = function (app) {
    var users =
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
        ];

    app.route('/api/users')
        .get(function (req, res) {
            res.json(users);
        })
        .post(function (req, res) {
            console.log("Adding user ...", user);
            var user = req.body;
            users.push(user);
        })
}
