"use client";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";

const ViewPersonalRecipe = ({ params }) => {
  const [recipes, setRecipes] = useState([]);
  const [userAccount, setUserAccount] = useState({});
  const router = useRouter();

  // Fetch user data
  useEffect(() => {
    const viewUserDashboard = async () => {
      try {
        const userId = localStorage.getItem("userId");
        const token = localStorage.getItem("token");

        if (!userId || !token) {
          console.error("User ID or token not found in local storage");
          return;
        }

        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };

        const response = await axiosInterceptorInstance.get(
          `/register/dashboard/${userId}`,
          config
        );

        setUserAccount(response.data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };

    viewUserDashboard();
  }, [params.id]);

  // Fetch personalized recipes based on user's dietary preferences and allergies
  useEffect(() => {
    const getPersonalRecipe = async () => {
      try {
        const recipesResponse = await axiosInterceptorInstance.get(
          `/recipe/get`
        );

        const filteredData = recipesResponse.data.filter(
          (recipe) => recipe.active === true
        );
        let filteredRecipes = filteredData;

        // Filter based on dietary preferences
        if (userAccount.dietaryPreferences) {
          filteredRecipes = filteredRecipes.filter(
            (recipe) =>
              recipe.dietaryPreferences?.id ===
              userAccount.dietaryPreferences.id
          );
        }

        // Filter out recipes that match the user's allergies
        if (userAccount.allergies && userAccount.allergies.length > 0) {
          const userAllergyIds = userAccount.allergies.map(
            (allergy) => allergy.id
          );
          filteredRecipes = filteredRecipes.filter(
            (recipe) =>
              !recipe.allergies.some((allergy) =>
                userAllergyIds.includes(allergy.id)
              )
          );
        }

        setRecipes(filteredRecipes);
      } catch (error) {
        console.error("Error fetching recipes", error);
      }
    };

    if (Object.keys(userAccount).length > 0) {
      getPersonalRecipe();
    }
  }, [userAccount]);

  //  Render each recipe post card
  const renderPostCard = (post) => (
    <div
      key={post.id}
      className="rounded-lg shadow-lg overflow-hidden flex flex-col"
      style={{
        border: "0.5px solid transparent",
        background:
          "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
    >
      <img
        src={post.img}
        alt={post.img_title}
        className="w-full object-cover rounded-sm"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div>
          <h2
            className="text-2xl font-extrabold mb-2 hover:text-orange-600 cursor-pointer"
            onClick={() => handleViewRecipe(post.id)}
          >
            {post.title}
          </h2>
          <div
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            <div className="whitespace-pre-line">{post.description}</div>
          </div>
        </div>
        {/* <div className="flex justify-between items-center">
          <div className="flex items-center text-red-700 font-semibold text-xl">
            {post.blogType.subcategoryName}
          </div>
        </div> */}
      </div>
    </div>
  );

  const handleViewRecipe = (id) => {
    console.log(`Recipe Title: ${id}`);
    let routePath = `/registeredUser/recipes/viewRecipe/${id}`;
    router.push(routePath);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-5 ml-5 mt-10">
        <h1 className="text-2xl text-center md:text-5xl font-extrabold font-sans text-gray-900 mb-4 md:mb-8">
          Your Personal Recipe Recommendation
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recipes.map((post) => renderPostCard(post))}
        </div>
      </div>
    </div>
  );
};

export default ViewPersonalRecipe;
