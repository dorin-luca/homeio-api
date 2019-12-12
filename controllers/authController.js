const User = require('./../database/users/userSchema');
const { createToken } = require('./../helpers/jwtHelper');

exports.signUp = async (req, res) => {
  const newUser = await User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    passwordConfirm: req.body.passwordConfirm
  });

  createToken(newUser, 201, res);
};

exports.signIn = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new Error('Incorrect email or password'), 400);
  }
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.isPasswordValid(password, user.password))) {
    return next(new Error('Incorrect Email or Password'), 401);
  }

  createToken(user, 200, res);
};
