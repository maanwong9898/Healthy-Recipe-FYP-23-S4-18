"use client";
// import axios from "axios";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// router path is /businessUser/recipes

// Things to do:
// **** will replace userId with localStorage.getItem("id") later ****
// View particular recipe
// Update particular recipe

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  LOWEST_RATINGS: { key: "LOWEST_RATINGS", label: "Lowest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all recipes from the backend - backend controller is Recipe Controller
const fetchRecipes = async () => {
  const userID = localStorage.getItem("userId");
  console.log("Current id", userID);
  try {
    const response = await axiosInterceptorInstance.get(
      "/recipe/findByUserId/" + userID
    );
    console.log("All recipes belongs to this user:", response.data);

    return response.data;
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

const MyRecipes = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("LATEST");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResultsCount, setSearchResultsCount] = useState(0);

  // fetch all recipes from backend
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedRecipe = await fetchRecipes();
        const recipesWithAverage = await Promise.all(
          fetchedRecipe.map(async (recipe) => {
            const average = await fetchRecipeAverage(recipe.id);
            return { ...recipe, average }; // Augment each recipe with its average
          })
        );
        console.log("Recipe with average:", recipesWithAverage);
        setRecipes(recipesWithAverage);
        // ... [sorting and other logic]
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    getData();
  }, []);

  // All in 1 -- sort, search
  useEffect(() => {
    // Start with the full list of blogs
    let processedRecipes = [...recipes];

    // Search filter
    if (searchTerm) {
      processedRecipes = processedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    // if (categoryFilter !== "ALL") {
    //   processedBlogs = processedBlogs.filter(
    //     (recipe) => recipe.blogTypeId === Number(categoryFilter)
    //   );
    // }

    // Utility function to get the date, preferring createdDT and falling back to lastUpdatedDT
    function getDateOrFallback(recipe) {
      return new Date(recipe.createdDT || recipe.lastUpdatedDT);
    }

    // Sorting
    switch (sortOption) {
      case "LATEST":
        processedRecipes.sort(
          (a, b) => getDateOrFallback(b) - getDateOrFallback(a)
        );
        break;
      case "OLDEST":
        processedRecipes.sort(
          (a, b) => getDateOrFallback(a) - getDateOrFallback(b)
        );
        break;
      case "ALPHABETICAL_AZ":
        processedRecipes.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ALPHABETICAL_ZA":
        processedRecipes.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "HIGHEST_RATINGS":
        processedRecipes.sort((a, b) => {
          const ratingDiff =
            (b.average?.averageRatings || 0) - (a.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return getDateOrFallback(b) - getDateOrFallback(a); // Latest date first if tie
        });
        break;
      case "LOWEST_RATINGS":
        processedRecipes.sort((a, b) => {
          const ratingDiff =
            (a.average?.averageRatings || 0) - (b.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return getDateOrFallback(b) - getDateOrFallback(a); // Latest date first if tie
        });
        break;
      // ... other sorting cases
    }

    // Update the displayed blogs
    setDisplayedRecipes(processedRecipes);
  }, [recipes, searchTerm, sortOption]);

  // Implement handleViewRecipe and handleUpdateRecipe as needed
  // this function is to view particular recipe
  const handleViewRecipe = (id) => {
    console.log("Viewing recipe with id:", id);

    //Redirect to the correct route
    let routePath = `/businessUser/recipes/viewRecipe/${id}`;

    router.push(routePath);
  };

  // this function is to update particular recipe
  const handleUpdateRecipe = (id) => {
    console.log("Updating recipe with id:", id);

    // Redirect to the correct route
    let routePath = `/businessUser/recipes/updateRecipe/${id}`;

    router.push(routePath);
  };

  // To suspend or unsuspend a recipe
  const handleToggleRecipeStatus = async (recipeID, isActive) => {
    const newStatus = !isActive;

    try {
      const response = await axiosInterceptorInstance.put(
        "/recipe/updateActivity",
        {
          id: recipeID,
          active: newStatus,
        }
      );

      // Check if the response is successful before updating the state
      if (response.status === 200) {
        const updatedRecipes = recipes.map((recipe) => {
          if (recipe.id === recipeID) {
            return { ...recipe, active: newStatus };
          }
          return recipe;
        });
        setRecipes(updatedRecipes);
      } else {
        console.error("Failed to update the recipe status:", response);
      }
    } catch (error) {
      console.error("Error updating recipe status", error);
    }
  };

  // Function to delete a recipe
  const handleDeleteRecipe = async (id) => {
    try {
      const response = await axiosInterceptorInstance.delete(
        `/recipe/delete/${id}`
      );
      console.log("Recipe deleted:", response.data);

      // Update UI after delete
      setRecipes(recipes.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting recipe:", error);
      // Handle error, maybe show a message to the user
    }
  };

  // Function to handle search when user clicks the search button
  const handleSearchClick = () => {
    setSearchPerformed(true); // Indicates that a search was performed

    if (!searchTerm.trim()) {
      // If the search term is empty, reset relevant states
      setIsSearchEmpty(true);
      setSearchResultsCount(0);
    } else {
      // If there is a search term, the useEffect will handle filtering
      setIsSearchEmpty(false);
    }
  };

  return (
    <div className="px-2 sm:px-5 bg-cyan-800 min-h-screen flex flex-col py-5">
      <h1 className="text-2xl text-white p-3 mb-4 font-bold text-center sm:text-left">
        My Recipes
      </h1>
      <div>
        <button className="text-white border-2 border-black bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 mr-7 mb-4 text-center">
          <Link href="/businessUser/recipes/createRecipe">Create Recipe</Link>
        </button>
      </div>
      {/* Search and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        {/* Search bar */}
        <div className="mb-4 md:mb-0 md:mr-2">
          <input
            type="text"
            id="blogSearch" // Adding an id attribute here
            name="blogSearch" // Adding a name attribute here
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search blog posts"
            className="mr-2 p-2 rounded-lg borde w-full md:w-auto"
          />

          <button
            onClick={handleSearchClick}
            className="text-white bg-blue-600 hover:bg-blue-700 rounded-full text-base font-semibold px-5 py-1 w-full md:w-auto mt-3 md:mt-0 md:ml-2"
          >
            Search
          </button>
          {/* "Results found" message */}
          {/* {searchPerformed && !isSearchEmpty && (
            <p className="text-left text-white font-bold text-xl">
              {searchResultsCount} results found.
            </p>
          )} */}
          {/* "No results found" message */}
          {/* {searchPerformed && isSearchEmpty && (
            <p className="text-left text-white font-bold text-xl">
              No results found.
            </p>
          )} */}
        </div>

        {/* Sort dropdown and filter dropdown */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Sort dropdown */}
          <div className="mb-2 md:mb-0 md:mr-6">
            <label htmlFor="sort" className="mr-2 font-2xl text-gray-900">
              Sort By:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 rounded-lg border mr-6"
            >
              {Object.values(sortOptions).map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {/* Filter dropdown */}
          {/* <div className="mb-2 md:mb-0 md:mr-6">
            <label
              htmlFor="categoryFilter"
              className="ml-2 mr-2 font-2xl text-gray-900"
            >
              Filter By:
            </label>
            <select
              id="categoryFilter"
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="p-2 rounded-lg border"
            >
              <option value="ALL">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category.id} className="text-black">
                  {category.subcategoryName}
                </option>
              ))}
            </select>
          </div> */}
        </div>
      </div>

      {/* Table of recipes */}
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-black border-2">
          <thead className="bg-cyan-600 font-semibold text-cyan-950 border-black border-2">
            <tr className="text-center text-xl">
              <th className="px-3 py-2">Recipe Title</th>
              <th className="px-3 py-2">Date Published</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Ratings</th>
              <th className="px-3 py-2"></th>
              <th className="px-3 py-2"></th>
              <th className="px-3 py-2"></th>
              <th className="px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {displayedRecipes.map((recipe, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-base text-center">
                  {recipe.title}
                </td>
                <td className="px-3 py-2 text-base text-center">
                  {new Date(
                    recipe?.createdDT || recipe.lastUpdatedDT
                  ).toLocaleDateString("en-GB")}
                </td>
                {/* <td className="px-3 py-2 text-base text-center">
                  {recipe.blogType
                    ? recipe.blogType.subcategoryName
                    : "Not specified"}
                </td> */}
                <td className="px-3 py-2 text-base text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-base font-semibold ${
                      recipe.active
                        ? "text-white bg-gradient-to-br from-cyan-400 to-cyan-600"
                        : "text-white bg-gradient-to-br from-orange-600 to-red-700"
                    }`}
                  >
                    {recipe.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-3 py-2 text-base text-center">
                  <div
                    className="rating-container"
                    style={{ minWidth: "100px" }}
                  >
                    {recipe.average !== null &&
                    typeof recipe.average.averageRatings === "number" &&
                    typeof recipe.average.totalNumber === "number" ? (
                      <span
                        className="rating-text"
                        style={{ fontWeight: "bold", color: "#0a0a0a" }}
                      >
                        {recipe.average.averageRatings.toFixed(1)}
                      </span>
                    ) : (
                      "No ratings yet"
                    )}
                    {recipe.average && recipe.average.totalNumber > 0 && (
                      <span
                        className="rating-count"
                        style={{ fontSize: "0.8rem", color: "#666" }}
                      >
                        ({recipe.average.totalNumber} rating
                        {recipe.average.totalNumber !== 1 ? "s" : ""})
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() => handleViewRecipe(recipe.id)}
                    className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-2
                    mr-2 text-center"
                  >
                    {" "}
                    View
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() => handleUpdateRecipe(recipe.id)}
                    className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-2
                    mr-2 text-center"
                  >
                    {" "}
                    Edit
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() =>
                      handleToggleRecipeStatus(recipe.id, recipe.active)
                    }
                    className={`text-white font-bold bg-gradient-to-br border-black border-2 ${
                      recipe.active
                        ? "from-orange-600 to-red-700 hover:bg-gradient-to-bl"
                        : "from-blue-400 to-purple-600 hover:bg-gradient-to-bl"
                    } focus:ring-4 focus:outline-none focus:ring-blue-300
    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 text-center`}
                  >
                    {recipe.active ? "Suspend" : "Unsuspend"}
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() => handleDeleteRecipe(recipe.id)}
                    className="text-white font-bold bg-gradient-to-br from-orange-600 to-red-700 hover:bg-gradient-to-bl border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-7
                    mr-7 text-center"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyRecipes;
