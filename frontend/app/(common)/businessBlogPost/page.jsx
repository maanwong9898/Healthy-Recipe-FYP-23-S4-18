"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import Home from "@/app/page";

// router path: /businessBlogPost

// Fetch all blog posts from the backend - backend controller is BlogController
const fetchBlogPosts = async () => {
  try {
    console.log("Fetching blog posts...");
    const response = await axiosInterceptorInstance.get("/blog/get");
    console.log("All blogs:", response.data);

    // Filter to get only business blog posts
    const filteredData = response.data.filter((post) => post.active === true);

    console.log("filtered data(educationContent == false) is:", filteredData);
    return filteredData;
    // return response.data;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw error;
  }
};

const BusinessBlogPostsPageForUser = () => {
  const router = useRouter();
  const [categoryFilter, setCategoryFilter] = useState("");
  const [AllBusinessBlogPosts, setAllBusinessBlogPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResultsCount, setSearchResultsCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showingSearchResults, setShowingSearchResults] = useState(false);
  const [defaultBlogPosts, setDefaultBlogPosts] = useState([]);

  // separate displayed blog posts from filtering
  const [displayedBlogPosts, setDisplayedBlogPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("use effect is calling");
        const fetchedBlog = await fetchBlogPosts();
        console.log("Fetched blog posts:", fetchedBlog);

        // Set the fetched data in businessBlogs state
        setAllBusinessBlogPosts(fetchedBlog);

        setDisplayedBlogPosts(fetchedBlog); // Set displayed posts initially to all fetched posts (no filtering) new

        // Set the default blog posts state
        setDefaultBlogPosts(fetchedBlog);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    getData();

    // Fetch all business blog categories from backend
    const fetchCategories = async () => {
      console.log("Fetching categories...");
      try {
        const response = await axiosInterceptorInstance.get(
          "category/getAllBlogPostCategories"
        );
        console.log("Categories fetched:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // This effect runs whenever searchTerm changes.
  // useEffect(() => {
  //   console.log("Search term changed:", searchTerm);
  //   // If searchTerm is empty, reset the search-related states.
  //   if (searchTerm.trim() === "") {
  //     console.log("inside second effect");
  //     console.log("default blog posts:", defaultBlogPosts);
  //     // set the default blog posts state when the search term is empty and no search is performed
  //     setAllBusinessBlogPosts(defaultBlogPosts);
  //     setSearchPerformed(false);
  //     setIsSearchEmpty(false);
  //     setShowingSearchResults(false);
  //     setSearchResultsCount(0);
  //     setSearchResults([]);
  //     console.log("Search term is empty. Resetting search states...");
  //     console.log("end of second effect");
  //   }
  // }, [searchTerm, AllBusinessBlogPosts]); // Only re-run the effect if searchTerm changes

  useEffect(() => {
    // Function to apply category filter
    const applyFilter = () => {
      const filteredPosts = categoryFilter
        ? AllBusinessBlogPosts.filter(
            (post) => post.blogType.subcategoryName === categoryFilter
          )
        : AllBusinessBlogPosts;
      setDisplayedBlogPosts(filteredPosts);
    };

    applyFilter();
  }, [categoryFilter, AllBusinessBlogPosts]);

  useEffect(() => {
    // Function to apply search
    const applySearch = () => {
      if (!searchTerm.trim()) {
        setDisplayedBlogPosts(AllBusinessBlogPosts);
        return;
      }
      const searchResults = AllBusinessBlogPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setDisplayedBlogPosts(searchResults);
    };

    applySearch();
  }, [searchTerm, AllBusinessBlogPosts]);

  // Sort and slice directly in the component
  const latestPosts = [...AllBusinessBlogPosts]
    .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
    .slice(0, 3);

  // Filter out the latest posts from the rest of the posts
  const otherBusinessBlogPosts = AllBusinessBlogPosts.filter(
    (post) => !latestPosts.find((latestPost) => latestPost.id === post.id)
  );

  // Function to handle search when user clicks the search button
  const handleSearchClick = async () => {
    setSearchPerformed(true); // Indicates that a search was performed

    if (!searchTerm.trim()) {
      setIsSearchEmpty(false);
      setSearchPerformed(false); // No search performed if the term is empty
      setSearchResultsCount(0); // Reset search results count
      setSearchResults([]); // Clear search results
      return;
    }

    try {
      const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+");
      const response = await axiosInterceptorInstance.get(
        `/blog/find?keyword=${formattedSearchTerm}`
      );
      console.log("All the results with the keyword:", response.data);

      // Filter the search results to meet your criteria
      const filteredResults = response.data.filter(
        (post) => post.active === true
      );

      // Check if the search results are empty
      if (filteredResults.length > 0) {
        setSearchResults(filteredResults); // Update the search results state
        setAllBusinessBlogPosts(filteredResults); // Update the blog posts state with the filtered results
        setIsSearchEmpty(false);
        setShowingSearchResults(true);
        setSearchResultsCount(filteredResults.length); // Update search results count

        console.log("found the results > 0");
        console.log("all business blog posts:", AllBusinessBlogPosts);
      } else {
        setShowingSearchResults(false);
        setIsSearchEmpty(true);
        setSearchResultsCount(0); // No results found
        setSearchResults([]); // Clear search results
        setAllBusinessBlogPosts(AllBusinessBlogPosts);
        console.log("found the results ==  0");
        console.log("all business blog posts:", AllBusinessBlogPosts);
      }
    } catch (error) {
      console.error("Error searching blog posts:", error);
      // Optionally handle the error, e.g., display an error message
    }
  };

  // this function is to view particular blog post
  const handleViewBlogPost = (id) => {
    // Make sure the blogPostTitle
    console.log(`Blog Title: ${id}`);

    // Redirect to the correct route
    let routePath = `/businessBlogPost/viewBusinessBlogPost/${id}`;

    router.push(routePath);
  };

  // Function to render a single post card
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
            <div dangerouslySetInnerHTML={{ __html: post.info }} />
          </div>
        </div>
        <button
          onClick={() => handleViewBlogPost(post.id)}
          className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
        >
          Read more
        </button>
      </div>
    </div>
  );

  return (
    <div>
      <HomeNavbar />
      <div className="bg-white p-4 md:p-10">
        <h1 className="text-2xl md:text-4xl font-extrabold font-mono text-cyan-800 mb-4 md:mb-8">
          Business Blog Posts
        </h1>
        {/* Search and Sort Section */}
        <div className="flex sm:justify-between sm:items-center mb-4">
          <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0">
            <input
              type="text"
              id="blogSearch"
              name="blogSearch"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search blog posts"
              className="mr-2 p-2 rounded border-2 border-black mb-2 sm:mb-0" // Removed inline styles for width and height to allow flex-grow
              style={{ flex: 1 }} // Added flex-grow for input
            />
            <button
              onClick={handleSearchClick}
              className="text-white p-2 border-2 border-black bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 text-center"
              style={{ flexShrink: 0 }} // Prevent the button from shrinking
            >
              Search
            </button>
            {/* Conditional messages */}
            {searchPerformed && (
              <p className="text-left text-red font-bold text-xl sm:ml-2">
                {isSearchEmpty
                  ? "No results found."
                  : `${searchResultsCount} results found.`}
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center">
            <label
              htmlFor="categoryFilter"
              className="font-2xl text-black mb-2 sm:mb-0 sm:mr-2"
            >
              Filter By:
            </label>
            <select
              id="categoryFilter"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="p-2 rounded border-2 border-black text-black"
              style={{ width: "100%", maxWidth: "300px" }}
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
        {/*Starrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrt from here to display data */}
        {/* Check if a search or filter is active */}
        {searchPerformed || categoryFilter ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {displayedBlogPosts.map((post) => renderPostCard(post))}
          </div>
        ) : (
          <>
            {/* Latest Business Blog Post Section */}
            <div className="mb-5">
              <h2 className="text-2xl font-bold mb-4 mt-4">
                Latest Business Blog Post
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {latestPosts.map((post) => renderPostCard(post))}
              </div>
            </div>

            {/* Other Business Blog Post Section */}
            <h2 className="text-2xl font-bold mb-4 mt-4">
              Other Business Blog Post
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherBusinessBlogPosts.map((post) => renderPostCard(post))}
            </div>
          </>
        )}

        {/* end of search and sort */}
        {/* Latest Posts Section */}
        {/* Conditional rendering based on search state */}
        {/* {!showingSearchResults ? (
          // Display the default blog posts if not showing search results
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
        ) : searchResults.length > 0 ? (
          // Display search results if there are any
          <div>
            <h2 className="text-2xl font-bold mb-4 mt-4">Search Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {searchResults.map((post) => renderPostCard(post))}
            </div>
          </div>
        ) : (
          // Display message if search was performed but no results found
          <p className="text-center text-xl font-semibold">
            No search results found. Displaying all posts.
          </p>
        )} */}
      </div>
    </div>
  );
};

export default BusinessBlogPostsPageForUser;
