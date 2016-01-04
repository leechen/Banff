'use strict';

var React = require('react');
var UserApi = require('../../api/userApi');
var TextInput = require('../common/textInput');

var UserForm = React.createClass({
    	propTypes: {
		user:	React.PropTypes.object.isRequired,
		onSave:	React.PropTypes.func.isRequired,
		onChange: React.PropTypes.func.isRequired,
		errors: React.PropTypes.object
	},
    
    render: function () {
        return (
			<form>
				<h1>Welcome </h1>

				<TextInput
					name="id"
					label="Id"
					value={this.props.user.id}
					onChange={this.props.onChange}
                    error={this.props.errors.id} />
                <TextInput
					name="firstName"
					label="First Name"
					value={this.props.user.firstName}
					onChange={this.props.onChange}
                    error={this.props.errors.firstName} />

				<TextInput
					name="lastName"
					label="Last Name"
					value={this.props.user.lastName}
					onChange={this.props.onChange} 
                    error={this.props.errors.lastName} />

				<TextInput
					name="email"
					label="Email"
					value={this.props.user.email}
					onChange={this.props.onChange}
                    error={this.props.errors.email}  />

				<TextInput
					name="password"
					label="Password"
					value={this.props.user.password}
					onChange={this.props.onChange}
                    error={this.props.errors.password} />
                    
				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
		);
	}
});

module.exports = UserForm;
