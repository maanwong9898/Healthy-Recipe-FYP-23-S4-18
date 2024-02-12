"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import RegisteredUserNavBar from "../../../components/navigation/registeredUserNavBar";

const TrackWeight = () => {
  const [weightData, setWeightData] = useState([]);
  const [currentWeight, setCurrentWeight] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const [isTabSelected, setIsTabSelected] = useState("trackWeight");
  const [isChecking, setIsChecking] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const viewUserWeight = async () => {
    try {
      const userId = SecureStorage.getItem("userId");

      const response = await axiosInterceptorInstance.get(
        `/registeredUsers/getWeights/${userId}`
      );
      console.log(response.data);

      // Sort the weight data in descending order of date
      const sortedData = response.data.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
      });

      setWeightData(sortedData);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // Reset values
  const resetVal = () => {
    setCurrentWeight("");
  };

  // Handle weight validations and storage
  const handleWeightStorage = async () => {
    if (currentWeight === "") {
      setError("Please enter your weight.");
    } else if (isNaN(currentWeight)) {
      setError("Please enter a valid input.");
    } else {
      try {
        const userID = SecureStorage.getItem("userId");
        const payload = {
          id: {
            userId: userID,
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

  // Clear error msg on change
  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
    setSuccess("");
  };

  // Function to handle deletion of a weight record
  const handleDeleteWeight = async (date) => {
    try {
      const userId = SecureStorage.getItem("userId");
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
      setError("");

      // Refresh weight data
      viewUserWeight();
    } catch (error) {
      console.error("Error deleting weight record", error);
      setError("Error deleting weight record.");
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
      viewUserWeight();
    }
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

                {/* Start of weight management card */}
                <div className="p-8">
                  <h1 className="text-lg font-semibold mb-4">
                    Track Weight Management
                  </h1>
                  {/* CURRENT WEIGHT */}
                  <div className="flex flex-col mb-3.5">
                    <label
                      htmlFor="currentWeight"
                      className="font-medium text-base mb-1"
                    >
                      Current Weight:
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        id="currentWeight"
                        name="currentWeight"
                        placeholder="Enter weight in kg"
                        value={currentWeight}
                        onChange={clearErrorOnChange(setCurrentWeight)}
                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full lg:w-72"
                      />
                      <span className="ml-2">kg</span>
                    </div>
                  </div>

                  {/* ERROR MESSAGE */}
                  {error && (
                    <p className="text-red-500 font-medium text-base">
                      {error}
                    </p>
                  )}
                  {success && (
                    <p className="text-green-500 font-medium text-base">
                      {success}
                    </p>
                  )}

                  {/* <p className="text-red-500 text-base font-medium">{error}</p>
              <p className="text-green-500 text-base font-medium">{success}</p> */}

                  {/* BUTTONS */}
                  <div className="flex flex-row justify-start gap-4 mt-3">
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

                  <div>
                    <h2 className="text-lg font-semibold mb-2 mt-5">
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
        </>
      )}
    </div>
  );
};

export default TrackWeight;
