"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import RegisteredUserNavBar from "../../../components/navigation/registeredUserNavBar";

// router path = /registeredUser/myAccount/viewAccount

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
  const [companyAddress, setCompanyAddress] = useState("");
  const [uen, setUen] = useState("");
  const [allergies, setAllergies] = useState([]);
  const [dietaryPreferences, setDietaryPreferences] = useState("");
  const [healthGoal, setHealthGoal] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [isTabSelected, setIsTabSelected] = useState("myAccount");
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [allergyCategory, setAllergyCategory] = useState([]); // Store category of allergies
  const [allergyRestriction, setAllergyRestriction] = useState([]); // Store selected allergies
  const [healthGoalsCategory, setHealthGoalsCategory] = useState([]);
  const [healthGoals, setHealthGoals] = useState("");
  const [allergiesLoaded, setAllergiesLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

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

      console.log("User data fetched from backend:", response.data);
      console.log(response.data);
      setUserAccount(response.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

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
      viewUserDashboard();
      setIsLoading(false);
    }
  }, []);

  // if (isChecking) {
  //   return <div>Checking...</div>;
  // }

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
    setPostalCode(userAccount ? userAccount.postalCode : "");
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

  const handleAccountUpdate = async (event) => {
    event.preventDefault();

    // Check if fields are not empty
    if (!fullName.trim() || dob === "" || username === "") {
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

                    {/* EMAIL */}
                    <div className="flex flex-col mb-3.5">
                      <label
                        htmlFor="email"
                        className="font-medium text-base mb-1"
                      >
                        Email:
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        disabled
                        className="bg-gray-200 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    {/* DOB */}
                    <div className="flex flex-col mb-3.5">
                      <label
                        htmlFor="dob"
                        className="font-medium text-base mb-1"
                      >
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
                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                      ></input>
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
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyAccount;
