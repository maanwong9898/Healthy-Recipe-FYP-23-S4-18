"use client";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SecureStorage from "react-secure-storage";
import BusinessUserNavBar from "../../components/navigation/businessUserNavBar";

// router path is /businessUser/educationalContent

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  LOWEST_RATINGS: { key: "LOWEST_RATINGS", label: "Lowest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all educational contents from the backend - backend controller is EducationalContentController
const fetchEducationalContent = async () => {
  const userID = SecureStorage.getItem("userId");
  try {
    const response = await axiosInterceptorInstance.get(
      "/educationalContent/findByUserId/" + userID
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch edu contents:", error);
    throw error;
  }
};

// Fetch the average rating for each single educational content
const fetchEduContentAverage = async (eduContentId) => {
  try {
    const response = await axiosInterceptorInstance.get(
      `/educationalContent/getAverage/${eduContentId}`
    );

    return response.data; // Assuming this returns the average data for the educational content
  } catch (error) {
    console.error(
      `Failed to fetch average for educationalContent ${eduContentId}:`,
      error
    );
    return null; // or handle the error as you see fit
  }
};

const MyEducationalContent = () => {
  const router = useRouter();
  const [educationalContent, setEducationalContent] = useState([]);
  const [displayedEduContent, setDisplayedEduContent] = useState([]);
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
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  // fetch all educational content and categories from backend
  useEffect(() => {
    const token = SecureStorage.getItem("token");
    const role = SecureStorage.getItem("role");
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !token ||
      role !== "BUSINESS_USER" ||
      now >= parseInt(tokenExpiration)
    ) {
      // If token is invalid or role is not business user, redirect to login
      SecureStorage.clear();
      router.push("/");
      return;
    } else {
      setIsChecking(false);

      const getData = async () => {
        try {
          const fetchedEduContent = await fetchEducationalContent();
          const eudContentWithAverage = await Promise.all(
            fetchedEduContent.map(async (eduContent) => {
              const average = await fetchEduContentAverage(eduContent.id);
              return { ...eduContent, average }; // Augment each educational content with its average
            })
          );

          setEducationalContent(eudContentWithAverage);
        } catch (error) {
          console.error("Error while fetching data:", error);
        }
      };

      // Fetch all educational content categories from backend
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
    }
  }, []);

  // All in 1 -- sort, filter, search
  useEffect(() => {
    // Start with the full list of educational content
    let processedEduContent = [...educationalContent];

    // Search filter
    if (searchTerm) {
      processedEduContent = processedEduContent.filter((eduContent) =>
        eduContent.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (categoryFilter !== "ALL") {
      processedEduContent = processedEduContent.filter(
        (eduContent) =>
          eduContent.educationalContentTypeId === Number(categoryFilter)
      );
    }

    // Sorting
    switch (sortOption) {
      case "LATEST":
        processedEduContent.sort(
          (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
        );
        break;
      case "OLDEST":
        processedEduContent.sort(
          (a, b) => new Date(a.createdDateTime) - new Date(b.createdDateTime)
        );
        break;
      case "ALPHABETICAL_AZ":
        processedEduContent.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ALPHABETICAL_ZA":
        processedEduContent.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "HIGHEST_RATINGS":
        processedEduContent.sort((a, b) => {
          const ratingDiff =
            (b.average?.averageRatings || 0) - (a.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
        });
        break;
      case "LOWEST_RATINGS":
        processedEduContent.sort((a, b) => {
          const ratingDiff =
            (a.average?.averageRatings || 0) - (b.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
        });
        break;
      case "STATUS_ACTIVE":
        processedEduContent.sort((a, b) => {
          const statusDiff = b.active - a.active;
          if (statusDiff !== 0) return statusDiff;
        });
        break;

      case "STATUS_INACTIVE":
        processedEduContent.sort((a, b) => {
          const statusDiff = a.active - b.active;
          if (statusDiff !== 0) return statusDiff;
        });
        break;
    }

    // Update the displayed educational content
    setDisplayedEduContent(processedEduContent);
  }, [educationalContent, searchTerm, categoryFilter, sortOption]);

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

  // Implement
  // this function is to view particular educational content
  const handleViewEduContent = (id) => {

    //Redirect to the correct route
    let routePath = `/businessUser/educationalContent/viewEducationalContent/${id}`;

    router.push(routePath);
  };

  // this function is to update particular educational content
  const handleUpdateEduContent = (id) => {

    // Redirect to the correct route
    let routePath = `/businessUser/educationalContent/updateEducationalContent/${id}`;

    router.push(routePath);
  };

  // Combined Function to toggle a educational contnet active status
  const handleToggleEduContentStatus = async (eduContentId, isActive) => {
    const newStatus = !isActive;

    try {
      const response = await axiosInterceptorInstance.put(
        "/educationalContent/suspend",
        {
          id: eduContentId,
          active: newStatus,
        }
      );

      // Check if the response is successful before updating the state
      if (response.status === 200) {
        const updatedEduContent = educationalContent.map((eduContent) => {
          if (eduContent.id === eduContentId) {
            return { ...eduContent, active: newStatus };
          }
          return eduContent;
        });
        setEducationalContent(updatedEduContent);
      } else {
        console.error(
          "Failed to update the educational content status:",
          response
        );
      }
    } catch (error) {
      console.error("Error updating educational content status", error);
    }
  };

  // Function to delete a educational content
  const handleDeleteEduContent = async (id) => {
    try {
      const response = await axiosInterceptorInstance.delete(
        `/educationalContent/delete/${id}`
      );

      // Update UI after delete
      setEducationalContent(
        educationalContent.filter((eduContent) => eduContent.id !== id)
      );
    } catch (error) {
      console.error("Error deleting Educational content:", error);
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
              <p>Loading your educational content...</p>
            </div>
          ) : (
            <>
              <h1 className="text-6xl text-gray-900 p-3 mb-4 font-bold text-center sm:text-center">
                My Educational Content
              </h1>
              <div>
                <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-base font-semibold px-5 py-2.5 mr-7 mb-4 text-center">
                  <Link href="/businessUser/educationalContent/createEducationalContent">
                    Create Educational Content
                  </Link>
                </button>
              </div>
              {/* Search Section */}
              <div className="flex flex-col mb-4 md:flex-row md:mr-2">
                {/* Search bar */}
                <div className="relative mb-3 md:mb-8 md:mr-2">
                  <input
                    type="text"
                    id="eduContentSearch" 
                    name="eduContentSearch"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by title"
                    className="mr-2 p-2 rounded-lg borde w-full md:w-auto pl-10"
                  />

                  {/* Search icon */}
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                    <SearchIcon />
                  </span>
                </div>

                {/* filter dropdown */}
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

              {/* Table of educational content */}
              <div className="overflow-x-auto rounded-lg hidden lg:block">
                <table className="min-w-full rounded-lg border-zinc-200 border-2">
                  <thead className="bg-zinc-700 font-normal text-white border-gray-800 border-2">
                    <tr className="text-center text-lg">
                      <th className="px-3 py-2">
                        Educational Content Title
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
                    {displayedEduContent.map((eduContent, index) => (
                      <tr key={index} className="bg-white border-b">
                        {/* Title */}
                        <td className="px-3 py-2 text-base text-center">
                          {eduContent.title}
                        </td>
                        {/* Published Date */}
                        <td className="px-3 py-2 text-base text-center">
                          {new Date(
                            eduContent.createdDateTime
                          ).toLocaleDateString("en-GB")}
                        </td>
                        {/* Category */}
                        <td className="px-3 py-2 text-base text-center">
                          {eduContent.educationalContentType
                            ? eduContent.educationalContentType.subcategoryName
                            : "Not specified"}
                        </td>
                        {/* Status */}
                        <td className="px-3 py-2 text-base text-center">
                          <span
                            className={`rounded-full px-3 py-1 text-base font-semibold ${
                              eduContent.active
                                ? "text-white bg-green-500"
                                : "text-white bg-red-500"
                            }`}
                          >
                            {eduContent.active ? "Active" : "Inactive"}
                          </span>
                        </td>
                        {/* Ratings */}
                        <td className="px-3 py-2 text-base text-center">
                          <div
                            className="rating-container flex flex-col"
                            style={{ minWidth: "100px" }}
                          >
                            {eduContent.average !== null &&
                            typeof eduContent.average.averageRatings ===
                              "number" &&
                            typeof eduContent.average.totalNumber ===
                              "number" ? (
                              <span
                                className="rating-text"
                                style={{ fontWeight: "bold", color: "#0a0a0a" }}
                              >
                                {eduContent.average.averageRatings.toFixed(1)}
                              </span>
                            ) : (
                              "No ratings yet"
                            )}
                            {eduContent.average &&
                              eduContent.average.totalNumber > 0 && (
                                <span
                                  className="rating-count"
                                  style={{ fontSize: "0.8rem", color: "#666" }}
                                >
                                  ({eduContent.average.totalNumber} rating
                                  {eduContent.average.totalNumber !== 1
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
                            onClick={() => handleViewEduContent(eduContent.id)}
                            className="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
                          >
                            {" "}
                            View
                          </button>
                        </td>
                        <td className="px-3 py-2 justify-center sm:justify-start">
                          <button
                            onClick={() =>
                              handleUpdateEduContent(eduContent.id)
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
                              handleToggleEduContentStatus(
                                eduContent.id,
                                eduContent.active
                              )
                            }
                            className={`text-white font-bold ${
                              eduContent.active
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-stone-400 hover:bg-stone-500"
                            } rounded-lg text-base px-5 py-2 text-center`}
                          >
                            {eduContent.active ? "Suspend" : "Unsuspend"}
                          </button>
                        </td>
                        <td className="px-3 py-2 justify-center sm:justify-start">
                          <button
                            onClick={() =>
                              handleDeleteEduContent(eduContent.id)
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
                  {displayedEduContent.map((eduContent, index) => (
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
                          {eduContent.title}
                        </span>
                      </p>

                      {/* Date Published */}
                      <p className="px-3 py-2 text-lg">
                        <span className="font-semibold text-gray-900">
                          Date Published:{" "}
                        </span>
                        <span className="font-normal text-gray-900">
                          {new Date(
                            eduContent.createdDateTime
                          ).toLocaleDateString("en-GB")}
                        </span>
                      </p>

                      {/* Category */}
                      <p className="px-3 py-2 text-lg">
                        <span className="font-semibold text-gray-900">
                          Category:{" "}
                        </span>
                        <span className="font-normal text-gray-900">
                          {eduContent.educationalContentType
                            ? eduContent.educationalContentType.subcategoryName
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
                            eduContent.active
                              ? "text-white bg-green-500"
                              : "text-white bg-red-500"
                          }`}
                        >
                          {eduContent.active ? "Active" : "Inactive"}
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
                          {eduContent.average !== null &&
                          typeof eduContent.average.averageRatings ===
                            "number" &&
                          typeof eduContent.average.totalNumber === "number" ? (
                            <span
                              className="rating-text"
                              style={{ fontWeight: "bold", color: "#0a0a0a" }}
                            >
                              {eduContent.average.averageRatings.toFixed(1)}
                            </span>
                          ) : (
                            "No ratings yet"
                          )}
                          {eduContent.average &&
                            eduContent.average.totalNumber > 0 && (
                              <span
                                className="rating-count"
                                style={{ fontSize: "0.8rem", color: "#666" }}
                              >
                                ({eduContent.average.totalNumber} rating
                                {eduContent.average.totalNumber !== 1
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
                          onClick={() => handleViewEduContent(eduContent.id)}
                          className="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg text-base w-full px-5 py-2 ml-2 mr-2 text-center"
                        >
                          View
                        </button>
                        <button
                          onClick={() => handleUpdateEduContent(eduContent.id)}
                          className="text-white font-bold bg-slate-700 hover:bg-slate-800 rounded-lg text-base w-full px-5 py-2 ml-2 mr-2 text-center"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() =>
                            handleToggleEduContentStatus(
                              eduContent.id,
                              eduContent.active
                            )
                          }
                          className={`text-white font-bold  ${
                            eduContent.active
                              ? "bg-red-600 hover:bg-red-700"
                              : "bg-stone-400 hover:bg-stone-500"
                          } focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 w-full ml-2 mr-2 text-center`}
                        >
                          {eduContent.active ? "Suspend" : "Unsuspend"}
                        </button>
                        <button
                          onClick={() => handleDeleteEduContent(eduContent.id)}
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

export default MyEducationalContent;
