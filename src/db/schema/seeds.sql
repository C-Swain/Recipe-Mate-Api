INSERT INTO users (email, password)
VALUES('Joan@gmail.com', 'password'),
('Catherine@gmail.com', 'password'),
('AnaCarolina@gmail.com', 'password');

INSERT INTO categories (name, edible)
VALUES ('Breakfast', True),
('Lunch', True),
('Dinner',True),
('Personal Care', False)
('Other', False);
,
INSERT INTO recipes (user_id, name, category, description, steps, servings, time, likes)
VALUES (1, "Vegan Fish and Chips", 3, "This is the best Vegan Fish", "1: Slice up Celeriac. 2: Bake in oven on 200 until soft 3: once cooked peels the skin off and coat the celeriac pieces with lemon zest and lemon juice. 4: batter with your favourite batter. 5: Fry until Golden Brown", "2 people", 60, 140)
(2, "Cereal", 1, "a breakfast favourite", "1: Pour your favourite cereal into a bowl, 2: add milk 3: Finnish with spoon", 1, 54 )

INSERT INTO comments(recipe_id, user_id, description)
(1, 3," I love this ! it's so good <3")
(2, 2, "recipe portion too small make it double, or you will be hungry!")
(1 ,1, "I do not like.. it takes like socks")

INSERT INTO favourites(user_id, recipe_id)
(1, 1)
(1, 2);



