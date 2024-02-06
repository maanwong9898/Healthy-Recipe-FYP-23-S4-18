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
         The average recommended daily caloric intake is 2200 calories for males and 1800 calories for females.  
         \nOne of the simplest and most effective methods for controlling your calorie intake is portion control. Often, we eat what is on our plate rather than what our body needs.
         Consuming the right number of calories is a good first step towards achieving a healthier body. However, not all calories are equal. Keeping to the calorie count on a diet consisting of only sugary cakes, meat dishes, or a glass of wine is far from ideal. This is because your body needs a variety of vitamins and minerals, as well as fibre to function properly.
         \nEating healthy is not limited to eating the right amount and the right mix. It is also important for optimum nutrition to choose healthy foods prepared with healthier options and ingredients. Steamed chicken, for example, is far healthier than deep-fried chicken.
         \nFor example, wholegrains are healthier than refined grains (white rice or bread) as they contain more vitamins, antioxidants and fibre. In addition, they also keep you filling full for longer, which reduce the risk of overeating. Choosing healthier cooking oils are also important.
         If fat loss is one of your weight loss goals, merely controlling your calorie intake will not be enough to do the trick. Diet and exercise are pertinent when it comes to healthy weight loss.You should be doing a combination of cardio and strength-training exercises, which are useful in losing fat as well as gaining muscle mass.',
         3, -- userID
        'https://img.freepik.com/free-vector/carbohydrate-protein-fat-food-set-vector-illustrations-nutrition-categories-cartoon-carb-fibers-grains-cereal-bread-energy-meals-meat-eggs-isolated-white-complex-diet-concept_74855-22969.jpg?w=1380&t=st=1706756983~exp=1706757583~hmac=9a9542c1b1ed2dcda25fd86008ebd059343238c837acf766afbfd8a46548fedf',
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
         \n#5 Swap to Wholegrains \nEating wholegrain foods such as brown rice, wholemeal bread can help reduce the risk of developing heart disease and diabetes. They can also help with weight management because they keep you feeling full longer and reduce the need for snacking.',
        3,
        'https://img.freepik.com/free-vector/healthy-choices-before-after-diet-results-4-flat-icons-square-composition-banner_1284-5424.jpg?t=st=1706758843~exp=1706759443~hmac=2781a669c00a887fe19e1229779c946466acdf525f70ac0b9e865ccfc36b8ed5',
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
         \n#2 Cycle to lose weight and prevent chronic illnesses \nRegular aerobic exercises like cycling has many health benefits. Engaging in regular aerobic exercises improves cardiovascular fitness and decreases stress and body fat levels. Cycling is a great way to let go of any tension accumulated at work.
         \n#3 Strength Training, a weatherproof physical activity \nStrength training a few times a week will keep you strong and healthy.
         For healthy bone and muscles, you are recommended to partake in bone and muscle strengthening exercises at least 2-3 days a week. Hitting the gym does make it easy to fit workouts into your schedule. 
         \n#4 Yoga for a balance of strength and flexibility \nDoing yoga a few times a week will keep you healthy. Yoga may seem meditative and relaxing, but it also requires a balance of strength and flexibility, and can prove to be a challenging workout. Beginners should start with a Hatha class to pick up the fundamental poses, before trying out more intensive and faster styles of yoga such as Vinyasa.
         \n#5 Running your way to better chronic disease prevention \nAerobic exercises like running will boost your cardiovascular health. Add some variation to your usual running routine to keep things interesting. One option is to include interval training as part of your exercise programme.
         \nLastly, take care of yourself by listening to your body, and easing up the pace if you need to — exercise caution today so you can exercise again tomorrow!',
        3,
        'https://img.freepik.com/premium-vector/healthy-lifestyle-vector-illustration-with-organic-vegetables-fruit-workout_2175-18027.jpg?w=996',
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
         \nDurians — Durian lovers will be pleased to know that there are many health benefits of consuming this love-it-or-hate-it fruit. The fruit is full of vitamins and minerals. It is also a good source of dietary fibre. You might be surprised to know that durians actually contain zero cholesterol, since cholesterol is only found in animal products. 
         \nNow that you know your fruity facts, go ahead and grab some healthy fruits to snack on that is not only delicious but also good for your health.',
        3,
        'https://img.freepik.com/free-photo/grapes-strawberries-pineapple-kiwi-apricot-banana-whole-pineapple_23-2147968680.jpg?w=900&t=st=1706872367~exp=1706872967~hmac=3ecd07bc4adca49ee0585aac7f1b06ade28409e30d821ac9258c63b89f718d46',
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
         \nMental Wellness and Health \nBesides a healthy body, you also need to have a healthy mind. Diseases not only affect the physical body but the mind as well. Mental health is therefore a very important component of your overall health and well-being. The absence of mental illnesses or disorders does not mean that a person is mentally healthy. The WHO defines good mental health as the state of wellbeing in which an individual can cope with the normal stresses of life, work productively and fruitfully, realises his or her own potential, contribute to his or her community.
         \nBeing healthy does not stop at keeping yourself free from disease and illness. Being healthy requires you to take care of your physical, mental and emotional health. There are no limits to how much health you can achieve. The healthier you are, the better you will be able to enjoy life.',
        3,
        'https://img.freepik.com/premium-photo/several-types-fruits-vegetables-healthy-food-yoga-exercise-lifestyle_39755-139.jpg?w=1060',
        'Author : user5117301, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
     (
        '6',
        '2023-12-01 15:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Benefits of drinking Tea',  -- Title
        'A hot, healthy drink could be a simple cup of tea. Learn more about the different types of tea and the health benefits of tea.Tea has been known to be a healthy beverage for many centuries. What are the differences between the different types of teas? All teas are made from leaves of the Camellia Sinensis plant. The main difference between these teas lies in the way the tea leaves are processed.
         \nWhite vs Green Tea \nThe way tea leaves are processed determines the types of tea produced. White tea is made from the buds and young leaves while green tea is made from mature leaves. To prevent oxidation, white and green tea leaves are steamed before drying. This process helps in the retention of the naturally occurring phytochemicals of the tea leaf.
         \nOolong vs Black Tea \nOolong tea and black tea are healthy, hot beverages. Oolong tea and black tea are made from mature leaves. To enhance the tea’s flavour, oolong and black tea leaves are bruised and broken into bits respectively, before they are left to oxidise. Oolong tea is less oxidised as compared to black tea. The oxidation process also converts catechins into other beneficial phytochemicals. Hence, the content and type of phytochemicals present in oolong and black teas generally differ from those of white and green teas.
         \nBenefits of Drinking Tea \nPhytochemicals in tea have antioxidant properties. For a refreshing change from drinking plain water, try drinking a cup of tea instead. Teas are rich in beneficial phytochemicals such as those mentioned above. Freshly brewed tea generally contains more phytochemicals as compared to instant preparations and ready-to-drink teas. The phytochemicals present in teas have antioxidant properties that have health-promoting benefits. 
         \nRemember to add less sugar or omit it completely when preparing tea to experience the original tea’s flavour, or choose ready-to-drink teas that are unsweetened or sweetened with less sugar.
         \nRegular tea consumption has been shown to improve the function of the blood vessels and may also help with weight loss by reducing visceral fat. Regular tea drinking may reduce the risk of cardiovascular disease too.',
        3,
        'https://img.freepik.com/free-photo/close-up-delicious-tea-small-bowls_23-2149483936.jpg?w=996&t=st=1706873785~exp=1706874385~hmac=012c093778658e99a78032f5cccaeb47d8f3db477e65fe62f8e9c0e2921e5837',
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
         \nHealthy Eating Tip 3: Go for Good, Healthy Food \nBoiled, grilled or steamed dishes such as fish are healthier options. Vegetables are a must — chap chai is a good choice. Traditional yu sheng can be a healthy dish, but only if you limit the oil, sugary sauces and fried crackers​.',
        3,
        'https://img.freepik.com/free-photo/chinese-new-year-lantern_778687-2294.jpg?t=st=1706877341~exp=1706880941~hmac=45ab9e093fcf2ae5b28b7cc27919e86262ceb7dac421ff0a9d2ed75c5bd91d7f&w=1380',
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
         \nHealthy Alternatives to Oyster Sauce \nOyster sauce, used to stir-fry veggies like kai lan and bok choy, is high in sodium. Use this sauce sparingly if you are watching your sodium intake - stir-fry your greens with spices like ginger, garlic, and peppercorns instead!
         \nLess Salt with Sambal Belacan \nThis spicy, shrimpy sauce is high in sodium and calories, so eat less if you have high blood pressure or are watching your calories. When frying sambal belacan at home, taste before adding salt as belacan is already salty.
         \nLower Sodium Light Soy Sauce \nSavoury soy sauce is light in calories but high in sodium. Remember to taste your food before seasoning: ask yourself if you really need extra soy sauce in your dry mee pok. Also, check out lower-sodium versions of soy sauces.
         \nSubstitute Garlic Chilli Sauce with Spices \nThis sauce isnt especially high in calories, salt, or sugar, but the numbers do add up, so eat moderately if you are watching your calorie and sodium intake! Perhaps cut down from two packets of sauce to one when you are eating fries or chicken wings. Try substituting with spices like paprika and garlic powder.
         \nSwitch up your sauces to enjoy a healthier and equally delicious meal!',
        3,
        'https://img.freepik.com/premium-photo/earthenware-pottery-jar-collection-with-rustic-decoration-ornate-pattern-generated-by-artificial-intelligence_24640-117438.jpg?w=1060',
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
        \nLove wholegrains? \nWholegrains are not being limited to bread and rice. Do you know that wholegrains now come in kway teow, noodles, man tou and biscuits? \nWho says being healthy cant be fun and easy?',
        3,
        'https://www.freepik.com/premium-vector/woman-drinks-coffee-tea-cozy-kitchen-kitchen-utensils-concept-banner-website-apps_47579163.htm#query=healthy%20home%20cooking%20tips&position=32&from_view=search&track=ais&uuid=16984310-7df8-4616-9a06-cca8a223d444',
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
         \n5. Have Regular Meals \nSkipping meals can cause you to snack more often or binge eat, leading you to consume even more calories.',
        3,
        'https://www.freepik.com/free-vector/healthy-people-carrying-different-icons_3226124.htm#query=healthy%20living&position=12&from_view=search&track=ais&uuid=415dd0fe-a18c-4182-9b34-7c748a53d7fa',
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
         The water and fibre they contain add volume to your meals and fill you up more easily with lower overall calorie intake. Being rich in nutrients, fruit and vegetables are essential for your health.',
        3,
        'https://img.freepik.com/free-vector/healthy-eating-circle-composition_98292-7506.jpg?w=740&t=st=1706991424~exp=1706992024~hmac=a5a184b33ff7f1a0aa24d71976e96b1251351cd127ae7daabf9ef564628a5c8b',
        'Author: macrovector_official, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '12',
        '2024-01-22 15:30:00',  -- CreatedDT
        'UCFSHealth',  -- Publisher
        'Healthy Lifestyles, Healthy Outlook',  -- Title
        'Healthy Lifestyles \nA healthy lifestyle can help you thrive as you move through your life. Making healthy choices isnt always easy – it can be hard to find the time and energy to exercise regularly or prepare healthy meals. 
         \nSteps you can take: \nBe physically active for 30 minutes most days of the week. Break this up into three 10-minute sessions when pressed for time. Healthy movement may include walking, sports, dancing, yoga or running.
         \nEat a well-balanced, low-fat diet with lots of fruits, vegetables, and whole grains. Choose a diet that is low in saturated fat and cholesterol, and moderate in sugar, salt and total fat.
         \nHealthy Outlook \nYou may feel pulled in different directions and experience stress from dealing with work, family and other matters, leaving little time for yourself. Learning to balance your life with some time for yourself will pay off with big benefits.
         \nSteps you can take: \nStay in touch with family and friends. \nBe involved in your community. \nMaintain a positive attitude and do things that make you happy.
         \nLearn to recognize and manage stress in your life. Good ways to deal with stress include regular exercise, healthy eating habits, and relaxation exercises such as deep breathing or meditation.',
        3,
        'https://www.freepik.com/free-vector/healthy-lifestyle-diet-fitness-vector-sign-shape-heart-with-multiple-icons-depicting-various-sports-vegetables-cereals-seafood-meat-fruit-sleep-weight-beverages_10703442.htm#query=healthy%20living&position=28&from_view=search&track=ais&uuid=c66ce9cd-0d9d-4713-895a-cbe5bb977b79',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '13',
        '2024-01-22 17:30:00',  -- CreatedDT
        'MayoClinic',  -- Publisher
        'Stress basics',  -- Title
        'Stress is a normal psychological and physical reaction to the demands of life. A small amount of stress can be good, motivating you to perform well. But many challenges daily, such as sitting in traffic, meeting deadlines and paying bills, can push you beyond your ability to cope.
         \nYour brain comes hard-wired with an alarm system for your protection. When your brain perceives a threat, it signals your body to release a burst of hormones that increase your heart rate and raise your blood pressure. Once the threat is gone, your body is meant to return to a normal, relaxed state. 
         \nStress management gives you a range of tools to reset and to recalibrate your alarm system. It can help your mind and body adapt (resilience). Without it, your body might always be on high alert. Over time, chronic stress can lead to serious health problems.
         \nDo not wait till stress damages your health, relationships or quality of life. Start practicing stress management techniques today.',
        3,
        'https://img.freepik.com/free-vector/business-stress-professional-burnout-scenes-flat-isolated-vector-illustration_1284-77609.jpg?w=1380&t=st=1707022447~exp=1707023047~hmac=87f6b75edf42a42722b5a5d5e3e70c3a248d58bfe4141d07fdbd534397d3afe1',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '14',
        '2024-01-22 17:30:00',  -- CreatedDT
        'MayoClinic',  -- Publisher
        'Fitness basics',  -- Title
        'Starting a fitness program may be one of the best things you can do for your health. After all, physical activity can reduce your risk of chronic disease, improve your balance and coordination, help you lose weight, and even boost your self-esteem. And you can reap these benefits regardless of your age, sex or physical ability. For most healthy adults, these exercise guidelines are recommended:
        \nAerobic activity. \nGet at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity a week, or an equal combination of moderate and vigorous aerobic activity. Even small amounts of physical activity are helpful. Being active for short periods of time throughout the day can add up to provide health benefits.
        \nStrength training. \nDo strength training exercises for all major muscle groups at least two times a week. Aim to do a single set of each exercise using a weight or resistance level heavy enough to tire your muscles after about 12 to 15 repetitions. Regular exercise can help you control your weight, reduce your risk of heart disease and certain cancers, and strengthen your bones and muscles. 
        \nStarting a fitness program is an important decision, but it does not have to be an overwhelming one. By planning carefully and pacing yourself, you can make fitness a healthy habit that lasts a lifetime.',
        3,
        'https://img.freepik.com/free-vector/isometic-gym-fitness-club-icons-set-with-males-females-training-indoors-isolated-vector-illustration_1284-75736.jpg?w=740&t=st=1707022776~exp=1707023376~hmac=7ed82bea8e5ec90fa5c39f986225cfe780dd46622b2ad6237132d9bd6dee2fd1',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '15',
        '2024-01-22 17:30:00',  -- CreatedDT
        'MayoClinic',  -- Publisher
        'Nutrition basics',  -- Title
        'Do you feel like you are unable keep up with the latest nutrition news because its always changing? Knowledge about nutrition and diet evolves over time, but there are some nutrition basics that can help you sort through the latest research and advice.
        \nNutrition basics come down to eating wholesome foods that support your health. Want to go beyond the basics? Talk to a healthcare professional, such as a dietitian. You can ask for diet advice that takes into account your health, lifestyle and food preferences.',
        3,
        'https://img.freepik.com/free-vector/nutritionist-recommendations-cartoon-composition-with-dietitian-appointment-healthy-meal-fruit-vegetables-supplements-diet-planning_1284-59044.jpg?w=740&t=st=1707023087~exp=1707023687~hmac=0c6f38b5356847d5c5595cedc36cceffcb8e5025651af65b658db8e3da891a0a',
        'Author: macrovector, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '16',
        '2024-01-23 17:30:00',  -- CreatedDT
        'HelpGuide',  -- Publisher
        'What is a healthy diet?',  -- Title
        'The fundamentals of healthy eating \nWhile some extreme diets may suggest otherwise, we all need a balance of protein, fat, carbohydrates, fiber, vitamins, and minerals in our diets to sustain a healthy body. You do not need to eliminate certain categories of food from your diet, but rather select the healthiest options from each category.
         \nMaking the switch to a healthy diet \nSwitching to a healthy diet does not have to be an all or nothing proposition. You dont have to completely eliminate foods you enjoy or change everything all at once — that usually only leads to cheating or giving up on your new eating plan.',
        3,
        'https://img.freepik.com/premium-vector/food-diet-healthy-lifestyle-weight-loss-banner-with-dish-salad-table-set-smartphone-diet-plan-notebook_250257-474.jpg?w=1060',
        'Author: virinaflora, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '17',
        '2024-01-23 17:30:00',  -- CreatedDT
        'World Health Organisation',  -- Publisher
        'Healthy diet',  -- Title
        'A healthy diet is essential for good health and nutrition. Eating a variety of foods and consuming less salt, sugars and saturated and industrially-produced trans-fats, are essential for healthy diet. A healthy diet comprises a combination of different foods. These include: Staples like cereals or starchy tubers or roots, Legumes, Fruit and vegetables, Foods from animal sources.
        \nHere is some useful information to follow a healthy diet, and the benefits of doing so.
        \nEat plenty of vegetables and fruit: \nThey are important sources of vitamins, minerals, dietary fibre, plant protein and antioxidants.
        \nEat less fat: \nFats and oils and concentrated sources of energy. Eating too much, particularly the wrong kinds of fat, like saturated and industrially-produced trans-fat, can increase the risk of heart disease and stroke. Use unsaturated vegetable oils rather than animal fats or oils high in saturated fats.
        \nLimit intake of sugars: \nFor a healthy diet, sugars should represent less than 10% of your total energy intake. Reducing even further to under 5% has additional health benefits. 
        \nReduce salt intake: \nKeeping your salt intake to less than 5h per day helps prevent hypertension and reduces the risk of heart disease and stroke in the adult population.',
        3,
        'https://img.freepik.com/free-vector/people-healthy-food_24908-55181.jpg?w=740&t=st=1707060287~exp=1707060887~hmac=8f50d4c17a86bbca0eccb52150bcfdb9abc14a8f7a328fe833e8bf3078175a8f',
        'Author: gstudioimagen, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '18',
        '2024-01-23 17:30:00',  -- CreatedDT
        'World Health Organisation',  -- Publisher
        'Physical activity',  -- Title
        'Being physically active helps all people, no matter their age, lead healthier lives. Some physical activity is better than doing none. By being more active throughout the day in relatively simple ways, people can quite easily achieve the recommended activity levels. Below are the levels of physical activity WHO recommends people of different ages undertake.
        \nChildren and adolescents aged 5-17 years \n Should do at least 60 minutes of moderate to vigorous-intensity physical activity daily. Physical activity of amounts more than 60 minutes daily provides additional health benefits.
        \nAdults aged 18–64 years \nShould do at least 150 minutes of moderate-intensity physical activity throughout the week, or do at least 75 minutes of vigorous-intensity physical activity, or an equivalent combination of both. For additional health benefits, adults should increase their moderate-intensity physical activity to 300 minutes per week, or equivalent.
        \nAdults aged 65 years and above \nShould do at least 150 minutes of moderate-intensity physical activity throughout the week, or at least 75 minutes of vigorous-intensity physical activity, or an equivalent combination of both. Those with poor mobility should perform physical activity to enhance balance and prevent falls, 3 or more days per week.',
        3,
        'https://www.freepik.com/free-vector/flat-happy-children-play-run-cycling-public-park_27059506.htm#query=physical%20activity&position=9&from_view=search&track=ais&uuid=70a23307-fd12-4673-81dd-281d900cc9b4',
        'Author: redgreystock, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '19',
        '2023-01-23 17:30:00',  -- CreatedDT
        'CDC',  -- Publisher
        'Benefits of Healthy Eating',  -- Title
        'Benefits of Healthy Eating for Adults includes: Keeps skin, teeth, and eyes healthy, Supports muscles, Boosts immunity, Strengthens bones, Lowers risk of heart disease, type 2 diabetes, Helps the digestive system function, Helps achieve and maintain a healthy weight
        \nBenefits of Healthy Eating for Children includes: Keeps skin, teeth, and eyes healthy, Supports muscles, Helps achieve and maintain a healthy weight, Strengthens bones, Supports brain development and healthy growth, Boosts immunity, Helps the digestive system function.',
        3,
        'https://img.freepik.com/free-photo/portrait-healthy-woman-eating-salad-kitchen_23-2148075987.jpg?w=996&t=st=1707061004~exp=1707061604~hmac=98c9078a5b017111a38abfd355c0755598a3dd7c254db39e47d38dd0b7214e4a',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '20',
        '2024-01-23 17:30:00',  -- CreatedDT
        'medicalnewstoday',  -- Publisher
        'What are the benefits of eating healthy?',  -- Title
        'Following a healthy diet has many benefits, including building strong bones, protecting the heart, preventing disease, and boosting mood.
        \nA healthy diet typically includes nutrient-dense foods from all of the major food groups, including lean proteins, whole grains, healthy fats, and fruits and vegetables of many colors. Healthy eating habits also include replacing foods that contain trans fats, added salt, and sugar with more nutritious options. Following a healthy diet has many benefits, including building strong bones, protecting the heart, preventing disease, and boosting the mood.',
        3,
        'https://img.freepik.com/free-vector/healthy-food-concept-with-people-vegetables_107791-11174.jpg?w=996&t=st=1707061253~exp=1707061853~hmac=bc0d17c0a949982f257043fd094b6af77e1fd0c41de80a7421d25c2f08d5c088',
        'Author: upklyak, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '21',
        '2024-01-23 19:30:00',  -- CreatedDT
        'British Heart Foundation',  -- Publisher
        'Healthy Eating',  -- Title
        'Eating a healthy diet can help reduce your risk of developing coronary heart disease and stop you from gaining too much weight, reducing your risk of diabetes and high blood pressure. It can also help lower your cholesterol levels and reduce your risk of some cancers. Even if you already have a heart condition, a healthy diet can benefit your heart.
         \nA balanced diet \nEveryone should aim for a well-balanced diet. Strict diets are hard to sustain long term and may not provide the balance of nutrients you need.
         \nHealthy eating is not about cutting out or focusing on individual foods or nutrients. It is thinking about your whole diet and eating a variety of foods in the right amounts to give your body what it needs. 
         \nThere are foods we need to eat more of, like fruit and vegetables, and others we need to eat less of, which are foods high in saturated fat, sugar and salt. It is all about getting the right balance. Eating healthily can be tasty, simple and fun. It is about making small, long-term changes and enjoying the food you eat.',
        3,
        'https://img.freepik.com/free-vector/eating-variety-foods-concept-illustration_114360-11295.jpg?w=740&t=st=1707061728~exp=1707062328~hmac=afbffa590c8b411a91cafeca0e8542287d1e8d50254c1428df438af6559f9049',
        'Author: storyset, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '22',
        '2024-01-25 19:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'Fruits',  -- Title
        'What foods are in the Fruit Group? \nThe Fruit Group includes all fruits and 100% fruit juice. Fruits may be fresh, frozen, canned, or dried/dehydrated. Fruits can be eaten whole, cut up, pureed (mashed), or cooked. At least half of the recommended amount of fruit eaten should come from whole fruit, rather than 100% fruit juice. In general, the following counts as 1 cup from the Fruit Group: 1 cup of fruit,half cup of dried fruit, 1 cup of 100% fruit juice.
         \nWhy is it important to eat fruit? \nEating fruit has many health benefits. People who eat fruits and vegetables as part of an overall diet may lower their risk for certain diseases. Fruits provide nutrients needed to maintain your health and body.
        \nHealth Benefits \nAll food and beverage choices matter. Focus on variety, amount, and nutrition. \nEating foods such as fruits that are lower in calories per cup, instead of other higher calorie foods, may help lower overall calorie intake.
        \nEating a diet rich in fruits and vegetables as part of an overall healthy diet may reduce the risk for heart disease, including heart attack and stroke. \nAdding fruit can help increase the amount of fiber and potassium we eat. These are important nutrients that many people do not get enough of.',
        3,
        'https://img.freepik.com/free-photo/organic-autumn-fruits_114579-44376.jpg?w=996&t=st=1707120350~exp=1707120950~hmac=5cf26463725eeb49c63d4e1dd2bb3ac92f4a28c6d603c84b17d1dd891bcb1682',
        'Author: azerbaijan_stockers, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '23',
        '2024-01-25 19:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'Vegetables',  -- Title
        'What foods are in the Vegetable Group? \nAny vegetable or 100% vegetable juice counts as part of the Vegetable Group. Vegetables may be raw or cooked and can be fresh, frozen, canned, or dried. They can be whole, cut-up, or mashed.
        \nWhat counts as a cup of vegetables? \nThe following examples count as 1 cup from the Vegetables Group: 1 cup of raw or cooked vegetables or vegetable juice, 2 cups of raw leafy salad greens
        \nWhy is it important to eat vegetables? \nEating vegetables provides health benefits. People who eat fruits and vegetables as part of an overall healthy diet are likely to have a reduced risk of some diseases. Vegetables provide nutrients vital for the health and maintenance of the body.
        \nHealth Benefits \nAll food and beverage choices matter. Focus on variety, amount, and nutrition.
        \nAs part of an overall healthy diet, eating foods lower in calories per cup, such as vegetables, instead of higher-calorie food may help you lower your calorie intake.
        \nEating a diet rich in vegetables and fruits as part of an overall healthy diet may reduce the risk for heart disease, including heart attack and stroke.',
        3,
        'https://img.freepik.com/premium-photo/fresh-organic-vegetable_114106-1589.jpg?w=996',
        'Author: fetrinka, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '24',
        '2024-01-25 16:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'About Oils',  -- Title
        'Oils are fats that are liquid at room temperature, like vegetable oils used in cooking. They come from many different plants and from fish. Oils are not a food group, but they provide you with important nutrients such as unsaturated fats and vitamin E. Choosing unsaturated fat in place of saturated fat can reduce your risk of heart disease and improve “good” (HDL) cholesterol levels.
        \nSources of Oils \nMany foods supply oils, like nuts, olives, some fish, and avocados. Most oils are high in monounsaturated fats or polyunsaturated fats, which are healthy fats, and low in saturated fats. Foods that are mainly made of oil include mayonnaise, certain salad dressings, and soft margarine that comes in a tub or can be squeezed from a bottle.
        \nThe fat from some tropical plants like coconut oil, palm oil, and palm kernel oil are not included in the oils category because they are higher in saturated fats than other oils. They can be thought of as solid fats. Solid fats are fats that are solid at room temperature, like butter, lard and shortening. Solid fats come from many animal foods and can be made from vegetable oils.',
        3,
        'https://img.freepik.com/free-photo/cherry-tomatoes-pastas-garlic-green-pepper-olive-oil-wooden-board_114579-66679.jpg?w=996&t=st=1707125650~exp=1707126250~hmac=c0f6214f8d60c754937dd05a1e48a20150cce9d39146cc7fb277a34fe75b4d6a',
        'Author: azerbaijan_stockers, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '25',
        '2024-01-25 16:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'Limiting Saturated Fat',  -- Title
        'Saturated fat is often found in forms that are solid at room temperature. Examples of these include milk fat, butter, or the fat inside or around meat. A few food products such as coconut oil, palm oils, or whole milk remain as liquids at room temperature but are high in saturated fat. \nCut back on saturated fat by replacing foods high in saturated fat with foods higher in unsaturated fat. Some foods that are high in saturated fat are:
        \nDesserts and baked goods, such as cakes, cookies, donuts, pastries, and croissants \nMany cheeses and foods with cheese, like pizza, burgers, and sandwiches \nSausage, hot dogs, bacon, and ribs \nFried potatoes (French fries) if fried in saturated fat or hydrogenated oil
        \nRegular ground beef (like 85% lean) and cuts of meat with fat you can see \nFried chicken and other chicken dishes with the skin \nWhole milk and full-fat dairy foods and desserts',
        3,
        'https://img.freepik.com/free-vector/variety-fat-foods_1308-126934.jpg?w=360&t=st=1707129359~exp=1707129959~hmac=936040c9da75d996db51d3548f00efccf5482aabdb3111a0c7a988e932298419',
        'Author: brgfx, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '26',
        '2024-01-25 16:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'Grains',  -- Title
        'What foods are in the Grains Group? \nFoods made from wheat, rice, oats, cornmeal, barley, or another cereal grain is a grain product. Bread, pasta, breakfast cereals, grits, and tortillas are examples of grain products. Foods such as popcorn, rice, and oatmeal are also included in the Grains Group.
        \nGrains have two subgroups: whole grains and refined grains. \nWhole grains have the entire grain kernel, which includes the bran, germ, and endosperm. Some whole-grain examples are whole-wheat flour, brown rice.
        \nRefined grains should be enriched. This means adding back certain B vitamins (thiamin, riboflavin, niacin, folic acid) and iron. However, fiber is not added back to enriched grains. Some food products are made from mixtures of whole grains and refined grains. Only foods that are made with 100% whole grains are considered a whole grain food.
        \nWhat counts as an ounce-equivalent of grains? \nThe following are some grain food portions that are equal to one ounce: \n1 slice of bread \n1 cup of ready-to-eat cereal \n½ cup of cooked rice, cooked pasta, or cooked cereal
        \nHealth Benefits \nEating whole grains as part of a healthy diet may reduce the risk of getting heart disease. \nEating whole grain foods that have fiber, as part of an overall healthy diet, can support healthy digestion. \nEating whole grains, as part of an overall healthy diet, may help with weight management.',
        3,
        'https://img.freepik.com/free-vector/rice-grain-sacks-bowls-sketch-set_74855-16230.jpg?w=740&t=st=1707129738~exp=1707130338~hmac=8bda5efb451e278df360c5dbd2c4a88e7ed45a9a90e69fee993452498e7dd98f',
        'Author: pch.vector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '27',
        '2024-01-25 16:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'Protein Foods',  -- Title
        'What foods are in the Protein Foods Group? \nProtein Foods include all foods made from seafood; meat, poultry, and eggs; beans, peas, and lentils; and nuts, seeds, and soy products. Beans, peas, and lentils are also part of the Vegetable Group. To learn more, visit the Beans, Peas, and Lentils page.
        \nEat a variety of protein foods to get more of the nutrients your body needs. Meat and poultry choices should be lean or low-fat, like 93% lean ground beef, pork loin, and skinless chicken breasts. Choose seafood options that are higher in healthy fatty acids (called omega-3s) and lower in methylmercury, such as salmon, anchovies, and trout. Vegetarian protein options include beans, peas, lentils, nuts, seeds, and soy products.
        \nThe following examples count as 1 ounce-equivalent from the Protein Foods Group: \n1 ounce of meat, poultry or fish \n¼ cup cooked beans \n1 egg \n½ ounce of nuts or seeds
        \nHealth Benefits \nProteins function as building blocks for bones, muscles, cartilage, skin, and blood. They are also building blocks for enzymes, hormones, and vitamins. Proteins are one of three nutrients that provide calories.
        \nNutrients provided by various protein foods can differ. Varying your protein food choices can provide your body with a range of nutrients designed to keep your body functioning well. ',
        3,
        'https://img.freepik.com/free-vector/protein-food-products-flat-illustration-poster_1284-17181.jpg?w=740&t=st=1707130229~exp=1707130829~hmac=b694917c83a4cf0982726727ad1922db8598ac8aed92aa40ed258680958e065f',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '28',
        '2024-01-25 16:30:00',  -- CreatedDT
        'myplate',  -- Publisher
        'Dairy',  -- Title
        'What foods are included in the Dairy Group? \nThe Dairy Group includes milk, yogurt, cheese, lactose-free milk and fortified soy milk and yogurt. 
        \nThe Dairy Group does not include foods made from milk that have little calcium and a high fat content. Examples of this are cream cheese, sour cream, cream, and butter.
        \nWhat counts as a cup in the Dairy Group? \nIn general, the following counts as 1 cup from the Dairy Group: \n1 cup of milk, yogurt, or soy milk \n1 ½ ounces of natural cheese
        \nWhy is it important to eat or drink dairy? \nEating or drinking dairy products offers health benefits, like building and maintaining strong bones. Dairy Group foods provide nutrients that are vital for the health and maintenance of the body. These nutrients include calcium, potassium, vitamin D, and protein.
        \nHealth Benefits \nCalcium and vitamin D are important nutrients at any age. Eating or drinking dairy products that have these nutrients help to:
        \nImprove bone health, especially in children and adolescents when bone mass is being built. \nPromote bone health and prevent the start of osteoporosis in adults.',
        3,
        'https://img.freepik.com/free-vector/fresh-organic-milk-products-set-with-cheese-butter_1284-14075.jpg?w=740&t=st=1707130507~exp=1707131107~hmac=2d8d2f3419e33a0e8acde56f058f9845192f73afd4e7b429290f984bf9fcf802',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '29',
        '2024-02-25 16:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'Getting Your Caffeine Hit',  -- Title
        'For a long time, the consumption of caffeinated drinks such as coffee and tea was associated with cardiovascular problems, such as hypertension, rhythm disturbances and heart attacks. Yet in recent years, literature seems to point towards the suggested benefits of coffee and tea consumption, ranging from improved cognitive ability to reduced risk for cancer, gallstones, Parkinson’s and even coronary disease.
        \nBenefits of Caffeine \nCoffee and tea are rich in antioxidants that help to fight free radicals. These free radicals are elements that damage our cells and have been linked with health issues. Besides being a source of antioxidants, coffee and tea also contain caffeine, which when taken in moderation can have benefits for your body. This stimulant promotes the increased firing of neurons and has been shown to improve various aspects of brain function, including memory, mood, energy levels and general cognitive function. 
        \nDangers of Caffeine \nWhile caffeine has its advantages, it is unfortunately still a drug which can cause dependency. Just as with other addictive substances, people who try to quit drinking coffee and tea have been known to exhibit withdrawal symptoms, such as headaches and fatigue.',
        3,
        'https://img.freepik.com/free-vector/restaurant-mural-wallpaper_52683-47917.jpg?w=996&t=st=1707131183~exp=1707131783~hmac=9cdde229dcf6da3e142517aab8091973c32c32e6f9a0ea2be70871aebc5b4a97',
        'Author: mpikisuperstar, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '30',
        '2024-02-25 16:30:00',  -- CreatedDT
        'healthhub',  -- Publisher
        'The Best Refreshment',  -- Title
        'Remember how, as children, we never left home without our water bottles swinging by our sides? Whatever happened to that healthier habit once we grew up? Water, after all, is the essence of life—are we getting enough?
        \nOn average, 60-75% of the adult human body is water. It is a component of almost every body part, from our brain, to our muscles and even our bones. Water’s vital functions include dissolving and carrying nutrients and oxygen to our cells. Water regulates our temperature. It keeps our tissues—like those in our nose and eyes—moist, and our joints lubricated.
        \nAre You Drinking Enough? \nWhile we might instinctively reach for a drink after exercise or on a hot day, most of us only drink when we are thirsty. Unfortunately, a parched throat is not a good indicator of dehydration—by the time you feel thirsty, your body is already crying out for help. So, how much is enough? You’ve probably heard “eight glasses a day” (about two litres)—and that is a useful guide in general.
        \nQuick tips to keep hydrated \nBring back your water bottle! It not only ensures you always have a drink at hand, but can be a quirky fashion accessory, too. \nEat foods with high water content, such as lettuce, watermelon and broccoli.',
        3,
        'https://img.freepik.com/free-photo/woman-pouring-water-into-glass_23-2148728795.jpg?w=996&t=st=1707131691~exp=1707132291~hmac=98688076282ca7a9a18e0c4f95c19a2df367b1248ae993312a9ca57b0337df5a',
        'Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '31',
        '2024-02-25 16:30:00',  -- CreatedDT
        'webmd',  -- Publisher
        'Healthy Eating for Weight Loss',  -- Title
        'Most health experts recommend that you eat a balanced, healthy diet to maintain or to lose weight. But exactly what is a healthy diet?
        \nIt should include: \nProtein (found in fish, meat, poultry) \nFat (found in animal and dairy products) \nCarbohydrates (found in fruits, vegetables, whole grains) \nVitamins and Minerals \nWater (both in what you drink, and naturally in foods)
        \nDieting or not, everyone needs a mix of those nutrients, ideally from foods. Fill half your plate with fruits and vegetables. Split the other half between whole grains and lean protein. Stick to your calorie “budget,” because when you are working on losing weight, you need to burn more calories than you eat or drink.',
        3,
        'https://img.freepik.com/free-vector/main-food-groups-macronutrients-vector_1308-127916.jpg?w=1060&t=st=1707227650~exp=1707228250~hmac=12d758a1788c0d3d0554c67fc9daed7e833dd0acc7dccd950f75eb2f2356b5b9',
        'Author: brgfx, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '32',
        '2024-02-25 16:30:00',  -- CreatedDT
        'webmd',  -- Publisher
        'Fun Facts About Fruits and Vegetables',  -- Title
        'Bell Peppers Are Fruits \nSurprised? Scientists define fruit as the part of a plant that develops from a flower and has seeds. So that means bell peppers -- along with squash, cucumbers, and pumpkins -- are fruits. It is up to you whether or not to include any of those items in your next fruit salad.
        \nBananas Are Berries \nA true berry is a fruit that develops from a single flower and a single ovary. The ovary is the female part of a flower. That means grapes, kiwis, and even bananas are berries. Think about that the next time you peel into a banana.
        \nPotatoes Top Bananas in Potassium \nWe need potassium to help strengthen our muscles and control our blood pressure. Bananas are high in it, but they arent the best source. Why not try a spud instead? Potatoes have more potassium. They dont have any fat and are a good source of vitamins and iron, too.
        \nFigs Match Milk in Calcium \nTrying to get more calcium? Instead of pouring another glass of milk, you could reach for the fruit bowl. Figs are high in calcium. A cup of dried ones has as much calcium as the same amount of milk. And unlike the cool drink, figs are also a great source of fiber. But dont overdo it. They pack a lot of sugar and calories.',
        3,
        'https://img.freepik.com/free-vector/fruits-berries-colorful-icons-collection_1284-20043.jpg?w=740&t=st=1707228006~exp=1707228606~hmac=95551b0cf671888ea956ab5822108215180ff58760ab50b49bf4ee26ae4a288f',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '33',
        '2024-02-25 16:30:00',  -- CreatedDT
        'webmd',  -- Publisher
        'Best Diet Tips Ever - Ways to Stay on Track',  -- Title
        'Tip No. 1: Drink plenty of water or other calorie-free beverages. \nBefore you tear into that bag of potato chips, drink a glass of water first. People sometimes confuse thirst with hunger, so you can end up eating extra calories when an ice-cold glass of water is really all you needed. If plain water doesnt cut it, try drinking flavored sparkling water or brewing a cup of fruit-infused herbal tea.
        \nTip No. 2: Be choosy about nighttime snacks. \nMindless eating occurs most frequently after dinner, when you finally sit down and relax. Snacking in front of the TV is one of the easiest ways to throw your diet off course. Either close down the kitchen after a certain hour, or allow yourself a low-calorie snack, like a 100-calorie pack of cookies or a half-cup scoop of low-fat ice cream.
        \nTip No. 3: Eat protein at every meal. \nProtein is the ultimate fill-me-up food - its more satisfying than carbs or fats and keeps you feeling full for longer. It also helps preserve muscle mass and encourages fat burning. So be sure to incorporate healthy proteins like seafood, lean meat, egg whites, yogurt, cheese, soy, nuts, or beans into your meals and snacks.',
        3,
        'https://img.freepik.com/free-photo/healthy-menu-recipe-food-diet_53876-122837.jpg?w=996&t=st=1707228255~exp=1707228855~hmac=cfb5ca41d30cb7dba6735142129e94d9ac331070b45ab6755f6904d0cff7a820',
        'Author: rawpixel.com, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '34',
        '2024-02-26 16:30:00',  -- CreatedDT
        'webmd',  -- Publisher
        'Why Cant I Lose Weight?',  -- Title
        'You try hard, but that scale wont budge. It is only human nature to wonder if those pounds will ever come off. But dont raise the white flag and chuck your diet just yet. See if one of these sneaky things is secretly messing with your weight loss hopes.
        \nIs it because I skip breakfast? \nIt could be. When you take a pass on that first meal of the day, it can work against you. You are likely to get hungrier later, so you may overdo it at lunch. Try to eat within an hour of waking up. A high-fiber, protein-packed breakfast can help you feel full, longer. Try cottage cheese with fruit, eggs with whole-wheat toast, or Greek yogurt with a banana.
        \nDo I eat too close to bedtime? \nA late-night meal can spell trouble for your weight loss plan. It may raise your body temperature, blood sugar, and insulin, which makes it harder for you to burn fat. Try to eat dinner at least 3 hours before you go to sleep. Be careful about snacking after supper. You take in more calories than you realize when you nibble while you watch TV or use the computer. You may also be tempted to eat unhealthy foods like ice cream or potato chips.
        \nIs it because I am under too much stress? \nIt is possible. It can make you reach for high-calorie, high-fat foods. Your body also tends to store more fat when you are stressed out.',
        3,
        'https://images.unsplash.com/photo-1604480132715-bd70038b74df?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Total Shape, Designed by Unsplash',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '35',
        '2024-02-26 16:30:00',  -- CreatedDT
        'healthline',  -- Publisher
        'The Definitive Guide to Healthy Grocery Shopping',  -- Title
        'Before you go \nWhile some people can go grocery shopping without a list or an idea of which meals they will cook during the coming week, most people need some sort of a plan. Bringing along a grocery list or a weekly menu is a good idea if you get easily side-tracked in the store or unsure of where to begin.
        \nCreating a healthy shopping list \nA grocery list is an essential tool for many shoppers. It can help you stay on task and remind you of the items you need. Plus, studies show that grocery lists may help you make healthier choices while shopping.
        \nBut what does a “healthy” grocery shopping list include? \nGenerally, a healthy, well-rounded diet should primarily comprise whole, nutrient-dense foods. Foods such as veggies, fruits, protein sources like fish and eggs, beans, nuts, and seeds, these are foods to prioritize on your list.
        \nPlanning a weekly menu \nIf you prefer, you can bring a weekly menu to the store instead of a regular shopping list. This menu can list which ingredients you need to make the meals you would like to cook the week ahead.',
        3,
        'https://img.freepik.com/free-photo/woman-picking-bell-peppers-reusable-bag-ecology-earth-day-thematics_1268-21680.jpg?w=1380&t=st=1707229566~exp=1707230166~hmac=451cc055fff9485580ffe8e17ddc6320e97d2e8c07492985cea1765735496761',
        'Author: frimufilms, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '36',
        '2024-02-26 16:30:00',  -- CreatedDT
        'healthline',  -- Publisher
        'Proven Health Benefits of Dark Chocolate',  -- Title
        'Eating dark chocolate with high cocoa content in moderation can deliver antioxidants and minerals and may help protect you from heart disease. But it may also contain high amounts of sugar and calories. Dark chocolate is loaded with nutrients that can positively affect your health. Made from the seed of the cacao tree, its one of the best sources of antioxidants you can find. Studies show that dark chocolate can improve your health and lower the risk of heart disease.
         \nVery nutritious \nIf you buy quality dark chocolate with a high cocoa content, then it is quite nutritious. It contains a decent amount of soluble fiber and is loaded with minerals.
         \nMay improve blood flow and lower blood pressure \nThe flavanoids in dark chocolate can stimulate the endothelium, the lining of arteries, to produce nitric oxide.One of the functions of NO is to send signals to the arteries to relax, which lowers the resistance to blood flow and therefore reduces blood pressure.
         \nMay reduce heart disease risk \nThe compounds in dark chocolate appear to be highly protective against the oxidation of LDL. In the long term, this should cause much less cholesterol to lodge in the arteries, resulting in a lower risk of heart disease.',
        3,
        'https://img.freepik.com/free-photo/close-up-view-delicious-chocolate-wooden-table_23-2148746668.jpg?w=1380&t=st=1707230131~exp=1707230731~hmac=26c7f680e3d909ddb7447d4d8357558a53c2ff52df45aff90bcb1b9e88bcf711',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '37',
        '2024-02-26 16:30:00',  -- CreatedDT
        'healthline',  -- Publisher
        'Health Benefits of Eating Oats and Oatmeal',  -- Title
        'Studies show that oats and oatmeal have many health benefits. These include weight loss, lower blood sugar levels, and a reduced risk of heart disease. Oats are among the healthiest grains on earth. They aree a gluten-free whole grain and a great source of important vitamins, minerals, fiber, and antioxidants.
        \n1. Oats are incredibly nutritious \nThe nutrient composition of oats is well-balanced. They are a good source of carbs and fiber, including the fiber beta-glucan. Oats are also a good source of high quality protein, with a good balance of essential amino acids. Oats are loaded with important vitamins, minerals, and antioxidant plant compounds.
        \n2. Whole oats are rich in antioxidants \nWhole oats are high in antioxidants and beneficial plant compounds called polyphenols. Most notable is a unique group of antioxidants called avenanthramides, which are almost solely found in oats.
        \n3. Oats can lower cholesterol levels \nHeart disease is the leading cause of death globally. One major risk factor is high blood cholesterol. Many studies have shown that the beta-glucan fiber in oats is effective at reducing both total and LDL (bad) cholesterol levels.',
        3,
        'https://img.freepik.com/free-photo/top-close-up-view-berries-bowl-oatmeal-spoon-board-red-currants-black-grapes_140725-71988.jpg?w=996&t=st=1707230882~exp=1707231482~hmac=88e6fd199b63d52545687ae1d45d830c5449606c8dd500514d58c8d1b2530114',
        'Author: KamranAydinov, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '38',
        '2024-02-26 16:30:00',  -- CreatedDT
        'healthline',  -- Publisher
        'Salmon Nutrition and Health Benefits',  -- Title
        'Salmon is one of the most nutritious foods on the planet. This popular fatty fish is not only loaded with nutrients but also may reduce certain risk factors for several diseases. What’s more, it’s tasty, versatile, and widely available.
         \nSalmon nutrition facts \nThe nutritional value of salmon can vary slightly among the varieties. For example, farmed salmon contains slightly more healthy fats and calories, whereas wild-caught salmon is a bit higher in protein. However, both types are great sources of many key nutrients, including selenium, phosphorus, and B vitamins.
         \nSalmon health benefits \n1. Rich in omega-3 fatty acids \nSalmon is one of the best sources of the long-chain omega-3 fatty acids eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA).
         \n2. Great source of protein \nSalmon is rich in high quality protein. Like omega-3 fats, protein is an essential nutrient that you must get from your diet.
         \nProtein plays a number of important roles in your body, including helping you heal after injury, protecting bone health, and maintaining muscle mass during weight loss and as you get older.',
        3,
        'https://img.freepik.com/free-photo/salmon-dish-with-herbs-spices_23-2148195516.jpg?w=996&t=st=1707231240~exp=1707231840~hmac=55163b601bef55c8da5fd4f8240762d931c79915e11b0b6827ab0cb9378db6ce',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '39',
        '2024-02-26 16:30:00',  -- CreatedDT
        'healthline',  -- Publisher
        'Impressive Health Benefits of Apples',  -- Title
        'This nutritious fruit offers multiple health benefits. Apples may lower your chance of developing cancer, diabetes, and heart disease. Research says apples may also help you lose weight while improving your gut and brain health. Apples are the most widely consumed fruit globally.
         From sweet red varieties, like Red Delicious, Fuji, or Gala, to tangy green ones They’re commonly used in recipes like pies, cookies, muffins, jam, salads, oatmeal, or smoothies. They also make a great snack or wedged and smeared with nut butter. In addition to their culinary versatility and numerous colors and flavors, apples are an exceptionally healthy fruit with many research-backed benefits.
        \nWhat are the benefits of apples? \n1. Nutritious \nApples are considered nutrient-dense fruits, meaning they provide a lot of nutrients per serving.
        \n2. May support weight loss \nApples are high in fiber and water, which makes them filling. Eating whole apples increased fullness more than consuming equal amounts of apple juice. This may happen because whole apples reduce gastric emptying — the rate at which your stomach empties.
        \n3. Could be good for your heart \nApples have been linked to a lower chance of heart disease. Research has found that eating 100-150 g/d of whole apples is associated with a lower chanceTrusted Source of heart disease and risk factors such as high blood pressure.',
        3,
        'https://img.freepik.com/free-vector/sticker-basket-with-many-red-apples_1308-59661.jpg?w=900&t=st=1707231584~exp=1707232184~hmac=8bb46b54360f7d388a332b4f5f6785684a3f9e9962b7bb94f7172566499402c8',
        'Author: brgfx, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '40',
        '2024-02-26 16:30:00',  -- CreatedDT
        'healthline',  -- Publisher
        'Health Benefits of Kale',  -- Title
        'Kale is a nutritious food rich in antioxidants, vitamin C, vitamin K, and beta-carotene. It also contains nutrients that can support eye health, weight management, heart health, and more. Loaded with important micronutrients and antioxidants, kale is one of the most nutritious leafy greens available. Plus, it’s versatile and boasts a nutty, earthy flavor that works well in a wide range of recipes.
        \n1. Highly nutritious \nKale is a popular vegetable and a member of the cabbage family. It is a cruciferous vegetable and is closely related to cabbage, broccoli, cauliflower, collard greens, and Brussels sprouts.
        \n2. Provides powerful antioxidants \nLike other leafy greens, kale is very high in antioxidants. These include beta-carotene and vitamin C, as well as various flavonoids and polyphenols. \nAntioxidants are substances that help counteract oxidative damage by neutralizing free radicals in the body.
        \n3. Excellent source of vitamin C \nVitamin C is an important water-soluble antioxidant that serves many vital functions in the body’s cells. For example, it is necessary for the synthesis of collagen, the most abundant structural protein in the body. \nKale is higher in vitamin C than most other greens, containing about three times much as spinach and collard greens.',
        3,
        'https://img.freepik.com/free-photo/close-up-shot-kale_23-2148685356.jpg?w=740&t=st=1707231994~exp=1707232594~hmac=285d138ff284bd8d999a1be85690ad4dbb10bed282acaea32ee62078ce17bba8',
        'Designed by Freepik',  -- img_title
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
    ('I love this content!' ,                           4.0, '9', 3),
    ('The content is very informative!',                5.0, '8', 4),
    ('I love this content!' ,                           4.0, '9', 5),
    ('This is really helpful!' ,                        5.0, '9', 6),
    ('The content is very informative!',                5.0, '8', 7),
    ('The content is very detailed',                    5.0, '8', 8),
    ('This is really helpful!' ,                        5.0, '9', 9),
    ('The content is very informative!',                5.0, '8', 10),
    ('The content is very detailed',                    5.0, '8', 11),
    ('This is awesome!',                                5.0, '7', 12),
    ('The content is very insightful.',                 5.0, '8', 13),
    ('I love this content!' ,                           4.0, '9', 14),
    ('I love this content!' ,                           4.0, '12', 15),
    ('The content is very informative!',                5.0, '8', 16),
    ('The content is very detailed',                    5.0, '8', 17),
    ('This is awesome!',                                5.0, '7', 18),
    ('The content is very insightful.',                 5.0, '8', 19),
    ('I love this content!' ,                           4.0, '9', 20),
    ('I love this content!' ,                           4.0, '12', 21),
    ('I love this content!' ,                           4.0, '9', 22),
    ('I love this content!' ,                           4.0, '12', 23),
    ('I love this content!' ,                           4.0, '12', 24),
    ('I love this content!' ,                           4.0, '9', 25),
    ('I love this content!' ,                           4.0, '12', 26),
    ('The content is very informative!',                5.0, '8', 27),
    ('The content is very detailed',                    5.0, '8', 28),
    ('This is awesome!',                                5.0, '7', 29),
    ('The content is very insightful.',                 5.0, '8', 30),
    ('I love this content!' ,                           4.0, '12', 31),
    ('I love this content!' ,                           4.0, '9', 32),
    ('I love this content!' ,                           4.0, '12', 33),
    ('I love this content!' ,                           4.0, '12', 34),
    ('I love this content!' ,                           4.0, '9', 35),
    ('I love this content!' ,                           4.0, '12', 36),
    ('The content is very informative!',                5.0, '8', 37),
    ('The content is very detailed',                    5.0, '8', 38),
    ('This is awesome!',                                5.0, '7', 39),
    ('The content is very insightful.',                 5.0, '8', 40);