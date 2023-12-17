"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// router path: /dietitian/mealPlan
// this is the page for dietitan to view all of their meal plans

// Called the controller to get the list of all meal plans belongs to this dietitian
// this is the simple mock data for meal plan but a meal plan should have more attributes
const mockMealPLan = [
  {
    mealPlanTitle:
      "Wholesome Slimming: Balanced Vegetarian Meals for Weight Loss",
    date_published: "2021-10-01",
    ratings: 4,
    reviews: 10,
    isActive: true,
  },
  {
    mealPlanTitle: "3-Day Vegan Kickstart: Energizing Meal Plan",
    date_published: "2022-05-20",
    ratings: 4,
    reviews: 14,
    isActive: true,
  },
  {
    mealPlanTitle: "Plant-Based Cleanse for Weight Loss",
    date_published: "2022-07-11",
    ratings: 4,
    reviews: 22,
    isActive: true,
  },
  {
    mealPlanTitle: "5-Day Low-Carb Vegetarian Meal Plan for Busy Bees",
    date_published: "2023-03-15",
    ratings: 4,
    reviews: 9,
    isActive: false,
  },
  {
    mealPlanTitle: "Gluten-Free Vegan Journey to Wellness",
    date_published: "2021-12-01",
    ratings: 4,
    reviews: 30,
    isActive: true,
  },
  {
    mealPlanTitle: "Whole Food Adventure for Heart Health",
    date_published: "2022-09-23",
    ratings: 4,
    reviews: 18,
    isActive: true,
  },
];

const MyMealPlan = () => {
  const router = useRouter();
  const [mealPlans, setMealPlans] = useState(mockMealPLan);

  // this function is to view particular meal plan
  const handleViewMealPlan = (mealPlanTitle) => {
    // Make sure the mealPlanTitle
    console.log(`Meal Plan Title: ${mealPlanTitle}`);

    // Redirect to the correct route
    let routePath = `/dietitian/mealPlan/viewMealPlan/${mealPlanTitle}`;

    router.push(routePath);
  };

  // this function is to update particular meal plan
  const handleUpdateMealPlan = (mealPlanTitle) => {
    // Make sure the mealPlanTitle
    console.log(`Meal Plan Title: ${mealPlanTitle}`);

    // Redirect to the correct route
    let routePath = `/businessUser/businessBlogPost/updateBusinessBlogPost/${mealPlanTitle}`;

    router.push(routePath);
  };

  return (
    <div className="px-2 sm:px-5  bg-cyan-800 min-h-screen flex flex-col py-5">
      <h1 className="text-2xl text-white p-3 mb-4 font-bold text-center sm:text-left">
        My Meal Plans
      </h1>
      <div>
        <button className="text-white border-2 border-black bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 mr-7 mb-4 text-center">
          <Link href="/dietitian/mealPlan/createMealPlan">
            Create Meal Plan
          </Link>
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-black border-2">
          <thead className="bg-cyan-600 font-semibold text-cyan-950 border-black border-2">
            <tr>
              <th className="px-3 py-2 text-xl text-left">Meal Plan Title</th>
              <th className="px-3 py-2 text-xl text-left">Date Published</th>
              <th className="px-3 py-2 text-xl text-left">Ratings</th>
              <th className="px-3 py-2 text-xl text-left">Reviews</th>
              <th className="px-3 py-2 text-xl text-left">Status</th>
              <th className="px-3 py-2 text-xl text-left"></th>
              <th className="px-3 py-2 text-xl text-left"></th>
              <th className="px-3 py-2 text-xl text-left"></th>
            </tr>
          </thead>
          <tbody>
            {mockMealPLan.map((mealPlan, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {mealPlan.mealPlanTitle}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {mealPlan.date_published}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {mealPlan.ratings}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {mealPlan.reviews}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  <span
                    className={`rounded-full px-3 py-1 text-base font-semibold ${
                      mealPlan.isActive === true
                        ? "text-white bg-gradient-to-br from-cyan-400 to-cyan-600"
                        : "text-white bg-gradient-to-br from-orange-600 to-red-700"
                    }`}
                  >
                    {mealPlan.isActive === true ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() => handleViewMealPlan(mealPlan.mealPlanTitle)}
                    className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-7
                    mr-7 text-center"
                  >
                    {" "}
                    View
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() => handleUpdateMealPlan(mealPlan.mealPlanTitle)}
                    className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-7
                    mr-7 text-center"
                  >
                    {" "}
                    Edit
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    // onClick={() => handleSuspendRecipe(recipe.recipeName)}
                    className="text-white font-bold bg-gradient-to-br from-orange-600 to-red-700 hover:bg-gradient-to-bl border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-7
                    mr-7 text-center"
                  >
                    {" "}
                    Delete
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

export default MyMealPlan;
