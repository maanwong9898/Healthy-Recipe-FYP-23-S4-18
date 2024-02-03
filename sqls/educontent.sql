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
     (
        '4',
        '2024-01-16 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Fun Fruity Facts for Health',  -- Title
        'Fruits are packed with health benefits as they are naturally low in fat, calories and sodium. \nFruit also provides a rich resource of nutrients which can be seen from their bright colours! The colour, smell and taste of a fruit comes from the plant’s phytochemicals. These plant-chemicals are believed to offer a wide range of health benefits, including those with antioxidants properties, carotenoid from orange-coloured fruits, and anthocyanin from red, blue and purple coloured fruit and vegetables.
         \nIf you want to keep the doctor away, the magic number is two servings of fruits per day.
         \nHealthy Fruits to Eat \nApples — Besides being a notable source of phytonutrients and antioxidants, apples also work as a natural mouth refresher, cleaning your teeth with each bite, while leaving behind a pleasing aroma in your mouth.
         \nBananas — Bananas contain one of the highest amounts of potassium found among fruit. A medium-sized banana contains around 422mg of potassium. Potassium is an important nutrient for the functioning of muscles. 
         \nBerries — Among all the fruits, berries contain the highest amount of antioxidants. The antioxidant properties of these fruit help to fight off diseases and potentially prevent cell deterioration. 
         \nDurians — Durian lovers will be pleased to know that there are many health benefits of consuming this love-it-or-hate-it fruit. The fruit is full of vitamins and minerals. It is also a good source of dietary fibre as five seeds provide 16% of our dietary fibre requirements. You might be surprised to know that durians actually contain zero cholesterol, since cholesterol is only found in animal products. 
         \nNow that you know your fruity facts, go ahead and grab some healthy fruits to snack on that is not only delicious but also good for your health.'
        3,
        'https://img.freepik.com/free-photo/grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple_23-2147968680.jpg?w=900&t=st=1706872367~exp=1706872967~hmac=3ecd07bc4adca49ee0585aac7f1b06ade28409e30d821ac9258c63b89f718d46'
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
       (
        '5',
        '2024-01-01 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Ways to Live Healthy and Stay Healthy',  -- Title
        'A healthy lifestyle is about having a healthy diet, active lifestyle and caring for your mental wellbeing.
         \nBeing healthy or leading a healthy lifestyle is more than just keeping yourself from falling sick. Good health or healthy living encompasses many other areas, which include physical health, mental health and health management. Every area is important and cannot be neglected for you to achieve better health. 
         \nPhysical Activity and An Active Lifestyle \nBoost your physical health with an active lifestyle. Taking care of your body is important for good health, but the problem is that people often neglect their own bodies. If you do not eat a proper diet or do not get enough sleep, you are depriving yourself of good physical health! Keeping yourself physically healthy with an active lifestyle and physical activity will allow you to feel better and more energetic every day.
         \nActive Lifestyle \nAnother thing you should do to be healthy is to get active! An active lifestyle with adequate physical activity and exercise can really help to improve your health, not only by reducing the risk of cardiovascular (heart and blood vessel) disease but also helps you feel more confident and better about yourself, improves your energy level and concentration, relieves stress and anxiety. Some moderate-intensity activities you can do are brisk walking, swimming, cycling or dancing. 
         \nMental Wellness and Health \nBesides a healthy body, you also need to have a healthy mind. Diseases not only affect the physical body but the mind as well. Mental health is therefore a very important component of your overall health and well-being. The absence of mental illnesses or disorders such as depression or schizophrenia does not mean that a person is mentally healthy. The WHO defines good mental health as the state of wellbeing in which an individual can cope with the normal stresses of life, work productively and fruitfully, realises his or her own potential, contribute to his or her community.
         \nBeing healthy does not stop at keeping yourself free from disease and illness. Being healthy requires you to take care of your physical, mental and emotional health. There are no limits to how much health you can achieve. The healthier you are, the better you will be able to enjoy life.'
        3,
        'https://img.freepik.com/premium-photo/several-types-fruits-vegetables-healthy-food-yoga-exercise-lifestyle_39755-139.jpg?w=1060'
        'Author : user5117301, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
     (
        '6',
        '2023-12-01 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Benefits of drinking Tea',  -- Title
        'A hot, healthy drink could be a simple cup of tea. Learn more about the different types of tea and the health benefits of tea.Tea has been known to be a healthy beverage for many centuries. What are the differences between the different types of teas? All teas are made from leaves of the Camellia Sinensis plant. The main difference between these teas lies in the way the tea leaves are processed.
         \nWhite vs Green Tea \nThe way tea leaves are processed determines the types of tea produced. White tea is made from the buds and young leaves while green tea is made from mature leaves. To prevent oxidation(which causes browning), white and green tea leaves are steamed before drying. This process helps in the retention of the naturally occurring phytochemicals of the tea leaf.
         \nOolong vs Black Tea \nOolong tea and black tea are healthy, hot beverages.Oolong tea and black tea are made from mature leaves. To enhance the tea’s flavour, oolong and black tea leaves are bruised and broken into bits respectively, before they are left to oxidise. Oolong tea is less oxidised as compared to black tea. The oxidation process also converts catechins into other beneficial phytochemicals. Hence, the content and type of phytochemicals present in oolong and black teas generally differ from those of white and green teas.
         \nBenefits of Drinking Tea \nPhytochemicals in tea have antioxidant properties. For a refreshing change from drinking plain water, try drinking a cup of tea instead. Teas are rich in beneficial phytochemicals such as those mentioned above. Freshly brewed tea generally contains more phytochemicals as compared to instant preparations and ready-to-drink teas. The phytochemicals present in teas have antioxidant properties that have health-promoting benefits. 
         \nRemember to add less sugar or omit it completely when preparing tea to experience the original tea’s flavour, or choose ready-to-drink teas that are unsweetened or sweetened with less sugar for a healthier beverage.
         \nRegular tea consumption has been shown to improve the function of the blood vessels and may also help with weight loss by reducing visceral fat. Regular tea drinking may reduce the risk of cardiovascular disease too.'
        3,
        'https://img.freepik.com/free-photo/close-up-delicious-tea-small-bowls_23-2149483936.jpg?w=996&t=st=1706873785~exp=1706874385~hmac=012c093778658e99a78032f5cccaeb47d8f3db477e65fe62f8e9c0e2921e5837'
        'Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '7',
        '2024-02-02 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Healthy Eating Tips to Feast Without Guilt',  -- Title
        'We love a good feast. Mindful eating and switching out sinful foods for healthier options are some ways you can feast without guilt. \nOnce we sit down and help ourselves generously to some pen cai or pineapple tarts during Chinese New Year, the primal mind takes over, and we are gripped by the impulse to eat as much as possible.
         \nHealthy Eating Tip 1: Practice Mindful Eating \nDo not give in and always practice mindful eating. You can control your intake using smaller plates when dining so that you do not overload a bigger plate with excessive food. \nDrink plenty of water during the day and practice mindful eating. Pause during your meal to monitor your hunger. Easier said than done? Maybe. But before you start feasting this festive season, stop and take a moment to remember that those calories gained are not as easily shed. 
         \nHealthy Eating Tip 2: Avoid Food high in fat \nAvoid dishes high in fat, especially saturated fat. This can come from fatty meat or poultry skin or from deep frying or coconut milk in sauces. \nBraised pork belly, or just about any dish made with meat that is high in fat, should be replaced with leaner cuts.
         \nHealthy Eating Tip 3: Go for Good, Healthy Food \nBoiled, grilled or steamed dishes such as fish are healthier options. Vegetables are a must — chap chai is a good choice. Traditional yu sheng can be a healthy dish, but only if you limit the oil, sugary sauces and fried crackers.​'
        3,
        'https://img.freepik.com/free-photo/chinese-new-year-lantern_778687-2294.jpg?t=st=1706877341~exp=1706880941~hmac=45ab9e093fcf2ae5b28b7cc27919e86262ceb7dac421ff0a9d2ed75c5bd91d7f&w=1380'
        'Author: verazinha, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '8',
        '2024-01-09 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Healthy Cooking with Sauces',  -- Title
        'Sauces! They are delicious and also sources of sugar and salt. Learn how to cut down on sugar and how to reduce salt intake when cooking with sauces with these healthy cooking methods. 
         \nHealthy Cooking with Fish Sauce \nThis high-in-sodium sauce adds that salty oomph to Thai food and Vietnamese spring rolls. Cut back on this sauce if you have high blood pressure or hypertension. So, how to reduce your salt intake? For a slightly lower-in-sodium dipping sauce, try light soy sauce with chopped chili padi and a squeeze of lime.
         \nHealthy Alternatives to Oyster Sauce \nOyster sauce, used to stir-fry veggies like kai lan and bok choy, is high in sodium. Use this sauce sparingly if you are watching your sodium intake or actively cutting back on the amount of sodium consumed at every meal - stir-fry your greens with spices like ginger, garlic, and peppercorns instead!
         \nLess Salt with Sambal Belacan \nThis spicy, shrimpy sauce is high in sodium and calories, so eat less if you have high blood pressure or are watching your calories. When frying sambal belacan at home, taste before adding salt as belacan is already salty.
         \nLower Sodium Light Soy Sauce \nSavoury soy sauce is light in calories but high in sodium. Remember to taste your food before seasoning: ask yourself if you really need extra soy sauce in your dry mee pok. Also, check out lower-sodium versions of soy sauces.
         \nSubstitute Garlic Chilli Sauce with Spices \nThis sauce isnt especially high in calories, salt, or sugar, but the numbers do add up, so eat moderately if you are watching your calorie and sodium intake! Perhaps cut down from two packets of sauce to one when you are eating fries or chicken wings. Here is a healthy cooking tip: Try substituting with spices like paprika and garlic powder.
         \nSwitch up your sauces to enjoy a healthier and equally delicious meal! '
        3,
        'https://img.freepik.com/premium-photo/earthenware-pottery-jar-collection-with-rustic-decoration-ornate-pattern-generated-by-artificial-intelligence_24640-117438.jpg?w=1060'
        'Author: stockgiu, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '9',
        '2024-01-10 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Healthy Home Cooking Meal Tips',  -- Title
        'Are you worried that you have no time or that you need to be able to cook like a chef to serve nourishing meals? Learn some practical tips to make healthy home cooking quick and easy. 
        \nBalance Your Food Choices \nYou do not have to give up your favourite food just because it is high in calories. Reducing your portion size or making up for excess calories by eating a lower-calorie meal later are quick tips to help you manage your diet.
        \nEat WholeGrains! \nBe it bread, rice or noodles, natural is best. The less processed your food is and the more wholegrains it contains, the longer and faster you will stay full.
        \nWhen prepared well with less fat or sugar, wholegrains, fruits and vegetables offer you lower-calorie meal choices at any time of the day. Rich in antioxidants, they give you more goodness in a bite than a higher-calorie meal.
        \nLove wholegrains? \nWholegrains are not being limited to bread and rice. Do you know that wholegrains now come in kway teow, noodles, man tou and biscuits? \nWho says being healthy cant be fun and easy?'
        3,
        'https://www.freepik.com/premium-vector/woman-drinks-coffee-tea-cozy-kitchen-kitchen-utensils-concept-banner-website-apps_47579163.htm#query=healthy%20home%20cooking%20tips&position=32&from_view=search&track=ais&uuid=16984310-7df8-4616-9a06-cca8a223d444'
        'Author: i.serik, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '10',
        '2024-01-10 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Tips for Successful Weight Management',  -- Title
        'A healthy lifestyle is the best long-term and sustainable weight management strategy. \nHere are simple things you can do every day that can help you achieve sustainable weight management.
         \n1. Balance Your Food Choices \nCaloric balance is the key to managing your weight. You do not have to give up your favourite foods just because they are high in calories.
         \n2. Watch What You Eat \nHealthy food does wonders for the body. Be mindful of the food choices you make and select healthier options whenever you can. 
         \n3. Get Your Recommended Physical Activity Minutes \nPhysical activity is essential for effective weight management, as it burns calories that we have consumed over the day. 
         \n4. Building Strength \nStrength-building activities provide additional health benefits. Strength training not only helps to improve bone and muscle strength but also contributes to greater muscle mass, which boosts resting metabolic rate, therefore helping your body burn more calories.
         \n5. Have Regular Meals \nSkipping meals can cause you to snack more often or binge eat, leading you to consume even more calories. '
        3,
        'https://www.freepik.com/free-vector/healthy-people-carrying-different-icons_3226124.htm#query=healthy%20living&position=12&from_view=search&track=ais&uuid=415dd0fe-a18c-4182-9b34-7c748a53d7fa'
        'Author: rawpixel.com, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '11',
        '2024-01-17 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        '3 Tips to Achieve A Healthy Weight the Right Way',  -- Title
        'Stop skipping meals and have balanced, healthier meals to achieve and maintain a healthy weight sustainably. Check out these 3 counter-intuitive tips to manage your weight better.
         \n1. Limit Or Avoid Sugary Drinks \nSugar from drinks provides empty calories, which raise your daily calorie count without adding nutrients. Sugary drinks unlikely to make you full and satiated, thus it is easy to over consume. Make water as your default drink option! The best thirst quencher which is sugar- and calorie-free. 
         \n2. Switch To Wholegrains \nWholegrains could help you manage your weight as they help keep you feeling full longer. It is because wholegrain foods are higher in fibre, which provides bulk. In addition, they are generally digested at a slower rate.
         \n3. Make Friends With Fruit and Vegetables \nYou probably heard this a million times already, but the importance of consuming more fruit and vegetables can never be stressed enough!
         The water and fibre they contain add volume to your meals and fill you up more easily with lower overall calorie intake. Being rich in nutrients, fruit and vegetables are essential for your health.'
        3,
        'https://img.freepik.com/free-vector/healthy-eating-circle-composition_98292-7506.jpg?w=740&t=st=1706991424~exp=1706992024~hmac=a5a184b33ff7f1a0aa24d71976e96b1251351cd127ae7daabf9ef564628a5c8b'
        'Author: macrovector_official, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
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
    ('The content is very detailed',                    5.0, '8', 2),
    ('I love this content!' ,                           4.0, '9', 3);
    ('The content is very informative!',                5.0, '8', 4),
    ('I love this content!' ,                           4.0, '9', 5);
    ('This is really helpful!' ,                        5.0, '9', 6);
    ('The content is very informative!',                5.0, '8', 7),
    ('The content is very detailed',                    5.0, '8', 8),
    ('This is really helpful!' ,                        5.0, '9', 9);
    ('The content is very informative!',                5.0, '8', 10),
    ('The content is very detailed',                    5.0, '8', 11),