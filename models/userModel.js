const Model = require('./model');

class UserModel extends Model {
  constructor(id, name, email) {
    super(id);
    this.name = name;
    this.email = email;
  }
}

module.exports = UserModel;
