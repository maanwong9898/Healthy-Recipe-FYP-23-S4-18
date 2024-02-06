"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SysAdminNavBar from "../../components/navigation/sysAdminNavBar";
import SecureStorage from "react-secure-storage";

// router path: /sysAdmin/businessAccountPendingList
// this is to view the list of business users and dietitians that status are waiting for verification

// Called the controller to get the list of business users and dietitians that status are "Unverified"

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
  // ... add more sorting options if needed ...
};

const BusinessAccountPendingList = () => {
  const router = useRouter();
  const [userAccounts, setUserAccounts] = useState([]);
  const [selectedRole, setSelectedRole] = useState("All");
  const [sortOrder, setSortOrder] = useState("Ascending");
  const [sortOption, setSortOption] = useState(sortOptions.LATEST.key);
  const [alphabeticalOrder, setAlphabeticalOrder] = useState("AZ");
  const [createdDateOrder, setCreatedDateOrder] = useState("LATEST");
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (
      !SecureStorage.getItem("token") ||
      SecureStorage.getItem("role") !== "ADMIN"
    ) {
      // clear the secure storage
      SecureStorage.clear();
      console.log("Redirecting to home page");
      router.push("/");
    } else {
      setIsChecking(false);

      const fetchData = async () => {
        // Fetch data
        try {
          const businessUsersResponse = await axiosInterceptorInstance.get(
            "/allUsers/getAllUnverifiedBusinessUser"
          );
          const nutritionistsResponse = await axiosInterceptorInstance.get(
            "/allUsers/getAllUnverifiedNutritionists"
          );

          // Combine both arrays
          const combinedData = [
            ...businessUsersResponse.data,
            ...nutritionistsResponse.data,
          ];

          console.log("All unverified :", combinedData);

          setUserAccounts(combinedData);

          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, []);

  if (isChecking) {
    return <div>Checking...</div>;
  }

  // Function to handle role filter change
  const handleRoleFilterChange = (role) => {
    setSelectedRole(role);
  };

  // Function to handle sort order change
  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  // Filtered, Sorted Accounts
  const filteredAndSortedAccounts = userAccounts
    .filter((user) => selectedRole === "All" || user.role === selectedRole)
    .sort((a, b) => {
      const dateA = new Date(a.createdDate);
      const dateB = new Date(b.createdDate);
      return sortOption === sortOptions.LATEST.key
        ? dateB - dateA
        : dateA - dateB;
    });

  // this function is to verify particular user account (the route will be vary based on the user profile type)
  const handleViewUnverifiedAccount = (viewId, profileType) => {
    // Check the profile type
    console.log(`Role Type: ${profileType}`);

    // Make sure the username
    console.log(`ID IS : ${viewId}`);

    // Redirect to the correct route based on the profile type
    let thePath = "";
    switch (profileType) {
      case "BUSINESS_USER":
        thePath = `/sysAdmin/businessAccountPendingList/verifyBusinessUser/${viewId}`;
        router.push(thePath);
        break;
      case "NUTRITIONIST":
        thePath = `/sysAdmin/businessAccountPendingList/verifyNutritionist/${viewId}`;
        router.push(thePath);
        break;
      default:
        return; // Exit the function if profile type is unknown
    }
  };

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

  // Sort by created date order
  const handleSortCreatedDate = () => {
    if (createdDateOrder === "LATEST") {
      setSortOption("OLDEST");
      setCreatedDateOrder("OLDEST");
    } else {
      setSortOption("LATEST");
      setCreatedDateOrder("LATEST");
    }
  };

  return (
    <div className="px-2 sm:px-5 min-h-screen flex flex-col py-5">
      <SysAdminNavBar />
      <h1 className="text-2xl lg:text-5xl text-gray-900 p-3 mb-4 font-bold text-center sm:text-center">
        Pending Business Account List for Verification
      </h1>
      {/* Filter and Sort */}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="flex flex-col mb-4 md:flex-row md:mr-2">
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
                onChange={(e) => handleRoleFilterChange(e.target.value)}
                className="p-2 rounded-lg border"
              >
                <option value="All">All Roles</option>
                <option value="BUSINESS_USER">Business User</option>
                <option value="NUTRITIONIST">Nutritionist</option>
              </select>
            </div>
          </div>

          {/* Table of accounts */}
          <div className="overflow-x-auto rounded-lg hidden lg:block">
            <table className="min-w-full rounded-lg border-zinc-200 border-2">
              <thead className="bg-zinc-700 font-normal text-white border-gray-800 border-2">
                <tr className="text-center text-lg">
                  <th className="px-3 py-2">
                    Username
                    <button
                      className="ml-1 focus:outline-none"
                      onClick={handleSortAlphabetically}
                    >
                      <SwapVertIcon />
                    </button>
                  </th>
                  <th className="px-3 py-2">Profile Type</th>
                  <th className="px-3 py-2">Email</th>
                  <th className="px-3 py-2">
                    Created Date
                    <button
                      className="ml-1 focus:outline-none"
                      onClick={handleSortCreatedDate}
                    >
                      <SwapVertIcon />
                    </button>
                  </th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedAccounts.map((user, index) => (
                  <tr key={index} className="bg-white border-b">
                    <td className="px-3 py-2 text-base text-center">
                      {user.username}
                    </td>
                    <td className="px-3 py-2 text-base text-center">
                      {user.role === "ADMIN"
                        ? "System Admin"
                        : user.role === "REGISTERED_USER"
                        ? "Registered User"
                        : user.role === "BUSINESS_USER"
                        ? "Business User"
                        : user.role === "NUTRITIONIST"
                        ? "Nutritionist"
                        : "Unknown"}
                    </td>
                    <td className="px-3 py-2 text-base text-center">
                      {user.email}
                    </td>
                    {/* <td className="px-3 py-2 text-sm text-center sm:text-left">
                  {user.UEN}
                </td> */}
                    <td className="px-3 py-2 text-base text-center">
                      {user.createdDate}
                    </td>

                    <td className="px-3 py-2 justify-center sm:justify-start">
                      <button
                        onClick={() =>
                          handleViewUnverifiedAccount(user.id, user.role)
                        }
                        className="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
                      >
                        {" "}
                        Verify Details
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
              {filteredAndSortedAccounts.map((user, index) => (
                <div
                  key={index}
                  className="bg-white p-5 h-full flex flex-col border border-gray-300 rounded-2xl shadow"
                >
                  {/* Username */}
                  <p className="px-3 py-2 text-lg">
                    <span className="font-semibold text-gray-900">
                      Username:{" "}
                    </span>
                    <span className="font-normal text-gray-900">
                      {user.username}
                    </span>
                  </p>

                  {/* Profile Type */}
                  <p className="px-3 py-2 text-lg">
                    <span className="font-semibold text-gray-900">
                      Profile Type:{" "}
                    </span>
                    <span className="font-normal text-gray-900">
                      {user.role === "ADMIN"
                        ? "System Admin"
                        : user.role === "REGISTERED_USER"
                        ? "Registered User"
                        : user.role === "BUSINESS_USER"
                        ? "Business User"
                        : user.role === "NUTRITIONIST"
                        ? "Nutritionist"
                        : "Unknown"}
                    </span>
                  </p>

                  {/* Email */}
                  <p className="px-3 py-2 text-lg">
                    <span className="font-semibold text-gray-900">Email: </span>
                    <span className="font-normal text-gray-900">
                      {user.email}
                    </span>
                  </p>

                  {/* Created Date */}
                  <p className="px-3 py-2 text-lg">
                    <span className="font-semibold text-gray-900">
                      Created Date:{" "}
                    </span>
                    <span className="font-normal text-gray-900">
                      {" "}
                      {user.createdDate}
                    </span>
                  </p>

                  {/* Button */}
                  <div className="mt-2 flex flex-col space-y-3 items-center">
                    <button
                      onClick={() =>
                        handleViewUnverifiedAccount(user.id, user.role)
                      }
                      className="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg text-base w-full px-5 py-2 ml-2 mr-2 text-center"
                    >
                      Verify Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BusinessAccountPendingList;
