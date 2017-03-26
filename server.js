var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var Sequelize = require('sequelize');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var db = require('./config/database.js');

var sequelize = new Sequelize(db.database, db.user, db.password, {
	host: db.hostname,
	dialect: db.dialect
});

//Connect to our MySQL Database. 
sequelize
	.authenticate()
	.then(function(err){
		console.log("Connected to DB. ")
	})
	.catch(function(err){
		console.log("Unable to connect: "+err);
	})

//Instantiate express and port. 
var app = express();
var PORT = process.env.PORT || 3000; 

app.use(logger('dev'));
app.use(bodyParser());
app.use(express.static('./public'));
app.use(methodOverride('_method'));

//Initial route to load the page for the Timer, weather information, etc. 
app.get('/', function(req, res){
	res.sendFile('./public/index.html');
});
//Listen to the port.
app.listen(PORT, function(){
	console.log('listening on port '+PORT);
});