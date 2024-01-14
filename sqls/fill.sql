
 
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

-- then backend can jump 

-- worry about the UUID when i dont have to run a fill.sql
-- INSERT INTO USERACCOUNT (ID, Username, Password, Email, Full_Name) VALUES
--     ("1", "useraccount1", "1", "randomEmail@gmail.com"  , "Trump kun"  ),
--     ("2", "useraccount2", "1", "admin@gmail.com"        , "Admin kun"  ),
--     ("3", "useraccount3", "1", "business@gmail.com"     , "Business kun"  ),
--     ("4", "useraccount4", "1", "randomEmail@gmail.com"  , "Dietitian kun"  );


-- INSERT INTO BLOG(PUBLISHER, TITLE, INFO, Educational_Content, UserID) VALUES
--     ("Mark1", "Mark1's favourite dish", "Mark-ed", b'1', "3"),
--     ("Mark2", "Mark2's favourite dish", "Mark-ed", b'1', "3"), 
--     ("Mark3", "Mark3's favourite dish", "Mark-ed", b'1', "3"); 

-- INSERT INTO RECIPE (TITLE, STEPS, INGREDIENTS, DESCRIPTION, INFO, UserID) VALUES
--     ("BAKED CHICKEN", "1. You Bake Chicken.\n2.Done\n3.End", "200 pounds of chicken","You also need a oven", "'calories':'2000g'\n'carbs':'200g'\n'fat':'150g'\n'protein':'20g'",  "3");
 

-- INSERT INTO RECIPE_REVIEW_RATING (Rating, Review, UserID, RecipeID) VALUES
--     (3.2, "REVIEW-ed", "1", 1);
 
-- INSERT INTO BLOG_REVIEW_RATING (Rating, UserID, BlogID) VALUES
--     (3.2, "1", 1),
--     (3.2, "1", 2),
--     (3.2, "1", 3);
  
-- -- INSERT INTO REVIEW_RATING (RATING, USERID, RecipeID) VALUES
-- -- (3.2, "4", 1);
-- -- associated ID can be either Blog post or recipe
-- -- rating can be nothing

-- --	ID VARCHAR(255) NOT NULL DEFAULT (UUID()),
--  INSERT INTO Registered_User (ID, DOB) VALUES
--     ("1",  "1969-09-11" );

-- INSERT INTO User_Info_Over_Time (UserID, Weight, Info) VALUES
--     ("1", b'1', 150.50);
   
-- INSERT INTO User_Info_Over_Time (UserID, Weight, Info, Saved_Date) VALUES
--     ("1", b'1', 150.50, "2022-12-08" );

-- INSERT INTO System_Admin(ID, DOB) VALUES
--     ("2", "2022-01-20");
 

-- INSERT INTO Business_User(ID, Company_Name, UEN, Dietitan_Account) VALUES
--     ("3", "Trump Corporate", "4799-577594-29584",  b'0') ;
-- -- lock & enabled & expired is something that comes with
-- -- UserDetails interface of Spring Security
  

-- INSERT INTO RECIPE (TITLE, STEPS, INGREDIENTS, DESCRIPTION, INFO) VALUES
-- ("BAKED CHICKEN", "1. You Bake Chicken.\n2.Done\n3.End", "200 pounds of chicken","You also need a oven", "'calories':'2000g'\n'carbs':'200g'\n'fat':'150g'\n'protein':'20g'");
 

-- User Account
INSERT INTO USERACCOUNT 
(ID, Username, enabled, Password, Email, Full_Name, role, created_date) 
VALUES
("1",  "user1",  1, "pw1", "1@gmail.com" , "John",    "ADMIN",           DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
("2",  "user2",  1, "pw1", "2@gmail.com" , "William", "ADMIN",           DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
("3",  "user3",  1, "pw1", "3@gmail.com" , "Patricia","BUSINESS_USER",   DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
("4",  "user4",  0, "pw1", "4@gmail.com" , "Mike",    "BUSINESS_USER",   DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
("5",  "user5",  1, "pw1", "5@gmail.com" , "Ben",     "NUTRITIONIST",    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
("6",  "user6",  1, "pw1", "6@gmail.com" , "Sam",     "NUTRITIONIST",    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
("7",  "user7",  1, "pw1", "7@gmail.com" , "John",    "REGISTERED_USER", DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
("8",  "user8",  1, "pw1", "8@gmail.com" , "William", "REGISTERED_USER", DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
("9",  "user9",  1, "pw1", "9@gmail.com" , "Patricia","REGISTERED_USER", DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
("10", "user10", 1, "pw1", "10@gmail.com", "Mike",    "REGISTERED_USER", DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
("11", "user11", 1, "pw1", "11@gmail.com", "Ben",     "REGISTERED_USER", DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
("12", "user12", 1, "pw1", "12@gmail.com", "Sam",     "REGISTERED_USER", DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY));


-- System admin
INSERT INTO System_Admin
 (ID, DOB) 
VALUES
    ("1", "1997-01-20"),
    ("2", "1990-02-10");


-- Business user
INSERT INTO Business_User
 (ID, Company_Name, UEN,contact_number, company_address) 
VALUES
    ("3", "Trump Enterprise", "4799-577594-29584", "92345678", "123, Jurong Street, Singapore 123456"),
    ("4", "Star Enterprise", "4799-577594-29777", "82345678", "123, Tampines Street, Singapore 123456");

-- Nutritionist
INSERT INTO Nutritionist
 (ID, Company_Name, company_address, contact_number) 
VALUES
    ("5", "Wellness Limited", "123, Bedok Street, Singapore 123456", "98345678") ,
    ("6", "Shine Company", "23, Hougang, Singapore 123456", "88345678") ;

-- Registered user
 INSERT INTO Registered_User 
 (ID, DOB) 
VALUES
    ("7",  "1999-09-23" ),
    ("8",  "1954-09-14" ),
    ("9",  "1999-09-15" ),
    ("10", "1995-09-16" ),
    ("11", "1993-09-16" ),
    ("12", "1995-09-12" );

-- User info over time (for registered user)
INSERT INTO User_Info_Over_Time 
 (UserID, Weight, Info, Saved_Date)
VALUES
    ("7",  b'1', 70.50,  "2022-12-08" ),
    ("7",  b'1', 60.50,  "2023-10-08" ),
    ("7",  b'1', 50.50,  "2024-12-08" ),
    ("8",  b'1', 80.50,  "2022-12-08" ),
    ("8",  b'1', 70.50,  "2023-10-08" ),
    ("8",  b'1', 60.50,  "2024-12-08" ),
    ("9",  b'1', 90.50,  "2022-12-08" ),
    ("9",  b'1', 80.50,  "2023-10-08" ),
    ("9",  b'1', 70.50,  "2024-12-08" ),
    ("10", b'1', 100.50, "2022-12-08" ),
    ("10", b'1', 90.50,  "2023-10-08" ),
    ("10", b'1', 80.50,  "2024-12-08" ),
    ("11", b'1', 110.50, "2022-12-08" ),
    ("11", b'1', 100.50, "2023-10-08" ),
    ("11", b'1', 90.50,  "2024-12-08" ),
    ("12", b'1', 120.50, "2022-12-08" ),
    ("12", b'1', 110.50, "2023-10-08" ),
    ("12", b'1', 100.50, "2024-12-08" );



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


-- 4. Blog post category
Insert into blog_post_category 
 (subcategory_name) 
VALUES
("Cookbook"),
("Kitchenware"),
("Miscellaneous");

-- 5. Educational content category
Insert into educational_content_category 
 (subcategory_name) 
VALUES
("Healthy Eating"),
("Healthy Lifestyle");


-- Blog (Business blog and Educational content)
INSERT INTO Blog 
(id, CreatedDT, Educational_Content, Publisher, Title, Info, UserID, img, blog_type_id)
VALUES
(
    '1',
    '2024-01-09 08:24:52',  -- CreatedDT
    0,                       -- Educational_Content (0 for false/not educational)
    'businessUser3',  -- Publisher
    'Revolutionize Your Kitchen with the SmartChef Pro',  -- Title
    '<p>Welcome to the future of cooking with the <strong>SmartChef Pro</strong>, the all-in-one kitchen appliance that promises to make cooking a breeze. From amateur cooks to professional chefs, the SmartChef Pro is designed to enhance your culinary skills. Featuring a suite of smart functions, including automated temperature control, self-stirring pots, and a built-in digital cookbook, this revolutionary device ensures every meal is cooked to perfection.</p><p>With its sleek design, intuitive touch interface, and Wi-Fi connectivity, the SmartChef Pro syncs seamlessly with your smart home ecosystem. Receive real-time updates on your meal’s progress directly to your smartphone or virtual assistant. Say goodbye to the guesswork and hello to precision with the SmartChef Pro advanced sensors, which guarantee the exact cooking duration and temperature for all your dishes.</p><p>Whether you are simmering, sautéing, baking, or grilling, the SmartChef Pro adapts to your cooking style. Its durable construction and easy-to-clean surfaces make it a valuable addition to any kitchen. Embrace the art of cooking without the hassle. Experience the joy of effortless meal preparation with the SmartChef Pro today!</p>',
    3,
    'https://img.freepik.com/free-photo/electric-blender-mixer-juicer-set_140725-7263.jpg?w=740&t=st=1705070791~exp=1705071391~hmac=b015f8ab2fb6e4f2b74c8f01a42dd579d7f7fa0db8c82eb8890a57767dd21722',
    2 -- blog_type_id
),
(
    '2',
    '2023-12-15 10:00:00', 
    0, 
    'businessUser3', 
    'Gourmet Flavors: A Culinary Adventure', 
    '<p>Embark on a culinary adventure with <strong>Gourmet Flavors: A Culinary Adventure</strong>. This cookbook is a treasure trove of exotic recipes from around the globe, meticulously compiled by world-renowned chefs. Dive into a world of unique tastes and aromas that will transport your senses to distant lands. Each recipe is presented with easy-to-follow instructions and tips for perfect execution, even for home cooks.</p><p>Priced at $35, this cookbook is an excellent addition to any kitchen library, offering inspiration for both everyday meals and special occasions. Elevate your cooking game with the diverse flavors and creative dishes in <strong>Gourmet Flavors</strong>.</p>',
    3,
    'https://img.freepik.com/free-photo/raw-chicken-legs-white-platter-with-recipe-book-aside_114579-19690.jpg?w=826&t=st=1705070868~exp=1705071468~hmac=e1a88cb50eb2b5f76e1fc8fc11f4982d0f0a6d0e8c292861f36827032d7a8e0a',
    1
),
(
    '3',
    '2023-03-10 09:30:00', 
    0, 
    'businessUser1', 
    'Eco-Friendly Cookware', 
    '<p>Introducing our <strong>Eco-Friendly Cookware Set</strong>, the ultimate solution for sustainable cooking. Crafted from 100% recycled materials, this cookware set is designed for environmentally conscious cooks. The non-stick surface ensures healthy cooking with minimal oil, while the even heat distribution guarantees perfect results every time.</p><p>For just $120, this set includes two frying pans, a saucepan, and a casserole dish, all compatible with induction cooktops. Make a positive impact on the environment while enjoying the art of cooking with our Eco-Friendly Cookware Set.</p>',
    1,
    'https://img.freepik.com/free-photo/elegant-kitchen-utensils-set-harmonious-fusion-practicality-style-meet-your-culinary-requirements_157027-2322.jpg?t=st=1705070931~exp=1705074531~hmac=ee69b9c114083966eda13104cd33630154605f972460e21046122399baef97b0&w=996',
    1
),
(
    '4',
    '2023-04-20 15:45:00', 
    0, 
    'businessUser3', 
    'Artisan Bread Baking Kit', 
    '<p>Discover the joy of homemade bread with our <strong>Artisan Bread Baking Kit</strong>. Ideal for beginners and seasoned bakers alike, this kit includes everything needed to create delicious, crusty loaves. The kit comes with a high-quality Dutch oven, a proofing basket, a dough scraper, and a recipe booklet with step-by-step instructions for various bread types.</p><p>Priced at $50, the Artisan Bread Baking Kit is perfect for anyone looking to delve into the world of bread making. Impress your family and friends with fresh, artisanal bread right from your kitchen!</p>',
    3,
    'https://img.freepik.com/free-photo/homemade-dough-rustic-wood-table-generated-by-ai_188544-36317.jpg?t=st=1705070996~exp=1705074596~hmac=fbd8047e298800cb08dae2f699d5fca9355aaef5af3c70624aa5955be5d151b9&w=996',
    3
),
(
    '5',
    '2023-04-24 11:00:00',
    0,
    'businessUser3',
    '30-Minute Meals Cookbook',
    '<p>Introducing the <strong>30-Minute Meals Cookbook</strong>, a must-have for busy food enthusiasts. This comprehensive cookbook is filled with delicious recipes that can be prepared in 30 minutes or less. From quick family dinners to last-minute gatherings, these meals are designed to save time without compromising on taste. Each recipe includes simple instructions and tips to make cooking a breeze.</p><p>Available for $35, the 30-Minute Meals Cookbook is perfect for anyone looking to create mouth-watering dishes in a short amount of time.</p>',
    3,
    'https://img.freepik.com/free-photo/snack-board-with-crackers-vegetables-with-cookbook-aside_114579-13047.jpg?w=826&t=st=1705109775~exp=1705110375~hmac=ad70ec1e69dc46054199343d82b58482d5e241d05fe14b4f9e8d11d41e4d5e74',
    1
),
(
    '6',
    '2023-04-25 13:45:00',
    0,
    'businessUser3',
    'Ultimate Kitchen Gadget Collection',
    '<p>Upgrade your cooking experience with our <strong>Ultimate Kitchen Gadget Collection</strong>. This exclusive collection features the latest in kitchen technology, including a smart blender, a digital food scale, and a multi-purpose air fryer. Designed for both novice cooks and culinary experts, these gadgets will revolutionize the way you prepare meals, making cooking more efficient and enjoyable.</p><p>Priced at $150, the Ultimate Kitchen Gadget Collection is an excellent investment for anyone who loves to cook and wants to enhance their kitchen with modern tools.</p>',
    3,
    'https://img.freepik.com/free-photo/flat-lay-kitchen-utensils-arrangement_23-2149491471.jpg?w=826&t=st=1705109971~exp=1705110571~hmac=d645b7cd8e2be87479127706275046fe036edf765c03c47c8841955cb7ce25e2',
    2
),
(
    '7',
    '2023-04-26 14:30:00',
    0,
    'businessUser3',
    'Exploring World Cuisines: A Culinary Adventure',
    '<p>Join us on a delicious journey with <strong>Exploring World Cuisines: A Culinary Adventure</strong>. This blog series dives into the diverse and rich culinary traditions of various countries. Each post features traditional recipes, cooking techniques, and the cultural significance of different dishes. Whether it’s the spicy flavors of Indian cuisine or the refined tastes of French cooking, this series offers a window into the world’s kitchens.</p><p>Dive into culinary exploration and discover new flavors and cooking styles from around the globe.</p>',
    3,
    'https://img.freepik.com/free-photo/special-dessert-cookbook-recipe-valentine-rsquo-s-edition_53876-97350.jpg?w=826&t=st=1705110085~exp=1705110685~hmac=f565c5dea8726b878afbbc4027db165577462fccd12a5323e7f5a5d6173796de',
    1
);

--  Blog review rating
INSERT INTO BLOG_REVIEW_RATING 
 (Review, Rating, UserID, BlogID) 
VALUES
    ("This is very awesome", 3.2, "7", 1),
    ("The blog post is very descriptive and informative.", 5.0, "8", 1),
    ("I love this blog post!", 4.0, "9", 1),
    ("This blog is very useful", 3.2, "10", 1),
    ("The blog post is very descriptive and informative.", 5.0, "11", 1),
    ("I love this blog post!", 4.0, "12", 1),
    ("This is very awesome", 3.2, "7", 2),
    ("This blog post is incredibly insightful and well-written.", 5.0, "8", 2),
    ("I love this blog post!", 4.0, "9", 2),
    ("This is very awesome", 3.2, "10", 2),
    ("The blog post is very descriptive.", 5.0, "11", 2),
    ("I love this blog post!", 4.0, "12", 2),
    ("This is very informative", 3.2, "7", 3),
    ("The blog post is very descriptive and informative.", 5.0, "8", 3),
    ("I love this blog post!", 4.0, "9", 3),
    ("Highly recommended", 3.2, "10", 3),
    ("The blog post is very descriptive and informative.", 5.0, "11", 3),
    ("I love this blog post!", 4.0, "12", 3),
    ("This is very nice", 3.2, "7", 4);




-- Recipe

-- cooking time
-- serving size
-- createddt
-- last_updateddt
-- publisher

-- Calories(kcal), Carbs(g), Protein(g), Fat(g), Fibre(g), Sodium(mg),
-- SAMPLE -- 
-- INSERT INTO RECIPE (Title, Info, Calories, Protein, Fat, Fibre, Sodium, ServingSize, Steps, Description, Ingredients, UserID, Active) 
-- VALUES ('New Recipe Title', 'New Food Item', 123.45, 23.45, 34.56, 45.67, 56.78, 4, 'New Recipe Steps', 'New Recipe Description', 'New Recipe Ingredients', [UserID], TRUE);

-- even though steps is stored in this way(1. 2. 3.), but in future numberings of steps should be done in frontend and removed from the string stored into database
INSERT INTO recipe 
 (id, title, info, calories, carbs, protein, fat, fibre, sodium, serving_size, description, steps, ingredients, UserID, Active) 
VALUES
(   
    1,
    "Easy Grilled Salmon",
    "INFO",
    129, 1, 20, 8, 0, 8, -- calories, carbs, protein, fat, fibre, sodium
    4,
    "Indulge in the simplicity and exquisite flavors of our Easy Grilled Salmon recipe. Perfect for a quick and healthy meal, this dish showcases succulent salmon fillets seasoned to perfection and grilled to a mouthwatering, golden perfection. The straightforward preparation ensures a delicious, light, and satisfying dish, making it an ideal choice for both novice and seasoned cooks alike. Elevate your dining experience with this effortlessly impressive grilled salmon, offering a delightful blend of simplicity and gourmet taste.",
    "1. Heat grill up to 400 degrees.\n2. In a bowl, mix together, garlic, dill and lemon rind.\n3. Place salmon on a flat dish and coat liberally with olive oil and season with a generous pinch of both salt and pepper.\n4. Cover salmon with the garlic, dill and lemon rind mixture and put on grill, skin side down.\n5. Grill for 5 minutes and turn salmon over for another 3-4 minutes and cook until fish is still moist but flaky.",
    "8onces salmon filet \n2 garlic cloves \n1 lemon rind \n2 tsp fresh dill \nsalt and pepper \nolive oil",
    "3", -- UserID
    TRUE
),
(   
    2,
    "Cajun Chicken Pasta",
    "INFO",
    324, 14, 8, 6, 6, 6, -- calories, carbs, protein, fat, fibre, sodium
    4,
    "Indulge your taste buds with our delectable Cajun Chicken Pasta recipe, a culinary journey that marries the bold and spicy flavors of Cajun seasoning with succulent chicken and perfectly cooked pasta. This dish boasts a harmonious blend of tender, blackened chicken strips, vibrant bell peppers, and onions, all sautéed to perfection. The creamy Alfredo sauce, infused with Cajun spices, adds a velvety richness that ties the entire dish together. Garnished with fresh parsley for a pop of color and flavor, this Cajun Chicken Pasta is a delightful and satisfying meal that brings the spirit of Louisiana to your dinner table. Prepare to savor a symphony of tastes in every bite!",
    "1. Prep all your vegetables.\n2. In a small blender make a slurry by combining milk, flour and cream cheese. Set aside.\n3. Season chicken generously with Cajun seasoning, garlic powder and salt.\n4. Prepare pasta in salted water according to package directions.\n5. Heat a large heavy nonstick skillet over medium-high heat; spray with oil and add half of the chicken.\n6. Sauté 5 to 6 minutes or until done, set aside on a plate and repeat with the remaining chicken. Set aside.\n7. Add olive oil to the skillet and reduce to medium; add bell peppers, onions, and garlic to skillet, sauté 3-4 minutes.\n8. Add mushrooms and tomatoes and sauté 3-4 more minutes or until vegetables are tender.\n9. Season with 1/4 tsp salt, garlic powder and fresh cracked pepper to taste.\n10. Reduce heat to medium-low; add chicken broth and pour in slurry stirring about 2 minutes.\n11. Return chicken to skillet; adjust salt and Cajun seasoning to taste, cook another minute or two until hot, then add linguine; toss well to coat.\n12. Top with chopped scallions and enjoy!",
    "8 ounces uncooked linguine \n1 pound chicken breast, cut into strips \n1-2 tsp Cajun seasoning, or more to taste \n1 tbsp garlic powder \n1/2 tsp kosher salt \n1 tbsp olive oil \n1 medium red bell pepper, thinly sliced \n1 medium yellow bell pepper, thinly sliced \n8 oz fresh mushrooms, sliced \n1/2 red onion, sliced \n3 cloves garlic, minced \n2 medium tomatoes, diced \n1 tbsp fresh parsley, chopped \n1 cup fat free low sodium chicken broth \n2 tbsp light cream cheese \n1/3 cup skim milk \n1 tbsp flour \nolive oil spray",
    "3", -- UserID
    TRUE
);

-- Recipe review rating
INSERT INTO RECIPE_REVIEW_RATING 
 (Review, Rating, UserID, RecipeID)
VALUES
    ("This is very awesome", 3.2, "7", 1),
    ("The recipe is very descriptive and informative.", 5.0, "8", 1),
    ("I love this recipe!", 4.0, "9", 1),
    ("I love this recipe!", 4.0, "12", 1),
    ("This is very awesome", 3.2, "7", 2),
    ("The recipe is very descriptive and informative.", 5.0, "8", 2),
    ("I love this recipe!", 4.0, "9", 2),
    ("This is very awesome", 3.2, "10", 2),
    ("The recipe is very descriptive.", 5.0, "11", 2),
    ("I love this recipe!", 4.0, "12", 2);
