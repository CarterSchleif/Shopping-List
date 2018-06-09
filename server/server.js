var express = require('express');
var bodyParser = require('body-parser');
// var session = require('express-session');

// create the app
var app = express();
var port = process.env.PORT || 5000;

// Body parser middleware
app.use(bodyParser.json()); // parses angular data

// Serve back static files
app.use(express.static('./server/public'));


const listRouter = require('./routers/lists-router');
app.use('/lists', listRouter);


/** Listen **/
app.listen(port, function(){
    console.log("Listening on port:", port);
 });