
INSERT INTO BLOG(PUBLISHER, TITLE, INFO) VALUES
    ("Mark", "Mark's favourite dish", "Mark-ed"); 

INSERT INTO RECIPE (TITLE, STEPS, INGREDIENTS, DESCRIPTION, INFO) VALUES
    ("BAKED CHICKEN", "1. You Bake Chicken.\n2.Done\n3.End", "200 pounds of chicken","You also need a oven", "'calories':'2000g'\n'carbs':'200g'\n'fat':'150g'\n'protein':'20g'");
 
 
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
INSERT INTO USERACCOUNT (ID, Username, Password, Email, Full_Name) VALUES
    ("1", "useraccount1", "1", "randomEmail@gmail.com"  , "Trump kun"  ),
    ("2", "useraccount2", "1", "admin@gmail.com"        , "Admin kun"  ),
    ("3", "useraccount3", "1", "business@gmail.com"     , "Business kun"  ),
    ("4", "useraccount4", "1", "randomEmail@gmail.com"  , "Dietitian kun"  );

INSERT INTO RECIPE_REVIEW_RATING (Rating, Review, UserID, RecipeID) VALUES
    (3.2, "REVIEW-ed", "1", 1);
 
INSERT INTO BLOG_REVIEW_RATING (Rating, UserID, BlogID) VALUES
    (3.2, "1", 1);
  
-- INSERT INTO REVIEW_RATING (RATING, USERID, RecipeID) VALUES
-- (3.2, "4", 1);
-- associated ID can be either Blog post or recipe
-- rating can be nothing

--	ID VARCHAR(255) NOT NULL DEFAULT (UUID()),
 INSERT INTO RegisteredUser (ID, DOB) VALUES
    ("1",  "1969-09-11" );

INSERT INTO UserInfoOverTime (ID, WeightOrHeight, Info) VALUES
    ("1", b'1', 150.50);
   
INSERT INTO UserInfoOverTime (ID, WeightOrHeight, Info, SavedDate) VALUES
    ("1", b'1', 150.50, "2022-12-08" );

INSERT INTO SystemAdmin(ID, DOB) VALUES
    ("2", "2022-01-20");
 

INSERT INTO BusinessUser(ID, CompanyName, UEN, DietitanAccount) VALUES
    ("3", "Trump Corporate", "4799-577594-29584",  b'0') 

-- lock & enabled & expired is something that comes with
-- UserDetails interface of Spring Security
  