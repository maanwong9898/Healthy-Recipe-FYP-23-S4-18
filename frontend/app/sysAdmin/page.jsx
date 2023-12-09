"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// home page for system admin
// router path: /sysAdmin

const AdminHomePage = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    // This code runs only on the client side
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); // Empty dependency array ensures this runs once after component mounts

  // The button under user account management will redirect to corresponding page
  const handleCreateUserAccount = () => {
    router.push("/sysAdmin");
  };

  const handleViewUserAccount = () => {
    router.push("/sysAdmin/userAccount");
  };

  const handleVerifyBusinessUserAccount = () => {
    router.push("/sysAdmin/verifyBusinessUser");
  };

  // The button under user profile management will redirect to corresponding page
  const handleViewUserProfile = () => {
    router.push("/sysAdmin/userProfile");
  };

  // The button under dietary preferences management will redirect to corresponding page
  const handleCreateDietaryPreferences = () => {
    router.push("/sysAdmin/createDietaryPreferences");
  };

  // The button under business blog post and recipes related will redirect to corresponding page
  const handleViewBlogPost = () => {
    router.push("/sysAdmin/blogPost");
  };

  const handleViewRecipes = () => {
    router.push("/sysAdmin/suspendRecipe");
  };

  return (
    <div className="bg-blue-400 min-h-screen w-full overflow-x-hidden">
      <div className="p-6">
        <p className=" text-3xl p-6">Hi, {username}</p>
        <div className="font-bold text-2xl pt-6 pl-6 pb-4">
          User Account Management:
        </div>
        <div className="flex flex-wrap pl-6 pb-4">
          <button
            className="bg-blue-700 hover:bg-blue-950 text-white rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleCreateUserAccount}
          >
            Create User Account
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-950 text-white rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleViewUserAccount}
          >
            View User Account
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-950 text-white rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleVerifyBusinessUserAccount}
          >
            Verify Business User Account
          </button>
        </div>
        <div className="font-bold text-2xl pt-6 pl-6 pb-6">
          User Profile Management:
        </div>
        <div className="flex flex-wrap pl-6 pb-4">
          <button
            className="bg-blue-700 hover:bg-blue-950 text-white rounded-md font-bold py-2 px-4 mr-4"
            onClick={handleViewUserProfile}
          >
            View User Profile
          </button>
        </div>
        <div className="font-bold text-2xl pt-6 pl-6 pb-6">
          Dietary Preferences Management:
        </div>
        <div className="flex flex-wrap pl-6 pb-4">
          <button
            className="bg-blue-700 hover:bg-blue-950 text-white rounded-md font-bold py-2 px-4 mr-4"
            onClick={handleCreateDietaryPreferences}
          >
            Create Dietary Preferences
          </button>
        </div>
        <div className="font-bold text-2xl pt-6 pl-6 pb-6">
          Business Blog Post and Recipes Related:
        </div>
        <div className="flex flex-wrap pl-6 pb-4">
          <button
            className="bg-blue-700 hover:bg-blue-950 text-white rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleViewBlogPost}
          >
            Suspend Blog Post
          </button>
          <button
            className="bg-blue-700 hover:bg-blue-950 text-white rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleViewRecipes}
          >
            Suspend Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
