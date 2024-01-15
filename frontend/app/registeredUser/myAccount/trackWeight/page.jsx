"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideBarLayout from "../../sidebarLayout.jsx";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";

const TrackWeight = () => {
  const [weightData, setWeightData] = useState([]);
  //const [startingWeight, setStartingWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showHistory, setShowHistory] = useState(false);

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

  return (
    <div className="flex">
      <SideBarLayout>
        <div className="w-3/4 p-4 max-w-sm">
          <h2 className="text-lg font-semibold mb-4">
            Track Weight Measurements
          </h2>

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
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
              />
              <span className="ml-2">kg</span>
            </div>
          </div>
          <p className="text-red-500 text-sm">{error}</p>
          <p className="text-green-500 text-sm">{success}</p>

          {/* BUTTON */}
          <div className="flex justify-center mt-3">
            <button
              onClick={resetVal}
              className="bg-slate-200 text-black hover:bg-slate-600 hover:text-white py-2 px-4 rounded mx-3"
            >
              Reset
            </button>
            <button
              type="submit"
              onClick={handleWeightStorage}
              className="bg-blue-500 hover:bg-blue-700 text-white rounded py-2 px-4 mx-3"
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
            <h2 className="text-lg font-semibold mb-4 mt-5">Weight History</h2>
            {/* TABLE */}
            <div className="overflow-x-auto rounded-lg">
              <table className="min-w-full  border-gray-300 border">
                <thead className="bg-cyan-600 font-base text-white border-gray-300 border">
                  <tr>
                    <th className="py-3 px-6 text-left">Weight (kg)</th>
                    <th className="py-3 px-6 text-left">Date</th>
                    <th className="py-3 px-6 text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  {weightData.map((user, index) => (
                    <tr
                      key={index}
                      className="bg-white border-b border-blue dark:border-blue-600"
                    >
                      <td className="px-3 py-2 text-base text-left">
                        {user?.weight || "Not available"}
                      </td>
                      <td className="px-3 py-2 text-base text-left">
                        {user?.date || "Not available"}
                      </td>
                      <td className="px-3 py-2 text-base text-left">
                        <button
                          onClick={() => handleDeleteWeight(user.date)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
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
      </SideBarLayout>
    </div>
  );
};

export default TrackWeight;
