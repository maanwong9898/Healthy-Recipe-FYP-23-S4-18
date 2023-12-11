"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";

// router path: /sysAdmin/createDietaryPreferences

const mockDietaryPreferences = [
  { id: "d18422a6-0ed3-4d08-803f-28e679fcd9aa", name: "Vegetarian" },
  { id: "a073d593-1f0c-48fd-87d7-d68d04726cbf", name: "Vegan" },
  { id: "a09585d9-8254-44e6-a266-bfeff9549a51", name: "Pescatarian" },
  { id: "ee32f7bb-3ca8-493e-aae4-e37944d5cf54", name: "Omnivore/Normal Diet" },
];

const CreateDietaryPreferences = () => {
  const [dietaryPreferences, setDietaryPreferences] = useState(
    mockDietaryPreferences
  );

  const [newPreference, setNewPreference] = useState("");

  //the url will be changed to the backend url
  const viewDietaryPreference = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/dietarypreference/readAllDietaryPreferences"
      );
      if (response.ok) {
        const data = await response.json();
        // write the data into console for debugging
        console.log("data from backend");
        console.log(data);
        setDietaryPreferences(data);
      } else {
        console.error("Failed to fetch dietary preference list");
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    viewDietaryPreference();
  }, []);

  const handleCreateDietaryPreferences = async () => {
    // Check if the newPreference is not empty
    if (newPreference.trim()) {
      try {
        // Construct the object to send to the backend
        console.log("inside handleCreateDietaryPreferences");
        console.log(newPreference);
        const preferenceToCreate = { name: newPreference };

        const response = await fetch(
          "http://localhost:8080/api/dietarypreference/createDietaryPreference",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(preferenceToCreate),
          }
        );

        if (response.ok) {
          // Fetch the updated list from the backend
          await viewDietaryPreference();
          setNewPreference(""); // Clear the input field after successful creation
        } else {
          console.error("Failed to create dietary preference");
        }
      } catch (error) {
        console.error("Error creating dietary preference", error);
      }
    }
  };

  return (
    <div className="bg-blue-800  min-h-screen flex flex-col justify-center items-center py-5">
      <h1 className="text-2xl text-white font-bold mb-4 text-center sm:text-left">
        Dietary Preferences List
      </h1>
      <div className="overflow-x-auto w-full max-w-md">
        <div className="mb-2 flex justify-end">
          <div>
            <input
              type="text"
              className="p-2 rounded mr-3 text-gray-800 bg-white text-sm w-42 border-black border-2"
              placeholder="New Dietary Preference"
              value={newPreference}
              onChange={(e) => setNewPreference(e.target.value)}
            />
          </div>
          <div>
            <button
              onClick={handleCreateDietaryPreferences}
              className=" rounded bg-blue-300 text-blue-900 text-center font-bold p-2 w-20"
            >
              Create
            </button>
          </div>
        </div>
        <table className="w-full rounded border-black border-2">
          <thead className="bg-blue-600 font-semibold text-white border-black border-2">
            <tr>
              <th className="px-2 py-1 mb-3 text-center text-xl sm:text-left">
                Dietary Preferences
              </th>
            </tr>
          </thead>
          <tbody>
            {mockDietaryPreferences.map((preference) => (
              <tr
                key={preference.id}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {preference.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreateDietaryPreferences;
