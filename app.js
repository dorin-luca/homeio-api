const express = require('express');
const morgan = require('morgan');
const taskRouter = require('./routes/taskRoutes');
const authRouter = require('./routes/authRoutes');
const taskStatusRouter = require('./routes/taskStatusRoutes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.use('/api/v1/tasks', taskRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/taskStatus', taskStatusRouter);

module.exports = app;
