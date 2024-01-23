"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideBarLayout from "../../sidebarLayout.jsx";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";

// router path = /registeredUser/myAccount/viewAccount

// update one or 2 of the category got bugs

const UpdateAccount = () => {
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
  const [companyAddress, setCompanyAddress] = useState("");
  const [uen, setUen] = useState("");
  const [allergies, setAllergies] = useState([]);
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [healthGoal, setHealthGoal] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const viewUserDashboard = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      // Make the GET request to the userAndAdmin endpoint
      const response = await axiosInterceptorInstance.get(
        "/register/dashboard/" + userId,
        config
      );

      console.log("User data fetched from backend:", response.data);
      console.log(response.data);
      setUserAccount(response.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    viewUserDashboard();
  }, []);

  const getFormattedDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const todayDate = getFormattedDate(new Date());

  useEffect(() => {
    // Set the initial value when userAccount changes
    setFullName(userAccount ? userAccount.fullName : "");
    setUsername(userAccount ? userAccount.username : "");
    setEmail(userAccount ? userAccount.email : "");
    setDOB(userAccount ? userAccount.dob : "");
    setContactNumber(userAccount ? userAccount.contactNumber : "");
    setCompanyName(userAccount ? userAccount.companyName : "");
    setCompanyAddress(userAccount ? userAccount.companyAddress : "");
    setUen(userAccount ? userAccount.uen : "");
    setAllergies(userAccount ? userAccount.allergies : "");
    setDietaryPreferences(userAccount ? userAccount.dietaryPreferences : "");
    setHealthGoal(userAccount ? userAccount.healthGoal : "");
    setPostalCode(userAccount ? userAccount.postalCode : "");
  }, [userAccount]);

  const handleAccountUpdate = async (event) => {
    event.preventDefault();

    // ... existing validation code

    // Check if fields are not empty
    if (fullName === "" || email === "" || dob === "") {
      setError("All fields are required.");

      // Check if email is valid
    } else if (!emailValidation.test(email)) {
      setError("Invalid email address.");

      // Success msg
    } else {
      setSuccess("Update Successful!");
      // Remove success msg after 5 seconds
      setTimeout(() => {
        setSuccess("");
      }, 5000);
      // Clear error messages after update
      setError("");
    }

    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
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
  };

  return (
    <div className="flex">
      <SideBarLayout>
        <div className="w-3/4 p-4 max-w-sm">
          <h1 className="text-lg font-semibold mb-4">Account Information</h1>
          <form>
            {/* NAME */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* USERNAME */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                className="border px-4 py-2 rounded-lg w-full border-gray-300 text-gray-900 sm:text-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Email:</label>
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
              <label className="mb-1">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                max={todayDate}
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
              ></input>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {success && <p className="text-green-500 text-sm">{success}</p>}

            {/* SAVE BTN */}
            <div className="flex flex-row justify-end">
              <button
                type="submit"
                onClick={handleAccountUpdate}
                className="bg-blue-500 hover:bg-blue-700 text-white rounded-md font-bold py-2 px-4 ml-auto"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </SideBarLayout>
    </div>
  );
};

export default UpdateAccount;
