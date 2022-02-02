const yogaRouter = require('express').Router();
const multer = require('multer');
const yogaModel = require('../models/yogaModel');

const upload = multer({ dest: 'uploads/yoga' });

yogaRouter.get('/', async (req, res) => {
  const [yoga] = await yogaModel.findAllYoga();
  res.json(yoga);
});

yogaRouter.get('/:id', async (req, res) => {
  const [[yoga]] = await yogaModel.findOneById(req.params.id);
  if (yoga) {
    res.json(yoga);
  } else {
    res.status(404).json();
  }
});

yogaRouter.delete('/:id', async (req, res) => {
  await yogaModel.deleteYoga(req.params.id);
  res.status(204).json();
});

yogaRouter.post('/', upload.single('picture'), async (req, res) => {
  const [{ insertId: id }] = await yogaModel.createYoga(req.body, req.file.path);
  res.status(201).json({
    id,
    ...req.body,
    picture: req.file.filename
  });
});

module.exports = yogaRouter;
