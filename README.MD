### JSON FIX
File used to prepare the json file, doing pertinent transformations and treating empty data.

# Mini Doc API
## Routes
- ### Method (Get)
  - /movie : Return All Movies
  - /movie/search/ : Searching by some string present as value of any field. Ex: http://localhost:3000/movie/search/?title=Spider
  - /movie/:id : search for a movie by its ID.
- ### Method (Post) (JSON Body)
  - /movie : Insert a new movie, using the post method body template.
- ### Method (Delete)
  - /movie/:id : Delete a movie by its ID.
- ### Method (Put) (JSON Body)
  - /movie/:id : Edit a movie by its ID, using the put method body template.
  - Obs: in this method you don't need to fill all fields as in post, you can specify the key-value only for the fields you want to change.

## Body Templates
### Post method
{

    "type": "Movie",
    "title": "Jobs Is Not Dead",
    "director": [
      "Caetano Jones"
    ],
    "cast": ["Arthur Sparrow", "Euzebio Johnson"],
    "country": "Brazil",
    "date_added": "25/9/2021",
    "release_year": 2022,
    "rating": "PG-15",
    "duration": "30 min",
    "listed_in": [
      "Documentaries",
      "TV Shows"
    ],
    "description": "As her father nears the end of his life, filmmaker Kirsten Johnson stages his death in inventive and comical ways to help them both face the inevitable."
}

### Put method
{

    "type": "Movie",
    "title": "Jobs Is Not Dead",
    "description": "As her father nears the end of his life, filmmaker Kirsten Johnson stages his death in inventive and comical ways to help them both face the inevitable."
}

---

## Starting the Server Locally
`npm run dev` -> It will start the Nodejs server
### Important
- You will need to install mongodb in your machine.
- Set the enviroment variables by creating a .env file. Obs: I left a .env.template file in project with the right key names so that you can just insert the values.

## Seeding the database (locally)
As you can see in the project folder, there is a folder called seed with an index file inside containing the code that will insert the documents in the database. You just need to call it as a route in the index with a function in the controller.

Insert this code in /controllers/movie.js

<code>const seeder = require('../seed');

const seed = async (req, res) => {

  await seeder();

  res.json(200).json({ message: 'Seed operation successfull' });

} </code>

And this line in /src/index.js

`app.get('/admin/movie/seed', moviesController.seed);`

Done it, you can just do a get request to the server using the url: http://localhost:3000/admin/movie/seed