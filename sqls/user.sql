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
