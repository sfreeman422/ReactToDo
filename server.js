var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var Sequelize = require('sequelize');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var db = require('./config/database.js');
var routes = require('./app/routes/routes.js');
var User = require('./app/models/User.js');
var Task = require('./app/models/Task.js');
var sequelize = new Sequelize(db.database, db.user, db.password, {
	host: db.hostname,
	dialect: db.dialect
});

//Imports the models into our sequelize instance. 
User(sequelize, Sequelize);
Task(sequelize, Sequelize);
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
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(methodOverride('_method'));
app.use(session({secret: 'pomotodo'}));
app.use(passport.initialize());
app.use(passport.session());
routes(app, passport);//Load our auth routes into express/passport.  

//Listen to the port.
app.listen(PORT, function(){
	console.log('listening on port '+PORT);
});