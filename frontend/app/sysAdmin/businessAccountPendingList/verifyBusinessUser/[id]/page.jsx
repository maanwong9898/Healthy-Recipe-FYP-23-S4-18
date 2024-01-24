"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";

// router path: /sysAdmin/businessAccountPendingList/verifyBusinessUser/[id]
const ViewBusinessUser = ({ params }) => {
  const router = useRouter();
  const [userAccount, setUserAccount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [actionCompleted, setActionCompleted] = useState(false);

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
                value={userAccount ? userAccount.companyName || "N/A" : "N/A"}
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
              value={userAccount ? userAccount.uen || "N/A" : "N/A"}
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
              value={userAccount ? userAccount.postalCode || "N/A" : "N/A"}
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
              value={userAccount ? userAccount.companyAddress || "N/A" : "N/A"}
              readOnly
              className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
            />
          </div>
          {/*Errors*/}
          {error && (
            <div className="text-red-500 text-sm font-bold text-center">
              {error}
            </div>
          )}
          {/*Success*/}
          {success && (
            <div className="text-green-500 text-sm font-bold text-center">
              {success}
            </div>
          )}

          <div className="flex space-x-5 justify-center">
            <div className="flex-1">
              <button
                onClick={() => handleRejectAccount(userAccount.id)}
                disabled={actionCompleted}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-red-500 hover:bg-red-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Reject
              </button>
            </div>
            <div className="flex-1">
              <button
                onClick={() => handleApproveAccount(userAccount.id)}
                disabled={actionCompleted}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
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

export default ViewBusinessUser;
