"use client";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axiosInterceptorInstance from "../axiosInterceptorInstance";
import BookIcon from "@mui/icons-material/Book";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArticleIcon from "@mui/icons-material/Article";
import SecureStorage from "react-secure-storage";
import SysAdminNavBar from "../components/navigation/sysAdminNavBar";

ChartJS.register(ArcElement, Tooltip, Legend);

// home page for system admin
// router path: /sysAdmin

// Get all blog post count
const fetchBlogPostsCount = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "systemAdmin/findTotalBlogCount"
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch blog post count:", error);
    throw error;
  }
};

// Get all recipes count
const fetchRecipesCount = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "systemAdmin/findTotalRecipeCount"
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch recipes count:", error);
    throw error;
  }
};

// Get all educational content count
const fetchEducationcalContentCount = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "systemAdmin/findTotalEducationalContentCount"
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch educational content count:", error);
    throw error;
  }
};

// Get all meal planscount
const fetchMealPlansCount = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "/systemAdmin/findTotalMealPlanCount"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching meal plans count:", error);
    throw error;
  }
};

// Calling dashboard API to get user account information
const viewUserDashboard = async () => {
  try {
    const token = SecureStorage.getItem("token");
    const userId = SecureStorage.getItem("userId");

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

// Get user role counts
const fetchUserRoleCounts = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "/landingPage/getRoleCount"
    );
    return response.data;
  } catch (error) {
    console.log("Failed to fetch user role counts: ", error);
  }
};

const AdminHomePage = () => {
  const router = useRouter();
  const [userAccount, setUserAccount] = useState("");
  const [username, setUsername] = useState("");
  const [totalUserRoleCount, setTotalUserRoleCount] = useState([]);
  const [totalBlogPostCount, setTotalBlogPostCount] = useState("");
  const [totalRecipesCount, setTotalRecipesCount] = useState("");
  const [totalEducationalContentCount, setTotalEducationalContentCount] =
    useState("");
  const [totalMealPlansCount, setTotalMealPlansCount] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !SecureStorage.getItem("token") ||
      SecureStorage.getItem("role") !== "ADMIN" ||
      now >= parseInt(tokenExpiration)
    ) {
      // clear the secure storage
      SecureStorage.clear();
      router.push("/");
    } else {
      setIsChecking(false);
      const fetchData = async () => {
        try {
          // Fetch all necessary data
          const blogPostsCountData = await fetchBlogPostsCount();
          const recipesCountData = await fetchRecipesCount();
          const educationalContentCountData =
            await fetchEducationcalContentCount();
          const mealPlansCountData = await fetchMealPlansCount();
          const totalUserRoleCountData = await fetchUserRoleCounts();
          const userDashboardData = await viewUserDashboard();

          // Update state with fetched data
          setTotalBlogPostCount(blogPostsCountData);
          setTotalRecipesCount(recipesCountData);
          setTotalEducationalContentCount(educationalContentCountData);
          setTotalMealPlansCount(mealPlansCountData);
          setTotalUserRoleCount(totalUserRoleCountData);
          setUserAccount(userDashboardData);

          setIsLoading(false);
        } catch (error) {
          console.error("Error in data fetching", error);
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

  const labelMapping = {
    REGISTERED_USER: "Registered User",
    BUSINESS_USER: "Business User",
    NUTRITIONIST: "Nutritionist",
    ADMIN: "System Admin",
  };

  const userAccountPieData = {
    labels: totalUserRoleCount.map((user) => labelMapping[user.role]),

    datasets: [
      {
        data: totalUserRoleCount.map((user) => user.count),
        backgroundColor: ["#FFD1DC", "#AEC6CF", "#B0E0E6", "#FFDAB9"],
      },
    ],
  };

  // The button under user account management will redirect to corresponding page
  const handleCreateUserAccount = () => {
    router.push("/sysAdmin/userAccount/createUserAccount");
  };

  const handleViewUserAccount = () => {
    router.push("/sysAdmin/userAccount");
  };

  const handleVerifyBusinessAccount = () => {
    router.push("/sysAdmin/businessAccountPendingList");
  };

  // The button under dietary preferences management will redirect to corresponding page
  const handleManageCategory = () => {
    router.push("/sysAdmin/allCategory");
  };

  // The button under business blog post and recipes related will redirect to corresponding page
  const handleViewBlogPost = () => {
    router.push("/sysAdmin/suspendBlogPost");
  };

  const handleViewRecipes = () => {
    router.push("/sysAdmin/suspendRecipe");
  };

  const handleViewEducationalContent = () => {
    router.push("/sysAdmin/suspendEducationalContent");
  };

  const handleViewMealPlans = () => {
    router.push("/sysAdmin/suspendMealPlan");
  };

  // The button under user account will redirect to corresponding page
  const handleViewMyAccount = () => {
    router.push("/sysAdmin/myAccount/viewAccount");
  };

  const handleChangePassword = () => {
    router.push("/sysAdmin/myAccount/changePwd");
  };

  return (
    <div>
      {isLoading && isChecking ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="min-h-screen w-full overflow-x-hidden">
            <SysAdminNavBar />
            <h2 className="text-5xl font-bold text-center text-gray-800 p-4">
              Dashboard
            </h2>
            {isLoading ? (
              <div className="text-xl text-center p-4">
                <p>Please wait. It'll just take a moment.</p>
              </div>
            ) : (
              <>
                {/* Start of Card -- number of recipes, blogs, educational content created */}
                <div className="p-6 mb-7 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4">
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
                          Total Recipes
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
                  {/* Total blogs card */}
                  <div className="grid grid-cols-2">
                    <div className="relative rounded-l-xl bg-gradient-to-tr from-gray-900 to-gray-800 shadow-sm flex justify-center items-center">
                      <BookIcon
                        style={{
                          fontSize: "45px",
                          color: "#ffffff",
                        }}
                      />
                    </div>
                    <div className="relative rounded-r-xl bg-white text-gray-700 shadow-sm hover:bg-gray-100 flex justify-center items-center">
                      <div className="p-4 text-center">
                        <p className="block tracking-normal text-xl font-normal text-gray-600">
                          Total Blogs
                        </p>
                        <h4 className="mt-3 block tracking-normal font-sans text-2xl font-semibold text-gray-900">
                          {totalBlogPostCount}
                        </h4>
                      </div>
                    </div>
                  </div>
                  {/* Total educational content card */}
                  <div className="grid grid-cols-2">
                    <div className="relative rounded-l-xl bg-gradient-to-tr from-gray-900 to-gray-800 shadow-sm flex justify-center items-center">
                      <ArticleIcon
                        style={{
                          fontSize: "45px",
                          color: "#ffffff",
                        }}
                      />
                    </div>
                    <div className="relative rounded-r-xl bg-white text-gray-700 shadow-sm hover:bg-gray-100 flex justify-center items-center">
                      <div className="p-4 text-center">
                        <p className="block tracking-normal text-xl font-normal text-gray-600">
                          Total Educational Contents
                        </p>
                        <h4 className="mt-3 block tracking-normal font-sans text-2xl font-semibold text-gray-900">
                          {totalEducationalContentCount}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of Card -- number of recipes, blogs, educational content created */}

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
                      {/* User Account management */}
                      <div className="relative flex flex-col rounded-xl bg-slate-200 p-8">
                        <h4 className="text-2xl text-center font-semibold text-gray-900 mb-4">
                          User Account Management
                        </h4>
                        <div className="grid grid-rows-2 gap-10 place-content-center mt-14 content-center">
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleCreateUserAccount}
                            >
                              Create User Account
                            </button>
                          </div>
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleViewUserAccount}
                            >
                              View User Accounts
                            </button>
                          </div>
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 mb-8 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleVerifyBusinessAccount}
                            >
                              Verify Business Accounts
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Category management */}
                      <div className="relative flex flex-col rounded-xl bg-slate-200 p-8">
                        <h4 className="text-2xl text-center font-semibold text-gray-900 mb-4">
                          Category Management
                        </h4>
                        <div className="grid grid-rows-2 gap-10 place-content-center mt-14 content-center">
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleManageCategory}
                            >
                              Manage Category
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Suspend Contents management */}
                      <div className="relative flex flex-col rounded-xl max-h-screen bg-slate-200 p-8">
                        <h4 className="text-2xl text-center font-semibold text-gray-900 mb-4">
                          Suspend Content Management
                        </h4>
                        <div className="grid grid-rows-2 gap-10 place-content-center mt-14 content-center">
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleViewBlogPost}
                            >
                              View Blog Posts
                            </button>
                          </div>
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleViewRecipes}
                            >
                              View Recipes
                            </button>
                          </div>
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleViewEducationalContent}
                            >
                              View Educational Contents
                            </button>
                          </div>
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 mb-8 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleViewMealPlans}
                            >
                              View Meal Plans
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* User Account management */}
                      <div className="relative flex flex-col rounded-xl max-h-screen bg-slate-200 p-8">
                        <h4 className="text-2xl text-center font-semibold text-gray-900 mb-4">
                          Account Management
                        </h4>
                        <div className="grid grid-rows-2 gap-10 place-content-center mt-14 content-center">
                          <div className="flex items-center justify-center">
                            <button
                              className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                              onClick={handleViewMyAccount}
                            >
                              View My Account
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
                      User Information
                    </h4>
                    <div
                      className="p-3 flex justify-center"
                      style={{ height: "500px" }}
                    >
                      <Pie data={userAccountPieData} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminHomePage;
