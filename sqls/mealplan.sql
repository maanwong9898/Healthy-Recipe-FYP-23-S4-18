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
        'https://img.freepik.com/free-photo/healthy-food-vs-unhealthy-food_23-2147961022.jpg?w=1060&t=st=1707014411~exp=1707015011~hmac=699970e8b2e172324289e923af3a2ad956dc18c3acad1a09f754787a82449bb2',
        'Designed by pvproductions',  -- img_title
        '1' -- userid
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
        'https://img.freepik.com/free-photo/fried-meat-with-greens-tomatoes-clay-pot_140725-7317.jpg?w=1060&t=st=1707022112~exp=1707022712~hmac=ef1dc83bcd9b0e12f9e5df228b9b63d87eeb9cc54201e5b510e46ebd50c03ba1',
        'Designed by kamranaydinov',  -- img_title
        '2' -- userid
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
        '6' -- userid
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
        '6' -- userid
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
        '5' -- userid
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
        '5' -- userid
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
        '1' -- userid
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
        '1' -- userid
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
        '1' -- userid
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
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2017/05/spinach-cauli-rice-salad-with-cashew-dressing-69-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Designed by cleaneating',  -- img_title
        '1' -- userid
    );
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
        'https://img.freepik.com/free-photo/close-up-hand-holding-pen_23-2148484639.jpg?w=996&t=st=1707464723~exp=1707465323~hmac=3a6c845c6261ec6be11455686c2ee1903582e1bd61aadc8a6f241772ad9754e1',
        'Designed by Freepik',  -- img_title
        '1' -- userid
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
        'https://img.freepik.com/free-photo/background-food-bowl-workout-meal-space_1428-677.jpg?w=1060&t=st=1707494903~exp=1707495503~hmac=1415a8278f47334812ad1d009ce75734f4a06080f8cf366da00b29f288601067',
        'Designed by Freepik',  -- img_title
        '2' -- userid
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
        'https://img.freepik.com/free-photo/high-angle-plate-with-keto-diet-food-nuts_23-2149260319.jpg?w=1060&t=st=1707554574~exp=1707555174~hmac=9c8cb27b64e0eb4bcc9268f982710877edf464c7e0034962429c7773c62dc9a6',
        'Designed by Freepik',  -- img_title
        '2' -- userid
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
        'https://img.freepik.com/free-photo/mature-women-ready-cook-together_23-2148354958.jpg?w=1060&t=st=1707559390~exp=1707559990~hmac=372557b0b010ec7a8fd508f2ded1b3b106adaee27f2c083d9daa8fbd5bd169e6',
        'Designed by Freepik',  -- img_title
        '2' -- userid
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
    (20, 54);