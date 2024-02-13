
-- -- Category
-- -- 1. Allergies
-- Insert into allergies 
-- (subcategory_name) 
-- VALUES
-- ("Milk"),
-- ("Egg"),
-- ("Soy"),
-- ("Shellfish"),
-- ("Fish"),
-- ("Peanut"),
-- ("Tree Nuts"),
-- ("Gluten"),
-- ('Wheat'),
-- ('Dairy'),
-- ('Legume');
-- -- 2. Dietary preferences
-- Insert into dietary_preferences 
--  (subcategory_name) 
-- VALUES
-- ("Vegan"),
-- ("Vegetarian"),
-- ("Pescatarian"),
-- ("Meat-Based");

-- -- Recipe
--   -- publisher should be author of the recipe
--   -- info refers to dietary information
--     -- steps refers to the steps to cook the recipe (separated by \n)
--     -- ingredients refers to the ingredients needed to cook the recipe (separated by \n)
--     -- img_title should be the author of the image and the source of the image (follow their code of conduct)
--     -- dietary_preference refers to the category of the recipe (refer to dietary_preferences)

-- -- Note that: Some recipes has allergies, insert into recipe_allergies table
-- -- 3. Meal type
-- INSERT INTO
--     meal_type (subcategory_name)
-- VALUES
--     ('Chinese'),
--     ('Western'),
--     ('Japanese'),
--     ('Italian'),
--     ('French'),
--     ('Mexican'),
--     ('Thai'),
--     ('Indian'),
--     ('Mediterranean'),
--     ('Vietnamese'),
--     ('Moroccan'),
--     ('Korean'),
--     ('Southeast Asian');

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
        25, -- cooking_time
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
        15, -- cooking_time  
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
        30, -- cooking_time  
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
        25, -- cooking_time  
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
        30, -- cooking_time  
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
        15, -- cooking_time  
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
        10, -- cooking_time  
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
        80, -- cooking_time  
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
        40, -- cooking_time  
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
        25, -- cooking_time  
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
        15, -- cooking_time  
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
        15, -- cooking_time  
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
        20, -- cooking_time  
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
        20, -- cooking_time  
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
        15, -- cooking_time  
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
        20, -- cooking_time  
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
        15, -- cooking_time  
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
        15, -- cooking_time  
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
        10, -- cooking_time  
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
        20, -- cooking_time  
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
        45, -- cooking_time  
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
        10, -- cooking_time  
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
        40, -- cooking_time  
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
        15, -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        25,
        'Marianne Wren',
        'Halibut with Olive Tapenade Crust',
        'Not Specified',
        221, 6, 14, 16, 1, 344, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A fast olive, garlic, and caper tapenade tops tender fish, which is served with roasted grape tomatoes and lemon-scented couscous with fresh parsley.',
        'Preheat over to 400°F. Line a roasting pan with parchment paper.\nIn a food processor, pulse olives, garlic, capers and 2 tsp oil until coarsely chopped. In a medium bowl, toss tomatoes with remaining 1 tsp oil. Arrange halibut and tomatoes in pan and sprinkle both with salt and pepper. Divide olive mixture over top halibut. Bake for 15 minutes, or until fish is opaque and flakes easily with a fork and tomatoes are soft and collapsed.\nMeanwhile, cook couscous according to package directions. Drain, return to pot and stir in parsley and lemon zest. Serve fish and tomatoes over couscous.',
        '12 pitted black olives \n2 cloves garlic \n2 tbsp capers, drained \n1 tbsp olive oil, divided \n2 cups grape tomatoes, halved \n4 6-oz boneless, skinless halibut fillets \n1/4 tsp sea salt \n1 tsp fresh ground black pepper \n1 cup Israeli couscous \n2 tbsp chopped fresh flat-leaf parsley leaves \n1 tsp finely grated lemon zest',
        '1', -- UserID
        TRUE,
        '2023-11-23 10:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/12/HalibutOliveTapenade_Feature.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Marianne Wren, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        26,
        'Jesse Jane Lee',
        'Veggie Scramble with Quinoa',
        'Not Specified',
        418, 29, 19, 26, 5, 416, -- calories, carbs, protein, fat, fibre, sodium
        1,
        'This light breakfast will keep you going throughout the morning. Prepare 1 and a half cups of cooked quinoa ahead of time and refrigerate for subsequent breakfasts to save time this week.',
        'In a sauté pan on medium, heat oil. Add onion and cook 5 minutes until translucent. Add spinach and tomatoes; sauté until spinach wilts, about 3 minutes.\nWhile veggies are cooking, in a bowl, whisk eggs with salt and pepper. Once spinach has wilted, add eggs; heat and scramble to desired doneness. Serve over cooked quinoa.',
        '1 tbsp avocado oil \n1/4 cup diced yellow onion \n1 cup loosely packed chopped baby spinach \n1/2 cup diced tomato \n2 large eggs \n1/8 tsp sea salt \n1/4 tsp ground black pepper \n1/2 cup cooked quinoa',
        '1', -- UserID
        TRUE,
        '2023-11-23 10:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/10/veggie-scramble-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Jesse Jane Lee, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        27,
        'Jesse Jane Lee',
        'Banana Coconut Chocolate Smoothie',
        'Not Specified',
        221, 6, 14, 16, 1, 344, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Chocolate for breakfast? Sure, please! Because it contains entire foods like spinach, beans, and bananas, this smoothie will keep you feeling full. Pick a protein powder without any additional sweeteners.',
        'Place all ingredients in a blender and blend until smooth.',
        '1 banana, cut into chunks and frozen \n1 cup packed baby spinach \n1 cup water \n1/2 cup full-fat coconut milk \n1/4 cup canned cannellini beans, drained \n1 scoop chocolate protein powder  \n1 tsp ground cinnamon',
        '1', -- UserID
        TRUE,
        '2023-09-20 15:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/10/banana-almond-chocolate-smoothie-1-1-1-e1611878429924.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Jesse Jane Lee, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        5, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        28,
        'Jesse Jane Lee',
        'Poached Egg Avocado Toast',
        'Not Specified',
        221, 6, 14, 16, 1, 344, -- calories, carbs, protein, fat, fibre, sodium
        1,
        'This egg-topped avocado toast elevates the dish to new heights. Make sure your bread slices are firm enough to withstand the toppings.',
        'Mash avocado with lime juice. Divide among 2 slices of toast.\nIn a saucepan over medium-low, heat 3 inches water; bring to a gentle simmer.\nWorking 1 at a time, break egg into small dish and gently slide egg into hot water. Add second egg in same method. Keep water at a very low simmer water until egg whites are set and yolks are cooked to desired doneness, 3 to 5 minutes.\nRemove eggs from water with slotted spoon, drain well on paper towels and place over avocado on toast. Top with pepper, salt and pepper flakes.',
        '1/2 avocado \n1 tsp fresh lime juice \n2 thin slices whole-wheat or sourdough bread, toasted \n2 large eggs \n1/4 tsp ground black pepper \n1/8 tsp each sea salt and red pepper flakes',
        '2', -- UserID
        TRUE,
        '2023-07-04 09:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/10/poached-egg-avocado-toast-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Jesse Jane Lee, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        10, -- cooking_time  
        3   -- meal type (cuisines)
    ),
    (
        29,
        'Heather BainBridge',
        'Cajun Catfish Po Boy & Cooling Vegetable Salad',
        'Not Specified',
        345, 35, 31, 14, 7.5, 592, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Try this healthier version of the traditional New Orleans sammie, which includes grilled fish, an abundance of vegetables, a whole-wheat baguette, and a light goat cheese spread, instead of heading south for the greasy, deep-fried original.',
        'Ensure that 2 racks are in middle positions in oven. Preheat oven to 400°F.\nPrepare Cooling Vegetable Salad: In a medium bowl, combine cucumbers, tomatoes, carrot, parsley and onion. Then add pepper, garlic powder, oil and vinegar and stir until vegetables are evenly coated. Place in refrigerator to let flavors meld until ready to serve meal. \nPrepare Cajun Catfish: Place catfish on a foil-lined cookie sheet. Brush fillets with oil and sprinkle with spices. Bake 12 to 15 minutes, until flaky and no longer translucent.\nPrepare Goat Cheese Spread: In a small bowl, stir together cheese, yogurt, lemon juice, parsley, carrot, cucumber and pepper until combined. Set aside.\nTo assemble each sandwich, smear Goat Cheese Spread on 1 side of a baguette slice and set aside. Place a catfish fillet on another slice of baguette. Top fillet with 2 onion slices, 2 tomato slices and 1 lettuce leaf; then top with reserved baguette slice, spread-side-down. Repeat with remaining catfish fillet and accompaniments. Serve with Cooling Vegetable Salad. Keep stored in refrigerator for 2 to 4 days to ensure freshness.',
        '1 cup cucumbers, peeled and halved \n10 grape tomatoes, halved \n1/4 cup carrots, shredded  \n1/4 cup flat-leaf parsley, minced \n1/4 cup red onion, diced \n1/4 tsp ground black pepper \n1/4 tsp garlic powder \n1/2 tsp extra-virgin olive oil \n1 tbsp rice wine vinegar \n2 3-oz catfish fillets \n1 tsp extra-virgin olive oil \n1 1/2 tsp Cajun spices \n4 oz bakery-fresh wholewheat baguette, sliced into 4 pieces and toasted \n4 slices red onion \n4 slices tomato (each slice 1/4-inch thick) \n2 Boston lettuce leaves \n1 oz goat cheese \n3 tbsp nonfat Greek-style yogurt \n1 tsp fresh lemon juice \n2 tbsp flat-leaf parsley, minced \n3 tbsp carrots, shredded \n2 tbsp cucumbers, diced \n1/2 tsp ground black pepper',
        '2', -- UserID
        TRUE,
        '2023-07-10 10:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/06/poboy-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Heather BainBridge, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        25, -- cooking_time  
        3   -- meal type (cuisines)
    ),
    (
        30,
        'Heather BainBridge',
        'Moroccan Buffalo & Chickpea Chili',
        'Not Specified',
        397, 51, 29, 9, 11, 267, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Buffalo is a great substitute for beef because it is low in fat and high in protein. Our chili features large cubes of lean meat combined with vegetables and nine different spices.',
        'In a large nonstick pot, cook steak for 2 minutes over medium high heat. Add garlic, onion, celery, carrots and all spices. Cook for 5 minutes. Then add chickpeas, cooking for 2 more minutes.\nTurn up heat to high and pour in 4 cups water, corn, tomatoes and bay leaf. Bring to a boil and stir in tomato paste. Reduce heat to medium and simmer, uncovered, for 30 to 35 minutes, stirring occasionally, until liquid reduces and chili thickens. Squeeze juice of both lemons into chili, if desired, and stir. Remove bay leaf before serving. Chili can be stored in refrigerator for 5 days or frozen for 2 to 3 months.',
        '1 lb top-round buffalo steak or lean beef stew meat, cut into 1-inch cubes \n2 tbsp garlic, minced \n2 1/2 cups yellow onion, chopped \n1 cup celery, chopped \n2 cups carrots, cut into matchsticks \n1 tbsp cumin, ground \n2 tsp dried coriander \n1 tsp ground black pepper \n1/2 tsp turmeric \n1/2 tsp paprika \n3 1/2 cups cooked chickpeas \n1 cup frozen corn (no need to thaw) \n2 cups tomatoes, chopped \n1 bay leaf \n1 6-oz jar tomato paste',
        '5', -- UserID
        TRUE,
        '2023-02-17 17:30:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2019/06/chili-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Heather BainBridge, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        40, -- cooking_time  
        11   -- meal type (cuisines)
    ),
    (
        31,
        'Heather BainBridge',
        'Sesame Garlic Chicken with Tahini Spinach & Toasted Peanut Quinoa',
        'Not Specified',
        470, 54, 38, 13, 15, 520, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'The taste of nutrient-dense sesame seeds, both toasted on top of the chicken grilled with garlic and in the Middle Eastern-inspired tahini sauce, gives this flavorful dish a double dose of punch.',
        'Ensure that 2 racks are in middle positions in oven. Preheat oven to 375˚F.\nPlace chicken on a foil-lined baking pan. With a sharp knife, make 3 slits, a quarter to halfway through each chicken breast. Stuff thin slits with garlic, dividing evenly. Sprinkle 1 tsp sesame seeds on top of chicken. Place in oven on middle rack and bake for 30 to 35 minutes, until chicken’s juices run clear and no pink remains.\nMeanwhile, on a separate foiled-lined baking pan, toast peanuts in the same 375˚F oven for 4 to 6 minutes on top rack.\nRinse quinoa thoroughly with water in a fine-mesh strainer until water runs clear. Drain well. Combine quinoa and 1 cup water in a medium-size saucepan. Bring to a boil, then reduce heat to medium-low, cover and cook until grains become translucent, about 15 to 20 minutes. Add toasted peanuts to cooked quinoa.\nPrepare Tahini Sauce: In a small bowl, whisk together tahini, vinegar, soy sauce, 1 tsp water and stevia until combined.\nDivide spinach between 2 plates and top with Tahini Sauce. Sprinkle remaining 1/2 tsp sesame seeds on top of spinach. Plate chicken breasts and quinoa off to side of spinach. Chicken can be kept stored in refrigerator for 4 days.',
        '2 4-oz boneless, skinless chicken breasts \n1 clove garlic, sliced \n1 1/2 tsp unsalted sesame seeds, divided \n3 tbsp unsalted raw peanuts \n1/2 cup quinoa \n1 16-oz bag spinach, washed, drained, stems removed and steamed \n1 1/2 tbsp sesame tahini \n1 tbsp rice wine vinegar \n1 tsp low-sodium soy sauce \n1 tsp stevia powder',
        '5', -- UserID
        TRUE,
        '2023-04-30 17:30:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2013/04/sesamegarlicchicken_article-1.jpg',
        'Author : Heather BainBridge, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        20, -- cooking_time  
        1   -- meal type (cuisines)
    ),
    (
        32,
        'Marriane Wren',
        'Egg Sandwiches with Red Peppers and Tahini',
        'Not Specified',
        277, 24, 18, 13, 4, 560, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Start your day off right with these sandwiches, which are loaded with probiotics from kefir and prebiotics from chives and yellow onions. If prepared ahead of time, keep the eggs, sauce, and pita separate and assemble before eating.',
        'In a small bowl, whisk together eggs, egg whites, salt and pepper. In a separate bowl, combine kefir, lemon juice, tahini and chives. Set bowls side.\nIn a large skillet on medium-high, heat oil. Add onion and cook, stirring often, until soft, 2 to 3 minutes. Add red and green peppers and continue cooking, stirring often, until peppers soften, 4 minutes more.\nReduce heat to medium-low and add egg mixture. Cook, stirring often, until eggs are set, 4 to 5 minutes.\nDivide egg mixture among pita halves; drizzle with tahini mixture. Garnish with additional chives.',
        '3 large eggs + 4 egg whites \n1/4 tsp each sea salt and ground black pepper \n2 tbsp plain whole-milk kefir \n1/2 tbsp fresh lemon juice \n1/2 tbsp tahini paste \n1/2 tbsp chopped fresh chives + additional for garnish \n1 tsp olive oil \n1/4 cup chopped yellow onion \n1/2 cup each chopped red and green bell pepper \n1 6-inch whole-grain pocket-style pita, halved',
        '5', -- UserID
        TRUE,
        '2023-05-01 17:30:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2017/03/ce68-weightloss-middle-eastern-western-egg-sandwiches-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Marianne Wren, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        33,
        'Beth Lipton',
        'The California Salad',
        'Not Specified',
        404, 23, 21, 26, 12, 757, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Enjoy this colorful array of healthful, classic California dishes, such as creamy avocado, veggie burgers, microgreens, and more, and feel like a true Californian.',
        'Make dressing: In a small food processor, blend all dressing ingredients. (MAKE AHEAD: Make dressing up to 1 day ahead; cover and refrigerate. Whisk well before using.).\nMake salad: In a large bowl, toss lettuce with 2 tbsp of the dressing (add more to taste), then divide among bowls. Arrange tomatoes, carrots, beets and avocado on top. Add a patty to each and top with microgreens. Sprinkle with walnuts and goat cheese (if using). Serve with remaining dressing on the side.',
        '1/2 cup fresh flat-leaf parsley, roughly chopped \n1/4 cup fresh basil, roughly chopped \n1/4 cup extra-virgin olive oil \n2 tbsp apple cider vinegar \n1 tbsp Dijon mustard \n1 tsp pure maple syrup \n1/4 tsp sea salt \n1/8 tsp ground black pepper \n6 cups mixed baby lettuces (about 7 1/2 oz) \n1 cup cherry or grape tomatoes \n2 carrots, shredded \n1 cup chopped steamed beets \n1 avocado, pitted, sliced \n4 veggie patties of choice \n1 cup microgreens or sprouts \n1/4 cup toasted walnuts, optional',
        '5', -- UserID
        TRUE,
        '2023-06-02 13:30:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2017/03/ce68-weightloss-middle-eastern-western-egg-sandwiches-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Marianne Wren, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        15, -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        34,
        'Sarah Sweeney',
        'Savory Yogurt Bowl with Roasted Chickpeas',
        'Not Specified',
        404, 23, 21, 26, 12, 757, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Roasted chickpeas lend a flavorful crunch to this unusual savory breakfast when combined with plain yogurt, veggies, and za atar, a Middle Eastern spice mixture.',
        'Preheat the oven to 400°F. On a large, parchment-lined baking sheet, place chickpeas; toss with one-half of oil, cumin and salt. Roast for 35 minutes, stirring halfway through, until golden and crisp. (MAKE AHEAD: Store chickpeas in an airtight container until ready to use.)\nDivide the yogurt between serving bowls and top with cucumber, tomatoes and mint and parsley. Drizzle with remaining one-half of oil and garnish with za’atar and pine nuts (if using).',
        '1 15-oz BPA-free can chickpeas, drained, rinsed and patted dry \n2 tbsp extra-virgin olive oil, divided \n1 tsp ground cumin \n1/4 tsp sea salt \n1 1/2 cups whole-milk plain yogurt \n2 Lebanese cucumbers, sliced \n1/2 cup cherry tomatoes, halved \n1 tbsp each fresh mint and flat-leaf parsley, chopped',
        '5', -- UserID
        TRUE,
        '2023-01-10 13:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2017/03/ce68-weightloss-middle-eastern-western-egg-sandwiches-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Marianne Wren, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        35, -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        35,
        'Sarah Sweeney',
        'Balsamic Roasted Portobellos',
        'Not Specified',
        270, 16, 18, 16, 5, 736, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'These juicy mushrooms topped with spinach, tomatoes, and eggs are a delicious way to start the day.',
        'Preheat oven to 400°F. In a medium bowl, toss mushrooms, one-half of oil, vinegar, Italian seasoning and one-half the salt and pepper. Place on a large parchment-lined baking sheet. Divide spinach and onion over mushrooms. Place tomato halves around mushrooms and sprinkle with remaining oil, salt and pepper. Bake for 15 minutes.\nHeat a medium skillet on medium-high. Mist with cooking spray and add eggs. Cook for 2 minutes, or until desired doneness.\nTo serve, top each mushroom with a fried egg, and spoon over a few roasted tomatoes. Sprinkle with basil.\nMAKE AHEAD:  Prepare Step one and hold cooked mushrooms in the fridge until ready to eat. Reheat portobellos and tomatoes at 350°F for 10 mins. Top with fried egg.',
        '8 portobello mushrooms, stems removed \n4 tsp extra-virgin olive oil, divided \n2 tbsp balsamic vinegar \n2 tsp Italian seasoning \n1 tsp sea salt and ground black pepper, divided \n4 cups baby spinach \n1 cup thinly sliced red onion \n12-14 cocktail tomatoes, halved \n8 large eggs \n¼ cup fresh torn basil',
        '5', -- UserID
        TRUE,
        '2023-01-10 13:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2022/02/CleanEating_CE101FebMar2022_MealPlan_Balsamic-Roasted-Portobellos-with-Fried-Eggs_web.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Olimpia Davies, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        20, -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        36,
        'Sarah Sweeney',
        'Hearty Chicken Quinoa Soup',
        'Not Specified',
        350, 12, 20, 11, 6, 687, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'It is a cup of traditional chicken soup with some extra-healthy ingredients added. We have given the traditional a clean eating touch by adding extra veggies and a generous serving of quinoa to our spin on chicken soup.',
        'In a Dutch oven on medium-high, heat oil. Add onion and sauté for 3 minutes until soft. Add ginger, garlic, carrot, celery, thyme, turmeric, salt and pepper. Cook for 3 minutes, stirring occasionally. Add chicken, broth and water. Bring to a boil and simmer for 30 minutes.\nRemove chicken from the pot and place on a cutting board. Shred the chicken using two forks and add it back into the pot along with the quinoa. Simmer for 5 additional minutes. Stir in the kale and simmer for another 3 minutes.',
        '1 tbsp extra-virgin olive oil \n1 yellow onion, diced \n1 tbsp minced ginger \n2 cloves garlic, minced \n1 carrot, diced \n2 celery ribs, chopped \n2 tsp thyme, chopped \n1/2 tsp ground turmeric \n1/2 tsp sea salt \n1/4 tsp ground black pepper \n1 lb boneless, skinless chicken thighs \n4 cups low-sodium chicken broth \n2 cups water \n1/2 cup white quinoa, rinsed \n1/2 cup white quinoa, rinsed 3 cups kale, stems removed and roughly chopped',
        '2', -- UserID
        TRUE,
        '2023-01-27 19:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2022/02/CleanEating_CE101FebMar2022_MealPlan_Hearty-Chicken-Quinoa-Soup-with-Kale_web.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Olimpia Davies, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        45, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        37,
        'Sarah Sweeney',
        'Steak & Sweet Potato Tacos',
        'Not Specified',
        531, 38, 32, 30, 7, 559, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'This tasty, full southwestern-style supper is entertaining. These tacos are similar to traditional steak tacos, but with sweet potato bits added.',
        'Preheat the oven to 425°F. Line a baking sheet with parchment paper. Toss the sweet potato, cabbage, onion, oil, cumin, chipotle powder and one-half of salt and pepper on the prepared sheet. Roast until sweet potatoes are tender, 30 minutes. Sprinkle with cilantro.\nHeat a cast iron skillet over medium-high heat. Season steak with remaining salt and pepper. Reduce heat to medium. Cook steaks 3 minutes per side for medium-rare, or to desired doneness. Transfer steaks to a cutting board and let rest, covered for 5 minutes, then thinly slice. Top tortillas with steak, roasted vegetables and sour cream; top with avocado and hot sauce (if using). Sprinkle with squeezed lime juice.',
        '2 sweet potatoes, cut into 1-inch pieces \n2 cups sliced red cabbage \n1/2 red onion, sliced \n2 tbsp extra-virgin olive oil \n1 tsp each ground cumin and chipotle chile powder \n1/2 tsp each sea salt and ground black pepper, divided \n1/4 cup chopped fresh cilantro \n2 8-oz striploin steaks, trimmed \n1/4 cup full-fat sour cream \n2 limes, cut into wedges \n8 almond flour or corn tortillas, warmed \navocado slices and hot sauce, optional',
        '1', -- UserID
        TRUE,
        '2023-01-13 11:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2022/03/Steak-Sweet-Potato-Tacos-2400x1350-1.png?crop=535:301&width=1070&enable=upscale',
        'Author : Roberto Caruso, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        35, -- cooking_time  
        6   -- meal type (cuisines)
    ),
    (
        38,
        'Tiffani Bachus',
        'Green Curry Poached Halibut',
        'Not Specified',
        361, 12, 33.5, 20, 3, 811, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'It is easy to eat more brain-fueling fish with this fragrant curry recipe.  Omega-3 fatty acids, vitamin B6, and magnesium are present in halibut and are essential for the production of neurotransmitters that carry signals in the brain.',
        'In a large skillet on medium-high, heat 1 tbsp oil. Add spinach and garlic; sauté 2 minutes then transfer to a serving dish.\nIn same skillet on medium-high, heat remaining 1 tbsp oil. Add onion and sauté for 3 minutes. Whisk in broth, coconut milk, curry paste and salt. Bring mixture to a simmer and cook until liquid is reduced by half, about 10 minutes.\nAdd halibut to skillet and spoon some of the liquid over top; cook for 1 minute. Cover and poach halibut until it flakes easily with a fork, 5 to 7 minutes. Gently transfer halibut to serving dish over cooked spinach.\nTo liquid in pan, add cilantro, lime zest and lime juice; cook for 1 minute. Ladle liquid over halibut and spinach in serving dish.',
        '2 tbsp avocado oil, divided \n4 cups spinach \n1 clove garlic, minced \n1/4 yellow onion, finely chopped \n1 cup low-sodium vegetable broth \n1 cup coconut milk beverage \n2 tbsp green curry paste \nPinch sea salt \n2 4-oz halibut fillets \n1/4 cup chopped fresh cilantro \n1 lime, zested and juiced',
        '1', -- UserID
        TRUE,
        '2023-01-26 19:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2017/11/green-curry-poached-halibut-73-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Tiffani Bachus, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        30, -- cooking_time  
        7   -- meal type (cuisines)
    ),
    (
        39,
        'Tiffani Bachus',
        'Zucchini Lasagna with Cashew Cheese Pesto',
        'Not Specified',
        365, 26, 14, 10.5, 8, 480, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'If you want to make a low-carb version of this comfort dish, simply replace the pasta with zucchini. Since the filling is primarily made of cashews, you may substitute nutritional yeast for Parmesan to make the dish dairy-free.',
        'Preheat oven to 375°F. Prepare cashew cheese pesto: Soak cashews in a bowl of water overnight or at least 4 hours; drain and transfer to a food processor. Add lemon zest and juice, basil leaves, 2 tbsp Parmesan and garlic; pulse a few times to break down nuts then process, adding 1 to 2 tbsp water, until mixture reaches the consistency of ricotta cheese.\nUsing a Y-shaped vegetable peeler or mandoline, thinly slice zucchini lengthwise into ½-inch-thick planks. Place on a baking sheet and sprinkle with salt. Let stand for 10 minutes; blot zucchini to remove salt and moisture on the surface.\nSpread ¼ cup marinara on bottom of an 8-inch square ceramic or glass baking dish; top with 2 layers of zucchini, one layer running top to bottom and the second layer running right to left. Spread half of roasted bell pepper over zucchini, followed by half of cashew cheese pesto. Spoon ½ cup marinara over cashew cheese pesto. Repeat 2 layers of zucchini, remaining half of bell peppers and cashew cheese pesto and ½ cup marinara. Top with 2 layers of zucchini, followed by remaining marinara. Sprinkle top with remaining 2 tbsp Parmesan. Cover with foil and bake for 30 minutes.\nUncover dish and set oven to broil. Broil for 3 minutes, or until topping is lightly browned. Let cool for 10 minutes. Sprinkle additional basil over slices before serving.',
        '2 tbsp avocado oil, divided \n4 cups spinach \n1 clove garlic, minced \n1/4 yellow onion, finely chopped \n1 cup low-sodium vegetable broth \n1 cup coconut milk beverage \n2 tbsp green curry paste \nPinch sea salt \n2 4-oz halibut fillets \n1/4 cup chopped fresh cilantro \n1 lime, zested and juiced',
        '1', -- UserID
        TRUE,
        '2023-01-26 19:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2017/11/meal-plan-lead_zucchini-lasagna-with-cashew-cheese-pesto-73-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Tiffani Bachus, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        40, -- cooking_time  
        4   -- meal type (cuisines)
    ),
    (
        40,
        'Tiffani Bachus',
        'Roasted Butternut Squash',
        'Not Specified',
        158, 21, 1.8, 9.2, 6.1, 106, -- calories, carbs, protein, fat, fibre, sodium
        1,
        'This easy but tasty roasted butternut squash recipe highlights the inherent sweetness and earthy richness of this seasonal veggie. It is a side dish that not only complements other main meals but also serves as a healthy meal on its own.',
        'Peel 1 butternut squash, cut in half and scoop out seeds. Cut squash into cubes and toss with 1 tbsp avocado oil and ½ tsp each salt and smoked paprika; spread on baking sheet. Roast at 375°F for 25 minutes, or until tender.',
        '1 butternut squash \n1 tbsp avocado oil \n1 clove garlic, minced \n1/2 tsp each salt and smoked paprika',
        '2', -- UserID
        TRUE,
        '2023-03-14 09:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2017/11/roasted-butternut-squash-73-web-opt2-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Tiffani Bachus, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        40, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        41,
        'Nathan Lyon',
        'Apple, Frisée & Radicchio Salad with Lemon Kefir Dressing',
        'Not Specified',
        302, 24, 0, 23, 7, 115, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Gut-friendly kefir adds creaminess to salad dressings. This salad is quite filling and goes well with tofu or chicken as a topping. For six people, you may alternatively serve it as an appetizer or side salad.',
        'In a small container with a tight-fitting lid, combine shallot, lemon juice, walnut and grape seed oil, close lid tightly; shake well. Add kefir and shake again.\nIn a large bowl, combine frisée, radicchio, radishes, cucumbers, apples, parsley, mint and walnuts. Pour dressing over top and toss.Season with salt and pepper.',
        '1 large shallot, diced small \n3 tbsp fresh lemon juice \n2 tbsp roasted walnut oil or extra-virgin olive oil \n2 tbsp grape seed oil \n5 tbsp whole-milk kefir \n10 oz frisée (2 small heads), cored and leaves cut into 1-inch pieces \n4 oz radicchio (1/2 small head), halved lengthwise and cut into 1/3-inch slices \n7 small radishes (preferably the French variety, if available), quartered \n2 Persian cucumbers, sliced in half lengthwise and cut diagonally (¼-inch thickness) \n2 apples (Fuji, Pink Lady or Honeycrisp), cored and sliced into 1/8-inch slices \n3/4 cup roughly chopped fresh flat-leaf parsley \n1/3 cup fresh mint leaves, roughly chopped \n1/2 cup toasted unsalted walnuts, roughly chopped \nKosher salt (or sea salt) and ground black pepper, to taste',
        '2', -- UserID
        TRUE,
        '2023-03-25 10:40:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2016/09/apple-frise-radicchio-salad-with-lemon-kefir-dressing-2.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Tiffani Bachus, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        25, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        42,
        'Julie O Hara',
        'Kimchi Fried Rice with Tempeh',
        'Not Specified',
        376, 38, 21, 17, 5, 569, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Our veggie-packed, Asian-style fried rice tastes equally as tasty and can be prepared in 25 minutes, so there is no need to order delivery. We have also introduced fermented kimchi and tempeh, both of which contain gut-friendly probiotics.',
        'In a large skillet on medium-high, heat safflower oil. Add tempeh and salt; cook, stirring occasionally, until golden brown, about 4 minutes. Transfer to a small bowl and set aside.\nMist same skillet, still on medium high, with cooking spray. Add rice, edamame and 3 tbsp water. Cook, stirring frequently, until rice and edamame are heated through and water is nearly evaporated, 2 to 3 minutes. Add carrots and continue cooking, stirring frequently, until tender, about 2 minutes. Reduce heat to medium low. (Note: If using leftover brown rice, add it at the same time as carrots, once water and edamame are heated through.)\nIn a medium bowl, whisk together eggs, 1 tsp tamari and 1 tsp sesame oil. (Time-Saving Tip: Whisk egg mixture while tempeh and rice are cooking.) Push rice mixture to edges of skillet, mist center of skillet with cooking spray and add egg mixture. When eggs just start to set, gently break them up and fold them into rice mixture until combined. Add tempeh and remaining 1 tbsp tamari; stir until combined. Remove skillet from heat and stir in kimchi and remaining 1 tsp sesame oil. Divide among serving bowls and sprinkle with chives.',
        '1 tbsp safflower oil \n8 oz organic tempeh, cut into 1/2-inch pieces \n1/4 tsp sea salt \nOlive oil cooking spray \n3 cups frozen precooked brown rice \n1 cup frozen shelled edamame \n1 cup peeled and matchstick-cut carrots \n2 large eggs \n4 tsp reduced-sodium tamari, divided \n2 tsp dark sesame oil, divided \n1 cup drained and packed kimchi, roughly chopped \n2 tbsp chopped fresh chives',
        '3', -- UserID
        TRUE,
        '2023-05-04 13:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2015/02/kimchi-fried-rice-with-tempeh.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Ted Gibson, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        25, -- cooking_time  
        12   -- meal type (cuisines)
    ),
    (
        43,
        'Alison Kent',
        'Mediterranean Chicken & Vegetable Quiche',
        'Not Specified',
        321, 11.5, 19, 22, 5, 245, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'This grain-free quiche starts with a simple press-in crust made of egg, coconut oil, and coconut flour. Serve with a green salad or simple roasted veggies for a complete supper.',
        'Preheat oven to 350°F. Prepare crust: In a medium bowl, whisk 2 eggs and oil until blended. Stir in flour until just combined.\nLightly grease a 9-inch pie plate. Using your hands, press crust mixture into plate until base and sides are evenly covered and smooth. Bake until light golden brown, about 10 minutes. (Make Ahead: Prepare crust up to this point up to 2 days ahead; cover and refrigerate. Bring to room temperature before filling and baking.)\nIncrease oven temperature to 375°F. In a medium bowl, combine chicken, tomatoes, cheese, scallion, dill and mint. Sprinkle evenly into pie shell. In bowl, whisk together 3 eggs, milk, nutmeg, salt and pepper; pour evenly over ingredients in shell.\nBake in center of oven until a knife inserted in center of quiche comes out clean, about 30 minutes. (Tip: If edges begin to brown too much before quiche is set, loosely cover crust with foil.) Let cool',
        '1 cup cooked and diced boneless, skinless chicken breast \n1/2 cup halved cherry tomatoes \n1/3 cup crumbled feta cheese \n1 scallion, thinly sliced \n2 tbsp chopped fresh dill \n1 to 2 tbsp chopped fresh mint leaves \n3 eggs \n1 cup whole milk \n1/4 tsp ground nutmeg \nSea salt and fresh ground black pepper, to taste \n2 eggs, beaten \n1/3 cup coconut oil, melted, plus additional for greasing pie plate \n3/4 cup coconut flour',
        '3', -- UserID
        TRUE,
        '2023-05-04 13:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2015/02/kimchi-fried-rice-with-tempeh.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Ted Gibson, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        50, -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        44,
        'Beth Lipton',
        'Roasted Broccoli Steaks with Miso Butter',
        'Not Specified',
        253, 14, 7, 21, 5, 489, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Miso is a fermented meal that has good probiotic bacteria in addition to having an earthy, umami flavor. Here, it serves as a foundation for a seasoned butter that melts delightfully over the soft broccoli "steaks."',
        'Place a large rimmed baking sheet in oven and preheat to 450ºF.\nIn a small bowl, mash together butter, miso and lemon zest until well combined. Use immediately or form into a log, cover tightly with plastic wrap and refrigerate for up to 1 week or freeze for up to 3 months. (Yields 5 tbsp butter.)\nUsing a sharp chef knife, cut ½-inch-thick “steaks” lengthwise down center of each head of broccoli. (Broccoli heads vary in size, so the yield of steaks will vary slightly; when chopping, some florets will fall off; reserve them and remaining broccoli for another use.) Brush steaks all over with oil and season with salt and pepper.\nRemove baking sheet from oven and add broccoli steaks. Return to oven and roast, turning once halfway through, until lightly browned on the outside and tender throughout (but not mushy), about 20 to 25 minutes.\nDivide steaks among plates. Place a dollop of miso butter (or a slice, if you’ve chilled it) on each steak. Wrap and reserve any remaining miso butter in the refrigerator or freezer for another use.',
        '1/4 cup organic or grass-fed unsalted butter, at room temperature \n4 tsp white miso \n1 tsp grated lemon zest \n3 to 4 large heads (about 4 lb total) broccoli, bottoms of stems trimmed \n3 tbsp avocado oil \n1/2 tsp sea salt \n1/4 tsp ground black pepper',
        '1', -- UserID
        TRUE,
        '2023-05-04 13:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/04/roasted-broccoli-steaks-with-miso-butter_78-web-2.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Beth Lipton, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        35, -- cooking_time  
        3   -- meal type (cuisines)
    ),
    (
        45,
        'Beth Lipton',
        'Gingery Braised Chicken Thighs',
        'Not Specified',
        547, 11, 51, 34, 3, 837, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'In addition to being fantastic for gut health, ginger, garlic, and chicken bone broth work together to make a flavorful, well-seasoned braising sauce that keeps these chicken thighs succulent.',
        'In a Dutch oven, heat oil on medium-high. Pat chicken dry; season all over with 1 tsp salt and 1/2 tsp pepper. Add chicken to pan, skin side down, and cook until skin is browned and crisp, 6 to 8 minutes. Turn and cook until bottom is browned, 6 to 8 minutes. Transfer to a plate, cover and set aside. Drain off all but 1 tbsp fat in pan.\nReduce heat to medium. Add shallots and carrots and season with ¼ tsp salt and additional pepper. Cook, stirring occasionally, until tender, about 6 minutes. Add ginger, turmeric and garlic; cook, stirring, until fragrant, about 1 minute. Stir in mustard seeds and cook, stirring, for 1 minute.\nPour broth and orange juice into pan, stirring up any browned bits on bottom. Add orange zest and bay leaf and bring to a boil. Reduce heat to medium-low. Return chicken to pan, skin side up, along with any accumulated juices on plate. Partially cover and simmer until chicken is no longer pink inside and flavors have developed, about 30 minutes. Season with additional salt. Discard orange zest and bay leaf before serving.',
        '2 tbsp avocado oil \n8 small (or 4 large) bone-in, skin-on chicken thighs (about 3 lb) \n1/4 tsp sea salt, divided + additional to taste \n1/2 tsp ground black pepper + additional to taste \n3 shallots, chopped \n2 large carrots, chopped \n1 3 and a 1/2-inch piece fresh ginger, peeled and chopped \n1 1-inch piece fresh turmeric, peeled and finely chopped \n3 cloves garlic, chopped \n2 tsp yellow mustard seeds \n2 cups chicken bone broth (preferably organic or homemade) \n4 1- to 2-inch-long strips orange zest + 1/4 cup fresh orange juice, divided \n1 bay leaf',
        '1', -- UserID
        TRUE,
        '2023-05-10 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/04/gingery-braised-chicken-thighs_78-web-2.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Ronald Tsang, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        75, -- cooking_time  
        8   -- meal type (cuisines)
    ),
    (
        46,
        'Clean Eating',
        'Turkey & Mushroom Ragu-Stuffed Acorn Squash',
        'Not Specified',
        442, 43, 33, 18, 9, 444, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A delectable combination of spicy ground turkey, mushrooms, and zesty ragu makes for a healthful and high-protein dish. Acorn squash is at its best in the fall.',
        'Preheat oven to 400ºF. Wrap each squash half in foil and place on baking sheet. Bake until squash flesh is soft when poked with a fork, about 45 minutes.\nMeanwhile, in a large, deep skillet on medium-high, heat oil. Add onion, shiitake and cremini mushrooms, salt and pepper and sauté for 5 minutes. Add turkey and cook for 5 minutes, breaking up with a wooden spoon. Add tomato paste, thyme and smoked paprika. Stir to combine and cook for 3 minutes more.\nStir in marinara, coconut aminos and vinegar. Add bay leaf, cover, reduce heat to low and simmer for 25 minutes. Stir in ¼ cup nutritional yeast. Remove bay leaf.\nTo serve, divide turkey mixture among roasted squash halves. Top with remaining 1 tbsp nutritional yeast and basil.',
        '2 acorn squash, halved and seeded \n2 tbsp avocado oil \n1 cup chopped yellow onion \n3 and a 1/2 oz shiitake mushrooms, chopped \n5 oz cremini mushrooms, chopped \nPinch each sea salt and ground black pepper \n1 lb lean ground turkey \n2 tbsp unsalted tomato paste \n1 tsp smoked paprika \n1 and a 1/2 cups marinara sauce \n1 tbsp coconut aminos \n1 tbsp balsamic vinegar \n1 bay leaf \n1/4 cup + 1 tbsp nutritional yeast, divided \n1/4 cup sliced fresh basil',
        '1', -- UserID
        TRUE,
        '2023-05-10 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/10/turkey-and-mushroom-ragu-stuffed-acorn-squash_82-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : cleaneating, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        55, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        47,
        'Tiffani Bachus',
        'Spicy Salmon Poke Bowl',
        'Not Specified',
        558, 43, 32, 32, 14, 532, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A delectable combination of spicy ground turkey, mushrooms, and zesty ragu makes for a healthful and high-protein dish. Acorn squash is at its best in the fall.',
        'Preheat oven to 400ºF. Wrap each squash half in foil and place on baking sheet. Bake until squash flesh is soft when poked with a fork, about 45 minutes.\nMeanwhile, in a large, deep skillet on medium-high, heat oil. Add onion, shiitake and cremini mushrooms, salt and pepper and sauté for 5 minutes. Add turkey and cook for 5 minutes, breaking up with a wooden spoon. Add tomato paste, thyme and smoked paprika. Stir to combine and cook for 3 minutes more.\nStir in marinara, coconut aminos and vinegar. Add bay leaf, cover, reduce heat to low and simmer for 25 minutes. Stir in ¼ cup nutritional yeast. Remove bay leaf.\nTo serve, divide turkey mixture among roasted squash halves. Top with remaining 1 tbsp nutritional yeast and basil.',
        '2 acorn squash, halved and seeded \n2 tbsp avocado oil \n1 cup chopped yellow onion \n3 and a 1/2 oz shiitake mushrooms, chopped \n5 oz cremini mushrooms, chopped \nPinch each sea salt and ground black pepper \n1 lb lean ground turkey \n2 tbsp unsalted tomato paste \n1 tsp smoked paprika \n1 and a 1/2 cups marinara sauce \n1 tbsp coconut aminos \n1 tbsp balsamic vinegar \n1 bay leaf \n1/4 cup + 1 tbsp nutritional yeast, divided \n1/4 cup sliced fresh basil',
        '1', -- UserID
        TRUE,
        '2023-05-10 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/10/turkey-and-mushroom-ragu-stuffed-acorn-squash_82-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : cleaneating, Designed by cleaneating',  -- img_title
        3, -- dietary_preference
        55, -- cooking_time  
        3   -- meal type (cuisines)
    ),
    (
        48,
        'Tiffani Bachus',
        'Sheet Pan Dijon Balsamic Chicken & Veggies',
        'Not Specified',
        308, 18, 26, 15, 3, 516, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'A sheet pan is a great tool for a quick weekday dinner. With about 45 minutes, you can have a tasty and nutritious dinner by piling your ingredients upon it and baking it.',
        'Line a large rimmed baking sheet with parchment paper. In a small saucepan, whisk together vinegar, 2 tbsp oil, mustard, 1 tbsp maple syrup, garlic, thyme and rosemary. Pour half of marinade into a large bowl and add chicken. Marinate in the refrigerator for at least 1 hour, or up to 8 hours. To remaining half of marinade in saucepan, whisk in remaining 1 tbsp maple syrup and hot sauce; refrigerate marinade in saucepan.\nPreheat oven to 350ºF. In a bowl, toss carrots, broccoli and onion with remaining 2 tbsp oil; spread on one side of baking sheet. Remove chicken from marinade and place on other side of baking sheet. Discard marinade. Season chicken and vegetables with salt and pepper. Bake for 25 minutes, until a thermometer inserted in center of chicken reads 165ºF and vegetables are fork tender.\nMeanwhile, place saucepan of reserved marinade over low heat and bring to a gentle simmer for 10 minutes. Drizzle sauce over chicken and vegetables.',
        '1/4 cup balsamic vinegar \n1/4 cup avocado oil, divided \n2 tbsp Dijon mustard \n2 tbsp pure maple syrup, divided \n3 cloves garlic, chopped \n2 tsp each chopped fresh thyme and rosemary \n4 4-oz boneless, skinless chicken breasts \n2 cups broccoli florets \n1/2 small yellow onion, thinly sliced \n1/2 tsp each sea salt and ground black pepper',
        '1', -- UserID
        TRUE,
        '2023-05-10 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2018/09/sheet-pan-dijon-balsamic-chicken-and-veggies_82-web-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Crayola England, Designed by cleaneating',  -- img_title
        4, -- dietary_preference
        40, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        49,
        'Kathryn Hendrix',
        'Sweet Potato and Black Bean Taco Cups',
        'Not Specified',
        171, 23, 6, 7, 3, 269, -- calories, carbs, protein, fat, fibre, sodium
        12,
        'Use a muffin tin to make these crispy tortilla cups stuffed with substantial taco fixings like black beans and sweet potatoes. Use queso quesadilla, the super-melty cheese frequently found in queso dips and nachos, for a rich, creamy outcome.',
        'Preheat the oven to 350 degrees F (175 degrees C). Coat 12 (2 1/2-inch) muffin cups with cooking spray. Press 1 tortilla into the bottom of each muffin cup, pleating edges as needed to fit.\nHeat oil in a large skillet over medium-high heat. Add sweet potato; cook until tender, about 10 minutes. Add onion; cook until softened, 2 to 3 minutes. Add jalapeño and garlic; cook until fragrant, about 2 minutes. Stir in beans, salt, and black pepper.\nDivide bean mixture evenly among prepared muffin cups and sprinkle with cheese.\nBake in the preheated oven until cheese is melted and filling is bubbly, 15 to 20 minutes. Top with avocado and garnish with cilantro. Serve with limes and lime crema.',
        'cooking spray \n12 (4-inch) flour tortillas \n1 tablespoon olive oil \n1 cup peeled and chopped sweet potato \n1 yellow onion, chopped \n1 jalapeño, seeded and minced \n3 cloves garlic, minced \n1 (15-ounces) can black beans in mild chili sauce, undrained \n1/4 teaspoon salt \n1/4 teaspoon black pepper \n3 ounces shredded queso quesadilla or Mexican-style cheese blend \n1 small avocado, diced \nchopped fresh cilantro, for garnish \nlime wedges and lime crema, for serving',
        '2', -- UserID
        TRUE,
        '2023-08-16 14:00:00',
        'https://www.allrecipes.com/thmb/4ukV1YDU_ehHDsMqOagRHEXBalI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7567956-sweet-potati-black-bean-taco-cups-KH-AR15538-4x3-9f9208892b8340a4adce4ff0fc3bf066.jpg',
        'Author : allrecipes, Designed by allrecipes',  -- img_title
        3, -- dietary_preference
        30, -- cooking_time  
        6   -- meal type (cuisines)
    ),
    (
        50,
        'Maryellen',
        'Guacamole',
        'Not Specified',
        262, 18, 4, 22, 11, 596, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'The addition of cayenne and cilantro gives this guacamole recipe a spicy kick. According to your preferences, you can serve it smooth or chunky. Accompany them with freshly prepared tortilla chips.',
        'Mash avocados, lime juice, and salt together in a medium bowl; mix in tomatoes, onion, cilantro, and garlic. Stir in cayenne pepper.\nServe immediately, or cover and refrigerate for 1 hour for improved flavor.',
        '3 avocados - peeled, pitted, and mashed \n1 lime, juiced \n1 teaspoon salt \n2 roma (plum) tomatoes, diced \n1/2 cup diced onion \n3 tablespoons chopped fresh cilantro \n1 teaspoon minced garlic \n1 pinch ground cayenne pepper (Optional)',
        '2', -- UserID
        TRUE,
        '2023-08-14 14:30:00',
        'https://www.allrecipes.com/thmb/uJAHG8X_AOBr-OnMGPdLDEBEFnU=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/4521556_Guacamole4x3photobybd.weld-c81ae0bd3f2b4893a8e309365dda023b.jpg',
        'Author : bd.weld, Designed by allrecipes',  -- img_title
        2, -- dietary_preference
        15, -- cooking_time  
        6   -- meal type (cuisines)
    ),
    (
        51,
        'Hungryroot Team',
        'Shrimp + Turkey Sausage Gumbo',
        'Not Specified',
        580, 36, 47, 17, 12, 1600, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'This recipe is a fantastic combo for muscle and weight-building, with excellent flavor and protein-rich nutrients. Soft wild-caught gulf shrimp and flavorful hot Italian turkey sausage, is cooked to perfection.',
        'Remove sausage from casings + discard casings; heat 1 tbsp oil in a pot over med-high; add sausage to pan, break into large chunks + sear undisturbed 2 min; flip meat over + break into small pieces, then cook 2-3 min until fully cooked + no pinkness remains; remove from pot + reserve pan juices\nCut onion into 1/2-inch pieces; heat 1 tbsp oil to same pot over medium, add chopped onion + cook 3-4 min while stirring\nSeason shrimp with salt/pep + add to onions; cook 3-4 min until shrimp is opaque\nAdd half the packet of sauce, beans, cooked sausage + 4 tbsp water to the pot; bring to a simmer + cook 12-15 min until warmed through—enjoy!',
        'Superfood Tomato Sauce \nWild Caught Gulf Shrimp \nHot Italian Turkey Sausage \nCreole Red Beans \nJumbo Yellow Onion',
        '4', -- UserID
        TRUE,
        '2023-12-15 15:30:00',
        'https://assets-global.website-files.com/62d69f8cc65b0055741a8270/648b47a81507b53da2eb9e35_SoupsStews_127964_Bowl_Fork-1.jpg',
        'Author : hungryroot, Designed by hungryroot',  -- img_title
        4, -- dietary_preference
        30, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        52,
        'Hungryroot Team',
        'Roasted Chicken Thigh + Pad Thai Veggies',
        'Not Specified',
        430, 26, 31, 6, 4, 720, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'With a perfect blend of flavors and nutrients, this protein-rich dish will fuel your muscles and help you recover from your workout. Tender, boneless chicken thighs are served with sautéed stir-fried vegetables for a satisfying combination of carbs and nutrition.',
        'Preheat oven to 400°; pat chicken thighs dry, trim excess fat if desired + season with salt/pep; add chicken to sheet pan, drizzle with 1 tbsp oil; roast 20-25 min until fully cooked, no pink remains + internal temp is 165°\nMeanwhile, heat 1 tbsp oil in skillet over med-high; sauté stir-fry veggies with salt/pep 3-4 min; add sauce packet, cover + cook 1-2 more min until tender\nDivide chicken + veggies between plates—looks great!',
        'Boneless Skinless Chicken Thighs \nPad Thai Veggie Stir-Fry Kit',
        '4', -- UserID
        TRUE,
        '2023-12-15 15:30:00',
        'https://assets-global.website-files.com/62d69f8cc65b0055741a8270/648b47c6dac40bbe30f67e6e_Main_465213_Plate_Fork-1.jpg',
        'Author : hungryroot, Designed by hungryroot',  -- img_title
        4, -- dietary_preference
        25, -- cooking_time  
        7   -- meal type (cuisines)
    ),
    (
        53,
        'Hungryroot Team',
        'Cilantro Lime Chicken + Steamed Broccoli',
        'Not Specified',
        390, 9, 35, 11, 2, 690, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Enjoy the mouthwatering tastes of cilantro lime chicken with steamed broccoli in this protein-rich meal. The crisp and colorful broccoli contrasts with the flavorful and juicy chicken that is cooked until it is soft.',
        'Drain broth from chicken packet; heat 1 tbsp oil in skillet over medium; add chicken to pan, break into small pieces + sauté 2-3 min until browned; turn heat to low, add sauce packet + cook 1 min until sauce is hot; divide between plates\nHeat 1 tbsp oil in skillet over med-high; add half the bag of broccoli, salt/pep + sauté 4-5 min until lightly browned; add 2 tbsp water, reduce heat, cover + steam 3-5 min until tender; divide between plates—that was easy!',
        'Broccoli Florets \nCilantro Lime Chicken',
        '4', -- UserID
        TRUE,
        '2023-12-15 15:30:00',
        'https://assets-global.website-files.com/62d69f8cc65b0055741a8270/6480c937f74306ec77a5bdc0_Main%2BSides_464501_Plate.jpg',
        'Author : hungryroot, Designed by hungryroot',  -- img_title
        4, -- dietary_preference
        15, -- cooking_time  
        6   -- meal type (cuisines)
    ),
    (
        54,
        'Hungryroot Team',
        'Super Honey Poppyseed Chicken Protein Bowl',
        'Not Specified',
        530, 56, 34, 10, 11, 810, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'This lean, chicken protein bowl is jam-packed with sweet and savory ingredients, so up your protein game. This dish contains a delicious combination of super blend salad, lentil quinoa rice mix, and seasoned grilled chicken breast.',
        'Heat skillet over med-high + add rice mix with 1 tbsp water; stir occasionally 2 min until warm + add to bowls\nHeat lightly oiled skillet over med-high, pat chicken dry + sear 2 min per side until warm; slice + add to bowls\nHeat 1 tbsp oil in skillet over med-high + cook Superblend with salt/pep 5 min until tender, stirring minimally to ensure browning; add to bowls\nMix in or drizzle on 1-2 tbsp dressing per bowl—looks good!',
        'Superblend Salad \nLentil Quinoa Rice Mix \nSeasoned Grilled Chicken Breast \nHoney Poppyseed Dressing',
        '4', -- UserID
        TRUE,
        '2023-09-29 09:00:00',
        'https://assets-global.website-files.com/62d69f8cc65b0055741a8270/648b48651507b53da2ec965e_GrainBowl_123246_Bowl_Fork-1.jpg',
        'Author : hungryroot, Designed by hungryroot',  -- img_title
        4, -- dietary_preference
        13, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        55,
        'Hungryroot Team',
        'Oven-Roasted Salmon with Couscous + Brussels',
        'Not Specified',
        800, 59, 40, 6, 9, 250, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Treat yourself to this gourmet culinary delight that provides a good balance of nutrition with its protein-rich salmon and carb-packed brussels sprouts.',
        'Preheat oven to 400° F; pat fish dry, line a sheet pan with foil, drizzle fish with oil, salt + pep; bake 10-12 min until firm, opaque + cooked through\nHeat 1 tbsp oil in pan over med-high; add brussels + cook 4-5 minutes; add caesar dressing to brussels and set aside\nBoil large pot of salted water, add 1 cup couscous + stir; cook 5 min, then drain; add to brussels and mix evenly\nServe fish on top of couscous + enjoy!',
        'Shaved Brussels \nVegan Caesar Dressing Cup \nFresh Lemon \nAtlantic Salmon Fillets \nTri-Color Pearled Couscous',
        '5', -- UserID
        TRUE,
        '2023-09-29 09:00:00',
        'https://assets-global.website-files.com/62d69f8cc65b0055741a8270/648b48651507b53da2ec965e_GrainBowl_123246_Bowl_Fork-1.jpg',
        'Author : hungryroot, Designed by hungryroot',  -- img_title
        3, -- dietary_preference
        14, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        56,
        'Hungryroot Team',
        'Coconut Curry Tofu + Broccoli Wrap',
        'Not Specified',
        440, 43, 29, 14, 16, 810, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'In this dish you can savor the rich and aromatic coconut curry perfectly complemented by hearty tofu veggie bites. Tender sweet baby broccoli adds a vibrant crunch to every bite.',
        'Chop burgers into 1-inch pieces + heat 1 tbsp oil in skillet over med-high; sear tofu until browned, 1-2 min; set aside\nChop broccoli in 1-inch pieces + heat 1 tbsp oil in skillet over med-high; cook with salt/pep 2-3 min, then add ½ cup water, cover + let steam 3 more min\nAdd 2 wraps to plates + spread 1-2 tbsp curry onto each wrap\nDivide fillings between wraps + roll up—yum!',
        'Coconut Curry Sauuce \nHearty Tofu Veggie Burger \nSweet Baby Broccoli \nSweet Potato Wraps',
        '5', -- UserID
        TRUE,
        '2023-09-29 09:00:00',
        'https://assets-global.website-files.com/62d69f8cc65b0055741a8270/648b489ad81f1d3fd9ddb4f5_Wrap_122142_Plate-2.jpg',
        'Author : hungryroot, Designed by hungryroot',  -- img_title
        1, -- dietary_preference
        10, -- cooking_time  
        13   -- meal type (cuisines)
    ),
    (
        57,
        'Miriam Nice',
        'Seitan & black bean stir-fry',
        'Not Specified',
        326, 37, 22, 8, 7, 1232, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'With a sticky sweet and spicy sauce, this easy vegan stir-fry creates a filling dinner. Seitan, peanut butter, and a variety of vegetables are a winning combo.',
        'Start by making the sauce, tip half the beans into the bowl of a food processor with the rest of the ingredients and add 50ml water. Season, then blend until smooth. Pour into a saucepan and heat gently for about 5 mins or until thick and glossy.\nDrain the seitan and pat dry with kitchen paper. Toss the seitan pieces in a bowl with the cornflour and set aside. Heat your wok to a high temperature, add a little oil, then the seitan – you might need to do this in batches. Stir-fry for around 5 mins until golden brown at the edges. Remove the seitan from the wok using a slotted spoon and set aside on a plate.\nIf the wok is dry at this stage, add 1 tsp vegetable oil. Throw in the chopped peppers, the rest of the beans, pak choi and spring onion. Cook for 3-4 mins, then return the seitan to the pan, stir in the sauce and bring to the boil for 1 min. Serve with cooked rice or noodles.',
        '400g can black beans, drained and rinsed \n75g dark brown soft sugar \n3 garlic cloves \n2 tbsp soy sauce \n1 tsp Chinese five-spice powder \n2 tbsp rice vinegar \n1 tbsp smooth peanut butter \n1 red chilli, finely chopped \n350g marinated seitan pieces \n1 tbsp cornflour \n2-3 tbsp vegetable oil \n1 red pepper, sliced \n300g pak choi, chopped \n2 spring onions, sliced \ncooked rice noodles or rice, to serve',
        '5', -- UserID
        TRUE,
        '2023-09-29 09:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/seitan-and-black-bean-stir-fry-6adb3dd.jpg?quality=90&webp=true&resize=440,400',
        'Author : Miriam Nice, Designed by bbcgoodfood',  -- img_title
        2, -- dietary_preference
        25, -- cooking_time  
        1   -- meal type (cuisines)
    ),
    (
        58,
        'Nadine Brown',
        'Tofu Curry',
        'Not Specified',
        318, 8, 22, 21, 4, 80, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Make a quick and summery veggie curry with tofu and spinach for an easy midweek meal. Serve with lime wedges and wholemeal chapatis.',
        'Heat 1/2 tbsp of the oil in a large, wide, non-stick frying pan over a medium-high heat. Fry the tofu with a pinch of salt for 5 mins, turning every couple of minutes until golden brown. Remove to a plate using a slotted spoon.\nAdd the remaining oil to the pan, then fry half the onions for 5 mins, stirring often until golden brown. Add the ginger and garlic paste, stir-frying for a minute, then add the turmeric and cook for another 30 seconds to release the flavour.\nStir in the coconut milk, then return the tofu to the pan along with the lime juice and 100ml water, and simmer for 5 mins. Stir in the spinach and the coriander, and cook for 1 min until wilted, then season.\nServe the curry in bowls topped with the coriander leaves and the remaining onion, the lime wedges for squeezing over, and the chapatis on the side.',
        '1tbsp rapeseed oil \ntofu, cut into 2cm cubes \n2 red onions, thinly sliced \n1 1/2 ginger and garlic paste \n1 1/2 ground turmeric \n400ml light coconut milk \n2 limes, 1 juiced, 1 cut into wedges to serve \n160g baby spinach \n10g coriander, most roughly chopped, reserve a few whole leaves to serve \n4 wholemeal chapatis, to serve',
        '1', -- UserID
        TRUE,
        '2023-09-02 10:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Tofu-curry-c24b410.jpg?quality=90&webp=true&resize=375,341',
        'Author : Nadine Brown, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        20, -- cooking_time  
        8   -- meal type (cuisines)
    ),
    (
        59,
        'Good Food team',
        'Stir-fried sprouts with green beans, lemon & pine nuts',
        'Not Specified',
        140, 14, 5, 6, 6, 16, -- calories, carbs, protein, fat, fibre, sodium
        8,
        'This new option for your Christmas sprouts is a fantastic source of vitamin C and folic acid.',
        'Cook the brussels sprouts and beans in a pan of boiling salted water for 3 mins, then drain well. Heat the oil in a large wok or frying pan. When hot, add the lemon zest and pine nuts. Cook for a couple of seconds, then add the vegetables and stir-fry for 3-4 mins until the sprouts colour a little. Add a squeeze of lemon juice and salt and pepper to taste.',
        '600g brussels sprouts, trimmed and quartered \n600g green beans \n1 tbsp olive oil \nzest and juice 1 lemon \n4 tbsp toasted pine nuts',
        '1', -- UserID
        TRUE,
        '2023-09-10 16:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-487479_11-8abbef4.jpg?quality=90&webp=true&resize=440,400',
        'Author : Good Food team, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        10, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        60,
        'Mary Cadaogan',
        'Pumpkin, spinach & black bean dopiaza',
        'Not Specified',
        354, 42, 17, 14, 0, 204, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'This new option for your Christmas sprouts is a fantastic source of vitamin C and folic acid.',
        'Cook the brussels sprouts and beans in a pan of boiling salted water for 3 mins, then drain well. Heat the oil in a large wok or frying pan. When hot, add the lemon zest and pine nuts. Cook for a couple of seconds, then add the vegetables and stir-fry for 3-4 mins until the sprouts colour a little. Add a squeeze of lemon juice and salt and pepper to taste.',
        '600g brussels sprouts, trimmed and quartered \n600g green beans \n1 tbsp olive oil \nzest and juice 1 lemon \n4 tbsp toasted pine nuts',
        '1', -- UserID
        TRUE,
        '2023-08-04 10:00:00',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-279520_11-b0a79cf.jpg?quality=90&webp=true&resize=440,400',
        'Author : Mary Cadogan, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        25, -- cooking_time  
        8   -- meal type (cuisines)
    ),
    (
        61,
        'John Berardi',
        'Berry Green Smoothie',
        'Not Specified',
        185, 20, 13, 6, 3, 194, -- calories, carbs, protein, fat, fibre, sodium
        1,
        'Get a hearty helping of vegetables and fruit with this recipe for a delicious berry and spinach smoothie.',
        'Combine all ingredients in a blender. Blend on high until mixture is a smooth consistency.',
        '1/2 cup frozen berries \n1/2 cup spinach \n1/2 cup plain full-fat yogurt \n1/4 cup whole milk or almond milk \n1 scoop vanilla protein powder',
        '2', -- UserID
        TRUE,
        '2023-04-11 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2016/08/green-monster.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : John Berardi, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        5, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        62,
        'Clean Eating',
        'Grilled Asparagus Salad with Feta Hazelnut Crumble',
        'Not Specified',
        127, 7, 2, 11, 2, 38, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'This quick and delicious salad features smokey grilled asparagus with a simple lemon dressing.',
        'In a small bowl, soak onion in lemon juice for 10 to 15 minutes. Drain, reserving lemon juice.\nMeanwhile, preheat a grill or grill pan to medium-high. In a large bowl, toss asparagus with 1 tbsp oil and season with salt and pepper. Add to grill and cook for 2 to 3 minutes per side. Remove from heat and cool to room temperature.\nPrepare topping (if using): In a small food processor, pulse cheese and hazelnuts into rough crumbs.\nPrepare dressing: In a small bowl, whisk remaining 2 tbsp oil and reserved lemon juice. Season with salt and pepper.\nDivide arugula among plates and top with tomatoes, asparagus, onions and dressing, dividing evenly. Garnish with topping.',
        '1/4 small red onion, thinly sliced \n2 tbsp fresh lemon juice \n16 spears fresh asparagus (about 1 bunch), trimmed \n3 tbsp olive oil, divided \nSea salt and ground black pepper, to taste \n2 cups baby arugula \n2 cups grape tomatoes, halved',
        '2', -- UserID
        TRUE,
        '2023-02-28 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2016/06/grilled-asparagus-salad-with-feta-and-hazelnut-crumble-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Clean Eating, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        15, -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        63,
        'Alexa Weibel',
        'White Bean Soup with Caper Almond Pesto',
        'Not Specified',
        619, 66, 25, 13, 19, 761, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'White beans lend a rich, creamy texture to this dairy-free soup. A 5-minute almond pesto, made while the soup is boiling, adds flavor to the recipe.',
        'In a blender, purée beans, broth, milk, shallot, garlic, ½ tsp herbes de provence, salt and pepper.\nTransfer soup to a medium saucepan, cover and heat on medium, whisking occasionally, until warmed, about 10 minutes.\nMeanwhile, prepare pesto: In a bowl, stir together oil, basil, almonds, capers and remaining 1/4 tsp herbes de provence.\nDivide soup among bowls and drizzle with pesto.',
        '2 15-oz BPA-free cans unsalted white beans (such as cannellini or navy beans), drained and rinsed \n1 cup low-sodium chicken broth \n1 cup plain unsweetened almond milk \n1 large shallot, roughly chopped \n1 clove garlic, roughly chopped \n3/4 tsp dried herbes de provence, divided \n½ tsp sea salt \n¼ tsp ground black pepper \n3 tbsp extra-virgin olive oil \n2 tbsp finely chopped fresh basil \n2 tbsp finely chopped roasted unsalted almonds \n2 tsp drained jarred capers, chopped',
        '2', -- UserID
        TRUE,
        '2023-02-28 12:00:00',
        'https://cdn.cleaneatingmag.com/wp-content/uploads/2016/06/grilled-asparagus-salad-with-feta-and-hazelnut-crumble-1.jpg?crop=535:301&width=1070&enable=upscale',
        'Author : Clean Eating, Designed by cleaneating',  -- img_title
        2, -- dietary_preference
        20, -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        64,
        'Australianeggs',
        'Healthy Gallo Pinto',
        'Not Specified',
        315, 10.6, 19.2, 20.6, 5.6, 334, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Healthy Gallo Pinto is a nutritious and flavorful dish that combines the richness of beans, the freshness of vegetables, and the protein power of eggs.',
        'Cook the garlic and cumin in olive oil over a medium heat until fragrant.\nStir in the chickpeas, cooking for 5 minutes.\nMeanwhile, make a salsa by quartering the tomato and mixing with 1/2 the lime juice and fresh herbs. Season with salt and pepper.\nFinely slice the spring onions and add into the chickpeas along with the paprika, stir and cook for 2 more minutes.\nSeparately, whisk the egg, season well, and cook in a non-stick frypan over a low-medium heat for a few minutes (or to your liking).\nServe the crispy chickpeas with a few spinach or kale leaves, topped with an egg and salsa.\nSqueeze over remaining lime and enjoy.',
        '1 tbsp olive oil \n1 clove garlic \n1/2 teaspoon cumin seeds \n1/2 tsp smoked paprika \n1/2 can chickpeas (rinsed) \n2 spring onions \n4 large eggs \n1 cup cherry tomatoes \n1/4 bunch fresh herbs \n1/4 cup green leaves \n1 lime, half sliced, half juiced',
        '2', -- UserID
        TRUE,
        '2023-04-12 14:00:00',
        'https://www.australianeggs.org.au/assets/recipes/willowcreative_Aus-Eggs-_-316431-1__ScaleWidthWzEyMDBd.jpg',
        'Author : Australianeggs, Designed by Australianeggs',  -- img_title
        3, -- dietary_preference
        20, -- cooking_time  
        8   -- meal type (cuisines)
    ),
    (
        65,
        'Australianeggs',
        'Roast Cauliflower & Egg Salad',
        'Not Specified',
        342, 21, 16.5, 19, 11.1, 384, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Roast Cauliflower and Egg Salad is a vibrant and nutritious dish combining roasted cauliflower, boiled eggs, chickpeas, fresh vegetables, and a creamy avocado dressing.',
        'Preheat oven to 220°C/200°C fan forced. Line a large oven tray with baking paper.\nHalf fill a medium saucepan with cold water. Gently lower in eggs. Bring to a simmer over medium heat and cook for 5 minutes. Use a slotted spoon to transfer to iced water. Peel and set aside.\nToss cauliflower and chickpeas in oil and dukkah on prepared tray. Roast for 25 minutes, until cauliflower is tender and starting to brown around the edges.\nFor the avocado dressing, blend or process all ingredients in a small food processor or blender until smooth, adding 1/2 cup of water to make a thin dollop consistency. Season to taste.\nToss radish, mint and currants though roast cauliflower and chickpeas. Top with halved eggs and drizzle with dressing. Sprinkle with extra dukkah, if you like.',
        '4 eggs \n1 head cauliflower, cut into florets, large florets halved \n400g can chickpeas, rinsed and drained \n2 tbs olive oil \n1 tbs dukkah, plus extra to sprinkle (optional) \n60g baby spinach leaves \n1/2 bunch radishes, thinly sliced \n1/2 bunch mint leaves \n1 tbs currants \n1 small ripe avocado \n1/2 bunch mint leaves \n1/2 cup baby spinach leaves \n1/4 cup apple cider vinegar \n1 small garlic clove, crushed',
        '2', -- UserID
        TRUE,
        '2023-05-11 14:30:00',
        'https://www.australianeggs.org.au/assets/recipes/Roast-Cauliflower-egg-salad-0169-__ScaleWidthWzEyMDBd.jpg',
        'Author : Australianeggs, Designed by Australianeggs',  -- img_title
        2, -- dietary_preference
        50, -- cooking_time  
        8   -- meal type (cuisines)
    ),
    (
        66,
        'Australianeggs',
        'Easy “On-The-Go” Breakfast Muffins',
        'Not Specified',
        191, 3, 16.2, 12.4, 1.8, 227, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Take the stress out of a busy morning with these tasty breakfast muffins. Make a batch on Sunday and freeze in portions of two or three.',
        'Preheat oven to 160°C fan-forced.\nSpray a 12 hole x 1/3-cup capacity with oil to grease.\nGrate the zucchini and firmly squeeze to get the excess moisture out. Wrap it in a paper towel and squeeze again to remove the remainder of the moisture.\nWhisk the eggs and milk in a large bowl and stir in the zucchini, carrot, green onions and frozen peas. Season and stir through cheese.\nEvenly spoon the mixture into a muffin pan and bake for 25-30 minutes or golden and until set.\nSet aside in the pan for 5 minutes to cool then turn onto a wire rack. Serve hot or cold.',
        'Cooking oil spray \n1 medium zucchini \n8 eggs, at room temperature \n2 tbs milk \n1 medium carrot, coarsely grated \n3 green onions (shallots), thinly sliced \n1/3 cup frozen peas \n1 cup reduced fat grated tasty cheese',
        '4', -- UserID
        TRUE,
        '2023-05-15 14:40:00',
        'https://www.australianeggs.org.au/assets/recipes/Roast-Cauliflower-egg-salad-0169-__ScaleWidthWzEyMDBd.jpg',
        'Author : Australianeggs, Designed by Australianeggs',  -- img_title
        2, -- dietary_preference
        40, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        67,
        'Australianeggs',
        'Spicy Chickpea and Egg Soup',
        'Not Specified',
        406, 41.5, 18.2, 16.4, 10.1, 449, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Take the stress out of a busy morning with these tasty breakfast muffins. Make a batch on Sunday and freeze in portions of two or three.',
        'Preheat oven to 160°C fan-forced.\nSpray a 12 hole x 1/3-cup capacity with oil to grease.\nGrate the zucchini and firmly squeeze to get the excess moisture out. Wrap it in a paper towel and squeeze again to remove the remainder of the moisture.\nWhisk the eggs and milk in a large bowl and stir in the zucchini, carrot, green onions and frozen peas. Season and stir through cheese.\nEvenly spoon the mixture into a muffin pan and bake for 25-30 minutes or golden and until set.\nSet aside in the pan for 5 minutes to cool then turn onto a wire rack. Serve hot or cold.',
        'Cooking oil spray \n1 medium zucchini \n8 eggs, at room temperature \n2 tbs milk \n1 medium carrot, coarsely grated \n3 green onions (shallots), thinly sliced \n1/3 cup frozen peas \n1 cup reduced fat grated tasty cheese',
        '4', -- UserID
        TRUE,
        '2023-04-07 16:00:00',
        'https://www.australianeggs.org.au/assets/recipes/Spicy-Chickpea-amp-3__ScaleWidthWzEyMDBd.jpg',
        'Author : Australianeggs, Designed by Australianeggs',  -- img_title
        2, -- dietary_preference
        25, -- cooking_time  
        8   -- meal type (cuisines)
    ),
    (
        68,
        'Gina',
        'Apple Pie Overnight Oats',
        'Not Specified',
        361, 59, 8, 11, 10, 154, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'With apples, walnuts, chia seeds, maple syrup, oats, and cinnamon, this comforting overnight oat meal tastes just like apple pie!',
        'Add the apples, cinnamon, maple syrup and a pinch of sea salt to small sauce pan over low heat.\nMix to combine then cover and cook for about 10 minutes, stirring occasionally, until the apples are tender.\nRemove the lid, increase the heat to medium and cook an additional 2-3 minutes or until the sauce thickens slightly and coats the apples and excess liquid evaporates.\nRemove from the heat and set aside while you make the oats.\nFor the oats: In a small bowl, add the milk, chia seeds, vanilla, cinnamon, nutmeg, and maple syrup.\nAdd the oats and mix to combine.\nAdd 1/4 of the oat mixture to 2 mason jars (8oz) or airtight containers (with lids).\nLayer each evenly with ¼ of the apples then top each with an equal amount of the remaining oats and 1 tablespoon walnuts.\nCover and refrigerate overnight.\nOats may be eaten cold, at room temperature or warm.',
        '1 medium apple, chopped \n2 teaspoons ground cinnamon \n1 tablespoon pure maple syrup \nSea salt \n1 1/2 cups unsweetened almond milk, or milk of your choice \n2 teaspoons chia seeds \n1 teaspoon vanilla extract \n1 teaspoon ground cinnamon \n1/8 teaspoon ground nutmeg \n1/2 tablespoon pure maple syrup \n1 cup old fashioned oats, or gluten-free oats \n2 tablespoons chopped walnuts, for topping',
        '4', -- UserID
        TRUE,
        '2023-10-29 14:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2022/10/Apple-Pie-Overnight-Oats-3.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        1, -- dietary_preference
        25, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        69,
        'Gina',
        'Classic Egg Salad',
        'Not Specified',
        185, 1, 9.5, 15.5, 3.5, 215.5, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'This classic egg salad recipe is the perfect make-ahead dish for breakfast on toast, for lunch in a wrap, lettuce wrap, over salad or in a sandwich.',
        'Combine all the ingredients and refrigerate until ready to eat.',
        '6 hard boiled eggs, peeled and chopped \n3 tablespoons mayonnaise \n1 teaspoon finely chopped red onion \n1/8 teaspoon kosher salt \nfresh black pepper, to taste \n1/8 teaspoon sweet paprika, for garnish \nchopped chives, for garnish',
        '4', -- UserID
        TRUE,
        '2023-09-11 13:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2019/01/Egg-Salad-Finals-9.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        2, -- dietary_preference
        25, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        70,
        'Gina',
        'Spicy Gochujang Tofu Bowl',
        'Not Specified',
        473, 50, 26, 19, 6, 942, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Crumble it up to win over a non-tofu lover. These plant-based Spicy Gochujang Tofu Bowls are bursting with flavor, protein, and vegetables!',
        'Place tofu on a paper towel or tea towel lined plate.  Cover with another towel and place a heavy pan on top to press out excess water from tofu.\nCrumble the tofu into small bowl with your fingers into small (ground meat-size) pieces. Set aside.\nIn a small bowl or measuring cup, whisk together the Gochujang with the soy sauce and 1 tablespoon vinegar.\nHeat a large skillet over medium high heat.\nAdd 1/2 tablespoon of the sesame oil, swirling to coat the bottom of the pan.\nAdd the garlic and ginger and sauté for 30 seconds.  Add the crumbled tofu and cook, stirring often, for 5 minutes, or until some of the pieces just start to brown.\nAdd the gochujang sauce and mix to evenly coat. Cook an additional 4-5 minutes, stirring often, until the pieces brown a little on the edges.\nMeanwhile, prepare the slaw: In a small mixing bowl, combine the remaining 2 tablespoons vinegar, 2 teaspoons sesame oil and 1 teaspoon honey with 1/4 teaspoon salt. Whisk to combine until smooth and combined.  Add the coleslaw mix and scallion whites and toss to evenly coat with dressing.\nDivide the rice into 2 medium serving bowls.\nAdd 1 1/2 cups slaw and 1 cup tofu to each bowl. Top each with scallion greens and serve immediately.',
        '1 14-ounce package extra firm tofu, drained \n2 tablespoons Gochujang \n2 tablespoons reduced sodium soy sauce \n3 tablespoons unseasoned rice vinegar \n3 1/2 teaspoons sesame oil \n2 garlic cloves, minced \n1 teaspoon grated fresh ginger \n1 teaspoon honey \n1/4 teaspoon kosher salt \n3 cups tri-color coleslaw mix, red and green cabbage and carrots \n2 scallions, chopped, white and green separated \n1 cup cooked brown rice \nlime wedges, for serving',
        '4', -- UserID
        TRUE,
        '2023-02-21 13:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2023/02/Spicy-Gochujang-Tofu-Bowls-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        1, -- dietary_preference
        25, -- cooking_time  
        12   -- meal type (cuisines)
    ),
    (
        71,
        'Gina',
        'Protein PB & J Smoothie Bowl',
        'Not Specified',
        268, 30.5, 14.5, 11, 6.5, 278, -- calories, carbs, protein, fat, fibre, sodium
        1,
        'The flavor of this protein PB & J smoothie bowl is similar to peanut butter and jelly combined. Rich in protein, definitely the ideal way to start the day!',
        'Place your milk into the blender.\nAdd frozen fruit, protein powder and 1 tablespoon peanut butter. Seal and blend until smooth.\nPour out into a bowl.\nIf using, melt the remaining peanut butter in the microwave 30 to 45 seconds and drizzle over the bowl.\nAdd desired toppings. Eat right away with a spoon!',
        '1/4 cup almond, oat or milk of your choice \n2/3 cup frozen blueberries, put your blueberries in the freezer! \n2/3 cup sliced strawberries, frozen \n1 scoop vanilla protein powder \n1 tbsp peanut butter \nOptional toppings: 1 tablespoon melted peanut butter for drizzling,, blueberries, chia seeds',
        '4', -- UserID
        TRUE,
        '2023-03-25 13:20:00',
        'https://www.skinnytaste.com/wp-content/uploads/2021/03/PB-_-J-Smoothie-Bowl-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        2, -- dietary_preference
        5, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        72,
        'Gina',
        'Chipotle Chicken',
        'Not Specified',
        216, 2, 34, 7, 0.5, 561, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Skinless, boneless chicken thighs (or breasts) are used in this simple and quick recipe for chipotle chicken. It is great for tacos, quesadillas, handmade burrito bowls, and more. It is spicy and smokey.',
        'Season Chicken: Season the chicken thighs with salt and pepper on both sides.\nIn a mixing bowl, combine the minced garlic, chipotle in adobo sauce, ancho chile powder, ground cumin, and dried oregano. Rub the spice mixture evenly over the chicken thighs, making sure they are thoroughly coated. Let them sit a few minutes to let the flavor set in. You can cook right away or refrigerate as long as overnight, the longer the more flavorful!\nPreheat your grill or grill pan to medium-high heat. Grease the grill grates or grill pan with oil to prevent sticking.\nPlace the chicken thighs on the grill or grill pan and cook for approximately 6-8 minutes per side, or until they are fully cooked and reach an internal temperature of 165°F.\nOnce cooked, remove the chicken from the heat and let it rest for a few minutes before serving. Resting allows the flavors to meld together and the juices to redistribute. Slice it up and serve in tacos, rice bowls, etc.',
        '1 1/2 pounds boneless skinless chicken thighs, trimmed of fat (about 8 thighs) \n1 1/4 teaspoons kosher salt, and fresh ground black pepper, to taste \n2 cloves garlic, minced or crushed \n1/2 to 1 tablespoon chipotle in adobo sauce, from 1 can, you can freeze the rest for future use \n1 teaspoon ancho chile powder \n1 teaspoon ground cumin \n1 teaspoon dried oregano',
        '4', -- UserID
        TRUE,
        '2023-03-25 13:20:00',
        'https://www.skinnytaste.com/wp-content/uploads/2023/06/Chipotle-Chicken-Thighs-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        4, -- dietary_preference
        30, -- cooking_time  
        6   -- meal type (cuisines)
    ),
    (
        73,
        'Gina',
        'One Pan Roasted Potatoes, Sausage and Peppers',
        'Not Specified',
        325, 33, 22.5, 11.5, 4, 587, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'One of my favorite fuss-free sheet pan dinners is One Pan Roasted Potatoes with Sausage & Peppers. Ideal for weeknights, plus points for being simple to clean up!',
        'Cut the potatoes into small 1" x 1/2 inch pieces. These take the longest to cook so cutting them small ensures everything cooks evenly.\nPreheat oven to 375°F.\nSpray one large non-stick baking sheet, or two small ones with olive oil spray to prevent the potatoes from sticking.\nIn a large bowl, combine potatoes, onions, peppers, olive oil, salt, pepper, rosemary and garlic powder. Mix well to be sure everything is coated with oil and seasoned evenly. Pour onto the prepared baking sheet and place in the center of the oven; bake for 15 minutes.\nUse a spoon to toss so nothing sticks or burns.\nAdd the sausage to the baking sheet with the potatoes and vegetables and bake, tossing once or twice for 25-35 minutes, or until your potatoes are cooked through.\nCooking time will vary depending on the thickness of your potatoes and sausage, keep an eye so they do not burn.',
        '1.5 lb about 3 large potatoes, russet or new \n1 medium onion, peeled and quartered, layers separated \n2 red bell peppers, seeds removed and cut into 1 inch pieces \n2 tsp extra virgin olive oil \nkosher salt and fresh cracked pepper to taste \n1 tsp chopped rosemary, fresh or dry \n1/2 tsp garlic powder \nolive oil spray \n1 lb Italian chicken sausage, each link into 6-7 slices',
        '3', -- UserID
        TRUE,
        '2023-12-13 12:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2011/10/One-Pan-Roasted-Potatoes-Sausage-and-Peppers-5.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        4, -- dietary_preference
        55, -- cooking_time  
        4   -- meal type (cuisines)
    ),
    (
        74,
        'Gina',
        'High-Protein Scrambled Eggs with Cottage Cheese',
        'Not Specified',
        173, 1.5, 17.5, 10.5, 4, 327, -- calories, carbs, protein, fat, fibre, sodium
        2,
        'Add some cottage cheese to your scrambled eggs for an easy high-protein breakfast.',
        'In a medium bowl, whisk the eggs, cottage cheese, kosher salt and black pepper, to taste with a fork.\nHeat a medium nonstick skillet over medium-low heat and spray with oil. When warm, pour the eggs in.\nUsing a rubber spatula, slowly scrape sections of eggs to the center of the pan as the bottom starts to set, creating soft folds for about 1 1/2 to 2 minutes total until just set.\nRemove from the heat and serve.',
        '4 large eggs \n1/2 cup 2% cottage cheese, I like Good Culture \n1/8 teaspoon kosher salt \nfresh ground black pepper \nolive oil spray',
        '3', -- UserID
        TRUE,
        '2023-03-13 12:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2022/03/High-Protein-Scrambled-Eggs-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        4, -- dietary_preference
        6, -- cooking_time  
        4   -- meal type (cuisines)
    ),
    (
        75,
        'Gina',
        'Slow Cooker Pork and Green Chili Stew',
        'Not Specified',
        253, 5.5, 33, 9, 0.5, 836, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Lean pork chunks slow-cooked in a crock pot with tomatoes, jalapeño, and green chilies make for a tasty, slightly spicy midweek dinner!',
        'Cut pork into 2-inch pieces. Season with salt and pepper.\nHeat a large non-stick skillet on high heat; when hot lightly spray the pan with oil and brown the pork over medium heat on all sides, about 3 - 4 minutes total.\nSprinkle 1 tbsp of flour over pork and stir to cook 30 seconds, sprinkle remaining flour over pork and cook an additional 30 seconds.\nAdd browned pork to the crock pot, along with the remaining ingredients.\nCook on LOW for 6 to 8 hours or HIGH for 4 hours.\nWhen done, adjust salt and pepper to taste if needed.',
        '2 lbs pork tenderloin \nsalt and pepper to taste \ncooking spray \n2 tbsp unbleached all-purpose flour \n3/4 cup diced onion \n2 cans, 4.25 oz each whole green chiles, sliced into thick rounds \n2 tbsp chopped jalapeño, or more to taste \n10 oz can diced tomatoes and green chilies \n1/2 cup fat-free low-sodium chicken broth \n1 tbsp cumin \n1/2 tsp garlic powder \nsalt and fresh ground black pepper, to taste',
        '3', -- UserID
        TRUE,
        '2023-10-02 11:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2012/10/slow-cooker-pork-and-green-chile-stew-550x798.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        4, -- dietary_preference
        320, -- cooking_time  
        6   -- meal type (cuisines)
    ),
    (
        76,
        'Gina',
        'Corn Tomato Avocado Salad',
        'Not Specified',
        128, 14, 2.5, 8.5, 4, 83, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'In a dish, this corn tomato avocado salad tastes like summer! Serve half of it as a main course, or as the ideal side to anything you grill.',
        'Steam corn in steamer or microwave (or you can grill or boil) until tender, about 5 minutes.\nLet it cool then transfer to a large bowl.\nToss all the remaining ingredients together and serve immediately.',
        '1 cup corn kernels , from 1 large steamed corn on the cobb \n5 ounces diced avocado, from 1 medium \n1 1/2 cup diced Persian cucumbers, about 3 small \n1 cup halved cherry tomatoes \n2 tablespoons diced red onion \n2 teaspoons extra virgin olive oil \n2 tablespoon fresh lemon juice, from 1 medium lemon \n1/4 teaspoon kosher salt \nfresh black pepper, to taste',
        '3', -- UserID
        TRUE,
        '2023-07-23 11:30:00',
        'https://www.skinnytaste.com/wp-content/uploads/2018/07/Corn-Tomato-Avocado-Salad-1-9.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        2, -- dietary_preference
        10, -- cooking_time  
        9   -- meal type (cuisines)
    ),
    (
        77
        'Gina',
        'Mini Pumpkin Chocolate Chip Muffins',
        'Not Specified',
        160, 27, 2, 5, 2, 118, -- calories, carbs, protein, fat, fibre, sodium
        14,
        'Mini Pumpkin Chocolate Chip Muffins made lighter by swapping out butter for pumpkin puree loaded with chocolate chips in every bite!',
        'Preheat the oven to 350°F. Line a mini muffin tin with paper liners and lightly spray liners with oil for easy removal.\nIn a medium bowl, combine flours, sugar, baking soda, pumpkin spice, cinnamon, and salt with a wire whisk. Set aside.\nIn a large bowl mix pumpkin puree, oil, egg whites and vanilla; beat at medium speed until thick. Scrape down sides of the bowl.\nAdd flour mixture to the wet mixture, then blend at low speed until combined; do not over mix. Fold in chocolate chips.\nPour batter into prepared muffin tin and bake on the center rack for 22 to 24 minutes, or until a toothpick inserted in the center comes out clean.\nLet them cool at least 15 minutes before serving.',
        '1/2 cup white whole wheat flour \n3/4 cups unbleached all purpose flour \n3/4 cup monk fruit sweetener (Lakanto), or raw sugar \n3/4 tsp baking soda \n1 3/4 tsp pumpkin pie spice \n1/4 tsp cinnamon \n1/4 tsp salt \n1 1/2 cups canned pumpkin puree, not pumpkin pie filling \n2 tbsp virgin coconut oil, or canola \n2 large egg whites \n2 tsp vanilla extract \nbaking spray \n2/3 cup mini chocolate chips',
        '3', -- UserID
        TRUE,
        '2023-09-10 11:30:00',
        'https://www.skinnytaste.com/wp-content/uploads/2013/09/Mini-Pumpkin-Chocolate-Chip-Muffins-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        2, -- dietary_preference
        40, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        78
        'Gina',
        'Maple-Cinnamon Banana-Pear Baked Oatmeal with Walnuts',
        'Not Specified',
        225, 39.5, 5.5, 6, 4.5, 72, -- calories, carbs, protein, fat, fibre, sodium
        6,
        'Breakfast with baked oats is akin to having dessert! You will feel full all morning long because it is made with nutritious ingredients like bananas, pears, oats, almonds, and maple syrup.',
        'Preheat the oven to 375° Lightly spray a 8 x 8″ or 9 x 9″ ceramic baking dish with cooking spray; set aside.\nArrange the banana slices in a single layer on the bottom of the ceramic dish. Top with the pears, 1/4 teaspoon of the cinnamon, 2 tablespoon of the maple and cover with foil.\nBake 20 minutes, until the bananas get soft.\nMeanwhile, in a medium bowl, combine the oats, half of the walnuts, baking powder, 1/2 teaspoon cinnamon, and salt; stir together.\nIn a separate bowl, whisk together the remaining maple syrup, milk, egg, and vanilla extract.\nRemove the fruit from the oven, then pour the oat mixture over the baked fruit.\nPour the milk mixture over the oats, making sure to distribute the mixture as evenly as possible over the oats.\nSprinkle the remaining 1/4 teaspoon cinnamon and walnuts over the the top.\nBake the oatmeal for about 35 minutes, or until the top is golden brown and the oatmeal has set. Serve warm from the oven.',
        '2 large ripe bananas, (the riper the better) sliced into 1/2″ pieces \n1 1/2 cup diced and peeled ripe pears, 1-/2 inch dice \n5 tablespoons pure maple syrup \n1 cup uncooked quick oats \n5 tablespoons chopped walnuts \n1/2 tsp baking powder \n1 tsp cinnamon \npinch of salt \n1 cup fat-free milk, or dairy-free milk such as almond or soy \n1 large egg \n1 teaspoon vanilla extract',
        '3', -- UserID
        TRUE,
        '2023-09-13 11:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2019/09/Maple-Cinnamon-Banana-Pear-Baked-Oatmeal-with-Walnuts-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        2, -- dietary_preference
        35, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        79
        'Gina',
        'Air Fryer Steak',
        'Not Specified',
        221, 0.5, 39.5, 7, 0.5, 391, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Cook the ideal air-fried steak so that it is juicy inside and charred outside. Steak cooked by air is quick, simple, and creates no mess in the kitchen!',
        'Combine the spices in a small bowl.\nSpray the steak with olive oil and coat both sides with the spices.\nPreheat the air fryer so the basket gets hot. For a 1-inch steak, air fry 400F 10 minutes turning halfway, for medium rare, for medium, cook 12 minutes, flipping halfway. See temp chart below, time may vary slightly with different air fryer models, and the thickness of the steaks.\nFinish with a pinch of more salt and black pepper.\nLet it rest, tented with foil 5 minutes before slicing.',
        '1 teaspoon garlic powder \n1/2 teaspoon sweet paprika \n1 teaspoon kosher salt \n1/4 teaspoon black pepper \n4 sirloin steaks, 1 inch thick (1 1/2 lbs total) \nolive oil spray',
        '2', -- UserID
        TRUE,
        '2023-03-29 10:00:00',
        'https://www.skinnytaste.com/wp-content/uploads/2022/03/Air-Fryer-Steak-7.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        4, -- dietary_preference
        15, -- cooking_time  
        2   -- meal type (cuisines)
    ),
    (
        80
        'Gina',
        'Rainbow Quinoa Salad with Lemon Dressing',
        'Not Specified',
        394, 51, 10.5, 17, 7, 184, -- calories, carbs, protein, fat, fibre, sodium
        4,
        'Eat the rainbow! This delicious vegan, gluten-free rainbow quinoa salad with lemon dressing is ideal for meal prep and do not need to be reheated.',
        'Combine lemon juice, olive oil, salt and pepper in a small bowl and whisk well.\nAdd one cup quinoa in each bowl. Top with 1/4 cup of each of the vegetables in rainbow order starting with purple, ending in red.\nPour the dressing over the salad, adjust salt and pepper, as needed.',
        '4 tablespoons lemon juice \n4 tablespoons olive oil \n1/2 teaspoon kosher salt \n▢fresh black pepper, to taste \n4 cups cooked quinoa, from about 1 1/3 cups \n1 cup shredded brussels sprouts \n1 cup shredded red cabbage \n▢1 cup shredded or thin sliced carrots \n1 cup yellow bell peppers \n1 cup diced mini cucumbers \n1 cup halved cherry tomatoes',
        '2', -- UserID
        TRUE,
        '2023-12-12 10:30:00',
        'https://www.skinnytaste.com/wp-content/uploads/2022/12/Rainbow-Quinoa-Salad-with-Lemon-Dressing-3.jpg',
        'Author : skinnytaste, Designed by skinnytaste',  -- img_title
        1, -- dietary_preference
        15, -- cooking_time  
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
Insert Into recipe_allergies
(id, allergy_id)
VALUES
    (1, 9),
    (2, 1),
    (2, 8),
    (2, 9),
    (3, 1),
    (4, 5),
    (4, 7),
    (5, 5),
    (5, 8),
    (6, 8),
    (7, 3),
    (7, 7),
    (8, 8),
    (9, 1),
    (9, 7),
    (10, 8),
    (11, 3),
    (11, 8),
    (12, 8),
    (13, 3),
    (13, 6),
    (13, 7),
    (13, 8),
    (14, 3),
    (15, 5),
    (16, 1),
    (16, 8),
    (16, 9),
    (17, 1),
    (17, 3),
    (17, 4),
    (17, 9),
    (18, 3),
    (19, 5),
    (20, 4),
    (21, 6),
    (22, 1),
    (22, 8),
    (23, 10),
    (24, 10),
    (25, 8),
    (26, 2),
    (27, 11),
    (28, 8),
    (28, 9),
    (29, 8),
    (29, 9),
    (29, 10),
    (30, 11),
    (31, 6),
    (32, 2),
    (32, 10),
    (33, 7),
    (33, 10),
    (34, 7),
    (34, 10),
    (35, 2),
    (37, 7),
    (38, 5),
    (39, 7),
    (39, 10),
    (41, 7),
    (41, 10),
    (42, 2),
    (42, 3),
    (43, 2),
    (43, 10),
    (44, 10),
    (46, 7),
    (47, 5),
    (49, 10),
    (52, 3),
    (59, 7),
    (61, 7),
    (61, 10),
    (63, 7),
    (65, 2),
    (66, 2),
    (66, 10),
    (67, 2),
    (68, 3),
    (68, 7),
    (68, 8),
    (69, 2),
    (70, 3),
    (71, 1),
    (71, 6),
    (71, 7),
    (74, 2),
    (74, 10),
    (77, 2),
    (77, 9),
    (78, 1),
    (78, 2),
    (78, 7);
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


