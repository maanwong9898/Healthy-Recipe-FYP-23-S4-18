CREATE TABLE BLOG (
	ID MEDIUMINT NOT NULL AUTO_INCREMENT,
	Active BIT(1) NOT NULL DEFAULT b'1',
	CreatedDT DATETIME NOT NULL DEFAULT (NOW()),
	LastUpdatedDT DATETIME,

	EducationalContent	BIT(1) NOT NULL,
	Publisher VARCHAR(255) NOT NULL,
	Title 	VARCHAR(50) NOT NULL,
	Info VARCHAR(255),
	CONSTRAINT ID_PKey PRIMARY KEY (ID)
);

-- if EducationalContent is true, then its under educational content
-- or else its under Business blog lol

CREATE TABLE RECIPE (
	ID MEDIUMINT NOT NULL AUTO_INCREMENT,
	Active BIT(1) NOT NULL DEFAULT b'1',

	Title VARCHAR(50) NOT NULL,
	Steps VARCHAR(255) NOT NULL,  
	Ingredients VARCHAR(255) NOT NULL, 
	Description VARCHAR(255) NOT NULL,
	Info VARCHAR(255),

	CONSTRAINT ID_PKey PRIMARY KEY (ID)
);

-- INSERT INTO RECIPE (TITLE, STEPS, INGREDIENTS) VALUES ("Baked Chicken", "", "");

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

CREATE TABLE USERACCOUNT (
	ID  	VARCHAR(255) 	NOT NULL,
	Username VARCHAR(255)	NOT NULL,
	Password VARCHAR(255)	NOT NULL,
	Email VARCHAR(255) 		NOT NULL,
	Full_Name VARCHAR(255)	NOT NULL,

	CONSTRAINT ID_PKey PRIMARY KEY (ID)
);

-- one of these line is giving me error, but its fine i only need to worry about it 
-- when i'm dealing with fucking spring security
-- which is fucking soon
	-- Lock BIT(1) NOT NULL DEFAULT b'1', 
	-- Enabled BIT(1) NOT NULL DEFAULT b'1', 
	-- Expired BIT(1) NOT NULL DEFAULT b'1',

-- CRUD-ing it
-- Everytime editting it would update the LateUpdatedDT 
-- dont need to worry about created time
CREATE TABLE RECIPE_REVIEW_RATING ( 
	CreatedDT DATETIME NOT NULL DEFAULT (NOW()),
	LastUpdatedDT DATETIME,
	Rating DECIMAL(5,2) NOT NULL,
	Review VARCHAR(255) DEFAULT "", 

	UserID VARCHAR(255) NOT NULL,
	RecipeID MEDIUMINT NOT NULL,

	CONSTRAINT ID_PKey PRIMARY KEY (UserID, RecipeID),
	CONSTRAINT RecipeID_FKey FOREIGN KEY (RecipeID) REFERENCES RECIPE (ID),
	CONSTRAINT UserID_Recipe_FKey FOREIGN KEY (UserID) REFERENCES USERACCOUNT (ID)
);

CREATE TABLE BLOG_REVIEW_RATING ( 
	CreatedDT DATETIME NOT NULL DEFAULT (NOW()),
	LastUpdatedDT DATETIME,
	Rating DECIMAL(5,2) NOT NULL,
	Review VARCHAR(255) DEFAULT "", 

	UserID VARCHAR(255) NOT NULL,
	BlogID MEDIUMINT NOT NULL,
	
	CONSTRAINT ID_PKey PRIMARY KEY (UserID, BlogID),
	CONSTRAINT BlogID_FKey FOREIGN KEY (BlogID) REFERENCES BLOG (ID),
	CONSTRAINT UserID_Blog_FKey FOREIGN KEY (UserID) REFERENCES USERACCOUNT (ID)
);
-- INSERT INTO REVIEW_RATING (RATING, USERID, RecipeID) VALUES
-- (3.2, "4", 1);
-- associated ID can be either Blog post or recipe
-- rating can be nothing

--	ID VARCHAR(255) NOT NULL DEFAULT (UUID()),
 

CREATE TABLE RegisteredUser(
	ID 					VARCHAR(255) NOT NULL,
	DOB					DATE NOT NULL,
	DietaryPreference 	VARCHAR(255),

	CONSTRAINT ID_PKey PRIMARY KEY (ID),
	CONSTRAINT ID_FKey FOREIGN KEY (ID) REFERENCES USERACCOUNT (ID)
);

-- many to one
CREATE TABLE UserInfoOverTime(
	INFO_ID 			INT NOT NULL AUTO_INCREMENT,

	ID 					VARCHAR(255) NOT NULL,
	SavedDate			DATE NOT NULL DEFAULT(CURDATE()),
 	WeightOrHeight 		BIT(1) NOT NULL, 
    Info                DECIMAL(5,2) NOT NULL,
 	CONSTRAINT ID_PKey PRIMARY KEY (INFO_ID),
	CONSTRAINT Info_ID_FKey FOREIGN KEY (ID) REFERENCES USERACCOUNT (ID)
);
-- if its true then its weight, else height

CREATE TABLE SystemAdmin(
	ID 					VARCHAR(255) NOT NULL,
	DOB 				DATE 		NOT NULL,

	CONSTRAINT ID_PKey PRIMARY KEY (ID),
	CONSTRAINT Admin_ID_FKey FOREIGN KEY (ID) REFERENCES USERACCOUNT (ID)
);

CREATE TABLE BusinessUser(
	ID 					VARCHAR(255) NOT NULL,
	CompanyName			VARCHAR(255),
	UEN 				VARCHAR(255),
	DietitanAccount 	BIT(1) NOT NULL,
	Verified            BIT(1) NOT NULL DEFAULT b'0',
    
	
	CONSTRAINT ID_PKey PRIMARY KEY (ID),
	CONSTRAINT B_ID_FKey FOREIGN KEY (ID) REFERENCES USERACCOUNT (ID)
);


-- lock & enabled & expired is something that comes with
-- UserDetails interface of Spring Security
  
