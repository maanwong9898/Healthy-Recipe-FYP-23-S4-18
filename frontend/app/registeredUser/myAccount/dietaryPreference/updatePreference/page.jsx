"use client";

import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";

// router path: /registeredUser/dietaryPreference/updatePreference
// cancel btn to redirect to dietary preference page

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
    // Set dietary preferences if available
    if (userAccount.dietaryPreferences && userAccount.dietaryPreferences.id) {
      setDietaryPreference(userAccount.dietaryPreferences.id);
    }

    // Set allergies if available
    if (userAccount.allergies && userAccount.allergies.length > 0) {
      setAllergyRestriction(userAccount.allergies.map((allergy) => allergy.id));
    }
    setAllergiesLoaded(true); // Set the flag here

    // Set health goal if available
    if (userAccount.healthGoal && userAccount.healthGoal.id) {
      setHealthGoals(userAccount.healthGoal.id);
    }
  }, [userAccount]);

  useEffect(() => {
    const fetchHealthGoals = async () => {
      console.log("Fetching health goals...");
      try {
        const response = await axiosInterceptorInstance.get(
          "/category/getAllHealthGoals"
        );
        console.log("Health Goals Categories Fetched", response.data);
        setHealthGoalsCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch all dietary preferences categories from backend
    const fetchDietaryPreferences = async () => {
      console.log("Fetching dietary preferences...");
      try {
        const response = await axiosInterceptorInstance.get(
          "/category/getAllDietaryPreferences"
        );
        console.log("Dietary Preferences Categories Fetched", response.data);
        setDietaryPreferencesCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch all allergies categories from backend
    const fetchAllergies = async () => {
      console.log("Fetching allergies...");
      try {
        const response = await axiosInterceptorInstance.get(
          "/category/getAllAllergies"
        );
        console.log("Allergies Categories Fetched", response.data);
        setAllergyCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHealthGoals();
    fetchDietaryPreferences();
    fetchAllergies();
  }, []);

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

  // To check the state of dietary preference immediately after the state is updated(because of async nature of setState)
  useEffect(() => {
    console.log(
      "Dietary preference being selected from user:",
      dietaryPreference
    );

    console.log("Allergies being selected from user:", allergyRestriction);

    console.log("Health goal being selected from user:", healthGoals);
  }, [dietaryPreference, allergyRestriction, healthGoals]);

  // Function to handle update
  const handlePreferencesUpdate = async (event) => {
    event.preventDefault();

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

      console.log("Updated data:", updatedData);

      const response = await axiosInterceptorInstance.post(
        "/register/dashboardSet", // Adjust URL if needed
        updatedData,
        config
      );

      console.log("preferences updated:", response.data);
      setSuccess("Preferences updated successfully!");
    } catch (error) {
      console.error("Error updating preferences", error);
      setError("Failed to update preferences.");
    }
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
                <div className="mt-3">
                  <label
                    htmlFor="dietaryPreference"
                    className="flex items-center"
                  >
                    Dietary Preference
                  </label>
                  <select
                    id="dietaryPreference"
                    name="dietaryPreference"
                    value={dietaryPreference}
                    onChange={handleDietaryPreferenceCategoryChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full lg:w-72 p-2.5"
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
                <div className="mt-3">
                  <label
                    htmlFor="allergyRestriction"
                    className="flex items-center"
                  >
                    Allergies and Restrictions
                  </label>

                  <div className="grid lg:grid-cols-4 grid-cols-3 gap-10 w-full lg:w-72">
                    {allergyCategory.map((cat, index) => (
                      <label key={index} className="mr-24 mt-3 flex flex-row">
                        <input
                          type="checkbox"
                          name="allergies"
                          value={cat.id}
                          checked={allergyRestriction.includes(cat.id)}
                          onChange={(e) =>
                            handleAllergyCategoryChange(e, cat.id)
                          }
                          className="w-4 h-4 bg-gray-100 border-gray-300 rounded mr-2"
                        />
                        {cat.subcategoryName}
                      </label>
                    ))}
                  </div>
                </div>

                {/* HEALTH GOAL */}
                <div className="mt-3">
                  <label htmlFor="healthGoals" className="flex items-center">
                    Health Goal
                  </label>
                  <select
                    id="healthGoals"
                    name="healthGoals"
                    value={healthGoals}
                    onChange={handleHealthCategoryChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full lg:w-72 p-2.5"
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
                  <div className="text-red-500 text-sm font-bold mt-2">
                    {error}
                  </div>
                )}

                {/* SUCCESS MESSAGE */}
                {success && (
                  <div className="text-green-500 text-sm font-bold mt-2">
                    {success}
                  </div>
                )}

                {/* BUTTON */}
                <div className="flex flex-row justify-start gap-4 mt-3">
                  <button
                    //onClick={handleCancelUpdate}
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
    </div>
  );
};

export default UpdateDietaryPreference;
