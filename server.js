const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

const port = 3000;
dotenv.config({ path: './config.env' });

const connectionString = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(connectionString, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => 'DB connection sucesfull');


app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
})