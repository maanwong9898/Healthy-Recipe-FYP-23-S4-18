"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// router path: /registeredUser/educationalContent

// Called the controller to get the list of all "ACTIVE" educational content
// this is the simple mock data for blog post but a educational content should have more attributes
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
  {
    id: "8374625142",
    recipeTitle: "Lemon Garlic Herb Grilled Chicken Breast",
    publisher: "Isabella Martinez",
    category: "High-Protein",
    cooking_time: "20 Mins",
    number_of_servings: "4",
    description:
      "Juicy and flavorful grilled chicken breasts marinated in a zesty lemon, garlic, and herb marinade.",
    ingredients:
      "4 boneless, skinless chicken breasts\n\n" +
      "3 tablespoons olive oil\n\n" +
      "3 cloves garlic, minced\n\n" +
      "Zest and juice of 1 lemon\n\n" +
      "1 teaspoon dried oregano\n\n" +
      "1 teaspoon dried thyme\n\n" +
      "1 teaspoon dried rosemary\n\n" +
      "Salt and pepper to taste\n\n" +
      "Fresh parsley for garnish",
    instructions:
      "Step 1: In a bowl, whisk together olive oil, minced garlic, lemon zest, lemon juice, oregano, thyme, rosemary, salt, and pepper.\n\n" +
      "Step 2: Place chicken breasts in a resealable plastic bag or shallow dish. Pour the marinade over the chicken, ensuring it is well-coated. Marinate in the refrigerator for at least 30 minutes, or overnight for maximum flavor.\n\n" +
      "Step 3: Preheat the grill to medium-high heat. Remove chicken from the marinade and discard the marinade.\n\n" +
      "Step 4: Grill the chicken breasts for 6-7 minutes per side, or until fully cooked and grill marks appear.\n\n" +
      "Step 5: Garnish with fresh parsley and serve hot.",
    total_calories: "250",
    sugars: "10g",
    protein: "30g",
    carbs: "2g",
    fat: "13g",
    image_url:
      "https://img.freepik.com/free-photo/grilled-chicken-fillet-fresh-vegetable-salad-tomatoes-red-onion-arugula-chicken-meat-salad-healthy-food_2829-6940.jpg?w=1480&t=st=1702797358~exp=1702797958~hmac=d9a198ad2a062c3339bb75f426e548dc58b5ffc43fe42fb798a9c096590a941e",
    image_title: "Lemon Garlic Herb Grilled Chicken Breast",
    date_published: "2023-12-10",
    ratings: 3.4,
    reviews: 25,
    isActive: true,
  },
  {
    id: "1234512345",
    recipeTitle: "Grilled Salmon with Quinoa and Asparagus",
    publisher: "Daniel Carter",
    category: "High-Protein",
    cooking_time: "25 Mins",
    number_of_servings: "2",
    description:
      "A nutritious and delicious dish featuring grilled salmon, quinoa, and asparagus.",
    ingredients:
      "2 salmon fillets\n\n" +
      "1 cup quinoa, rinsed\n\n" +
      "2 cups water\n\n" +
      "1 bunch asparagus, trimmed\n\n" +
      "2 tablespoons olive oil\n\n" +
      "Juice of 1 lemon\n\n" +
      "Salt and pepper to taste\n\n" +
      "Fresh dill for garnish",
    instructions:
      "Step 1: Preheat the grill to medium-high heat.\n\n" +
      "Step 2: Season salmon fillets with salt, pepper, and a drizzle of olive oil. Grill for 4-5 minutes per side, or until cooked through.\n\n" +
      "Step 3: In a saucepan, combine quinoa and water. Bring to a boil, then reduce heat, cover, and simmer for 15 minutes, or until quinoa is cooked and water is absorbed.\n\n" +
      "Step 4: While quinoa is cooking, toss asparagus with olive oil, salt, and pepper. Grill for 3-4 minutes, or until tender-crisp.\n\n" +
      "Step 5: Assemble the dish by placing a bed of quinoa on each plate, topping with grilled salmon and asparagus.\n\n" +
      "Step 6: Drizzle with lemon juice, garnish with fresh dill, and serve hot.",
    total_calories: "450",
    sugars: "2g",
    protein: "40g",
    carbs: "30g",
    fat: "18g",
    image_url:
      "https://img.freepik.com/free-photo/baked-salmon-garnished-with-asparagus-tomatoes-with-herbs_2829-14481.jpg?w=1800&t=st=1702801194~exp=1702801794~hmac=3ccec1eb9e8014410d7d5a0f87530ae6909d6ed292f1ab0d6f0b26f6dcd1f22e",
    image_title: "Grilled Salmon with Quinoa and Asparagus",
    date_published: "2023-12-15",
    ratings: 4.8,
    reviews: 20,
    isActive: true,
  },
];

const RecipeOverviewPageForUser = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchRecipeFilter, setSearchRecipeFilter] = useState(false);
  const [dietFilter, setDietFilter] = useState("");
  const [cookingTimeFilter, setCookingTimeFilter] = useState("");
  const [mealTypeFilter, setMealTypeFilter] = useState("");
  const [nutritionFilter, setNutritionFilter] = useState("");

  const handleFilteredSearchRecipes = () => {
    setSearchRecipeFilter(!searchRecipeFilter);
  };

  const handleDietChange = (e) => {
    setDietFilter(e.target.value);
  };

  const handleCookingTimeChange = (e) => {
    setCookingTimeFilter(e.target.value);
  };

  const handleMealTypeChange = (e) => {
    setMealTypeFilter(e.target.value);
  };

  const handleNutritionChange = (e) => {
    setNutritionFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredRecipes = AllRecipesContent.filter(
    (post) =>
      post.isActive &&
      post.recipeTitle.toLowerCase().includes(searchQuery) &&
      (categoryFilter ? post.category === categoryFilter : true)
  );

  // Latest posts
  const latestPosts = [...AllRecipesContent]
    .filter((post) => post.isActive)
    .sort((a, b) => new Date(b.date_published) - new Date(a.date_published))
    .slice(0, 3);

  // Top rated posts
  const topRatedPosts = [...AllRecipesContent]
    .filter((post) => post.isActive)
    .sort((a, b) => b.ratings - a.ratings || b.reviews - a.reviews)
    .slice(0, 3);

  // Other posts excluding latest and top rated
  const highProteinCat = AllRecipesContent.filter(
    (post) => post.isActive && post.category === "High-Protein" // Add this condition
  );

  // this function is to view particular educational content under registered user
  const handleViewRecipes = (recipeTitle) => {
    // Make sure the recipeTitle
    console.log(`Recipe Title: ${recipeTitle}`);

    // Redirect to the correct route
    let routePath = `/registeredUser/recipes/viewRecipe/${recipeTitle}`;

    router.push(routePath);
  };

  // Filter the active recipes posts
  const activeRecipes = AllRecipesContent.filter((post) => post.isActive);

  // Function to render a single post card
  const renderPostCard = (post) => (
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
          onClick={() => handleViewRecipes(post.recipeTitle)}
          className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
        >
          Read more
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-extrabold font-mono text-cyan-800 mb-4 md:mb-8">
        Recipes
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-5">
        <div className="flex flex-row md:flex-row border-2 border-gray-300 rounded-lg mb-4 md:mb-0">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search recipes..."
            className="px-4 py-2 h-10 rounded-lg rounded-r-none text-base focus:outline-none"
          />
          <button
            // onClick={/* Function to handle search */}
            className="px-4 py-2 bg-cyan-600 text-white rounded-lg rounded-l-none hover:bg-cyan-700 focus:outline-none"
          >
            Search
          </button>
        </div>

        {/* fliter and sort function */}
        <div className="flex justify-end mt-4 md:mt-0 md:ml-4">
          <button
            onClick={handleFilteredSearchRecipes}
            className="px-4 py-2 bg-cyan-600 text-white rounded-lg ml-2 hover:bg-cyan-700 mr-4"
          >
            {searchRecipeFilter ? "Filter" : "Filter"}
          </button>

          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="border-2 border-gray-300 bg-white h-10 px-4 md:px-5 rounded-lg text-base focus:outline-none"
          >
            <option value="">Sort By</option>
            <option value="vegan">Latest</option>
            <option value="vegetarian">Oldest</option>
            <option value="pescatarian">Highest Rating</option>
          </select>
        </div>
      </div>

      {searchRecipeFilter && (
        <div className="flex ml-2">
          {/* DIET */}
          <select
            value={dietFilter}
            onChange={handleDietChange}
            className="border-2 border-gray-300 bg-white h-10 px-4 md:px-5 rounded-lg text-base mr-3"
          >
            <option value="">Dietary</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="vegan">Vegan</option>
            <option value="pescatarian">Pescatarian</option>
          </select>

          {/* Meal Type */}
          <select
            value={mealTypeFilter}
            onChange={handleMealTypeChange}
            className="border-2 border-gray-300 bg-white h-10 px-4 md:px-5 rounded-lg text-base mr-3"
          >
            <option value="">Meal Type</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>

          {/* COOKING TIME */}
          <select
            value={cookingTimeFilter}
            onChange={handleCookingTimeChange}
            className="border-2 border-gray-300 bg-white h-10 px-4 md:px-5 rounded-lg text-base mr-3"
          >
            <option value="">Cooking Time</option>
            <option value="under15Mins">Under 15 Mins</option>
            <option value="under30Mins">Under 30 Mins</option>
            <option value="over30Mins">Over 30 Mins</option>
            {/* Add more options as needed */}
          </select>

          {/* NUTRITION CONTENT */}
          <select
            value={cookingTimeFilter}
            onChange={handleCookingTimeChange}
            className="border-2 border-gray-300 bg-white h-10 px-4 md:px-5 rounded-lg text-base mr-3"
          >
            <option value="">Nutrition Content</option>
            <option value="weightLoss">Weight-Loss</option>
            <option value="highProtein">High-Protein</option>
            <option value="lowSodium">Low-Sodium</option>
          </select>
        </div>
      )}

      {filteredRecipes.length === 0 && (
        <p className="text-center font-semibold text-xl md:text-2xl mb-4 text-red-500">
          No results found{searchQuery && ` for "${searchQuery}"`}.
        </p>
      )}
      {/* Latest Posts Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 mt-4">Just For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {latestPosts.map((post) => renderPostCard(post))}
        </div>
      </div>
      {/* end of latest */}

      {/* Post with most review Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 mt-4">Most Popular Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topRatedPosts.map((post) => renderPostCard(post))}
        </div>
      </div>
      {/* end of most popular */}
      {/* Other Posts Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 mt-4">High Protein Recipes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highProteinCat.map((post) => renderPostCard(post))}
        </div>
      </div>
      {/* end of other */}
    </div>
  );
};

export default RecipeOverviewPageForUser;

// <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
//         {activeBlogPosts.map((post) => (
//           <div
//             key={post.id}
//             className="rounded shadow-lg overflow-hidden"
//             style={{
//               border: "0.5px solid transparent",
//               background:
//                 "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
//               backgroundOrigin: "border-box",
//               backgroundClip: "content-box, border-box",
//             }}
//           >
//             <div className="p-1.5 flex flex-col h-full">
//               <img
//                 src={post.image_url}
//                 alt={post.image_title}
//                 className="w-full object-cover rounded-sm"
//                 style={{ height: "192px" }} // Use inline style to set a fixed height for the image
//               />
//               <div className="p-4 flex-grow bg-white">
//                 <h2 className="text-2xl font-extrabold mb-2">
//                   {post.blogTitle}
//                 </h2>
//                 <p
//                   className="text-gray-700 text-base mb-4 line-clamp-3"
//                   style={{ height: "4.5rem" }}
//                 >
//                   {post.introduction}
//                 </p>
//                 <Link
//                   href={`/registeredUser/businessBlogPost/viewBusinessBlogPost/${blogPostTitle}`}
//                 >
//                   Read me
//                 </Link>
//                 <button
//                   onClick={() => handleViewEducationalContent(post.blogTitle)}
//                   className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black
//                     focus:ring-4 focus:outline-none focus:ring-blue-300
//                     dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5
//                     mr-7 text-center"
//                 >
//                   {" "}
//                   Read more
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
