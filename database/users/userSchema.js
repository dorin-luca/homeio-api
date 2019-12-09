const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema( {
	username: {
		type: String,
		required: [true, 'Username is required'],
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
		minlength: 8,
		select: false
	}, 
	passwordConfirm: {
		type: String,
		required: [true, 'Confirm Password please'],
		validate: {
			validator: function(el) {
				return el === this.passwordConfirm;
			}, 
			message: 'Passwords do not match'
		}, 
		select: false
	}
});

userSchema.methods.isPasswordValid = async function(candidatePasswor, userPassword) {
	return bcrypt.compare(candidatePasswor, userPassword);
}

userSchema.pre('save', async function(next) {
	if(!this.isModified('password')) return;

	this.password = await bcrypt.hash(this.password, 12);
	this.passwordConfirm = undefined;

	next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;