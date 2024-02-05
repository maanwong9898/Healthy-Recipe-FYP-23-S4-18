"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";

// rouuter path: /mealPlan

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
      console.log("mealPlan with average:", mealPlansWithAverage);

      setAllMealPlan(mealPlansWithAverage);
      setDisplayedMealPlan(mealPlansWithAverage);
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
    Promise.all([getData(), fetchCategories()])
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

  const handleViewMealPlan = (id) => {
    console.log(`Meal plan Title: ${id}`);
    let routePath = `/mealPlan/viewMealPlan/${id}`;
    router.push(routePath);
  };

  // Render each meal plan card
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
            onClick={() => handleViewMealPlan(post.id)}
          >
            {post.title}
          </h2>
          <p className="text-gray-700 text-base mb-4 line-clamp-3">
            <div className="whitespace-pre-line">{post.introduction}</div>
          </p>
          {/* Publisher */}
          <p
            className="text-gray-900 text-base font-semibold"
            style={{ height: "3.5rem" }}
          >
            Publisher:{" "}
            <span className="text-orange-600 font-bold tracking-tight">
              {post?.publisher || "Not Specified"}
            </span>
          </p>
        </div>
        {/*to debug*/}
        {/* <div className="flex flex-wrap">
          <div className="flex-grow">
            <p className="text-sm text-gray-500">
              {post.healthGoal.subcategoryName}
            </p>
          </div>
        </div> */}
        {/* <button
          onClick={() => handleViewMealPlan(post.id)}
          className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
        >
          Read more
        </button> */}
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
      <HomeNavbar />
      <div className="p-4 md:p-10">
        <h1 className="text-3xl text-center md:text-7xl font-extrabold font-sans text-gray-900 mb-4 md:mb-8">
          Meal Plans
        </h1>
        <div className="flex sm:justify-between sm:items-center mb-4">
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
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-5 rounded-full mt-2 w-full lg:w-auto"
              style={{ flexShrink: 0 }}
            >
              Search
            </button>
            {/* Results count */}
            {searchButtonClicked && searchPerformed && (
              <p className="text-left text-red-500 font-bold text-lg sm:ml-2">
                {resultsCount} results found.
              </p>
            )}
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
          <div className="flex flex-col sm:flex-row sm:items-center">
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
                {categories.map((category) => (
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
                <div className="mb-5">
                  <h2 className="text-3xl font-semibold mb-4 mt-4">
                    Latest Meal Plan
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {latestMealPlan.map((post) => renderPostCard(post))}
                  </div>
                </div>
                <h2 className="text-3xl font-semibold mb-4 mt-4">
                  Other Meal Plan
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {otherMealPlan.map((post) => renderPostCard(post))}
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
