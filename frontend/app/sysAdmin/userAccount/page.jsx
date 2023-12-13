"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// this is the user account list page under sysAdmin
// router path: /sysAdmin/userAccount

// Mock data for frontend to test the layout
// need to fetch data from backend (database) in the future
const mockUserAccountsList = [
  {
    id: "3104d2c8-d3d7-41c4-a982-5999a81d7450",
    username: "admin111",
    password: "password",
    email: "mike@gmail.com",
    isActive: true,
    userProfile: "System Admin",
    createdDate: "2019-01-01",
  },
  {
    id: "52be9dca-d141-4eca-9c4d-daed894197c1",
    username: "user111",
    password: "password",
    email: "will@gmail.com",
    isActive: true,
    userProfile: "Business User",
    createdDate: "2022-01-01",
  },
  {
    id: "ede716b9-75da-428d-b163-cc2a62ec1736",
    username: "business111",
    password: "password",
    email: "peter@gmail.com",
    isActive: true,
    userProfile: "Dietitian",
    createdDate: "2022-01-01",
  },
  {
    id: "bd637956-d38b-418d-ad11-60ef002db03b",
    username: "dietitian111",
    password: "password",
    email: "jack@gmail.com",
    isActive: true,
    userProfile: "Registered User",
    createdDate: "2022-01-01",
  },
];

const UserAccount = () => {
  const router = useRouter();
  const [userAccounts, setUserAccounts] = useState([]);

  // ready to be tested
  // // the url will be changed to the backend url
  // const viewUserAccount = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/api/userAccount/readAllUserAccounts"
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       // write the data into console for debugging
  //       console.log("data from backend");
  //       console.log(data);
  //       setUserAccounts(data);
  //     } else {
  //       console.error("Failed to fetch user profile list");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data", error);
  //   }
  // };

  // // this function is to suspend particular user account
  // const handleSuspendAccount = async (username) => {
  //   // Check the username
  //   console.log(`Username: ${username}`);

  //   // Send a request to backend to suspend the account
  //   try {
  //     const response = await fetch(
  //       `http://localhost:8080/api/userAccount/suspendUserAccount/${username}`,
  //       {
  //         method: "PUT",
  //       }
  //     );
  //     if (response.ok) {
  //       // Refresh the user account list
  //       viewUserAccount();
  //     } else {
  //       console.error("Failed to suspend user account");
  //     }
  //   } catch (error) {
  //     console.error("Error suspending user account", error);
  //   }
  // };

  // useEffect(() => {
  //   viewUserAccount();
  // }, []);

  // this function is to view particular user account (the route will be vary based on the user profile type)
  const handleViewAccount = (username, profileType) => {
    // Check the profile type
    console.log(`Profile Type: ${profileType}`);

    // Make sure the username
    console.log(`Username: ${username}`);

    // Redirect to the correct route based on the profile type
    let userTypePath = "";
    switch (profileType) {
      case "Registered User":
        userTypePath = "registeredUser";
        break;
      case "Business User":
        userTypePath = "businessUser";
        break;
      case "System Admin":
        userTypePath = "sysAdmin";
        break;
      case "Dietitian":
        userTypePath = "dietitian";
        break;
      default:
        console.error(`Unknown profile type: ${profileType}`);
        return; // Exit the function if profile type is unknown
    }

    // Redirect to the correct route
    const routePath = `/${userTypePath}/userAccount/viewUserAccount/${username}`;
    router.push(routePath);
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
          <thead className="bg-cyan-600 font-semibold text-cyan-950 border-black border-2">
            <tr>
              <th className="px-3 py-2 text-xl text-left">Username</th>
              <th className="px-3 py-2 text-xl text-left">Profile Type</th>
              <th className="px-3 py-2 text-xl text-left">Email</th>
              <th className="px-3 py-2 text-xl text-left">Created Date</th>
              <th className="px-3 py-2 text-xl text-left">Status</th>
              <th className="px-3 py-2 text-xl text-left"></th>
            </tr>
          </thead>
          <tbody>
            {mockUserAccountsList.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {user.username}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {user.userProfile}
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
                      user.isActive === true
                        ? "text-white bg-gradient-to-br from-cyan-400 to-cyan-600"
                        : "text-white bg-gradient-to-br from-orange-600 to-red-700"
                    }`}
                  >
                    {user.isActive === true ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-3 py-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  <button
                    onClick={() =>
                      handleViewAccount(user.username, user.userProfile)
                    }
                    className="text-white bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 ml-7 mr-7 text-center"
                  >
                    View
                  </button>

                  <button
                    onClick={() => handleSuspendAccount(user.username)}
                    disabled={!user.isActive} // This will disable the button if user.isActive is false
                    className={`text-white bg-gradient-to-br from-orange-600 to-red-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 ml-7 mr-7 text-center ${
                      !user.isActive ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    Suspend
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
