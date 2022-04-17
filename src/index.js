const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const moviesController = require('./controllers/movies');

const app = express();
app.use(bodyParser.json());

app.get('/', async (_req, res) => {
  res.json({ message: 'Listenning to requests' });
})
app.get('/movie', moviesController.getAll);
app.get('/movie/search/', moviesController.search);
app.get('/movie/:id', moviesController.find);
app.post('/movie', moviesController.create);
app.delete('/movie/:id', moviesController.remove);
app.put('/movie/:id', moviesController.edit);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('APP Runing in PORT: ', PORT);
});
