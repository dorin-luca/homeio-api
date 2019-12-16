const TaskStatus = require('./../database/tasks/taskStatusSchema');
const TaskStatusModel = require('./../models/taskStatusModel');
const mapper = require('./../helpers/mapper');

exports.getAllTaskStatuses = async function(req, res) {
  try {
    let taskStatuses = await TaskStatus.find();

    taskStatuses = mapper.mapDataToModel(taskStatuses, value => {
      return new TaskStatusModel(
        value._id,
        value.name,
        value.weight,
        value.urgency,
      );
    });

    res.status(200).json({
      results: taskStatuses.length,
      data: taskStatuses,
    });
  } catch (err) {
    res.status(500).json({
      message: 'Could not get all task statuses',
      error: err,
    });
  }
};

exports.getTaskStatus = async function(req, res) {
  try {
    const taskStatus = TaskStatus.findById(req.params.id);

    res.status(200).json({
      data: new TaskStatusModel(
        taskStatus.id,
        taskStatus.name,
        taskStatus.weight,
        taskStatus.urgency,
      ),
    });
  } catch (err) {
    res.status(500).json({
      message: 'Could not get Task Status',
      error: err,
    });
  }
};

exports.createTaskStatus = async function(req, res) {
  try {
    const newStatus = await TaskStatus.create(req.body);

    res.status(200).json({
      data: newStatus._id,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Could not create Status',
      error: error,
    });
  }
};

exports.updateTaskStatus = async function(req, res) {
  try {
    await TaskStatus.findByIdAndUpdate(req.params.id, req.body);

    res.status(200);
  } catch (err) {
    res.status(500).json({
      message: 'Could not update task status',
      error: err,
    });
  }
};

exports.deleteTaskStatus = async function(req, res) {
  try {
    await TaskStatus.findByIdAndDelete(req.params.id);

    res.status(200);
  } catch (err) {
    res.status(500).json({
      message: 'Could not delete task status',
      error: err,
    });
  }
};
