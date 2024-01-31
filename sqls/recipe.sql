
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

-- first set of recipes 
INSERT INTO recipe
(id, publisher, title, info, calories, carbs, protein, fat, fibre, sodium, serving_size, description, steps, ingredients, UserID, Active, createddt, img, img_title, dietary_preference, cooking_time)
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
           -- meal type (cuisines)
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
           -- meal type (cuisines)
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
           -- meal type (cuisines)
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
           -- meal type (cuisines)
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
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tagine-5f2d3f6.jpg?quality=90&webp=true&resize=440,400',
        'Author : Cassie Best, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        30 -- cooking_time  
           -- meal type (cuisines)
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
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tagine-5f2d3f6.jpg?quality=90&webp=true&resize=440,400',
        'Author : Cassie Best, Designed by bbcgoodfood',  -- img_title
        3, -- dietary_preference
        15 -- cooking_time  
           -- meal type (cuisines)
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
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tagine-5f2d3f6.jpg?quality=90&webp=true&resize=440,400',
        'Author : Cassie Best, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        10 -- cooking_time  
           -- meal type (cuisines)
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
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tagine-5f2d3f6.jpg?quality=90&webp=true&resize=440,400',
        'Author : Cassie Best, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        80 -- cooking_time  
           -- meal type (cuisines)
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
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tagine-5f2d3f6.jpg?quality=90&webp=true&resize=440,400',
        'Author : Cassie Best, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        40 -- cooking_time  
           -- meal type (cuisines)
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
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tagine-5f2d3f6.jpg?quality=90&webp=true&resize=440,400',
        'Author : Cassie Best, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        25 -- cooking_time  
           -- meal type (cuisines)
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
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tagine-5f2d3f6.jpg?quality=90&webp=true&resize=440,400',
        'Author : Cassie Best, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        15 -- cooking_time  
           -- meal type (cuisines)
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
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tagine-5f2d3f6.jpg?quality=90&webp=true&resize=440,400',
        'Author : Cassie Best, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        15 -- cooking_time  
           -- meal type (cuisines)
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
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tagine-5f2d3f6.jpg?quality=90&webp=true&resize=440,400',
        'Author : Cassie Best, Designed by bbcgoodfood',  -- img_title
        1, -- dietary_preference
        20 -- cooking_time  
           -- meal type (cuisines)
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


