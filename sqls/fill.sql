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
    ('Wheat'      ),
    ('Dairy'      ),
    ('Legume'     );

-- 2. Dietary preferences
Insert into dietary_preferences
(subcategory_name)
VALUES
    ('Vegan'),
    ('Vegetarian'),
    ('Pescatarian'),
    ('Meat-Based');

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
    ('Vietnamese'),
    ('Moroccan'),
    ('Korean'),
    ('Southeast Asian');

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
    ('13', 'user13', 1, 'pw1',   '13@gmail.com',   'Christopher', 'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('14', 'user14', 1, 'pw1',   '14@gmail.com',   'Bennedict',   'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('15', 'user15', 1, 'pw1',   '15@gmail.com',   'Angela',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('16', 'user16', 1, 'pw1',   '16@gmail.com',   'Alan',        'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('17', 'user17', 1, 'pw1',   '17@gmail.com',   'Kenneth',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('18', 'user18', 1, 'pw1',   '18@gmail.com',   'Samatha',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('19', 'user19', 1, 'pw1',   '19@gmail.com',   'Mikel',       'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('20', 'user20', 1, 'pw1',   '20@gmail.com',   'Parker',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
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
    ('40', 'user40', 1, 'pw1',   '40@gmail.com' ,  'Jeff' ,       'NUTRITIONIST' ,      DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('41', 'user41', 1, 'pw1',   '41@gmail.com',   'Jessica',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('42', 'user42', 1, 'pw1',   '42@gmail.com',   'Samuel',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('43', 'user43', 1, 'pw1',   '43@gmail.com',   'Christopher', 'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('44', 'user44', 1, 'pw1',   '44@gmail.com',   'Bennedict',   'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('45', 'user45', 1, 'pw1',   '45@gmail.com',   'Angela',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('46', 'user46', 1, 'pw1',   '46@gmail.com',   'Alan',        'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('47', 'user47', 1, 'pw1',   '47@gmail.com',   'Kenneth',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('48', 'user48', 1, 'pw1',   '48@gmail.com',   'Samatha',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('49', 'user49', 1, 'pw1',   '49@gmail.com',   'Mikel',       'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('50', 'user50', 1, 'pw1',   '50@gmail.com',   'Parker',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('51', 'user51', 1, 'pw1',   '51@gmail.com',   'William',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('52', 'user52', 1, 'pw1',   '52@gmail.com',   'Carrol',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('53', 'user53', 1, 'pw1',   '53@gmail.com',   'Jackson',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('54', 'user54', 1, 'pw1',   '54@gmail.com',   'Bennedict',   'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('55', 'user55', 1, 'pw1',   '55@gmail.com',   'Angela',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('56', 'user56', 1, 'pw1',   '56@gmail.com',   'Alan',        'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('57', 'user57', 1, 'pw1',   '57@gmail.com',   'Ming',        'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('58', 'user58', 1, 'pw1',   '58@gmail.com',   'Samatha',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('59', 'user59', 1, 'pw1',   '59@gmail.com',   'Mikel',       'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('60', 'user60', 1, 'pw1',   '60@gmail.com',   'Parker',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('61', 'user61', 1, 'pw1',   '61@gmail.com',   'Xiao Ming',   'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('62', 'user62', 1, 'pw1',   '62@gmail.com',   'Mike Lim',    'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('63', 'user63', 1, 'pw1',   '63@gmail.com',   'Lucas',       'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('64', 'user64', 1, 'pw1',   '64@gmail.com',   'Alex Lim',    'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('65', 'user65', 1, 'pw1',   '65@gmail.com',   'Will Chong',  'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('66', 'user66', 1, 'pw1',   '66@gmail.com',   'Alan',        'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('67', 'user67', 1, 'pw1',   '67@gmail.com',   'Ming',        'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('68', 'user68', 1, 'pw1',   '68@gmail.com',   'Amanda',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('69', 'user69', 1, 'pw1',   '69@gmail.com',   'Mikel',       'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('70', 'user70', 1, 'pw1',   '70@gmail.com',   'Wesley',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('71', 'user71', 1, 'pw1',   '71@gmail.com',   'Xiao Huan',   'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('72', 'user72', 1, 'pw1',   '72@gmail.com',   'Jack Lim',    'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('73', 'user73', 1, 'pw1',   '73@gmail.com',   'Neo',         'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('74', 'user74', 1, 'pw1',   '74@gmail.com',   'Mike Lin',    'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('75', 'user75', 1, 'pw1',   '75@gmail.com',   'Hong Cheng',  'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('76', 'user76', 1, 'pw1',   '76@gmail.com',   'Wei Jie',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('77', 'user77', 1, 'pw1',   '77@gmail.com',   'Douglas',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('78', 'user78', 1, 'pw1',   '78@gmail.com',   'Peter',       'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('79', 'user79', 1, 'pw1',   '79@gmail.com',   'Parker',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('80', 'user80', 1, 'pw1',   '80@gmail.com',   'Wesley',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('81', 'user81', 1, 'pw1',   '81@gmail.com',   'Wei Huan',    'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('82', 'user82', 1, 'pw1',   '82@gmail.com',   'Harry Peter', 'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('83', 'user83', 1, 'pw1',   '83@gmail.com',   'Ronnald',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('84', 'user84', 1, 'pw1',   '84@gmail.com',   'Christine',   'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('85', 'user85', 1, 'pw1',   '85@gmail.com',   'Dominic',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('86', 'user86', 1, 'pw1',   '86@gmail.com',   'Wei Jie',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('87', 'user87', 1, 'pw1',   '87@gmail.com',   'Douglas',     'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('88', 'user88', 1, 'pw1',   '88@gmail.com',   'Peter',       'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('89', 'user89', 1, 'pw1',   '89@gmail.com',   'Parker',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('90', 'user90', 1, 'pw1',   '90@gmail.com',   'Jia Long',    'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('91', 'user91', 1, 'pw1',   '91@gmail.com',   'Elroy',       'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('92', 'user92', 1, 'pw1',   '92@gmail.com',   'Terry Peter', 'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('93', 'user93', 1, 'pw1',   '93@gmail.com',   'Zhi Chuan',   'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('94', 'user94', 1, 'pw1',   '94@gmail.com',   'Jun Hong',    'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('95', 'user95', 1, 'pw1',   '95@gmail.com',   'Hong Quan',   'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('96', 'user96', 1, 'pw1',   '96@gmail.com',   'Kaylin Chua', 'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('97', 'user97', 1, 'pw1',   '97@gmail.com',   'Baraq',       'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('98', 'user98', 1, 'pw1',   '98@gmail.com',   'Rafael',      'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('99', 'user99', 1, 'pw1',   '99@gmail.com',   'Bale',        'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('100','user100', 1, 'pw1', '100@gmail.com',   'Jia Chen',    'REGISTERED_USER',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY));




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
    ('3', 'PHILIPS ELECTRONICS SINGAPORE PTE LTD', '199705989C', '68824037', '622, Lorong 1 Toa Payoh, Singapore 319763', '319763', 1),
    ('4', 'IKANO PTE LTD', '198004112M', '97117889', '1, MARINA BOULEVARD #28-00, ONE MARINA BOULEVARD, Singapore 018989','018989',1),
    ('21',   'ACK Enterprise',         '479977572B',   '82845672',    '13, Houagng Street,   Singapore 518231', '518231', 1),
    ('22',   'TCP Enterprise',         '479977573C',   '82745673',    '23, Sengkang Street,  Singapore 517232', '517232', 1),
    ('23', 'OPENTROLLEY BOOKSTORE PTE. LTD', '201007231R', '65907281', '8, Burn Road #07-13 Trivex, Singapore 369977', '369977', 1),
    ('24','PENGUIN RANDOM HOUSE SEA PTE LTD', '201814228W', '96450577', '50, Raffles Place #27-01 Singapore Land Tower, Singapore 048623', '048623', 1),
    ('25',   'Loo Enterprise',         '479977576F',   '92445676',    '53, Bedok North,      Singapore 514235', '514235', 1),
    ('26',   'Lim Enterprise',         '479977577G',   '92345677',    '3,  Serangoon Street, Singapore 513236', '513236', 1),
    ('27',   'Chong Enterprise',       '479977578H',   '92245678',    '4,  Tampines Street,  Singapore 512237', '512237', 1),
    ('28',   'Cheong Enterprise',      '479977579I',   '92145679',    '5,  Pasir Ris Street, Singapore 511238', '511238', 1),
    ('29',   'Wong Enterprise',        '479977570J',   '92045670',    '6,  Serangoon Street, Singapore 510239', '510239', 0),
    ('30',   'Alex Enterprise',        '479977581A',   '92145671',    '7,  Tampines Street,  Singapore 519230', '519230', 0);

-- Nutritionist
INSERT INTO Nutritionist
(ID, Company_Name, contact_number, company_address, postal_code, verified)
VALUES
    ('5', 'Sheeba The Nutritionist', '96566714', '17, Hong Kong Street, #03-02, Singapore, 059660', '059660', 1),
    ('6', 'Ritika Your Health Coach', '90267535', '126B, Edgedale Plains, Singapore 822162', '822162', 1),
    ('31',   'ACK Enterprise',        '81845672',    '13, Houagng Street,   Singapore 518231', '518231', 1),
    ('32',   'TCP Enterprise',        '82245673',    '23, Sengkang Street,  Singapore 517232', '517232', 1),
    ('33',   'Healthy Coorporation',  '83645674',    '33, Admiralty Street, Singapore 516233', '516233', 1),
    ('34',   'WW Enterprise',         '84545675',    '43, Woodland Street,  Singapore 515234', '515234', 1),
    ('35', 'Nutra Nourish', '91257500', 'Loewen Rd, 27A Core Collective Dempsey, Singapore 248839', '248839', 1),
    ('36',   'Lim Enterprise',        '96345677',    '3,  Serangoon Street, Singapore 513236', '513236', 1),
    ('37',   'Chong Enterprise',      '97245678',    '4,  Tampines Street,  Singapore 512237', '512237', 1),
    ('38',   'Cheong Enterprise',     '98145679',    '5,  Pasir Ris Street, Singapore 511238', '511238', 1),
    ('39',   'Wong Enterprise',       '99045670',    '6,  Serangoon Street, Singapore 510239', '510239', 1),
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
    ('20', '1971-07-17', 0 , 3, 1),
    ('41', '1991-09-16', 1 , 1, 3),
    ('42', '1991-01-22', 1 , 2, 3),
    ('43', '1991-10-22', 1 , 2, 2),
    ('44', '1991-08-18', 1 , 2, 2),
    ('45', '1981-02-12', 1 , 2, 2),
    ('46', '1991-09-19', 0 , 2, 2),
    ('47', '1981-09-12', 0 , 2, 1),
    ('48', '1991-05-02', 0 , 3, 1),
    ('49', '1961-09-12', 0 , 3, 1),
    ('50', '1971-07-17', 0 , 3, 1),
    ('51', '1995-09-16', 1 , 1, 3),
    ('52', '1995-01-22', 1 , 2, 3),
    ('53', '1995-10-22', 1 , 2, 2),
    ('54', '1995-08-18', 1 , 2, 2),
    ('55', '1985-02-12', 1 , 2, 2),
    ('56', '1995-09-19', 0 , 2, 2),
    ('57', '1985-09-12', 0 , 2, 1),
    ('58', '1995-05-02', 0 , 3, 1),
    ('59', '1965-09-12', 0 , 3, 1),
    ('60', '1975-07-17', 0 , 3, 1),
    ('61', '1996-09-16', 1 , 1, 3),
    ('62', '1996-01-22', 1 , 2, 3),
    ('63', '1996-10-22', 1 , 2, 2),
    ('64', '1996-08-18', 1 , 2, 2),
    ('65', '1986-02-12', 1 , 2, 2),
    ('66', '1996-09-19', 0 , 2, 2),
    ('67', '1986-09-12', 0 , 2, 1),
    ('68', '1996-05-02', 0 , 3, 1),
    ('69', '1966-09-12', 0 , 3, 1),
    ('70', '1975-07-17', 0 , 3, 1),
    ('71', '1997-09-16', 1 , 1, 3),
    ('72', '1997-01-22', 1 , 2, 3),
    ('73', '1997-10-22', 1 , 2, 2),
    ('74', '1997-08-18', 1 , 2, 2),
    ('75', '1987-02-12', 1 , 2, 2),
    ('76', '1997-09-19', 0 , 2, 2),
    ('77', '1987-09-12', 0 , 2, 1),
    ('78', '1997-05-02', 0 , 3, 1),
    ('79', '1967-09-12', 0 , 3, 1),
    ('80', '1975-07-17', 0 , 3, 1),
    ('81', '1998-09-16', 1 , 1, 3),
    ('82', '1998-01-22', 1 , 2, 3),
    ('83', '1998-10-22', 1 , 2, 2),
    ('84', '1998-08-18', 1 , 2, 2),
    ('85', '1988-02-12', 1 , 2, 2),
    ('86', '1998-09-19', 0 , 2, 2),
    ('87', '1988-09-12', 0 , 2, 1),
    ('88', '1998-05-02', 0 , 3, 1),
    ('89', '1968-09-12', 0 , 3, 1),
    ('90', '1999-09-19', 0 , 3, 1),
    ('91', '1997-09-16', 1 , 1, 3),
    ('92', '1997-09-22', 1 , 2, 3),
    ('93', '1997-09-22', 1 , 2, 2),
    ('94', '1997-09-18', 1 , 2, 2),
    ('95', '1987-09-12', 1 , 2, 2),
    ('96', '1997-09-19', 0 , 2, 2),
    ('97', '1987-09-12', 0 , 2, 1),
    ('98', '1997-09-02', 0 , 3, 1),
    ('99', '1967-09-12', 0 , 3, 1),
    ('100', '1975-09-17', 0 , 3, 1);



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
    ('15', 1),
    ('41', 4),
    ('41', 5),
    ('41', 6),
    ('42', 7),
    ('42', 8),
    ('42', 1),
    ('43', 1),
    ('43', 2),
    ('43', 3),
    ('45', 7),
    ('45', 8),
    ('45', 1),
    ('51', 4),
    ('51', 5),
    ('51', 6),
    ('52', 7),
    ('52', 8),
    ('52', 1),
    ('53', 1),
    ('53', 2),
    ('53', 3),
    ('55', 7),
    ('55', 8),
    ('55', 1),
    ('61', 4),
    ('61', 5),
    ('61', 6),
    ('62', 7),
    ('62', 8),
    ('62', 1),
    ('63', 1),
    ('63', 2),
    ('63', 3),
    ('65', 7),
    ('65', 8),
    ('65', 1),
    ('71', 4),
    ('71', 5),
    ('71', 6),
    ('72', 7),
    ('72', 8),
    ('72', 1),
    ('73', 1),
    ('73', 2),
    ('73', 3),
    ('75', 7),
    ('75', 8),
    ('75', 1),
    ('81', 4),
    ('81', 5),
    ('81', 6),
    ('82', 7),
    ('82', 8),
    ('82', 1),
    ('83', 1),
    ('83', 2),
    ('83', 3),
    ('85', 7),
    ('85', 8),
    ('85', 1),
    ('91', 4),
    ('91', 5),
    ('91', 6),
    ('92', 7),
    ('92', 8),
    ('92', 1),
    ('93', 1),
    ('93', 2),
    ('93', 3),
    ('95', 7),
    ('95', 8),
    ('95', 1),
    ('100', 7),
    ('100', 8),
    ('100', 1);






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

INSERT INTO recipe
(id, publisher, title, info, calories, carbs, protein, fat, fibre, sodium, serving_size, description, steps, ingredients, UserID, Active, createddt, img, img_title, dietary_preference, cooking_time, meal_type)
VALUES
    (
        1,
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
        'http://tinyurl.com/mvdccn8n',
        'Author : Vecstock, Designed by Freepik',  -- img_title
        2, -- dietary_preference
        25, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        2,
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
        'http://tinyurl.com/2ktzpwkv',
        'Author : EyeEm, Designed by Freepik',  -- img_title
        2, -- dietary_preference
        15, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        3,
        'Sheela Prakash',
        'Roasted Sweet Potato Salad',
        'Not Specified',
        402, 58, 14, 14, 16, 940, -- calories, carbs, protein, fat, fibre, sodium
        4-6,
        'This bright, healthy combination of spiced sweet potatoes, black beans, baby spinach, and feta is ideal for dinner prep. Roasted sweet potato salad is ideal for lunch or dinner.',
        'Preheat the oven to 425°F. Arrange a rack in the middle of the oven.\nPeel the sweet potatoes, if desired, and cut into 1-inch cubes. Place on a rimmed baking sheet. Drizzle with 2 tablespoons of olive oil and sprinkle with the chili powder and 1/2 teaspoon kosher salt. Toss to coat. Arrange the potatoes in a single layer. Roast, tossing halfway through, until tender and browned in spots, about 30 minutes. Once the potatoes are done, let them cool on the baking sheet until just warm to the touch, 10 to 15 minutes.\nSlice the red onion into very thin half-moons and place in a large bowl. Finely grate the zest of the lime into the bowl, then halve the lime crosswise and squeeze its juice into the bowl. Toss to coat the onion in the juice then leave to quick-pickle while the potatoes roast.\nAdd the roasted sweet potatoes, black beans, baby spinach, remaining 2 tablespoons olive oil, remaining 1/4 teaspoon kosher salt, and black pepper to the bowl with the onion and lime juice and toss to combine. Add the feta and toss gently again to combine.',
        '2 pounds sweet potatoes \n4 tbsp olive oil \n1 tbsp chili powder \n4 tsp kosher salt \n1/2 medium red onion \n1 large lime \n2 cans black beans, drained and rinsed \n1 to 2 packed cups baby spinach \n1/4 tsp freshly ground black pepper \n4 ounces feta cheese, crumbled',
        '3', -- UserID
        TRUE,
        '2023-01-11 15:30:00',
        'http://tinyurl.com/s5c9ehex',
        'Author : EyeEm, Designed by Freepik',  -- img_title
        2, -- dietary_preference
        30, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        4,
        'Cassie Best',
        'Fish Tangine with saffron & almonds',
        'Not Specified',
        299, 10, 41, 11, 2, 280, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A low calorie Moroccan fish stew flavoured with saffron, almonds, cinnamon, ginger and more. It is perfect for hosting, prepare a batch in advance and freeze it.',
        'Heat the oil in a large pan. Add the onion and cook for a few mins until soft. Meanwhile, put the saffron in the hot stock and leave to steep. Add the garlic, ginger and chilli to the pan and cook for a few mins more. Tip in the spices and tomato purée, stir for a few mins until fragrant, then add the tomatoes, ground almonds, orange zest and juice, honey and saffron-scented stock, making sure that you use all of the saffron strands. Simmer, uncovered, for 10 mins, until the tomatoes have broken down and the sauce has thickened a little.\nAdd the fish to the pan, making sure the pieces are all nestled under the sauce. Cover with a lid and simmer on a low heat for 2-3 mins until just cooked. Check seasoning, add the coriander and scatter with the toasted almonds. Serve scattered with the chilli, along with some couscous and a blob of natural yogurt, if you like.',
        '1 tbsp olive oil \n1 onion chopped \npinch saffron \n600ml hot fish or chicken stock \n2 garlic cloves crushed \nthumb-sized piece ginger, peeled and grated \n1/2 green chili \n2 tsp ground cumin \n1 tsp ground coriander \n1 tsp cinnamon \n1 tbsp tomato purée \n10 cherry tomatoes, halved \n2 tbsp ground almond \nzest 1 orange \n1 tbsp honey \n700g white fish \nsmall bunch coriander chopped \nhanful flaked almond, toasted \n1/2 green chili \ncouscous and natural yogurt, to serve (optional)',
        '4', -- UserID
        TRUE,
        '2023-01-11 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tagine-5f2d3f6.jpg?quality=90&webp=true&resize=440,400',
        'Author : Cassie Best, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        25, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        5,
        'James Martin',
        'Hot & sour fish soup',
        'Not Specified',
        322, 39, 29, 7, 1, 1384, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Asian soup combines a fragrant broth with fish, seafood and light noodles, topped with strong herbs',
        'Put the coriander seeds and galangal or ginger in a saucepan. Pour in the stock, bring to the boil, then simmer gently for 5 mins. Leave to stand for 10 mins.\nMeanwhile, cook the noodles following pack instructions. Drain and keep warm. Return stock to the boil. Add the fish sauce, chillies and garlic, reduce the heat and simmer for 2 mins. Add the prawns and salmon, return to a simmer and cook gently for about 5 mins until both are firm and cooked. Add the spring onions, herbs and lime juice, to taste.\nDivide the noodles between soup bowls. Using a slotted spoon, lift out the prawns and fish, and place on the noodles. Season the hot stock, pour into the bowls and serve with Spring rolls on the side.',
        '1 tbsp olive oil \n1 onion chopped \npinch saffron \n600ml hot fish or chicken stock \n2 garlic cloves crushed \nthumb-sized piece ginger, peeled and grated \n1/2 green chili \n2 tsp ground cumin \n1 tsp ground coriander \n1 tsp cinnamon \n1 tbsp tomato purée \n10 cherry tomatoes, halved \n2 tbsp ground almond \nzest 1 orange \n1 tbsp honey \n700g white fish \nsmall bunch coriander chopped \nhanful flaked almond, toasted \n1/2 green chili \ncouscous and natural yogurt, to serve (optional)',
        '4', -- UserID
        TRUE,
        '2023-01-11 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-815477_11-c677a93.jpg?quality=90&webp=true&resize=440,400',
        'Author : James Martin, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        30, -- cooking_time
        6   -- meal type (cuisines)
    ),
    (
        6,
        'Roopa Gulati',
        'Baked fish with mint & mango relish',
        'Not Specified',
        249, 22, 30, 5, 2, 256, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'This innovative idea for white fish with a crispy, spicy coating is likely to become a favourite - and it is also low in fat.',
        'Heat oven to 200C/180C fan/gas 6 and put the fish fillets in a roasting tin. Combine the chopped chilli, mango, cumin, ginger, mint, mango chutney and lime juice. Spoon a quarter of the relish on top of each fillet and pat it down into an even layer with your fingers.\nPut the bread in a food processor with the garam masala and turmeric and whizz to fine crumbs. Add the olive oil and give the processor one final pulse to mix everything together.\nSpoon the crumbs over the relish-topped fillets. Cover the tin with foil and bake for 10 mins. Remove the foil and continue cooking for another 5 mins until the fish flakes easily and the crumbs have crisped on top. Serve with a green salad.',
        '4 x 150g skinless cod fillets \n1 green chili \n1 small ripe mango, finely diced \n1 tsp ground cumin \n1/2 finger-length piece fresh root ginger, grated \nlarge handful mint leaves, shredded \n1 tbsp mango chutney \njuice 1/2 lime \n85g crustless stale white bread \n1 tsp garam masala \n1/2 tsp tumeric \n1 tbsp olive oil',
        '21', -- UserID
        TRUE,
        '2023-01-20 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1079512_10-faac687.jpg?quality=90&webp=true&resize=440,400',
        'Author : Roopa Gulati, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        15, -- cooking_time
        7   -- meal type (cuisines)
    ),
    (
        7,
        'Elena Silcock',
        'Brussels sprouts pad Thai',
        'Not Specified',
        248, 21, 5, 15, 4, 280, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'This innovative idea for white fish with a crispy, spicy coating is likely to become a favourite - and it is also low in fat.',
        'First, put the noodles in a large heatproof bowl, cover in boiling water and leave for 10 mins. Drain and rinse with cold water, then set aside. In a bowl, mix the soy sauce or tamari, tamarind or lime juice and sugar.\nHeat the oil in a large frying pan or wok. Fry the garlic, spring onions, chilli and the cooked or leftover brussels sprouts for around 2 mins (to cook the sprouts from raw, boil for 8-10 mins until tender). Then, add the noodles and beansprouts and fry for 1 min more. Pour over the sauce and toss well, working quickly to coat all the vegetables and noodles. Once everything is heated through, season and divide between four bowls. Scatter with the nuts and serve with lime wedges to squeeze over.',
        '250g flat rice noodles \n1 tbsp soy sauce \n1 tbspp tamarind paste \n2 tsp palm sugar \n2 tbsp vegetable oil \n1 garlic clove, thinly sliced \n2 spring onions, thinly sliced on a diagonal \n1 red chili, sliced \n200g charred brussels sprouts \n100g beansprouts \n30g salted peanuts (or any other nuts), roughly chopped, to serve \nlime wedges, to serve',
        '25', -- UserID
        TRUE,
        '2023-02-10 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/noodles-99a7139.jpg?quality=90&webp=true&resize=440,400',
        'Author : Elena Silcock, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        10, -- cooking_time
        6   -- meal type (cuisines)
    ),
    (
        8,
        'Elena Silcock',
        'Beetroot & red onion tarte tatin',
        'Not Specified',
        444, 40, 6, 27, 5, 360, -- calories, carbs, protein, fat, fibre, sodium
        4-6,
        'This vegan pastry would make a stunning centerpiece. The bright red beetroot contrasts with the vibrant green salad, making it great for a meatless celebration.',
        'Heat oven to 200C/180C fan/gas 6. In a bowl, toss the beetroot and onion in 2 tbsp of the oil, the vinegar and sugar. Add the star anise and season well. Heat the rest of the oil in a large, ovenproof non-stick frying pan, then nestle in the veg so that they cover the surface of the pan. Cover with foil and cook in the oven for 45 mins.\nOn a well-floured surface, roll the pastry to a thickness of 0.5cm and cut out a circle the same size as your frying pan. Carefully take the pan out of the oven, remove the foil and wiggle the beets and onion around in the pan to make a compact layer. Put the pastry on top, tucking it in all around the edges, then return the pan to the oven and bake for 35 mins or until the pastry has puffed up and is a deep golden brown.\nSlide a palate knife around the edge of the tart, then put a plate on top of the pastry, serving side down. Flip the pan over to turn the tart out onto the plate – be careful not to burn yourself with the handle. Top with the orange zest and a sprinkle of sea salt, then serve with a peppery salad on the side.',
        '400g beetroot, cut into wedges \n1 red onion, cut into wedges \n3 tbsp olive oil \n2 tbsp rice wine vinegar \n2 tbsp soft brown sugar \n2 star anise \nflour for rolling \n500g block puff pastry \n1 orange, zested \npeppery green salad, to serve',
        '28', -- UserID
        TRUE,
        '2023-02-24 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/beetroot-star-anise-red-onion-tart-tatin-6617a3f.jpg?quality=90&webp=true&resize=440,400',
        'Author : Elena Silcock, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        80, -- cooking_time
        5   -- meal type (cuisines)
    ),
    (
        9,
        'Samuel Goldsmith',
        'Courgette curry',
        'Not Specified',
        389, 24, 12, 26, 8, 40, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'For a firmer texture in this dish, scoop out the seeds before slicing and frying the courgettes. Nothing goes to waste because the seeds give the sauce more body.',
        'Trim the ends of the courgettes, halve them lengthways and, using a teaspoon, scrape out the watery seeds in the centre (it’s fine if you don’t get all of them). Roughly slice the courgette halves, then roughly chop the seeds and reserve for later.\nHeat 2 tbsp oil in a large frying pan over a medium heat and fry the sliced courgettes until golden, about 8-10 mins. Remove from the pan, leaving the oil behind, then add the onion and a further tablespoon of oil if necessary, along with a good pinch each of salt and pepper. Fry for 6-8 mins until soft and just starting to turn a light brown, then tip in the chillies, ginger and garlic, and cook for 2 mins until starting to soften. Stir in the spices and cook for another 30 seconds.\nScatter in the chickpeas and pour in the tomatoes, coconut milk and reserved courgette seeds. Simmer over a medium-low heat for 10 mins before adding the courgettes back to the pan and cooking for a further 8-10 mins. Serve with basmati rice and sides of your choice.',
        '3 medium courgettes \n1 red onion, halved and finely sliced \n1-2 red chillies, finely chopped \n40g ginger, peeled and finely grated \n4 garlic cloves, finely grated \n2 tsp garam masala \n1 tsp ground cumin \n1 tsp ground turmeric \n400g can chickpeas, drained \n400g can chopped tomatoes \n400g can coconut milk \ncooked basmati rice, to serve',
        '24', -- UserID
        TRUE,
        '2023-02-27 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Courgette-curry-c295fa0.jpg?quality=90&webp=true&resize=375,341',
        'Author : Samuel Goldsmith, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        40, -- cooking_time
        8   -- meal type (cuisines)
    ),
    (
        10,
        'Roopa Gulati',
        'Chickpea stew with tomatoes & spinach',
        'Not Specified',
        145, 17, 7, 6, 5, 224, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Prepare this comforting dish, serve it with some naan, and settle up on the couch for a wonderful evening in.',
        'Heat the oil in a wok and fry the onion over a low heat until softened. Stir in the garlic, ginger and chillies and cook for a further 5 mins until the onions are golden and the garlic slightly toasted.\nAdd the turmeric, garam masala and cumin, stirring over a low heat for a few secs. Tip in the chopped tomatoes and add the tomato purée, then simmer for 5 mins.\nAdd the chickpeas to the pan with 300ml water (fill the can three-quarters full). Simmer for 10 mins before stirring in the spinach to wilt. Season and serve with rice or naan.',
        '1 tbsp vegetable oil \n1 red onion, sliced \n2 garlic cloves, chopped \n1/2 finger length piece fresh root ginger, shredded \n2 mild red chillies, thinly sliced \n1/2 tsp turmeric \n3/4 tsp garam masala \n1 tsp ground cumin \n4 tomatoes, chopped \n2 tsp tomato purée \n400g can chickpea, rinsed and drained \n200g baby spinach leaves \nrice or naan bread, to serve',
        '24', -- UserID
        TRUE,
        '2023-03-09 12:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-871504_10-a91e5e1.jpg?quality=90&webp=true&resize=440,400',
        'Author : Roopa Gulati, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        25, -- cooking_time
        8   -- meal type (cuisines)
    ),
    (
        11,
        'Esther Clark',
        'Veggie yaki udon',
        'Not Specified',
        366, 51, 15, 9, 11, 560, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Incorporate vegetables into your meal with our flavorful Japanese-inspired yaki udon. It is low in fat and calories, quick to prepare, and healthful.',
        'Heat the oil in a non-stick frying pan or wok over a high heat. Add the onion and fry for 5 mins. Stir in the mangetout, corn, pak choi and spring onions and cook for 5 mins more. Add the garlic, curry powder and soy sauce, and cook for another minute.\nAdd the udon noodles along with the ginger (if using) and reserved brine, and stir in 2-3 tbsp hot water until the noodles are heated through. Divide between bowls and serve.',
        '1 1/2 tbsp sesame oil \n1 red onion, cut into thin wedges \n160g mangetout \n70g baby corn, halved \n2 baby pak choi, quartered \n3 spring onions, sliced \n1 large garlic clove, crushed \n1/2 tbsp mild curry powder, or use 1 tsp garam masala \n4 tsp low-salt soy sauce \n300g ready-to-cook udon noodles \n1 tbsp pickled sushi ginger, chopped, plus 2 tbsp of the brine, optional',
        '22', -- UserID
        TRUE,
        '2023-03-07 17:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/yaki-udon-19d4efb.jpg?quality=90&webp=true&resize=440,400',
        'Author : Esther Clark, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        15, -- cooking_time
        3   -- meal type (cuisines)
    ),
    (
        12,
        'Chiwong',
        'Tomato bruschetta',
        'Not Specified',
        310, 42, 8, 12, 3, 288, -- calories, carbs, protein, fat, fibre, sodium
        12,
        'Try this easy tomato bruschetta recipe for a traditional Italian appetizer. Fresh, flavorful, and full of flavor, this simple dish is perfect for a summer get-together with friends.',
        'In a large bowl, mix the onions, tomatoes, garlic and basil, taking care not to mash or break up the tomatoes too much. Add the balsamic vinegar and extra virgin olive oil. Add salt and pepper to taste. Mix again. Cover and chill for at least an hour. This will allow the flavours to soak and blend together.\nSlice the baguette loaf diagonally into 12 thick slices and lightly toast them until they are light brown on both sides. Serve the mixture on the warm slices of bread. If you prefer the mixture at room temperature, remove from the fridge half an hour before serving.',
        '1/2 small red onion, finely chopped \n8 medium tomatoes (about 500g), coarsely chopped and drained \n2-3 garlic cloves, crushed \n6-8 leaves of fresh basil, finely chopped \n30ml balsamic vinegar \n60-80ml extra virgin olive oil \n1 loaf crusty bread',
        '22', -- UserID
        TRUE,
        '2023-03-18 10:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bruschetta-recipe-1-2448fad.jpg?quality=90&webp=true&resize=440,400',
        'Author : Chiwong, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        15, -- cooking_time
        4   -- meal type (cuisines)
    ),
    (
        13,
        'Miriam Nice',
        'Easy vegan pho',
        'Not Specified',
        234, 46, 6, 2, 3, 1120, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Prepare this simple vegan noodle soup as a comforting midweek meal. You can add extra sriracha to this low-calorie dish to make it more spicy to your liking.',
        'Tip the noodles into a bowl and cover with boiling water. Leave to stand for 10 mins, then drain, rinse in cold water and set aside.\nIn a jug, mix the Marmite with 500ml boiling water. Set aside while you cook the vegetables.\nHeat the oil in a saucepan, then add the mushrooms and leek. Cook for 10-15 mins until softened and beginning to colour, then add the soy sauce and Marmite and water mixture and stir. Bring to the boil for 5 mins.\nDivide the noodles between two deep bowls, then ladle over the hot broth. Top with the chilli slices, mint leaves and peanuts, and serve with some sriracha on the side.',
        '100g rice noodles \n1 tsp Marmite \n1 tsp vegetable oil \n50g chestnut mushrooms, sliced \n1 leek, sliced \n2 tbsp soy sauce \n1 red chilli, sliced (optional) \n1/2 bunch mint, leaves picked and stalk discarded \nhandful salted peanuts \nsriracha, to serve',
        '22', -- UserID
        TRUE,
        '2023-03-25 11:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-vegan-pho-0eaa94e.jpg?quality=90&webp=true&resize=440,400',
        'Author : Miriam Nice, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        20, -- cooking_time
        10   -- meal type (cuisines)
    ),
    (
        14,
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
        15,
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
        16,
        'Elise Bauer',
        'Sole Piccata',
        'Not Specified',
        317, 10, 16, 22, 1, 1118, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Dinner in 20 minutes! Sole piccata will become your go-to piccata recipe. Simple sole fillets, dusted in flour and sauteed in olive oil with white wine and lemon juice, make an irresistible piccata.',
        'Dredge the fillets in flour.Rinse the fish in cold water and pat them dry. In a small bowl, whisk together the flour, salt, and pepper. Then place the flour mixture in a long shallow bowl or dish. Dredge the fillets in the flour so that both sides are lightly coated.\nHeat the olive oil over medium-high heat in a large stick-free saute pan. When the oil is hot (add a little pinch of flour to the oil, and if it sizzles immediately, you are ready), work in batches and place the fish fillets in the pan in one layer and fry until golden, about 2 minutes per side. Add more oil to the pan if needed.\nOnce browned on both sides, remove the fish fillets from the pan, set them on a paper towel-lined plate (or keep them warm in a 200°F oven).\nAdd the white wine to the pan and use a wooden spoon to scrape up any browned bits from the bottom of the pan.\nLet the wine boil furiously for a minute or two, until greatly reduced, then add the lemon juice and capers. Boil another minute.\nTurn off the heat. Add 1 tablespoon of butter to the pan, swirling it constantly. When it melts, repeat the process with the other tablespoon of butter.\nStir in half of the parsley and pour it over the fish. Sprinkle the fish with the remaining parsley. Serve at once.',
        '1 pound thin, skinless fish fillets \n1/3 cup all-purpose flour, for dredging \n1 teaspoon kosher salt \n1 teaspoon finely ground black pepper \n4 tablespoons extra virgin olive oil \n1/2 cup dry white wine (such as sauvignon blanc or pinot grigio) \n2 tablespoons lemon juice \n1/4 cup small capers \n2 tablespoons butter \n1/4 cup chopped fresh parsley',
        '4', -- UserID
        TRUE,
        '2023-01-10 14:00:00',
        'https://www.simplyrecipes.com/thmb/sZ-I3ZBb3qoMUZkij__FvpCCtsI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Sole-Piccata-LEAD-18-7fe82170950744bc9d41a75d944fc79b.JPG',
        'Author : Elise Bauer, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time
        4   -- meal type (cuisines)
    ),
    (
        17,
        'Elise Bauer',
        'Baked Lingcod with Lemon-Garlic Butter Sauce',
        'Not Specified',
        465, 3, 46, 28, 0, 1004, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'One quick and simple seafood recipe that comes together quickly is baked lingcod. Combine it with our lemon garlic butter sauce for a simple midweek supper! Works great with other fish too.',
        'Put the clam juice, sherry, whole milk, garlic, shallots, and bay leaf in a pot and bring to a boil. Boil it down by half.\nIn a separate saucepan (1-qt minimum), prepare the roux. Heat one tablespoon of butter in the saucepan on medium heat until it is foamy. Sprinkle in the flour, and stir for a couple of minutes with a metal whisk until well mixed. Cook until the color is tan, but not brown.\nSlowly add the reduced sauce mixture to the roux, stirring quickly to incorporate. When you first add some of the mixture, the roux will bubble up. Just keep pouring and keep whisking to incorporate.\nTurn the heat to low. Slowly whisk in the butter, 2 tablespoons at a time.\nAdd lemon juice, salt, and white pepper. Add some more clam juice or water if the sauce is too thick. Sprinkle with chopped parsley right before serving.\nMove the oven rack so that the baking pan will be 4 to 5 inches from the heat. Preheat the oven to 350°F.\nPrep the fish fillets: Rinse the fish in cold water. Cut into serving pieces if necessary. Remove any bones with fish-bone tweezers or (spotlessly clean) pliers. Lay the fish flat in a foil-lined baking pan. Rub some olive oil over both sides of the lingcod, enough to coat. Sprinkle both sides with a few shakes of salt and pepper.\nBake the fish at 350°F for 10 to 15 minutes, until just done. To test, use the tip of a knife to gently cut into the thickest part of the fillet. The fish is done when the fish has just turned from translucent to opaque at the center. Once you pull the fish out of the oven, it will continue to cook for a few minutes.\nServe the fish with the sauce poured on top. Rice, crusty bread and a simple salad are good accompaniments.',
        '1/2 cup clam juice, plus more as needed \n1/2 cup dry sherry \n1/2 cup whole milk \n1 tablespoon minced garlic \n1 tablespoon minced shallot \n1 bay leaf \n1 tablespoon unsalted butter \n1 tablespoon all-purpose flour \n1 cup unsalted butter, cut into 2-tablespoon pieces \n1 tablespoon lemon juice \n1/2 teaspoon kosher salt \n1/2 teaspoon ground white pepper \n2 tablespoons chopped fresh parsley \n2 pounds lingcod fillets \n2 teaspoons extra virgin olive oil \nKosher salt \nFreshly ground black pepper',
        '4', -- UserID
        TRUE,
        '2023-01-02 08:00:00',
        'http://tinyurl.com/4jy89mh9',
        'Author : Elise Bauer, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        15, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        18,
        'Vivian Jao',
        'Whole Steamed Fish',
        'Not Specified',
        121, 4, 16, 3, 0, 714, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Threads of fresh ginger and scallions are laid on top of whole fish, and hot oil is poured over it to release aromatic fragrances and flavors. A lightly sweetened soy-based sauce binds the entire dish together.',
        'Separate herbs, ginger, and scallions for cooking and garnish. Smash a portion of ginger for cooking and julienne the rest for garnish. Cut scallions into 2-inch pieces; slice two-thirds for cooking, save the rest for garnish.\nSet up a steamer in a wok with water.Trim, scale, rinse, and pat dry the fish. Score the fish on both sides. Season the fish with salt and pepper. Stuff the fish cavity with ginger, scallions, and cilantro. Steam the fish for around 12 minutes until flaky.\nMix soy sauce, Shaoxing wine, and sugar. Heat oil until very hot; set aside.\nRemove fish, transfer to a platter. Garnish with julienned ginger, scallions, and cilantro. Pour hot oil over the fish and herbs. Heat sauce and pour around the fish.',
        '2 1/2-inch piece fresh ginger, divided \n2 scallions, divided \n20 small sprigs cilantro, divided \n1 (1 1/2 pound) whole black sea bass or red snapper, scaled and gutted \n2 teaspoons kosher salt \n1/16 teaspoon freshly ground black pepper \n1 tablespoon Shaoxing wine or dry sherry \n3 tablespoons soy sauce \n2 tablespoons Shaoxing wine \n2 tablespoons granulated sugar \n2 tablespoons canola or avocado oil \ncooked white rice, to serve',
        '21', -- UserID
        TRUE,
        '2023-03-02 08:30:00',
        'https://www.simplyrecipes.com/thmb/_Ibx2pOBu4NyMV-Yney9VxuY5k4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Steamed-Whole-Fish-LEAD-3-a919bfb94b2d45aeb410dae0b6fbfc66.jpg',
        'Author : Uyen Luu, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        15, -- cooking_time
        1   -- meal type (cuisines)
    ),
    (
        19,
        'Sabrina Modelle',
        'Grilled Fish Tacos with Strawberry Pineapple Salsa',
        'Not Specified',
        281, 32, 22, 8, 5, 268, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Grilled fish tacos served with a sweet and spicy strawberry pineapple salsa! This is the ideal summer meal—light, fresh, and quick. Excellent for a gathering.',
        'In a bowl, mix together all salsa ingredients, except for the sugar, and refrigerate for at least 30 minutes or up to 2 days. Taste and add sugar or additional seasonings to taste when ready to serve.\nIf you have a gas grill, make sure to preheat it for at least 10 minutes with the lid closed. If you have a charcoal grill, push the coals to one side to make high heat and lower heat zones for cooking.\nRemove fish from the refrigerator and pat dry with paper towels. In a small bowl or jar, mix spices until completely combined. Brush the fish with a little oil, then sprinkle all over with seasoning. Rest the fish at room temperature while the grill heats up.\nWhen your grill is hot, wipe the grates with oil. You can either use a grill brush or a small wad of paper towels dipped in the oil. Wipe the grates 5 to 10 times until they look black and glossy.\nPlace your fish, skin side down, on the grill. If using a charcoal grill, place over indirect heat. On a gas grill, turn the heat down to medium (about 350F) and close the lid. Grill 2 minutes, then check the fish by lifting one corner of the fish to see if it will come up without sticking. The skin should be crisp and brown. If it lifts easily, flip the fish and cook for another 3 to 5 minutes with the lid closed. If the fish doesn’t lift easily, continue cooking and checking every 30 seconds. Grill until the fish is cooked through and flakes easily with an internal temperature of 145F. Transfer the fish to a plate to rest.\nTurn heat to high and brush grates with oil again (or cook over direct heat on a charcoal grill). Cook tortillas for 30 seconds on each side to warm and soften.\nCut the fish into several pieces. Serve on tortillas, topped with salsa and other toppings.',
        '1 cup strawberries, finely diced \n1 cup pineapple, finely diced \n1/2 cup red onion, finely diced \n1 clove garlic, minced \n1 cup cilantro, roughly chopped, loosely packed \n1 small red chili, diced (optional) \n1 lime, juiced (about 1 1/2 tablespoons juice) \n1/4 teaspoon salt \n1/4 teaspoon black pepper \n1/2 teaspoon sugar (optional if the salsa is tart) \n1 pound firm-fleshed fish (like sea bass, swordfish, halibut, mahi mahi, or salmon) \n1 teaspoon ground cumin \n1 teaspoon sweet paprika \n1 teaspoon smoked paprika \n1/4 teaspoon salt \n1/4 teaspoon black pepper \n1 tablespoon olive oil \nGrapeseed or other high heat oil, for grill \n12 small (4- to 6-inch) corn tortillas \nTo serve: Shredded red cabbage, Sliced radishes, Avocado, Sour Cream, Lime Wedges, Cilantro',
        '21', -- UserID
        TRUE,
        '2023-06-03 09:30:00',
        'http://tinyurl.com/bdhy9kkz',
        'Author : Sabrina Modelle, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        10, -- cooking_time
        6   -- meal type (cuisines)
    ),
    (
        20,
        'Elise Bauer',
        'Quick Easy Fish Stew',
        'Not Specified',
        389, 7, 33, 23, 2, 782, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Make this delicious fish stew in 30 minutes with only a few simple ingredients.',
        'Heat olive oil in a large, thick-bottomed pot over medium-high heat. Add onion and sauté 4 minutes. Add the garlic and cook a minute more. Add parsley and stir 2 minutes. Add tomato and tomato paste, and gently cook for 10 more minutes or so.\nAdd clam juice, dry white wine, and fish. Bring to a simmer, and let simmer until the fish is cooked through and easily flakes apart, about 3 to 5 minutes. Add seasoning—salt, pepper, oregano, thyme, and Tabasco. Add more salt and pepper to taste.\nLadle into individual bowls and serve. Great served with crusty bread for dipping in the fish stew broth.',
        '6 tablespoons extra virgin olive oil \n1 medium onion, chopped (about 1 1/2 cups) \n3 large cloves garlic, minced \n2/3 cup fresh parsley leaves, chopped \n1 1/2 cups fresh chopped tomato OR 1 (14-ounce) can whole or crushed tomatoes with their juices \n2 teaspoons tomato paste, optional \n1 (8-ounce) bottle clam juice (or 1 cup shellfish stock) \n1/2 cup dry white wine (such as Sauvignon blanc) \n1 1/2 pounds firm white fish fillets such as halibut, cod, red snapper, or sea bass, cut into 2-inch pieces \nPinch dried oregano \nPinch dried thyme \n1/8 teaspoon Tabasco sauce , or more to taste \n1/8 teaspoon freshly ground black pepper, plus more to taste \n1 teaspoon salt, plus more to taste',
        '21', -- UserID
        TRUE,
        '2023-06-03 09:30:00',
        'http://tinyurl.com/2aeskmzp',
        'Author : Elise Bauer, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        21,
        'Elena Silcock',
        'Sweet potato & peanut curry',
        'Not Specified',
        387, 32, 6, 25, 7, 240, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Make this delicious and inexpensive vegan curry for a simple family meal. With spinach and sweet potato, it boasts two of your five-a-day and it’s under 400 calories.',
        'Melt 1 tbsp coconut oil in a saucepan over a medium heat and soften 1 chopped onion for 5 mins. Add 2 grated garlic cloves and a grated thumb-sized piece of ginger, and cook for 1 min until fragrant.\nStir in 3 tbsp Thai red curry paste, 1 tbsp smooth peanut butter and 500g sweet potato, peeled and cut into chunks, then add 400ml coconut milk and 200ml water.\nBring to the boil, turn down the heat and simmer, uncovered, for 25-30 mins or until the sweet potato is soft.\nStir through 200g spinach and the juice of 1 lime, and season well. Serve with cooked rice, and if you want some crunch, sprinkle over a few dry roasted peanuts.',
        '1 tbsp coconut oil \n1 onion, chopped \n2 garlic cloves, grated \nthumb-sized piece ginger, grated \n3 tbsp Thai red curry paste (check the label to make sure it’s vegetarian/ vegan) \n1 tbsp smooth peanut butter \n500g sweet potato, peeled and cut into chunks \n400ml can coconut milk \n200g bag spinach \n1 lime, juiced \ncooked rice, to serve (optional) \ndry roasted peanuts, to serve (optional)',
        '22', -- UserID
        TRUE,
        '2023-06-11 12:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/satay-sweet-potato-curry-17cc62d.jpg?quality=90&webp=true&resize=440,400',
        'Author : Elena Silcock, Designed by bbcgoodfood',  -- img_title
        2, -- dietary_preference
        45, -- cooking_time
        7   -- meal type (cuisines)
    ),
    (
        22,
        'Esther Clark',
        'Veggie okonomiyaki',
        'Not Specified',
        312, 29, 15, 15, 5, 280, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'This vegetarian okonomiyaki with eggs, cabbage, pak choi, and spring onions will give your diet a major boost. It is a low-calorie, nutritious lunch choice.',
        'Whisk together the eggs, flour and milk until smooth. Add half the spring onions, the pak choi, cabbage, chilli and soy sauce. Heat the oil in a small frying pan and pour in the batter. Cook, covered, over a medium heat for 7-8 mins. Flip the okonomiyaki into a second frying pan, then return it to the heat and cook for a further 7-8 mins until a skewer inserted into it comes out clean.\nMix the mayonnaise and lime juice together in a small bowl. Transfer the okonomiyaki to a plate, then drizzle over the lime mayo and top with the extra chilli and spring onion and the sushi ginger, if using. Serve with the wasabi on the side, if you like.',
        '3 large eggs \n50g plain flour \n50ml milk \n4 spring onions, trimmed and sliced \n1 pak choi, sliced \n200g Savoy cabbage, shredded \n1 red chilli, deseeded and finely chopped, plus extra to serve \n1/2 tbsp low-salt soy sauce \n1/2 tbsp rapeseed oil \n1 heaped tbsp low-fat mayonnaise \n1/2 lime, juiced \nsushi ginger, to serve (optional) \nwasabi, to serve (optional)',
        '22', -- UserID
        TRUE,
        '2023-06-20 16:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/veggie-okonomiyaki-de8fe85.jpg?quality=90&webp=true&resize=440,400',
        'Author : Esther Clark, Designed by bbcgoodfood',  -- img_title
        2, -- dietary_preference
        10, -- cooking_time
        3   -- meal type (cuisines)
    ),
    (
        23,
        'Marianne Wren',
        'Spanakopita Egg Casserole',
        'Not Specified',
        221, 6, 14, 16, 1, 344, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'This breakfast version of a Greek classic eschews the hefty pastry and provides you with plenty of vegetables, creamy ricotta, and feta for a filling start to the day. Make it ahead of time and just warm it up in the toaster oven in the morning.',
        'Preheat oven to 350˚F. Mist a 9-inch square baking dish with cooking spray.\nIn a large, deep skillet on medium-low, heat oil. Add onion and cook, stirring often, until soft, 4 to 5 minutes. Add garlic and cook, stirring frequently until fragrant, 30 seconds. Add spinach, salt and pepper; cook, tossing with tongs until spinach is wilted, about 2 minutes. Transfer mixture into prepared dish, spreading evenly to coat the bottom.\nIn a large bowl, whisk together eggs and cream until well combined. Stir in ricotta, feta, parsley and dill.\nPour egg mixture over spinach layer; stir gently, allowing some spinach to float into egg mixture. Bake until set and just starting to brown around the edges, 25 to 30 minutes. Slice into squares or triangles and serve warm.',
        '2 tsp extra-virgin olive oil \n1 small yellow onion, finely chopped \n2 cloves garlic, minced \n5 oz baby spinach \n1/4 tsp each sea salt and ground black pepper \n8 large eggs \n1/2 cup light cream \n1/2 cup full-fat ricotta cheese \n1/2 cup crumbled full-fat feta cheese \n1/4 cup each chopped fresh flat-leaf parsley and dill',
        '22', -- UserID
        TRUE,
        '2023-06-01 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/03/spanakopita-egg-casserole_85-web-3.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Darren Kemper, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        40, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        24,
        'Beth Lipton',
        'Grilled Eggplant Caprese',
        'Not Specified',
        243, 7, 9, 21, 3, 179, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A twist on a typical Caprese salad, our version uses grilled eggplant slices that you can make ahead for easier prep.',
        'Spread eggplant, tomato and mozzarella slices on a platter. Scatter basil on top. Drizzle with oil and vinegar then sprinkle with salt and pepper. Alternatively, drizzle with Macadamia Basil Pesto.',
        '2 eggplants, sliced then grilled \n4 heirloom tomatoes, sliced \n6 oz fresh mozzarella, sliced \n1 tbsp thinly sliced fresh basil (or use whole basil leaves) \n1 tbsp extra-virgin olive oil \n2 tsp balsamic vinegar \n1/8 tsp each coarse sea salt and ground black pepper',
        '21', -- UserID
        TRUE,
        '2023-04-01 16:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/05/grilled-eggplant-caprese_79-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Beth Lipton, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        15, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        25,
        'Marianne Wren',
        'Halibut with Olive Tapenade Crust',
        'Not Specified',
        221, 6, 14, 16, 1, 344, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A fast olive, garlic, and caper tapenade tops tender fish, which is served with roasted grape tomatoes and lemon-scented couscous with fresh parsley.',
        'Preheat over to 400°F. Line a roasting pan with parchment paper.\nIn a food processor, pulse olives, garlic, capers and 2 tsp oil until coarsely chopped. In a medium bowl, toss tomatoes with remaining 1 tsp oil. Arrange halibut and tomatoes in pan and sprinkle both with salt and pepper. Divide olive mixture over top halibut. Bake for 15 minutes, or until fish is opaque and flakes easily with a fork and tomatoes are soft and collapsed.\nMeanwhile, cook couscous according to package directions. Drain, return to pot and stir in parsley and lemon zest. Serve fish and tomatoes over couscous.',
        '12 pitted black olives \n2 cloves garlic \n2 tbsp capers, drained \n1 tbsp olive oil, divided \n2 cups grape tomatoes, halved \n4 6-oz boneless, skinless halibut fillets \n1/4 tsp sea salt \n1 tsp fresh ground black pepper \n1 cup Israeli couscous \n2 tbsp chopped fresh flat-leaf parsley leaves \n1 tsp finely grated lemon zest',
        '21', -- UserID
        TRUE,
        '2023-11-23 10:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/12/HalibutOliveTapenade_Feature.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Marianne Wren, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        26,
        'Jesse Jane Lee',
        'Veggie Scramble with Quinoa',
        'Not Specified',
        418, 29, 19, 26, 5, 416, -- calories, carbs, protein, fat, fibre, sodium
        1,
        'This light breakfast will keep you going throughout the morning. Prepare 1 and a half cups of cooked quinoa ahead of time and refrigerate for subsequent breakfasts to save time this week.',
        'In a sauté pan on medium, heat oil. Add onion and cook 5 minutes until translucent. Add spinach and tomatoes; sauté until spinach wilts, about 3 minutes.\nWhile veggies are cooking, in a bowl, whisk eggs with salt and pepper. Once spinach has wilted, add eggs; heat and scramble to desired doneness. Serve over cooked quinoa.',
        '1 tbsp avocado oil \n1/4 cup diced yellow onion \n1 cup loosely packed chopped baby spinach \n1/2 cup diced tomato \n2 large eggs \n1/8 tsp sea salt \n1/4 tsp ground black pepper \n1/2 cup cooked quinoa',
        '21', -- UserID
        TRUE,
        '2023-11-23 10:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/10/veggie-scramble-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Jesse Jane Lee, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        27,
        'Jesse Jane Lee',
        'Banana Coconut Chocolate Smoothie',
        'Not Specified',
        221, 6, 14, 16, 1, 344, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Chocolate for breakfast? Sure, please! Because it contains entire foods like spinach, beans, and bananas, this smoothie will keep you feeling full. Pick a protein powder without any additional sweeteners.',
        'Place all ingredients in a blender and blend until smooth.',
        '1 banana, cut into chunks and frozen \n1 cup packed baby spinach \n1 cup water \n1/2 cup full-fat coconut milk \n1/4 cup canned cannellini beans, drained \n1 scoop chocolate protein powder  \n1 tsp ground cinnamon',
        '21', -- UserID
        TRUE,
        '2023-09-20 15:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/10/banana-almond-chocolate-smoothie-1-1-1-e1611878429924.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Jesse Jane Lee, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        5, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        28,
        'Jesse Jane Lee',
        'Poached Egg Avocado Toast',
        'Not Specified',
        221, 6, 14, 16, 1, 344, -- calories, carbs, protein, fat, fibre, sodium
        1,
        'This egg-topped avocado toast elevates the dish to new heights. Make sure your bread slices are firm enough to withstand the toppings.',
        'Mash avocado with lime juice. Divide among 2 slices of toast.\nIn a saucepan over medium-low, heat 3 inches water; bring to a gentle simmer.\nWorking 1 at a time, break egg into small dish and gently slide egg into hot water. Add second egg in same method. Keep water at a very low simmer water until egg whites are set and yolks are cooked to desired doneness, 3 to 5 minutes.\nRemove eggs from water with slotted spoon, drain well on paper towels and place over avocado on toast. Top with pepper, salt and pepper flakes.',
        '1/2 avocado \n1 tsp fresh lime juice \n2 thin slices whole-wheat or sourdough bread, toasted \n2 large eggs \n1/4 tsp ground black pepper \n1/8 tsp each sea salt and red pepper flakes',
        '22', -- UserID
        TRUE,
        '2023-07-04 09:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/10/poached-egg-avocado-toast-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Jesse Jane Lee, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        10, -- cooking_time
        3   -- meal type (cuisines)
    ),
    (
        29,
        'Heather BainBridge',
        'Cajun Catfish Po Boy & Cooling Vegetable Salad',
        'Not Specified',
        345, 35, 31, 14, 7.5, 592, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Try this healthier version of the traditional New Orleans sammie, which includes grilled fish, an abundance of vegetables, a whole-wheat baguette, and a light goat cheese spread, instead of heading south for the greasy, deep-fried original.',
        'Ensure that 2 racks are in middle positions in oven. Preheat oven to 400°F.\nPrepare Cooling Vegetable Salad: In a medium bowl, combine cucumbers, tomatoes, carrot, parsley and onion. Then add pepper, garlic powder, oil and vinegar and stir until vegetables are evenly coated. Place in refrigerator to let flavors meld until ready to serve meal. \nPrepare Cajun Catfish: Place catfish on a foil-lined cookie sheet. Brush fillets with oil and sprinkle with spices. Bake 12 to 15 minutes, until flaky and no longer translucent.\nPrepare Goat Cheese Spread: In a small bowl, stir together cheese, yogurt, lemon juice, parsley, carrot, cucumber and pepper until combined. Set aside.\nTo assemble each sandwich, smear Goat Cheese Spread on 1 side of a baguette slice and set aside. Place a catfish fillet on another slice of baguette. Top fillet with 2 onion slices, 2 tomato slices and 1 lettuce leaf; then top with reserved baguette slice, spread-side-down. Repeat with remaining catfish fillet and accompaniments. Serve with Cooling Vegetable Salad. Keep stored in refrigerator for 2 to 4 days to ensure freshness.',
        '1 cup cucumbers, peeled and halved \n10 grape tomatoes, halved \n1/4 cup carrots, shredded  \n1/4 cup flat-leaf parsley, minced \n1/4 cup red onion, diced \n1/4 tsp ground black pepper \n1/4 tsp garlic powder \n1/2 tsp extra-virgin olive oil \n1 tbsp rice wine vinegar \n2 3-oz catfish fillets \n1 tsp extra-virgin olive oil \n1 1/2 tsp Cajun spices \n4 oz bakery-fresh wholewheat baguette, sliced into 4 pieces and toasted \n4 slices red onion \n4 slices tomato (each slice 1/4-inch thick) \n2 Boston lettuce leaves \n1 oz goat cheese \n3 tbsp nonfat Greek-style yogurt \n1 tsp fresh lemon juice \n2 tbsp flat-leaf parsley, minced \n3 tbsp carrots, shredded \n2 tbsp cucumbers, diced \n1/2 tsp ground black pepper',
        '25', -- UserID
        TRUE,
        '2023-07-10 10:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/06/poboy-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Heather BainBridge, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        25, -- cooking_time
        3   -- meal type (cuisines)
    ),
    (
        30,
        'Heather BainBridge',
        'Moroccan Buffalo & Chickpea Chili',
        'Not Specified',
        397, 51, 29, 9, 11, 267, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Buffalo is a great substitute for beef because it is low in fat and high in protein. Our chili features large cubes of lean meat combined with vegetables and nine different spices.',
        'In a large nonstick pot, cook steak for 2 minutes over medium high heat. Add garlic, onion, celery, carrots and all spices. Cook for 5 minutes. Then add chickpeas, cooking for 2 more minutes.\nTurn up heat to high and pour in 4 cups water, corn, tomatoes and bay leaf. Bring to a boil and stir in tomato paste. Reduce heat to medium and simmer, uncovered, for 30 to 35 minutes, stirring occasionally, until liquid reduces and chili thickens. Squeeze juice of both lemons into chili, if desired, and stir. Remove bay leaf before serving. Chili can be stored in refrigerator for 5 days or frozen for 2 to 3 months.',
        '1 lb top-round buffalo steak or lean beef stew meat, cut into 1-inch cubes \n2 tbsp garlic, minced \n2 1/2 cups yellow onion, chopped \n1 cup celery, chopped \n2 cups carrots, cut into matchsticks \n1 tbsp cumin, ground \n2 tsp dried coriander \n1 tsp ground black pepper \n1/2 tsp turmeric \n1/2 tsp paprika \n3 1/2 cups cooked chickpeas \n1 cup frozen corn (no need to thaw) \n2 cups tomatoes, chopped \n1 bay leaf \n1 6-oz jar tomato paste',
        '25', -- UserID
        TRUE,
        '2023-02-17 17:30:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/06/chili-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Heather BainBridge, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        40, -- cooking_time
        11   -- meal type (cuisines)
    ),
    (
        31,
        'Heather BainBridge',
        'Sesame Garlic Chicken with Tahini Spinach & Toasted Peanut Quinoa',
        'Not Specified',
        470, 54, 38, 13, 15, 520, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'The taste of nutrient-dense sesame seeds, both toasted on top of the chicken grilled with garlic and in the Middle Eastern-inspired tahini sauce, gives this flavorful dish a double dose of punch.',
        'Ensure that 2 racks are in middle positions in oven. Preheat oven to 375˚F.\nPlace chicken on a foil-lined baking pan. With a sharp knife, make 3 slits, a quarter to halfway through each chicken breast. Stuff thin slits with garlic, dividing evenly. Sprinkle 1 tsp sesame seeds on top of chicken. Place in oven on middle rack and bake for 30 to 35 minutes, until chicken’s juices run clear and no pink remains.\nMeanwhile, on a separate foiled-lined baking pan, toast peanuts in the same 375˚F oven for 4 to 6 minutes on top rack.\nRinse quinoa thoroughly with water in a fine-mesh strainer until water runs clear. Drain well. Combine quinoa and 1 cup water in a medium-size saucepan. Bring to a boil, then reduce heat to medium-low, cover and cook until grains become translucent, about 15 to 20 minutes. Add toasted peanuts to cooked quinoa.\nPrepare Tahini Sauce: In a small bowl, whisk together tahini, vinegar, soy sauce, 1 tsp water and stevia until combined.\nDivide spinach between 2 plates and top with Tahini Sauce. Sprinkle remaining 1/2 tsp sesame seeds on top of spinach. Plate chicken breasts and quinoa off to side of spinach. Chicken can be kept stored in refrigerator for 4 days.',
        '2 4-oz boneless, skinless chicken breasts \n1 clove garlic, sliced \n1 1/2 tsp unsalted sesame seeds, divided \n3 tbsp unsalted raw peanuts \n1/2 cup quinoa \n1 16-oz bag spinach, washed, drained, stems removed and steamed \n1 1/2 tbsp sesame tahini \n1 tbsp rice wine vinegar \n1 tsp low-sodium soy sauce \n1 tsp stevia powder',
        '25', -- UserID
        TRUE,
        '2023-04-30 17:30:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2013/04/sesamegarlicchicken_article-1.jpg',
        'Author : Heather BainBridge, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        20, -- cooking_time
        1   -- meal type (cuisines)
    ),
    (
        32,
        'Marriane Wren',
        'Egg Sandwiches with Red Peppers and Tahini',
        'Not Specified',
        277, 24, 18, 13, 4, 560, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Start your day off right with these sandwiches, which are loaded with probiotics from kefir and prebiotics from chives and yellow onions. If prepared ahead of time, keep the eggs, sauce, and pita separate and assemble before eating.',
        'In a small bowl, whisk together eggs, egg whites, salt and pepper. In a separate bowl, combine kefir, lemon juice, tahini and chives. Set bowls side.\nIn a large skillet on medium-high, heat oil. Add onion and cook, stirring often, until soft, 2 to 3 minutes. Add red and green peppers and continue cooking, stirring often, until peppers soften, 4 minutes more.\nReduce heat to medium-low and add egg mixture. Cook, stirring often, until eggs are set, 4 to 5 minutes.\nDivide egg mixture among pita halves; drizzle with tahini mixture. Garnish with additional chives.',
        '3 large eggs + 4 egg whites \n1/4 tsp each sea salt and ground black pepper \n2 tbsp plain whole-milk kefir \n1/2 tbsp fresh lemon juice \n1/2 tbsp tahini paste \n1/2 tbsp chopped fresh chives + additional for garnish \n1 tsp olive oil \n1/4 cup chopped yellow onion \n1/2 cup each chopped red and green bell pepper \n1 6-inch whole-grain pocket-style pita, halved',
        '25', -- UserID
        TRUE,
        '2023-05-01 17:30:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2017/03/ce68-weightloss-middle-eastern-western-egg-sandwiches-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Marianne Wren, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        33,
        'Beth Lipton',
        'The California Salad',
        'Not Specified',
        404, 23, 21, 26, 12, 757, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Enjoy this colorful array of healthful, classic California dishes, such as creamy avocado, veggie burgers, microgreens, and more, and feel like a true Californian.',
        'Make dressing: In a small food processor, blend all dressing ingredients. (MAKE AHEAD: Make dressing up to 1 day ahead; cover and refrigerate. Whisk well before using.).\nMake salad: In a large bowl, toss lettuce with 2 tbsp of the dressing (add more to taste), then divide among bowls. Arrange tomatoes, carrots, beets and avocado on top. Add a patty to each and top with microgreens. Sprinkle with walnuts and goat cheese (if using). Serve with remaining dressing on the side.',
        '1/2 cup fresh flat-leaf parsley, roughly chopped \n1/4 cup fresh basil, roughly chopped \n1/4 cup extra-virgin olive oil \n2 tbsp apple cider vinegar \n1 tbsp Dijon mustard \n1 tsp pure maple syrup \n1/4 tsp sea salt \n1/8 tsp ground black pepper \n6 cups mixed baby lettuces (about 7 1/2 oz) \n1 cup cherry or grape tomatoes \n2 carrots, shredded \n1 cup chopped steamed beets \n1 avocado, pitted, sliced \n4 veggie patties of choice \n1 cup microgreens or sprouts \n1/4 cup toasted walnuts, optional',
        '25', -- UserID
        TRUE,
        '2023-06-02 13:30:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2022/03/CleanEating_CE101FebMar2022_BurgerSalad_The-California_web.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Marianne Wren, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        15, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        34,
        'Sarah Sweeney',
        'Savory Yogurt Bowl with Roasted Chickpeas',
        'Not Specified',
        404, 23, 21, 26, 12, 757, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Roasted chickpeas lend a flavorful crunch to this unusual savory breakfast when combined with plain yogurt, veggies, and za atar, a Middle Eastern spice mixture.',
        'Preheat the oven to 400°F. On a large, parchment-lined baking sheet, place chickpeas; toss with one-half of oil, cumin and salt. Roast for 35 minutes, stirring halfway through, until golden and crisp. (MAKE AHEAD: Store chickpeas in an airtight container until ready to use.)\nDivide the yogurt between serving bowls and top with cucumber, tomatoes and mint and parsley. Drizzle with remaining one-half of oil and garnish with za’atar and pine nuts (if using).',
        '1 15-oz BPA-free can chickpeas, drained, rinsed and patted dry \n2 tbsp extra-virgin olive oil, divided \n1 tsp ground cumin \n1/4 tsp sea salt \n1 1/2 cups whole-milk plain yogurt \n2 Lebanese cucumbers, sliced \n1/2 cup cherry tomatoes, halved \n1 tbsp each fresh mint and flat-leaf parsley, chopped',
        '25', -- UserID
        TRUE,
        '2023-01-10 13:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2021/11/YogurtBowl_Feature.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Marianne Wren, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        35, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        35,
        'Sarah Sweeney',
        'Balsamic Roasted Portobellos',
        'Not Specified',
        270, 16, 18, 16, 5, 736, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'These juicy mushrooms topped with spinach, tomatoes, and eggs are a delicious way to start the day.',
        'Preheat oven to 400°F. In a medium bowl, toss mushrooms, one-half of oil, vinegar, Italian seasoning and one-half the salt and pepper. Place on a large parchment-lined baking sheet. Divide spinach and onion over mushrooms. Place tomato halves around mushrooms and sprinkle with remaining oil, salt and pepper. Bake for 15 minutes.\nHeat a medium skillet on medium-high. Mist with cooking spray and add eggs. Cook for 2 minutes, or until desired doneness.\nTo serve, top each mushroom with a fried egg, and spoon over a few roasted tomatoes. Sprinkle with basil.\nMAKE AHEAD:  Prepare Step one and hold cooked mushrooms in the fridge until ready to eat. Reheat portobellos and tomatoes at 350°F for 10 mins. Top with fried egg.',
        '8 portobello mushrooms, stems removed \n4 tsp extra-virgin olive oil, divided \n2 tbsp balsamic vinegar \n2 tsp Italian seasoning \n1 tsp sea salt and ground black pepper, divided \n4 cups baby spinach \n1 cup thinly sliced red onion \n12-14 cocktail tomatoes, halved \n8 large eggs \n¼ cup fresh torn basil',
        '25', -- UserID
        TRUE,
        '2023-01-10 13:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2022/02/CleanEating_CE101FebMar2022_MealPlan_Balsamic-Roasted-Portobellos-with-Fried-Eggs_web.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Olimpia Davies, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        20, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        36,
        'Sarah Sweeney',
        'Hearty Chicken Quinoa Soup',
        'Not Specified',
        350, 12, 20, 11, 6, 687, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'It is a cup of traditional chicken soup with some extra-healthy ingredients added. We have given the traditional a clean eating touch by adding extra veggies and a generous serving of quinoa to our spin on chicken soup.',
        'In a Dutch oven on medium-high, heat oil. Add onion and sauté for 3 minutes until soft. Add ginger, garlic, carrot, celery, thyme, turmeric, salt and pepper. Cook for 3 minutes, stirring occasionally. Add chicken, broth and water. Bring to a boil and simmer for 30 minutes.\nRemove chicken from the pot and place on a cutting board. Shred the chicken using two forks and add it back into the pot along with the quinoa. Simmer for 5 additional minutes. Stir in the kale and simmer for another 3 minutes.',
        '1 tbsp extra-virgin olive oil \n1 yellow onion, diced \n1 tbsp minced ginger \n2 cloves garlic, minced \n1 carrot, diced \n2 celery ribs, chopped \n2 tsp thyme, chopped \n1/2 tsp ground turmeric \n1/2 tsp sea salt \n1/4 tsp ground black pepper \n1 lb boneless, skinless chicken thighs \n4 cups low-sodium chicken broth \n2 cups water \n1/2 cup white quinoa, rinsed \n1/2 cup white quinoa, rinsed 3 cups kale, stems removed and roughly chopped',
        '27', -- UserID
        TRUE,
        '2023-01-27 19:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2022/02/CleanEating_CE101FebMar2022_MealPlan_Hearty-Chicken-Quinoa-Soup-with-Kale_web.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Olimpia Davies, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        45, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        37,
        'Sarah Sweeney',
        'Steak & Sweet Potato Tacos',
        'Not Specified',
        531, 38, 32, 30, 7, 559, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'This tasty, full southwestern-style supper is entertaining. These tacos are similar to traditional steak tacos, but with sweet potato bits added.',
        'Preheat the oven to 425°F. Line a baking sheet with parchment paper. Toss the sweet potato, cabbage, onion, oil, cumin, chipotle powder and one-half of salt and pepper on the prepared sheet. Roast until sweet potatoes are tender, 30 minutes. Sprinkle with cilantro.\nHeat a cast iron skillet over medium-high heat. Season steak with remaining salt and pepper. Reduce heat to medium. Cook steaks 3 minutes per side for medium-rare, or to desired doneness. Transfer steaks to a cutting board and let rest, covered for 5 minutes, then thinly slice. Top tortillas with steak, roasted vegetables and sour cream; top with avocado and hot sauce (if using). Sprinkle with squeezed lime juice.',
        '2 sweet potatoes, cut into 1-inch pieces \n2 cups sliced red cabbage \n1/2 red onion, sliced \n2 tbsp extra-virgin olive oil \n1 tsp each ground cumin and chipotle chile powder \n1/2 tsp each sea salt and ground black pepper, divided \n1/4 cup chopped fresh cilantro \n2 8-oz striploin steaks, trimmed \n1/4 cup full-fat sour cream \n2 limes, cut into wedges \n8 almond flour or corn tortillas, warmed \navocado slices and hot sauce, optional',
        '28', -- UserID
        TRUE,
        '2023-01-13 11:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2022/03/Steak-Sweet-Potato-Tacos-2400x1350-1.png?crop=535:301&width=1070&enable=upscale',
        'Author : Roberto Caruso, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        35, -- cooking_time
        6   -- meal type (cuisines)
    ),
    (
        38,
        'Tiffani Bachus',
        'Green Curry Poached Halibut',
        'Not Specified',
        361, 12, 33.5, 20, 3, 811, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'It is easy to eat more brain-fueling fish with this fragrant curry recipe.  Omega-3 fatty acids, vitamin B6, and magnesium are present in halibut and are essential for the production of neurotransmitters that carry signals in the brain.',
        'In a large skillet on medium-high, heat 1 tbsp oil. Add spinach and garlic; sauté 2 minutes then transfer to a serving dish.\nIn same skillet on medium-high, heat remaining 1 tbsp oil. Add onion and sauté for 3 minutes. Whisk in broth, coconut milk, curry paste and salt. Bring mixture to a simmer and cook until liquid is reduced by half, about 10 minutes.\nAdd halibut to skillet and spoon some of the liquid over top; cook for 1 minute. Cover and poach halibut until it flakes easily with a fork, 5 to 7 minutes. Gently transfer halibut to serving dish over cooked spinach.\nTo liquid in pan, add cilantro, lime zest and lime juice; cook for 1 minute. Ladle liquid over halibut and spinach in serving dish.',
        '2 tbsp avocado oil, divided \n4 cups spinach \n1 clove garlic, minced \n1/4 yellow onion, finely chopped \n1 cup low-sodium vegetable broth \n1 cup coconut milk beverage \n2 tbsp green curry paste \nPinch sea salt \n2 4-oz halibut fillets \n1/4 cup chopped fresh cilantro \n1 lime, zested and juiced',
        '28', -- UserID
        TRUE,
        '2023-01-26 19:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2017/11/green-curry-poached-halibut-73-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Tiffani Bachus, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        30, -- cooking_time
        7   -- meal type (cuisines)
    ),
    (
        39,
        'Tiffani Bachus',
        'Zucchini Lasagna with Cashew Cheese Pesto',
        'Not Specified',
        365, 26, 14, 10.5, 8, 480, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'If you want to make a low-carb version of this comfort dish, simply replace the pasta with zucchini. Since the filling is primarily made of cashews, you may substitute nutritional yeast for Parmesan to make the dish dairy-free.',
        'Preheat oven to 375°F. Prepare cashew cheese pesto: Soak cashews in a bowl of water overnight or at least 4 hours; drain and transfer to a food processor. Add lemon zest and juice, basil leaves, 2 tbsp Parmesan and garlic; pulse a few times to break down nuts then process, adding 1 to 2 tbsp water, until mixture reaches the consistency of ricotta cheese.\nUsing a Y-shaped vegetable peeler or mandoline, thinly slice zucchini lengthwise into ½-inch-thick planks. Place on a baking sheet and sprinkle with salt. Let stand for 10 minutes; blot zucchini to remove salt and moisture on the surface.\nSpread ¼ cup marinara on bottom of an 8-inch square ceramic or glass baking dish; top with 2 layers of zucchini, one layer running top to bottom and the second layer running right to left. Spread half of roasted bell pepper over zucchini, followed by half of cashew cheese pesto. Spoon ½ cup marinara over cashew cheese pesto. Repeat 2 layers of zucchini, remaining half of bell peppers and cashew cheese pesto and ½ cup marinara. Top with 2 layers of zucchini, followed by remaining marinara. Sprinkle top with remaining 2 tbsp Parmesan. Cover with foil and bake for 30 minutes.\nUncover dish and set oven to broil. Broil for 3 minutes, or until topping is lightly browned. Let cool for 10 minutes. Sprinkle additional basil over slices before serving.',
        '2 tbsp avocado oil, divided \n4 cups spinach \n1 clove garlic, minced \n1/4 yellow onion, finely chopped \n1 cup low-sodium vegetable broth \n1 cup coconut milk beverage \n2 tbsp green curry paste \nPinch sea salt \n2 4-oz halibut fillets \n1/4 cup chopped fresh cilantro \n1 lime, zested and juiced',
        '26', -- UserID
        TRUE,
        '2023-01-26 19:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2017/11/meal-plan-lead_zucchini-lasagna-with-cashew-cheese-pesto-73-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Tiffani Bachus, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        40, -- cooking_time
        4   -- meal type (cuisines)
    ),
    (
        40,
        'Tiffani Bachus',
        'Roasted Butternut Squash',
        'Not Specified',
        158, 21, 1.8, 9.2, 6.1, 106, -- calories, carbs, protein, fat, fibre, sodium
        1,
        'This easy but tasty roasted butternut squash recipe highlights the inherent sweetness and earthy richness of this seasonal veggie. It is a side dish that not only complements other main meals but also serves as a healthy meal on its own.',
        'Peel 1 butternut squash, cut in half and scoop out seeds. Cut squash into cubes and toss with 1 tbsp avocado oil and ½ tsp each salt and smoked paprika; spread on baking sheet. Roast at 375°F for 25 minutes, or until tender.',
        '1 butternut squash \n1 tbsp avocado oil \n1 clove garlic, minced \n1/2 tsp each salt and smoked paprika',
        '23', -- UserID
        TRUE,
        '2023-03-14 09:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2017/11/roasted-butternut-squash-73-web-opt2-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Tiffani Bachus, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        40, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        41,
        'Nathan Lyon',
        'Apple, Frisée & Radicchio Salad with Lemon Kefir Dressing',
        'Not Specified',
        302, 24, 0, 23, 7, 115, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Gut-friendly kefir adds creaminess to salad dressings. This salad is quite filling and goes well with tofu or chicken as a topping. For six people, you may alternatively serve it as an appetizer or side salad.',
        'In a small container with a tight-fitting lid, combine shallot, lemon juice, walnut and grape seed oil, close lid tightly; shake well. Add kefir and shake again.\nIn a large bowl, combine frisée, radicchio, radishes, cucumbers, apples, parsley, mint and walnuts. Pour dressing over top and toss.Season with salt and pepper.',
        '1 large shallot, diced small \n3 tbsp fresh lemon juice \n2 tbsp roasted walnut oil or extra-virgin olive oil \n2 tbsp grape seed oil \n5 tbsp whole-milk kefir \n10 oz frisée (2 small heads), cored and leaves cut into 1-inch pieces \n4 oz radicchio (1/2 small head), halved lengthwise and cut into 1/3-inch slices \n7 small radishes (preferably the French variety, if available), quartered \n2 Persian cucumbers, sliced in half lengthwise and cut diagonally (¼-inch thickness) \n2 apples (Fuji, Pink Lady or Honeycrisp), cored and sliced into 1/8-inch slices \n3/4 cup roughly chopped fresh flat-leaf parsley \n1/3 cup fresh mint leaves, roughly chopped \n1/2 cup toasted unsalted walnuts, roughly chopped \nKosher salt (or sea salt) and ground black pepper, to taste',
        '24', -- UserID
        TRUE,
        '2023-03-25 10:40:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2016/09/apple-frise-radicchio-salad-with-lemon-kefir-dressing-2.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Tiffani Bachus, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        25, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        42,
        'Julie O Hara',
        'Kimchi Fried Rice with Tempeh',
        'Not Specified',
        376, 38, 21, 17, 5, 569, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Our veggie-packed, Asian-style fried rice tastes equally as tasty and can be prepared in 25 minutes, so there is no need to order delivery. We have also introduced fermented kimchi and tempeh, both of which contain gut-friendly probiotics.',
        'In a large skillet on medium-high, heat safflower oil. Add tempeh and salt; cook, stirring occasionally, until golden brown, about 4 minutes. Transfer to a small bowl and set aside.\nMist same skillet, still on medium high, with cooking spray. Add rice, edamame and 3 tbsp water. Cook, stirring frequently, until rice and edamame are heated through and water is nearly evaporated, 2 to 3 minutes. Add carrots and continue cooking, stirring frequently, until tender, about 2 minutes. Reduce heat to medium low. (Note: If using leftover brown rice, add it at the same time as carrots, once water and edamame are heated through.)\nIn a medium bowl, whisk together eggs, 1 tsp tamari and 1 tsp sesame oil. (Time-Saving Tip: Whisk egg mixture while tempeh and rice are cooking.) Push rice mixture to edges of skillet, mist center of skillet with cooking spray and add egg mixture. When eggs just start to set, gently break them up and fold them into rice mixture until combined. Add tempeh and remaining 1 tbsp tamari; stir until combined. Remove skillet from heat and stir in kimchi and remaining 1 tsp sesame oil. Divide among serving bowls and sprinkle with chives.',
        '1 tbsp safflower oil \n8 oz organic tempeh, cut into 1/2-inch pieces \n1/4 tsp sea salt \nOlive oil cooking spray \n3 cups frozen precooked brown rice \n1 cup frozen shelled edamame \n1 cup peeled and matchstick-cut carrots \n2 large eggs \n4 tsp reduced-sodium tamari, divided \n2 tsp dark sesame oil, divided \n1 cup drained and packed kimchi, roughly chopped \n2 tbsp chopped fresh chives',
        '24', -- UserID
        TRUE,
        '2023-05-04 13:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2015/02/kimchi-fried-rice-with-tempeh.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Ted Gibson, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        25, -- cooking_time
        12   -- meal type (cuisines)
    ),
    (
        43,
        'Alison Kent',
        'Mediterranean Chicken & Vegetable Quiche',
        'Not Specified',
        321, 11.5, 19, 22, 5, 245, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'This grain-free quiche starts with a simple press-in crust made of egg, coconut oil, and coconut flour. Serve with a green salad or simple roasted veggies for a complete supper.',
        'Preheat oven to 350°F. Prepare crust: In a medium bowl, whisk 2 eggs and oil until blended. Stir in flour until just combined.\nLightly grease a 9-inch pie plate. Using your hands, press crust mixture into plate until base and sides are evenly covered and smooth. Bake until light golden brown, about 10 minutes. (Make Ahead: Prepare crust up to this point up to 2 days ahead; cover and refrigerate. Bring to room temperature before filling and baking.)\nIncrease oven temperature to 375°F. In a medium bowl, combine chicken, tomatoes, cheese, scallion, dill and mint. Sprinkle evenly into pie shell. In bowl, whisk together 3 eggs, milk, nutmeg, salt and pepper; pour evenly over ingredients in shell.\nBake in center of oven until a knife inserted in center of quiche comes out clean, about 30 minutes. (Tip: If edges begin to brown too much before quiche is set, loosely cover crust with foil.) Let cool',
        '1 cup cooked and diced boneless, skinless chicken breast \n1/2 cup halved cherry tomatoes \n1/3 cup crumbled feta cheese \n1 scallion, thinly sliced \n2 tbsp chopped fresh dill \n1 to 2 tbsp chopped fresh mint leaves \n3 eggs \n1 cup whole milk \n1/4 tsp ground nutmeg \nSea salt and fresh ground black pepper, to taste \n2 eggs, beaten \n1/3 cup coconut oil, melted, plus additional for greasing pie plate \n3/4 cup coconut flour',
        '27', -- UserID
        TRUE,
        '2023-05-04 13:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2015/01/mediterranean-chicken-and-vegetable-quiche-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Ted Gibson, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        50, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        44,
        'Beth Lipton',
        'Roasted Broccoli Steaks with Miso Butter',
        'Not Specified',
        253, 14, 7, 21, 5, 489, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Miso is a fermented meal that has good probiotic bacteria in addition to having an earthy, umami flavor. Here, it serves as a foundation for a seasoned butter that melts delightfully over the soft broccoli "steaks."',
        'Place a large rimmed baking sheet in oven and preheat to 450ºF.\nIn a small bowl, mash together butter, miso and lemon zest until well combined. Use immediately or form into a log, cover tightly with plastic wrap and refrigerate for up to 1 week or freeze for up to 3 months. (Yields 5 tbsp butter.)\nUsing a sharp chef knife, cut ½-inch-thick “steaks” lengthwise down center of each head of broccoli. (Broccoli heads vary in size, so the yield of steaks will vary slightly; when chopping, some florets will fall off; reserve them and remaining broccoli for another use.) Brush steaks all over with oil and season with salt and pepper.\nRemove baking sheet from oven and add broccoli steaks. Return to oven and roast, turning once halfway through, until lightly browned on the outside and tender throughout (but not mushy), about 20 to 25 minutes.\nDivide steaks among plates. Place a dollop of miso butter (or a slice, if you’ve chilled it) on each steak. Wrap and reserve any remaining miso butter in the refrigerator or freezer for another use.',
        '1/4 cup organic or grass-fed unsalted butter, at room temperature \n4 tsp white miso \n1 tsp grated lemon zest \n3 to 4 large heads (about 4 lb total) broccoli, bottoms of stems trimmed \n3 tbsp avocado oil \n1/2 tsp sea salt \n1/4 tsp ground black pepper',
        '21', -- UserID
        TRUE,
        '2023-05-04 13:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/04/roasted-broccoli-steaks-with-miso-butter_78-web-2.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Beth Lipton, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        35, -- cooking_time
        3   -- meal type (cuisines)
    ),
    (
        45,
        'Beth Lipton',
        'Gingery Braised Chicken Thighs',
        'Not Specified',
        547, 11, 51, 34, 3, 837, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'In addition to being fantastic for gut health, ginger, garlic, and chicken bone broth work together to make a flavorful, well-seasoned braising sauce that keeps these chicken thighs succulent.',
        'In a Dutch oven, heat oil on medium-high. Pat chicken dry; season all over with 1 tsp salt and 1/2 tsp pepper. Add chicken to pan, skin side down, and cook until skin is browned and crisp, 6 to 8 minutes. Turn and cook until bottom is browned, 6 to 8 minutes. Transfer to a plate, cover and set aside. Drain off all but 1 tbsp fat in pan.\nReduce heat to medium. Add shallots and carrots and season with ¼ tsp salt and additional pepper. Cook, stirring occasionally, until tender, about 6 minutes. Add ginger, turmeric and garlic; cook, stirring, until fragrant, about 1 minute. Stir in mustard seeds and cook, stirring, for 1 minute.\nPour broth and orange juice into pan, stirring up any browned bits on bottom. Add orange zest and bay leaf and bring to a boil. Reduce heat to medium-low. Return chicken to pan, skin side up, along with any accumulated juices on plate. Partially cover and simmer until chicken is no longer pink inside and flavors have developed, about 30 minutes. Season with additional salt. Discard orange zest and bay leaf before serving.',
        '2 tbsp avocado oil \n8 small (or 4 large) bone-in, skin-on chicken thighs (about 3 lb) \n1/4 tsp sea salt, divided + additional to taste \n1/2 tsp ground black pepper + additional to taste \n3 shallots, chopped \n2 large carrots, chopped \n1 3 and a 1/2-inch piece fresh ginger, peeled and chopped \n1 1-inch piece fresh turmeric, peeled and finely chopped \n3 cloves garlic, chopped \n2 tsp yellow mustard seeds \n2 cups chicken bone broth (preferably organic or homemade) \n4 1- to 2-inch-long strips orange zest + 1/4 cup fresh orange juice, divided \n1 bay leaf',
        '26', -- UserID
        TRUE,
        '2023-05-10 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/04/gingery-braised-chicken-thighs_78-web-2.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Ronald Tsang, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        75, -- cooking_time
        8   -- meal type (cuisines)
    ),
    (
        46,
        'Clean Eating',
        'Turkey & Mushroom Ragu-Stuffed Acorn Squash',
        'Not Specified',
        442, 43, 33, 18, 9, 444, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A delectable combination of spicy ground turkey, mushrooms, and zesty ragu makes for a healthful and high-protein dish. Acorn squash is at its best in the fall.',
        'Preheat oven to 400ºF. Wrap each squash half in foil and place on baking sheet. Bake until squash flesh is soft when poked with a fork, about 45 minutes.\nMeanwhile, in a large, deep skillet on medium-high, heat oil. Add onion, shiitake and cremini mushrooms, salt and pepper and sauté for 5 minutes. Add turkey and cook for 5 minutes, breaking up with a wooden spoon. Add tomato paste, thyme and smoked paprika. Stir to combine and cook for 3 minutes more.\nStir in marinara, coconut aminos and vinegar. Add bay leaf, cover, reduce heat to low and simmer for 25 minutes. Stir in ¼ cup nutritional yeast. Remove bay leaf.\nTo serve, divide turkey mixture among roasted squash halves. Top with remaining 1 tbsp nutritional yeast and basil.',
        '2 acorn squash, halved and seeded \n2 tbsp avocado oil \n1 cup chopped yellow onion \n3 and a 1/2 oz shiitake mushrooms, chopped \n5 oz cremini mushrooms, chopped \nPinch each sea salt and ground black pepper \n1 lb lean ground turkey \n2 tbsp unsalted tomato paste \n1 tsp smoked paprika \n1 and a 1/2 cups marinara sauce \n1 tbsp coconut aminos \n1 tbsp balsamic vinegar \n1 bay leaf \n1/4 cup + 1 tbsp nutritional yeast, divided \n1/4 cup sliced fresh basil',
        '26', -- UserID
        TRUE,
        '2023-05-10 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/10/turkey-and-mushroom-ragu-stuffed-acorn-squash_82-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : cleaneating, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        55, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        47,
        'Tiffani Bachus',
        'Spicy Salmon Poke Bowl',
        'Not Specified',
        558, 43, 32, 32, 14, 532, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Tasty protein with tastes influenced by Japan? That would make a really tasty and substantial lunch or dinner.',
        'Using a mandoline or sharp knife, thinly slice cucumbers and place in a bowl. Toss with ½ cup vinegar and let sit at least 15 minutes.\nMeanwhile, cut salmon into cubes and place in a separate bowl. Add chives, cilantro, edamame (if using) and sesame seeds.\nIn a jar with a tight-fitting lid, combine coconut aminos, apricot preserves, remaining 1 tbsp vinegar, ginger, sesame oil and pepper flakes. Close lid and shake to combine. Pour over salmon mixture and toss until coated.\nTo serve, divide lettuce among 2 plates and top each with salmon mixture, pickled cucumbers, mango, avocado and seaweed.',
        '4 Persian cucumbers \n1/2 cup + 1 tbsp apple cider vinegar, divided \n8 oz sashimi-grade wild Alaskan salmon, skin removed \n2 tbsp each chopped fresh chives and cilantro \n1/2 cup fresh or frozen shelled edamame, thawed, optional \n1 tsp black or white sesame seeds \n3 tbsp coconut aminos \n1 and a 1/2 tbsp no-sugar-added apricot preserves \n3/4 tsp peeled and grated ginger \n1/2 tsp toasted sesame oil \n1/4 tsp red pepper flakes \n4 cups baby lettuce mix \n1/2 mango, peeled and chopped \n1 avocado, peeled, seeded and sliced \n1 sheet seaweed snack, crumbled',
        '27', -- UserID
        TRUE,
        '2023-05-10 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/10/CE82-Spicy-Salmon-Poke-Bowl-WEB.png?crop=535:301&width=1070&enable=upscale',
        'Author : cleaneating, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        55, -- cooking_time
        3   -- meal type (cuisines)
    ),
    (
        48,
        'Tiffani Bachus',
        'Sheet Pan Dijon Balsamic Chicken & Veggies',
        'Not Specified',
        308, 18, 26, 15, 3, 516, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A sheet pan is a great tool for a quick weekday dinner. With about 45 minutes, you can have a tasty and nutritious dinner by piling your ingredients upon it and baking it.',
        'Line a large rimmed baking sheet with parchment paper. In a small saucepan, whisk together vinegar, 2 tbsp oil, mustard, 1 tbsp maple syrup, garlic, thyme and rosemary. Pour half of marinade into a large bowl and add chicken. Marinate in the refrigerator for at least 1 hour, or up to 8 hours. To remaining half of marinade in saucepan, whisk in remaining 1 tbsp maple syrup and hot sauce; refrigerate marinade in saucepan.\nPreheat oven to 350ºF. In a bowl, toss carrots, broccoli and onion with remaining 2 tbsp oil; spread on one side of baking sheet. Remove chicken from marinade and place on other side of baking sheet. Discard marinade. Season chicken and vegetables with salt and pepper. Bake for 25 minutes, until a thermometer inserted in center of chicken reads 165ºF and vegetables are fork tender.\nMeanwhile, place saucepan of reserved marinade over low heat and bring to a gentle simmer for 10 minutes. Drizzle sauce over chicken and vegetables.',
        '1/4 cup balsamic vinegar \n1/4 cup avocado oil, divided \n2 tbsp Dijon mustard \n2 tbsp pure maple syrup, divided \n3 cloves garlic, chopped \n2 tsp each chopped fresh thyme and rosemary \n4 4-oz boneless, skinless chicken breasts \n2 cups broccoli florets \n1/2 small yellow onion, thinly sliced \n1/2 tsp each sea salt and ground black pepper',
        '27', -- UserID
        TRUE,
        '2023-05-10 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/09/sheet-pan-dijon-balsamic-chicken-and-veggies_82-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Crayola England, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        40, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        49,
        'Kathryn Hendrix',
        'Sweet Potato and Black Bean Taco Cups',
        'Not Specified',
        171, 23, 6, 7, 3, 269, -- calories, carbs, protein, fat, fibre, sodium
        12,
        'Use a muffin tin to make these crispy tortilla cups stuffed with substantial taco fixings like black beans and sweet potatoes. Use queso quesadilla, the super-melty cheese frequently found in queso dips and nachos, for a rich, creamy outcome.',
        'Preheat the oven to 350 degrees F (175 degrees C). Coat 12 (2 1/2-inch) muffin cups with cooking spray. Press 1 tortilla into the bottom of each muffin cup, pleating edges as needed to fit.\nHeat oil in a large skillet over medium-high heat. Add sweet potato; cook until tender, about 10 minutes. Add onion; cook until softened, 2 to 3 minutes. Add jalapeño and garlic; cook until fragrant, about 2 minutes. Stir in beans, salt, and black pepper.\nDivide bean mixture evenly among prepared muffin cups and sprinkle with cheese.\nBake in the preheated oven until cheese is melted and filling is bubbly, 15 to 20 minutes. Top with avocado and garnish with cilantro. Serve with limes and lime crema.',
        'cooking spray \n12 (4-inch) flour tortillas \n1 tablespoon olive oil \n1 cup peeled and chopped sweet potato \n1 yellow onion, chopped \n1 jalapeño, seeded and minced \n3 cloves garlic, minced \n1 (15-ounces) can black beans in mild chili sauce, undrained \n1/4 teaspoon salt \n1/4 teaspoon black pepper \n3 ounces shredded queso quesadilla or Mexican-style cheese blend \n1 small avocado, diced \nchopped fresh cilantro, for garnish \nlime wedges and lime crema, for serving',
        '27', -- UserID
        TRUE,
        '2023-08-16 14:00:00',
        'https://www.allrecipes.com/thmb/4ukV1YDU_ehHDsMqOagRHEXBalI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7567956-sweet-potati-black-bean-taco-cups-KH-AR15538-4x3-9f9208892b8340a4adce4ff0fc3bf066.jpg',
        'Author : allrecipes, Designed by allrecipes',  -- img_title
        3, -- dietary_preference
        30, -- cooking_time
        6   -- meal type (cuisines)
    ),
    (
        50,
        'Maryellen',
        'Guacamole',
        'Not Specified',
        262, 18, 4, 22, 11, 596, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'The addition of cayenne and cilantro gives this guacamole recipe a spicy kick. According to your preferences, you can serve it smooth or chunky. Accompany them with freshly prepared tortilla chips.',
        'Mash avocados, lime juice, and salt together in a medium bowl; mix in tomatoes, onion, cilantro, and garlic. Stir in cayenne pepper.\nServe immediately, or cover and refrigerate for 1 hour for improved flavor.',
        '3 avocados - peeled, pitted, and mashed \n1 lime, juiced \n1 teaspoon salt \n2 roma (plum) tomatoes, diced \n1/2 cup diced onion \n3 tablespoons chopped fresh cilantro \n1 teaspoon minced garlic \n1 pinch ground cayenne pepper (Optional)',
        '22', -- UserID
        TRUE,
        '2023-08-14 14:30:00',
        'https://www.allrecipes.com/thmb/uJAHG8X_AOBr-OnMGPdLDEBEFnU=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/4521556_Guacamole4x3photobybd.weld-c81ae0bd3f2b4893a8e309365dda023b.jpg',
        'Author : bd.weld, Designed by allrecipes',  -- img_title
        2, -- dietary_preference
        15, -- cooking_time
        6   -- meal type (cuisines)
    ),
    (
        51,
        'Hungryroot Team',
        'Shrimp + Turkey Sausage Gumbo',
        'Not Specified',
        580, 36, 47, 17, 12, 1600, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'This recipe is a fantastic combo for muscle and weight-building, with excellent flavor and protein-rich nutrients. Soft wild-caught gulf shrimp and flavorful hot Italian turkey sausage, is cooked to perfection.',
        'Remove sausage from casings + discard casings; heat 1 tbsp oil in a pot over med-high; add sausage to pan, break into large chunks + sear undisturbed 2 min; flip meat over + break into small pieces, then cook 2-3 min until fully cooked + no pinkness remains; remove from pot + reserve pan juices\nCut onion into 1/2-inch pieces; heat 1 tbsp oil to same pot over medium, add chopped onion + cook 3-4 min while stirring\nSeason shrimp with salt/pep + add to onions; cook 3-4 min until shrimp is opaque\nAdd half the packet of sauce, beans, cooked sausage + 4 tbsp water to the pot; bring to a simmer + cook 12-15 min until warmed through—enjoy!',
        'Superfood Tomato Sauce \nWild Caught Gulf Shrimp \nHot Italian Turkey Sausage \nCreole Red Beans \nJumbo Yellow Onion',
        '24', -- UserID
        TRUE,
        '2023-12-15 15:30:00',
        'https://assets-global.website-files.com/62d69f8cc65b0055741a8270/648b47a81507b53da2eb9e35_SoupsStews_127964_Bowl_Fork-1.jpg',
        'Author : hungryroot, Designed by hungryroot',  -- img_title
        4, -- dietary_preference
        30, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        52,
        'Hungryroot Team',
        'Roasted Chicken Thigh + Pad Thai Veggies',
        'Not Specified',
        430, 26, 31, 6, 4, 720, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'With a perfect blend of flavors and nutrients, this protein-rich dish will fuel your muscles and help you recover from your workout. Tender, boneless chicken thighs are served with sautéed stir-fried vegetables for a satisfying combination of carbs and nutrition.',
        'Preheat oven to 400°; pat chicken thighs dry, trim excess fat if desired + season with salt/pep; add chicken to sheet pan, drizzle with 1 tbsp oil; roast 20-25 min until fully cooked, no pink remains + internal temp is 165°\nMeanwhile, heat 1 tbsp oil in skillet over med-high; sauté stir-fry veggies with salt/pep 3-4 min; add sauce packet, cover + cook 1-2 more min until tender\nDivide chicken + veggies between plates—looks great!',
        'Boneless Skinless Chicken Thighs \nPad Thai Veggie Stir-Fry Kit',
        '24', -- UserID
        TRUE,
        '2023-12-15 15:30:00',
        'https://assets-global.website-files.com/62d69f8cc65b0055741a8270/648b47c6dac40bbe30f67e6e_Main_465213_Plate_Fork-1.jpg',
        'Author : hungryroot, Designed by hungryroot',  -- img_title
        4, -- dietary_preference
        25, -- cooking_time
        7   -- meal type (cuisines)
    ),
    (
        53,
        'Hungryroot Team',
        'Cilantro Lime Chicken + Steamed Broccoli',
        'Not Specified',
        390, 9, 35, 11, 2, 690, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Enjoy the mouthwatering tastes of cilantro lime chicken with steamed broccoli in this protein-rich meal. The crisp and colorful broccoli contrasts with the flavorful and juicy chicken that is cooked until it is soft.',
        'Drain broth from chicken packet; heat 1 tbsp oil in skillet over medium; add chicken to pan, break into small pieces + sauté 2-3 min until browned; turn heat to low, add sauce packet + cook 1 min until sauce is hot; divide between plates\nHeat 1 tbsp oil in skillet over med-high; add half the bag of broccoli, salt/pep + sauté 4-5 min until lightly browned; add 2 tbsp water, reduce heat, cover + steam 3-5 min until tender; divide between plates—that was easy!',
        'Broccoli Florets \nCilantro Lime Chicken',
        '24', -- UserID
        TRUE,
        '2023-12-15 15:30:00',
        'https://assets-global.website-files.com/62d69f8cc65b0055741a8270/6480c937f74306ec77a5bdc0_Main%2BSides_464501_Plate.jpg',
        'Author : hungryroot, Designed by hungryroot',  -- img_title
        4, -- dietary_preference
        15, -- cooking_time
        6   -- meal type (cuisines)
    ),
    (
        54,
        'Hungryroot Team',
        'Super Honey Poppyseed Chicken Protein Bowl',
        'Not Specified',
        530, 56, 34, 10, 11, 810, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'This lean, chicken protein bowl is jam-packed with sweet and savory ingredients, so up your protein game. This dish contains a delicious combination of super blend salad, lentil quinoa rice mix, and seasoned grilled chicken breast.',
        'Heat skillet over med-high + add rice mix with 1 tbsp water; stir occasionally 2 min until warm + add to bowls\nHeat lightly oiled skillet over med-high, pat chicken dry + sear 2 min per side until warm; slice + add to bowls\nHeat 1 tbsp oil in skillet over med-high + cook Superblend with salt/pep 5 min until tender, stirring minimally to ensure browning; add to bowls\nMix in or drizzle on 1-2 tbsp dressing per bowl—looks good!',
        'Superblend Salad \nLentil Quinoa Rice Mix \nSeasoned Grilled Chicken Breast \nHoney Poppyseed Dressing',
        '24', -- UserID
        TRUE,
        '2023-09-29 09:00:00',
        'https://assets-global.website-files.com/62d69f8cc65b0055741a8270/648b48651507b53da2ec965e_GrainBowl_123246_Bowl_Fork-1.jpg',
        'Author : hungryroot, Designed by hungryroot',  -- img_title
        4, -- dietary_preference
        13, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        55,
        'Hungryroot Team',
        'Oven-Roasted Salmon with Couscous + Brussels',
        'Not Specified',
        800, 59, 40, 6, 9, 250, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Treat yourself to this gourmet culinary delight that provides a good balance of nutrition with its protein-rich salmon and carb-packed brussels sprouts.',
        'Preheat oven to 400° F; pat fish dry, line a sheet pan with foil, drizzle fish with oil, salt + pep; bake 10-12 min until firm, opaque + cooked through\nHeat 1 tbsp oil in pan over med-high; add brussels + cook 4-5 minutes; add caesar dressing to brussels and set aside\nBoil large pot of salted water, add 1 cup couscous + stir; cook 5 min, then drain; add to brussels and mix evenly\nServe fish on top of couscous + enjoy!',
        'Shaved Brussels \nVegan Caesar Dressing Cup \nFresh Lemon \nAtlantic Salmon Fillets \nTri-Color Pearled Couscous',
        '25', -- UserID
        TRUE,
        '2023-09-29 09:00:00',
        'https://assets-global.website-files.com/62d69f8cc65b0055741a8270/648b487ed81f1d3fd9ddb034_MainSides_126949_Plate-1.jpg',
        'Author : hungryroot, Designed by hungryroot',  -- img_title
        3, -- dietary_preference
        14, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        56,
        'Hungryroot Team',
        'Coconut Curry Tofu + Broccoli Wrap',
        'Not Specified',
        440, 43, 29, 14, 16, 810, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'In this dish you can savor the rich and aromatic coconut curry perfectly complemented by hearty tofu veggie bites. Tender sweet baby broccoli adds a vibrant crunch to every bite.',
        'Chop burgers into 1-inch pieces + heat 1 tbsp oil in skillet over med-high; sear tofu until browned, 1-2 min; set aside\nChop broccoli in 1-inch pieces + heat 1 tbsp oil in skillet over med-high; cook with salt/pep 2-3 min, then add ½ cup water, cover + let steam 3 more min\nAdd 2 wraps to plates + spread 1-2 tbsp curry onto each wrap\nDivide fillings between wraps + roll up—yum!',
        'Coconut Curry Sauuce \nHearty Tofu Veggie Burger \nSweet Baby Broccoli \nSweet Potato Wraps',
        '25', -- UserID
        TRUE,
        '2023-09-29 09:00:00',
        'https://assets-global.website-files.com/62d69f8cc65b0055741a8270/648b489ad81f1d3fd9ddb4f5_Wrap_122142_Plate-2.jpg',
        'Author : hungryroot, Designed by hungryroot',  -- img_title
        1, -- dietary_preference
        10, -- cooking_time
        13   -- meal type (cuisines)
    ),
    (
        57,
        'Miriam Nice',
        'Seitan & black bean stir-fry',
        'Not Specified',
        326, 37, 22, 8, 7, 1232, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'With a sticky sweet and spicy sauce, this easy vegan stir-fry creates a filling dinner. Seitan, peanut butter, and a variety of vegetables are a winning combo.',
        'Start by making the sauce, tip half the beans into the bowl of a food processor with the rest of the ingredients and add 50ml water. Season, then blend until smooth. Pour into a saucepan and heat gently for about 5 mins or until thick and glossy.\nDrain the seitan and pat dry with kitchen paper. Toss the seitan pieces in a bowl with the cornflour and set aside. Heat your wok to a high temperature, add a little oil, then the seitan – you might need to do this in batches. Stir-fry for around 5 mins until golden brown at the edges. Remove the seitan from the wok using a slotted spoon and set aside on a plate.\nIf the wok is dry at this stage, add 1 tsp vegetable oil. Throw in the chopped peppers, the rest of the beans, pak choi and spring onion. Cook for 3-4 mins, then return the seitan to the pan, stir in the sauce and bring to the boil for 1 min. Serve with cooked rice or noodles.',
        '400g can black beans, drained and rinsed \n75g dark brown soft sugar \n3 garlic cloves \n2 tbsp soy sauce \n1 tsp Chinese five-spice powder \n2 tbsp rice vinegar \n1 tbsp smooth peanut butter \n1 red chilli, finely chopped \n350g marinated seitan pieces \n1 tbsp cornflour \n2-3 tbsp vegetable oil \n1 red pepper, sliced \n300g pak choi, chopped \n2 spring onions, sliced \ncooked rice noodles or rice, to serve',
        '25', -- UserID
        TRUE,
        '2023-09-29 09:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/seitan-and-black-bean-stir-fry-6adb3dd.jpg?quality=90&webp=true&resize=440,400',
        'Author : Miriam Nice, Designed by bbcgoodfood',  -- img_title
        2, -- dietary_preference
        25, -- cooking_time
        1   -- meal type (cuisines)
    ),
    (
        58,
        'Nadine Brown',
        'Tofu Curry',
        'Not Specified',
        318, 8, 22, 21, 4, 80, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Make a quick and summery veggie curry with tofu and spinach for an easy midweek meal. Serve with lime wedges and wholemeal chapatis.',
        'Heat 1/2 tbsp of the oil in a large, wide, non-stick frying pan over a medium-high heat. Fry the tofu with a pinch of salt for 5 mins, turning every couple of minutes until golden brown. Remove to a plate using a slotted spoon.\nAdd the remaining oil to the pan, then fry half the onions for 5 mins, stirring often until golden brown. Add the ginger and garlic paste, stir-frying for a minute, then add the turmeric and cook for another 30 seconds to release the flavour.\nStir in the coconut milk, then return the tofu to the pan along with the lime juice and 100ml water, and simmer for 5 mins. Stir in the spinach and the coriander, and cook for 1 min until wilted, then season.\nServe the curry in bowls topped with the coriander leaves and the remaining onion, the lime wedges for squeezing over, and the chapatis on the side.',
        '1tbsp rapeseed oil \ntofu, cut into 2cm cubes \n2 red onions, thinly sliced \n1 1/2 ginger and garlic paste \n1 1/2 ground turmeric \n400ml light coconut milk \n2 limes, 1 juiced, 1 cut into wedges to serve \n160g baby spinach \n10g coriander, most roughly chopped, reserve a few whole leaves to serve \n4 wholemeal chapatis, to serve',
        '21', -- UserID
        TRUE,
        '2023-09-02 10:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Tofu-curry-c24b410.jpg?quality=90&webp=true&resize=375,341',
        'Author : Nadine Brown, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        20, -- cooking_time
        8   -- meal type (cuisines)
    ),
    (
        59,
        'Good Food team',
        'Stir-fried sprouts with green beans, lemon & pine nuts',
        'Not Specified',
        140, 14, 5, 6, 6, 16, -- calories, carbs, protein, fat, fibre, sodium
        8,
        'This new option for your Christmas sprouts is a fantastic source of vitamin C and folic acid.',
        'Cook the brussels sprouts and beans in a pan of boiling salted water for 3 mins, then drain well. Heat the oil in a large wok or frying pan. When hot, add the lemon zest and pine nuts. Cook for a couple of seconds, then add the vegetables and stir-fry for 3-4 mins until the sprouts colour a little. Add a squeeze of lemon juice and salt and pepper to taste.',
        '600g brussels sprouts, trimmed and quartered \n600g green beans \n1 tbsp olive oil \nzest and juice 1 lemon \n4 tbsp toasted pine nuts',
        '21', -- UserID
        TRUE,
        '2023-09-10 16:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-487479_11-8abbef4.jpg?quality=90&webp=true&resize=440,400',
        'Author : Good Food team, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        10, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        60,
        'Mary Cadaogan',
        'Pumpkin, spinach & black bean dopiaza',
        'Not Specified',
        354, 42, 17, 14, 0, 204, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'This new option for your Christmas sprouts is a fantastic source of vitamin C and folic acid.',
        'Cook the brussels sprouts and beans in a pan of boiling salted water for 3 mins, then drain well. Heat the oil in a large wok or frying pan. When hot, add the lemon zest and pine nuts. Cook for a couple of seconds, then add the vegetables and stir-fry for 3-4 mins until the sprouts colour a little. Add a squeeze of lemon juice and salt and pepper to taste.',
        '600g brussels sprouts, trimmed and quartered \n600g green beans \n1 tbsp olive oil \nzest and juice 1 lemon \n4 tbsp toasted pine nuts',
        '21', -- UserID
        TRUE,
        '2023-08-04 10:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-279520_11-b0a79cf.jpg?quality=90&webp=true&resize=440,400',
        'Author : Mary Cadogan, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        25, -- cooking_time
        8   -- meal type (cuisines)
    ),
    (
        61,
        'John Berardi',
        'Berry Green Smoothie',
        'Not Specified',
        185, 20, 13, 6, 3, 194, -- calories, carbs, protein, fat, fibre, sodium
        1,
        'Get a hearty helping of vegetables and fruit with this recipe for a delicious berry and spinach smoothie.',
        'Combine all ingredients in a blender. Blend on high until mixture is a smooth consistency.',
        '1/2 cup frozen berries \n1/2 cup spinach \n1/2 cup plain full-fat yogurt \n1/4 cup whole milk or almond milk \n1 scoop vanilla protein powder',
        '22', -- UserID
        TRUE,
        '2023-04-11 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2016/08/green-monster.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : John Berardi, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        5, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        62,
        'Clean Eating',
        'Grilled Asparagus Salad with Feta Hazelnut Crumble',
        'Not Specified',
        127, 7, 2, 11, 2, 38, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'This quick and delicious salad features smokey grilled asparagus with a simple lemon dressing.',
        'In a small bowl, soak onion in lemon juice for 10 to 15 minutes. Drain, reserving lemon juice.\nMeanwhile, preheat a grill or grill pan to medium-high. In a large bowl, toss asparagus with 1 tbsp oil and season with salt and pepper. Add to grill and cook for 2 to 3 minutes per side. Remove from heat and cool to room temperature.\nPrepare topping (if using): In a small food processor, pulse cheese and hazelnuts into rough crumbs.\nPrepare dressing: In a small bowl, whisk remaining 2 tbsp oil and reserved lemon juice. Season with salt and pepper.\nDivide arugula among plates and top with tomatoes, asparagus, onions and dressing, dividing evenly. Garnish with topping.',
        '1/4 small red onion, thinly sliced \n2 tbsp fresh lemon juice \n16 spears fresh asparagus (about 1 bunch), trimmed \n3 tbsp olive oil, divided \nSea salt and ground black pepper, to taste \n2 cups baby arugula \n2 cups grape tomatoes, halved',
        '22', -- UserID
        TRUE,
        '2023-02-28 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2016/06/grilled-asparagus-salad-with-feta-and-hazelnut-crumble-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Clean Eating, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        15, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        63,
        'Alexa Weibel',
        'White Bean Soup with Caper Almond Pesto',
        'Not Specified',
        619, 66, 25, 13, 19, 761, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'White beans lend a rich, creamy texture to this dairy-free soup. A 5-minute almond pesto, made while the soup is boiling, adds flavor to the recipe.',
        'In a blender, purée beans, broth, milk, shallot, garlic, ½ tsp herbes de provence, salt and pepper.\nTransfer soup to a medium saucepan, cover and heat on medium, whisking occasionally, until warmed, about 10 minutes.\nMeanwhile, prepare pesto: In a bowl, stir together oil, basil, almonds, capers and remaining 1/4 tsp herbes de provence.\nDivide soup among bowls and drizzle with pesto.',
        '2 15-oz BPA-free cans unsalted white beans (such as cannellini or navy beans), drained and rinsed \n1 cup low-sodium chicken broth \n1 cup plain unsweetened almond milk \n1 large shallot, roughly chopped \n1 clove garlic, roughly chopped \n3/4 tsp dried herbes de provence, divided \n½ tsp sea salt \n¼ tsp ground black pepper \n3 tbsp extra-virgin olive oil \n2 tbsp finely chopped fresh basil \n2 tbsp finely chopped roasted unsalted almonds \n2 tsp drained jarred capers, chopped',
        '25', -- UserID
        TRUE,
        '2023-02-28 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2017/12/white-bean-soup-with-caper-almond-pesto-75-web-2.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Clean Eating, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        20, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        64,
        'Australianeggs',
        'Healthy Gallo Pinto',
        'Not Specified',
        315, 10.6, 19.2, 20.6, 5.6, 334, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Healthy Gallo Pinto is a nutritious and flavorful dish that combines the richness of beans, the freshness of vegetables, and the protein power of eggs.',
        'Cook the garlic and cumin in olive oil over a medium heat until fragrant.\nStir in the chickpeas, cooking for 5 minutes.\nMeanwhile, make a salsa by quartering the tomato and mixing with 1/2 the lime juice and fresh herbs. Season with salt and pepper.\nFinely slice the spring onions and add into the chickpeas along with the paprika, stir and cook for 2 more minutes.\nSeparately, whisk the egg, season well, and cook in a non-stick frypan over a low-medium heat for a few minutes (or to your liking).\nServe the crispy chickpeas with a few spinach or kale leaves, topped with an egg and salsa.\nSqueeze over remaining lime and enjoy.',
        '1 tbsp olive oil \n1 clove garlic \n1/2 teaspoon cumin seeds \n1/2 tsp smoked paprika \n1/2 can chickpeas (rinsed) \n2 spring onions \n4 large eggs \n1 cup cherry tomatoes \n1/4 bunch fresh herbs \n1/4 cup green leaves \n1 lime, half sliced, half juiced',
        '24', -- UserID
        TRUE,
        '2023-04-12 14:00:00',
        'https://www.australianeggs.org.au/assets/recipes/willowcreative_Aus-Eggs-_-316431-1__ScaleWidthWzEyMDBd.jpg',
        'Author : Australianeggs, Designed by Australianeggs',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time
        8   -- meal type (cuisines)
    ),
    (
        65,
        'Australianeggs',
        'Roast Cauliflower & Egg Salad',
        'Not Specified',
        342, 21, 16.5, 19, 11.1, 384, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Roast Cauliflower and Egg Salad is a vibrant and nutritious dish combining roasted cauliflower, boiled eggs, chickpeas, fresh vegetables, and a creamy avocado dressing.',
        'Preheat oven to 220°C/200°C fan forced. Line a large oven tray with baking paper.\nHalf fill a medium saucepan with cold water. Gently lower in eggs. Bring to a simmer over medium heat and cook for 5 minutes. Use a slotted spoon to transfer to iced water. Peel and set aside.\nToss cauliflower and chickpeas in oil and dukkah on prepared tray. Roast for 25 minutes, until cauliflower is tender and starting to brown around the edges.\nFor the avocado dressing, blend or process all ingredients in a small food processor or blender until smooth, adding 1/2 cup of water to make a thin dollop consistency. Season to taste.\nToss radish, mint and currants though roast cauliflower and chickpeas. Top with halved eggs and drizzle with dressing. Sprinkle with extra dukkah, if you like.',
        '4 eggs \n1 head cauliflower, cut into florets, large florets halved \n400g can chickpeas, rinsed and drained \n2 tbs olive oil \n1 tbs dukkah, plus extra to sprinkle (optional) \n60g baby spinach leaves \n1/2 bunch radishes, thinly sliced \n1/2 bunch mint leaves \n1 tbs currants \n1 small ripe avocado \n1/2 bunch mint leaves \n1/2 cup baby spinach leaves \n1/4 cup apple cider vinegar \n1 small garlic clove, crushed',
        '23', -- UserID
        TRUE,
        '2023-05-11 14:30:00',
        'https://www.australianeggs.org.au/assets/recipes/Roast-Cauliflower-egg-salad-0169-__ScaleWidthWzEyMDBd.jpg',
        'Author : Australianeggs, Designed by Australianeggs',  -- img_title
        2, -- dietary_preference
        50, -- cooking_time
        8   -- meal type (cuisines)
    ),
    (
        66,
        'Australianeggs',
        'Easy “On-The-Go” Breakfast Muffins',
        'Not Specified',
        191, 3, 16.2, 12.4, 1.8, 227, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Take the stress out of a busy morning with these tasty breakfast muffins. Make a batch on Sunday and freeze in portions of two or three.',
        'Preheat oven to 160°C fan-forced.\nSpray a 12 hole x 1/3-cup capacity with oil to grease.\nGrate the zucchini and firmly squeeze to get the excess moisture out. Wrap it in a paper towel and squeeze again to remove the remainder of the moisture.\nWhisk the eggs and milk in a large bowl and stir in the zucchini, carrot, green onions and frozen peas. Season and stir through cheese.\nEvenly spoon the mixture into a muffin pan and bake for 25-30 minutes or golden and until set.\nSet aside in the pan for 5 minutes to cool then turn onto a wire rack. Serve hot or cold.',
        'Cooking oil spray \n1 medium zucchini \n8 eggs, at room temperature \n2 tbs milk \n1 medium carrot, coarsely grated \n3 green onions (shallots), thinly sliced \n1/3 cup frozen peas \n1 cup reduced fat grated tasty cheese',
        '24', -- UserID
        TRUE,
        '2023-05-15 14:40:00',
        'https://www.australianeggs.org.au/assets/recipes/vegetable-fritta-muffins-7440__ScaleWidthWzEyMDBd.jpg',
        'Author : Australianeggs, Designed by Australianeggs',  -- img_title
        2, -- dietary_preference
        40, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        67,
        'Australianeggs',
        'Spicy Chickpea and Egg Soup',
        'Not Specified',
        406, 41.5, 18.2, 16.4, 10.1, 449, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Take the stress out of a busy morning with these tasty breakfast muffins. Make a batch on Sunday and freeze in portions of two or three.',
        'Preheat oven to 160°C fan-forced.\nSpray a 12 hole x 1/3-cup capacity with oil to grease.\nGrate the zucchini and firmly squeeze to get the excess moisture out. Wrap it in a paper towel and squeeze again to remove the remainder of the moisture.\nWhisk the eggs and milk in a large bowl and stir in the zucchini, carrot, green onions and frozen peas. Season and stir through cheese.\nEvenly spoon the mixture into a muffin pan and bake for 25-30 minutes or golden and until set.\nSet aside in the pan for 5 minutes to cool then turn onto a wire rack. Serve hot or cold.',
        'Cooking oil spray \n1 medium zucchini \n8 eggs, at room temperature \n2 tbs milk \n1 medium carrot, coarsely grated \n3 green onions (shallots), thinly sliced \n1/3 cup frozen peas \n1 cup reduced fat grated tasty cheese',
        '24', -- UserID
        TRUE,
        '2023-04-07 16:00:00',
        'https://www.australianeggs.org.au/assets/recipes/Spicy-Chickpea-amp-3__ScaleWidthWzEyMDBd.jpg',
        'Author : Australianeggs, Designed by Australianeggs',  -- img_title
        2, -- dietary_preference
        25, -- cooking_time
        8   -- meal type (cuisines)
    ),
    (
        68,
        'Gina',
        'Apple Pie Overnight Oats',
        'Not Specified',
        361, 59, 8, 11, 10, 154, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'With apples, walnuts, chia seeds, maple syrup, oats, and cinnamon, this comforting overnight oat meal tastes just like apple pie!',
        'Add the apples, cinnamon, maple syrup and a pinch of sea salt to small sauce pan over low heat.\nMix to combine then cover and cook for about 10 minutes, stirring occasionally, until the apples are tender.\nRemove the lid, increase the heat to medium and cook an additional 2-3 minutes or until the sauce thickens slightly and coats the apples and excess liquid evaporates.\nRemove from the heat and set aside while you make the oats.\nFor the oats: In a small bowl, add the milk, chia seeds, vanilla, cinnamon, nutmeg, and maple syrup.\nAdd the oats and mix to combine.\nAdd 1/4 of the oat mixture to 2 mason jars (8oz) or airtight containers (with lids).\nLayer each evenly with ¼ of the apples then top each with an equal amount of the remaining oats and 1 tablespoon walnuts.\nCover and refrigerate overnight.\nOats may be eaten cold, at room temperature or warm.',
        '1 medium apple, chopped \n2 teaspoons ground cinnamon \n1 tablespoon pure maple syrup \nSea salt \n1 1/2 cups unsweetened almond milk, or milk of your choice \n2 teaspoons chia seeds \n1 teaspoon vanilla extract \n1 teaspoon ground cinnamon \n1/8 teaspoon ground nutmeg \n1/2 tablespoon pure maple syrup \n1 cup old fashioned oats, or gluten-free oats \n2 tablespoons chopped walnuts, for topping',
        '24', -- UserID
        TRUE,
        '2023-10-29 14:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2022/10/Apple-Pie-Overnight-Oats-3.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        1, -- dietary_preference
        25, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        69,
        'Gina',
        'Classic Egg Salad',
        'Not Specified',
        185, 1, 9.5, 15.5, 3.5, 215.5, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'This classic egg salad recipe is the perfect make-ahead dish for breakfast on toast, for lunch in a wrap, lettuce wrap, over salad or in a sandwich.',
        'Combine all the ingredients and refrigerate until ready to eat.',
        '6 hard boiled eggs, peeled and chopped \n3 tablespoons mayonnaise \n1 teaspoon finely chopped red onion \n1/8 teaspoon kosher salt \nfresh black pepper, to taste \n1/8 teaspoon sweet paprika, for garnish \nchopped chives, for garnish',
        '27', -- UserID
        TRUE,
        '2023-09-11 13:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2019/01/Egg-Salad-Finals-9.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        2, -- dietary_preference
        25, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        70,
        'Gina',
        'Spicy Gochujang Tofu Bowl',
        'Not Specified',
        473, 50, 26, 19, 6, 942, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Crumble it up to win over a non-tofu lover. These plant-based Spicy Gochujang Tofu Bowls are bursting with flavor, protein, and vegetables!',
        'Place tofu on a paper towel or tea towel lined plate.  Cover with another towel and place a heavy pan on top to press out excess water from tofu.\nCrumble the tofu into small bowl with your fingers into small (ground meat-size) pieces. Set aside.\nIn a small bowl or measuring cup, whisk together the Gochujang with the soy sauce and 1 tablespoon vinegar.\nHeat a large skillet over medium high heat.\nAdd 1/2 tablespoon of the sesame oil, swirling to coat the bottom of the pan.\nAdd the garlic and ginger and sauté for 30 seconds.  Add the crumbled tofu and cook, stirring often, for 5 minutes, or until some of the pieces just start to brown.\nAdd the gochujang sauce and mix to evenly coat. Cook an additional 4-5 minutes, stirring often, until the pieces brown a little on the edges.\nMeanwhile, prepare the slaw: In a small mixing bowl, combine the remaining 2 tablespoons vinegar, 2 teaspoons sesame oil and 1 teaspoon honey with 1/4 teaspoon salt. Whisk to combine until smooth and combined.  Add the coleslaw mix and scallion whites and toss to evenly coat with dressing.\nDivide the rice into 2 medium serving bowls.\nAdd 1 1/2 cups slaw and 1 cup tofu to each bowl. Top each with scallion greens and serve immediately.',
        '1 14-ounce package extra firm tofu, drained \n2 tablespoons Gochujang \n2 tablespoons reduced sodium soy sauce \n3 tablespoons unseasoned rice vinegar \n3 1/2 teaspoons sesame oil \n2 garlic cloves, minced \n1 teaspoon grated fresh ginger \n1 teaspoon honey \n1/4 teaspoon kosher salt \n3 cups tri-color coleslaw mix, red and green cabbage and carrots \n2 scallions, chopped, white and green separated \n1 cup cooked brown rice \nlime wedges, for serving',
        '27', -- UserID
        TRUE,
        '2023-02-21 13:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2023/02/Spicy-Gochujang-Tofu-Bowls-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        1, -- dietary_preference
        25, -- cooking_time
        12   -- meal type (cuisines)
    ),
    (
        71,
        'Gina',
        'Protein PB & J Smoothie Bowl',
        'Not Specified',
        268, 30.5, 14.5, 11, 6.5, 278, -- calories, carbs, protein, fat, fibre, sodium
        1,
        'The flavor of this protein PB & J smoothie bowl is similar to peanut butter and jelly combined. Rich in protein, definitely the ideal way to start the day!',
        'Place your milk into the blender.\nAdd frozen fruit, protein powder and 1 tablespoon peanut butter. Seal and blend until smooth.\nPour out into a bowl.\nIf using, melt the remaining peanut butter in the microwave 30 to 45 seconds and drizzle over the bowl.\nAdd desired toppings. Eat right away with a spoon!',
        '1/4 cup almond, oat or milk of your choice \n2/3 cup frozen blueberries, put your blueberries in the freezer! \n2/3 cup sliced strawberries, frozen \n1 scoop vanilla protein powder \n1 tbsp peanut butter \nOptional toppings: 1 tablespoon melted peanut butter for drizzling,, blueberries, chia seeds',
        '27', -- UserID
        TRUE,
        '2023-03-25 13:20:00',
        'https://www.skinnytaste.com/wp-content/uploads/2021/03/PB-_-J-Smoothie-Bowl-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        2, -- dietary_preference
        5, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        72,
        'Gina',
        'Chipotle Chicken',
        'Not Specified',
        216, 2, 34, 7, 0.5, 561, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Skinless, boneless chicken thighs (or breasts) are used in this simple and quick recipe for chipotle chicken. It is great for tacos, quesadillas, handmade burrito bowls, and more. It is spicy and smokey.',
        'Season Chicken: Season the chicken thighs with salt and pepper on both sides.\nIn a mixing bowl, combine the minced garlic, chipotle in adobo sauce, ancho chile powder, ground cumin, and dried oregano. Rub the spice mixture evenly over the chicken thighs, making sure they are thoroughly coated. Let them sit a few minutes to let the flavor set in. You can cook right away or refrigerate as long as overnight, the longer the more flavorful!\nPreheat your grill or grill pan to medium-high heat. Grease the grill grates or grill pan with oil to prevent sticking.\nPlace the chicken thighs on the grill or grill pan and cook for approximately 6-8 minutes per side, or until they are fully cooked and reach an internal temperature of 165°F.\nOnce cooked, remove the chicken from the heat and let it rest for a few minutes before serving. Resting allows the flavors to meld together and the juices to redistribute. Slice it up and serve in tacos, rice bowls, etc.',
        '1 1/2 pounds boneless skinless chicken thighs, trimmed of fat (about 8 thighs) \n1 1/4 teaspoons kosher salt, and fresh ground black pepper, to taste \n2 cloves garlic, minced or crushed \n1/2 to 1 tablespoon chipotle in adobo sauce, from 1 can, you can freeze the rest for future use \n1 teaspoon ancho chile powder \n1 teaspoon ground cumin \n1 teaspoon dried oregano',
        '24', -- UserID
        TRUE,
        '2023-03-25 13:20:00',
        'https://www.skinnytaste.com/wp-content/uploads/2023/06/Chipotle-Chicken-Thighs-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        4, -- dietary_preference
        30, -- cooking_time
        6   -- meal type (cuisines)
    ),
    (
        73,
        'Gina',
        'One Pan Roasted Potatoes, Sausage and Peppers',
        'Not Specified',
        325, 33, 22.5, 11.5, 4, 587, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'One of my favorite fuss-free sheet pan dinners is One Pan Roasted Potatoes with Sausage & Peppers. Ideal for weeknights, plus points for being simple to clean up!',
        'Cut the potatoes into small 1" x 1/2 inch pieces. These take the longest to cook so cutting them small ensures everything cooks evenly.\nPreheat oven to 375°F.\nSpray one large non-stick baking sheet, or two small ones with olive oil spray to prevent the potatoes from sticking.\nIn a large bowl, combine potatoes, onions, peppers, olive oil, salt, pepper, rosemary and garlic powder. Mix well to be sure everything is coated with oil and seasoned evenly. Pour onto the prepared baking sheet and place in the center of the oven; bake for 15 minutes.\nUse a spoon to toss so nothing sticks or burns.\nAdd the sausage to the baking sheet with the potatoes and vegetables and bake, tossing once or twice for 25-35 minutes, or until your potatoes are cooked through.\nCooking time will vary depending on the thickness of your potatoes and sausage, keep an eye so they do not burn.',
        '1.5 lb about 3 large potatoes, russet or new \n1 medium onion, peeled and quartered, layers separated \n2 red bell peppers, seeds removed and cut into 1 inch pieces \n2 tsp extra virgin olive oil \nkosher salt and fresh cracked pepper to taste \n1 tsp chopped rosemary, fresh or dry \n1/2 tsp garlic powder \nolive oil spray \n1 lb Italian chicken sausage, each link into 6-7 slices',
        '23', -- UserID
        TRUE,
        '2023-12-13 12:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2011/10/One-Pan-Roasted-Potatoes-Sausage-and-Peppers-5.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        4, -- dietary_preference
        55, -- cooking_time
        4   -- meal type (cuisines)
    ),
    (
        74,
        'Gina',
        'High-Protein Scrambled Eggs with Cottage Cheese',
        'Not Specified',
        173, 1.5, 17.5, 10.5, 4, 327, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Add some cottage cheese to your scrambled eggs for an easy high-protein breakfast.',
        'In a medium bowl, whisk the eggs, cottage cheese, kosher salt and black pepper, to taste with a fork.\nHeat a medium nonstick skillet over medium-low heat and spray with oil. When warm, pour the eggs in.\nUsing a rubber spatula, slowly scrape sections of eggs to the center of the pan as the bottom starts to set, creating soft folds for about 1 1/2 to 2 minutes total until just set.\nRemove from the heat and serve.',
        '4 large eggs \n1/2 cup 2% cottage cheese, I like Good Culture \n1/8 teaspoon kosher salt \nfresh ground black pepper \nolive oil spray',
        '23', -- UserID
        TRUE,
        '2023-03-13 12:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2022/03/High-Protein-Scrambled-Eggs-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        4, -- dietary_preference
        6, -- cooking_time
        4   -- meal type (cuisines)
    ),
    (
        75,
        'Gina',
        'Slow Cooker Pork and Green Chili Stew',
        'Not Specified',
        253, 5.5, 33, 9, 0.5, 836, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Lean pork chunks slow-cooked in a crock pot with tomatoes, jalapeño, and green chilies make for a tasty, slightly spicy midweek dinner!',
        'Cut pork into 2-inch pieces. Season with salt and pepper.\nHeat a large non-stick skillet on high heat; when hot lightly spray the pan with oil and brown the pork over medium heat on all sides, about 3 - 4 minutes total.\nSprinkle 1 tbsp of flour over pork and stir to cook 30 seconds, sprinkle remaining flour over pork and cook an additional 30 seconds.\nAdd browned pork to the crock pot, along with the remaining ingredients.\nCook on LOW for 6 to 8 hours or HIGH for 4 hours.\nWhen done, adjust salt and pepper to taste if needed.',
        '2 lbs pork tenderloin \nsalt and pepper to taste \ncooking spray \n2 tbsp unbleached all-purpose flour \n3/4 cup diced onion \n2 cans, 4.25 oz each whole green chiles, sliced into thick rounds \n2 tbsp chopped jalapeño, or more to taste \n10 oz can diced tomatoes and green chilies \n1/2 cup fat-free low-sodium chicken broth \n1 tbsp cumin \n1/2 tsp garlic powder \nsalt and fresh ground black pepper, to taste',
        '23', -- UserID
        TRUE,
        '2023-10-02 11:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2012/10/slow-cooker-pork-and-green-chile-stew-550x798.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        4, -- dietary_preference
        320, -- cooking_time
        6   -- meal type (cuisines)
    ),
    (
        76,
        'Gina',
        'Corn Tomato Avocado Salad',
        'Not Specified',
        128, 14, 2.5, 8.5, 4, 83, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'In a dish, this corn tomato avocado salad tastes like summer! Serve half of it as a main course, or as the ideal side to anything you grill.',
        'Steam corn in steamer or microwave (or you can grill or boil) until tender, about 5 minutes.\nLet it cool then transfer to a large bowl.\nToss all the remaining ingredients together and serve immediately.',
        '1 cup corn kernels , from 1 large steamed corn on the cobb \n5 ounces diced avocado, from 1 medium \n1 1/2 cup diced Persian cucumbers, about 3 small \n1 cup halved cherry tomatoes \n2 tablespoons diced red onion \n2 teaspoons extra virgin olive oil \n2 tablespoon fresh lemon juice, from 1 medium lemon \n1/4 teaspoon kosher salt \nfresh black pepper, to taste',
        '23', -- UserID
        TRUE,
        '2023-07-23 11:30:00',
        'https://www.skinnytaste.com/wp-content/uploads/2018/07/Corn-Tomato-Avocado-Salad-1-9.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        2, -- dietary_preference
        10, -- cooking_time
        9   -- meal type (cuisines)
    ),
    (
        77,
        'Gina',
        'Mini Pumpkin Chocolate Chip Muffins',
        'Not Specified',
        160, 27, 2, 5, 2, 118, -- calories, carbs, protein, fat, fibre, sodium
        14,
        'Mini Pumpkin Chocolate Chip Muffins made lighter by swapping out butter for pumpkin puree loaded with chocolate chips in every bite!',
        'Preheat the oven to 350°F. Line a mini muffin tin with paper liners and lightly spray liners with oil for easy removal.\nIn a medium bowl, combine flours, sugar, baking soda, pumpkin spice, cinnamon, and salt with a wire whisk. Set aside.\nIn a large bowl mix pumpkin puree, oil, egg whites and vanilla; beat at medium speed until thick. Scrape down sides of the bowl.\nAdd flour mixture to the wet mixture, then blend at low speed until combined; do not over mix. Fold in chocolate chips.\nPour batter into prepared muffin tin and bake on the center rack for 22 to 24 minutes, or until a toothpick inserted in the center comes out clean.\nLet them cool at least 15 minutes before serving.',
        '1/2 cup white whole wheat flour \n3/4 cups unbleached all purpose flour \n3/4 cup monk fruit sweetener (Lakanto), or raw sugar \n3/4 tsp baking soda \n1 3/4 tsp pumpkin pie spice \n1/4 tsp cinnamon \n1/4 tsp salt \n1 1/2 cups canned pumpkin puree, not pumpkin pie filling \n2 tbsp virgin coconut oil, or canola \n2 large egg whites \n2 tsp vanilla extract \nbaking spray \n2/3 cup mini chocolate chips',
        '21', -- UserID
        TRUE,
        '2023-09-10 11:30:00',
        'https://www.skinnytaste.com/wp-content/uploads/2013/09/Mini-Pumpkin-Chocolate-Chip-Muffins-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        2, -- dietary_preference
        40, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        78,
        'Gina',
        'Maple-Cinnamon Banana-Pear Baked Oatmeal with Walnuts',
        'Not Specified',
        225, 39.5, 5.5, 6, 4.5, 72, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Breakfast with baked oats is akin to having dessert! You will feel full all morning long because it is made with nutritious ingredients like bananas, pears, oats, almonds, and maple syrup.',
        'Preheat the oven to 375° Lightly spray a 8 x 8″ or 9 x 9″ ceramic baking dish with cooking spray; set aside.\nArrange the banana slices in a single layer on the bottom of the ceramic dish. Top with the pears, 1/4 teaspoon of the cinnamon, 2 tablespoon of the maple and cover with foil.\nBake 20 minutes, until the bananas get soft.\nMeanwhile, in a medium bowl, combine the oats, half of the walnuts, baking powder, 1/2 teaspoon cinnamon, and salt; stir together.\nIn a separate bowl, whisk together the remaining maple syrup, milk, egg, and vanilla extract.\nRemove the fruit from the oven, then pour the oat mixture over the baked fruit.\nPour the milk mixture over the oats, making sure to distribute the mixture as evenly as possible over the oats.\nSprinkle the remaining 1/4 teaspoon cinnamon and walnuts over the the top.\nBake the oatmeal for about 35 minutes, or until the top is golden brown and the oatmeal has set. Serve warm from the oven.',
        '2 large ripe bananas, (the riper the better) sliced into 1/2″ pieces \n1 1/2 cup diced and peeled ripe pears, 1-/2 inch dice \n5 tablespoons pure maple syrup \n1 cup uncooked quick oats \n5 tablespoons chopped walnuts \n1/2 tsp baking powder \n1 tsp cinnamon \npinch of salt \n1 cup fat-free milk, or dairy-free milk such as almond or soy \n1 large egg \n1 teaspoon vanilla extract',
        '22', -- UserID
        TRUE,
        '2023-09-13 11:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2019/09/Maple-Cinnamon-Banana-Pear-Baked-Oatmeal-with-Walnuts-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        2, -- dietary_preference
        35, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        79,
        'Gina',
        'Air Fryer Steak',
        'Not Specified',
        221, 0.5, 39.5, 7, 0.5, 391, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Cook the ideal air-fried steak so that it is juicy inside and charred outside. Steak cooked by air is quick, simple, and creates no mess in the kitchen!',
        'Combine the spices in a small bowl.\nSpray the steak with olive oil and coat both sides with the spices.\nPreheat the air fryer so the basket gets hot. For a 1-inch steak, air fry 400F 10 minutes turning halfway, for medium rare, for medium, cook 12 minutes, flipping halfway. See temp chart below, time may vary slightly with different air fryer models, and the thickness of the steaks.\nFinish with a pinch of more salt and black pepper.\nLet it rest, tented with foil 5 minutes before slicing.',
        '1 teaspoon garlic powder \n1/2 teaspoon sweet paprika \n1 teaspoon kosher salt \n1/4 teaspoon black pepper \n4 sirloin steaks, 1 inch thick (1 1/2 lbs total) \nolive oil spray',
        '22', -- UserID
        TRUE,
        '2023-03-29 10:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2022/03/Air-Fryer-Steak-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        4, -- dietary_preference
        15, -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        80,
        'Gina',
        'Rainbow Quinoa Salad with Lemon Dressing',
        'Not Specified',
        394, 51, 10.5, 17, 7, 184, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Eat the rainbow! This delicious vegan, gluten-free rainbow quinoa salad with lemon dressing is ideal for meal prep and do not need to be reheated.',
        'Combine lemon juice, olive oil, salt and pepper in a small bowl and whisk well.\nAdd one cup quinoa in each bowl. Top with 1/4 cup of each of the vegetables in rainbow order starting with purple, ending in red.\nPour the dressing over the salad, adjust salt and pepper, as needed.',
        '4 tablespoons lemon juice \n4 tablespoons olive oil \n1/2 teaspoon kosher salt \n▢fresh black pepper, to taste \n4 cups cooked quinoa, from about 1 1/3 cups \n1 cup shredded brussels sprouts \n1 cup shredded red cabbage \n▢1 cup shredded or thin sliced carrots \n1 cup yellow bell peppers \n1 cup diced mini cucumbers \n1 cup halved cherry tomatoes',
        '22', -- UserID
        TRUE,
        '2023-12-12 10:30:00',
        'https://www.skinnytaste.com/wp-content/uploads/2022/12/Rainbow-Quinoa-Salad-with-Lemon-Dressing-3.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        1, -- dietary_preference
        15, -- cooking_time
        9   -- meal type (cuisines)
    );


-- Recipe allergies
-- id refers to recipe id (refer to recipe table)
-- allergy_id refers to allergy id (refer to allergies table)
Insert Into recipe_allergies
(id, allergy_id)
VALUES
    (1, 9),
    (2, 1),
    (2, 8),
    (2, 9),
    (3, 1),
    (4, 5),
    (4, 7),
    (5, 5),
    (5, 8),
    (6, 8),
    (7, 3),
    (7, 7),
    (8, 8),
    (9, 1),
    (9, 7),
    (10, 8),
    (11, 3),
    (11, 8),
    (12, 8),
    (13, 3),
    (13, 6),
    (13, 7),
    (13, 8),
    (14, 3),
    (15, 5),
    (16, 1),
    (16, 8),
    (16, 9),
    (17, 1),
    (17, 3),
    (17, 4),
    (17, 9),
    (18, 3),
    (19, 5),
    (20, 4),
    (21, 6),
    (22, 1),
    (22, 8),
    (23, 10),
    (24, 10),
    (25, 8),
    (26, 2),
    (27, 11),
    (28, 8),
    (28, 9),
    (29, 8),
    (29, 9),
    (29, 10),
    (30, 11),
    (31, 6),
    (32, 2),
    (32, 10),
    (33, 7),
    (33, 10),
    (34, 7),
    (34, 10),
    (35, 2),
    (37, 7),
    (38, 5),
    (39, 7),
    (39, 10),
    (41, 7),
    (41, 10),
    (42, 2),
    (42, 3),
    (43, 2),
    (43, 10),
    (44, 10),
    (46, 7),
    (47, 5),
    (49, 10),
    (52, 3),
    (59, 7),
    (61, 7),
    (61, 10),
    (63, 7),
    (65, 2),
    (66, 2),
    (66, 10),
    (67, 2),
    (68, 3),
    (68, 7),
    (68, 8),
    (69, 2),
    (70, 3),
    (71, 1),
    (71, 6),
    (71, 7),
    (74, 2),
    (74, 10),
    (77, 2),
    (77, 9),
    (78, 1),
    (78, 2),
    (78, 7);


INSERT INTO RECIPE_REVIEW_RATING
(Review, Rating, UserID, RecipeID)
VALUES
    ('This is very awesome',                            3.2, '7', 1),
    ('The recipe nice.'    ,                            5.0, '8', 1),
    ('I love this recipe!' ,                            4.0, '9', 1),
    ('I love this recipe!' ,                            4.0, '9', 2),
    ('This is very awesome',                            3.2, '12', 2),
    ('The recipe is very nice',                         5.0, '8', 3),
    ('The recipe is very nice',                         5.0, '8', 10),
    ('I love this recipe!' ,                            4.0, '9', 10),
    ('I love this recipe!' ,                            4.0, '9', 19),
    ('This is very awesome',                            3.2, '12', 19),
    ('The recipe is very nice',                         5.0, '8', 20),
    ('I love this recipe!' ,                            4.0, '9', 20),
    ('The recipe is very nice',                         5.0, '8', 25),
    ('I love this recipe!' ,                            4.0, '9', 25),
    ('I love this recipe!' ,                            4.0, '9', 27),
    ('I love this recipe!' ,                            4.0, '9', 30),
    ('I love this recipe!' ,                            4.0, '9', 32),
    ('This is very awesome',                            3.2, '7', 32),
    ('This is very awesome',                            3.2, '12', 35),
    ('The recipe is very nice',                         5.0, '8', 40),
    ('I love this recipe!' ,                            4.0, '9', 40),
    ('The recipe is very nice',                         5.0, '8', 66),
    ('I love this recipe!' ,                            4.0, '9', 66),
    ('I love this recipe!' ,                            4.0, '9', 74),
    ('The recipe is very nice',                         5.0, '8', 79),
    ('I love this recipe!' ,                            4.0, '9', 79),
    ('This is very awesome',                            3.2, '12', 79);

-- Meal Plan
-- publisher should be author of the meal plan
-- health_goal_category refers to the category of the meal plan (refer to health_goal_category)
-- img_title should be the author of the image and the source of the image (follow their code of conduct)

INSERT INTO meal_plan
(id, publisher, title, active, introduction,  main_content, conclusion, createddt, health_goal_category, img, img_title, userid)
VALUES
    (
        1,
        'Sheeba',
        'Low-Calorie Weight Loss Meal Plan',
        TRUE,
        'Starting a low-calorie weight loss meal plan can be a life-changing journey toward achieving your health and wellness goals. This meal plan aims to offer a methodical approach to calorie management while guaranteeing that vital nutrients are balanced.',
        'By including nutritious foods and lean protein sources, we hope to establish the calorie deficit required for optimal weight loss. Adequate hydration is also important, as it promotes overall health and can also help reduce excessive eating.',
        'The meal plan emphasizes portion control and nutrient-dense foods. Individuals can start on a path to healthier eating habits by focusing on nutrient-dense foods, balanced macronutrients, and a well-organized meal plan.',
        '2023-06-15',
        3, -- weight loss
        'https://img.freepik.com/free-vector/main-food-groups-macronutrients-vector_1308-127634.jpg?size=626&ext=jpg&ga=GA1.1.1497591401.1706588994&semt=ais',
        'Designed by Freepik',  -- img_title
        '5' -- userid
    ),
    (
        2,
        'Sheeba',
        'Muscle Gain Meal Plan',
        TRUE,
        'Gaining muscle may improve your abilities in certain sports or enhance your quality of life. Muscles protect joints from injury, improve balance, and reduce the risk of falls. Muscle mass also plays an important role in physical and metabolic health.',
        'Adequate calories are required to grow muscle, and you may need to increase your total calorie consumption to achieve your goal. If you are on a diet to gain muscle, you might want to think about consuming 400 to 600 calories every meal.',
        'By prioritizing a well-rounded consumption of macronutrients, encompassing sufficient protein, carbohydrates, and beneficial fats, individuals can supply their bodies with the essential fuel required for optimal muscle growth and recovery.',
        '2023-06-15',
        1, -- weight Gain
        'http://tinyurl.com/452tfdja',
        'Designed by Freepik',  -- img_title
        '5' -- userid
    ),
    (
        3,
        'Sheeba',
        'Vegan Weight Loss Meal Plan',
        TRUE,
        'Following a weight loss diet is difficult, but doing so while living a vegan lifestyle takes it to another level. Finding ways to incorporate a variety of nutrients is critical while following a vegan loss meal plan to stay energized and satisfied.',
        'It is not possible to lose weight on a vegan diet alone. The key is to meet your nutritional needs while establishing a calorie deficit. The meal plan will incorporate as much plant-based protein as possible while staying within the calorie limit.',
        'The vegan weight reduction diet might be difficult since high protein foods, such as those derived from animal sources, are more fulfilling than carbs. You must strike the appropriate combination of fats, fiber, protein, and nutrients.',
        '2023-02-10',
        3, -- weight loss
        'https://img.freepik.com/free-photo/view-arrangement-with-healthy-food-wooden-background_23-2148287512.jpg?w=1060&t=st=1706974108~exp=1706974708~hmac=a572df90688c87112cabf270e182b08731cce78e16b2529019e2a0a621f51498',
        'Designed by Freepik',  -- img_title
        '5' -- userid
    ),
    (
        4,
        'Sheeba',
        'Healthy and Balanced Meal Plan',
        TRUE,
        'For many people, eating a balanced, healthy diet is the ultimate objective. Generally speaking, a diet high in whole grains, fruits, vegetables, lean proteins, and healthy fats is considered to be healthy and balanced.',
        'Prioritize fruits and vegetables, and try to include a variety of foods, such as berries and leafy greens, to cover half of your plate. Make sure you are getting enough protein from foods like fish, poultry, eggs, beans, dairy, and lean meats.',
        'It is acceptable to make adjustments to meet your lifestyle and needs. Make an effort to include nutritious options in your daily routine. Vegetables, fruits, lean proteins, legumes, and whole grains are always good choices.',
        '2023-01-18',
        2, -- maintain health
        'https://www.verywellfit.com/thmb/oTNxCgHzNWCkTCRDuUlgWkTi4dY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VWFit-Meal-Plan-Journey-1-Week-Healthy-and-Balance-Meal-Plan-6ee43578918947a4b687922d614f2be3.jpg',
        'Designed by Verywell',  -- img_title
        '5' -- userid
    ),
    (
        5,
        'Sheeba',
        'Finding Balance: The Elements of a Well-Balanced Meal',
        TRUE,
        'A balanced diet ensures that individuals are meeting their needs for vitamins, minerals and other nutrients. A balanced meal should contain vegetables & fruits, grain products, milk & alternatives, meat & alternatives.',
        'A healthy and balanced diet comprises a diverse range of nutrient-dense foods from all major food groups. Embrace variety, moderation, and any dietary preferences or constraints to establish a long-term approach to healthy eating.',
        'Prioritizing portion control, staying hydrated, and being mindful of added sugars and processed foods contribute to a sustainable and healthy eating pattern. A balanced meal plan also helps to reduce the risk of chronic diseases.',
        '2023-01-04',
        2, -- maintain health
        'https://www.sobeys.com/wp-content/uploads/2015/05/balance_meal-1260x350.jpg',
        'Designed by sobeys',  -- img_title
        '5' -- userid
    ),
    (
        6,
        'Sheeba',
        'Mediterranean Diet Plan for Mental Sharpness and Deep Focus',
        TRUE,
        'The Mediterranean diet has numerous health advantages in addition to being delicious. It even helps maintain brain health as you age, in case you had no idea about it.',
        'Nuts, seeds, plant-based foods with vibrant colors, and heart-healthy fats are characteristics of the Mediterranean diet. It is typically a diet high in phytochemicals, antioxidants, and anti-inflammatory fats.',
        'The Mediterranean-style diet is considered to be anti-inflammatory, with particular benefits for the brain. In individuals over 65, it has been linked to both slower rates of cognitive deterioration and improved cognitive performance.',
        '2023-01-20',
        2, -- maintain health
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/03/spanakopita-egg-casserole_85-web-3.jpg?crop=535:301&width=1070&enable=upscale',
        'Designed by Darren Kemper',  -- img_title
        '5' -- userid
    ),
    (
        7,
        'Jesse Lane Lee',
        'Your Quit-Sugar Meal Plan',
        TRUE,
        'With this sugar- and sweetener-free meal plan, you can kick your sweet tooth. This real-food menu is so tasty and filling that you will not miss it.',
        'Did you know that the average person consumes 22 teaspoons of sugar each day, more than three times the amount recommended by the American Heart Association? Reducing or eliminating sugar consumption is a great step toward better overall health.',
        'Gradually lowering your sugar consumption can help your taste buds adjust. This diet includes substantial meals that will keep you full, so you will not crave sugar.',
        '2023-11-30',
        2, -- maintain health
        'http://tinyurl.com/4ateah2b',
        'Designed by pvproductions',  -- img_title
        '32' -- userid
    ),
    (
        8,
        'Heather BainBridge',
        'Fresh Low-Cal Meal Plan',
        TRUE,
        'Get out of the winter blues and welcome spring with a new wave of fresh, seasonal, and waist-reducing meal ideas.',
        'Herbs and spices stimulate the senses, incorporating flavors from different cultures for interesting taste combinations. The main goal of this meal plan is to serve wholesome, low-calorie meals that are high in fiber, vitamins, and minerals.',
        'Many studies have found that herbs and spices can provide health advantages in the form of free-radical-fighting antioxidants. Hence, let the harmony of flavor enhance your meals, and your health may reap benefits as well!',
        '2023-11-06',
        3, -- weight loss
        'http://tinyurl.com/5f7vhkcb',
        'Designed by kamranaydinov',  -- img_title
        '32' -- userid
    ),
    (
        9,
        'Jesse Lane Lee',
        'Eco-Minded Meal Plan',
        TRUE,
        'This simple meal plan will pile your plate high with vegetables and other plant-based foods. Including more plants on your plate is a great way to make your meals more sustainable and minimize your total environmental impact.',
        'This nutrient-dense, plant-based meal plan is also high in vegetables. Recipes contain an abundance of different phytonutrients. Phytonutrients protect plants from viruses and germs while also providing antioxidant and anti-inflammatory benefits.',
        'Increasing the quantity of fruits, vegetables, legumes, nuts, and other plant-based foods you eat will suffice to keep your meat consumption in check. You will be able to satisfy your hunger, maintain a healthy gut, and meet your daily fiber requirements.',
        '2023-05-10',
        2, -- maintain health
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2021/11/YogurtBowl_Feature.jpg?crop=535:301&width=1070&enable=upscale',
        'Designed by Olimpia Davies',  -- img_title
        '36' -- userid
    ),
    (
        10,
        'Sarah Sweeney',
        'Gluten-Free Meal Plan',
        TRUE,
        'Try a week of filling and delicious meals with this gluten-free, no-sweat meal plan.',
        'Regardless of why you have given up gluten, you do not have to substantially restrict your diet. Additionally, you do not have to give up on tasty dishes and a wide variety of products when following a gluten-free diet.',
        'There are so many different things to eat, and that is precisely what we are emphasizing in our easy yet tasty meal plan. A healthy gluten-free diet emphasizes real foods and minimizes processed goods, which should be consumed in moderation.',
        '2023-03-31',
        2, -- maintain health
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2022/02/CleanEating_CE101FebMar2022_MealPlan_Steak-Sweet-Potato-Tacos_web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Designed by Olimpia Davies',  -- img_title
        '36' -- userid
    ),
    (
        11,
        'Clean Eating',
        'Mood-Boosting Meal Plan',
        TRUE,
        'You may have heard the phrase "Good health starts in the gut," which means that the state of your gut has a wide-ranging impact on your general health and well-being.',
        'You may have heard the phrase "Good health starts in the gut," which means that the condition of your gut has far-reaching effects for your entire health. This adage is particularly applicable to mental health issues, such as sadness and anxiety.',
        'The perfect ratio of vibrant fruits and vegetables, lean protein, and healthy fats is included in this meal plan to support your brain''s production of the proper amount of neurotransmitters (NTs), which help control your mood.',
        '2023-11-24',
        2, -- maintain health
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2022/02/CleanEating_CE101FebMar2022_MealPlan_Steak-Sweet-Potato-Tacos_web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Designed by Olimpia Davies',  -- img_title
        '35' -- userid
    ),
    (
        12,
        'Jesse Lane Lee',
        'Healthier Gut Meal Plan',
        TRUE,
        'Embark on a journey to improve your gut health with our carefully crafted gut-healing food plan. Every meal is prepared using ingredients known for their gut-friendly qualities, with the goal of nourishing and calming the digestive system.',
        'Fermented foods like tempeh, kefir, miso, and kimchi are staples of this gut-healing diet. Fermented foods include high levels of helpful bacteria known as probiotics, which promote gut health.',
        'This gut-healing meal plan offers a comprehensive approach to promoting digestive health. Start on a path to a better, healthier you by making meals an occasion to celebrate your gut''s wellness.',
        '2023-01-21',
        2, -- maintain health
        'https://img.freepik.com/free-photo/top-view-person-raising-salad-bowl_1150-37020.jpg?w=1060&t=st=1707051989~exp=1707052589~hmac=9957858c1e731b397cb504c680a76bf57061cd7960acf862631c77276e3ade76',
        'Designed by jcomp',  -- img_title
        '35' -- userid
    ),
    (
        13,
        'Clean Eating',
        'Preholiday Immunity Booster Meal Plan',
        TRUE,
        'This pre-holiday food plan will boost immunity, increase energy, and keep you from gaining weight. You can stay motivated and on track throughout this season of success by following this well-balanced strategy.. Every meal is prepared using ingredients known for their gut-friendly qualities, with the goal of nourishing and calming the digestive system.',
        'The weeks preceding the extended holiday season are ideal for rejuvenating your body and setting it up for success with a 14-day regimen of nutritious food to boost immunity, reduce inflammation, and potentially prevent weight gain.',
        'This meal plan focuses on nutrient-dense foods high in fiber, protein, and fat to keep you satisfied and energized. Think of these healthy meal ideas as the start of a joyous and well-being holiday season.',
        '2023-11-06',
        2, -- maintain health
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2020/10/spicy-salmon-poke-bowls_82-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Designed by cleaneating',  -- img_title
        '31' -- userid
    ),
    (
        14,
        'Taylor Hawkins',
        'Weight Gain Meal Plan for Healthy Results',
        TRUE,
        'You could need to put on weight for a variety of reasons, such as cancer, digestive disorders, or loss of appetite. A high-protein, high-calorie diet can help you achieve your goals while being healthy.',
        'You must consume more calories than you expend in order to gain weight. The majority of people require an extra 500 calories a day to achieve their weight-gain objective.',
        'Maintain a diet rich in nutrients, eat five to six times a day, and dress your meals and snacks with high-calorie condiments. Food options that are high in calories and protein will help you meet your goals.',
        '2023-11-06',
        1, -- weight gain
        'https://assets-global.website-files.com/623de5fee0c46d7bf3a5ff45/651c7825f0b63a838180c5a0_iStock-1433432507.jpg',
        'Designed by Shutterstock',  -- img_title
        '31' -- userid
    ),
    (
        15,
        'Shoshana Pritzker',
        'High Protein Meal PLan',
        TRUE,
        'Even with a high-protein diet, it can be difficult to meet your daily protein requirements. Poultry and meat can get boring very quickly. Though protein is the primary focus, balance is essential for a high-protein diet.',
        'There are no carbohydrate or fat intake guidelines when following a high-protein diet. You might feel constrained and dissatisfied if you restrict either. As such, begin with a carb-to-fat ratio that is balanced, as well as a high-protein diet.',
        'Indulge in a high-protein diet plan designed to feed your body and promote muscular growth. This meal plan provides a range of dishes high in protein to fulfill your appetite and meet your dietary requirements.',
        '2023-09-29',
        1, -- weight gain
        'https://www.verywellfit.com/thmb/213N4bvA4MKDuYWOolfmzD__AFQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/VWFit-Meal-Plan-Journey-7-Day-High-Protein-Meal-Plan-edit-2b3cf8e0d09a440f9fa12eb569815456.jpg',
        'Designed by Verywell',  -- img_title
        '36' -- userid
    ),
    (
        16,
        'Jesse Lane Lee',
        'Drop Sugar, Lose the Weight Meal PLan',
        TRUE,
        'Get started on your weight-loss journey with this one-week plan that eliminates sugar and sweeteners while keeping calories at 1,300 or fewer each day.',
        'One of the most difficult aspects of losing weight is that sugar is everywhere and in everything. Your blood sugar and, consequently, your weight are affected not only by cane sugar but also by an overall dependence on sweeteners.',
        'Consider adopting a no-sugar lifestyle to help you lose weight more quickly. With this diet, you can experience what it is like to lessen your dependency on sugar by eliminating all sweets, including natural ones.',
        '2023-11-09',
        3, -- weight loss
        'http://tinyurl.com/2ccus8ed',
        'Designed by cleaneating',  -- img_title
        '36' -- userid
    ),
    (
        17,
        'Australianeggs',
        'Weight Gain Meal Plan',
        TRUE,
        'Gaining weight can be just as challenging as losing weight. While the main focus is to increase energy and protein intakes, it is also important to maintain a healthy balanced diet without eating too many foods that might have high amounts of calories but little in the way of good nutrition. ',
        'This meal plan includes recipes that will help you achieve a higher protein and higher calorie intake from healthy energy-giving foods, which will assist you to enjoy your food while working your way toward achieving your weight gain goals.',
        'This are a few recommended recipes that you can include for gaining weight:',
        '2023-11-09',
        1, -- weight gain
        'http://tinyurl.com/2t24hhbt',
        'Designed by Freepik',  -- img_title
        '37' -- userid
    ),
    (
        18,
        'Australianeggs',
        'Weight Loss Meal Plan',
        TRUE,
        'The most effective long-term weight management strategy is a combination of healthy, balanced food and physical activity.',
        'To make your meal plan more practical and sustainable, consider include an optional extra a couple times per week. A drink of wine, a tiny piece of chocolate, or a sugary pastry are a few examples.',
        'This meal plan includes plenty of tasty and healthy recipes to help make the achievement of your weight loss goals enjoyable!',
        '2023-10-02',
        3, -- weight loss
        'http://tinyurl.com/2dmmw7b2',
        'Designed by Freepik',  -- img_title
        '32' -- userid
    ),
    (
        19,
        'Australianeggs',
        'Lowering Cholesterol Meal Plan',
        TRUE,
        'Eating a nutritious diet can assist to lower and regulate cholesterol levels in the blood, lowering the chance of developing heart disease.',
        'A low-cholesterol meal plan focuses on reducing the intake of foods high in cholesterol, saturated fats, and trans fats.',
        'This meal plan includes a variety of ideas and dishes that make it simple to consume the correct sorts of healthy fats and receive enough of the fiber that helps regulate blood cholesterol levels. Eating a heart-healthy diet may be tasty and simple!',
        '2023-08-11',
        2, -- maintain health
        'http://tinyurl.com/awdrk5yt',
        'Designed by Freepik',  -- img_title
        '32' -- userid
    ),
    (
        20,
        'Australianeggs',
        'Weight Gain Meal Plan For the Elderly',
        TRUE,
        'Both the physical impacts of aging and the impact of societal changes can have an impact on appetite and food intake at this age, making it more difficult to achieve daily nutritional requirements.',
        'Being conscious of any weight fluctuations over time and making simple modifications to your eating habits, such as eating smaller meals more frequently, can help achieve your daily nutritional needs while lowering your risk of unintended weight loss.',
        'This weight gain for the elderly meal plan provides easy and nutritious meal and snack options that will make it easy for you to meet your needs and enjoy the foods you are eating!',
        '2023-07-20',
        3, -- weight loss
        'http://tinyurl.com/3twdjcsz',
        'Designed by Freepik',  -- img_title
        '34' -- userid
    ),
    (
        21,
        'Australianeggs',
        'Low carbohydrate Meal Plan',
        TRUE,
        'In recent years we have seen a growing and positive trend towards eating patterns significantly lower in carbohydrates, without eliminating the food group completely.',
        'This eating style can be an excellent way to support health and wellbeing, while still consuming a well-balanced diet and meeting daily nutritional needs.',
        'If you are looking for great low-carbohydrate ideas that provide sufficient energy and nutrition, this meal plan provides you with various great options.',
        '2023-04-10',
        3, -- weight loss
        'http://tinyurl.com/29ceu456',
        'Designed by Freepik',  -- img_title
        '34' -- userid
    ),
    (
        22,
        'Australianeggs',
        'Protein Rich Meal Plan',
        TRUE,
        'When we live a busy and chaotic lifestyle, it is easy to forget about the importance of our diet. But poor eating habits can also result in health problems, exhaustion, and difficulty concentrating.',
        'Eating a well-balanced diet that contains whole grains, fruits, vegetables, and foods high in protein, healthy fats, and fiber can help improve energy levels and keep us going longer.',
        'This high protein meal plan aims to keep you satisfied for longer by incorporating high fibre foods, protein-rich foods and low GI foods throughout each day.',
        '2023-03-25',
        1, -- weight gain
        'https://img.freepik.com/free-photo/chicken-steak-topped-with-white-sesame-peas-tomatoes-broccoli-pumpkin-white-plate_1150-24770.jpg?w=1060&t=st=1707560531~exp=1707561131~hmac=e401d7d512d5669f917b593e36a1935fe06eba3259863cc7b63990a9a3189e8c',
        'Designed by Freepik',  -- img_title
        '34' -- userid
    ),
    (
        23,
        'Gina',
        'Healthy Eating Meal Plan for Weight Loss',
        TRUE,
        'In a fast-paced society, keeping a healthy weight might be challenging. However, reaching weight loss objectives is not only possible but can also result in enhanced general health and well-being if diet and lifestyle choices are made appropriately.',
        'By concentrating on balanced nutrition, portion control, and mindful eating, individuals can build durable habits that support their goals.',
        'Incorporating a variety of nutrient-rich foods throughout the day ensures that nutritional needs are met while keeping meals interesting and enjoyable. Remember, consistency is key, and small, gradual changes can lead to long-term success.',
        '2023-09-15',
        3, -- weight loss
        'http://tinyurl.com/25fvm6db',
        'Designed by Freepik',  -- img_title
        '35' -- userid
    );



-- mealplan_recipe
-- id refers to meal plan id (refer to meal_plan table)
-- recipe_id refers to recipe id (refer to recipe table)
insert into mealplan_recipe
(id, recipe_id)
values
    (1, 2),
    (1, 10),
    (1, 18),
    (2, 4),
    (2, 17),
    (2, 20),
    (3, 7),
    (3, 10),
    (3, 13),
    (4, 4),
    (4, 6),
    (4, 9),
    (5, 4),
    (5, 6),
    (5, 9),
    (6, 23),
    (6, 24),
    (6, 25),
    (7, 26),
    (7, 27),
    (7, 28),
    (8, 29),
    (8, 30),
    (8, 31),
    (9, 32),
    (9, 33),
    (9, 34),
    (10, 35),
    (10, 36),
    (10, 37),
    (11, 38),
    (11, 39),
    (11, 40),
    (12, 41),
    (12, 42),
    (12, 43),
    (13, 46),
    (13, 47),
    (13, 48),
    (14, 51),
    (14, 52),
    (14, 53),
    (15, 54),
    (15, 55),
    (15, 56),
    (16, 61),
    (16, 62),
    (16, 63),
    (17, 31),
    (17, 54),
    (17, 55),
    (18, 2),
    (18, 7),
    (18, 10),
    (19, 64),
    (19, 65),
    (19, 66),
    (19, 67),
    (20, 17),
    (20, 51),
    (20, 54),
    (21, 4),
    (21, 52),
    (21, 56),
    (22, 20),
    (22, 53),
    (22, 55),
    (23, 68),
    (23, 69),
    (23, 70),
    (23, 71),
    (23, 72),
    (23, 73),
    (23, 74);


INSERT INTO meal_plan_review_rating
(meal_planid, userid, rating, review, createddt)
VALUES
    (1, 11, 5, 'This meal plan is amazing. I have lost 5 pounds in 2 weeks. I feel great and I am not hungry at all. I highly recommend this meal plan.', '2023-06-15'),
    (1, 12, 4, 'I have been following this meal plan for 3 weeks now. I have lost 3 pounds. I feel great and I am not hungry at all. I highly recommend this meal plan.', '2023-06-15'),
    (1, 13, 5, 'I have been following this meal plan for 3 weeks now. I have lost 3 pounds. I feel great and I am not hungry at all. I highly recommend this meal plan.', '2023-06-15'),
    (2, 11, 5, 'This meal plan is amazing. I have gained 5 pounds in 2 weeks. I feel great and I am not hungry at all. I highly recommend this meal plan.', '2023-06-15'),
    (3, 12, 4, 'I have been following this meal plan for 3 weeks now. I have lost 3 pounds. I feel great and I am not hungry at all. I highly recommend this meal plan.', '2023-06-15'),
    (3, 13, 5, 'I have been following this meal plan for 3 weeks now. I have lost 3 pounds. I feel great and I am not hungry at all. I highly recommend this meal plan.', '2023-06-15'),
    (4, 15, 5, 'This meal plan is amazing. I managed to maintain my weight for 2 weeks. My body feels healthier too! I highly recommend this meal plan.', '2023-07-10'),
    (4, 41, 4, 'I have been following this meal plan for 3 weeks now. My weight did not change and my body feels healthier and in a better mood! I highly recommend this meal plan.', '2023-06-20'),
    (12, 43, 5, 'This meal plan is superb! I managed to maintain my weight for 3 weeks. I feel great and I am not hungry at all. I highly recommend this meal plan.', '2023-06-25'),
    (13, 7, 4, 'Highly recommended', '2023-06-25'),
    (14, 7, 5, 'Good meal plan', '2023-06-25'),
    (15, 7, 4, 'Highly recommended', '2023-12-25'),
    (16, 7, 5, 'Highly recommended', '2023-10-25'),
    (17, 7, 4, 'Best meal plan ever', '2023-11-25'),
    (18, 7, 5, 'Highly recommended', '2023-12-25'),
    (18, 8, 4, 'Highly recommended', '2023-12-25'),
    (19, 9, 5, 'Highly recommended', '2023-12-25'),
    (20, 9, 4, 'Highly recommended', '2023-12-25'),
    (21, 9, 5, 'Highly recommended', '2023-12-25'),
    (22, 9, 4, 'Highly recommended', '2023-12-25'),
    (23, 9, 5, 'Highly recommended', '2023-12-25'),
    (23, 10, 4, 'Highly recommended', '2023-12-25'),
    (23, 11, 5, 'Good meal plan', '2023-12-25'),
    (23, 12, 4, 'Good meal plan', '2023-12-25'),
    (23, 13, 5, 'Good meal plan', '2023-12-25'),
    (23, 14, 4, 'Good meal plan', '2023-12-25'),
    (23, 15, 5, 'Good meal plan', '2023-12-25'),
    (23, 16, 4, 'Good meal plan', '2023-12-25'),
    (23, 17, 5, 'Good meal plan', '2023-12-25'),
    (23, 18, 4, 'Highly recommended', '2023-12-25'),
    (23, 19, 5, 'Highly recommended', '2023-12-25'),
    (23, 20, 4, 'Highly recommended', '2023-12-25'),
    (23, 21, 5, 'Highly recommended', '2023-12-25'),
    (23, 22, 4, 'Must try it out', '2023-12-25'),
    (23, 23, 5, 'Must try it out', '2023-12-25'),
    (23, 24, 4, 'Must try it out', '2023-12-25'),
    (23, 25, 5, 'Must try it out', '2023-12-25'),
    (23, 26, 4, 'Highly recommended', '2023-12-25'),
    (23, 27, 5, 'Highly recommended', '2023-12-25');

-- Blog
-- publisher should be author of the blog
-- blog_type_id should be the category of the blog (refer to blog_post_category)
-- img_title should be the author of the image and the source of the image (follow their code of conduct)
INSERT INTO Blog
(id, CreatedDT, Publisher, Title, Info, UserID, img, img_title, blog_type_id)
VALUES
    (
        '1',
        '2024-01-29 08:24:52',  -- CreatedDT
        'Philips',  -- Publisher
        'Elevate Your Kitchen with Philips: Top-Quality Kitchenware',  -- Title
        'Upgrade your kitchen experience with Philips! Your trusted partner for top-quality kitchenware. Discover a range of innovative and stylish appliances designed to make cooking a breeze. Efficiency in Every Appliance: Philips brings you kitchenware that simplifies your daily tasks. From powerful blenders to versatile food processors, our appliances are engineered for efficiency, saving you time and effort in the kitchen. Healthy Choices, Delicious Results: Explore our Airfryers and Juicers for a healthier cooking approach. Enjoy crispy dishes with less oil using our Airfryers, and create refreshing, nutrient-packed juices with ease using our Juicers. Sleek Design, Lasting Impressions: Philips kitchenware not only excels in functionality but also adds a touch of elegance to your kitchen. With modern designs and premium materials, our appliances seamlessly blend style with substance. Our kitchenware is crafted to meet your cooking needs while ensuring durability and long-lasting performance. \nUpgrade your kitchen with Philips – where innovation meets style. Explore our range of kitchenware today and discover the joy of cooking with precision and convenience. Philips, transforming kitchens for a better culinary experience.',
        3, -- userId Philips
        'https://img.freepik.com/free-photo/healthy-meal-preparation-rustic-domestic-kitchen-generated-by-ai_188544-26855.jpg?t=st=1706670340~exp=1706673940~hmac=57ab56c2484a0e9db62779449b2b08c432e1b38703b8be467a9ac92c59beefe2&w=1060',
        'Author : vecstock, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '2',
        '2024-01-10 15:45:00',
        'IKEA',
        'Elevate Your Culinary Space with IKEA Kitchenware',
        'Unleash your inner chef with exceptional range of kitchenware from IKEA. Elevate your culinary space with stylish and functional tools designed to make cooking a joy. Quality Cookware: IKEA offers a diverse collection of cookware crafted with quality materials. From durable pots and pans to precision kitchen utensils, each piece is designed to enhance your cooking experience. Organize with Style: Transform your kitchen into an organized haven with storage solutions. Trendy Tableware: Serve your culinary creations with flair using trendy tableware from IKEA. From elegant dinner sets to vibrant serving dishes, discover tableware that complements your personal style. Affordable Luxury: Enjoy luxury without the hefty price tag. Our kitchenware combines affordability with sophistication, allowing you to create a stylish and functional kitchen on any budget. Explore the IKEA Kitchenware Collection today and redefine your culinary space.',
        4, -- userId IKEA
        'https://img.freepik.com/premium-photo/kitchen-with-pots-pans-counter-green-apple-side_889227-22098.jpg?w=1060',
        'Author : outkassdesign, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '3',
        '2023-03-10 09:30:00',
        'OpenTrolley',
        'Dive into Culinary Adventures with OpenTrolley Cookbooks',
        'Embark on a culinary journey with extensive collection of cookbooks from OpenTrolley. Whether you are a seasoned chef or a kitchen novice, discover inspiration and expertise within the pages of these culinary treasures. Diverse Culinary Genres: OpenTrolley brings you a diverse range of cookbooks covering various cuisines, dietary preferences, and cooking skill levels. From international flavors to healthy living, find the perfect cookbook to suit your culinary interests. \nExpert Tips and Techniques: Enhance your cooking skills with expert tips and techniques shared by renowned chefs and culinary experts. OpenTrolley cookbooks offer a wealth of knowledge, making every recipe a learning experience. Specialized Dietary Choices: Explore cookbooks catering to specialized dietary choices, including vegetarian, vegan, gluten-free, and more. OpenTrolley ensures that everyone can enjoy the pleasure of cooking, regardless of dietary restrictions. \nCurated Collections: Discover curated collections of cookbooks that take you on thematic journeys, from baking extravaganzas to quick and easy weeknight dinners. OpenTrolley makes it easy to find cookbooks that align with your specific culinary interests. The Joy of Gifting: Share the joy of cooking by gifting OpenTrolley cookbooks to friends and family. Explore the world of culinary literature with OpenTrolley Cookbooks and elevate your kitchen adventures.',
        23, -- userId OpenTrolley
        'https://img.freepik.com/premium-photo/process-cooking-document-various-stages-food-preparation-kitchen_977107-1249.jpg?w=740',
        'Author : drakensang, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '4',
        '2023-05-13 10:30:00',
        'PenguinRandomHouse',
        'Explore Culinary Worlds: Penguin Random House Cookbook Collection',
        'Dive into a world of culinary delights with the Penguin Random House Cookbook Collection. Our curated selection of cookbooks spans diverse cuisines, culinary techniques, and skill levels. Our collection offers a treasure trove of recipes, tips, and inspiration. Discover the art of cooking through the eyes of renowned chefs and culinary experts. From mouthwatering desserts to savory main courses, each cookbook is a culinary journey waiting to be explored. Enhance your kitchen adventures with the Penguin Random House Cookbook Collection today!',
        24, -- userId PenguinRandomHouse
        'https://img.freepik.com/premium-photo/print-recipe-book-with-fresh-herbs-spices-wooden-background_176841-24644.jpg?w=1380',
        'Author : 8icons, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '5',
        '2023-07-10 11:30:00',
        'CulinaryCrafts',
        'Essential Kitchen Gadgets: Must-Haves for Every Chef',
        'Explore the world of culinary craftsmanship with essential kitchen gadgets. CulinaryCrafts brings you a curated list of must-have tools to elevate your cooking experience. From high-quality knives to innovative cooking utensils, discover the key elements that every chef needs in their kitchen.',
        21, -- userId
        'https://img.freepik.com/free-photo/healthy-cooking-modern-domestic-kitchen-indoors-generated-by-ai_24640-87927.jpg?t=st=1706874662~exp=1706878262~hmac=8bc6946595b31303b9031a48030ff431d83b5db801ad0126230508bc676cb619&w=1060',
        'Author : stockgiu, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '6',
        '2023-12-15 14:00:00',
        'FlavorsOfWorld',
        'Culinary Journey Through International Cookbooks',
        'Embark on a flavorful journey with international cookbooks. FlavorsOfWorld presents a collection of cookbooks that transport you to different corners of the globe. From Italian pasta to Japanese sushi, explore diverse cuisines and bring culinary richness to your kitchen.',
        21, -- userId
        'https://img.freepik.com/free-vector/hand-drawn-italian-cuisine_23-2149341154.jpg?w=740&t=st=1707890224~exp=1707890824~hmac=55e6f3a2c85ff1fa8644e37a9873ba7e94f2b0f953ed51602d02a8f1d5a836a5',
        'Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '7',
        '2023-12-17 16:00:00',
        'HomeDecorInspire',
        'Spruce Up Your Kitchen: Creative Decor Ideas',
        'Transform your kitchen into a stylish haven with creative decor ideas. HomeDecorInspire brings you tips on enhancing the aesthetics of your kitchen space. From vibrant wall art to functional storage solutions, discover ways to infuse personality and charm into your culinary haven.',
        21, -- userId
        'https://img.freepik.com/free-photo/modern-kitchen-interior-design_23-2150772053.jpg?t=st=1707890323~exp=1707893923~hmac=8af89928b3fe96388142779aad9337b317a92cacc18178b6aedaf183106d3208&w=996',
        'Designed by Freepik',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    (
        '8',
        '2023-12-18 16:00:00',
        'ModernChef',
        'Smart Kitchen Appliances: Embracing Technology in the Culinary Space',
        'Discover the future of cooking with smart kitchen appliances. ModernChef introduces you to innovative gadgets that leverage technology to simplify your culinary endeavors. From smart ovens to connected blenders, explore how the modern kitchen is evolving with cutting-edge technology.',
        21, -- userId
        'https://img.freepik.com/free-photo/elegant-modern-kitchen-with-stainless-steel-appliances-generated-by-ai_188544-26862.jpg?t=st=1707890271~exp=1707893871~hmac=efc0d8ce84fd9322e0512a7dd230249580081698ecf728e1194b1acf8b8deefe&w=1060',
        'Author: vecstock, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '9',
        '2022-12-18 16:00:00',
        'HealthyEats',
        'Nourishing Recipes for a Healthy Lifestyle: A Cookbook Review',
        'Explore a collection of nourishing recipes designed for a healthy lifestyle. HealthyEats reviews a cookbook filled with delicious and nutritious dishes that promote overall well-being. From plant-based meals to wholesome desserts, discover the art of cooking for a healthier you.',
        25, -- userId
        'https://www.freepik.com/free-photo/top-view-empty-menu-with-tomatoes-salad_7770971.htm#query=recipe%20cookbook&position=3&from_view=search&track=ais&uuid=932c26a4-5ecb-403c-a356-e81943a1b733',
        'Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '10',
        '2023-04-18 20:00:00',
        'HomeGardenVibes',
        'Herb Gardening 101: Tips for Growing Fresh Herbs at Home',
        'Transform your kitchen with a DIY herb garden and infuse fresh, aromatic flavors into your dishes. HomeGardenVibes provides a guide on creating a simple yet vibrant herb garden right in your home. Learn about the best herbs for indoor gardening, tips for care and maintenance, and creative ways to incorporate homegrown herbs into your favorite',
        24, -- userId
        'https://img.freepik.com/premium-vector/watercolkor-background-with-culinary-herbs-plants_154848-268.jpg?w=996',
        'Author: user6633193, Designed by Freepik',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    (
        '11',
        '2023-06-18 21:00:00',
        'CulinaryArtistry',
        'Artisanal Kitchenware: Elevate Your Cooking with Handcrafted Tools',
        'Immerse yourself in the world of artisanal kitchenware. CulinaryArtistry explores the beauty of handcrafted tools that bring a touch of craftsmanship to your culinary space. From hand-forged knives to bespoke utensils, discover how artisanal kitchenware combines functionality with exquisite craftsmanship.',
        26, -- userId
        'https://www.freepik.com/free-photo/human-hand-cutting-mushroom-making-delicious-pasta-wooden-surface_4165862.htm#query=handcrafted%20kitchen%20knives&position=19&from_view=search&track=ais&uuid=42585427-0fd6-4c52-bbc1-9880b2538694',
        'Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '12',
        '2023-06-19 21:00:00',
        'ChefEssentials',
        'Professional Culinary Tools: A Guide for Aspiring Chefs',
        'Embark on a culinary journey with ChefEssentials as we unveil the essential tools for aspiring chefs. From high-quality chef knives to precision measuring instruments, explore the professional culinary tools that every kitchen should have for achieving perfection in your culinary creations.',
        27, -- userId
        'http://tinyurl.com/5fxumyzh',
        'Author: mdjaff, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '13',
        '2023-08-19 21:00:00',
        'GlobalFlavorss',
        'Culinary Adventures Across Continents: A Cookbook Showcase',
        'Join GlobalFlavors on a culinary adventure as we showcase a collection of cookbooks that take you on a journey across continents. From spicy dishes of Asia to hearty meals of Europe, explore diverse flavors and expand your cooking repertoire with these delightful culinary treasures.',
        21, -- userId
        'https://img.freepik.com/free-vector/recipe-book-concept-illustration_114360-7481.jpg?w=996&t=st=1707890779~exp=1707891379~hmac=49119d5677ae8d5390f6b4a06b9f7ec1da267314644d15b96874d21a9c7ac219',
        'Author: storyset, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '14',
        '2023-08-19 21:00:00',
        'CulinaryChronicles',
        'Unveiling Culinary Tales: Must-Read Cookbooks for Food Enthusiasts',
        'Join CulinaryChronicles as we unveil captivating culinary tales through must-read cookbooks. Whether you are a seasoned food enthusiast or a novice in the kitchen, these storytelling cookbooks offer a delightful blend of recipes and narratives, making your culinary journey truly memorable.',
        28, -- userId
        'https://img.freepik.com/free-vector/tiny-chefs-cooking-healthy-food-according-recipe-book_74855-15536.jpg?w=996&t=st=1707891079~exp=1707891679~hmac=f829dffa39dffc1055a8461c20ab17c7ae00d79c7459d86bf2e0562b1f19f1df',
        'Author: pch.vector, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '15',
        '2023-08-19 22:00:00',
        'KitchenVibes',
        'Unconventional Kitchen Hacks: Elevate Your Culinary Experience',
        'Dive into the world of KitchenVibes as we share unconventional kitchen hacks to elevate your culinary experience. Discover creative ways to repurpose common kitchen tools, explore time-saving cooking techniques, and embrace innovative solutions for common kitchen challenges. Transform your cooking space into a hub of creativity with these unique and practical kitchen miscellanea!',
        28, -- userId
        'https://img.freepik.com/free-psd/dinnerware-elements-wooden-shelf_176382-1728.jpg?w=1060&t=st=1707891343~exp=1707891943~hmac=27481b3b3aca2f6eae40998d165d1a539970787019bd154f807a096bc53e72a5',
        'Author: alexandercho, Designed by Freepik',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    (
        '16',
        '2023-08-20 22:00:00',
        'KitchenEssentials',
        'Essential Tools for Every Kitchen: A Comprehensive Guide',
        'Explore comprehensive guide to essential tools for every kitchen. From versatile knives to efficient gadgets, make your cooking endeavors seamless and enjoyable.',
        23, -- userId
        'https://img.freepik.com/free-photo/chef-s-male-hand-cutting-tomato-with-sharp-knife-board_23-2147863736.jpg?w=996&t=st=1707891488~exp=1707892088~hmac=a8e49bd313bb1afc3c77b0e883a23c520bba3fac100f2ca75f30c323553fa5f1',
        'Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '17',
        '2023-03-20 22:00:00',
        'FlavorfulReads',
        'Culinary Adventures in Literature: Must-Read Cookbooks',
        'Embark on culinary adventures with FlavorfulReads as we recommend must-read cookbooks that blend the art of cooking with the joy of literature. From fictional feasts to culinary memoirs, these books will ignite your passion for both reading and cooking.',
        23, -- userId
        'https://img.freepik.com/free-vector/fresh-cook_1042-280.jpg?w=826&t=st=1707050845~exp=1707051445~hmac=4a640647c7d665194274e0846038f9552917187af680efb0e885309a6b8cd0e6',
        'Author: elsystudio, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '18',
        '2023-03-20 22:00:00',
        'KitchenInnovations',
        'Innovative Kitchen Gadgets: Enhance Your Culinary Journey',  -- Title
        'Discover the latest in kitchen innovations with KitchenInnovations. From smart appliances to ingenious gadgets, we unveil a world of innovative tools that can enhance your culinary journey and simplify your time in the kitchen.',
        24, -- userId
        'https://img.freepik.com/free-photo/man-looking-tablet-with-intelligent-software-placed-kitchen-table-controlling-light-with-high_482257-2843.jpg?w=1380&t=st=1707891672~exp=1707892272~hmac=c22434716aec9cbc1db614748864792d3fe28a941227ccf6be04d5616429a0a0',
        'Author: DC Studio, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '19',
        '2024-02-05 22:00:00',
        'ChicCookware',
        'Elevate Your Style: Chic Cookware for Modern Kitchens', -- Title
        'ChicCookware presents a collection of stylish cookware designed to elevate the aesthetic of modern kitchens. From sleek pots and pans to elegant utensils, explore how these chic additions can transform your cooking space into a fashionable culinary haven.',
        25, -- userId
        'https://img.freepik.com/free-photo/overhead-shot-frying-pan-its-lid-black-table_181624-14812.jpg?w=996&t=st=1707892169~exp=1707892769~hmac=b327bad3c9421cf40a256df1e3e42a2b0d6d06386a7cf9e501bbe59461cb3343',
        'Author: wirestock, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '20',
        '2024-02-07 11:00:00',
        'CulinaryEscape',
        'Global Flavors on Your Shelf: Explore International Cookbooks', -- Title
        'Join CulinaryEscape on a journey to explore international flavors through carefully curated cookbooks. From Asian delicacies to European classics, these cookbooks bring global culinary experiences to your kitchen, allowing you to create diverse and delicious meals at home.',
        26, -- userId
        'https://img.freepik.com/free-photo/rustic-wood-tray-holds-gourmet-appetizers-indoors-generated-by-ai_188544-13380.jpg?w=1060&t=st=1707051497~exp=1707052097~hmac=2ff8b109775d45a9b8dc416c76d89b1bcded9b1f1ffc87ce7d343aecff6a26d7',
        'Author: Vecstock, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '21',
        '2024-02-07 11:00:00',
        'WellnessWonders',
        'Holistic Wellness: Integrating Mind, Body, and Kitchen', -- Title
        'Embark on a journey of holistic wellness with WellnessWonders. Explore the connection between mind, body, and kitchen as we delve into mindful cooking practices, nourishing recipes, and wellness tips to enhance your overall well-being.',
        3, -- userId
        'https://img.freepik.com/free-photo/ai-generated-image-banana_23-2150682982.jpg?t=st=1707893757~exp=1707897357~hmac=01ca6fa737b11e04c2bd34db2fa762fd63f7970de7dbc402636d382ce79291ed&w=1060',
        'Designed by Freepik',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    (
        '22',
        '2024-02-07 11:00:00',
        'EcoCuisine',
        'Sustainable Kitchenware: Embracing Eco-Friendly Culinary Tools', -- Title
        'Join EcoCuisine in the journey towards sustainability. Discover a range of eco-friendly kitchenware designed to minimize environmental impact. From bamboo utensils to recycled materials, explore how sustainable choices in the kitchen can contribute to a greener lifestyle.',
        3, -- userId
        'https://img.freepik.com/free-photo/top-view-wooden-spoons-collection_23-2148677992.jpg?w=1380&t=st=1707062250~exp=1707062850~hmac=0efe6151c7dcbcd5f7e12cc16d8ad8cb612dbd90b3e26b202ebe00a2249e99b4',
        'Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '23',
        '2024-01-07 11:00:00',
        'FlavorsOfCulture',
        'Culinary Passport: Exploring Diverse Flavors in Cookbooks', -- Title
        'Take a culinary journey with FlavorsOfCulture as we explore cookbooks that act as passports to diverse flavors. From regional cuisines to international fusion, these cookbooks offer a taste of cultural diversity, allowing you to bring global flavors to your home kitchen.',
        25, -- userId
        'https://img.freepik.com/premium-photo/sweet-globe-manipulation-background-with-cupcakes-representing-global-desserts-culture_674594-5287.jpg?w=1060',
        'Author: 3DdarkZone, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '24',
        '2023-01-07 11:00:00',
        'CulinaryCreativity',
        'Unleashing Creativity in the Kitchen: Beyond Recipes', -- Title
        'Join CulinaryCreativity in unlocking the art of culinary expression. Explore creative approaches in the kitchen beyond traditional recipes, from food styling to personalized presentations. Unleash your inner chef and transform your kitchen into a canvas of culinary creativity.',
        26, -- userId
        'https://img.freepik.com/free-photo/modern-kitchen-interior-design_23-2150772051.jpg?t=st=1707894018~exp=1707897618~hmac=d87808b47848b21c408036ee07d428e613e5acf1176f4f75bd118970a4e7fcda&w=996',
        'Designed by Freepik',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    (
        '25',
        '2023-07-07 11:00:00',
        'ModernCulinarySpaces',
        'Contemporary Kitchenware: Blending Style and Functionality', -- Title
        'Explore the fusion of style and functionality with ModernCulinarySpaces. Dive into a world of contemporary kitchenware that not only enhances your cooking experience but also elevates the aesthetics of your culinary space. Discover the perfect blend of modern design and practical utility.',
        4, -- userId
        'http://tinyurl.com/dknj9ve6',
        'Author: macrovector, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '26',
        '2023-07-07 11:00:00',
        'KitchenInnovator',
        'Smart Kitchen Gadgets: Revolutionizing Culinary Experiences', -- Title
        'Join KitchenInnovator on a journey through the latest smart kitchen gadgets. Explore how technology is revolutionizing culinary experiences with innovative tools and appliances. From smart ovens to connected utensils, discover the future of cooking in your modern kitchen.',
        4, -- userId
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Jason Briscoe, Designed by Unsplash',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '27',
        '2023-07-08 11:00:00',
        'CulinaryExplorer',
        'Global Flavors on Your Bookshelf: Must-Have Cookbooks', -- Title
        'Embark on a global culinary adventure with CulinaryExplorer. Discover a curated list of must-have cookbooks that bring diverse flavors from around the world to your kitchen. From traditional recipes to contemporary twists, these cookbooks are essential for any culinary enthusiast.',
        25, -- userId
        'https://img.freepik.com/free-vector/cartoon-recipe-note-with-food_52683-73978.jpg?w=1380&t=st=1707894569~exp=1707895169~hmac=24598caeb3194518cc0290144a0346e0fc786a90a1ab6fcd1d9c2e17d401aabf',
        'Author: pikisuperstar, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '28',
        '2023-07-08 11:00:00',
        'HomeHarmony',
        'Creating a Cozy Kitchen Ambiance: Simple Tips and Tricks', -- Title
        'Transform your kitchen into a cozy haven with HomeHarmony. Explore simple tips and tricks to enhance the ambiance of your culinary space. From lighting and decor to organizing essentials, discover how small changes can create a warm and inviting atmosphere in your home kitchen.',
        24, -- userId
        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Aaron Huber, Designed by Unsplash',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    (
        '29',
        '2023-06-08 11:00:00',
        'CulinaryCraftsmanship',
        'Handcrafted Kitchenware: Elevating Culinary Artistry', -- Title
        'Discover the artistry of handcrafted kitchenware with CulinaryCraftsmanship. Explore a collection of meticulously crafted utensils, cookware, and accessories designed to elevate your culinary skills. From artisanal knives to handmade pottery, embrace the beauty of craftsmanship in your kitchen.',
        22, -- userId
        'https://img.freepik.com/free-photo/front-view-wooden-spoons-with-pots-cinnamon-dark-wall-color-seasoning-salt-food-cutlery-photo_179666-17650.jpg?w=996&t=st=1707894797~exp=1707895397~hmac=5e4f4969fbeddca9d62308e79a61a339a1836f07344c81a79a4fb34e5a27fc07',
        'Author: mdjaff, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '30',
        '2023-03-08 11:00:00',
        'CulinaryCreatures',
        'Whimsical Cookbooks for Culinary Adventures with Kids', -- Title
        'Embark on whimsical culinary adventures with CulinaryCreatures. Explore a collection of cookbooks designed for young chefs, filled with playful recipes and creative kitchen activities. From edible art projects to delightful desserts, bring joy and creativity to your family kitchen.',
        21, -- userId
        'https://images.unsplash.com/photo-1612031736184-77bc60f94c06?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Mike Gattorna, Designed by Unsplash',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '31',
        '2023-03-08 12:00:00',
        'HealthFoodie',
        'Healthy Meal Prep Cookbook', -- Title
        'Dive into the world of meal prepping with our cookbook featuring nutritious and easy-to-make recipes. Simplify your meal planning and enjoy delicious, homemade meals every day.',
        3, -- userId
        'https://images.unsplash.com/photo-1495546968767-f0573cca821e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Dan Gold, Designed by Unsplash',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '32',
        '2023-02-08 12:00:00',
        'WorldCuisine',
        'Global Flavors: International Cuisine Cookbook', -- Title
        'Embark on a culinary journey around the world with our cookbook featuring diverse and authentic recipes from various cultures. Experience the rich flavors and aromas of international cuisine from the comfort of your kitchen.',
        21, -- userId
        'https://img.freepik.com/free-vector/poster-with-world-food-day-concept-design-advertise-leaflet-watercolor_83728-4276.jpg?w=740&t=st=1707225167~exp=1707225767~hmac=82a4842360eccbcb4bea0973dbeca1278a609ab612ff9708cd12fe81d3f204df',
        'Author: photographeeasia, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '33',
        '2023-02-08 12:00:00',
        'ChefEssentials',
        'Essential Kitchen Gadgets for Home Chefs', -- Title
        'Upgrade your kitchen with our selection of smart appliances designed to make cooking and meal preparation easier than ever. From WiFi-enabled ovens to smart refrigerators, revolutionize your kitchen today!',
        21, -- userId
        'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Lotus Design N Print, Designed by Unsplash',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '34',
        '2023-02-08 12:00:00',
        'KitchenGizmos',
        'Cutting-Edge Kitchen Tools for Modern Homes', -- Title
        'Discover the latest cutting-edge kitchen tools and gadgets designed to revolutionize your cooking experience. From smart appliances to innovative utensils, equip your kitchen with the best.',
        22, -- userId
        'https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Frames For Your Heart, Designed by Unsplash',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '35',
        '2023-02-07 12:00:00',
        'HomeAndBeyond',
        'Organize Your Kitchen: Tips for a Clutter-Free Space', -- Title
        'Transform your kitchen into a organized haven with these practical tips. From efficient storage solutions to decluttering strategies, create a space that inspires creativity and makes every cooking experience a joy.',
        23, -- userId
        'https://images.unsplash.com/photo-1556910096-6f5e72db6803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Edgar Castrejon, Designed by Unsplash',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    (
        '36',
        '2023-04-20 10:00:00',
        'KitchenAdventures',
        '10 Creative Ways to Use Leftover Ingredients',
        'Reduce food waste and get creative in the kitchen with these 10 ideas for using leftover ingredients. From homemade stocks to inventive salads, make the most out of every ingredient!',
        24, -- userId
        'http://tinyurl.com/y624346v',
        'Author: timolina, Designed by Freepik',
        3 -- blog_type_id for miscellaneous
    ),
    (
        '37',
        '2023-04-20 10:00:00',
        'TastyTreats',
        'Quick & Easy Weeknight Dinners Cookbook',
        'Simplify your weeknight meals with our collection of quick and easy dinner recipes. From one-pan wonders to simple stir-fries, discover delicious meals that can be whipped up in no time.',
        24, -- userId
        'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Pablo Merchán Montes, Designed by Unsplash',
        1 -- blog_type_id cookbook
    ),
    (
        '38',
        '2023-04-21 10:00:00',
        'HealthyEats',
        'Plant-Based Cooking: A Beginner Guide',
        'Discover the world of plant-based cooking with our guide. Learn how to create flavorful and nutritious meals using fruits, vegetables, grains, and legumes.',
        26, -- userId
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Anna Pelzer, Designed by Unsplash',
        1 -- blog_type_id cookbook
    ),
    (
        '39',
        '2023-05-21 10:00:00',
        'ChefCreations',
        'Scrumptious Seafood Recipes for Summer Gatherings',
        'Impress your guests with our collection of scrumptious seafood recipes perfect for summer gatherings. From grilled shrimp skewers to refreshing ceviche, elevate your outdoor dining experience with these delicious dishes!',
        26, -- userId
        'https://plus.unsplash.com/premium_photo-1693222065169-e447289b609d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Karolina Grabowska, Designed by Unsplash',
        1 -- blog_type_id cookbook
    ),
    (
        '40',
        '2023-05-21 10:00:00',
        'KitchenKorner',
        'Upgrade Your Culinary Space with Modern Kitchen Gadgets',
        'Transform your kitchen into a modern culinary haven with our selection of innovative kitchen gadgets. From smart sous vide machines to high-speed blenders, discover the latest tools to enhance your cooking experience!',
        27, -- userId
        'http://tinyurl.com/4ud56mnh',
        'Designed by Freepik',
        2 -- blog_type_id kitchenware
    ),
    (
        '41',
        '2023-05-21 11:00:00',
        'MasterfulRecipes',
        'Delectable Desserts: A Sweet Symphony from MasterfulRecipes',
        'Satisfy your sweet cravings with MasterfulRecipes! Indulge in a sweet symphony of flavors with our collection of cookbooks that includes delectable desserts, meticulously crafted to delight your taste buds.',
        28, -- userId
        'https://img.freepik.com/free-photo/hot-chocolate-with-cake-muffin_23-2148019542.jpg?w=996&t=st=1707302344~exp=1707302944~hmac=82f7cb983f2f737d698d436d0eccdeea47fe5ea3a0525d8da1f08aaec130f386',
        'Designed by Freepik',
        1 -- blog_type_id cookbook
    ),
    (
        '42',
        '2023-05-21 11:00:00',
        'CuisineCrafters',
        'Elevate Your Cooking Experience with CuisineCrafters Kitchenware',
        'Unleash your culinary creativity with CuisineCrafters! Elevate your cooking experience with our premium kitchenware collection, designed to inspire home chefs to create delicious masterpieces.',
        21, -- userId
        'https://images.unsplash.com/photo-1580929753603-10519c6e480a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Janko Ferlič, Designed by Unsplash',
        2 -- blog_type_id kitchenware
    ),
    (
        '43',
        '2023-05-22 11:00:00',
        'EpicureanEats',
        'Gourmet Delights: Exquisite Recipes from EpicureanEats',
        'Embark on a culinary journey with EpicureanEats! Discover exquisite recipes that tantalize the taste buds and elevate everyday meals into gourmet delights.',
        21, -- userId
        'https://images.unsplash.com/photo-1616669944447-d65d41a222bd?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Delightin Dee, Designed by Unsplash',
        1 -- blog_type_id cookbook
    ),
    (
        '44',
        '2023-05-22 12:00:00',
        'GlobalGastronomy',
        'Around the World in 10 Dishes: GlobalGastronomy Cookbook',
        'Embark on a culinary adventure with GlobalGastronomy! Explore diverse cuisines from around the world through our collection of 10 authentic dishes that capture the essence of global gastronomy.',
        21, -- userId
        'https://img.freepik.com/free-photo/traditional-mexican-food-world-tourism-day_23-2149114019.jpg?w=996&t=st=1707303173~exp=1707303773~hmac=3b573dc608b22f7a3f6342c1b111476c2116f01692ac60a011ca80df3018ff8b',
        'Designed by Freepik',
        1 -- blog_type_id cookbook
    ),
    (
        '45',
        '2024-01-22 12:00:00',
        'ModernKitchen',
        'Sleek and Stylish: ModernKitchen Contemporary Cookware Collection',
        'Upgrade your kitchen with contemporary cookware collection! Discover sleek and stylish pots, pans, and gadgets that bring modern elegance to your culinary space.',
        21, -- userId
        'https://img.freepik.com/free-vector/kitchen-tools-with-vegetables_1284-11446.jpg?w=740&t=st=1707303302~exp=1707303902~hmac=3aa385b0a87b1650c345c1d1de3e8e23e0eb6cad6406d9a3d7bf4a6b016a4c12',
        'Author: Macrovector, Designed by Freepik',
        2 -- blog_type_id kitchenware
    ),
    (
        '46',
        '2024-01-22 12:00:00',
        'SavorTheFlavors',
        'Flavors of the Mediterranean: SavorTheFlavors Cookbook',
        'Experience the taste of the Mediterranean with SavorTheFlavors! Delight in the rich flavors and vibrant ingredients of Mediterranean cuisine with our collection of authentic recipes.',
        21, -- userId
        'https://plus.unsplash.com/premium_photo-1667215177072-6539146bc577?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Marios Gkortsilas, Designed by Unsplash',
        1 -- blog_type_id cookbook
    ),
    (
        '47',
        '2024-01-22 12:00:00',
        'MasterChefTools',
        'MasterChefTools: Tools of the Trade for Culinary Mastery',
        'Equip yourself with the tools of culinary mastery from MasterChefTools! Discover professional-grade kitchenware and gadgets that empower you to unleash your inner chef.',
        22, -- userId
        'https://images.unsplash.com/photo-1556909114-44e3e70034e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Becca Tapert, Designed by Unsplash',
        2 -- blog_type_id kitchenware
    ),
    (
        '48',
        '2024-01-22 12:00:00',
        'Caraway',
        'Enhance Your Cooking Experience with Caraway Kitchenware',
        'Discover the joy of cooking with Caraway! Our premium kitchenware sets are designed to make cooking easier, healthier, and more enjoyable. From non-stick ceramic cookware to ergonomic utensils, each product is crafted with quality and functionality in mind, ensuring that every meal you prepare is a culinary masterpiece.',
        22, -- userId
        'https://images.unsplash.com/photo-1556910148-3adb7f0c665a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Edgar Castrejon, Designed by Unsplash',
        2 -- blog_type_id kitchenware
    ),
    (
        '49',
        '2024-01-29 12:00:00',
        'EpicureanReads',
        'Savor the Flavor: EpicureanReads Cookbook Collection',
        'Embark on a culinary journey with EpicureanReads! Explore our curated collection of cookbooks filled with tantalizing recipes and culinary inspiration. From gourmet meals to everyday delights, our cookbooks are your guide to savoring the flavor of every dish.',
        22, -- userId
        'https://images.unsplash.com/photo-1588960952097-4cf35f0a0306?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Brett Jordan, Designed by Unsplash',
        1 -- blog_type_id cookbook
    ),
    (
        '50',
        '2023-01-29 12:00:00',
        'HomeChefHub',
        'Clever Kitchen Hacks Every Home Chef Should Know',
        'Unlock the secrets of the kitchen with these 10 clever hacks! From reviving wilted herbs to rescuing over-salted dishes, these kitchen tricks will save you time and hassle while elevating your cooking game. Discover ingenious ways to organize your pantry, simplify meal prep, and make the most of your kitchen space. Whether you are a novice cook or a seasoned chef, these hacks will help you navigate the kitchen with confidence and creativity.',
        22, -- userId
        'https://img.freepik.com/free-vector/woman-standing-near-stove-kitchen-holding-spoon_74855-20425.jpg?w=826&t=st=1707304750~exp=1707305350~hmac=0202000d1979999c2442a80d81a6c4ab54706522d10050d0ad75bd0a4bcd0945',
        'Author: pch.vector, Designed by Freepik',
        3 -- blog_type_id for miscellaneous
    ),
    (
        '51',
        '2023-01-29 12:00:00',
        'Le Creuset',
        'Clever Kitchen Hacks Every Home Chef Should Know',
        'Discover the artistry of cooking with our premium cookware collection. From iconic Dutch ovens to versatile skillets, each piece is meticulously crafted to elevate your culinary creations. Explore our vibrant range of colors and timeless designs, and unlock a world of culinary possibilities in your kitchen.',
        22, -- userId
        'https://img.freepik.com/free-vector/kitchenware-collection_1308-900.jpg?w=740&t=st=1707736917~exp=1707737517~hmac=1a306a740d5cc62999acf5386e93b966089ee64d96527fbc5a387585acf2ab51',
        'Author: brgfx, Designed by Freepik',
        2 -- blog_type_id kitchenware
    ),
    (
        '52',
        '2023-01-29 12:00:00',
        'NutriBullet',
        'Wholesome Cooking Made Easy with NutriBullet Blenders',
        'Blend your way to healthier meals with NutriBullet blenders. Whether you are whipping up nutrient-packed smoothies or creamy soups, our powerful blenders make meal preparation effortless. Join the NutriBullet community and embark on a journey towards a healthier, happier you.',
        24, -- userId
        'https://img.freepik.com/free-vector/flat-smoothies-blender-glass-illustration_23-2148959566.jpg?w=740&t=st=1707895796~exp=1707896396~hmac=40978dc5cbb185d60534ace4203f61d0579fe53f83f3d5cc83f4e86baee2f348',
        'Designed by Freepik',
        2 -- blog_type_id kitchenware
    ),
    (
        '53',
        '2023-01-29 12:00:00',
        'Test Kitchen',
        'Master the Art of Baking with Test Kitchen Cookbooks',
        'Delve into the world of baking with Test Kitchen cookbooks, renowned for their meticulous recipe testing and foolproof techniques. Whether you are a novice baker or a seasoned pastry chef, our comprehensive collection offers something for everyone. From decadent desserts to savory breads, each recipe is expertly crafted to ensure success in the kitchen. Join the Test Kitchen community and elevate your baking skills to new heights.',
        28, -- userId
        'https://img.freepik.com/free-vector/flat-icon-pastry-set_1284-14768.jpg?w=740&t=st=1707737206~exp=1707737806~hmac=c92a8f9091ef7abe1d8e5502febc215b6f29dda94906a899d75ab6790fb4ce9c',
        'Author: macrovector, Designed by Freepik',
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
    ('Highly recommended',                                        2.0, '10', 4),
    ('The blog post is very descriptive and informative.',        5.0, '11', 5),
    ('I love this blog post!',                                    4.0, '12', 6),
    ('The blog post is very descriptive and informative.',        5.0, '11', 7),
    ('I love this blog post!',                                    4.0, '12', 7),
    ('The blog post is very descriptive and informative.',        5.0, '11', 8),
    ('I love this blog post!',                                    5.0, '12', 9),
    ('The blog post is very descriptive and informative.',        5.0, '11', 10),
    ('I love this blog post!',                                    5.0, '12', 11),
    ('This is very awesome',                                      5.0, '7', 12),
    ('The blog post is very descriptive and informative.',        5.0, '8', 13),
    ('I love this blog post!',                                    4.0, '9', 14),
    ('This blog is very useful',                                  5.0, '10', 15),
    ('I love this blog post!',                                    5.0, '12', 16),
    ('This is very awesome',                                      5.0, '7', 17),
    ('The blog post is very descriptive and informative.',        5.0, '8', 18),
    ('I love this blog post!',                                    4.0, '9', 19),
    ('This blog is very useful',                                  5.0, '10', 20),
    ('I love this blog post!',                                    5.0, '12', 21),
    ('This is very awesome',                                      5.0, '7', 22),
    ('The blog post is very descriptive and informative.',        5.0, '8', 23),
    ('I love this blog post!',                                    4.0, '9', 24),
    ('This blog is very useful',                                  5.0, '10', 25),
    ('I love this blog post!',                                    5.0, '12', 26),
    ('This is very awesome',                                      5.0, '7', 27),
    ('The blog post is very descriptive and informative.',        5.0, '8', 28),
    ('I love this blog post!',                                    4.0, '9', 29),
    ('This blog is very useful',                                  5.0, '10', 30),
    ('I love this blog post!',                                    5.0, '12', 31),
    ('This is very awesome',                                      5.0, '7', 32),
    ('The blog post is very descriptive and informative.',        5.0, '8', 33),
    ('I love this blog post!',                                    4.0, '9', 34),
    ('This blog is very useful',                                  5.0, '10', 35),
    ('I love this blog post!',                                    5.0, '12', 36),
    ('This is very awesome',                                      5.0, '7', 37),
    ('The blog post is very descriptive and informative.',        5.0, '8', 38),
    ('I love this blog post!',                                    4.0, '9', 39),
    ('This blog is very useful',                                  5.0, '10', 40),
    ('I love this blog post!',                                    5.0, '12', 41),
    ('This is very awesome',                                      5.0, '7', 42),
    ('The blog post is very descriptive and informative.',        5.0, '8', 43),
    ('I love this blog post!',                                    4.0, '9', 44),
    ('This blog is very useful',                                  5.0, '10', 45),
    ('I love this blog post!',                                    5.0, '12', 46),
    ('This is very awesome',                                      5.0, '7', 47),
    ('The blog post is very descriptive and informative.',        5.0, '8', 48),
    ('I love this blog post!',                                    4.0, '9', 49),
    ('This blog is very useful',                                  5.0, '10', 50);

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
        'healthhub',  -- Publisher
        'Figuring out Your Daily Calorie Intake',  -- Title
        'Being conscious of your calorie intake can help you maintain a healthy weight, or lose a few extra pounds if necessary.
         The average recommended daily caloric intake is 2200 calories for males and 1800 calories for females.
         \nOne of the simplest and most effective methods for controlling your calorie intake is portion control. Often, we eat what is on our plate rather than what our body needs.
         Consuming the right number of calories is a good first step towards achieving a healthier body. However, not all calories are equal. Keeping to the calorie count on a diet consisting of only sugary cakes, meat dishes, or a glass of wine is far from ideal. This is because your body needs a variety of vitamins and minerals, as well as fibre to function properly.
         \nEating healthy is not limited to eating the right amount and the right mix. It is also important for optimum nutrition to choose healthy foods prepared with healthier options and ingredients.
         \nFor example, wholegrains are healthier than refined grains as they contain more vitamins, antioxidants and fibre. In addition, they also keep you filling full for longer, which reduce the risk of overeating. Choosing healthier cooking oils are also important.
         If fat loss is one of your weight loss goals, merely controlling your calorie intake will not be enough. Diet and exercise are pertinent when it comes to healthy weight loss.You should be doing a combination of cardio and strength-training exercises, which are useful in losing fat as well as gaining muscle mass.',
        3, -- userID
        'https://img.freepik.com/free-photo/calories-nutrition-food-exercise-concept_53876-133971.jpg?w=1060&t=st=1707889671~exp=1707890271~hmac=427b505a764fd8bed74a9e6ec2377d9f8578d21610ef4f26658494c15902b667',
        'Author : rawpixel.com, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '2',
        '2024-01-20 18:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        '5 Good Eating Habits to Achieve Your Health Goals',  -- Title
        'When it comes to health, we often have fitness and food goals like losing weight, exercising regularly, eating healthier or making better food choices. We can break down these health goals into smaller and more realistic steps - steps that are easier to measure and track.
         Here are 5 good eating habits which will definitely help us to achieve our food goals:
         \n#1 Choose Water \nSet a goal to drink water instead of sugar-sweetened drinks. To make this more measurable, write down how often you will make this choice.
         \n#2 Eat Slowly and Mindfully \nIt takes about 20 minutes for your brain to send out signals that you are full. Eat slowly, pay attention to what we are eating and how much. To make this more measurable, write down how often you will make an effort to take at least a half hour to finish your meal.
         \n#3 Stick to One Serving \nFor those of us who love having seconds, challenge yourself to stick to one serving and also standard portion sizes.
         \n#4 Eat Fruit and Vegetables \nSet a goal to fill half your plate with fruit and vegetables at every meal. Fruit and vegetables are naturally low in saturated and trans fat, and rich in dietary fibre, vitamins and minerals.
         \n#5 Swap to Wholegrains \nEating wholegrain foods such as brown rice, wholemeal bread can help reduce the risk of developing heart disease and diabetes. They can also help with weight management because they keep you feeling full longer and reduce the need for snacking.',
        3,
        'https://img.freepik.com/free-vector/healthy-choices-before-after-diet-results-4-flat-icons-square-composition-banner_1284-5424.jpg?t=st=1706758843~exp=1706759443~hmac=2781a669c00a887fe19e1229779c946466acdf525f70ac0b9e865ccfc36b8ed5',
        'Author : macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '3',
        '2024-01-15 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        '5 Exercises to Prevent Chronic Illnesses',  -- Title
        'Chronic illnesses such as cardiovascular (heart and blood vessel) disease, cancer and diabetes are among the most common and costly health problems in Singapore. Make your weekly workout fun with these exercises that will keep you feeling and looking in the pink of health.
         \n#1 Swimming, health benefits beyond preventing chronic conditions \nSwimming is a good physical exercise for diabetes, it is a low-impact aerobic physical activity that reduces stress on your skeletal system, making it suitable for people of all ages, as well as those recovering from injuries.
         \n#2 Cycle to lose weight and prevent chronic illnesses \nRegular aerobic exercises like cycling has many health benefits. Engaging in regular aerobic exercises improves cardiovascular fitness and decreases stress and body fat levels. Cycling is a great way to let go of any tension accumulated at work.
         \n#3 Strength Training, a weatherproof physical activity \nStrength training a few times a week will keep you strong and healthy.
         For healthy bone and muscles, you are recommended to partake in bone and muscle strengthening exercises at least 2-3 days a week. Hitting the gym does make it easy to fit workouts into your schedule.
         \n#4 Yoga for a balance of strength and flexibility \nDoing yoga a few times a week will keep you healthy. Yoga may seem meditative and relaxing, but it also requires a balance of strength and flexibility, and can prove to be a challenging workout. Beginners should start with a Hatha class to pick up the fundamental poses, before trying out more intensive and faster styles of yoga such as Vinyasa.
         \n#5 Running your way to better chronic disease prevention \nAerobic exercises like running will boost your cardiovascular health. Add some variation to your usual running routine to keep things interesting. One option is to include interval training as part of your exercise programme.
         \nLastly, take care of yourself by listening to your body, and easing up the pace if you need to.',
        3,
        'https://img.freepik.com/free-vector/healthy-lifestyle-concept_1284-14707.jpg?w=740&t=st=1707938184~exp=1707938784~hmac=1275c322edcfa1c9d1599becee809dcaca474ace54e82371c76091c2d31e0ebf',
        'Author : macrovector, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '4',
        '2024-01-16 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Fun Fruity Facts for Health',  -- Title
        'Fruits are packed with health benefits as they are naturally low in fat, calories and sodium. \nFruit also provides a rich resource of nutrients which can be seen from their bright colours! The colour, smell and taste of a fruit comes from the plant’s phytochemicals. These plant-chemicals are believed to offer a wide range of health benefits, including those with antioxidants properties, carotenoid from orange-coloured fruits, and anthocyanin from red, blue and purple coloured fruit and vegetables.
         \nIf you want to keep the doctor away, the magic number is two servings of fruits per day.
         \nHealthy Fruits to Eat \nApples — Besides being a notable source of phytonutrients and antioxidants, apples also work as a natural mouth refresher, cleaning your teeth with each bite, while leaving behind a pleasing aroma in your mouth.
         \nBananas — Bananas contain one of the highest amounts of potassium found among fruit. A medium-sized banana contains around 422mg of potassium. Potassium is an important nutrient for the functioning of muscles.
         \nBerries — Among all the fruits, berries contain the highest amount of antioxidants. The antioxidant properties of these fruit help to fight off diseases and potentially prevent cell deterioration.
         \nDurians — Durian lovers will be pleased to know that there are many health benefits of consuming this love-it-or-hate-it fruit. The fruit is full of vitamins and minerals. It is also a good source of dietary fibre. You might be surprised to know that durians actually contain zero cholesterol, since cholesterol is only found in animal products.
         \nNow that you know your fruity facts, go ahead and grab some healthy fruits to snack on that is not only delicious but also good for your health.',
        3,
        'https://img.freepik.com/free-photo/grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple_23-2147968680.jpg?w=900&t=st=1706872367~exp=1706872967~hmac=3ecd07bc4adca49ee0585aac7f1b06ade28409e30d821ac9258c63b89f718d46',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '5',
        '2024-01-01 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Ways to Live Healthy and Stay Healthy',  -- Title
        'A healthy lifestyle is about having a healthy diet, active lifestyle and caring for your mental wellbeing.
         \nBeing healthy or leading a healthy lifestyle is more than just keeping yourself from falling sick. Good health or healthy living encompasses many other areas, which include physical health, mental health and health management. Every area is important and cannot be neglected for you to achieve better health.
         \nPhysical Activity and An Active Lifestyle \nBoost your physical health with an active lifestyle. Taking care of your body is important for good health, but the problem is that people often neglect their own bodies. If you do not eat a proper diet or do not get enough sleep, you are depriving yourself of good physical health! Keeping yourself physically healthy with an active lifestyle and physical activity will allow you to feel better and more energetic every day.
         \nActive Lifestyle \nAnother thing you should do to be healthy is to get active! An active lifestyle with adequate physical activity and exercise can really help to improve your health, not only by reducing the risk of cardiovascular (heart and blood vessel) disease but also helps you feel more confident and better about yourself, improves your energy level and concentration, relieves stress and anxiety. Some moderate-intensity activities you can do are brisk walking, swimming, cycling or dancing.
         \nMental Wellness and Health \nBesides a healthy body, you also need to have a healthy mind. Diseases not only affect the physical body but the mind as well. Mental health is therefore a very important component of your overall health and well-being. The absence of mental illnesses or disorders does not mean that a person is mentally healthy. The WHO defines good mental health as the state of wellbeing in which an individual can cope with the normal stresses of life, work productively and fruitfully, realises his or her own potential, contribute to his or her community.
         \nBeing healthy does not stop at keeping yourself free from disease and illness. Being healthy requires you to take care of your physical, mental and emotional health. There are no limits to how much health you can achieve. The healthier you are, the better you will be able to enjoy life.',
        3,
        'https://img.freepik.com/premium-photo/several-types-fruits-vegetables-healthy-food-yoga-exercise-lifestyle_39755-139.jpg?w=1060',
        'Author : user5117301, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '6',
        '2023-12-01 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Benefits of drinking Tea',  -- Title
        'A hot, healthy drink could be a simple cup of tea. Learn more about the different types of tea and the health benefits of tea.Tea has been known to be a healthy beverage for many centuries. What are the differences between the different types of teas? All teas are made from leaves of the Camellia Sinensis plant. The main difference between these teas lies in the way the tea leaves are processed.
         \nWhite vs Green Tea \nThe way tea leaves are processed determines the types of tea produced. White tea is made from the buds and young leaves while green tea is made from mature leaves. To prevent oxidation, white and green tea leaves are steamed before drying. This process helps in the retention of the naturally occurring phytochemicals of the tea leaf.
         \nOolong vs Black Tea \nOolong tea and black tea are healthy, hot beverages. Oolong tea and black tea are made from mature leaves. To enhance the tea’s flavour, oolong and black tea leaves are bruised and broken into bits respectively, before they are left to oxidise. Oolong tea is less oxidised as compared to black tea. The oxidation process also converts catechins into other beneficial phytochemicals. Hence, the content and type of phytochemicals present in oolong and black teas generally differ from those of white and green teas.
         \nBenefits of Drinking Tea \nPhytochemicals in tea have antioxidant properties. For a refreshing change from drinking plain water, try drinking a cup of tea instead. Teas are rich in beneficial phytochemicals such as those mentioned above. Freshly brewed tea generally contains more phytochemicals as compared to instant preparations and ready-to-drink teas. The phytochemicals present in teas have antioxidant properties that have health-promoting benefits.
         \nRemember to add less sugar or omit it completely when preparing tea to experience the original tea’s flavour, or choose ready-to-drink teas that are unsweetened or sweetened with less sugar.
         \nRegular tea consumption has been shown to improve the function of the blood vessels and may also help with weight loss by reducing visceral fat. Regular tea drinking may reduce the risk of cardiovascular disease too.',
        3,
        'https://img.freepik.com/free-photo/close-up-delicious-tea-small-bowls_23-2149483936.jpg?w=996&t=st=1706873785~exp=1706874385~hmac=012c093778658e99a78032f5cccaeb47d8f3db477e65fe62f8e9c0e2921e5837',
        'Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '7',
        '2024-02-02 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Healthy Eating Tips to Feast Without Guilt',  -- Title
        'We love a good feast. Mindful eating and switching out sinful foods for healthier options are some ways you can feast without guilt. \nOnce we sit down and help ourselves generously to some pen cai or pineapple tarts during Chinese New Year, the primal mind takes over, and we are gripped by the impulse to eat as much as possible.
         \nHealthy Eating Tip 1: Practice Mindful Eating \nDo not give in and always practice mindful eating. You can control your intake using smaller plates when dining so that you do not overload a bigger plate with excessive food. \nDrink plenty of water during the day and practice mindful eating. Pause during your meal to monitor your hunger. Easier said than done? Maybe. But before you start feasting this festive season, stop and take a moment to remember that those calories gained are not as easily shed.
         \nHealthy Eating Tip 2: Avoid Food high in fat \nAvoid dishes high in fat, especially saturated fat. This can come from fatty meat or poultry skin or from deep frying or coconut milk in sauces. \nBraised pork belly, or just about any dish made with meat that is high in fat, should be replaced with leaner cuts.
         \nHealthy Eating Tip 3: Go for Good, Healthy Food \nBoiled, grilled or steamed dishes such as fish are healthier options. Vegetables are a must — chap chai is a good choice. Traditional yu sheng can be a healthy dish, but only if you limit the oil, sugary sauces and fried crackers​.',
        3,
        'https://img.freepik.com/free-vector/chinese-new-year-celebration-festive-background_53876-96455.jpg?w=996&t=st=1707889994~exp=1707890594~hmac=4ce542b140b585a26c4c940d0f67515dd562035487fb68c2450287163f5ed1e6',
        'Author: rawpixel.com, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '8',
        '2024-01-09 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Healthy Cooking with Sauces',  -- Title
        'Sauces! They are delicious and also sources of sugar and salt. Learn how to cut down on sugar and how to reduce salt intake when cooking with sauces with these healthy cooking methods.
         \nHealthy Cooking with Fish Sauce \nThis high-in-sodium sauce adds that salty oomph to Thai food and Vietnamese spring rolls. Cut back on this sauce if you have high blood pressure or hypertension. So, how to reduce your salt intake? For a slightly lower-in-sodium dipping sauce, try light soy sauce with chopped chili padi and a squeeze of lime.
         \nHealthy Alternatives to Oyster Sauce \nOyster sauce, used to stir-fry veggies like kai lan and bok choy, is high in sodium. Use this sauce sparingly if you are watching your sodium intake - stir-fry your greens with spices like ginger, garlic, and peppercorns instead!
         \nLess Salt with Sambal Belacan \nThis spicy, shrimpy sauce is high in sodium and calories, so eat less if you have high blood pressure or are watching your calories. When frying sambal belacan at home, taste before adding salt as belacan is already salty.
         \nLower Sodium Light Soy Sauce \nSavoury soy sauce is light in calories but high in sodium. Remember to taste your food before seasoning: ask yourself if you really need extra soy sauce in your dry mee pok. Also, check out lower-sodium versions of soy sauces.
         \nSubstitute Garlic Chilli Sauce with Spices \nThis sauce isnt especially high in calories, salt, or sugar, but the numbers do add up, so eat moderately if you are watching your calorie and sodium intake! Perhaps cut down from two packets of sauce to one when you are eating fries or chicken wings. Try substituting with spices like paprika and garlic powder.
         \nSwitch up your sauces to enjoy a healthier and equally delicious meal!',
        3,
        'https://img.freepik.com/premium-photo/earthenware-pottery-jar-collection-with-rustic-decoration-ornate-pattern-generated-by-artificial-intelligence_24640-117438.jpg?w=1060',
        'Author: stockgiu, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '9',
        '2024-01-10 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Healthy Home Cooking Meal Tips',  -- Title
        'Are you worried that you have no time or that you need to be able to cook like a chef to serve nourishing meals? Learn some practical tips to make healthy home cooking quick and easy.
        \nBalance Your Food Choices \nYou do not have to give up your favourite food just because it is high in calories. Reducing your portion size or making up for excess calories by eating a lower-calorie meal later are quick tips to help you manage your diet.
        \nEat WholeGrains! \nBe it bread, rice or noodles, natural is best. The less processed your food is and the more wholegrains it contains, the longer and faster you will stay full.
        \nWhen prepared well with less fat or sugar, wholegrains, fruits and vegetables offer you lower-calorie meal choices at any time of the day. Rich in antioxidants, they give you more goodness in a bite than a higher-calorie meal.
        \nLove wholegrains? \nWholegrains are not being limited to bread and rice. Do you know that wholegrains now come in kway teow, noodles, man tou and biscuits? \nWho says being healthy cant be fun and easy?',
        3,
        'https://www.freepik.com/premium-vector/woman-drinks-coffee-tea-cozy-kitchen-kitchen-utensils-concept-banner-website-apps_47579163.htm#query=healthy%20home%20cooking%20tips&position=32&from_view=search&track=ais&uuid=16984310-7df8-4616-9a06-cca8a223d444',
        'Author: i.serik, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '10',
        '2024-01-10 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Tips for Successful Weight Management',  -- Title
        'A healthy lifestyle is the best long-term and sustainable weight management strategy. \nHere are simple things you can do every day that can help you achieve sustainable weight management.
         \n1. Balance Your Food Choices \nCaloric balance is the key to managing your weight. You do not have to give up your favourite foods just because they are high in calories.
         \n2. Watch What You Eat \nHealthy food does wonders for the body. Be mindful of the food choices you make and select healthier options whenever you can.
         \n3. Get Your Recommended Physical Activity Minutes \nPhysical activity is essential for effective weight management, as it burns calories that we have consumed over the day.
         \n4. Building Strength \nStrength-building activities provide additional health benefits. Strength training not only helps to improve bone and muscle strength but also contributes to greater muscle mass, which boosts resting metabolic rate, therefore helping your body burn more calories.
         \n5. Have Regular Meals \nSkipping meals can cause you to snack more often or binge eat, leading you to consume even more calories.',
        4,
        'https://www.freepik.com/free-vector/healthy-people-carrying-different-icons_3226124.htm#query=healthy%20living&position=12&from_view=search&track=ais&uuid=415dd0fe-a18c-4182-9b34-7c748a53d7fa',
        'Author: rawpixel.com, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '11',
        '2024-01-17 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        '3 Tips to Achieve A Healthy Weight the Right Way',  -- Title
        'Stop skipping meals and have balanced, healthier meals to achieve and maintain a healthy weight sustainably. Check out these 3 counter-intuitive tips to manage your weight better.
         \n1. Limit Or Avoid Sugary Drinks \nSugar from drinks provides empty calories, which raise your daily calorie count without adding nutrients. Sugary drinks unlikely to make you full and satiated, thus it is easy to over consume. Make water as your default drink option! The best thirst quencher which is sugar- and calorie-free.
         \n2. Switch To Wholegrains \nWholegrains could help you manage your weight as they help keep you feeling full longer. It is because wholegrain foods are higher in fibre, which provides bulk. In addition, they are generally digested at a slower rate.
         \n3. Make Friends With Fruit and Vegetables \nYou probably heard this a million times already, but the importance of consuming more fruit and vegetables can never be stressed enough!
         The water and fibre they contain add volume to your meals and fill you up more easily with lower overall calorie intake. Being rich in nutrients, fruit and vegetables are essential for your health.',
        4,
        'https://img.freepik.com/free-vector/healthy-eating-circle-composition_98292-7506.jpg?w=740&t=st=1706991424~exp=1706992024~hmac=a5a184b33ff7f1a0aa24d71976e96b1251351cd127ae7daabf9ef564628a5c8b',
        'Author: macrovector_official, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '12',
        '2024-01-22 15:30:00',  -- CreatedDT
        'UCFSHealth',  -- Publisher
        'Healthy Lifestyles, Healthy Outlook',  -- Title
        'Healthy Lifestyles \nA healthy lifestyle can help you thrive as you move through your life. Making healthy choices isnt always easy – it can be hard to find the time and energy to exercise regularly or prepare healthy meals.
         \nSteps you can take: \nBe physically active for 30 minutes most days of the week. Break this up into three 10-minute sessions when pressed for time. Healthy movement may include walking, sports, dancing, yoga or running.
         \nEat a well-balanced, low-fat diet with lots of fruits, vegetables, and whole grains. Choose a diet that is low in saturated fat and cholesterol, and moderate in sugar, salt and total fat.
         \nHealthy Outlook \nYou may feel pulled in different directions and experience stress from dealing with work, family and other matters, leaving little time for yourself. Learning to balance your life with some time for yourself will pay off with big benefits.
         \nSteps you can take: \nStay in touch with family and friends. \nBe involved in your community. \nMaintain a positive attitude and do things that make you happy.
         \nLearn to recognize and manage stress in your life. Good ways to deal with stress include regular exercise, healthy eating habits, and relaxation exercises such as deep breathing or meditation.',
        4,
        'https://img.freepik.com/free-vector/fitness-4-flat-icons-square-banner_98292-1012.jpg?w=740&t=st=1707938366~exp=1707938966~hmac=93a48f7fabdd6f3c76c9a291ec5f7e0cb71f0ac140c42f7a85e673444d4397e1',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '13',
        '2024-01-22 17:30:00',  -- CreatedDT
        'MayoClinic',  -- Publisher
        'Stress basics',  -- Title
        'Stress is a normal psychological and physical reaction to the demands of life. A small amount of stress can be good, motivating you to perform well. But many challenges daily, such as sitting in traffic, meeting deadlines and paying bills, can push you beyond your ability to cope.
         \nYour brain comes hard-wired with an alarm system for your protection. When your brain perceives a threat, it signals your body to release a burst of hormones that increase your heart rate and raise your blood pressure. Once the threat is gone, your body is meant to return to a normal, relaxed state.
         \nStress management gives you a range of tools to reset and to recalibrate your alarm system. It can help your mind and body adapt (resilience). Without it, your body might always be on high alert. Over time, chronic stress can lead to serious health problems.
         \nDo not wait till stress damages your health, relationships or quality of life. Start practicing stress management techniques today.',
        4,
        'https://img.freepik.com/free-vector/business-stress-professional-burnout-scenes-flat-isolated-vector-illustration_1284-77609.jpg?w=1380&t=st=1707022447~exp=1707023047~hmac=87f6b75edf42a42722b5a5d5e3e70c3a248d58bfe4141d07fdbd534397d3afe1',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '14',
        '2024-01-22 17:30:00',  -- CreatedDT
        'MayoClinic',  -- Publisher
        'Fitness basics',  -- Title
        'Starting a fitness program may be one of the best things you can do for your health. After all, physical activity can reduce your risk of chronic disease, improve your balance and coordination, help you lose weight, and even boost your self-esteem. And you can reap these benefits regardless of your age, sex or physical ability. For most healthy adults, these exercise guidelines are recommended:
        \nAerobic activity. \nGet at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week, or an equal combination of moderate and vigorous aerobic activity. Even small amounts of physical activity are helpful. Being active for short periods of time throughout the day can add up to provide health benefits.
        \nStrength training. \nDo strength training exercises for all major muscle groups at least two times a week. Aim to do a single set of each exercise using a weight or resistance level heavy enough to tire your muscles after about 12 to 15 repetitions. Regular exercise can help you control your weight, reduce your risk of heart disease and certain cancers, and strengthen your bones and muscles.
        \nStarting a fitness program is an important decision, but it does not have to be an overwhelming one. By planning carefully and pacing yourself, you can make fitness a healthy habit that lasts a lifetime.',
        23,
        'https://img.freepik.com/free-vector/woman-practicing-exercice-with-sports-icons_24877-51355.jpg?w=740&t=st=1707896822~exp=1707897422~hmac=1f0f8e4c24ab1e295b2b81b4249d7150abe15761b742927f24d37633869ab843',
        'Author: studiogstock, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '15',
        '2024-01-22 17:30:00',  -- CreatedDT
        'MayoClinic',  -- Publisher
        'Nutrition basics',  -- Title
        'Do you feel like you are unable keep up with the latest nutrition news because its always changing? Knowledge about nutrition and diet evolves over time, but there are some nutrition basics that can help you sort through the latest research and advice.
        \nNutrition basics come down to eating wholesome foods that support your health. Want to go beyond the basics? Talk to a healthcare professional, such as a dietitian. You can ask for diet advice that takes into account your health, lifestyle and food preferences.',
        23,
        'https://img.freepik.com/premium-vector/food-sources-set_101903-1246.jpg',
        'Author: vssstudio, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '16',
        '2024-01-23 17:30:00',  -- CreatedDT
        'HelpGuide',  -- Publisher
        'What is a healthy diet?',  -- Title
        'The fundamentals of healthy eating \nWhile some extreme diets may suggest otherwise, we all need a balance of protein, fat, carbohydrates, fiber, vitamins, and minerals in our diets to sustain a healthy body. You do not need to eliminate certain categories of food from your diet, but rather select the healthiest options from each category.
         \nMaking the switch to a healthy diet \nSwitching to a healthy diet does not have to be an all or nothing proposition. You dont have to completely eliminate foods you enjoy or change everything all at once — that usually only leads to cheating or giving up on your new eating plan.',
        23,
        'https://img.freepik.com/premium-vector/food-diet-healthy-lifestyle-weight-loss-banner-with-dish-salad-table-set-smartphone-diet-plan-notebook_250257-474.jpg?w=1060',
        'Author: virinaflora, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '17',
        '2024-01-23 17:30:00',  -- CreatedDT
        'World Health Organisation',  -- Publisher
        'Healthy diet',  -- Title
        'A healthy diet is essential for good health and nutrition. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet. A healthy diet comprises a combination of different foods. These include: Staples like cereals or starchy tubers or roots, Legumes, Fruit and vegetables, Foods from animal sources.
        \nHere is some useful information to follow a healthy diet, and the benefits of doing so.
        \nEat plenty of vegetables and fruit: \nThey are important sources of vitamins, minerals, dietary fibre, plant protein and antioxidants.
        \nEat less fat: \nFats and oils and concentrated sources of energy. Eating too much, particularly the wrong kinds of fat, like saturated and industrially-produced trans-fat, can increase the risk of heart disease and stroke. Use unsaturated vegetable oils rather than animal fats or oils high in saturated fats.
        \nLimit intake of sugars: \nFor a healthy diet, sugars should represent less than 10% of your total energy intake. Reducing even further to under 5% has additional health benefits.
        \nReduce salt intake: \nKeeping your salt intake to less than 5h per day helps prevent hypertension and reduces the risk of heart disease and stroke in the adult population.',
        23,
        'https://img.freepik.com/free-vector/people-healthy-food_24908-55181.jpg?w=740&t=st=1707060287~exp=1707060887~hmac=8f50d4c17a86bbca0eccb52150bcfdb9abc14a8f7a328fe833e8bf3078175a8f',
        'Author: gstudioimagen, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '18',
        '2024-01-23 17:30:00',  -- CreatedDT
        'World Health Organisation',  -- Publisher
        'Physical activity',  -- Title
        'Being physically active helps all people, no matter their age, lead healthier lives. Some physical activity is better than doing none. By being more active throughout the day in relatively simple ways, people can quite easily achieve the recommended activity levels. Below are the levels of physical activity WHO recommends people of different ages undertake.
        \nChildren and adolescents aged 5-17 years \n Should do at least 60 minutes of moderate to vigorous-intensity physical activity daily. Physical activity of amounts more than 60 minutes daily provides additional health benefits.
        \nAdults aged 18–64 years \nShould do at least 150 minutes of moderate-intensity physical activity throughout the week, or do at least 75 minutes of vigorous-intensity physical activity, or an equivalent combination of both. For additional health benefits, adults should increase their moderate-intensity physical activity to 300 minutes per week, or equivalent.
        \nAdults aged 65 years and above \nShould do at least 150 minutes of moderate-intensity physical activity throughout the week, or at least 75 minutes of vigorous-intensity physical activity, or an equivalent combination of both. Those with poor mobility should perform physical activity to enhance balance and prevent falls, 3 or more days per week.',
        23,
        'https://www.freepik.com/free-vector/flat-happy-children-play-run-cycling-public-park_27059506.htm#query=physical%20activity&position=9&from_view=search&track=ais&uuid=70a23307-fd12-4673-81dd-281d900cc9b4',
        'Author: redgreystock, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '19',
        '2023-01-23 17:30:00',  -- CreatedDT
        'CDC',  -- Publisher
        'Benefits of Healthy Eating',  -- Title
        'Benefits of Healthy Eating for Adults includes: Keeps skin, teeth, and eyes healthy, Supports muscles, Boosts immunity, Strengthens bones, Lowers risk of heart disease, type 2 diabetes, Helps the digestive system function, Helps achieve and maintain a healthy weight
        \nBenefits of Healthy Eating for Children includes: Keeps skin, teeth, and eyes healthy, Supports muscles, Helps achieve and maintain a healthy weight, Strengthens bones, Supports brain development and healthy growth, Boosts immunity, Helps the digestive system function.',
        23,
        'https://img.freepik.com/free-photo/portrait-healthy-woman-eating-salad-kitchen_23-2148075987.jpg?w=996&t=st=1707897150~exp=1707897750~hmac=c90748bbb2982f45dc43cd8364213cc57f4f6d109e7d9192f01a219769357413',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '20',
        '2024-01-23 17:30:00',  -- CreatedDT
        'medicalnewstoday',  -- Publisher
        'What are the benefits of eating healthy?',  -- Title
        'Following a healthy diet has many benefits, including building strong bones, protecting the heart, preventing disease, and boosting mood.
        \nA healthy diet typically includes nutrient-dense foods from all of the major food groups, including lean proteins, whole grains, healthy fats, and fruits and vegetables of many colors. Healthy eating habits also include replacing foods that contain trans fats, added salt, and sugar with more nutritious options. Following a healthy diet has many benefits, including building strong bones, protecting the heart, preventing disease, and boosting the mood.',
        23,
        'https://img.freepik.com/free-vector/healthy-food-concept-with-people-vegetables_107791-11174.jpg?w=996&t=st=1707897230~exp=1707897830~hmac=78a566255d8e1e3228f301ef53fe50d161165c37416d53067dfa839a813a817a',
        'Author: upklyak, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '21',
        '2024-01-23 19:30:00',  -- CreatedDT
        'British Heart Foundation',  -- Publisher
        'Healthy Eating',  -- Title
        'Eating a healthy diet can help reduce your risk of developing coronary heart disease and stop you from gaining too much weight, reducing your risk of diabetes and high blood pressure. It can also help lower your cholesterol levels and reduce your risk of some cancers. Even if you already have a heart condition, a healthy diet can benefit your heart.
         \nA balanced diet \nEveryone should aim for a well-balanced diet. Strict diets are hard to sustain long term and may not provide the balance of nutrients you need.
         \nHealthy eating is not about cutting out or focusing on individual foods or nutrients. It is thinking about your whole diet and eating a variety of foods in the right amounts to give your body what it needs.
         \nThere are foods we need to eat more of, like fruit and vegetables, and others we need to eat less of, which are foods high in saturated fat, sugar and salt. It is all about getting the right balance. Eating healthily can be tasty, simple and fun. It is about making small, long-term changes and enjoying the food you eat.',
        25,
        'https://img.freepik.com/free-vector/eating-variety-foods-concept-illustration_114360-11295.jpg?w=740&t=st=1707061728~exp=1707062328~hmac=afbffa590c8b411a91cafeca0e8542287d1e8d50254c1428df438af6559f9049',
        'Author: storyset, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '22',
        '2024-01-25 19:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'Fruits',  -- Title
        'What foods are in the Fruit Group? \nThe Fruit Group includes all fruits and 100% fruit juice. Fruits may be fresh, frozen, canned, or dried/dehydrated. Fruits can be eaten whole, cut up, pureed (mashed), or cooked. At least half of the recommended amount of fruit eaten should come from whole fruit, rather than 100% fruit juice. In general, the following counts as 1 cup from the Fruit Group: 1 cup of fruit,half cup of dried fruit, 1 cup of 100% fruit juice.
         \nWhy is it important to eat fruit? \nEating fruit has many health benefits. People who eat fruits and vegetables as part of an overall diet may lower their risk for certain diseases. Fruits provide nutrients needed to maintain your health and body.
        \nHealth Benefits \nAll food and beverage choices matter. Focus on variety, amount, and nutrition. \nEating foods such as fruits that are lower in calories per cup, instead of other higher calorie foods, may help lower overall calorie intake.
        \nEating a diet rich in fruits and vegetables as part of an overall healthy diet may reduce the risk for heart disease, including heart attack and stroke. \nAdding fruit can help increase the amount of fiber and potassium we eat. These are important nutrients that many people do not get enough of.',
        25,
        'https://img.freepik.com/free-vector/hand-drawn-fruit-collection_23-2148938559.jpg?w=740&t=st=1707897415~exp=1707898015~hmac=78b5cbd722c70c27ef1febcc7aadcfcf87005a3fac5c82ec4ad4b6c6eef47649',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '23',
        '2024-01-25 19:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'Vegetables',  -- Title
        'What foods are in the Vegetable Group? \nAny vegetable or 100% vegetable juice counts as part of the Vegetable Group. Vegetables may be raw or cooked and can be fresh, frozen, canned, or dried. They can be whole, cut-up, or mashed.
        \nWhat counts as a cup of vegetables? \nThe following examples count as 1 cup from the Vegetables Group: 1 cup of raw or cooked vegetables or vegetable juice, 2 cups of raw leafy salad greens
        \nWhy is it important to eat vegetables? \nEating vegetables provides health benefits. People who eat fruits and vegetables as part of an overall healthy diet are likely to have a reduced risk of some diseases. Vegetables provide nutrients vital for the health and maintenance of the body.
        \nHealth Benefits \nAll food and beverage choices matter. Focus on variety, amount, and nutrition.
        \nAs part of an overall healthy diet, eating foods lower in calories per cup, such as vegetables, instead of higher-calorie food may help you lower your calorie intake.
        \nEating a diet rich in vegetables and fruits as part of an overall healthy diet may reduce the risk for heart disease, including heart attack and stroke.',
        27,
        'https://img.freepik.com/premium-photo/fresh-organic-vegetable_114106-1589.jpg?w=996',
        'Author: fetrinka, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '24',
        '2024-01-25 16:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'About Oils',  -- Title
        'Oils are fats that are liquid at room temperature, like vegetable oils used in cooking. They come from many different plants and from fish. Oils are not a food group, but they provide you with important nutrients such as unsaturated fats and vitamin E. Choosing unsaturated fat in place of saturated fat can reduce your risk of heart disease and improve “good” (HDL) cholesterol levels.
        \nSources of Oils \nMany foods supply oils, like nuts, olives, some fish, and avocados. Most oils are high in monounsaturated fats or polyunsaturated fats, which are healthy fats, and low in saturated fats. Foods that are mainly made of oil include mayonnaise, certain salad dressings, and soft margarine that comes in a tub or can be squeezed from a bottle.
        \nThe fat from some tropical plants like coconut oil, palm oil, and palm kernel oil are not included in the oils category because they are higher in saturated fats than other oils. They can be thought of as solid fats. Solid fats are fats that are solid at room temperature, like butter, lard and shortening. Solid fats come from many animal foods and can be made from vegetable oils.',
        27,
        'https://img.freepik.com/free-photo/stack-raw-pasta-nests-bottle-olive-oil-vegetables-wooden-plate_114579-18203.jpg?w=996&t=st=1707897642~exp=1707898242~hmac=027f5342b76272e3f3b27ff4cbb910356ba3a8bd072698bfeb759f2762d0f5ea',
        'Author: azerbaijan_stockers, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '25',
        '2024-01-25 16:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'Limiting Saturated Fat',  -- Title
        'Saturated fat is often found in forms that are solid at room temperature. Examples of these include milk fat, butter, or the fat inside or around meat. A few food products such as coconut oil, palm oils, or whole milk remain as liquids at room temperature but are high in saturated fat. \nCut back on saturated fat by replacing foods high in saturated fat with foods higher in unsaturated fat. Some foods that are high in saturated fat are:
        \nDesserts and baked goods, such as cakes, cookies, donuts, pastries, and croissants \nMany cheeses and foods with cheese, like pizza, burgers, and sandwiches \nSausage, hot dogs, bacon, and ribs \nFried potatoes (French fries) if fried in saturated fat or hydrogenated oil
        \nRegular ground beef (like 85% lean) and cuts of meat with fat you can see \nFried chicken and other chicken dishes with the skin \nWhole milk and full-fat dairy foods and desserts',
        28,
        'https://img.freepik.com/free-vector/variety-fat-foods_1308-126934.jpg?w=360&t=st=1707129359~exp=1707129959~hmac=936040c9da75d996db51d3548f00efccf5482aabdb3111a0c7a988e932298419',
        'Author: brgfx, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '26',
        '2024-01-25 16:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'Grains',  -- Title
        'What foods are in the Grains Group? \nFoods made from wheat, rice, oats, cornmeal, barley, or another cereal grain is a grain product. Bread, pasta, breakfast cereals, grits, and tortillas are examples of grain products. Foods such as popcorn, rice, and oatmeal are also included in the Grains Group.
        \nGrains have two subgroups: whole grains and refined grains. \nWhole grains have the entire grain kernel, which includes the bran, germ, and endosperm. Some whole-grain examples are whole-wheat flour, brown rice.
        \nRefined grains should be enriched. This means adding back certain B vitamins (thiamin, riboflavin, niacin, folic acid) and iron. However, fiber is not added back to enriched grains. Some food products are made from mixtures of whole grains and refined grains. Only foods that are made with 100% whole grains are considered a whole grain food.
        \nWhat counts as an ounce-equivalent of grains? \nThe following are some grain food portions that are equal to one ounce: \n1 slice of bread \n1 cup of ready-to-eat cereal \n½ cup of cooked rice, cooked pasta, or cooked cereal
        \nHealth Benefits \nEating whole grains as part of a healthy diet may reduce the risk of getting heart disease. \nEating whole grain foods that have fiber, as part of an overall healthy diet, can support healthy digestion. \nEating whole grains, as part of an overall healthy diet, may help with weight management.',
        28,
        'https://img.freepik.com/free-vector/rice-grain-sacks-bowls-sketch-set_74855-16230.jpg?w=740&t=st=1707129738~exp=1707130338~hmac=8bda5efb451e278df360c5dbd2c4a88e7ed45a9a90e69fee993452498e7dd98f',
        'Author: pch.vector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '27',
        '2024-01-25 16:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'Protein Foods',  -- Title
        'What foods are in the Protein Foods Group? \nProtein Foods include all foods made from seafood; meat, poultry, and eggs; beans, peas, and lentils; and nuts, seeds, and soy products. Beans, peas, and lentils are also part of the Vegetable Group. To learn more, visit the Beans, Peas, and Lentils page.
        \nEat a variety of protein foods to get more of the nutrients your body needs. Meat and poultry choices should be lean or low-fat, like 93% lean ground beef, pork loin, and skinless chicken breasts. Choose seafood options that are higher in healthy fatty acids (called omega-3s) and lower in methylmercury, such as salmon, anchovies, and trout. Vegetarian protein options include beans, peas, lentils, nuts, seeds, and soy products.
        \nThe following examples count as 1 ounce-equivalent from the Protein Foods Group: \n1 ounce of meat, poultry or fish \n¼ cup cooked beans \n1 egg \n½ ounce of nuts or seeds
        \nHealth Benefits \nProteins function as building blocks for bones, muscles, cartilage, skin, and blood. They are also building blocks for enzymes, hormones, and vitamins. Proteins are one of three nutrients that provide calories.
        \nNutrients provided by various protein foods can differ. Varying your protein food choices can provide your body with a range of nutrients designed to keep your body functioning well. ',
        26,
        'https://img.freepik.com/free-vector/protein-food-products-flat-illustration-poster_1284-17181.jpg?w=740&t=st=1707130229~exp=1707130829~hmac=b694917c83a4cf0982726727ad1922db8598ac8aed92aa40ed258680958e065f',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '28',
        '2024-01-25 16:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'Dairy',  -- Title
        'What foods are included in the Dairy Group? \nThe Dairy Group includes milk, yogurt, cheese, lactose-free milk and fortified soy milk and yogurt.
        \nThe Dairy Group does not include foods made from milk that have little calcium and a high fat content. Examples of this are cream cheese, sour cream, cream, and butter.
        \nWhat counts as a cup in the Dairy Group? \nIn general, the following counts as 1 cup from the Dairy Group: \n1 cup of milk, yogurt, or soy milk \n1 ½ ounces of natural cheese
        \nWhy is it important to eat or drink dairy? \nEating or drinking dairy products offers health benefits, like building and maintaining strong bones. Dairy Group foods provide nutrients that are vital for the health and maintenance of the body. These nutrients include calcium, potassium, vitamin D, and protein.
        \nHealth Benefits \nCalcium and vitamin D are important nutrients at any age. Eating or drinking dairy products that have these nutrients help to:
        \nImprove bone health, especially in children and adolescents when bone mass is being built. \nPromote bone health and prevent the start of osteoporosis in adults.',
        26,
        'https://img.freepik.com/free-vector/fresh-organic-milk-products-set-with-cheese-butter_1284-14075.jpg?w=740&t=st=1707130507~exp=1707131107~hmac=2d8d2f3419e33a0e8acde56f058f9845192f73afd4e7b429290f984bf9fcf802',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '29',
        '2024-02-25 16:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Getting Your Caffeine Hit',  -- Title
        'For a long time, the consumption of caffeinated drinks such as coffee and tea was associated with cardiovascular problems, such as hypertension, rhythm disturbances and heart attacks. Yet in recent years, literature seems to point towards the suggested benefits of coffee and tea consumption, ranging from improved cognitive ability to reduced risk for cancer, gallstones, Parkinson’s and even coronary disease.
        \nBenefits of Caffeine \nCoffee and tea are rich in antioxidants that help to fight free radicals. These free radicals are elements that damage our cells and have been linked with health issues. Besides being a source of antioxidants, coffee and tea also contain caffeine, which when taken in moderation can have benefits for your body. This stimulant promotes the increased firing of neurons and has been shown to improve various aspects of brain function, including memory, mood, energy levels and general cognitive function.
        \nDangers of Caffeine \nWhile caffeine has its advantages, it is unfortunately still a drug which can cause dependency. Just as with other addictive substances, people who try to quit drinking coffee and tea have been known to exhibit withdrawal symptoms, such as headaches and fatigue.',
        24,
        'https://img.freepik.com/free-vector/restaurant-mural-wallpaper_52683-47917.jpg?w=996&t=st=1707131183~exp=1707131783~hmac=9cdde229dcf6da3e142517aab8091973c32c32e6f9a0ea2be70871aebc5b4a97',
        'Author: mpikisuperstar, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '30',
        '2024-02-25 16:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'The Best Refreshment',  -- Title
        'Remember how, as children, we never left home without our water bottles swinging by our sides? Whatever happened to that healthier habit once we grew up? Water, after all, is the essence of life—are we getting enough?
        \nOn average, 60-75% of the adult human body is water. It is a component of almost every body part, from our brain, to our muscles and even our bones. Water’s vital functions include dissolving and carrying nutrients and oxygen to our cells. Water regulates our temperature. It keeps our tissues—like those in our nose and eyes—moist, and our joints lubricated.
        \nAre You Drinking Enough? \nWhile we might instinctively reach for a drink after exercise or on a hot day, most of us only drink when we are thirsty. Unfortunately, a parched throat is not a good indicator of dehydration—by the time you feel thirsty, your body is already crying out for help. So, how much is enough? You’ve probably heard “eight glasses a day” (about two litres)—and that is a useful guide in general.
        \nQuick tips to keep hydrated \nBring back your water bottle! It not only ensures you always have a drink at hand, but can be a quirky fashion accessory, too. \nEat foods with high water content, such as lettuce, watermelon and broccoli.',
        24,
        'https://img.freepik.com/free-vector/woman-man-drink-water-health-diet-thirst-hot-hydration-summer-sport-illustration-vector-clipart_10045-701.jpg?w=740&t=st=1707897930~exp=1707898530~hmac=ca3a74d8475bd065335005fbf45c7c16888cd97bfb496aa24e0756f90fd90c55',
        'Author: syarifahbrit, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '31',
        '2024-02-25 16:30:00',  -- CreatedDT
        'webmd',  -- Publisher
        'Healthy Eating for Weight Loss',  -- Title
        'Most health experts recommend that you eat a balanced, healthy diet to maintain or to lose weight. But exactly what is a healthy diet?
        \nIt should include: \nProtein (found in fish, meat, poultry) \nFat (found in animal and dairy products) \nCarbohydrates (found in fruits, vegetables, whole grains) \nVitamins and Minerals \nWater (both in what you drink, and naturally in foods)
        \nDieting or not, everyone needs a mix of those nutrients, ideally from foods. Fill half your plate with fruits and vegetables. Split the other half between whole grains and lean protein. Stick to your calorie “budget,” because when you are working on losing weight, you need to burn more calories than you eat or drink.',
        23,
        'https://img.freepik.com/free-vector/main-food-groups-macronutrients-vector_1308-125548.jpg?w=1060&t=st=1707898038~exp=1707898638~hmac=5bc464e908f2613ee064cef5c3cc7e74bfd81512458bcb25eb459d5e016d647a',
        'Author: brgfx, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '32',
        '2024-02-25 16:30:00',  -- CreatedDT
        'webmd',  -- Publisher
        'Fun Facts About Fruits and Vegetables',  -- Title
        'Bell Peppers Are Fruits \nSurprised? Scientists define fruit as the part of a plant that develops from a flower and has seeds. So that means bell peppers -- along with squash, cucumbers, and pumpkins -- are fruits. It is up to you whether or not to include any of those items in your next fruit salad.
        \nBananas Are Berries \nA true berry is a fruit that develops from a single flower and a single ovary. The ovary is the female part of a flower. That means grapes, kiwis, and even bananas are berries. Think about that the next time you peel into a banana.
        \nPotatoes Top Bananas in Potassium \nWe need potassium to help strengthen our muscles and control our blood pressure. Bananas are high in it, but they arent the best source. Why not try a spud instead? Potatoes have more potassium. They dont have any fat and are a good source of vitamins and iron, too.
        \nFigs Match Milk in Calcium \nTrying to get more calcium? Instead of pouring another glass of milk, you could reach for the fruit bowl. Figs are high in calcium. A cup of dried ones has as much calcium as the same amount of milk. And unlike the cool drink, figs are also a great source of fiber. But dont overdo it. They pack a lot of sugar and calories.',
        22,
        'https://img.freepik.com/free-vector/fruits-berries-colorful-icons-collection_1284-20043.jpg?w=740&t=st=1707228006~exp=1707228606~hmac=95551b0cf671888ea956ab5822108215180ff58760ab50b49bf4ee26ae4a288f',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '33',
        '2024-02-25 16:30:00',  -- CreatedDT
        'webmd',  -- Publisher
        'Best Diet Tips Ever - Ways to Stay on Track',  -- Title
        'Tip No. 1: Drink plenty of water or other calorie-free beverages. \nBefore you tear into that bag of potato chips, drink a glass of water first. People sometimes confuse thirst with hunger, so you can end up eating extra calories when an ice-cold glass of water is really all you needed. If plain water doesnt cut it, try drinking flavored sparkling water or brewing a cup of fruit-infused herbal tea.
        \nTip No. 2: Be choosy about nighttime snacks. \nMindless eating occurs most frequently after dinner, when you finally sit down and relax. Snacking in front of the TV is one of the easiest ways to throw your diet off course. Either close down the kitchen after a certain hour, or allow yourself a low-calorie snack, like a 100-calorie pack of cookies or a half-cup scoop of low-fat ice cream.
        \nTip No. 3: Eat protein at every meal. \nProtein is the ultimate fill-me-up food - its more satisfying than carbs or fats and keeps you feeling full for longer. It also helps preserve muscle mass and encourages fat burning. So be sure to incorporate healthy proteins like seafood, lean meat, egg whites, yogurt, cheese, soy, nuts, or beans into your meals and snacks.',
        21,
        'https://img.freepik.com/free-photo/healthy-menu-recipe-food-diet_53876-122837.jpg?w=996&t=st=1707898209~exp=1707898809~hmac=e9dd6b52cee08eee4f7cb0e47c41c9748a85320aa2ea74d383d15b517910a0ae',
        'Author: rawpixel.com, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '34',
        '2024-02-26 16:30:00',  -- CreatedDT
        'webmd',  -- Publisher
        'Why Cant I Lose Weight?',  -- Title
        'You try hard, but that scale wont budge. It is only human nature to wonder if those pounds will ever come off. But dont raise the white flag and chuck your diet just yet. See if one of these sneaky things is secretly messing with your weight loss hopes.
        \nIs it because I skip breakfast? \nIt could be. When you take a pass on that first meal of the day, it can work against you. You are likely to get hungrier later, so you may overdo it at lunch. Try to eat within an hour of waking up. A high-fiber, protein-packed breakfast can help you feel full, longer. Try cottage cheese with fruit, eggs with whole-wheat toast, or Greek yogurt with a banana.
        \nDo I eat too close to bedtime? \nA late-night meal can spell trouble for your weight loss plan. It may raise your body temperature, blood sugar, and insulin, which makes it harder for you to burn fat. Try to eat dinner at least 3 hours before you go to sleep. Be careful about snacking after supper. You take in more calories than you realize when you nibble while you watch TV or use the computer. You may also be tempted to eat unhealthy foods like ice cream or potato chips.
        \nIs it because I am under too much stress? \nIt is possible. It can make you reach for high-calorie, high-fat foods. Your body also tends to store more fat when you are stressed out.',
        21,
        'https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Total Shape, Designed by Unsplash',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '35',
        '2024-02-26 16:30:00',  -- CreatedDT
        'healthline',  -- Publisher
        'The Definitive Guide to Healthy Grocery Shopping',  -- Title
        'Before you go \nWhile some people can go grocery shopping without a list or an idea of which meals they will cook during the coming week, most people need some sort of a plan. Bringing along a grocery list or a weekly menu is a good idea if you get easily side-tracked in the store or unsure of where to begin.
        \nCreating a healthy shopping list \nA grocery list is an essential tool for many shoppers. It can help you stay on task and remind you of the items you need. Plus, studies show that grocery lists may help you make healthier choices while shopping.
        \nBut what does a “healthy” grocery shopping list include? \nGenerally, a healthy, well-rounded diet should primarily comprise whole, nutrient-dense foods. Foods such as veggies, fruits, protein sources like fish and eggs, beans, nuts, and seeds, these are foods to prioritize on your list.
        \nPlanning a weekly menu \nIf you prefer, you can bring a weekly menu to the store instead of a regular shopping list. This menu can list which ingredients you need to make the meals you would like to cook the week ahead.',
        25,
        'https://img.freepik.com/free-photo/woman-picking-bell-peppers-reusable-bag-ecology-earth-day-thematics_1268-21680.jpg?w=1380&t=st=1707898423~exp=1707899023~hmac=2b546394ed6d9b395aeeb735c213bca2b6720e88053233105fc8e2e68e0cd847',
        'Author: frimufilms, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '36',
        '2024-02-26 16:30:00',  -- CreatedDT
        'healthline',  -- Publisher
        'Proven Health Benefits of Dark Chocolate',  -- Title
        'Eating dark chocolate with high cocoa content in moderation can deliver antioxidants and minerals and may help protect you from heart disease. But it may also contain high amounts of sugar and calories. Dark chocolate is loaded with nutrients that can positively affect your health. Made from the seed of the cacao tree, its one of the best sources of antioxidants you can find. Studies show that dark chocolate can improve your health and lower the risk of heart disease.
         \nVery nutritious \nIf you buy quality dark chocolate with a high cocoa content, then it is quite nutritious. It contains a decent amount of soluble fiber and is loaded with minerals.
         \nMay improve blood flow and lower blood pressure \nThe flavanoids in dark chocolate can stimulate the endothelium, the lining of arteries, to produce nitric oxide.One of the functions of NO is to send signals to the arteries to relax, which lowers the resistance to blood flow and therefore reduces blood pressure.
         \nMay reduce heart disease risk \nThe compounds in dark chocolate appear to be highly protective against the oxidation of LDL. In the long term, this should cause much less cholesterol to lodge in the arteries, resulting in a lower risk of heart disease.',
        25,
        'https://img.freepik.com/free-photo/top-view-dark-arrangement-with-chocolate-with-copy-space_23-2148553179.jpg?w=1380&t=st=1707898687~exp=1707899287~hmac=2bf612e7553cded87cc36cd0d9270af33dc427fdf5ad1a3d1c8e33fb31fe082c',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '37',
        '2024-02-26 16:30:00',  -- CreatedDT
        'healthline',  -- Publisher
        'Health Benefits of Eating Oats and Oatmeal',  -- Title
        'Studies show that oats and oatmeal have many health benefits. These include weight loss, lower blood sugar levels, and a reduced risk of heart disease. Oats are among the healthiest grains on earth. They aree a gluten-free whole grain and a great source of important vitamins, minerals, fiber, and antioxidants.
        \n1. Oats are incredibly nutritious \nThe nutrient composition of oats is well-balanced. They are a good source of carbs and fiber, including the fiber beta-glucan. Oats are also a good source of high quality protein, with a good balance of essential amino acids. Oats are loaded with important vitamins, minerals, and antioxidant plant compounds.
        \n2. Whole oats are rich in antioxidants \nWhole oats are high in antioxidants and beneficial plant compounds called polyphenols. Most notable is a unique group of antioxidants called avenanthramides, which are almost solely found in oats.
        \n3. Oats can lower cholesterol levels \nHeart disease is the leading cause of death globally. One major risk factor is high blood cholesterol. Many studies have shown that the beta-glucan fiber in oats is effective at reducing both total and LDL (bad) cholesterol levels.',
        26,
        'https://img.freepik.com/free-photo/top-close-up-view-berries-bowl-oatmeal-spoon-board-red-currants-black-grapes_140725-71988.jpg?w=996&t=st=1707230882~exp=1707231482~hmac=88e6fd199b63d52545687ae1d45d830c5449606c8dd500514d58c8d1b2530114',
        'Author: KamranAydinov, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '38',
        '2024-02-26 16:30:00',  -- CreatedDT
        'healthline',  -- Publisher
        'Salmon Nutrition and Health Benefits',  -- Title
        'Salmon is one of the most nutritious foods on the planet. This popular fatty fish is not only loaded with nutrients but also may reduce certain risk factors for several diseases. What’s more, it’s tasty, versatile, and widely available.
         \nSalmon nutrition facts \nThe nutritional value of salmon can vary slightly among the varieties. For example, farmed salmon contains slightly more healthy fats and calories, whereas wild-caught salmon is a bit higher in protein. However, both types are great sources of many key nutrients, including selenium, phosphorus, and B vitamins.
         \nSalmon health benefits \n1. Rich in omega-3 fatty acids \nSalmon is one of the best sources of the long-chain omega-3 fatty acids eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA).
         \n2. Great source of protein \nSalmon is rich in high quality protein. Like omega-3 fats, protein is an essential nutrient that you must get from your diet.
         \nProtein plays a number of important roles in your body, including helping you heal after injury, protecting bone health, and maintaining muscle mass during weight loss and as you get older.',
        26,
        'https://img.freepik.com/free-photo/salmon-dish-with-herbs-spices_23-2148195516.jpg?w=996&t=st=1707898851~exp=1707899451~hmac=585106474b6055e89e61db26fcc83495614c412cc3fac274bb933204ff230ea3',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '39',
        '2024-02-26 16:30:00',  -- CreatedDT
        'healthline',  -- Publisher
        'Impressive Health Benefits of Apples',  -- Title
        'This nutritious fruit offers multiple health benefits. Apples may lower your chance of developing cancer, diabetes, and heart disease. Research says apples may also help you lose weight while improving your gut and brain health. Apples are the most widely consumed fruit globally.
         From sweet red varieties, like Red Delicious, Fuji, or Gala, to tangy green ones They’re commonly used in recipes like pies, cookies, muffins, jam, salads, oatmeal, or smoothies. They also make a great snack or wedged and smeared with nut butter. In addition to their culinary versatility and numerous colors and flavors, apples are an exceptionally healthy fruit with many research-backed benefits.
        \nWhat are the benefits of apples? \n1. Nutritious \nApples are considered nutrient-dense fruits, meaning they provide a lot of nutrients per serving.
        \n2. May support weight loss \nApples are high in fiber and water, which makes them filling. Eating whole apples increased fullness more than consuming equal amounts of apple juice. This may happen because whole apples reduce gastric emptying — the rate at which your stomach empties.
        \n3. Could be good for your heart \nApples have been linked to a lower chance of heart disease. Research has found that eating 100-150 g/d of whole apples is associated with a lower chanceTrusted Source of heart disease and risk factors such as high blood pressure.',
        28,
        'https://img.freepik.com/free-vector/sticker-basket-with-many-red-apples_1308-59661.jpg?w=900&t=st=1707898962~exp=1707899562~hmac=a128c24d1639876000548d72aecb99a09a10f16804ec33b4f76305cbe4037252',
        'Author: brgfx, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '40',
        '2024-02-26 16:30:00',  -- CreatedDT
        'healthline',  -- Publisher
        'Health Benefits of Kale',  -- Title
        'Kale is a nutritious food rich in antioxidants, vitamin C, vitamin K, and beta-carotene. It also contains nutrients that can support eye health, weight management, heart health, and more. Loaded with important micronutrients and antioxidants, kale is one of the most nutritious leafy greens available. Plus, it’s versatile and boasts a nutty, earthy flavor that works well in a wide range of recipes.
        \n1. Highly nutritious \nKale is a popular vegetable and a member of the cabbage family. It is a cruciferous vegetable and is closely related to cabbage, broccoli, cauliflower, collard greens, and Brussels sprouts.
        \n2. Provides powerful antioxidants \nLike other leafy greens, kale is very high in antioxidants. These include beta-carotene and vitamin C, as well as various flavonoids and polyphenols. \nAntioxidants are substances that help counteract oxidative damage by neutralizing free radicals in the body.
        \n3. Excellent source of vitamin C \nVitamin C is an important water-soluble antioxidant that serves many vital functions in the body’s cells. For example, it is necessary for the synthesis of collagen, the most abundant structural protein in the body. \nKale is higher in vitamin C than most other greens, containing about three times much as spinach and collard greens.',
        4,
        'https://img.freepik.com/free-photo/close-up-shot-kale_23-2148685356.jpg?w=740&t=st=1707231994~exp=1707232594~hmac=285d138ff284bd8d999a1be85690ad4dbb10bed282acaea32ee62078ce17bba8',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '41',
        '2024-01-08 16:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Tips for Better Breakfasts',  -- Title
        'We have all experienced "morning madness" — whether a busy commute or working with picky eaters, many things can make for a stressful morning. Breakfast, however, is really an important meal! Research shows that breaking an overnight fast with a balanced meal can make a significant difference in overall health and well-being.
        \nIf You Wake Up on Time, Enjoy.. \nScrambled Eggs: Serve with fruit and whole-grain toast. Mix in extra vegetables such as spinach and mushrooms when cooking the eggs.
        \nWhole-Grain Waffles: If you have a waffle iron, try a whole-grain waffle mix from the grocery store for a special treat. Serve topped with fresh fruit.
        \nIf You Hit the Snooze Button One Time, Eat.. \nEnglish Muffin Sandwich: Toast a whole-grain English muffin. Put low-fat cheese and sliced deli ham on the toasted muffin. Warm the sandwich in the microwave to melt the cheese.
        \nBreakfast Tacos: Scramble and cook eggs or egg whites. Serve eggs with beans on a tortilla.
        \nIf You Hit the Snooze Button Two (or More) Times, You Can Still Break the Fast.. \nInstant Oatmeal: Look for varieties without added sugar and just add boiling water. Stir in dried cranberries and almonds.
        \n45-Second Scrambled Eggs: Put eggs and a splash of milk in a bowl, whisk it up and put it in a microwave for 30 seconds. Stir and put back in for another 10 seconds.',
        4,
        'https://img.freepik.com/free-photo/toast-egg-bacon-tomatoes-microgreens-salad_2829-4804.jpg?w=996&t=st=1707371496~exp=1707372096~hmac=efe90efde636cdb14d1126b13ca2848fb9d27339efb181754ce3f9444685cf81',
        'Author: timolina, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '42',
        '2024-01-08 16:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Family Dinners for a Healthy Heart',  -- Title
        'Want your family to have healthy hearts? Start at the family dinner table. Not only do many adults consume too much sodium, many kids do as well. Eating too much sodium can increase risk for high blood pressure which can eventually lead to heart disease, stroke and kidney disease.
        \nChoose Spices Over Salt \nIn the kitchen, think out of the box. Opt for spices instead of added salt. When you are cooking, reach for low-sodium seasonings such as fresh lemon or lime juice, fresh herbs or salt-free herb blends and vinegar to boost the flavor of your favorite foods.
        \nRead Nutrition Labels \nYou can trim the sodium  by carefully reading the Nutrition Facts Label when buying canned, frozen and packaged foods. Comparing brands and labels also can go a long way, as the amount of sodium in foods can vary from brand to brand by hundreds of milligrams.
        \nLook for Foods Low in Sodium \nIt also helps to focus on foods that are naturally low in sodium. Eating more vegetables and fruit can help lower your sodium intake and increase your potassium intake. Produce contains little sodium, yet it is rich in potassium, a mineral that helps balance blood pressure. However, few of us get the potassium we require.',
        27,
        'https://img.freepik.com/free-vector/family-enjoying-time-together_23-2148512124.jpg?w=996&t=st=1707372025~exp=1707372625~hmac=8a6c20f7f33122139f267731aaccf97e536eb2d109fe619b3735ea1692c600be',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '43',
        '2024-01-08 16:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Breakfast: Key to Growing Healthy',  -- Title
        'Breakfast is an important meal for growing children. Studies show that breakfast eaters tend to have higher school attendance, less tardiness and fewer hunger-induced stomach aches in the morning. Their overall test scores are higher, they concentrate better, solve problems more easily and have better muscle coordination. Children who eat breakfast also are more likely to maintain a healthy weight and get enough calcium, too.
        \nWhip Up a Quick and Easy Morning Meal \nStart their day in a healthful direction with a balanced breakfast that incorporates a variety of nutrient-dense foods. Try some of these quick and easy options:
        \nPeanut butter spread on whole-grain toast \nGrits and eggs \nPorridge with ginger and cinnamon \nChilaquiles with eggs
        \nMake a Breakfast Bar \nLet your kids build their own breakfast with a breakfast bar. Similar to a salad bar, a breakfast bar includes a variety of foods to mix and match. Little ones love to create unusual combinations by mixing, stacking and organizing ingredients. Here are some ideas:
        \nWhole-grain cereals, waffles, tortillas, bread or English muffins \nPeanut butter \nLow-fat or fat-free yogurt \nCottage cheese \nFig or apricot jam \nVariety of sliced fruit such as bananas strawberries, papaya or passionfruit',
        24,
        'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Brooke Lark, Designed by Unsplash',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '44',
        '2024-01-08 16:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Tips to Help Kids Enjoy Fruits and Veggies',  -- Title
        'Fruits and vegetables are loaded with the nutrients kids need to grow, be strong and healthy and perform well in school. Unfortunately, most children do not get enough fruits and vegetables throughout the day. Here are some ideas on how to make meals nutritious and delicious by incorporating produce in fun and interesting ways that kids will enjoy.
        \nFill Half the Plate with Fruits and Vegetables \nEncourage kids to consume more of these nutritional powerhouses by making produce the star of the meal. Dish out generous helpings and always include options that your family enjoys. Serve vegetables in a variety of ways to give your child an opportunity to explore the tastes, textures and aromas.
        \nTake Fruit to Lunch \nFruit is a great way to add a little sweetness to a meal. Make a habit of tucking an apple, tangerine, melon slices, plums, kiwifruit, grapes, cherries or dried fruits into lunch bags.
        \nStuff Sandwiches with Fruits and Vegetables \nCreate a sandwich bar with whole-grain breads, wraps and rolls, various lean meats, low-fat cheese, sliced tomato, bell pepper rings, cucumber slices, lettuce, marinated artichoke hearts, roasted red peppers, sliced avocado, hummus and mustard.',
        24,
        'https://img.freepik.com/free-photo/breakfast-consists-bread-boiled-eggs-black-grape-salad-dressing-tomatoes-sliced-onions_1150-24465.jpg?w=996&t=st=1707372961~exp=1707373561~hmac=c750d25954f99dc9e6547f11847177952f7b345563a961d0892fe4b149b8da39',
        'Author: jcomp, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '45',
        '2024-01-01 15:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'When Should My Kids Snack?',  -- Title
        'Does it seem like it is always snack time? Many children graze throughout the day, enjoying a never-ending snack time. Snacks are good for kids because they help them stay focused at school and on homework, give them needed nutrients and help keep hunger at bay. Yet, for lots of kids and teens, a snack is a bag of chips, some cookies or some other low-nutrient food. Instead, think of snacks as mini-meals.
        \nWhen Should Kids Snack? \nMost children and teens need to eat snacks in addition to meals to fuel their growing, active bodies and meet their daily recommendations. This translates into the following:
        \nYounger kids need three meals and about two snacks a day. \nOlder kids need to eat three meals and about one snack a day (they may need two snacks if they are going through a growth spurt or if they are very physically active).
        \nWhere Should Kids Snack? \nWhen at home, designate a certain area as the "eating-only zone'' and limit all snacking to that location. The kitchen table or countertop works well. When kids snack all over the house, that makes it hard for you to know what and how much they are eating. Also, dont let kids eat snacks while watching TV. Studies show that this mindless munching leads to overeating.',
        23,
        'https://img.freepik.com/free-vector/people-with-delicious-food-drinks_23-2148470092.jpg?w=740&t=st=1707899467~exp=1707900067~hmac=d50184834e6f2c640100215d67d611ca8e82a2b4279f7a458f89736b7570ea2c',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '46',
        '2024-01-01 15:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Foods for Eye Health',  -- Title
        'Do your eyes have all the nutrients they need to help prevent cataracts, macular degeneration, glaucoma and other sight woes? Read on to learn about some of the top foods to promote eye health. To get these nutrients — your best sources of vitamins, minerals and antioxidants are from whole foods, since it may be a combination of nutrients within the foods which provide these benefits.
        \nKale: See the Light \nThis leafy green is a source of lutein and zeaxanthin, which are related to vitamin A and beta-carotene, and may help protect eye tissues from sunlight damage and reduce the risk of eye changes related to aging.
        \nSweet Potatoes: The Color of Health \nBeta-carotene gives these tubers their orange color. Your body converts beta-carotene to vitamin A, a nutrient that helps prevent night blindness and age related macular degeneration. Sweet potatoes not your favorite? For beta-carotene, try other deep orange foods, such as carrots and butternut squash
        \nHealthy Fats: Include Sources of Omega-3 Fatty Acids \nBesides helping with the absorption of certain nutrients, some healthy fats also contain omega-3 fatty acids. Salmon is an excellent source of omega-3s, which may be beneficial for eye health.',
        22,
        'https://img.freepik.com/free-photo/funny-young-woman-with-orange-halves-kitchen_169016-29797.jpg?w=996&t=st=1707899569~exp=1707900169~hmac=703c4d6822d4f17379a7dfcdb30c82e383db6fb1c8997ae617155613a10d3d50',
        'Author: pvproductions, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '47',
        '2023-01-01 15:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Eating to Boost Energy',  -- Title
        'We, as a society, are busy, stressed, need more physical activity and sometimes have poor eating habits — all contributing to low energy levels. One way to improve our energy levels is by eating better. The right combinations of food may help give you a boost. Follow these strategies to maximize your energy.
        \nEat Regularly \nPlanning to eat every three to four hours may help prevent between-meal hunger that can lead to unwise snacking or overeating at meals. If you only are eating one to two meals a day, this may be an adjustment. As you learn how to eat more frequently throughout the day, remind yourself that you will feel better and be more focused when you have fuel in your system on a regular basis.
        \nHonor Your Hunger and Fullness Cues \nEating just enough, but not too much, helps to curb cravings and reduces chances of overeating.
        \nBalance Your Plate \nA balanced meal includes foods from multiple food groups: whole grains, lean protein, fiber-rich fruits and vegetables, and fat-free or low-fat dairy. Balance out your plate with all the food groups.
        \nRemove Energy Zappers \nSkip the foods and beverages with added sugars, such as soda, sugar-sweetened coffee and energy drinks. These beverages may leave you buzzing for an hour, but likely will cause an energy crash. Instead, quench your thirst with water, unsweetened flavored water or unsweetened tea.',
        23,
        'https://img.freepik.com/free-vector/flat-design-overwhelmed-people-illustration_23-2149311636.jpg?w=740&t=st=1707900537~exp=1707901137~hmac=c18e183f85fb8c6f6440d6159858e4ed42e198b727fb00e939eb49d6b626b46b',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '48',
        '2023-01-01 15:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Tips to Kick Bad Eating Habits to the Curb',  -- Title
        'Are you guilty of skipping breakfast, ordering takeout too often or getting jitters from coffee overload? Time to kick those habits to the curb. Here is a guide to help you get started.
        \nEat Breakfast \nThere is no better way to start your morning than with a healthy breakfast. Providing your body with a morning meal provides it with energy to power not only your muscles but your brain as well! Prevent brain fog and increase your focus by keeping your brain fed.
        \nCut Back on Caffeine \nToo much caffeine can interfere with sleep, make you jittery and cause you to lose energy later in the day. Keep your caffeine intake in check by limiting regular coffee to about 3 cups or less per day, and watch what you put into it. Too much sugar isnt good for your teeth.
        \nBring Lunch to Work \nHow do you make bringing lunch to work easy? The first step is to plan ahead by thinking through what you want for lunch and adding those foods to your grocery list. Stock your fridge with tasty, satisfying foods to set yourself up for success.',
        27,
        'https://img.freepik.com/free-vector/healthy-eating-advertising-poster-with-young-woman-holding-green-apple-useful-food-elements_1284-28271.jpg?w=740&t=st=1707376991~exp=1707377591~hmac=011c541ddf74e7767329ed513191b5b2d325bab1af07ff05e0b69d77b430efdc',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '49',
        '2023-01-01 15:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Keys to Strength Building and Muscle Mass',  -- Title
        'Muscle is harder to build and maintain as we age. In fact, most of us start losing muscle around age 30. Physically inactive people are at particular risk and can experience anywhere from a 3 to 8% loss of lean muscle mass every decade after that.
        \nMuscle Strengthening Activities and Health \nMen and women should participate in muscle strengthening activities that work the major muscle groups at least two times each week. Examples of muscle strengthening activities include lifting weights, push-ups, pull-ups, sit-ups and some types of yoga.
        \nProtein and Muscle Building \nWhen building muscle, the more protein the better, right? Not necessarily. Protein should make up 10 to 35% of total calories for adults. While working to build muscle with physical activity, your needs may be on the higher end of this range. Aim for 3 servings of low-fat or fat-free dairy and 3 ounce-equivalents of protein foods (such as fish, beans, poultry or lean meat) each day, to provide quality sources of protein to help reach that goal. Grains, especially whole grains, also provide some protein.
        \nCarbohydrates and Muscle Building \nCarbohydrates are another important group of foods for fueling your muscles. That is because carbs are partially converted to glycogen, which is a form of energy stored in muscles. Try focusing on good quality carbohydrates that provide dietary fiber, such as whole-grain breads and cereals.',
        24,
        'https://img.freepik.com/free-vector/isometric-fitness-club-banner-collection_1284-32765.jpg?w=740&t=st=1707900723~exp=1707901323~hmac=b9c969bb5f2f059c2855e1aa319c60dc34518fb590fd88938c644236bd303c5e',
        'Author: macrovector, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '50',
        '2023-01-01 15:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Strategies for Successful Meal Planning',  -- Title
        'Planning ahead may help relieve mealtime stress. Think about your approach to meal planning — do you: Want to make a weekly or a monthly plan? Prefer to prepare meals ahead of time, just before the meal or a combination of both? Want to pick a day to cook meals for the week or a month that you can store in the freezer?
        Stock Your Pantry and Freezer with the Five Food Groups. To get started with meal planning, take time to stock up on the basics. This includes healthy foods that you like to eat and prepare, add other items based on your personal health needs and food preferences.
        \nVegetables: Keep a variety of canned tomatoes in stock. Use them in soups, stews, sauces. Dried mushrooms are another great pantry item because they can add depth of flavor to your meals.
        \nFruits: Raisins, dried cranberries, dried apricots are loaded with dietary fiber.
        \nMilk and Dairy Products: Dried milk is a great back-up item to have on stock, boxed milk is also available in single-serving packages.
        \nProtein Foods: Canned or dried lentils, cannellini, garbanzo and kidney beans. These legumes are a great source of protein. Canned tuna, anchovies and sardines are a pantry must.
        \NGrains: Keep a stash of oatmeal and other whole-grain cereals in the pantry. Barley, quinoa and other grains provide staples for healthy meals. Also, keep a variety of rice on hand.',
        24,
        'https://img.freepik.com/free-photo/top-view-assortment-food-with-planner_23-2148484699.jpg?w=996&t=st=1707379150~exp=1707379750~hmac=33e86e1d38655bf232fdf3b9a78a28578036fe0a41df58704ae009ad5ca2a847',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '51',
        '2023-02-01 15:30:00',  -- CreatedDT
        'helpguide',  -- Publisher
        'Mindful Eating',  -- Title
        'Paying attention to the moment-to-moment experience of eating can help you improve your diet, manage food cravings, and even lose weight. Here’s how to start eating mindfully.
        \nWhat is mindful eating? \nMindful eating is maintaining an in-the-moment awareness of the food and drink you put into your body. It involves observing how the food makes you feel and the signals your body sends about taste, satisfaction, and fullness. Mindful eating requires you to simply acknowledge and accept rather than judge the feelings, thoughts, and bodily sensations you observe. It can extend to the process of buying, preparing, and serving your food as well as consuming it.
        \nBenefits of mindful eating \nBy paying close attention to how you feel as you eat—the texture and tastes of each mouthful, your body’s hunger and fullness signals, how different foods affect your energy and mood—you can learn to savor both your food and the experience of eating. Being mindful of the food you eat can promote better digestion, keep you full with less food, and influence wiser choices about what you eat in the future. It can also help you free yourself from unhealthy habits around food and eating.',
        23,
        'https://img.freepik.com/free-vector/woman-thinking-healthy-unhealthy-snacks-choice_74855-15577.jpg?w=996&t=st=1707900878~exp=1707901478~hmac=40ffc03f2097858306f0f3fd490da093551cc7158648d01af5ab658a029c793a',
        'Author: pch.vector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '52',
        '2023-02-01 15:30:00',  -- CreatedDT
        'helpguide',  -- Publisher
        'Heart-Healthy Diet Tips',  -- Title
        'What is a heart-healthy diet? \nHeart disease is a leading killer—and claims more lives than all forms of cancer combined. Being diagnosed with cardiovascular disease can also take an emotional toll, affecting your mood and quality of life. A heart-healthy diet may reduce your risk of heart disease or stroke by 80%.
        \nThree keys to a heart-healthy diet \n1. Be smart about fats \nIf you are concerned about your heart health, rather than avoiding fat in your diet, try replacing saturated fats with unsaturated fats. Cut out artificial trans fats, Limit saturated fats.
        \n2. Do not replace fat with sugar or refined carbs \nWhen cutting back on heart-risky foods, it is important to replace them with healthy alternatives. Replacing processed meats with fish or chicken, for example, can make a positive difference to your health. Your body benefits from having a balanced diet of protein, carbohydrates, and fat. Choosing foods with higher fiber and lower saturated fat can help provide you with the energy you need during the day.
        \n3. Focus on high-fiber food \nA diet high in fiber can lower “bad” cholesterol and provide nutrients that help protect against heart disease. It may also help you to lose weight. Since fiber stays in the stomach longer than other foods, the feeling of fullness will stay with you much longer. Fiber also moves fat through your digestive system quicker so less of it is absorbed. And when you fill up on fiber, you will also have more energy for exercising.',
        22,
        'https://img.freepik.com/free-vector/world-health-day_24908-56242.jpg?w=740&t=st=1707735993~exp=1707736593~hmac=17dcc577460bec6cf2c10926c520ac8db1c02cfb94fe1b6e34969aaf4fcb96de',
        'Author: gstudioimagen, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '53',
        '2023-02-01 15:30:00',  -- CreatedDT
        'helpguide',  -- Publisher
        'Choosing Healthy Protein',  -- Title
        'When it comes to making protein choices in your diet, quality is just as important as quantity. \nWhat is protein? \nProtein in your diet provides energy and supports your mood and cognitive function. It’s a vital nutrient required for building, maintaining, and repairing tissues, cells, and organs throughout the body. Most animal sources of protein deliver all the amino acids your body needs, while plant-based protein sources often lack one or more of the essential amino acids.
        \nThe health benefits of protein \nProtein gives you the energy to get up and go—and keep going. While too much protein can be harmful to people with kidney disease, eating the right amount of high-quality protein: Keeps your immune system functioning properly, maintains heart health and your respiratory system, and speeds recovery after exercise. It is vital to the growth and development of children and for maintaining health in your senior years, can help reduce your risk for diabetes and cardiovascular disease.
        \nHigh-quality vs. low-quality protein \nDistinguishing between industrially raised meat and organic, grass-fed meat is only part of separating low- and high-quality sources of protein. While some processed or lunch meats, for example, can be a good source of protein, many are loaded with salt, which can cause high blood pressure and lead to other health problems. Processed meats have also been linked with an increased risk of cancer, likely due to the substances used in the processing of the meat.',
        21,
        'https://img.freepik.com/free-vector/protein-food-concept-card-set_1284-9928.jpg?w=740&t=st=1707736764~exp=1707737364~hmac=65a5f0b5d04bbb72d039fdd158d63acab57d56a517cc32c702fc4a05ab4e3f33',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    );



-- Educational content review rating
INSERT INTO educational_content_review_rating
(Review, Rating, UserID, educational_contentid)
VALUES
    ('This is awesome!',                                3.2, '7', 1),
    ('The content is very insightful.',                 5.0, '8', 1),
    ('I love this content!' ,                           4.0, '9', 1),
    ('I love this content!' ,                           4.0, '12', 1),
    ('This is awesome stuff!',                          3.2, '7', 2),
    ('The content is very detailed',                    5.0, '8', 2),
    ('I love this content!' ,                           4.0, '9', 3),
    ('The content is very informative!',                5.0, '8', 4),
    ('I love this content!' ,                           4.0, '9', 5),
    ('This is really helpful!' ,                        5.0, '9', 6),
    ('The content is very informative!',                5.0, '8', 7),
    ('The content is very detailed',                    5.0, '8', 8),
    ('This is really helpful!' ,                        5.0, '9', 9),
    ('The content is very informative!',                5.0, '8', 10),
    ('The content is very detailed',                    5.0, '8', 11),
    ('This is awesome!',                                5.0, '7', 12),
    ('The content is very insightful.',                 5.0, '8', 13),
    ('I love this content!' ,                           4.0, '9', 14),
    ('I love this content!' ,                           4.0, '12', 15),
    ('The content is very informative!',                5.0, '8', 16),
    ('The content is very detailed',                    5.0, '8', 17),
    ('This is awesome!',                                5.0, '7', 18),
    ('The content is very insightful.',                 5.0, '8', 19),
    ('I love this content!' ,                           4.0, '9', 20),
    ('I love this content!' ,                           4.0, '12', 21),
    ('I love this content!' ,                           4.0, '9', 22),
    ('I love this content!' ,                           4.0, '12', 23),
    ('I love this content!' ,                           4.0, '12', 24),
    ('I love this content!' ,                           4.0, '9', 25),
    ('I love this content!' ,                           4.0, '12', 26),
    ('The content is very informative!',                5.0, '8', 27),
    ('The content is very detailed',                    5.0, '8', 28),
    ('This is awesome!',                                5.0, '7', 29),
    ('The content is very insightful.',                 5.0, '8', 30),
    ('I love this content!' ,                           4.0, '12', 31),
    ('I love this content!' ,                           4.0, '9', 32),
    ('I love this content!' ,                           4.0, '12', 33),
    ('I love this content!' ,                           4.0, '12', 34),
    ('I love this content!' ,                           4.0, '9', 35),
    ('I love this content!' ,                           4.0, '12', 36),
    ('The content is very informative!',                5.0, '8', 37),
    ('The content is very detailed',                    5.0, '8', 38),
    ('This is awesome!',                                5.0, '7', 39),
    ('The content is very insightful.',                 5.0, '8', 40),
    ('I love this content!' ,                           4.0, '12', 41),
    ('I love this content!' ,                           4.0, '9', 42),
    ('I love this content!' ,                           4.0, '12', 43),
    ('I love this content!' ,                           4.0, '12', 44),
    ('I love this content!' ,                           4.0, '9', 45),
    ('I love this content!' ,                           4.0, '12', 46),
    ('The content is very informative!',                5.0, '8', 47),
    ('The content is very detailed',                    5.0, '8', 48),
    ('This is awesome!',                                5.0, '7', 49),
    ('The content is very insightful.',                 5.0, '8', 50),
    ('This is awesome!',                                5.0, '7', 51),
    ('The content is very insightful.',                 5.0, '8', 52),
    ('The content is very insightful.',                 5.0, '8', 53);
