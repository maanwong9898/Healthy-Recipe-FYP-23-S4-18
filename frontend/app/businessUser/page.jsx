"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// home page for business user
// router path: /businessUser

const BusinessUserHomePage = () => {
  const [username, setUsername] = useState("");
  const router = useRouter();

  useEffect(() => {
    // This code runs only on the client side
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []); // Empty dependency array ensures this runs once after component mounts

  // The button under business blog post will redirect to corresponding page
  const handleCreateBlogPost = () => {
    router.push("/businessUser/businessBlogPost/createBusinessBlogPost");
  };

  const handleViewBlogPost = () => {
    router.push("/businessUser/businessBlogPost");
  };

  // The button under recipe will redirect to corresponding page
  const handleCreateRecipe = () => {
    router.push("/businessUser/createRecipe");
  };

  const handleViewRecipes = () => {
    router.push("/businessUser/recipe");
  };

  // The button under educational content will redirect to corresponding page
  const handleCreateEducationalContent = () => {
    router.push("/businessUser/createEducationalContent");
  };

  const handleViewEducationalContent = () => {
    router.push("/businessUser/educationalContent");
  };

  return (
    <div className="bg-cyan-800 min-h-screen w-full overflow-x-hidden">
      <div className="p-6 text-white">
        <p className=" text-4xl p-6">
          Welcome Back, {username}! Ready to grow your audience?
        </p>
        <div className=" text-2xl font-bold pt-6 pl-6 pb-4">
          Ready to create business blog posts to promote your business?
        </div>
        <div className="flex flex-wrap pl-6 pb-4">
          <button
            className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black  rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleCreateBlogPost}
          >
            Create Blog Post
          </button>
          <button
            className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black  rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleViewBlogPost}
          >
            View My Blog Posts
          </button>
        </div>
        <div className=" text-2xl pt-6 pl-6 pb-6">
          Ready to publish your recipes?
        </div>
        <div className="flex flex-wrap pl-6 pb-4">
          <button
            className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black  rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleCreateRecipe}
          >
            Create Recipe
          </button>
          <button
            className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black  rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleViewRecipes}
          >
            View My Recipes
          </button>
        </div>
        <div className=" text-2xl pt-6 pl-6 pb-6">
          Ready to publish new educational content to the public?
        </div>
        <div className="flex flex-wrap pl-6 pb-4">
          <button
            className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black  rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleCreateEducationalContent}
          >
            Create Educational Content
          </button>
          <button
            className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black  rounded-md font-bold py-2 px-4 mr-10 mb-4"
            onClick={handleViewEducationalContent}
          >
            View My Educational Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessUserHomePage;
