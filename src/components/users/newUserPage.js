'use strict';

var React = require('react');
var UserForm = require('./userForm');

var NewUserPage = React.createClass({
    getInitialState: function () {
        return {
            user: {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            },
        };
    },
    
	setUserState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.user[field] = value;
		return this.setState({user: this.state.user});
	},

    render: function () {
        return (
            < UserForm 
                user={this.state.user}
                onChange={this.setUserState}
             />
		);
	}
});

module.exports = NewUserPage;
