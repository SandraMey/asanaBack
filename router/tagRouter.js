const tagRouter = require('express').Router();
const tagModel = require('../models/tagModel');

tagRouter.get('/', async (req, res) => {
  const [tag] = await tagModel.findAllTag();
  res.json(tag);
});

module.exports = tagRouter;
