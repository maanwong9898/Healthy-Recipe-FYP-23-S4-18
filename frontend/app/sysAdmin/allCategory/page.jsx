"use client";
import React, { useState } from "react";

// router path: /sysAdmin/allCategory
// This page is for system admin to create subcategories

// Mock data for categories and subcategories
const mockData = {
  dietaryPreferences: [
    { id: "vegan", name: "Vegan" },
    { id: "vegetarian", name: "Vegetarian" },
    { id: "pescatarian", name: "Pescatarian" },
  ],
  healthGoals: [
    { id: "weightLoss", name: "Weight Loss" },
    { id: "maintainHealth", name: "Maintain Health" },
    { id: "weightGain", name: "Weight Gain" },
  ],
  allergiesAndRestrictions: [
    { id: "milk", name: "Milk" },
    { id: "egg", name: "Egg" },
    { id: "soy", name: "Soy" },
    { id: "shellfish", name: "Shellfish" },
    { id: "fish", name: "Fish" },
    { id: "peanut", name: "Peanut" },
    { id: "treeNut", name: "Tree Nuts" },
    { id: "Gluten", name: "Gluten" },
  ],
  businessBlogPosts: [
    { id: "cookbook", name: "Cookbook" },
    { id: "kitchenware", name: "Kitchenware" },
    { id: "miscellaneous", name: "Miscellaneous" },
  ],
  educationalContent: [
    { id: "healthyEating", name: "Healthy Eating" },
    { id: "healthyLifestyle", name: "Healthy Lifestyle" },
  ],
};

const CategoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [newSubcategoryName, setNewSubcategoryName] = useState("");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    setSubcategories(mockData[category] || []);
    setNewSubcategoryName(""); // Reset new subcategory name
  };

  const handleCreateSubcategory = () => {
    if (newSubcategoryName.trim()) {
      // Assuming IDs are generated uniquely, here we just lowercase the name
      const newSubcategory = {
        id: newSubcategoryName.toLowerCase().replace(/\s+/g, ""),
        name: newSubcategoryName,
      };
      setSubcategories([...subcategories, newSubcategory]);
      setNewSubcategoryName(""); // Reset input field after adding
    }
  };

  // Utility function to format the display names for categories
  const formatDisplayName = (name) => {
    return (
      name
        // Insert a space before all caps
        .replace(/([A-Z])/g, " $1")
        // Uppercase the first character
        .replace(/^./, (str) => str.toUpperCase())
        .trim()
    );
  };

  return (
    <div className=" bg-cyan-800 w-full min-h-screen p-4">
      <h1 className="text-3xl text-white font-bold mb-4">Select a Category</h1>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="p-2 rounded border-2 mb-4"
      >
        <option value="">-- Select a Category --</option>
        {Object.keys(mockData).map((categoryKey) => (
          <option key={categoryKey} value={categoryKey}>
            {formatDisplayName(categoryKey)} {/* Use the utility function */}
          </option>
        ))}
      </select>

      {selectedCategory && (
        <>
          <div className="flex items-center mb-10">
            <input
              type="text"
              value={newSubcategoryName}
              onChange={(e) => setNewSubcategoryName(e.target.value)}
              className="p-2 rounded border-2 mr-2"
              placeholder="New Subcategory Name"
            />
            <button
              onClick={handleCreateSubcategory}
              className="text-white bg-gradient-to-br from-cyan-400 to-cyan-800 border-2 border-black hover:bg-blue-700  font-bold py-2 px-4 rounded"
            >
              Create
            </button>
          </div>

          <h2 className="text-2xl font-bold capitalize mb-5 text-white">
            {selectedCategory.replace(/([A-Z])/g, " $1").trim()} Category
          </h2>
          <table className="sm:w-3/4 md:w-2/6 w-full border-black border-2">
            <thead className="bg-cyan-600 font-semibold text-cyan-950 border-black border-2">
              <tr>
                <th className="px-4 py-2 text-xl text-left">Subcategories</th>
              </tr>
            </thead>
            <tbody>
              {subcategories.map((subcategory) => (
                <tr
                  key={subcategory.id}
                  className="border-t bg-white border-b border-blue dark:border-blue-600"
                >
                  <td className="px-4 py-2 text-base">{subcategory.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default CategoriesPage;

// "use client";

// import React from "react";
// import { useState, useEffect } from "react";
// import Link from "next/link";

// // router path: /sysAdmin/createDietaryPreferences

// const mockDietaryPreferences = [
//   { id: "d18422a6-0ed3-4d08-803f-28e679fcd9aa", name: "Vegetarian" },
//   { id: "a073d593-1f0c-48fd-87d7-d68d04726cbf", name: "Vegan" },
//   { id: "a09585d9-8254-44e6-a266-bfeff9549a51", name: "Pescatarian" },
//   { id: "ee32f7bb-3ca8-493e-aae4-e37944d5cf54", name: "Omnivore/Normal Diet" },
// ];

// const CreateDietaryPreferences = () => {
//   const [dietaryPreferences, setDietaryPreferences] = useState(
//     mockDietaryPreferences
//   );

//   const [newPreference, setNewPreference] = useState("");

//   //the url will be changed to the backend url
//   const viewDietaryPreference = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:8080/api/dietarypreference/readAllDietaryPreferences"
//       );
//       if (response.ok) {
//         const data = await response.json();
//         // write the data into console for debugging
//         console.log("data from backend");
//         console.log(data);
//         setDietaryPreferences(data);
//       } else {
//         console.error("Failed to fetch dietary preference list");
//       }
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   };

//   useEffect(() => {
//     viewDietaryPreference();
//   }, []);

//   const handleCreateDietaryPreferences = async () => {
//     // Check if the newPreference is not empty
//     if (newPreference.trim()) {
//       try {
//         // Construct the object to send to the backend
//         console.log("inside handleCreateDietaryPreferences");
//         console.log(newPreference);
//         const preferenceToCreate = { name: newPreference };

//         const response = await fetch(
//           "http://localhost:8080/api/dietarypreference/createDietaryPreference",
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify(preferenceToCreate),
//           }
//         );

//         if (response.ok) {
//           // Fetch the updated list from the backend
//           await viewDietaryPreference();
//           setNewPreference(""); // Clear the input field after successful creation
//         } else {
//           console.error("Failed to create dietary preference");
//         }
//       } catch (error) {
//         console.error("Error creating dietary preference", error);
//       }
//     }
//   };

//   return (
//     <div className="bg-cyan-800  min-h-screen flex flex-col justify-center items-center py-5">
//       <h1 className="text-2xl text-white font-bold mb-4 text-center sm:text-left">
//         Dietary Preferences List
//       </h1>
//       <div className="overflow-x-auto w-full max-w-md">
//         <div className="mb-2 flex justify-end">
//           <div>
//             <input
//               type="text"
//               className="p-2 rounded mr-3 text-gray-800 bg-white text-sm w-42 border-black border-2"
//               placeholder="New Dietary Preference"
//               value={newPreference}
//               onChange={(e) => setNewPreference(e.target.value)}
//             />
//           </div>
//           <div>
//             <button
//               onClick={handleCreateDietaryPreferences}
//               className=" rounded text-white bg-gradient-to-br from-cyan-400 to-cyan-800 border-2 border-black text-center font-bold p-2 w-20"
//             >
//               Create
//             </button>
//           </div>
//         </div>
//         <table className="w-full rounded border-black border-2">
//           <thead className="bg-cyan-600 font-semibold text-cyan-950 border-black border-2">
//             <tr>
//               <th className="px-2 py-1 mb-3 text-center text-xl sm:text-left">
//                 Dietary Preferences
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {mockDietaryPreferences.map((preference) => (
//               <tr
//                 key={preference.id}
//                 className="bg-white border-b border-blue dark:border-blue-600"
//               >
//                 <td className="px-3 py-2 text-base text-center sm:text-left">
//                   {preference.name}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default CreateDietaryPreferences;
