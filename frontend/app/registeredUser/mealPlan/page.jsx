"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import RegisteredUserNavBar from "../../components/navigation/registeredUserNavBar";

// rouuter path: /mealPlan

// To be Degugged:
// Ratings not displaying for just for you

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  // LOWEST_RATINGS: { key: "LOWEST_RATINGS", label: "Lowest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all meal plan
const fetchMealPlan = async () => {
  try {
    console.log("Fetching all meal plan...");
    const response = await axiosInterceptorInstance.get("/mealPlan/get");
    console.log("All meal plan:", response.data);
    const filteredData = response.data.filter(
      (mealPlan) => mealPlan.active === true
    );
    return filteredData;
  } catch (error) {
    console.error("Failed to fetch meal plan:", error);
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

//  Fetch meal plan based on health goals of user
const fetchMealPlansByHealthGoals = async (healthGoalId) => {
  try {
    console.log("Fetching meal plan based on health goals...");
    const response = await axiosInterceptorInstance.get(
      `/registeredUsers/getMealPlans/${healthGoalId}`
    );
    console.log("Meal plan based on health goals:", response.data);
    console.log("user Health Goal ID:", healthGoalId);

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
  const [AllMealPlan, setAllMealPlan] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [categories, setCategories] = useState([]);
  const [displayedMealPlan, setDisplayedMealPlan] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [mealPlansByHealthGoals, setMealPlansByHealthGoals] = useState([]);

  const [displayPersonalisedSection, setDisplayPersonalisedSection] =
    useState(true);

  // Additional state to track if search button has been clicked
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  // Fetch all meal plan and categories on page load
  useEffect(() => {
    setIsLoading(true); // Set loading state to true

    const getData = async () => {
      const fetchedMealPlan = await fetchMealPlan();

      const mealPlansWithAverage = await Promise.all(
        fetchedMealPlan.map(async (mealPlan) => {
          const average = await fetchMealPlanAverage(mealPlan.id);
          return { ...mealPlan, average };
        })
      );

      setAllMealPlan(mealPlansWithAverage);
      setDisplayedMealPlan(mealPlansWithAverage);
    };

    // Sepcifically for fetching meal plans based on health goals + ratings count display
    const getMealPlansByHealthGoals = async (healthGoalId) => {
      try {
        const mealPlans = await fetchMealPlansByHealthGoals(healthGoalId);
        const mealPlansWithRatings = await Promise.all(
          mealPlans.map(async (healthGoalMP) => {
            const average = await fetchMealPlanAverage(healthGoalMP.id);
            return { ...healthGoalMP, average }; // Combine the plan with its ratings
          })
        );
        //return mealPlansWithRatings;
        setMealPlansByHealthGoals(mealPlansWithRatings);
      } catch (error) {
        console.error("Error fetching meal plans with ratings:", error);
        throw error;
      }
    };

    const viewUserDashboard = async () => {
      try {
        const userId = SecureStorage.getItem("userId");
        const token = SecureStorage.getItem("token");

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        // Make the GET request to the userAndAdmin endpoint
        const response = await axiosInterceptorInstance.get(
          "/register/dashboard/" + userId,
          config
        );

        console.log("User data fetched from backend:", response.data);

        // Extract healthGoalId from user data
        const healthGoalId = response.data.healthGoal?.id;
        console.log("Health Goal ID:", healthGoalId);

        // Fetch meal plans based on health goal only if healthGoalId is available
        if (healthGoalId) {
          await getMealPlansByHealthGoals(healthGoalId);
        } else {
          displayPersonalisedSection(false); // if user no health goal, hide the personalised section
        }
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axiosInterceptorInstance.get(
          "category/getAllHealthGoals"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    Promise.all([getData(), fetchCategories(), viewUserDashboard()])
      .catch((error) => {
        console.error("Error in fetchData or fetchCategories:", error);
      })
      .finally(() => {
        setIsLoading(false); // End loading after both operations are complete
      });
  }, []);

  // Filter meal plan based on search term and category filter
  useEffect(() => {
    let filteredMealPlans = AllMealPlan;

    if (categoryFilter) {
      filteredMealPlans = filteredMealPlans.filter(
        (mealPlan) => mealPlan.healthGoalCategoryId === Number(categoryFilter)
      );
    }

    if (searchTerm.trim()) {
    } else {
      setSearchPerformed(false);
    }

    let sortedMealPlan = [...filteredMealPlans];
    // Sorting
    switch (sortOption) {
      case "LATEST":
        sortedMealPlan.sort(
          (a, b) => new Date(b.createdDT) - new Date(a.createdDT)
        );
        break;
      case "OLDEST":
        sortedMealPlan.sort(
          (a, b) => new Date(a.createdDT) - new Date(b.createdDT)
        );
        break;
      case "ALPHABETICAL_AZ":
        sortedMealPlan.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ALPHABETICAL_ZA":
        sortedMealPlan.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "HIGHEST_RATINGS":
        sortedMealPlan.sort((a, b) => {
          const ratingDiff =
            (b.average?.averageRatings || 0) - (a.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return new Date(b.createdDT) - new Date(a.createdDT); // Latest date first if tie
        });
        break;
    }

    console.log("Filtered meal plans:", filteredMealPlans);

    setDisplayedMealPlan(sortedMealPlan);
    setIsSearchEmpty(sortedMealPlan.length === 0);

    // Reset searchButtonClicked when searchTerm changes
    setSearchButtonClicked(false);
    console.log("Displayed meal plans:", displayedMealPlan);
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

      setDisplayedMealPlan(sortedResults);
      setResultsCount(sortedResults.length);
      setIsSearchEmpty(false);
      setSearchPerformed(false);

      console.log("Displayed meal plans after click:", displayedMealPlan);
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

        // Fetch average ratings for each meal plans
        let filteredResultsWithAverage = await Promise.all(
          filteredResults.map(async (mealPlan) => {
            const average = await fetchMealPlanAverage(mealPlan.id);
            return { ...mealPlan, average }; // Augment each meal plans with its average
          })
        );

        if (categoryFilter) {
          filteredResultsWithAverage = filteredResultsWithAverage.filter(
            (mealPlan) =>
              mealPlan.healthGoalCategoryId === Number(categoryFilter)
          );
        }

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

  const renderStarsAndCount = (post) => {
    if (
      !post.average ||
      !post.average.averageRatings ||
      !post.average.totalNumber
    ) {
      return <div>No ratings available</div>;
    }

    const { averageRatings, totalNumber } = post.average;

    let stars = [];
    // Render stars based on average rating
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < averageRatings ? "text-yellow-300" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    // Render total count of ratings
    return (
      <div className="flex items-center">
        <span className="mr-1">{stars}</span>
        <span>({totalNumber} ratings)</span>
      </div>
    );
  };

  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };
  
  const handleViewMealPlan = (id) => {
    console.log(`Meal plan Title: ${id}`);
    let routePath = `/registeredUser/mealPlan/viewMealPlan/${id}`;
    router.push(routePath);
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
      {/* Image */}
      <img
        src={post.img}
        alt={post.img_title}
        className="w-full object-cover rounded-sm text-white text-center"
        style={{ height: "192px" }}
      />
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
          <p className="text-gray-700 text-sm font-semibold">
            {renderStarsAndCount(post)}
          </p>
        </div>

        {/* For testing  */}
        {/* Display category */}
        {/* <div className="flex justify-center mb-4">
          <p className="text-gray-700 text-sm font-semibold">
            Category:{" "}
            <span className="text-orange-600 font-semibold tracking-tight">
              {post.healthGoal.subcategoryName || "Not Specified"}
            </span>
          </p>
        </div> */}
      </div>
    </div>
  );

  // Get the latest 3 meal plan
  const latestMealPlan = [...AllMealPlan]
    .sort((a, b) => new Date(b.createdDT) - new Date(a.createdDT))
    .slice(0, 3);

  // Get the other meal plans that are not the latest 3
  const otherMealPlan = AllMealPlan.filter(
    (mealPlan) =>
      !latestMealPlan.find(
        (latestMealPlan) => latestMealPlan.id === mealPlan.id
      )
  );

  return (
    <div>
      <RegisteredUserNavBar />
      <div className="p-4 md:p-10">
        <h1 className="text-3xl text-center md:text-7xl font-extrabold font-sans text-gray-900 mb-4 md:mb-8">
          Meal Plans
        </h1>
        <div className="flex flex-col lg:flex-row mb-4">
          {/* Search Section */}
          <div className="flex-grow">
            <input
              type="text"
              id="educationalContentSearch"
              name="educationalContentSearch"
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

          {/* Filter Section - Adjusted to align to the right */}
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
                {displayPersonalisedSection &&
                mealPlansByHealthGoals.length > 0 ? (
                  <div className="mb-5">
                    <h2 className="text-3xl font-bold mb-4 mt-8">
                      Just For You
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {mealPlansByHealthGoals.map((post) =>
                        renderPostCard(post)
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="mb-5">
                    <h2 className="text-3xl font-bold mb-4 mt-8">
                      Just For You
                    </h2>
                    <p className="text-gray-500">
                      No personal health goal selected. Set your health goal in
                      your dietary preference to find meal plans most suitable
                      for you!
                    </p>
                  </div>
                )}

                {/* <h2 className="text-3xl font-bold mb-4 mt-8">
                  Latest Meal Plans
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {latestMealPlan.map((post) => renderPostCard(post))}
                </div> */}

                <h2 className="text-3xl font-bold mb-4 mt-8">
                  Other Meal Plans
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {otherMealPlan.map((post) => renderPostCard(post))}
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {displayedMealPlan.map((post) => renderPostCard(post))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MealPlanPage;
