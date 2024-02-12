"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { QueryClientProvider, useQuery } from "react-query"; // Added useQuery here
import { queryClient } from "../../queryClient.js"; // Adjust the path as necessary
import SecureStorage from "react-secure-storage";

// rouuter path: /mealPlan

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all meal plan
const fetchMealPlan = async () => {
  try {
    console.log("Fetching all meal plan...");
    const response = await axiosInterceptorInstance.get("/mealPlan/get");

    const mealPlansWithAverage = await Promise.all(
      response.data.map(async (mealPlan) => {
        const average = await fetchMealPlanAverage(mealPlan.id);
        return { ...mealPlan, average };
      })
    );

    // Filter active blog posts
    const filteredData = mealPlansWithAverage.filter(
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
  // const [AllMealPlan, setAllMealPlan] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  // const [categories, setCategories] = useState([]);
  const [displayedMealPlan, setDisplayedMealPlan] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);

  // Additional state to track if search button has been clicked
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);

  // Fetch all recipes
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
    if (SecureStorage.getItem("token")) {
      if (SecureStorage.getItem("role") == "ADMIN") {
        router.push("/sysAdmin");
      } else if (SecureStorage.getItem("role") == "REGISTERED_USER") {
        router.push("/registeredUser/mealPlan");
      } else if (SecureStorage.getItem("role") == "NUTRITIONIST") {
        router.push("/nutritionist");
      } else if (SecureStorage.getItem("role") == "BUSINESS_USER") {
        router.push("/businessUser");
      }
    }

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

    // let sortedMealPlan = [...newFilteredRecipes];
    let sortedMealPlan = [...(filteredMealPlans ?? [])];

    // Helper function to get the date for comparison
    const getDateForComparison = (mealPlan) => {
      // Use createdDT if not null; otherwise, use updateDT
      return new Date(mealPlan.createdDT || mealPlan.lastUpdatedDT);
    };

    // let sortedMealPlan = [...filteredMealPlans];
    // Sorting

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
      case "HIGHEST_RATINGS":
        sortedMealPlan.sort((a, b) => {
          const ratingDiff =
            (b.average?.averageRatings || 0) - (a.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          // Use getDateForComparison for tiebreaker date comparison
          return getDateForComparison(b) - getDateForComparison(a); // Latest date first if tie
        });
        break;
    }

    // switch (sortOption) {
    //   case "LATEST":
    //     sortedMealPlan.sort(
    //       (a, b) => new Date(b.createdDT) - new Date(a.createdDT)
    //     );
    //     break;
    //   case "OLDEST":
    //     sortedMealPlan.sort(
    //       (a, b) => new Date(a.createdDT) - new Date(b.createdDT)
    //     );
    //     break;
    //   case "ALPHABETICAL_AZ":
    //     sortedMealPlan.sort((a, b) => a.title.localeCompare(b.title));
    //     break;
    //   case "ALPHABETICAL_ZA":
    //     sortedMealPlan.sort((a, b) => b.title.localeCompare(a.title));
    //     break;
    //   case "HIGHEST_RATINGS":
    //     sortedMealPlan.sort((a, b) => {
    //       const ratingDiff =
    //         (b.average?.averageRatings || 0) - (a.average?.averageRatings || 0);
    //       if (ratingDiff !== 0) return ratingDiff;
    //       return new Date(b.createdDT) - new Date(a.createdDT); // Latest date first if tie
    //     });
    //     break;
    // }

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

      // Sort the results
      //  let sortedResults = [...filteredResultsWithAverage];

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
        case "HIGHEST_RATINGS":
          sortedResults.sort((a, b) => {
            const ratingDiff =
              (b.average?.averageRatings || 0) -
              (a.average?.averageRatings || 0);
            if (ratingDiff !== 0) return ratingDiff;
            // Use getDateForComparison for tiebreaker date comparison
            return getDateForComparison(b) - getDateForComparison(a); // Latest date first if tie
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
          case "HIGHEST_RATINGS":
            sortedResults.sort((a, b) => {
              const ratingDiff =
                (b.average?.averageRatings || 0) -
                (a.average?.averageRatings || 0);
              if (ratingDiff !== 0) return ratingDiff;
              // Use getDateForComparison for tiebreaker date comparison
              return getDateForComparison(b) - getDateForComparison(a); // Latest date first if tie
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

  function capitalizeFirstLetter(string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Render stars and count
  const renderStarsAndCount = (post) => {
    if (
      !post.average ||
      !post.average.averageRatings ||
      !post.average.totalNumber
    ) {
      return <div>No ratings available</div>;
    } else {
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
    }
  };

  const handleViewMealPlan = (id) => {
    console.log(`Meal plan Title: ${id}`);
    let routePath = `/mealPlan/viewMealPlan/${id}`;
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
      {/* <img
        src={post.img}
        alt={post.img_title}
        className="w-full object-cover rounded-sm"
        style={{ height: "192px" }}
      /> */}

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
          <p className="text-gray-700 text-sm font-semibold">
            {renderStarsAndCount(post)}
          </p>
        </div>
      </div>
    </div>
  );

  // // Get the latest 3 meal plan
  // const latestMealPlan = [...AllMealPlan]
  //   .sort((a, b) => new Date(b.createdDT) - new Date(a.createdDT))
  //   .slice(0, 3);

  // // Get the other meal plans that are not the latest 3
  // const otherMealPlan = AllMealPlan.filter(
  //   (mealPlan) =>
  //     !latestMealPlan.find(
  //       (latestMealPlan) => latestMealPlan.id === mealPlan.id
  //     )
  // );

  // Helper function to get the date for comparison
  const getDateForComparison = (mealPlan) => {
    // Use createdDT if not null; otherwise, use updateDT
    return new Date(mealPlan.createdDT || mealPlan.lastUpdatedDT);
  };

  // Ensure AllMealPlan is an array or default to an empty array
  const iterableMealPlans = Array.isArray(AllMealPlan) ? AllMealPlan : [];

  // Sorting to get the latest recipes
  const latestMealPlans = iterableMealPlans
    .sort((a, b) => getDateForComparison(b) - getDateForComparison(a))
    .slice(0, 3);

  // Filtering out the latest recipes to get the other recipes
  const otherMealPlans = iterableMealPlans.filter(
    (post) => !latestMealPlans.find((latestPost) => latestPost.id === post.id)
  );

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <HomeNavbar />
        <div className="p-4 md:p-10">
          <h1 className="text-3xl text-center md:text-7xl font-extrabold font-sans text-gray-900 mb-4 md:mb-8">
            Meal Plans
          </h1>
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
            <div className="flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-0">
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
                  <div className="mb-5">
                    <h2 className="text-3xl font-semibold mb-4 mt-4">
                      Latest Meal Plan
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {latestMealPlans.map((post) => renderPostCard(post))}
                    </div>
                  </div>
                  <h2 className="text-3xl font-semibold mb-4 mt-4">
                    Other Meal Plan
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {otherMealPlans.map((post) => renderPostCard(post))}
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
