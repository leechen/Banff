"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var App = require('./components/app');
var LandingPage = require('./components/dashboard/landingPage.jsx')
var TripPage = require('./components/dashboard/tripPage.jsx')
var UserPage = require('./components/users/userPage.jsx')
var NewUserPage = require('./components/users/newUserPage.jsx')
var NotFoundPage = require('./components/notFoundPage.jsx')

var Routes =  (
    <Route path="/" component={App}>
        <IndexRoute component={LandingPage}/>
        <Route path="trip" component={TripPage}/>
        <Route path="user" component={UserPage}/>
        <Route path="newUser" component={NewUserPage}/>
        <Route path="*" component={NotFoundPage}/>
    </Route>
);

module.exports = Routes;