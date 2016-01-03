"use strict";

var Helper = require('../helpers/restHelper');
var config = require('../../config');
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(user) {
	return user.email.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var UserApi = {
    getAllUsers: function(){
        return $.getJSON(config.apiUrl + 'users');
    },

	getUserById: function(id) {
		var user = _.find(users, {id: id});
		return _clone(user);
	},
    
    saveUser: function(user) {
        // $.ajax({
        //         url:config.apiUrl + 'users',
        //         type:"POST",
        //         data:user
        //     });
        
        Helper.post(config.apiUrl + 'users', user);
	},
};

module.exports = UserApi;