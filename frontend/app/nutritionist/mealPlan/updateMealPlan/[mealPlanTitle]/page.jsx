"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";

// this is to update particucular meal plan under dietitian
// router path: /dietitian/mealPlan/updateMealPlan/[mealPlanTitle]

const mockRecipes = [
  // Vegetarian Recipes
  {
    id: 1,
    name: "Caprese Salad with Pesto Sauce",
    category: "Vegetarian",
    restriction: "Milk",
  },
  {
    id: 2,
    name: "Vegetarian Lasagna",
    category: "Vegetarian",
    restriction: "Egg",
  },
  {
    id: 3,
    name: "Mushroom Stroganoff",
    category: "Vegetarian",
    restriction: "Soy",
  },
  {
    id: 4,
    name: "Spinach and Cheese Stuffed Shells",
    category: "Vegetarian",
    restriction: "Egg",
  },

  // Vegan Recipes
  {
    id: 5,
    name: "Vegan Black Bean Burgers",
    category: "Vegan",
    restriction: "Gluten",
  },
  {
    id: 6,
    name: "Vegan Thai Green Curry",
    category: "Vegan",
    restriction: "Egg",
  },
  {
    id: 7,
    name: "Vegan Lentil Soup",
    category: "Vegan",
    restriction: "Tree Nut",
  },
  {
    id: 8,
    name: "Chickpea Avocado Salad",
    category: "Vegan",
    restriction: "Peanut",
  },

  // Any Diet Recipes
  {
    id: 9,
    name: "Keto Zucchini Noodles",
    category: "Any diet",
    restriction: "Fish",
  },
  {
    id: 10,
    name: "Keto Cauliflower Pizza",
    category: "Any diet",
    restriction: "Shellfish",
  },
];

const mockMealPlan = {
  id: "7890123456",
  mealPlanTitle:
    "Wholesome Slimming: Balanced Vegetarian Meals for Weight Loss",
  publisher: "Alex Johnson",
  dietaryPreference: "Vegetarian",
  dietaryRestriction: "Gluten",
  healthGoal_category: "Weight Loss",
  introduction:
    "Embark on a transformative journey with 'Healthy Transformation: Weight Loss Journey'. This meticulously designed meal plan is your ally in achieving sustainable weight loss, ensuring you get all the essential nutrients without compromising on taste. Each meal is crafted to boost metabolism, reduce caloric intake, and increase satiety, guiding you towards a healthier lifestyle with every bite. Start your journey today towards a fitter, happier you with meals that are as delicious as they are nourishing.",
  main_content:
    "Dive into a culinary adventure that aligns with your weight loss goals. This plan features 'Spinach and Egg Scramble', a breakfast rich in protein and iron, setting a strong, energized tone for the day. For lunch, the 'Grilled Salmon Salad' offers a perfect blend of omega-3 fatty acids and fiber, promoting heart health and aiding digestion. Dinner is a delightful 'Chicken and Veggie Stir-Fry', packed with lean protein and a rainbow of vegetables, ensuring a balance of nutrients while keeping calories in check. Each recipe is thoughtfully selected to provide maximum nutritional benefits, aiding in weight loss while ensuring you feel full and satisfied.",
  conclusion:
    "With 'Healthy Transformation', embrace a world where diet food is no longer bland and boring. Discover the joy of eating meals that are bursting with flavor, carefully balanced to support your weight loss journey. As you progress through this plan, you'll not only shed pounds but also gain a deeper appreciation for wholesome, healthy eating. Celebrate your journey towards a vibrant, healthier lifestyle, one delicious meal at a time.",
  image_url:
    "https://img.freepik.com/free-photo/eat-clean-get-lean-healthy-wellness_53876-121408.jpg?w=900&t=st=1702821053~exp=1702821653~hmac=7a27ab79dd52e59b3b7737513f9954e1df1eb57910a9c1fde108a033fb9549ca",
  image_title: "Weight Loss Meal Plan",
  date_published: "2023-04-15",
  ratings: 4.8,
  reviews: 32,
  isActive: true,
  recipes: [
    {
      id: 101,
      name: "Spinach and Egg Scramble",
      image_url:
        "https://img.freepik.com/free-photo/top-view-delicious-salad-with-fresh-vegetables-dark-surface_140725-75202.jpg?w=826&t=st=1702819580~exp=1702820180~hmac=2e7ec0d93dd32d110dc003085f16921daa4c3b2aedb2f9261bf53da1168fa82a",
      category: "Weight Loss",
      description: "A protein-rich start to your day with spinach and eggs.",
      calories: 200,
      fat: 12,
      protein: 25,
      carbs: 30,
      sugar: 10,
    },
    {
      id: 102,
      name: "Grilled Salmon Salad",
      image_url:
        "https://img.freepik.com/free-photo/top-view-healthy-dish-with-wooden-background_23-2148381275.jpg?w=826&t=st=1702819711~exp=1702820311~hmac=5ace12252453179c18d9b20469d4a21829f60be168552a359d77fd254480e9ec",
      category: "Weight Loss",
      description: "Fresh and flavorful salad with omega-rich grilled salmon.",
      calories: 350,
      fat: 12,
      protein: 25,
      carbs: 30,
      sugar: 10,
    },
    {
      id: 103,
      name: "Chicken and Veggie Stir-Fry",
      image_url:
        "https://img.freepik.com/free-photo/cooked-vegetables_181624-1340.jpg?w=360&t=st=1702819827~exp=1702820427~hmac=5d37c6426a1bb64657a26f9a20c7007f713a135a89fdaf994527d828a77db387",
      category: "Weight Loss",
      description:
        "A quick and healthy stir-fry loaded with lean chicken and vegetables.",
      calories: 350,
      fat: 12,
      protein: 25,
      carbs: 30,
      sugar: 10,
    },
  ],
};

const healthGoalCategory = [
  {
    category: "Weight Gain",
  },
  {
    category: "Maintain Health",
  },
  {
    category: "Weight Loss",
  },
];

// Slugify utility function
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

const UpdateMealPlanPage = ({ params }) => {
  const [mealPlan, setMealPlan] = useState(mockMealPlan);

  // States for the form fields
  const [title, setTitle] = useState(mockMealPlan.mealPlanTitle);
  const [publisher, setPublisher] = useState(mockMealPlan.publisher);
  const [category, setCategory] = useState(mockMealPlan.healthGoal_category);
  const [introduction, setIntroduction] = useState(mockMealPlan.introduction);
  const [mainContent, setMainContent] = useState(mockMealPlan.main_content);
  const [conclusion, setConclusion] = useState(mockMealPlan.conclusion);
  const [imageUrl, setImageUrl] = useState(mockMealPlan.image_url);
  const [imageTitle, setImageTitle] = useState(mockMealPlan.image_title);
  const [error, setError] = useState("");

  // New states for selected recipes, category, and restriction
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRestriction, setSelectedRestriction] = useState("");

  // Handlers for category and restriction selection (from CreateMealPlanPage)
  const handleCategorySelection = (e) => {
    setSelectedCategory(e.target.value);
  };
  const handleRestrictionSelection = (e) => {
    setSelectedRestriction(e.target.value);
  };

  // Function to filter recipes (from CreateMealPlanPage)
  const filteredRecipes = useMemo(() => {
    return mockRecipes.filter(
      (recipe) =>
        (selectedCategory === "" || recipe.category === selectedCategory) &&
        (selectedRestriction === "" ||
          recipe.restriction === selectedRestriction)
    );
  }, [selectedCategory, selectedRestriction]);

  // Function to handle recipe selection (from CreateMealPlanPage)
  const handleRecipeSelection = (recipeId) => {
    setSelectedRecipes((prevSelectedRecipes) => {
      if (prevSelectedRecipes.includes(recipeId)) {
        return prevSelectedRecipes.filter((id) => id !== recipeId);
      } else {
        return [...prevSelectedRecipes, recipeId];
      }
    });
  };

  // this is to prevent unexpected error when title contains space
  // Decode params from URL
  const decodedParams = decodeURIComponent(params.mealPlanTitle);

  // Slugify the decoded params
  const slugFromParams = slugify(decodedParams);

  // Slugify the blog title
  const slugifiedMealPlanTitle = slugify(mockMealPlan.mealPlanTitle);

  // Compare the slugs
  const isMatchingTitle = slugFromParams === slugifiedMealPlanTitle;

  if (!isMatchingTitle) {
    // Handle the mismatch here
    console.error(
      "The meal plan title from the URL does not match the title of the mock data."
    );
  } else {
    console.log(
      "The meal plan title from the URL matches the title of the mock data."
    );
  }
  //end of checking whitespace in title

  const currentRecipeSection = () => (
    <div className="flex flex-col">
      <h2 className="text-xl font-bold mb-4">Current Recipes in Meal Plan:</h2>
      <ul>
        {mealPlan.recipes.map((recipe) => (
          <li key={recipe.id} className="mb-2">
            <div className="flex items-center bg-white p-2 border rounded">
              <span className="flex-1">{recipe.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="bg-cyan-900 min-h-screen flex flex-col justify-center px-6 lg:px-8">
      <div
        className="mt-16 mb-16 mx-auto bg-slate-100 rounded-lg shadow"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <div className="p-4 space-y-4 md:space-y-12">
          <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
            <h1 className="text-xl font-bold mb-6 leading-tight tracking-tight text-black md:text-2xl">
              Update Meal Plan
            </h1>
            <form className="space-y-3">
              {/* TITLE */}
              <div className="flex flex-col">
                <label
                  htmlFor="title"
                  className="text-xl font-medium text-black mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* PUBLISHER */}
              <div className="flex flex-col">
                <label
                  htmlFor="publisher"
                  className="text-xl font-medium text-black mb-2"
                >
                  Publisher
                </label>
                <input
                  type="text"
                  name="publisher"
                  id="publisher"
                  placeholder="Publisher"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>

              {/* Dietary Preference */}
              <div className="flex flex-col">
                <label
                  htmlFor="dietaryPreference"
                  className="text-xl font-medium text-black mb-2"
                >
                  Dietary Preference Category
                </label>
                <input
                  type="text"
                  id="dietaryPreference"
                  name="dietaryPreference"
                  value={mealPlan.dietaryPreference}
                  onChange={(e) =>
                    setMealPlan({
                      ...mealPlan,
                      dietaryPreference: e.target.value,
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>

              {/* Dietary Restriction */}
              <div className="flex flex-col">
                <label
                  htmlFor="dietaryRestriction"
                  className="text-xl font-medium text-black mb-2"
                >
                  Dietary Restriction Category
                </label>
                <input
                  type="text"
                  id="dietaryRestriction"
                  name="dietaryRestriction"
                  value={mealPlan.dietaryRestriction}
                  onChange={(e) =>
                    setMealPlan({
                      ...mealPlan,
                      dietaryRestriction: e.target.value,
                    })
                  }
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* CATEGORY DROPDOWN */}
              <div className="flex flex-col">
                <label
                  htmlFor="healthGoalCategory"
                  className="text-xl font-medium text-black mb-2"
                >
                  Health Goal Category
                </label>
                <select
                  id="healthGoalCategory"
                  name="healthGoalCategory"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Select a category</option>
                  {healthGoalCategory.map((cat, index) => (
                    <option key={index} value={cat.category}>
                      {cat.category}
                    </option>
                  ))}
                </select>
              </div>
              {currentRecipeSection()}
              {/* INTRODUCTION */}
              <div className="flex flex-col">
                <label
                  htmlFor="introduction"
                  className="text-xl font-medium text-black mb-2"
                >
                  Introduction
                </label>
                <textarea
                  name="introduction"
                  id="introduction"
                  placeholder="Introduction"
                  value={introduction}
                  onChange={(e) => setIntroduction(e.target.value)}
                  rows={4} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* MAIN CONTENT */}
              <div className="flex flex-col">
                <label
                  htmlFor="mainContent"
                  className="text-xl font-medium text-black mb-2"
                >
                  Main Content
                </label>
                <textarea
                  name="mainContent"
                  id="mainContent"
                  placeholder="Main Content"
                  value={mainContent}
                  onChange={(e) => setMainContent(e.target.value)}
                  rows={7} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* CONCLUSION */}
              <div className="flex flex-col">
                <label
                  htmlFor="conclusion"
                  className="text-xl font-medium text-black mb-2"
                >
                  Conclusion
                </label>
                <textarea
                  name="conclusion"
                  id="conclusion"
                  placeholder="Conclusion"
                  value={conclusion}
                  onChange={(e) => setConclusion(e.target.value)}
                  rows={4} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* IMAGE URL */}
              <div className="flex flex-col">
                <label
                  htmlFor="imageUrl"
                  className="text-xl font-medium text-black mb-2"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  placeholder="Image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* IMAGE TITLE */}
              <div className="flex flex-col">
                <label
                  htmlFor="imageTitle"
                  className="text-xl font-medium text-black mb-2"
                >
                  Image Title
                </label>
                <input
                  type="text"
                  name="imageTitle"
                  id="imageTitle"
                  placeholder="Image Title"
                  value={imageTitle}
                  onChange={(e) => setImageTitle(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* ERROR MESSAGE */}
              {error && <p className="text-red-500">{error}</p>}
              {/* SUBMIT BUTTON */}
              <div className="flex flex-row space-x-5">
                <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg">
                  <Link href="/dietitian/mealPlan">Cancel</Link>
                </button>
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMealPlanPage;
