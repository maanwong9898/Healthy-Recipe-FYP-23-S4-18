-- 4. Blog post category
Insert into blog_post_category 
 (subcategory_name) 
VALUES
("Cookbook"),
("Kitchenware"),
("Miscellaneous");

-- Blog
 -- publisher should be author of the blog
    -- blog_type_id should be the category of the blog (refer to blog_post_category)
    -- img_title should be the author of the image and the source of the image (follow their code of conduct)
INSERT INTO Blog
(id, CreatedDT, Publisher, Title, Info, UserID, img, img_title, blog_type_id)
VALUES
    (
        '1',
        '2024-01-29 08:24:52',  -- CreatedDT
        'Philps',  -- Publisher
        'Elevate Your Kitchen with Philips: Top-Quality Kitchenware',  -- Title
        'Upgrade your kitchen experience with Philips! Your trusted partner for top-quality kitchenware. Discover a range of innovative and stylish appliances designed to make cooking a breeze. Efficiency in Every Appliance: Philips brings you kitchenware that simplifies your daily tasks. From powerful blenders to versatile food processors, our appliances are engineered for efficiency, saving you time and effort in the kitchen. Healthy Choices, Delicious Results: Explore our Airfryers and Juicers for a healthier cooking approach. Enjoy crispy dishes with less oil using our Airfryers, and create refreshing, nutrient-packed juices with ease using our Juicers. Sleek Design, Lasting Impressions: Philips kitchenware not only excels in functionality but also adds a touch of elegance to your kitchen. With modern designs and premium materials, our appliances seamlessly blend style with substance. Our kitchenware is crafted to meet your cooking needs while ensuring durability and long-lasting performance. \nUpgrade your kitchen with Philips – where innovation meets style. Explore our range of kitchenware today and discover the joy of cooking with precision and convenience. Philips, transforming kitchens for a better culinary experience.',
         1, -- userId Philips
        'https://img.freepik.com/free-photo/healthy-meal-preparation-rustic-domestic-kitchen-generated-by-ai_188544-26855.jpg?t=st=1706670340~exp=1706673940~hmac=57ab56c2484a0e9db62779449b2b08c432e1b38703b8be467a9ac92c59beefe2&w=1060',
        'Author : vecstock, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
     (
        '2',
        '2024-01-10 15:45:00',
        'IKEA',
        'Elevate Your Culinary Space with IKEA Kitchenware',
        'Unleash your inner chef with exceptional range of kitchenware from IKEA. Elevate your culinary space with stylish and functional tools designed to make cooking a joy. Quality Cookware: IKEA offers a diverse collection of cookware crafted with quality materials. From durable pots and pans to precision kitchen utensils, each piece is designed to enhance your cooking experience. Organize with Style: Transform your kitchen into an organized haven with storage solutions. Trendy Tableware: Serve your culinary creations with flair using trendy tableware from IKEA. From elegant dinner sets to vibrant serving dishes, discover tableware that complements your personal style. Affordable Luxury: Enjoy luxury without the hefty price tag. Our kitchenware combines affordability with sophistication, allowing you to create a stylish and functional kitchen on any budget. Explore the IKEA Kitchenware Collection today and redefine your culinary space.'
        2, -- userId IKEA
            'https://img.freepik.com/premium-photo/kitchen-with-pots-pans-counter-green-apple-side_889227-22098.jpg?w=1060',
        'Author : outkassdesign, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
     (
        '3',
        '2023-03-10 09:30:00',
        'OpenTrolley',
        'Dive into Culinary Adventures with OpenTrolley Cookbooks',
        'Embark on a culinary journey with extensive collection of cookbooks from OpenTrolley. Whether you are a seasoned chef or a kitchen novice, discover inspiration and expertise within the pages of these culinary treasures. Diverse Culinary Genres: OpenTrolley brings you a diverse range of cookbooks covering various cuisines, dietary preferences, and cooking skill levels. From international flavors to healthy living, find the perfect cookbook to suit your culinary interests. \nExpert Tips and Techniques: Enhance your cooking skills with expert tips and techniques shared by renowned chefs and culinary experts. OpenTrolley cookbooks offer a wealth of knowledge, making every recipe a learning experience. Specialized Dietary Choices: Explore cookbooks catering to specialized dietary choices, including vegetarian, vegan, gluten-free, and more. OpenTrolley ensures that everyone can enjoy the pleasure of cooking, regardless of dietary restrictions. \nCurated Collections: Discover curated collections of cookbooks that take you on thematic journeys, from baking extravaganzas to quick and easy weeknight dinners. OpenTrolley makes it easy to find cookbooks that align with your specific culinary interests. The Joy of Gifting: Share the joy of cooking by gifting OpenTrolley cookbooks to friends and family. Explore the world of culinary literature with OpenTrolley Cookbooks and elevate your kitchen adventures.'
        3, -- userId OpenTrolley
        'https://img.freepik.com/premium-photo/process-cooking-document-various-stages-food-preparation-kitchen_977107-1249.jpg?w=740'
        'Author : drakensang, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '4',
        '2023-05-13 10:30:00',
        'PenguinRandomHouse',
        'Explore Culinary Worlds: Penguin Random House Cookbook Collection',
        'Dive into a world of culinary delights with the Penguin Random House Cookbook Collection. Our curated selection of cookbooks spans diverse cuisines, culinary techniques, and skill levels. Our collection offers a treasure trove of recipes, tips, and inspiration. Discover the art of cooking through the eyes of renowned chefs and culinary experts. From mouthwatering desserts to savory main courses, each cookbook is a culinary journey waiting to be explored. Enhance your kitchen adventures with the Penguin Random House Cookbook Collection today!'
        4, -- userId PenguinRandomHouse
        'https://img.freepik.com/premium-photo/print-recipe-book-with-fresh-herbs-spices-wooden-background_176841-24644.jpg?w=1380'
        'Author : 8icons, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '5',
        '2023-07-10 11:30:00', 
        'CulinaryCrafts',
        'Essential Kitchen Gadgets: Must-Haves for Every Chef',
        'Explore the world of culinary craftsmanship with essential kitchen gadgets. CulinaryCrafts brings you a curated list of must-have tools to elevate your cooking experience. From high-quality knives to innovative cooking utensils, discover the key elements that every chef needs in their kitchen.'
        1, -- userId 
        'https://img.freepik.com/free-photo/healthy-cooking-modern-domestic-kitchen-indoors-generated-by-ai_24640-87927.jpg?t=st=1706874662~exp=1706878262~hmac=8bc6946595b31303b9031a48030ff431d83b5db801ad0126230508bc676cb619&w=1060'
        'Author : stockgiu, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '6',
        '2023-12-15 14:00:00', 
        'FlavorsOfWorld',
        'Culinary Journey Through International Cookbooks',
        'Embark on a flavorful journey with international cookbooks. FlavorsOfWorld presents a collection of cookbooks that transport you to different corners of the globe. From Italian pasta to Japanese sushi, explore diverse cuisines and bring culinary richness to your kitchen.'
        1, -- userId 
        'https://img.freepik.com/free-photo/full-table-italian-meals-ai-generated-image_511042-1707.jpg?t=st=1706875875~exp=1706879475~hmac=3b95110865e269353dee112227db0726c19ee2d31e98f0788d22dcdcfc24aa6f&w=1380'
        'Author : ojosujono, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '7',
        '2023-12-17 16:00:00', 
        'HomeDecorInspire',
        'Spruce Up Your Kitchen: Creative Decor Ideas',
        'Transform your kitchen into a stylish haven with creative decor ideas. HomeDecorInspire brings you tips on enhancing the aesthetics of your kitchen space. From vibrant wall art to functional storage solutions, discover ways to infuse personality and charm into your culinary haven.'
        1, -- userId 
        'https://img.freepik.com/free-photo/modern-kitchen-interior-design_23-2150772047.jpg?t=st=1706876107~exp=1706879707~hmac=0793fa78f9321f260c6b56b8dedd55f366471dedf860b4207e41ec203250ea5b&w=996'
        'Designed by Freepik',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    
    

    --  Blog review rating
INSERT INTO BLOG_REVIEW_RATING 
 (Review, Rating, UserID, BlogID) 
VALUE  
    ('This is very awesome',                                      5.0, '7', 1),
    ('The blog post is very descriptive and informative.',        5.0, '8', 1),
    ('I love this blog post!',                                    4.0, '9', 1),
    ('This blog is very useful',                                  3.0, '10', 1),
    ('The blog post is very descriptive and informative.',        5.0, '11', 1),
    ('I love this blog post!',                                    3.0, '12', 1),
    ('This is very awesome',                                      2.0, '7', 2),
    ('This blog post is incredibly insightful and well-written.', 5.0, '8', 2),
    ('I love this blog post!',                                    5.0, '9', 2),
    ('This is very awesome',                                      3.2, '10', 2),
    ('The blog post is very descriptive.',                        5.0, '11', 2),
    ('This is very informative',                                  3.2, '7', 3),
    ('The blog post is very descriptive and informative.',        5.0, '8', 3),
    ('I love this blog post!',                                    4.0, '9', 3),
    ('Highly recommended',                                        2.0, '10', 4),
    ('The blog post is very descriptive and informative.',        5.0, '11', 5),
    ('I love this blog post!',                                    4.0, '12', 6);
    ('The blog post is very descriptive and informative.',        5.0, '11', 7),
    ('I love this blog post!',                                    4.0, '12', 7);