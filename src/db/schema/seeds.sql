INSERT INTO users (email, password)
VALUES ('Joan@gmail.com', 'password'),
('Catherine@gmail.com', 'password'),
('AnaCarolina@gmail.com', 'password');

INSERT INTO categories (name, edible)
VALUES ('Breakfast', True),
('Lunch', True),
('Dinner', True),
('Personal Care', False),
('Other', False),
('Kids', False),
('Other', True);

INSERT INTO recipes (user_id, name, category, description, ingredients, steps, servings, time, likes, image)
VALUES (1, 'Vegan Fish and Chips', 3, 'This is the best Vegan Fish','Celeriac, batter', '1: Slice up Celeriac. 2: Bake in oven on 200 until soft 3:fry', '2 people', 60, 140,'https://i.imgur.com/QZ13zIO.png'),
(2, 'Cereal', 1, 'a breakfast favourite', 'Cereal, Milk', '1: Pour your favourite cereal into a bowl, 2: add milk 3: Finnish with spoon','1 person', 1, 54, 'https://i.imgur.com/GN4U4Ry.png'),
(2, 'Simple French Toast', 1, 'It is a simple french toast. Simple. Not french necessarily, will depend of where you are when you prepare the toast. And, for sure, a toast.', '1 or more Sliced bread, Some: Vanilla , Butter , Eggs and Maple syrup', 'Mix 3 eggs with one tsp vanilla. Then soak the bread in the mixture. Pan fry the bread in butter until golden, top with maple syrup.', 'One person', 15, 1242, 'https://i.imgur.com/mUDVph0.png'),
(1, 'Cute Soap Muffin', 4, 'A muffin-look like soap bar.', 'Shave cream, glycerin soap, colouring. Also a cream squeezer bag is needed.', '1) melt glycerin soap in pot, 2) pour melted soap into muffin holder to cool down 3) pour extra melted soap and shave cream into blender and blend 4) pour blender content into cream squeezer to squeeze cream on top of muffin soap base.', 'Depends on the quantity of ingredients.', 75, 7823, 'https://i.imgur.com/FWKLGc2.png'),
(3, 'Bubble Blowing Solution', 6, 'Great for summer, this bubble blowing solution will blow your mind!', '1 cup of water, 1 squeeze of dish soap (around 1 tbsp is fine), some sugar (also around 1 tsp)', 'Mix all ingredients. Insert a bubble want (generally in plastic or metal) inside the solution and blow through it.', '1 cup of solution, lots of bubbles', 5, 247, 'https://i.imgur.com/q2Gk5dU.png');

INSERT INTO comments (recipe_id, user_id, description)
VALUES (1, 3, 'I love this ! it is so good <3'),
(2, 1, 'recipe portion too small make it double, or you will be hungry!'),
(1, 2, 'I do not like.. It takes like socks!'),
(2, 3, 'The problem is that it requires cereal. Can I change for biscuits?'),
(3, 3, 'I am American and so is my toast!'),
(5, 2, 'I put way too much sugar on that, worked just fine.'),
(3, 1, 'Delicious, I make it every day.'),
(4, 3, 'Smells not like food.'),
(4, 2, 'Needed a few tries, but now I make it easy.');

INSERT INTO favourites (user_id, recipe_id)
VALUES (1, 1), (1, 2), (3, 4), (2, 4), (3, 3), (2, 5);