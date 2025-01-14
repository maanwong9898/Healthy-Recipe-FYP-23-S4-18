"use client";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SysAdminNavBar from "../../components/navigation/sysAdminNavBar";
import SecureStorage from "react-secure-storage";
import { QueryClientProvider, useQuery } from "react-query"; // Added useQuery here
import { queryClient } from "../../queryClient.js"; // Adjust the path as necessary
import { useMutation } from "react-query";
// router path is /sysAdmin/suspendEducationalContent

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all educational contents from the backend - backend controller is EducationalContentController
const fetchEducationalContent = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "/educationalContent/get"
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

const fetchCategories = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "category/getAllEducationalContentCategories"
    );
    // setCategories(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

const SuspendEducationalContent = () => {
  const router = useRouter();
  const [displayedEduContent, setDisplayedEduContent] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("LATEST");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [searchResultsCount, setSearchResultsCount] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState("ALL");
  const [alphabeticalOrder, setAlphabeticalOrder] = useState("AZ");
  const [datePublishedOrder, setDatePublishedOrder] = useState("LATEST");
  const [statusOrder, setStatusOrder] = useState("ACTIVE");
  const [isChecking, setIsChecking] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Perform your token and role check here
    const token = SecureStorage.getItem("token");
    const role = SecureStorage.getItem("role");
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    // Replace 'ADMIN' with the actual role you're checking for
    if (!token || role !== "ADMIN" || now >= parseInt(tokenExpiration)) {
      // If the user is not authorized, redirect them
      router.push("/"); // Adjust the route as needed
    } else {
      setIsChecking(false);
      // If the user is authorized, allow the component to proceed
      setIsAuthorized(true);
    }
  }, []);

  // Fetch all educational content
  const { data: educationalContent, isLoading } = useQuery(
    "educationalContent",
    fetchEducationalContent
  );

  // Fetch categorieg
  const { data: categories, isLoading: isCategoriesLoading } = useQuery(
    "categories",
    fetchCategories
  );

  // All in 1 -- sort, filter, search
  useEffect(() => {
    if (educationalContent && Array.isArray(educationalContent)) {
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
    }
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

  const handleToggleEduContentStatus = (eduContentId, isActive) => {
    mutation.mutate({ id: eduContentId, active: !isActive });
  };

  const mutation = useMutation(
    (newStatus) =>
      axiosInterceptorInstance.put("/educationalContent/suspend", newStatus),
    {
      // Use onSuccess callback to access the variables used in the mutation call
      onSuccess: (data, variables) => {
        const { id } = variables;
        queryClient.setQueryData("educationalContent", (oldQueryData) => {
          return oldQueryData.map((educationalContent) => {
            if (educationalContent.id === id) {
              // Use id here
              return {
                ...educationalContent,
                active: !educationalContent.active,
              };
            }
            return educationalContent;
          });
        });
      },
    }
  );

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
    <QueryClientProvider client={queryClient}>
      <div>
        {isLoading && isChecking ? (
          <div>Checking...</div>
        ) : (
          <>
            <div className="px-2 sm:px-5 min-h-screen flex flex-col py-5">
              <SysAdminNavBar />
              <h1 className="text-6xl text-gray-900 p-3 mb-4 font-bold text-center sm:text-center">
                All Educational Content
              </h1>
              {isLoading ? (
                <div className="text-xl text-center p-4">
                  <p>Please wait. It'll just take a moment.</p>
                </div>
              ) : (
                <>
                  {/* Search Section */}
                  <div className="flex flex-col mb-4 md:flex-row md:mr-2">
                    {/* Search bar */}
                    <div className="relative mb-3 md:mb-8 md:mr-2">
                      <input
                        type="text"
                        id="eduContentSearch" // Adding an id attribute here
                        name="eduContentSearch" // Adding a name attribute here
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
                          <th className="px-3 py-2">Publisher</th>
                          <th className="px-3 py-2">Company</th>
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
                          {/* <th className="px-3 py-2">
                            Ratings
                            <button
                              className="ml-1 focus:outline-none"
                              onClick={handleSortByRatings}
                            >
                              <SwapVertIcon />
                            </button>
                          </th> */}
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
                              {eduContent.userID?.fullName || "nil"}
                            </td>
                            <td className="px-3 py-2 text-base text-center">
                              {eduContent.userID?.companyName || "nil"}
                            </td>
                            <td className="px-3 py-2 text-base text-center">
                              {new Date(
                                eduContent.createdDateTime
                              ).toLocaleDateString("en-GB")}
                            </td>
                            <td className="px-3 py-2 text-base text-center">
                              {eduContent.educationalContentType
                                ? eduContent.educationalContentType
                                    .subcategoryName
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
                            <td className="px-3 py-2 text-base text-center"></td>
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
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile View */}
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

                          {/* Name */}
                          <p className="px-3 py-2 text-lg">
                            <span className="font-semibold text-gray-900">
                              Publisher:{" "}
                            </span>
                            <span className="font-normal text-gray-900">
                              {eduContent.userID?.fullName || "nil"}
                            </span>
                          </p>

                          {/* Company Name */}
                          <p className="px-3 py-2 text-lg">
                            <span className="font-semibold text-gray-900">
                              Company Name:{" "}
                            </span>
                            <span className="font-normal text-gray-900">
                              {eduContent.userID?.companyName || "nil"}
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
                                ? eduContent.educationalContentType
                                    .subcategoryName
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
                          {/* Buttons */}
                          <div className="mt-2 flex flex-col space-y-3 items-center">
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
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </QueryClientProvider>
  );
};

const WrappedSuspendEduContentPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SuspendEducationalContent />
    </QueryClientProvider>
  );
};

export default WrappedSuspendEduContentPage;
