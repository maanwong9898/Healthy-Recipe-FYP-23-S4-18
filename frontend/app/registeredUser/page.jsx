"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import axiosInterceptorInstance from "../axiosInterceptorInstance";

// Fetch most popular Recipes
const fetchMostPopularRecipes = async () => {
  try {
    console.log("Fetching most popular recipes...");
    const response = await axiosInterceptorInstance.get(
      "/recipe/getPopularRecipes"
    );
    console.log("Most Popular Recipes: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to fetch most popular recipes: ", error);
    throw error;
  }
};

// fetch all recipes
// const fetchRecipes = async () => {
//   try {
//     console.log("Fetching recipes...");
//     const response = await axiosInterceptorInstance.get("/recipe/get");
//     console.log("All Recipes: ", response.data);
//     return response.data;
//   } catch (error) {
//     console.log("Failed to fetch recipes: ", error);
//     throw error;
//   }
// };

// fetch all educational contents
const fetchEducationalContents = async () => {
  try {
    console.log("Fetching educational contents...");
    const response = await axiosInterceptorInstance.get(
      "/educationalContent/get"
    );
    console.log("Educational Contents: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to fetch educational contents: ", error);
    throw error;
  }
};

// Fetch all blog posts
const fetchBlogPosts = async () => {
  try {
    console.log("Fetching blog posts...");
    const response = await axiosInterceptorInstance.get("/blog/get");
    console.log("All blogs:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw error;
  }
};

const fetchMealPlans = async () => {
  try {
    console.log("Fetching meal plans...");
    const response = await axiosInterceptorInstance.get("/mealPlan/get");
    console.log("Meal Plans: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to fetch meal plans: ", error);
    throw error;
  }
};

const RegisteredUserHomepage = () => {
  const router = useRouter();
  const [AllBusinessBlogPosts, setAllBusinessBlogPosts] = useState([]);
  const [AllEducationalContents, setAllEducationalContents] = useState([]);
  const [AllMealPlans, setAllMealPlans] = useState([]);
  const [MostPopularRecipes, setMostPopularRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchMostPopularRecipesData = async () => {
      try {
        const mostPopularRecipesData = await fetchMostPopularRecipes();
        setMostPopularRecipes(mostPopularRecipesData);
      } catch (error) {
        console.log("Failed to fetch most popular recipes: ", error);
      }
    };

    const fetchAllEducationalContents = async () => {
      try {
        const allEducationalContentsData = await fetchEducationalContents();
        setAllEducationalContents(allEducationalContentsData);
      } catch (error) {
        console.log("Failed to fetch educational contents: ", error);
      }
    };

    const fetchAllBlogPosts = async () => {
      try {
        const allBlogPosts = await fetchBlogPosts();
        setAllBusinessBlogPosts(allBlogPosts);
      } catch (error) {
        console.log("Failed to fetch blog posts: ", error);
      }
    };

    const fetchAllMealPlans = async () => {
      try {
        const allMealPlansData = await fetchMealPlans();
        setAllMealPlans(allMealPlansData);
      } catch (error) {
        console.log("Failed to fetch meal plans: ", error);
      }
    };

    Promise.all([
      fetchMostPopularRecipesData(),
      fetchAllEducationalContents(),
      fetchAllBlogPosts(),
      fetchAllMealPlans(),
    ])
      .catch((error) => {
        console.error("Error in fetching data: ", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // RECIPE RELATED
  // const latestRecipes = [...AllRecipes]
  //   .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
  //   .slice(0, 3);

  const recipeLimit = [...MostPopularRecipes].slice(0, 3);

  // Redirect to the specific recipe page
  const handleViewRecipes = (id) => {
    // Make sure the recipeTitle
    console.log(`Recipe Title: ${id}`);
    // Redirect to the correct route
    let routePath = `/registeredUser/recipes/viewRecipe/${id}`;
    router.push(routePath);
  };

  // Function to render Recipe a single post card
  const renderRecipePostCard = (post) => (
    <div
      key={post.id}
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col"
    >
      {/* Image */}
      <img
        src={post.img}
        alt={post.img_title}
        className="w-full h-48 rounded-t-lg object-cover"
        style={{ height: "192px" }}
      />
      <div className="flex flex-grow flex-col justify-between p-5">
        <div>
          {/* Title */}
          <h2
            className="text-2xl font-extrabold mb-2 hover:text-orange-600 cursor-pointer"
            onClick={() => handleViewRecipes(post.id)}
          >
            {post.title}
          </h2>
          {/* Description */}
          <p
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            {post.description}
          </p>
        </div>
      </div>
    </div>
  );

  // END OF RECIPE RELATED

  // BLOG POSTS RELATED
  const latestBlogs = [...AllBusinessBlogPosts]
    .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
    .slice(0, 3);

  const handleViewBlogPost = (id) => {
    // Make sure the Blog title
    console.log(`Blog Title: ${id}`);
    // Redirect to the correct route
    let routePath = `/registeredUser/businessBlogPost/viewBusinessBlogPost/${id}`;
    router.push(routePath);
  };

  // Function to render Recipe a single post card
  const renderBlogPost = (post) => (
    <div
      key={post.id}
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col"
    >
      {/* Image */}
      <img
        src={post.img}
        alt={post.img_title}
        className="w-full h-48 rounded-t-lg object-cover"
        style={{ height: "192px" }}
      />
      <div className="flex flex-grow flex-col justify-between p-5">
        <div>
          {/* Title */}
          <h2
            className="text-2xl font-extrabold mb-2 hover:text-orange-600 cursor-pointer"
            onClick={() => handleViewBlogPost(post.id)}
          >
            {post.title}
          </h2>
          {/* Description */}
          <p
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            {post.info}
          </p>

          {/* Category */}
        </div>
      </div>
    </div>
  );
  // END OF BLOG POST RELATED

  // MEAL PLAN RELATED
  const latestMealPlans = [...AllMealPlans]
    .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
    .slice(0, 3);

  const handleViewMealPlan = (id) => {
    // Make sure the Meal Plan title
    console.log(`Meal Plan Title: ${id}`);
    // Redirect to the correct route
    let routePath = `/registeredUser/mealPlan/viewMealPlan/${id}`;
    router.push(routePath);
  };

  // Function to render Meal Plan a single post card
  const renderMealPlanCard = (post) => (
    <div
      key={post.id}
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col"
    >
      {/* Image */}
      <img
        src={post.img}
        alt={post.img_title}
        className="w-full h-48 rounded-t-lg object-cover"
        style={{ height: "192px" }}
      />
      <div className="flex flex-grow flex-col justify-between p-5">
        <div>
          {/* Title */}
          <h2
            className="text-2xl font-extrabold mb-2 hover:text-orange-600 cursor-pointer"
            onClick={() => handleViewMealPlan(post.id)}
          >
            {post.title}
          </h2>
          {/* Description */}
          <p
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            {post.introduction}
          </p>
        </div>
      </div>
    </div>
  );
  // END OF MEAL PLAN RELATED

  // EDUCATIONAL CONTENTS RELATED
  const latestEducationalContents = [...AllEducationalContents]
    .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
    .slice(0, 3);

  const handleViewEducationalContent = (id) => {
    // Make sure the Educational Content title
    console.log(`Educational Content Title: ${id}`);
    // Redirect to the correct route
    let routePath = `/registeredUser/educationalContent/viewEducationalContent/${id}`;
    router.push(routePath);
  };

  const renderEducationContentCard = (post) => (
    <div
      key={post.id}
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col"
    >
      {/* Image */}
      <img
        src={post.img}
        alt={post.img_title}
        className="w-full h-48 rounded-t-lg object-cover"
        style={{ height: "192px" }}
      />
      <div className="flex flex-grow flex-col justify-between p-5">
        <div>
          {/* Title */}
          <h2
            className="text-2xl font-extrabold mb-2 hover:text-orange-600 cursor-pointer"
            onClick={() => handleViewEducationalContent(post.id)}
          >
            {post.title}
          </h2>
          {/* Description */}
          <p
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            {post.info}
          </p>
        </div>
      </div>
    </div>
  );
  // END OF EDUCATIONAL CONTENTS RELATED

  return (
    <div>
      <div>
        {isLoading ? (
          <div className="text-xl text-center p-4">
            <p>Please wait. It'll just take a moment.</p>
          </div>
        ) : (
          <>
            <div className="p-5">
              <h2 className="text-4xl font-extrabold font-serif mb-4 mt-4 text-black">
                Most Popular Recipes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {recipeLimit.map((post) => renderRecipePostCard(post))}
              </div>
            </div>
          </>
        )}
      </div>
      {/* End of most popular recipe cards */}

      {/* Latest meal plan card*/}
      <div>
        {isLoading ? (
          <div className="text-xl text-center p-4">
            <p>Please wait. It'll just take a moment.</p>
          </div>
        ) : (
          <>
            <div className="p-5">
              <h2 className="text-4xl font-extrabold font-serif mb-4 mt-4 text-black">
                Latest Meal Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {latestMealPlans.map((post) => renderMealPlanCard(post))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* End of latest meal plans cards */}

      {/* Most Popular Blogs*/}
      <div>
        {isLoading ? (
          <div className="text-xl text-center p-4">
            <p>Please wait. It'll just take a moment.</p>
          </div>
        ) : (
          <>
            <div className="p-5">
              <h2 className="text-4xl font-extrabold font-serif mb-4 mt-4 text-black">
                Blogs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {latestBlogs.map((post) => renderBlogPost(post))}
              </div>
            </div>
          </>
        )}
      </div>
      {/* End of most popular blogs cards */}

      {/* Educational Contents card*/}
      <div>
        {isLoading ? (
          <div className="text-xl text-center p-4">
            <p>Please wait. It'll just take a moment.</p>
          </div>
        ) : (
          <>
            <div className="p-5">
              <h2 className="text-4xl font-extrabold font-serif mb-4 mt-4 text-black">
                Educational Contents
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {latestEducationalContents.map((post) =>
                  renderEducationContentCard(post)
                )}
              </div>
            </div>
          </>
        )}
      </div>
      {/* End of Educational Contents cards */}
    </div>
  );
};

export default RegisteredUserHomepage;
