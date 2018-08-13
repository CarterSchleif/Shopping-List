var express = require('express');
var bodyParser = require('body-parser');
// var session = require('express-session');

// kick off the mongoose database connection
require('./modules/database');

// create the app
var app = express();
var port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json()); // parses angular data

// Serve back static files
app.use(express.static('./server/public'));

// Routers
const listsRouter = require('./routers/lists-router');
app.use('/lists', listsRouter);


/** Listen **/
app.listen(port, function(){
    console.log("Listening on port:", port);
 });