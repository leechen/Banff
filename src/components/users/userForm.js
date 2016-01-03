'use strict';

var React = require('react');
var UserApi = require('../../api/userApi');

var UserForm = React.createClass({
    render: function () {
        return (
			<form>
				<h1>Welcome </h1>
				<input
					placeholder="first name"
					label="First Name"
					value={this.props.user.firstName}
					onChange={this.props.onChange} />

				<input
					placeholder="last name"
					label="Last Name"
					value={this.props.user.lastName}
					onChange={this.props.onChange} />

				<input
					placeholder="email"
					label="Email"
					value={this.props.user.email}
					onChange={this.props.onChange} />

				<input
					placeholder="password"
					label="Password"
					value={this.props.user.password}
					onChange={this.props.onChange}/>
                    
				<input type="submit" value="Save" className="btn btn-default" onClick={this.props.onSave} />
			</form>
		);
	}
});

module.exports = UserForm;
