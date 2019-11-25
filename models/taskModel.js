class TaskModel {
	constructor(id, name, description, dueDate, assignedTo, assignedBy) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.duteDate = dueDate;
		this.assignedTo = assignedTo;
		this.assignedBy = assignedBy;
	}
}

module.exports = TaskModel;