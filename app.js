const cors = require('cors');
const express = require('express');

const tagRouter = require('./router/tagRouter');
const yogaRouter = require('./router/yogaRouter');

const app = express();

const corsOptions = {
  origin: '*',
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/tag', tagRouter);
app.use('/yoga', yogaRouter);

module.exports = app;
