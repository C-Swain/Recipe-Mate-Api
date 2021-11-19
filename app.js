const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());

const api = require('./api');

app.get('/Recipes/', api.getAllRecipes);
app.get('/Recipes/:id', api.getRecipeById);
app.post('/Recipes/', api.addRecipe);
app.put('/Recipes/:id', api.updateRecipe);
app.delete('/Recipes/:id', api.deleteRecipe);

app.listen(port, () => {
  console.log(` Recipe-Mate Api is at your service ${port}.`);
});
