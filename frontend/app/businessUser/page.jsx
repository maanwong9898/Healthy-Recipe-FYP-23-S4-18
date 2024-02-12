"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BookIcon from "@mui/icons-material/Book";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ArticleIcon from "@mui/icons-material/Article";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axiosInterceptorInstance from "../axiosInterceptorInstance";
import SecureStorage from "react-secure-storage";
import BusinessUserNavBar from "../components/navigation/businessUserNavBar";

ChartJS.register(ArcElement, Tooltip, Legend);

// home page for business user
// router path: /businessUser

const BusinessUserHomePage = () => {
  const router = useRouter();
  const [userAccount, setUserAccount] = useState("");
  const [username, setUsername] = useState("");
  const [businessBlogPost, setBusinessBlogPost] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [educationalContent, setEducationalContent] = useState([]);
  const [userDietaryPreferenceCount, setUserDietaryPreferenceCount] = useState(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !SecureStorage.getItem("token") ||
      SecureStorage.getItem("role") !== "BUSINESS_USER" ||
      now >= parseInt(tokenExpiration)
    ) {
      // clear the storage and redirect to login page
      SecureStorage.clear();
      console.log("Redirecting to home page");
      router.push("/");
      return;
    } else {
      setIsChecking(false);

      const fetchData = async () => {
        try {
          const userId = SecureStorage.getItem("userId");
          const token = SecureStorage.getItem("token");
          const config = {
            headers: { Authorization: `Bearer ${token}` },
          };

          const blogPostsResponse = await axiosInterceptorInstance.get(
            "/businessUser/findBlogCountById/" + userId,
            config
          );
          const recipesResponse = await axiosInterceptorInstance.get(
            "/businessUser/findRecipeCountById/" + userId,
            config
          );
          const educationalContentResponse = await axiosInterceptorInstance.get(
            "/businessUser/findEduCountById/" + userId,
            config
          );

          setBusinessBlogPost(blogPostsResponse.data);
          setRecipes(recipesResponse.data);
          setEducationalContent(educationalContentResponse.data);

          const userAccountResponse = await axiosInterceptorInstance.get(
            "/register/dashboard/" + userId,
            config
          );
          setUserAccount(userAccountResponse.data);
          setUsername(
            userAccountResponse.data ? userAccountResponse.data.username : ""
          );

          const dietaryPreferencesResponse = await axiosInterceptorInstance.get(
            "/registeredUsers/getDemo"
          );
          setUserDietaryPreferenceCount(dietaryPreferencesResponse.data);

          setIsLoading(false);
        } catch (error) {
          console.error("Error in data fetching", error);
        }
      };

      fetchData();
    }
  }, []); // router is a dependency

  // Conditional Rendering Based on Authentication Status
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

  // The button under business blog post will redirect to corresponding page
  const handleCreateBlogPost = () => {
    router.push("/businessUser/businessBlogPost/createBusinessBlogPost");
  };

  const handleViewMyBlogPost = () => {
    router.push("/businessUser/businessBlogPost");
  };

  const handleExploreAllBlogPost = () => {
    router.push("/businessUser/businessBlogPost/exploreAllBlogs");
  };

  // The button under recipe will redirect to corresponding page
  const handleCreateRecipe = () => {
    router.push("/businessUser/recipes/createRecipe");
  };

  const handleViewRecipes = () => {
    router.push("/businessUser/recipes");
  };

  const handleExploreAllRecipe = () => {
    router.push("/businessUser/recipes/exploreAllRecipes");
  };

  // The button under educational content will redirect to corresponding page
  const handleCreateEducationalContent = () => {
    router.push("/businessUser/educationalContent/createEducationalContent");
  };

  const handleViewEducationalContent = () => {
    router.push("/businessUser/educationalContent");
  };

  const handleExploreAllEducationalContent = () => {
    router.push(
      "/businessUser/educationalContent/exploreAllEducationalContent"
    );
  };

  // The button under user account will redirect to corresponding page
  const handleViewUserAccount = () => {
    router.push("/businessUser/myAccount/viewAccount");
  };

  const handleChangePassword = () => {
    router.push("/businessUser/myAccount/changePwd");
  };

  return (
    <div>
      {isLoading && isChecking ? (
        <div>Loading...</div>
      ) : (
        <>
          <div className="min-h-screen w-full overflow-x-hidden">
            <BusinessUserNavBar />
            <h2 className="text-5xl font-bold text-center text-gray-800 p-4">
              Dashboard
            </h2>

            <div className="p-6 mb-7 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
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
                      {recipes}
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
                      {businessBlogPost}
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
                      {educationalContent}
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
                  {/* Recipe management */}
                  <div className="relative flex flex-col rounded-xl bg-slate-200 p-8">
                    <h4 className="text-2xl text-center font-semibold text-gray-900 mb-4">
                      Recipe Management
                    </h4>
                    <div className="grid grid-rows-2 gap-10 place-content-center mt-14 content-center">
                      <div className="flex items-center justify-center">
                        <button
                          className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                          onClick={handleCreateRecipe}
                        >
                          Create Recipe
                        </button>
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                          onClick={handleViewRecipes}
                        >
                          View All Recipes
                        </button>
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                          onClick={handleExploreAllRecipe}
                        >
                          Explore All Recipes
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Blog management */}
                  <div className="relative flex flex-col rounded-xl bg-slate-200 p-8">
                    <h4 className="text-2xl text-center font-semibold text-gray-900 mb-4">
                      Blogs Management
                    </h4>
                    <div className="grid grid-rows-2 gap-10 place-content-center mt-14 content-center">
                      <div className="flex items-center justify-center">
                        <button
                          className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                          onClick={handleCreateBlogPost}
                        >
                          Create Blog Post
                        </button>
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                          onClick={handleViewMyBlogPost}
                        >
                          View My Blog Posts
                        </button>
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                          onClick={handleExploreAllBlogPost}
                        >
                          Explore All Blog Posts
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Educational Content management */}
                  <div className="relative flex flex-col rounded-xl bg-slate-200 p-8">
                    <h4 className="text-2xl text-center font-semibold text-gray-900 mb-4">
                      Educational Content Management
                    </h4>
                    <div className="grid grid-rows-2 gap-10 place-content-center mt-14 content-center">
                      <div className="flex items-center justify-center">
                        <button
                          className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                          onClick={handleCreateEducationalContent}
                        >
                          Create Educational Content
                        </button>
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                          onClick={handleViewEducationalContent}
                        >
                          View All Educational Contents
                        </button>
                      </div>
                      <div className="flex items-center justify-center">
                        <button
                          className="px-6 py-2 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                          onClick={handleExploreAllEducationalContent}
                        >
                          Explore All Educational Contents
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
                          className="px-6 py-2 mb-8 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
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
          </div>
        </>
      )}
    </div>
  );
};

export default BusinessUserHomePage;
