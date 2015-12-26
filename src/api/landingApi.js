"use strict";

//This file is mocking a web API by hitting hard coded data.
var landings = require('./landingData').landings;
var _ = require('lodash');

//This would be performed on the server in a real app. Just stubbing in.
var _generateId = function(landing) {
	return landing.firstName.toLowerCase() + '-' + landing.lastName.toLowerCase();
};

var _clone = function(item) {
	return JSON.parse(JSON.stringify(item)); //return cloned copy so that the item is passed by value instead of by reference
};

var LandingApi = {
	getAllLandings: function() {
		return _clone(landings); 
	},

	getLandingById: function(id) {
		var landing = _.find(landings, {id: id});
		return _clone(landing);
	},
	
	saveLanding: function(landing) {
		//pretend an ajax call to web api is made here
		console.log('Pretend this just saved the landing to the DB via AJAX call...');
		
		if (landing.id) {
			var existingLandingIndex = _.indexOf(landings, _.find(landings, {id: landing.id})); 
			landings.splice(existingLandingIndex, 1, landing);
		} else {
			//Just simulating creation here.
			//The server would generate ids for new landings in a real app.
			//Cloning so copy returned is passed by value rather than by reference.
			landing.id = _generateId(landing);
			landings.push(_clone(landing));
		}

		return landing;
	},

	deleteLanding: function(id) {
		console.log('Pretend this just deleted the landing from the DB via an AJAX call...');
		_.remove(landings, { id: id});
	}
};

module.exports = LandingApi;