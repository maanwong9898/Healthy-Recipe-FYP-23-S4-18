
 
-- nutrition value, we only care about
-- Calories, Carbs, Fat, Protein, Carbs, Satur

-- recipe's STEPS just store as a whole chunk of string, but when its read or display, split via newline

-- INGREDIENTS should have information including quantifiers 
-- for example: 3 tbsp of sugar, 2 ounces of meat, 5 pound of whatever, 
-- if not its hard to break those informations into smaller chunks

-- INFO should hold onto strings of information, in format of KVP 
-- so whatever info i want, would be thrown inside it, for example
-- "serving" : "for 4 people"
-- "nutrtional value" : "2000 kcal"
-- "time taken" : "45 minutes"
-- "credit" : "gordon ramsay" 
-- "credit url": "gordon ramsay wikipedia link"

-- INSERT INTO RECIPE (TITLE, STEPS, INGREDIENTS, DESCRIPTION, INFO) VALUES
-- ("BAKED CHICKEN", "1. You Bake Chicken.\n2.Done\n3.End", "200 pounds of chicken","You also need a oven", "'calories':'2000g'\n'carbs':'200g'\n'fat':'150g'\n'protein':'20g'");

-- Category
-- 1. Allergies
Insert into allergies 
(subcategory_name) 
VALUES
("Milk"),
("Egg"),
("Soy"),
("Shellfish"),
("Fish"),
("Peanut"),
("Tree Nuts"),
("Gluten");

-- 2. Dietary preferences
Insert into dietary_preferences 
 (subcategory_name) 
VALUES
("Vegan"),
("Vegetarian"),
("Pescatarian");

-- 3. Health goals
Insert into health_goal 
 (subcategory_name) 
VALUES
("Weight Gain"),
("Maintain Heatlth"),
("Weight Loss");

-- Recipe
  -- publisher should be author of the recipe
  -- info refers to dietary information
    -- steps refers to the steps to cook the recipe (separated by \n)
    -- ingredients refers to the ingredients needed to cook the recipe (separated by \n)
    -- img_title should be the author of the image and the source of the image (follow their code of conduct)
    -- dietary_preference refers to the category of the recipe (refer to dietary_preferences)

-- Note that: Some recipes has allergies, insert into recipe_allergies table
    
INSERT INTO recipe
(id, publisher, title, info, calories, carbs, protein, fat, fibre, sodium, serving_size, description, steps, ingredients, UserID, Active, createddt, img, img_title, dietary_preference, cooking_time)
VALUES
    (
        1,
        'Gretchen F. Brown, RD',
        'Hearty Pasta Soup',
        "Not Specified",
        286, 44, 11, 9, 6, 880, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Do something different with a pack of tortellini. This filling soup is full of fibre and veg, plus it is low in fat. The perfect lunch or supper',
        'Heat oil in a pan. Fry the carrots and onion for 5 mins until starting to soften. Add the stock and tomatoes, then simmer for 10 mins. Add the peas and beans with 5 mins to go.\nOnce veg is tender, stir in the pasta. Return to the boil and simmer for 2 mins until the pasta is just cooked. Stir in the basil, if using. Season, then serve in bowls topped with a sprinkling of Parmesan and slices of garlic bread.',
        '1 tbsp olive oil \n2 ounces cornmeal \nhalf onion \n1 small carrot \n1 quarter leek \n1 slice celery root \n1 liter cold water \nbroth powder \nsalt \n1 egg \n2 tbsp whipping cream \n7 ounces smoked fish \nhalf bunch dill',
        '3', -- UserID
        TRUE,
        '2023-04-26 14:30:00',
        'https://img.freepik.com/premium-photo/tortellini-soup-dinner-recipe_198067-6671.jpg?w=1060',
        'Author : Vecstock, Designed by Freepik',  -- img_title
        2 -- dietary_preference
    ),
    (
        2,
        'Jane Hornby',
        'Spiced carrot & lentil soup',
        'Not Specified',
        238, 34, 11, 7, 5, 250, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A delicious, spicy blend packed full of iron and low in fat to boot. It is ready in under half an hour, or can be made in a slow cooker',
        '2 tsp cumin seeds \npinch chili flakes \n2 tbsp olive oil \n600 grams carrot, no need to peel \n140 grams split red lentils \n1 litre hot vegetable stock \n125ml milk \nplain yogurt and naan bread',
        '3', -- UserID
        TRUE,
        '2023-04-20 14:30:00',
        'https://www.freepik.com/premium-photo/high-angle-view-soup-bowls_110336592.htm#query=spiced%20carrot%20and%20lentil%20soup&position=14&from_view=search&track=ais&uuid=18164050-817b-4251-a7ef-50ed4436d721',
        'Author : EyeEm, Designed by Freepik',  -- img_title
        2 -- dietary_preference
    ),
    (
        3,
        'fitChef2',
        'Grilled Lemon-Herb Chicken',
        "INFO",
        150, 0, 26, 4, 0, 70,
        2,
        'Experience the zest and aroma of our Grilled Lemon-Herb Chicken, perfect for a light yet flavorful meal. This dish features tender chicken breasts marinated in a vibrant mix of lemon, herbs, and garlic, grilled to juicy perfection. Ideal for health-conscious diners, this recipe delivers high protein with low fat, making it a nutritious choice for any day.',
        'Preheat grill to medium heat.\nIn a bowl, combine lemon juice, chopped herbs (basil, thyme), minced garlic, olive oil, salt, and pepper.\nMarinate chicken breasts in the mixture for at least 30 minutes.\nGrill the chicken for 6-7 minutes on each side or until fully cooked.\nLet it rest for a few minutes before serving.',
        '2 chicken breasts \njuice of 1 lemon \n1 tbsp mixed fresh herbs \n2 garlic cloves \nolive oil \nsalt \npepper',
        '3',
        TRUE,
        '2023-10-24 14:30:00',
        'https://img.freepik.com/free-photo/homemade-food-party_53876-31237.jpg?w=826&t=st=1705276322~exp=1705276922~hmac=ba7ce45ad424c09e8a5a175cc29e0a08096ef974ce55799fe3b212dbd255249b',
        'Designed by Freepik',  -- img_title
        3
    ),
    (
        4,
        'fitChef2',
        'Spicy Grilled Shrimp',
        "INFO",
        120, 2, 23, 2, 0, 85,
        2,
        'Dive into the bold flavors of our Spicy Grilled Shrimp, a dish that''s both simple and bursting with taste. Succulent shrimp are marinated in a spicy blend of chili, garlic, and lime, then grilled to a sizzling finish. This recipe is a fantastic source of lean protein and is low in both calories and fat, making it a great choice for a healthy and quick meal.',
        'Preheat grill to high.\nMix together chili powder, minced garlic, lime zest, lime juice, olive oil, salt, and pepper.\nToss the shrimp in the marinade and let sit for 15 minutes.\nThread shrimp onto skewers and grill for 2-3 minutes per side.\nServe with a lime wedge.',
        '1 pound shrimp (peeled and deveined) \n1 tsp chili powder \n2 garlic cloves \nzest and juice of 1 lime \nolive oil \nsalt \npepper',
        '3',
        TRUE,
        '2023-05-05 14:30:00',
        'https://img.freepik.com/free-photo/shrimp-sauteed-garlic-soy-caramel_2829-19579.jpg?w=826&t=st=1705276562~exp=1705277162~hmac=58b4053f4e10b6fd671636826e9c25c1ad92832d7721d3308b389a616c753291',
        'Designed by Freepik',  -- img_title
        3

    ),
    (
        5,
        'fitChef2',
        'Mediterranean Quinoa Salad',
        "INFO",
        250, 30, 10, 12, 8, 300, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Indulge in the vibrant flavors of our Mediterranean Quinoa Salad. This refreshing and nutritious dish combines fluffy quinoa with a medley of colorful vegetables, including cherry tomatoes, cucumbers, and bell peppers. The tangy lemon dressing adds a zesty kick, while the crumbled feta cheese provides a creamy and salty element. Topped with fresh herbs like parsley and mint, this salad is a perfect choice for a light and satisfying meal. Enjoy the taste of the Mediterranean in every bite!',
        'Cook quinoa according to package instructions and let it cool.\nIn a large bowl, combine cooked quinoa, cherry tomatoes, cucumbers, bell peppers, red onion, and olives.\nIn a small bowl, whisk together olive oil, lemon juice, garlic, salt, and pepper to make the dressing.\nPour the dressing over the quinoa mixture and toss to combine.\nSprinkle crumbled feta cheese and fresh herbs on top.\nServe chilled and enjoy!',
        '1 cup quinoa \n1 cup cherry tomatoes, halved \n1 cup cucumber, diced \n1 cup bell peppers, diced \n1/4 cup red onion, thinly sliced \n1/4 cup Kalamata olives, pitted and halved \n2 tbsp olive oil \n2 tbsp lemon juice \n2 cloves garlic, minced \n1/2 tsp salt \n1/4 tsp black pepper \n1/4 cup crumbled feta cheese \n2 tbsp fresh parsley, chopped \n1 tbsp fresh mint, chopped',
        '3', -- UserID
        TRUE,
        '2023-04-26 14:30:00',
        'https://img.freepik.com/free-photo/meatballs-salad-tomatoes-buckwheat-porridge-white-wooden-table-healthy-food-diet-meal-buddha-bowl_2829-6110.jpg?size=626&ext=jpg&ga=GA1.1.1875319134.1702524039&semt=ais',
        'Designed by Freepik',  -- img_title
        1 -- dietary_preference
    );



-- Recipe allergies
  -- id refers to recipe id (refer to recipe table)
    -- allergy_id refers to allergy id (refer to allergies table)
Insert Into recipe_allergies (id, allergy_id) VALUES (1, 1);
Insert Into recipe_allergies (id, allergy_id) VALUES (1, 2);
Insert Into recipe_allergies (id, allergy_id) VALUES (1, 3);

Insert Into recipe_allergies (id, allergy_id) VALUES (2, 2);
Insert Into recipe_allergies (id, allergy_id) VALUES (2, 7);

Insert Into recipe_allergies (id, allergy_id) VALUES (3, 2);

Insert Into recipe_allergies (id, allergy_id) VALUES (4, 3);
Insert Into recipe_allergies (id, allergy_id) VALUES (4, 6);

-- Recipe review rating
INSERT INTO RECIPE_REVIEW_RATING
(Review, Rating, UserID, RecipeID)
VALUES
    ('This is very awesome',                            3.2, '7', 1),
    ('The recipe nice.'    ,                            5.0, '8', 1),
    ('I love this recipe!' ,                            4.0, '9', 1),
    ('I love this recipe!' ,                            4.0, '12', 1),
    ('This is very awesome',                            3.2, '7', 2),
    ('The recipe is very d',                            5.0, '8', 2),
    ('I love this recipe!' ,                            4.0, '9', 2),
    ('This is very awesome',                            3.2, '12', 2);











INSERT INTO recipe
(id, publisher, title, info, calories, carbs, protein, fat, fibre, sodium, serving_size, description, steps, ingredients, UserID, Active, createddt, img, img_title, dietary_preference, cooking_time)
VALUES
    (
        1,
        'test publisher',
        'test recipe',
        "Not Specified",
        286, 44, 11, 9, 6, 880, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'testing',
        'testing',
        'testing',
        '3', -- UserID
        TRUE,
        '2023-04-26 14:30:00',
        'https://img.freepik.com/free-photo/grilled-salmon-fillet-with-fresh-vegetable-salad-generated-by-ai_188544-21273.jpg?t=st=1706581041~exp=1706584641~hmac=a5192395751401ed16e80a0043e0f94504123f21393174683c63426ba80cba62&w=996',
        'Author : Vecstock, Designed by Freepik',  -- img_title
        1, -- dietary_preference
        30 -- cooking_time
    );

INSERT INTO RECIPE_REVIEW_RATING
(Review, Rating, UserID, RecipeID)
VALUES
    ('This is very awesome',                            3.2, '7', 1),
    ('The recipe nice.'    ,                            5.0, '8', 1),
    ('I love this recipe!' ,                            4.0, '9', 1),
    ('I love this recipe!' ,                            4.0, '12', 1),
    ('This is very awesome',                            3.2, '7', 2),
    ('The recipe is very d',                            5.0, '8', 2),
    ('I love this recipe!' ,                            4.0, '9', 2),
    ('This is very awesome',                            3.2, '12', 2);

