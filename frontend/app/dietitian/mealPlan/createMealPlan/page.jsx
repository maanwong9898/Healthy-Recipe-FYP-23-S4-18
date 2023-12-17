"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect, useMemo } from "react";
import Link from "next/link";

// router path: /dietitian/mealPlan/createMealPlan
// this is the page to create a meal plan

const mockMealPlanCategory = [
  {
    category: "Weight Loss",
  },
  {
    category: "Low Carb",
  },
  {
    category: "Balanced Meal",
  },
];

const mockRecipes = [
  // Vegetarian Recipes
  {
    id: 1,
    name: "Caprese Salad with Pesto Sauce",
    category: "Vegetarian",
    restriction: "Nut-free",
  },
  {
    id: 2,
    name: "Vegetarian Lasagna",
    category: "Vegetarian",
    restriction: "Dairy-free",
  },
  {
    id: 3,
    name: "Mushroom Stroganoff",
    category: "Vegetarian",
    restriction: "Gluten-free",
  },
  {
    id: 4,
    name: "Spinach and Cheese Stuffed Shells",
    category: "Vegetarian",
    restriction: "Egg-free",
  },

  // Vegan Recipes
  {
    id: 5,
    name: "Vegan Black Bean Burgers",
    category: "Vegan",
    restriction: "Gluten-free",
  },
  {
    id: 6,
    name: "Vegan Thai Green Curry",
    category: "Vegan",
    restriction: "Soy-free",
  },
  {
    id: 7,
    name: "Vegan Lentil Soup",
    category: "Vegan",
    restriction: "Nut-free",
  },
  {
    id: 8,
    name: "Chickpea Avocado Salad",
    category: "Vegan",
    restriction: "Grain-free",
  },

  // Any Diet Recipes
  {
    id: 9,
    name: "Keto Zucchini Noodles",
    category: "Any diet",
    restriction: "Dairy-free",
  },
  {
    id: 10,
    name: "Keto Cauliflower Pizza",
    category: "Any diet",
    restriction: "Gluten-free",
  },
];

const CreateMealPlanPage = () => {
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [category, setCategory] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [mainContent, setMainContent] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [recipeSelectError, setRecipeSelectError] = useState("");
  const [error, setError] = useState("");
  // New state for selected recipes
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  // New state for selected recipe category
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRestriction, setSelectedRestriction] = useState("");

  useEffect(() => {
    // Access localStorage after component mounts and is on the client-side
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setPublisher(storedUsername);
    }
  }, []);

  // Function to handle recipe category selection
  const handleCategorySelection = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Function to handle dietary restriction selection
  const handleRestrictionSelection = (e) => {
    setSelectedRestriction(e.target.value);
  };

  // Function to filter recipes based on selected category and restriction
  const filteredRecipes = useMemo(() => {
    return mockRecipes.filter(
      (recipe) =>
        (selectedCategory === "" || recipe.category === selectedCategory) &&
        (selectedRestriction === "" ||
          recipe.restriction === selectedRestriction)
    );
  }, [selectedCategory, selectedRestriction]);

  // Function to handle recipe selection
  const handleRecipeSelection = (recipeId) => {
    setSelectedRecipes((prevSelectedRecipes) => {
      if (prevSelectedRecipes.includes(recipeId)) {
        return prevSelectedRecipes.filter((id) => id !== recipeId);
      } else {
        if (prevSelectedRecipes.length < 3) {
          return [...prevSelectedRecipes, recipeId];
        } else {
          // Optionally, set an error message to inform the user that they can't select more than 3 recipes
          setRecipeSelectError("You can select a maximum of 3 recipes.");
          return prevSelectedRecipes;
        }
      }
    });
  };

  const recipeSelectionSection = (recipesToShow) => {
    return (
      <div className="flex flex-col">
        <span className="block text-xl mb-1 font-bold text-cyan-950">
          Suggested Recipes:
        </span>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipesToShow.map((recipe) => (
            <label key={recipe.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="recipes"
                value={recipe.id}
                onChange={() => handleRecipeSelection(recipe.id)}
                checked={selectedRecipes.includes(recipe.id)}
                className="form-checkbox h-5 w-5 text-gray-600"
              />
              <span className="text-gray-900 font-medium">{recipe.name}</span>
            </label>
          ))}
        </div>
      </div>
    );
  };

  // The JSX for recipe category selection
  const recipeCategorySelectionSection = (
    <div className="flex flex-col">
      <label
        htmlFor="recipeCategory"
        className="block text-xl mb-1 font-bold text-cyan-950"
      >
        Dietary Preferences Category:
      </label>
      <select
        id="recipeCategory"
        name="recipeCategory"
        value={selectedCategory}
        onChange={handleCategorySelection}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Select a category</option>
        {/* Unique categories from mockRecipes */}
        {Array.from(new Set(mockRecipes.map((recipe) => recipe.category))).map(
          (category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          )
        )}
      </select>
    </div>
  );

  // The JSX for dietary restriction selection
  const restrictionSelectionSection = (
    <div className="flex flex-col">
      <label
        htmlFor="dietaryRestriction"
        className="block text-xl mb-1 font-bold text-cyan-950"
      >
        Dietary Restriction Category:
      </label>
      <select
        id="dietaryRestriction"
        name="dietaryRestriction"
        value={selectedRestriction}
        onChange={handleRestrictionSelection}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="">Select a restriction</option>
        {/* Unique restrictions from mockRecipes */}
        {Array.from(
          new Set(mockRecipes.map((recipe) => recipe.restriction))
        ).map((restriction, index) => (
          <option key={index} value={restriction}>
            {restriction}
          </option>
        ))}
      </select>
    </div>
  );

  // Function to handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCreateMealPlan = (event) => {
    event.preventDefault();

    // Constructing the meal plan data
    const mealPlanData = {
      title,
      publisher,
      category,
      introduction,
      mainContent,
      conclusion,
      imageUrl,
      imageTitle,
      selectedRecipes, // Include the selected recipes here
    };

    // Log the meal plan data to check if selected recipes are included
    console.log("Meal Plan Details:", mealPlanData);

    // Here you would typically send this data to your backend server or process it as needed

    // Reset fields and error after submission
    setTitle("");
    setPublisher("");
    setCategory("");
    setIntroduction("");
    setMainContent("");
    setConclusion("");
    setImageUrl("");
    setImageTitle("");
    setRecipeSelectError("");
    setError("");
    setSelectedRecipes([]); // Reset the selected recipes as well
  };

  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  return (
    <div className="bg-cyan-900 min-h-screen flex flex-col justify-center px-6 lg:px-8">
      {/* Adjust the max-width and width in the inline style */}
      <div
        className="mt-16 mb-16 mx-auto bg-cyan-600 rounded-lg shadow"
        style={{ maxWidth: "600px", width: "100%" }} // Increase maxWidth and set width to 100%
      >
        {" "}
        {/* Smaller maxWidth */}
        <div className="p-4 space-y-4 md:space-y-12 ">
          <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
            <h1 className="text-xl font-bold mb-6 leading-tight tracking-tight text-black md:text-2xl">
              Create Meal Plan
            </h1>
            <form className="space-y-3">
              {/* TITLE */}
              <label
                htmlFor="title"
                className="block text-xl mb-1 font-bold text-cyan-950"
              >
                Title:
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Enter title here"
                  value={title}
                  onChange={clearErrorOnChange(setTitle)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* PUBLISHER */}
              <label
                htmlFor="publisher"
                className="block text-xl mb-1 font-bold text-cyan-950"
              >
                Publisher:
              </label>
              <div className="flex flex-col">
                <input
                  type="text"
                  name="publisher"
                  id="publisher"
                  placeholder="Publisher"
                  value={publisher}
                  readOnly
                  onChange={clearErrorOnChange(setPublisher)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt */}
              {restrictionSelectionSection}
              {recipeCategorySelectionSection}
              {selectedCategory && recipeSelectionSection(filteredRecipes)}
              {/* ERROR MESSAGE */}
              {recipeSelectError && (
                <p className="text-black">{recipeSelectError}</p>
              )}
              {/* CATEGORY */}
              {/* CATEGORY DROPDOWN */}
              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Meal Plan Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={handleCategoryChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Select a category</option>
                  {mockMealPlanCategory.map((cat, index) => (
                    <option key={index} value={cat.category}>
                      {cat.category}
                    </option>
                  ))}
                </select>
              </div>
              {/* INTRODUCTION */}
              <div className="flex flex-col">
                <label
                  htmlFor="introduction"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Introduction:
                </label>
                <textarea
                  name="introduction"
                  id="introduction"
                  placeholder="Introduction"
                  value={introduction}
                  onChange={clearErrorOnChange(setIntroduction)}
                  rows={4} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* MAIN CONTENT */}
              <div className="flex flex-col">
                <label
                  htmlFor="mainContent"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Main Content:
                </label>
                <textarea
                  name="mainContent"
                  id="mainContent"
                  placeholder="Main Content"
                  value={mainContent}
                  onChange={clearErrorOnChange(setMainContent)}
                  rows={7} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* CONCLUSION */}
              <div className="flex flex-col">
                <label
                  htmlFor="conclusion"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Conclusion:
                </label>
                <textarea
                  name="conclusion"
                  id="conclusion"
                  placeholder="Conclusion"
                  value={conclusion}
                  onChange={clearErrorOnChange(setConclusion)}
                  rows={4} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* IMAGE URL */}
              <div className="flex flex-col">
                <label
                  htmlFor="imageUrl"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Image URL:
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Image URL"
                  value={imageUrl}
                  onChange={clearErrorOnChange(setImageUrl)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* IMAGE TITLE */}
              <div className="flex flex-col">
                <label
                  htmlFor="imageTitle"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Image Title:
                </label>
                <input
                  type="text"
                  id="imageTitle"
                  name="imageTitle"
                  placeholder="Image Title"
                  value={imageTitle}
                  onChange={clearErrorOnChange(setImageTitle)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* ERROR MESSAGE */}
              {error && <p className="text-red-500">{error}</p>}
              {/* SUBMIT BUTTON */}
              <div className="flex flex-row space-x-5">
                <button className="bg-gradient-to-br from-red-500 to-red-700 hover:bg-blue-950 border-2 border-black text-white font-bold py-2 px-4 rounded">
                  <Link href="/businessUser/educationalContent">Cancel</Link>
                </button>
                <button
                  type="submit"
                  onClick={handleCreateMealPlan}
                  className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black text-white font-bold py-2 px-4 rounded"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMealPlanPage;
