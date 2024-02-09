"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import axiosInterceptorInstance from "../axiosInterceptorInstance";
import RegisteredUserNavBar from "../components/navigation/registeredUserNavBar";
import SecureStorage from "react-secure-storage";

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
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (
      !SecureStorage.getItem("token") ||
      SecureStorage.getItem("role") !== "REGISTERED_USER"
    ) {
      // clear the secure storage
      SecureStorage.clear();
      console.log("Redirecting to home page");
      router.push("/");
    } else {
      setIsChecking(false);

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
    }
  }, []);

  if (isChecking) {
    return (
      <div>
        <p>Checking...</p>
      </div>
    );
  }

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
          <p className="text-gray-700 text-base mb-4 line-clamp-3">
            {post.description}
          </p>
          {/* Publisher */}
          <p
            className="text-gray-900 text-base font-semibold"
            style={{ height: "3.5rem" }}
          >
            Publisher:{" "}
            <span className="text-orange-600 font-bold tracking-tight">
              {post?.publisher || "Not Specified"}
            </span>
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
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-stone-700 transition duration-300 ease-in-out"
      style={{
        border: "0.5px solid transparent",
        background: "#48494B",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
      onClick={() => handleViewBlogPost(post.id)}
    >
      <img
        src={post.img}
        alt={post.imgTitle}
        className="w-full object-cover rounded-sm text-white text-center"
        style={{ height: "192px" }}
      />

      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div className="grid grid-rows-3 items-center">
          <h2
            className="text-2xl font-extrabold mb-2"
            //onClick={() => handleViewBlogPost(post.id)}
          >
            {post?.title || "Untitled Blog Post"}
          </h2>
          <p className="text-gray-700 text-base mb-4 line-clamp-3">
            <div className="whitespace-pre-line">{post.info}</div>
          </p>
          {/* Publisher */}
          <p className="text-gray-900 text-base font-semibold">
            Publisher:{" "}
            <span className="text-orange-600 font-bold tracking-tight">
              {post?.publisher || "Not Specified"}
            </span>
          </p>

          {/* <div className="flex justify-between items-center">
              <div className="flex items-center text-red-700 font-semibold text-xl">
                {post.blogType.subcategoryName}
              </div>
            </div> */}
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
          <p className="text-gray-700 text-base mb-4 line-clamp-3">
            {post.introduction}
          </p>

          {/* Publisher */}
          <p
            className="text-gray-900 text-base font-semibold"
            style={{ height: "3.5rem" }}
          >
            Publisher:{" "}
            <span className="text-orange-600 font-bold tracking-tight">
              {post?.publisher || "Not Specified"}
            </span>
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
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-stone-700 transition duration-300 ease-in-out"
      style={{
        border: "0.5px solid transparent",
        background: "#48494B",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
      onClick={() => handleViewEduContent(post.id)}
    >
      <img
        src={post.img}
        alt={post.img_title}
        className="w-full object-cover rounded-sm text-white text-center"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div className="grid grid-rows-3 items-center">
          <h2
            className="text-2xl font-extrabold mb-2"
            //onClick={() => handleViewEduContent(post.id)}
          >
            {post?.title || "Untitled Educational Content"}
          </h2>
          <p className="text-gray-700 text-base mb-4 line-clamp-3">
            <div className="whitespace-pre-line">{post.info}</div>
          </p>
          {/* Publisher */}
          <p className="text-gray-900 text-base font-semibold">
            Publisher:{" "}
            <span className="text-orange-600 font-bold tracking-tight">
              {post?.publisher || "Not Specified"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
  // END OF EDUCATIONAL CONTENTS RELATED

  return (
    <div>
      <div>
        {isLoading && isChecking ? (
          <div className="text-xl text-center p-4">
            <p>Please wait. It'll just take a moment.</p>
          </div>
        ) : (
          <>
            <div className="p-5">
              <RegisteredUserNavBar />
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
