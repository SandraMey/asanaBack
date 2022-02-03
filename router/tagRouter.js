const tagRouter = require('express').Router();
const tagModel = require('../models/tagModel');
const yogaModel = require('../models/yogaModel');

tagRouter.get('/', async (req, res) => {
  const [tag] = await tagModel.findAllTag();
  res.json(tag);
});

tagRouter.get('/:id/yoga', async (req, res) => {
  const [yoga] = await yogaModel.findOneByTag(
    req.params.id,
    req.body,
  );
  res.json(yoga);
});

tagRouter.put('/:id', async (req, res) => {
  await tagModel.updateTag(req.body, req.params.id);
  res.status(204).json();
});


module.exports = tagRouter;
