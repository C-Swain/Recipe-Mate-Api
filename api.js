const { Pool } = require("pg");
const pool = new Pool({
  user: 'development',
  password: 'development',
  host: 'localhost',
  database: 'recipe_development'
});

const inMemoryRecipes = [
  {
    id: 123,
    user_id: 456,
    name: 'toast toast',
    category: 'breakfast',
    description: 'very tasty',
    ingredients: 'bread',
    steps: 'put in toaster',
    servings: '1 person',
    time: 5,
    likes: 3
  },
  {
    id: 124,
    user_id: 457,
    name: 'cereal',
    category: 'breakfast',
    description: 'easy food',
    ingredients: ' cereal , milk',
    steps: 'get bowl, pour cereal , add milk . do not put in toaster',
    servings: '1 person',
    time: 5,
    likes: 3
  },
  {
    id: 129,
    user_id: 356,
    name: 'Peanut-butter and jam sandwich',
    category: 'breakfast',
    description: 'very tasty',
    ingredients: ' bread, peanut-butter , jam',
    steps: 'peanut butter jelly time',
    servings: '100 people',
    time: 5,
    likes: 3
  }
];

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
  const { name, rating } = request.body;
  pool.query('INSERT INTO recipes (name, rating) VALUES ($1, $2)', [name, rating], (error, results) => {
    response.status(201).send(`Recipe added successfully.`);
  });
};

const updateRecipe = (request, response) => {
  const { name, rating } = request.body;
  inMemoryRecipes[0] = { name, rating };
  response.status(200).send(`First Recipe in list is updated.`);
};

const deleteRecipe = (request, response) => {
  inMemoryRecipes.shift();
  response.status(200).send(`First Recipe in list is deleted.`);
};

module.exports = {
  getAllRecipes,
  getRecipeById,
  addRecipe,
  updateRecipe,
  deleteRecipe
};