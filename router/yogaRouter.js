const yogaRouter = require('express').Router();
const multer = require('multer');
const Joi = require('joi');
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

const yogaSchema = Joi.object({
  title: Joi.string().presence('required'),
  intro: Joi.string().presence('required'),
  subtitle1: Joi.string().presence('required'),
  text1: Joi.string().presence('required'),
  subtitle2: Joi.string().presence('required'),
  text2: Joi.string().presence('required'),
  id_tag: Joi.string().presence('required'),
  picture: Joi.string().presence('required'),
});

yogaRouter.post('/', upload.single('picture'), async (req, res) => {

  const { value, error } = yogaSchema.validate(req.body);

  if (error) {
    return res.status(400).json(error);
  }

  const [[yoga]] = await yogaModel.findOneByTitle(value.title);

  if (yoga) {
    return res.status(403).json({
      message: 'already exists',
    });
  }
  const [{ insertId: id }] = await yogaModel.createYoga(req.body, req.file.path);
  res.status(201).json({
    id,
    ...req.body,
    picture: req.file.filename
  });
});




module.exports = yogaRouter;
