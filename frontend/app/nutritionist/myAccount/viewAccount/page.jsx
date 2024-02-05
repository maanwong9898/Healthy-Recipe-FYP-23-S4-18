"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import Image from "next/image";
import SecureStorage from "react-secure-storage";

//router path for this page: /nutritionist/myAccount/viewAccount

// Need to add the image preview for actual certificate upload during registration

const UpdateAccount = () => {
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
  const [nutriCert, setNutriCert] = useState("");
  const [imageBlob, setImageBlob] = useState(""); // Original image
  const [newImageBlob, setNewImageBlob] = useState(null); // New uploaded image
  const [isTabSelected, setIsTabSelected] = useState("myAccount");

  const viewUserDashboard = async () => {
    try {
      const userId = SecureStorage.getItem("userId");
      const token = SecureStorage.getItem("token");

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      // Make the GET request to the nutritionist endpoint
      const response = await axiosInterceptorInstance.get(
        "/register/dashboard/" + userId,
        config
      );

      setUserAccount(response.data);
      console.log("Dashboard data feteched: ", response.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    viewUserDashboard();
  }, []);

  useEffect(() => {
    // Set the initial value when userAccount changes
    setFullName(userAccount ? userAccount.fullName : "");
    setUsername(userAccount ? userAccount.username : "");
    setEmail(userAccount ? userAccount.email : "");
    setDOB(userAccount ? userAccount.dob : "");
    setContactNumber(userAccount ? userAccount.contactNumber : "");
    setCompanyName(userAccount ? userAccount.companyName : "");
    setPostalCode(userAccount?.postalCode || "");
    setCompanyAddress(userAccount ? userAccount.companyAddress : "");
    // setNutriCert(userAccount ? userAccount.nutriCert : "");
    if (userAccount.imgBlob) {
      console.log("Image blob available");
      console.log("Image blob:", userAccount.imgBlob);
      // Directly use base64 string as the image source
      setImageBlob(userAccount.imgBlob);
    } else {
      console.log("No image blob available");
      // Handle the absence of an image blob appropriately
    }
  }, [userAccount]);

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

        console.log("Updated data:", updatedData);

        const response = await axiosInterceptorInstance.post(
          "/register/dashboardSet", // Adjust URL if needed
          updatedData,
          config
        );

        console.log("Account updated:", response.data);
        setSuccess("Account updated successfully!");
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
    console.log("File change event:", e);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        let dataURL = event.target.result;
        console.log("Complete Data URL:", dataURL);

        // Extract Base64 Data
        let base64Data = dataURL.split(",")[1];
        console.log("Base64 Data:", base64Data);

        // Use base64Data as needed
        setNewImageBlob(base64Data); // Assuming you have a state setter like this
      };
      reader.readAsDataURL(file);
      console.log("File:", file);
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

  return (
    <div className="flex flex-col min-h-screen">
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
              <form>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <label htmlFor="fullName" className="flex items-center">
                    Full Name:
                    <span className="text-red-500">*</span>
                  </label>
                  <label htmlFor="username" className="flex items-center">
                    Username:
                    <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3.5">
                  {/* NAME */}
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your Name"
                    className=" bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                    value={fullName}
                    onChange={clearErrorOnChange(setFullName)}
                  />
                  {/* USERNAME */}
                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="Your Username"
                    className=" bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                    value={username}
                    onChange={clearErrorOnChange(setUsername)}
                  />
                </div>

                {/* CONTACT NUMBER */}
                <div className="flex flex-col mb-3.5">
                  <label className="mb-1">
                    Contact Number:
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                    value={contactNumber}
                    onChange={clearErrorOnChange(setContactNumber)}
                  />
                </div>

                {/* EMAIL */}
                <div className="flex flex-col mb-3.5">
                  <label className="mb-1">Work Email Address:</label>
                  <input
                    type="text"
                    id="workEmail"
                    name="workEmail"
                    disabled
                    className="border px-4 py-2 rounded-lg w-full bg-gray-300 border-gray-300 text-gray-900 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* COMPANY NAME  */}
                <div className="flex flex-col mb-3.5">
                  <label className="mb-1">Company Name:</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                    value={companyName}
                    onChange={clearErrorOnChange(setCompanyName)}
                  />
                </div>

                {/* COMPANY ADDRESS  */}
                <div className="flex flex-col mb-3.5">
                  <label className="mb-1">Company Address:</label>
                  <input
                    type="text"
                    id="companyAddress"
                    name="companyAddress"
                    className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                    value={companyAddress}
                    onChange={clearErrorOnChange(setCompanyAddress)}
                  />
                </div>

                {/* POSTAL CODE*/}
                <div className="flex flex-col mb-3.5">
                  <label className="mb-1">Postal Code:</label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                    value={postalCode}
                    onChange={clearErrorOnChange(setPostalCode)}
                  />
                </div>

                {/* NUTRITION CERT PREVIEW */}
                {/* <div className="flex flex-col mb-3.5">
                  <label className="mb-1">Nutritionist Certificate:</label>
                  <div>
                    <Image
                      src=""
                      width={400}
                      height={300}
                      className="rounded-lg"
                    />
                  </div>
                </div> */}

                {/* IMAGE file */}
                <div className="flex flex-col">
                  <label
                    htmlFor="image"
                    className="block text-xl mb-1 font-bold text-gray-900"
                  >
                    Image<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="border-solid mt-3 rounded-lg bg-white border border-gray-400 w-full"
                  />
                </div>

                <div className="mt-2 flex flex-row space-x-4">
                  {renderImage()}
                </div>

                {error && (
                  <p className="text-red-500 text-base font-medium">{error}</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
