// APP.JS contains basic configuration

var express = require('express');
var app = express();
var db = require('./db');

var auth = require('./auth/AuthController');
app.use('/auth', auth);

var UserController = require('./user/UserController');
app.use('/users', UserController);

module.exports = app;