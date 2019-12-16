const Model = require('./model');

class TaskStatusModel extends Model {
  constructor(id, name, weight, priority) {
    super(id);
    this.name = name;
    this.weight = weight;
    this.priority = priority;
  }
}

module.exports = TaskStatusModel;
