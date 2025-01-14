"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import Image from "next/image";
import SecureStorage from "react-secure-storage";
import DownloadIcon from "@mui/icons-material/Download";
import NutritionistNavBar from "../../../components/navigation/nutritionistNavBar";

//router path for this page: /nutritionist/myAccount/viewAccount

const MyAccount = () => {
  const router = useRouter();
  const [userAccount, setUserAccount] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [uen, setUen] = useState("");
  const [imageBlob, setImageBlob] = useState(""); // Original image
  const [newImageBlob, setNewImageBlob] = useState(null); // New uploaded image
  const [allergies, setAllergies] = useState(null);
  const [dietaryPreferences, setDietaryPreferences] = useState(null);
  const [healthGoal, setHealthGoal] = useState(null);
  const [isTabSelected, setIsTabSelected] = useState("myAccount");
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const userId = SecureStorage.getItem("userId");
    const token = SecureStorage.getItem("token");
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !token ||
      SecureStorage.getItem("role") !== "NUTRITIONIST" ||
      now >= parseInt(tokenExpiration)
    ) {
      SecureStorage.clear();
      router.push("/");
      return;
    } else {
      setIsChecking(false);
      const fetchUserData = async () => {
        try {
          const response = await axiosInterceptorInstance.get(
            `/register/dashboard/${userId}`,
            { headers: { Authorization: `Bearer ${token}` } }
          );

          // Assuming response.data contains user data
          const userData = response.data || {};
          setFullName(userData.fullName || "");
          setUsername(userData.username || "");
          setEmail(userData.email || "");
          setDOB(userData.dob ? getFormattedDate(new Date(userData.dob)) : "");
          setContactNumber(userData.contactNumber || "");
          setCompanyName(userData.companyName || "");
          setPostalCode(userData.postalCode || "");
          setCompanyAddress(userData.companyAddress || "");
          setUen(userData.uen || "");
          setAllergies(userData.allergies || null);
          setDietaryPreferences(userData.dietaryPreferences || null);
          setHealthGoal(userData.healthGoal || null);

          if (userData.imgBlob) {
          
            // Directly use base64 string as the image source
            setImageBlob(userData.imgBlob);
          } else {
            
          }
        } catch (error) {
          console.error("Error fetching user data", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchUserData();
    }
  }, []);

  if (isChecking) {
    return <div>Checking...</div>;
  }

  const handleAccountUpdate = async (event) => {
    event.preventDefault();

    // Check if fields are not empty
    if (!fullName.trim() || !username.trim() || !contactNumber.trim()) {
      setError("All fields are required.");
      // Success msg
    } else if (
      companyName.trim() &&
      (!companyAddress.trim() || !postalCode.trim())
    ) {
      setError("Please provide both company address and postal code.");
      return;
    } else {
      try {
        const userId = SecureStorage.getItem("userId");
        const token = SecureStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        // Use newImageBlob if available, otherwise fallback to original imageBlob
        const updatedImageBlob = newImageBlob || imageBlob;

        const updatedData = {
          id: userId,
          fullName,
          username,
          email,
          dob,
          contactNumber,
          companyName,
          postalCode,
          companyAddress,
          // nutriCert,
          imgBlob: updatedImageBlob, // Use updated image blob
        };

        const response = await axiosInterceptorInstance.post(
          "/register/dashboardSet", // Adjust URL if needed
          updatedData,
          config
        );

        setSuccess("Account updated successfully!");
        setTimeout(() => {
          setSuccess("");
        }, 5000);
      } catch (error) {
        console.error("Error updating account", error);
        setError("Failed to update account.");
      }
    }
  };

  // Clear Error msg on change
  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
    setSuccess("");
  };

  // Redirect to my account page
  const handleViewMyAccount = () => {
    router.push("/nutritionist/myAccount/viewAccount");
  };

  // Redirect to change password page
  const handleViewChangePwd = () => {
    router.push("/nutritionist/myAccount/changePwd");
  };

  // Handle tab selection
  const handleSelectTab = (tab) => {
    setIsTabSelected(tab);
    if (tab === "myAccount") {
      handleViewMyAccount();
    } else if (tab === "changePwd") {
      handleViewChangePwd();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        let dataURL = event.target.result;

        // Extract Base64 Data
        let base64Data = dataURL.split(",")[1];

        // Use base64Data as needed
        setNewImageBlob(base64Data); // Assuming you have a state setter like this
      };
      reader.readAsDataURL(file);
    }
  };

  const renderImage = () => {
    const imageToShow = newImageBlob || imageBlob;
    return imageToShow ? (
      <img
        src={`data:image/jpeg;base64,${imageToShow}`}
        alt="nutritionist certificate"
        className="mt-2 w-32 h-32 object-cover rounded"
        onError={(e) => {
          console.error("Error loading image:", e);
          e.target.style.display = "none";
        }}
      />
    ) : (
      <p>No image available</p>
    );
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

  // Download nutritionist certificate
  const handleDownloadCertificate = (event) => {
    event.preventDefault();
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
    <div className="flex flex-col min-h-screen">
      {isLoading && isChecking ? (
        <div>Loading...</div>
      ) : (
        <>
          <NutritionistNavBar />
          <div className="flex justify-center">
            <div className="p-5 max-w-3xl w-full mx-5 items-center ">
              <div className="bg-white border border-gray-100 rounded-lg shadow">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50">
                  <li className="me-2">
                    <button
                      type="button"
                      className={`inline-block p-4 rounded-ss-lg hover:bg-gray-100 ${
                        isTabSelected === "myAccount"
                          ? "text-blue-600"
                          : "text-gray-500"
                      }`}
                      onClick={() => handleSelectTab("myAccount")}
                    >
                      My Account
                    </button>
                  </li>
                  <li className="me-2">
                    <button
                      type="button"
                      className={`inline-block p-4 rounded-ss-lg hover:bg-gray-100 ${
                        isTabSelected === "changePwd"
                          ? "text-blue-600"
                          : "text-gray-500"
                      }`}
                      onClick={() => handleSelectTab("changePwd")}
                    >
                      Change Password
                    </button>
                  </li>
                </ul>
                <div className="p-8">
                  <h1 className="text-lg font-semibold mb-4">
                    Account Information
                  </h1>
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : (
                    <>
                      <form>
                        <div className="grid gap-3 mt-2 sm:grid-cols-2">
                          {/* Full Name */}
                          <div className="flex flex-col mb-3.5">
                            <label
                              htmlFor="fullName"
                              className="font-medium text-base mb-1"
                            >
                              Full Name:
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="fullName"
                              name="fullName"
                              placeholder="Your Name"
                              className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                              value={fullName}
                              onChange={clearErrorOnChange(setFullName)}
                            />
                          </div>

                          {/* Username */}
                          <div className="flex flex-col mb-3.5">
                            <label
                              htmlFor="userName"
                              className="font-medium text-base mb-1"
                            >
                              Username:
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="userName"
                              name="userName"
                              placeholder="Your Username"
                              className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                              value={username}
                              onChange={clearErrorOnChange(setUsername)}
                            />
                          </div>
                        </div>

                        {/* CONTACT NUMBER */}
                        <div className="flex flex-col mb-3.5">
                          <label
                            htmlFor="contactNumber"
                            className="font-medium text-base mb-1"
                          >
                            Contact Number:
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                            value={contactNumber}
                            onChange={clearErrorOnChange(setContactNumber)}
                          />
                        </div>

                        {/* EMAIL */}
                        <div className="flex flex-col mb-3.5">
                          <label
                            htmlFor="workEmail"
                            className="font-medium text-base mb-1"
                          >
                            Work Email Address:
                            <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="workEmail"
                            name="workEmail"
                            disabled
                            className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>

                        {/* COMPANY NAME  */}
                        <div className="flex flex-col mb-3.5">
                          <label
                            htmlFor="companyName"
                            className="font-medium text-base mb-1"
                          >
                            Company Name:
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                            value={companyName}
                            onChange={clearErrorOnChange(setCompanyName)}
                          />
                        </div>

                        {/* COMPANY ADDRESS  */}
                        <div className="flex flex-col mb-3.5">
                          <label
                            htmlFor="companyAddress"
                            className="font-medium text-base mb-1"
                          >
                            Company Address:
                          </label>
                          <input
                            type="text"
                            id="companyAddress"
                            name="companyAddress"
                            className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                            value={companyAddress}
                            onChange={clearErrorOnChange(setCompanyAddress)}
                          />
                        </div>

                        {/* POSTAL CODE*/}
                        <div className="flex flex-col mb-3.5">
                          <label
                            htmlFor="postalCode"
                            className="font-medium text-base mb-1"
                          >
                            Postal Code:
                          </label>
                          <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                            value={postalCode}
                            onChange={clearErrorOnChange(setPostalCode)}
                          />
                        </div>
                        {/* NUTRITION CERT PREVIEW */}
                        <div className="flex flex-col mb-3.5 relative">
                          <p className="font-medium text-base mb-1">
                            Nutritionist Certificate:
                            <span className="text-red-500">*</span>
                          </p>
                          <div className="relative group mx-auto">
                            <img
                              src={getImageUrlFromBlob(imageBlob)}
                              alt="nutritionist certificate"
                              width={400}
                              height={300}
                              className="rounded-lg h-auto w-full lg:max-w-lg opacity-100 transition duration-500 ease-in-out transform"
                            />
                          </div>
                        </div>

                        {error && (
                          <p className="text-red-500 text-base font-medium">
                            {error}
                          </p>
                        )}
                        {success && (
                          <p className="text-green-500 text-base font-medium">
                            {success}
                          </p>
                        )}

                        {/* UPDATE BTN */}
                        <div className="flex flex-row justify-start mt-3">
                          <button
                            type="submit"
                            onClick={handleAccountUpdate}
                            className=" bg-blue-600 hover:bg-blue-700 text-white w-24 rounded-lg font-bold py-2"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyAccount;
