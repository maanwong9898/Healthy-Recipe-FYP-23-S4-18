"use client";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SysAdminNavBar from "../../components/navigation/sysAdminNavBar";
import SecureStorage from "react-secure-storage";

// this is the user account list page under sysAdmin
// router path: /sysAdmin/userAccount

const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
  ROLE_AZ: { key: "ROLE_AZ", label: "Role (A to Z)" },
  ROLE_ZA: { key: "ROLE_ZA", label: "Role (Z to A)" },
};

const UserAccount = () => {
  const router = useRouter();
  const [userAccounts, setUserAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);
  const [sortOption, setSortOption] = useState(sortOptions.LATEST.key);
  const [sortOrder, setSortOrder] = useState("Ascending");
  const [alphabeticalOrder, setAlphabeticalOrder] = useState("AZ");
  const [createdDateOrder, setCreatedDateOrder] = useState("LATEST");
  const [selectedRole, setSelectedRole] = useState("All");

  // get all the user from the backend
  const fetchAllUsers = async () => {
    try {
      const response = await axiosInterceptorInstance.get(
        "/systemAdmin/getAllUsers"
      );
      console.log(response.data);
      setUserAccounts(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // Combined Function to toggle a user active status (either suspend or unsuspend)
  const handleToggleUserStatus = async (suspendedUserId, isEnabled) => {
    const newStatus = !isEnabled;

    try {
      const response = await axiosInterceptorInstance.put(
        "/systemAdmin/suspend",
        {
          id: suspendedUserId,
          enabled: newStatus,
        }
      );

      // Check if the response is successful before updating the state
      if (response.status === 200) {
        const updatedUsers = userAccounts.map((user) => {
          if (user.id === suspendedUserId) {
            return { ...user, enabled: newStatus };
          }
          return user;
        });
        setUserAccounts(updatedUsers);
      } else {
        console.error("Failed to update the user status:", response);
      }
    } catch (error) {
      console.error("Error updating user status", error);
    }
  };

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
      fetchAllUsers();
      // If the user is authorized, allow the component to proceed
      setIsLoading(false);
    }
  }, []);

  // this function is to view particular user account (the route will be vary based on the user profile type)
  const handleViewAccount = (viewId, profileType) => {
    // Check the profile type
    console.log(`Role Type: ${profileType}`);

    // Make sure the username
    console.log(`ID IS : ${viewId}`);

    // Redirect to the correct route based on the profile type
    let thePath = "";
    switch (profileType) {
      case "REGISTERED_USER":
        thePath = `/sysAdmin/userAccount/viewRegisteredUser/${viewId}`;
        router.push(thePath);
        break;
      case "BUSINESS_USER":
        thePath = `/sysAdmin/userAccount/viewBusinessUser/${viewId}`;
        router.push(thePath);
        break;
      case "ADMIN":
        thePath = `/sysAdmin/userAccount/viewSystemAdmin/${viewId}`;
        router.push(thePath);
        break;
      case "NUTRITIONIST":
        thePath = `/sysAdmin/userAccount/viewNutritionist/${viewId}`;
        router.push(thePath);
        break;
      default:
        // console.error(`Unknown profile type: ${profileType}`);
        return; // Exit the function if profile type is unknown
    }
  };

  const filteredAndSortedAccounts = userAccounts
    .filter((user) => selectedRole === "All" || user.role === selectedRole)
    .sort((a, b) => {
      let comparison = 0;

      if (
        sortOption === sortOptions.ALPHABETICAL_AZ.key ||
        sortOption === sortOptions.ALPHABETICAL_ZA.key
      ) {
        // Alphabetical sorting
        const nameA = a.username.toUpperCase(); // ignore upper and lowercase
        const nameB = b.username.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          comparison = -1;
        } else if (nameA > nameB) {
          comparison = 1;
        }
        // If sorting order is ZA, reverse the comparison
        return sortOption === sortOptions.ALPHABETICAL_ZA.key
          ? comparison * -1
          : comparison;
      } else {
        // Date sorting
        const dateA = new Date(a.createdDate);
        const dateB = new Date(b.createdDate);
        comparison = dateA - dateB;
        if (sortOption === sortOptions.OLDEST.key) {
          return comparison;
        } else {
          return -comparison; // For LATEST or descending order
        }
      }
    });

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

  const handleSortCreatedDateOrder = () => {
    if (createdDateOrder === "LATEST") {
      setSortOption(sortOptions.OLDEST.key);
      setCreatedDateOrder("OLDEST");
      setSortOrder("Descending");
    } else {
      setSortOption(sortOptions.LATEST.key);
      setCreatedDateOrder("LATEST");
      setSortOrder("Ascending");
    }
  };

  // Function to handle role filter change
  const handleRoleFilterChange = (role) => {
    setSelectedRole(role);
  };

  return (
    <div>
      {isLoading && isChecking ? (
        <div>Checking...</div>
      ) : (
        <>
          <div className="px-2 sm:px-5 min-h-screen flex flex-col py-5">
            <SysAdminNavBar />
            <h1 className="text-6xl text-gray-900 p-3 mb-4 font-bold text-center sm:text-center">
              User Account List
            </h1>
            {isLoading ? (
              <div className="text-xl text-center p-4">
                <p>Please wait. It'll just take a moment.</p>
              </div>
            ) : (
              <>
                <div className="flex flex-col mb-4 md:flex-row md:mr-2">
                  {/* Filter dropdown */}
                  <div>
                    <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-base font-semibold px-5 py-2.5 mr-7 mb-4 text-center">
                      <Link href="/sysAdmin/userAccount/createUserAccount">
                        Create User Account
                      </Link>
                    </button>
                  </div>
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
                      <option value="ADMIN">System Admin</option>
                      <option value="REGISTERED_USER">Registered User</option>
                      <option value="BUSINESS_USER">Business User</option>
                      <option value="NUTRITIONIST">Nutritionist</option>
                    </select>
                  </div>
                </div>
                {/* Start of table */}
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
                          {" "}
                          Created Date
                          <button
                            className="ml-1 focus:outline-none"
                            onClick={handleSortCreatedDateOrder}
                          >
                            <SwapVertIcon />
                          </button>
                        </th>
                        <th className="px-3 py-2">Status</th>
                        <th className="px-3 py-2"></th>
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
                          <td className="px-3 py-2 text-base text-center">
                            {user.createdDate}
                          </td>
                          <td className="px-3 py-2 text-base text-center">
                            <span
                              className={`rounded-full px-3 py-1 text-base font-semibold ${
                                user.enabled === true
                                  ? "text-white bg-green-500"
                                  : "text-white bg-red-500"
                              }`}
                            >
                              {user.enabled ? "Active" : "Inactive"}
                            </span>
                          </td>
                          <td className="px-3 py-2 justify-center sm:justify-start">
                            <button
                              onClick={() =>
                                handleViewAccount(user.id, user.role)
                              }
                              className="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
                            >
                              {" "}
                              View
                            </button>
                          </td>

                          {/* <button
                    onClick={() => handleSuspendAccount(user.username)}
                    disabled={!user.enabled} // This will disable the button if user.enabled is false
                    className={`text-white bg-gradient-to-br from-orange-600 to-red-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 ml-7 mr-7 text-center border-2 border-black ${
                      !user.enabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Suspend
                  </button> */}
                          <td className="px-3 py-2 justify-center sm:justify-start">
                            <button
                              onClick={() =>
                                handleToggleUserStatus(user.id, user.enabled)
                              }
                              className={`text-white font-bold ${
                                user.enabled
                                  ? "bg-red-600 hover:bg-red-700"
                                  : "bg-stone-400 hover:bg-stone-500"
                              } rounded-lg text-base px-5 py-2 text-center`}
                            >
                              {user.enabled ? "Suspend" : "Unsuspend"}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* End of Table */}
                {/* Mobile View for Tables */}
                <div className="mx-auto items-center lg:hidden">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {filteredAndSortedAccounts.map((user, index) => (
                      <div
                        key={index}
                        className="bg-white p-5 h-full flex flex-col border border-gray-300 rounded-2xl shadow"
                      >
                        {/* Title */}
                        <p className="px-3 py-2 text-lg">
                          <span className="font-semibold text-gray-900">
                            Username:{" "}
                          </span>
                          <span className="font-normal text-gray-900">
                            {user.username}
                          </span>
                        </p>
                        {/* User Role */}
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
                              ? "Nutrionist"
                              : "Unknown"}
                          </span>
                        </p>
                        {/* Email */}
                        <p className="px-3 py-2 text-lg">
                          <span className="font-semibold text-gray-900">
                            Email:{" "}
                          </span>
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
                            {user.createdDate}
                          </span>
                        </p>
                        {/* Status */}
                        <p className="px-3 py-2 text-lg">
                          <span className="font-semibold text-gray-900">
                            Status:{" "}
                          </span>

                          <span
                            className={`rounded-full px-3 py-1 text-base font-semibold ${
                              user.enabled === true
                                ? "text-white bg-green-500"
                                : "text-white bg-red-500"
                            }`}
                          >
                            {user.enabled ? "Active" : "Inactive"}
                          </span>
                        </p>

                        {/* Buttons */}
                        <div className="mt-2 flex flex-col space-y-3 items-center">
                          <button
                            onClick={() =>
                              handleViewAccount(user.id, user.role)
                            }
                            className="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg text-base w-full px-5 py-2 ml-2 mr-2 text-center"
                          >
                            {" "}
                            View
                          </button>
                          <button
                            onClick={() =>
                              handleToggleUserStatus(user.id, user.enabled)
                            }
                            className={`text-white font-bold ${
                              user.enabled
                                ? "bg-red-600 hover:bg-red-700"
                                : "bg-stone-400 hover:bg-stone-500"
                            } focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-base px-5 py-2.5 w-full ml-2 mr-2 text-center`}
                          >
                            {user.enabled ? "Suspend" : "Unsuspend"}
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
  );
};

export default UserAccount;
