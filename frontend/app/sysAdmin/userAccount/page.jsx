"use client";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";

// this is the user account list page under sysAdmin
// router path: /sysAdmin/userAccount

const UserAccount = () => {
  const router = useRouter();
  const [userAccounts, setUserAccounts] = useState([]);

  // get all the user from the backend
  const viewAllUser = async () => {
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
    viewAllUser();
  }, []);

  // this function is to view particular user account (the route will be vary based on the user profile type)
  const handleViewAccount = (viewId, profileType) => {
    // Check the profile type
    console.log(`Role Type: ${profileType}`);

    // Make sure the username
    console.log(`ID IS : ${viewId}`);

    // {user.role === "ADMIN"
    //                 ? "System Admin"
    //                 : user.role === "REGISTERED_USER"
    //                 ? "Registered User"
    //                 : user.role === "BUSINESS_USER"
    //                 ? "Business User"
    //                 : user.role === "NUTRITIONIST"
    //                 ? "Nutrionist"
    //                 : "Unknown"}

    // Redirect to the correct route based on the profile type
    let thePath = "";
    switch (profileType) {
      case "REGISTERED_USER":
        // userTypePath = "registeredUser";
        thePath = `/sysAdmin/userAccount/viewRegisteredUser/${viewId}`;
        router.push(thePath);
        break;
      case "BUSINESS_USER":
        // userTypePath = "businessUser";
        thePath = `/sysAdmin/userAccount/viewBusinessUser/${viewId}`;
        router.push(thePath);
        break;
      case "ADMIN":
        thePath = `/sysAdmin/userAccount/viewSystemAdmin/${viewId}`;
        // console.log(thePath);
        router.push(thePath);
        break;
      case "NUTRITIONIST":
        // userTypePath = "dietitian";
        thePath = `/sysAdmin/userAccount/viewNutritionist/${viewId}`;
        router.push(thePath);
        break;
      default:
        // console.error(`Unknown profile type: ${profileType}`);
        return; // Exit the function if profile type is unknown
    }

    // Redirect to the correct route
    // const routePath = `/${userTypePath}/userAccount/viewUserAccount/${username}`;
    // router.push(routePath);
  };

  return (
    <div className="px-2 sm:px-5 bg-cyan-800 min-h-screen flex flex-col py-5 ">
      <h1 className="text-2xl text-white p-3 mb-4 font-bold text-center sm:text-left">
        User Account List
      </h1>
      <div>
        <button className="text-white border-2 border-black bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 mr-7 mb-4 text-center">
          <Link href="/sysAdmin/userAccount/createUserAccount">
            Create User Account
          </Link>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-black border-2">
          <thead className="bg-cyan-600 font-semibold text-cyan-950 text-lg border-black border-2">
            <tr>
              <th className="px-3 py-2 text-left">Username</th>
              <th className="px-3 py-2 text-left">Profile Type</th>
              <th className="px-3 py-2 text-left">Email</th>
              <th className="px-3 py-2 text-left">Created Date</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {userAccounts.map((user, index) => (
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
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {user.createdDate}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  <span
                    className={`rounded-full px-3 py-1 text-base font-semibold ${
                      user.enabled === true
                        ? "text-white bg-gradient-to-br from-cyan-400 to-cyan-600"
                        : "text-white bg-gradient-to-br from-orange-600 to-red-700"
                    }`}
                  >
                    {user.enabled ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-3 py-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  <button
                    onClick={() => handleViewAccount(user.id, user.role)}
                    className="text-white bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 ml-7 mr-7 text-center border-2 border-black"
                  >
                    View
                  </button>

                  {/* <button
                    onClick={() => handleSuspendAccount(user.username)}
                    disabled={!user.enabled} // This will disable the button if user.enabled is false
                    className={`text-white bg-gradient-to-br from-orange-600 to-red-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 ml-7 mr-7 text-center border-2 border-black ${
                      !user.enabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Suspend
                  </button> */}

                  <button
                    onClick={() =>
                      handleToggleUserStatus(user.id, user.enabled)
                    }
                    className={`text-white font-bold bg-gradient-to-br border-black border-2 ${
                      user.enabled
                        ? "from-orange-600 to-red-700 hover:bg-gradient-to-bl"
                        : "from-blue-400 to-purple-600 hover:bg-gradient-to-bl"
                    } focus:ring-4 focus:outline-none focus:ring-blue-300
                   dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 text-center`}
                  >
                    {user.enabled ? "Suspend" : "Unsuspend"}
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

export default UserAccount;
