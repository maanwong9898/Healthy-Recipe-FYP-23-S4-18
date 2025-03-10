"use client";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import { useState, useEffect } from "react";
import RegisteredUserNavBar from "../../../components/navigation/registeredUserNavBar";
import SecureStorage from "react-secure-storage";

const checkBMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [msg, setMsg] = useState("");
  const [msgClass, setMsgClass] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [isTabSelected, setIsTabSelected] = useState("checkBMI");
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
      setIsLoading(false);
    }
  }, []);

  // Reset all values
  const resetVal = () => {
    setHeight("");
    setWeight("");
    setBMI("");
    setMsg("");
    setError("");
  };

  // Set color for BMI range
  const requireAttentionClass = "text-red-500";
  const normalClass = "text-green-500";

  const calculateBMI = () => {
    // Check if height and weight is not null
    if (!height || !weight) {
      setError("Please enter both height and weight.");
    } else if (isNaN(height) || isNaN(weight)) {
      setError("Please enter a only numeric value for height and weight.");
    } else if (height < 0 || weight < 0) {
      setError("Please enter a valid input");
    } else {
      // Calculate BMI
      const heightInMeters = height / 100;
      const bmiVal = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiVal);

      // Check for BMI range
      if (bmiVal < 18.5) {
        setMsg(
          "Oh No! You are in the underweight range. Aim to have a balanced meal."
        );
        setMsgClass(requireAttentionClass);
      } else if (bmiVal >= 18.5 && bmiVal < 22.9) {
        setMsg(
          "Yay! You are in the normal and healthy range. Keep up and maintain your weight with a balanced meal!"
        );
        setMsgClass(normalClass);
      } else if (bmiVal >= 23 && bmiVal < 29.9) {
        setMsg(
          "Oh No! You are in the overweight range. Aim to reduce your caloric intake and increase physical activities."
        );
        setMsgClass(requireAttentionClass);
      } else if (bmiVal >= 30) {
        setMsg(
          "Watch Out! You are in the obese range. Aim to reduce your caloric intake and increase physical activities."
        );
        setMsgClass(requireAttentionClass);
      } else {
        setBMI("");
      }
    }
  };

  // Clear Error msg on change
  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
    setBMI("");
    setMsg("");
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
                  <h1 className="text-lg font-semibold mb-4">Check BMI</h1>

                  {/* HEIGHT */}
                  <div className="flex flex-col mb-3.5">
                    <label
                      htmlFor="height"
                      className="font-medium text-base mb-1"
                    >
                      Height (in cm)
                    </label>
                    <input
                      type="text"
                      name="height"
                      id="height"
                      placeholder="Enter height in cm"
                      value={height}
                      onChange={clearErrorOnChange(setHeight)}
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full lg:w-72"
                    />
                  </div>
                  {/* WEIGHT */}
                  <div className="flex flex-col mb-3.5">
                    <label
                      htmlFor="weight"
                      className="font-medium text-base mb-1"
                    >
                      Weight (in kg)
                    </label>
                    <input
                      type="text"
                      name="weight"
                      id="weight"
                      placeholder="Enter weight in kg"
                      value={weight}
                      onChange={clearErrorOnChange(setWeight)}
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full lg:w-72"
                    />
                  </div>

                  {/* ERROR */}
                  {error && (
                    <p className="text-red-500 font-medium text-base">
                      {error}
                    </p>
                  )}

                  {/* BUTTONS */}
                  <div className="flex flex-row justify-start gap-4 mt-3">
                    <button
                      onClick={resetVal}
                      className="bg-gray-200 hover:bg-gray-300 text-gray-900 w-24 rounded-lg font-semibold py-2"
                    >
                      Reset
                    </button>
                    <button
                      onClick={calculateBMI}
                      className="bg-blue-600 hover:bg-blue-700 text-white w-24 rounded-lg font-semibold py-2"
                    >
                      Calculate
                    </button>
                  </div>
                  {bmi && msg && (
                    <div className={msgClass}>
                      <p className="mt-5">Your BMI: {bmi} kg/m²</p>
                      <p>Result: {msg}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default checkBMI;
