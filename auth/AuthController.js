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
    var hashedPassword;
    try{
        // 3.1 hashSync takes the password to hash, plus a salt length.
        hashedPassword = bcrypt.hashSync(request.body.password, 8);

    } catch(IllegalArgumentsException){
        response
        .status(httpStatus.client.BAD_REQUEST)
        .send("BAD REQUEST: Server recieved a password which was null or undefined.");
    }

    // 3.2 Use our mongodb model to attempt to create a new user. Create function
    //     takes an object with the properties of the new user and a callback
    //     that takes an error and the new user (if one was created).
    User.create({
        name: request.body.name,
        email: request.body.email,
        password: hashedPassword
    },
    function(err, user){
        if(err){
            response
            .status(httpStatus.server.INTERNAL_SERVER_ERROR)
            .send("Unable to add new user to the database.");
        
        } else {
            
            // 3.3 If an error hasn't been generated, the user is added
            //     and a token is generated and sent to that user.
            var token = jwt.sign(
                {id: user._id},
                config.secret,
                {
                    expiresIn: 60*60*1000 // One hour
                }
            );

            response
            .status(httpStatus.success.OK)
            .send({
                auth: true,
                token: token
            });

        }
    });



    router.get('/me', function(request, response){
        
    });
    

});




module.exports = router;