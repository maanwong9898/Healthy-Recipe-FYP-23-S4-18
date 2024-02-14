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
         \nEating healthy is not limited to eating the right amount and the right mix. It is also important for optimum nutrition to choose healthy foods prepared with healthier options and ingredients.
         \nFor example, wholegrains are healthier than refined grains as they contain more vitamins, antioxidants and fibre. In addition, they also keep you filling full for longer, which reduce the risk of overeating. Choosing healthier cooking oils are also important.
         If fat loss is one of your weight loss goals, merely controlling your calorie intake will not be enough. Diet and exercise are pertinent when it comes to healthy weight loss.You should be doing a combination of cardio and strength-training exercises, which are useful in losing fat as well as gaining muscle mass.',
        3, -- userID
        'https://img.freepik.com/free-photo/calories-nutrition-food-exercise-concept_53876-133971.jpg?w=1060&t=st=1707889671~exp=1707890271~hmac=427b505a764fd8bed74a9e6ec2377d9f8578d21610ef4f26658494c15902b667',
        'Author : rawpixel.com, Designed by Freepik',  -- img_title
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
         \nLastly, take care of yourself by listening to your body, and easing up the pace if you need to.',
        3,
        'https://img.freepik.com/free-vector/healthy-lifestyle-concept_1284-14707.jpg?w=740&t=st=1707938184~exp=1707938784~hmac=1275c322edcfa1c9d1599becee809dcaca474ace54e82371c76091c2d31e0ebf',
        'Author : macrovector, Designed by Freepik',  -- img_title
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
        'https://img.freepik.com/free-vector/chinese-new-year-celebration-festive-background_53876-96455.jpg?w=996&t=st=1707889994~exp=1707890594~hmac=4ce542b140b585a26c4c940d0f67515dd562035487fb68c2450287163f5ed1e6',
        'Author: rawpixel.com, Designed by Freepik',  -- img_title
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
        4,
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
        4,
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
        4,
        'https://img.freepik.com/free-vector/fitness-4-flat-icons-square-banner_98292-1012.jpg?w=740&t=st=1707938366~exp=1707938966~hmac=93a48f7fabdd6f3c76c9a291ec5f7e0cb71f0ac140c42f7a85e673444d4397e1',
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
        4,
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
        23,
        'https://img.freepik.com/free-vector/woman-practicing-exercice-with-sports-icons_24877-51355.jpg?w=740&t=st=1707896822~exp=1707897422~hmac=1f0f8e4c24ab1e295b2b81b4249d7150abe15761b742927f24d37633869ab843',
        'Author: studiogstock, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '15',
        '2024-01-22 17:30:00',  -- CreatedDT
        'MayoClinic',  -- Publisher
        'Nutrition basics',  -- Title
        'Do you feel like you are unable keep up with the latest nutrition news because its always changing? Knowledge about nutrition and diet evolves over time, but there are some nutrition basics that can help you sort through the latest research and advice.
        \nNutrition basics come down to eating wholesome foods that support your health. Want to go beyond the basics? Talk to a healthcare professional, such as a dietitian. You can ask for diet advice that takes into account your health, lifestyle and food preferences.',
        23,
        'https://img.freepik.com/premium-vector/food-sources-set_101903-1246.jpg',
        'Author: vssstudio, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '16',
        '2024-01-23 17:30:00',  -- CreatedDT
        'HelpGuide',  -- Publisher
        'What is a healthy diet?',  -- Title
        'The fundamentals of healthy eating \nWhile some extreme diets may suggest otherwise, we all need a balance of protein, fat, carbohydrates, fiber, vitamins, and minerals in our diets to sustain a healthy body. You do not need to eliminate certain categories of food from your diet, but rather select the healthiest options from each category.
         \nMaking the switch to a healthy diet \nSwitching to a healthy diet does not have to be an all or nothing proposition. You dont have to completely eliminate foods you enjoy or change everything all at once — that usually only leads to cheating or giving up on your new eating plan.',
        23,
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
        23,
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
        23,
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
        23,
        'https://img.freepik.com/free-photo/portrait-healthy-woman-eating-salad-kitchen_23-2148075987.jpg?w=996&t=st=1707897150~exp=1707897750~hmac=c90748bbb2982f45dc43cd8364213cc57f4f6d109e7d9192f01a219769357413',
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
        23,
        'https://img.freepik.com/free-vector/healthy-food-concept-with-people-vegetables_107791-11174.jpg?w=996&t=st=1707897230~exp=1707897830~hmac=78a566255d8e1e3228f301ef53fe50d161165c37416d53067dfa839a813a817a',
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
        25,
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
        25,
        'https://img.freepik.com/free-vector/hand-drawn-fruit-collection_23-2148938559.jpg?w=740&t=st=1707897415~exp=1707898015~hmac=78b5cbd722c70c27ef1febcc7aadcfcf87005a3fac5c82ec4ad4b6c6eef47649',
        'Designed by Freepik',  -- img_title
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
        27,
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
        27,
        'https://img.freepik.com/free-photo/stack-raw-pasta-nests-bottle-olive-oil-vegetables-wooden-plate_114579-18203.jpg?w=996&t=st=1707897642~exp=1707898242~hmac=027f5342b76272e3f3b27ff4cbb910356ba3a8bd072698bfeb759f2762d0f5ea',
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
        28,
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
        28,
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
        26,
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
        26,
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
        24,
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
        24,
        'https://img.freepik.com/free-vector/woman-man-drink-water-health-diet-thirst-hot-hydration-summer-sport-illustration-vector-clipart_10045-701.jpg?w=740&t=st=1707897930~exp=1707898530~hmac=ca3a74d8475bd065335005fbf45c7c16888cd97bfb496aa24e0756f90fd90c55',
        'Author: syarifahbrit, Designed by Freepik',  -- img_title
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
        23,
        'https://img.freepik.com/free-vector/main-food-groups-macronutrients-vector_1308-125548.jpg?w=1060&t=st=1707898038~exp=1707898638~hmac=5bc464e908f2613ee064cef5c3cc7e74bfd81512458bcb25eb459d5e016d647a',
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
        22,
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
        21,
        'https://img.freepik.com/free-photo/healthy-menu-recipe-food-diet_53876-122837.jpg?w=996&t=st=1707898209~exp=1707898809~hmac=e9dd6b52cee08eee4f7cb0e47c41c9748a85320aa2ea74d383d15b517910a0ae',
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
        21,
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
        25,
        'https://img.freepik.com/free-photo/woman-picking-bell-peppers-reusable-bag-ecology-earth-day-thematics_1268-21680.jpg?w=1380&t=st=1707898423~exp=1707899023~hmac=2b546394ed6d9b395aeeb735c213bca2b6720e88053233105fc8e2e68e0cd847',
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
        25,
        'https://img.freepik.com/free-photo/top-view-dark-arrangement-with-chocolate-with-copy-space_23-2148553179.jpg?w=1380&t=st=1707898687~exp=1707899287~hmac=2bf612e7553cded87cc36cd0d9270af33dc427fdf5ad1a3d1c8e33fb31fe082c',
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
        26,
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
        26,
        'https://img.freepik.com/free-photo/salmon-dish-with-herbs-spices_23-2148195516.jpg?w=996&t=st=1707898851~exp=1707899451~hmac=585106474b6055e89e61db26fcc83495614c412cc3fac274bb933204ff230ea3',
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
        28,
        'https://img.freepik.com/free-vector/sticker-basket-with-many-red-apples_1308-59661.jpg?w=900&t=st=1707898962~exp=1707899562~hmac=a128c24d1639876000548d72aecb99a09a10f16804ec33b4f76305cbe4037252',
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
        4,
        'https://img.freepik.com/free-photo/close-up-shot-kale_23-2148685356.jpg?w=740&t=st=1707231994~exp=1707232594~hmac=285d138ff284bd8d999a1be85690ad4dbb10bed282acaea32ee62078ce17bba8',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '41',
        '2024-01-08 16:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Tips for Better Breakfasts',  -- Title
        'We have all experienced "morning madness" — whether a busy commute or working with picky eaters, many things can make for a stressful morning. Breakfast, however, is really an important meal! Research shows that breaking an overnight fast with a balanced meal can make a significant difference in overall health and well-being.
        \nIf You Wake Up on Time, Enjoy.. \nScrambled Eggs: Serve with fruit and whole-grain toast. Mix in extra vegetables such as spinach and mushrooms when cooking the eggs.
        \nWhole-Grain Waffles: If you have a waffle iron, try a whole-grain waffle mix from the grocery store for a special treat. Serve topped with fresh fruit.
        \nIf You Hit the Snooze Button One Time, Eat.. \nEnglish Muffin Sandwich: Toast a whole-grain English muffin. Put low-fat cheese and sliced deli ham on the toasted muffin. Warm the sandwich in the microwave to melt the cheese.
        \nBreakfast Tacos: Scramble and cook eggs or egg whites. Serve eggs with beans on a tortilla.
        \nIf You Hit the Snooze Button Two (or More) Times, You Can Still Break the Fast.. \nInstant Oatmeal: Look for varieties without added sugar and just add boiling water. Stir in dried cranberries and almonds.
        \n45-Second Scrambled Eggs: Put eggs and a splash of milk in a bowl, whisk it up and put it in a microwave for 30 seconds. Stir and put back in for another 10 seconds.',
        4,
        'https://img.freepik.com/free-photo/toast-egg-bacon-tomatoes-microgreens-salad_2829-4804.jpg?w=996&t=st=1707371496~exp=1707372096~hmac=efe90efde636cdb14d1126b13ca2848fb9d27339efb181754ce3f9444685cf81',
        'Author: timolina, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '42',
        '2024-01-08 16:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Family Dinners for a Healthy Heart',  -- Title
        'Want your family to have healthy hearts? Start at the family dinner table. Not only do many adults consume too much sodium, many kids do as well. Eating too much sodium can increase risk for high blood pressure which can eventually lead to heart disease, stroke and kidney disease.
        \nChoose Spices Over Salt \nIn the kitchen, think out of the box. Opt for spices instead of added salt. When you are cooking, reach for low-sodium seasonings such as fresh lemon or lime juice, fresh herbs or salt-free herb blends and vinegar to boost the flavor of your favorite foods.
        \nRead Nutrition Labels \nYou can trim the sodium  by carefully reading the Nutrition Facts Label when buying canned, frozen and packaged foods. Comparing brands and labels also can go a long way, as the amount of sodium in foods can vary from brand to brand by hundreds of milligrams.
        \nLook for Foods Low in Sodium \nIt also helps to focus on foods that are naturally low in sodium. Eating more vegetables and fruit can help lower your sodium intake and increase your potassium intake. Produce contains little sodium, yet it is rich in potassium, a mineral that helps balance blood pressure. However, few of us get the potassium we require.',
        27,
        'https://img.freepik.com/free-vector/family-enjoying-time-together_23-2148512124.jpg?w=996&t=st=1707372025~exp=1707372625~hmac=8a6c20f7f33122139f267731aaccf97e536eb2d109fe619b3735ea1692c600be',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '43',
        '2024-01-08 16:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Breakfast: Key to Growing Healthy',  -- Title
        'Breakfast is an important meal for growing children. Studies show that breakfast eaters tend to have higher school attendance, less tardiness and fewer hunger-induced stomach aches in the morning. Their overall test scores are higher, they concentrate better, solve problems more easily and have better muscle coordination. Children who eat breakfast also are more likely to maintain a healthy weight and get enough calcium, too.
        \nWhip Up a Quick and Easy Morning Meal \nStart their day in a healthful direction with a balanced breakfast that incorporates a variety of nutrient-dense foods. Try some of these quick and easy options:
        \nPeanut butter spread on whole-grain toast \nGrits and eggs \nPorridge with ginger and cinnamon \nChilaquiles with eggs
        \nMake a Breakfast Bar \nLet your kids build their own breakfast with a breakfast bar. Similar to a salad bar, a breakfast bar includes a variety of foods to mix and match. Little ones love to create unusual combinations by mixing, stacking and organizing ingredients. Here are some ideas:
        \nWhole-grain cereals, waffles, tortillas, bread or English muffins \nPeanut butter \nLow-fat or fat-free yogurt \nCottage cheese \nFig or apricot jam \nVariety of sliced fruit such as bananas strawberries, papaya or passionfruit',
        24,
        'https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Brooke Lark, Designed by Unsplash',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '44',
        '2024-01-08 16:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Tips to Help Kids Enjoy Fruits and Veggies',  -- Title
        'Fruits and vegetables are loaded with the nutrients kids need to grow, be strong and healthy and perform well in school. Unfortunately, most children do not get enough fruits and vegetables throughout the day. Here are some ideas on how to make meals nutritious and delicious by incorporating produce in fun and interesting ways that kids will enjoy.
        \nFill Half the Plate with Fruits and Vegetables \nEncourage kids to consume more of these nutritional powerhouses by making produce the star of the meal. Dish out generous helpings and always include options that your family enjoys. Serve vegetables in a variety of ways to give your child an opportunity to explore the tastes, textures and aromas.
        \nTake Fruit to Lunch \nFruit is a great way to add a little sweetness to a meal. Make a habit of tucking an apple, tangerine, melon slices, plums, kiwifruit, grapes, cherries or dried fruits into lunch bags.
        \nStuff Sandwiches with Fruits and Vegetables \nCreate a sandwich bar with whole-grain breads, wraps and rolls, various lean meats, low-fat cheese, sliced tomato, bell pepper rings, cucumber slices, lettuce, marinated artichoke hearts, roasted red peppers, sliced avocado, hummus and mustard.',
        24,
        'https://img.freepik.com/free-photo/breakfast-consists-bread-boiled-eggs-black-grape-salad-dressing-tomatoes-sliced-onions_1150-24465.jpg?w=996&t=st=1707372961~exp=1707373561~hmac=c750d25954f99dc9e6547f11847177952f7b345563a961d0892fe4b149b8da39',
        'Author: jcomp, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '45',
        '2024-01-01 15:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'When Should My Kids Snack?',  -- Title
        'Does it seem like it is always snack time? Many children graze throughout the day, enjoying a never-ending snack time. Snacks are good for kids because they help them stay focused at school and on homework, give them needed nutrients and help keep hunger at bay. Yet, for lots of kids and teens, a snack is a bag of chips, some cookies or some other low-nutrient food. Instead, think of snacks as mini-meals.
        \nWhen Should Kids Snack? \nMost children and teens need to eat snacks in addition to meals to fuel their growing, active bodies and meet their daily recommendations. This translates into the following:
        \nYounger kids need three meals and about two snacks a day. \nOlder kids need to eat three meals and about one snack a day (they may need two snacks if they are going through a growth spurt or if they are very physically active).
        \nWhere Should Kids Snack? \nWhen at home, designate a certain area as the "eating-only zone'' and limit all snacking to that location. The kitchen table or countertop works well. When kids snack all over the house, that makes it hard for you to know what and how much they are eating. Also, dont let kids eat snacks while watching TV. Studies show that this mindless munching leads to overeating.',
        23,
        'https://img.freepik.com/free-vector/people-with-delicious-food-drinks_23-2148470092.jpg?w=740&t=st=1707899467~exp=1707900067~hmac=d50184834e6f2c640100215d67d611ca8e82a2b4279f7a458f89736b7570ea2c',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '46',
        '2024-01-01 15:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Foods for Eye Health',  -- Title
        'Do your eyes have all the nutrients they need to help prevent cataracts, macular degeneration, glaucoma and other sight woes? Read on to learn about some of the top foods to promote eye health. To get these nutrients — your best sources of vitamins, minerals and antioxidants are from whole foods, since it may be a combination of nutrients within the foods which provide these benefits.
        \nKale: See the Light \nThis leafy green is a source of lutein and zeaxanthin, which are related to vitamin A and beta-carotene, and may help protect eye tissues from sunlight damage and reduce the risk of eye changes related to aging.
        \nSweet Potatoes: The Color of Health \nBeta-carotene gives these tubers their orange color. Your body converts beta-carotene to vitamin A, a nutrient that helps prevent night blindness and age related macular degeneration. Sweet potatoes not your favorite? For beta-carotene, try other deep orange foods, such as carrots and butternut squash
        \nHealthy Fats: Include Sources of Omega-3 Fatty Acids \nBesides helping with the absorption of certain nutrients, some healthy fats also contain omega-3 fatty acids. Salmon is an excellent source of omega-3s, which may be beneficial for eye health.',
        22,
        'https://img.freepik.com/free-photo/funny-young-woman-with-orange-halves-kitchen_169016-29797.jpg?w=996&t=st=1707899569~exp=1707900169~hmac=703c4d6822d4f17379a7dfcdb30c82e383db6fb1c8997ae617155613a10d3d50',
        'Author: pvproductions, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '47',
        '2023-01-01 15:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Eating to Boost Energy',  -- Title
        'We, as a society, are busy, stressed, need more physical activity and sometimes have poor eating habits — all contributing to low energy levels. One way to improve our energy levels is by eating better. The right combinations of food may help give you a boost. Follow these strategies to maximize your energy.
        \nEat Regularly \nPlanning to eat every three to four hours may help prevent between-meal hunger that can lead to unwise snacking or overeating at meals. If you only are eating one to two meals a day, this may be an adjustment. As you learn how to eat more frequently throughout the day, remind yourself that you will feel better and be more focused when you have fuel in your system on a regular basis.
        \nHonor Your Hunger and Fullness Cues \nEating just enough, but not too much, helps to curb cravings and reduces chances of overeating.
        \nBalance Your Plate \nA balanced meal includes foods from multiple food groups: whole grains, lean protein, fiber-rich fruits and vegetables, and fat-free or low-fat dairy. Balance out your plate with all the food groups.
        \nRemove Energy Zappers \nSkip the foods and beverages with added sugars, such as soda, sugar-sweetened coffee and energy drinks. These beverages may leave you buzzing for an hour, but likely will cause an energy crash. Instead, quench your thirst with water, unsweetened flavored water or unsweetened tea.',
        23,
        'https://img.freepik.com/free-vector/flat-design-overwhelmed-people-illustration_23-2149311636.jpg?w=740&t=st=1707900537~exp=1707901137~hmac=c18e183f85fb8c6f6440d6159858e4ed42e198b727fb00e939eb49d6b626b46b',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '48',
        '2023-01-01 15:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Tips to Kick Bad Eating Habits to the Curb',  -- Title
        'Are you guilty of skipping breakfast, ordering takeout too often or getting jitters from coffee overload? Time to kick those habits to the curb. Here is a guide to help you get started.
        \nEat Breakfast \nThere is no better way to start your morning than with a healthy breakfast. Providing your body with a morning meal provides it with energy to power not only your muscles but your brain as well! Prevent brain fog and increase your focus by keeping your brain fed.
        \nCut Back on Caffeine \nToo much caffeine can interfere with sleep, make you jittery and cause you to lose energy later in the day. Keep your caffeine intake in check by limiting regular coffee to about 3 cups or less per day, and watch what you put into it. Too much sugar isnt good for your teeth.
        \nBring Lunch to Work \nHow do you make bringing lunch to work easy? The first step is to plan ahead by thinking through what you want for lunch and adding those foods to your grocery list. Stock your fridge with tasty, satisfying foods to set yourself up for success.',
        27,
        'https://img.freepik.com/free-vector/healthy-eating-advertising-poster-with-young-woman-holding-green-apple-useful-food-elements_1284-28271.jpg?w=740&t=st=1707376991~exp=1707377591~hmac=011c541ddf74e7767329ed513191b5b2d325bab1af07ff05e0b69d77b430efdc',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '49',
        '2023-01-01 15:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Keys to Strength Building and Muscle Mass',  -- Title
        'Muscle is harder to build and maintain as we age. In fact, most of us start losing muscle around age 30. Physically inactive people are at particular risk and can experience anywhere from a 3 to 8% loss of lean muscle mass every decade after that.
        \nMuscle Strengthening Activities and Health \nMen and women should participate in muscle strengthening activities that work the major muscle groups at least two times each week. Examples of muscle strengthening activities include lifting weights, push-ups, pull-ups, sit-ups and some types of yoga.
        \nProtein and Muscle Building \nWhen building muscle, the more protein the better, right? Not necessarily. Protein should make up 10 to 35% of total calories for adults. While working to build muscle with physical activity, your needs may be on the higher end of this range. Aim for 3 servings of low-fat or fat-free dairy and 3 ounce-equivalents of protein foods (such as fish, beans, poultry or lean meat) each day, to provide quality sources of protein to help reach that goal. Grains, especially whole grains, also provide some protein.
        \nCarbohydrates and Muscle Building \nCarbohydrates are another important group of foods for fueling your muscles. That is because carbs are partially converted to glycogen, which is a form of energy stored in muscles. Try focusing on good quality carbohydrates that provide dietary fiber, such as whole-grain breads and cereals.',
        24,
        'https://img.freepik.com/free-vector/isometric-fitness-club-banner-collection_1284-32765.jpg?w=740&t=st=1707900723~exp=1707901323~hmac=b9c969bb5f2f059c2855e1aa319c60dc34518fb590fd88938c644236bd303c5e',
        'Author: macrovector, Designed by Freepik',  -- img_title
        2 -- educational_content_type_id
    ),
    (
        '50',
        '2023-01-01 15:30:00',  -- CreatedDT
        'eatright',  -- Publisher
        'Strategies for Successful Meal Planning',  -- Title
        'Planning ahead may help relieve mealtime stress. Think about your approach to meal planning — do you: Want to make a weekly or a monthly plan? Prefer to prepare meals ahead of time, just before the meal or a combination of both? Want to pick a day to cook meals for the week or a month that you can store in the freezer?
        Stock Your Pantry and Freezer with the Five Food Groups. To get started with meal planning, take time to stock up on the basics. This includes healthy foods that you like to eat and prepare, add other items based on your personal health needs and food preferences.
        \nVegetables: Keep a variety of canned tomatoes in stock. Use them in soups, stews, sauces. Dried mushrooms are another great pantry item because they can add depth of flavor to your meals.
        \nFruits: Raisins, dried cranberries, dried apricots are loaded with dietary fiber.
        \nMilk and Dairy Products: Dried milk is a great back-up item to have on stock, boxed milk is also available in single-serving packages.
        \nProtein Foods: Canned or dried lentils, cannellini, garbanzo and kidney beans. These legumes are a great source of protein. Canned tuna, anchovies and sardines are a pantry must.
        \NGrains: Keep a stash of oatmeal and other whole-grain cereals in the pantry. Barley, quinoa and other grains provide staples for healthy meals. Also, keep a variety of rice on hand.',
        24,
        'https://img.freepik.com/free-photo/top-view-assortment-food-with-planner_23-2148484699.jpg?w=996&t=st=1707379150~exp=1707379750~hmac=33e86e1d38655bf232fdf3b9a78a28578036fe0a41df58704ae009ad5ca2a847',
        'Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '51',
        '2023-02-01 15:30:00',  -- CreatedDT
        'helpguide',  -- Publisher
        'Mindful Eating',  -- Title
        'Paying attention to the moment-to-moment experience of eating can help you improve your diet, manage food cravings, and even lose weight. Here’s how to start eating mindfully.
        \nWhat is mindful eating? \nMindful eating is maintaining an in-the-moment awareness of the food and drink you put into your body. It involves observing how the food makes you feel and the signals your body sends about taste, satisfaction, and fullness. Mindful eating requires you to simply acknowledge and accept rather than judge the feelings, thoughts, and bodily sensations you observe. It can extend to the process of buying, preparing, and serving your food as well as consuming it.
        \nBenefits of mindful eating \nBy paying close attention to how you feel as you eat—the texture and tastes of each mouthful, your body’s hunger and fullness signals, how different foods affect your energy and mood—you can learn to savor both your food and the experience of eating. Being mindful of the food you eat can promote better digestion, keep you full with less food, and influence wiser choices about what you eat in the future. It can also help you free yourself from unhealthy habits around food and eating.',
        23,
        'https://img.freepik.com/free-vector/woman-thinking-healthy-unhealthy-snacks-choice_74855-15577.jpg?w=996&t=st=1707900878~exp=1707901478~hmac=40ffc03f2097858306f0f3fd490da093551cc7158648d01af5ab658a029c793a',
        'Author: pch.vector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '52',
        '2023-02-01 15:30:00',  -- CreatedDT
        'helpguide',  -- Publisher
        'Heart-Healthy Diet Tips',  -- Title
        'What is a heart-healthy diet? \nHeart disease is a leading killer—and claims more lives than all forms of cancer combined. Being diagnosed with cardiovascular disease can also take an emotional toll, affecting your mood and quality of life. A heart-healthy diet may reduce your risk of heart disease or stroke by 80%.
        \nThree keys to a heart-healthy diet \n1. Be smart about fats \nIf you are concerned about your heart health, rather than avoiding fat in your diet, try replacing saturated fats with unsaturated fats. Cut out artificial trans fats, Limit saturated fats.
        \n2. Do not replace fat with sugar or refined carbs \nWhen cutting back on heart-risky foods, it is important to replace them with healthy alternatives. Replacing processed meats with fish or chicken, for example, can make a positive difference to your health. Your body benefits from having a balanced diet of protein, carbohydrates, and fat. Choosing foods with higher fiber and lower saturated fat can help provide you with the energy you need during the day.
        \n3. Focus on high-fiber food \nA diet high in fiber can lower “bad” cholesterol and provide nutrients that help protect against heart disease. It may also help you to lose weight. Since fiber stays in the stomach longer than other foods, the feeling of fullness will stay with you much longer. Fiber also moves fat through your digestive system quicker so less of it is absorbed. And when you fill up on fiber, you will also have more energy for exercising.',
        22,
        'https://img.freepik.com/free-vector/world-health-day_24908-56242.jpg?w=740&t=st=1707735993~exp=1707736593~hmac=17dcc577460bec6cf2c10926c520ac8db1c02cfb94fe1b6e34969aaf4fcb96de',
        'Author: gstudioimagen, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    ),
    (
        '53',
        '2023-02-01 15:30:00',  -- CreatedDT
        'helpguide',  -- Publisher
        'Choosing Healthy Protein',  -- Title
        'When it comes to making protein choices in your diet, quality is just as important as quantity. \nWhat is protein? \nProtein in your diet provides energy and supports your mood and cognitive function. It’s a vital nutrient required for building, maintaining, and repairing tissues, cells, and organs throughout the body. Most animal sources of protein deliver all the amino acids your body needs, while plant-based protein sources often lack one or more of the essential amino acids.
        \nThe health benefits of protein \nProtein gives you the energy to get up and go—and keep going. While too much protein can be harmful to people with kidney disease, eating the right amount of high-quality protein: Keeps your immune system functioning properly, maintains heart health and your respiratory system, and speeds recovery after exercise. It is vital to the growth and development of children and for maintaining health in your senior years, can help reduce your risk for diabetes and cardiovascular disease.
        \nHigh-quality vs. low-quality protein \nDistinguishing between industrially raised meat and organic, grass-fed meat is only part of separating low- and high-quality sources of protein. While some processed or lunch meats, for example, can be a good source of protein, many are loaded with salt, which can cause high blood pressure and lead to other health problems. Processed meats have also been linked with an increased risk of cancer, likely due to the substances used in the processing of the meat.',
        21,
        'https://img.freepik.com/free-vector/protein-food-concept-card-set_1284-9928.jpg?w=740&t=st=1707736764~exp=1707737364~hmac=65a5f0b5d04bbb72d039fdd158d63acab57d56a517cc32c702fc4a05ab4e3f33',
        'Author: macrovector, Designed by Freepik',  -- img_title
        1 -- educational_content_type_id
    );



-- Educational content review rating
INSERT INTO educational_content_review_rating
(Review, Rating, UserID, educational_contentid)
VALUES
    ('This is awesome!',                                5.0, '7', 1),
    ('The content is very insightful.',                 5.0, '8', 1),
    ('I love this content!' ,                           5.0, '9', 1),
    ('I love this content!' ,                           4.0, '12', 1),
    ('This is awesome stuff!',                          5.0, '7', 2),
    ('The content is very detailed',                    5.0, '8', 2),
    ('I love this content!' ,                           4.0, '9', 3),
    ('The content is very informative!',                5.0, '8', 4),
    ('I love this content!' ,                           4.0, '9', 5),
    ('This is really helpful!' ,                        4.0, '9', 6),
    ('The content is very informative!',                3.0, '8', 7),
    ('The content is very detailed',                    3.0, '8', 8),
    ('This is really helpful!' ,                        4.0, '9', 9),
    ('The content is very informative!',                3.0, '8', 10),
    ('The content is very detailed',                    4.0, '8', 11),
    ('This is awesome!',                                3.0, '7', 12),
    ('The content is very insightful.',                 4.0, '8', 13),
    ('I love this content!' ,                           3.0, '9', 14),
    ('I love this content!' ,                           4.0, '12', 15),
    ('The content is very informative!',                4.0, '8', 16),
    ('The content is very detailed',                    3.0, '8', 17),
    ('This is awesome!',                                4.0, '7', 18),
    ('The content is very insightful.',                 3.0, '8', 19),
    ('I love this content!' ,                           4.0, '9', 20),
    ('I love this content!' ,                           4.0, '12', 21),
    ('I love this content!' ,                           4.0, '9', 22),
    ('I love this content!' ,                           4.0, '12', 23),
    ('I love this content!' ,                           4.0, '12', 24),
    ('I love this content!' ,                           4.0, '9', 25),
    ('I love this content!' ,                           4.0, '12', 26),
    ('The content is very informative!',                3.0, '8', 27),
    ('The content is very detailed',                    3.0, '8', 28),
    ('This is awesome!',                                4.0, '7', 29),
    ('The content is very insightful.',                 3.0, '8', 30),
    ('I love this content!' ,                           3.0, '12', 31),
    ('I love this content!' ,                           4.0, '9', 32),
    ('I love this content!' ,                           3.0, '12', 33),
    ('I love this content!' ,                           3.0, '12', 34),
    ('I love this content!' ,                           4.0, '9', 35),
    ('I love this content!' ,                           4.0, '12', 36),
    ('The content is very informative!',                3.0, '8', 37),
    ('The content is very detailed',                    3.0, '8', 38),
    ('This is awesome!',                                3.0, '7', 39),
    ('The content is very insightful.',                 4.0, '8', 40),
    ('I love this content!' ,                           4.0, '12', 41),
    ('I love this content!' ,                           3.0, '9', 42),
    ('I love this content!' ,                           3.0, '12', 43),
    ('I love this content!' ,                           4.0, '12', 44),
    ('I love this content!' ,                           4.0, '9', 45),
    ('I love this content!' ,                           4.0, '12', 46),
    ('The content is very informative!',                3.0, '8', 47),
    ('The content is very detailed',                    4.0, '8', 48),
    ('This is awesome!',                                3.0, '7', 49),
    ('The content is very insightful.',                 4.0, '8', 50),
    ('This is awesome!',                                3.0, '7', 51),
    ('The content is very insightful.',                 4.0, '8', 52),
    ('The content is very insightful.',                 3.0, '8', 53);
