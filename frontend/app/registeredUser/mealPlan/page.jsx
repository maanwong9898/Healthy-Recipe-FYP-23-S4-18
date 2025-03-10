"use client";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { QueryClientProvider, useQuery } from "react-query"; // Added useQuery here
import { queryClient } from "../../queryClient.js"; // Adjust the path as necessary
import SecureStorage from "react-secure-storage";
import RegisteredUserNavBar from "../../components/navigation/registeredUserNavBar";

// rouuter path: registeredUser/mealPlan

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all meal plan
const fetchMealPlan = async () => {
  try {
    const response = await axiosInterceptorInstance.get("/mealPlan/get");

    // Filter active meal plan
    const filteredData = response.data.filter(
      (mealPlan) => mealPlan.active === true
    );

    return filteredData;
  } catch (error) {
    console.error("Failed to fetch meal plan:", error);
    throw error;
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

// Function to fetch dashboard data
const fetchDashboardData = async () => {
  const userId = SecureStorage.getItem("userId");
  const token = SecureStorage.getItem("token");
  const config = { headers: { Authorization: `Bearer ${token}` } };
  const response = await axiosInterceptorInstance.get(
    `/register/dashboard/${userId}`,
    config
  );
  return response.data;
};

//  Fetch meal plan based on health goals of user
const fetchMealPlansByHealthGoals = async (healthGoalId) => {
  try {
    const response = await axiosInterceptorInstance.get(
      `/registeredUsers/getMealPlans/${healthGoalId}`
    );

    const filteredData = response.data.filter(
      (mealPlan) => mealPlan.active === true
    );
    return filteredData;
  } catch (error) {
    console.error("Failed to fetch meal plan based on health goals:", error);
    throw error;
  }
};

const MealPlanPage = () => {
  const router = useRouter();
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [displayedMealPlan, setDisplayedMealPlan] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);

  // Additional state to track if search button has been clicked
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  const [mealPlansByHealthGoals, setMealPlansByHealthGoals] = useState([]);
  const [displayPersonalisedSection, setDisplayPersonalisedSection] =
    useState(true);

  useEffect(() => {
    // Perform your token and role check here
    const token = SecureStorage.getItem("token");
    const role = SecureStorage.getItem("role");
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !token ||
      role !== "REGISTERED_USER" ||
      now >= parseInt(tokenExpiration)
    ) {
      // If the user is not authorized, redirect them
      router.push("/"); // Adjust the route as needed
    } else {
      setIsChecking(false);
      // If the user is authorized, allow the component to proceed
      setIsAuthorized(true);
    }
  }, []);

  // Dashboard data query
  const dashboardQuery = useQuery("dashboard", fetchDashboardData, {
    onSuccess: (data) => {
      if (!data.healthGoal?.id) {
        setDisplayPersonalisedSection(false);
      }
    },
  });

  // Meal plans by health goals query, dependent on dashboardQuery
  const mealPlansByHealthGoalsQuery = useQuery(
    ["mealPlansByHealthGoals", dashboardQuery.data?.healthGoal?.id],
    () => fetchMealPlansByHealthGoals(dashboardQuery.data?.healthGoal?.id),
    {
      enabled: !!dashboardQuery.data?.healthGoal?.id, // Only run if healthGoalId is available
      onSuccess: (data) => {
        setMealPlansByHealthGoals(data);
      },
    }
  );

  useEffect(() => {}, [dashboardQuery.data?.healthGoal?.id]);

  // Fetch all meal plan
  const {
    data: AllMealPlan,
    isLoading,
    isError,
  } = useQuery("mealPlans", fetchMealPlan);

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useQuery("healthGoalCategories", fetchCategories);

  // Filter meal plan based on search term and category filter
  useEffect(() => {
    // Ensure AllMealPlan is an array
    let allPosts = Array.isArray(AllMealPlan) ? AllMealPlan : [];

    let filteredMealPlans = allPosts;

    if (categoryFilter) {
      filteredMealPlans = filteredMealPlans.filter(
        (mealPlan) => mealPlan.healthGoalCategoryId === Number(categoryFilter)
      );
    }

    if (searchTerm.trim()) {
    } else {
      setSearchPerformed(false);
    }

    let sortedMealPlan = [...(filteredMealPlans ?? [])];

    // Helper function to get the date for comparison
    const getDateForComparison = (mealPlan) => {
      // Use createdDT if not null; otherwise, use updateDT
      return new Date(mealPlan.createdDT || mealPlan.lastUpdatedDT);
    };

    // Sorting
    switch (sortOption) {
      case "LATEST":
        sortedMealPlan.sort(
          (a, b) => getDateForComparison(b) - getDateForComparison(a)
        );
        break;
      case "OLDEST":
        sortedMealPlan.sort(
          (a, b) => getDateForComparison(a) - getDateForComparison(b)
        );
        break;
      case "ALPHABETICAL_AZ":
        sortedMealPlan.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ALPHABETICAL_ZA":
        sortedMealPlan.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }

    setDisplayedMealPlan(sortedMealPlan);
    setIsSearchEmpty(sortedMealPlan.length === 0);

    // Reset searchButtonClicked when searchTerm changes
    setSearchButtonClicked(false);
  }, [searchTerm, categoryFilter, AllMealPlan, sortOption]);

  const handleSearchClick = async () => {
    setSearchButtonClicked(true); // Set flag when search is performed
    setIsSearchEmpty(false);
    setSearchPerformed(true);

    if (!searchTerm.trim()) {
      const filteredMealPlans = categoryFilter
        ? AllMealPlan.filter(
            (mealPlan) =>
              mealPlan.healthGoalCategoryId === Number(categoryFilter)
          )
        : AllMealPlan;

      // Sort the results
      let sortedResults = [...filteredMealPlans];

      // Helper function to get the date for comparison
      const getDateForComparison = (mealPlan) => {
        // Use createdDT if not null; otherwise, use updateDT
        return new Date(mealPlan.createdDT || mealPlan.lastUpdatedDT);
      };

      // Sorting
      switch (sortOption) {
        case "LATEST":
          sortedResults.sort(
            (a, b) => getDateForComparison(b) - getDateForComparison(a)
          );
          break;
        case "OLDEST":
          sortedResults.sort(
            (a, b) => getDateForComparison(a) - getDateForComparison(b)
          );
          break;
        case "ALPHABETICAL_AZ":
          sortedResults.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "ALPHABETICAL_ZA":
          sortedResults.sort((a, b) => b.title.localeCompare(a.title));
          break;
      }

      setDisplayedMealPlan(sortedResults);
      setResultsCount(sortedResults.length);
      setIsSearchEmpty(false);
      setSearchPerformed(false);
    } else {
      // Search for meal plans
      try {
        const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+");
        const response = await axiosInterceptorInstance.get(
          `/mealPlan/find?keyword=${formattedSearchTerm}`
        );
        let filteredResults = response.data.filter(
          (mealPlan) => mealPlan.active === true
        );

        if (categoryFilter) {
          filteredResults = filteredResults.filter(
            (mealPlan) =>
              mealPlan.healthGoalCategoryId === Number(categoryFilter)
          );
        }

        // Sort the results
        let sortedResults = [...filteredResults];

        // Helper function to get the date for comparison
        const getDateForComparison = (mealPlan) => {
          // Use createdDT if not null; otherwise, use updateDT
          return new Date(mealPlan.createdDT || mealPlan.lastUpdatedDT);
        };

        // Sorting
        switch (sortOption) {
          case "LATEST":
            sortedResults.sort(
              (a, b) => getDateForComparison(b) - getDateForComparison(a)
            );
            break;
          case "OLDEST":
            sortedResults.sort(
              (a, b) => getDateForComparison(a) - getDateForComparison(b)
            );
            break;
          case "ALPHABETICAL_AZ":
            sortedResults.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case "ALPHABETICAL_ZA":
            sortedResults.sort((a, b) => b.title.localeCompare(a.title));
            break;
        }

        if (sortedResults.length > 0) {
          setDisplayedMealPlan(sortedResults);
          setResultsCount(sortedResults.length);
          setIsSearchEmpty(false);
        } else {
          setIsSearchEmpty(true);
          setDisplayedMealPlan([]);
          setResultsCount(0);
        }
        setSearchPerformed(true);
      } catch (error) {
        console.error("Error searching meal plan", error);
      }
    }
  };

  const capitalizeFirstLetter = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleViewMealPlan = (id) => {
    let routePath = `/registeredUser/mealPlan/viewMealPlan/${id}`;
    router.push(routePath);
  };

  const getImageUrlFromBlob = (imgBlob) => {
    // Check if imgBlob is truthy
    if (imgBlob) {
      // Return the image URL created from the blob
      return `data:image/jpeg;base64,${imgBlob}`;
    }
    // Return an empty string or a placeholder image URL if imgBlob is not available
    return "";
  };

  // Render each meal plan card
  const renderPostCard = (post) => (
    <div
      key={post.id}
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-stone-700 transition duration-300 ease-in-out"
      style={{
        border: "0.5px solid transparent",
        background: "#48494B",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
      onClick={() => handleViewMealPlan(post.id)}
    >
      {post?.imgBlob ? (
        // If imgBlob is available, display image from blob
        <img
          className="w-full object-cover rounded-sm text-white text-center"
          src={getImageUrlFromBlob(post?.imgBlob)}
          alt={post.imgTitle}
          style={{ height: "192px" }}
        />
      ) : (
        // If imgBlob is not available, display image from imgUrl
        <img
          className="w-full object-cover rounded-sm text-white text-center"
          src={post?.img || "Not specified"}
          alt={post.imgTitle}
          style={{ height: "192px" }}
        />
      )}

      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold mb-4">
            {post?.title || "Untitled Meal Plan"}
          </h2>
        </div>

        {/* Description */}
        <div className="flex-grow flex items-center justify-center mb-4">
          <p className="text-gray-700 text-base line-clamp-3">
            {post.introduction}
          </p>
        </div>

        {/* Publisher and Ratings */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-4 mb-4">
          <p className="text-gray-700 text-sm font-semibold">
            Publisher:{" "}
            <span className="text-orange-600 font-semibold tracking-tight">
              {capitalizeFirstLetter(post?.publisher) || "Not Specified"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  // Helper function to get the date for comparison
  const getDateForComparison = (mealPlan) => {
    // Use createdDT if not null; otherwise, use updateDT
    return new Date(mealPlan.createdDT || mealPlan.lastUpdatedDT);
  };

  // Ensure AllMealPlan is an array or default to an empty array
  const iterableMealPlans = Array.isArray(AllMealPlan) ? AllMealPlan : [];

  const otherMealPlans = iterableMealPlans.filter(
    (post) =>
      !mealPlansByHealthGoals.find((latestPost) => latestPost.id === post.id)
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        {isChecking ? (
          <div>Checking...</div>
        ) : (
          <>
            <RegisteredUserNavBar />

            <div className="p-4 md:p-10">
              <h1 className="text-3xl text-center md:text-7xl font-extrabold font-sans text-gray-900 mb-4 md:mb-8">
                Meal Plans
              </h1>
              {isLoading ? (
                <div className="text-xl text-center p-4">
                  <p>Please wait. It'll just take a moment.</p>
                </div>
              ) : (
                <>
                  <div className="flex flex-col lg:flex-row mb-4">
                    {/* Search Section */}
                    <div className="flex-grow">
                      <input
                        type="text"
                        id="mealPlanSearch"
                        name="mealPlanSearch"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleSearchClick();
                          }
                        }}
                        placeholder="Search by title..."
                        className="mr-2 p-2 rounded-lg border w-full md:w-auto"
                        style={{ flex: 1 }}
                      />
                      <button
                        onClick={handleSearchClick}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-5 rounded-full mt-2 w-full md:w-auto lg:w-auto"
                        style={{ flexShrink: 0 }}
                      >
                        Search
                      </button>
                      {/* Results count */}
                      {searchButtonClicked && searchPerformed && (
                        <p className="text-left text-red-500 font-medium text-lg">
                          {resultsCount} results found.
                        </p>
                      )}
                    </div>

                    {/* Sort dropdown */}
                    <div className="flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-0 lg:mr-3">
                      <label
                        htmlFor="sort"
                        className="text-xl text-black mb-1 sm:mb-0 sm:mr-2"
                      >
                        Sort By:
                      </label>
                      <select
                        id="sort"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
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

                    {/* Filter Section */}
                    <div className="flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-0">
                      <label
                        htmlFor="categoryFilter"
                        className="text-xl text-black mb-2 sm:mb-0 sm:mr-2"
                      >
                        Filter By:
                      </label>
                      <div className="flex-grow-0">
                        <select
                          id="categoryFilter"
                          value={categoryFilter}
                          onChange={(e) => setCategoryFilter(e.target.value)}
                          className="mr-2 p-2 rounded-lg border w-full md:w-auto"
                          style={{ maxWidth: "300px" }}
                        >
                          <option value="">All Categories</option>
                          {categories?.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.subcategoryName}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Display the meal plans */}
                  {/* Display message while fetching data ftom backend */}
                  {isLoading ? (
                    <div className="text-xl text-center p-4">
                      <p>Please wait. It'll just take a moment.</p>
                    </div>
                  ) : (
                    <>
                      {!searchPerformed && !categoryFilter && !sortOption ? (
                        <>
                          {/* Display personalised meal plans */}
                          {displayPersonalisedSection &&
                          mealPlansByHealthGoals.length > 0 ? (
                            <div className="mb-14 bg-orange-100 rounded-lg p-6">
                              <h2 className="text-4xl font-bold mb-4 mt-4">
                                Just For You
                              </h2>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                {mealPlansByHealthGoals.map((post) =>
                                  renderPostCard(post)
                                )}
                              </div>
                            </div>
                          ) : (
                            // If user did not set health goal, display message
                            <div className="mb-14 bg-orange-100 rounded-lg p-6">
                              <h2 className="text-4xl font-bold mb-4 mt-4">
                                Just For You
                              </h2>
                              <p className="text-gray-500">
                                No personal health goal selected. Set your
                                health goal in your dietary preference to find
                                meal plans most suitable for you!
                              </p>
                            </div>
                          )}

                          {/* <div className="mb-5">
                            <h2 className="text-3xl font-semibold mb-4 mt-4">
                              Just For You
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                              {mealPlansByHealthGoals.map((post) =>
                                renderPostCard(post)
                              )}
                            </div>
                          </div> */}
                          <div className="mt-14 mb-5">
                            <h2 className="text-4xl font-bold mb-4 mt-4">
                              Other Meal Plan
                            </h2>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                            {otherMealPlans.map((post) => renderPostCard(post))}
                          </div>
                        </>
                      ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                          {displayedMealPlan.map((post) =>
                            renderPostCard(post)
                          )}
                        </div>
                      )}
                    </>
                  )}
                </>
              )}
            </div>
          </>
        )}
      </div>
    </QueryClientProvider>
  );
};

const WrappedMealPlansPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MealPlanPage />
    </QueryClientProvider>
  );
};

export default WrappedMealPlansPage;
