"use client";

import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideBarLayout from "../../../sidebarLayout.jsx";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";

// router path: /registeredUser/dietaryPreference/updatePreference

const mockHealthGoalsCat = [
  {
    category: "Weight Gain",
  },
  {
    category: "Maintain Heatlth",
  },
  {
    category: "Weight Loss",
  },
];

const mockAllergiesCat = [
  {
    category: "Milk",
  },
  {
    category: "Egg",
  },
  {
    category: "Soy",
  },
  {
    category: "Shellfish",
  },
  {
    category: "Fish",
  },
  {
    category: "Peanut",
  },
  {
    category: "Tree Nuts",
  },
  {
    category: "Gluten",
  },
];

const ViewDietaryPreference = () => {
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [allergyRestriction, setAllergyRestriction] = useState("");
  const [healthGoal, setHealthGoal] = useState("");

  // handle the update and cancel btn
  const router = useRouter();
  const handleUpdate = () => {
    router.push("/registeredUser/myAccount/dietaryPreference");
  };

  return (
    <div className="flex">
      <SideBarLayout>
        <div className="w-3/4 p-4 max-w-sm">
          <h2 className="text-lg font-semibold mb-4">My Dietary Preference</h2>

          {/* DIET */}
          <div className="mb-4">
            <label htmlFor="diet" className="block mb-2">
              Diet:
            </label>
            <select
              id="dietaryPreference"
              name="dietaryPreference"
              value={dietaryPreference}
              onChange={(e) => setDietaryPreference(e.target.value)}
              className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5"
            >
              <option value="" disabled defaultValue>
                Select One...
              </option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="pescatarian">Pescatarian</option>
            </select>
          </div>

          {/* ALLERGY */}
          <div className="mb-4">
            <label htmlFor="allergy" className="block mb-2">
              Allergy and Restriction:
            </label>
            <select
              id="allergyRestriction"
              name="allergyRestriction"
              value={allergyRestriction}
              onChange={(e) => setAllergyRestriction(e.target.value)}
              className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5"
            >
              <option value="">Select Allergies</option>
              {mockAllergiesCat.map((cat, index) => (
                <option key={index} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>

          {/* HEALTH GOAL */}
          <div className="mb-4">
            <label htmlFor="healthGoal" className="block mb-2">
              Health Goal:
            </label>
            <select
              id="healthGoals"
              name="healthGoals"
              value={healthGoal}
              onChange={(e) => setHealthGoal(e.target.value)}
              className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5"
            >
              <option value="">Select Health Goals</option>
              {mockHealthGoalsCat.map((cat, index) => (
                <option key={index} value={cat.category}>
                  {cat.category}
                </option>
              ))}
            </select>
          </div>
          {/* BUTTON */}
          <div className="flex justify-center mt-3">
            <button
              onClick={handleUpdate}
              className="bg-slate-200 text-black hover:bg-slate-600 hover:text-white font-bold py-2 px-4 rounded mx-4"
            >
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-4 mx-3"
            >
              Update
            </button>
          </div>
        </div>
      </SideBarLayout>
    </div>
  );
};

export default ViewDietaryPreference;
