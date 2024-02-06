"use client";
// import axios from "axios";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SysAdminNavBar from "../../components/navigation/sysAdminNavBar";
import SecureStorage from "react-secure-storage";

// router path is /sysAdmin/suspendRecipe

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
  try {
    const response = await axiosInterceptorInstance.get("/recipe/get");
    console.log("All recipes :", response.data);

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

const SuspendRecipe = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState([]);
  const [displayedRecipes, setDisplayedRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("LATEST");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResultsCount, setSearchResultsCount] = useState(0);
  const [alphabeticalOrder, setAlphabeticalOrder] = useState("AZ");
  const [datePublishedOrder, setDatePublishedOrder] = useState("LATEST");
  const [ratingsOrder, setRatingsOrder] = useState("HIGHEST");
  const [statusOrder, setStatusOrder] = useState("ACTIVE");
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // New state variable

  // fetch all business blog posts and categories from backend
  useEffect(() => {
    const token = SecureStorage.getItem("token");
    const role = SecureStorage.getItem("role");

    if (!token || role !== "ADMIN") {
      // If token is invalid or role is not ADMIN
      SecureStorage.clear();
      router.push("/");
      return;
    } else {
      const fetchData = async () => {
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
        } catch (error) {
          console.error("Error while fetching data:", error);
        }
      };

      const fetchDataAndCategories = async () => {
        await Promise.all([fetchData()]);
        setIsLoading(false);
      };

      fetchDataAndCategories();
    }
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
      case "STATUS_ACTIVE":
        processedRecipes.sort((a, b) => {
          const statusDiff = b.active - a.active;
          if (statusDiff !== 0) return statusDiff;
          return getDateOrFallback(b) - getDateOrFallback(a); // Latest date first if tie
        });
        break;

      case "STATUS_INACTIVE":
        processedRecipes.sort((a, b) => {
          const statusDiff = a.active - b.active;
          if (statusDiff !== 0) return statusDiff;
          return getDateOrFallback(b) - getDateOrFallback(a); // Latest date first if tie
        });
        break;
    }

    // Update the displayed blogs
    setDisplayedRecipes(processedRecipes);
  }, [recipes, searchTerm, sortOption]);

  // Sort by alphabetical order
  const handleSortAlphabetically = () => {
    if (alphabeticalOrder === "AZ") {
      setSortOption("ALPHABETICAL_AZ");
      setAlphabeticalOrder("ZA");
    } else {
      setSortOption("ALPHABETICAL_ZA");
      setAlphabeticalOrder("AZ");
    }
  };

  // Sort by date published order
  const handleSortByDatePublished = () => {
    if (datePublishedOrder === "LATEST") {
      setSortOption("OLDEST");
      setDatePublishedOrder("OLDEST");
    } else {
      setSortOption("LATEST");
      setDatePublishedOrder("LATEST");
    }
  };

  // Sort by ratings order
  const handleSortByRatings = () => {
    if (ratingsOrder === "HIGHEST") {
      setSortOption("LOWEST_RATINGS");
      setRatingsOrder("LOWEST");
    } else {
      setSortOption("HIGHEST_RATINGS");
      setRatingsOrder("HIGHEST");
    }
  };

  // Sort by status order
  const handleSortByStatus = () => {
    if (statusOrder === "ACTIVE") {
      setSortOption("STATUS_INACTIVE");
      setStatusOrder("INACTIVE");
    } else {
      setSortOption("STATUS_ACTIVE");
      setStatusOrder("ACTIVE");
    }
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
    <div>
      {isLoading ? (
        <div className="text-xl text-center p-4">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <div className="px-2 sm:px-5 min-h-screen flex flex-col py-5">
            <SysAdminNavBar />
            <h1 className="text-6xl text-gray-900 p-3 mb-4 font-bold text-center sm:text-center">
              All Recipes
            </h1>

            {/* Search and Sort Section */}
            <div className="relative mb-4 md:mb-8 md:mr-2">
              <input
                type="text"
                id="recipeSearch"
                name="recipeSearch"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title"
                className="mr-2 p-2 rounded-lg border w-full md:w-auto pl-10"
              />
              {/* Search icon */}
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <SearchIcon />
              </span>
            </div>

            {/* Table of recipes */}
            <div className="overflow-x-auto rounded-lg hidden lg:block">
              <table className="min-w-full rounded-lg border-zinc-200 border-2">
                <thead className="bg-zinc-700 font-normal tracking-normal text-white border-gray-800 border-2">
                  <tr className="text-center text-lg">
                    <th className="px-3 py-2">
                      Recipe Title
                      <button
                        className="ml-1 focus:outline-none"
                        onClick={handleSortAlphabetically}
                      >
                        <SwapVertIcon />
                      </button>
                    </th>
                    <th className="px-3 py-2">Publisher</th>
                    <th className="px-3 py-2">Company</th>
                    <th className="px-3 py-2">
                      Date Published
                      <button
                        className="ml-1 focus:outline-none"
                        onClick={handleSortByDatePublished}
                      >
                        <SwapVertIcon />
                      </button>
                    </th>
                    <th className="px-3 py-2">
                      Status
                      <button
                        className="ml-1 focus:outline-none"
                        onClick={handleSortByStatus}
                      >
                        <SwapVertIcon />
                      </button>
                    </th>
                    <th className="px-3 py-2">
                      Ratings
                      <button
                        className="ml-1 focus:outline-none"
                        onClick={handleSortByRatings}
                      >
                        <SwapVertIcon />
                      </button>
                    </th>
                    <th className="px-3 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {displayedRecipes.map((recipe, index) => (
                    <tr key={index} className="bg-white border-b">
                      <td className="px-3 py-2 text-base text-center">
                        {recipe.title}
                      </td>
                      <td className="px-3 py-2 text-base text-center">
                        {recipe.userID?.fullName || "nil"}
                      </td>
                      <td className="px-3 py-2 text-base text-center">
                        {recipe.userID?.companyName || "nil"}
                      </td>
                      <td className="px-3 py-2 text-base text-center">
                        {new Date(
                          recipe?.createdDT || recipe.lastUpdatedDT
                        ).toLocaleDateString("en-GB")}
                      </td>

                      <td className="px-3 py-2 text-base text-center">
                        <span
                          className={`rounded-full px-3 py-1 text-base font-semibold ${
                            recipe.active
                              ? "text-white bg-green-500"
                              : "text-white bg-red-500"
                          }`}
                        >
                          {recipe.active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-base text-center">
                        <div
                          className="rating-container flex flex-col"
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

                      <td className="px-3 py-2 text-base text-center">
                        <button
                          onClick={() =>
                            handleToggleRecipeStatus(recipe.id, recipe.active)
                          }
                          className={`text-white font-bold  ${
                            recipe.active
                              ? "bg-red-600 hover:bg-red-700"
                              : "bg-stone-400 hover:bg-stone-500"
                          } focus:ring-4 focus:outline-none focus:ring-blue-300
    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 text-center`}
                        >
                          {recipe.active ? "Suspend" : "Unsuspend"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Mobile View for Tables */}
            <div className="mx-auto items-center lg:hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {displayedRecipes.map((recipe, index) => (
                  <div
                    key={index}
                    className="bg-white p-5 h-full flex flex-col border border-gray-300 rounded-2xl shadow"
                  >
                    {/* Title */}
                    <p className="px-3 py-2 text-lg">
                      <span className="font-semibold text-gray-900">
                        Title:{" "}
                      </span>
                      <span className="font-normal text-gray-900">
                        {recipe.title}
                      </span>
                    </p>

                    {/* Name */}
                    <p className="px-3 py-2 text-lg">
                      <span className="font-semibold text-gray-900">
                        Publisher:{" "}
                      </span>
                      <span className="font-normal text-gray-900">
                        {recipe.userID?.fullName || "nil"}
                      </span>
                    </p>

                    {/* Company Name */}
                    <p className="px-3 py-2 text-lg">
                      <span className="font-semibold text-gray-900">
                        Company Name:{" "}
                      </span>
                      <span className="font-normal text-gray-900">
                        {recipe.userID?.companyName || "nil"}
                      </span>
                    </p>

                    {/* Date Published */}
                    <p className="px-3 py-2 text-lg">
                      <span className="font-semibold text-gray-900">
                        Date Published:{" "}
                      </span>
                      <span className="font-normal text-gray-900">
                        {new Date(
                          recipe?.createdDT || recipe.lastUpdatedDT
                        ).toLocaleDateString("en-GB")}
                      </span>
                    </p>

                    {/* Status */}
                    <p className="px-3 py-2 text-lg">
                      <span className="font-semibold text-gray-900 mr-2">
                        Status:{" "}
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-base font-semibold ${
                          recipe.active
                            ? "text-white bg-green-500"
                            : "text-white bg-red-500"
                        }`}
                      >
                        {recipe.active ? "Active" : "Inactive"}
                      </span>
                    </p>

                    {/* Ratings */}
                    <div className="px-3 py-2 text-lg">
                      <div
                        className="rating-container flex flex-row gap-2"
                        style={{ minWidth: "100px" }}
                      >
                        <p className="font-semibold text-gray-900">Ratings: </p>

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
                    </div>

                    {/* Buttons */}
                    <div className="mt-2 flex flex-col space-y-3 items-center">
                      <button
                        onClick={() =>
                          handleToggleRecipeStatus(recipe.id, recipe.active)
                        }
                        className={`text-white font-bold  ${
                          recipe.active
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-stone-400 hover:bg-stone-500"
                        } focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 w-full ml-2 mr-2 text-center`}
                      >
                        {recipe.active ? "Suspend" : "Unsuspend"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SuspendRecipe;
