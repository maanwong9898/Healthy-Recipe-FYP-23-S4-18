"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import BusinessNavBar from "../../../components/navigation/businessUserNavBar";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import { QueryClientProvider, useQuery } from "react-query"; // Added useQuery here
import { queryClient } from "../../../queryClient"; // Adjust the path as necessary
import SecureStorage from "react-secure-storage";

// rouuter path: /educationalContent

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all educational content
const fetchEducationalContent = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "/educationalContent/get"
    );

    // Filter active educational content posts
    const filteredData = response.data.filter((post) => post.active === true);

    return filteredData;
  } catch (error) {
    console.error("Failed to fetch educationalContent:", error);
    throw error;
  }
};

const fetchCategories = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "category/getAllEducationalContentCategories"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

const EducationalContentPageForUser = () => {
  const router = useRouter();
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [displayedEduContent, setDisplayedEduContent] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  // Additional state to track if search button has been clicked
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Perform your token and role check here
    const token = SecureStorage.getItem("token");
    const role = SecureStorage.getItem("role");
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !token ||
      role !== "BUSINESS_USER" ||
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

  // Fetch educational content posts
  const {
    data: AllEduContent,
    isLoading,
    isError,
  } = useQuery("educationalContent", fetchEducationalContent);

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useQuery("eduContentCategories", fetchCategories);

  // Handle error state
  if (isError) {
    return <div>Error fetching data</div>;
  }

  // Filter educational content based on search term and category filter
  useEffect(() => {
    let allPosts = Array.isArray(AllEduContent) ? AllEduContent : [];

    let filteredPosts = allPosts;

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
    }

    setDisplayedEduContent(sortedPosts);
    setIsSearchEmpty(sortedPosts.length === 0);

    // Reset searchButtonClicked when searchTerm changes
    setSearchButtonClicked(false);
  }, [searchTerm, categoryFilter, AllEduContent, sortOption]);

  const handleSearchClick = async () => {
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
      }

      setDisplayedEduContent(sortedResults);
      setResultsCount(sortedResults.length);
      setIsSearchEmpty(false);
      setSearchPerformed(false);
    } else {
      // Search for educational content
      try {
        const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+");
        const response = await axiosInterceptorInstance.get(
          `/educationalContent/find?keyword=${formattedSearchTerm}`
        );
        let filteredResults = response.data.filter(
          (post) => post.active === true
        );

        if (categoryFilter) {
          filteredResults = filteredResults.filter(
            (post) =>
              post.educationalContentType.subcategoryName === categoryFilter
          );
        }

        // Sort the results
        let sortedResults = [...filteredResults];
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
        }

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

  const capitalizeFirstLetter = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const handleViewEduContent = (id) => {
    let routePath = `/businessUser/educationalContent/exploreAllEducationalContent/${id}`;
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
            {post?.title || "Untitled Educational Content"}
          </h2>
        </div>

        {/* Description */}
        <div className="flex-grow flex items-center justify-center mb-4">
          <p className="text-gray-700 text-base line-clamp-3">{post.info}</p>
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

  const iterableEduContent = Array.isArray(AllEduContent) ? AllEduContent : [];

  // Ensure iterable data for latest and other educational content
  const latestEduContent = Array.isArray(iterableEduContent)
    ? [...iterableEduContent]
        .sort(
          (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
        )
        .slice(0, 3)
    : [];

  const otherEduContent = Array.isArray(iterableEduContent)
    ? iterableEduContent.filter(
        (post) =>
          !latestEduContent.find((latestPost) => latestPost.id === post.id)
      )
    : [];

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BusinessNavBar />
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
            {/* Filter Section */}
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
                  <div className="mb-14">
                    <h2 className="text-4xl font-bold mb-4 mt-4">
                      Latest Educational Content
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {latestEduContent.map((post) => renderPostCard(post))}
                    </div>
                  </div>
                  <div className="mt-14 mb-5">
                    <h2 className="text-4xl font-bold mb-4 mt-4">
                      Other Educational Content
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {otherEduContent.map((post) => renderPostCard(post))}
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {displayedEduContent.map((post) => renderPostCard(post))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </QueryClientProvider>
  );
};

const WrappedEducationalContentPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <EducationalContentPageForUser />
    </QueryClientProvider>
  );
};

export default WrappedEducationalContentPage;
