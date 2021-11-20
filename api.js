const { response } = require("express");
const { Pool } = require("pg");
const pool = new Pool({
  user: 'development',
  password: 'development',
  host: 'localhost',
  database: 'recipe_development'
});

// const inMemoryRecipes = [
//   {
//     id: 123,
//     user_id: 456,
//     name: 'toast toast',
//     category: 'breakfast',
//     description: 'very tasty',
//     ingredients: 'bread',
//     steps: 'put in toaster',
//     servings: '1 person',
//     time: 5,
//     likes: 3
//   },
//   {
//     id: 124,
//     user_id: 457,
//     name: 'cereal',
//     category: 'breakfast',
//     description: 'easy food',
//     ingredients: ' cereal , milk',
//     steps: 'get bowl, pour cereal , add milk . do not put in toaster',
//     servings: '1 person',
//     time: 5,
//     likes: 3
//   },
//   {
//     id: 129,
//     user_id: 356,
//     name: 'Peanut-butter and jam sandwich',
//     category: 'breakfast',
//     description: 'very tasty',
//     ingredients: ' bread, peanut-butter , jam',
//     steps: 'peanut butter jelly time',
//     servings: '100 people',
//     time: 5,
//     likes: 3
//   }
// ];

const getAllRecipes = async (request, response) => {
    pool.query('SELECT * FROM Recipes;', (error, results) => {
      response.status(200).json(results.rows);
    });
};

// REPLACE OTHERS WITH QUERIES
const getRecipeById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('SELECT * FROM recipes WHERE id = $1', [id], (error, results) => {
    response.status(200).json(results.rows);
  });
};

const addRecipe = async (request, response) => {
  const { user_id, name, category, description, ingredients, steps, servings, time} = request.body;
  pool.query('INSERT INTO recipes (user_id, name, category, description, ingredients, steps, servings, time) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [ user_id, name, category, description, ingredients, steps, servings, time], (error, results) => {
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
  const {email ,password} = request.body;
  pool.query('INSERT INTO users (email, password) VALUES ($1, $2)', [email, password], (error, results) => {
    response.status(201).send(`user added successfully.`);
  });
};

//Favourites Not working
// const getFavouritesByUser = async (request, response) => {
//   const user = parseInt(request.params.user);
//   pool.query('SELECT * FROM favourites WHERE user_id = $1', [user], (error, results) => {
//     response.status(200).json(results.rows);
//   });
// };


module.exports = {
  getAllRecipes,
  getRecipeById,
  addRecipe,
  // updateRecipe,
  deleteRecipe,
  getAllUsers,
  getUserById,
  addUser,
  // getFavouritesByUser
};