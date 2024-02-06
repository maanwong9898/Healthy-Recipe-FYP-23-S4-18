"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import SysAdminNavBar from "../../../../components/navigation/sysAdminNavBar";
import SecureStorage from "react-secure-storage";

// router path: /sysAdmin/businessAccountPendingList/verifyBusinessUser/[id]
const ViewBusinessUser = ({ params }) => {
  const router = useRouter();
  const [userAccount, setUserAccount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [actionCompleted, setActionCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      !SecureStorage.getItem("token") ||
      SecureStorage.getItem("role") !== "ADMIN"
    ) {
      // clear the secure storage to prevent any unauthorized access
      SecureStorage.clear();
      console.log("Redirecting to home page");
      router.push("/");
    } else {
      const fetchData = async () => {
        // Fetch data
        try {
          const userId = params.id;

          // Make the GET request to the userAndAdmin endpoint
          const response = await axiosInterceptorInstance.get(
            "/register/dashboard/" + userId
          );

          setUserAccount(response.data);
          console.log(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching user data", error);
        }
      };

      fetchData();
    }
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleApproveAccount = async (id) => {
    try {
      const response = await axiosInterceptorInstance.post(
        "/allUsers/verifyUser/" + id
      );
      console.log(response.data);
      setSuccess("Account approved successfully!");
      setError("");
      setActionCompleted(true);
    } catch (error) {
      console.log(error);
      setError("Error approving account!");
      setSuccess("");
    }
  };

  const handleRejectAccount = async (userid) => {
    try {
      console.log("User ID:", userid);
      const userRole = "BUSINESS_USER";
      console.log("User Role:", userRole);
      const response = await axiosInterceptorInstance.delete(
        "/allUsers/rejectUser",
        {
          data: {
            // Note: Axios uses the 'data' property for the request body in DELETE requests
            id: userid,
            role: userRole,
          },
        }
      );

      console.log("User deleted successfully");
      setSuccess("Account rejected successfully!");
      setError("");
      setActionCompleted(true);
    } catch (error) {
      console.error("Error during user deletion:", error);
      // Optionally, handle error in UI here
      setError("Error rejecting account!");
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
            Business User Details
          </h1>
          <div className="space-y-6 md:space-y-5 lg:space-y-3">
            {/* Username */}
            <div className="flex flex-col">
              <label className="font-medium text-base mb-1">Username:</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                value={userAccount ? userAccount.username : ""}
                readOnly
                className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
              />
            </div>
            {/* FullName */}
            <div className="flex flex-col">
              <label className="font-medium text-base mb-1">Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                value={userAccount ? userAccount.fullName : ""}
                readOnly
                className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
              />
            </div>
            {/* Contact Number */}
            <div className="flex flex-col">
              <label className="font-medium text-base mb-1">
                Contact Number:
              </label>
              <input
                type="text"
                name="contactNumber"
                id="contactNumber"
                autoComplete="contactNumber"
                value={userAccount ? userAccount.contactNumber : ""}
                readOnly
                className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
              />
            </div>
            {/* Email Address */}
            <div className="flex flex-col">
              <label className="font-medium text-base mb-1">
                Email Address:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={userAccount ? userAccount.email : ""}
                readOnly
                className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
              />
            </div>
            {/* Company Name */}
            <div className="flex flex-col">
              <label className="font-medium text-base mb-1">
                Company Name:
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                autoComplete="companyName"
                value={userAccount ? userAccount.companyName : ""}
                readOnly
                className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
              />
            </div>
            {/* Company Address */}
            <div className="flex flex-col">
              <label className="font-medium text-base mb-1">
                Company Address:
              </label>
              <input
                type="text"
                name="companyAddress"
                id="companyAddress"
                autoComplete="companyAddress"
                value={userAccount ? userAccount.companyAddress : ""}
                readOnly
                className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
              />
            </div>
            {/* Postal Code */}
            <div className="flex flex-col">
              <label className="font-medium text-base mb-1">Postal Code:</label>
              <input
                type="text"
                name="postalCode"
                id="postalCode"
                autoComplete="postalCode"
                value={userAccount ? userAccount.postalCode : ""}
                readOnly
                className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
              />
            </div>
            {/* UEN */}
            <div className="flex flex-col">
              <label className="font-medium text-base mb-1">UEN:</label>
              <input
                type="text"
                name="uen"
                id="uen"
                autoComplete="uen"
                value={userAccount ? userAccount.uen : ""}
                readOnly
                className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
              />
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
            <div className="flex space-x-5 justify-center mt-5">
              <div className="flex-1">
                <button
                  onClick={() => handleRejectAccount(userAccount.id)}
                  disabled={actionCompleted}
                  className="group relative w-full flex justify-center py-2 px-4 border-2 border-red-600 text-md font-medium rounded-lg hover:bg-red-700 hover:text-white text-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Reject
                </button>
              </div>
              <div className="flex-1">
                <button
                  onClick={() => handleApproveAccount(userAccount.id)}
                  disabled={actionCompleted}
                  className="group relative w-full flex justify-center py-2 px-4 border-2 border-transparent text-md font-medium rounded-lg text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Approve
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewBusinessUser;
