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
  response.status(200).json(inMemoryRecipes);
};

const getRecipeById = (request, response) => {
  response.status(200).json(inMemoryRecipes[0]);
};

const addRecipe = async (request, response) => {
  const { name, rating } = request.body;
  inMemoryRecipes.push({ name, rating });
  response.status(201).send(`Recipe added successfully.`);
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