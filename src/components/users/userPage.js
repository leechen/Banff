'use strict';

var React = require('react');
var UserApi = require('../../api/userApi');
var UserList = require('./userList');
var Helper = require('../../helpers/restHelper');
var config = require('../../../config');
var toastr = require('toastr');

var UserPage = React.createClass({
    getInitialState: function () {
        return {
            users: []
        };
    },

    componentDidMount: function () {
        if (this.isMounted()) {
            var that = this;
            
            $.getJSON(config.apiUrl + 'users')
                .done(function (data) {
                    that.setState({ users: data });
                })
                .fail(function () {
                    toastr.fail('Oh no, something went wrong!');
                });
        }
    },

    render: function () {
        return (
            <div>
            <h1>User < /h1>
            < UserList users= { this.state.users } />
            </div>
		);
	}
});

module.exports = UserPage;
