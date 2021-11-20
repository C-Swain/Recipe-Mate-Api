const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

const api = require('./api');
//recipes paths 
app.get('/Recipes/', api.getAllRecipes);
app.get('/Recipes/:id', api.getRecipeById);
app.post('/Recipes/', api.addRecipe);
// app.put('/Recipes/:id', api.updateRecipe);
app.delete('/Recipes/:id', api.deleteRecipe);

//users paths
app.get('/Users/', api.getAllUsers);
app.get('/Users/:id', api.getUserById);
app.post('/Users/', api.addUser);

//favourites
app.get('/Favourites/:userId', api.getFavouritesByUser);


app.listen(port, () => {
  console.log(` Recipe-Mate Api is at your service ${port}.`);
});
