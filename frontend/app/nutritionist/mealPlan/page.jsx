"use client";
// import axios from "axios";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import SwapVertIcon from "@mui/icons-material/SwapVert";

// router path is /nutritionist/mealPlan

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  LOWEST_RATINGS: { key: "LOWEST_RATINGS", label: "Lowest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all meal plan from the backend - backend controller is MealPlanController
const fetchMealPlans = async () => {
  const userID = localStorage.getItem("userId");
  console.log("Current id", userID);
  try {
    const response = await axiosInterceptorInstance.get(
      "/mealPlan/findByUserId/" + userID
    );

    console.log("All meal plans belongs to this user:", response.data);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch meal plans:", error);
    throw error;
  }
};

// Fetch the average rating for each single meal plan
const fetchMealPlanAverage = async (mealPlanId) => {
  try {
    const response = await axiosInterceptorInstance.get(
      `/mealPlan/getAverage/${mealPlanId}`
    );
    console.log(
      "Average rating for meal plan",
      mealPlanId,
      "is:",
      response.data
    );
    return response.data; // Assuming this returns the average data for the meal plan
  } catch (error) {
    console.error(
      `Failed to fetch average for meal plan ${mealPlanId}:`,
      error
    );
    return null; // or handle the error as you see fit
  }
};

//http://localhost:8080/blog/getAverage/1

const MyMealPlan = () => {
  const router = useRouter();
  const [mealPlans, setMealPlans] = useState([]);
  const [displayedMealPlans, setDisplayedMealPlans] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("LATEST");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResultsCount, setSearchResultsCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [mealPlanAverageRating, setMealPlanAverageRating] = useState([]);
  const [alphabeticalOrder, setAlphabeticalOrder] = useState("AZ");
  const [datePublishedOrder, setDatePublishedOrder] = useState("LATEST");
  const [ratingsOrder, setRatingsOrder] = useState("HIGHEST");
  const [statusOrder, setStatusOrder] = useState("ACTIVE");

  // fetch all meal plans and categories from backend
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedMealPlan = await fetchMealPlans();
        const mealPlansWithAverage = await Promise.all(
          fetchedMealPlan.map(async (mealPlan) => {
            const average = await fetchMealPlanAverage(mealPlan.id);
            return { ...mealPlan, average }; // Augment each meal plan with its average
          })
        );
        console.log("mealPlan with average:", mealPlansWithAverage);
        setMealPlans(mealPlansWithAverage);
        // ... [sorting and other logic]
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    getData();

    // Fetch all meal plan categories from backend
    const fetchCategories = async () => {
      console.log("Fetching meal plan categories...");
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
  }, []);

  // All in 1 -- sort, filter, search
  useEffect(() => {
    // Start with the full list of meal plans
    let processedMealPlans = [...mealPlans];

    // Search filter
    if (searchTerm) {
      processedMealPlans = processedMealPlans.filter((mealPlan) =>
        mealPlan.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter !== "ALL") {
      processedMealPlans = processedMealPlans.filter(
        (mealPlan) => mealPlan.healthGoalCategoryId === Number(categoryFilter)
      );
    }

    // Utility function to get the date, preferring createdDT and falling back to lastUpdatedDT
    function getDateOrFallback(mealPlan) {
      return new Date(mealPlan.createdDT || mealPlan.lastUpdatedDT);
    }

    // Sorting
    switch (sortOption) {
      case "LATEST":
        processedMealPlans.sort(
          (a, b) => getDateOrFallback(b) - getDateOrFallback(a)
        );
        break;
      case "OLDEST":
        processedMealPlans.sort(
          (a, b) => getDateOrFallback(a) - getDateOrFallback(b)
        );
        break;
      case "ALPHABETICAL_AZ":
        processedMealPlans.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ALPHABETICAL_ZA":
        processedMealPlans.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "HIGHEST_RATINGS":
        processedMealPlans.sort((a, b) => {
          const ratingDiff =
            (b.average?.averageRatings || 0) - (a.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return getDateOrFallback(b) - getDateOrFallback(a); // Latest date first if tie
        });
        break;
      case "LOWEST_RATINGS":
        processedMealPlans.sort((a, b) => {
          const ratingDiff =
            (a.average?.averageRatings || 0) - (b.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return getDateOrFallback(b) - getDateOrFallback(a); // Latest date first if tie
        });
        break;
      case "STATUS_ACTIVE":
        processedMealPlans.sort((a, b) => {
          const statusDiff = b.active - a.active;
          if (statusDiff !== 0) return statusDiff;
        });
        break;

      case "STATUS_INACTIVE":
        processedMealPlans.sort((a, b) => {
          const statusDiff = a.active - b.active;
          if (statusDiff !== 0) return statusDiff;
        });
        break;
    }

    // Update the displayed meal plans
    setDisplayedMealPlans(processedMealPlans);
  }, [mealPlans, searchTerm, categoryFilter, sortOption]);

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

  // Implement handleViewMealPlan and handleUpdateMealPlan as needed
  // this function is to view particular meal plan
  const handleViewMealPlan = (id) => {
    console.log("Viewing meal plan with id:", id);

    //Redirect to the correct route
    let routePath = `/nutritionist/mealPlan/viewMealPlan/${id}`;

    router.push(routePath);
  };

  // this function is to update particular meal plan
  const handleUpdateMealPlan = (id) => {
    console.log("Updating meal plan with id:", id);

    // Redirect to the correct route
    let routePath = `/nutritionist/mealPlan/updateMealPlan/${id}`;

    router.push(routePath);
  };

  // Combined Function to toggle a meal plan active status
  const handleToggleMealPlanStatus = async (mealPlanId, isActive) => {
    const newStatus = !isActive;

    try {
      const response = await axiosInterceptorInstance.put(
        "/mealPlan/updateActivity",
        {
          id: mealPlanId,
          active: newStatus,
        }
      );

      // Check if the response is successful before updating the state
      if (response.status === 200) {
        const updatedMealPlans = mealPlans.map((mealPlan) => {
          if (mealPlan.id === mealPlanId) {
            return { ...mealPlan, active: newStatus };
          }
          return mealPlan;
        });
        setMealPlans(updatedMealPlans);
      } else {
        console.error("Failed to update the meal plan status:", response);
      }
    } catch (error) {
      console.error("Error updating meal plan status", error);
    }
  };

  // Function to delete a meal plan
  const handleDeleteMealPlan = async (id) => {
    try {
      const response = await axiosInterceptorInstance.delete(
        `/mealPlan/delete/${id}`
      );
      console.log("Meal plan deleted:", response.data);

      // Update UI after delete
      setMealPlans(mealPlans.filter((mealPlan) => mealPlan.id !== id));
    } catch (error) {
      console.error("Error deleting meal plan:", error);
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
    <div className="px-2 sm:px-5 min-h-screen flex flex-col py-5">
      <h1 className="text-6xl text-gray-900 p-3 mb-4 font-bold text-center sm:text-center">
        My Meal Plans
      </h1>
      <div>
        <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-base font-semibold px-5 py-2.5 mr-7 mb-4 text-center">
          <Link href="/nutritionist/mealPlan/createMealPlan">
            Create Meal Plan
          </Link>
        </button>
      </div>
      {/* Search Section */}
      <div className="flex flex-col mb-4 md:flex-row md:mr-2">
        {/* Search bar */}
        <div className="relative mb-3 md:mb-8 md:mr-2">
          <input
            type="text"
            id="mealPlanSearch"
            name="mealPlanSearch"
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

        {/* Filter dropdown */}
        <div className="relative md:ml-auto">
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
        </div>
      </div>

      {/* Hidden when in smaller screens */}
      {/* Table of meal plans */}
      <div className="overflow-x-auto rounded-lg hidden lg:block">
        <table className="min-w-full rounded-lg border-zinc-200 border-2">
          <thead className="bg-zinc-700 font-normal text-white border-gray-800 border-2">
            <tr className="text-center text-lg">
              <th className="px-4 py-2">
                Meal Plan Title
                <button
                  className="ml-1 focus:outline-none"
                  onClick={handleSortAlphabetically}
                >
                  <SwapVertIcon />
                </button>
              </th>
              <th className="px-4 py-2">
                Date Published
                <button
                  className="ml-1 focus:outline-none"
                  onClick={handleSortByDatePublished}
                >
                  <SwapVertIcon />
                </button>
              </th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">
                Status{" "}
                <button
                  className="ml-1 focus:outline-none"
                  onClick={handleSortByStatus}
                >
                  <SwapVertIcon />
                </button>
              </th>
              <th className="px-3 py-2">
                Ratings{" "}
                <button
                  className="ml-1 focus:outline-none"
                  onClick={handleSortByRatings}
                >
                  <SwapVertIcon />
                </button>
              </th>
              <th className="px-3 py-2"></th>
              <th className="px-3 py-2"></th>
              <th className="px-3 py-2"></th>
              <th className="px-3 py-2"></th>
              <th className="px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {displayedMealPlans.map((mealPlan, index) => (
              <tr key={index} className="bg-white border-b">
                <td className="px-3 py-2 text-base text-center">
                  {mealPlan.title}
                </td>
                <td className="px-3 py-2 text-base text-center">
                  {new Date(
                    mealPlan?.createdDT || mealPlan.lastUpdatedDT
                  ).toLocaleDateString("en-GB")}
                </td>
                <td className="px-3 py-2 text-base text-center">
                  {mealPlan.healthGoal
                    ? mealPlan.healthGoal.subcategoryName
                    : "Not specified"}
                </td>

                <td className="px-3 py-2 text-base text-center">
                  <span
                    className={`rounded-full px-3 py-1 text-base font-semibold ${
                      mealPlan.active
                        ? "text-white bg-green-500"
                        : "text-white bg-red-500"
                    }`}
                  >
                    {mealPlan.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-3 py-2 text-base text-center">
                  <div
                    className="rating-container"
                    style={{ minWidth: "100px" }}
                  >
                    {mealPlan.average !== null &&
                    typeof mealPlan.average.averageRatings === "number" &&
                    typeof mealPlan.average.totalNumber === "number" ? (
                      <span
                        className="rating-text"
                        style={{ fontWeight: "bold", color: "#0a0a0a" }}
                      >
                        {mealPlan.average.averageRatings.toFixed(1)}
                      </span>
                    ) : (
                      "No ratings yet"
                    )}
                    {mealPlan.average && mealPlan.average.totalNumber > 0 && (
                      <span
                        className="rating-count"
                        style={{ fontSize: "0.8rem", color: "#666" }}
                      >
                        ({mealPlan.average.totalNumber} rating
                        {mealPlan.average.totalNumber !== 1 ? "s" : ""})
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-3 py-2 text-base text-center"></td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() => handleViewMealPlan(mealPlan.id)}
                    className="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
                  >
                    {" "}
                    View
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() => handleUpdateMealPlan(mealPlan.id)}
                    className="text-white font-bold bg-slate-700 hover:bg-slate-800 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
                  >
                    {" "}
                    Edit
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() =>
                      handleToggleMealPlanStatus(mealPlan.id, mealPlan.active)
                    }
                    className={`text-white font-bold ${
                      mealPlan.active
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-stone-400 hover:bg-stone-500"
                    } rounded-lg text-base px-5 py-2 text-center`}
                  >
                    {mealPlan.active ? "Suspend" : "Unsuspend"}
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() => handleDeleteMealPlan(mealPlan.id)}
                    className="text-white font-bold bg-red-600 hover:bg-red-700 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
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

      {/* Mobile View for Tables */}
      <div className="mx-auto items-center lg:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {displayedMealPlans.map((mealPlan, index) => (
            <div
              key={index}
              className="bg-white p-5 h-full flex flex-col border border-gray-300 rounded-2xl shadow"
            >
              {/* Title */}
              <p className="px-3 py-2 text-lg">
                <span className="font-semibold text-gray-900">Title: </span>
                <span className="font-normal text-gray-900">
                  {mealPlan.title}
                </span>
              </p>

              {/* Date Published */}
              <p className="px-3 py-2 text-lg">
                <span className="font-semibold text-gray-900">
                  Date Published:{" "}
                </span>
                <span className="font-normal text-gray-900">
                  {new Date(
                    mealPlan?.createdDT || mealPlan.lastUpdatedDT
                  ).toLocaleDateString("en-GB")}
                </span>
              </p>

              {/* Category */}
              <p className="px-3 py-2 text-lg">
                <span className="font-semibold text-gray-900">Category: </span>
                <span className="font-normal text-gray-900">
                  {mealPlan.healthGoal
                    ? mealPlan.healthGoal.subcategoryName
                    : "Not specified"}
                </span>
              </p>

              {/* Status */}
              <p className="px-3 py-2 text-lg">
                <span className="font-semibold text-gray-900 mr-2">
                  Status:{" "}
                </span>
                <span
                  className={`rounded-full px-3 py-1 text-base font-semibold ${
                    mealPlan.active
                      ? "text-white bg-green-500"
                      : "text-white bg-red-500"
                  }`}
                >
                  {mealPlan.active ? "Active" : "Inactive"}
                </span>
              </p>

              {/* Ratings */}
              <div className="px-3 py-2 text-lg">
                <div
                  className="rating-container flex flex-row gap-2"
                  style={{ minWidth: "100px" }}
                >
                  <p className="font-semibold text-gray-900">Ratings: </p>

                  {mealPlan.average !== null &&
                  typeof mealPlan.average.averageRatings === "number" &&
                  typeof mealPlan.average.totalNumber === "number" ? (
                    <span
                      className="rating-text"
                      style={{ fontWeight: "bold", color: "#0a0a0a" }}
                    >
                      {mealPlan.average.averageRatings.toFixed(1)}
                    </span>
                  ) : (
                    "No ratings yet"
                  )}
                  {mealPlan.average && mealPlan.average.totalNumber > 0 && (
                    <span
                      className="rating-count"
                      style={{ fontSize: "0.8rem", color: "#666" }}
                    >
                      ({mealPlan.average.totalNumber} rating
                      {mealPlan.average.totalNumber !== 1 ? "s" : ""})
                    </span>
                  )}
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-2 flex flex-col space-y-3 items-center">
                <button
                  onClick={() => handleViewMealPlan(mealPlan.id)}
                  className="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg text-base w-full px-5 py-2 ml-2 mr-2 text-center"
                >
                  View
                </button>
                <button
                  onClick={() => handleUpdateMealPlan(mealPlan.id)}
                  className="text-white font-bold bg-slate-700 hover:bg-slate-800 rounded-lg text-base w-full px-5 py-2 ml-2 mr-2 text-center"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    handleToggleMealPlanStatus(mealPlan.id, mealPlan.active)
                  }
                  className={`text-white font-bold  ${
                    mealPlan.active
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-stone-400 hover:bg-stone-500"
                  } focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 w-full ml-2 mr-2 text-center`}
                >
                  {mealPlan.active ? "Suspend" : "Unsuspend"}
                </button>
                <button
                  onClick={() => handleDeleteMealPlan(mealPlan.id)}
                  className="text-white font-bold bg-red-600 hover:bg-red-700 rounded-lg text-base px-5 py-2.5 w-full ml-2 mr-2 text-center"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyMealPlan;
