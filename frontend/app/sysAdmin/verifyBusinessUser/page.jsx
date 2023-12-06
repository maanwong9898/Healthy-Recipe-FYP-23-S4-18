"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// router path: /sysAdmin/verifyBusinessUser

// Called the controller to get the list of business users and dietitians that status are "Pending"
const mockUsers = [
  {
    username: "BusinessUser123",
    profile: "Business User",
    company: "Company 1",
    UEN: "123456789A",
    email: "user1@gmail.com",
    createdDate: "2023-10-01",
    status: "Pending",
  },
  {
    username: "BusinessUser222",
    profile: "Business User",
    company: "Company 2",
    UEN: "333456789A",
    email: "admin1@gmail.com",
    createdDate: "2023-10-01",
    status: "Pending",
  },
  {
    username: "BusinessUser333",
    profile: "Business User",
    company: "Company 3",
    UEN: "555456789A",
    email: "business1@gmail.com",
    createdDate: "2023-10-01",
    status: "Pending",
  },
  {
    username: "dietitian111",
    profile: "Dietitian",
    company: "Company 4",
    UEN: "663456789A",
    email: "dietitian1@gmail.com",
    createdDate: "2023-10-01",
    status: "Pending",
  },
];

const VerifyBusinessUserPage = () => {
  const [userAccounts, setUserAccounts] = useState(mockUsers);

  // ready to be tested
  // // the url will be changed to the backend url
  // const viewPendingBusinessUsers = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/api/userAccount/readAllPedingBusinessUsers"
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

  // useEffect(() => {
  //   viewPendingBusinessUsers();
  // }, []);

  // this function is to verify particular business user account
  const handleVerifyBusinessUser = async (username) => {
    // Check the username
    console.log(`Username that going to be verified: ${username}`);

    // Send a request to backend to verify the account
    try {
      const response = await fetch(
        `http://localhost:8080/api/userAccount/verifyUserAccount/${username}`,
        {
          method: "PUT",
        }
      );
      if (response.ok) {
        // Filter out the verified user from the list
        const updatedUsers = users.filter((user) => user.username !== username);
        setUserAccounts(updatedUsers); // Update the state to trigger a re-render
      } else {
        console.error("Failed to verify user account");
      }
    } catch (error) {
      console.error("Error verifying user account", error);
    }
  };

  return (
    <div className="px-2 sm:px-5">
      <h1 className="text-xl text-blue-700 font-semibold p-3 text-center sm:text-left">
        Pending Business User List for Verification
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-2">
          <thead className="bg-blue-600 font-semibold text-white">
            <tr>
              <th className="px-3 py-2 text-left">Username</th>
              <th className="px-3 py-2 text-left">Profile Type</th>
              <th className="px-3 py-2 text-left">Company</th>
              <th className="px-3 py-2 text-left">UEN</th>
              <th className="px-3 py-2 text-left">Created Date</th>
              <th className="px-3 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-sm text-center sm:text-left">
                  {user.username}
                </td>
                <td className="px-3 py-2 text-sm text-center sm:text-left">
                  {user.profile}
                </td>
                <td className="px-3 py-2 text-sm text-center sm:text-left">
                  {user.company}
                </td>
                <td className="px-3 py-2 text-sm text-center sm:text-left">
                  {user.UEN}
                </td>
                <td className="px-3 py-2 text-sm text-center sm:text-left">
                  {user.createdDate}
                </td>

                <td className="px-3 py-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  <button
                    onClick={() => handleVerifyBusinessUser(user.username)}
                    className="text-white font-bold bg-gradient-to-br
                    from-green-500 to-green-500 hover:bg-gradient-to-bl
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 ml-7
                    mr-7 text-center"
                  >
                    {" "}
                    Verify
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

export default VerifyBusinessUserPage;
