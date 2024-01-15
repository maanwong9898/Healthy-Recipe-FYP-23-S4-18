"use client";
// import axios from "axios";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

// router path is /businessUser/businessBlogPost

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  // HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  // LOWEST_RATINGS: { key: "LOWEST_RATINGS", label: "Lowest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all blog posts from the backend - backend controller is BlogController
const fetchBlogPosts = async () => {
  const userID = localStorage.getItem("id");
  console.log("Current id", userID);
  try {
    const response = await axiosInterceptorInstance.get(
      "/blog/findByUserId/" + userID
    );
    console.log("All business blog posts belongs to this user:", response.data);

    // Filter the data to include only those with educationalContent === false
    const filteredData = response.data.filter(
      (post) => post.educationalContent === false
    );

    console.log("filtered data(educationContent == false) is:", filteredData);
    return filteredData;
    // return response.data;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw error;
  }
};

const MyBusinessBlogPosts = () => {
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

  // fetch all business blog posts and categories from backend
  useEffect(() => {
    // Fetch all business blog posts from backend
    const getData = async () => {
      try {
        console.log("first time render");
        const fetchedBlog = await fetchBlogPosts();
        console.log("Fetched blog posts:", fetchedBlog);

        // Set the fetched data in businessBlogs state
        setBusinessBlogs(fetchedBlog);

        // Now sort the fetched data immediately
        const sortedBlogs = [...fetchedBlog].sort(
          (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
        );

        console.log("first time render sortedBlogs***:", sortedBlogs);

        // Set the sorted blogs as displayedBlogs
        setDisplayedBlogs(sortedBlogs);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    getData();

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

    fetchCategories();
  }, []);

  // UseEffect to sort the displayed blogs when the sort option changes
  // useEffect(() => {
  //   let sortedBlogs = [...businessBlogs]; // Create a copy of the original blog list

  //   console.log(
  //     "Before sorting:",
  //     sortedBlogs.map((blog) => blog.createdDateTime)
  //   );

  //   switch (sortOption) {
  //     case "LATEST":
  //       sortedBlogs.sort(
  //         (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
  //       );
  //       break;
  //     case "OLDEST":
  //       sortedBlogs.sort(
  //         (a, b) => new Date(a.createdDateTime) - new Date(b.createdDateTime)
  //       );
  //       break;
  //     case "ALPHABETICAL_AZ":
  //       sortedBlogs.sort((a, b) => a.title.localeCompare(b.title));
  //       break;
  //     case "ALPHABETICAL_ZA":
  //       sortedBlogs.sort((a, b) => b.title.localeCompare(a.title));
  //       break;
  //     // ... other sorting cases for ratings and reviews
  //   }

  //   console.log(
  //     "After sorting:",
  //     sortedBlogs.map((blog) => blog.createdDateTime)
  //   );

  //   console.log("force render");
  //   // setDisplayedBlogs(sortedBlogs); // Update only the displayed blogs
  //   setDisplayedBlogs([...sortedBlogs]);
  //   // check what is sortedBlogs
  //   console.log("sortedBlogs:", sortedBlogs);

  //   console.log("Displayed blogs after sorting:", displayedBlogs);
  // }, [sortOption, businessBlogs]);

  // UseEffect to filter blog posts based on the search term
  // useEffect(() => {
  //   // If the search term is cleared, show the original list and hide the "No results" message
  //   if (!searchTerm.trim()) {
  //     console.log("Search term is empty");
  //     setDisplayedBlogs(displayedBlogs);
  //     setIsSearchEmpty(false);
  //     setSearchPerformed(false); // Reset search status when search term is cleared
  //     // setSearchResultsCount(0); // Reset search results count
  //   }
  // }, [searchTerm, displayedBlogs]);

  // UseEffect to filter blog posts based on the selected category
  // useEffect(() => {
  //   console.log("Category filter changed:", categoryFilter);
  //   console.log("Business blogs:", businessBlogs);

  //   const filteredBlogs =
  //     categoryFilter === "ALL"
  //       ? businessBlogs
  //       : businessBlogs.filter((blog) => {
  //           // Ensure both values are compared as the same type
  //           return blog.blogTypeId === Number(categoryFilter);
  //         });

  //   console.log("category filter:", categoryFilter);
  //   console.log("Filtered blogs:", filteredBlogs);
  //   setDisplayedBlogs(filteredBlogs);
  // }, [businessBlogs, categoryFilter]);

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
      // ... other sorting cases
    }

    // Update the displayed blogs
    setDisplayedBlogs(processedBlogs);
  }, [businessBlogs, searchTerm, categoryFilter, sortOption]);

  // Implement handleViewBlogPost and handleUpdateBlogPost as needed
  // this function is to view particular blog post
  const handleViewBlogPost = (id) => {
    console.log("Viewing blog post with id:", id);

    //Redirect to the correct route
    let routePath = `/businessUser/businessBlogPost/viewBusinessBlogPost/${id}`;

    router.push(routePath);
  };

  // this function is to update particular blog post
  const handleUpdateBlogPost = (id) => {
    console.log("Updating blog post with id:", id);

    // Redirect to the correct route
    let routePath = `/businessUser/businessBlogPost/updateBusinessBlogPost/${id}`;

    router.push(routePath);
  };

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

  // Function to delete a blog post
  const handleDeleteBlogPost = async (id) => {
    try {
      const response = await axiosInterceptorInstance.delete(
        `/blog/delete/${id}`
      );
      console.log("Blog post deleted:", response.data);

      // Update UI after delete
      setBusinessBlogs(businessBlogs.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Error deleting blog post:", error);
      // Handle error, maybe show a message to the user
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
    <div className="px-2 sm:px-5 bg-cyan-800 min-h-screen flex flex-col py-5">
      <h1 className="text-2xl text-white p-3 mb-4 font-bold text-center sm:text-left">
        My Business Blog Posts
      </h1>
      <div>
        <button className="text-white border-2 border-black bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 mr-7 mb-4 text-center">
          <Link href="/businessUser/businessBlogPost/createBusinessBlogPost">
            Create Business Blog Post
          </Link>
        </button>
      </div>
      {/* Search and Sort Section */}
      <div className="flex justify-between items-center mb-4">
        {/* Search bar */}
        <div>
          <input
            type="text"
            id="blogSearch" // Adding an id attribute here
            name="blogSearch" // Adding a name attribute here
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search blog posts"
            className="mr-2 p-2 rounded border"
          />

          <button
            onClick={handleSearchClick}
            className="text-white border-2 border-black bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 mr-7 mb-3 mt-3 text-center"
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
        <div>
          {/* Sort dropdown */}
          <label htmlFor="sort" className="mr-2 font-2xl text-white">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-2 rounded border"
          >
            {Object.values(sortOptions).map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
          {/* Filter dropdown */}
          <label
            htmlFor="categoryFilter"
            className="ml-2 mr-2 font-2xl text-white"
          >
            Filter By Category:
          </label>
          <select
            id="categoryFilter"
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="p-2 rounded border"
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

      {/* Table of blog posts */}
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-black border-2">
          <thead className="bg-cyan-600 font-semibold text-cyan-950 border-black border-2">
            <tr className="text-center text-xl">
              <th className="px-3 py-2">Blog Post Title</th>
              <th className="px-3 py-2">Date Published</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2"></th>
              <th className="px-3 py-2"></th>
              <th className="px-3 py-2"></th>
              <th className="px-3 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {displayedBlogs.map((businessBlogPost, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-base text-center">
                  {businessBlogPost.title}
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
                        ? "text-white bg-gradient-to-br from-cyan-400 to-cyan-600"
                        : "text-white bg-gradient-to-br from-orange-600 to-red-700"
                    }`}
                  >
                    {businessBlogPost.active ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() => handleViewBlogPost(businessBlogPost.id)}
                    className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-2
                    mr-2 text-center"
                  >
                    {" "}
                    View
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() => handleUpdateBlogPost(businessBlogPost.id)}
                    className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-2
                    mr-2 text-center"
                  >
                    {" "}
                    Edit
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() =>
                      handleToggleBlogPostStatus(
                        businessBlogPost.id,
                        businessBlogPost.active
                      )
                    }
                    className={`text-white font-bold bg-gradient-to-br border-black border-2 ${
                      businessBlogPost.active
                        ? "from-orange-600 to-red-700 hover:bg-gradient-to-bl"
                        : "from-blue-400 to-purple-600 hover:bg-gradient-to-bl"
                    } focus:ring-4 focus:outline-none focus:ring-blue-300
    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 text-center`}
                  >
                    {businessBlogPost.active ? "Suspend" : "Unsuspend"}
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() => handleDeleteBlogPost(businessBlogPost.id)}
                    className="text-white font-bold bg-gradient-to-br from-orange-600 to-red-700 hover:bg-gradient-to-bl border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-7
                    mr-7 text-center"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBusinessBlogPosts;
