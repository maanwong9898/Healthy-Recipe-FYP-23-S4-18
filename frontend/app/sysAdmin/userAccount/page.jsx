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
    status: "Active",
  },
  {
    username: "user7",
    password: "pw2",
    profile: "System Admin",
    status: "Active",
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
];

const UserAccount = () => {
  return (
    <div>
      <h1 className="text-3xl font-mono font-bold p-3 pb-6 text-center">
        User Account List
      </h1>
      <ul>
        <li className="flex bg-slate-500 items-center justify-between px-4 py-2 rounded border-b-2 border-gray-600">
          <div className="w-1/4 font-bold text-2xl">Username</div>
          <div className="w-1/4 font-bold text-2xl">Profile</div>
          <div className="w-1/4 font-bold text-2xl">Status</div>
          <div className="w-1/4"></div>
        </li>
        {mockUsers.map((user, index) => (
          <li
            key={index}
            className="flex bg-slate-300 items-center justify-between px-4 py-2 rounded border-b border-black dark:border-gray-600"
          >
            <div className="w-1/4 text-xl">{user.username}</div>
            <div className="w-1/4 text-xl">{user.profile}</div>
            <div className="w-1/4 text-xl">{user.status}</div>
            <div className="w-1/4 flex justify-end">
              <Link href={`/sysAdmin/userAccount/${user.username}`}>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  View Account
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAccount;
