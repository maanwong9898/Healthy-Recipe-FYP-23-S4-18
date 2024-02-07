"use client";
// import axios from "axios";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SecureStorage from "react-secure-storage";
import BusinessUserNavBar from "../../components/navigation/businessUserNavBar";

// router path is /businessUser/businessBlogPost

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
  const userID = SecureStorage.getItem("userId");
  console.log("Current id", userID);
  try {
    const response = await axiosInterceptorInstance.get(
      "/blog/findByUserId/" + userID
    );

    console.log("All business blog posts belongs to this user:", response.data);

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
  const [alphabeticalOrder, setAlphabeticalOrder] = useState("AZ");
  const [datePublishedOrder, setDatePublishedOrder] = useState("LATEST");
  const [ratingsOrder, setRatingsOrder] = useState("HIGHEST");
  const [statusOrder, setStatusOrder] = useState("ACTIVE");
  const [isChecking, setIsChecking] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // fetch all business blog posts and categories from backend
  useEffect(() => {
    const token = SecureStorage.getItem("token");
    const role = SecureStorage.getItem("role");

    if (!token || role !== "BUSINESS_USER") {
      // If token is invalid or role is not business user, redirect to login
      SecureStorage.clear();
      router.push("/");
      return;
    } else {
      setIsChecking(false);

      const getData = async () => {
        try {
          setIsLoading(true); // Set loading state to true
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
        .catch((error) => {
          console.error("Error in fetchData or fetchCategories:", error);
        })
        .finally(() => {
          setIsLoading(false); // End loading after both operations are complete
        });
    }
  }, []);

  // if (isChecking) {
  //   return <div>Checking...</div>;
  // }

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
      case "STATUS_ACTIVE":
        processedBlogs.sort((a, b) => {
          const statusDiff = b.active - a.active;
          if (statusDiff !== 0) return statusDiff;
        });
        break;

      case "STATUS_INACTIVE":
        processedBlogs.sort((a, b) => {
          const statusDiff = a.active - b.active;
          if (statusDiff !== 0) return statusDiff;
        });
        break;
    }

    // Update the displayed blogs
    setDisplayedBlogs(processedBlogs);
  }, [businessBlogs, searchTerm, categoryFilter, sortOption]);

  // Sort by alphabetical order
  const handleSortAlphabetically = () => {
    if (alphabeticalOrder === "AZ") {
      setSortOption("ALPHABETICAL_AZ");
      setAlphabeticalOrder("ZA");
    } else {
      setSortOption("ALPHABETICAL_ZA");
      setAlphabeticalOrder("AZ");
    }
  };

  // Sort by date published order
  const handleSortByDatePublished = () => {
    if (datePublishedOrder === "LATEST") {
      setSortOption("OLDEST");
      setDatePublishedOrder("OLDEST");
    } else {
      setSortOption("LATEST");
      setDatePublishedOrder("LATEST");
    }
  };

  // Sort by ratings order
  const handleSortByRatings = () => {
    if (ratingsOrder === "HIGHEST") {
      setSortOption("LOWEST_RATINGS");
      setRatingsOrder("LOWEST");
    } else {
      setSortOption("HIGHEST_RATINGS");
      setRatingsOrder("HIGHEST");
    }
  };

  // Sort by status order
  const handleSortByStatus = () => {
    if (statusOrder === "ACTIVE") {
      setSortOption("STATUS_INACTIVE");
      setStatusOrder("INACTIVE");
    } else {
      setSortOption("STATUS_ACTIVE");
      setStatusOrder("ACTIVE");
    }
  };

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
      {isLoading && isChecking ? (
        <div>Loading...</div>
      ) : (
        <>
          <BusinessUserNavBar />
          {/* Display message while fetching data ftom backend */}
          {isLoading ? (
            <div className="text-xl text-center p-4">
              <p>Loading your blog post...</p>
            </div>
          ) : (
            <>
              <h1 className="text-6xl text-gray-900 p-3 mb-4 font-bold text-center sm:text-center">
                My Blog Posts
              </h1>
              <div>
                <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-base font-semibold px-5 py-2.5 mr-7 mb-4 text-center">
                  <Link href="/businessUser/businessBlogPost/createBusinessBlogPost">
                    Create Blog Post
                  </Link>
                </button>
              </div>
              {/* Search section */}
              <div className="flex flex-col mb-4 md:flex-row md:mr-2">
                <div className="relative mb-3 md:mb-8 md:mr-2">
                  <input
                    type="text"
                    id="blogSearch"
                    name="blogSearch"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title"
                    className="mr-2 p-2 rounded-lg border w-full md:w-auto pl-10"
                  />
                  {/* Search icon */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <SearchIcon />
                  </span>
                </div>
                {/* Filter dropdown */}
                <div className="relative md:ml-auto">
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
                      <option
                        key={index}
                        value={category.id}
                        className="text-black"
                      >
                        {category.subcategoryName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Table of blog posts */}
              <div className="overflow-x-auto rounded-lg hidden lg:block">
                <table className="min-w-full rounded-lg border-zinc-200 border-2">
                  <thead className="bg-zinc-700 font-normal text-white border-gray-800 border-2">
                    <tr className="text-center text-lg">
                      <th className="px-3 py-2">
                        Blog Post Title
                        <button
                          className="ml-1 focus:outline-none"
                          onClick={handleSortAlphabetically}
                        >
                          <SwapVertIcon />
                        </button>
                      </th>
                      <th className="px-3 py-2">
                        Date Published
                        <button
                          className="ml-1 focus:outline-none"
                          onClick={handleSortByDatePublished}
                        >
                          <SwapVertIcon />
                        </button>
                      </th>
                      <th className="px-3 py-2">Category</th>
                      <th className="px-3 py-2">
                        Status
                        <button
                          className="ml-1 focus:outline-none"
                          onClick={handleSortByStatus}
                        >
                          <SwapVertIcon />
                        </button>
                      </th>
                      <th className="px-3 py-2">
                        Ratings
                        <button
                          className="ml-1 focus:outline-none"
                          onClick={handleSortByRatings}
                        >
                          <SwapVertIcon />
                        </button>
                      </th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
                      <th className="px-3 py-2"></th>
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
                            className="rating-container flex flex-col"
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
                                {businessBlogPost.average.averageRatings.toFixed(
                                  1
                                )}
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
                              handleViewBlogPost(businessBlogPost.id)
                            }
                            className="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
                          >
                            {" "}
                            View
                          </button>
                        </td>
                        <td className="px-3 py-2 justify-center sm:justify-start">
                          <button
                            onClick={() =>
                              handleUpdateBlogPost(businessBlogPost.id)
                            }
                            className="text-white font-bold bg-slate-700 hover:bg-slate-800 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
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
                            className={`text-white font-bold ${
                              businessBlogPost.active
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-stone-400 hover:bg-stone-500"
                            } rounded-lg text-base px-5 py-2 text-center`}
                          >
                            {businessBlogPost.active ? "Suspend" : "Unsuspend"}
                          </button>
                        </td>
                        <td className="px-3 py-2 justify-center sm:justify-start">
                          <button
                            onClick={() =>
                              handleDeleteBlogPost(businessBlogPost.id)
                            }
                            className="text-white font-bold bg-red-600 hover:bg-red-700 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
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
              {/* Mobile View for Tables */}
              <div className="mx-auto items-center lg:hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {displayedBlogs.map((businessBlogPost, index) => (
                    <div
                      key={index}
                      className="bg-white p-5 h-full flex flex-col border border-gray-300 rounded-2xl shadow"
                    >
                      {/* Title */}
                      <p className="px-3 py-2 text-lg">
                        <span className="font-semibold text-gray-900">
                          Title:{" "}
                        </span>
                        <span className="font-normal text-gray-900">
                          {businessBlogPost.title}
                        </span>
                      </p>

                      {/* Date Published */}
                      <p className="px-3 py-2 text-lg">
                        <span className="font-semibold text-gray-900">
                          Date Published:{" "}
                        </span>
                        <span className="font-normal text-gray-900">
                          {new Date(
                            businessBlogPost.createdDateTime
                          ).toLocaleDateString("en-GB")}
                        </span>
                      </p>

                      {/* Category */}
                      <p className="px-3 py-2 text-lg">
                        <span className="font-semibold text-gray-900">
                          Category:{" "}
                        </span>
                        <span className="font-normal text-gray-900">
                          {businessBlogPost.blogType
                            ? businessBlogPost.blogType.subcategoryName
                            : "Not specified"}
                        </span>
                      </p>

                      {/* Status */}
                      <p className="px-3 py-2 text-lg">
                        <span className="font-semibold text-gray-900 mr-2">
                          Status:{" "}
                        </span>
                        <span
                          className={`rounded-full px-3 py-1 text-base font-semibold ${
                            businessBlogPost.active
                              ? "text-white bg-green-500"
                              : "text-white bg-red-500"
                          }`}
                        >
                          {businessBlogPost.active ? "Active" : "Inactive"}
                        </span>
                      </p>

                      {/* Ratings */}
                      <div className="px-3 py-2 text-lg">
                        <div
                          className="rating-container flex flex-row gap-2"
                          style={{ minWidth: "100px" }}
                        >
                          <p className="font-semibold text-gray-900">
                            Ratings:{" "}
                          </p>
                          {businessBlogPost.average !== null &&
                          typeof businessBlogPost.average.averageRatings ===
                            "number" &&
                          typeof businessBlogPost.average.totalNumber ===
                            "number" ? (
                            <span
                              className="rating-text"
                              style={{ fontWeight: "bold", color: "#0a0a0a" }}
                            >
                              {businessBlogPost.average.averageRatings.toFixed(
                                1
                              )}
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
                      </div>

                      {/* Buttons */}
                      <div className="mt-2 flex flex-col space-y-3 items-center">
                        <button
                          onClick={() =>
                            handleViewBlogPost(businessBlogPost.id)
                          }
                          className="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg text-base w-full px-5 py-2 ml-2 mr-2 text-center"
                        >
                          View
                        </button>
                        <button
                          onClick={() =>
                            handleUpdateBlogPost(businessBlogPost.id)
                          }
                          className="text-white font-bold bg-slate-700 hover:bg-slate-800 rounded-lg text-base w-full px-5 py-2 ml-2 mr-2 text-center"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            handleToggleBlogPostStatus(
                              businessBlogPost.id,
                              businessBlogPost.active
                            )
                          }
                          className={`text-white font-bold  ${
                            businessBlogPost.active
                              ? "bg-red-600 hover:bg-red-700"
                              : "bg-stone-400 hover:bg-stone-500"
                          } focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 w-full ml-2 mr-2 text-center`}
                        >
                          {businessBlogPost.active ? "Suspend" : "Unsuspend"}
                        </button>
                        <button
                          onClick={() => handleDeleteBlogPost(blogPostId.id)}
                          className="text-white font-bold bg-red-600 hover:bg-red-700 rounded-lg text-base px-5 py-2.5 w-full ml-2 mr-2 text-center"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default MyBusinessBlogPosts;
