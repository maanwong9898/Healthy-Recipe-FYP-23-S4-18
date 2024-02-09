"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axiosInterceptorInstance from "../axiosInterceptorInstance";
import SecureStorage from "react-secure-storage";
import NutritionistNavBar from "../components/navigation/nutritionistNavBar";

ChartJS.register(ArcElement, Tooltip, Legend);

// Get meal plan that belongs to specific user when logged in
const fetchMealPlanCount = async () => {
  const userID = SecureStorage.getItem("userId");

  try {
    const response = await axiosInterceptorInstance.get(
      "/nutritionist/findMealPlanCountById/" + userID
    );
    console.log("Total Meal Plan Count for this user:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching meal plans:", error);
    throw error;
  }
};

// Get all recipes available in the databse
const fetchRecipesCount = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "/nutritionist/findRecipeCount"
    );
    console.log("Total Recipe Count:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

// Calling dashboard API to get user account information
const viewUserDashboard = async () => {
  try {
    const userId = SecureStorage.getItem("userId");
    const token = SecureStorage.getItem("token");

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    // Make the GET request to the userAndAdmin endpoint
    const response = await axiosInterceptorInstance.get(
      "/register/dashboard/" + userId,
      config
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching user data", error);
  }
};

const fetchDietaryPreferences = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "/registeredUsers/getDemo"
    );
    console.log("Fetched dietary preferences:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching dietary preferences:", error);
  }
};

// router path: /nutritionist
const NutritionistHomePage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [userAccount, setUserAccount] = useState("");
  const [totalMealPlansCount, setTotalMealPlansCount] = useState("");
  const [totalRecipesCount, setTotalRecipesCount] = useState("");
  const [userDietaryPreferenceCount, setUserDietaryPreferenceCount] = useState(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (
      !SecureStorage.getItem("token") ||
      SecureStorage.getItem("role") !== "NUTRITIONIST"
    ) {
      // clear the secure storage
      SecureStorage.clear();
      console.log("Redirecting to home page");
      router.push("/");
    } else {
      setIsChecking(false);

      const fetchData = async () => {
        try {
          // Fetch all necessary data
          const mealPlanCountData = await fetchMealPlanCount();
          const recipesCountData = await fetchRecipesCount();
          const userDashboardData = await viewUserDashboard();
          const dietaryPreferenceData = await fetchDietaryPreferences();

          // Update state with fetched data
          setTotalMealPlansCount(mealPlanCountData);
          setTotalRecipesCount(recipesCountData);
          setUserAccount(userDashboardData);
          setUserDietaryPreferenceCount(dietaryPreferenceData);

          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
    }
  }, []);

  // set username of current user
  useEffect(() => {
    setUsername(userAccount ? userAccount.username : "");
  }, [userAccount]);

  if (isChecking) {
    return <div>Checking...</div>;
  }

  //Pie chart data for dietary preferences
  const dietaryPreferencePieData = {
    labels: userDietaryPreferenceCount.map((preference) => preference.name),
    datasets: [
      {
        label: "Dietary Preferences",
        data: userDietaryPreferenceCount.map((preference) => preference.count),
        backgroundColor: [
          "#FFD1DC",
          "#AEC6CF",
          "#B0E0E6",
          "#FFDAB9",
          "#B19CD9",
          "#FFB347",
          "#AFEEEE",
          "#E6E6FA",
        ],
      },
    ],
  };

  // The button under meal plan will redirect to corresponding page
  const handleCreateMealPlan = () => {
    router.push("/nutritionist/mealPlan/createMealPlan");
  };

  const handleViewMealPlans = () => {
    router.push("/nutritionist/mealPlan");
  };

  const handleExploreAllMealPlans = () => {
    router.push("/nutritionist/mealPlan/exploreAllMealPlan");
  };

  // The button under user account will redirect to corresponding page
  const handleViewUserAccount = () => {
    router.push("/nutritionist/myAccount/viewAccount");
  };

  const handleChangePassword = () => {
    router.push("/nutritionist/myAccount/changePwd");
  };

  return (
    <div>
      {isLoading && isChecking ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="min-h-screen w-full overflow-x-hidden">
            <NutritionistNavBar />
            <h2 className="text-5xl font-bold text-center text-gray-800 p-4">
              Dashboard
            </h2>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                {/* Start of Card -- number of recipes, blogs, educational content created */}
                <div className="p-6 mb-7 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
                  {/* Total recipe card */}
                  <div className="grid grid-cols-2">
                    <div className="relative rounded-l-xl bg-gradient-to-tr from-gray-900 to-gray-800 shadow-sm flex justify-center items-center">
                      <RestaurantIcon
                        style={{
                          fontSize: "45px",
                          color: "#ffffff",
                        }}
                      />
                    </div>
                    <div className="relative rounded-r-xl bg-white text-gray-700 shadow-sm hover:bg-gray-100 flex justify-center items-center">
                      <div className="p-4 text-center">
                        <p className="block tracking-normal text-xl font-normal text-gray-600">
                          Total Recipes Available
                        </p>
                        <h4 className="mt-3 block tracking-normal font-sans text-2xl font-semibold text-gray-900">
                          {totalRecipesCount}
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* Total Meal Plans */}
                  <div className="grid grid-cols-2">
                    <div className="relative rounded-l-xl bg-gradient-to-tr from-gray-900 to-gray-800 shadow-sm flex justify-center items-center">
                      <MenuBookIcon
                        style={{
                          fontSize: "45px",
                          color: "#ffffff",
                        }}
                      />
                    </div>
                    <div className="relative rounded-r-xl bg-white text-gray-700 shadow-sm hover:bg-gray-100 flex justify-center items-center">
                      <div className="p-4 text-center">
                        <p className="block tracking-normal text-xl font-normal text-gray-600">
                          Total Meal Plans
                        </p>
                        <h4 className="mt-3 block tracking-normal font-sans text-2xl font-semibold text-gray-900">
                          {totalMealPlansCount}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of Card -- number of recipes and meal plans */}

                {/* Quick link card */}
                <div className="p-6 mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
                  <div className="p-6 relative rounded-xl bg-white text-gray-700 overflow-hidden xl:col-span-2 border border-gray-100 shadow-sm">
                    <div className="relative rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                      <div>
                        <h1 className="text-4xl font-bold">
                          Welcome back, {username}
                        </h1>
                        <p className="mt-4 stext-lg font-normal text-gray-400">
                          What would you like to do today?
                        </p>
                      </div>
                    </div>
                    <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-2">
                      {/* Recipe management */}
                      <div className="relative flex flex-col rounded-xl bg-slate-200 p-8">
                        <h4 className="text-2xl text-center font-semibold text-gray-900 mb-4">
                          Meal Plan Management
                        </h4>
                        <div className="grid grid-rows-2 gap-10 place-content-center mt-14 content-center">
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleCreateMealPlan}
                            >
                              Create Meal Plan
                            </button>
                          </div>
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleViewMealPlans}
                            >
                              View All Meal Plans
                            </button>
                          </div>
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleExploreAllMealPlans}
                            >
                              Explore All Meal Plans
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* User Account management */}
                      <div className="relative flex flex-col rounded-xl bg-slate-200 p-8">
                        <h4 className="text-2xl text-center font-semibold text-gray-900 mb-4">
                          User Account Management
                        </h4>
                        <div className="grid grid-rows-2 gap-10 place-content-center mt-14 content-center">
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleViewUserAccount}
                            >
                              View User Account
                            </button>
                          </div>
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleChangePassword}
                            >
                              Change Password
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* User dietary information pie chart */}
                  <div className="relative rounded-xl bg-white text-gray-900 border border-gray-100 shadow-sm items-center">
                    <h4 className="p-4 text-center font-semibold tracking-normal text-2xl">
                      User Dietary Information
                    </h4>
                    <div
                      className="p-3 flex justify-center"
                      style={{ height: "500px" }}
                    >
                      {userDietaryPreferenceCount.length > 0 ? (
                        <Pie data={dietaryPreferencePieData} />
                      ) : (
                        <p>Not specified</p>
                      )}
                    </div>
                  </div>
                </div>
                {/* End of quick link table/card */}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default NutritionistHomePage;
