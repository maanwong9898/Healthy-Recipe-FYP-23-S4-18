
 
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
 (User_ID, weight, date)
VALUES
    ("7", 70.50,  "2022-12-08" ),
    ("7", 60.50,  "2023-10-08" ),
    ("7", 50.50,  "2024-12-08" ),
    ("8", 80.50,  "2022-12-08" ),
    ("8", 70.50,  "2023-10-08" ),
    ("8", 60.50,  "2024-12-08" ),
    ("9", 90.50,  "2022-12-08" ),
    ("9", 80.50,  "2023-10-08" ),
    ("9", 70.50,  "2024-12-08" ),
    ("10", 100.50, "2022-12-08" ),
    ("10", 90.50,  "2023-10-08" ),
    ("10", 80.50,  "2024-12-08" ),
    ("11", 110.50, "2022-12-08" ),
    ("11", 100.50, "2023-10-08" ),
    ("11", 90.50,  "2024-12-08" ),
    ("12", 120.50, "2022-12-08" ),
    ("12", 110.50, "2023-10-08" ),
    ("12", 100.50, "2024-12-08" );


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


-- Blog
INSERT INTO Blog
(id, CreatedDT, Publisher, Title, Info, UserID, img, blog_type_id)
VALUES
    (
        '1',
        '2024-01-09 08:24:52',  -- CreatedDT
        'businessUser3',  -- Publisher
        'Revolutionize Your Kitchen with the SmartChef Pro',  -- Title
        'Welcome to the future of cooking with the SmartChef Pro, the all-in-one kitchen appliance that promises to make cooking a breeze. From amateur cooks to professional chefs, the SmartChef Pro is designed to enhance your culinary skills. Featuring a suite of smart functions, including automated temperature control, self-stirring pots, and a built-in digital cookbook, this revolutionary device ensures every meal is cooked to perfection. \nWith its sleek design, intuitive touch interface, and Wi-Fi connectivity, the SmartChef Pro syncs seamlessly with your smart home ecosystem. Receive real-time updates on your meal’s progress directly to your smartphone or virtual assistant. Say goodbye to the guesswork and hello to precision with the SmartChef Pro advanced sensors, which guarantee the exact cooking duration and temperature for all your dishes. Whether you are simmering, sautéing, baking, or grilling, the SmartChef Pro adapts to your cooking style.',
        3,
        'https://img.freepik.com/free-photo/electric-blender-mixer-juicer-set_140725-7263.jpg?w=740&t=st=1705070791~exp=1705071391~hmac=b015f8ab2fb6e4f2b74c8f01a42dd579d7f7fa0db8c82eb8890a57767dd21722',
        2 -- blog_type_id
    ),
    (
        '2',
        '2023-12-15 10:00:00',
        'businessUser3',
        'Gourmet Flavors: A Culinary Adventure',
        'Embark on a culinary adventure with Gourmet Flavors: A Culinary Adventure. This cookbook is a treasure trove of exotic recipes from around the globe, meticulously compiled by world-renowned chefs. Dive into a world of unique tastes and aromas that will transport your senses to distant lands. Each recipe is presented with easy-to-follow instructions and tips for perfect execution, even for home cooks.\nPriced at $35, this cookbook is an excellent addition to any kitchen library, offering inspiration for both everyday meals and special occasions. Elevate your cooking game with the diverse flavors and creative dishes in Gourmet Flavors.',
        3,
        'https://img.freepik.com/free-photo/raw-chicken-legs-white-platter-with-recipe-book-aside_114579-19690.jpg?w=826&t=st=1705070868~exp=1705071468~hmac=e1a88cb50eb2b5f76e1fc8fc11f4982d0f0a6d0e8c292861f36827032d7a8e0a',
        1
    ),
    (
        '3',
        '2023-03-10 09:30:00',
        'businessUser1',
        'Eco-Friendly Cookware',
        'Introducing our <strong>Eco-Friendly Cookware Set, the ultimate solution for sustainable cooking. Crafted from 100% recycled materials, this cookware set is designed for environmentally conscious cooks. The non-stick surface ensures healthy cooking with minimal oil, while the even heat distribution guarantees perfect results every time. \nFor just $120, this set includes two frying pans, a saucepan, and a casserole dish, all compatible with induction cooktops. Make a positive impact on the environment while enjoying the art of cooking with our Eco-Friendly Cookware Set.',
        1,
        'https://img.freepik.com/free-photo/elegant-kitchen-utensils-set-harmonious-fusion-practicality-style-meet-your-culinary-requirements_157027-2322.jpg?t=st=1705070931~exp=1705074531~hmac=ee69b9c114083966eda13104cd33630154605f972460e21046122399baef97b0&w=996',
        1
    ),
    (
        '4',
        '2023-04-20 15:45:00',
        'businessUser3',
        'Artisan Bread Baking Kit',
        'Discover the joy of homemade bread with our Artisan Bread Baking Kit. Ideal for beginners and seasoned bakers alike, this kit includes everything needed to create delicious, crusty loaves. The kit comes with a high-quality Dutch oven, a proofing basket, a dough scraper, and a recipe booklet with step-by-step instructions for various bread types. \nPriced at $50, the Artisan Bread Baking Kit is perfect for anyone looking to delve into the world of bread making. Impress your family and friends with fresh, artisanal bread right from your kitchen!',
        3,
        'https://img.freepik.com/free-photo/homemade-dough-rustic-wood-table-generated-by-ai_188544-36317.jpg?t=st=1705070996~exp=1705074596~hmac=fbd8047e298800cb08dae2f699d5fca9355aaef5af3c70624aa5955be5d151b9&w=996',
        3
    ),
    (
        '5',
        '2023-04-24 11:00:00',
        'businessUser3',
        '30-Minute Meals Cookbook',
        'Introducing the 30-Minute Meals Cookbook, a must-have for busy food enthusiasts. This comprehensive cookbook is filled with delicious recipes that can be prepared in 30 minutes or less. From quick family dinners to last-minute gatherings, these meals are designed to save time without compromising on taste. Each recipe includes simple instructions and tips to make cooking a breeze.\nAvailable for $35, the 30-Minute Meals Cookbook is perfect for anyone looking to create mouth-watering dishes in a short amount of time.',
        3,
        'https://img.freepik.com/free-photo/snack-board-with-crackers-vegetables-with-cookbook-aside_114579-13047.jpg?w=826&t=st=1705109775~exp=1705110375~hmac=ad70ec1e69dc46054199343d82b58482d5e241d05fe14b4f9e8d11d41e4d5e74',
        1
    ),
    (
        '6',
        '2023-04-25 13:45:00',
        'businessUser3',
        'Ultimate Kitchen Gadget Collection',
        'Upgrade your cooking experience with our Ultimate Kitchen Gadget Collection. This exclusive collection features the latest in kitchen technology, including a smart blender, a digital food scale, and a multi-purpose air fryer. Designed for both novice cooks and culinary experts, these gadgets will revolutionize the way you prepare meals, making cooking more efficient and enjoyable.\nPriced at $150, the Ultimate Kitchen Gadget Collection is an excellent investment for anyone who loves to cook and wants to enhance their kitchen with modern tools.',
        3,
        'https://img.freepik.com/free-photo/flat-lay-kitchen-utensils-arrangement_23-2149491471.jpg?w=826&t=st=1705109971~exp=1705110571~hmac=d645b7cd8e2be87479127706275046fe036edf765c03c47c8841955cb7ce25e2',
        2
    ),
    (
        '7',
        '2023-04-26 14:30:00',
        'businessUser3',
        'Exploring World Cuisines: A Culinary Adventure',
        'Join us on a delicious journey with <strong>Exploring World Cuisines: A Culinary Adventure. This blog series dives into the diverse and rich culinary traditions of various countries. Each post features traditional recipes, cooking techniques, and the cultural significance of different dishes. Whether it’s the spicy flavors of Indian cuisine or the refined tastes of French cooking, this series offers a window into the world’s kitchens.\nDive into culinary exploration and discover new flavors and cooking styles from around the globe.',
        3,
        'https://img.freepik.com/free-photo/special-dessert-cookbook-recipe-valentine-rsquo-s-edition_53876-97350.jpg?w=826&t=st=1705110085~exp=1705110685~hmac=f565c5dea8726b878afbbc4027db165577462fccd12a5323e7f5a5d6173796de',
        1
    );

--  Blog review rating
INSERT INTO BLOG_REVIEW_RATING 
 (Review, Rating, UserID, BlogID) 
VALUE  
    ('This is very awesome',                                      5.0, '7', 1),
    ('The blog post is very descriptive and informative.',        5.0, '8', 1),
    ('I love this blog post!',                                    4.0, '9', 1),
    ('This blog is very useful',                                  3.0, '10', 1),
    ('The blog post is very descriptive and informative.',        5.0, '11', 1),
    ('I love this blog post!',                                    3.0, '12', 1),
    ('This is very awesome',                                      2.0, '7', 2),
    ('This blog post is incredibly insightful and well-written.', 5.0, '8', 2),
    ('I love this blog post!',                                    5.0, '9', 2),
    ('This is very awesome',                                      3.2, '10', 2),
    ('The blog post is very descriptive.',                        5.0, '11', 2),
    ('This is very informative',                                  3.2, '7', 3),
    ('The blog post is very descriptive and informative.',        5.0, '8', 3),
    ('I love this blog post!',                                    4.0, '9', 3),
    ('Highly recommended',                                        2.0, '10', 3),
    ('The blog post is very descriptive and informative.',        5.0, '11', 3),
    ('I love this blog post!',                                    4.0, '12', 3);


-- Educational content
INSERT INTO educational_content
(id, CreatedDT, Publisher, Title, Info, UserID, img, educational_content_type_id)
VALUES
    (
        '1',
        '2023-01-20 15:30:00',  -- CreatedDT
        'healthGuru1',  -- Publisher
        'The Green Smoothie Revolution',  -- Title
        'Join the Green Smoothie Revolution and embrace a healthier lifestyle! Our latest post features a variety of delicious and nutritious green smoothie recipes. Each recipe is crafted to boost energy, aid in detoxification, and provide essential vitamins and minerals. From kale and spinach to exotic fruits, we cover a range of ingredients that cater to all taste preferences. Perfect for busy individuals seeking a quick and healthy meal option.\nLearn how to blend the perfect green smoothie, understand the health benefits of each ingredient, and start your day with a burst of energy!',
        3,
        'https://img.freepik.com/free-photo/healthy-drink-vegetable-smoothie_1150-26221.jpg?w=360&t=st=1705800697~exp=1705801297~hmac=9b7d0b1aaaed533ee5244a56a4676a270c76de872b2582203d5fb9da0157242a',
        1 -- educational_content_type_id
    ),
    (
        '2',
        '2024-01-15 09:00:00',
        'healthGuru1',
        'Mindful Eating: A Guide to Conscious Consumption',
        'Discover the art of Mindful Eating with our comprehensive guide. This post explores the concept of conscious consumption, focusing on how to enjoy meals more fully, understand hunger cues, and make healthier food choices. We provide practical tips for slowing down mealtime, appreciating the flavors and textures of food, and reducing overeating. Mindful Eating is not just a diet—it is a lifestyle change that can lead to improved digestion, better mental clarity, and a more harmonious relationship with food.',
        3,
        'https://img.freepik.com/free-vector/healthy-unhealthy-food_23-2148560005.jpg?w=826&t=st=1705800246~exp=1705800846~hmac=1c1105f17457c12ee220947334d58201393909595b2d062d09efeb1eedde1b26',
        2 -- educational_content_type_id
    ),
    (
        '3',
        '2024-01-05 12:00:00',
        'fitChef2',
        'Plant-Based Power: Easy Vegan Recipes',
        'Explore the world of plant-based cuisine with our "Plant-Based Power: Easy Vegan Recipes" blog post. This collection of recipes is designed for anyone looking to incorporate more plant-based meals into their diet. Whether you are a full-time vegan or just curious about plant-based eating, these recipes are easy, delicious, and nutritious. Each dish is packed with flavors and nutrients, showcasing how versatile and satisfying vegan cooking can be. From hearty soups to vibrant salads and delectable desserts, these recipes are perfect for anyone seeking a healthier and more sustainable lifestyle.',
        4,
        'https://img.freepik.com/free-photo/top-view-assortment-vegetables-paper-bag_23-2148853335.jpg?w=826&t=st=1705800274~exp=1705800874~hmac=0f2bda18276ed93d77da727a3025ffb9746b81739a32548a0b0504972d274033',  -- Image URL
        2 -- educational_content_type_id
    ),
    (
        '4',
        '2024-02-01 10:00:00',
        'nutritionNinja4',
        'Superfoods 101: Nature Powerhouses',
        'Dive into the world of Superfoods with our "Superfoods 101: Nature Powerhouses" guide. This educational post provides insights into foods that are densely packed with nutrients, including antioxidants, vitamins, and minerals. Discover how incorporating foods like berries, nuts, seeds, and leafy greens into your diet can boost your health. Learn about the unique benefits of each superfood, how to include them in your daily meals, and the science behind their health-boosting properties. Ideal for anyone aiming to enhance their diet with nutrient-rich choices.',
        3,
        'https://img.freepik.com/free-photo/different-vegetables-nuts-table-flat-lay-top-view_1150-42329.jpg?w=826&t=st=1705800521~exp=1705801121~hmac=1787013a4c2045b3f7706099eccf3ff31694f9793283af940fe7aaf359356789',
        1
    ),
    (
        '5',
        '2024-02-10 16:45:00',
        'wellnessWarrior5',
        'Hydration for Health: The Importance of Water',
        'Our latest post, "Hydration for Health: The Importance of Water," emphasizes the crucial role of hydration in maintaining overall health. This guide covers the benefits of staying hydrated, how much water you should drink daily, and the signs of dehydration. It also debunks common myths about hydration and provides creative ideas for infusing water with fruits and herbs for added flavor. This post is essential reading for anyone looking to improve their daily water intake and understand the vital role water plays in our well-being.',
        3,
        'https://img.freepik.com/free-photo/water-glass-outdoor_1203-6642.jpg?w=826&t=st=1705800570~exp=1705801170~hmac=8269658da4381f7537511cc6bd9d151342c072e40b322141d0f5a03a9d1740d0',
        2
    ),
    (
        '6',
        '2024-02-20 14:30:00',
        'healthyHabits6',
        'Balancing Your Diet: A Beginner’s Guide',
        'Introducing "Balancing Your Diet: A Beginner’s Guide," a comprehensive post for those starting their journey towards a balanced diet. This piece breaks down the basics of nutrition, explaining macronutrients and micronutrients, and their importance in daily intake. It offers simple strategies for creating balanced meals, understanding portion sizes, and making healthier food choices. This guide is a great resource for anyone who wants to learn the fundamentals of nutrition and start implementing a more balanced and health-conscious diet in their life.',
        4,
        'https://img.freepik.com/free-vector/nutrition-label-collection-design_23-2149520992.jpg?w=740&t=st=1705800614~exp=1705801214~hmac=353c17672983e62bc96f24ca84070dde2831767b10a078b4f08e5bc5f6b2bf31',
        1
    );


-- Recipe
INSERT INTO recipe 
 (id, title, info, calories, carbs, protein, fat, fibre, sodium, serving_size, description, steps, ingredients, UserID, Active, createddt, img) 
VALUES
(   
    1,
    "Easy Grilled Salmon",
    "INFO",
    129, 1, 20, 8, 0, 8, -- calories, carbs, protein, fat, fibre, sodium
    4,
    "Indulge in the simplicity and exquisite flavors of our Easy Grilled Salmon recipe. Perfect for a quick and healthy meal, this dish showcases succulent salmon fillets seasoned to perfection and grilled to a mouthwatering, golden perfection. The straightforward preparation ensures a delicious, light, and satisfying dish, making it an ideal choice for both novice and seasoned cooks alike. Elevate your dining experience with this effortlessly impressive grilled salmon, offering a delightful blend of simplicity and gourmet taste.",
    "Heat grill up to 400 degrees.\nIn a bowl, mix together, garlic, dill and lemon rind.\nPlace salmon on a flat dish and coat liberally with olive oil and season with a generous pinch of both salt and pepper.\nCover salmon with the garlic, dill and lemon rind mixture and put on grill, skin side down.\nGrill for 5 minutes and turn salmon over for another 3-4 minutes and cook until fish is still moist but flaky.",
    "8onces salmon filet \n2 garlic cloves \n1 lemon rind \n2 tsp fresh dill \nsalt and pepper \nolive oil",
    "3", -- UserID
    TRUE,
    '2023-04-26 14:30:00',
    "https://img.freepik.com/free-photo/top-view-delicious-meal-black-tray-dark-wooden-background-with-decorations_176474-3955.jpg?w=740&t=st=1705276190~exp=1705276790~hmac=8f67bc712f9598c9195f66b411ab4e634296e824207650189d8dbba510bab9d4"
),
(   
    2,
    "Cajun Chicken Pasta",
    "INFO",
    324, 14, 8, 6, 6, 6, -- calories, carbs, protein, fat, fibre, sodium
    4,
    "Indulge your taste buds with our delectable Cajun Chicken Pasta recipe, a culinary journey that marries the bold and spicy flavors of Cajun seasoning with succulent chicken and perfectly cooked pasta. This dish boasts a harmonious blend of tender, blackened chicken strips, vibrant bell peppers, and onions, all sautéed to perfection. The creamy Alfredo sauce, infused with Cajun spices, adds a velvety richness that ties the entire dish together. Garnished with fresh parsley for a pop of color and flavor, this Cajun Chicken Pasta is a delightful and satisfying meal that brings the spirit of Louisiana to your dinner table. Prepare to savor a symphony of tastes in every bite!",
    "Prep all your vegetables.\nIn a small blender make a slurry by combining milk, flour and cream cheese. Set aside.\nSeason chicken generously with Cajun seasoning, garlic powder and salt.\nPrepare pasta in salted water according to package directions.\nHeat a large heavy nonstick skillet over medium-high heat; spray with oil and add half of the chicken.\nSauté 5 to 6 minutes or until done, set aside on a plate and repeat with the remaining chicken. Set aside.\nAdd olive oil to the skillet and reduce to medium; add bell peppers, onions, and garlic to skillet, sauté 3-4 minutes.\nAdd mushrooms and tomatoes and sauté 3-4 more minutes or until vegetables are tender.\nSeason with 1/4 tsp salt, garlic powder and fresh cracked pepper to taste.\nReduce heat to medium-low; add chicken broth and pour in slurry stirring about 2 minutes.\nReturn chicken to skillet; adjust salt and Cajun seasoning to taste, cook another minute or two until hot, then add linguine; toss well to coat.\nTop with chopped scallions and enjoy!",
    "8 ounces uncooked linguine \n1 pound chicken breast, cut into strips \n1-2 tsp Cajun seasoning, or more to taste \n1 tbsp garlic powder \n1/2 tsp kosher salt \n1 tbsp olive oil \n1 medium red bell pepper, thinly sliced \n1 medium yellow bell pepper, thinly sliced \n8 oz fresh mushrooms, sliced \n1/2 red onion, sliced \n3 cloves garlic, minced \n2 medium tomatoes, diced \n1 tbsp fresh parsley, chopped \n1 cup fat free low sodium chicken broth \n2 tbsp light cream cheese \n1/3 cup skim milk \n1 tbsp flour \nolive oil spray",
    "3", -- UserID
    TRUE,
    '2023-04-20 14:30:00',
    "https://img.freepik.com/free-photo/penne-pasta-with-tomato-sauce-with-sausage-tomatoes-green-basil-decorated-frying-pan-wooden-table_2829-20103.jpg?w=826&t=st=1705276276~exp=1705276876~hmac=3a1289fa0c32ef6b2cc8c661cea96d46e839679df7165310590a89409f17236e"
),
(   
    3, 
    "Grilled Lemon-Herb Chicken", 
    "INFO", 
    150, 0, 26, 4, 0, 70, 
    2,
    "Experience the zest and aroma of our Grilled Lemon-Herb Chicken, perfect for a light yet flavorful meal. This dish features tender chicken breasts marinated in a vibrant mix of lemon, herbs, and garlic, grilled to juicy perfection. Ideal for health-conscious diners, this recipe delivers high protein with low fat, making it a nutritious choice for any day.",
    "Preheat grill to medium heat.\nIn a bowl, combine lemon juice, chopped herbs (basil, thyme), minced garlic, olive oil, salt, and pepper.\nMarinate chicken breasts in the mixture for at least 30 minutes.\nGrill the chicken for 6-7 minutes on each side or until fully cooked.\nLet it rest for a few minutes before serving.",
    "2 chicken breasts \njuice of 1 lemon \n1 tbsp mixed fresh herbs \n2 garlic cloves \nolive oil \nsalt \npepper", 
    "3", 
    TRUE,
    '2023-10-24 14:30:00',
    "https://img.freepik.com/free-photo/homemade-food-party_53876-31237.jpg?w=826&t=st=1705276322~exp=1705276922~hmac=ba7ce45ad424c09e8a5a175cc29e0a08096ef974ce55799fe3b212dbd255249b"
),
(   
    4, 
    "Spicy Grilled Shrimp", 
    "INFO", 
    120, 2, 23, 2, 0, 85, 
    2,
    "Dive into the bold flavors of our Spicy Grilled Shrimp, a dish that''s both simple and bursting with taste. Succulent shrimp are marinated in a spicy blend of chili, garlic, and lime, then grilled to a sizzling finish. This recipe is a fantastic source of lean protein and is low in both calories and fat, making it a great choice for a healthy and quick meal.",
    "Preheat grill to high.\nMix together chili powder, minced garlic, lime zest, lime juice, olive oil, salt, and pepper.\nToss the shrimp in the marinade and let sit for 15 minutes.\nThread shrimp onto skewers and grill for 2-3 minutes per side.\nServe with a lime wedge.",
    "1 pound shrimp (peeled and deveined) \n1 tsp chili powder \n2 garlic cloves \nzest and juice of 1 lime \nolive oil \nsalt \npepper", 
    "3", 
    TRUE,
    '2023-05-05 14:30:00',
    "https://img.freepik.com/free-photo/shrimp-sauteed-garlic-soy-caramel_2829-19579.jpg?w=826&t=st=1705276562~exp=1705277162~hmac=58b4053f4e10b6fd671636826e9c25c1ad92832d7721d3308b389a616c753291"

),
(   
    5,
    "Mediterranean Quinoa Salad",
    "INFO",
    250, 30, 10, 12, 8, 300, -- calories, carbs, protein, fat, fibre, sodium
    4,
    "Indulge in the vibrant flavors of our Mediterranean Quinoa Salad. This refreshing and nutritious dish combines fluffy quinoa with a medley of colorful vegetables, including cherry tomatoes, cucumbers, and bell peppers. The tangy lemon dressing adds a zesty kick, while the crumbled feta cheese provides a creamy and salty element. Topped with fresh herbs like parsley and mint, this salad is a perfect choice for a light and satisfying meal. Enjoy the taste of the Mediterranean in every bite!",
    "Cook quinoa according to package instructions and let it cool.\nIn a large bowl, combine cooked quinoa, cherry tomatoes, cucumbers, bell peppers, red onion, and olives.\nIn a small bowl, whisk together olive oil, lemon juice, garlic, salt, and pepper to make the dressing.\nPour the dressing over the quinoa mixture and toss to combine.\nSprinkle crumbled feta cheese and fresh herbs on top.\nServe chilled and enjoy!",
    "1 cup quinoa \n1 cup cherry tomatoes, halved \n1 cup cucumber, diced \n1 cup bell peppers, diced \n1/4 cup red onion, thinly sliced \n1/4 cup Kalamata olives, pitted and halved \n2 tbsp olive oil \n2 tbsp lemon juice \n2 cloves garlic, minced \n1/2 tsp salt \n1/4 tsp black pepper \n1/4 cup crumbled feta cheese \n2 tbsp fresh parsley, chopped \n1 tbsp fresh mint, chopped",
    "3", -- UserID
    TRUE,
    '2023-04-26 14:30:00',
    "https://img.freepik.com/free-photo/meatballs-salad-tomatoes-buckwheat-porridge-white-wooden-table-healthy-food-diet-meal-buddha-bowl_2829-6110.jpg?size=626&ext=jpg&ga=GA1.1.1875319134.1702524039&semt=ais"
);

-- Educational content review rating
INSERT INTO educational_content_review_rating
(Review, Rating, UserID, educational_contentid)
VALUES
    ('This is very awesome',                            3.2, '7', 1),
    ('The recipe nice.'    ,                            5.0, '8', 1),
    ('I love this recipe!' ,                            4.0, '9', 1),
    ('I love this recipe!' ,                            4.0, '12', 1),
    ('This is very awesome',                            3.2, '7', 2),
    ('The recipe is very d',                            5.0, '8', 2),
    ('I love this recipe!' ,                            4.0, '9', 2),
    ('This is very awesome',                            3.2, '12', 2),
    ('The recipe is very d',                            5.0, '111', 2),
    ('I love this recipe!'  ,                           4.0, '1', 2);





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
    ('This is very awesome',                            3.2, '12', 2),
    ('The recipe is very d',                            5.0, '111', 2),
    ('I love this recipe!'  ,                           4.0, '1', 2);
