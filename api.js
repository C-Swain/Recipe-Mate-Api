const { response } = require("express");
const { Pool } = require("pg");
const pool = new Pool({
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE
});

const getAllRecipes = async (request, response) => {
    pool.query(`
    Select recipes.* , categories.name As category_name
 From recipes
 JOIN categories on categories.id = recipes.category_id
      ;`, (error, results) => {
      if (error) { response.status(500).send("Our bad. Something went wrong!") }
      response.status(200).json(results.rows);
    });
};

const getRecipesWithSearch = async (request, response) => {

  // http://localhost:3001/search_recipes?search=Fish
  // request.query.search  'Fish'

  const search = request.query.search
  pool.query(`
  SELECT recipes.*, categories.name AS category_name
    FROM recipes 
    JOIN categories ON categories.id = recipes.category_id
    WHERE recipes.name ILIKE $1
    OR description ILIKE $1
    OR ingredients ILIKE $1
    OR steps ILIKE $1
  ;`, [`%${search}%`], 
  (error, results) => {
    if (error) { response.status(500).send("Our bad. Something went wrong!") 
  } else { 
    response.status(200).json(results.rows) }
  });
};

const getRecipeById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(`
    SELECT recipes.*, categories.name AS category_name 
      FROM recipes 
      JOIN categories ON categories.id = recipes.category_id 
      WHERE recipes.id = $1
      ;`,
    [id], (error, results) => {
    if (error) { response.status(500).send("Our bad. Something went wrong!") } 
    response.status(200).json(results.rows);
  });
};

const getCommentsByRecipeId = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query(`
    SELECT comments.*, email AS user_email
      FROM comments 
      JOIN users ON comments.user_id = users.id 
      WHERE recipe_id = $1 
      ORDER BY comments.id DESC
    ;`, [id], (error, results) => {
    response.status(200).json(results.rows);
  });
};

const addRecipe = async (request, response) => {
  console.log('request.body', request.body)
  const user_id = parseInt(request.params.id);
  const { name, category, description, ingredients, steps, servings, time, likes, image } = request.body;
  pool.query(`INSERT INTO recipes (user_id, name, category_id, description, ingredients, steps, servings, time, likes, image)
   VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`, 
    [ user_id, name, category, description, ingredients, steps, servings, time, likes, image], 
    (error, results) => {
      if(error) { console.log(error)}
      response.status(201).send(`Recipe added successfully.`);
  });
};

// recipe id user id and likes are not to be manipulated by this function
const updateRecipe = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, category_id, description, ingredients, steps, servings, time, image  } = request.body;
  pool.query(
    'UPDATE recipes SET name = $2, category_id = $3, description = $4, ingredients = $5, steps = $6,  servings = $7, time = $8, likes = $9, image = $10 WHERE id = $1',
     [ name, category_id, description, ingredients, steps, servings, time, likes, image], (error, results) => {
      if(error) { console.log(error)}
      response.status(200).send(`recipe with id ${id} modified.`);
    }
  );
};

const deleteRecipe = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query('DELETE * FROM recipes WHERE id = $1;', [id], (error, results) => {
    if(error) { console.log(error)}
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
  pool.query(`INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *`, 
    [email, password], 
    (error, results) => {
      if(error) { console.log(error)}
      console.log('results', results.rows)
      // res.sendStatus(status);
    response.json(results.rows[0].id);
      
  });
};

const addComment = async (request, response) => {
  const { recipe_id, user_id, description} = request.body;
  pool.query(`INSERT INTO comments (recipe_id, user_id, description) VALUES ($1, $2, $3) RETURNING *`, 
    [recipe_id, user_id, description], 
    (error, results) => {
      if(error) { console.log(error)}
      console.log('results', results.rows)
      response.json(results.rows);
      
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
  Select recipes.* , categories.name As category_name
 From recipes
 JOIN categories on categories.id = recipes.category_id 
    WHERE recipes.user_id = $1
    ;`, [user], 
    (error, results) => {
      if (error) { response.status(500).send("Our bad. Something went wrong!") }
      response.status(200).json(results.rows);
  });
};

const getAllCategories = async (request, response) => {
  pool.query(`SELECT * FROM categories;`, 
    (error, results) => {
      if (error) { response.status(500).send("Our bad. Something went wrong!") }
      response.status(200).json(results.rows);
  });
};

const getRecipesByCategory = async (request, response) => {
  const category = parseInt(request.params.id);
  pool.query(`
  Select recipes.* , categories.name As category_name
  From recipes
  JOIN categories on categories.id = recipes.category_id
    WHERE categories.id = $1
    ;`, [category], 
    (error, results) => {
      if (error) { response.status(500).send("Our bad. Something went wrong!") }
      response.status(200).json(results.rows);
  });
};

module.exports = {
  getAllRecipes,
  getRecipesWithSearch,
  getRecipeById,
  getCommentsByRecipeId,
  addRecipe,
  updateRecipe,
  addComment,
  deleteRecipe,
  getAllUsers,
  getUserById,
  addUser,
  getFavouritesByUser,
  getRecipesByUser,
  getAllCategories,
  getRecipesByCategory
};
