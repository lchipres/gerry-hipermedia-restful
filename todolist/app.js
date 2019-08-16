const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// mongoose
Task = require('./models/task')
List = require('./models/list')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/');

// express
const app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


//routes
const list = require('./routes/index').list;
const task = require('./routes/index').task;
const group = '/api';
app.use(group, list);
app.use(group, task);

module.exports = app;