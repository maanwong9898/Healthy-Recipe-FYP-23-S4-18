"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import HomeNavBar from "./components/navigation/homeNavBar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import axiosInterceptorInstance from "./axiosInterceptorInstance";
import Footer from "./components/footer";

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

const Home = () => {
  const router = useRouter();
  const [currentCarouselContentIndex, setCarouselContentIndex] = useState(0);
  const [AllBusinessBlogPosts, setAllBusinessBlogPosts] = useState([]);
  const [AllRecipes, setAllRecipes] = useState([]);
  const [AllEducationalContents, setAllEducationalContents] = useState([]);
  const [AllMealPlans, setAllMealPlans] = useState([]);
  const [MostPopularRecipes, setMostPopularRecipes] = useState([]);
  const [userAccounts, setUserAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userCounts, setUserCounts] = useState({
    REGISTERED_USER: 0,
    BUSINESS_USER: 0,
    NUTRITIONIST: 0,
  });

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
    let routePath = `/recipes/viewRecipe/${id}`;
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
    let routePath = `/businessBlogPost/viewBusinessBlogPost/${id}`;
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
    let routePath = `/mealPlan/viewMealPlan/${id}`;
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
    let routePath = `/educationalContent/viewEducationalContent/${id}`;
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

  // Get all user accounts
  const fetchUserAccounts = async () => {
    console.log("Fetching user accounts...");
    try {
      const response = await axiosInterceptorInstance.get(
        "/systemAdmin/getAllUsers"
      );
      console.log("User Accounts: ", response.data);
      setUserAccounts(response.data);
      countUserRoles(response.data);
    } catch (error) {
      console.log("Failed to fetch user accounts: ", error);
    }
  };

  // Filter and count the number of users for each role
  const countUserRoles = (users) => {
    const counts = {
      REGISTERED_USER: users.filter((user) => user.role === "REGISTERED_USER")
        .length,
      BUSINESS_USER: users.filter((user) => user.role === "BUSINESS_USER")
        .length,
      NUTRITIONIST: users.filter((user) => user.role === "NUTRITIONIST").length,
    };
    setUserCounts(counts);
  };

  useEffect(() => {
    fetchUserAccounts();
  }, []);

  // Carousel banner contents
  const carouselContents = [
    {
      url: "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      url: "/banner2.jpg",
      content: {
        title: "Sign up with us",
        text: "Transform your health journey at My Healthy Recipe! Register for personalized access to a variety of healthy recipes, meal plans, and expert content tailored to your goals. Businesses and Nutritionist, elevate your brand and reach a health-conscious audience on our platform. Showcase expertise, share recipes, and grow your influence. Join now for a healthier, thriving community!",
        button: "Join Us Now",
      },
    },
    {
      url: "https://images.unsplash.com/photo-1555243896-c709bfa0b564?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Carousel slider
  const prevSlide = () => {
    const firstSlide = currentCarouselContentIndex === 0;
    const newIndex = firstSlide
      ? carouselContents.length - 1
      : currentCarouselContentIndex - 1;
    setCarouselContentIndex(newIndex);
  };

  const nextSlide = () => {
    const lastSlide =
      currentCarouselContentIndex === carouselContents.length - 1;
    const newIndex = lastSlide ? 0 : currentCarouselContentIndex + 1;
    setCarouselContentIndex(newIndex);
  };

  const handleSignupBtnClick = () => {
    router.push("/registration");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCarouselContentIndex(
        (prevSlide) => (prevSlide + 1) % carouselContents.length
      );
    }, 10000);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

  return (
    <div>
      <HomeNavBar />
      <div className="min-h-screen">
        {/* Carousel Banner */}
        <div className="max-w-[1400px] h-[480px] w-full m-auto py-6 px-2 relative group">
          {carouselContents[currentCarouselContentIndex].content ? (
            // 2-Column Layout for Images with Content
            <div className="grid grid-cols-2 w-full h-full rounded-2xl bg-center bg-contain">
              <div
                style={{
                  backgroundImage: `url(${carouselContents[currentCarouselContentIndex].url})`,
                }}
                className="w-full h-full rounded-tl-2xl rounded-bl-2xl bg-center bg-cover"
              />
              <div className="w-full h-full bg-slate-100 rounded-tr-2xl rounded-br-2xl p-6">
                <h1 className="text-4xl font-bold text-black pt-3 mb-4">
                  {carouselContents[currentCarouselContentIndex].content.title}
                </h1>
                <p className="text-black text-lg pt-4">
                  {carouselContents[currentCarouselContentIndex].content.text}
                </p>
                <button
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition"
                  onClick={handleSignupBtnClick}
                >
                  {carouselContents[currentCarouselContentIndex].content.button}
                </button>
              </div>
            </div>
          ) : (
            // Default Layout for Images without Content
            <div
              style={{
                backgroundImage: `url(${carouselContents[currentCarouselContentIndex].url})`,
              }}
              className="w-full h-full rounded-2xl bg-center bg-cover"
            ></div>
          )}

          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} />
          </div>

          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} />
          </div>
        </div>
        {/* End of carousel banner */}

        {/* Most popular recipe card */}
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

        {/* Dynamic banner on active users */}
        <div className="p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
            <div className="flex flex-col justify-between p-8 leading-normal">
              <div className="relative">
                <img
                  src="/pokeBowl.jpg"
                  alt="Raw Pixel, Designed by Freepik"
                  className="relative w-full h-full object-cover rounded-xl transition-all duration-300 hover:grayscale-0 cursor-pointer"
                />
                <div className="absolute inset-0 left-0 w-full h-full flex flex-col justify-end items-center">
                  <div className="bg-zinc-100 p-6 rounded-b-lg opacity-90">
                    <h2 className="text-3xl font-semibold text-gray-900 text-center">
                      Our Mission
                    </h2>
                    <p className="text-gray-700">
                      Welcome to My Healthy Recipe, your number-one source for
                      healthy and delicious recipes. We're dedicated to
                      providing nutritional, delicious, and easy-to-make
                      recipes. Committed to your well-being, we follow HPB's
                      guidelines for daily sodium intake to ensure that every
                      recipe aligns with the highest nutritional standards. More
                      than just a collection of recipes, our commitment to
                      health is ingrained in every dish we create.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div className="relative">
              {/* Dynamic user profiles */}
              <div className="grid grid-rows-2 p-6">
                <h2 className="text-center items-center justify-center font-bold font-serif text-5xl text-black">
                  With Over 100+ Healthy Recipes
                </h2>
                <div className="grid grid-cols-3 justify-center mt-8 md:justify-start md:mt-0 bg-orange-300 rounded-xl py-5">
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-white p-4 rounded-full w-32 h-32 flex flex-col justify-center items-center">
                      <p className="text-orange-600 text-lg md:text-xl font-bold text-center">
                        {userCounts.REGISTERED_USER}
                      </p>
                      <p className="text-gray-900 font-sans font-medium text-center">
                        Active Users
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-white p-4 rounded-full w-32 h-32 flex flex-col justify-center items-center">
                      <p className="text-orange-600 text-lg md:text-xl font-bold text-center">
                        {userCounts.BUSINESS_USER}
                      </p>
                      <p className="text-gray-900 font-sans font-medium text-center">
                        Business Partners
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <div className="bg-white p-4 rounded-full w-32 h-32 flex flex-col justify-center items-center">
                      <p className="text-orange-600 text-lg md:text-xl font-bold text-center">
                        {userCounts.NUTRITIONIST}
                      </p>
                      <p className="text-gray-900 font-sans font-medium text-center">
                        Nutritionist
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Dynamic banner on active users */}

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
        {/* Most Popular Blogs*/}

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

      <Footer />
    </div>
  );
};

export default Home;
