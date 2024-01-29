"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";

const TrackWeight = () => {
  const [weightData, setWeightData] = useState([]);
  //const [startingWeight, setStartingWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showHistory, setShowHistory] = useState(false);
  const router = useRouter();
  const [isTabSelected, setIsTabSelected] = useState("trackWeight");

  // Get weight data
  // get all the weight history for this user from the backend
  // http://localhost:8080/registeredUsers/getWeights/7 sample url
  const viewUserWeight = async () => {
    try {
      const userId = localStorage.getItem("userId");
      // const userId = 7;

      const response = await axiosInterceptorInstance.get(
        `/registeredUsers/getWeights/${userId}`
      );
      console.log(response.data);

      // Sort the weight data in descending order of date
      const sortedData = response.data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      setWeightData(sortedData);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // Reset values
  const resetVal = () => {
    setTargetWeight("");
    setCurrentWeight("");
  };

  // Handle weight validations
  // Handle weight validations and storage
  const handleWeightStorage = async () => {
    if (currentWeight === "") {
      setError("Please enter your weight.");
    } else if (isNaN(currentWeight)) {
      setError("Please enter a valid input.");
    } else {
      try {
        // Assuming '7' is the user ID, replace with dynamic user ID if needed
        // const userId = localStorage.getItem("userId");
        // const userId = 7;
        const userId = localStorage.getItem("userId");
        const payload = {
          id: {
            userId: userId,
          },
          weight: parseInt(currentWeight),
        };

        const response = await axiosInterceptorInstance.post(
          "/registeredUsers/setWeight",
          payload
        );

        // Handle response here, update UI based on response
        console.log(response);
        setSuccess("Weight has been saved.");
        setTimeout(() => {
          setSuccess("");
        }, 5000);
        setError("");

        // Refresh weight data
        viewUserWeight();
      } catch (error) {
        console.error("Error saving weight", error);
        setError("Error saving weight.");
      }
    }
  };

  // Function to handle deletion of a weight record
  const handleDeleteWeight = async (date) => {
    try {
      // const userId = 7; // Replace with dynamic user ID if needed
      const userId = localStorage.getItem("userId");
      const payload = {
        id: {
          userId: userId,
          date: date,
        },
      };

      console.log("payload to delete weight", payload);
      // const response = await axiosInterceptorInstance.delete(
      //   "/registeredUsers/deleteWeight",
      //   payload
      // );

      // because axios doesn't support DELETE with body, we need to use the following workaround
      const response = await axiosInterceptorInstance.delete(
        "/registeredUsers/deleteWeight",
        {
          data: payload, // Here you send the payload as the body of the DELETE request
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
      setSuccess("Weight record deleted successfully.");
      setTimeout(() => {
        setSuccess("");
      }, 5000);

      // Refresh weight data
      viewUserWeight();
    } catch (error) {
      console.error("Error deleting weight record", error);
      setError("Error deleting weight record.");
    }
  };

  // // Toggle weight history
  // const handleWeightHistory = () => {
  //   setShowHistory(!showHistory);
  // };

  useEffect(() => {
    viewUserWeight();
  }, []);

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

            {/* Start of weight management card */}
            <div className="p-8">
              <h1 className="text-lg font-semibold mb-4">
                Track Weight Management
              </h1>
              {/* CURRENT WEIGHT */}
              <div className="flex flex-col mb-3.5">
                <label className="mb-1">Current Weight:</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    id="currentWeight"
                    name="currentWeight"
                    placeholder="Enter weight in kg"
                    value={currentWeight}
                    onChange={(e) => setCurrentWeight(e.target.value)}
                    className="border px-4 py-2 rounded-lg w-full lg:w-72 bg-white border-gray-300 text-gray-900 sm:text-sm"
                  />
                  <span className="ml-2">kg</span>
                </div>
              </div>
              <p className="text-red-500 text-sm">{error}</p>
              <p className="text-green-500 text-sm">{success}</p>

              {/* BUTTONS */}
              <div className="flex flex-row justify-start gap-4">
                <button
                  onClick={resetVal}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-900 w-24 rounded-lg font-semibold py-2"
                >
                  Reset
                </button>
                <button
                  onClick={handleWeightStorage}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-24 rounded-lg font-semibold py-2"
                >
                  Save
                </button>
              </div>
              {/* <div>
            <p
              // onClick={handleWeightHistory}
              className="mt-4 text-blue-600 hover:underline text-sm dark:text-blue-500 cursor-pointer"
            >
              Show History
            </p>
          </div> */}
              <div>
                <h2 className="text-lg font-semibold mb-4 mt-5">
                  Weight History
                </h2>
                {/* TABLE */}
                <div className="overflow-x-auto rounded-lg">
                  <table className="min-w-full  border-gray-300 border">
                    <thead className="bg-zinc-700 font-normal text-white border-gray-800 border-2">
                      <tr className="text-center text-lg">
                        <th className="px-3 py-2">Weight (kg)</th>
                        <th className="px-3 py-2">Date</th>
                        <th className="px-3 py-2"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {weightData.map((user, index) => (
                        <tr key={index} className="bg-white border-b">
                          <td className="px-3 py-2 text-base text-center">
                            {user?.weight || "Not available"}
                          </td>
                          <td className="px-3 py-2 text-base text-center">
                            {user?.date || "Not available"}
                          </td>
                          <td className="px-3 py-2 text-base text-center">
                            <button
                              onClick={() => handleDeleteWeight(user.date)}
                              className="text-white font-bold bg-red-600 hover:bg-red-700 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackWeight;
