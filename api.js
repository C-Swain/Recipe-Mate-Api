const { response } = require("express");
const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE
});

const getAllRecipes = async (request, response) => {
    pool.query(`SELECT * FROM recipes;`, (error, results) => {
      if (error) { response.status(500).send("Our bad. Something went wrong!") }
      response.status(200).json(results.rows);
    });
};


// The form should contain the field named "search".
// This should work, but not tested
const getAllRecipesFromSearch = async (request, response) => {
  const { search } = request.body
  pool.query(`
  SELECT * FROM recipes 
    WHERE ingredients LIKE '%$1%'
      OR description LIKE '%$1%'
      OR name LIKE '%$1%';
  `, [search], 
  (error, results) => {
    if (error) { response.status(500).send("Our bad. Something went wrong!") }
    response.status(200).json(results.rows);
  });
};

const getRecipeById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM recipes JOIN users ON user_id = users.id WHERE recipes.id = $1;', [id], (error, results) => {
    response.status(200).json(results.rows);
  });
};

const getCommentsByRecipeId = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM comments WHERE recipe_id = $1;', [id], (error, results) => {
    response.status(200).json(results.rows);
  });
};

// The form should contain the field named as the line in with request.body
// This should work, but not tested
const addRecipe = async (request, response) => {
  const user_id = parseInt(request.params.id);
  const { name, category, description, ingredients, steps, servings, time } = request.body;
  pool.query('INSERT INTO recipes (user_id, name, category, description, ingredients, steps, servings, time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
    [ user_id, name, category, description, ingredients, steps, servings, time], 
    (error, results) => {
      response.status(201).send(`Recipe added successfully.`);
  });
};

// const updateRecipe = (request, response) => {
//   const id = parseInt(request.params.id);
//   const { name, rating } = request.body;
//   pool.query(
//     'UPDATE recipes SET name = $1, rating = $2 WHERE id = $3', [user_id, name, category, description, ingredients, steps, servings, time], (error, results) => {
//       response.status(200).send(`recipe with id ${id} modified.`);
//     }
//   );
// };

const deleteRecipe = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('DELETE FROM recipe WHERE id = $1', [id], (error, results) => {
    response.status(200).send(`recipe with id ${id} deleted.`);
  });
};  


// Users Paths
const getAllUsers = async (request, response) => {
    pool.query('SELECT * FROM Users;', (error, results) => {
    response.status(200).json(results.rows);
    });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    response.status(200).json(results.rows);
  });
};

const addUser = async (request, response) => {
  const { email, password } = request.body;
  pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', 
    [email, password], 
    (error, results) => {
      response.status(201).send(`user added successfully.`);
  });
};

const getFavouritesByUser = async (request, response) => {
  const user = parseInt(request.params.id);
  pool.query(`
    SELECT * FROM favourites 
      JOIN recipes ON recipe_id = recipes.id
      WHERE favourites.user_id = $1;
    `, [user], 
    (error, results) => {
      if (error) { response.status(500).send("Our bad. Something went wrong!") }
      response.status(200).json(results.rows);
  });
};
  
const getRecipesByUser = async (request, response) => {
  const user = parseInt(request.params.id);
  pool.query(`
    SELECT * FROM recipes WHERE recipes.user_id = $1;`, [user], 
    (error, results) => {
      if (error) { response.status(500).send("Our bad. Something went wrong!") }
      response.status(200).json(results.rows);
  });
};

module.exports = {
  getAllRecipes,
  getAllRecipesFromSearch,
  getRecipeById,
  getCommentsByRecipeId,
  addRecipe,
  // updateRecipe,
  deleteRecipe,
  getAllUsers,
  getUserById,
  addUser,
  getFavouritesByUser,
  getRecipesByUser
};