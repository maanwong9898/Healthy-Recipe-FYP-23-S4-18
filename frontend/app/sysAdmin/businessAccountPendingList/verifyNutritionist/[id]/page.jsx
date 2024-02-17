"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import DownloadIcon from "@mui/icons-material/Download";
import SysAdminNavBar from "../../../../components/navigation/sysAdminNavBar";
import SecureStorage from "react-secure-storage";

// router path: /sysAdmin/businessAccountPendingList/verifyNutritionist/[id]

const ViewNutritionist = ({ params }) => {
  const router = useRouter();
  const [userAccount, setUserAccount] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // New state to track if an action has been completed
  const [actionCompleted, setActionCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !SecureStorage.getItem("token") ||
      SecureStorage.getItem("role") !== "ADMIN" ||
      now >= parseInt(tokenExpiration)
    ) {
      // clear the secure storage to prevent any unauthorized access
      SecureStorage.clear();
      router.push("/");
    } else {
      setIsChecking(false);
      const fetchData = async () => {
        // Fetch data
        try {
          const userId = params.id;

          // Make the GET request to the userAndAdmin endpoint
          const response = await axiosInterceptorInstance.get(
            "/register/dashboard/" + userId
          );

          setUserAccount(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching user data", error);
        }
      };

      fetchData();
    }
  }, []);

  if (isChecking) {
    return <div>Checking...</div>;
  }

  const handleApproveAccount = async (id) => {
    try {
      const response = await axiosInterceptorInstance.post(
        "/allUsers/verifyUser/" + id
      );
      setSuccess("Account approved successfully!");
      setActionCompleted(true);
      setError("");
    } catch (error) {
      console.log(error);
      setError("Error approving account!");
      setSuccess("");
    }
  };

  const handleRejectAccount = async (userid) => {
    try {
      const userRole = "NUTRITIONIST";
      const response = await axiosInterceptorInstance.delete(
        "/allUsers/rejectUser",
        {
          data: {
            id: userid,
            role: userRole,
          },
        }
      );

      setSuccess("Account rejected successfully!");
      setError("");
      setActionCompleted(true);
    } catch (error) {
      console.error("Error during user deletion:", error);
      // Optionally, handle error in UI here
      setError("Error rejecting account!");
    }
  };

  const getImageUrlFromBlob = (imgBlob) => {
    // Check if imgBlob is truthy
    if (imgBlob) {
      // Return the image URL created from the blob
      return `data:image/jpeg;base64,${imgBlob}`;
    }
    // Return an empty string or a placeholder image URL if imgBlob is not available
    return "";
  };

  const handleDownloadCertificate = () => {
    const imageUrl = getImageUrlFromBlob(userAccount?.imgBlob);
    if (imageUrl) {
      const link = document.createElement("a");
      link.href = imageUrl;
      link.download = "Nutritionist_Certificate"; // Set the download file name here
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 lg:px-8">
      {isLoading && isChecking ? (
        <div>Checking...</div>
      ) : (
        <>
          <SysAdminNavBar />
          <div
            className="mt-16 mb-16 mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8 lg:p-12"
            style={{ maxWidth: "600px", width: "100%" }}
          >
            <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
              <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-center text-gray-900 mb-8">
                Nutritionist Details
              </h1>
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <>
                  <div className="space-y-6 md:space-y-5 lg:space-y-3">
                    {/* Username */}
                    <div className="flex flex-col">
                      <label className="font-medium text-base mb-1">
                        Username:
                      </label>
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
                      <label className="font-medium text-base mb-1">
                        Name:
                      </label>
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
                      <label className="font-medium text-base mb-1">
                        Postal Code:
                      </label>
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

                    {/* Certificate */}
                    <div className="flex flex-col mb-3.5 relative">
                      <p className="font-medium text-base mb-1">
                        Nutritionist Certificate:
                      </p>
                      <div className="relative group mx-auto">
                        {userAccount?.imgBlob ? (
                          <div>
                            <img
                              src={getImageUrlFromBlob(userAccount?.imgBlob)}
                              alt="nutritionist certificate"
                              className="rounded-lg h-auto w-full lg:max-w-lg shadow-md cursor-pointer opacity-100 transition duration-500 ease-in-out transform group-hover:opacity-30"
                            />
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 transition duration-500 ease-in-out group-hover:opacity-100">
                              <button
                                onClick={handleDownloadCertificate}
                                className="bg-gray-600 text-white py-3 px-3 rounded-full opacity-80"
                              >
                                <DownloadIcon />
                              </button>
                            </div>
                          </div>
                        ) : (
                          <p>No certificate available</p>
                        )}
                      </div>
                    </div>

                    {/*Errors*/}
                    {error && (
                      <div className="text-red-500 text-base font-medium">
                        {error}
                      </div>
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
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewNutritionist;
