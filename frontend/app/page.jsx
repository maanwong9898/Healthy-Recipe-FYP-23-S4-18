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

const AllRecipesContent = [
  {
    id: "1234567890",
    recipeTitle: "Black Bean Quesadillas",
    publisher: "Jessica Smith",
    category: "Vegetarian",
    cooking_time: "15 Mins",
    number_of_servings: "4",
    description:
      "Our 'Essential Tools for the Modern Chef' guide is the definitive resource for equipping your culinary workspace with the best kitchen gadgets and utensils.",
    ingredients:
      "1 (15 ounce) can black beans rinsed and drained \n\n" +
      "1/2 cup shredded Monterey Jack cheese \n\n" +
      "1/2 cup prepared fresh salsa (see Tip), divided" +
      "4 8-inch whole-wheat tortillas" +
      "2 teaspoons canola oil, divided" +
      "1 ripe avocado, diced",
    instructions:
      "Step 1: Combine beans, cheese and 1/4 cup salsa in a medium bowl. Place tortillas on a work surface. Spread 1/2 cup filling on half of each tortilla. Fold tortillas in half, pressing gently to flatten. \n\n" +
      "Step 2: Heat 1 teaspoon oil in a large nonstick skillet over medium heat. Add 2 quesadillas and cook, turning once, until golden on both sides, 2 to 4 minutes total. Transfer to a cutting board and tent with foil to keep warm. Repeat with the remaining 1 teaspoon oil and quesadillas. Serve the quesadillas with avocado and the remaining salsa.",
    total_calories: "300g",
    sugar: "2g",
    protien: "10g",
    fat: "5g",
    carbs: "20g",
    image_url:
      "https://img.freepik.com/free-photo/lavash-stuffed-with-meat-roasted_114579-1767.jpg?w=1480&t=st=1702795934~exp=1702796534~hmac=ab42006c4dee22b75a00928f8a00c970dd0bd3cc2f6a96a4131f504aac9b0013",
    image_title: "Black Bean Quesadillas",
    date_published: "2023-09-20",
    ratings: 4.5,
    reviews: 33,
    isActive: true,
  },
  {
    id: "9876543210",
    recipeTitle: "Mango and Avocado Quinoa Salad",
    publisher: "Emily Johnson",
    category: "Vegetarian",
    cooking_time: "20 Mins",
    number_of_servings: "4",
    description:
      "A refreshing quinoa salad with the sweetness of mango, creaminess of avocado, and a zesty lime dressing.",
    ingredients:
      "1 cup cooked quinoa, cooled \n\n" +
      "1 ripe mango, diced \n\n" +
      "1 avocado, diced \n\n" +
      "1/4 cup chopped fresh cilantro \n\n" +
      "1/4 cup chopped red onion \n\n" +
      "Juice of 2 limes \n\n" +
      "2 tablespoons olive oil \n\n" +
      "Salt and pepper to taste",
    instructions:
      "Step 1: In a large bowl, combine quinoa, mango, avocado, cilantro, and red onion. \n\n" +
      "Step 2: In a small bowl, whisk together lime juice, olive oil, salt, and pepper. \n\n" +
      "Step 3: Pour dressing over quinoa mixture and toss gently to combine. Serve immediately.",
    total_calories: "280g",
    sugars: "8g",
    protien: "7g",
    fat: "10g",
    carbs: "40g",
    image_url:
      "https://img.freepik.com/free-photo/grilled-chicken-with-vegetable-pomegranate-fruits-salad-plate_74190-753.jpg?w=740&t=st=1702794617~exp=1702795217~hmac=6f9fa984507a1fc6962b17057be69ec78ef8f1faaf04765258d585a0cfebf6b9",
    image_title: "Mango and Avocado Quinoa Salad",
    date_published: "2023-09-28",
    ratings: 4.8,
    reviews: 23,
    isActive: true,
  },
  {
    id: "2468101214",
    recipeTitle: "Shrimp Cauliflower Fried Rice",
    publisher: "Alexandra Lee",
    category: "Any Diet",
    cooking_time: "25 Mins",
    number_of_servings: "4",
    description:
      "A light and flavorful dish featuring succulent shrimp and cauliflower rice, perfect for a healthy and satisfying meal.",
    ingredients:
      "1 lb medium shrimp, peeled and deveined\n\n" +
      "1 head cauliflower, grated or riced\n\n" +
      "2 tablespoons olive oil\n\n" +
      "3 cloves garlic, minced\n\n" +
      "1 cup cherry tomatoes, halved\n\n" +
      "1/2 cup green peas\n\n" +
      "1 teaspoon paprika\n\n" +
      "Salt and pepper to taste\n\n" +
      "Fresh parsley for garnish",
    instructions:
      "Step 1: In a large skillet, heat olive oil over medium heat. Add minced garlic and sauté until fragrant.\n\n" +
      "Step 2: Add shrimp to the skillet and cook until pink and opaque. Remove shrimp from the skillet and set aside.\n\n" +
      "Step 3: In the same skillet, add riced cauliflower, cherry tomatoes, and green peas. Sauté until vegetables are tender.\n\n" +
      "Step 4: Season the mixture with paprika, salt, and pepper. Stir well to combine.\n\n" +
      "Step 5: Add the cooked shrimp back to the skillet and toss everything together until heated through.\n\n" +
      "Step 6: Garnish with fresh parsley and serve hot.",
    total_calories: "280",
    sugars: "4g",
    protein: "25g",
    fat: "12g",
    carbs: "18g",
    image_url:
      "https://delightfulemade.com/wp-content/uploads/2019/08/Cauliflower-Shrimp-Fried-Rice-Cauliflower-Fried-Rice-Recipe-vert8-480x480.jpg",
    image_title: "Shrimp Cauliflower Rice",
    date_published: "2023-11-05",
    ratings: 4.7,
    reviews: 22,
    isActive: true,
  },
];

const Home = () => {
  const router = useRouter();
  const [currentCarouselContentIndex, setCarouselContentIndex] = useState(0);
  const [AllBusinessBlogPosts, setAllBusinessBlogPosts] = useState([]);
  const [reviewsAndRatings, setReviewsAndRatings] = useState([]);
  //const [AllRecipesContent, setAllRecipesContent] = useState([]);
  const [userAccounts, setUserAccounts] = useState([]);
  const [userCounts, setUserCounts] = useState({
    REGISTERED_USER: 0,
    BUSINESS_USER: 0,
    NUTRITIONIST: 0,
  });

  // Fetch user account to count the number of each user type
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

  // Fetch all blog posts
  const fetchBlogPosts = async () => {
    try {
      console.log("Fetching blog posts...");
      const response = await axiosInterceptorInstance.get("/blog/get");
      console.log("All blogs:", response.data);

      // Filter to get only business blog posts
      const filteredData = response.data.filter((post) => post.active === true);

      console.log("filtered data(educationContent == false) is:", filteredData);
      return filteredData;
      // return response.data;
    } catch (error) {
      console.error("Failed to fetch blog posts:", error);
      throw error;
    }
  };

  // Fetch all ratings and reviews for a given blogId
  const fetchBlogRatingsAndReviews = async () => {
    try {
      // Include the blogId in the URL as a query parameter
      const response = await axiosInterceptorInstance.get(`/blog/rating/get`);
      console.log("All ratings response data:", response.data);

      // Assuming response.data is the array of reviews for the given blogId
      setReviewsAndRatings(response.data);
    } catch (error) {
      console.error("Failed to fetch ratings and reviews:", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("use effect is calling");
        const fetchedBlog = await fetchBlogPosts();
        console.log("Fetched blog posts:", fetchedBlog);

        // Set the fetched data in businessBlogs state
        setAllBusinessBlogPosts(fetchedBlog);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    getData();
  }, []);

  const latestPosts = [...AllBusinessBlogPosts]
    .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
    .slice(0, 3);

  // this function is to view particular blog post
  const handleViewBlogPost = (id) => {
    // Make sure the blogPostTitle
    console.log(`Blog Title: ${id}`);

    // Redirect to the correct route
    let routePath = `/businessBlogPost/viewBusinessBlogPost/${id}`;

    router.push(routePath);
  };

  // Function to render blogs
  const renderTrendingBlogs = (post) => (
    <div
      key={post.id}
      className="flex items-center mb-4"
      onClick={() => handleViewBlogPost(post.id)}
    >
      <img
        src={post.img}
        alt="Designed by Freepik"
        className="w-36 h-36 mr-2 ml-4 rounded cursor-pointer"
      />

      <div>
        <p className="text-lg font-medium">{post.title}</p>
        <p className="text-sm text-gray-500 line-clamp-3">
          <div dangerouslySetInnerHTML={{ __html: post.info }} />
        </p>
      </div>
    </div>
  );

  // Fetch recipes from backend
  const fetchRecipes = async () => {
    try {
      console.log("Fetching recipes...");
      const response = await axiosInterceptorInstance.get("/recipes/get");
      console.log("Most Popular Recipes: ", response.data);

      const activeRecipes = response.data.filter(
        (post) => post.isActive === true
      );
      return activeRecipes;
    } catch (error) {
      console.log("Failed to fetch recipes: ", error);
    }
  };

  useEffect(() => {
    const getRecipes = async () => {
      try {
        console.log("use effect getRecipes is calling");
        const fetchedRecipes = await fetchRecipes();
        console.log("Fetched recipes:", fetchedRecipes);

        // Set the fetched data in recipes state
        setAllRecipesContent(fetchedRecipes);
      } catch (error) {
        console.error("Error while fetching data:", error);
      }
    };
    getRecipes();
  }, []);

  console.log("AllRecipesContent:", AllRecipesContent);

  const latestRecipes = [...AllRecipesContent]
    .sort((a, b) => new Date(b.createdDT) - new Date(a.createdDT))
    .slice(0, 3);

  // this function is to view particular recipe under registered user
  const handleViewRecipes = (recipeTitle) => {
    // Make sure the recipeTitle
    console.log(`Recipe Title: ${recipeTitle}`);

    // Redirect to the correct route
    let routePath = `/recipes/viewRecipe/${recipeTitle}`;

    router.push(routePath);
  };

  // NEED TO CONNECT TO BACKEND STILL
  // Function to render Recipe a single post card
  const renderRecipePostCard = (post) => (
    <div
      key={post.id}
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col"
    >
      {/* Image */}
      <img
        src={post.imgl}
        alt="recipe alt"
        className="w-full h-48 rounded-t-lg object-cover"
        style={{ height: "192px" }}
      />
      <div className="flex flex-grow flex-col justify-between p-5">
        <div>
          {/* Title */}
          <h2 className="mb-3 text-2xl font-bold text-gray-900">
            {post.title}
          </h2>
          {/* Description */}
          <p
            className="mb-3 text-base text-gray-700 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            {post.description}
          </p>
        </div>
        {/* Read more button */}
        <button
          onClick={() => handleViewRecipes(post.recipeTitle)}
          className="inline-block px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 hover:bg-blue-700 rounded-xl"
        >
          Read more
        </button>
      </div>
    </div>
  );

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
          <div className="p-5">
            <h2 className="text-4xl font-extrabold font-serif mb-4 mt-4 text-black">
              Most Popular Recipes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {latestRecipes.map((post) => renderRecipePostCard(post))}
            </div>
          </div>
        </div>
        {/* End of most popular recipe cards */}

        {/* Featured Recipe - single feature*/}
        <div className="p-5 relative group">
          <div className="grid grid-cols-2">
            <div className="relative">
              <h2 className="text-4xl font-bold text-gray-800 text-center p-4">
                #1 Most Featured Recipe
              </h2>
              <div className="overlay-container relative overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=1426&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="image description"
                  className="h-auto max-w-full rounded-lg mb-4 sm:mb-0 bg-blend"
                />
                <div className="overlay absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div className="rounded-lg text-overlay bg-white bg-opacity-70 p-20 text-center text-gray-900">
                    <Link href="" className="hover:underline">
                      <h3 className="text-2xl font-bold">
                        *INSERT RECIPE TITLE HERE*
                      </h3>
                    </Link>
                    <p>*Enter description of recipe here</p>
                    {/* Add your links here */}
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-7">
              {/* Trending Box */}
              <div className="bg-slate-100 p-4 rounded-lg">
                <h2 className="font-semibold text-4xl text-left p-4 mb-5">
                  Trending Blogs
                </h2>
                {latestPosts.map((post) => renderTrendingBlogs(post))}
              </div>
            </div>
          </div>
        </div>
        {/* End of featured and trending box */}

        {/* Latest meal plan card*/}
        <div>
          <div className="p-5">
            <h2 className="text-4xl font-extrabold font-serif mb-4 mt-4 text-black">
              Latest Meal Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {latestRecipes.map((post) => renderRecipePostCard(post))}
            </div>
          </div>
        </div>
        {/* End of latest meal plans cards */}
        {/* Dynamic banner on active users */}
        <div className="mt-9">
          <div className="bg-zinc-50 h-[400px] rounded-lg overflow-hidden">
            <div className="grid grid-cols-2 gap-8 p-5 mt-10">
              {/* Left Column */}
              <div className="flex flex-col justify-center items-center">
                <h2 className="font-bold text-4xl mb-4 text-center">
                  Our Mission
                </h2>
                <p className="text-gray-700 text-center text-xl">
                  Welcome to My Healthy Recipe, your number-one source for
                  healthy and delicious recipes. We're dedicated to providing
                  nutritional, delicious, and easy-to-make recipes. Committed to
                  your well-being, we follow HPB's guidelines for daily sodium
                  intake to ensure that every recipe aligns with the highest
                  nutritional standards. More than just a collection of recipes,
                  our commitment to health is ingrained in every dish we create.
                </p>
              </div>

              {/* Right Column */}
              <div className="hidden md:flex flex-col items-center">
                {/* Dynamic user profiles */}
                <div className="flex flex-col p-6 ml-16">
                  <h2 className="text-center items-center font-bold text-2xl text-black">
                    With Over 100+ Recipes to Browse!
                  </h2>
                  <div className="flex grid-rows-4 mt-8 space-x-5 gap-4">
                    <div className="bg-white p-4 rounded-full w-32 h-32 flex flex-col justify-center items-center">
                      <p className="text-orange-600 text-lg md:text-xl font-bold text-center">
                        {userCounts.REGISTERED_USER}
                      </p>
                      <p className="text-black text-center">Active Users</p>
                    </div>
                    <div className="bg-white p-4 rounded-full w-32 h-32 flex flex-col justify-center items-center">
                      <p className="text-orange-600 text-lg md:text-xl font-bold text-center">
                        {userCounts.BUSINESS_USER}
                      </p>
                      <p className="text-black text-center">
                        Business Partners
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-full w-32 h-32 flex flex-col justify-center items-center">
                      <p className="text-orange-600 text-lg md:text-xl font-bold text-center">
                        {userCounts.NUTRITIONIST}
                      </p>
                      <p className="text-black text-center">Nutritionist</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End of Dynamic banner on active users */}
        {/* Educational Contents card*/}
        <div>
          <div className="p-5">
            <h2 className="text-4xl font-extrabold font-serif mb-4 mt-4 text-black">
              Educational Contents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {latestRecipes.map((post) => renderRecipePostCard(post))}
            </div>
          </div>
        </div>
        {/* End of Educational Contents cards */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
