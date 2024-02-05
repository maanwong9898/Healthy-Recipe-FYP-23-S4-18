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
  const [totalUserCount, setTotalUserCount] = useState([]);
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
          <p className="text-gray-700 text-base mb-4 line-clamp-3">
            {post.info}
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
          <p className="text-gray-700 text-base mb-4 line-clamp-3">
            {post.info}
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

  // END OF EDUCATIONAL CONTENTS RELATED

  // Get user counts
  const fetchUserCounts = async () => {
    console.log("Fetching user accounts...");
    try {
      const response = await axiosInterceptorInstance.get(
        "/landingPage/getRoleCount"
      );
      console.log("User Role Counts: ", response.data);
      setTotalUserCount(response.data);
    } catch (error) {
      console.log("Failed to fetch user role counts: ", error);
    }
  };

  useEffect(() => {
    fetchUserCounts();
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
    <div className="min-h-screen">
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
              {/* Mobile View */}
              <div className="bg-white border border-gray-200 rounded-xl shadow lg:hidden">
                <img
                  src="/pokeBowl.jpg"
                  alt="Raw Pixel, Designed by Freepik"
                  className="relative w-full h-full object-cover transition-all rounded-ss-xl duration-300 hover:grayscale-0 cursor-pointer"
                />
                <div className="p-5">
                  <h2 className="text-3xl font-semibold text-gray-900 text-center">
                    Our Mission
                  </h2>
                  <p className="text-gray-700">
                    Welcome to My Healthy Recipe, your number-one source for
                    healthy and delicious recipes. We're dedicated to providing
                    nutritional, delicious, and easy-to-make recipes. Committed
                    to your well-being, we follow HPB's guidelines for daily
                    sodium intake to ensure that every recipe aligns with the
                    highest nutritional standards. More than just a collection
                    of recipes, our commitment to health is ingrained in every
                    dish we create.
                  </p>
                </div>
              </div>
              {/*End of Mobile View */}

              {/* Large Screen View */}
              <div className="relative hidden lg:block">
                <img
                  src="/pokeBowl.jpg"
                  alt="Raw Pixel, Designed by Freepik"
                  className="relative w-full h-full object-cover rounded-xl transition-all duration-300 hover:grayscale-0 cursor-pointer"
                  onClick={() => router.push("/aboutUs")}
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
              {/* End of Large Screen View */}
            </div>
            {/* Right Column */}
            <div className="relative">
              {/* Dynamic user profiles */}
              <div className="grid grid-rows-2 p-6">
                <h2 className="text-center items-center place-content-center justify-center font-bold font-serif text-5xl text-black">
                  With Over 100+ Healthy Recipes
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:justify-start md:mt-0 bg-orange-300 rounded-xl py-5">
                  {totalUserCount
                    .filter((user) => user.role !== "ADMIN")
                    .map((user) => (
                      <div
                        className="flex flex-col justify-center items-center"
                        key={user.role}
                      >
                        <div className="bg-white p-4 rounded-full w-32 h-32 flex flex-col justify-center items-center">
                          <p className="text-orange-600 text-lg md:text-xl font-bold text-center">
                            {user.count}
                          </p>
                          <p className="text-gray-900 font-sans font-medium text-center">
                            {user.role === "REGISTERED_USER" && "Users"}
                            {user.role === "NUTRITIONIST" &&
                              "Certified Nutritionist"}
                            {user.role === "BUSINESS_USER" &&
                              "Business Partners"}
                          </p>
                        </div>
                      </div>
                    ))}
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
