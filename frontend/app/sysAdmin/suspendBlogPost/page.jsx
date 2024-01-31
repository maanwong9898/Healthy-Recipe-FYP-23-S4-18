"use client";
// import axios from "axios";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// router path is /sysAdmin/suspendBlogPost

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  LOWEST_RATINGS: { key: "LOWEST_RATINGS", label: "Lowest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all blog posts from the backend - backend controller is BlogController
const fetchBlogPosts = async () => {
  const userID = localStorage.getItem("userId");
  console.log("Current id", userID);
  try {
    const response = await axiosInterceptorInstance.get("/blog/get");

    console.log("All business blog post:", response.data);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw error;
  }
};

// Fetch the average rating for each single blog post
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

const SuspendBusinessBlogs = () => {
  const router = useRouter();
  const [businessBlogs, setBusinessBlogs] = useState([]);
  const [displayedBlogs, setDisplayedBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("LATEST");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResultsCount, setSearchResultsCount] = useState(0);
  const [categories, setCategories] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [isLoading, setIsLoading] = useState(false);

  // fetch all business blog posts and categories from backend
  useEffect(() => {
    setIsLoading(true); // Set loading state to true
    const getData = async () => {
      try {
        const fetchedBlog = await fetchBlogPosts();
        const blogsWithAverage = await Promise.all(
          fetchedBlog.map(async (blog) => {
            const average = await fetchBlogAverage(blog.id);
            return { ...blog, average }; // Augment each blog post with its average
          })
        );
        console.log("Blog with average:", blogsWithAverage);
        setBusinessBlogs(blogsWithAverage);
        // ... [sorting and other logic]
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    // Fetch all business blog categories from backend
    const fetchCategories = async () => {
      console.log("Fetching blog categories...");
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

    Promise.all([getData(), fetchCategories()])
      .then(() => {
        setIsLoading(false); // Set loading state to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Set loading state to false
      });
  }, []);

  // All in 1 -- sort, filter, search
  useEffect(() => {
    // Start with the full list of blogs
    let processedBlogs = [...businessBlogs];

    // Search filter
    if (searchTerm) {
      processedBlogs = processedBlogs.filter((blog) =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter !== "ALL") {
      processedBlogs = processedBlogs.filter(
        (blog) => blog.blogTypeId === Number(categoryFilter)
      );
    }

    // Sorting
    switch (sortOption) {
      case "LATEST":
        processedBlogs.sort(
          (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
        );
        break;
      case "OLDEST":
        processedBlogs.sort(
          (a, b) => new Date(a.createdDateTime) - new Date(b.createdDateTime)
        );
        break;
      case "ALPHABETICAL_AZ":
        processedBlogs.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ALPHABETICAL_ZA":
        processedBlogs.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "HIGHEST_RATINGS":
        processedBlogs.sort((a, b) => {
          const ratingDiff =
            (b.average?.averageRatings || 0) - (a.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
        });
        break;
      case "LOWEST_RATINGS":
        processedBlogs.sort((a, b) => {
          const ratingDiff =
            (a.average?.averageRatings || 0) - (b.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
        });
        break;
    }

    // Update the displayed blogs
    setDisplayedBlogs(processedBlogs);
  }, [businessBlogs, searchTerm, categoryFilter, sortOption]);

  // Combined Function to toggle a business blog post active status
  const handleToggleBlogPostStatus = async (blogPostId, isActive) => {
    const newStatus = !isActive;

    try {
      const response = await axiosInterceptorInstance.put("/blog/suspend", {
        id: blogPostId,
        active: newStatus,
      });

      // Check if the response is successful before updating the state
      if (response.status === 200) {
        const updatedBlogs = businessBlogs.map((blog) => {
          if (blog.id === blogPostId) {
            return { ...blog, active: newStatus };
          }
          return blog;
        });
        setBusinessBlogs(updatedBlogs);
      } else {
        console.error("Failed to update the blog post status:", response);
      }
    } catch (error) {
      console.error("Error updating blog post status", error);
    }
  };

  // Function to handle search when user clicks the search button
  const handleSearchClick = () => {
    setSearchPerformed(true); // Indicates that a search was performed

    if (!searchTerm.trim()) {
      // If the search term is empty, reset relevant states
      setIsSearchEmpty(true);
      setSearchResultsCount(0);
    } else {
      // If there is a search term, the useEffect will handle filtering
      setIsSearchEmpty(false);
    }
  };

  return (
    <div className="px-2 sm:px-5 min-h-screen flex flex-col py-5">
      <h1 className="text-6xl text-gray-900 p-3 mb-4 font-bold text-center sm:text-center">
        All Blog Posts
      </h1>
      {/* Search and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        {/* Search bar */}
        <div className="mb-4 md:mb-0 md:mr-2">
          <input
            type="text"
            id="blogSearch" // Adding an id attribute here
            name="blogSearch" // Adding a name attribute here
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search blog posts"
            className="mr-2 p-2 rounded-lg borde w-full md:w-auto"
          />

          <button
            onClick={handleSearchClick}
            className="text-white bg-blue-600 hover:bg-blue-700 rounded-full text-base font-semibold px-5 py-1 w-full md:w-auto mt-3 md:mt-0 md:ml-2"
          >
            Search
          </button>
          {/* "Results found" message */}
          {/* {searchPerformed && !isSearchEmpty && (
            <p className="text-left text-white font-bold text-xl">
              {searchResultsCount} results found.
            </p>
          )} */}
          {/* "No results found" message */}
          {/* {searchPerformed && isSearchEmpty && (
            <p className="text-left text-white font-bold text-xl">
              No results found.
            </p>
          )} */}
        </div>

        {/* Sort dropdown and filter dropdown */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Sort dropdown */}
          <div className="mb-2 md:mb-0 md:mr-6">
            <label htmlFor="sort" className="mr-2 font-2xl text-gray-900">
              Sort By:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="p-2 rounded-lg border mr-6"
            >
              {Object.values(sortOptions).map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          {/* Filter dropdown */}
          <div className="mb-2 md:mb-0 md:mr-6">
            <label
              htmlFor="categoryFilter"
              className="ml-2 mr-2 font-2xl text-gray-900"
            >
              Filter By:
            </label>
            <select
              id="categoryFilter"
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="p-2 rounded-lg border"
            >
              <option value="ALL">All Categories</option>
              {categories.map((category, index) => (
                <option key={index} value={category.id} className="text-black">
                  {category.subcategoryName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Table of blog posts */}
      {/* Conditional rendering based on isLoading state */}
      {isLoading ? (
        <div className="loading-indicator text-center">
          <p>Loading blog post...</p>
          {/* You can replace this with a spinner or any other visual indicator */}
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full rounded-lg border-zinc-200 border-2">
              <thead className="bg-zinc-700 font-normal text-white border-gray-800 border-2">
                <tr className="text-center text-lg">
                  <th className="px-3 py-2">Blog Post Title</th>
                  <th className="px-3 py-2">Publisher</th>
                  <th className="px-3 py-2">Company</th>
                  <th className="px-3 py-2">Date Published</th>
                  <th className="px-3 py-2">Category</th>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2">Ratings</th>
                  <th className="px-3 py-2"></th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {displayedBlogs.map((businessBlogPost, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-3 py-2 text-base text-center">
                      {businessBlogPost.title}
                    </td>
                    <td className="px-3 py-2 text-base text-center">
                      {businessBlogPost.userID?.fullName || "nil"}
                    </td>
                    <td className="px-3 py-2 text-base text-center">
                      {businessBlogPost.userID?.companyName || "nil"}
                    </td>
                    <td className="px-3 py-2 text-base text-center">
                      {new Date(
                        businessBlogPost.createdDateTime
                      ).toLocaleDateString("en-GB")}
                    </td>
                    <td className="px-3 py-2 text-base text-center">
                      {businessBlogPost.blogType
                        ? businessBlogPost.blogType.subcategoryName
                        : "Not specified"}
                    </td>

                    <td className="px-3 py-2 text-base text-center">
                      <span
                        className={`rounded-full px-3 py-1 text-base font-semibold ${
                          businessBlogPost.active
                            ? "text-white bg-green-500"
                            : "text-white bg-red-500"
                        }`}
                      >
                        {businessBlogPost.active ? "Active" : "Inactive"}
                      </span>
                    </td>
                    <td className="px-3 py-2 text-base text-center">
                      <div
                        className="rating-container"
                        style={{ minWidth: "100px" }}
                      >
                        {businessBlogPost.average !== null &&
                        typeof businessBlogPost.average.averageRatings ===
                          "number" &&
                        typeof businessBlogPost.average.totalNumber ===
                          "number" ? (
                          <span
                            className="rating-text"
                            style={{ fontWeight: "bold", color: "#0a0a0a" }}
                          >
                            {businessBlogPost.average.averageRatings.toFixed(1)}
                          </span>
                        ) : (
                          "No ratings yet"
                        )}
                        {businessBlogPost.average &&
                          businessBlogPost.average.totalNumber > 0 && (
                            <span
                              className="rating-count"
                              style={{ fontSize: "0.8rem", color: "#666" }}
                            >
                              ({businessBlogPost.average.totalNumber} rating
                              {businessBlogPost.average.totalNumber !== 1
                                ? "s"
                                : ""}
                              )
                            </span>
                          )}
                      </div>
                    </td>
                    <td className="px-3 py-2 text-base text-center"></td>

                    <td className="px-3 py-2 justify-center sm:justify-start">
                      <button
                        onClick={() =>
                          handleToggleBlogPostStatus(
                            businessBlogPost.id,
                            businessBlogPost.active
                          )
                        }
                        className={`text-white font-bold ${
                          businessBlogPost.active
                            ? "bg-red-600 hover:bg-red-700"
                            : "bg-stone-400 hover:bg-stone-500"
                        } rounded-lg text-base px-5 py-2 text-center`}
                      >
                        {businessBlogPost.active ? "Suspend" : "Unsuspend"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default SuspendBusinessBlogs;
