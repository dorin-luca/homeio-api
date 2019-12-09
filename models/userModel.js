const Model = require('./model');

class UserModel extends Model {
	constructor(id) {
		this.id = id;
	}
}

module.exports = UserModel;