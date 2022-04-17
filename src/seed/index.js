const connection = require('../models/connection');
const allMoviesJson = require('../../netflix_mod2.json');

const seed = async () => connection()
  .then((db) => db.collection('movies').insertMany(allMoviesJson))
  .then(() => console.log('seed done'))
  .catch((err) => console.log(err));

module.exports = seed;
