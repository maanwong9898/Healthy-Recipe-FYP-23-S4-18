"use client";
// import axios from "axios";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

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
  const userID = localStorage.getItem("userId");
  console.log("Current id", userID);
  try {
    const response = await axiosInterceptorInstance.get(
      "/educationalContent/findByUserId/" + userID
    );

    console.log("All edu content belongs to this user:", response.data);

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
    console.log(
      "Average rating for educationalContent",
      eduContentId,
      "is:",
      response.data
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
  const [blogAverageRating, setBlogAverageRating] = useState([]);

  // fetch all business educational content and categories from backend
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedEduContent = await fetchEducationalContent();
        const eudContentWithAverage = await Promise.all(
          fetchedEduContent.map(async (eduContent) => {
            const average = await fetchEduContentAverage(eduContent.id);
            return { ...eduContent, average }; // Augment each educational content with its average
          })
        );
        console.log(
          "Educational contents with average:",
          eudContentWithAverage
        );
        setEducationalContent(eudContentWithAverage);
        // ... [sorting and other logic]
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };

    getData();

    // Fetch all educational content categories from backend
    const fetchCategories = async () => {
      console.log("Fetching edu content categories...");
      try {
        const response = await axiosInterceptorInstance.get(
          "category/getAllEducationalContentCategories"
        );
        console.log("Categories fetched:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
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
      // ... other sorting cases
    }

    // Update the displayed educational content
    setDisplayedEduContent(processedEduContent);
  }, [educationalContent, searchTerm, categoryFilter, sortOption]);

  // Implement
  // this function is to view particular educational content
  const handleViewEduContent = (id) => {
    console.log("Viewing edu content with id:", id);

    //Redirect to the correct route
    let routePath = `/businessUser/educationalContent/viewEducationalContent/${id}`;

    router.push(routePath);
  };

  // this function is to update particular educational content
  const handleUpdateEduContent = (id) => {
    console.log("Updating edu content with id:", id);

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
      console.log("Educational content deleted:", response.data);

      // Update UI after delete
      setEducationalContent(
        educationalContent.filter((eduContent) => eduContent.id !== id)
      );
    } catch (error) {
      console.error("Error deleting Educational content:", error);
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
    <div className="px-2 sm:px-5 min-h-screen flex flex-col py-5">
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
      {/* Search and Sort Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        {/* Search bar */}
        <div className="mb-4 md:mb-0 md:mr-2">
          <input
            type="text"
            id="eduContentSearch" // Adding an id attribute here
            name="eduContentSearch" // Adding a name attribute here
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by title"
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

      {/* Table of educational content */}
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-zinc-200 border-2">
          <thead className="bg-zinc-700 font-normal text-white border-gray-800 border-2">
            <tr className="text-center text-lg">
              <th className="px-3 py-2">Educational Content Title</th>
              <th className="px-3 py-2">Date Published</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Ratings</th>
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
                <td className="px-3 py-2 text-base text-center">
                  {eduContent.title}
                </td>
                <td className="px-3 py-2 text-base text-center">
                  {new Date(eduContent.createdDateTime).toLocaleDateString(
                    "en-GB"
                  )}
                </td>
                <td className="px-3 py-2 text-base text-center">
                  {eduContent.educationalContentType
                    ? eduContent.educationalContentType.subcategoryName
                    : "Not specified"}
                </td>

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
                <td className="px-3 py-2 text-base text-center">
                  <div
                    className="rating-container"
                    style={{ minWidth: "100px" }}
                  >
                    {eduContent.average !== null &&
                    typeof eduContent.average.averageRatings === "number" &&
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
                          {eduContent.average.totalNumber !== 1 ? "s" : ""})
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
                    onClick={() => handleUpdateEduContent(eduContent.id)}
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
                    onClick={() => handleDeleteEduContent(eduContent.id)}
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
    </div>
  );
};

export default MyEducationalContent;
