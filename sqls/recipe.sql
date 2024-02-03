
-- Category
-- 1. Allergies
Insert into allergies 
(subcategory_name) 
VALUES
("Milk"),
("Egg"),
("Soy"),
("Shellfish"),
("Fish"),
("Peanut"),
("Tree Nuts"),
("Gluten");

-- 2. Dietary preferences
Insert into dietary_preferences 
 (subcategory_name) 
VALUES
("Vegan"),
("Vegetarian"),
("Pescatarian");

-- Recipe
  -- publisher should be author of the recipe
  -- info refers to dietary information
    -- steps refers to the steps to cook the recipe (separated by \n)
    -- ingredients refers to the ingredients needed to cook the recipe (separated by \n)
    -- img_title should be the author of the image and the source of the image (follow their code of conduct)
    -- dietary_preference refers to the category of the recipe (refer to dietary_preferences)

-- Note that: Some recipes has allergies, insert into recipe_allergies table
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
    ('Vietnamese');

-- first set of recipes 
INSERT INTO recipe
(id, publisher, title, info, calories, carbs, protein, fat, fibre, sodium, serving_size, description, steps, ingredients, UserID, Active, createddt, img, img_title, dietary_preference, cooking_time, meal_type)
VALUES
    (
        1,
        'Gretchen F. Brown, RD',
        'Hearty Pasta Soup',
        "Not Specified",
        286, 44, 11, 9, 6, 880, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Make something unique with a pack of tortellini. This hearty soup is full of fibre and vegetables and it is low in fat. The perfect lunch or supper.',
        'Heat oil in a pan. Fry the carrots and onion for 5 mins until starting to soften. Add the stock and tomatoes, then simmer for 10 mins. Add the peas and beans with 5 mins to go.\nOnce veg is tender, stir in the pasta. Return to the boil and simmer for 2 mins until the pasta is just cooked. Stir in the basil, if using. Season, then serve in bowls topped with a sprinkling of Parmesan and slices of garlic bread.',
        '1 tbsp olive oil \n2 ounces cornmeal \nhalf onion \n1 small carrot \n1 quarter leek \n1 slice celery root \n1 liter cold water \nbroth powder \nsalt \n1 egg \n2 tbsp whipping cream \n7 ounces smoked fish \nhalf bunch dill',
        '3', -- UserID
        TRUE,
        '2023-04-26 14:30:00',
        'https://img.freepik.com/premium-photo/tortellini-soup-dinner-recipe_198067-6671.jpg?w=1060',
        'Author : Vecstock, Designed by Freepik',  -- img_title
        2, -- dietary_preference
        25 -- cooking_time
        2   -- meal type (cuisines)
    ),
    (
        2,
        'Jane Hornby',
        'Spiced carrot & lentil soup',
        'Not Specified',
        238, 34, 11, 7, 5, 250, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A delicious, spicy blend packed full of iron and low in fat to boot. It is ready in under half an hour, or can be made in a slow cooker',
        'Heat a large saucepan and dry-fry 2 tsp cumin seeds and a pinch of chilli flakes for 1 min, or until they start to jump around the pan and release their aromas.\nScoop out about half with a spoon and set aside. Add 2 tbsp olive oil, 600g coarsely grated carrots, 140g split red lentils, 1l hot vegetable stock and 125ml milk to the pan and bring to the boil.\nSimmer for 15 mins until the lentils have swollen and softened.\nWhizz the soup with a stick blender or in a food processor until smooth (or leave it chunky if you prefer).\nSeason to taste and finish with a dollop of plain yogurt and a sprinkling of the reserved toasted spices. Serve with warmed naan breads.',
        '2 tsp cumin seeds \npinch chili flakes \n2 tbsp olive oil \n600 grams carrot, no need to peel \n140 grams split red lentils \n1 litre hot vegetable stock \n125ml milk \nplain yogurt and naan bread',
        '3', -- UserID
        TRUE,
        '2023-04-20 14:30:00',
        'https://www.freepik.com/premium-photo/high-angle-view-soup-bowls_110336592.htm#query=spiced%20carrot%20and%20lentil%20soup&position=14&from_view=search&track=ais&uuid=18164050-817b-4251-a7ef-50ed4436d721',
        'Author : EyeEm, Designed by Freepik',  -- img_title
        2, -- dietary_preference
        15 -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        3,
        'Sheela Prakash',
        'Roasted Sweet Potato Salad',
        'Not Specified',
        402, 58, 14, 14, 16, 940, -- calories, carbs, protein, fat, fibre, sodium
        4-6,
        'This bright, healthy combination of spiced sweet potatoes, black beans, baby spinach, and feta is ideal for dinner prep. Roasted sweet potato salad is ideal for lunch or dinner.',
        'Preheat the oven to 425°F. Arrange a rack in the middle of the oven.\nPeel the sweet potatoes, if desired, and cut into 1-inch cubes. Place on a rimmed baking sheet. Drizzle with 2 tablespoons of olive oil and sprinkle with the chili powder and 1/2 teaspoon kosher salt. Toss to coat. Arrange the potatoes in a single layer. Roast, tossing halfway through, until tender and browned in spots, about 30 minutes. Once the potatoes are done, let them cool on the baking sheet until just warm to the touch, 10 to 15 minutes.\nSlice the red onion into very thin half-moons and place in a large bowl. Finely grate the zest of the lime into the bowl, then halve the lime crosswise and squeeze its juice into the bowl. Toss to coat the onion in the juice then leave to quick-pickle while the potatoes roast.\nAdd the roasted sweet potatoes, black beans, baby spinach, remaining 2 tablespoons olive oil, remaining 1/4 teaspoon kosher salt, and black pepper to the bowl with the onion and lime juice and toss to combine. Add the feta and toss gently again to combine.',
        '2 pounds sweet potatoes \n4 tbsp olive oil \n1 tbsp chili powder \n4 tsp kosher salt \n1/2 medium red onion \n1 large lime \n2 cans black beans, drained and rinsed \n1 to 2 packed cups baby spinach \n1/4 tsp freshly ground black pepper \n4 ounces feta cheese, crumbled',
        '3', -- UserID
        TRUE,
        '2023-01-11 15:30:00',
        'https://www.freepik.com/free-photo/warm-winter-quinoa-salad-with-pumpkin-chorizo-mozzarella-arugula-leaves-pomegranate_34738413.htm#query=roasted%20sweet%20potato%20salad%20recipe&position=43&from_view=search&track=ais&uuid=46b3221c-38e4-4e4d-a2ea-1e748f23e6b0',
        'Author : EyeEm, Designed by Freepik',  -- img_title
        2, -- dietary_preference
        30 -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        4,
        'Cassie Best',
        'Fish Tangine with saffron & almonds',
        'Not Specified',
        299, 10, 41, 11, 2, 280, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A low calorie Moroccan fish stew flavoured with saffron, almonds, cinnamon, ginger and more. It is perfect for hosting, prepare a batch in advance and freeze it.',
        'Heat the oil in a large pan. Add the onion and cook for a few mins until soft. Meanwhile, put the saffron in the hot stock and leave to steep. Add the garlic, ginger and chilli to the pan and cook for a few mins more. Tip in the spices and tomato purée, stir for a few mins until fragrant, then add the tomatoes, ground almonds, orange zest and juice, honey and saffron-scented stock, making sure that you use all of the saffron strands. Simmer, uncovered, for 10 mins, until the tomatoes have broken down and the sauce has thickened a little.\nAdd the fish to the pan, making sure the pieces are all nestled under the sauce. Cover with a lid and simmer on a low heat for 2-3 mins until just cooked. Check seasoning, add the coriander and scatter with the toasted almonds. Serve scattered with the chilli, along with some couscous and a blob of natural yogurt, if you like.',
        '1 tbsp olive oil \n1 onion chopped \npinch saffron \n600ml hot fish or chicken stock \n2 garlic cloves crushed \nthumb-sized piece ginger, peeled and grated \n1/2 green chili \n2 tsp ground cumin \n1 tsp ground coriander \n1 tsp cinnamon \n1 tbsp tomato purée \n10 cherry tomatoes, halved \n2 tbsp ground almond \nzest 1 orange \n1 tbsp honey \n700g white fish \nsmall bunch coriander chopped \nhanful flaked almond, toasted \n1/2 green chili \ncouscous and natural yogurt, to serve (optional)',
        '2', -- UserID
        TRUE,
        '2023-01-11 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tagine-5f2d3f6.jpg?quality=90&webp=true&resize=440,400',
        'Author : Cassie Best, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        25 -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        5,
        'James Martin',
        'Hot & sour fish soup',
        'Not Specified',
        322, 39, 29, 7, 1, 1384, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Asian soup combines a fragrant broth with fish, seafood and light noodles, topped with strong herbs',
        'Put the coriander seeds and galangal or ginger in a saucepan. Pour in the stock, bring to the boil, then simmer gently for 5 mins. Leave to stand for 10 mins.\nMeanwhile, cook the noodles following pack instructions. Drain and keep warm. Return stock to the boil. Add the fish sauce, chillies and garlic, reduce the heat and simmer for 2 mins. Add the prawns and salmon, return to a simmer and cook gently for about 5 mins until both are firm and cooked. Add the spring onions, herbs and lime juice, to taste.\nDivide the noodles between soup bowls. Using a slotted spoon, lift out the prawns and fish, and place on the noodles. Season the hot stock, pour into the bowls and serve with Spring rolls on the side.',
        '1 tbsp olive oil \n1 onion chopped \npinch saffron \n600ml hot fish or chicken stock \n2 garlic cloves crushed \nthumb-sized piece ginger, peeled and grated \n1/2 green chili \n2 tsp ground cumin \n1 tsp ground coriander \n1 tsp cinnamon \n1 tbsp tomato purée \n10 cherry tomatoes, halved \n2 tbsp ground almond \nzest 1 orange \n1 tbsp honey \n700g white fish \nsmall bunch coriander chopped \nhanful flaked almond, toasted \n1/2 green chili \ncouscous and natural yogurt, to serve (optional)',
        '2', -- UserID
        TRUE,
        '2023-01-11 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-815477_11-c677a93.jpg?quality=90&webp=true&resize=440,400',
        'Author : James Martin, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        30 -- cooking_time  
        6   -- meal type (cuisines)
    ),
    (
        6,
        'Roopa Gulati',
        'Baked fish with mint & mango relish',
        'Not Specified',
        249, 22, 30, 5, 2, 256, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'This innovative idea for white fish with a crispy, spicy coating is likely to become a favourite - and it is also low in fat.',
        'Heat oven to 200C/180C fan/gas 6 and put the fish fillets in a roasting tin. Combine the chopped chilli, mango, cumin, ginger, mint, mango chutney and lime juice. Spoon a quarter of the relish on top of each fillet and pat it down into an even layer with your fingers.\nPut the bread in a food processor with the garam masala and turmeric and whizz to fine crumbs. Add the olive oil and give the processor one final pulse to mix everything together.\nSpoon the crumbs over the relish-topped fillets. Cover the tin with foil and bake for 10 mins. Remove the foil and continue cooking for another 5 mins until the fish flakes easily and the crumbs have crisped on top. Serve with a green salad.',
        '4 x 150g skinless cod fillets \n1 green chili \n1 small ripe mango, finely diced \n1 tsp ground cumin \n1/2 finger-length piece fresh root ginger, grated \nlarge handful mint leaves, shredded \n1 tbsp mango chutney \njuice 1/2 lime \n85g crustless stale white bread \n1 tsp garam masala \n1/2 tsp tumeric \n1 tbsp olive oil',
        '2', -- UserID
        TRUE,
        '2023-01-20 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1079512_10-faac687.jpg?quality=90&webp=true&resize=440,400',
        'Author : Roopa Gulati, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        15 -- cooking_time  
        7   -- meal type (cuisines)
    ),
    (
        7,
        'Elena Silcock',
        'Brussels sprouts pad Thai',
        'Not Specified',
        248, 21, 5, 15, 4, 280, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'This innovative idea for white fish with a crispy, spicy coating is likely to become a favourite - and it is also low in fat.',
        'First, put the noodles in a large heatproof bowl, cover in boiling water and leave for 10 mins. Drain and rinse with cold water, then set aside. In a bowl, mix the soy sauce or tamari, tamarind or lime juice and sugar.\nHeat the oil in a large frying pan or wok. Fry the garlic, spring onions, chilli and the cooked or leftover brussels sprouts for around 2 mins (to cook the sprouts from raw, boil for 8-10 mins until tender). Then, add the noodles and beansprouts and fry for 1 min more. Pour over the sauce and toss well, working quickly to coat all the vegetables and noodles. Once everything is heated through, season and divide between four bowls. Scatter with the nuts and serve with lime wedges to squeeze over.',
        '250g flat rice noodles \n1 tbsp soy sauce \n1 tbspp tamarind paste \n2 tsp palm sugar \n2 tbsp vegetable oil \n1 garlic clove, thinly sliced \n2 spring onions, thinly sliced on a diagonal \n1 red chili, sliced \n200g charred brussels sprouts \n100g beansprouts \n30g salted peanuts (or any other nuts), roughly chopped, to serve \nlime wedges, to serve',
        '1', -- UserID
        TRUE,
        '2023-02-10 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/noodles-99a7139.jpg?quality=90&webp=true&resize=440,400',
        'Author : Elena Silcock, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        10 -- cooking_time  
        6   -- meal type (cuisines)
    ),
    (
        8,
        'Elena Silcock',
        'Beetroot & red onion tarte tatin',
        'Not Specified',
        444, 40, 6, 27, 5, 360, -- calories, carbs, protein, fat, fibre, sodium
        4-6,
        'This vegan pastry would make a stunning centerpiece. The bright red beetroot contrasts with the vibrant green salad, making it great for a meatless celebration.',
        'Heat oven to 200C/180C fan/gas 6. In a bowl, toss the beetroot and onion in 2 tbsp of the oil, the vinegar and sugar. Add the star anise and season well. Heat the rest of the oil in a large, ovenproof non-stick frying pan, then nestle in the veg so that they cover the surface of the pan. Cover with foil and cook in the oven for 45 mins.\nOn a well-floured surface, roll the pastry to a thickness of 0.5cm and cut out a circle the same size as your frying pan. Carefully take the pan out of the oven, remove the foil and wiggle the beets and onion around in the pan to make a compact layer. Put the pastry on top, tucking it in all around the edges, then return the pan to the oven and bake for 35 mins or until the pastry has puffed up and is a deep golden brown.\nSlide a palate knife around the edge of the tart, then put a plate on top of the pastry, serving side down. Flip the pan over to turn the tart out onto the plate – be careful not to burn yourself with the handle. Top with the orange zest and a sprinkle of sea salt, then serve with a peppery salad on the side.',
        '400g beetroot, cut into wedges \n1 red onion, cut into wedges \n3 tbsp olive oil \n2 tbsp rice wine vinegar \n2 tbsp soft brown sugar \n2 star anise \nflour for rolling \n500g block puff pastry \n1 orange, zested \npeppery green salad, to serve',
        '1', -- UserID
        TRUE,
        '2023-02-24 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/beetroot-star-anise-red-onion-tart-tatin-6617a3f.jpg?quality=90&webp=true&resize=440,400',
        'Author : Elena Silcock, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        80 -- cooking_time  
        5   -- meal type (cuisines)
    ),
    (
        9,
        'Samuel Goldsmith',
        'Courgette curry',
        'Not Specified',
        389, 24, 12, 26, 8, 40, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'For a firmer texture in this dish, scoop out the seeds before slicing and frying the courgettes. Nothing goes to waste because the seeds give the sauce more body.',
        'Trim the ends of the courgettes, halve them lengthways and, using a teaspoon, scrape out the watery seeds in the centre (it’s fine if you don’t get all of them). Roughly slice the courgette halves, then roughly chop the seeds and reserve for later.\nHeat 2 tbsp oil in a large frying pan over a medium heat and fry the sliced courgettes until golden, about 8-10 mins. Remove from the pan, leaving the oil behind, then add the onion and a further tablespoon of oil if necessary, along with a good pinch each of salt and pepper. Fry for 6-8 mins until soft and just starting to turn a light brown, then tip in the chillies, ginger and garlic, and cook for 2 mins until starting to soften. Stir in the spices and cook for another 30 seconds.\nScatter in the chickpeas and pour in the tomatoes, coconut milk and reserved courgette seeds. Simmer over a medium-low heat for 10 mins before adding the courgettes back to the pan and cooking for a further 8-10 mins. Serve with basmati rice and sides of your choice.',
        '3 medium courgettes \n1 red onion, halved and finely sliced \n1-2 red chillies, finely chopped \n40g ginger, peeled and finely grated \n4 garlic cloves, finely grated \n2 tsp garam masala \n1 tsp ground cumin \n1 tsp ground turmeric \n400g can chickpeas, drained \n400g can chopped tomatoes \n400g can coconut milk \ncooked basmati rice, to serve',
        '1', -- UserID
        TRUE,
        '2023-02-27 17:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Courgette-curry-c295fa0.jpg?quality=90&webp=true&resize=375,341',
        'Author : Samuel Goldsmith, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        40 -- cooking_time  
        8   -- meal type (cuisines)
    ),
    (
        10,
        'Roopa Gulati',
        'Chickpea stew with tomatoes & spinach',
        'Not Specified',
        145, 17, 7, 6, 5, 224, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Prepare this comforting dish, serve it with some naan, and settle up on the couch for a wonderful evening in.',
        'Heat the oil in a wok and fry the onion over a low heat until softened. Stir in the garlic, ginger and chillies and cook for a further 5 mins until the onions are golden and the garlic slightly toasted.\nAdd the turmeric, garam masala and cumin, stirring over a low heat for a few secs. Tip in the chopped tomatoes and add the tomato purée, then simmer for 5 mins.\nAdd the chickpeas to the pan with 300ml water (fill the can three-quarters full). Simmer for 10 mins before stirring in the spinach to wilt. Season and serve with rice or naan.',
        '1 tbsp vegetable oil \n1 red onion, sliced \n2 garlic cloves, chopped \n1/2 finger length piece fresh root ginger, shredded \n2 mild red chillies, thinly sliced \n1/2 tsp turmeric \n3/4 tsp garam masala \n1 tsp ground cumin \n4 tomatoes, chopped \n2 tsp tomato purée \n400g can chickpea, rinsed and drained \n200g baby spinach leaves \nrice or naan bread, to serve',
        '1', -- UserID
        TRUE,
        '2023-03-09 12:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-871504_10-a91e5e1.jpg?quality=90&webp=true&resize=440,400',
        'Author : Roopa Gulati, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        25 -- cooking_time  
        8   -- meal type (cuisines)
    ),
    (
        11,
        'Esther Clark',
        'Veggie yaki udon',
        'Not Specified',
        366, 51, 15, 9, 11, 560, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Incorporate vegetables into your meal with our flavorful Japanese-inspired yaki udon. It is low in fat and calories, quick to prepare, and healthful.',
        'Heat the oil in a non-stick frying pan or wok over a high heat. Add the onion and fry for 5 mins. Stir in the mangetout, corn, pak choi and spring onions and cook for 5 mins more. Add the garlic, curry powder and soy sauce, and cook for another minute.\nAdd the udon noodles along with the ginger (if using) and reserved brine, and stir in 2-3 tbsp hot water until the noodles are heated through. Divide between bowls and serve.',
        '1 1/2 tbsp sesame oil \n1 red onion, cut into thin wedges \n160g mangetout \n70g baby corn, halved \n2 baby pak choi, quartered \n3 spring onions, sliced \n1 large garlic clove, crushed \n1/2 tbsp mild curry powder, or use 1 tsp garam masala \n4 tsp low-salt soy sauce \n300g ready-to-cook udon noodles \n1 tbsp pickled sushi ginger, chopped, plus 2 tbsp of the brine, optional',
        '1', -- UserID
        TRUE,
        '2023-03-07 17:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/yaki-udon-19d4efb.jpg?quality=90&webp=true&resize=440,400',
        'Author : Esther Clark, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        15 -- cooking_time  
        3   -- meal type (cuisines)
    ),
    (
        12,
        'Chiwong',
        'Tomato bruschetta',
        'Not Specified',
        310, 42, 8, 12, 3, 288, -- calories, carbs, protein, fat, fibre, sodium
        12,
        'Try this easy tomato bruschetta recipe for a traditional Italian appetizer. Fresh, flavorful, and full of flavor, this simple dish is perfect for a summer get-together with friends.',
        'In a large bowl, mix the onions, tomatoes, garlic and basil, taking care not to mash or break up the tomatoes too much. Add the balsamic vinegar and extra virgin olive oil. Add salt and pepper to taste. Mix again. Cover and chill for at least an hour. This will allow the flavours to soak and blend together.\nSlice the baguette loaf diagonally into 12 thick slices and lightly toast them until they are light brown on both sides. Serve the mixture on the warm slices of bread. If you prefer the mixture at room temperature, remove from the fridge half an hour before serving.',
        '1/2 small red onion, finely chopped \n8 medium tomatoes (about 500g), coarsely chopped and drained \n2-3 garlic cloves, crushed \n6-8 leaves of fresh basil, finely chopped \n30ml balsamic vinegar \n60-80ml extra virgin olive oil \n1 loaf crusty bread',
        '1', -- UserID
        TRUE,
        '2023-03-18 10:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bruschetta-recipe-1-2448fad.jpg?quality=90&webp=true&resize=440,400',
        'Author : Chiwong, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        15 -- cooking_time  
        4   -- meal type (cuisines)
    ),
    (
        13,
        'Miriam Nice',
        'Easy vegan pho',
        'Not Specified',
        234, 46, 6, 2, 3, 1120, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Prepare this simple vegan noodle soup as a comforting midweek meal. You can add extra sriracha to this low-calorie dish to make it more spicy to your liking.',
        'Tip the noodles into a bowl and cover with boiling water. Leave to stand for 10 mins, then drain, rinse in cold water and set aside.\nIn a jug, mix the Marmite with 500ml boiling water. Set aside while you cook the vegetables.\nHeat the oil in a saucepan, then add the mushrooms and leek. Cook for 10-15 mins until softened and beginning to colour, then add the soy sauce and Marmite and water mixture and stir. Bring to the boil for 5 mins.\nDivide the noodles between two deep bowls, then ladle over the hot broth. Top with the chilli slices, mint leaves and peanuts, and serve with some sriracha on the side.',
        '100g rice noodles \n1 tsp Marmite \n1 tsp vegetable oil \n50g chestnut mushrooms, sliced \n1 leek, sliced \n2 tbsp soy sauce \n1 red chilli, sliced (optional) \n1/2 bunch mint, leaves picked and stalk discarded \nhandful salted peanuts \nsriracha, to serve',
        '1', -- UserID
        TRUE,
        '2023-03-25 11:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-vegan-pho-0eaa94e.jpg?quality=90&webp=true&resize=440,400',
        'Author : Miriam Nice, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        20 -- cooking_time  
        10   -- meal type (cuisines)
    ),
    (
        14,
        'Lucy Netherton',
        'Mushroom stroganoff',
        'Not Specified',
        329, 50, 11, 9, 4, 280, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'With a few clever modifications, this traditional creamy dish may be reduced in fat and calories.',
        'Heat the olive oil in a large non-stick frying pan and soften the onion for about 5 mins.\nAdd the paprika and garlic, then cook for 1 min more. Add the mushrooms and cook on a high heat, stirring often, for about 5 mins.\nPour in the stock and Worcestershire sauce. Bring to the boil, bubble for 5 mins until the sauce thickens, then turn off the heat and stir through the soured cream and most of the parsley. Make sure the pan is not on the heat or the sauce may split.\nHeat the wild rice following pack instructions, then stir through the remaining chopped parsley and serve with the stroganoff.',
        '2 tsp olive oil \n1 onion, finely chopped \n1 tbsp sweet paprika \n2 garlic cloves, crushed \n300g mixed mushrooms, chopped \n150ml low-sodium beef or vegetable stock \n1 tbsp Worcestershire sauce, or vegetarian alternative \n3 tbsp half-fat soured cream \nsmall bunch of parsley, roughly chopped \n250g pouch cooked wild rice',
        '3', -- UserID
        TRUE,
        '2023-03-29 09:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-871464_11-1ff1fe2.jpg?quality=90&webp=true&resize=500,454',
        'Author : Lucy Netherton, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        20 -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        15,
        'Sara Buenfeld',
        'Smoked salmon pasta',
        'Not Specified',
        433, 69, 22, 7, 4, 760, -- calories, carbs, protein, fat, fibre, sodium
        3,
        'This simple smoked salmon spaghetti meal takes about 20 minutes to prepare and uses low-cost ingredients. It is spiced with fresh citrus, herbs, and a blast of chili.',
        'Cook the spaghetti for 10 mins or following pack instructions until al dente.\nMeanwhile, heat the oil in a wok or large frying pan and briefly fry the chilli to soften it.\nDrain the spaghetti, reserving a little of the water, then tip into the wok and, using 2 wooden spoons, toss in the chilli oil until well mixed. Add the salmon, lemon zest and chives or onions, then toss again. Season and add lemon juice to taste.',
        '300g spaghetti \n1 tbsp olive oil \n1 red chilli, deseeded and finely chopped \n120g pack smoked salmon trimmings \nzest 1 lemon and juice to taste \ngood handful snipped chives or finely chopped spring onions',
        '3', -- UserID
        TRUE,
        '2023-01-20 12:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1233472_8-2834502.jpg?quality=90&webp=true&resize=440,400',
        'Author : Sara Buenfeld, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        15 -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        16,
        'Elise Bauer',
        'Sole Piccata',
        'Not Specified',
        317, 10, 16, 22, 1, 1118, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Dinner in 20 minutes! Sole piccata will become your go-to piccata recipe. Simple sole fillets, dusted in flour and sauteed in olive oil with white wine and lemon juice, make an irresistible piccata.',
        'Dredge the fillets in flour.Rinse the fish in cold water and pat them dry. In a small bowl, whisk together the flour, salt, and pepper. Then place the flour mixture in a long shallow bowl or dish. Dredge the fillets in the flour so that both sides are lightly coated.\nHeat the olive oil over medium-high heat in a large stick-free saute pan. When the oil is hot (add a little pinch of flour to the oil, and if it sizzles immediately, you are ready), work in batches and place the fish fillets in the pan in one layer and fry until golden, about 2 minutes per side. Add more oil to the pan if needed.\nOnce browned on both sides, remove the fish fillets from the pan, set them on a paper towel-lined plate (or keep them warm in a 200°F oven).\nAdd the white wine to the pan and use a wooden spoon to scrape up any browned bits from the bottom of the pan.\nLet the wine boil furiously for a minute or two, until greatly reduced, then add the lemon juice and capers. Boil another minute.\nTurn off the heat. Add 1 tablespoon of butter to the pan, swirling it constantly. When it melts, repeat the process with the other tablespoon of butter.\nStir in half of the parsley and pour it over the fish. Sprinkle the fish with the remaining parsley. Serve at once.',
        '1 pound thin, skinless fish fillets \n1/3 cup all-purpose flour, for dredging \n1 teaspoon kosher salt \n1 teaspoon finely ground black pepper \n4 tablespoons extra virgin olive oil \n1/2 cup dry white wine (such as sauvignon blanc or pinot grigio) \n2 tablespoons lemon juice \n1/4 cup small capers \n2 tablespoons butter \n1/4 cup chopped fresh parsley',
        '1', -- UserID
        TRUE,
        '2023-01-10 14:00:00',
        'https://www.simplyrecipes.com/thmb/sZ-I3ZBb3qoMUZkij__FvpCCtsI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Sole-Piccata-LEAD-18-7fe82170950744bc9d41a75d944fc79b.JPG',
        'Author : Elise Bauer, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        20 -- cooking_time  
        4   -- meal type (cuisines)
    ),
    (
        17,
        'Elise Bauer',
        'Baked Lingcod with Lemon-Garlic Butter Sauce',
        'Not Specified',
        465, 3, 46, 28, 0, 1004, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'One quick and simple seafood recipe that comes together quickly is baked lingcod. Combine it with our lemon garlic butter sauce for a simple midweek supper! Works great with other fish too.',
        'Put the clam juice, sherry, whole milk, garlic, shallots, and bay leaf in a pot and bring to a boil. Boil it down by half.\nIn a separate saucepan (1-qt minimum), prepare the roux. Heat one tablespoon of butter in the saucepan on medium heat until it is foamy. Sprinkle in the flour, and stir for a couple of minutes with a metal whisk until well mixed. Cook until the color is tan, but not brown.\nSlowly add the reduced sauce mixture to the roux, stirring quickly to incorporate. When you first add some of the mixture, the roux will bubble up. Just keep pouring and keep whisking to incorporate.\nTurn the heat to low. Slowly whisk in the butter, 2 tablespoons at a time.\nAdd lemon juice, salt, and white pepper. Add some more clam juice or water if the sauce is too thick. Sprinkle with chopped parsley right before serving.\nMove the oven rack so that the baking pan will be 4 to 5 inches from the heat. Preheat the oven to 350°F.\nPrep the fish fillets: Rinse the fish in cold water. Cut into serving pieces if necessary. Remove any bones with fish-bone tweezers or (spotlessly clean) pliers. Lay the fish flat in a foil-lined baking pan. Rub some olive oil over both sides of the lingcod, enough to coat. Sprinkle both sides with a few shakes of salt and pepper.\nBake the fish at 350°F for 10 to 15 minutes, until just done. To test, use the tip of a knife to gently cut into the thickest part of the fillet. The fish is done when the fish has just turned from translucent to opaque at the center. Once you pull the fish out of the oven, it will continue to cook for a few minutes.\nServe the fish with the sauce poured on top. Rice, crusty bread and a simple salad are good accompaniments.',
        '1/2 cup clam juice, plus more as needed \n1/2 cup dry sherry \n1/2 cup whole milk \n1 tablespoon minced garlic \n1 tablespoon minced shallot \n1 bay leaf \n1 tablespoon unsalted butter \n1 tablespoon all-purpose flour \n1 cup unsalted butter, cut into 2-tablespoon pieces \n1 tablespoon lemon juice \n1/2 teaspoon kosher salt \n1/2 teaspoon ground white pepper \n2 tablespoons chopped fresh parsley \n2 pounds lingcod fillets \n2 teaspoons extra virgin olive oil \nKosher salt \nFreshly ground black pepper',
        '1', -- UserID
        TRUE,
        '2023-01-02 08:00:00',
        'https://www.simplyrecipes.com/thmb/jpNlWSZk6NuxsHr57MRmB1zPKHI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__01__baked-lingcod-horiz-a-1200-2e25188b62634d30a991b2b29270a5e5.jpg',
        'Author : Elise Bauer, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        15 -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        18,
        'Vivian Jao',
        'Whole Steamed Fish',
        'Not Specified',
        121, 4, 16, 3, 0, 714, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Threads of fresh ginger and scallions are laid on top of whole fish, and hot oil is poured over it to release aromatic fragrances and flavors. A lightly sweetened soy-based sauce binds the entire dish together.',
        'Separate herbs, ginger, and scallions for cooking and garnish. Smash a portion of ginger for cooking and julienne the rest for garnish. Cut scallions into 2-inch pieces; slice two-thirds for cooking, save the rest for garnish.\nSet up a steamer in a wok with water.Trim, scale, rinse, and pat dry the fish. Score the fish on both sides. Season the fish with salt and pepper. Stuff the fish cavity with ginger, scallions, and cilantro. Steam the fish for around 12 minutes until flaky.\nMix soy sauce, Shaoxing wine, and sugar. Heat oil until very hot; set aside.\nRemove fish, transfer to a platter. Garnish with julienned ginger, scallions, and cilantro. Pour hot oil over the fish and herbs. Heat sauce and pour around the fish.',
        '2 1/2-inch piece fresh ginger, divided \n2 scallions, divided \n20 small sprigs cilantro, divided \n1 (1 1/2 pound) whole black sea bass or red snapper, scaled and gutted \n2 teaspoons kosher salt \n1/16 teaspoon freshly ground black pepper \n1 tablespoon Shaoxing wine or dry sherry \n3 tablespoons soy sauce \n2 tablespoons Shaoxing wine \n2 tablespoons granulated sugar \n2 tablespoons canola or avocado oil \ncooked white rice, to serve',
        '1', -- UserID
        TRUE,
        '2023-03-02 08:30:00',
        'https://www.simplyrecipes.com/thmb/_Ibx2pOBu4NyMV-Yney9VxuY5k4=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Steamed-Whole-Fish-LEAD-3-a919bfb94b2d45aeb410dae0b6fbfc66.jpg',
        'Author : Uyen Luu, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        15 -- cooking_time  
        1   -- meal type (cuisines)
    ),
    (
        19,
        'Sabrina Modelle',
        'Grilled Fish Tacos with Strawberry Pineapple Salsa',
        'Not Specified',
        281, 32, 22, 8, 5, 268, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Grilled fish tacos served with a sweet and spicy strawberry pineapple salsa! This is the ideal summer meal—light, fresh, and quick. Excellent for a gathering.',
        'In a bowl, mix together all salsa ingredients, except for the sugar, and refrigerate for at least 30 minutes or up to 2 days. Taste and add sugar or additional seasonings to taste when ready to serve.\nIf you have a gas grill, make sure to preheat it for at least 10 minutes with the lid closed. If you have a charcoal grill, push the coals to one side to make high heat and lower heat zones for cooking.\nRemove fish from the refrigerator and pat dry with paper towels. In a small bowl or jar, mix spices until completely combined. Brush the fish with a little oil, then sprinkle all over with seasoning. Rest the fish at room temperature while the grill heats up.\nWhen your grill is hot, wipe the grates with oil. You can either use a grill brush or a small wad of paper towels dipped in the oil. Wipe the grates 5 to 10 times until they look black and glossy.\nPlace your fish, skin side down, on the grill. If using a charcoal grill, place over indirect heat. On a gas grill, turn the heat down to medium (about 350F) and close the lid. Grill 2 minutes, then check the fish by lifting one corner of the fish to see if it will come up without sticking. The skin should be crisp and brown. If it lifts easily, flip the fish and cook for another 3 to 5 minutes with the lid closed. If the fish doesn’t lift easily, continue cooking and checking every 30 seconds. Grill until the fish is cooked through and flakes easily with an internal temperature of 145F. Transfer the fish to a plate to rest.\nTurn heat to high and brush grates with oil again (or cook over direct heat on a charcoal grill). Cook tortillas for 30 seconds on each side to warm and soften.\nCut the fish into several pieces. Serve on tortillas, topped with salsa and other toppings.',
        '1 cup strawberries, finely diced \n1 cup pineapple, finely diced \n1/2 cup red onion, finely diced \n1 clove garlic, minced \n1 cup cilantro, roughly chopped, loosely packed \n1 small red chili, diced (optional) \n1 lime, juiced (about 1 1/2 tablespoons juice) \n1/4 teaspoon salt \n1/4 teaspoon black pepper \n1/2 teaspoon sugar (optional if the salsa is tart) \n1 pound firm-fleshed fish (like sea bass, swordfish, halibut, mahi mahi, or salmon) \n1 teaspoon ground cumin \n1 teaspoon sweet paprika \n1 teaspoon smoked paprika \n1/4 teaspoon salt \n1/4 teaspoon black pepper \n1 tablespoon olive oil \nGrapeseed or other high heat oil, for grill \n12 small (4- to 6-inch) corn tortillas \nTo serve: Shredded red cabbage, Sliced radishes, Avocado, Sour Cream, Lime Wedges, Cilantro',
        '1', -- UserID
        TRUE,
        '2023-06-03 09:30:00',
        'https://www.simplyrecipes.com/thmb/W6vMtxhRYZyKqvdWOG35RnKzmzw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2017__06__2017-07-22-FishTacos-5-baa8171933fe40f0b737d448b4c47788.jpg',
        'Author : Sabrina Modelle, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        10 -- cooking_time  
        6   -- meal type (cuisines)
    ),
    (
        20,
        'Elise Bauer',
        'Quick Easy Fish Stew',
        'Not Specified',
        389, 7, 33, 23, 2, 782, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Make this delicious fish stew in 30 minutes with only a few simple ingredients.',
        'Heat olive oil in a large, thick-bottomed pot over medium-high heat. Add onion and sauté 4 minutes. Add the garlic and cook a minute more. Add parsley and stir 2 minutes. Add tomato and tomato paste, and gently cook for 10 more minutes or so.\nAdd clam juice, dry white wine, and fish. Bring to a simmer, and let simmer until the fish is cooked through and easily flakes apart, about 3 to 5 minutes. Add seasoning—salt, pepper, oregano, thyme, and Tabasco. Add more salt and pepper to taste.\nLadle into individual bowls and serve. Great served with crusty bread for dipping in the fish stew broth.',
        '6 tablespoons extra virgin olive oil \n1 medium onion, chopped (about 1 1/2 cups) \n3 large cloves garlic, minced \n2/3 cup fresh parsley leaves, chopped \n1 1/2 cups fresh chopped tomato OR 1 (14-ounce) can whole or crushed tomatoes with their juices \n2 teaspoons tomato paste, optional \n1 (8-ounce) bottle clam juice (or 1 cup shellfish stock) \n1/2 cup dry white wine (such as Sauvignon blanc) \n1 1/2 pounds firm white fish fillets such as halibut, cod, red snapper, or sea bass, cut into 2-inch pieces \nPinch dried oregano \nPinch dried thyme \n1/8 teaspoon Tabasco sauce , or more to taste \n1/8 teaspoon freshly ground black pepper, plus more to taste \n1 teaspoon salt, plus more to taste',
        '1', -- UserID
        TRUE,
        '2023-06-03 09:30:00',
        'https://www.simplyrecipes.com/thmb/mx-jiA5vHJwtVVjXaerfCBq4DA0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2016__02__dads-fish-stew-horiz-a-1600-8cf962c81e084558a025bf8392e00f32.jpg',
        'Author : Elise Bauer, Designed by simplyrecipes',  -- img_title
        3, -- dietary_preference
        20 -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        21,
        'Elena Silcock',
        'Sweet potato & peanut curry',
        'Not Specified',
        387, 32, 6, 25, 7, 240, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Make this delicious and inexpensive vegan curry for a simple family meal. With spinach and sweet potato, it boasts two of your five-a-day and it’s under 400 calories.',
        'Melt 1 tbsp coconut oil in a saucepan over a medium heat and soften 1 chopped onion for 5 mins. Add 2 grated garlic cloves and a grated thumb-sized piece of ginger, and cook for 1 min until fragrant.\nStir in 3 tbsp Thai red curry paste, 1 tbsp smooth peanut butter and 500g sweet potato, peeled and cut into chunks, then add 400ml coconut milk and 200ml water.\nBring to the boil, turn down the heat and simmer, uncovered, for 25-30 mins or until the sweet potato is soft.\nStir through 200g spinach and the juice of 1 lime, and season well. Serve with cooked rice, and if you want some crunch, sprinkle over a few dry roasted peanuts.',
        '1 tbsp coconut oil \n1 onion, chopped \n2 garlic cloves, grated \nthumb-sized piece ginger, grated \n3 tbsp Thai red curry paste (check the label to make sure it’s vegetarian/ vegan) \n1 tbsp smooth peanut butter \n500g sweet potato, peeled and cut into chunks \n400ml can coconut milk \n200g bag spinach \n1 lime, juiced \ncooked rice, to serve (optional) \ndry roasted peanuts, to serve (optional)',
        '2', -- UserID
        TRUE,
        '2023-06-11 12:30:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/satay-sweet-potato-curry-17cc62d.jpg?quality=90&webp=true&resize=440,400',
        'Author : Elena Silcock, Designed by bbcgoodfood',  -- img_title
        2, -- dietary_preference
        45 -- cooking_time  
        7   -- meal type (cuisines)
    ),
    (
        22,
        'Esther Clark',
        'Veggie okonomiyaki',
        'Not Specified',
        312, 29, 15, 15, 5, 280, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'This vegetarian okonomiyaki with eggs, cabbage, pak choi, and spring onions will give your diet a major boost. It is a low-calorie, nutritious lunch choice.',
        'Whisk together the eggs, flour and milk until smooth. Add half the spring onions, the pak choi, cabbage, chilli and soy sauce. Heat the oil in a small frying pan and pour in the batter. Cook, covered, over a medium heat for 7-8 mins. Flip the okonomiyaki into a second frying pan, then return it to the heat and cook for a further 7-8 mins until a skewer inserted into it comes out clean.\nMix the mayonnaise and lime juice together in a small bowl. Transfer the okonomiyaki to a plate, then drizzle over the lime mayo and top with the extra chilli and spring onion and the sushi ginger, if using. Serve with the wasabi on the side, if you like.',
        '3 large eggs \n50g plain flour \n50ml milk \n4 spring onions, trimmed and sliced \n1 pak choi, sliced \n200g Savoy cabbage, shredded \n1 red chilli, deseeded and finely chopped, plus extra to serve \n1/2 tbsp low-salt soy sauce \n1/2 tbsp rapeseed oil \n1 heaped tbsp low-fat mayonnaise \n1/2 lime, juiced \nsushi ginger, to serve (optional) \nwasabi, to serve (optional)',
        '2', -- UserID
        TRUE,
        '2023-06-20 16:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/veggie-okonomiyaki-de8fe85.jpg?quality=90&webp=true&resize=440,400',
        'Author : Esther Clark, Designed by bbcgoodfood',  -- img_title
        2, -- dietary_preference
        10 -- cooking_time  
        3   -- meal type (cuisines)
    ),
    (
        23,
        'Marianne Wren',
        'Spanakopita Egg Casserole',
        'Not Specified',
        221, 6, 14, 16, 1, 344, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'This breakfast version of a Greek classic eschews the hefty pastry and provides you with plenty of vegetables, creamy ricotta, and feta for a filling start to the day. Make it ahead of time and just warm it up in the toaster oven in the morning.',
        'Preheat oven to 350˚F. Mist a 9-inch square baking dish with cooking spray.\nIn a large, deep skillet on medium-low, heat oil. Add onion and cook, stirring often, until soft, 4 to 5 minutes. Add garlic and cook, stirring frequently until fragrant, 30 seconds. Add spinach, salt and pepper; cook, tossing with tongs until spinach is wilted, about 2 minutes. Transfer mixture into prepared dish, spreading evenly to coat the bottom.\nIn a large bowl, whisk together eggs and cream until well combined. Stir in ricotta, feta, parsley and dill.\nPour egg mixture over spinach layer; stir gently, allowing some spinach to float into egg mixture. Bake until set and just starting to brown around the edges, 25 to 30 minutes. Slice into squares or triangles and serve warm.',
        '2 tsp extra-virgin olive oil \n1 small yellow onion, finely chopped \n2 cloves garlic, minced \n5 oz baby spinach \n1/4 tsp each sea salt and ground black pepper \n8 large eggs \n1/2 cup light cream \n1/2 cup full-fat ricotta cheese \n1/2 cup crumbled full-fat feta cheese \n1/4 cup each chopped fresh flat-leaf parsley and dill',
        '2', -- UserID
        TRUE,
        '2023-06-01 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/03/spanakopita-egg-casserole_85-web-3.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Darren Kemper, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        40 -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        24,
        'Beth Lipton',
        'Grilled Eggplant Caprese',
        'Not Specified',
        243, 7, 9, 21, 3, 179, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A twist on a typical Caprese salad, our version uses grilled eggplant slices that you can make ahead for easier prep.',
        'Spread eggplant, tomato and mozzarella slices on a platter. Scatter basil on top. Drizzle with oil and vinegar then sprinkle with salt and pepper. Alternatively, drizzle with Macadamia Basil Pesto.',
        '2 eggplants, sliced then grilled \n4 heirloom tomatoes, sliced \n6 oz fresh mozzarella, sliced \n1 tbsp thinly sliced fresh basil (or use whole basil leaves) \n1 tbsp extra-virgin olive oil \n2 tsp balsamic vinegar \n1/8 tsp each coarse sea salt and ground black pepper',
        '1', -- UserID
        TRUE,
        '2023-04-01 16:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/05/grilled-eggplant-caprese_79-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Beth Lipton, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        15 -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        25,
        'Beth Lipton',
        'Grilled Eggplant Caprese',
        'Not Specified',
        221, 6, 14, 16, 1, 344, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A twist on a typical Caprese salad, our version uses grilled eggplant slices that you can make ahead for easier prep.',
        'Spread eggplant, tomato and mozzarella slices on a platter. Scatter basil on top. Drizzle with oil and vinegar then sprinkle with salt and pepper. Alternatively, drizzle with Macadamia Basil Pesto.',
        '2 eggplants, sliced then grilled \n4 heirloom tomatoes, sliced \n6 oz fresh mozzarella, sliced \n1 tbsp thinly sliced fresh basil (or use whole basil leaves) \n1 tbsp extra-virgin olive oil \n2 tsp balsamic vinegar \n1/8 tsp each coarse sea salt and ground black pepper',
        '1', -- UserID
        TRUE,
        '2023-04-01 16:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/05/grilled-eggplant-caprese_79-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Beth Lipton, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        15 -- cooking_time  
        9   -- meal type (cuisines)
    );


-- Recipe allergies
  -- id refers to recipe id (refer to recipe table)
    -- allergy_id refers to allergy id (refer to allergies table)
-- Insert Into recipe_allergies (id, allergy_id) VALUES (1, 1); --- served as a reference how u add allergy
-- Insert Into recipe_allergies (id, allergy_id) VALUES (1, 2);
-- Insert Into recipe_allergies (id, allergy_id) VALUES (1, 3);
-- Insert Into recipe_allergies (id, allergy_id) VALUES (2, 2);
-- Insert Into recipe_allergies (id, allergy_id) VALUES (2, 7);












-- second set of recipes
INSERT INTO recipe
(id, publisher, title, info, calories, carbs, protein, fat, fibre, sodium, serving_size, description, steps, ingredients, UserID, Active, createddt, img, img_title, dietary_preference, cooking_time)
VALUES
    (
        1,
        'test publisher',
        'test recipe',
        "Not Specified",
        286, 44, 11, 9, 6, 880, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'testing',
        'testing',
        'testing',
        '3', -- UserID
        TRUE,
        '2023-04-26 14:30:00',
        'https://img.freepik.com/free-photo/grilled-salmon-fillet-with-fresh-vegetable-salad-generated-by-ai_188544-21273.jpg?t=st=1706581041~exp=1706584641~hmac=a5192395751401ed16e80a0043e0f94504123f21393174683c63426ba80cba62&w=996',
        'Author : Vecstock, Designed by Freepik',  -- img_title
        1, -- dietary_preference
        30 -- cooking_time
    );



-- Recipe allergies
  -- id refers to recipe id (refer to recipe table)
    -- allergy_id refers to allergy id (refer to allergies table)
-- Insert Into recipe_allergies (id, allergy_id) VALUES (1, 1); --- served as a reference how u add allergy
-- Insert Into recipe_allergies (id, allergy_id) VALUES (1, 2);
-- Insert Into recipe_allergies (id, allergy_id) VALUES (1, 3);
-- Insert Into recipe_allergies (id, allergy_id) VALUES (2, 2);
-- Insert Into recipe_allergies (id, allergy_id) VALUES (2, 7);

-- all the recipes reviews and ratings (can do it once all the recipes are done)
INSERT INTO RECIPE_REVIEW_RATING
(Review, Rating, UserID, RecipeID)
VALUES
    ('This is very awesome',                            3.2, '7', 1),
    ('The recipe nice.'    ,                            5.0, '8', 1),
    ('I love this recipe!' ,                            4.0, '9', 1),
    ('I love this recipe!' ,                            4.0, '12', 1),
    ('This is very awesome',                            3.2, '7', 2),
    ('The recipe is very d',                            5.0, '8', 2),
    ('I love this recipe!' ,                            4.0, '9', 2),
    ('This is very awesome',                            3.2, '12', 2);


