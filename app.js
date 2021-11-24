require('dotenv').config()
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const api = require('./api');

// 1. Recipes paths

// Get all recipes
app.get('/Recipes/', api.getAllRecipes);

// Get all recipes when searching for something
app.get('/search_recipes', api.getRecipesWithSearch)

// Get one specific recipe
app.get('/Recipes/:id', api.getRecipeById);

// Get comments for a specific recipe
app.get('/Recipes/:id/comments', api.getCommentsByRecipeId);

// app.post('/Recipes/', api.addRecipe);
// app.put('/Recipes/:id', api.updateRecipe);
app.delete('/Recipes/:id', api.deleteRecipe);

// Add recipe (only users add recipes)
app.post('/users/:id/recipes', api.addRecipe);

// 2. Users paths
app.get('/Users/', api.getAllUsers);
app.get('/Users/:id', api.getUserById);
app.post('/Users/', api.addUser);

// Get favourites for a specific user (ex. user 1)
app.get('/users/:id/favourites', api.getFavouritesByUser);

// Get recipes from a specific user (ex. user 1)
app.get('/users/:id/recipes', api.getRecipesByUser);


// 3. Categories Path

app.get('categories', api.getAllCategories)
app.get('categories/:id/recipes', api.getRecipesByCategory)




//Login logic
// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });
 
app.listen(port, () => {
  console.log(` Recipe-Mate Api is at your service ${port}.`);
});
