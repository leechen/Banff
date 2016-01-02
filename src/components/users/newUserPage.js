'use strict';

var React = require('react');
var UserApi = require('../../api/userApi');

var NewUserPage = React.createClass({
//     getInitialState: function () {
//         return {
//             users: []
//         };
//     },
// 
//     componentDidMount: function () {
//         if (this.isMounted()) {
//             var that = this;
//             
//             $.getJSON('http://localhost:9000/api/users')
//                 .done(function (data) {
//                     that.setState({ users: data });
//                 })
//                 .fail(function () {
//                     $('body').append('<p>Oh no, something went wrong!</p>');
//                 });
//         }
//     },

    render: function () {
        return (
            <div>
            <h1>Creating new user < /h1>
            </div>
		);
	}
});

module.exports = NewUserPage;
