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
    ('3', 'PHILIPS ELECTRONICS SINGAPORE PTE LTD', '199705989C', '68824037', '622, Lorong 1 Toa Payoh, Singapore 319763', '319763', 1),
    ('4', 'IKANO PTE LTD', '198004112M', '97117889', '1, MARINA BOULEVARD #28-00, ONE MARINA BOULEVARD, Singapore 018989','018989',1),
    ('21',   'ACK Enterprise',         '479977572B',   '82845672',    '13, Houagng Street,   Singapore 518231', '518231', 1),
    ('22',   'TCP Enterprise',         '479977573C',   '82745673',    '23, Sengkang Street,  Singapore 517232', '517232', 1),
    ('23', 'OPENTROLLEY BOOKSTORE PTE. LTD', '201007231R', '65907281', '8, Burn Road #07-13 Trivex, Singapore 369977', '369977', 1),
    ('24','PENGUIN RANDOM HOUSE SEA PTE LTD', '201814228W', '96450577', '50, Raffles Place #27-01 Singapore Land Tower, Singapore 048623', '048623', 1),
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
(ID, Company_Name, company_address, contact_number)
VALUES
    ('5', 'Sheeba The Nutritionist', '96566714', '17, Hong Kong Street, #03-02, Singapore, 059660', '059660', 1),
    ('6', 'Ritika Your Health Coach', '90267535', '126B, Edgedale Plains, Singapore 822162', '822162', 1),
    ('31',   'ACK Enterprise',        '81845672',    '13, Houagng Street,   Singapore 518231', '518231', 1),
    ('32',   'TCP Enterprise',        '82245673',    '23, Sengkang Street,  Singapore 517232', '517232', 1),
    ('33',   'Healthy Coorporation',  '83645674',    '33, Admiralty Street, Singapore 516233', '516233', 1),
    ('34',   'WW Enterprise',         '84545675',    '43, Woodland Street,  Singapore 515234', '515234', 1),
    ('35', 'Nutra Nourish', '91257500', 'Loewen Rd, 27A Core Collective Dempsey, Singapore 248839', '248839', 1),
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


