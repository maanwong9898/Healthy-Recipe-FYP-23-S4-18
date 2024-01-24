"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";

// router path: /sysAdmin/businessAccountPendingList
// this is to view the list of business users and dietitians that status are waiting for verification

// Called the controller to get the list of business users and dietitians that status are "Unverified"

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },

  // ... add more sorting options if needed ...
};

const BusinessAccountPendingList = () => {
  const router = useRouter();
  const [userAccounts, setUserAccounts] = useState([]);
  const [selectedRole, setSelectedRole] = useState("All");
  const [sortOrder, setSortOrder] = useState("Ascending");
  const [sortOption, setSortOption] = useState(sortOptions.LATEST.key);

  useEffect(() => {
    const fetchUnverifiedBusinessAccounts = async () => {
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
      } catch (error) {
        console.log(error);
      }
    };

    fetchUnverifiedBusinessAccounts();
  }, []);

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
        // userTypePath = "businessUser";
        thePath = `/sysAdmin/businessAccountPendingList/verifyBusinessUser/${viewId}`;
        router.push(thePath);
        break;
      case "NUTRITIONIST":
        // userTypePath = "dietitian";
        thePath = `/sysAdmin/businessAccountPendingList/verifyNutritionist/${viewId}`;
        router.push(thePath);
        break;
      default:
        // console.error(`Unknown profile type: ${profileType}`);
        return; // Exit the function if profile type is unknown
    }
  };

  return (
    <div className="px-2 sm:px-5 bg-cyan-800 min-h-screen flex flex-col py-5 ">
      <h1 className="text-2xl text-white font-bold p-3 text-center mb-3 sm:text-left">
        Pending Business Account List for Verification
      </h1>
      <div className="flex justify-end mb-3">
        {/* Filter dropdown */}
        {/* <select
          onChange={(e) => handleRoleFilterChange(e.target.value)}
          className="mr-2"
        >
          <option value="All">All Roles</option>
          <option value="BUSINESS_USER">Business User</option>
          <option value="NUTRITIONIST">Nutritionist</option>
        </select> */}

        {/* Sort dropdown */}
        {/* <select onChange={(e) => setSortOption(e.target.value)}>
          {Object.values(sortOptions).map((option) => (
            <option key={option.key} value={option.key}>
              {option.label}
            </option>
          ))}
        </select> */}
        {/* Filter dropdown */}
        <div className="mb-2 md:mb-0 md:mr-6">
          <label
            htmlFor="categoryFilter"
            className="ml-2 mr-2 font-2xl text-white"
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
        <div className="mb-2 md:mb-0 md:mr-6">
          <label htmlFor="sort" className="mr-2 font-2xl text-white">
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
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-black border-2">
          <thead className="bg-cyan-600 font-semibold text-cyan-950 text-lg border-black border-2">
            <tr>
              <th className="px-3 py-2 text-left">Username</th>
              <th className="px-3 py-2 text-left">Profile Type</th>
              <th className="px-3 py-2 text-left">Email</th>
              <th className="px-3 py-2 text-left">Created Date</th>
              <th className="px-3 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {filteredAndSortedAccounts.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {user.username}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {user.role === "ADMIN"
                    ? "System Admin"
                    : user.role === "REGISTERED_USER"
                    ? "Registered User"
                    : user.role === "BUSINESS_USER"
                    ? "Business User"
                    : user.role === "NUTRITIONIST"
                    ? "Nutrionist"
                    : "Unknown"}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {user.email}
                </td>
                {/* <td className="px-3 py-2 text-sm text-center sm:text-left">
                  {user.UEN}
                </td> */}
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {user.createdDate}
                </td>

                <td className="px-3 py-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  <button
                    onClick={() =>
                      handleViewUnverifiedAccount(user.id, user.role)
                    }
                    className="text-white bg-gradient-to-br from-cyan-400 to-cyan-800 border-2 border-black font-bold hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-7 mr-7 text-center"
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
    </div>
  );
};

export default BusinessAccountPendingList;
