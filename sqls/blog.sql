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
        'Philips',  -- Publisher
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
        'Unleash your inner chef with exceptional range of kitchenware from IKEA. Elevate your culinary space with stylish and functional tools designed to make cooking a joy. Quality Cookware: IKEA offers a diverse collection of cookware crafted with quality materials. From durable pots and pans to precision kitchen utensils, each piece is designed to enhance your cooking experience. Organize with Style: Transform your kitchen into an organized haven with storage solutions. Trendy Tableware: Serve your culinary creations with flair using trendy tableware from IKEA. From elegant dinner sets to vibrant serving dishes, discover tableware that complements your personal style. Affordable Luxury: Enjoy luxury without the hefty price tag. Our kitchenware combines affordability with sophistication, allowing you to create a stylish and functional kitchen on any budget. Explore the IKEA Kitchenware Collection today and redefine your culinary space.',
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
        'Embark on a culinary journey with extensive collection of cookbooks from OpenTrolley. Whether you are a seasoned chef or a kitchen novice, discover inspiration and expertise within the pages of these culinary treasures. Diverse Culinary Genres: OpenTrolley brings you a diverse range of cookbooks covering various cuisines, dietary preferences, and cooking skill levels. From international flavors to healthy living, find the perfect cookbook to suit your culinary interests. \nExpert Tips and Techniques: Enhance your cooking skills with expert tips and techniques shared by renowned chefs and culinary experts. OpenTrolley cookbooks offer a wealth of knowledge, making every recipe a learning experience. Specialized Dietary Choices: Explore cookbooks catering to specialized dietary choices, including vegetarian, vegan, gluten-free, and more. OpenTrolley ensures that everyone can enjoy the pleasure of cooking, regardless of dietary restrictions. \nCurated Collections: Discover curated collections of cookbooks that take you on thematic journeys, from baking extravaganzas to quick and easy weeknight dinners. OpenTrolley makes it easy to find cookbooks that align with your specific culinary interests. The Joy of Gifting: Share the joy of cooking by gifting OpenTrolley cookbooks to friends and family. Explore the world of culinary literature with OpenTrolley Cookbooks and elevate your kitchen adventures.',
        3, -- userId OpenTrolley
        'https://img.freepik.com/premium-photo/process-cooking-document-various-stages-food-preparation-kitchen_977107-1249.jpg?w=740',
        'Author : drakensang, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '4',
        '2023-05-13 10:30:00',
        'PenguinRandomHouse',
        'Explore Culinary Worlds: Penguin Random House Cookbook Collection',
        'Dive into a world of culinary delights with the Penguin Random House Cookbook Collection. Our curated selection of cookbooks spans diverse cuisines, culinary techniques, and skill levels. Our collection offers a treasure trove of recipes, tips, and inspiration. Discover the art of cooking through the eyes of renowned chefs and culinary experts. From mouthwatering desserts to savory main courses, each cookbook is a culinary journey waiting to be explored. Enhance your kitchen adventures with the Penguin Random House Cookbook Collection today!',
        4, -- userId PenguinRandomHouse
        'https://img.freepik.com/premium-photo/print-recipe-book-with-fresh-herbs-spices-wooden-background_176841-24644.jpg?w=1380',
        'Author : 8icons, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '5',
        '2023-07-10 11:30:00', 
        'CulinaryCrafts',
        'Essential Kitchen Gadgets: Must-Haves for Every Chef',
        'Explore the world of culinary craftsmanship with essential kitchen gadgets. CulinaryCrafts brings you a curated list of must-have tools to elevate your cooking experience. From high-quality knives to innovative cooking utensils, discover the key elements that every chef needs in their kitchen.',
        1, -- userId 
        'https://img.freepik.com/free-photo/healthy-cooking-modern-domestic-kitchen-indoors-generated-by-ai_24640-87927.jpg?t=st=1706874662~exp=1706878262~hmac=8bc6946595b31303b9031a48030ff431d83b5db801ad0126230508bc676cb619&w=1060',
        'Author : stockgiu, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '6',
        '2023-12-15 14:00:00', 
        'FlavorsOfWorld',
        'Culinary Journey Through International Cookbooks',
        'Embark on a flavorful journey with international cookbooks. FlavorsOfWorld presents a collection of cookbooks that transport you to different corners of the globe. From Italian pasta to Japanese sushi, explore diverse cuisines and bring culinary richness to your kitchen.',
        1, -- userId 
        'https://img.freepik.com/free-photo/full-table-italian-meals-ai-generated-image_511042-1707.jpg?t=st=1706875875~exp=1706879475~hmac=3b95110865e269353dee112227db0726c19ee2d31e98f0788d22dcdcfc24aa6f&w=1380',
        'Author : ojosujono, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '7',
        '2023-12-17 16:00:00', 
        'HomeDecorInspire',
        'Spruce Up Your Kitchen: Creative Decor Ideas',
        'Transform your kitchen into a stylish haven with creative decor ideas. HomeDecorInspire brings you tips on enhancing the aesthetics of your kitchen space. From vibrant wall art to functional storage solutions, discover ways to infuse personality and charm into your culinary haven.',
        1, -- userId 
        'https://img.freepik.com/free-photo/modern-kitchen-interior-design_23-2150772047.jpg?t=st=1706876107~exp=1706879707~hmac=0793fa78f9321f260c6b56b8dedd55f366471dedf860b4207e41ec203250ea5b&w=996',
        'Designed by Freepik',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    (
        '8',
        '2023-12-18 16:00:00', 
        'ModernChef',
        'Smart Kitchen Appliances: Embracing Technology in the Culinary Space',
        'Discover the future of cooking with smart kitchen appliances. ModernChef introduces you to innovative gadgets that leverage technology to simplify your culinary endeavors. From smart ovens to connected blenders, explore how the modern kitchen is evolving with cutting-edge technology.',
        1, -- userId 
        'https://img.freepik.com/free-photo/close-up-smartphone-with-kitchen-control_23-2148994128.jpg?w=996&t=st=1706988254~exp=1706988854~hmac=bb68f2552d7ce6deeb01503dad58129ee295910a4820d83f073bb2b7f16bc86f',
        'Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '9',
        '2022-12-18 16:00:00', 
        'HealthyEats',
        'Nourishing Recipes for a Healthy Lifestyle: A Cookbook Review',
        'Explore a collection of nourishing recipes designed for a healthy lifestyle. HealthyEats reviews a cookbook filled with delicious and nutritious dishes that promote overall well-being. From plant-based meals to wholesome desserts, discover the art of cooking for a healthier you.',
        1, -- userId 
        'https://www.freepik.com/free-photo/top-view-empty-menu-with-tomatoes-salad_7770971.htm#query=recipe%20cookbook&position=3&from_view=search&track=ais&uuid=932c26a4-5ecb-403c-a356-e81943a1b733',
        'Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '10',
        '2023-04-18 20:00:00', 
        'HomeGardenVibes',
        'Herb Gardening 101: Tips for Growing Fresh Herbs at Home',
        'Transform your kitchen with a DIY herb garden and infuse fresh, aromatic flavors into your dishes. HomeGardenVibes provides a guide on creating a simple yet vibrant herb garden right in your home. Learn about the best herbs for indoor gardening, tips for care and maintenance, and creative ways to incorporate homegrown herbs into your favorite',
        1, -- userId 
        'https://img.freepik.com/premium-vector/watercolkor-background-with-culinary-herbs-plants_154848-268.jpg?w=996',
        'Author: user6633193, Designed by Freepik',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    (
        '11',
        '2023-06-18 21:00:00', 
        'CulinaryArtistry',
        'Artisanal Kitchenware: Elevate Your Cooking with Handcrafted Tools',
        'Immerse yourself in the world of artisanal kitchenware. CulinaryArtistry explores the beauty of handcrafted tools that bring a touch of craftsmanship to your culinary space. From hand-forged knives to bespoke utensils, discover how artisanal kitchenware combines functionality with exquisite craftsmanship.',
        1, -- userId 
        'https://www.freepik.com/free-photo/human-hand-cutting-mushroom-making-delicious-pasta-wooden-surface_4165862.htm#query=handcrafted%20kitchen%20knives&position=19&from_view=search&track=ais&uuid=42585427-0fd6-4c52-bbc1-9880b2538694',
        'Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '12',
        '2023-06-19 21:00:00', 
        'ChefEssentials',
        'Professional Culinary Tools: A Guide for Aspiring Chefs',
        'Embark on a culinary journey with ChefEssentials as we unveil the essential tools for aspiring chefs. From high-quality chef knives to precision measuring instruments, explore the professional culinary tools that every kitchen should have for achieving perfection in your culinary creations.',
        1, -- userId 
        'https://www.freepik.com/free-photo/front-view-gray-platten-with-big-knife-dark-blue-background-color-photo-sharp-blue-sea-food-kitchen-desk_13061154.htm#query=kitchen%20knives%20and%20measuring%20equipments&position=42&from_view=search&track=ais&uuid=b65f9b16-99c8-4cb1-b7b3-a45522feccca',
        'Author: mdjaff, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '13',
        '2023-08-19 21:00:00', 
        'GlobalFlavorss',
        'Culinary Adventures Across Continents: A Cookbook Showcase',
        'Join GlobalFlavors on a culinary adventure as we showcase a collection of cookbooks that take you on a journey across continents. From spicy dishes of Asia to hearty meals of Europe, explore diverse flavors and expand your cooking repertoire with these delightful culinary treasures.',
        1, -- userId 
        'https://img.freepik.com/free-photo/top-view-notepad-white-plate-green-tomato-black-pepper-bowl-wooden-spoons-garlic-broccoli-mint-leaves-grey-table_140725-145666.jpg?w=996&t=st=1707023966~exp=1707024566~hmac=3b117a6b06320db35cdb78f3de40f95f597b9739efdddee941f4301251cc956c',
        'Author: KamranAydinov, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '14',
        '2023-08-19 21:00:00', 
        'CulinaryChronicles',
        'Unveiling Culinary Tales: Must-Read Cookbooks for Food Enthusiasts',
        'Join CulinaryChronicles as we unveil captivating culinary tales through must-read cookbooks. Whether you are a seasoned food enthusiast or a novice in the kitchen, these storytelling cookbooks offer a delightful blend of recipes and narratives, making your culinary journey truly memorable.',
        1, -- userId 
        'https://img.freepik.com/free-vector/slicing-tomato-salad_53876-6911.jpg?w=740&t=st=1707024271~exp=1707024871~hmac=b8ae518fd67c49083e87b9cf841a84f3c519aff436869d799df1c0ece289431a',
        'Author: rawpixel.com, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '15',
        '2023-08-19 22:00:00', 
        'KitchenVibes',
        'Unconventional Kitchen Hacks: Elevate Your Culinary Experience',
        'Dive into the world of KitchenVibes as we share unconventional kitchen hacks to elevate your culinary experience. Discover creative ways to repurpose common kitchen tools, explore time-saving cooking techniques, and embrace innovative solutions for common kitchen challenges. Transform your cooking space into a hub of creativity with these unique and practical kitchen miscellanea!',
        1, -- userId 
        'https://img.freepik.com/premium-vector/kitchen-shelves-with-cooking-tools-set-kitchen-utensils-vector-illustration_263366-27.jpg?w=740',
        'Author: kuryanovichtatsiana, Designed by Freepik',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    (
        '16',
        '2023-08-20 22:00:00', 
        'KitchenEssentials',
        'Essential Tools for Every Kitchen: A Comprehensive Guide',
        'Explore comprehensive guide to essential tools for every kitchen. From versatile knives to efficient gadgets, make your cooking endeavors seamless and enjoyable.',
        1, -- userId 
        'https://img.freepik.com/free-photo/set-kitchen-knifes-table_1373-48.jpg?w=1060&t=st=1707050562~exp=1707051162~hmac=8337310a8d68dba07ddb3cdb979db8ed1044cb269ce64cdc190cd71389060d53',
        'Author: aopsan, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '17',
        '2023-03-20 22:00:00', 
        'FlavorfulReads',
        'Culinary Adventures in Literature: Must-Read Cookbooks',
        'Embark on culinary adventures with FlavorfulReads as we recommend must-read cookbooks that blend the art of cooking with the joy of literature. From fictional feasts to culinary memoirs, these books will ignite your passion for both reading and cooking.',
        1, -- userId 
        'https://img.freepik.com/free-vector/fresh-cook_1042-280.jpg?w=826&t=st=1707050845~exp=1707051445~hmac=4a640647c7d665194274e0846038f9552917187af680efb0e885309a6b8cd0e6',
        'Author: elsystudio, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '18',
        '2023-03-20 22:00:00', 
        'KitchenInnovations',
        'Innovative Kitchen Gadgets: Enhance Your Culinary Journey',  -- Title
        'Discover the latest in kitchen innovations with KitchenInnovations. From smart appliances to ingenious gadgets, we unveil a world of innovative tools that can enhance your culinary journey and simplify your time in the kitchen.',
        1, -- userId 
        'https://img.freepik.com/free-photo/smart-application-tablet-placed-kitchen-desk-empty-house-automation-system-turning-l_482257-2841.jpg?w=1380&t=st=1707051079~exp=1707051679~hmac=58c3b4770cab439b1d9d178bc75fb86cc8b1046197329323ad7e32ebe06cef1d',
        'Author: DC Studio, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '19',
        '2024-02-05 22:00:00', 
        'ChicCookware',
        'Elevate Your Style: Chic Cookware for Modern Kitchens', -- Title
        'ChicCookware presents a collection of stylish cookware designed to elevate the aesthetic of modern kitchens. From sleek pots and pans to elegant utensils, explore how these chic additions can transform your cooking space into a fashionable culinary haven.',
        1, -- userId 
        'https://img.freepik.com/free-vector/kitchen-tools-with-vegetables_1284-11446.jpg?w=740&t=st=1707051276~exp=1707051876~hmac=521599198dc8ab629ecdc87c53a785e4dc592bca78d6868e92f3cf2ae71e30a7',
        'Author: Macrovector, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '20',
        '2024-02-07 11:00:00', 
        'CulinaryEscape',
        'Global Flavors on Your Shelf: Explore International Cookbooks', -- Title
        'Join CulinaryEscape on a journey to explore international flavors through carefully curated cookbooks. From Asian delicacies to European classics, these cookbooks bring global culinary experiences to your kitchen, allowing you to create diverse and delicious meals at home.',
        1, -- userId 
        'https://img.freepik.com/free-photo/rustic-wood-tray-holds-gourmet-appetizers-indoors-generated-by-ai_188544-13380.jpg?w=1060&t=st=1707051497~exp=1707052097~hmac=2ff8b109775d45a9b8dc416c76d89b1bcded9b1f1ffc87ce7d343aecff6a26d7',
        'Author: Vecstock, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '21',
        '2024-02-07 11:00:00', 
        'WellnessWonders',
        'Holistic Wellness: Integrating Mind, Body, and Kitchen', -- Title
        'Embark on a journey of holistic wellness with WellnessWonders. Explore the connection between mind, body, and kitchen as we delve into mindful cooking practices, nourishing recipes, and wellness tips to enhance your overall well-being.',
        1, -- userId 
        'https://img.freepik.com/free-vector/woman-cooking-with-red-tomatoes_24877-76629.jpg?w=740&t=st=1707062080~exp=1707062680~hmac=f54fdf09690a5b27806681003d230a0647fb926e948bdeb23a17b2fa6afd1c18',
        'Author: studiogstock, Designed by Freepik',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    (
        '22',
        '2024-02-07 11:00:00', 
        'EcoCuisine',
        'Sustainable Kitchenware: Embracing Eco-Friendly Culinary Tools', -- Title
        'Join EcoCuisine in the journey towards sustainability. Discover a range of eco-friendly kitchenware designed to minimize environmental impact. From bamboo utensils to recycled materials, explore how sustainable choices in the kitchen can contribute to a greener lifestyle.',
        1, -- userId 
        'https://img.freepik.com/free-photo/top-view-wooden-spoons-collection_23-2148677992.jpg?w=1380&t=st=1707062250~exp=1707062850~hmac=0efe6151c7dcbcd5f7e12cc16d8ad8cb612dbd90b3e26b202ebe00a2249e99b4',
        'Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ),
    (
        '23',
        '2024-01-07 11:00:00', 
        'FlavorsOfCulture',
        'Culinary Passport: Exploring Diverse Flavors in Cookbooks', -- Title
        'Take a culinary journey with FlavorsOfCulture as we explore cookbooks that act as passports to diverse flavors. From regional cuisines to international fusion, these cookbooks offer a taste of cultural diversity, allowing you to bring global flavors to your home kitchen.',
        1, -- userId 
        'https://img.freepik.com/premium-photo/sweet-globe-manipulation-background-with-cupcakes-representing-global-desserts-culture_674594-5287.jpg?w=1060',
        'Author: 3DdarkZone, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),
    (
        '24',
        '2023-01-07 11:00:00', 
        'CulinaryCreativity',
        'Unleashing Creativity in the Kitchen: Beyond Recipes', -- Title
        'Join CulinaryCreativity in unlocking the art of culinary expression. Explore creative approaches in the kitchen beyond traditional recipes, from food styling to personalized presentations. Unleash your inner chef and transform your kitchen into a canvas of culinary creativity.',
        1, -- userId 
        'https://img.freepik.com/free-photo/empty-modern-room-with-furniture_23-2149178335.jpg?w=996&t=st=1707062629~exp=1707063229~hmac=b54ee25c22ba4233aba420adaee025d945457cc8f242884cdf093b3267f42b44',
        'Designed by Freepik',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),
    (
        '25',
        '2023-07-07 11:00:00', 
        'ModernCulinarySpaces',
        'Contemporary Kitchenware: Blending Style and Functionality', -- Title
        'Explore the fusion of style and functionality with ModernCulinarySpaces. Dive into a world of contemporary kitchenware that not only enhances your cooking experience but also elevates the aesthetics of your culinary space. Discover the perfect blend of modern design and practical utility.',
        1, -- userId 
        'https://img.freepik.com/free-vector/bon-appetit-seamless-background-pattern-with-scattered-ingredients-kitchen-utensils-making-italian-ravioli-pasta-square-format-suitable-wallpaper-wrapping-paper-fabric_1284-44086.jpg?w=740&t=st=1707062743~exp=1707063343~hmac=7c803cf6fbff4ff14301668112c4d89f4e6f7782e935437899406dac7dba904c',
        'Author: macrovector, Designed by Freepik',  -- img_title
        2 -- blog_type_id kitchenware
    ), 
    (
        '26',
        '2023-07-07 11:00:00', 
        'KitchenInnovator',
        'Smart Kitchen Gadgets: Revolutionizing Culinary Experiences', -- Title
        'Join KitchenInnovator on a journey through the latest smart kitchen gadgets. Explore how technology is revolutionizing culinary experiences with innovative tools and appliances. From smart ovens to connected utensils, discover the future of cooking in your modern kitchen.',
        1, -- userId 
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Jason Briscoe, Designed by Unsplash',  -- img_title
        2 -- blog_type_id kitchenware
    ), 
    (
        '27',
        '2023-07-08 11:00:00', 
        'CulinaryExplorer',
        'Global Flavors on Your Bookshelf: Must-Have Cookbooks', -- Title
        'Embark on a global culinary adventure with CulinaryExplorer. Discover a curated list of must-have cookbooks that bring diverse flavors from around the world to your kitchen. From traditional recipes to contemporary twists, these cookbooks are essential for any culinary enthusiast.',
        1, -- userId 
        'https://img.freepik.com/free-vector/recipe-book-concept-illustration_114360-7481.jpg?t=st=1707117163~exp=1707117763~hmac=a4ef94243efe98bf41b6be4cb3e62e8838307defe8cd28c31982e3f28b952862',
        'Author: storyset, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),   
    (
        '28',
        '2023-07-08 11:00:00', 
        'HomeHarmony',
        'Creating a Cozy Kitchen Ambiance: Simple Tips and Tricks', -- Title
        'Transform your kitchen into a cozy haven with HomeHarmony. Explore simple tips and tricks to enhance the ambiance of your culinary space. From lighting and decor to organizing essentials, discover how small changes can create a warm and inviting atmosphere in your home kitchen.',
        1, -- userId 
        'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Aaron Huber, Designed by Unsplash',  -- img_title
        3 -- blog_type_id Miscellaneous
    ),   
    (
        '29',
        '2023-06-08 11:00:00', 
        'CulinaryCraftsmanship',
        'Handcrafted Kitchenware: Elevating Culinary Artistry', -- Title
        'Discover the artistry of handcrafted kitchenware with CulinaryCraftsmanship. Explore a collection of meticulously crafted utensils, cookware, and accessories designed to elevate your culinary skills. From artisanal knives to handmade pottery, embrace the beauty of craftsmanship in your kitchen.',
        1, -- userId 
        'https://img.freepik.com/free-photo/front-view-wooden-spoons-with-pots-cinnamon-dark-wall-color-seasoning-salt-food-cutlery-photo_179666-17650.jpg?w=996&t=st=1707118058~exp=1707118658~hmac=2cd943d07f3472b01d4132be6ebb2be74cbdca3548003a079eeb1a02732603ec',
        'Author: mdjaff, Designed by Freepik',  -- img_title
         2 -- blog_type_id kitchenware
    ),    
    (
        '30',
        '2023-03-08 11:00:00', 
        'CulinaryCreatures',
        'Whimsical Cookbooks for Culinary Adventures with Kids', -- Title
        'Embark on whimsical culinary adventures with CulinaryCreatures. Explore a collection of cookbooks designed for young chefs, filled with playful recipes and creative kitchen activities. From edible art projects to delightful desserts, bring joy and creativity to your family kitchen.',
        1, -- userId 
        'https://images.unsplash.com/photo-1612031736184-77bc60f94c06?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Mike Gattorna, Designed by Unsplash',  -- img_title
        1 -- blog_type_id cookbook
    ),   
    (
        '31',
        '2023-03-08 12:00:00', 
        'HealthFoodie',
        'Healthy Meal Prep Cookbook', -- Title
        'Dive into the world of meal prepping with our cookbook featuring nutritious and easy-to-make recipes. Simplify your meal planning and enjoy delicious, homemade meals every day.',
        1, -- userId 
        'https://images.unsplash.com/photo-1495546968767-f0573cca821e?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Dan Gold, Designed by Unsplash',  -- img_title
        1 -- blog_type_id cookbook
    ),  
    (
        '32',
        '2023-02-08 12:00:00', 
        'WorldCuisine',
        'Global Flavors: International Cuisine Cookbook', -- Title
        'Embark on a culinary journey around the world with our cookbook featuring diverse and authentic recipes from various cultures. Experience the rich flavors and aromas of international cuisine from the comfort of your kitchen.',
        1, -- userId 
        'https://img.freepik.com/free-vector/poster-with-world-food-day-concept-design-advertise-leaflet-watercolor_83728-4276.jpg?w=740&t=st=1707225167~exp=1707225767~hmac=82a4842360eccbcb4bea0973dbeca1278a609ab612ff9708cd12fe81d3f204df',
        'Author: photographeeasia, Designed by Freepik',  -- img_title
        1 -- blog_type_id cookbook
    ),  
    (
        '33',
        '2023-02-08 12:00:00', 
        'ChefEssentials',
        'Essential Kitchen Gadgets for Home Chefs', -- Title
        'Upgrade your kitchen with our selection of smart appliances designed to make cooking and meal preparation easier than ever. From WiFi-enabled ovens to smart refrigerators, revolutionize your kitchen today!',
        1, -- userId 
        'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Lotus Design N Print, Designed by Unsplash',  -- img_title
        2 -- blog_type_id kitchenware
    ),  
    (
        '34',
        '2023-02-08 12:00:00', 
        'KitchenGizmos',
        'Cutting-Edge Kitchen Tools for Modern Homes', -- Title
        'Discover the latest cutting-edge kitchen tools and gadgets designed to revolutionize your cooking experience. From smart appliances to innovative utensils, equip your kitchen with the best.',
        1, -- userId 
        'https://images.unsplash.com/photo-1512914890251-2f96a9b0bbe2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Frames For Your Heart, Designed by Unsplash',  -- img_title
        2 -- blog_type_id kitchenware
    ), 
    (
        '35',
        '2023-02-07 12:00:00', 
        'HomeAndBeyond',
        'Organize Your Kitchen: Tips for a Clutter-Free Space', -- Title
        'Transform your kitchen into a organized haven with these practical tips. From efficient storage solutions to decluttering strategies, create a space that inspires creativity and makes every cooking experience a joy.',
        1, -- userId 
        'https://images.unsplash.com/photo-1556910096-6f5e72db6803?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Edgar Castrejon, Designed by Unsplash',  -- img_title
         3 -- blog_type_id Miscellaneous
    ),
    ( 
        '36'
        '2023-04-20 10:00:00',
        'KitchenAdventures',
        '10 Creative Ways to Use Leftover Ingredients',
        'Reduce food waste and get creative in the kitchen with these 10 ideas for using leftover ingredients. From homemade stocks to inventive salads, make the most out of every ingredient!',
        1, -- userId 
        'https://img.freepik.com/free-photo/salad-from-tomatoes-cucumber-red-onions-lettuce-leaves-healthy-summer-vitamin-menu-vegan-vegetable-food-vegetarian-dinner-table_2829-6473.jpg?w=996&t=st=1707225891~exp=1707226491~hmac=5c8bc78a72585f98fc92d5ee1264eec2896c502277c9e9311c6e2e12808de4ce',
        'Author: timolina, Designed by Freepik',
        3 -- blog_type_id for miscellaneous                                                                                                                                                       
    ),
    ( 
        '37'
        '2023-04-20 10:00:00',
        'TastyTreats',
        'Quick & Easy Weeknight Dinners Cookbook',
        'Simplify your weeknight meals with our collection of quick and easy dinner recipes. From one-pan wonders to simple stir-fries, discover delicious meals that can be whipped up in no time.',
        1, -- userId 
        'https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Pablo Merchán Montes, Designed by Unsplash',
        1 -- blog_type_id cookbook                                                                                                                                                      
    ),
    ( 
        '38'
        '2023-04-21 10:00:00',
        'HealthyEats',
        'Plant-Based Cooking: A Beginner Guide',
        'Discover the world of plant-based cooking with our guide. Learn how to create flavorful and nutritious meals using fruits, vegetables, grains, and legumes.',
        1, -- userId 
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Anna Pelzer, Designed by Unsplash',
        1 -- blog_type_id cookbook                                                                                                                                                      
    ),
    ( 
        '39'
        '2023-05-21 10:00:00',
        'ChefCreations',
        'Scrumptious Seafood Recipes for Summer Gatherings',
        'Impress your guests with our collection of scrumptious seafood recipes perfect for summer gatherings. From grilled shrimp skewers to refreshing ceviche, elevate your outdoor dining experience with these delicious dishes!',
        1, -- userId 
        'https://plus.unsplash.com/premium_photo-1693222065169-e447289b609d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'Author: Karolina Grabowska, Designed by Unsplash',
        1 -- blog_type_id cookbook                                                                                                                                                      
    ),
    ( 
        '40'
        '2023-05-21 10:00:00',
        'KitchenKorner',
        'Upgrade Your Culinary Space with Modern Kitchen Gadgets',
        'Transform your kitchen into a modern culinary haven with our selection of innovative kitchen gadgets. From smart sous vide machines to high-speed blenders, discover the latest tools to enhance your cooking experience!',
        1, -- userId 
        'https://img.freepik.com/free-photo/metal-food-blender-close-up-with-fresh-exotic-tropic-fruits-it-kitchen-background-with-empty-space-blender-wooden-table-kitchen_639032-170.jpg?w=996&t=st=1707227020~exp=1707227620~hmac=a29ec81d2222ff77fc36eb36b3c0f3e1af9c530c0b94daac0e3abf4bc83ae10b',
        'Author: YuliiaKa, Designed by Freepik',
        2 -- blog_type_id kitchenware                                                                                                                                                    
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
    ('I love this blog post!',                                    4.0, '12', 6),
    ('The blog post is very descriptive and informative.',        5.0, '11', 7),
    ('I love this blog post!',                                    4.0, '12', 7),
    ('The blog post is very descriptive and informative.',        5.0, '11', 8),
    ('I love this blog post!',                                    5.0, '12', 9),
    ('The blog post is very descriptive and informative.',        5.0, '11', 10),
    ('I love this blog post!',                                    5.0, '12', 11),
    ('This is very awesome',                                      5.0, '7', 12),
    ('The blog post is very descriptive and informative.',        5.0, '8', 13),
    ('I love this blog post!',                                    4.0, '9', 14),
    ('This blog is very useful',                                  5.0, '10', 15),
    ('I love this blog post!',                                    5.0, '12', 16),
    ('This is very awesome',                                      5.0, '7', 17),
    ('The blog post is very descriptive and informative.',        5.0, '8', 18),
    ('I love this blog post!',                                    4.0, '9', 19),
    ('This blog is very useful',                                  5.0, '10', 20),
    ('I love this blog post!',                                    5.0, '12', 21),
    ('This is very awesome',                                      5.0, '7', 22),
    ('The blog post is very descriptive and informative.',        5.0, '8', 23),
    ('I love this blog post!',                                    4.0, '9', 24),
    ('This blog is very useful',                                  5.0, '10', 25),
    ('I love this blog post!',                                    5.0, '12', 26),
    ('This is very awesome',                                      5.0, '7', 27),
    ('The blog post is very descriptive and informative.',        5.0, '8', 28),
    ('I love this blog post!',                                    4.0, '9', 29),
    ('This blog is very useful',                                  5.0, '10', 30),
    ('I love this blog post!',                                    5.0, '12', 31),
    ('This is very awesome',                                      5.0, '7', 32),
    ('The blog post is very descriptive and informative.',        5.0, '8', 33),
    ('I love this blog post!',                                    4.0, '9', 34),
    ('This blog is very useful',                                  5.0, '10', 35),
    ('I love this blog post!',                                    5.0, '12', 36),
    ('This is very awesome',                                      5.0, '7', 37),
    ('The blog post is very descriptive and informative.',        5.0, '8', 38),
    ('I love this blog post!',                                    4.0, '9', 39),
    ('This blog is very useful',                                  5.0, '10', 40);