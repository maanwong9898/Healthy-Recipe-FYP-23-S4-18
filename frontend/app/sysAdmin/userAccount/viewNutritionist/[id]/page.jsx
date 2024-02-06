"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import DownloadIcon from "@mui/icons-material/Download";
import SysAdminNavBar from "../../../../components/navigation/sysAdminNavBar";

// router path: /sysAdmin/userAccount/viewNutritionist/[id]
const ViewNutritionist = ({ params }) => {
  const router = useRouter();
  const [userAccount, setUserAccount] = useState("");
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

  const handleBackButton = () => {
    router.push("/sysAdmin/userAccount");
  };

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

      if (response.status === 200) {
        console.log("User status updated:", response);

        // Update the userAccount state with the new status
        setUserAccount((prevState) => ({
          ...prevState,
          enabled: newStatus,
        }));

        // Set success message
        setSuccess(
          `User account has been ${
            newStatus ? "unsuspended" : "suspended"
          } successfully.`
        );
      } else {
        console.error("Failed to update the user status:", response);
      }
    } catch (error) {
      console.error("Error updating user status", error);
      // Set error message for unsuccessful response
      setError("Failed to update the user status.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 lg:px-8">
      <SysAdminNavBar />
      <div
        className="mt-16 mb-16 mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8 lg:p-12"
        style={{ maxWidth: "600px", width: "100%" }} // Increase maxWidth and set width to 100%
      >
        <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-center text-gray-900 mb-8">
            Nutritionist Details
          </h1>
          <div className="space-y-6 md:space-y-5 lg:space-y-3">
            {/* Username */}
            <div className="flex flex-col">
              <label className="block text-lg mb-1 font-semibold text-gray-900">
                Username:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                value={userAccount ? userAccount.username : ""}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
              />
            </div>
            {/* FullName */}
            <div className="flex flex-col">
              <label className="block text-lg mb-1 font-semibold text-gray-900">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                value={userAccount ? userAccount.fullName : ""}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
              />
            </div>
            {/* Contact Number */}
            <div className="flex flex-col">
              <label className="block text-lg mb-1 font-semibold text-gray-900">
                Contact Number:
              </label>
              <input
                type="text"
                name="contactNumber"
                id="contactNumber"
                autoComplete="contactNumber"
                value={userAccount ? userAccount.contactNumber : ""}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
              />
            </div>
            {/* Email Address */}
            <div className="flex flex-col">
              <label className="block text-lg mb-1 font-semibold text-gray-900">
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={userAccount ? userAccount.email : ""}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
              />
            </div>
            {/* Company Name */}
            <div className="flex flex-col">
              <label className="block text-lg mb-1 font-semibold text-gray-900">
                Company Name:
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                autoComplete="companyName"
                value={userAccount ? userAccount.companyName : ""}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
              />
            </div>
            {/* Company Address */}
            <div className="flex flex-col">
              <label className="block text-lg mb-1 font-semibold text-gray-900">
                Company Address:
              </label>
              <input
                type="text"
                name="companyAddress"
                id="companyAddress"
                autoComplete="companyAddress"
                value={userAccount ? userAccount.companyAddress : ""}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
              />
            </div>
            {/* Postal Code */}
            <div className="flex flex-col">
              <label className="block text-lg mb-1 font-semibold text-gray-900">
                Postal Code:
              </label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                autoComplete="postalCode"
                value={userAccount ? userAccount.postalCode : ""}
                readOnly
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
              />
            </div>
            {/* Nutrition Certificate */}
            <div className="flex flex-col">
              <label className="block text-lg mb-1 font-semibold text-gray-900">
                Nutritionist Certificate:
              </label>
              {/* Change based on what is labeled im backend */}
              {/* {userAccount && userAccount.filePath && ( */}
              <div className="relative">
                <img
                  src=""
                  alt="Nutritionist Certificate"
                  className="h-auto w-full rounded-lg"
                />
              </div>
            </div>

            {/*Errors*/}
            {error && (
              <div className="text-red-500 text-base font-medium">{error}</div>
            )}
            {/*Success*/}
            {success && (
              <div className="text-green-500 text-base font-medium">
                {success}
              </div>
            )}

            {/* Buttons */}
            <div className="flex space-x-5 justify-center">
              <div className="flex-1">
                <button
                  onClick={() => handleBackButton()}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-slate-700 hover:bg-slate-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700"
                >
                  Back
                </button>
              </div>
              <div className="flex-1">
                <button
                  onClick={() =>
                    handleToggleUserStatus(userAccount.id, userAccount.enabled)
                  }
                  className={`text-white font-bold ${
                    userAccount.enabled
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-stone-400 hover:bg-stone-500"
                  } rounded-lg text-base px-5 py-2 text-center`}
                >
                  {userAccount.enabled ? "Suspend" : "Unsuspend"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNutritionist;
