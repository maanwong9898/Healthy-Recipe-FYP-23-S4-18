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
