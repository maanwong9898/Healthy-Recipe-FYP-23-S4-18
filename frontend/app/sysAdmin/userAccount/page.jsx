"use client";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import SysAdminNavBar from "../../components/navigation/sysAdminNavBar";

// this is the user account list page under sysAdmin
// router path: /sysAdmin/userAccount

const UserAccount = () => {
  const router = useRouter();
  const [userAccounts, setUserAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    fetchAllUsers();
  }, []);

  // set loading function for getching user account
  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const fetchedUserAccounts = await fetchAllUsers();
  //       setUserAccounts(fetchedUserAccounts);
  //     } catch (error) {
  //       console.error("Error fetching user accounts", error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);

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

  return (
    <div className="px-2 sm:px-5 min-h-screen flex flex-col py-5">
      <SysAdminNavBar />
      {/* Display message while fetching data ftom backend */}
      {isLoading ? (
        <div className="text-xl text-center p-4">
          <p>Loading account list...</p>
        </div>
      ) : (
        <>
          <h1 className="text-6xl text-gray-900 p-3 mb-4 font-bold text-center sm:text-center">
            User Account List
          </h1>
          <div>
            <button className="text-white bg-blue-600 hover:bg-blue-700 rounded-lg text-base font-semibold px-5 py-2.5 mr-7 mb-4 text-center">
              <Link href="/sysAdmin/userAccount/createUserAccount">
                Create User Account
              </Link>
            </button>
          </div>
          {/* Start of table */}
          <div className="overflow-x-auto rounded-lg hidden lg:block">
            <table className="min-w-full rounded-lg border-zinc-200 border-2">
              <thead className="bg-zinc-700 font-normal text-white border-gray-800 border-2">
                <tr className="text-center text-lg">
                  <th className="px-3 py-2">Username</th>
                  <th className="px-3 py-2">Profile Type</th>
                  <th className="px-3 py-2">Email</th>
                  <th className="px-3 py-2">Created Date</th>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2"></th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {userAccounts.map((user, index) => (
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
                        ? "Nutrionist"
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
                        onClick={() => handleViewAccount(user.id, user.role)}
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
              {userAccounts.map((user, index) => (
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
                      onClick={() => handleViewAccount(user.id, user.role)}
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
  );
};

export default UserAccount;
