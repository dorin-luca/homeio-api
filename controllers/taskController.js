const Task = require('./../database/tasks/tasksSchema');
const mapper = require('./../helpers/mapper');
const TaskModel = require('../models/taskModel');

exports.getAllTasks = async (req, res) => {
  try {
    let tasks = [];

    await Task.find((err, result) => {
      tasks = mapper.mapDataToModel(
        result,
        value =>
          new TaskModel(
            value._id,
            value.name,
            value.description,
            value.dueDate,
            value.assignedTo,
            value.assignedBy,
          ),
      );
      return tasks;
    });

    res.status(200).json({
      status: 'success',
      results: tasks.length,
      data: tasks,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: 'Could not get tasks',
      error: err,
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: task,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: 'Could not get task',
      error: err,
    });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(200).json({
      status: 'success',
      data: task.id,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: 'Could not create task',
      error: err,
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      status: 'success',
      data: task.id,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: 'Could not update task',
      error: err,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      message: 'Could not delete task',
      error: err,
    });
  }
};
