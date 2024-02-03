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
    ('Maintain Health'),
    ('Weight Loss');

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
        'https://img.freepik.com/free-photo/flat-lay-fish-vegetables_23-2148262195.jpg?w=1060&t=st=1706947179~exp=1706947779~hmac=1d8ec88d4d3ce2cb4c97c6043dd1c10eaab11d5d6dec821c90cb1f49346c60be',
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
        '4' -- userid
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
        'https://img.freepik.com/free-photo/closeup-bright-fresh-vegetables-fruits-berries_169016-20713.jpg?w=1060&t=st=1706974313~exp=1706974913~hmac=c345661003cedc41897386be14c22385dd596ea5dc1b95857079324e75d17c74',
        'Designed by pvproductions',  -- img_title
        '3' -- userid
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
        'https://img.freepik.com/free-photo/closeup-bright-fresh-vegetables-fruits-berries_169016-20713.jpg?w=1060&t=st=1706974313~exp=1706974913~hmac=c345661003cedc41897386be14c22385dd596ea5dc1b95857079324e75d17c74',
        'Designed by pvproductions',  -- img_title
        '3' -- userid
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
        'https://img.freepik.com/free-photo/closeup-bright-fresh-vegetables-fruits-berries_169016-20713.jpg?w=1060&t=st=1706974313~exp=1706974913~hmac=c345661003cedc41897386be14c22385dd596ea5dc1b95857079324e75d17c74',
        'Designed by pvproductions',  -- img_title
        '1' -- userid
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
    (6, 6);