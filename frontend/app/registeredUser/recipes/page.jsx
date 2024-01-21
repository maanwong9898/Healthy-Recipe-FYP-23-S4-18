"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import Link from "next/link";

// rouuter path: /registeredUser/recipes

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
  const [categoryFilter, setCategoryFilter] = useState("");
  const [AllRecipes, setAllRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [categories, setCategories] = useState([]);
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
  // State variables for nutrient categories
  const [caloriesFilter, setCaloriesFilter] = useState("");
  const [carbsFilter, setCarbsFilter] = useState("");
  const [proteinFilter, setProteinFilter] = useState("");
  const [fatFilter, setFatFilter] = useState("");
  const [sodiumFilter, setSodiumFilter] = useState("");
  const [fibreFilter, setFibreFilter] = useState("");

  // State variable for cooking time filter
  const [cookingTimeFilter, setCookingTimeFilter] = useState("");
  // State for collapsible filter section
  const [isFilterSectionOpen, setIsFilterSectionOpen] = useState(false);

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
    if (caloriesFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        switch (caloriesFilter) {
          case "low":
            return recipe.calories < 30;
          case "medium":
            return recipe.calories >= 30 && recipe.calories < 60;
          case "high":
            return recipe.calories >= 60;
          default:
            return true;
        }
      });
    }

    // Filter by carbs
    if (carbsFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        switch (carbsFilter) {
          case "low":
            return recipe.carbs < 30;
          case "medium":
            return recipe.carbs >= 30 && recipe.carbs < 60;
          case "high":
            return recipe.carbs >= 60;
          default:
            return true;
        }
      });
    }

    // Filter by protein
    if (proteinFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        switch (proteinFilter) {
          case "low":
            return recipe.protein < 30;
          case "medium":
            return recipe.protein >= 30 && recipe.protein < 60;
          case "high":
            return recipe.protein >= 60;
          default:
            return true;
        }
      });
    }

    // Filter by fat
    if (fatFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        switch (fatFilter) {
          case "low":
            return recipe.fat < 30;
          case "medium":
            return recipe.fat >= 30 && recipe.fat < 60;
          case "high":
            return recipe.fat >= 60;
          default:
            return true;
        }
      });
    }

    // Filter by sodium
    if (sodiumFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        switch (sodiumFilter) {
          case "low":
            return recipe.sodium < 30;
          case "medium":
            return recipe.sodium >= 30 && recipe.sodium < 60;
          case "high":
            return recipe.sodium >= 60;
          default:
            return true;
        }
      });
    }

    // Filter by fibre
    if (fibreFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        switch (fibreFilter) {
          case "low":
            return recipe.fibre < 30;
          case "medium":
            return recipe.fibre >= 30 && recipe.fibre < 60;
          case "high":
            return recipe.fibre >= 60;
          default:
            return true;
        }
      });
    }

    // Filter by cooking time
    if (cookingTimeFilter) {
      newFilteredRecipes = newFilteredRecipes.filter((recipe) => {
        switch (cookingTimeFilter) {
          case "quick":
            return recipe.cookingTime < 20;
          case "moderate":
            return recipe.cookingTime >= 20 && recipe.cookingTime <= 45;
          case "long":
            return recipe.cookingTime > 45;
          default:
            return true;
        }
      });
    }

    setFilteredRecipes(newFilteredRecipes);
  }, [
    AllRecipes,
    selectedDietaryPreference,
    selectedAllergies,
    caloriesFilter,
    carbsFilter,
    proteinFilter,
    fatFilter,
    sodiumFilter,
    fibreFilter,
    cookingTimeFilter,
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
          if (caloriesFilter) {
            finalResults = finalResults.filter((recipe) => {
              switch (caloriesFilter) {
                case "low":
                  return recipe.calories < 30;
                case "medium":
                  return recipe.calories >= 30 && recipe.calories < 60;
                case "high":
                  return recipe.calories >= 60;
                default:
                  return true;
              }
            });
          }

          // Filter by carbs
          if (carbsFilter) {
            finalResults = finalResults.filter((recipe) => {
              switch (carbsFilter) {
                case "low":
                  return recipe.carbs < 30;
                case "medium":
                  return recipe.carbs >= 30 && recipe.carbs < 60;
                case "high":
                  return recipe.carbs >= 60;
                default:
                  return true;
              }
            });
          }

          // Filter by protein
          if (proteinFilter) {
            finalResults = finalResults.filter((recipe) => {
              switch (proteinFilter) {
                case "low":
                  return recipe.protein < 30;
                case "medium":
                  return recipe.protein >= 30 && recipe.protein < 60;
                case "high":
                  return recipe.protein >= 60;
                default:
                  return true;
              }
            });
          }

          // Filter by fat
          if (fatFilter) {
            finalResults = finalResults.filter((recipe) => {
              switch (fatFilter) {
                case "low":
                  return recipe.fat < 30;
                case "medium":
                  return recipe.fat >= 30 && recipe.fat < 60;
                case "high":
                  return recipe.fat >= 60;
                default:
                  return true;
              }
            });
          }

          // Filter by sodium
          if (sodiumFilter) {
            finalResults = finalResults.filter((recipe) => {
              switch (sodiumFilter) {
                case "low":
                  return recipe.sodium < 30;
                case "medium":
                  return recipe.sodium >= 30 && recipe.sodium < 60;
                case "high":
                  return recipe.sodium >= 60;
                default:
                  return true;
              }
            });
          }

          // Filter by fibre
          if (fibreFilter) {
            finalResults = finalResults.filter((recipe) => {
              switch (fibreFilter) {
                case "low":
                  return recipe.fibre < 30;
                case "medium":
                  return recipe.fibre >= 30 && recipe.fibre < 60;
                case "high":
                  return recipe.fibre >= 60;
                default:
                  return true;
              }
            });
          }

          // Filter by cooking time
          if (cookingTimeFilter) {
            finalResults = finalResults.filter((recipe) => {
              switch (cookingTimeFilter) {
                case "quick":
                  return recipe.cookingTime < 20;
                case "moderate":
                  return recipe.cookingTime >= 20 && recipe.cookingTime <= 45;
                case "long":
                  return recipe.cookingTime > 45;
                default:
                  return true;
              }
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

  // To view personal recommendation
  const handleViewPersonalRecipe = (id) => {
    console.log(`User id to view personalised recipe: ${id}`);
    let routePath = `/registeredUser/recipes/viewPersonalRecipe/${id}`;
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
  //           <div className="flex items-center text-red-700 font-semibold text-xl">
  //             {post.dietaryPreferences?.subcategoryName ||
  //               "No Dietary Preference"}
  //           </div>
  //         </div>
  //         <div className="flex justify-between items-center">
  //           <div className="flex items-center text-red-700 font-semibold text-xl">
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
  //           <div className="flex items-center text-red-700 font-semibold text-xl">
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
    selectedAllergies.length > 0;

  return (
    <div>
      <HomeNavbar />
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

          {/* Filter Section - Adjusted to align to the right */}
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label
              htmlFor="categoryFilter"
              className="text-xl text-black mb-2 sm:mb-0 sm:mr-2"
            >
              Sort By:
            </label>
            <div className="flex-grow-0">
              <select
                id="categoryFilter"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="p-2 rounded border-2 border-black text-black"
                style={{ maxWidth: "300px" }}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.subcategoryName}>
                    {category.subcategoryName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="mb-5 mr-3">
          <button
            onClick={toggleFilterSection}
            className="text-white p-2 border-2 border-black bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 text-center"
            style={{ flexShrink: 0 }}
          >
            {isFilterSectionOpen ? "Hide Filters" : "Show Filters"}
          </button>
          <button
            className="ml-5 text-white p-2 border-2 border-black bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 text-center"
            onClick={handleViewPersonalRecipe}
          >
            Personal Recommendation
          </button>
        </div>
        {/* Filter by category */}
        {/* // Parent container for filters */}
        {/* Conditional rendering of the filter section */}
        {isFilterSectionOpen && (
          <div className="flex flex-wrap gap-4 mb-4 p-4 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-lg text-xl">
            {/* Dietary Preferences */}
            <div className="flex-1 min-w-[200px]">
              <label
                htmlFor="dietaryPreferences"
                className="text-xl text-white font-semibold mb-2 sm:mb-0 sm:mr-2"
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
                className="text-2xl text-white font-semibold mb-2 sm:mb-0 sm:mr-2"
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
                className="text-2xl text-white font-semibold mb-2 sm:mb-0 sm:mr-2"
              >
                Nutrient Filters:
              </label>

              {/* Calories */}
              <div className="flex-1 min-w-[200px]">
                <label htmlFor="caloriesFilter">Calories:</label>
                <select
                  id="caloriesFilter"
                  value={caloriesFilter}
                  onChange={(e) => setCaloriesFilter(e.target.value)}
                  className="form-select block w-full"
                >
                  <option value="">All Calories</option>
                  <option value="low">Low ({"<"} 30 )</option>
                  <option value="medium">Medium ( 30 - 60 )</option>
                  <option value="high">High ({">"}60 )</option>
                </select>

                {/* Carbs */}
                <label htmlFor="carbsFilter">Carbs:</label>
                <select
                  id="carbsFilter"
                  value={carbsFilter}
                  onChange={(e) => setCarbsFilter(e.target.value)}
                  className="form-select block w-full"
                >
                  <option value="">All Carbs</option>
                  <option value="low">Low ({"<"}30)</option>
                  <option value="medium">Medium (30 - 60)</option>
                  <option value="high">High ({">"} 60)</option>
                </select>

                {/* Protein */}
                <label htmlFor="proteinFilter">Protein:</label>
                <select
                  id="proteinFilter"
                  value={proteinFilter}
                  onChange={(e) => setProteinFilter(e.target.value)}
                  className="form-select block w-full"
                >
                  <option value="">All Protein</option>
                  <option value="low">Low ({"<"} 30)</option>
                  <option value="medium">Medium (30 - 60)</option>
                  <option value="high">High ({">"} 60)</option>
                </select>

                {/* Fat */}
                <label htmlFor="fatFilter">Fat:</label>
                <select
                  id="fatFilter"
                  value={fatFilter}
                  onChange={(e) => setFatFilter(e.target.value)}
                  className="form-select block w-full"
                >
                  <option value="">All Fat</option>
                  <option value="low">Low ({"<"} 30)</option>
                  <option value="medium">Medium (30 - 60)</option>
                  <option value="high">High ({">"} 60)</option>
                </select>

                {/* Sodium */}
                <label htmlFor="sodiumFilter">Sodium:</label>
                <select
                  id="sodiumFilter"
                  value={sodiumFilter}
                  onChange={(e) => setSodiumFilter(e.target.value)}
                  className="form-select block w-full"
                >
                  <option value="">All Sodium</option>
                  <option value="low">Low ({"<"} 30)</option>
                  <option value="medium">Medium (30 - 60)</option>
                  <option value="high">High ({">"} 60)</option>
                </select>

                {/* Fibre */}
                <label htmlFor="fibreFilter">Fibre:</label>
                <select
                  id="fibreFilter"
                  value={fibreFilter}
                  onChange={(e) => setFibreFilter(e.target.value)}
                  className="form-select block w-full"
                >
                  <option value="">All Fibre</option>
                  <option value="low">Low ({"<"} 30)</option>
                  <option value="medium">Medium (30 - 60)</option>
                  <option value="high">High ({">"} 60)</option>
                </select>
              </div>
            </div>

            {/* Cooking Time */}
            <div className="flex-1 min-w-[200px]">
              <label
                htmlFor="cookingTimeFilter"
                className="text-white font-semibold mb-2 sm:mb-0 sm:mr-2"
              >
                Cooking Time:
              </label>
              <select
                id="cookingTimeFilter"
                value={cookingTimeFilter}
                onChange={(e) => setCookingTimeFilter(e.target.value)}
                className="form-select block"
              >
                <option value="">All Cooking Time</option>
                <option value="quick">Quick ({"<"} 20 mins)</option>
                <option value="moderate">Moderate (20 - 45 mins)</option>
                <option value="long">Long ({">"} 45 mins)</option>
              </select>
            </div>
          </div>
        )}

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
  );
};

export default RecipesPageForUser;
