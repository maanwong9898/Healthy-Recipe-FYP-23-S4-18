"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// router path: /sysAdmin/suspendRecipe

// const mockUsers = [
//     {
//       username: "BusinessUser123",
//       profile: "Business User",
//       company: "Company 1",
//       UEN: "123456789A",
//       email: "user1@gmail.com",
//       createdDate: "2023-10-01",
//       status: "Pending",
//     },];
// Called the controller to get the list of all "Active" recipes
const mockRecipes = [
  {
    recipeName: "Tomato Soup",
    dateCreated: "2021-10-01",
    ratings: 4.5,
    reviews: 5,
    status: "Active",
  },
  {
    recipeName: "Chicken Soup",
    dateCreated: "2021-10-01",
    ratings: 4.5,
    reviews: 10,
    status: "Active",
  },
  {
    recipeName: "Beef Soup",
    dateCreated: "2021-10-01",
    ratings: 4.5,
    reviews: 15,
    status: "Active",
  },
  {
    recipeName: "Pork Soup",
    dateCreated: "2021-10-01",
    ratings: 4.5,
    reviews: 20,
    status: "Active",
  },
];

const SuspendRecipePages = () => {
  const [recipes, setRecipes] = useState(mockRecipes);

  return (
    <div className="px-2 sm:px-5">
      <h1 className="text-xl text-blue-700 font-semibold p-3 text-center sm:text-left">
        Recipes
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-2">
          <thead className="bg-blue-600 font-semibold text-white">
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
                  {recipe.status}
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
