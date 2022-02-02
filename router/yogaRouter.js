const yogaRouter = require('express').Router();
const yogaModel = require('../models/yogaModel');

yogaRouter.get('/', async (req, res) => {
  const [yoga] = await yogaModel.findAllYoga();
  res.json(yoga);
});

module.exports = yogaRouter;
