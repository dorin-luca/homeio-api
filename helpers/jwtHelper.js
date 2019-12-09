const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');

exports.signToken = id => {
	jwt.sign({id}, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRESS
	});
}