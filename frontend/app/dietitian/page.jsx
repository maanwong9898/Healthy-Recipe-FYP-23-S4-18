"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// router path: /dietitian
// this is a home page for dietitian
const DietitianHomePage = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    // This code runs only on the client side
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); // Empty dependency array ensures this runs once after component mounts

  // The button under meal plan will redirect to corresponding page
  const handleCreateMealPlan = () => {
    router.push("/dietitian/mealPlan/createMealPlan");
  };

  const handleViewMealPlan = () => {
    router.push("/dietitian/mealPlan");
  };

  return (
    <div className="bg-cyan-800 min-h-screen w-full overflow-x-hidden">
      <div className="p-6 text-white">
        <p className=" text-3xl p-6">
          Welcome Back, {username}! Ready to grow your audience?
        </p>
        <div className=" text-2xl pt-6 pl-6 pb-4">
          Ready to publish new meal plan?
        </div>
        <div className="flex flex-wrap pl-6 pb-4">
          <button
            className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black  rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleCreateMealPlan}
          >
            Create Meal Plan
          </button>
          <button
            className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black  rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleViewMealPlan}
          >
            View My Meal Plans
          </button>
        </div>
      </div>
    </div>
  );
};

export default DietitianHomePage;
