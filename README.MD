### JSON FIX
File used to prepare the json file, doing pertinent transformations and treating empty data.

# Mini Doc API
## Routes
- ### Method (Get)
  - /movie : Return All Movies
  - /movie/search/ : Searching by some string present as value of any field. Ex: http://localhost:3000/movie/search/?title=Spider
  - /movie/:id : search for a movie by its ID.
- ### Method (Post)
  - /movie : Insert a new movie.
- ### Method (Delete)
  - /movie/:id : Delete a movie by its ID.
- ### Method (Put)
  - /movie/:id : Edit a movie by its ID.

# Starting the Server Locally
`npm run dev` -> It will start the Nodejs server
### Important
You will need to install mongodb in your machine.