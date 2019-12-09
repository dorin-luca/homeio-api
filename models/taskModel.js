const Model = require('./model');

class TaskModel extends Model {
	constructor(id, name, description, dueDate, assignedTo, assignedBy) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.dueDate = dueDate;
		this.assignedTo = assignedTo;
		this.assignedBy = assignedBy;
	}
}

module.exports = TaskModel;