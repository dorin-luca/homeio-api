const Model = require('./model');

class TaskStatusModel extends Model {
  constructor(id, name, weight, urgencyType) {
    super(id);

    this.name = name;
    this.weight = weight;
    this.urgencyType = urgencyType;
  }
}

module.exports = TaskStatusModel;
