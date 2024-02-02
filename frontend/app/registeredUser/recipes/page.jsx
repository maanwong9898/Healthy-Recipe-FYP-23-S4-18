"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import Link from "next/link";

// rouuter path: /recipes

// when change metrics of filter, must change
// 1. useEffect for filter
// 2. useEffect for

// Fetch all recipes
const fetchRecipes = async () => {
  try {
    console.log("Fetching recipes...");
    const response = await axiosInterceptorInstance.get("/recipe/get");
    console.log("All recipe:", response.data);
    const filteredData = response.data.filter(
      (recipe) => recipe.active === true
    );
    return filteredData;
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    throw error;
  }
};

const RecipesPageForUser = () => {
  const router = useRouter();
  const [AllRecipes, setAllRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  // Additional state to track if search button has been clicked
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [dietaryPreferencesCategory, setDietaryPreferencesCategory] = useState(
    []
  );
  const [allergyCategory, setAllergyCategory] = useState([]);

  // For filter by category
  const [selectedDietaryPreference, setSelectedDietaryPreference] =
    useState("");
  const [selectedAllergies, setSelectedAllergies] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // State variable for cooking time filter
  const [cookingTimeFilter, setCookingTimeFilter] = useState("");
  // State for collapsible filter section
  const [isFilterSectionOpen, setIsFilterSectionOpen] = useState(false);

  // new filter pattern
  // State variables for calories min and max
  const [caloriesMinFilter, setCaloriesMinFilter] = useState("");
  const [caloriesMaxFilter, setCaloriesMaxFilter] = useState("");
  // State variables for carbs min and max
  const [carbsMinFilter, setCarbsMinFilter] = useState("");
  const [carbsMaxFilter, setCarbsMaxFilter] = useState("");
  // State variables for protein min and max
  const [proteinMinFilter, setProteinMinFilter] = useState("");
  const [proteinMaxFilter, setProteinMaxFilter] = useState("");
  // State variables for fat min and max
  const [fatMinFilter, setFatMinFilter] = useState("");
  const [fatMaxFilter, setFatMaxFilter] = useState("");
  // State variables for sodium min and max
  const [sodiumMinFilter, setSodiumMinFilter] = useState("");
  const [sodiumMaxFilter, setSodiumMaxFilter] = useState("");
  // State variables for fibre min and max
  const [fibreMinFilter, setFibreMinFilter] = useState("");
  const [fibreMaxFilter, setFibreMaxFilter] = useState("");
  // State variables for cooking time min and max
  const [cookingTimeMinFilter, setCookingTimeMinFilter] = useState("");
  const [cookingTimeMaxFilter, setCookingTimeMaxFilter] = useState("");

  // Fetch all recipes
  useEffect(() => {
    const getData = async () => {
      const fetchedRecipe = await fetchRecipes();
      setAllRecipes(fetchedRecipe);
      setDisplayedRecipes(fetchedRecipe);
    };
    getData();

    // Fetch all categories
    // Fetch all dietary preferences categories from backend
    const fetchDietaryPreferences = async () => {
      console.log("Fetching dietary preferences categories...");
      try {
        const response = await axiosInterceptorInstance.get(
          "/category/getAllDietaryPreferences"
        );
        console.log(
          "Dietary Preferences Categories Successfully Fetched :  ",
          response.data
        );
        setDietaryPreferencesCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch all allergies categories from backend
    const fetchAllergies = async () => {
      console.log("Fetching allergies categories...");
      try {
        const response = await axiosInterceptorInstance.get(
          "/category/getAllAllergies"
        );
        console.log(
          "Allergies Categories Successfully Fetched :  ",
          response.data
        );
        setAllergyCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDietaryPreferences();
    fetchAllergies();
  }, []);

  // Toggle function for filter section
  const toggleFilterSection = () => {
    setIsFilterSectionOpen(!isFilterSectionOpen);
  };

  // Apply filters (without search term)
  useEffect(() => {
    let newFilteredRecipes = AllRecipes;

    console.log("Start doing filtering...");
    // Filter by dietary preference
    if (selectedDietaryPreference) {
      newFilteredRecipes = newFilteredRecipes.filter(
        (recipe) =>
          recipe.dietaryPreferences?.subcategoryName ===
          selectedDietaryPreference
      );
    }

    // Filter by allergies
    if (selectedAllergies.length > 0) {
      newFilteredRecipes = newFilteredRecipes.filter(
        (recipe) =>
          !selectedAllergies.some((allergy) =>
            recipe.allergies.some((a) => a.subcategoryName === allergy)
          )
      );
    }

    // Filter all nutrion values
    // Filter by calories
    if (caloriesMinFilter || caloriesMaxFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        const calories = recipe.calories;
        const min = caloriesMinFilter
          ? parseFloat(caloriesMinFilter, 10)
          : -Infinity;
        const max = caloriesMaxFilter
          ? parseFloat(caloriesMaxFilter, 10)
          : Infinity;
        return calories >= min && calories <= max;
      });
    }

    // Filter by carbs
    if (carbsMinFilter || carbsMaxFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        const carbs = recipe.carbs;
        const min = carbsMinFilter ? parseFloat(carbsMinFilter, 10) : -Infinity;
        const max = carbsMaxFilter ? parseFloat(carbsMaxFilter, 10) : Infinity;
        return carbs >= min && carbs <= max;
      });
    }

    // Filter by protein
    if (proteinMinFilter || proteinMaxFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        const protein = recipe.protein;
        const min = proteinMinFilter
          ? parseFloat(proteinMinFilter, 10)
          : -Infinity;
        const max = proteinMaxFilter
          ? parseFloat(proteinMaxFilter, 10)
          : Infinity;
        return protein >= min && protein <= max;
      });
    }

    // Filter by fat
    if (fatMinFilter || fatMaxFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        const fat = recipe.fat;
        const min = fatMinFilter ? parseFloat(fatMinFilter, 10) : -Infinity;
        const max = fatMaxFilter ? parseFloat(fatMaxFilter, 10) : Infinity;
        return fat >= min && fat <= max;
      });
    }

    // Filter by sodium
    if (sodiumMinFilter || sodiumMaxFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        const sodium = recipe.sodium;
        const min = sodiumMinFilter
          ? parseFloat(sodiumMinFilter, 10)
          : -Infinity;
        const max = sodiumMaxFilter
          ? parseFloat(sodiumMaxFilter, 10)
          : Infinity;
        return sodium >= min && sodium <= max;
      });
    }

    // Filter by fibre
    if (fibreMinFilter || fibreMaxFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        const fibre = recipe.fibre;
        const min = fibreMinFilter ? parseFloat(fibreMinFilter, 10) : -Infinity;
        const max = fibreMaxFilter ? parseFloat(fibreMaxFilter, 10) : Infinity;
        return fibre >= min && fibre <= max;
      });
    }

    // Filter by cooking time
    if (cookingTimeMinFilter || cookingTimeMaxFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        const cookingTime = recipe.cookingTime;
        const min = cookingTimeMinFilter
          ? parseFloat(cookingTimeMinFilter, 10)
          : -Infinity;
        const max = cookingTimeMaxFilter
          ? parseFloat(cookingTimeMaxFilter, 10)
          : Infinity;
        return cookingTime >= min && cookingTime <= max;
      });
    }

    console.log("The recipe after multiple filtering: ", newFilteredRecipes);
    console.log("End doing filtering...");
    setFilteredRecipes(newFilteredRecipes);
  }, [
    AllRecipes,
    selectedDietaryPreference,
    selectedAllergies,
    caloriesMinFilter,
    caloriesMaxFilter,
    carbsMinFilter,
    carbsMaxFilter,
    proteinMinFilter,
    proteinMaxFilter,
    fatMinFilter,
    fatMaxFilter,
    sodiumMinFilter,
    sodiumMaxFilter,
    fibreMinFilter,
    fibreMaxFilter,
    cookingTimeFilter,
    cookingTimeMinFilter,
    cookingTimeMaxFilter,
  ]);

  // Apply search on filtered recipes
  useEffect(() => {
    let searchResults = filteredRecipes;
    if (searchTerm.trim()) {
      // searchResults = filteredRecipes.filter((recipe) =>
      //   recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      // );
    } else {
      setSearchPerformed(false); // To prevent results count from showing when no search is performed
    }

    setDisplayedRecipes(searchResults);
    setIsSearchEmpty(searchResults.length === 0);
  }, [filteredRecipes, searchTerm]);

  // Handler for changing allergies selection
  const handleAllergyChange = (event, allergy) => {
    if (event.target.checked) {
      setSelectedAllergies([...selectedAllergies, allergy]);
    } else {
      setSelectedAllergies(selectedAllergies.filter((a) => a !== allergy));
    }
  };

  const handleSearchClick = async () => {
    setSearchButtonClicked(true); // Set flag when search is performed
    setIsSearchEmpty(false);
    setSearchPerformed(true);

    if (!searchTerm.trim()) {
      // const filteredRecipes = categoryFilter
      //   ? AllRecipes.filter(
      //       (post) => post.blogType.subcategoryName === categoryFilter
      //     )
      //   : AllRecipes;

      // temporary fix
      const filteredRecipes = AllRecipes;

      setDisplayedRecipes(filteredRecipes);
      setResultsCount(filteredRecipes.length);
      setIsSearchEmpty(false);
      setSearchPerformed(false);
    } else {
      // Search for recipes
      try {
        const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+");
        const response = await axiosInterceptorInstance.get(
          `/recipe/find?keyword=${formattedSearchTerm}`
        );
        let filteredResults = response.data.filter(
          (recipe) => recipe.active === true
        );

        // if (categoryFilter) {
        //   filteredResults = filteredResults.filter(
        //     (recipe) => recipe.blogType.subcategoryName === categoryFilter
        //   );
        // }

        if (filteredResults.length > 0) {
          // Apply additional filters to the search results
          let finalResults = filteredResults;

          // Filter by dietary preference
          if (selectedDietaryPreference) {
            finalResults = finalResults.filter(
              (recipe) =>
                recipe.dietaryPreferences?.subcategoryName ===
                selectedDietaryPreference
            );
          }

          // Filter by allergies
          if (selectedAllergies.length > 0) {
            finalResults = finalResults.filter(
              (recipe) =>
                !selectedAllergies.some((allergy) =>
                  recipe.allergies.some((a) => a.subcategoryName === allergy)
                )
            );
          }

          // Filter all nutrion values
          // Filter by calories
          if (caloriesMinFilter || caloriesMaxFilter) {
            finalResults = finalResults.filter((recipe) => {
              const calories = recipe.calories;
              const min = caloriesMinFilter
                ? parseFloat(caloriesMinFilter, 10)
                : -Infinity;
              const max = caloriesMaxFilter
                ? parseFloat(caloriesMaxFilter, 10)
                : Infinity;
              return calories >= min && calories <= max;
            });
          }

          // Filter by carbs
          if (carbsMinFilter || carbsMaxFilter) {
            finalResults = finalResults.filter((recipe) => {
              const carbs = recipe.carbs;
              const min = carbsMinFilter
                ? parseFloat(carbsMinFilter, 10)
                : -Infinity;
              const max = carbsMaxFilter
                ? parseFloat(carbsMaxFilter, 10)
                : Infinity;
              return carbs >= min && carbs <= max;
            });
          }

          // Filter by protein
          if (proteinMinFilter || proteinMaxFilter) {
            finalResults = finalResults.filter((recipe) => {
              const protein = recipe.protein;
              const min = proteinMinFilter
                ? parseFloat(proteinMinFilter, 10)
                : -Infinity;
              const max = proteinMaxFilter
                ? parseFloat(proteinMaxFilter, 10)
                : Infinity;
              return protein >= min && protein <= max;
            });
          }

          // Filter by fat
          if (fatMinFilter || fatMaxFilter) {
            finalResults = finalResults.filter((recipe) => {
              const fat = recipe.fat;
              const min = fatMinFilter
                ? parseFloat(fatMinFilter, 10)
                : -Infinity;
              const max = fatMaxFilter
                ? parseFloat(fatMaxFilter, 10)
                : Infinity;
              return fat >= min && fat <= max;
            });
          }

          // Filter by sodium
          if (sodiumMinFilter || sodiumMaxFilter) {
            finalResults = finalResults.filter((recipe) => {
              const sodium = recipe.sodium;
              const min = sodiumMinFilter
                ? parseFloat(sodiumMinFilter, 10)
                : -Infinity;
              const max = sodiumMaxFilter
                ? parseFloat(sodiumMaxFilter, 10)
                : Infinity;
              return sodium >= min && sodium <= max;
            });
          }

          // Filter by fibre
          if (fibreMinFilter || fibreMaxFilter) {
            finalResults = finalResults.filter((recipe) => {
              const fibre = recipe.fibre;
              const min = fibreMinFilter
                ? parseFloat(fibreMinFilter, 10)
                : -Infinity;
              const max = fibreMaxFilter
                ? parseFloat(fibreMaxFilter, 10)
                : Infinity;
              return fibre >= min && fibre <= max;
            });
          }

          // Filter by cooking time
          if (cookingTimeMinFilter || cookingTimeMaxFilter) {
            finalResults = finalResults.filter((recipe) => {
              const cookingTime = recipe.cookingTime;
              const min = cookingTimeMinFilter
                ? parseFloat(cookingTimeMinFilter, 10)
                : -Infinity;
              const max = cookingTimeMaxFilter
                ? parseFloat(cookingTimeMaxFilter, 10)
                : Infinity;
              return cookingTime >= min && cookingTime <= max;
            });
          }

          // Update displayed recipes
          setDisplayedRecipes(finalResults);
          setResultsCount(finalResults.length);
          setIsSearchEmpty(finalResults.length === 0);
        } else {
          setIsSearchEmpty(true);
          setDisplayedRecipes([]);
          setResultsCount(0);
        }
        setSearchPerformed(true);
      } catch (error) {
        console.error("Error searching recipes:", error);
      }
    }
  };

  const handleViewRecipe = (id) => {
    console.log(`Recipe Title: ${id}`);
    let routePath = `/registeredUser/recipes/viewRecipe/${id}`;
    router.push(routePath);
  };

  // Render each recipe post card
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
        src={post.img}
        alt="Credit to the source"
        className="w-full object-cover rounded-sm"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div>
          <h2 className="text-2xl font-extrabold mb-2">{post.title}</h2>
          <div
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            <div className="whitespace-pre-line">{post.description}</div>
          </div>
        </div>
        {/* <div className="flex justify-between items-center">
          <div className="flex items-center text-red-700 font-semibold text-xl">
            {post.blogType.subcategoryName}
          </div>
        </div> */}
        <button
          onClick={() => handleViewRecipe(post.id)}
          className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
        >
          Read more
        </button>
      </div>
    </div>
  );

  // For debugging filtering and searching
  // const renderPostCard = (post) => (
  //   <div
  //     key={post.id}
  //     className="rounded shadow-lg overflow-hidden flex flex-col"
  //     style={{
  //       border: "0.5px solid transparent",
  //       background:
  //         "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
  //       backgroundOrigin: "border-box",
  //       backgroundClip: "content-box, border-box",
  //     }}
  //   >
  //     <img
  //       src={post.img}
  //       alt="Credit to the source"
  //       className="w-full object-cover rounded-sm"
  //       style={{ height: "192px" }}
  //     />
  //     <div className="flex-grow flex flex-col justify-between p-4 bg-white">
  //       <div>
  //         <h2 className="text-2xl font-extrabold mb-2">{post.title}</h2>
  //         <div
  //           className="text-gray-700 text-base mb-4 line-clamp-3"
  //           style={{ height: "4.5rem" }}
  //         >
  //           <div className="whitespace-pre-line">{post.description}</div>
  //         </div>
  //         <div className="flex justify-between items-center">
  //           <div className="flex items-center text-green-600 font-semibold text-xl">
  //             {post.dietaryPreferences?.subcategoryName ||
  //               "No Dietary Preference"}
  //           </div>
  //         </div>
  //         <div className="flex justify-between items-center">
  //           <div className="flex items-center text-black font-semibold text-xl">
  //             {post.allergies.map((allergy) => (
  //               <span
  //                 key={allergy.id}
  //                 className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 last:mr-0 mr-1"
  //               >
  //                 {allergy.subcategoryName}
  //               </span>
  //             ))}
  //           </div>
  //         </div>
  //         <div className="flex flex-col">
  //           <div className="flex items-center text-red-700 font-semibold text-xl">
  //             {post.calories} Calories
  //           </div>

  //           <div className="flex items-center text-red-700 font-semibold text-xl">
  //             {post.carbs} Carbs
  //           </div>

  //           <div className="flex items-center text-red-700 font-semibold text-xl">
  //             {post.protein} Protein
  //           </div>

  //           <div className="flex items-center text-red-700 font-semibold text-xl">
  //             {post.fat} Fat
  //           </div>

  //           <div className="flex items-center text-red-700 font-semibold text-xl">
  //             {post.sodium} Sodium
  //           </div>

  //           <div className="flex items-center text-red-700 font-semibold text-xl">
  //             {post.fibre} Fibre
  //           </div>
  //         </div>
  //         <div className="flex justify-between items-center">
  //           <div className="flex items-center text-blue-900 font-semibold text-xl">
  //             {post.cookingTime} Minutes
  //           </div>
  //         </div>

  //         <button
  //           onClick={() => handleViewRecipe(post.id)}
  //           className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
  //         >
  //           Read more
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );

  // Get the latest 3 recipes
  const latestRecipes = [...AllRecipes]
    .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
    .slice(0, 3);

  // Get the other recipes that are not the latest 3
  const otherRecipes = AllRecipes.filter(
    (post) => !latestRecipes.find((latestPost) => latestPost.id === post.id)
  );

  // Determine if any search or filter has been applied
  const hasSearchOrFilterBeenApplied =
    searchTerm.trim() !== "" ||
    selectedDietaryPreference !== "" ||
    selectedAllergies.length > 0 ||
    caloriesMinFilter !== "" ||
    caloriesMaxFilter !== "" ||
    carbsMinFilter !== "" ||
    carbsMaxFilter !== "" ||
    proteinMinFilter !== "" ||
    proteinMaxFilter !== "" ||
    fatMinFilter !== "" ||
    fatMaxFilter !== "" ||
    sodiumMinFilter !== "" ||
    sodiumMaxFilter !== "" ||
    fibreMinFilter !== "" ||
    fibreMaxFilter !== "" ||
    cookingTimeMinFilter !== "" ||
    cookingTimeMaxFilter !== "";

  return (
    <div className="bg-white p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-extrabold font-mono text-cyan-800 mb-4 md:mb-8">
        Recipes
      </h1>
      <div className="flex sm:justify-between sm:items-center mb-4">
        {/* Search Section */}
        <div className="flex-grow">
          <input
            type="text"
            id="recipeSearch"
            name="recipeSearch"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchClick();
              }
            }}
            placeholder="Search recipe title..."
            className="mr-2 p-2 rounded border-2 border-black mb-2 sm:mb-0"
            style={{ flex: 1 }}
          />
          <button
            onClick={handleSearchClick}
            className="text-white p-2 border-2 border-black bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 text-center"
            style={{ flexShrink: 0 }}
          >
            Search
          </button>
          {/* Results count */}
          {searchButtonClicked && searchPerformed && (
            <p className="text-left text-red font-bold text-xl sm:ml-2">
              {resultsCount} results found.
            </p>
          )}
        </div>
      </div>
      {/* Button to open filter option */}
      <div className="mb-5 mr-3">
        <button
          onClick={toggleFilterSection}
          className="text-orange-400 p-2 bg-white hover:text-orange-700 rounded-lg text-xl font-bold px-5 py-2.5 text-center"
          style={{ flexShrink: 0, textDecoration: "underline" }}
        >
          {isFilterSectionOpen ? "Hide Filters" : "Show Filters"}
        </button>
      </div>
      {/*Main Content including the filter and recipe display*/}
      <div className="flex flex-col md:flex-row">
        {" "}
        {/* Flex container for sidebar and main content */}
        {/* Sidebar for Filters */}
        <div className="w-full lg:w-1/4 md:pr-4 mb-4 md:mb-0">
          {" "}
          {/* Full width on small screens, 1/4 width on larger screens */}
          {/* Conditional rendering of the filter section */}
          {isFilterSectionOpen && (
            <div className="flex flex-col gap-4 mb-4 p-4 bg-orange-50 rounded-lg text-xl">
              {/* Dietary Preferences */}
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="dietaryPreferences"
                  className="text-2xl text-black font-bold mb-2 sm:mb-0 sm:mr-2"
                >
                  Dietary Preferences:
                </label>
                <select
                  value={selectedDietaryPreference}
                  onChange={(e) => setSelectedDietaryPreference(e.target.value)}
                  className="form-select block"
                >
                  <option value="">All Dietary Preferences</option>
                  {dietaryPreferencesCategory.map((dp) => (
                    <option key={dp.id} value={dp.subcategoryName}>
                      {dp.subcategoryName}
                    </option>
                  ))}
                </select>
              </div>

              {/* Allergies */}
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="allergies"
                  className="text-2xl text-black font-bold mb-2 sm:mb-0 sm:mr-2"
                >
                  Allergies:
                </label>
                <div>
                  {allergyCategory.map((allergy) => (
                    <div key={allergy.id} className="flex items-center mt-1">
                      <input
                        type="checkbox"
                        id={`allergy-${allergy.id}`}
                        checked={selectedAllergies.includes(
                          allergy.subcategoryName
                        )}
                        onChange={(e) =>
                          handleAllergyChange(e, allergy.subcategoryName)
                        }
                        className="mr-2"
                      />
                      <label htmlFor={`allergy-${allergy.id}`}>
                        {allergy.subcategoryName}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nutrient Filters */}
              <div className="flex flex-col min-w-[200px]">
                <label
                  htmlFor="nutrientFilters"
                  className="text-2xl text-black font-bold mb-2 sm:mb-0 sm:mr-2"
                >
                  Nutrient Filters:
                </label>

                <div className="flex-col min-w-[200px] mt-3">
                  {/* Calories */}
                  <p className="text-orange-700 text-xl font-bold mb-2">
                    Calories:
                  </p>
                  <div className="flex items-center">
                    <label
                      htmlFor="caloriesMinFilter"
                      style={{ marginRight: "8px" }}
                    >
                      Min
                    </label>
                    <input
                      type="number"
                      id="caloriesMinFilter"
                      value={caloriesMinFilter}
                      onChange={(e) => setCaloriesMinFilter(e.target.value)}
                      className="form-control block"
                      style={{ width: "80px", marginRight: "8px" }} // adjust the width as needed
                    />

                    <label
                      htmlFor="caloriesMaxFilter"
                      style={{ marginRight: "8px" }}
                    >
                      Max
                    </label>
                    <input
                      type="number"
                      id="caloriesMaxFilter"
                      value={caloriesMaxFilter}
                      onChange={(e) => setCaloriesMaxFilter(e.target.value)}
                      className="form-control block"
                      style={{ width: "80px" }} // adjust the width as needed
                    />
                  </div>

                  {/* Carbs */}
                  <p className="text-orange-700 text-xl font-bold mb-2 mt-4">
                    Carbs:
                  </p>
                  <div className="flex items-center">
                    <label
                      htmlFor="carbsMinFilter"
                      style={{ marginRight: "8px" }}
                    >
                      Min
                    </label>
                    <input
                      type="number"
                      id="carbsMinFilter"
                      value={carbsMinFilter}
                      onChange={(e) => setCarbsMinFilter(e.target.value)}
                      className="form-control block"
                      style={{ width: "80px", marginRight: "8px" }} // adjust the width as needed
                    />

                    <label
                      htmlFor="carbsMaxFilter"
                      style={{ marginRight: "8px" }}
                    >
                      Max
                    </label>
                    <input
                      type="number"
                      id="carbsMaxFilter"
                      value={carbsMaxFilter}
                      onChange={(e) => setCarbsMaxFilter(e.target.value)}
                      className="form-control block"
                      style={{ width: "80px" }} // adjust the width as needed
                    />
                  </div>

                  {/* Protein */}
                  <p className="text-orange-700 text-xl font-bold mb-2 mt-4">
                    Protein:
                  </p>
                  <div className="flex items-center">
                    <label
                      htmlFor="proteinMinFilter"
                      style={{ marginRight: "8px" }}
                    >
                      Min
                    </label>
                    <input
                      type="number"
                      id="proteinMinFilter"
                      value={proteinMinFilter}
                      onChange={(e) => setProteinMinFilter(e.target.value)}
                      className="form-control block"
                      style={{ width: "80px", marginRight: "8px" }} // adjust the width as needed
                    />

                    <label
                      htmlFor="proteinMaxFilter"
                      style={{ marginRight: "8px" }}
                    >
                      Max
                    </label>
                    <input
                      type="number"
                      id="proteinMaxFilter"
                      value={proteinMaxFilter}
                      onChange={(e) => setProteinMaxFilter(e.target.value)}
                      className="form-control block"
                      style={{ width: "80px" }} // adjust the width as needed
                    />
                  </div>

                  {/* Fat */}
                  <p className="text-orange-700 text-xl font-bold mb-2 mt-4">
                    Fat:
                  </p>
                  <div className="flex items-center">
                    <label
                      htmlFor="fatMinFilter"
                      style={{ marginRight: "8px" }}
                    >
                      Min
                    </label>
                    <input
                      type="number"
                      id="fatMinFilter"
                      value={fatMinFilter}
                      onChange={(e) => setFatMinFilter(e.target.value)}
                      className="form-control block"
                      style={{ width: "80px", marginRight: "8px" }} // adjust the width as needed
                    />

                    <label
                      htmlFor="fatMaxFilter"
                      style={{ marginRight: "8px" }}
                    >
                      Max
                    </label>
                    <input
                      type="number"
                      id="fatMaxFilter"
                      value={fatMaxFilter}
                      onChange={(e) => setFatMaxFilter(e.target.value)}
                      className="form-control block"
                      style={{ width: "80px" }} // adjust the width as needed
                    />
                  </div>

                  {/* Sodium */}
                  <p className="text-orange-700 text-xl font-bold mb-2 mt-4">
                    Sodium:
                  </p>
                  <div className="flex items-center">
                    <label
                      htmlFor="sodiumMinFilter"
                      style={{ marginRight: "8px" }}
                    >
                      Min
                    </label>
                    <input
                      type="number"
                      id="sodiumMinFilter"
                      value={sodiumMinFilter}
                      onChange={(e) => setSodiumMinFilter(e.target.value)}
                      className="form-control block"
                      style={{ width: "80px", marginRight: "8px" }} // adjust the width as needed
                    />

                    <label
                      htmlFor="sodiumMaxFilter"
                      style={{ marginRight: "8px" }}
                    >
                      Max
                    </label>
                    <input
                      type="number"
                      id="sodiumMaxFilter"
                      value={sodiumMaxFilter}
                      onChange={(e) => setSodiumMaxFilter(e.target.value)}
                      className="form-control block"
                      style={{ width: "80px" }} // adjust the width as needed
                    />
                  </div>

                  {/* Fibre */}
                  <p className="text-orange-700 text-xl font-bold mb-2 mt-4">
                    Fibre:
                  </p>
                  <div className="flex items-center">
                    <label
                      htmlFor="fibreMinFilter"
                      style={{ marginRight: "8px" }}
                    >
                      Min
                    </label>
                    <input
                      type="number"
                      id="fibreMinFilter"
                      value={fibreMinFilter}
                      onChange={(e) => setFibreMinFilter(e.target.value)}
                      className="form-control block"
                      style={{ width: "80px", marginRight: "8px" }} // adjust the width as needed
                    />

                    <label
                      htmlFor="fibreMaxFilter"
                      style={{ marginRight: "8px" }}
                    >
                      Max
                    </label>
                    <input
                      type="number"
                      id="fibreMaxFilter"
                      value={fibreMaxFilter}
                      onChange={(e) => setFibreMaxFilter(e.target.value)}
                      className="form-control block"
                      style={{ width: "80px" }} // adjust the width as needed
                    />
                  </div>
                </div>
              </div>

              {/* Cooking Time */}
              <div className="flex-1 min-w-[200px]">
                <label
                  htmlFor="cookingTimeFilter"
                  className="text-2xl text-black font-bold mb-2 sm:mb-0 sm:mr-2"
                >
                  Cooking Time:
                </label>
                <div className="flex items-center">
                  <label
                    htmlFor="cookingTimeMinFilter"
                    style={{ marginRight: "8px" }}
                  >
                    Min
                  </label>
                  <input
                    type="number"
                    id="cookingTimeMinFilter"
                    value={cookingTimeMinFilter}
                    onChange={(e) => setCookingTimeMinFilter(e.target.value)}
                    className="form-control block"
                    style={{ width: "80px", marginRight: "8px" }} // adjust the width as needed
                  />

                  <label
                    htmlFor="cookingTimeMaxFilter"
                    style={{ marginRight: "8px" }}
                  >
                    Max
                  </label>
                  <input
                    type="number"
                    id="cookingTimeMaxFilter"
                    value={cookingTimeMaxFilter}
                    onChange={(e) => setCookingTimeMaxFilter(e.target.value)}
                    className="form-control block"
                    style={{ width: "80px" }} // adjust the width as needed
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        {/* All recipe content */}
        <div className="flex-grow">
          {/* Check if search or filters have been applied */}
          {hasSearchOrFilterBeenApplied ? (
            // If search/filter has been performed
            displayedRecipes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {displayedRecipes.map((post) => renderPostCard(post))}
              </div>
            ) : (
              <p>No recipes found. Please adjust your search or filters.</p>
            )
          ) : (
            // If no search/filter has been performed, display latest and other recipes
            <>
              <div className="mb-5">
                <h2 className="text-2xl font-bold mb-4 mt-4">Latest Recipes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {latestRecipes.map((post) => renderPostCard(post))}
                </div>
              </div>
              <div className="mb-5">
                <h2 className="text-2xl font-bold mb-4 mt-4">Other Recipes</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {otherRecipes.map((post) => renderPostCard(post))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipesPageForUser;
