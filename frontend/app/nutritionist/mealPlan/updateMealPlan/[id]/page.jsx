"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";

// https://uiwjs.github.io/react-md-editor/

// router path: /nutritionist/mealPlan/updateMealPlan/[id]
// this is the page to update a meal plan

const fetchMealPlanById = async (mealPlanId) => {
  try {
    // Ensure mealPlanId is a string if the IDs in your URL need to be strings
    mealPlanId = mealPlanId;

    const response = await axiosInterceptorInstance.get(
      `/mealPlan/get/${mealPlanId}`
    );
    console.log("Fetched meal plan data is:", response.data);

    if (!response.data) {
      console.error(`Meal plan with ID ${mealPlanId} not found`);
      throw new Error(`Meal plan with ID ${mealPlanId} not found`);
    }

    // Assuming the response contains the meal plan directly
    const mealPlan = response.data;

    return mealPlan;
  } catch (error) {
    console.error("Failed to fetch meal plan:", error);
    throw error;
  }
};

const UpdateMealPlan = ({ params }) => {
  const [mealPlan, setMealPlan] = useState("");
  // title state
  const [title, setTitle] = useState("");
  const [titleCharCount, setTitleCharCount] = useState(0);
  // category state
  const [category, setCategory] = useState(""); // State to store selected category
  const [categories, setCategories] = useState([]); // State to store categories
  // intro state
  const [intro, setIntro] = useState("");
  const [introCharCount, setIntroCharCount] = useState(0);
  // info state
  const [mainContent, setMainContent] = useState("");
  const [mainContentCharCount, setMainContentCharCount] = useState(0);
  // conclusion state
  const [conclusion, setConclusion] = useState("");
  const [conclusionCharCount, setConclusionCharCount] = useState(0);

  // image url state
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrlCharCount, setImageUrlCharCount] = useState(0);
  // image title state
  const [imgTitle, setImgTitle] = useState("");
  const [imgTitleCharCount, setImgTitleCharCount] = useState(0);
  // success and error state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [userId, setUserId] = useState("");

  // States for recipe search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  // Additional state to map recipe IDs to their names
  const [recipeIdToNameMap, setRecipeIdToNameMap] = useState({});
  const [searchAttempted, setSearchAttempted] = useState(false);

  useEffect(() => {
    const mealPlanId = decodeURIComponent(params.id); // Make sure to decode the ID
    fetchMealPlanById(mealPlanId)
      .then((data) => {
        setMealPlan(data);
        console.log("The displayed particular meal plan is:", data);

        // Set each piece of state with the corresponding data
        setTitle(data.title || "Not Specified");
        setTitleCharCount(data.title ? data.title.length : 0); // Set title character count
        setCategory(data.healthGoal.id || "");
        setIntro(data.introduction || "Not Specified");
        setIntroCharCount(data.introduction ? data.introduction.length : 0); // Set intro character count
        setMainContent(data.mainContent || "Not Specified");
        setMainContentCharCount(data.mainContent ? data.mainContent.length : 0); // Set main content character count
        setConclusion(data.conclusion || "Not Specified");
        setConclusionCharCount(data.conclusion ? data.conclusion.length : 0); // Set conclusion character count
        setImgTitle(data.imgTitle || "Not Specified");
        setImgTitleCharCount(data.imgTitle ? data.imgTitle.length : 0); // Set image title character count
        setImageUrl(data.img || "Not Specified");
        setImageUrlCharCount(data.img ? data.img.length : 0); // Set image URL character count

        console.log("the displayed recipes are:", data.recipes);
        // Inside the fetchMealPlanById function after receiving response
        if (data.recipes) {
          console.log("Recipes found:", data.recipes);
          setSelectedRecipes(data.recipes); // assuming response.data.recipes is an array of recipe objects
        }
      })
      .catch((error) => {
        console.error("Error fetching meal plan:", error);
      });

    // Fetch all business blog categories from backend
    const fetchCategories = async () => {
      console.log("Fetching categories...");
      try {
        const response = await axiosInterceptorInstance.get(
          "category/getAllHealthGoals"
        );
        console.log("Categories fetched:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [params.id]);

  // Update meal plan (calling controller)
  const updateMealPlan = async (updatedMealPlan) => {
    console.log("Sending the following data to update:", updatedMealPlan);
    try {
      // Ensure all values are simple data types
      const response = await axiosInterceptorInstance.put(
        "/mealPlan/update",
        updatedMealPlan
      );
      console.log("Meal plan updated successfully:", response.data);
      setSuccess(true);
      setError(""); // Now 'setError' is available

      // Handle successful update (e.g., redirect or show a message)
    } catch (error) {
      setError("Failed to update the meal plan.");
      setSuccess(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleCharCount(e.target.value.length);
    setError("");
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // Clear category related error when a new category is selected
    if (e.target.value) {
      setError("");
    }
  };

  const handleIntroChange = (e) => {
    setIntro(e.target.value);
    setIntroCharCount(e.target.value.length);
    setError("");
  };

  const handleInfoChange = (e) => {
    setMainContent(e.target.value);
    setMainContentCharCount(e.target.value.length);
    setError("");
  };

  const handleConclusionChange = (e) => {
    setConclusion(e.target.value);
    setConclusionCharCount(e.target.value.length);
    setError("");
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    setImageUrlCharCount(e.target.value.length);
    setError("");
  };

  const handleImgTitleChange = (e) => {
    setImgTitle(e.target.value);
    setImgTitleCharCount(e.target.value.length);
    setError("");
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Function to search for recipes
  // Update handleSearch to set the recipeIdToNameMap
  const handleSearch = async (event) => {
    event.preventDefault();
    setSearchAttempted(true); // Set searchAttempted to true
    if (!searchTerm.trim()) return;

    try {
      const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+");
      const response = await axiosInterceptorInstance.get(
        `/recipe/find?keyword=${formattedSearchTerm}`
      );
      let filteredResults = response.data.filter(
        (recipe) => recipe.active === true
      );

      // Update the map with new recipes without losing previous entries
      setRecipeIdToNameMap((prevMap) => {
        const newMap = { ...prevMap };
        filteredResults.forEach((recipe) => {
          newMap[recipe.id] = recipe.title;
        });
        return newMap;
      });

      setSearchResults(filteredResults);
    } catch (error) {
      console.error("Error searching recipes:", error);
    }
  };

  // Function to get recipe name by ID
  const getRecipeName = (id) => {
    return recipeIdToNameMap[id] || "Unknown Recipe";
  };

  // Add the whole recipe object to the selected recipes
  const addRecipeToMealPlan = (recipe, event) => {
    event.preventDefault();
    if (!selectedRecipes.find((r) => r.id === recipe.id)) {
      setSelectedRecipes([...selectedRecipes, recipe]);
    }
  };

  // Update to use the whole recipe object to remove by ID
  const removeRecipeFromMealPlan = (recipeId, event) => {
    event.preventDefault();
    setSelectedRecipes(
      selectedRecipes.filter((recipe) => recipe.id !== recipeId)
    );
  };

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId"); // Retrieve user ID from localStorage
    console.log("Current id", storedUserId);
    if (storedUserId) {
      setUserId(storedUserId);
    }

    // Fetch all health goal(meal plan) categories from backend
    const fetchCategories = async () => {
      console.log("Fetching health goal categories...");
      try {
        const response = await axiosInterceptorInstance.get(
          "category/getAllHealthGoals"
        );
        console.log("Health goal categories fetched:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Validate the form before submitting
  const validateForm = () => {
    console.log("Type of category:", typeof category);
    console.log("Value of category:", category);

    if (!title.trim()) {
      setError("Title cannot be empty.");
      return false;
    }

    // Check if category is a number and is greater than 0
    if (typeof category !== "number" || category <= 0) {
      setError("Category must be selected.");
      return false;
    }

    // check if intro is empty
    if (!intro.trim()) {
      setError("Introduction cannot be empty.");
      return false;
    }

    // check if info is empty
    if (!mainContent.trim()) {
      setError("Mian content cannot be empty.");
      return false;
    }

    // check if conclusion is empty
    if (!conclusion.trim()) {
      setError("Conclusion cannot be empty.");
      return false;
    }

    // check if image url is empty
    if (!imageUrl.trim()) {
      setError("Image URL cannot be empty.");
      return false;
    }

    // check if image title is empty
    if (!imgTitle.trim()) {
      setError("Image title cannot be empty.");
      return false;
    }

    // Clear any existing errors if all validations pass
    setError("");
    return true;
  };

  // Form to update blog post
  const handleUpdateClick = async (e) => {
    e.preventDefault();
    setSuccess(false); // Reset success state here

    if (!validateForm()) {
      // Stop the form submission if validation fails
      return;
    }

    const userId = localStorage.getItem("userId");
    console.log("The user id in updated form is:", userId);
    try {
      console.log("Updated category is:", category.id);
      const updatedMealPlan = {
        id: mealPlan.id, // Assuming mealPlan.id is the right ID
        active: true,
        title: title,
        introduction: intro,
        mainContent: mainContent,
        conclusion: conclusion,
        imgTitle: imgTitle,
        img: imageUrl,
        healthGoalCategoryId: category, // Pass the entire selected category id
        recipes: selectedRecipes.map((recipe) => ({ id: recipe.id })),
        userID: { id: userId }, // Need to change to the current user ID
      };

      await updateMealPlan(updatedMealPlan);
      // Consider navigation or success message here
      // setSuccess(true); // Set success to true on successful update
      setError(""); // Clear any previous errors
    } catch (updateError) {
      setSuccess(false); // Ensure success is false on error
      setError(updateError.message || "Failed to update blog post");
    }
  };

  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 lg:px-8">
      {/* Adjust the max-width and width in the inline style */}
      <div
        className="mt-16 mb-16 mx-auto bg-zinc-100 rounded-lg shadow-lg p-4 md:p-8 lg:p-12"
        style={{ maxWidth: "600px", width: "100%" }} // Increase maxWidth and set width to 100%
      >
        {" "}
        {/* Smaller maxWidth */}
        <div className="p-4 space-y-4 md:space-y-12 ">
          <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              Update Meal Plan
            </h1>
            <form className="space-y-6 md:space-y-5 lg:space-y-3">
              {/* TITLE */}
              <div className="flex flex-col">
                <label
                  htmlFor="title"
                  className="block text-lg mb-1 font-semibold text-gray-900"
                >
                  Title<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title (Max 80 characters)"
                  maxLength="80"
                  value={title}
                  onChange={handleTitleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                />
                <span className="text-sm text-gray-600">
                  {titleCharCount}/80 characters
                </span>
              </div>
              {/* CATEGORY */}
              {/* CATEGORY DROPDOWN */}
              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="block text-lg mb-1 font-semibold text-gray-900"
                >
                  Category<span className="text-red-500">*</span>
                </label>

                <select
                  id="category"
                  name="category"
                  value={category}
                  // onChange={(e) => setCategory(e.target.value)}
                  onChange={(e) => setCategory(Number(e.target.value))}
                  className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat.id}>
                      {cat.subcategoryName}
                    </option>
                  ))}
                </select>
              </div>
              {/* INTRO */}
              <div className="flex flex-col">
                <label
                  htmlFor="intro"
                  className="block text-lg mb-1 font-semibold text-gray-900"
                >
                  Introduction<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="intro"
                  name="intro"
                  placeholder="Describe your meal plan here (Max 350 characters)"
                  value={intro}
                  rows={5}
                  maxLength="350"
                  onChange={handleIntroChange}
                  className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                />
                <span className="text-sm text-gray-600">
                  {introCharCount}/350 characters
                </span>
              </div>
              {/*Main content*/}
              <div className="flex flex-col">
                <label
                  htmlFor="mainContent"
                  className="block text-lg mb-1 font-semibold text-gray-900"
                >
                  Main Content<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="mainContent"
                  name="mainContent"
                  placeholder="Describe your meal plan here (Max 1000 characters)"
                  value={mainContent}
                  rows={10}
                  maxLength="1000"
                  onChange={handleInfoChange}
                  className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                />
                <span className="text-sm text-gray-600">
                  {mainContentCharCount}/1000 characters
                </span>
              </div>
              {/* CONCLUSION */}
              <div className="flex flex-col">
                <label
                  htmlFor="conclusion"
                  className="block text-lg mb-1 font-semibold text-gray-900"
                >
                  Conclusion<span className="text-red-500">*</span>
                </label>
                <textarea
                  id="conclusion"
                  name="conclusion"
                  placeholder="Conclusion (Max 255 characters)"
                  rows={5}
                  maxLength="255"
                  value={conclusion}
                  onChange={handleConclusionChange}
                  className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                />

                <span className="text-sm text-gray-600">
                  {conclusionCharCount}/255 characters
                </span>
              </div>

              {/* RECIPE SEARCH */}
              <div>
                <p className="block text-lg mb-1 font-semibold text-gray-900">
                  Suggested recipes:{" "}
                </p>
                <div className="flex flex-row space-x-5">
                  {/* Search bar for recipes */}
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search recipes by title..."
                    className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                  />
                  <button
                    onClick={handleSearch}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                  >
                    Search
                  </button>
                </div>

                {/* Display search results */}
                <div>
                  {searchResults.length > 0 ? (
                    <div>
                      <p className="font-bold text-lg">Results found:</p>
                      <ul>
                        {searchResults.map((recipe) => (
                          <li
                            key={recipe.id}
                            className="flex justify-between items-center my-1"
                          >
                            <span className="mr-2 text-lg">{recipe.title}</span>
                            <button
                              onClick={(event) =>
                                addRecipeToMealPlan(recipe, event)
                              }
                              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold mt-2 p-2 px-4 rounded-lg"
                            >
                              Add
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    searchAttempted &&
                    searchTerm.trim() !== "" && <p>No results found.</p>
                  )}
                </div>

                {/* Selected Recipes */}
                <div>
                  <h3 className="font-bold text-lg">Selected Recipes</h3>
                  <ul>
                    {selectedRecipes.map((recipe) => (
                      <li
                        key={recipe.id}
                        className="flex justify-between items-center my-1"
                      >
                        <span className="mr-2 text-lg">{recipe.title}</span>
                        <button
                          onClick={(event) =>
                            removeRecipeFromMealPlan(recipe.id, event)
                          }
                          className="bg-red-600 hover:bg-red-700 text-white font-semibold mt-2 p-2 px-4 rounded-lg"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* IMAGE URL */}
              <div className="flex flex-col">
                <label
                  htmlFor="imageUrl"
                  className="block text-lg mb-1 font-semibold text-gray-900 mt-4"
                >
                  Image URL<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Image URL (Max 255 characters)"
                  maxLength="255"
                  value={imageUrl}
                  onChange={handleImageUrlChange}
                  className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                />
                <span className="text-sm text-gray-600">
                  {imageUrlCharCount}/255 characters
                </span>
              </div>
              {/* IMAGE TITLE */}
              <div className="flex flex-col">
                <label
                  htmlFor="imgTitle"
                  className="block text-lg mb-1 font-semibold text-gray-900"
                >
                  Image Title<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="imgTitle"
                  name="imgTitle"
                  placeholder="Describe your image here"
                  maxLength="255"
                  value={imgTitle}
                  onChange={handleImgTitleChange}
                  className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                />
                <span className="text-sm text-gray-600">
                  {imgTitleCharCount}/255 characters
                </span>
              </div>

              {/* ERROR MESSAGE */}
              {error && (
                <p className="text-red-500 font-semibold text-2xl">
                  Failed to update meal plan: {error}
                </p>
              )}
              {success && (
                <p className="text-green-500 font-semibold text-2xl">
                  Meal plan was updated successfully!
                </p>
              )}
              {/* SUBMIT BUTTON */}
              <div className="flex flex-row space-x-5">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg">
                  <Link href="/nutritionist/mealPlan">Cancel</Link>
                </button>
                <button
                  type="submit"
                  onClick={handleUpdateClick}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
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

export default UpdateMealPlan;
