"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// this is to verify particular dietitian under sysAdmin
// router path: /sysAdmin/businessAccountPendingList/verifyDietitianUserAccount/[username]

const mockDieitianAccount = {
  id: "3104d2c8-d3d7-41c4-a982-5999a81d7450",
  full_name: "Peter Lim",
  username: "Dietitian1",
  password: "password",
  email: "william@gmail.com",
  isActive: true,
  userProfile: "Dietitian",
  company_name: "Company 4",
  UEN: "663456789A",
  ifDietitian: true,
  ifVerified: false,
};

const VerifyDieitian = ({ params }) => {
  const [dietitanUserAccount, setBusinessUserAccount] =
    useState(mockDieitianAccount);

  // // the url will be changed to the backend url
  // const viewBusinessUserAccount = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/api/userAccount/readUserAccountByUsername/" +
  //         params.username
  //     );

  //     const jsonData = await response.json();
  //     setBusinessUserAccount(jsonData);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   viewBusinessUserAccount();
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8  bg-cyan-600 p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Dietian Verification
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-3">
            <div>
              <label className="block text-lg font-bold text-cyan-950">
                Full Name:
              </label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                autoComplete="full_name"
                value={dietitanUserAccount ? dietitanUserAccount.full_name : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
            <div>
              <label className="block text-lg mb-2 font-bold text-cyan-950">
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                value={dietitanUserAccount ? dietitanUserAccount.username : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-cyan-950">
                Work Email Address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={dietitanUserAccount ? dietitanUserAccount.email : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>

            <div>
              <label className="block text-lg font-bold text-cyan-950">
                Company Name:
              </label>
              <input
                type="text"
                name="company_name"
                id="company_name"
                autoComplete="company_name"
                value={
                  dietitanUserAccount ? dietitanUserAccount.company_name : ""
                }
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-cyan-950">
                License:
              </label>
              <input
                type="text"
                name="UEN"
                id="UEN"
                autoComplete="UEN"
                value={dietitanUserAccount ? dietitanUserAccount.UEN : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
          </div>
          <div className="flex space-x-5 justify-center">
            <div className="flex-1">
              <button
                onClick={() => handleSuspendAccount(user.username)}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                disabled={!dietitanUserAccount.isActive}
              >
                Reject
              </button>
            </div>
            <div className="flex-1">
              <button
                onClick={() => handleApproveAccount(user.username)}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                disabled={!dietitanUserAccount.isActive}
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyDieitian;
