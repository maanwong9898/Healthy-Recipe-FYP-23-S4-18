"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import SecureStorage from "react-secure-storage";
import NutritionistNavBar from "../../../components/navigation/nutritionistNavBar";

// https://uiwjs.github.io/react-md-editor/

// router path: /nutritionist/mealPlan/createMealPlan
// this is the page to create a meal plan

const CreateMealPlan = () => {
  const router = useRouter();
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
  // image file state
  const [imageFile, setImageFile] = useState(null);
  const [newImageBlob, setNewImageBlob] = useState(null); // New uploaded image
  // success and error state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // States for recipe search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRecipes, setSelectedRecipes] = useState([]);
  // Additional state to map recipe IDs to their names
  const [recipeIdToNameMap, setRecipeIdToNameMap] = useState({});
  const [searchAttempted, setSearchAttempted] = useState(false);

  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

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
    if (
      !SecureStorage.getItem("token") ||
      SecureStorage.getItem("role") !== "NUTRITIONIST"
    ) {
      // clear the secure storage
      SecureStorage.clear();
      console.log("Redirecting to home page");
      router.push("/");
    } else {
      setIsChecking(false);

      // Fetch all health goal(meal plan) categories from backend
      const fetchCategories = async () => {
        console.log("Fetching health goal categories...");
        try {
          const response = await axiosInterceptorInstance.get(
            "category/getAllHealthGoals"
          );
          console.log("Health goal categories fetched:", response.data);
          setCategories(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };

      fetchCategories();
    }
  }, []);

  if (isChecking) {
    return <div>Checking...</div>;
  }

  const handleFileChange = (e) => {
    console.log("File change event:", e);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        let dataURL = event.target.result;
        console.log("Complete Data URL:", dataURL);

        // Extract Base64 Data
        let base64Data = dataURL.split(",")[1];
        console.log("Base64 Data:", base64Data);

        // Use base64Data as needed
        setNewImageBlob(base64Data); // Assuming you have a state setter like this
      };
      reader.readAsDataURL(file);
      console.log("File:", file);
    }
  };

  const renderImage = () => {
    const imageToShow = newImageBlob;
    return imageToShow ? (
      <img
        src={`data:image/jpeg;base64,${imageToShow}`}
        alt="Recipe"
        className="max-w-full h-auto"
        onError={(e) => {
          console.error("Error loading image:", e);
          e.target.style.display = "none";
        }}
      />
    ) : (
      <p>No image available</p>
    );
  };

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
    // if (!imageUrl.trim()) {
    //   setError("Image URL cannot be empty.");
    //   return false;
    // }

    if (!newImageBlob) {
      setError("Image cannot be empty.");
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

  // create meal plan (calling controller)
  const handleCreateMealPlan = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      // Stop the form submission if validation fails
      return;
    }

    console.log("Create method called.");

    console.log("category id:", category);

    const userId = SecureStorage.getItem("userId");

    // Construct the payload according to the required format
    const mealPlanData = {
      title: title, // Retrieved from state
      introduction: intro, // Retrieved from state
      mainContent: mainContent, // Retrieved from state
      conclusion: conclusion, // Retrieved from state
      // img: imageUrl, // Retrieved from state
      imgBlob: newImageBlob, // Use updated image blob
      imgTitle: imgTitle, // Retrieved from state
      healthGoalCategoryId: category, // Pass the entire selected category id
      recipes: selectedRecipes.map((recipe) => ({ id: recipe.id })), // Transform to match expected structure
      userID: { id: userId }, // replace above
    };

    console.log("Meal plan data for creation:", mealPlanData);

    try {
      const response = await axiosInterceptorInstance.post(
        "/mealPlan/add",
        mealPlanData
      );
      console.log("Meal plan created successfully:", response.data);

      // Consider navigation or success message here
      setSuccess(true); // Set success to true on successful update

      // Automatically clear the success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      // Reset fields after successful submission
      setTitle("");
      setCategory("");
      setIntro("");
      setMainContent("");
      setConclusion("");
      setImageUrl("");
      setImgTitle("");
      setSelectedRecipes([]);
      setSearchTerm("");
      setSearchResults([]);
      setSearchAttempted(false);
      setRecipeIdToNameMap({});
      setError("");

      // Reset character counters
      setTitleCharCount(0);
      setMainContentCharCount(0);
      setImageUrlCharCount(0);
    } catch (error) {
      setSuccess(false); // Ensure success is false on error
      console.error("Error creating meal plan:", error);
      setError(error.message || "Failed to create meal plan");
    }
  };

  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 lg:px-8">
      {isLoading && isChecking ? (
        <div>Loading...</div>
      ) : (
        <>
          <NutritionistNavBar />
          {/* Adjust the max-width and width in the inline style */}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {" "}
              <div
                className="mt-16 mb-16 mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8 lg:p-12"
                style={{ maxWidth: "600px", width: "100%" }} // Increase maxWidth and set width to 100%
              >
                {/* Smaller maxWidth */}
                <div className="p-4 space-y-4 md:space-y-12 ">
                  <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-center text-gray-900 mb-8">
                      Create Meal Plan
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
                          Suggested Recipes:
                        </p>
                        {/* SEARCH - LARGE SCREEN VIEW */}
                        <div className="relative flex-row gap-5 hidden lg:flex">
                          <input
                            type="text"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Search recipes by title..."
                            className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full mr-auto p-2.5 pl-10"
                          />
                          {/* Search Icon */}
                          <span className="absolute inset-y-0 left-2 flex items-center">
                            <SearchIcon />
                          </span>
                          <button
                            onClick={handleSearch}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 rounded-full"
                          >
                            Search
                          </button>
                        </div>

                        {/* SEARCH - MOBILE VIEW */}
                        <div className="flex flex-row gap-2 lg:hidden">
                          <div className="relative">
                            <input
                              type="text"
                              value={searchTerm}
                              onChange={handleSearchChange}
                              placeholder="Search recipes by title..."
                              className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full mr-auto p-2.5"
                            />
                            {/* Search Icon
                    <span className="absolute inset-y-0 left-2 flex items-center">
                      <SearchIcon />
                    </span> */}
                          </div>
                          <button
                            onClick={handleSearch}
                            className=" text-black font-semibold rounded-full"
                          >
                            <SearchIcon />
                          </button>
                        </div>

                        {/* Display search results */}
                        <div>
                          {searchResults.length > 0 ? (
                            <div>
                              <p className="font-semibold mt-2">
                                Results found:
                              </p>
                              <ul>
                                {searchResults.map((recipe) => (
                                  <li
                                    key={recipe.id}
                                    className="flex justify-between items-center my-1"
                                  >
                                    <span className="mr-2 text-base">
                                      {recipe.title}
                                    </span>
                                    <button
                                      onClick={(event) =>
                                        addRecipeToMealPlan(recipe, event)
                                      }
                                      className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs mt-2 p-2 px-7 rounded-full hidden lg:block"
                                    >
                                      Add
                                    </button>

                                    {/* MOBILE VIEW */}
                                    <button
                                      onClick={(event) =>
                                        addRecipeToMealPlan(recipe, event)
                                      }
                                      className="lg:hidden"
                                    >
                                      <AddCircleIcon />
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : (
                            searchAttempted &&
                            searchTerm.trim() !== "" && (
                              <p className="mt-2 font-medium text-red-500">
                                No results found.
                              </p>
                            )
                          )}
                        </div>

                        {/* Selected Recipes */}
                        <div>
                          <h3 className="font-semibold mt-3">
                            Selected Recipes
                          </h3>
                          <ul>
                            {selectedRecipes.map((recipe) => (
                              <li
                                key={recipe.id}
                                className="flex justify-between items-center"
                              >
                                <span className="mr-2 text-base">
                                  {recipe.title}
                                </span>
                                {/* Use the title from the recipe object */}
                                <button
                                  onClick={(event) =>
                                    removeRecipeFromMealPlan(recipe.id, event)
                                  }
                                  className="bg-red-600 hover:bg-red-700 text-white font-semibold text-xs mt-2 p-2 px-4 rounded-full hidden lg:block"
                                >
                                  Remove
                                </button>

                                {/* MOBILE VIEW */}
                                <button
                                  onClick={(event) =>
                                    removeRecipeFromMealPlan(recipe.id, event)
                                  }
                                  className="lg:hidden"
                                >
                                  <RemoveCircleIcon />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* IMAGE URL */}
                      {/* <div className="flex flex-col">
                        <label
                          htmlFor="imageUrl"
                          className="block text-lg mb-1 font-semibold text-gray-900"
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
                      </div> */}
                      {/* IMAGE file */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="image"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Image<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="file"
                          id="image"
                          name="image"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                        />
                      </div>

                      <div className="image-section">{renderImage()}</div>
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
                        <p className="text-red-500 font-semibold text-base">
                          Failed to create meal plan: {error}
                        </p>
                      )}
                      {success && (
                        <p className="text-green-500 font-semibold text-base">
                          Meal plan was created successfully!
                        </p>
                      )}
                      {/* SUBMIT BUTTON */}
                      <div className="flex flex-row space-x-5">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg">
                          <Link href="/nutritionist/mealPlan">Back</Link>
                        </button>
                        <button
                          type="submit"
                          onClick={handleCreateMealPlan}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                        >
                          Create
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default CreateMealPlan;
