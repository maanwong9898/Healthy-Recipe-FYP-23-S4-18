"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// router path: /sysAdmin/suspendRecipe

// Called the controller to get the list of all "Active" recipes
// this is the simple mock data for recipes but a recipe should have more attributes
const mockRecipes = [
  {
    recipeName: "Tomato Soup",
    dateCreated: "2021-10-01",
    ratings: 4.5,
    reviews: 5,
    isActive: true,
  },
  {
    recipeName: "Chicken Soup",
    dateCreated: "2021-10-01",
    ratings: 4.5,
    reviews: 10,
    isActive: true,
  },
  {
    recipeName: "Beef Soup",
    dateCreated: "2021-10-01",
    ratings: 4.5,
    reviews: 15,
    isActive: true,
  },
  {
    recipeName: "Pork Soup",
    dateCreated: "2021-10-01",
    ratings: 4.5,
    reviews: 20,
    isActive: true,
  },
];

const SuspendRecipePages = () => {
  const [recipes, setRecipes] = useState(mockRecipes);

  return (
    <div className="px-2 sm:px-5  bg-blue-800 min-h-screen flex flex-col py-5">
      <h1 className="text-2xl text-white p-3 mb-4 font-bold text-center sm:text-left">
        Recipes
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-black border-2">
          <thead className="bg-blue-600 font-semibold text-white border-black border-2">
            <tr>
              <th className="px-3 py-2 text-left">Recipe</th>
              <th className="px-3 py-2 text-left">Date Created</th>
              <th className="px-3 py-2 text-left">Ratings</th>
              <th className="px-3 py-2 text-left">Reviews</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {mockRecipes.map((recipe, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-sm text-center sm:text-left">
                  {recipe.recipeName}
                </td>
                <td className="px-3 py-2 text-sm text-center sm:text-left">
                  {recipe.dateCreated}
                </td>
                <td className="px-3 py-2 text-sm text-center sm:text-left">
                  {recipe.ratings}
                </td>
                <td className="px-3 py-2 text-sm text-center sm:text-left">
                  {recipe.reviews}
                </td>
                <td className="px-3 py-2 text-sm text-center sm:text-left">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      recipe.isActive === true
                        ? "bg-green-200 text-green-900"
                        : "bg-red-200 text-red-900"
                    }`}
                  >
                    {recipe.isActive === true ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="px-3 py-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  <button
                    // onClick={() => handleSuspendRecipe(recipe.recipeName)}
                    className="text-white font-bold bg-gradient-to-br
                    from-red-500 to-red-600 hover:bg-gradient-to-bl
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-sm px-5 py-2.5 ml-7
                    mr-7 text-center"
                  >
                    {" "}
                    Suspend
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuspendRecipePages;

// // this function is to suspend the recipe
//   // ready to be tested
//   // the url will be changed to the backend url
//   const viewUserRecipe = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:8080/api/recipe/readAllRecipes"
//       );
//       if (response.ok) {
//         const data = await response.json();
//         // write the data into console for debugging
//         console.log("data from backend");
//         console.log(data);
//         setRecipes(data);
//       } else {
//         console.error("Failed to fetch recipe list");
//       }
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   };

//   // this function is to suspend particular recipe
//   const handleSuspendRecipe = async (recipeName) => {
//     // Check the username
//     console.log(`Recipe: ${recipeName}`);

//     // Send a request to backend to suspend the account
//     try {
//       const response = await fetch(
//         `http://localhost:8080/api/recipe/suspendRecipe/${recipeName}`,
//         {
//           method: "PUT",
//         }
//       );
//       if (response.ok) {
//         // Refresh the recipe list
//         viewUserRecipe();
//       } else {
//         console.error("Failed to suspend recipe");
//       }
//     } catch (error) {
//       console.error("Error suspending recipe", error);
//     }
//   };

//   useEffect(() => {
//     viewUserRecipe();
//   }, []);
