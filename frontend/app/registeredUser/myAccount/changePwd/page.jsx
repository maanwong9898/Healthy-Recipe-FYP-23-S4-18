"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";

//router path for this page: /registeredUser/myAccount/changePwd

const changeUserPwd = () => {
  const router = useRouter();
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [repeatPwd, setRepeatPwd] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isTabSelected, setIsTabSelected] = useState("changePwd");

  const handlePwdChange = async (event) => {
    event.preventDefault();

    // Check if fields are not empty
    if (oldPwd === "" || newPwd === "" || repeatPwd === "") {
      setError("All fields are required.");
      return;
    }

    // Check if repeat password is the same as new password
    if (newPwd !== repeatPwd) {
      setError("New password and repeat password must be the same.");
      return;
    }

    // For checking purposes
    console.log("User Password Details:", {
      oldPwd,
      newPwd,
      repeatPwd,
    });

    try {
      const userId = localStorage.getItem("userId");
      const updatedData = {
        id: userId,
        oldPassword: oldPwd,
        newPassword: newPwd,
      };

      const response = await axiosInterceptorInstance.post(
        "/allUsers/changePassword",
        updatedData
      );

      console.log("Response:", response);
      setSuccess(response.data);
      setTimeout(() => {
        setSuccess("");
      }, 5000);

      setError("");
      setNewPwd("");
      setOldPwd("");
      setRepeatPwd("");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  // Function to clear error and set new value
  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
    setSuccess("");
  };

  // Redirect to my account page
  const handleViewMyAccount = () => {
    router.push("/registeredUser/myAccount/viewAccount");
  };

  // Redirect to change password page
  const handleViewChangePwd = () => {
    router.push("/registeredUser/myAccount/changePwd");
  };

  // Redirect to dietary preference page
  const handleViewDietaryPreference = () => {
    router.push("/registeredUser/myAccount/dietaryPreference");
  };

  // Redirect to track weight management page
  const handleViewTrackWeightManagement = () => {
    router.push("/registeredUser/myAccount/trackWeight");
  };

  // Redirect to BMI calculator page
  const handleViewBMICalculator = () => {
    router.push("/registeredUser/myAccount/checkBMI");
  };

  // Handle tab selection
  const handleSelectTab = (tab) => {
    setIsTabSelected(tab);
    if (tab === "myAccount") {
      handleViewMyAccount();
    } else if (tab === "changePwd") {
      handleViewChangePwd();
    } else if (tab === "dietaryPreference") {
      handleViewDietaryPreference();
    } else if (tab === "trackWeight") {
      handleViewTrackWeightManagement();
    } else if (tab === "checkBMI") {
      handleViewBMICalculator();
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-center">
        <div className="p-5 max-w-4xl w-full mx-5 items-center ">
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
              <li className="me-2">
                <button
                  type="button"
                  className={`inline-block p-4 rounded-ss-lg hover:bg-gray-100 ${
                    isTabSelected === "dietaryPreference"
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleSelectTab("dietaryPreference")}
                >
                  Dietary Preference
                </button>
              </li>
              <li className="me-2">
                <button
                  type="button"
                  className={`inline-block p-4 rounded-ss-lg hover:bg-gray-100 ${
                    isTabSelected === "trackWeight"
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleSelectTab("trackWeight")}
                >
                  Track Weight Management
                </button>
              </li>
              <li className="me-2">
                <button
                  type="button"
                  className={`inline-block p-4 rounded-ss-lg hover:bg-gray-100 ${
                    isTabSelected === "checkBMI"
                      ? "text-blue-600"
                      : "text-gray-500"
                  }`}
                  onClick={() => handleSelectTab("checkBMI")}
                >
                  Check BMI
                </button>
              </li>
            </ul>
            <div className="p-8">
              <h1 className="text-lg font-semibold mb-4">Change Password</h1>

              {/* Form Start */}
              <form onSubmit={handlePwdChange}>
                {/* OLD PWD */}
                <div className="flex flex-col mb-3.5">
                  <label className="flex items-center text-base mb-1">
                    Old Password:
                    <span className=" text-red-500">*</span>
                  </label>

                  <input
                    type="password"
                    id="oldPwd"
                    name="oldPwd"
                    placeholder="Enter old password"
                    value={oldPwd}
                    onChange={clearErrorOnChange(setOldPwd)}
                    className="border px-4 py-2 rounded-lg w-full lg:w-72 bg-white border-gray-300 text-gray-900 sm:text-sm"
                  />
                </div>

                {/* NEW PWD */}
                <div className="flex flex-col mb-3.5">
                  <label className="mb-1">
                    New Password:
                    <span className=" text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="newPwd"
                    name="newPwd"
                    placeholder="Enter new password"
                    value={newPwd}
                    onChange={clearErrorOnChange(setNewPwd)}
                    className="border px-4 py-2 rounded-lg w-full lg:w-72 bg-white border-gray-300 text-gray-900 sm:text-sm"
                  />
                </div>

                {/* REPEAT PWD */}
                <div className="flex flex-col mb-3.5">
                  <label className="mb-1">
                    Repeat Password:
                    <span className=" text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    id="repeatPwd"
                    name="repeatPwd"
                    placeholder="Repeat new password"
                    value={repeatPwd}
                    onChange={clearErrorOnChange(setRepeatPwd)}
                    className="border px-4 py-2 rounded-lg w-full lg:w-72 bg-white border-gray-300 text-gray-900 sm:text-sm"
                  />
                </div>
                {/* ERROR MESSAGE */}
                {error && (
                  <div className="text-red-500 text-base font-medium">
                    {error}
                  </div>
                )}

                {/* SUCCESS MESSAGE */}
                {success && (
                  <div className="text-green-500 text-base font-medium">
                    {success}
                  </div>
                )}

                {/* UPDATE BTN */}
                <div className="flex flex-row justify-start mt-3">
                  <button
                    type="submit"
                    onClick={handlePwdChange}
                    className="bg-blue-600 hover:bg-blue-700 text-white w-24 rounded-lg font-bold py-2 px-4"
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

export default changeUserPwd;
