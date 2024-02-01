-- 5. Educational content category
Insert into educational_content_category
(subcategory_name)
VALUES
    ('Healthy Eating'),
    ('Healthy Lifestyle');

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
         The average recommended daily caloric intake is 2200 calories for males, and 1800 calories for females. These values are based on an average weight and physical activity of the average male and female Singaporean. 
         \nOne of the simplest and most effective methods for controlling your calorie intake is portion control. Often, we eat what is on our plate rather than what our body needs.
         Consuming the right number of calories is a good first step towards achieving a healthier body. However,not all calories are equal. Keeping to the calorie count on a diet consisting of only sugary cakes, meat dishes, or a glass of wine is far from ideal. This is because your body needs a variety of vitamins and minerals, as well as fibre to function properly.
         \nEating healthy is not limited to eating the right amount and the right mix. It is also important for optimum nutrition to choose healthy foods prepared with healthier options and ingredients. Steamed chicken, for example, is far healthier than deep-fried chicken.
         \nFor example, wholegrains are healthier than refined grains (white rice or bread) as they contain more vitamins, antioxidants and fibre. In addition, they also keep you filling full for longer, which helps reduce the risk of overeating. Choosing healthier cooking oils are also important.
         If fat loss is one of your weight loss goals, merely controlling your calorie intake will not be enough to do the trick. Diet and exercise are pertinent when it comes to healthy weight loss.You should be doing a combination of cardio and strength-training exercises, which are useful in losing fat as well as gaining muscle mass.'
         3, -- userID
        'https://img.freepik.com/free-vector/carbohydrate-protein-fat-food-set-vector-illustrations-nutrition-categories-cartoon-carb-fibers-grains-cereal-bread-energy-meals-meat-eggs-isolated-white-complex-diet-concept_74855-22969.jpg?w=1380&t=st=1706756983~exp=1706757583~hmac=9a9542c1b1ed2dcda25fd86008ebd059343238c837acf766afbfd8a46548fedf'
        'Author : pch.vector, Designed by Freepik',  -- img_title
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
         \n#5 Swap to Wholegrains \nEating wholegrain foods such as brown rice, wholemeal bread can help reduce the risk of developing heart disease and diabetes. They can also help with weight management because they keep you feeling full longer and reduce the need for snacking.'
        3,
        'https://img.freepik.com/free-vector/healthy-choices-before-after-diet-results-4-flat-icons-square-composition-banner_1284-5424.jpg?t=st=1706758843~exp=1706759443~hmac=2781a669c00a887fe19e1229779c946466acdf525f70ac0b9e865ccfc36b8ed5'
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
         \n#2 Cycle to lose weight and prevent chronic illnesses \nRegular aerobic exercises like cycling has many health benefits. Engaging in regular aerobic exercises like cycling improves cardiovascular fitness and at the same time decreases stress and body fat levels. Cycling is a great way to let go of any tension accumulated at work.
         \n#3 Strength Training, a weatherproof physical activity \nStrength training a few times a week will keep you strong and healthy.
         For healthy bone and muscles, you are recommended to partake in bone and muscle strengthening exercises at least 2-3 days a week. Hitting the gym regardless of time or weather, does make it easy to fit workouts into your schedule. 
         \n#4 Yoga for a balance of strength and flexibility \nDoing yoga a few times a week will keep you healthy. Yoga may seem meditative and relaxing, but it also requires a balance of strength and flexibility, and can prove to be a challenging workout. Beginners should start with a Hatha class to pick up the fundamental poses, before trying out more intensive and faster styles of yoga such as Vinyasa.
         \n#5 Running your way to better chronic disease prevention \nAerobic exercises like running will boost your cardiovascular health. Add some variation to your usual running routine to keep things interesting. One option is to include interval training as part of your exercise programme, where you run at a faster pace for a sustained duration, slow down to let your body recover, and then speed up again.
         \nLastly, take care of yourself by listening to your body, and easing up the pace if you need to — exercise caution today so you can exercise again tomorrow!'
        3,
        'https://img.freepik.com/premium-vector/healthy-lifestyle-vector-illustration-with-organic-vegetables-fruit-workout_2175-18027.jpg?w=996'
        'Author : denayune, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    

-- Educational content review rating
INSERT INTO educational_content_review_rating
(Review, Rating, UserID, educational_contentid)
VALUES
    ('This is awesome!',                                3.2, '7', 1),
    ('The content is very insightful.',                 5.0, '8', 1),
    ('I love this content!' ,                           4.0, '9', 1),
    ('I love this content!' ,                           4.0, '12', 1),
    ('This is awesome stuff!',                          3.2, '7', 2),
    ('The recipe is very detailed',                     5.0, '8', 2),
    ('I love this recipe!' ,                            4.0, '9', 2);
