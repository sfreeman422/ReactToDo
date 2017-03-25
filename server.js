const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const Sequelize = require('sequelize');

//Instantiate express and port. 
const app = express();
const PORT = process.env.PORT || 3000; 

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