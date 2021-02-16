// INCLUDES
var express = require('express');
var lib = require('./lib/lib');

// SET UP APP
var app = express();
app.listen('3000');

// SET UP LOCALS
app.locals.apiResponse = {'message':''}
app.locals.setResponseMessage = (message) => {
    app.locals.apiResponse.message = message;
}

// CONFIGURE ENDPOINTS
app.get('/', function(req, res, next) {
    app.locals.setResponseMessage(lib.functionName())
    next();
})

// GENERIC RESPONSE OBJECT
app.use(function(req, res, next) {
    res.json(app.locals.apiResponse);
})

// ERROR OBJECT
app.use(function (err, req, res, next) {
    app.locals.setResponseMessage('error')
    console.error(err);
    res.status(500).json(app.locals.apiResponse);
})