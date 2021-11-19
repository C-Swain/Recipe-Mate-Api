INSERT INTO users (email, password)
VALUES ('Joan@gmail.com', 'password'),
('Catherine@gmail.com', 'password'),
('AnaCarolina@gmail.com', 'password');

INSERT INTO categories (name, edible)
VALUES ('Breakfast', True),
('Lunch', True),
('Dinner', True),
('Personal Care', False),
('Other', False);

INSERT INTO recipes (user_id, name, category, description, ingredients, steps, servings, time, likes)
VALUES (1, 'Vegan Fish and Chips', 3,'This is the best Vegan Fish','Celeriac, batter', '1: Slice up Celeriac. 2: Bake in oven on 200 until soft 3:fry', '2 people', 60, 140),
(2, 'Cereal', 1, 'a breakfast favourite', 'Cereal, Milk', '1: Pour your favourite cereal into a bowl, 2: add milk 3: Finnish with spoon','1 person', 1, 54);

INSERT INTO comments (recipe_id, user_id, description)
VALUES (1, 3, 'I love this ! it is so good <3'),
(2, 2, 'recipe portion too small make it double, or you will be hungry!'),
(1, 1, 'I do not like.. it takes like socks');

INSERT INTO favourites (user_id, recipe_id)
VALUES (1, 1),
(1, 2);



