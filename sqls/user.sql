-- User Account
INSERT INTO USERACCOUNT
(ID, Username, enabled, Password, Email, Full_Name, role, created_date)
VALUES
    ('1',  'user1',  1, 'pw1', '1@gmail.com', 'John',    'ADMIN',           DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('2',  'user2',  1, 'pw1', '2@gmail.com', 'William', 'ADMIN',           DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('3',  'user3',  1, 'pw1', '3@gmail.com', 'Patricia','BUSINESS_USER',   DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('4',  'user4',  0, 'pw1', '4@gmail.com', 'Mike',    'BUSINESS_USER',   DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('5',  'user5',  1, 'pw1', '5@gmail.com', 'Ben',     'NUTRITIONIST',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('6',  'user6',  1, 'pw1', '6@gmail.com', 'Sam',     'NUTRITIONIST',    DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('7',  'user7',  1, 'pw1', '7@gmail.com', 'John',    'REGISTERED_USER', DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('8',  'user8',  1, 'pw1', '8@gmail.com', 'William', 'REGISTERED_USER', DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('9',  'user9',  1, 'pw1', '9@gmail.com', 'Patricia','REGISTERED_USER', DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('10', 'user10', 1, 'pw1', '10@gmail.com', 'Mike',   'REGISTERED_USER', DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('11', 'user11', 1, 'pw1', '11@gmail.com', 'Ben',    'REGISTERED_USER', DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('12', 'user12', 1, 'pw1', '12@gmail.com', 'Sam',    'REGISTERED_USER', DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY));
    ('13', 'user13', 1, 'pw1', '13@gmail.com', 'Jacob',  'BUSINESS_USER',   DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('14', 'user14', 1, 'pw1', '14@gmail.com', 'Jane',   'BUSINESS_USER',   DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),
    ('15', 'user15', 1, 'pw1', '15@gmail.com', 'Jason',   'NUTRITIONIST',   DATE_ADD(NOW(), INTERVAL -FLOOR(RAND() * DATEDIFF(NOW(), '2022-01-20')) DAY)),

-- Business user
INSERT INTO Business_User
(ID, Company_Name, UEN,contact_number, company_address)
VALUES
    ('3', 'PHILIPS ELECTRONICS SINGAPORE PTE LTD', '199705989C', '68824037', '622, Lorong 1 Toa Payoh, Singapore 319763'),
    ('4', 'IKANO PTE LTD', '198004112M', '97117889', '1, MARINA BOULEVARD #28-00, ONE MARINA BOULEVARD, Singapore 018989');
    ('13', 'OPENTROLLEY BOOKSTORE PTE. LTD', '201007231R', '65907281', '8, Burn Road #07-13 Trivex, Singapore 369977');
    ('14','PENGUIN RANDOM HOUSE SEA PTE LTD', '201814228W', '96450577', '50, Raffles Place #27-01 Singapore Land Tower, Singapore 048623')

-- Nutritionist
INSERT INTO Nutritionist
(ID, Company_Name, company_address, contact_number)
VALUES
    ('5', 'Sheeba The Nutritionist', '17, Hong Kong Street, #03-02, Singapore, 059660', '96566714') ,
    ('6', 'Ritika Your Health Coach', '126B, Edgedale Plains, Singapore 822162', '90267535') ;
    ('15', 'Nutra Nourish', 'Loewen Rd, 27A Core Collective Dempsey, Singapore 248839', '91257500') ;
    