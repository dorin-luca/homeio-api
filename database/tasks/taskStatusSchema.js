const mongoose = require('mongoose');

const taskStatusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  urgency: {
    type: Number,
    required: true
  }
});

const TaskStatus = mongoose.model('TaskStatus', taskStatusSchema);
module.exports = TaskStatus;
