'use strict';

// 2. Add required modules for the authentication routes
//    and middleware.
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// This is a custom file containing enums of useful HTTP status codes
// for easier readability. It it not part of the tutorial.
var httpStatus = require('../httpStatus');

// 2.1 Add dependencies on JSONWebToken (NodeJS implementation
//     of JWT), bCryptJS (a password hashing module), and the
//     config.js file from earlier.
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended : true }));

var User = require('../user/User');



// Register route
// 3. This is the route used to register a new user.
router.post('/register', function(request, response){

    // This try/catch is my own addition. It is not part of the tutorial.
    try{
        // 3.1 hashSync takes the password to hash, plus a salt length.
        var hashedPassword = bcrypt.hashSync(request.body.password, 8);
    } catch(IllegalArgumentsException){
        response.status().send();
    }
    

});

module.exports = router;