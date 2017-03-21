// =============================================================
// DEPENDENCIES
// =============================================================
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


// =============================================================
// GLOBAL VARIABLES
// =============================================================
var PORT = process.env.PORT || 3000;
var app = express();

// =============================================================
// USE A STATIC ADDRESS FOR LOCAL PACKAGES
// =============================================================
app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// =============================================================
// ROUTES
// =============================================================
var routes = require('./controller/controller.js');
app.use('/', routes);

// =============================================================
// LISTENING
// =============================================================
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
