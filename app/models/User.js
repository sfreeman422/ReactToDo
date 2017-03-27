var bcrypt = require('bcrypt-nodejs');

var userSchema = Sequelize.define('user',{
	local:{
		email: {
			type: Sequelize.STRING
		},
		password: {
			type: Sequelize.STRING
		}
	},
	facebook: {
		id: {
			type: Sequelize.STRING
		},
		token: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		},
		name: {
			type: Sequelize.STRING
		}
	},
	google: {
		id: {
			type: Sequelize.STRING
		},
		token: {
			type: Sequelize.STRING
		},
		email: {
			type: Sequelize.STRING
		},
		name: {
			type: Sequelize.STRING
		}
	}
});