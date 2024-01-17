"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";

// router path: /sysAdmin/userAccount/viewBusinessUser/[id]
const ViewBusinessUser = ({ params }) => {
  const router = useRouter();
  const [userAccount, setUserAccount] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [uen, setUen] = useState("");
  const [allergies, setAllergies] = useState([]);
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [healthGoal, setHealthGoal] = useState("");
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const viewUserDashboard = async () => {
    try {
      const userId = params.id;

      // Make the GET request to the userAndAdmin endpoint
      const response = await axiosInterceptorInstance.get(
        "/register/dashboard/" + userId
      );

      setUserAccount(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    viewUserDashboard();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cyan-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8  bg-slate-100 p-6 rounded-lg shadow-lg">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            Business User Details
          </h2>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md space-y-3">
            <div>
              <label className="block text-xl mb-2 font-bold text-cyan-950">
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
              <label className="block text-xl mb-2 font-bold text-cyan-950">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                value={userAccount ? userAccount.fullName : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
            {/* <div>
              <label className="block text-xl mb-2 font-bold text-cyan-950">
                User Profile:
              </label>
              <input
                type="text"
                name="userProfile"
                id="userProfile"
                autoComplete="userProfile"
                value={userAccount ? userAccount.role : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div> */}
            <div>
              <label className="block text-xl mb-2 font-bold text-cyan-950">
                Contact Number:
              </label>
              <input
                type="text"
                name="contactNumber"
                id="contactNumber"
                autoComplete="contactNumber"
                value={userAccount ? userAccount.contactNumber : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>

            <div>
              <label className="block text-xl mb-2 font-bold text-cyan-950">
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
            {/*Company Name*/}
            <div>
              <label className="block text-xl mb-2 font-bold text-cyan-950">
                Company Name:
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                autoComplete="companyName"
                value={userAccount ? userAccount.companyName : ""}
                readOnly
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
              />
            </div>
          </div>
          {/*uen*/}
          <div>
            <label className="block text-xl mb-2 font-bold text-cyan-950">
              UEN:
            </label>
            <input
              type="text"
              name="uen"
              id="uen"
              autoComplete="uen"
              value={userAccount ? userAccount.uen : ""}
              readOnly
              className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
            />
          </div>
          {/*postalCode*/}
          <div>
            <label className="block text-xl mb-2 font-bold text-cyan-950">
              Postal Code:
            </label>
            <input
              type="text"
              name="postalCode"
              id="postalCode"
              autoComplete="postalCode"
              value={userAccount ? userAccount.postalCode : ""}
              readOnly
              className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
            />
          </div>
          {/*companyAddress*/}
          <div>
            <label className="block text-xl mb-2 font-bold text-cyan-950">
              Company Address:
            </label>
            <input
              type="text"
              name="companyAddress"
              id="companyAddress"
              autoComplete="companyAddress"
              value={userAccount ? userAccount.companyAddress : ""}
              readOnly
              className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
            />
          </div>

          {/* <div>
            <button
              onClick={() => handleSuspendAccount(user.username)}
              disabled={!userAccount.isActive} // This will disable the button if user.isActive is false
              className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-red-500 hover:bg-red-800 text-white ${
                !userAccount.isActive ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              Suspend Account
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ViewBusinessUser;
