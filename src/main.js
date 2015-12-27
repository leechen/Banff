"use strict";

var React = require('React');
var ReactDOM = require('react-DOM');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Routes = require('./routes');

ReactDOM.render(<Router>{Routes}</Router>, document.getElementById('app'));

