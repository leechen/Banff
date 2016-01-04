'use strict';

var React = require('react');
var UserForm = require('./userForm.jsx');
var Router = require('react-router');
var toastr = require('toastr');
var config = require('../../../config');


var NewUserPage = React.createClass({
    mixins: [
        Router.Navigation
    ],
    
    statics: {
        willTransitionFrom: function (transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },
    
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
    
    userFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {};
        
        if (this.state.user.firstName.length < 3){
            this.state.errors.firstName = 'First name must be at least 3 charactoers';
            formIsValid = false;
        }
        
        this.setState({errors: this.state.errors});
		return formIsValid;
    },
    
	saveUser: function(event) {
		event.preventDefault();

		if (!this.userFormIsValid()) {
			return;
		}    
        
        var user = this.state.user;
        var that = this;
        
        $.ajax({
            url: config.apiUrl + "users",
            data: user,
            type: 'post',
            dataType: 'json',
            success: function(data) { 
                that.setState({dirty: false});
                toastr.success('User saved.');
                that.transitionTo('users')
            },
            failure: function(errMsg) { alert(errMsg); }
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
