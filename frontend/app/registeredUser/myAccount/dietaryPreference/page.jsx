"use client";

import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import RegisteredUserNavBar from "../../../components/navigation/registeredUserNavBar";

// router path = /registeredUser/myAccount/dietaryPreference

const ViewDietaryPreference = () => {
  const router = useRouter();
  const [userAccount, setUserAccount] = useState({});
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [allergies, setAllergies] = useState([]);
  const [healthGoal, setHealthGoal] = useState("");
  const [isTabSelected, setIsTabSelected] = useState("dietaryPreference");
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const userId = SecureStorage.getItem("userId");
    const token = SecureStorage.getItem("token");
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !token ||
      SecureStorage.getItem("role") !== "REGISTERED_USER" ||
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
          setAllergies(userData.allergies || []);
          setDietaryPreference(
            userData.dietaryPreferences?.subcategoryName || "Not specified"
          );
          setHealthGoal(
            userData.healthGoal?.subcategoryName || "Not specified"
          );
        } catch (error) {
          console.error("Error fetching user data", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchUserData();
    }
  }, []);

  const handleUpdate = () => {
    router.push("/registeredUser/myAccount/dietaryPreference/updatePreference");
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
      {isLoading && isChecking ? (
        <div>Loading...</div>
      ) : (
        <>
          <RegisteredUserNavBar />
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

                {/* Start of dietary preference card */}
                <div className="p-8">
                  <h1 className="text-lg font-semibold mb-4">
                    My Dietary Preference
                  </h1>
                  {/* Diet Preference */}
                  <div className="flex flex-col mb-3.5">
                    <label
                      htmlFor="diet"
                      className="font-medium text-base mb-1"
                    >
                      Diet:
                    </label>
                    <div className="flex items-center rounded-full w-60">
                      <label
                        id="diet"
                        className="border border-gray-400 rounded-full text-center p-2 w-full"
                      >
                        {dietaryPreference}
                      </label>
                    </div>
                  </div>
                  {/* Allergies */}
                  <div className="flex flex-col mb-3.5">
                    <label className="font-medium text-base mb-1">
                      Allergies and Restrictions:
                    </label>
                    <div className="flex flex-row flex-wrap gap-2 items-center">
                      {allergies.length > 0 ? (
                        allergies.map((allergy, index) => (
                          <span
                            key={index}
                            className="flex items-center border border-gray-400 rounded-full px-4 py-2"
                          >
                            {allergy.subcategoryName}
                          </span>
                        ))
                      ) : (
                        <span className="border border-gray-400 rounded-full text-center p-2 w-60">
                          Not specified
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Health Goal */}
                  <div className="flex flex-col mb-3.5">
                    <label className="font-medium text-base mb-1">
                      Health Goal:
                    </label>
                    <div className="flex items-center rounded-full w-60">
                      <label
                        id="healthGoal"
                        className="border border-gray-400 rounded-full text-center p-2 w-full"
                      >
                        {healthGoal}
                      </label>
                    </div>
                  </div>

                  {/* UPDATE BTN */}
                  <div className="flex flex-row justify-start">
                    <button
                      type="submit"
                      onClick={handleUpdate}
                      className="bg-blue-600 hover:bg-blue-700 text-white w-24 rounded-lg font-bold py-2"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ViewDietaryPreference;
