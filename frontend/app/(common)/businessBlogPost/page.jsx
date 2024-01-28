"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";

// rouuter path: /businessBlogPost

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

const BusinessBlogPostsPageForUser = () => {
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

  // Fetch all blog posts and blog categories
  useEffect(() => {
    const getData = async () => {
      const fetchedBlog = await fetchBlogPosts();
      const blogsWithAverage = await Promise.all(
        fetchedBlog.map(async (blog) => {
          const average = await fetchBlogAverage(blog.id);
          return { ...blog, average }; // Augment each blog post with its average
        })
      );
      console.log("Blog with average:", blogsWithAverage);
      setAllBusinessBlogPosts(blogsWithAverage);
      setDisplayedBlogPosts(blogsWithAverage);
    };
    getData();

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
    fetchCategories();
  }, []);

  // Filter blog posts based on search term and category filter
  useEffect(() => {
    console.log("All in one useEffect triggered");
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
      // case "LOWEST_RATINGS":
      //   sortedPosts.sort((a, b) => {
      //     const ratingDiff =
      //       (a.average?.averageRatings || 0) - (b.average?.averageRatings || 0);
      //     if (ratingDiff !== 0) return ratingDiff;
      //     return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
      //   });
      //   break;
      // ... other sorting cases
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
    console.log("Search button clicked");
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
        // case "LOWEST_RATINGS":
        //   sortedResults.sort((a, b) => {
        //     const ratingDiff =
        //       (a.average?.averageRatings || 0) -
        //       (b.average?.averageRatings || 0);
        //     if (ratingDiff !== 0) return ratingDiff;
        //     return (
        //       new Date(b.createdDateTime) - new Date(a.createdDateTime)
        //     ); // Latest date first if tie
        //   });
        //   break;
        // ... other sorting cases
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
          // case "LOWEST_RATINGS":
          //   sortedResults.sort((a, b) => {
          //     const ratingDiff =
          //       (a.average?.averageRatings || 0) -
          //       (b.average?.averageRatings || 0);
          //     if (ratingDiff !== 0) return ratingDiff;
          //     return (
          //       new Date(b.createdDateTime) - new Date(a.createdDateTime)
          //     ); // Latest date first if tie
          //   });
          //   break;
          // ... other sorting cases
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
    let routePath = `/businessBlogPost/viewBusinessBlogPost/${id}`;
    router.push(routePath);
  };

  // Render each blog post card
  const renderPostCard = (post) => (
    <div
      key={post.id}
      className="rounded shadow-lg overflow-hidden flex flex-col"
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
        alt="Designed by Freepik"
        className="w-full object-cover rounded-sm"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div>
          <h2 className="text-2xl font-extrabold mb-2">{post.title}</h2>
          <div
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            <div className="whitespace-pre-line">{post.info}</div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center text-red-700 font-semibold text-xl">
              {post.createdDateTime}
            </div>
          </div>
        </div>
        {/* <div className="flex justify-between items-center">
          <div className="flex items-center text-red-700 font-semibold text-xl">
            {post.blogType.subcategoryName}
          </div>
        </div> */}
        <button
          onClick={() => handleViewBlogPost(post.id)}
          className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
        >
          Read more
        </button>
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
    <div>
      <HomeNavbar />
      <div className="bg-white p-4 md:p-10">
        <h1 className="text-2xl md:text-4xl font-extrabold font-mono text-cyan-800 mb-4 md:mb-8">
          Business Blog Posts
        </h1>
        <div className="flex sm:justify-between sm:items-center mb-4">
          {/* Search Section */}
          <div className="flex-grow">
            <input
              type="text"
              id="blogSearch"
              name="blogSearch"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearchClick();
                }
              }}
              placeholder="Search blog posts title..."
              className="mr-2 p-2 rounded border-2 border-black mb-2 sm:mb-0"
              style={{ flex: 1 }}
            />
            <button
              onClick={handleSearchClick}
              className="text-white p-2 border-2 border-black bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 text-center"
              style={{ flexShrink: 0 }}
            >
              Search
            </button>
            {/* Results count */}
            {searchButtonClicked && searchPerformed && (
              <p className="text-left text-red font-bold text-xl sm:ml-2">
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
              className="p-2 rounded border-2 border-black text-black"
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
                className="p-2 rounded border-2 border-black text-black"
                style={{ maxWidth: "300px" }}
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.subcategoryName}>
                    {category.subcategoryName}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {/* Display the blog posts */}
        {!searchPerformed && !categoryFilter && !sortOption ? (
          <>
            <div className="mb-5">
              <h2 className="text-2xl font-bold mb-4 mt-4">
                Latest Business Blog Post
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {latestPosts.map((post) => renderPostCard(post))}
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-4 mt-4">
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
      </div>
    </div>
  );
};

export default BusinessBlogPostsPageForUser;
