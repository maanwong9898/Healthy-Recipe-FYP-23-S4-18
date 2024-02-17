"use client";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SysAdminNavBar from "../../components/navigation/sysAdminNavBar";
import SecureStorage from "react-secure-storage";
import { QueryClientProvider, useQuery } from "react-query"; // Added useQuery here
import { queryClient } from "../../queryClient.js"; // Adjust the path as necessary
import { useMutation } from "react-query";

// router path is /sysAdmin/suspendMealPlan

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all meal plan from the backend - backend controller is MealPlanController
const fetchMealPlans = async () => {
  try {
    const response = await axiosInterceptorInstance.get("/mealPlan/get");

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

    return response.data; // Assuming this returns the average data for the meal plan
  } catch (error) {
    console.error(
      `Failed to fetch average for meal plan ${mealPlanId}:`,
      error
    );
    return null; // or handle the error as you see fit
  }
};

const fetchCategories = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "category/getAllHealthGoals"
    );
    // setCategories(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

// Assuming axiosInterceptorInstance is correctly set up
const toggleMealPlanActiveStatus = async ({ mealPlanId, active }) => {
  return axiosInterceptorInstance.put("/mealPlan/updateActivity", {
    id: mealPlanId,
    active,
  });
};

const SuspendMealPlan = () => {
  const router = useRouter();
  const [displayedMealPlans, setDisplayedMealPlans] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("LATEST");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResultsCount, setSearchResultsCount] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [alphabeticalOrder, setAlphabeticalOrder] = useState("AZ");
  const [datePublishedOrder, setDatePublishedOrder] = useState("LATEST");
  const [statusOrder, setStatusOrder] = useState("ACTIVE");
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Perform your token and role check here
    const token = SecureStorage.getItem("token");
    const role = SecureStorage.getItem("role");
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    // Replace 'ADMIN' with the actual role you're checking for
    if (!token || role !== "ADMIN" || now >= parseInt(tokenExpiration)) {
      // If the user is not authorized, redirect them
      router.push("/"); // Adjust the route as needed
    } else {
      setIsChecking(false);
      // If the user is authorized, allow the component to proceed
      setIsAuthorized(true);
    }
  }, []);

  // Fetch all meal plans
  const { data: mealPlans, isLoading } = useQuery("mealPlans", fetchMealPlans);

  // Fetch categorieg
  const { data: categories, isLoading: isCategoriesLoading } = useQuery(
    "categories",
    fetchCategories
  );

  // All in 1 -- sort, filter, search
  useEffect(() => {
    // Ensure mealPlans is loaded and is an array before processing
    if (mealPlans && Array.isArray(mealPlans)) {
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
    }
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

  // Adjust this mutation setup
  const mutation = useMutation(toggleMealPlanActiveStatus, {
    onSuccess: () => {
      queryClient.invalidateQueries("mealPlans");
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  // This is your event handler to toggle the status
  const handleToggleMealPlanStatus = (mealPlanId, isActive) => {
    mutation.mutate({ mealPlanId, active: !isActive });
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
    <QueryClientProvider client={queryClient}>
      <div>
        {isLoading && isChecking ? (
          <div>Checking...</div>
        ) : (
          <>
            <div className="px-2 sm:px-5 min-h-screen flex flex-col py-5">
              <SysAdminNavBar />
              <h1 className="text-6xl text-gray-900 p-3 mb-4 font-bold text-center sm:text-center">
                All Meal Plans
              </h1>
              {isLoading ? (
                <div className="text-xl text-center p-4">
                  <p>Please wait. It'll just take a moment.</p>
                </div>
              ) : (
                <>
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
                          <option
                            key={index}
                            value={category.id}
                            className="text-black"
                          >
                            {category.subcategoryName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Table of meal plans */}

                  <div className="overflow-x-auto rounded-lg hidden lg:block">
                    <table className="min-w-full rounded-lg border-zinc-200 border-2">
                      <thead className="bg-zinc-700 font-normal text-white border-gray-800 border-2">
                        <tr className="text-center text-lg">
                          <th className="px-3 py-2">
                            Meal Plan Title
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
                          <th className="px-3 py-2">Category</th>
                          <th className="px-3 py-2">
                            Status
                            <button
                              className="ml-1 focus:outline-none"
                              onClick={handleSortByStatus}
                            >
                              <SwapVertIcon />
                            </button>
                          </th>
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
                              {mealPlan.userID?.fullName || "nil"}
                            </td>
                            <td className="px-3 py-2 text-base text-center">
                              {mealPlan.userID?.companyName || "nil"}
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
                            <td className="px-3 py-2 text-base text-center"></td>
                            <td className="px-3 py-2 justify-center sm:justify-start">
                              <button
                                onClick={() =>
                                  handleToggleMealPlanStatus(
                                    mealPlan.id,
                                    mealPlan.active
                                  )
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
                            <span className="font-semibold text-gray-900">
                              Title:{" "}
                            </span>
                            <span className="font-normal text-gray-900">
                              {mealPlan.title}
                            </span>
                          </p>

                          {/* Name */}
                          <p className="px-3 py-2 text-lg">
                            <span className="font-semibold text-gray-900">
                              Publisher:{" "}
                            </span>
                            <span className="font-normal text-gray-900">
                              {mealPlan.userID?.fullName || "nil"}
                            </span>
                          </p>

                          {/* Company Name */}
                          <p className="px-3 py-2 text-lg">
                            <span className="font-semibold text-gray-900">
                              Company Name:{" "}
                            </span>
                            <span className="font-normal text-gray-900">
                              {mealPlan.userID?.companyName || "nil"}
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
                            <span className="font-semibold text-gray-900">
                              Category:{" "}
                            </span>
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
                          
                          {/* Buttons */}
                          <div className="mt-2 flex flex-col space-y-3 items-center">
                            <button
                              onClick={() =>
                                handleToggleMealPlanStatus(
                                  mealPlan.id,
                                  mealPlan.active
                                )
                              }
                              className={`text-white font-bold  ${
                                mealPlan.active
                                  ? "bg-red-600 hover:bg-red-700"
                                  : "bg-stone-400 hover:bg-stone-500"
                              } focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 w-full ml-2 mr-2 text-center`}
                            >
                              {mealPlan.active ? "Suspend" : "Unsuspend"}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </QueryClientProvider>
  );
};

const WrappedSuspendMealPlansPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SuspendMealPlan />
    </QueryClientProvider>
  );
};

export default WrappedSuspendMealPlansPage;
