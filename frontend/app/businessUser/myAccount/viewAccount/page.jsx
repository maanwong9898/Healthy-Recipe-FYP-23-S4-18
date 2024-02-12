"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import BusinessUserNavBar from "../../../components/navigation/businessUserNavBar";

// router path for this page: /businessUser/myAccount/viewAccount
// things to do:

const UpdateAccount = () => {
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
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
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
      SecureStorage.getItem("role") !== "BUSINESS_USER" ||
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
    if (
      !fullName.trim() ||
      !username.trim() ||
      !contactNumber.trim() ||
      !companyName.trim() ||
      !postalCode.trim() ||
      !companyAddress.trim()
    ) {
      setError("All fields are required.");
    } else if (contactNumber.length !== 8) {
      setError("Contact number must be 8 digits.");
    } else if (postalCode.length !== 6) {
      setError("Please enter a valid postal code.");
    } else {
      try {
        const userId = SecureStorage.getItem("userId");
        const token = SecureStorage.getItem("token");
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

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
          uen,
          allergies,
          dietaryPreferences,
          healthGoal,
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
    router.push("/businessUser/myAccount/viewAccount");
  };

  // Redirect to change password page
  const handleViewChangePwd = () => {
    router.push("/businessUser/myAccount/changePwd");
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

  return (
    <div className="flex flex-col min-h-screen">
      <BusinessUserNavBar />
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
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                <div className="p-8">
                  <h1 className="text-lg font-semibold mb-4">
                    Account Information
                  </h1>
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
                        <span className="text-red-500">*</span>
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
                        <span className="text-red-500">*</span>
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
                        <span className="text-red-500">*</span>
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

                    {/* COMPANY UEN  */}
                    <div className="flex flex-col mb-3.5">
                      <label
                        htmlFor="uen"
                        className="font-medium text-base mb-1"
                      >
                        UEN:
                      </label>
                      <input
                        type="text"
                        id="uen"
                        name="uen"
                        disabled
                        className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                        value={uen}
                        onChange={(e) => setUen(e.target.value)}
                      />
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
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateAccount;
