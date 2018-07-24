// SERVER.JS spins up the server

var app = require('./app');
var port = process.env.PORT || 5601;

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});