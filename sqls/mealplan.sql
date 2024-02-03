-- Meal Plan
-- publisher should be author of the meal plan
-- health_goal_category refers to the category of the meal plan (refer to health_goal_category)
-- img_title should be the author of the image and the source of the image (follow their code of conduct)

-- Note that: meal plan has some suggested recipes, insert into mealplan_recipe table

-- 4. Health goals
Insert into health_goal
(subcategory_name)
VALUES
    ('Weight Gain'),
    ('Maintain Heatlth'),
    ('Weight Loss');

INSERT INTO meal_plan
(id, publisher, title, active, introduction,  main_content, conclusion, createddt, health_goal_category, img, img_title, userid)
VALUES
    (
        1,
        'Sheeba',
        'Low-Calorie Weight Loss Meal Plan',
        TRUE,
        'Starting a low-calorie weight loss meal plan can be a life-changing journey toward achieving your health and wellness goals. This well-designed meal plan aims to offer a methodical approach to calorie management while guaranteeing that vital nutrients are balanced.',
        'By including nutritious foods and lean protein sources, we hope to establish the calorie deficit required for optimal weight loss. This guarantees the continued provision of vital vitamins, minerals, and antioxidants to promote general health. This balance not only helps with weight loss, but it also promotes long-term energy and satiety. Adequate hydration is suggested throughout the day. Water not only promotes overall health, but it can also help regulate appetite and reduce excessive eating.',
        'The meal plan takes an organized approach to everyday eating, stressing portion control and nutrient-dense foods. By focusing on nutrient-dense choices, balanced macronutrients, and a well-organized meal structure, individuals can embark on a journey towards healthier eating habits.',
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
        'Gaining muscle may improve your abilities in a certain sport or enhance your quality of life. Muscle helps protect joints from injury, improves balance, and reduces the risk of falls. Muscle mass also plays an important role in physical and metabolic health.',
        'Adequate calories are required to grow muscle, and you may need to increase your total calorie consumption to achieve your goal. If you are on a diet to gain muscle, you might want to think about consuming 400 to 600 calories every meal and 150 to 400 calories for snacks. At every meal and snack, eating the appropriate proportions of fat, protein, and carbohydrates will help you feel fuller for longer.',
        'By prioritizing a well-rounded consumption of macronutrients, encompassing sufficient protein, carbohydrates, and beneficial fats, in addition to incorporating micronutrient-dense foods, individuals can supply their bodies with the essential fuel required for optimal muscle growth and recovery.',
        '2023-06-15',
        1, -- weight loss
        'https://img.freepik.com/free-photo/flat-lay-fish-vegetables_23-2148262195.jpg?w=1060&t=st=1706947179~exp=1706947779~hmac=1d8ec88d4d3ce2cb4c97c6043dd1c10eaab11d5d6dec821c90cb1f49346c60be',
        'Designed by Freepik',  -- img_title
        '5' -- userid
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