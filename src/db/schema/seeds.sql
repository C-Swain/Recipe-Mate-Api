INSERT INTO users (email, password)
VALUES ('Joan@gmail.com', 'password'),
('Catherine@gmail.com', 'password'),
('AnaCarolina@gmail.com', 'password'),
('lhlsept2021@gmail.com', 'password');

INSERT INTO categories (name, edible)
VALUES ('Breakfast', True),
('Lunch', True),
('Dinner', True),
('Personal Care', False),
('Other', False),
('Kids', False),
('Other', True);

INSERT INTO recipes (user_id, name, category_id, description, ingredients, steps, servings, time, likes, image)
VALUES (1, 'Vegan Fish and Chips', 3, 'This is the best Vegan Fish','Celeriac, batter', '1: Slice up Celeriac. 2: Bake in oven on 200 until soft 3:fry', '2 people', 60, 140,'https://i.imgur.com/QZ13zIO.png'),
(2, 'Cereal', 1, 'a breakfast favourite', 'Cereal, Milk', '1: Pour your favourite cereal into a bowl, 2: add milk 3: Finnish with spoon','1 person', 1, 54, 'https://i.imgur.com/GN4U4Ry.png'),
(2, 'Simple French Toast', 1, 'It is a simple french toast. Simple. Not french necessarily, will depend of where you are when you prepare the toast. And, for sure, a toast.', '1 or more Sliced bread, Some: Vanilla , Butter , Eggs and Maple syrup', 'Mix 3 eggs with one tsp vanilla. Then soak the bread in the mixture. Pan fry the bread in butter until golden, top with maple syrup.', 'One person', 15, 1242, 'https://i.imgur.com/mUDVph0.png'),
(1, 'Cute Soap Muffin', 4, 'A muffin-look like soap bar.', 'Shave cream, glycerin soap, colouring. Also a cream squeezer bag is needed.', '1) melt glycerin soap in pot, 2) pour melted soap into muffin holder to cool down 3) pour extra melted soap and shave cream into blender and blend 4) pour blender content into cream squeezer to squeeze cream on top of muffin soap base.', 'Depends on the quantity of ingredients.', 75, 7823, 'https://i.imgur.com/FWKLGc2.png'),
(3, 'Bubble Blowing Solution', 6, 'Great for summer, this bubble blowing solution will blow your mind!', '1 cup of water, 1 squeeze of dish soap (around 1 tbsp is fine), some sugar (also around 1 tsp)', 'Mix all ingredients. Insert a bubble want (generally in plastic or metal) inside the solution and blow through it.', '1 cup of solution, lots of bubbles', 5, 247, 'https://i.imgur.com/q2Gk5dU.png'),
(3, 'Microwave Mug Cake', 1, 'Fast and delicious cake-in-a-mug.', '4 tbsp all purpose flour, 2 tbsp sugar, 1/2 tsp baking powder, 4 tbsp milk, 1 1/2 tbsp oil, 1/4 tsp vanilla sprinkles', '1. Mix the dry ingredients in a mug. 2. Add the wet ingredients, until combined. 3. Add the sprinkles. Microwave is between 1 to 3 min. Depends on the potency. Careful, it is hot!', '1 person', 10, 422, 'https://i.imgur.com/LJftZ1G.png'),
(4, 'Finger PeanutButter', 4, 'emergency peanut butter', 'Peanut Butter, a finger-like apparatus', 'put two fingers together or grab a finger like object and scoop peanut butter into your mouth', '1 finger spoon', 1, 999, 'https://i.ytimg.com/vi/EvRz_R32GsM/hqdefault.jpg'),
(2, 'Playdough', 6, 'Easy to make playdough. Not only for kids, but for fun! And you probably already have it all at home!', '1 cup of flour, 1/4 cup of salt, between 2/4 and 3/4 of water, 3 tablespoons of lemon juice, 1 tablespoon of cookin oil. Optional: 2 packets of kool-aid for color and fragrance.', 'Mix the flour, salt and oil. Mix the water and lemon juice and heat until boiling. If you are using the kool-aid, mix it in the water until it dissolves. Combine everything and knead well, until all is combined. Wait for it to cool completely before playing.', '2 cups of dough', '10', 154, 'https://i.imgur.com/OedRlqp.png'),
(3, 'Paint Remover with Washing Soda', 5, 'Washing soda paint remover is inexpensive, harmless and simple to make. Intermediate strength.', '1 cup cold water, 4 spoons of washing soda, some flour (see explanation), brush', 'Stir the washing soda into the water in a bowl. Add flour one spoon at a time, mixing it in until you have a thick, consistent cream. Brush this cream over the area you wish to remove paint from, and let it penetrate for 30 minutes. Rinse off this homemade paint remover while scraping off paint with a firm brush. For better results, use hot water, but be very careful.', 'The area depends on how thick is the paint', 45, 2, 'https://i.imgur.com/5n8YGcq.png'),
(1, 'Fruit Basket in Animal Crossing', 5, 'Fruit basket is a craftable miscellaneous item in New Horizons. It is part of the fruit set. It has no variations and cannot be customized.', '1 apples, 1 pears, 1 cherries, 1 oranges, 1 peaches', 'The DIY recipe can be obtained from a cranky island resident or a message in a bottle.', '1 item', 0, 543, 'https://i.imgur.com/kAIKc4t.png'),
(1, 'Caramels', 7, 'Family tradition recipe. Kids and adults love it!', '2 cups white sugar. 1 cup packed brown sugar. 1 cup corn syrup. 1 cup evaporated milk. 1 pint heavy whipping cream. 1 cup butter. 1 ¼ teaspoons vanilla extract.', '1. Grease a 12x15 inch pan. 2. In a medium-size pot, combine sugar, brown sugar, corn syrup, evaporated milk, whipping cream, and butter. Monitor the heat of the mixture with a candy thermometer while stirring. When the thermometer reaches 250 degrees F (120 degrees C) remove the pot from the heat. 3. Stir in vanilla. Transfer mixture to the prepared pan and let the mixture cool completely. When cooled cut the Carmel into small squares and wrap them in wax paper for storage.', '50-60 units', 60, 563, 'https://i.imgur.com/DbDjKlz.png'),
(2, 'Turkey Taco Salad', 2, 'It is simple and delicious. A sprinkle of cheddar cheese is a great topping.', '1 pound ground turkey; 1 (1.25 ounce) package taco seasoning mix; 1 (15 ounce) can black beans, rinsed and drained; 1 head iceberg lettuce, shredded; 2 tomatoes, diced; 1 (10 ounce) bag tortilla chips, coarsely crumbled; 1 (8 fluid ounce) bottle thousand island dressing', 'Part 1: Heat a large skillet over medium-high heat, and stir in the ground turkey. Cook and stir until the turkey is crumbly, evenly browned, and no longer pink. Mix in taco seasoning mix as directed on package. Remove from heat. Part 2: Combine the turkey, black beans, lettuce, tomatoes, and tortilla chips in a large bowl. Toss with salad dressing. Serve immediately, or refrigerate for an hour before serving.', '6', 30, 239, 'https://i.imgur.com/uDtx36S.png'),
(1, 'Homemade Coconut Shampoo', 4, 'Homemade coconut shampoo is the best thing ever. DIY shampoo is not only easy to make but much better for you too. No toxic chemicals or weird ingredients.', '1/2 cup coconut milk, 2/3 cup castile soap, 30 drops essential oil (jasmine), 2 teaspoons extra virgin olive oil', 'Combine all the ingredients in an empty shampoo bottle or jar and shake. I used a funnel to pour ingredients in the empty bottle. You can keep it in the shower for one to two months. Shake well before each use. NOTE: If you find that your hair remains oily and still heavy use apple cider vinegar to rinse it out. A lot of people using this shampoo recipe have found that the vinegar helps a lot.', '20 shampoos', 15, 23, 'https://i.imgur.com/fOu3mGa.png'),
(2, 'Inside out Ravioli', 2, 'An interesting twist on an age old favorite. Use your favorite shaped pasta - bow ties, shells, penne, etc...Can be assembled ahead of time and refrigerated, but allow extra time for baking.', '16 ounces pasta; 1 (10 ounce) package frozen chopped spinach; 1/2 cup bread crumbs; 2 eggs, beaten; 1/4 cup olive oil; 1 cup shredded mozzarella cheese; 1 pound lean ground beef; 1/2 cup chopped onion; 1 clove garlic, minced; 1 (8 ounce) can tomato sauce; 1 (6 ounce) can tomato paste; 1 (16 ounce) jar spaghetti sauce', '1) In a medium pot cook pasta in boiling salted water until al dente. Drain well. 2) Cook spinach according to package directions. 3) Meanwhile, brown ground beef, chopped onion, and minced garlic in a large skillet over medium heat. Stir in tomato sauce, tomato paste, and pasta sauce. Simmer for 10 minutes. 4) Combine cooked spinach, cooked pasta, bread crumbs, shredded cheese, beaten eggs, and olive oil. 5) Spread spinach mixture evenly into the bottom of a 9x13 inch baking dish. Top with meat mixture. 6) Bake in a preheated 350 degree F oven (175 degree C) for 30 minutes.', '8 servings', 75, 243, 'https://i.imgur.com/Kk43yIk.png'),
(3, 'Chinese Chicken Fried Rice', 2, 'Chicken, rice, soy sauce and shredded egg stir fried together. This is a very simple recipe. It is easy, but tasty! Note: Never use rice that you have just cooked.', '1 egg; 1 tablespoon water; 1 tablespoon butter; 1 tablespoon vegetable oil; 1 onion, chopped; 2 cups cooked white rice, cold; 2 tablespoons soy sauce; 1 teaspoon ground black pepper; 1 cup cooked, chopped chicken meat', 'Step 1: In a small bowl, beat egg with water. Melt butter in a large skillet over medium low heat. Add egg and leave flat for 1 to 2 minutes. Remove from skillet and cut into shreds. Step 2: Heat oil in same skillet; add onion and saute until soft. Then add rice, soy sauce, pepper and chicken. Stir fry together for about 5 minutes, then stir in egg. Serve hot.', '2 to 4', 15, 327, 'https://i.imgur.com/MubtOOE.png');

INSERT INTO comments (recipe_id, user_id, description)
VALUES (1, 3, 'I love this ! it is so good <3'),
(1, 2, 'I do not like.. It takes like socks!'),
(2, 1, 'recipe portion too small make it double, or you will be hungry!'),
(2, 3, 'The problem is that it requires cereal. Can I change for biscuits?'),
(3, 3, 'I am American and so is my toast!'),
(3, 1, 'Delicious, I make it every day.'),
(4, 3, 'Smells not like food.'),
(4, 2, 'Needed a few tries, but now I make it easy.'),
(5, 2, 'I put way too much sugar on that, worked just fine.'),
(7, 3, 'I prefer with a toast and a butter knife. But I understand that... emergency!'),
(8, 3, 'I had a different recipe with no lemon juice. Is it really necessary?'),
(8, 1, 'Lemon juice is the secret ingredient that was missing in my recipe!'),
(9, 2, 'Even with hot water, does not work for me. Bad recipe.'),
(9, 4, 'People who say that it is not working should try with a different dishwasher. Get a strong one!'),
(11, 2, 'Tried and loved. Amazing.'),
(12, 1, 'After I tried this one, I eat that all the time.'),
(12, 4, 'I like the picture. Beautiful.'),
(13, 3, 'Vinegar. Is a must!'),
(14, 1, 'That is very tasty.'),
(14, 3, 'So creative.'),
(14, 4, 'With ground chicken is good too'),
(15, 2, 'Instructions seem complicated, but it is easy to do.');

INSERT INTO favourites (user_id, recipe_id)
VALUES (1, 1), (1, 2), (1, 5), (1, 8), (1, 12), 
(2, 4), (2, 5), (2, 6), (2, 7), (2, 13), (2, 15),
(3, 3), (3, 4), (3, 7), (3, 10), (3, 11), (3, 12);