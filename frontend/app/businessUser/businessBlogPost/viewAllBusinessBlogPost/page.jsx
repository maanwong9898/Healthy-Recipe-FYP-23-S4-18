"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import BusinessUserNavBar from "../../../components/navigation/businessUserNavBar";

// rouuter path: /registeredUser/businessBlogPost

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  // LOWEST_RATINGS: { key: "LOWEST_RATINGS", label: "Lowest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all blog posts
const fetchBlogPosts = async () => {
  try {
    console.log("Fetching blog posts...");
    const response = await axiosInterceptorInstance.get("/blog/get");
    console.log("All blogs:", response.data);
    const filteredData = response.data.filter((post) => post.active === true);
    // console.log("Filtered data(educationContent == false) is:", filteredData);
    return filteredData;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw error;
  }
};

const fetchBlogAverage = async (blogId) => {
  try {
    const response = await axiosInterceptorInstance.get(
      `/blog/getAverage/${blogId}`
    );
    console.log("Average rating for blog post", blogId, "is:", response.data);
    return response.data; // Assuming this returns the average data for the blog
  } catch (error) {
    console.error(`Failed to fetch average for blog post ${blogId}:`, error);
    return null; // or handle the error as you see fit
  }
};

const BusinessBlogPostsPage = () => {
  const router = useRouter();
  const [categoryFilter, setCategoryFilter] = useState("");
  const [AllBusinessBlogPosts, setAllBusinessBlogPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [categories, setCategories] = useState([]);
  const [displayedBlogPosts, setDisplayedBlogPosts] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  // Additional state to track if search button has been clicked
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); // Start loading

    const getData = async () => {
      const fetchedBlog = await fetchBlogPosts();
      const blogsWithAverage = await Promise.all(
        fetchedBlog.map(async (blog) => {
          const average = await fetchBlogAverage(blog.id);
          return { ...blog, average };
        })
      );
      console.log("Blog with average:", blogsWithAverage);
      setAllBusinessBlogPosts(blogsWithAverage);
      setDisplayedBlogPosts(blogsWithAverage);
    };

    const fetchCategories = async () => {
      try {
        const response = await axiosInterceptorInstance.get(
          "category/getAllBlogPostCategories"
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
    let filteredPosts = AllBusinessBlogPosts;

    if (categoryFilter) {
      filteredPosts = filteredPosts.filter(
        (post) => post.blogType.subcategoryName === categoryFilter
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

    // setDisplayedBlogPosts(filteredPosts);
    // setResultsCount(filteredPosts.length);  /// This is causing the issue
    // setIsSearchEmpty(filteredPosts.length === 0);
    setDisplayedBlogPosts(sortedPosts);
    setIsSearchEmpty(sortedPosts.length === 0);

    // filterPosts();
    // Reset searchButtonClicked when searchTerm changes
    setSearchButtonClicked(false);

    console.log("Displayed blog posts:", displayedBlogPosts);
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

      setDisplayedBlogPosts(sortedResults);
      setResultsCount(sortedResults.length);
      setIsSearchEmpty(false);
      setSearchPerformed(false);

      console.log("Displayed blog posts after click:", displayedBlogPosts);
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

        // Fetch average ratings for each blog post
        let filteredResultsWithAverage = await Promise.all(
          filteredResults.map(async (post) => {
            const average = await fetchBlogAverage(post.id);
            return { ...post, average }; // Augment each blog post with its average
          })
        );

        if (categoryFilter) {
          filteredResultsWithAverage = filteredResultsWithAverage.filter(
            (post) => post.blogType.subcategoryName === categoryFilter
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

  const handleViewBlogPost = (id) => {
    console.log(`Blog Title: ${id}`);
    let routePath = `/businessUser/businessBlogPost/viewBusinessBlogPost/${id}`;
    router.push(routePath);
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
      <img
        src={post.img}
        alt={post.imgTitle}
        className="w-full object-cover rounded-sm text-white text-center"
        style={{ height: "192px" }}
      />

      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div className="grid grid-rows-3 items-center">
          <h2
            className="text-2xl font-extrabold mb-2"
            //onClick={() => handleViewBlogPost(post.id)}
          >
            {post?.title || "Untitled Blog Post"}
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

          {/* <div className="flex justify-between items-center">
              <div className="flex items-center text-red-700 font-semibold text-xl">
                {post.blogType.subcategoryName}
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );

  // Get the latest 3 posts
  const latestPosts = [...AllBusinessBlogPosts]
    .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
    .slice(0, 3);

  // Get the other posts that are not the latest 3
  const otherBusinessBlogPosts = AllBusinessBlogPosts.filter(
    (post) => !latestPosts.find((latestPost) => latestPost.id === post.id)
  );

  return (
    <div className="p-4 md:p-10">
      <BusinessUserNavBar />
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
              <div className="mb-5">
                <h2 className="text-3xl font-bold mb-4 mt-4">
                  Latest Business Blog Post
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {latestPosts.map((post) => renderPostCard(post))}
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-4 mt-4">
                Other Business Blog Post
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {otherBusinessBlogPosts.map((post) => renderPostCard(post))}
              </div>
            </>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {displayedBlogPosts.map((post) => renderPostCard(post))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BusinessBlogPostsPage;
