const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required'],
		trim: true
	},
	description: {
		type: String,
		required: [true, 'Description is required']
	},
	dueDate: {
		type: Date,
		required: [true, 'Due date is required']
	},
	sticker: String,
	assignedTo: {
		type: Number,
		required: [true, 'Task must be assigned to']
	},
	assignedBy: {
		type: Number,
		required: [true, 'Task must have assigner']
	},
	createdAt: {
		type: Date,
		default: Date.now(),
		required: true
	},
	createdBy: {
		type: Number,
		required: true
	},
	updatedAt: {
		type: Date,
		default: Date.now(),
	},
	updatedBy: {
		type: Number,
		required: true
	},
	setReminder: {
		type: Boolean,
		default: false
	}
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;