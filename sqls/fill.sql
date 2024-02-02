
-- Category
-- 1. Allergies
Insert into allergies
(subcategory_name)
VALUES
    ('Milk'       ),
    ('Egg'        ),
    ('Soy'        ),
    ('Shellfish'  ),
    ('Fish'       ),
    ('Peanut'     ),
    ('Tree Nuts'  ),
    ('Gluten'     );

-- 2. Dietary preferences
Insert into dietary_preferences
(subcategory_name)
VALUES
    ('Vegan'      ),
    ('Vegetarian' ),
    ('Pescatarian');

-- 3. Meal type
INSERT INTO
    meal_type (subcategory_name)
VALUES
    ('Chinese'),
    ('Western'),
    ('Japanese'),
    ('Italian'),
    ('Mexican'),
    ('Thai'),
    ('Indian'),
    ('Mediterranean');

-- 4. Health goals
Insert into health_goal
(subcategory_name)
VALUES
    ('Weight Gain'),
    ('Maintain Heatlth'),
    ('Weight Loss');


-- 5. Blog post category
Insert into blog_post_category
(subcategory_name)
VALUES
    ('Cookbook'),
    ('Kitchenware'),
    ('Miscellaneous');

-- 6. Educational content category
Insert into educational_content_category
(subcategory_name)
VALUES
    ('Healthy Eating'),
    ('Healthy Lifestyle');


-- User Account
INSERT INTO USERACCOUNT
(ID, Username, enabled, Password, Email, Full_Name, role, created_date)
VALUES   
    ('1',  'user1',  1, 'pw1',   '1@gmail.com',    'John',        'ADMIN',              DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('2',  'user2',  1, 'pw1',   '2@gmail.com',    'William',     'ADMIN',              DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('3',  'user3',  1, 'pw1',   '3@gmail.com',    'Patricia',    'BUSINESS_USER',      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('4',  'user4',  1, 'pw1',   '4@gmail.com',    'Mike',        'BUSINESS_USER',      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('5',  'user5',  1, 'pw1',   '5@gmail.com',    'Ben',         'NUTRITIONIST',       DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('6',  'user6',  1, 'pw1',   '6@gmail.com',    'Sam',         'NUTRITIONIST',       DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('7',  'user7',  1, 'pw1',   '7@gmail.com',    'John',        'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('8',  'user8',  1, 'pw1',   '8@gmail.com',    'William',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('9',  'user9',  1, 'pw1',   '9@gmail.com',    'Patricia',    'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('10', 'user10', 1, 'pw1',   '10@gmail.com',   'Mika',        'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('11', 'user11', 1, 'pw1',   '11@gmail.com',   'Jessica',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('12', 'user12', 1, 'pw1',   '12@gmail.com',   'Samuel',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('13', 'user10', 1, 'pw1',   '13@gmail.com',   'Christopher', 'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('14', 'user11', 1, 'pw1',   '14@gmail.com',   'Bennedict',   'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('15', 'user12', 1, 'pw1',   '15@gmail.com',   'Angela',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('16', 'user10', 1, 'pw1',   '16@gmail.com',   'Alan',        'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('17', 'user11', 1, 'pw1',   '17@gmail.com',   'Kenneth',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('18', 'user12', 1, 'pw1',   '18@gmail.com',   'Samatha',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('19', 'user10', 1, 'pw1',   '19@gmail.com',   'Mikel',       'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('20', 'user11', 1, 'pw1',   '20@gmail.com',   'Parker',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('21', 'user21', 0, 'pw1',   '21@gmail.com' ,  'John',        'BUSINESS_USER',      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('22', 'user22', 0, 'pw1',   '22@gmail.com' ,  'Will',        'BUSINESS_USER',      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('23', 'user23', 0, 'pw1',   '23@gmail.com' ,  'Patr',        'BUSINESS_USER',      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('24', 'user24', 0, 'pw1',   '24@gmail.com' ,  'Mike',        'BUSINESS_USER',      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('25', 'user25', 0, 'pw1',   '25@gmail.com' ,  'Ben' ,        'BUSINESS_USER' ,     DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('26', 'user26', 1, 'pw1',   '26@gmail.com' ,  'Sam' ,        'BUSINESS_USER' ,     DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('27', 'user27', 1, 'pw1',   '27@gmail.com' ,  'John',        'BUSINESS_USER' ,     DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('28', 'user28', 1, 'pw1',   '28@gmail.com' ,  'Mike',        'BUSINESS_USER',      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('29', 'user29', 1, 'pw1',   '29@gmail.com' ,  'Ben' ,        'BUSINESS_USER' ,     DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('30', 'user30', 1, 'pw1',   '30@gmail.com' ,  'Sam' ,        'BUSINESS_USER' ,     DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('31', 'user31', 0, 'pw1',   '31@gmail.com' ,  'Jacky',       'NUTRITIONIST',       DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('32', 'user32', 0, 'pw1',   '32@gmail.com' ,  'Brad',        'NUTRITIONIST',       DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('33', 'user33', 0, 'pw1',   '33@gmail.com' ,  'Percy',       'NUTRITIONIST',       DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('34', 'user34', 0, 'pw1',   '34@gmail.com' ,  'Peter',       'NUTRITIONIST',       DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('35', 'user35', 0, 'pw1',   '35@gmail.com' ,  'Bronson' ,    'NUTRITIONIST' ,      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('36', 'user36', 1, 'pw1',   '36@gmail.com' ,  'Ash' ,        'NUTRITIONIST' ,      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('37', 'user37', 1, 'pw1',   '37@gmail.com' ,  'Rock',        'NUTRITIONIST' ,      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('38', 'user38', 1, 'pw1',   '38@gmail.com' ,  'Brock',       'NUTRITIONIST',       DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('39', 'user39', 1, 'pw1',   '39@gmail.com' ,  'Alexansder',  'NUTRITIONIST' ,      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('40', 'user40', 1, 'pw1',   '40@gmail.com' ,  'Jeff' ,       'NUTRITIONIST' ,      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY));
   


-- System admin
INSERT INTO System_Admin
(ID, DOB)
VALUES
    ('1', '1997-01-20'),
    ('2', '1990-02-10');


-- Business user
INSERT INTO Business_User
(ID, Company_Name, UEN,contact_number, company_address, postal_code, verified)
VALUES
    ('3',    'PTK Enterprise',         '479977558C',   '92345678',    '23, Jurong Street,    Singapore 523456', '523456', 1),
    ('4',    'Star Enterprise',        '479977571A',   '82945671',    '53, Tampines Street,  Singapore 519234', '519234', 1),
    ('21',   'ACK Enterprise',         '479977572B',   '82845672',    '13, Houagng Street,   Singapore 518231', '518231', 1),
    ('22',   'TCP Enterprise',         '479977573C',   '82745673',    '23, Sengkang Street,  Singapore 517232', '517232', 1),
    ('23',   'Healthy Coorporation',   '479977574D',   '82645674',    '33, Admiralty Street, Singapore 516233', '516233', 1),
    ('24',   'WW Enterprise',          '479977575E',   '82545675',    '43, Woodland Street,  Singapore 515234', '515234', 1),
    ('25',   'Loo Enterprise',         '479977576F',   '92445676',    '53, Bedok North,      Singapore 514235', '514235', 1),
    ('26',   'Lim Enterprise',         '479977577G',   '92345677',    '3,  Serangoon Street, Singapore 513236', '513236', 0),
    ('27',   'Chong Enterprise',       '479977578H',   '92245678',    '4,  Tampines Street,  Singapore 512237', '512237', 0),
    ('28',   'Cheong Enterprise',      '479977579I',   '92145679',    '5,  Pasir Ris Street, Singapore 511238', '511238', 0),
    ('29',   'Wong Enterprise',        '479977570J',   '92045670',    '6,  Serangoon Street, Singapore 510239', '510239', 0),
    ('30',   'Alex Enterprise',        '479977581A',   '92145671',    '7,  Tampines Street,  Singapore 519230', '519230', 0);

-- Nutritionist
INSERT INTO Nutritionist
(ID, Company_Name, contact_number, company_address, postal_code, verified)
VALUES
    ('5',    'Wellness Limited',      '91345678',    '33, Bedok Street, Singapore 523456',     '523456', 1),
    ('6',    'Shine Company',         '88341235',    '23, Hougang Street, Singapore 523756',   '523756', 1),
    ('31',   'ACK Enterprise',        '81845672',    '13, Houagng Street,   Singapore 518231', '518231', 1),
    ('32',   'TCP Enterprise',        '82245673',    '23, Sengkang Street,  Singapore 517232', '517232', 1),
    ('33',   'Healthy Coorporation',  '83645674',    '33, Admiralty Street, Singapore 516233', '516233', 1),
    ('34',   'WW Enterprise',         '84545675',    '43, Woodland Street,  Singapore 515234', '515234', 1),
    ('35',   'Loo Enterprise',        '95445676',    '53, Bedok North,      Singapore 514235', '514235', 1),
    ('36',   'Lim Enterprise',        '96345677',    '3,  Serangoon Street, Singapore 513236', '513236', 0),
    ('37',   'Chong Enterprise',      '97245678',    '4,  Tampines Street,  Singapore 512237', '512237', 0),
    ('38',   'Cheong Enterprise',     '98145679',    '5,  Pasir Ris Street, Singapore 511238', '511238', 0),
    ('39',   'Wong Enterprise',       '99045670',    '6,  Serangoon Street, Singapore 510239', '510239', 0),
    ('40',   'Alex Enterprise',       '90045671',    '7,  Tampines Street,  Singapore 519230', '519230', 0);


-- Registered user
INSERT INTO Registered_User
(ID, DOB, verified, dietary_preference, health_goal)
VALUES
    ('7',  '1999-09-23', 1 , 1, 3),
    ('8',  '1954-09-14', 1 , 1, 3),
    ('9',  '1999-11-15', 1 , 1, 3),
    ('10', '1985-09-16', 1 , 1, 3),
    ('11', '1993-09-16', 1 , 1, 3),
    ('12', '1995-01-22', 1 , 2, 3),
    ('13', '1995-10-22', 1 , 2, 2),
    ('14', '1997-08-18', 1 , 2, 2),
    ('15', '1988-02-12', 1 , 2, 2),
    ('16', '1995-09-19', 0 , 2, 2),
    ('17', '1985-09-12', 0 , 2, 1),
    ('18', '1995-05-02', 0 , 3, 1),
    ('19', '1965-09-12', 0 , 3, 1),
    ('20', '1975-07-17', 0 , 3, 1);

-- Registered user with allergies
Insert into user_allergies
(id, allergy_id)
VALUES
    ('8',  4),
    ('8',  5),
    ('8',  6),
    ('9',  7),
    ('9',  8),
    ('9',  1),
    ('10', 1),
    ('10', 2),
    ('10', 3),
    ('11', 4),
    ('11', 5),
    ('11', 6),
    ('12', 7),
    ('12', 8),
    ('12', 1),
    ('13', 1),
    ('13', 2),
    ('13', 3),
    ('15', 7),
    ('15', 8),
    ('15', 1);
 




-- User info over time (for registered user)
INSERT INTO User_Info_Over_Time
(User_ID, weight, date)
VALUES
    ('7',  70.50,  '2022-12-08' ),
    ('7',  60.50,  '2023-10-08' ),
    ('7',  50.50,  '2023-12-08' ),
    ('8',  80.50,  '2022-12-08' ),
    ('8',  70.50,  '2023-10-08' ),
    ('8',  60.50,  '2023-12-08' ),
    ('9',  90.50,  '2022-12-08' ),
    ('9',  80.50,  '2023-10-08' ),
    ('9',  70.50,  '2023-12-08' ),
    ('10', 100.50, '2022-12-08' ),
    ('10', 90.50,  '2023-10-08' ),
    ('10', 80.50,  '2023-12-08' ),
    ('11', 110.50, '2022-12-08' ),
    ('11', 100.50, '2023-10-08' ),
    ('11', 90.50,  '2023-12-08' ),
    ('12', 120.50, '2022-12-08' ),
    ('12', 110.50, '2023-10-08' ),
    ('12', 100.50, '2023-12-08' ),
    ('13', 130.50, '2022-12-08' ),
    ('13', 120.50, '2023-10-08' ),
    ('13', 110.50, '2023-12-08' ),
    ('14', 140.50, '2022-12-08' ),
    ('14', 130.50, '2023-10-08' ),
    ('14', 120.50, '2023-12-08' ),
    ('15', 150.50, '2022-12-08' ),
    ('15', 140.50, '2023-10-08' ),
    ('15', 130.50, '2023-12-08' );



-- Blog
-- publisher should be author of the blog
-- blog_type_id should be the category of the blog (refer to blog_post_category)
-- img_title should be the author of the image and the source of the image (follow their code of conduct)
INSERT INTO Blog
(id, CreatedDT, Publisher, Title, Info, UserID, img, img_title, blog_type_id)
VALUES
    (
        '1',
        '2024-01-09 08:24:52',  -- CreatedDT
        'businessUser3',  -- Publisher
        'Revolutionize Your Kitchen with the SmartChef Pro',  -- Title
        'Welcome to the future of cooking with the SmartChef Pro, the all-in-one kitchen appliance that promises to make cooking a breeze. From amateur cooks to professional chefs, the SmartChef Pro is designed to enhance your culinary skills. Featuring a suite of smart functions, including automated temperature control, self-stirring pots, and a built-in digital cookbook, this revolutionary device ensures every meal is cooked to perfection. \nWith its sleek design, intuitive touch interface, and Wi-Fi connectivity, the SmartChef Pro syncs seamlessly with your smart home ecosystem. Receive real-time updates on your meal’s progress directly to your smartphone or virtual assistant. Say goodbye to the guesswork and hello to precision with the SmartChef Pro advanced sensors, which guarantee the exact cooking duration and temperature for all your dishes. Whether you are simmering, sautéing, baking, or grilling, the SmartChef Pro adapts to your cooking style.',
        3, -- userId
        'https://img.freepik.com/free-photo/electric-blender-mixer-juicer-set_140725-7263.jpg?w=740&t=st=1705070791~exp=1705071391~hmac=b015f8ab2fb6e4f2b74c8f01a42dd579d7f7fa0db8c82eb8890a57767dd21722',
        'Author : KamranAydinov, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '2',
        '2023-12-15 10:00:00',
        'businessUser3',
        'Gourmet Flavors: A Culinary Adventure',
        'Embark on a culinary adventure with Gourmet Flavors: A Culinary Adventure. This cookbook is a treasure trove of exotic recipes from around the globe, meticulously compiled by world-renowned chefs. Dive into a world of unique tastes and aromas that will transport your senses to distant lands. Each recipe is presented with easy-to-follow instructions and tips for perfect execution, even for home cooks.\nPriced at $35, this cookbook is an excellent addition to any kitchen library, offering inspiration for both everyday meals and special occasions. Elevate your cooking game with the diverse flavors and creative dishes in Gourmet Flavors.',
        3,
        'https://img.freepik.com/free-photo/piece-salad-fork-close-up_23-2148537206.jpg?w=360&t=st=1706579798~exp=1706580398~hmac=c4fdd8cc3d1cb5b1471de0b4223d82e322c9ab95bcfa747da69301a40a93bb8d',
        'Designed by Freepik',  -- img_title
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
        'Author : Vecstock, Designed by Freepik',  -- img_title
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
        'Designed by Freepik',  -- img_title
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
        'Designed by Freepik',  -- img_title
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
        'Designed by Freepik',  -- img_title
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
        'Designed by Freepik',  -- img_title
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
-- publisher should be author of the educational content
-- educational_content_type_id should be the category of the blog (refer to educational_content_category)
-- img_title should be the author of the image and the source of the image (follow their code of conduct)
INSERT INTO educational_content
(id, CreatedDT, Publisher, Title, Info, UserID, img, img_title,educational_content_type_id)
VALUES
    (
        '1',
        '2023-01-20 15:30:00',  -- CreatedDT
        'healthGuru1',  -- Publisher
        'The Green Smoothie Revolution',  -- Title
        'Join the Green Smoothie Revolution and embrace a healthier lifestyle! Our latest post features a variety of delicious and nutritious green smoothie recipes. Each recipe is crafted to boost energy, aid in detoxification, and provide essential vitamins and minerals. From kale and spinach to exotic fruits, we cover a range of ingredients that cater to all taste preferences. Perfect for busy individuals seeking a quick and healthy meal option.\nLearn how to blend the perfect green smoothie, understand the health benefits of each ingredient, and start your day with a burst of energy!',
        3,
        'https://img.freepik.com/free-photo/glass-jar-mugs-with-green-health-smoothie-ai-generated-image_511042-1709.jpg?t=st=1706580475~exp=1706584075~hmac=f8dcad8f3e1334c5d6523dc87c14ca4a48422939956491b107865be36d1aa4cf&w=996',
        'Author : ojosujono96, Designed by Freepik',  -- img_title
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
        'Author : ojosujono96, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '3',
        '2024-01-05 12:00:00',
        'fitChef2',
        'Plant-Based Power: Easy Vegan Recipes',
        'Explore the world of plant-based cuisine with our "Plant-Based Power: Easy Vegan Recipes" blog post. This collection of recipes is designed for anyone looking to incorporate more plant-based meals into their diet. Whether you are a full-time vegan or just curious about plant-based eating, these recipes are easy, delicious, and nutritious. Each dish is packed with flavors and nutrients, showcasing how versatile and satisfying vegan cooking can be. From hearty soups to vibrant salads and delectable desserts, these recipes are perfect for anyone seeking a healthier and more sustainable lifestyle.',
        4,
        'https://img.freepik.com/free-photo/healthy-salad-bowl-with-fresh-vegetables-fruit-generated-by-ai_24640-80840.jpg?t=st=1706580671~exp=1706584271~hmac=072a607508798f15eb093a0b4edb8d51a0bb561b75716c336f28ab2fdfad1b4e&w=996',
        'Author : stockgiu, Designed by Freepik',  -- img_title
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
        'Designed by Freepik',  -- img_title
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
        'Designed by Freepik',  -- img_title
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
        'Designed by Freepik',  -- img_title
        1
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
    ('The recipe is very GOOD',                         5.0, '8', 2),
    ('I love this recipe!' ,                            4.0, '9', 2);




-- Recipe
-- publisher should be author of the recipe
-- info refers to dietary information or Not specified
-- steps refers to the steps to cook the recipe (separated by \n)
-- ingredients refers to the ingredients needed to cook the recipe (separated by \n)
-- img_title should be the author of the image and the source of the image (follow their code of conduct)
-- dietary_preference refers to the category of the recipe (refer to dietary_preferences)
-- cooking time refers to the time needed to cook the recipe (in minutes)
-- nutrient info details calories is kcal
-- nutrient info details sodium is mg
-- nutrient info details carbs, protein, fat, fibre is g

-- Note that: Some recipes has allergies, insert into recipe_allergies table


INSERT INTO recipe
(id, publisher, title, info, calories, carbs, protein, fat, fibre, sodium, serving_size, description, steps, ingredients, UserID, Active, createddt, img, img_title, dietary_preference, cooking_time, meal_type)
VALUES
    (
        1,
        'fitChef2',
        'Easy Grilled Salmon',
        'Not specified',
        129, 1, 20, 8, 0, 8, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Indulge in the simplicity and exquisite flavors of our Easy Grilled Salmon recipe. Perfect for a quick and healthy meal, this dish showcases succulent salmon fillets seasoned to perfection and grilled to a mouthwatering, golden perfection. The straightforward preparation ensures a delicious, light, and satisfying dish, making it an ideal choice for both novice and seasoned cooks alike. Elevate your dining experience with this effortlessly impressive grilled salmon, offering a delightful blend of simplicity and gourmet taste.',
        'Heat grill up to 400 degrees.\nIn a bowl, mix together, garlic, dill and lemon rind.\nPlace salmon on a flat dish and coat liberally with olive oil and season with a generous pinch of both salt and pepper.\nCover salmon with the garlic, dill and lemon rind mixture and put on grill, skin side down.\nGrill for 5 minutes and turn salmon over for another 3-4 minutes and cook until fish is still moist but flaky.',
        '8onces salmon filet \n2 garlic cloves \n1 lemon rind \n2 tsp fresh dill \nsalt and pepper \nolive oil',
        '3', -- UserID
        TRUE,
        '2023-04-26 14:30:00',
        'https://img.freepik.com/free-photo/grilled-salmon-fillet-with-fresh-vegetable-salad-generated-by-ai_188544-21273.jpg?t=st=1706581041~exp=1706584641~hmac=a5192395751401ed16e80a0043e0f94504123f21393174683c63426ba80cba62&w=996',
        'Author : Vecstock, Designed by Freepik',  -- img_title
        1, -- dietary_preference vegan,
        25,
        2 -- meal_type western
    ),
    (
        2,
        'fitChef2',
        'Cajun Chicken Pasta',
        'Not specified',
        324, 14, 8, 6, 6, 6, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Indulge your taste buds with our delectable Cajun Chicken Pasta recipe, a culinary journey that marries the bold and spicy flavors of Cajun seasoning with succulent chicken and perfectly cooked pasta. This dish boasts a harmonious blend of tender, blackened chicken strips, vibrant bell peppers, and onions, all sautéed to perfection. The creamy Alfredo sauce, infused with Cajun spices, adds a velvety richness that ties the entire dish together. Garnished with fresh parsley for a pop of color and flavor, this Cajun Chicken Pasta is a delightful and satisfying meal that brings the spirit of Louisiana to your dinner table. Prepare to savor a symphony of tastes in every bite!',
        'Prep all your vegetables.\nIn a small blender make a slurry by combining milk, flour and cream cheese. Set aside.\nSeason chicken generously with Cajun seasoning, garlic powder and salt.\nPrepare pasta in salted water according to package directions.\nHeat a large heavy nonstick skillet over medium-high heat; spray with oil and add half of the chicken.\nSauté 5 to 6 minutes or until done, set aside on a plate and repeat with the remaining chicken. Set aside.\nAdd olive oil to the skillet and reduce to medium; add bell peppers, onions, and garlic to skillet, sauté 3-4 minutes.\nAdd mushrooms and tomatoes and sauté 3-4 more minutes or until vegetables are tender.\nSeason with 1/4 tsp salt, garlic powder and fresh cracked pepper to taste.\nReduce heat to medium-low; add chicken broth and pour in slurry stirring about 2 minutes.\nReturn chicken to skillet; adjust salt and Cajun seasoning to taste, cook another minute or two until hot, then add linguine; toss well to coat.\nTop with chopped scallions and enjoy!',
        '8 ounces uncooked linguine \n1 pound chicken breast, cut into strips \n1-2 tsp Cajun seasoning, or more to taste \n1 tbsp garlic powder \n1/2 tsp kosher salt \n1 tbsp olive oil \n1 medium red bell pepper, thinly sliced \n1 medium yellow bell pepper, thinly sliced \n8 oz fresh mushrooms, sliced \n1/2 red onion, sliced \n3 cloves garlic, minced \n2 medium tomatoes, diced \n1 tbsp fresh parsley, chopped \n1 cup fat free low sodium chicken broth \n2 tbsp light cream cheese \n1/3 cup skim milk \n1 tbsp flour \nolive oil spray',
        '3', -- UserID
        TRUE,
        '2023-04-20 14:30:00',
        'https://img.freepik.com/free-photo/bowl-pasta-with-chicken-breast-tomato-sauce_1340-25533.jpg?t=st=1706581185~exp=1706584785~hmac=0f73e15a6734c331bbca59e1e4b01228ff1f6c9b92598a6482e58ac8d5e74f08&w=826',
        'Author : Sketchepedia, Designed by Freepik',  -- img_title
        1, -- dietary_preference
        20,
        4 -- meal_type italian
    ),
    (
        3,
        'fitChef2',
        'Grilled Lemon-Herb Chicken',
        'Not specified',
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
        3,
        25,
        2 -- meal_type western
    ),
    (
        4,
        'fitChef2',
        'Spicy Grilled Shrimp',
        'Not specified',
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
        3,
        50,
        2 -- meal_type western

    ),
    (
        5,
        'fitChef2',
        'Mediterranean Quinoa Salad',
        'Not specified',
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
        1, -- dietary_preference
        40,
        8 -- meal_type mediterranean
    ),
    (
        6,
        'fitChef2',
        'Hearty Vegetable Soup',
        'Not specified',
        90, 14, 3, 2, 4, 12, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Dive into the rich and comforting flavors of our Hearty Vegetable Soup. This nourishing recipe brings together a medley of fresh vegetables simmered in a savory broth, creating a warm and inviting dish. Ideal for health-conscious individuals, it''s packed with nutrients and is wonderfully filling. Whether you''re a beginner or a seasoned chef, this soup is a breeze to prepare and is perfect for cozy nights in.',
        'In a large pot, heat olive oil over medium heat\nAdd chopped onions, carrots, and celery.\nsauté until softened.\nStir in minced garlic, diced tomatoes, chopped potatoes, green beans, and vegetable broth.\nBring to a boil, then reduce heat to simmer for 20 minutes\nAdd corn, peas, and season with salt, pepper, and herbs.\nCook for an additional 10 minutes.',
        '1 onion\n2 carrots\n2 celery stalks\n2 garlic cloves\n1 can diced tomatoes\n2 potatoes\n1 cup green beans\n4 cups vegetable broth\n1 cup corn\n1 cup peas\nsalt\npepper\nmixed herbs',
        '3',
        TRUE,
        '2023-05-10 10:00:00',
        'https://img.freepik.com/free-photo/chicken-broth-vegetable-soup-disposable-cup-bowl-served-with-green-vegetables_114579-905.jpg?w=740&t=st=1706620151~exp=1706620751~hmac=7bcc40a9e782bfa356f11ff36c92e5510f1aac7517e35c6b7bdbdc05eb298316',
        'Author : azerbaijan_stockers, Designed by Freepik',  -- img_title
        2, -- dietary_preference
        30,
        1 -- meal_type chinese

    ),
    (
        7,
        'fitChef2',
        'Classic Margherita Pizza',
        'Not specified',
        250, 30, 12, 10, 2, 500, -- calories, carbs, protein, fat, fibre, sodium
        8,
        'Experience the authentic taste of Italy with our Classic Margherita Pizza. This timeless recipe features a crispy, homemade crust topped with tangy tomato sauce, fresh mozzarella, and basil leaves. A drizzle of olive oil adds the perfect finishing touch. Simple yet flavorful, this pizza is a testament to the beauty of classic Italian cooking and is sure to delight all pizza enthusiasts.',
        'Preheat oven to 475 degrees.\nRoll out pizza dough on a floured surface.\nSpread tomato sauce, then add slices of mozzarella cheese and fresh basil leaves.\nDrizzle with olive oil.\nBake for 12-15 minutes until crust is golden and cheese is bubbly.',
        'Pizza dough\ntomato sauce\nfresh mozzarella cheese, fresh basil leaves, olive oil',
        '3',
        TRUE,
        '2023-06-15 18:00:00',
        'https://img.freepik.com/free-photo/delicious-traditional-pizza-assortment_23-2148921314.jpg?w=360&t=st=1706620453~exp=1706621053~hmac=6b54331cfb9ea30aeb79c8a4921a28f61bc02d8f0d1502e25c85184169d73e61',
        'Designed by Freepik',  -- img_title
        1, -- dietary_preference
        70,
        4 -- meal_type italian
    ),
    (
        8,
        'fitChef2',
        'Spicy Thai Green Curry',
        'Not specified',
        310, 15, 14, 20, 3, 700, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Embark on a culinary journey to Southeast Asia with our Spicy Thai Green Curry. This dish features tender chicken pieces and assorted vegetables, all simmered in a fragrant green curry sauce made with coconut milk, green curry paste, and traditional Thai herbs. The result is a harmonious blend of spicy, savory, and slightly sweet flavors that will transport your taste buds to the streets of Bangkok.',
        'In a pot, heat oil and fry green curry paste for 2 minutes.\nAdd coconut milk, chicken, eggplant, bell peppers, and bamboo shoots.\nSimmer until chicken is cooked. Season with fish sauce, sugar, and lime leaves.\nServe with steamed rice.',
        '2 tbsp green curry paste\n1 can coconut milk\n500g chicken\n1 eggplant\n2 bell peppers\n1 cup bamboo shoots, fish sauce, sugar, lime leaves, oil',
        '3',
        TRUE,
        '2023-07-05 19:30:00',
        'https://img.freepik.com/free-photo/green-curry-bowl-spices-wooden-table_1150-21354.jpg?w=826&t=st=1706620599~exp=1706621199~hmac=de78438dda610d574840558b199d06a05724d2c628c43621d5ffed967fd0ee00',
        'Author : jcomp, Designed by Freepik',  -- img_title
        1, -- dietary_preference
        40,
        6 -- meal_type thai
    ),
    (
        9,
        'fitChef2',
        'Berry Almond Pancakes',
        'Not specified',
        180, 28, 6, 4, 5, 200, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Start your morning with our delightful Berry Almond Pancakes. These fluffy pancakes are made with whole wheat flour and almond meal, giving them a nutty flavor and a boost of protein. Topped with a colorful mix of fresh berries and a drizzle of honey, they are as nutritious as they are delicious.',
        'In a bowl, mix whole wheat flour, almond meal, baking powder, and a pinch of salt.\nAdd milk and an egg, mix until smooth.\nCook on a hot griddle, adding berries to each pancake before flipping.\nServe with honey.',
        '1 cup whole wheat flour\n1/2 cup almond meal\n2 tsp baking powder, salt\n1 cup milk\n1 egg, mixed berries, honey',
        '3',
        TRUE,
        '2023-08-12 07:30:00',
        'https://img.freepik.com/free-photo/delicious-sweet-waffles-coffee-wooden-board_23-2148654490.jpg?size=626&ext=jpg&ga=GA1.2.1875319134.1702524039&semt=ais',
        'Author : KamranAydinov, Designed by Freepik',  -- img_title
        1, -- dietary_preference
        50,
        2 -- meal_type western
    ),
    (
        10,
        'fitChef2',
        'Caesar Salad',
        'Not specified',
        220, 39, 8, 6, 7, 30, -- calories, carbs, protein, fat, fibre, sodium
        5,
        'Our Caesar Salad is a refreshing and healthy choice, packed with protein-rich quinoa, crisp cucumbers, juicy tomatoes, and tangy feta cheese. Dressed in a zesty lemon vinaigrette, this salad is perfect for a light lunch or a side dish.',
        'Cook quinoa as directed.\nIn a large bowl, combine cooled quinoa, diced cucumbers, cherry tomatoes, sliced olives, crumbled feta, and chopped parsley.\nWhisk together olive oil, lemon juice, salt, and pepper for the dressing.\nToss salad with dressing.',
        '1 cup quinoa\n1 cucumber\n1 cup cherry tomatoes\n1/2 cup sliced olives\n1/2 cup feta cheese, parsley\n3 tbsp olive oil\n2 tbsp lemon juice, salt, pepper',
        '3',
        TRUE,
        '2023-09-20 12:00:00',
        'https://img.freepik.com/free-photo/salad-with-mozzarella-avocado_1220-7101.jpg?w=826&t=st=1706631737~exp=1706632337~hmac=691556ba70cbeaf313c5af09f8f50e0eaae65adea716e8f7372b25e24d1f5353',
        'Author : valeria_aksakova, Designed by Freepik',  -- img_title
        3, -- dietary_preference
        10,
        2 -- meal_type western
    ),
    (
        11,
        'fitChef2',
        'Classic Beef Stew',
        'Not specified',
        350, 20, 25, 15, 4, 600, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Savor the rich, hearty flavors of our Classic Beef Stew. Tender chunks of beef, potatoes, carrots, and onions are slow-cooked to perfection in a savory broth, making it a comforting meal for any day.',
        'Brown beef chunks in a pot.\nAdd diced onions, sliced carrots, chopped potatoes, beef broth, a can of diced tomatoes, and seasonings.\nSimmer for 2 hours until beef is tender.',
        '1 lb beef chunks\n2 onions\n3 carrots\n2 potatoes\n4 cups beef broth\n1 can diced tomatoes, salt, pepper, thyme',
        '3',
        TRUE,
        '2023-10-05 18:45:00',
        'https://img.freepik.com/free-photo/delicious-goulash-ready-dinner_23-2149370851.jpg?w=360&t=st=1706623995~exp=1706624595~hmac=a2928b18365439db54279f8d1c7b63c651d188d5ad18a4f87a52cf2f28b0cca0',
        'Designed by Freepik',  -- img_title
        3, -- dietary_preference
        120,
        2 -- meal_type western
    ),
    (
        12,
        'fitChef2',
        'Spicy Black Bean Tacos',
        'Not specified',
        210, 35, 9, 6, 8, 470, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Enjoy a fiesta of flavors with our Spicy Black Bean Tacos. These tacos are filled with seasoned black beans, crisp lettuce, fresh tomatoes, and a dollop of sour cream, wrapped in warm, soft tortillas. A quick and tasty meal that is perfect for a busy weeknight.',
        'Sauté chopped onions and minced garlic.\nAdd cooked black beans, cumin, paprika, and chili powder.\nCook for 5 minutes.\nServe in tortillas with lettuce, tomatoes, and sour cream.',
        '1 can black beans\n1 onion\n2 garlic cloves\n1 tsp cumin\n1 tsp paprika\n1 tsp chili powder, tortillas, lettuce, tomatoes, sour cream',
        '3',
        TRUE,
        '2023-11-17 19:30:00',
        'https://img.freepik.com/free-photo/fresh-taco_144627-38301.jpg?w=826&t=st=1706104298~exp=1706104898~hmac=b2c1b91f623e17583a7937923dcc6a2683ffa77c3817b606f6fad10357c56465',
        'Designed by Freepik',  -- img_title
        3, -- dietary_preference
        30,
        5 -- meal_type mexican
    );




-- Recipe allergies
-- id refers to recipe id (refer to recipe table)
-- allergy_id refers to allergy id (refer to allergies table)
Insert Into recipe_allergies 
    (id, allergy_id) 
VALUES 
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 2),
    (2, 7),
    (3, 2),
    (4, 3),
    (4, 6),
    (5, 1),
    (5, 2),
    (5, 3),
    (6, 2),
    (6, 7),
    (7, 2),
    (7, 3),
    (7, 4),
    (8, 2),
    (8, 3),
    (8, 4),
    (9, 1),
    (9, 2),
    (9, 3),
    (10, 2),
    (10, 3),
    (10, 4),
    (11, 2),
    (11, 3),
    (11, 4),
    (12, 2),
    (12, 3),
    (12, 4);




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


-- Meal Plan
-- publisher should be author of the meal plan
-- health_goal_category refers to the category of the meal plan (refer to health_goal_category)
-- img_title should be the author of the image and the source of the image (follow their code of conduct)

-- Note that: meal plan has some suggested recipes, insert into mealplan_recipe table
INSERT INTO meal_plan
(id, publisher, title, active, introduction,  main_content, conclusion, createddt, health_goal_category, img, img_title, userid)
VALUES
    (
        1,
        'james',
        'High-Calorie Nutrient-Dense Meal Plan',
        TRUE,
        'Designed to support healthy weight gain, this plan emphasizes high-calorie, nutrient-rich foods. It is perfect for individuals looking to build muscle mass or increase body weight for health reasons. The key is focusing on quality calories that provide vitamins, minerals, and good fats.',
        'Each meal includes a balance of protein, healthy fats, and carbohydrates. Emphasis is on lean proteins, whole grains, and nutrient-dense snacks. This plan also encourages frequent, smaller meals throughout the day to increase calorie intake without feeling overly full.',
        'Monitoring progress is vital. Adjust your calorie intake as needed based on your weight gain goals and physical activity level. Remember, gaining weight healthily takes time, so be patient and consistent with your meal plan.',
        '2023-06-15',
        1, -- weight gain
        'https://img.freepik.com/free-photo/view-allergens-commonly-found-grains_23-2150170292.jpg?w=826&t=st=1706632336~exp=1706632936~hmac=b61507e8efe548ff6ea8b584a55fa5ac7c97835faec1cc67af28f7dd05876478',
        'Designed by Freepik',  -- img_title
        '5' -- userid
    ),
    (
        2,
        'Sophia',
        'Balanced Maintenance Meal Plan',
        TRUE,
        'This meal plan is carefully designed to maintain your current health status, focusing on a balanced diet that fulfills all your nutritional needs. It is ideal for those who are satisfied with their current weight and health and wish to maintain it.',
        'The plan includes a variety of foods from all food groups, ensuring a wide range of nutrients. Meals are structured to provide a good balance of carbohydrates, proteins, and fats, along with essential vitamins and minerals. Regular physical activity is also encouraged as part of a healthy lifestyle.',
        'Review your eating habits regularly and make adjustments to the meal plan based on your health monitoring. Balance and moderation are key, as is ensuring that you enjoy your meals while maintaining your health goals.',
        '2023-07-20',
        2, -- maintain health
        'https://img.freepik.com/free-photo/healthy-unhealthy-food-with-various-text-isolated-white-background_23-2148193120.jpg?size=626&ext=jpg&ga=GA1.2.1875319134.1702524039&semt=ais',
        'Designed by Freepik',  -- img_title
        '5' -- userid
    ),
    (
        3,
        'alex',
        'Low-Calorie Weight Loss Meal Plan',
        TRUE,
        'This meal plan is designed for those aiming to lose weight in a healthy, sustainable manner. It focuses on low-calorie foods that are high in fiber and nutrients to promote satiety and avoid overeating.',
        'The meals are structured to reduce calorie intake while still providing essential nutrients. It includes plenty of fruits, vegetables, lean proteins, and whole grains. Small, frequent meals are encouraged to keep the metabolism active and avoid hunger pangs.',
        'Regularly assess your progress and adjust the meal plan as necessary. Remember, weight loss should be gradual to ensure it is sustainable and healthy. Stay hydrated and combine this diet with regular exercise for the best results.',
        '2023-08-25',
        3, -- weight loss
        'https://img.freepik.com/free-photo/front-view-vegetable_140725-103355.jpg?w=826&t=st=1706632162~exp=1706632762~hmac=488b3428d05108209f34fe672188a78bc9dd4abfadc8e7e43a3e1385bf7e134d',
        'Author : KamranAydinov, Designed by Freepik',  -- img_title
        '5' -- userid
    ),
    (
        4,
        'sophia',
        'Low-Carb, High-Protein Weight Loss Meal Plan',
        TRUE,
        'This weight loss meal plan is designed for individuals looking to shed pounds through a low-carb, high-protein diet. It is ideal for those who want to lose weight without sacrificing muscle mass. The plan focuses on reducing carbohydrate intake while increasing protein sources to keep you full and satisfied.',
        'Breakfasts are rich in protein with eggs or Greek yogurt. Lunches and dinners feature lean meats like chicken or fish, paired with a variety of vegetables. Snacks include nuts, seeds, and low-carb fruits like berries. This plan limits processed foods and sugars, focusing on whole, natural ingredients.',
        'Stay hydrated and listen to your body’s hunger and fullness cues. Weight loss should be gradual and sustainable. Regular exercise in conjunction with this meal plan will enhance results.',
        '2023-08-10',
        3, -- weight loss
        'https://img.freepik.com/free-photo/plates-filled-with-blueberries-nuts_23-2148650204.jpg?w=826&t=st=1706619604~exp=1706620204~hmac=8beb76f97ad635ee2f5318ba01615cfcf7e8f63c8548bfa2d7de630ab7db1524',
        'Designed by Freepik',
        '5' -- userid
    ),
    (
        5,
        'michael',
        'Balanced Meal Plan for Healthy Weight Maintenance',
        TRUE,
        'This balanced meal plan is tailored for individuals aiming to maintain their current weight with a focus on nutritional balance. It offers a diverse range of foods to ensure you receive all essential nutrients while enjoying delicious meals.',
        'Each meal includes a harmony of carbohydrates, proteins, and fats. Breakfasts might feature oatmeal with fruits and nuts. Lunches and dinners include a variety of proteins like tofu, lean meats, and fish, combined with whole grains and vegetables. Healthy fats come from sources like avocados and olive oil.',
        'Remember, maintaining weight is about balance and consistency. Pay attention to portion sizes and how your body feels. This meal plan can be adjusted to suit individual caloric needs and dietary preferences.',
        '2023-09-20',
        2, -- maintain health
        'https://img.freepik.com/free-photo/oil-ripe-fresh-avocado-rustic-wooden-table_123827-21380.jpg?w=826&t=st=1706619716~exp=1706620316~hmac=5c439907263988420faa7825910d62a6a439acba2a16ea3ae9054b90a06d9f2a',
        'Author : chandlervid85, Designed by Freepik',
        '5' -- userid
    ),
    (
        6,
        'alex',
        'Mediterranean Diet Plan for Heart Health',
        TRUE,
        'Focused on heart health, this Mediterranean diet plan incorporates a variety of nutrient-rich foods known for their benefits to cardiovascular health. It is ideal for those looking to improve heart function and overall well-being.',
        'The plan emphasizes fruits, vegetables, whole grains, and healthy fats. Olive oil is a primary fat source. Protein sources include fish, poultry, beans, and legumes. Red meat is limited, and meals are often seasoned with herbs and spices instead of salt. Wine in moderation is also a feature of this diet.',
        'Adapting to a Mediterranean lifestyle means not only changing what you eat but also how you eat. Enjoy meals with family or friends and stay active. Regular check-ups with your healthcare provider are recommended to monitor heart health progress.',
        '2023-10-05',
        2, -- maintain health
        'https://img.freepik.com/free-photo/some-delicious-meal-with-salad-pickles-bowls-pot-wooden-surface_176474-6470.jpg?w=826&t=st=1706619889~exp=1706620489~hmac=a44c4406c082879c8d2b0da85c96402a80de1d5ab27dc97ac720b9c3f5179118',
        'Author : 8photo, Designed by Freepik',
        '5' -- userid
    );




-- mealplan_recipe
-- id refers to meal plan id (refer to meal_plan table)
-- recipe_id refers to recipe id (refer to recipe table)
insert into mealplan_recipe 
    (id, recipe_id) 
values 
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 4),
    (2, 5),
    (2, 6),
    (3, 7),
    (3, 8),
    (3, 9),
    (4, 10),
    (4, 11),
    (4, 12),
    (5, 1),
    (5, 2),
    (5, 3),
    (6, 4),
    (6, 5),
    (6, 6);


