"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import Link from "next/link";
import { Tooltip } from "react-tooltip";

// rouuter path: /registeredUser/recipes

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

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

const fetchRecipeAverage = async (recipeId) => {
  try {
    const response = await axiosInterceptorInstance.get(
      `/recipe/getAverage/${recipeId}`
    );
    console.log("Average rating for recipe", recipeId, "is:", response.data);
    return response.data; // Assuming this returns the average data for the recipe
  } catch (error) {
    console.error(`Failed to fetch average for recipe ${recipeId}:`, error);
    return null; // or handle the error as you see fit
  }
};

const RecipesPageForUser = () => {
  const router = useRouter();
  const [AllRecipes, setAllRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
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
  const [mealTypeCategory, setMealTypeCategory] = useState([]);

  // For filter by category
  const [selectedDietaryPreference, setSelectedDietaryPreference] =
    useState("");
  const [selectedMealType, setSelectedMealType] = useState("");
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

  // State for ingredient search
  const [ingredientSearchTerm, setIngredientSearchTerm] = useState("");
  const [isIngredientSearchActive, setIsIngredientSearchActive] =
    useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // Fetch all recipes
  useEffect(() => {
    setIsLoading(true); // Start loading

    const getData = async () => {
      const fetchedRecipe = await fetchRecipes();

      const recipesWithAverage = await Promise.all(
        fetchedRecipe.map(async (recipe) => {
          const average = await fetchRecipeAverage(recipe.id);
          return { ...recipe, average };
        })
      );

      console.log("recipe with average:", recipesWithAverage);

      setAllRecipes(recipesWithAverage);
      setDisplayedRecipes(recipesWithAverage);
    };

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

    // Fetch all meal type categories from backend
    const fetchMealTypes = async () => {
      console.log("Fetching meal type categories...");
      try {
        const response = await axiosInterceptorInstance.get(
          "/category/getAllMealTypes"
        );
        console.log(
          "Meal Type Categories Successfully Fetched :  ",
          response.data
        );
        setMealTypeCategory(response.data);
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

    Promise.all([
      getData(),
      fetchDietaryPreferences(),
      fetchAllergies(),
      fetchMealTypes(),
    ])
      .catch((error) => {
        console.error("Error in fetchData or fetchCategories:", error);
      })
      .finally(() => {
        setIsLoading(false); // End loading after both operations are complete
      });
  }, []);

  // Toggle function for filter section
  const toggleFilterSection = () => {
    setIsFilterSectionOpen(!isFilterSectionOpen);
  };

  // Function to clear the search term
  const clearSearchTerm = () => {
    setSearchTerm("");
  };

  const clearIngredientSearchTerm = () => {
    setIngredientSearchTerm("");
  };

  // Example for dietary preference filter change
  const handleDietaryPreferenceChange = (e) => {
    setSelectedDietaryPreference(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Example for sort option change
  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Example for meal type filter change
  const handleMealTypeChange = (e) => {
    setSelectedMealType(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for calories min filter change
  const handleCaloriesMinFilterChange = (e) => {
    setCaloriesMinFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for calories max filter change
  const handleCaloriesMaxFilterChange = (e) => {
    setCaloriesMaxFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for carbs min filter change
  const handleCarbsMinFilterChange = (e) => {
    setCarbsMinFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for carbs max filter change
  const handleCarbsMaxFilterChange = (e) => {
    setCarbsMaxFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for protein min filter change
  const handleProteinMinFilterChange = (e) => {
    setProteinMinFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for protein max filter change
  const handleProteinMaxFilterChange = (e) => {
    setProteinMaxFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for fat min filter change
  const handleFatMinFilterChange = (e) => {
    setFatMinFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for fat max filter change
  const handleFatMaxFilterChange = (e) => {
    setFatMaxFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for sodium min filter change
  const handleSodiumMinFilterChange = (e) => {
    setSodiumMinFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for sodium max filter change
  const handleSodiumMaxFilterChange = (e) => {
    setSodiumMaxFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for fibre min filter change
  const handleFibreMinFilterChange = (e) => {
    setFibreMinFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for fibre max filter change
  const handleFibreMaxFilterChange = (e) => {
    setFibreMaxFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for cooking time min filter change
  const handleCookingTimeMinFilterChange = (e) => {
    setCookingTimeMinFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
  };

  // Handler for cooking time max filter change
  const handleCookingTimeMaxFilterChange = (e) => {
    setCookingTimeMaxFilter(e.target.value);
    clearSearchTerm();
    clearIngredientSearchTerm();
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

    // Filter by meal type
    if (selectedMealType) {
      newFilteredRecipes = newFilteredRecipes.filter(
        (recipe) => recipe.mealType?.subcategoryName === selectedMealType
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

    let sortedRecipes = [...newFilteredRecipes];
    // Sorting
    switch (sortOption) {
      case "LATEST":
        sortedRecipes.sort(
          (a, b) => new Date(b.createdDT) - new Date(a.createdDT)
        );
        break;
      case "OLDEST":
        sortedRecipes.sort(
          (a, b) => new Date(a.createdDT) - new Date(b.createdDT)
        );
        break;
      case "ALPHABETICAL_AZ":
        sortedRecipes.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ALPHABETICAL_ZA":
        sortedRecipes.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "HIGHEST_RATINGS":
        sortedRecipes.sort((a, b) => {
          const ratingDiff =
            (b.average?.averageRatings || 0) - (a.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return new Date(b.createdDT) - new Date(a.createdDT); // Latest date first if tie
        });
        break;
    }

    console.log("Filtered recipes:", newFilteredRecipes);

    // setDisplayedBlogPosts(sortedRecipes);
    // setIsSearchEmpty(sortedRecipes.length === 0);

    // // Reset searchButtonClicked when searchTerm changes
    // setSearchButtonClicked(false);

    // console.log("Displayed blog posts:", displayedBlogPosts);

    console.log("The recipe after multiple filtering: ", newFilteredRecipes);
    console.log("End doing filtering...");
    setFilteredRecipes(sortedRecipes);
  }, [
    AllRecipes,
    selectedDietaryPreference,
    selectedMealType,
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
    sortOption,
  ]);

  // Apply search on filtered recipes
  useEffect(() => {
    let searchResults = filteredRecipes;
    if (searchTerm.trim()) {
    } else {
      setSearchPerformed(false); // To prevent results count from showing when no search is performed
    }

    if (ingredientSearchTerm.trim()) {
    } else {
      setSearchPerformed(false);
    }

    setDisplayedRecipes(searchResults);
    setIsSearchEmpty(searchResults.length === 0);
  }, [filteredRecipes, searchTerm, ingredientSearchTerm]);

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

          // Filter by meal type
          if (selectedMealType) {
            finalResults = finalResults.filter(
              (recipe) => recipe.mealType?.subcategoryName === selectedMealType
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

          // Fetch average ratings for each recipe
          let filteredResultsWithAverage = await Promise.all(
            finalResults.map(async (recipe) => {
              const average = await fetchRecipeAverage(recipe.id);
              return { ...recipe, average }; // Augment each recipes with its average
            })
          );

          // Sort the results
          let sortedResults = [...filteredResultsWithAverage];
          switch (sortOption) {
            case "LATEST":
              sortedResults.sort(
                (a, b) => new Date(b.createdDT) - new Date(a.createdDT)
              );
              break;
            case "OLDEST":
              sortedResults.sort(
                (a, b) => new Date(a.createdDT) - new Date(b.createdDT)
              );
              break;
            case "ALPHABETICAL_AZ":
              sortedResults.sort((a, b) => a.title.localeCompare(b.title));
              break;
            case "ALPHABETICAL_ZA":
              sortedResults.sort((a, b) => b.title.localeCompare(a.title));
              break;
            case "HIGHEST_RATINGS":
              sortedResults.sort((a, b) => {
                const ratingDiff =
                  (b.average?.averageRatings || 0) -
                  (a.average?.averageRatings || 0);
                if (ratingDiff !== 0) return ratingDiff;
                return new Date(b.createdDT) - new Date(a.createdDT); // Latest date first if tie
              });
              break;
          }

          console.log("Sorted results:", sortedResults);

          setDisplayedRecipes(sortedResults);
          setResultsCount(sortedResults.length);
          setIsSearchEmpty(sortedResults.length === 0);

          // Update displayed recipes
          // setDisplayedRecipes(finalResults);
          // setResultsCount(finalResults.length);
          // setIsSearchEmpty(finalResults.length === 0);
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

  ///////////////////////////////////////////////////////////////////////

  const handleIngredientSearchClick = async () => {
    setSearchButtonClicked(true); // Set flag when search is performed
    setIsSearchEmpty(false);
    setSearchPerformed(true);

    if (!ingredientSearchTerm.trim()) {
      // temporary fix
      const filteredRecipes = AllRecipes;

      setDisplayedRecipes(filteredRecipes);
      setResultsCount(filteredRecipes.length);
      setIsSearchEmpty(false);
      setSearchPerformed(false);
    } else {
      // Search for recipes
      try {
        const formattedIngredientSearchTerm = ingredientSearchTerm
          .trim()
          .replace(/\s+/g, "+");
        const response = await axiosInterceptorInstance.get(
          `/recipe/findByIngredients?keyword=${formattedIngredientSearchTerm}`
        );
        let filteredResults = response.data.filter(
          (recipe) => recipe.active === true
        );

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

          // Filter by meal type
          if (selectedMealType) {
            finalResults = finalResults.filter(
              (recipe) => recipe.mealType?.subcategoryName === selectedMealType
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

          // Fetch average ratings for each recipe
          let filteredResultsWithAverage = await Promise.all(
            finalResults.map(async (recipe) => {
              const average = await fetchRecipeAverage(recipe.id);
              return { ...recipe, average }; // Augment each recipes with its average
            })
          );

          // Sort the results
          let sortedResults = [...filteredResultsWithAverage];
          switch (sortOption) {
            case "LATEST":
              sortedResults.sort(
                (a, b) => new Date(b.createdDT) - new Date(a.createdDT)
              );
              break;
            case "OLDEST":
              sortedResults.sort(
                (a, b) => new Date(a.createdDT) - new Date(b.createdDT)
              );
              break;
            case "ALPHABETICAL_AZ":
              sortedResults.sort((a, b) => a.title.localeCompare(b.title));
              break;
            case "ALPHABETICAL_ZA":
              sortedResults.sort((a, b) => b.title.localeCompare(a.title));
              break;
            case "HIGHEST_RATINGS":
              sortedResults.sort((a, b) => {
                const ratingDiff =
                  (b.average?.averageRatings || 0) -
                  (a.average?.averageRatings || 0);
                if (ratingDiff !== 0) return ratingDiff;
                return new Date(b.createdDT) - new Date(a.createdDT); // Latest date first if tie
              });
              break;
          }

          console.log("Sorted results:", sortedResults);

          setDisplayedRecipes(sortedResults);
          setResultsCount(sortedResults.length);
          setIsSearchEmpty(sortedResults.length === 0);

          // Update displayed recipes
          // setDisplayedRecipes(finalResults);
          // setResultsCount(finalResults.length);
          // setIsSearchEmpty(finalResults.length === 0);
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
      className="rounded-lg shadow-lg overflow-hidden flex flex-col"
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
        alt={post.img_title}
        className="w-full object-cover rounded-sm"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div>
          <h2
            className="text-2xl font-extrabold mb-2 hover:text-orange-600 cursor-pointer"
            onClick={() => handleViewRecipe(post.id)}
          >
            {post.title}
          </h2>
          <div
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            <div className="whitespace-pre-line">{post.description}</div>
          </div>
        </div>
        {/* <div className="flex justify-between items-center">
          <div className="flex items-center text-red-700 font-semibold text-xl">
            {post.mealType?.subcategoryName || "No Meal Type"}
          </div>
        </div> */}
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
  //         <div className="flex justify-between items-center">
  //           <div className="flex items-center text-blue-900 font-semibold text-xl">
  //             {post.mealType?.subcategoryName || "No Meal Type"}
  //           </div>
  //         </div>

  //         {/* Displaying Ingredients */}
  //         <div className="mb-4">
  //           <strong>Ingredients:</strong>
  //           <p className="text-gray-700">{post.ingredients}</p>
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
    .sort((a, b) => new Date(b.createdDT) - new Date(a.createdDT))
    .slice(0, 3);

  // Get the other recipes that are not the latest 3
  const otherRecipes = AllRecipes.filter(
    (post) => !latestRecipes.find((latestPost) => latestPost.id === post.id)
  );

  // Determine if any search or filter has been applied
  const hasSearchOrFilterBeenApplied =
    searchTerm.trim() !== "" ||
    ingredientSearchTerm.trim() !== "" ||
    selectedDietaryPreference !== "" ||
    selectedMealType !== "" ||
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
    cookingTimeMaxFilter !== "" ||
    sortOption !== "";

  return (
    <div className="p-4 md:p-10">
      <h1 className="text-3xl text-center md:text-7xl font-extrabold font-sans text-gray-900 mb-4 md:mb-8">
        Recipes
      </h1>
      <div className="flex sm:justify-between sm:items-center mb-4">
        {/* Search Section */}
        <div className="flex-grow">
          <input
            type="text"
            id="titleSearch"
            name="titleSearch"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearchClick();
              }
            }}
            placeholder={
              ingredientSearchTerm.trim() !== ""
                ? "Disabled"
                : "Search recipe title..."
            }
            disabled={ingredientSearchTerm.trim() !== ""}
            data-tooltip-id="titleSearchTooltip"
            data-tooltip-content={
              ingredientSearchTerm.trim() !== ""
                ? "Search by title is disabled while using ingredient search"
                : ""
            }
            className="mr-2 p-2 rounded-lg border w-full md:w-auto"
          />
          {/* Tooltip component activated for the input field */}
          {/* Tooltip Component */}
          <Tooltip id="titleSearchTooltip" place="top" effect="solid" />
          <button
            onClick={handleSearchClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-5 rounded-full mt-2 w-full lg:w-auto"
            style={{ flexShrink: 0 }}
          >
            Search by title
          </button>
        </div>

        {/* Sort dropdown */}
        <div className="mb-2 md:mb-0 md:mr-6">
          <label
            htmlFor="sort"
            className="text-xl text-black mb-2 sm:mb-0 sm:mr-2"
          >
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOption}
            // onChange={(e) => setSortOption(e.target.value)}
            onChange={handleSortOptionChange}
            className="mr-2 p-2 rounded-lg border w-full md:w-auto"
            style={{ maxWidth: "300px" }}
          >
            {Object.values(sortOptions).map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* Ingredient Search Section */}
      <div className="flex sm:items-center mb-4">
        <input
          type="text"
          id="ingredientSearch"
          name="ingredientSearch"
          value={ingredientSearchTerm}
          onChange={(e) => setIngredientSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleIngredientSearchClick();
            }
          }}
          placeholder={
            searchTerm.trim() !== "" ? "Disabled" : "Search by ingredient..."
          }
          disabled={searchTerm.trim() !== ""}
          data-tooltip-id="ingredientSearchTooltip"
          data-tooltip-content={
            searchTerm.trim() !== ""
              ? "Ingredient search is disabled while using title search"
              : ""
          }
          className="mr-2 p-2 rounded-lg border w-full md:w-auto"
        />
        {/* Tooltip component activated for the input field */}
        {/* Tooltip Component */}
        <Tooltip id="ingredientSearchTooltip" place="top" effect="solid" />
        <button
          onClick={handleIngredientSearchClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-5 rounded-full mt-2 w-full lg:w-auto"
          style={{ flexShrink: 0 }}
        >
          Search by ingredient
        </button>
      </div>

      {/* Results count */}
      {searchButtonClicked && searchPerformed && (
        <p className="text-left text-red font-bold text-xl sm:ml-2">
          {resultsCount} results found.
        </p>
      )}

      {/* Button to open filter option */}
      {/* Display message while fetching data ftom backend */}
      {isLoading ? (
        <div className="text-xl text-center p-4">
          <p>Please wait. It'll just take a moment.</p>
        </div>
      ) : (
        <>
          <div className="mb-5 mr-3">
            <button
              onClick={toggleFilterSection}
              className="text-gray-900 p-2 hover:text-orange-400 rounded-lg text-xl font-bold px-5 py-2.5 text-center"
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
                <div className="flex flex-col gap-4 mb-4 p-4 bg-gray-50 border rounded-lg text-xl">
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
                      // onChange={(e) =>
                      //   setSelectedDietaryPreference(e.target.value)
                      // }
                      onChange={handleDietaryPreferenceChange}
                      className="form-select mr-2 p-2 rounded-lg border w-full md:w-auto"
                    >
                      <option value="">All Dietary Preferences</option>
                      {dietaryPreferencesCategory.map((dp) => (
                        <option key={dp.id} value={dp.subcategoryName}>
                          {dp.subcategoryName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Meal Type */}
                  <div className="flex-1 min-w-[200px]">
                    <label
                      htmlFor="mealType"
                      className="text-2xl text-black font-bold mb-2 sm:mb-0 sm:mr-2"
                    >
                      Meal Type:
                    </label>
                    <select
                      value={selectedMealType}
                      onChange={handleMealTypeChange}
                      className="form-select mr-2 p-2 rounded-lg border w-full md:w-auto"
                    >
                      <option value="">All Meal Types</option>
                      {mealTypeCategory.map((mt) => (
                        <option key={mt.id} value={mt.subcategoryName}>
                          {mt.subcategoryName}
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
                        <div
                          key={allergy.id}
                          className="flex items-center mt-1"
                        >
                          <input
                            type="checkbox"
                            id={`allergy-${allergy.id}`}
                            checked={selectedAllergies.includes(
                              allergy.subcategoryName
                            )}
                            onChange={(e) =>
                              handleAllergyChange(e, allergy.subcategoryName)
                            }
                            className="w-4 h-4 bg-white border-gray-300 rounded mr-2"
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
                      <p className="text-orange-600 text-xl font-semibold mb-2">
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
                          onChange={handleCaloriesMinFilterChange}
                          className="form-control block rounded-lg border border-gray-400"
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
                          onChange={handleCaloriesMaxFilterChange}
                          className="form-control block rounded-lg border border-gray-400"
                          style={{ width: "80px" }} // adjust the width as needed
                        />
                      </div>

                      {/* Carbs */}
                      <p className="text-orange-600 text-xl font-semibold mb-2">
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
                          onChange={handleCarbsMinFilterChange}
                          className="form-control block rounded-lg border border-gray-400"
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
                          onChange={handleCarbsMaxFilterChange}
                          className="form-control block rounded-lg border border-gray-400"
                          style={{ width: "80px" }} // adjust the width as needed
                        />
                      </div>

                      {/* Protein */}
                      <p className="text-orange-600 text-xl font-semibold mb-2">
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
                          onChange={handleProteinMinFilterChange}
                          className="form-control block rounded-lg border border-gray-400"
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
                          onChange={handleProteinMaxFilterChange}
                          className="form-control block rounded-lg border border-gray-400"
                          style={{ width: "80px" }} // adjust the width as needed
                        />
                      </div>

                      {/* Fat */}
                      <p className="text-orange-600 text-xl font-semibold mb-2">
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
                          onChange={handleFatMinFilterChange}
                          className="form-control block rounded-lg border border-gray-400"
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
                          onChange={handleFatMaxFilterChange}
                          className="form-control block rounded-lg border border-gray-400"
                          style={{ width: "80px" }} // adjust the width as needed
                        />
                      </div>

                      {/* Sodium */}
                      <p className="text-orange-600 text-xl font-semibold mb-2">
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
                          onChange={handleSodiumMinFilterChange}
                          className="form-control block rounded-lg border border-gray-400"
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
                          onChange={handleSodiumMaxFilterChange}
                          className="form-control block rounded-lg border border-gray-400"
                          style={{ width: "80px" }} // adjust the width as needed
                        />
                      </div>

                      {/* Fibre */}
                      <p className="text-orange-600 text-xl font-semibold mb-2">
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
                          onChange={handleFibreMinFilterChange}
                          className="form-control block rounded-lg border border-gray-400"
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
                          onChange={handleFibreMaxFilterChange}
                          className="form-control block rounded-lg border border-gray-400"
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
                        onChange={handleCookingTimeMinFilterChange}
                        className="form-control block rounded-lg border border-gray-400"
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
                        onChange={handleCookingTimeMaxFilterChange}
                        className="form-control block rounded-lg border border-gray-400"
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
                    <h2 className="text-4xl font-bold mb-4 mt-4">
                      Latest Recipes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {latestRecipes.map((post) => renderPostCard(post))}
                    </div>
                  </div>
                  <div className="mb-5">
                    <h2 className="text-4xl font-bold mb-4 mt-4">
                      Other Recipes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {otherRecipes.map((post) => renderPostCard(post))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RecipesPageForUser;
