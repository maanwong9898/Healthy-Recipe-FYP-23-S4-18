"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// this is to view particular user account under sysAdmin
// router path: /sysAdmin/userAccount/viewUserAccount/[username]

const mockAdminUserAccount = {
  id: "3104d2c8-d3d7-41c4-a982-5999a81d7450",
  name: "Mike",
  username: "admin111",
  password: "password",
  email: "mike@gmail.com",
  isActive: false,
  userProfile: "System Admin",
  createdDate: "2019-01-01",
  dob: "1990-01-01",
};

const ViewUserAccount = ({ params }) => {
  const [userAccount, setUserAccount] = useState(mockAdminUserAccount);

  // // the url will be changed to the backend url
  // const viewUserAccount = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/api/userAccount/readUserAccountByUsername/" +
  //         params.username
  //     );

  //     const jsonData = await response.json();
  //     setUserAccount(jsonData);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   viewUserAccount();
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8  bg-blue-300 p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            User Account Details
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-3">
            <div>
              <label className="block text-lg font-medium mb-2 text-gray-700">
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                value={userAccount ? userAccount.username : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                value={userAccount ? userAccount.name : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                User Profile:
              </label>
              <input
                type="text"
                name="userProfile"
                id="userProfile"
                autoComplete="userProfile"
                value={userAccount ? userAccount.userProfile : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700">
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={userAccount ? userAccount.email : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Date of Birth:
              </label>
              <input
                type="text"
                name="dob"
                id="dob"
                value={userAccount ? userAccount.dob : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">
                Date of Account Creation:
              </label>
              <input
                type="text"
                name="createdDate"
                id="createdDate"
                value={userAccount ? userAccount.createdDate : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
          </div>
          <div>
            <button
              onClick={() => handleSuspendAccount(user.username)}
              disabled={!userAccount.isActive} // This will disable the button if user.isActive is false
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
                !userAccount.isActive ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Suspend Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserAccount;
