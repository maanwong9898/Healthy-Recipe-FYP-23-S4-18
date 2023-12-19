"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// this is to verify particular dietitian under sysAdmin
// router path: /sysAdmin/businessAccountPendingList/verifyDietitianUserAccount/[username]

const mockDieitianAccount = {
  id: "3104d2c8-d3d7-41c4-a982-5999a81d7450",
  full_name: "Jessica Lim",
  username: "Dietitian1",
  password: "password",
  email: "jessica@gmail.com",
  contactNumber: "91239999",
  address: "123, Tampines Ave 6, #08-111",
  postalCode: "525207",
  isActive: true,
  userProfile: "Dietitian",
  company_name: "Company 4",
  licenseNumber: "123456888A",
  organizationAssociated:
    "Singapore Dietitian Nutrition and Dietetics Association",
  ifDietitian: false,
  ifVerified: false,
};

const VerifyDieitian = ({ params }) => {
  const [dietitanUserAccount, setDietitanUserAccount] =
    useState(mockDieitianAccount);

  // // the url will be changed to the backend url
  // const viewDietitanUserAccount = async () => {
  //   try {
  //     const response = await fetch(
  //       "http://localhost:8080/api/userAccount/readUserAccountByUsername/" +
  //         params.username
  //     );

  //     const jsonData = await response.json();
  //     setDietitanUserAccount(jsonData);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   viewDietitanUserAccount();
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8  bg-slate-100 p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Dietitian Verification
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
              <label className="block text-lg mb-2 font-bold text-cyan-950">
                Contact Number:
              </label>
              <input
                type="text"
                name="contactNumber"
                id="contactNumber"
                autoComplete="contactNumber"
                value={
                  dietitanUserAccount ? dietitanUserAccount.contactNumber : ""
                }
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
                Company Address:
              </label>
              <input
                type="text"
                name="address"
                id="address"
                autoComplete="address"
                value={dietitanUserAccount ? dietitanUserAccount.address : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
            <div>
              <label className="block text-lg font-bold text-cyan-950">
                Organisation Associated:
              </label>
              <input
                type="text"
                name="organizationAssociated"
                id="organizationAssociated"
                autoComplete="organizationAssociated"
                value={
                  dietitanUserAccount
                    ? dietitanUserAccount.organizationAssociated
                    : ""
                }
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>

            <div>
              <label className="block text-lg font-bold text-cyan-950">
                License Number:
              </label>
              <input
                type="text"
                name="licenseNumber"
                id="licenseNumber"
                autoComplete="licenseNumber"
                value={
                  dietitanUserAccount ? dietitanUserAccount.licenseNumber : ""
                }
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
          </div>
          <div className="flex space-x-5 justify-center">
            <div className="flex-1">
              <button
                onClick={() => handleSuspendAccount(user.username)}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md  bg-red-500 hover:bg-red-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
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
