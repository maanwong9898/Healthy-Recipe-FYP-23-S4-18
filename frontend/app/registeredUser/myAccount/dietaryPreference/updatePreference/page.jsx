"use client";

import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import RegisteredUserNavBar from "../../../../components/navigation/registeredUserNavBar";

// router path: /registeredUser/dietaryPreference/updatePreference

const UpdateDietaryPreference = () => {
  const [isTabSelected, setIsTabSelected] = useState("dietaryPreference");
  const router = useRouter();

  // Dashboard state
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

  // Categories state
  const [dietaryPreferencesCategory, setDietaryPreferencesCategory] = useState(
    []
  );
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [allergyCategory, setAllergyCategory] = useState([]); // Store category of allergies
  const [allergyRestriction, setAllergyRestriction] = useState([]); // Store selected allergies
  const [healthGoalsCategory, setHealthGoalsCategory] = useState([]);
  const [healthGoals, setHealthGoals] = useState("");
  const [allergiesLoaded, setAllergiesLoaded] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

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

          // Set dietary preferences if available
          setFullName(userData.fullName);
          setUsername(userData.username);
          setEmail(userData.email);
          setDOB(userData.dob);
          setContactNumber(userData.contactNumber);
          setCompanyName(userData.companyName);
          setCompanyAddress(userData.companyAddress);
          setUen(userData.uen);
          if (userData.dietaryPreferences && userData.dietaryPreferences.id) {
            setDietaryPreference(userData.dietaryPreferences.id);
          }

          // Set allergies if available
          if (userData.allergies && userData.allergies.length > 0) {
            setAllergyRestriction(
              userData.allergies.map((allergy) => allergy.id)
            );
          }
          setAllergiesLoaded(true); // Set the flag here

          // Set health goal if available
          if (userData.healthGoal && userData.healthGoal.id) {
            setHealthGoals(userData.healthGoal.id);
          }
        } catch (error) {
          console.error("Error fetching user data", error);
        } finally {
          setIsLoading(false);
        }
      };

      const fetchHealthGoals = async () => {
        try {
          const response = await axiosInterceptorInstance.get(
            "/category/getAllHealthGoals"
          );
          setHealthGoalsCategory(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      // Fetch all dietary preferences categories from backend
      const fetchDietaryPreferences = async () => {
        try {
          const response = await axiosInterceptorInstance.get(
            "/category/getAllDietaryPreferences"
          );
          setDietaryPreferencesCategory(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      // Fetch all allergies categories from backend
      const fetchAllergies = async () => {
        try {
          const response = await axiosInterceptorInstance.get(
            "/category/getAllAllergies"
          );
          setAllergyCategory(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchUserData();
      fetchHealthGoals();
      fetchDietaryPreferences();
      fetchAllergies();
    }
  }, []);

  if (isChecking) {
    return <div>Checking...</div>;
  }

  // Function to handle health goals category change
  const handleHealthCategoryChange = (e) => {
    setHealthGoals(e.target.value);
  };

  // Function to handle allergy category change
  const handleAllergyCategoryChange = (e, allergyId) => {
    const checked = e.target.checked;

    if (checked) {
      // If the checkbox is checked, add the allergyId to the array
      setAllergyRestriction((prevAllergies) => [...prevAllergies, allergyId]);
    } else {
      // If the checkbox is unchecked, remove the allergyId from the array
      setAllergyRestriction((prevAllergies) =>
        prevAllergies.filter((id) => id !== allergyId)
      );
    }
  };

  // Function to handle dietary preference category change
  const handleDietaryPreferenceCategoryChange = (e) => {
    setDietaryPreference(e.target.value);
  };

  // Function to handle update
  const handlePreferencesUpdate = async (event) => {
    event.preventDefault();

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
        companyAddress,
        uen,
        allergies: allergiesLoaded
          ? allergyRestriction.map((id) => ({ id }))
          : userAccount.allergies,
        dietaryPreferences: dietaryPreference
          ? { id: dietaryPreference }
          : { id: null },
        healthGoal: healthGoals ? { id: healthGoals } : { id: null },
      };

      const response = await axiosInterceptorInstance.post(
        "/register/dashboardSet", // Adjust URL if needed
        updatedData,
        config
      );

      setSuccess("Preferences updated successfully!");
    } catch (error) {
      console.error("Error updating preferences", error);
      setError("Failed to update preferences.");
    }
  };

  // Redirect back to dietary preference page
  const handleCancelUpdate = (event) => {
    event.preventDefault();
    router.push("/registeredUser/myAccount/dietaryPreference");
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
                <ul className="flex flex-col text-sm font-medium text-left lg:text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 lg:flex-row lg:gap-4 ">
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
                    Update My Dietary Preference
                  </h1>
                  <form>
                    {/* DIETARY PREFERENCE */}
                    <div className="flex flex-col mb-3.5">
                      <label
                        htmlFor="dietaryPreference"
                        className="font-medium text-base mb-1"
                      >
                        Dietary Preference
                      </label>
                      <select
                        id="dietaryPreference"
                        name="dietaryPreference"
                        value={dietaryPreference}
                        onChange={handleDietaryPreferenceCategoryChange}
                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full lg:w-72"
                      >
                        <option value="">Select Dietary Preference</option>
                        {dietaryPreferencesCategory.map((cat, index) => (
                          <option key={index} value={cat.id}>
                            {cat.subcategoryName}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* ALLERGIES AND RESTRICTIONS */}
                    <div className="flex flex-col mb-3.5">
                      <p className="font-medium text-base mb-1">
                        Allergies and Restrictions
                      </p>

                      <div className="grid lg:grid-cols-4 grid-cols-3 gap-10 w-full lg:w-72">
                        {allergyCategory.map((cat, index) => (
                          <div className="flex items-center" key={index}>
                            <input
                              type="checkbox"
                              name="allergies"
                              value={cat.id}
                              checked={allergyRestriction.includes(cat.id)}
                              onChange={(e) =>
                                handleAllergyCategoryChange(e, cat.id)
                              }
                              className="w-4 h-4 bg-gray-50 border-gray-300 rounded mr-2"
                            />
                            {cat.subcategoryName}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* HEALTH GOAL */}
                    <div className="flex flex-col mb-3.5">
                      <label
                        htmlFor="healthGoals"
                        className="font-medium text-base mb-1"
                      >
                        Health Goal
                      </label>
                      <select
                        id="healthGoals"
                        name="healthGoals"
                        value={healthGoals}
                        onChange={handleHealthCategoryChange}
                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full lg:w-72"
                      >
                        <option value="">Select Health Goal</option>
                        {healthGoalsCategory.map((cat, index) => (
                          <option key={index} value={cat.id}>
                            {cat.subcategoryName}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* ERROR MESSAGE */}
                    {error && (
                      <div className="text-red-500 text-base font-medium mt-3">
                        {error}
                      </div>
                    )}

                    {/* SUCCESS MESSAGE */}
                    {success && (
                      <div className="text-green-500 text-base font-medium mt-3">
                        {success}
                      </div>
                    )}

                    {/* BUTTON */}
                    <div className="flex flex-row justify-start gap-4 mt-5">
                      <button
                        onClick={handleCancelUpdate}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-900 w-24 rounded-lg font-semibold py-2"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handlePreferencesUpdate}
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
        </>
      )}
    </div>
  );
};

export default UpdateDietaryPreference;
