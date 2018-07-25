'use strict';

// 2. Add required modules for the authentication routes
//    and middleware.
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

// 2.1 Add dependencies on JSONWebToken (NodeJS implementation
//     of JWT), bCryptJS (a password hashing module), and the
//     config.js file from earlier
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended : true }));

var User = require('../user/User');



// Register route
router.post('/register', function(request, response){

    try{
        var hashedPassword = bcrypt.hashSync(request.body.password, 8);
    } catch(IllegalArgumentsException){
        
    }
    response.send(hashedPassword);

});

module.exports = router;