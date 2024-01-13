"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";

// router path: /sysAdmin/suspendRecipe

const SuspendRecipePage = () => {
  const [recipes, setRecipes] = useState([]);

  // get all the recipes from the backend
  const viewUserRecipe = async () => {
    try {
      const response = await axiosInterceptorInstance.get("/recipe/get");
      console.log(response.data);
      setRecipes(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // Function to suspend a business blog post
  const handleSuspendRecipe = async (recipeId) => {
    try {
      const response = await axiosInterceptorInstance.put(
        "/recipe/updateActivity",
        {
          id: recipeId,
          active: false,
        }
      );

      // Update local state to reflect the change
      const updatedRecipes = recipes.map((recipe) => {
        if (recipe.id === recipeId) {
          return { ...recipe, active: false };
        }
        return recipe;
      });

      setRecipes(updatedRecipes);
    } catch (error) {
      console.error("Error suspending recipe", error);
    }
  };

  useEffect(() => {
    viewUserRecipe();
  }, []);

  return (
    <div className="px-2 sm:px-5  bg-cyan-800 min-h-screen flex flex-col py-5">
      <h1 className="text-2xl text-white p-3 mb-4 font-bold text-center sm:text-left">
        Recipes
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-black border-2">
          <thead className="bg-cyan-600 font-semibold text-cyan-950 border-black border-2">
            <tr>
              <th className="px-3 py-2 text-xl text-left">Recipe</th>
              <th className="px-3 py-2 text-xl text-left">Date Created</th>
              <th className="px-3 py-2 text-xl text-left">Publisher</th>
              {/* <th className="px-3 py-2 text-xl text-left">Ratings</th> */}
              {/* <th className="px-3 py-2 text-xl text-left">Reviews</th> */}
              <th className="px-3 py-2 text-xl text-left">Status</th>
              <th className="px-3 py-2 text-xl text-left"></th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {recipe.title}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {new Date(recipe.createdDT).toLocaleDateString("en-GB")}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {recipe.userID?.fullName || "nil"}
                </td>
                {/* <td className="px-3 py-2 text-base text-center sm:text-left">
                  {recipe.ratings}
                </td> */}
                {/* <td className="px-3 py-2 text-base text-center sm:text-left">
                  {recipe.reviews}
                </td> */}
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  <span
                    className={`rounded-full px-3 py-1 text-base font-semibold ${
                      recipe.active === true
                        ? "text-white bg-gradient-to-br from-cyan-400 to-cyan-600"
                        : "text-white bg-gradient-to-br from-orange-600 to-red-700"
                    }`}
                  >
                    {recipe.active === true ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="px-3 py-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  <button
                    onClick={() => handleSuspendRecipe(recipe.id)}
                    disabled={!recipe.active}
                    className={`text-white font-bold bg-gradient-to-br ${
                      recipe.active
                        ? "from-orange-600 to-red-700"
                        : "bg-gray-300"
                    } hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-7
                    mr-7 text-center`}
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

export default SuspendRecipePage;
