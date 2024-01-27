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

ChartJS.register(ArcElement, Tooltip, Legend);

// home page for business user
// router path: /businessUser

// Fetch all blog posts from the backend - backend controller is BlogController
const fetchBlogPosts = async () => {
  const userID = localStorage.getItem("userId");
  console.log("Current id", userID);
  try {
    const response = await axiosInterceptorInstance.get(
      "/blog/findByUserId/" + userID
    );

    console.log("All business blog posts belongs to this user:", response.data);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw error;
  }
};

const fetchRecipes = async () => {
  const userID = localStorage.getItem("userId");
  try {
    const response = await axiosInterceptorInstance.get(
      "/recipe/findByUserId/" + userID
    );

    console.log("All recipes created belongs to this user:", response.data);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch recipes:", error);
    throw error;
  }
};

const fetchEducationcalContent = async () => {
  const userID = localStorage.getItem("userId");
  try {
    const response = await axiosInterceptorInstance.get(
      "/educationalContent/findByUserId/" + userID
    );

    console.log(
      "All educational content created belongs to this user:",
      response.data
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch educational content:", error);
    throw error;
  }
};

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

  // Calling dashboard API to get user account information
  const viewUserDashboard = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      // Make the GET request to the userAndAdmin endpoint
      const response = await axiosInterceptorInstance.get(
        "/register/dashboard/" + userId,
        config
      );

      setUserAccount(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  useEffect(() => {
    viewUserDashboard();
  }, []);

  // set username of current user
  useEffect(() => {
    setUsername(userAccount ? userAccount.username : "");
  }, [userAccount]);

  const fetchDietaryPreferences = async () => {
    try {
      const response = await axiosInterceptorInstance.get(
        "/registeredUsers/getDemo"
      );
      console.log("Fetched dietary preferences:", response.data);
      setUserDietaryPreferenceCount(response.data);
    } catch (error) {
      console.error("Error fetching dietary preferences:", error);
    }
  };
  useEffect(() => {
    const fetchBlogPostsData = async () => {
      try {
        const posts = await fetchBlogPosts();
        setBusinessBlogPost(posts); // Set the retrieved blog posts in the state
      } catch (error) {
        console.error("Failed to fetch blog posts:", error);
      }
    };

    const fetchRecipesData = async () => {
      try {
        const getRecipes = await fetchRecipes();
        setRecipes(getRecipes); // Set the retrieved recipes in the state
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };

    const fetchEducationcalContentData = async () => {
      try {
        const getEducationalContents = await fetchEducationcalContent();
        setEducationalContent(getEducationalContents); // Set the retrieved recipes in the state
      } catch (error) {
        console.error("Failed to fetch educational content:", error);
      }
    };

    fetchRecipesData();
    fetchBlogPostsData();
    fetchEducationcalContentData();
    fetchDietaryPreferences();
  }, []); // Empty dependency array ensures this runs once after component mounts

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

  const handleViewBlogPost = () => {
    router.push("/businessUser/businessBlogPost");
  };

  // The button under recipe will redirect to corresponding page
  const handleCreateRecipe = () => {
    router.push("/businessUser/recipes/createRecipe");
  };

  const handleViewRecipes = () => {
    router.push("/businessUser/recipes");
  };

  // The button under educational content will redirect to corresponding page
  const handleCreateEducationalContent = () => {
    router.push("/businessUser/educationalContent/createEducationalContent");
  };

  const handleViewEducationalContent = () => {
    router.push("/businessUser/educationalContent");
  };

  // The button under user account will redirect to corresponding page
  const handleViewUserAccount = () => {
    router.push("/businessUser/myAccount/viewAccount");
  };

  const handleChangePassword = () => {
    router.push("/businessUser/myAccount/changePwd");
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <h2 className="text-5xl font-bold text-center text-gray-800 p-4">
        Dashboard
      </h2>
      {/* Start of Card -- number of recipes, blogs, educational content created */}
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
                {recipes ? recipes.length : 0}
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
                {businessBlogPost ? businessBlogPost.length : 0}
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
                {educationalContent ? educationalContent.length : 0}
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
              <h1 className="text-4xl font-bold">Welcome back, {username}</h1>
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
                    className="px-6 py-2 mb-8 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                    onClick={handleViewRecipes}
                  >
                    View All Recipes
                  </button>
                </div>
              </div>
            </div>
            {/* Blog management */}
            <div className="relative flex flex-col rounded-xl h-96 bg-slate-200 p-8">
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
                    className="px-6 py-2 mb-8 font-medium bg-indigo-500 text-white w-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
                    onClick={handleViewBlogPost}
                  >
                    View All Blog Posts
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
          <div className="p-3 flex justify-center" style={{ height: "500px" }}>
            {userDietaryPreferenceCount.length > 0 ? (
              <Pie data={dietaryPreferencePieData} />
            ) : (
              <p>Not specified</p>
            )}
          </div>
        </div>
      </div>
      {/* End of quick link table/card */}

      {/* Start of latest blogs created */}
      {/* <div className="p-6 mb-4 grid grid-cols-1 xl:grid-cols-1">
        <div className="p-6 relative rounded-xl bg-white text-gray-700 overflow-hidden xl:col-span-2 border border-gray-100 shadow-sm">
          <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
            <div>
              <h1 className="text-4xl font-bold">Blogs</h1>
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    <th className="border-b border-gray-200 py-3 px-6 text-left">
                      <p class="mt-6 block antialiased font-sans text-[11px] font-medium uppercase text-gray-900">
                        Blog Post Title
                      </p>
                    </th>
                    <th className="border-b border-gray-200 py-3 px-6 text-left">
                      <p class="mt-6 block antialiased font-sans text-[11px] font-medium uppercase text-gray-900">
                        Date Published
                      </p>
                    </th>
                    <th className="border-b border-gray-200 py-3 px-6 text-left">
                      <p class="mt-6 block antialiased font-sans text-[11px] font-medium uppercase text-gray-900">
                        Category
                      </p>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
        </div>
      </div> */}
      {/* insert a table in a card */}

      {/* End of latest blogs created */}

      {/* Start of latest recipes created */}
      {/* End of latest recipes created */}

      {/* Start of latest educational content created */}
      {/* End of latest educational content created */}
    </div>
  );
};

export default BusinessUserHomePage;
