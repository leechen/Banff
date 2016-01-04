'use strict';

var React = require('react');
var UserForm = require('./userForm');
var toastr = require('toastr');
var config = require('../../../config');

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
            errors: {},
			dirty: false
        };
    },
    
	setUserState: function(event) {
		this.setState({dirty: true});
		var field = event.target.name;
		var value = event.target.value;
		this.state.user[field] = value;
		return this.setState({user: this.state.user});
	},
    
	saveUser: function(event) {
		event.preventDefault();

		// if (!this.userFormIsValid()) {
		// 	return;
		// }    
        
        var user = this.state.user;
        var that = this;
        
        $.ajax({
            url: config.apiUrl + "users",
            type: 'post',
            dataType: 'json',
            success: function (data) {
                that.setState({dirty: false});
                toastr.success('User saved.');
            },
            data: user
        });
	},
    
    render: function () {
        return (
            < UserForm 
                user={this.state.user}
                onChange={this.setUserState}
                onSave={this.saveUser}
				errors={this.state.errors}
             />
		);
	}
});

module.exports = NewUserPage;
