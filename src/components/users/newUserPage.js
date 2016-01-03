'use strict';

var React = require('react');
var UserForm = require('./userForm');
var toastr = require('toastr');

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

		// if (this.state.user.id) {
		// 	UserActions.updateUser(this.state.user);
		// } else {
		// 	UserActions.createUser(this.state.user);
		// }
		
		this.setState({dirty: false});
		toastr.success('User saved.');
		//this.transitionTo('users');
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
