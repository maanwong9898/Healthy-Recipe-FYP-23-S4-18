// this is the user account page under sysAdmin
// router path: /sysAdmin/userAccount
"use client";

import React from "react";
import Link from "next/link";

// Mock data for frontend to test the layout
// need to fetch data from backend (database) in the future
const mockUsers = [
  {
    username: "user1",
    password: "pw1",
    profile: "Registered User",
    email: "user1@gmail.com",
    createdDate: "2023-10-01",
    status: "Active",
  },
  {
    username: "admin1",
    password: "pw1",
    profile: "System Admin",
    email: "admin1@gmail.com",
    createdDate: "2023-10-01",
    status: "Active",
  },
  {
    username: "business1",
    password: "pw1",
    profile: "Business User",
    email: "business1@gmail.com",
    createdDate: "2023-10-01",
    status: "Active",
  },
  {
    username: "dietitian1",
    password: "pw1",
    profile: "Dietitian",
    email: "dietitian1@gmail.com",
    createdDate: "2023-10-01",
    status: "Active",
  },
  {
    username: "user2",
    password: "pw1",
    profile: "Registered User",
    email: "user1@gmail.com",
    createdDate: "2023-12-01",
    status: "Inactive",
  },
  {
    username: "admin2",
    password: "pw1",
    profile: "System Admin",
    email: "admin1@gmail.com",
    createdDate: "2023-12-01",
    status: "Active",
  },
  {
    username: "business2",
    password: "pw1",
    profile: "Business User",
    email: "business1@gmail.com",
    createdDate: "2023-12-01",
    status: "Active",
  },
  {
    username: "dietitian2",
    password: "pw1",
    profile: "Dietitian",
    email: "dietitian1@gmail.com",
    createdDate: "2023-12-01",
    status: "Active",
  },
];

const UserAccount = () => {
  return (
    <div className="px-2 sm:px-5">
      <h1 className="text-xl text-blue-700 font-semibold p-3 text-center sm:text-left">
        User Account List
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-2">
          <thead className="bg-blue-600 font-semibold text-white">
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
                  {user.email}
                </td>
                <td className="px-3 py-2 text-sm text-center sm:text-left">
                  {user.createdDate}
                </td>
                <td className="px-3 py-2 text-sm text-center sm:text-left">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      user.status === "Active"
                        ? "bg-green-200 text-green-900"
                        : "bg-red-200 text-red-900"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="px-3 py-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  <Link
                    href={`/sysAdmin/userAccount/viewUserAccount/${user.username}`}
                  >
                    <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 ml-7 mr-7 text-center">
                      View
                    </button>
                  </Link>

                  <Link href={`/sysAdmin/userAccount/suspend/${user.username}`}>
                    <button className="text-white bg-gradient-to-br from-red-600 to-red-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 ml-7 mr-7 text-center">
                      Suspend
                    </button>
                  </Link>
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
