const express = require('express');
const taskStatusController = require('./../controllers/taskStatusController');

const router = express();

router
  .route('/')
  .get(taskStatusController.getAllTaskStatuses)
  .post(taskStatusController.createTaskStatus);

router
  .route('/:id')
  .get(taskStatusController.getTaskStatus)
  .patch(taskStatusController.updateTaskStatus)
  .delete(taskStatusController.deleteTaskStatus);

module.exports = router;
