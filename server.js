const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const Sequelize = require('sequelize');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const db = require('./config/database.js');

const sequelize = new Sequelize(db.database, db.user, db.password, {
  host: db.hostname,
  dialect: db.dialect,
});

// Connect to our MySQL Database. 
sequelize
  .authenticate()
  .then((err) => {
    console.log('Connected to DB. ');
    if (err) {
      console.log(`Unable to connect! \n Error: ${err}`);
    }
  });
const User = sequelize.define('user', {
  userName: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
});

User.sync({ force: true });

const Task = sequelize.define('task', {
  taskName: {
    type: Sequelize.STRING,
  },
  dueDate: {
    type: Sequelize.DATE,
  },
  taskOwner: {
    type: Sequelize.BIGINT,
  },
  timeSpent: {
    type: Sequelize.BIGINT,
  },
});
Task.sync({ force: true });
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
// Initial route to load the page.  
app.get('/', (req, res) => {
  res.sendFile('../../public/index.html');
});

// Route to get all tasks for a specific user. 
app.get('/api/tasks', (req, res) => {
  const tasks = ['Do a thing', 'Do another thing', 'Do some more things'];
  console.log(req.body);
  res.json(tasks);
});

// Post route for the entry of tasks
app.post('/api/tasks', (req, res) => {
  console.log(req.body);
  Task.create({
    taskName: req.body.taskName,
    taskOwner: req.body.taskOwner,
    dueDate: req.body.dueDate,
    timeSpent: req.body.timeSpent,
  }).then(task => console.log(task));
});

// Put route for update of tasks.
app.put('/api/tasks', (req, res) => {
  console.log(req.body);
  res.send(200, 'Task successfully updated.');
});

// Delete route for deletion of tasks. 
app.delete('/api/tasks', (req, res) => {
  console.log(req.body);
  res.end(202, `Task ${req.body.task.is} successfully removed.`);
});

// Listen to the port.
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
