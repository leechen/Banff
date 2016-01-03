module.exports = function (app) {
    var users =
        [
            {
                id: '1',
                firstName: 'Kevin',
                lastName: "Utah",
                email: "UtahKevin@a.com"
            },
            {
                id: '2',
                firstName: 'Dan',
                lastName: "Wild",
                email: "dan@a.com"
            },
            {
                id: '3',
                firstName: 'Jose',
                lastName: "Desert",
                email: "Jose@a.com"
            },
            {
                id: '4',
                firstName: 'Pacific',
                lastName: "Sky",
                email: "pacific@a.com"
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
