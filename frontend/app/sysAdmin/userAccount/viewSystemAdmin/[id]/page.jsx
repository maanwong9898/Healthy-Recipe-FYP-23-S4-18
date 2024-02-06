"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import SysAdminNavBar from "../../../../components/navigation/sysAdminNavBar";
import SecureStorage from "react-secure-storage";

// router path: /sysAdmin/userAccount/viewSystemAdmin/[id]

const ViewSystemAdmin = ({ params }) => {
  const router = useRouter();
  const [userAccount, setUserAccount] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    if (
      !SecureStorage.getItem("token") ||
      SecureStorage.getItem("role") !== "ADMIN"
    ) {
      // clear the secure storage to prevent any unauthorized access
      SecureStorage.clear();
      console.log("Redirecting to home page");
      router.push("/");
    } else {
      // Fetch data
      try {
        viewUserDashboard();

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    }
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  const handleBackButton = () => {
    router.push("/sysAdmin/userAccount");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 lg:px-8">
      <SysAdminNavBar />
      <div
        className="mt-10 mb-16 mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8 lg:p-12"
        style={{ maxWidth: "600px", width: "100%" }} // Increase maxWidth and set width to 100%
      >
        <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
          <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-center text-gray-900 mb-8">
            System Admin Details
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

            {/* Date Of Birth */}
            <div className="flex flex-col">
              <label className="block text-lg mb-1 font-semibold text-gray-900">
                Date Of Birth:
              </label>
              <input
                type="text"
                name="dob"
                id="dob"
                autoComplete="dob"
                value={userAccount ? userAccount.dob : ""}
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
            <div className="flex flex-row space-x-5">
              <button
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
                onClick={handleBackButton}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSystemAdmin;
