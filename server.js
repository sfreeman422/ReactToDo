const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const Sequelize = require('sequelize');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const db = require('./config/database.js');
const routes = require('./app/routes/routes.js');
const User = require('./app/models/User.js');
const Task = require('./app/models/Task.js');

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.hostname,
  dialect: db.dialect,
});

// Imports the models into our sequelize instance. 
User(sequelize, Sequelize);
Task(sequelize, Sequelize);
// Connect to our MySQL Database. 
sequelize
  .authenticate()
  .then((err) => {
    console.log('Connected to DB. ');
    if (err) {
      console.log(`Unable to connect! \n Error: ${err}`);
    }
  });

// Instantiate express and port. 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('./public'));
app.use(methodOverride('_method'));
app.use(session({ secret: 'pomotodo' }));
app.use(passport.initialize());
app.use(passport.session());
routes(app, passport);// Load our auth routes into express/passport.  

// Listen to the port.
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
