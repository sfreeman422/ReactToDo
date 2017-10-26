const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    firstName: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    lastName: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    username: {
      type: Sequelize.TEXT,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_login: {
      type: Sequelize.DATE,
    },
    status: {
      type: Sequelize.ENUM('active', 'inactive'),
      defaultValue: 'active',
    },
  });
  return User;
};
