"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import SideBarLayout from "../sidebarLayout";

const checkBMI = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState("");
  const [msg, setMsg] = useState("");

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

  return (
    <div className="flex">
      <SideBarLayout>
        <div className="w-3/4 p-4 max-w-sm">
          <h1 className="text-lg font-semibold mb-4">BMI Calculator</h1>
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
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
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
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
            />
          </div>
            {/* BUTTONS */}
          <div className="flex flex-row justify-center">
            <button
              onClick={resetVal}
              className="bg-slate-200 text-black hover:bg-slate-600 hover:text-white font-bold py-2 px-4 rounded mx-4"
            >
              Reset
            </button>
            <button
              onClick={calculateBMI}
              className="bg-blue-500 text-white hover:bg-blue-700 font-bold py-2 px-4 rounded mx-4"
            >
              Calculate
            </button>
          </div>
          {bmi && msg && (
            <div className="mt-5">
              <p>Your BMI: {bmi} kg/m²</p>
              <p>Result: {msg}</p>
            </div>
          )}
        </div>
      </SideBarLayout>
    </div>
  );
};

export default checkBMI;
