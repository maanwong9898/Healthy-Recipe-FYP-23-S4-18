"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";

// rouuter path: /educationalContent

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all educational content
const fetchEducationalContent = async () => {
  try {
    console.log("Fetching educational Content...");
    const response = await axiosInterceptorInstance.get(
      "/educationalContent/get"
    );
    console.log("All Edu:", response.data);
    const filteredData = response.data.filter((post) => post.active === true);
    return filteredData;
  } catch (error) {
    console.error("Failed to fetch educationalContent:", error);
    throw error;
  }
};

const fetchEduContentAverage = async (eduContentId) => {
  try {
    const response = await axiosInterceptorInstance.get(
      `/educationalContent/getAverage/${eduContentId}`
    );
    console.log(
      "Average rating for edu content",
      eduContentId,
      "is:",
      response.data
    );
    return response.data; // Assuming this returns the average data for the blog
  } catch (error) {
    console.error(
      `Failed to fetch average for edu content ${eduContentId}:`,
      error
    );
    return null; // or handle the error as you see fit
  }
};

const EducationalContentPageForUser = () => {
  const router = useRouter();
  const [categoryFilter, setCategoryFilter] = useState("");
  const [AllEduContent, setAllEduContent] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [categories, setCategories] = useState([]);
  const [displayedEduContent, setDisplayedEduContent] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  // Additional state to track if search button has been clicked
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch all educational content on page load
  useEffect(() => {
    setIsLoading(true); // Set loading state to true
    const getData = async () => {
      const fetchedEduContent = await fetchEducationalContent();
      const eduContentsWithAverage = await Promise.all(
        fetchedEduContent.map(async (eduContent) => {
          const average = await fetchEduContentAverage(eduContent.id);
          return { ...eduContent, average }; // Augment each blog post with its average
        })
      );

      setAllEduContent(eduContentsWithAverage);
      setDisplayedEduContent(eduContentsWithAverage);
    };

    const fetchCategories = async () => {
      try {
        const response = await axiosInterceptorInstance.get(
          "category/getAllEducationalContentCategories"
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

  // Filter blog posts based on search term and category filter
  useEffect(() => {
    let filteredPosts = AllEduContent;

    if (categoryFilter) {
      filteredPosts = filteredPosts.filter(
        (post) => post.educationalContentType.subcategoryName === categoryFilter
      );
    }

    if (searchTerm.trim()) {
    } else {
      setSearchPerformed(false);
    }

    let sortedPosts = [...filteredPosts];
    // Sorting
    switch (sortOption) {
      case "LATEST":
        sortedPosts.sort(
          (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
        );
        break;
      case "OLDEST":
        sortedPosts.sort(
          (a, b) => new Date(a.createdDateTime) - new Date(b.createdDateTime)
        );
        break;
      case "ALPHABETICAL_AZ":
        sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ALPHABETICAL_ZA":
        sortedPosts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "HIGHEST_RATINGS":
        sortedPosts.sort((a, b) => {
          const ratingDiff =
            (b.average?.averageRatings || 0) - (a.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
        });
        break;
    }

    console.log("Filtered posts:", filteredPosts);

    setDisplayedEduContent(sortedPosts);
    setIsSearchEmpty(sortedPosts.length === 0);

    // Reset searchButtonClicked when searchTerm changes
    setSearchButtonClicked(false);
  }, [searchTerm, categoryFilter, AllEduContent, sortOption]);

  const handleSearchClick = async () => {
    console.log("Search button clicked");
    setSearchButtonClicked(true); // Set flag when search is performed
    setIsSearchEmpty(false);
    setSearchPerformed(true);

    if (!searchTerm.trim()) {
      const filteredPosts = categoryFilter
        ? AllEduContent.filter(
            (post) =>
              post.educationalContentType.subcategoryName === categoryFilter
          )
        : AllEduContent;

      // Sort the results
      let sortedResults = [...filteredPosts];
      switch (sortOption) {
        case "LATEST":
          sortedResults.sort(
            (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
          );
          break;
        case "OLDEST":
          sortedResults.sort(
            (a, b) => new Date(a.createdDateTime) - new Date(b.createdDateTime)
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
            return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
          });
          break;
      }

      setDisplayedEduContent(sortedResults);
      setResultsCount(sortedResults.length);
      setIsSearchEmpty(false);
      setSearchPerformed(false);
    } else {
      // Search for blog posts
      try {
        const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+");
        const response = await axiosInterceptorInstance.get(
          `/educationalContent/find?keyword=${formattedSearchTerm}`
        );
        let filteredResults = response.data.filter(
          (post) => post.active === true
        );

        // Fetch average ratings for each edu content
        let filteredResultsWithAverage = await Promise.all(
          filteredResults.map(async (post) => {
            const average = await fetchEduContentAverage(post.id);
            return { ...post, average }; // Augment each blog post with its average
          })
        );

        if (categoryFilter) {
          filteredResultsWithAverage = filteredResultsWithAverage.filter(
            (post) =>
              post.educationalContentType.subcategoryName === categoryFilter
          );
        }

        // Sort the results
        let sortedResults = [...filteredResultsWithAverage];
        switch (sortOption) {
          case "LATEST":
            sortedResults.sort(
              (a, b) =>
                new Date(b.createdDateTime) - new Date(a.createdDateTime)
            );
            break;
          case "OLDEST":
            sortedResults.sort(
              (a, b) =>
                new Date(a.createdDateTime) - new Date(b.createdDateTime)
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
              return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
            });
            break;
        }

        console.log("Sorted results:", sortedResults);

        if (sortedResults.length > 0) {
          setDisplayedEduContent(sortedResults);
          setResultsCount(sortedResults.length);
          setIsSearchEmpty(false);
        } else {
          setIsSearchEmpty(true);
          setDisplayedEduContent([]);
          setResultsCount(0);
        }
        setSearchPerformed(true);
      } catch (error) {
        console.error("Error searching edu content:", error);
      }
    }
  };

  const handleViewEduContent = (id) => {
    console.log(`Educational Content Title: ${id}`);
    let routePath = `/registeredUser/educationalContent/viewEducationalContent/${id}`;
    router.push(routePath);
  };

  // Render each educational content card
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
      onClick={() => handleViewEduContent(post.id)}
    >
      <img
        src={post.img}
        alt={post.img_title}
        className="w-full object-cover rounded-sm text-white text-center"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div className="grid grid-rows-3 items-center">
          <h2
            className="text-2xl font-extrabold mb-2"
            //onClick={() => handleViewEduContent(post.id)}
          >
            {post?.title || "Untitled Educational Content"}
          </h2>
          <p className="text-gray-700 text-base mb-4 line-clamp-3">
            <div className="whitespace-pre-line">{post.info}</div>
          </p>
          {/* Publisher */}
          <p className="text-gray-900 text-base font-semibold">
            Publisher:{" "}
            <span className="text-orange-600 font-bold tracking-tight">
              {post?.publisher || "Not Specified"}
            </span>
          </p>
        </div>
        {/* <div className="flex justify-between items-center">
          <div className="flex items-center text-red-700 font-semibold text-xl">
            {post.educationalContentType.subcategoryName}
          </div>
        </div> */}
      </div>
    </div>
  );

  // Get the latest 3 posts
  const latestEduContent = [...AllEduContent]
    .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
    .slice(0, 3);

  // Get the other posts that are not the latest 3
  const otherEduContent = AllEduContent.filter(
    (post) => !latestEduContent.find((latestPost) => latestPost.id === post.id)
  );

  return (
    <div className="p-4 md:p-10">
      <h1 className="text-3xl text-center md:text-7xl font-extrabold font-sans text-gray-900 mb-4 md:mb-8">
        Educational Content
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
        <div className="flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-0">
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
            className="text-xl text-black mb-1 sm:mb-0 sm:mr-2"
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
                <option key={category.id} value={category.subcategoryName}>
                  {category.subcategoryName}
                </option>
              )) || []}
            </select>
          </div>
        </div>
      </div>
      {/* Display the education content */}
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
                <h2 className="text-3xl font-bold mb-4 mt-4">
                  Latest Educational Content
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {latestEduContent.map((post) => renderPostCard(post))}
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 mt-4">
                Other Educational Content
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherEduContent.map((post) => renderPostCard(post))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {displayedEduContent.map((post) => renderPostCard(post))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default EducationalContentPageForUser;
