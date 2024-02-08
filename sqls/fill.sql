
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
    ('Gluten'     ),
    ('Wheat'     );

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
    ('French'),
    ('Mexican'),
    ('Thai'),
    ('Indian'),
    ('Mediterranean'),
    ('Vietnamese');

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
    ),
    (
        '8',
        '2024-01-29 08:24:52',  -- CreatedDT
        'Philps',  -- Publisher
        'Elevate Your Kitchen with Philips: Top-Quality Kitchenware',  -- Title
        'Upgrade your kitchen experience with Philips! Your trusted partner for top-quality kitchenware. Discover a range of innovative and stylish appliances designed to make cooking a breeze. Efficiency in Every Appliance: Philips brings you kitchenware that simplifies your daily tasks. From powerful blenders to versatile food processors, our appliances are engineered for efficiency, saving you time and effort in the kitchen. Healthy Choices, Delicious Results: Explore our Airfryers and Juicers for a healthier cooking approach. Enjoy crispy dishes with less oil using our Airfryers, and create refreshing, nutrient-packed juices with ease using our Juicers. Sleek Design, Lasting Impressions: Philips kitchenware not only excels in functionality but also adds a touch of elegance to your kitchen. With modern designs and premium materials, our appliances seamlessly blend style with substance. Our kitchenware is crafted to meet your cooking needs while ensuring durability and long-lasting performance. \nUpgrade your kitchen with Philips – where innovation meets style. Explore our range of kitchenware today and discover the joy of cooking with precision and convenience. Philips, transforming kitchens for a better culinary experience.',
        3, -- userId Philips
        'https://img.freepik.com/free-photo/healthy-meal-preparation-rustic-domestic-kitchen-generated-by-ai_188544-26855.jpg?t=st=1706670340~exp=1706673940~hmac=57ab56c2484a0e9db62779449b2b08c432e1b38703b8be467a9ac92c59beefe2&w=1060',
        'Author : vecstock, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '9',
        '2024-01-10 15:45:00',
        'IKEA',
        'Elevate Your Culinary Space with IKEA Kitchenware',
        'Unleash your inner chef with exceptional range of kitchenware from IKEA. Elevate your culinary space with stylish and functional tools designed to make cooking a joy. Quality Cookware: IKEA offers a diverse collection of cookware crafted with quality materials. From durable pots and pans to precision kitchen utensils, each piece is designed to enhance your cooking experience. Organize with Style: Transform your kitchen into an organized haven with storage solutions. Trendy Tableware: Serve your culinary creations with flair using trendy tableware from IKEA. From elegant dinner sets to vibrant serving dishes, discover tableware that complements your personal style. Affordable Luxury: Enjoy luxury without the hefty price tag. Our kitchenware combines affordability with sophistication, allowing you to create a stylish and functional kitchen on any budget. Explore the IKEA Kitchenware Collection today and redefine your culinary space.'
        ,4, -- userId IKEA
        'https://img.freepik.com/premium-photo/kitchen-with-pots-pans-counter-green-apple-side_889227-22098.jpg?w=1060',
        'Author : outkassdesign, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '10',
        '2023-03-10 09:30:00',
        'OpenTrolley',
        'Dive into Culinary Adventures with OpenTrolley Cookbooks',
        'Embark on a culinary journey with extensive collection of cookbooks from OpenTrolley. Whether you are a seasoned chef or a kitchen novice, discover inspiration and expertise within the pages of these culinary treasures. Diverse Culinary Genres: OpenTrolley brings you a diverse range of cookbooks covering various cuisines, dietary preferences, and cooking skill levels. From international flavors to healthy living, find the perfect cookbook to suit your culinary interests. \nExpert Tips and Techniques: Enhance your cooking skills with expert tips and techniques shared by renowned chefs and culinary experts. OpenTrolley cookbooks offer a wealth of knowledge, making every recipe a learning experience. Specialized Dietary Choices: Explore cookbooks catering to specialized dietary choices, including vegetarian, vegan, gluten-free, and more. OpenTrolley ensures that everyone can enjoy the pleasure of cooking, regardless of dietary restrictions. \nCurated Collections: Discover curated collections of cookbooks that take you on thematic journeys, from baking extravaganzas to quick and easy weeknight dinners. OpenTrolley makes it easy to find cookbooks that align with your specific culinary interests. The Joy of Gifting: Share the joy of cooking by gifting OpenTrolley cookbooks to friends and family. Explore the world of culinary literature with OpenTrolley Cookbooks and elevate your kitchen adventures.'
        ,3, -- userId OpenTrolley
        'https://img.freepik.com/premium-photo/process-cooking-document-various-stages-food-preparation-kitchen_977107-1249.jpg?w=740'
        ,'Author : drakensang, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '11',
        '2023-05-13 10:30:00',
        'PenguinRandomHouse',
        'Explore Culinary Worlds: Penguin Random House Cookbook Collection',
        'Dive into a world of culinary delights with the Penguin Random House Cookbook Collection. Our curated selection of cookbooks spans diverse cuisines, culinary techniques, and skill levels. Our collection offers a treasure trove of recipes, tips, and inspiration. Discover the art of cooking through the eyes of renowned chefs and culinary experts. From mouthwatering desserts to savory main courses, each cookbook is a culinary journey waiting to be explored. Enhance your kitchen adventures with the Penguin Random House Cookbook Collection today!'
        ,4, -- userId PenguinRandomHouse
        'https://img.freepik.com/premium-photo/print-recipe-book-with-fresh-herbs-spices-wooden-background_176841-24644.jpg?w=1380'
        ,'Author : 8icons, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
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
    ),
    (
        '7',
        '2023-01-20 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Figuring out Your Daily Calorie Intake',  -- Title
        'Being conscious of your calorie intake can help you maintain a healthy weight, or lose a few extra pounds if necessary.
         The average recommended daily caloric intake is 2200 calories for males, and 1800 calories for females. These values are based on an average weight and physical activity of the average male and female Singaporean.
         \nOne of the simplest and most effective methods for controlling your calorie intake is portion control. Often, we eat what is on our plate rather than what our body needs.
         Consuming the right number of calories is a good first step towards achieving a healthier body. However,not all calories are equal. Keeping to the calorie count on a diet consisting of only sugary cakes, meat dishes, or a glass of wine is far from ideal. This is because your body needs a variety of vitamins and minerals, as well as fibre to function properly.
         \nEating healthy is not limited to eating the right amount and the right mix. It is also important for optimum nutrition to choose healthy foods prepared with healthier options and ingredients. Steamed chicken, for example, is far healthier than deep-fried chicken.
         \nFor example, wholegrains are healthier than refined grains (white rice or bread) as they contain more vitamins, antioxidants and fibre. In addition, they also keep you filling full for longer, which helps reduce the risk of overeating. Choosing healthier cooking oils are also important.
         If fat loss is one of your weight loss goals, merely controlling your calorie intake will not be enough to do the trick. Diet and exercise are pertinent when it comes to healthy weight loss.You should be doing a combination of cardio and strength-training exercises, which are useful in losing fat as well as gaining muscle mass.'
        ,3, -- userID
        'https://img.freepik.com/free-vector/nutrition-food-pyramid_23-2148474528.jpg?w=740&t=st=1706869210~exp=1706869810~hmac=5cd694c32b298b4344ace68ab1023c96b752e9132543666c9eb51e73f2305d41' -- too long
        ,'Author : pch.vector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '8',
        '2024-01-20 18:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        '5 Good Eating Habits to Achieve Your Health Goals',  -- Title
        'When it comes to health, we often have fitness and food goals like losing weight, exercising regularly, eating healthier or making better food choices. We can break down these health goals into smaller and more realistic steps - steps that are easier to measure and track.
         Here are 5 good eating habits which will definitely help us to achieve our food goals:
         \n#1 Choose Water \nSet a goal to drink water instead of sugar-sweetened drinks. To make this more measurable, write down how often you will make this choice.
         \n#2 Eat Slowly and Mindfully \nIt takes about 20 minutes for your brain to send out signals that you are full. Eat slowly, pay attention to what we are eating and how much. To make this more measurable, write down how often you will make an effort to take at least a half hour to finish your meal.
         \n#3 Stick to One Serving \nFor those of us who love having seconds, challenge yourself to stick to one serving and also standard portion sizes.
         \n#4 Eat Fruit and Vegetables \nSet a goal to fill half your plate with fruit and vegetables at every meal. Fruit and vegetables are naturally low in saturated and trans fat, and rich in dietary fibre, vitamins and minerals.
         \n#5 Swap to Wholegrains \nEating wholegrain foods such as brown rice, wholemeal bread can help reduce the risk of developing heart disease and diabetes. They can also help with weight management because they keep you feeling full longer and reduce the need for snacking.'
        ,3,
        'https://img.freepik.com/free-vector/healthy-choices-before-after-diet-results-4-flat-icons-square-composition-banner_1284-5424.jpg?t=st=1706758843~exp=1706759443~hmac=2781a669c00a887fe19e1229779c946466acdf525f70ac0b9e865ccfc36b8ed5'
        ,'Author : macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '9',
        '2024-01-15 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        '5 Exercises to Prevent Chronic Illnesses',  -- Title
        'Chronic illnesses such as cardiovascular (heart and blood vessel) disease, cancer and diabetes are among the most common and costly health problems in Singapore. Make your weekly workout fun with these exercises that will keep you feeling and looking in the pink of health.
         \n#1 Swimming, health benefits beyond preventing chronic conditions \nSwimming is a good physical exercise for diabetes, it is a low-impact aerobic physical activity that reduces stress on your skeletal system, making it suitable for people of all ages, as well as those recovering from injuries.
         \n#2 Cycle to lose weight and prevent chronic illnesses \nRegular aerobic exercises like cycling has many health benefits. Engaging in regular aerobic exercises like cycling improves cardiovascular fitness and at the same time decreases stress and body fat levels. Cycling is a great way to let go of any tension accumulated at work.
         \n#3 Strength Training, a weatherproof physical activity \nStrength training a few times a week will keep you strong and healthy.
         For healthy bone and muscles, you are recommended to partake in bone and muscle strengthening exercises at least 2-3 days a week. Hitting the gym regardless of time or weather, does make it easy to fit workouts into your schedule.
         \n#4 Yoga for a balance of strength and flexibility \nDoing yoga a few times a week will keep you healthy. Yoga may seem meditative and relaxing, but it also requires a balance of strength and flexibility, and can prove to be a challenging workout. Beginners should start with a Hatha class to pick up the fundamental poses, before trying out more intensive and faster styles of yoga such as Vinyasa.
         \n#5 Running your way to better chronic disease prevention \nAerobic exercises like running will boost your cardiovascular health. Add some variation to your usual running routine to keep things interesting. One option is to include interval training as part of your exercise programme, where you run at a faster pace for a sustained duration, slow down to let your body recover, and then speed up again.
         \nLastly, take care of yourself by listening to your body, and easing up the pace if you need to — exercise caution today so you can exercise again tomorrow!'
        ,3,
        'https://img.freepik.com/premium-vector/healthy-lifestyle-vector-illustration-with-organic-vegetables-fruit-workout_2175-18027.jpg?w=996'
        ,'Author : denayune, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
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
    ),
    (
        13,
        'Gretchen F. Brown, RD',
        'Hearty Pasta Soup',
        'Not Specified',
        286, 44, 11, 9, 6, 880, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Make something unique with a pack of tortellini. This hearty soup is full of fibre and vegetables and it is low in fat. The perfect lunch or supper.',
        'Heat oil in a pan. Fry the carrots and onion for 5 mins until starting to soften. Add the stock and tomatoes, then simmer for 10 mins. Add the peas and beans with 5 mins to go.\nOnce veg is tender, stir in the pasta. Return to the boil and simmer for 2 mins until the pasta is just cooked. Stir in the basil, if using. Season, then serve in bowls topped with a sprinkling of Parmesan and slices of garlic bread.',
        '1 tbsp olive oil \n2 ounces cornmeal \nhalf onion \n1 small carrot \n1 quarter leek \n1 slice celery root \n1 liter cold water \nbroth powder \nsalt \n1 egg \n2 tbsp whipping cream \n7 ounces smoked fish \nhalf bunch dill',
        '3', -- UserID
        TRUE,
        '2023-04-26 14:30:00',
        'https://img.freepik.com/premium-photo/tortellini-soup-dinner-recipe_198067-6671.jpg?w=1060',
        'Author : Vecstock, Designed by Freepik',  -- img_title
        2, -- dietary_preference
        25, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        14,
        'Jane Hornby',
        'Spiced carrot & lentil soup',
        'Not Specified',
        238, 34, 11, 7, 5, 250, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A delicious, spicy blend packed full of iron and low in fat to boot. It is ready in under half an hour, or can be made in a slow cooker',
        'Heat a large saucepan and dry-fry 2 tsp cumin seeds and a pinch of chilli flakes for 1 min, or until they start to jump around the pan and release their aromas.\nScoop out about half with a spoon and set aside. Add 2 tbsp olive oil, 600g coarsely grated carrots, 140g split red lentils, 1l hot vegetable stock and 125ml milk to the pan and bring to the boil.\nSimmer for 15 mins until the lentils have swollen and softened.\nWhizz the soup with a stick blender or in a food processor until smooth (or leave it chunky if you prefer).\nSeason to taste and finish with a dollop of plain yogurt and a sprinkling of the reserved toasted spices. Serve with warmed naan breads.',
        '2 tsp cumin seeds \npinch chili flakes \n2 tbsp olive oil \n600 grams carrot, no need to peel \n140 grams split red lentils \n1 litre hot vegetable stock \n125ml milk \nplain yogurt and naan bread',
        '3', -- UserID
        TRUE,
        '2023-04-20 14:30:00',
        'https://img.freepik.com/free-photo/view-delicious-lentil-soup-brown-pot-served-with-lemons-green-black-bread-slices_140725-144436.jpg?w=826&t=st=1706870141~exp=1706870741~hmac=b89d41489a54b1473ff5a38ac1c5841db99b50c43bf51bfae845a12b6fc02f17'
        ,'Author : EyeEm, Designed by Freepik',  -- img_title
        2, -- dietary_preference
        15, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        15,
        'Sheela Prakash',
        'Roasted Sweet Potato Salad',
        'Not Specified',
        402, 58, 14, 14, 16, 940, -- calories, carbs, protein, fat, fibre, sodium
        4-6,
        'This bright, healthy combination of spiced sweet potatoes, black beans, baby spinach, and feta is ideal for dinner prep. Roasted sweet potato salad is ideal for lunch or dinner.',
        'Preheat the oven to 425°F. Arrange a rack in the middle of the oven.\nPeel the sweet potatoes, if desired, and cut into 1-inch cubes. Place on a rimmed baking sheet. Drizzle with 2 tablespoons of olive oil and sprinkle with the chili powder and 1/2 teaspoon kosher salt.',
        '2 pounds sweet potatoes \n4 tbsp olive oil \n1 tbsp chili powder \n4 tsp kosher salt \n1/2 medium red onion \n1 large lime \n2 cans black beans, drained and rinsed \n1 to 2 packed cups baby spinach \n1/4 tsp freshly ground black pepper \n4 ounces feta cheese, crumbled',
        '3', -- UserID
        TRUE,
        '2023-01-11 15:30:00',
        'https://img.freepik.com/free-photo/fresh-vegetarian-salad-healthy-meal-with-gourmet-ingredients-generated-by-ai_188544-30672.jpg?w=996&t=st=1706869581~exp=1706870181~hmac=32a7d8b1f6e2d77867ce7c03f5f6bdf9b1027d67df53e4d6966158a7667eb2ee',
        'Author : EyeEm, Designed by Freepik',  -- img_title
        2, -- dietary_preference
        30, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        16,
        'Cassie Best',
        'Fish Tangine with saffron & almonds',
        'Not Specified',
        299, 10, 41, 11, 2, 280, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A low calorie Moroccan fish stew flavoured with saffron, almonds, cinnamon, ginger and more. It is perfect for hosting, prepare a batch in advance and freeze it.',
        'Heat the oil in a large pan. Add the onion and cook for a few mins until soft. Meanwhile, put the saffron in the hot stock and leave to steep. Add the garlic, ginger and chilli to the pan and cook for a few mins more. Tip in the spices and tomato purée, stir for a few mins until fragrant, then add the tomatoes, ground almonds, orange zest and juice, honey and saffron-scented stock, making sure that you use all of the saffron strands. Simmer, uncovered, for 10 mins, until the tomatoes have broken down and the sauce has thickened a little.\nAdd the fish to the pan, making sure the pieces are all nestled under the sauce. Cover with a lid and simmer on a low heat for 2-3 mins until just cooked. Check seasoning, add the coriander and scatter with the toasted almonds. Serve scattered with the chilli, along with some couscous and a blob of natural yogurt, if you like.',
        '1 tbsp olive oil \n1 onion chopped \npinch saffron \n600ml hot fish or chicken stock \n2 garlic cloves crushed \nthumb-sized piece ginger, peeled and grated \n1/2 green chili \n2 tsp ground cumin \n1 tsp ground coriander \n1 tsp cinnamon \n1 tbsp tomato purée \n10 cherry tomatoes, halved \n2 tbsp ground almond \nzest 1 orange \n1 tbsp honey \n700g white fish \nsmall bunch coriander chopped \nhanful flaked almond, toasted \n1/2 green chili \ncouscous and natural yogurt, to serve (optional)',
        '2', -- UserID
        TRUE,
        '2023-01-11 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tagine-5f2d3f6.jpg?quality=90&webp=true&resize=440,400',
        'Author : Cassie Best, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        25, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        17,
        'James Martin',
        'Hot & sour fish soup',
        'Not Specified',
        322, 39, 29, 7, 1, 1384, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Asian soup combines a fragrant broth with fish, seafood and light noodles, topped with strong herbs',
        'Put the coriander seeds and galangal or ginger in a saucepan. Pour in the stock, bring to the boil, then simmer gently for 5 mins. Leave to stand for 10 mins.\nMeanwhile, cook the noodles following pack instructions. Drain and keep warm. Return stock to the boil. Add the fish sauce, chillies and garlic, reduce the heat and simmer for 2 mins. Add the prawns and salmon, return to a simmer and cook gently for about 5 mins until both are firm and cooked. Add the spring onions, herbs and lime juice, to taste.\nDivide the noodles between soup bowls. Using a slotted spoon, lift out the prawns and fish, and place on the noodles. Season the hot stock, pour into the bowls and serve with Spring rolls on the side.',
        '1 tbsp olive oil \n1 onion chopped \npinch saffron \n600ml hot fish or chicken stock \n2 garlic cloves crushed \nthumb-sized piece ginger, peeled and grated \n1/2 green chili \n2 tsp ground cumin \n1 tsp ground coriander \n1 tsp cinnamon \n1 tbsp tomato purée \n10 cherry tomatoes, halved \n2 tbsp ground almond \nzest 1 orange \n1 tbsp honey \n700g white fish \nsmall bunch coriander chopped \nhanful flaked almond, toasted \n1/2 green chili \ncouscous and natural yogurt, to serve (optional)',
        '2', -- UserID
        TRUE,
        '2023-01-11 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-815477_11-c677a93.jpg?quality=90&webp=true&resize=440,400',
        'Author : James Martin, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        30, -- cooking_time
        6   -- meal type (cuisines)
    ),
    (
        18,
        'Roopa Gulati',
        'Baked fish with mint & mango relish',
        'Not Specified',
        249, 22, 30, 5, 2, 256, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'This innovative idea for white fish with a crispy, spicy coating is likely to become a favourite - and it is also low in fat.',
        'Heat oven to 200C/180C fan/gas 6 and put the fish fillets in a roasting tin. Combine the chopped chilli, mango, cumin, ginger, mint, mango chutney and lime juice. Spoon a quarter of the relish on top of each fillet and pat it down into an even layer with your fingers.\nPut the bread in a food processor with the garam masala and turmeric and whizz to fine crumbs. Add the olive oil and give the processor one final pulse to mix everything together.\nSpoon the crumbs over the relish-topped fillets. Cover the tin with foil and bake for 10 mins. Remove the foil and continue cooking for another 5 mins until the fish flakes easily and the crumbs have crisped on top. Serve with a green salad.',
        '4 x 150g skinless cod fillets \n1 green chili \n1 small ripe mango, finely diced \n1 tsp ground cumin \n1/2 finger-length piece fresh root ginger, grated \nlarge handful mint leaves, shredded \n1 tbsp mango chutney \njuice 1/2 lime \n85g crustless stale white bread \n1 tsp garam masala \n1/2 tsp tumeric \n1 tbsp olive oil',
        '2', -- UserID
        TRUE,
        '2023-01-20 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1079512_10-faac687.jpg?quality=90&webp=true&resize=440,400',
        'Author : Roopa Gulati, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        15, -- cooking_time
        7   -- meal type (cuisines)
    ),
    (
        19,
        'Elena Silcock',
        'Brussels sprouts pad Thai',
        'Not Specified',
        248, 21, 5, 15, 4, 280, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'This innovative idea for white fish with a crispy, spicy coating is likely to become a favourite - and it is also low in fat.',
        'First, put the noodles in a large heatproof bowl, cover in boiling water and leave for 10 mins. Drain and rinse with cold water, then set aside. In a bowl, mix the soy sauce or tamari, tamarind or lime juice and sugar.\nHeat the oil in a large frying pan or wok. Fry the garlic, spring onions, chilli and the cooked or leftover brussels sprouts for around 2 mins (to cook the sprouts from raw, boil for 8-10 mins until tender). Then, add the noodles and beansprouts and fry for 1 min more. Pour over the sauce and toss well, working quickly to coat all the vegetables and noodles. Once everything is heated through, season and divide between four bowls. Scatter with the nuts and serve with lime wedges to squeeze over.',
        '250g flat rice noodles \n1 tbsp soy sauce \n1 tbspp tamarind paste \n2 tsp palm sugar \n2 tbsp vegetable oil \n1 garlic clove, thinly sliced \n2 spring onions, thinly sliced on a diagonal \n1 red chili, sliced \n200g charred brussels sprouts \n100g beansprouts \n30g salted peanuts (or any other nuts), roughly chopped, to serve \nlime wedges, to serve',
        '1', -- UserID
        TRUE,
        '2023-02-10 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/noodles-99a7139.jpg?quality=90&webp=true&resize=440,400',
        'Author : Elena Silcock, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        10, -- cooking_time
        6   -- meal type (cuisines)
    ),
    (
        20,
        'Elena Silcock',
        'Beetroot & red onion tarte tatin',
        'Not Specified',
        444, 40, 6, 27, 5, 360, -- calories, carbs, protein, fat, fibre, sodium
        4-6,
        'This vegan pastry would make a stunning centerpiece. The bright red beetroot contrasts with the vibrant green salad, making it great for a meatless celebration.',
        'Heat oven to 200C/180C fan/gas 6. In a bowl, toss the beetroot and onion in 2 tbsp of the oil, the vinegar and sugar. Add the star anise and season well. Heat the rest of the oil in a large, ovenproof non-stick frying pan, then nestle in the veg so that they cover the surface of the pan. Cover with foil and cook in the oven for 45 mins.\nOn a well-floured surface, roll the pastry to a thickness of 0.5cm and cut out a circle the same size as your frying pan. Carefully take the pan out of the oven, remove the foil and wiggle the beets and onion around in the pan to make a compact layer. Put the pastry on top, tucking it in all around the edges, then return the pan to the oven and bake for 35 mins or until the pastry has puffed up and is a deep golden brown.\nSlide a palate knife around the edge of the tart, then put a plate on top of the pastry, serving side down. Flip the pan over to turn the tart out onto the plate – be careful not to burn yourself with the handle. Top with the orange zest and a sprinkle of sea salt, then serve with a peppery salad on the side.',
        '400g beetroot, cut into wedges \n1 red onion, cut into wedges \n3 tbsp olive oil \n2 tbsp rice wine vinegar \n2 tbsp soft brown sugar \n2 star anise \nflour for rolling \n500g block puff pastry \n1 orange, zested \npeppery green salad, to serve',
        '1', -- UserID
        TRUE,
        '2023-02-24 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/beetroot-star-anise-red-onion-tart-tatin-6617a3f.jpg?quality=90&webp=true&resize=440,400',
        'Author : Elena Silcock, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        80, -- cooking_time
        5   -- meal type (cuisines)
    ),
    (
        21,
        'Samuel Goldsmith',
        'Courgette curry',
        'Not Specified',
        389, 24, 12, 26, 8, 40, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'For a firmer texture in this dish, scoop out the seeds before slicing and frying the courgettes. Nothing goes to waste because the seeds give the sauce more body.',
        'Trim the ends of the courgettes, halve them lengthways and, using a teaspoon, scrape out the watery seeds in the centre (it’s fine if you don’t get all of them). Roughly slice the courgette halves, then roughly chop the seeds and reserve for later.\nHeat 2 tbsp oil in a large frying pan over a medium heat and fry the sliced courgettes until golden, about 8-10 mins. Remove from the pan, leaving the oil behind, then add the onion and a further tablespoon of oil if necessary, along with a good pinch each of salt and pepper. Fry for 6-8 mins until soft and just starting to turn a light brown, then tip in the chillies, ginger and garlic, and cook for 2 mins until starting to soften. Stir in the spices and cook for another 30 seconds.\nScatter in the chickpeas and pour in the tomatoes, coconut milk and reserved courgette seeds. Simmer over a medium-low heat for 10 mins before adding the courgettes back to the pan and cooking for a further 8-10 mins. Serve with basmati rice and sides of your choice.',
        '3 medium courgettes \n1 red onion, halved and finely sliced \n1-2 red chillies, finely chopped \n40g ginger, peeled and finely grated \n4 garlic cloves, finely grated \n2 tsp garam masala \n1 tsp ground cumin \n1 tsp ground turmeric \n400g can chickpeas, drained \n400g can chopped tomatoes \n400g can coconut milk \ncooked basmati rice, to serve',
        '1', -- UserID
        TRUE,
        '2023-02-27 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Courgette-curry-c295fa0.jpg?quality=90&webp=true&resize=375,341',
        'Author : Samuel Goldsmith, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        40, -- cooking_time
        8   -- meal type (cuisines)
    ),
    (
        22,
        'Roopa Gulati',
        'Chickpea stew with tomatoes & spinach',
        'Not Specified',
        145, 17, 7, 6, 5, 224, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Prepare this comforting dish, serve it with some naan, and settle up on the couch for a wonderful evening in.',
        'Heat the oil in a wok and fry the onion over a low heat until softened. Stir in the garlic, ginger and chillies and cook for a further 5 mins until the onions are golden and the garlic slightly toasted.\nAdd the turmeric, garam masala and cumin, stirring over a low heat for a few secs. Tip in the chopped tomatoes and add the tomato purée, then simmer for 5 mins.\nAdd the chickpeas to the pan with 300ml water (fill the can three-quarters full). Simmer for 10 mins before stirring in the spinach to wilt. Season and serve with rice or naan.',
        '1 tbsp vegetable oil \n1 red onion, sliced \n2 garlic cloves, chopped \n1/2 finger length piece fresh root ginger, shredded \n2 mild red chillies, thinly sliced \n1/2 tsp turmeric \n3/4 tsp garam masala \n1 tsp ground cumin \n4 tomatoes, chopped \n2 tsp tomato purée \n400g can chickpea, rinsed and drained \n200g baby spinach leaves \nrice or naan bread, to serve',
        '1', -- UserID
        TRUE,
        '2023-03-09 12:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-871504_10-a91e5e1.jpg?quality=90&webp=true&resize=440,400',
        'Author : Roopa Gulati, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        25, -- cooking_time
        8   -- meal type (cuisines)
    ),
    (
        23,
        'Esther Clark',
        'Veggie yaki udon',
        'Not Specified',
        366, 51, 15, 9, 11, 560, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Incorporate vegetables into your meal with our flavorful Japanese-inspired yaki udon. It is low in fat and calories, quick to prepare, and healthful.',
        'Heat the oil in a non-stick frying pan or wok over a high heat. Add the onion and fry for 5 mins. Stir in the mangetout, corn, pak choi and spring onions and cook for 5 mins more. Add the garlic, curry powder and soy sauce, and cook for another minute.\nAdd the udon noodles along with the ginger (if using) and reserved brine, and stir in 2-3 tbsp hot water until the noodles are heated through. Divide between bowls and serve.',
        '1 1/2 tbsp sesame oil \n1 red onion, cut into thin wedges \n160g mangetout \n70g baby corn, halved \n2 baby pak choi, quartered \n3 spring onions, sliced \n1 large garlic clove, crushed \n1/2 tbsp mild curry powder, or use 1 tsp garam masala \n4 tsp low-salt soy sauce \n300g ready-to-cook udon noodles \n1 tbsp pickled sushi ginger, chopped, plus 2 tbsp of the brine, optional',
        '1', -- UserID
        TRUE,
        '2023-03-07 17:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/yaki-udon-19d4efb.jpg?quality=90&webp=true&resize=440,400',
        'Author : Esther Clark, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        15, -- cooking_time
        3   -- meal type (cuisines)
    ),
    (
        24,
        'Chiwong',
        'Tomato bruschetta',
        'Not Specified',
        310, 42, 8, 12, 3, 288, -- calories, carbs, protein, fat, fibre, sodium
        12,
        'Try this easy tomato bruschetta recipe for a traditional Italian appetizer. Fresh, flavorful, and full of flavor, this simple dish is perfect for a summer get-together with friends.',
        'In a large bowl, mix the onions, tomatoes, garlic and basil, taking care not to mash or break up the tomatoes too much. Add the balsamic vinegar and extra virgin olive oil. Add salt and pepper to taste. Mix again. Cover and chill for at least an hour. This will allow the flavours to soak and blend together.\nSlice the baguette loaf diagonally into 12 thick slices and lightly toast them until they are light brown on both sides. Serve the mixture on the warm slices of bread. If you prefer the mixture at room temperature, remove from the fridge half an hour before serving.',
        '1/2 small red onion, finely chopped \n8 medium tomatoes (about 500g), coarsely chopped and drained \n2-3 garlic cloves, crushed \n6-8 leaves of fresh basil, finely chopped \n30ml balsamic vinegar \n60-80ml extra virgin olive oil \n1 loaf crusty bread',
        '1', -- UserID
        TRUE,
        '2023-03-18 10:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bruschetta-recipe-1-2448fad.jpg?quality=90&webp=true&resize=440,400',
        'Author : Chiwong, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        15, -- cooking_time
        4   -- meal type (cuisines)
    ),
    (
        25,
        'Miriam Nice',
        'Easy vegan pho',
        'Not Specified',
        234, 46, 6, 2, 3, 1120, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Prepare this simple vegan noodle soup as a comforting midweek meal. You can add extra sriracha to this low-calorie dish to make it more spicy to your liking.',
        'Tip the noodles into a bowl and cover with boiling water. Leave to stand for 10 mins, then drain, rinse in cold water and set aside.\nIn a jug, mix the Marmite with 500ml boiling water. Set aside while you cook the vegetables.\nHeat the oil in a saucepan, then add the mushrooms and leek. Cook for 10-15 mins until softened and beginning to colour, then add the soy sauce and Marmite and water mixture and stir. Bring to the boil for 5 mins.\nDivide the noodles between two deep bowls, then ladle over the hot broth. Top with the chilli slices, mint leaves and peanuts, and serve with some sriracha on the side.',
        '100g rice noodles \n1 tsp Marmite \n1 tsp vegetable oil \n50g chestnut mushrooms, sliced \n1 leek, sliced \n2 tbsp soy sauce \n1 red chilli, sliced (optional) \n1/2 bunch mint, leaves picked and stalk discarded \nhandful salted peanuts \nsriracha, to serve',
        '1', -- UserID
        TRUE,
        '2023-03-25 11:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-vegan-pho-0eaa94e.jpg?quality=90&webp=true&resize=440,400',
        'Author : Miriam Nice, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        20, -- cooking_time
        10   -- meal type (cuisines)
    ),
    (
        26,
        'Lucy Netherton',
        'Mushroom stroganoff',
        'Not Specified',
        329, 50, 11, 9, 4, 280, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'With a few clever modifications, this traditional creamy dish may be reduced in fat and calories.',
        'Heat the olive oil in a large non-stick frying pan and soften the onion for about 5 mins.\nAdd the paprika and garlic, then cook for 1 min more. Add the mushrooms and cook on a high heat, stirring often, for about 5 mins.\nPour in the stock and Worcestershire sauce. Bring to the boil, bubble for 5 mins until the sauce thickens, then turn off the heat and stir through the soured cream and most of the parsley. Make sure the pan is not on the heat or the sauce may split.\nHeat the wild rice following pack instructions, then stir through the remaining chopped parsley and serve with the stroganoff.',
        '2 tsp olive oil \n1 onion, finely chopped \n1 tbsp sweet paprika \n2 garlic cloves, crushed \n300g mixed mushrooms, chopped \n150ml low-sodium beef or vegetable stock \n1 tbsp Worcestershire sauce, or vegetarian alternative \n3 tbsp half-fat soured cream \nsmall bunch of parsley, roughly chopped \n250g pouch cooked wild rice',
        '3', -- UserID
        TRUE,
        '2023-03-29 09:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-871464_11-1ff1fe2.jpg?quality=90&webp=true&resize=500,454',
        'Author : Lucy Netherton, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        27,
        'Sara Buenfeld',
        'Smoked salmon pasta',
        'Not Specified',
        433, 69, 22, 7, 4, 760, -- calories, carbs, protein, fat, fibre, sodium
        3,
        'This simple smoked salmon spaghetti meal takes about 20 minutes to prepare and uses low-cost ingredients. It is spiced with fresh citrus, herbs, and a blast of chili.',
        'Cook the spaghetti for 10 mins or following pack instructions until al dente.\nMeanwhile, heat the oil in a wok or large frying pan and briefly fry the chilli to soften it.\nDrain the spaghetti, reserving a little of the water, then tip into the wok and, using 2 wooden spoons, toss in the chilli oil until well mixed. Add the salmon, lemon zest and chives or onions, then toss again. Season and add lemon juice to taste.',
        '300g spaghetti \n1 tbsp olive oil \n1 red chilli, deseeded and finely chopped \n120g pack smoked salmon trimmings \nzest 1 lemon and juice to taste \ngood handful snipped chives or finely chopped spring onions',
        '3', -- UserID
        TRUE,
        '2023-01-20 12:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1233472_8-2834502.jpg?quality=90&webp=true&resize=440,400',
        'Author : Sara Buenfeld, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        15, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        28,
        'Elise Bauer',
        'Sole Piccata',
        'Not Specified',
        317, 10, 16, 22, 1, 1118, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Dinner in 20 minutes! Sole piccata will become your go-to piccata recipe. Simple sole fillets, dusted in flour and sauteed in olive oil with white wine and lemon juice, make an irresistible piccata.',
        'Dredge the fillets in flour.Rinse the fish in cold water and pat them dry. In a small bowl, whisk together the flour, salt, and pepper. Then place the flour mixture in a long shallow bowl or dish. Dredge the fillets in the flour so that both sides are lightly coated.\nHeat the olive oil over medium-high heat in a large stick-free saute pan. When the oil is hot (add a little pinch of flour to the oil, and if it sizzles immediately, you are ready), work in batches and place the fish fillets in the pan in one layer and fry until golden, about 2 minutes per side. Add more oil to the pan if needed.\nOnce browned on both sides, remove the fish fillets from the pan, set them on a paper towel-lined plate (or keep them warm in a 200°F oven).\nAdd the white wine to the pan and use a wooden spoon to scrape up any browned bits from the bottom of the pan.\nLet the wine boil furiously for a minute or two, until greatly reduced, then add the lemon juice and capers. Boil another minute.\nTurn off the heat. Add 1 tablespoon of butter to the pan, swirling it constantly. When it melts, repeat the process with the other tablespoon of butter.\nStir in half of the parsley and pour it over the fish. Sprinkle the fish with the remaining parsley. Serve at once.',
        '1 pound thin, skinless fish fillets \n1/3 cup all-purpose flour, for dredging \n1 teaspoon kosher salt \n1 teaspoon finely ground black pepper \n4 tablespoons extra virgin olive oil \n1/2 cup dry white wine (such as sauvignon blanc or pinot grigio) \n2 tablespoons lemon juice \n1/4 cup small capers \n2 tablespoons butter \n1/4 cup chopped fresh parsley',
        '1', -- UserID
        TRUE,
        '2023-01-10 14:00:00',
        'https://www.simplyrecipes.com/thmb/sZ-I3ZBb3qoMUZkij__FvpCCtsI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Sole-Piccata-LEAD-18-7fe82170950744bc9d41a75d944fc79b.JPG',
        'Author : Elise Bauer, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time
        4   -- meal type (cuisines)
    ),
    (
        29,
        'Elise Bauer',
        'Baked Lingcod with Lemon-Garlic Butter Sauce',
        'Not Specified',
        465, 3, 46, 28, 0, 1004, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'One quick and simple seafood recipe that comes together quickly is baked lingcod. Combine it with our lemon garlic butter sauce for a simple midweek supper! Works great with other fish too.',
        'Put the clam juice, sherry, whole milk, garlic, shallots, and bay leaf in a pot and bring to a boil. Boil it down by half.\nIn a separate saucepan (1-qt minimum), prepare the roux. Heat one tablespoon of butter in the saucepan on medium heat until it is foamy. Sprinkle in the flour, and stir for a couple of minutes with a metal whisk until well mixed. Cook until the color is tan, but not brown.\nSlowly add the reduced sauce mixture to the roux, stirring quickly to incorporate. When you first add some of the mixture, the roux will bubble up. Just keep pouring and keep whisking to incorporate.\nTurn the heat to low. Slowly whisk in the butter, 2 tablespoons at a time.\nAdd lemon juice, salt, and white pepper. Add some more clam juice or water if the sauce is too thick. Sprinkle with chopped parsley right before serving.\nMove the oven rack so that the baking pan will be 4 to 5 inches from the heat. Preheat the oven to 350°F.\nPrep the fish fillets: Rinse the fish in cold water. Cut into serving pieces if necessary. Remove any bones with fish-bone tweezers or (spotlessly clean) pliers. Lay the fish flat in a foil-lined baking pan. Rub some olive oil over both sides of the lingcod, enough to coat. Sprinkle both sides with a few shakes of salt and pepper.\nBake the fish at 350°F for 10 to 15 minutes, until just done. To test, use the tip of a knife to gently cut into the thickest part of the fillet. The fish is done when the fish has just turned from translucent to opaque at the center. Once you pull the fish out of the oven, it will continue to cook for a few minutes.\nServe the fish with the sauce poured on top. Rice, crusty bread and a simple salad are good accompaniments.',
        '1/2 cup clam juice, plus more as needed \n1/2 cup dry sherry \n1/2 cup whole milk \n1 tablespoon minced garlic \n1 tablespoon minced shallot \n1 bay leaf \n1 tablespoon unsalted butter \n1 tablespoon all-purpose flour \n1 cup unsalted butter, cut into 2-tablespoon pieces \n1 tablespoon lemon juice \n1/2 teaspoon kosher salt \n1/2 teaspoon ground white pepper \n2 tablespoons chopped fresh parsley \n2 pounds lingcod fillets \n2 teaspoons extra virgin olive oil \nKosher salt \nFreshly ground black pepper',
        '1', -- UserID
        TRUE,
        '2023-01-02 08:00:00',
        'https://img.freepik.com/free-photo/front-view-tasty-fried-fish-with-tomatoes-dark-blue-surface-meal-pepper-cooking-fry-seafood-sea-meat-food-salad_179666-17634.jpg?size=626&ext=jpg&ga=GA1.2.1875319134.1702524039&semt=ais',
        'Author : Elise Bauer, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        15, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        30,
        'Vivian Jao',
        'Whole Steamed Fish',
        'Not Specified',
        121, 4, 16, 3, 0, 714, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Threads of fresh ginger and scallions are laid on top of whole fish, and hot oil is poured over it to release aromatic fragrances and flavors. A lightly sweetened soy-based sauce binds the entire dish together.',
        'Separate herbs, ginger, and scallions for cooking and garnish. Smash a portion of ginger for cooking and julienne the rest for garnish. Cut scallions into 2-inch pieces; slice two-thirds for cooking, save the rest for garnish.\nSet up a steamer in a wok with water.Trim, scale, rinse, and pat dry the fish. Score the fish on both sides. Season the fish with salt and pepper. Stuff the fish cavity with ginger, scallions, and cilantro. Steam the fish for around 12 minutes until flaky.\nMix soy sauce, Shaoxing wine, and sugar. Heat oil until very hot; set aside.\nRemove fish, transfer to a platter. Garnish with julienned ginger, scallions, and cilantro. Pour hot oil over the fish and herbs. Heat sauce and pour around the fish.',
        '2 1/2-inch piece fresh ginger, divided \n2 scallions, divided \n20 small sprigs cilantro, divided \n1 (1 1/2 pound) whole black sea bass or red snapper, scaled and gutted \n2 teaspoons kosher salt \n1/16 teaspoon freshly ground black pepper \n1 tablespoon Shaoxing wine or dry sherry \n3 tablespoons soy sauce \n2 tablespoons Shaoxing wine \n2 tablespoons granulated sugar \n2 tablespoons canola or avocado oil \ncooked white rice, to serve',
        '1', -- UserID
        TRUE,
        '2023-03-02 08:30:00',
        'https://www.simplyrecipes.com/thmb/_Ibx2pOBu4NyMV-Yney9VxuY5k4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Steamed-Whole-Fish-LEAD-3-a919bfb94b2d45aeb410dae0b6fbfc66.jpg',
        'Author : Uyen Luu, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        15, -- cooking_time
        1   -- meal type (cuisines)
    ),
    (
        31,
        'Sabrina Modelle',
        'Grilled Fish Tacos with Strawberry Pineapple Salsa',
        'Not Specified',
        281, 32, 22, 8, 5, 268, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Grilled fish tacos served with a sweet and spicy strawberry pineapple salsa! This is the ideal summer meal—light, fresh, and quick. Excellent for a gathering.',
        'In a bowl, mix together all salsa ingredients, except for the sugar, and refrigerate for at least 30 minutes or up to 2 days. Taste and add sugar or additional seasonings to taste when ready to serve.\nIf you have a gas grill, make sure to preheat it for at least 10 minutes with the lid closed. If you have a charcoal grill, push the coals to one side to make high heat and lower heat zones for cooking.\nRemove fish from the refrigerator and pat dry with paper towels. In a small bowl or jar, mix spices until completely combined. Brush the fish with a little oil, then sprinkle all over with seasoning. Rest the fish at room temperature while the grill heats up.\nWhen your grill is hot, wipe the grates with oil. You can either use a grill brush or a small wad of paper towels dipped in the oil. Wipe the grates 5 to 10 times until they look black and glossy.\nPlace your fish, skin side down, on the grill. If using a charcoal grill, place over indirect heat. On a gas grill, turn the heat down to medium (about 350F) and close the lid. Grill 2 minutes, then check the fish by lifting one corner of the fish to see if it will come up without sticking. The skin should be crisp and brown. If it lifts easily, flip the fish and cook for another 3 to 5 minutes with the lid closed. If the fish doesn’t lift easily, continue cooking and checking every 30 seconds. Grill until the fish is cooked through and flakes easily with an internal temperature of 145F. Transfer the fish to a plate to rest.\nTurn heat to high and brush grates with oil again (or cook over direct heat on a charcoal grill). Cook tortillas for 30 seconds on each side to warm and soften.\nCut the fish into several pieces. Serve on tortillas, topped with salsa and other toppings.',
        '1 cup strawberries, finely diced \n1 cup pineapple, finely diced \n1/2 cup red onion, finely diced \n1 clove garlic, minced \n1 cup cilantro, roughly chopped, loosely packed \n1 small red chili, diced (optional) \n1 lime, juiced (about 1 1/2 tablespoons juice) \n1/4 teaspoon salt \n1/4 teaspoon black pepper \n1/2 teaspoon sugar (optional if the salsa is tart) \n1 pound firm-fleshed fish (like sea bass, swordfish, halibut, mahi mahi, or salmon) \n1 teaspoon ground cumin \n1 teaspoon sweet paprika \n1 teaspoon smoked paprika \n1/4 teaspoon salt \n1/4 teaspoon black pepper \n1 tablespoon olive oil \nGrapeseed or other high heat oil, for grill \n12 small (4- to 6-inch) corn tortillas \nTo serve: Shredded red cabbage, Sliced radishes, Avocado, Sour Cream, Lime Wedges, Cilantro',
        '1', -- UserID
        TRUE,
        '2023-06-03 09:30:00',
        'https://img.freepik.com/free-photo/tasty-mexican-food_23-2148140284.jpg?w=826&t=st=1706869731~exp=1706870331~hmac=d2702fa0fc314552663b8213ebb9eb4f253fbf76c1f56b74cc54e252f58d6a43',
        'Author : Sabrina Modelle, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        10, -- cooking_time
        6   -- meal type (cuisines)
    ),
    (
        32,
        'Elise Bauer',
        'Quick Easy Fish Stew',
        'Not Specified',
        389, 7, 33, 23, 2, 782, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Make this delicious fish stew in 30 minutes with only a few simple ingredients.',
        'Heat olive oil in a large, thick-bottomed pot over medium-high heat. Add onion and sauté 4 minutes. Add the garlic and cook a minute more. Add parsley and stir 2 minutes. Add tomato and tomato paste, and gently cook for 10 more minutes or so.\nAdd clam juice, dry white wine, and fish. Bring to a simmer, and let simmer until the fish is cooked through and easily flakes apart, about 3 to 5 minutes. Add seasoning—salt, pepper, oregano, thyme, and Tabasco. Add more salt and pepper to taste.\nLadle into individual bowls and serve. Great served with crusty bread for dipping in the fish stew broth.',
        '6 tablespoons extra virgin olive oil \n1 medium onion, chopped (about 1 1/2 cups) \n3 large cloves garlic, minced \n2/3 cup fresh parsley leaves, chopped \n1 1/2 cups fresh chopped tomato OR 1 (14-ounce) can whole or crushed tomatoes with their juices \n2 teaspoons tomato paste, optional \n1 (8-ounce) bottle clam juice (or 1 cup shellfish stock) \n1/2 cup dry white wine (such as Sauvignon blanc) \n1 1/2 pounds firm white fish fillets such as halibut, cod, red snapper, or sea bass, cut into 2-inch pieces \nPinch dried oregano \nPinch dried thyme \n1/8 teaspoon Tabasco sauce , or more to taste \n1/8 teaspoon freshly ground black pepper, plus more to taste \n1 teaspoon salt, plus more to taste',
        '1', -- UserID
        TRUE,
        '2023-06-03 09:30:00',
        'https://img.freepik.com/free-photo/thai-food-tom-yum-seafood-seafood-spicy-soup_1150-38147.jpg?w=826&t=st=1706869846~exp=1706870446~hmac=42c2a1a837c8bae6e863879c6bcb09d3c1073a84f0479e0740af5125294737a4',
        'Author : Elise Bauer, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        33,
        'Elena Silcock',
        'Sweet potato & peanut curry',
        'Not Specified',
        387, 32, 6, 25, 7, 240, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Make this delicious and inexpensive vegan curry for a simple family meal. With spinach and sweet potato, it boasts two of your five-a-day and it’s under 400 calories.',
        'Melt 1 tbsp coconut oil in a saucepan over a medium heat and soften 1 chopped onion for 5 mins. Add 2 grated garlic cloves and a grated thumb-sized piece of ginger, and cook for 1 min until fragrant.\nStir in 3 tbsp Thai red curry paste, 1 tbsp smooth peanut butter and 500g sweet potato, peeled and cut into chunks, then add 400ml coconut milk and 200ml water.\nBring to the boil, turn down the heat and simmer, uncovered, for 25-30 mins or until the sweet potato is soft.\nStir through 200g spinach and the juice of 1 lime, and season well. Serve with cooked rice, and if you want some crunch, sprinkle over a few dry roasted peanuts.',
        '1 tbsp coconut oil \n1 onion, chopped \n2 garlic cloves, grated \nthumb-sized piece ginger, grated \n3 tbsp Thai red curry paste (check the label to make sure it’s vegetarian/ vegan) \n1 tbsp smooth peanut butter \n500g sweet potato, peeled and cut into chunks \n400ml can coconut milk \n200g bag spinach \n1 lime, juiced \ncooked rice, to serve (optional) \ndry roasted peanuts, to serve (optional)',
        '2', -- UserID
        TRUE,
        '2023-06-11 12:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/satay-sweet-potato-curry-17cc62d.jpg?quality=90&webp=true&resize=440,400',
        'Author : Elena Silcock, Designed by bbcgoodfood',  -- img_title
        2, -- dietary_preference
        45, -- cooking_time
        7   -- meal type (cuisines)
    ),
    (
        34,
        'Esther Clark',
        'Veggie okonomiyaki',
        'Not Specified',
        312, 29, 15, 15, 5, 280, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'This vegetarian okonomiyaki with eggs, cabbage, pak choi, and spring onions will give your diet a major boost. It is a low-calorie, nutritious lunch choice.',
        'Whisk together the eggs, flour and milk until smooth. Add half the spring onions, the pak choi, cabbage, chilli and soy sauce. Heat the oil in a small frying pan and pour in the batter. Cook, covered, over a medium heat for 7-8 mins. Flip the okonomiyaki into a second frying pan, then return it to the heat and cook for a further 7-8 mins until a skewer inserted into it comes out clean.\nMix the mayonnaise and lime juice together in a small bowl. Transfer the okonomiyaki to a plate, then drizzle over the lime mayo and top with the extra chilli and spring onion and the sushi ginger, if using. Serve with the wasabi on the side, if you like.',
        '3 large eggs \n50g plain flour \n50ml milk \n4 spring onions, trimmed and sliced \n1 pak choi, sliced \n200g Savoy cabbage, shredded \n1 red chilli, deseeded and finely chopped, plus extra to serve \n1/2 tbsp low-salt soy sauce \n1/2 tbsp rapeseed oil \n1 heaped tbsp low-fat mayonnaise \n1/2 lime, juiced \nsushi ginger, to serve (optional) \nwasabi, to serve (optional)',
        '2', -- UserID
        TRUE,
        '2023-06-20 16:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/veggie-okonomiyaki-de8fe85.jpg?quality=90&webp=true&resize=440,400',
        'Author : Esther Clark, Designed by bbcgoodfood',  -- img_title
        2, -- dietary_preference
        10, -- cooking_time
        3   -- meal type (cuisines)
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
    ('I love this recipe!' ,                            4.0, '12',1),
    ('This is very awesome',                            3.2, '7', 2),
    ('The recipe is very delicious',                    5.0, '8', 2),
    ('I love this recipe!' ,                            4.0, '9', 2),
    ('This is very awesome',                            3.2, '12',2),
    ('The recipe is very delicious',                    5.0, '8', 3),
    ('I love this recipe!' ,                            4.0, '9', 3),
    ('I love this recipe!' ,                            4.0, '12',3),
    ('This is very awesome',                            3.2, '7', 4),
    ('The recipe is very delicious',                    5.0, '8', 4),
    ('I love this recipe!' ,                            4.0, '9', 4),
    ('I love this recipe!' ,                            4.0, '12',14),
    ('This is very awesome',                            3.2, '7', 15),
    ('The recipe is very delicious',                    5.0, '8', 15),
    ('I love this recipe!' ,                            4.0, '9', 15),
    ('I love this recipe!' ,                            4.0, '12',15),
    ('This is very awesome',                            3.2, '7', 16),
    ('The recipe is very delicious',                    5.0, '8', 16),
    ('I love this recipe!' ,                            4.0, '9', 16),
    ('I love this recipe!' ,                            4.0, '12',16),
    ('This is very awesome',                            3.2, '7', 17),
    ('The recipe is very delicious',                    5.0, '8', 17),
    ('I love this recipe!' ,                            4.0, '9', 17),
    ('I love this recipe!' ,                            4.0, '12',17),
    ('This is very awesome',                            3.2, '7', 18),
    ('The recipe is very delicious',                    5.0, '8', 18),
    ('I love this recipe!' ,                            4.0, '9', 18),
    ('I love this recipe!' ,                            4.0, '12',18),
    ('This is very awesome',                            3.2, '7', 19),
    ('The recipe is very delicious',                    5.0, '8', 19),
    ('I love this recipe!' ,                            4.0, '12',24),
    ('This is very awesome',                            3.2, '7', 25),
    ('The recipe is very delicious',                    5.0, '8', 25),
    ('I love this recipe!' ,                            4.0, '9', 25),
    ('I love this recipe!' ,                            4.0, '12',25),
    ('This is very awesome',                            3.2, '7', 26),
    ('The recipe is very delicious',                    5.0, '8', 26),
    ('I love this recipe!' ,                            4.0, '9', 26),
    ('I love this recipe!' ,                            4.0, '12',26),
    ('This is very awesome',                            3.2, '7', 27),
    ('The recipe is very delicious',                    5.0, '8', 27),
    ('I love this recipe!' ,                            4.0, '9', 27),
    ('I love this recipe!' ,                            4.0, '12',27),
    ('This is very awesome',                            3.2, '7', 28),
    ('The recipe is very delicious',                    5.0, '8', 28),
    ('I love this recipe!' ,                            4.0, '9', 28),
    ('I love this recipe!' ,                            4.0, '12',28),
    ('This is very awesome',                            3.2, '7', 29),
    ('The recipe is very delicious',                    5.0, '8', 30),
    ('I love this recipe!' ,                            4.0, '12',31),
    ('This is very awesome',                            3.2, '7', 32),
    ('The recipe is very delicious',                    5.0, '8', 33),
    ('I love this recipe!' ,                            4.0, '9', 33),
    ('I love this recipe!' ,                            4.0, '12',34);



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
        '6' -- userid
    ),
    (
        7,
        'Sheeba',
        'Low-Calorie Weight Loss Meal Plan',
        TRUE,
        'Starting a low-calorie weight loss meal plan can be a life-changing journey toward achieving your health and wellness goals. This well-designed meal plan aims to offer a methodical approach to calorie management while guaranteeing that vital nutrients are balanced.',
        'By including nutritious foods and lean protein sources, we hope to establish the calorie deficit required for optimal weight loss. This guarantees the continued provision of vital vitamins, minerals, and antioxidants to promote general health. This balance not only helps with weight loss, but it also promotes long-term energy and satiety. Adequate hydration is suggested throughout the day. Water not only promotes overall health, but it can also help regulate appetite and reduce excessive eating.',
        'The meal plan takes an organized approach to everyday eating, stressing portion control and nutrient-dense foods.',
        '2023-06-15',
        3, -- weight loss
        'https://img.freepik.com/free-vector/main-food-groups-macronutrients-vector_1308-127634.jpg?size=626&ext=jpg&ga=GA1.1.1497591401.1706588994&semt=ais',
        'Designed by Freepik',  -- img_title
        '6' -- userid
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
    (6, 6),
    (7, 7),
    (7, 8),
    (7, 9);