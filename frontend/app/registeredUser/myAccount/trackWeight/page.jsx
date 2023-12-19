"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideBarLayout from "../../sidebarLayout.jsx";

const mockWeightData = [
  {
    weight: "60",
    // yyyy-mm-dd
    date: "2023-12-01",
  },
  {
    weight: "58",
    // yyyy-mm-dd
    date: "2023-12-10",
  },
  {
    weight: "57",
    // yyyy-mm-dd
    date: "2023-12-14",
  },
];

const TrackWeight = () => {
  const [weightData, setWeightData] = useState(mockWeightData);
  //const [startingWeight, setStartingWeight] = useState("");
  const [targetWeight, setTargetWeight] = useState("");
  const [currentWeight, setCurrentWeight] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showHistory, setShowHistory] = useState(false);

  // Reset values
  const resetVal = () => {
    setTargetWeight("");
    setCurrentWeight("");
  };

  // Handle weight validations
  const handleWeightStorage = () => {
    if (currentWeight === "") {
      setError("Please enter your weight.");
    } else if (isNaN(currentWeight)) {
      setError("Please enter a valid input.");
    } else {
      setSuccess("Weight has been saved.");
      setTimeout(() => {
        setSuccess("");
      }, 5000);
      setError("");

      // For checking purposes
      console.log("Current Weight: " + currentWeight);
    }
  };

  // Toggle weight history
  const handleWeightHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="flex">
      <SideBarLayout>
        <div className="w-3/4 p-4 max-w-sm">
          <h2 className="text-lg font-semibold mb-4">
            Track Weight Measurements
          </h2>

          {/* STARTING WEIGHT
          <div className="flex flex-col mb-3.5 relative">
            <label className="mb-1">Starting Weight:</label>
            <div className="flex items-center">
              <input
                type="text"
                id="startingWeight"
                name="startingWeight"
                value="60"
                className="border px-4 py-2 rounded-lg w-full bg-gray-200 border-gray-300 text-gray-900 sm:text-sm"
                disabled
              />
              <span className="ml-2">kg</span>
            </div>
          </div> */}

          {/* TARGET WEIGHT
          <div className="flex flex-col mb-3.5">
            <label className="mb-1">Target Weight:</label>
            <div className="flex items-center">
              <input
                type="text"
                id="targetWeight"
                name="targetWeight"
                placeholder="Enter weight in kg"
                value={targetWeight}
                onChange={(e) => setTargetWeight(e.target.value)}
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
              />
              <span className="ml-2">kg</span>
            </div>
          </div> */}

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

          <div>
            <p
              onClick={handleWeightHistory}
              className="mt-4 text-blue-600 hover:underline text-sm dark:text-blue-500 cursor-pointer"
            >
              Show History
            </p>
          </div>

          {showHistory && (
            <div>
              <h2 className="text-lg font-semibold mb-4 mt-5">
                Weight History
              </h2>
              {/* TABLE */}
              <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full  border-gray-300 border">
                  <thead className="bg-cyan-600 font-base text-white border-gray-300 border">
                    <tr>
                      <th className="py-3 px-6 text-left">Weight (kg)</th>
                      <th className="py-3 px-6 text-left">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockWeightData.map((user, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b border-blue dark:border-blue-600"
                      >
                        <td className="px-3 py-2 text-base text-left">
                          {user.weight}
                        </td>
                        <td className="px-3 py-2 text-base text-left">
                          {user.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </SideBarLayout>
    </div>
  );
};

export default TrackWeight;
