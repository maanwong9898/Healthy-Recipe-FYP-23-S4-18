"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import BusinessNavBar from "../../../components/navigation/businessUserNavBar";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import { QueryClientProvider, useQuery } from "react-query"; // Added useQuery here
import { queryClient } from "../../../queryClient"; // Adjust the path as necessary
import SecureStorage from "react-secure-storage";

// rouuter path: /businessBlogPost

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  // HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all blog posts
const fetchBlogPosts = async () => {
  try {
    const response = await axiosInterceptorInstance.get("/blog/get");
    // Filter active blog posts
    const filteredData = response.data.filter((post) => post.active === true);

    return filteredData;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw error;
  }
};


const fetchCategories = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "category/getAllBlogPostCategories"
    );
    return response.data; // Just return the data
  } catch (error) {
    throw new Error("Error fetching categories:", error);
  }
};

const BusinessBlogPostsPage = () => {
  const router = useRouter();
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [displayedBlogPosts, setDisplayedBlogPosts] = useState([]);
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

  // Fetch blog posts
  const {
    data: AllBusinessBlogPosts,
    isLoading,
    isError,
  } = useQuery("businessBlogPosts", fetchBlogPosts, {
    enabled: isAuthorized, // Only run query if authorized
  });

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useQuery("blogCategories", fetchCategories, {
    enabled: isAuthorized, // Only run query if authorized
  });

  // Handle error state
  if (isError) {
    return <div>Error fetching data</div>;
  }

  useEffect(() => {
    // Ensure AllBusinessBlogPosts is an array
    let allPosts = Array.isArray(AllBusinessBlogPosts)
      ? AllBusinessBlogPosts
      : [];

    // Filter blog posts
    let filteredPosts = allPosts;
    if (categoryFilter) {
      filteredPosts = allPosts.filter(
        (post) => post.blogType.subcategoryName === categoryFilter
      );
    }

    // Search term logic
    if (!searchTerm.trim()) {
      setSearchPerformed(false);
    } else {
      // Apply search logic here if needed
    }

    // Sorting logic
    let sortedPosts = [...filteredPosts];
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

    setDisplayedBlogPosts(sortedPosts);
    setIsSearchEmpty(sortedPosts.length === 0);
    // Reset searchButtonClicked when searchTerm changes
    setSearchButtonClicked(false);
  }, [searchTerm, categoryFilter, AllBusinessBlogPosts, sortOption]);

  const handleSearchClick = async () => {
    setSearchButtonClicked(true); // Set flag when search is performed
    setIsSearchEmpty(false);
    setSearchPerformed(true);

    if (!searchTerm.trim()) {
      const filteredPosts = categoryFilter
        ? AllBusinessBlogPosts.filter(
            (post) => post.blogType.subcategoryName === categoryFilter
          )
        : AllBusinessBlogPosts;

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

      setDisplayedBlogPosts(sortedResults);
      setResultsCount(sortedResults.length);
      setIsSearchEmpty(false);
      setSearchPerformed(false);

    } else {
      // Search for blog posts
      try {
        const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+");
        const response = await axiosInterceptorInstance.get(
          `/blog/find?keyword=${formattedSearchTerm}`
        );
        let filteredResults = response.data.filter(
          (post) => post.active === true
        );


        if (categoryFilter) {
          filteredResults = filteredResults.filter(
            (post) => post.blogType.subcategoryName === categoryFilter
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
          setDisplayedBlogPosts(sortedResults);
          setResultsCount(sortedResults.length);
          setIsSearchEmpty(false);
        } else {
          setIsSearchEmpty(true);
          setDisplayedBlogPosts([]);
          setResultsCount(0);
        }
        setSearchPerformed(true);
      } catch (error) {
        console.error("Error searching blog posts:", error);
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
  
  const handleViewBlogPost = (id) => {
    let routePath = `/businessUser/businessBlogPost/exploreAllBlogs/${id}`;
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

  // Render each blog post card
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
      onClick={() => handleViewBlogPost(post.id)}
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
            {post?.title || "Untitled Blog Post"}
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

  // Ensure AllBusinessBlogPosts is an array or default to empty array
  const iterableBlogPosts = Array.isArray(AllBusinessBlogPosts)
    ? AllBusinessBlogPosts
    : [];

  // Ensure iterable data for latest and other blog posts
  const latestPosts = Array.isArray(iterableBlogPosts)
    ? [...iterableBlogPosts]
        .sort(
          (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
        )
        .slice(0, 3)
    : [];

  const otherBusinessBlogPosts = Array.isArray(iterableBlogPosts)
    ? iterableBlogPosts.filter(
        (post) => !latestPosts.find((latestPost) => latestPost.id === post.id)
      )
    : [];

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BusinessNavBar />
        <div className="p-4 md:p-10">
          <h1 className="text-3xl text-center md:text-7xl font-extrabold font-sans text-gray-900 mb-4 md:mb-8">
            Blog Posts
          </h1>
          <div className="flex flex-col lg:flex-row mb-4">
            {/* Search Section */}
            <div className="flex-grow">
              <input
                type="text"
                id="blogPostSearch"
                name="blogPostSearch"
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
            {/* Filter Section  */}
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
                    <option key={category.id} value={category.subcategoryName}>
                      {category.subcategoryName}
                    </option>
                  )) || []}
                </select>
              </div>
            </div>
          </div>
          {/* Display the blog posts */}
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
                      Latest Blog Posts
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {latestPosts.map((post) => renderPostCard(post))}
                    </div>
                  </div>
                  <div className="mt-14 mb-5">
                    <h2 className="text-4xl font-bold mb-4 mt-4">
                      Other Blog Posts
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {otherBusinessBlogPosts.map((post) => renderPostCard(post))}
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {displayedBlogPosts.map((post) => renderPostCard(post))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </QueryClientProvider>
  );
};

const WrappedBusinessBlogPostsPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BusinessBlogPostsPage />
    </QueryClientProvider>
  );
};

export default WrappedBusinessBlogPostsPage;
