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
    status: "Active",
  },
  {
    username: "user2",
    password: "pw2",
    profile: "System Admin",
    status: "Active",
  },
  {
    username: "user3",
    password: "pw2",
    profile: "System Admin",
    status: "Active",
  },
  {
    username: "user4",
    password: "pw2",
    profile: "Dietitian",
    status: "Active",
  },
  {
    username: "user5",
    password: "pw2",
    profile: "Business User",
    status: "Active",
  },
  ,
  {
    username: "user6",
    password: "pw2",
    profile: "System Admin",
    status: "Inactive",
  },
  {
    username: "user7",
    password: "pw2",
    profile: "System Admin",
    status: "Inactive",
  },
  {
    username: "user8",
    password: "pw2",
    profile: "Dietitian",
    status: "Active",
  },
  {
    username: "user9",
    password: "pw2",
    profile: "Business User",
    status: "Active",
  },
  {
    username: "user10",
    password: "pw2",
    profile: "System Admin",
    status: "Inactive",
  },
  {
    username: "user11",
    password: "pw2",
    profile: "System Admin",
    status: "Inactive",
  },
  {
    username: "user12",
    password: "pw2",
    profile: "Dietitian",
    status: "Active",
  },
  {
    username: "user13",
    password: "pw2",
    profile: "Business User",
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
        <ul className="min-w-full rounded-lg border-2">
          <li className="flex flex-row sm:flex-row bg-blue-600 font-semibold text-white px-3 py-2 rounded-t-lg">
            <div className="w-full sm:w-1/6 text-lg sm:text-xl mb-2 sm:mb-0 text-center sm:text-left">
              Username
            </div>
            <div className="w-full sm:w-1/6 text-lg sm:text-xl mb-2 sm:mb-0 text-center sm:text-left">
              Profile
            </div>
            <div className="w-full sm:w-1/6 text-lg sm:text-xl mb-2 sm:mb-0 text-center sm:text-left">
              Status
            </div>
            <div className="w-full sm:w-3/6 mb-2 sm:mb-0"></div>
          </li>
          {mockUsers.map((user, index) => (
            <li
              key={index}
              className="flex flex-row sm:flex-row justify-between items-center bg-white px-3 py-2 rounded border-b border-blue dark:border-blue-600"
            >
              <div className="w-full sm:w-1/6 text-sm mb-2 sm:mb-0 text-center sm:text-left">
                {user.username}
              </div>
              <div className="w-full sm:w-1/6 text-sm mb-2 sm:mb-0 text-center sm:text-left">
                {user.profile}
              </div>
              <div className="w-full sm:w-1/6 text-sm mb-2 sm:mb-0 text-center sm:text-left">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold
                  ${
                    user.status === "Active"
                      ? "bg-green-200 text-green-900"
                      : "bg-red-200 text-red-900"
                  }
                  `}
                >
                  {user.status}
                </span>
              </div>
              <div className="w-full sm:w-3/6 flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-8 font-bold">
                <Link
                  href={`/sysAdmin/userAccount/viewUserAccount/${user.username}`}
                >
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    View
                  </button>
                </Link>
                <Link href={`/sysAdmin/userAccount/${user.username}`}>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Edit
                  </button>
                </Link>
                <Link href={`/sysAdmin/userAccount/${user.username}`}>
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Suspend
                  </button>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserAccount;
