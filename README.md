# Recipe Mate API

The connection-to-DB side of Recipe Mate(link)!

It was build using PostgreSQL as database.


# Setup Instructions

In Postgres:

1. Create a database `recipe_development`, or any other name specified for `PGDATABASE` in `.env` file.

2. Run the `create.js` and `seeds.js` files, located in `./src/db/schema`.


In the project files:

3. Create a `.env` file with the correct credentials, similar to the example in `.env.development`.


Update and go!

4. Install the required packages with `npm install`.

5. Run the server with `npm start`.