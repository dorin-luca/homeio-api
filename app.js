const express = require('express');
const morgan = require('morgan');
const taskRouter = require('./routes/taskRoutes');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const app = express();

app.use(express.json());

app.use('/api/v1/tasks', taskRouter);

module.exports = app;
