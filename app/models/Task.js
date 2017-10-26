
module.exports = (sequelize, Sequelize) => {
  const Task = sequelize.define('task', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    taskName: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    dueDate: {
      type: Sequelize.DATE,
    },
    owner: {
      type: Sequelize.INTEGER,
    },
    completed: {
      type: Sequelize.BOOLEAN,
    },
  });
  return Task;
};
