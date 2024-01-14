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
  // HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  // LOWEST_RATINGS: { key: "LOWEST_RATINGS", label: "Lowest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all recipes from the backend - backend controller is Recipe Controller
const fetchRecipes = async () => {
  const userID = localStorage.getItem("id");
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

const MyRecipes = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("LATEST");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResultsCount, setSearchResultsCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("first time render");
        const fetchedRecipe = await fetchRecipes();
        console.log("Fetched recipes:", fetchedRecipe);

        // Set the fetched data in recipes state
        setRecipes(fetchedRecipe);

        // Now sort the fetched data immediately
        const sortedRecipes = [...fetchedRecipe].sort(
          (a, b) => new Date(b.createdDT) - new Date(a.createdDT)
        );

        console.log("first time render sortedRecipes***:", sortedRecipes);

        // Set the sorted recipes as displayedRecipes
        setDisplayedRecipes(sortedRecipes);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    let sortedRecipes = [...recipes]; // Create a copy of the original recipe list

    console.log(
      "Before sorting:",
      sortedRecipes.map((recipe) => recipe.createdDT)
    );

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
      // ... other sorting cases for ratings and reviews
    }

    console.log(
      "After sorting:",
      sortedRecipes.map((recipe) => recipe.createdDT)
    );

    console.log("force render");

    setDisplayedRecipes([...sortedRecipes]);
    // check what is sortedRecipes
    console.log("sortedRecipes:", sortedRecipes);

    console.log("Displayed recipes after sorting:", displayedRecipes);
  }, [sortOption, recipes]);

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
  const handleSearchClick = async () => {
    setSearchPerformed(true); // Indicates that a search was performed

    if (!searchTerm.trim()) {
      setDisplayedRecipes(recipes); // Reset to original list if search term is empty
      setIsSearchEmpty(false);
      setSearchPerformed(false); // No search performed if the term is empty
      setSearchResultsCount(0); // Reset search results count
      return;
    }

    // Assuming you have a way to get the current user's ID
    const currentUserId = "3"; // Replace this with actual logic to retrieve the user's ID

    try {
      const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+");
      const response = await axiosInterceptorInstance.get(
        `/recipe/find?keyword=${formattedSearchTerm}`
      );
      console.log("Search results:", response.data);

      // Filter the search results to only include recipes from the current user
      const filteredResults = response.data.filter(
        (recipe) => recipe.userID.id === currentUserId
      );

      if (filteredResults.length > 0) {
        setDisplayedRecipes(filteredResults);
        setIsSearchEmpty(false);
        setSearchResultsCount(filteredResults.length); // Update search results count
      } else {
        setDisplayedRecipes(recipes); // Keep the original list displayed
        setIsSearchEmpty(true);
        setSearchResultsCount(0); // No results found
      }
    } catch (error) {
      console.error("Error searching recipe:", error);
      // Optionally handle the error, e.g., display an error message
    }
  };

  useEffect(() => {
    // If the search term is cleared, show the original list and hide the "No results" message
    if (!searchTerm.trim()) {
      console.log("Search term is empty");
      setDisplayedRecipes(displayedRecipes);
      setIsSearchEmpty(false);
      setSearchPerformed(false); // Reset search status when search term is cleared
      // setSearchResultsCount(0); // Reset search results count
    }
  }, [searchTerm, displayedRecipes]);

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
      <div className="flex justify-between items-center mb-4">
        <div>
          <input
            type="text"
            id="recipeSearch" // Adding an id attribute here
            name="recipeSearch" // Adding a name attribute here
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search recipes..."
            className="mr-2 p-2 rounded border"
          />

          <button
            onClick={handleSearchClick}
            className="text-white border-2 border-black bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 mr-7 mb-3 mt-3 text-center"
          >
            Search
          </button>
          {/* "Results found" message */}
          {searchPerformed && !isSearchEmpty && (
            <p className="text-left text-white font-bold text-xl">
              {searchResultsCount} results found.
            </p>
          )}
          {/* "No results found" message */}
          {searchPerformed && isSearchEmpty && (
            <p className="text-left text-white font-bold text-xl">
              No results found.
            </p>
          )}
        </div>
        <div>
          <label htmlFor="sort" className="mr-2 font-2xl text-white">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-2 rounded border"
          >
            {Object.values(sortOptions).map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table of recipes */}
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-black border-2">
          <thead className="bg-cyan-600 font-semibold text-cyan-950 border-black border-2">
            <tr className="text-center text-xl">
              <th className="px-3 py-2">Recipe Title</th>
              <th className="px-3 py-2">Date Published</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Status</th>
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
                  {new Date(recipe.createdDT).toLocaleDateString("en-GB")}
                </td>
                <td className="px-3 py-2 text-base text-center">
                  {recipe.blogType
                    ? recipe.blogType.subcategoryName
                    : "Not specified"}
                </td>
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
