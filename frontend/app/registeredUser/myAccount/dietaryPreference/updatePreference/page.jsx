"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideBarLayout from "../../../sidebarLayout.jsx";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";

// router path: /registeredUser/dietaryPreference/updatePreference

const ViewDietaryPreference = () => {
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

  const router = useRouter();

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
    // setAllergies(userAccount ? userAccount.allergies : "");
    // setDietaryPreferences(userAccount ? userAccount.dietaryPreferences : "");
    // setHealthGoal(userAccount ? userAccount.healthGoal : "");
    // Set dietary preferences if available
    if (userAccount.dietaryPreferences && userAccount.dietaryPreferences.id) {
      setDietaryPreference(userAccount.dietaryPreferences.id);
    }

    // Set allergies if available
    // if (userAccount.allergies && userAccount.allergies.length > 0) {
    //   setAllergyRestriction(userAccount.allergies.map((allergy) => allergy.id));
    // }
    if (userAccount.allergies && userAccount.allergies.length > 0) {
      setAllergyRestriction(userAccount.allergies.map((allergy) => allergy.id));
    }
    setAllergiesLoaded(true); // Set the flag here

    // Set health goal if available
    if (userAccount.healthGoal && userAccount.healthGoal.id) {
      setHealthGoals(userAccount.healthGoal.id);
    }
  }, [userAccount]);

  // const handleUpdate = () => {
  //   router.push("/registeredUser/myAccount/dietaryPreference");
  // };

  useEffect(() => {
    // Access localStorage after component mounts and is on the client-side
    // const storedUsername = localStorage.getItem("username");
    const storedUserId = localStorage.getItem("userId"); // Retrieve user ID from localStorage
    console.log("Current id", storedUserId);
    // if (storedUsername) {
    //   setPublisher(storedUsername);
    // }
    // if (storedUserId) {
    //   setUserId(storedUserId);
    // }

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
    console.log("Health goal being selected from user:", healthGoal);
  };

  // Function to handle dietary preference category change
  const handleDietaryPreferenceCategoryChange = (e) => {
    setDietaryPreference(e.target.value);
    console.log(
      "Dietary preference being selected from user:",
      dietaryPreference
    );
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

    console.log("Allergies being selected from user:", allergyRestriction);
  };

  const handlePreferencesUpdate = async (event) => {
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
        companyAddress,
        uen,
        // allergies:
        //   allergyRestriction.length > 0
        //     ? allergyRestriction.map((id) => ({ id }))
        //     : userAccount.allergies,
        allergies: allergiesLoaded
          ? allergyRestriction.map((id) => ({ id }))
          : userAccount.allergies,
        dietaryPreferences: dietaryPreference
          ? { id: dietaryPreference }
          : userAccount.dietaryPreferences,
        healthGoal: healthGoals ? { id: healthGoals } : userAccount.healthGoal,
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
          <h2 className="text-lg font-semibold mb-4">My Dietary Preference</h2>
          <form>
            {/* DIETARY PREFERENCE */}
            <div className="mt-3">
              <label htmlFor="dietaryPreference" className="flex items-center">
                Dietary Preference
              </label>
              <select
                id="dietaryPreference"
                name="dietaryPreference"
                value={dietaryPreference}
                onChange={handleDietaryPreferenceCategoryChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
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
              <label htmlFor="allergyRestriction" className="flex items-center">
                Allergies and Restrictions
              </label>
              <div className="grid grid-cols-4 gap-1">
                {allergyCategory.map((cat, index) => (
                  <label key={index} className="mr-2 items-center">
                    <input
                      type="checkbox"
                      name="allergies"
                      value={cat.id}
                      checked={allergyRestriction.includes(cat.id)}
                      onChange={(e) => handleAllergyCategoryChange(e, cat.id)}
                      className="mr-2"
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
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
              >
                <option value="">Select Health Goal</option>
                {healthGoalsCategory.map((cat, index) => (
                  <option key={index} value={cat.id}>
                    {cat.subcategoryName}
                  </option>
                ))}
              </select>
            </div>

            {/* BUTTON */}
            <div className="flex justify-center mt-3">
              <button
                // onClick={handleUpdate}
                className="bg-slate-200 text-black hover:bg-slate-600 hover:text-white font-bold py-2 px-4 rounded mx-4"
              >
                Cancel
              </button>
              <button
                onClick={handlePreferencesUpdate}
                className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4 mx-3"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </SideBarLayout>
    </div>
  );
};

export default ViewDietaryPreference;
