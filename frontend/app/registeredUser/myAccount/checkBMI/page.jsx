"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";

const checkBMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [msg, setMsg] = useState("");
  const router = useRouter();
  const [isTabSelected, setIsTabSelected] = useState("checkBMI");

  // Reset all values
  const resetVal = () => {
    setHeight("");
    setWeight("");
    setBMI("");
    setMsg("");
  };

  const calculateBMI = () => {
    // Check if height and weight is not null
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiVal = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBMI(bmiVal);

      // Check for BMI range
      if (bmiVal < 18.5) {
        setMsg(
          "Oh No! You are in the underweight range. Aim to have a balanced meal."
        );
      } else if (bmiVal >= 18.5 && bmiVal < 22.9) {
        setMsg(
          "Yay! You are in the normal and healthy range. Keep up and maintain your weight with a balanced meal!"
        );
      } else if (bmiVal >= 23 && bmiVal < 29.9) {
        setMsg(
          "Oh No! You are in the overweight range. Aim to reduce your caloric intake and increase physical activities."
        );
      } else if (bmiVal >= 30) {
        setMsg(
          "Watch Out! You are in the obese range. Aim to reduce your caloric intake and increase physical activities."
        );
      } else {
        setBMI("");
      }
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
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="height"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Height (in cm)
                </label>
                <input
                  type="text"
                  name="height"
                  id="height"
                  placeholder="Enter height in cm"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="border px-4 py-2 rounded-lg w-full lg:w-72 bg-white border-gray-300 text-gray-900 sm:text-sm"
                />
              </div>
              {/* WEIGHT */}
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="weight"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Weight (in kg)
                </label>
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  placeholder="Enter weight in kg"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="border px-4 py-2 rounded-lg w-full lg:w-72 bg-white border-gray-300 text-gray-900 sm:text-sm"
                />
              </div>
              {/* BUTTONS */}
              <div className="flex flex-row justify-start gap-4">
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
                <div className="mt-5 text-gray-900">
                  <p>Your BMI: {bmi} kg/m²</p>
                  <p>Result: {msg}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default checkBMI;
