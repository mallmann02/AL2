const moviesModel = require('../models/movie');

const create = async (req, res) => {
  const movie = req.body;

  const insertedId = await moviesModel.insert(movie);

  return res.status(201).json({ message: `Document created with ID: ${insertedId}` });
};

const getAll = async (_req, res) => {
  const movies = await moviesModel.getAll();

  return res.status(200).json(movies);
};

const find = async (req, res) => {
  const { id } = req.params;

  const movie = await moviesModel.find(id);

  return res.status(200).json({ movie });
};

const edit = async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  await moviesModel.edit(id, changes);

  return res.status(200).json({ message: 'Changes were successfull' });
};

const remove = async (req, res) => {
  const { id } = req.params;

  await moviesModel.remove(id);

  return res.status(200).json({ message: 'Movie successfully deleted' });
};

const search = async (req, res) => {
  const queryObj = req.query;

  const key = Object.keys(queryObj)[0];

  const result = await moviesModel.search(key, queryObj[key]);

  return res.status(200).json(result);
};

module.exports = {
  create,
  getAll,
  find,
  edit,
  remove,
  search,
};
