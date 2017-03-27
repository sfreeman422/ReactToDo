
module.exports = function(sequelize, Sequelize){
	var Task = sequelize.define('task', {
		id: {
			autoIncrement: true,
			primaryKey: true,
			type: Sequelize.INTEGER
		},
		taskName: {
			type: Sequelize.STRING,
			notEmpty: true
		},
		dueDate: {
			type: Sequelize.DATE
		},
		owner: {
			type: Sequelize.INTEGER
		},
		pomodoro:{
			type: Sequelize.BOOLEAN
		}
	});
	return Task; 
}
