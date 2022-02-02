const cors = require('cors');
const express = require('express');

const tagRouter = require('./router/tagRouter');
const yogaRouter = require('./router/yogaRouter');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tag', tagRouter);
app.use('/yoga', yogaRouter);

module.exports = app;
