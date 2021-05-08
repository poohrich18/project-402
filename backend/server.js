const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
mongoose.Promise = require('bluebird');
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usernameRouter = require('./routes/username');
const usersRouter = require('./routes/users');
const groupRouter = require('./routes/group');
const projinfoRouter = require('./routes/projinfo');

app.use('/username', usernameRouter);
app.use('/users', usersRouter);
app.use('/group', groupRouter);
app.use('/projinfo', projinfoRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});