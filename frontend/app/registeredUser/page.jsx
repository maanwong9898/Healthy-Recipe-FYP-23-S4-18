"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

// RECIPE CONTENT
const AllRecipesContent = [
  {
    id: "1234567890",
    recipeTitle: "Black Bean Quesadillas",
    publisher: "Jessica Smith",
    category: "Vegetarian",
    cooking_time: "15 Mins",
    number_of_servings: "4",
    description:
      "Our 'Essential Tools for the Modern Chef' guide is the definitive resource for equipping your culinary workspace with the best kitchen gadgets and utensils.",
    ingredients:
      "1 (15 ounce) can black beans rinsed and drained \n\n" +
      "1/2 cup shredded Monterey Jack cheese \n\n" +
      "1/2 cup prepared fresh salsa (see Tip), divided" +
      "4 8-inch whole-wheat tortillas" +
      "2 teaspoons canola oil, divided" +
      "1 ripe avocado, diced",
    instructions:
      "Step 1: Combine beans, cheese and 1/4 cup salsa in a medium bowl. Place tortillas on a work surface. Spread 1/2 cup filling on half of each tortilla. Fold tortillas in half, pressing gently to flatten. \n\n" +
      "Step 2: Heat 1 teaspoon oil in a large nonstick skillet over medium heat. Add 2 quesadillas and cook, turning once, until golden on both sides, 2 to 4 minutes total. Transfer to a cutting board and tent with foil to keep warm. Repeat with the remaining 1 teaspoon oil and quesadillas. Serve the quesadillas with avocado and the remaining salsa.",
    total_calories: "300g",
    sugar: "2g",
    protien: "10g",
    fat: "5g",
    carbs: "20g",
    image_url:
      "https://img.freepik.com/free-photo/lavash-stuffed-with-meat-roasted_114579-1767.jpg?w=1480&t=st=1702795934~exp=1702796534~hmac=ab42006c4dee22b75a00928f8a00c970dd0bd3cc2f6a96a4131f504aac9b0013",
    image_title: "Black Bean Quesadillas",
    date_published: "2023-09-20",
    ratings: 4.5,
    reviews: 33,
    isActive: true,
  },
  {
    id: "9876543210",
    recipeTitle: "Mango and Avocado Quinoa Salad",
    publisher: "Emily Johnson",
    category: "Vegetarian",
    cooking_time: "20 Mins",
    number_of_servings: "4",
    description:
      "A refreshing quinoa salad with the sweetness of mango, creaminess of avocado, and a zesty lime dressing.",
    ingredients:
      "1 cup cooked quinoa, cooled \n\n" +
      "1 ripe mango, diced \n\n" +
      "1 avocado, diced \n\n" +
      "1/4 cup chopped fresh cilantro \n\n" +
      "1/4 cup chopped red onion \n\n" +
      "Juice of 2 limes \n\n" +
      "2 tablespoons olive oil \n\n" +
      "Salt and pepper to taste",
    instructions:
      "Step 1: In a large bowl, combine quinoa, mango, avocado, cilantro, and red onion. \n\n" +
      "Step 2: In a small bowl, whisk together lime juice, olive oil, salt, and pepper. \n\n" +
      "Step 3: Pour dressing over quinoa mixture and toss gently to combine. Serve immediately.",
    total_calories: "280g",
    sugars: "8g",
    protien: "7g",
    fat: "10g",
    carbs: "40g",
    image_url:
      "https://img.freepik.com/free-photo/grilled-chicken-with-vegetable-pomegranate-fruits-salad-plate_74190-753.jpg?w=740&t=st=1702794617~exp=1702795217~hmac=6f9fa984507a1fc6962b17057be69ec78ef8f1faaf04765258d585a0cfebf6b9",
    image_title: "Mango and Avocado Quinoa Salad",
    date_published: "2023-09-28",
    ratings: 4.8,
    reviews: 23,
    isActive: true,
  },
  {
    id: "2468101214",
    recipeTitle: "Shrimp Cauliflower Fried Rice",
    publisher: "Alexandra Lee",
    category: "Any Diet",
    cooking_time: "25 Mins",
    number_of_servings: "4",
    description:
      "A light and flavorful dish featuring succulent shrimp and cauliflower rice, perfect for a healthy and satisfying meal.",
    ingredients:
      "1 lb medium shrimp, peeled and deveined\n\n" +
      "1 head cauliflower, grated or riced\n\n" +
      "2 tablespoons olive oil\n\n" +
      "3 cloves garlic, minced\n\n" +
      "1 cup cherry tomatoes, halved\n\n" +
      "1/2 cup green peas\n\n" +
      "1 teaspoon paprika\n\n" +
      "Salt and pepper to taste\n\n" +
      "Fresh parsley for garnish",
    instructions:
      "Step 1: In a large skillet, heat olive oil over medium heat. Add minced garlic and sauté until fragrant.\n\n" +
      "Step 2: Add shrimp to the skillet and cook until pink and opaque. Remove shrimp from the skillet and set aside.\n\n" +
      "Step 3: In the same skillet, add riced cauliflower, cherry tomatoes, and green peas. Sauté until vegetables are tender.\n\n" +
      "Step 4: Season the mixture with paprika, salt, and pepper. Stir well to combine.\n\n" +
      "Step 5: Add the cooked shrimp back to the skillet and toss everything together until heated through.\n\n" +
      "Step 6: Garnish with fresh parsley and serve hot.",
    total_calories: "280",
    sugars: "4g",
    protein: "25g",
    fat: "12g",
    carbs: "18g",
    image_url:
      "https://delightfulemade.com/wp-content/uploads/2019/08/Cauliflower-Shrimp-Fried-Rice-Cauliflower-Fried-Rice-Recipe-vert8-480x480.jpg",
    image_title: "Shrimp Cauliflower Rice",
    date_published: "2023-11-05",
    ratings: 4.7,
    reviews: 22,
    isActive: true,
  },
];

// MEAL PLAN CONTENT
const AllMealPLan = [
  {
    id: "1234567890",
    mealPlanTitle:
      "Wholesome Slimming: Balanced Vegetarian Meals for Weight Loss",
    date_published: "2021-10-01",
    image_url:
      "https://img.freepik.com/free-photo/meal-planning-notepad-food-composition_23-2149099820.jpg?w=826&t=st=1702872342~exp=1702872942~hmac=6ae3572ab02e9eec7aaf4e50c601c93cae848e494ac5b951cce2e39baba488af",
    image_title: "Meal Plan",
    introduction:
      "Welcome to 'Wholesome Slimming', your ultimate companion for weight loss! This meal plan is crafted with love, featuring a medley of recipes that celebrate the unique flavors and ingredients each season has to offer. From the fresh blossoms of spring to the hearty harvest of autumn, we invite you to embark on a gastronomic journey through the year. Get ready to explore dishes that will not only nourish the body but also delight the senses.",
    ratings: 4,
    reviews: 10,
    isActive: true,
  },
  {
    id: "2163969761",
    mealPlanTitle: "3-Day Vegan Kickstart: Energizing Meal Plan",
    date_published: "2022-05-20",
    image_url:
      "https://img.freepik.com/free-photo/vegetarian-buddha-bowl-with-fresh-vegetable-salad-chickpea_1150-42359.jpg?w=826&t=st=1702872465~exp=1702873065~hmac=b3d188c7e7cf055d98e23a233a61e67f0498ca9d2f9111d16d37f8f949bbe598",
    image_title: "Meal Plan",
    introduction:
      "Welcome to '3-Day Vegan Kickstart', your ultimate companion for weight loss! This meal plan is crafted with love, featuring a medley of recipes that celebrate the unique flavors and ingredients each season has to offer. From the fresh blossoms of spring to the hearty harvest of autumn, we invite you to embark on a gastronomic journey through the year. Get ready to explore dishes that will not only nourish the body but also delight the senses.",
    ratings: 4,
    reviews: 14,
    isActive: true,
  },
  {
    id: "2217913265",
    mealPlanTitle: "Plant-Based Cleanse for Weight Loss",
    date_published: "2022-07-11",
    image_url:
      "https://img.freepik.com/free-photo/delicious-salmon-bowls-table-arrangement_23-2150427654.jpg?w=826&t=st=1702873329~exp=1702873929~hmac=9f1ab4442187d579f9b67a3528bafd2a289418b59c1580bbec10b96d8b3497e1",
    image_title: "Meal Plan",
    introduction:
      "Welcome to 'Plant-Based Cleanse', your ultimate companion for weight loss! This meal plan is crafted with love, featuring a medley of recipes that celebrate the unique flavors and ingredients each season has to offer. From the fresh blossoms of spring to the hearty harvest of autumn, we invite you to embark on a gastronomic journey through the year. Get ready to explore dishes that will not only nourish the body but also delight the senses.",
    ratings: 4,
    reviews: 22,
    isActive: true,
  },
];

// BLOG POST CONTENT
const AllBusinessBlogPosts = [
  {
    id: "1234567890",
    blogTitle: "Seasonal Savors: A Cookbook for Every Time of the Year",
    publisher: "Michael Lim",
    category: "Cookbook",
    introduction:
      "Welcome to 'Seasonal Savors', your ultimate companion for year-round culinary adventures! This cookbook is crafted with love, featuring a medley of recipes that celebrate the unique flavors and ingredients each season has to offer. From the fresh blossoms of spring to the hearty harvest of autumn, we invite you to embark on a gastronomic journey through the year. Get ready to explore dishes that will not only nourish the body but also delight the senses.",
    main_content:
      "Our journey begins with the rejuvenating tastes of spring, introducing dishes like 'Spring Pea Risotto' and 'Lemon Herb Chicken'. As we bask in the summer sun, we'll dive into refreshing 'Watermelon Gazpacho' and 'Grilled Peach Salad'. The crisp air of fall calls for 'Pumpkin Spice Soup' and 'Roasted Root Vegetables', while winter comforts with 'Hearty Beef Stew' and 'Decadent Chocolate Peppermint Cake'. Each recipe is accompanied by tips on sourcing the best seasonal produce and pairing your meals with appropriate wines and beverages.",
    conclusion:
      "As the year closes, we hope 'Seasonal Savors' has inspired you to embrace the beauty of seasonal cooking. The recipes provided are more than just instructions; they are a canvas for creativity and a chance to forge memorable moments with loved ones. So, cherish the flavors each season brings and let your kitchen be a place of discovery all year long.",

    image_url:
      "https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_1280.jpg",
    image_title: "Recipe Book",
    date_published: "2021-10-01",
    ratings: 4,
    reviews: 10,
    isActive: true,
  },
  {
    id: "2163969761",
    blogTitle: "Savor the Flavor: A Guide to World Cuisines",
    publisher: "Michael Lim",
    category: "Cookbook",
    introduction:
      "Explore the rich tapestry of global flavors with our latest cookbook release.",
    main_content:
      "Our cookbook offers a journey through the world's kitchens, with easy-to-follow recipes.",
    conclusion:
      "Bring the world to your table with dishes curated by renowned chefs.",
    image_url:
      "https://img.freepik.com/free-photo/special-dessert-cookbook-recipe-valentine-rsquo-s-edition_53876-97350.jpg?w=826&t=st=1702618495~exp=1702619095~hmac=aa4f3570b7822dcc93aa132ff6ba09298167def3a905fb3bca9119c16a6c379b",
    image_title: "Cookbook",
    date_published: "2023-03-25",
    ratings: 5,
    reviews: 89,
    isActive: true,
  },
  {
    id: "2217913265",
    blogTitle: "The Chef's Choice: Top Utensils for Your Kitchen",
    publisher: "Emily Clarke",
    category: "Kitchenware",
    introduction:
      "Discover the essential utensils that every aspiring chef needs in their kitchen.",
    main_content:
      "From versatile knives to ergonomic pans, find out what tools are worth the investment.",
    conclusion:
      "Upgrade your cooking game with our selection of top-rated kitchen utensils.",
    image_url:
      "https://img.freepik.com/free-photo/top-view-wooden-sapoons-empty-plastic-coffee-pot-dark-surface_140725-94278.jpg?w=826&t=st=1702618440~exp=1702619040~hmac=765026606e4839d19a27e3edc0d34f9884e3d0bef24d8de1e5a5cc2e33888bb0",
    image_title: "Kitchen Utensils",
    date_published: "2023-05-16",
    ratings: 4,
    reviews: 78,
    isActive: true,
  },
];

// EDUCATIONAL CONTENT
const AllEducationalContent = [
  {
    id: "3456789012",
    blogTitle: "Living Well: Daily Practices for a Vibrant Life",
    publisher: "Jordan Smith",
    category: "Healthy Lifestyle",
    introduction:
      "Welcome to 'Living Well: Daily Practices for a Vibrant Life', a comprehensive guide to enhancing your daily routine for optimal health and happiness. This book is your ally in building a lifestyle that fosters physical, mental, and emotional well-being.",
    main_content:
      "Explore chapters like 'Morning Yoga Routines', 'Mindful Meditation Techniques', 'Balanced Diet Plans', and 'Effective Exercise Regimens'. Each section provides practical advice, easy-to-follow activities, and motivational insights to help you create a balanced and enriching lifestyle.",
    conclusion:
      "'Living Well' is more than a guide; it's a companion in your journey towards holistic well-being. By integrating these practices into your daily life, you'll discover a deeper sense of vitality, clarity, and joy. Embrace the path to a vibrant life, one day at a time.",
    image_url:
      "https://img.freepik.com/free-photo/close-up-kid-meditating-mat_23-2149101612.jpg?w=826&t=st=1702698008~exp=1702698608~hmac=3493459a84121109aad5dd0837dbd50ad85e685e28eb107942118ebb3c13189f",
    image_title: "Healthy Lifestyle",
    date_published: "2023-03-22",
    ratings: 4.7,
    reviews: 45,
    isActive: true,
  },
  {
    id: "1234567890",
    blogTitle: "Eating Right: A Journey Through Nutritious Foods",
    publisher: "Emily Robinson",
    category: "Healthy Eating",
    introduction:
      "Welcome to 'Eating Right: A Journey Through Nutritious Foods', where we delve into the world of healthy eating. This guide is designed to help you understand the importance of nutrition and make informed food choices.",
    main_content:
      "Covers topics like 'Understanding Food Labels', 'Benefits of Organic Produce', 'Plant-Based Diet Essentials', and 'Hydration and Health'. Filled with informative content, simple recipes, and healthy eating habits tips.",
    conclusion:
      "'Eating Right' is your guide to transforming your diet and embracing a healthier way of eating. It’s a tool for nourishing your body and mind with the right foods.",
    image_url:
      "https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=826&t=st=1702787109~exp=1702787709~hmac=73a45a1e35f274ca836fc803f6aa7a47776024868c99c455d67649ef44e4d9ef",
    image_title: "Healthy Eating",
    date_published: "2023-05-15",
    ratings: 4.8,
    reviews: 68,
    isActive: true,
  },
  {
    id: "2345678901",
    blogTitle: "The Art of Mindful Eating",
    publisher: "Lucas Nguyen",
    category: "Healthy Lifestyle",
    introduction:
      "Welcome to 'The Art of Mindful Eating', a guide to transforming your relationship with food through mindfulness and understanding of your body’s needs.",
    main_content:
      "Topics include 'Mindfulness Techniques for Eating', 'Understanding Hunger and Fullness Cues', 'Managing Emotional Eating', and 'Creating a Balanced Meal Plan'.",
    conclusion:
      "More than a dietary guide, it's a pathway to developing a deeper connection with food and yourself, encouraging a harmonious relationship with eating.",
    image_url:
      "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=826&t=st=1702787315~exp=1702787915~hmac=e63a3ab97681618a6ab4413af72a46ee7be44e6fe202b6bf636e471ec0faa50d",
    image_title: "Mindful Eating",
    date_published: "2023-06-10",
    ratings: 4.9,
    reviews: 52,
    isActive: true,
  },
];

const RegisteredUserHomepage = () => {
  const router = useRouter();
  const [educationContent, setEducationContent] = useState(
    AllEducationalContent
  );

  const latestRecipes = [...AllRecipesContent]
    .filter((post) => post.isActive)
    .sort((a, b) => b.ratings - a.ratings || b.reviews - a.reviews)
    .slice(0, 3);

  const latestMealPlans = [...AllMealPLan]
    .filter((post) => post.isActive)
    .sort((a, b) => new Date(b.date_published) - new Date(a.date_published))
    .slice(0, 3);

  const latestBlogPosts = [...AllBusinessBlogPosts]
    .filter((post) => post.isActive)
    .sort((a, b) => new Date(b.date_published) - new Date(a.date_published))
    .slice(0, 3);

  // Function to render Recipe a single post card
  const renderRecipePostCard = (post) => (
    <div
      key={post.id}
      className="rounded shadow-lg overflow-hidden flex flex-col"
      style={{
        border: "0.5px solid transparent",
        background:
          "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
    >
      <img
        src={post.image_url}
        alt={post.image_title}
        className="w-full object-cover rounded-sm"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div>
          <h2 className="text-2xl font-extrabold mb-2">{post.recipeTitle}</h2>
          <p
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            {post.description}
          </p>
        </div>
        <button
          //onClick={() => handleViewRecipes(post.recipeTitle)}
          className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
        >
          Read more
        </button>
      </div>
    </div>
  );

  // Render Meal Plan a single post card
  const renderMealPlanPostCard = (mealPlan) => (
    <div
      key={mealPlan.id}
      className="rounded shadow-lg overflow-hidden flex flex-col"
      style={{
        border: "0.5px solid transparent",
        background:
          "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
    >
      <img
        src={mealPlan.image_url}
        alt={mealPlan.image_title}
        className="w-full object-cover rounded-sm"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div>
          <h2 className="text-2xl font-extrabold mb-2">
            {mealPlan.mealPlanTitle}
          </h2>
          <p
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            {mealPlan.introduction}
          </p>
        </div>
        <button
          //onClick={() => handleViewMealPlan(mealPlan.mealPlanTitle)}
          className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
        >
          Read more
        </button>
      </div>
    </div>
  );

  //RENDER BLOG POSTS
  const renderBlogPostCard = (blogPost) => (
    <div
      key={blogPost.id}
      className="rounded shadow-lg overflow-hidden flex flex-col"
      style={{
        border: "0.5px solid transparent",
        background:
          "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
    >
      <img
        src={blogPost.image_url}
        alt={blogPost.image_title}
        className="w-full object-cover rounded-sm"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div>
          <h2 className="text-2xl font-extrabold mb-2">{blogPost.blogTitle}</h2>
          <p
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            {blogPost.introduction}
          </p>
        </div>
        <button
          //onClick={() => handleViewBlogPost(blogPost.blogTitle)}
          className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
        >
          Read more
        </button>
      </div>
    </div>
  );

  //RENDER EDUCATIONAL CONTENT
  const renderEducationalPostCard = (educationalPost) => (
    <div
      key={educationalPost.id}
      className="rounded shadow-lg overflow-hidden flex flex-col"
      style={{
        border: "0.5px solid transparent",
        background:
          "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
    >
      <img
        src={educationalPost.image_url}
        alt={educationalPost.image_title}
        className="w-full object-cover rounded-sm"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div>
          <h2 className="text-2xl font-extrabold mb-2">
            {educationalPost.blogTitle}
          </h2>
          <p
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            {educationalPost.introduction}
          </p>
        </div>
        <button
          // onClick={() =>
          //   handleViewEducationalContent(educationalPost.blogTitle)
          // }
          className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
        >
          Read more
        </button>
      </div>
    </div>
  );

  return (
    <div>
      {/* Display Recipes */}
      <div>
        <div className="mt-8 p-5">
          <h2 className="text-4xl font-extrabold mb-4 mt-4 text-cyan-800">
            Most Popular Recipes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {latestRecipes.map((post) => renderRecipePostCard(post))}
          </div>
        </div>
      </div>
      {/* end of displaying recipe */}

      {/* Latest Meal Plans Section */}
      <div className="mt-5 p-5">
        <h2 className="text-4xl font-extrabold mb-4 mt-4 text-cyan-800">
          Latest Meal Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {latestMealPlans.map((mealPlan) => renderMealPlanPostCard(mealPlan))}
        </div>
      </div>
      {/* end of meal plan */}

      {/* Business Blog Post Section */}
      <div className="mt-5 p-5">
        <h2 className="text-4xl font-extrabold mb-4 mt-4 text-cyan-800">
          Business Blog Post
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {latestBlogPosts.map((blogPost) => renderBlogPostCard(blogPost))}
        </div>
      </div>
      {/* end of blog post */}
      {/* Educational Content Section */}
      <div className="mt-5 p-5">
        <h2 className="text-4xl font-extrabold mb-4 mt-4 text-cyan-800">
          Educational Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {educationContent.map((educationalPost) =>
            renderEducationalPostCard(educationalPost)
          )}
        </div>
      </div>
      {/* end of education content*/}
    </div>
  );
};

export default RegisteredUserHomepage;
