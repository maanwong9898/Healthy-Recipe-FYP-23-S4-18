"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import HomeNavBar from "./components/navigation/homeNavBar";
import Link from "next/link";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import axiosInterceptorInstance from "./axiosInterceptorInstance";
import Footer from "./components/footer";
import SecureStorage from "react-secure-storage";

// fetch most popular educational contents
const fetchMostPopularEduContent = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "/landingPage/getMostPopularEducationalContents"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Fetch most popular blog posts
const fetchMostPopularBlogPosts = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "/landingPage/getMostPopularBlogs"
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch most popular blog posts:", error);
    throw error;
  }
};

// Fetch most popular Recipes
const fetchMostPopularRecipes = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "/landingPage/getMostPopularRecipes"
    );
    return response.data;
  } catch (error) {
    console.log("Failed to fetch most popular recipes: ", error);
    throw error;
  }
};

// Fetch most popular meal plans
const fetchMostPopularMealPlans = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "/landingPage/getPopularMealPlans"
    );
    return response.data;
  } catch (error) {
    console.log("Failed to fetch most popular meal plans: ", error);
    throw error;
  }
};

const Home = () => {
  const router = useRouter();
  const [currentCarouselContentIndex, setCarouselContentIndex] = useState(0);
  const [mostPopularRecipes, setMostPopularRecipes] = useState([]);
  const [mostPopularEduContents, setMostPopularEduContents] = useState([]);
  const [mostPopularBlogPosts, setMostPopularBlogPosts] = useState([]);
  const [mostPopularMealPlans, setMostPopularMealPlans] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalUserCount, setTotalUserCount] = useState([]);

  useEffect(() => {
    if (SecureStorage.getItem("token")) {
      if (SecureStorage.getItem("role") == "ADMIN") {
        router.push("/sysAdmin");
      } else if (SecureStorage.getItem("role") == "REGISTERED_USER") {
        router.push("/registeredUser");
      } else if (SecureStorage.getItem("role") == "NUTRITIONIST") {
        router.push("/nutritionist");
      } else if (SecureStorage.getItem("role") == "BUSINESS_USER") {
        router.push("/businessUser");
      }
    } else {
      setIsLoading(true);

      const getMostPopularRecipe = async () => {
        try {
          const recipeData = await fetchMostPopularRecipes();
          setMostPopularRecipes(recipeData);
        } catch (error) {
          console.log("Failed to fetch most popular recipes: ", error);
        }
      };

      const getMostPopularEduContents = async () => {
        try {
          const eduContentData = await fetchMostPopularEduContent();
          setMostPopularEduContents(eduContentData);
        } catch (error) {
          console.log("Failed to fetch educational contents: ", error);
        }
      };

      const getMostPopularBlogs = async () => {
        try {
          const blogPostData = await fetchMostPopularBlogPosts();
          setMostPopularBlogPosts(blogPostData);
        } catch (error) {
          console.log("Failed to fetch blog posts: ", error);
        }
      };

      const getMostPopularMealPlans = async () => {
        try {
          const mealPlanData = await fetchMostPopularMealPlans();
          setMostPopularMealPlans(mealPlanData);
        } catch (error) {
          console.log("Failed to fetch most popular meal plans: ", error);
        }
      };

      Promise.all([
        getMostPopularRecipe(),
        getMostPopularEduContents(),
        getMostPopularBlogs(),
        getMostPopularMealPlans(),
      ])
        .catch((error) => {
          console.error("Error in fetching data: ", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  const capitalizeFirstLetter = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  const getImageUrlFromBlob = (imgBlob) => {
    // Check if imgBlob is truthy
    if (imgBlob) {
      // Return the image URL created from the blob
      return `data:image/jpeg;base64,${imgBlob}`;
    }
    // Return an empty string or a placeholder image URL if imgBlob is not available
    return "";
  };

  // RECIPE RELATED

  // Redirect to the specific recipe page
  const handleViewRecipes = (id) => {
    // Redirect to the correct route
    let routePath = `/recipes/viewRecipe/${id}`;
    router.push(routePath);
  };

  // Function to render Recipe a single post card
  const renderRecipePostCard = (post) => (
    <div
      key={post.id}
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-stone-700 transition duration-300 ease-in-out"
      style={{
        border: "0.5px solid transparent",
        background: "#48494B",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
      onClick={() => handleViewRecipes(post.id)}
    >
      {post?.imgBlob ? (
        // If imgBlob is available, display image from blob
        <img
          className="w-full object-cover rounded-sm text-white text-center"
          src={getImageUrlFromBlob(post?.imgBlob)}
          alt={post.imgTitle}
          style={{ height: "192px" }}
        />
      ) : (
        // If imgBlob is not available, display image from imgUrl
        <img
          className="w-full object-cover rounded-sm text-white text-center"
          src={post?.img || "Not specified"}
          alt={post.imgTitle}
          style={{ height: "192px" }}
        />
      )}

      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold mb-4">{post.title}</h2>
        </div>
        {/* Description */}
        <div className="flex-grow flex items-center justify-center mb-4">
          <p className="text-gray-700 text-base line-clamp-3">
            {post.description}
          </p>
        </div>
        {/* Publisher and Ratings */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-4 mb-4">
          <p className="text-gray-700 text-sm font-semibold">
            Publisher:{" "}
            <span className="text-orange-600 font-semibold tracking-tight">
              {capitalizeFirstLetter(post?.publisher) || "Not Specified"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  // END OF RECIPE RELATED

  // BLOG POSTS RELATED
  const handleViewBlogPost = (id) => {
    // Redirect to the correct route
    let routePath = `/businessBlogPost/viewBusinessBlogPost/${id}`;
    router.push(routePath);
  };

  // Function to render blog post a single post card
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
      {post?.imgBlob ? ( // If imgBlob is available, display image from blob
        <img
          className="w-full object-cover rounded-sm text-white text-center"
          src={getImageUrlFromBlob(post?.imgBlob)}
          alt={post.imgTitle}
          style={{ height: "192px" }}
        />
      ) : (
        // If imgBlob is not available, display image from imgUrl
        <img
          className="w-full object-cover rounded-sm text-white text-center"
          src={post?.img || "Not specified"}
          alt={post.imgTitle}
          style={{ height: "192px" }}
        />
      )}

      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold mb-2">
            {post?.title || "Untitled Blog Post Title"}
          </h2>
        </div>
        {/* Description */}
        <div className="flex-grow flex items-center justify-center mb-4">
          <p className="text-gray-700 text-base line-clamp-3">
            {post.introduction}
          </p>
        </div>
        {/* Publisher and Ratings */}
        <div className="flex flex-col lg:flex-row justify-center space-x-4 mb-4">
          <p className="text-gray-700 text-sm font-semibold">
            Publisher:{" "}
            <span className="text-orange-600 font-semibold tracking-tight">
              {capitalizeFirstLetter(post?.publisher) || "Not Specified"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
  // END OF BLOG POST RELATED

  // MEAL PLAN RELATED
  const handleViewMealPlan = (id) => {
    // Make sure the Meal Plan title
    // Redirect to the correct route
    let routePath = `/mealPlan/viewMealPlan/${id}`;
    router.push(routePath);
  };

  // Function to render Meal Plan a single post card
  const renderMealPlanCard = (post) => (
    <div
      key={post.id}
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-stone-700 transition duration-300 ease-in-out"
      style={{
        border: "0.5px solid transparent",
        background: "#48494B",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
      onClick={() => handleViewMealPlan(post.id)}
    >
      {post?.imgBlob ? (
        // If imgBlob is available, display image from blob
        <img
          className="w-full object-cover rounded-sm text-white text-center"
          src={getImageUrlFromBlob(post?.imgBlob)}
          alt={post.imgTitle}
          style={{ height: "192px" }}
        />
      ) : (
        // If imgBlob is not available, display image from imgUrl
        <img
          className="w-full object-cover rounded-sm text-white text-center"
          src={post?.img || "Not specified"}
          alt={post.imgTitle}
          style={{ height: "192px" }}
        />
      )}

      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-2xl font-extrabold mb-4">{post.title}</h2>
        </div>

        {/* Description */}
        <div className="flex-grow flex items-center justify-center mb-4">
          <p className="text-gray-700 text-base line-clamp-3">
            {post.introduction}
          </p>
        </div>
        {/* Publisher and Ratings */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-4 mb-4">
          <p className="text-gray-700 text-sm font-semibold">
            Publisher:{" "}
            <span className="text-orange-600 font-semibold tracking-tight">
              {capitalizeFirstLetter(post?.publisher) || "Not Specified"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
  // END OF MEAL PLAN RELATED

  // EDUCATIONAL CONTENTS RELATED

  const handleViewEducationalContent = (id) => {
    // Make sure the Educational Content title
    // Redirect to the correct route
    let routePath = `/educationalContent/viewEducationalContent/${id}`;
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
      onClick={() => handleViewEducationalContent(post.id)}
    >
      {post?.imgBlob ? (
        // If imgBlob is available, display image from blob
        <img
          className="w-full object-cover rounded-sm text-white text-center"
          src={getImageUrlFromBlob(post?.imgBlob)}
          alt={post.imgTitle}
          style={{ height: "192px" }}
        />
      ) : (
        // If imgBlob is not available, display image from imgUrl
        <img
          className="w-full object-cover rounded-sm text-white text-center"
          src={post?.img || "Not specified"}
          alt={post.imgTitle}
          style={{ height: "192px" }}
        />
      )}

      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-extrabold mb-2">
            {post?.title || "Untitled Meal Plan"}
          </h2>
        </div>
        {/* Description */}
        <div className="flex-grow flex items-center justify-center mb-4">
          <p className="text-gray-700 text-base line-clamp-3">
            {post.introduction}
          </p>
        </div>
        {/* Publisher and Ratings */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-4 mb-4">
          <p className="text-gray-700 text-sm font-semibold">
            Publisher:{" "}
            <span className="text-orange-600 font-semibold tracking-tight">
              {capitalizeFirstLetter(post?.publisher) || "Not Specified"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );

  // END OF EDUCATIONAL CONTENTS RELATED

  // Get user counts
  const fetchUserCounts = async () => {
    try {
      const response = await axiosInterceptorInstance.get(
        "/landingPage/getRoleCount"
      );
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
    <div>
      <HomeNavBar />
      <div className="min-h-screen">
        {/* Carousel Banner */}
        <div className="max-w-[1400px] h-[480px] w-full m-auto py-6 px-2 relative group">
          {carouselContents[currentCarouselContentIndex].content ? (
            // 2-Column Layout for Images with Content
            <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full rounded-2xl bg-center bg-contain">
              <div
                style={{
                  backgroundImage: `url(${carouselContents[currentCarouselContentIndex].url})`,
                }}
                className="w-full h-full rounded-tl-2xl rounded-bl-2xl bg-center bg-cover"
              />
              <div className="md:relative p-8 bg-slate-100 border border-gray-200 lg:rounded-tr-2xl rounded-2xl">
                <h1 className="text-4xl font-bold text-black pt-3 mb-4">
                  {carouselContents[currentCarouselContentIndex].content.title}
                </h1>
                <p className="text-black text-base pt-4">
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
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full px-2 py-2 bg-black/20 text-white cursor-pointer">
            <ChevronLeftIcon onClick={prevSlide} />
          </div>

          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full px-2 py-2 bg-black/20 text-white cursor-pointer">
            <ChevronRightIcon onClick={nextSlide} />
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
                  {mostPopularRecipes.map((post) => renderRecipePostCard(post))}
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
                  Most Popular Meal Plans
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {mostPopularMealPlans.map((post) => renderMealPlanCard(post))}
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
                  src="/PokeBowl.jpg"
                  alt="Raw Pixel, Designed by Freepik"
                  className="relative w-full h-full object-cover transition-all rounded-ss-xl duration-300 hover:grayscale-0 cursor-pointer"
                  onClick={() => router.push("/aboutUs")}
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
                  src="/PokeBowl.jpg"
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
                  Most Popular Blogs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {mostPopularBlogPosts.map((post) => renderBlogPost(post))}
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
                  Top Health Insights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {mostPopularEduContents.map((post) =>
                    renderEducationContentCard(post)
                  )}
                </div>
              </div>
            </>
          )}
        </div>
        {/* End of Educational Contents cards */}
      </div>
    </div>
  );
};

export default Home;
