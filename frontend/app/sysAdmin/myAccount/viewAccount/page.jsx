"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import SysAdminNavBar from "../../../components/navigation/sysAdminNavBar";

// things to do:
// edit the user account details
// router path for this page: /sysAdmin/myAccount/viewAccount

const UpdateAccount = () => {
  const router = useRouter();
  const [userAccount, setUserAccount] = useState("");
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [uen, setUen] = useState("");
  const [allergies, setAllergies] = useState([]);
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [healthGoal, setHealthGoal] = useState("");
  const [isTabSelected, setIsTabSelected] = useState("myAccount");

  const getFormattedDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const todayDate = getFormattedDate(new Date());

  const viewUserDashboard = async () => {
    try {
      const userId = SecureStorage.getItem("userId");
      const token = SecureStorage.getItem("token");

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      // Make the GET request to the userAndAdmin endpoint
      const response = await axiosInterceptorInstance.get(
        "/register/dashboard/" + userId,
        config
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
    setUen(userAccount ? userAccount.uen : "");
    setAllergies(userAccount ? userAccount.allergies : "");
    setDietaryPreferences(userAccount ? userAccount.dietaryPreferences : "");
    setHealthGoal(userAccount ? userAccount.healthGoal : "");
  }, [userAccount]);

  const handleAccountUpdate = async (event) => {
    event.preventDefault();

    // Check if fields are not empty
    if (fullName === "" || dob === "" || username === "") {
      setError("All fields are required.");

      // Success msg
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
    router.push("/sysAdmin/myAccount/viewAccount");
  };

  // Redirect to change password page
  const handleViewChangePwd = () => {
    router.push("/sysAdmin/myAccount/changePwd");
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
      <SysAdminNavBar />
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

                {/* EMAIL */}
                <div className="flex flex-col mb-3.5">
                  <label htmlFor="email" className="mb-1">
                    Email:
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    disabled
                    className="border px-4 py-2 rounded-lg w-full bg-gray-300 border-gray-300 text-gray-900 sm:text-sm"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                {/* DOB */}
                <div className="flex flex-col mb-3.5">
                  <label htmlFor="dob" className="mb-1">
                    Date of Birth:
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    max={todayDate}
                    value={dob}
                    onChange={clearErrorOnChange(setDOB)}
                    className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                  ></input>
                </div>

                {/* Error and success msg */}
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
