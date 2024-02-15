"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import axiosInterceptorInstance from "../axiosInterceptorInstance";
import RegisteredUserNavBar from "../components/navigation/registeredUserNavBar";
import SecureStorage from "react-secure-storage";

// fetch most popular educational contents
const fetchMostPopularEduContent = async () => {
  try {
    console.log("Fetching most popular educational contents...");
    const response = await axiosInterceptorInstance.get(
      "/landingPage/getMostPopularEducationalContents"
    );
    console.log("Most Popular Educational Contents: ", response.data);
    return response.data;
  } catch (error) {
    console.log("Failed to fetch most popular educational contents: ", error);
    throw error;
  }
};

// Fetch average rating for each single educational content
// const fetchAvgRatingForEduContent = async (educationalContentId) => {
//   try {
//     console.log(
//       "Fetching average rating for each single educational content..."
//     );
//     const response = await axiosInterceptorInstance.get(
//       `/educationalContent/getAverage/${educationalContentId}`
//     );
//     // console.log(
//     //   "Average rating for Educational Content",
//     //   educationalContentId,
//     //   "is:",
//     //   response.data
//     // );
//     return response.data;
//   } catch (error) {
//     console.log(
//       "Failed to fetch average rating for each single educational content: ",
//       error
//     );
//     throw error;
//   }
// };

// Fetch most popular blog posts
const fetchMostPopularBlogPosts = async () => {
  try {
    console.log("Fetching most popular blog posts...");
    const response = await axiosInterceptorInstance.get(
      "/landingPage/getMostPopularBlogs"
    );
    console.log("Most Popular Blog Posts:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch most popular blog posts:", error);
    throw error;
  }
};

// Fetch average rating for each single blog post
// const fetchAverageRatingForBlogPost = async (blogPostId) => {
//   try {
//     console.log("Fetching average rating for each single blog post...");
//     const response = await axiosInterceptorInstance.get(
//       `/blog/getAverage/${blogPostId}`
//     );

//     // console.log(
//     //   "Average rating for Blog Post",
//     //   blogPostId,
//     //   "is:",
//     //   response.data
//     // );
//     return response.data;
//   } catch (error) {
//     console.log(
//       "Failed to fetch average rating for each single blog post: ",
//       error
//     );
//     throw error;
//   }
// };

//  Fetch meal plan based on health goals of user
const fetchMealPlansByHealthGoals = async (healthGoalId) => {
  try {
    console.log("Fetching meal plan based on health goals...");
    const response = await axiosInterceptorInstance.get(
      `/registeredUsers/getMealPlans/${healthGoalId}`
    );
    console.log("Meal plan based on health goals:", response.data);
    console.log("user Health Goal ID:", healthGoalId);

    const filteredData = response.data.filter(
      (mealPlan) => mealPlan.active === true
    );
    return filteredData;
  } catch (error) {
    console.error("Failed to fetch meal plan based on health goals:", error);
    throw error;
  }
};

const fetchMostPopularMealPlans = async () => {
  try {
    console.log("Fetching most popular meal plans...");
    const response = await axiosInterceptorInstance.get(
      "/registeredUsers/getMealPlans"
    );
    console.log("Most Popular Meal Plans:", response.data);
    const filteredData = response.data.filter(
      (mealPlan) => mealPlan.active === true
    );
    return filteredData;
  } catch (error) {
    console.error("Failed to fetch most popular meal plans:", error);
    throw error;
  }
};

// Fetch the average rating for each single meal plan
// const fetchMealPlanAverage = async (mealPlanId) => {
//   try {
//     const response = await axiosInterceptorInstance.get(
//       `/mealPlan/getAverage/${mealPlanId}`
//     );
//     // console.log(
//     //   "Average rating for meal plan",
//     //   mealPlanId,
//     //   "is:",
//     //   response.data
//     // );
//     return response.data; // Assuming this returns the average data for the meal plan
//   } catch (error) {
//     console.error(
//       `Failed to fetch average for meal plan ${mealPlanId}:`,
//       error
//     );
//     return null; // or handle the error as you see fit
//   }
// };

// Fetch recipes by dietary preferences and allergies
const fetchRecipesByDPandAllergies = async (userId) => {
  try {
    const response = await axiosInterceptorInstance.get(
      `/registeredUsers/findRecipeDTOsByAllergiesAndDP/${userId}`
    );
    console.log("Fetched recipe data is:", response.data);
    console.log("User ID: ", userId);

    return response.data;
  } catch (error) {
    console.error("Failed to fetch recipe:", error);
    throw error;
  }
};

const fetchMostPopularRecipes = async () => {
  try {
    console.log("Fetching most popular recipes...");
    const response = await axiosInterceptorInstance.get(
      "/landingPage/getMostPopularRecipes"
    );
    console.log("Most Popular Recipes:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch most popular recipes:", error);
    throw error;
  }
};

// Fetch average rating for each single recipe
// const fetchAvgRatingForRecipe = async (recipeId) => {
//   try {
//     console.log("Fetching average rating for each single recipe...");
//     const response = await axiosInterceptorInstance.get(
//       `/recipe/getAverage/${recipeId}`
//     );

//     //console.log("Average rating for recipe", recipeId, "is:", response.data);
//     return response.data;
//   } catch (error) {
//     console.log(
//       "Failed to fetch average rating for each single recipe: ",
//       error
//     );
//     throw error;
//   }
// };

const RegisteredUserHomepage = () => {
  const router = useRouter();
  // const [recipesByDP, setRecipesByDP] = useState([]);
  //const [mealPlansByHealthGoals, setMealPlansByHealthGoals] = useState([]);
  const [mostPopularEduContent, setMostPopularEduContent] = useState([]);
  const [mostPopularBlogPosts, setMostPopularBlogPosts] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [mealPlans, setMealPlans] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !SecureStorage.getItem("token") ||
      SecureStorage.getItem("role") !== "REGISTERED_USER" ||
      now >= parseInt(tokenExpiration)
    ) {
      // clear the secure storage
      SecureStorage.clear();
      console.log("Redirecting to home page");
      router.push("/");
    } else {
      setIsChecking(false);

      const getMostPopularEduContents = async () => {
        try {
          const eduContentData = await fetchMostPopularEduContent();

          // const eduContentWithAvgRating = await Promise.all(
          //   eduContentData.map(async (eduContent) => {
          //     const average = await fetchAvgRatingForEduContent(eduContent.id);
          //     return { ...eduContent, average };
          //   })
          // );
          setMostPopularEduContent(eduContentData);
        } catch (error) {
          console.log("Failed to fetch educational contents: ", error);
        }
      };

      const getMostPopularBlogs = async () => {
        try {
          const blogPostData = await fetchMostPopularBlogPosts();

          // const blogPostsWithAvgRating = await Promise.all(
          //   blogPostData.map(async (blogPost) => {
          //     const average = await fetchAverageRatingForBlogPost(blogPost.id);
          //     return { ...blogPost, average };
          //   })
          // );
          setMostPopularBlogPosts(blogPostData);
        } catch (error) {
          console.log("Failed to fetch blog posts: ", error);
        }
      };

      // Sepcifically for fetching meal plans based on health goals + ratings count display
      // const getMealPlansByHealthGoals = async (healthGoalId) => {
      //   try {
      //     const mealPlans = await fetchMealPlansByHealthGoals(healthGoalId);
      //     // const mealPlansWithRatings = await Promise.all(
      //     //   mealPlans.map(async (healthGoalMP) => {
      //     //     const average = await fetchMealPlanAverage(healthGoalMP.id);
      //     //     return { ...healthGoalMP, average }; // Combine the plan with its ratings
      //     //   })
      //     // );
      //     //return mealPlansWithRatings;
      //     setMealPlansByHealthGoals(mealPlans);
      //   } catch (error) {
      //     console.error("Error fetching meal plans with ratings:", error);
      //     throw error;
      //   }
      // };

      const getandSetRecipes = async (userId) => {
        try {
          // Attempt to fetch recipes based on dietary preferences and allergies
          const recipesByDPAndAllergies = await fetchRecipesByDPandAllergies(
            userId
          );

          if (recipesByDPAndAllergies && recipesByDPAndAllergies.length > 0) {
            // If there are recipes returned, use these recipes
            setRecipes(recipesByDPAndAllergies);
          } else {
            // If no recipes are returned, fetch and set the most popular recipes
            const mostPopularRecipes = await fetchMostPopularRecipes();
            setRecipes(mostPopularRecipes);
          }
        } catch (error) {
          console.error("Error fetching recipes:", error);
          throw error;
        }
      };

      // Sepcifically for fetching meal plans based on health goals + ratings count display
      const getMealPlansByHealthGoals = async (healthGoalId) => {
        try {
          const mealPlans = await fetchMealPlansByHealthGoals(healthGoalId);
          // const mealPlansWithRatings = await Promise.all(
          //   mealPlans.map(async (healthGoalMP) => {
          //     const average = await fetchMealPlanAverage(healthGoalMP.id);
          //     return { ...healthGoalMP, average }; // Combine the plan with its ratings
          //   })
          // );
          //return mealPlansWithRatings;
          setMealPlans(mealPlans);
        } catch (error) {
          console.error("Error fetching meal plans with ratings:", error);
          throw error;
        }
      };

      const getandSetMealPlans = async () => {
        try {
          const userId = SecureStorage.getItem("userId");
          const token = SecureStorage.getItem("token");
          const config = { headers: { Authorization: `Bearer ${token}` } };

          // Fetch user dashboard data
          const response = await axiosInterceptorInstance.get(
            "/register/dashboard/" + userId,
            config
          );
          console.log("User data fetched from backend:", response.data);
          const healthGoalId = response.data.healthGoal?.id;
          console.log("User Health Goal IDssss:", healthGoalId);

          if (healthGoalId) {
            // If a health goal is present, fetch meal plans related to that health goal
            await getMealPlansByHealthGoals(healthGoalId);
            console.log("Meal Plans based on Health Goalsssss:", mealPlans);
          } else {
            // If no health goal is found, fetch the most popular meal plans
            const mostPopularMealPlans = await fetchMostPopularMealPlans();
            setMealPlans(mostPopularMealPlans);
            console.log("Most Popular Meal Plansssss:", mostPopularMealPlans);
          }
        } catch (error) {
          console.error("Error fetching meal plans:", error);
          throw error;
        }
      };

      Promise.all([
        getMostPopularEduContents(),
        getMostPopularBlogs(),
        getandSetMealPlans(),
        getandSetRecipes(SecureStorage.getItem("userId")),
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

  // Function to render stars for ratings display
  const renderStarsAndCount = (post) => {
    if (
      !post.average ||
      !post.average.averageRatings ||
      !post.average.totalNumber
    ) {
      return <div>No ratings available</div>;
    } else {
      const { averageRatings, totalNumber } = post.average;

      let stars = [];
      // Render stars based on average rating
      for (let i = 0; i < 5; i++) {
        stars.push(
          <span
            key={i}
            className={i < averageRatings ? "text-yellow-300" : "text-gray-300"}
          >
            ★
          </span>
        );
      }
      // Render total count of ratings
      return (
        <div className="flex items-center">
          <span className="mr-1">{stars}</span>
          <span>({totalNumber} ratings)</span>
        </div>
      );
    }
  };

  // RECIPE RELATED

  const recipeLimit = [...recipes].slice(0, 3);

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
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-stone-700 transition duration-300 ease-in-out"
      style={{
        border: "0.5px solid transparent",
        background: "#48494B",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
      onClick={() => handleViewRecipes(post.id)}
    >
      {/* Image */}
      {/* <img
        src={post.img}
        alt={post.img_title}
        className="w-full object-cover rounded-sm text-white text-center"
        style={{ height: "192px" }}
      /> */}

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
          <h2 className="text-2xl font-extrabold mb-4">
            {post.title || "Untitled Recipe"}
          </h2>
        </div>

        {/* Description */}
        <div className="flex-grow flex items-center justify-center mb-4">
          <p className="text-gray-700 text-base line-clamp-3">
            {post.description || "No description available"}
          </p>
        </div>

        {/* Publisher and Ratings */}
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-4 mb-4">
          <p className="text-gray-700 text-sm font-semibold">
            Publisher:{" "}
            <span className="text-orange-600 font-semibold tracking-tight">
              {post?.publisher || "Not Specified"}
            </span>
          </p>
          {/* <p className="text-gray-700 text-sm font-semibold">
            {renderStarsAndCount(post)}
          </p> */}
        </div>
      </div>
    </div>
  );

  // END OF RECIPE RELATED

  // BLOG POSTS RELATED
  // const latestBlogs = [...AllBusinessBlogPosts]
  //   .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
  //   .slice(0, 3);

  //const blogPostLimit = [...mostPopularBlogPosts].slice(0, 3);

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
      {/* <img
        src={post.img}
        alt={post.img_title}
        className="w-full object-cover rounded-sm text-white text-center"
        style={{ height: "192px" }}
      /> */}

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
          <h2 className="text-2xl font-extrabold mb-4">
            {post.title || "Untitled Blog Post"}
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
              {post?.publisher || "Not Specified"}
            </span>
          </p>
          {/* <p className="text-gray-700 text-sm font-semibold">
            {renderStarsAndCount(post)}
          </p> */}
        </div>
      </div>
    </div>
  );
  // END OF BLOG POST RELATED

  // MEAL PLAN RELATED
  // const latestMealPlans = [...AllMealPlans]
  //   .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
  //   .slice(0, 3);

  const mealPlanLimit = [...mealPlans].slice(0, 3);

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
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-stone-700 transition duration-300 ease-in-out"
      style={{
        border: "0.5px solid transparent",
        background: "#48494B",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
      onClick={() => handleViewMealPlan(post.id)}
    >
      {/* Image */}
      {/* <img
        src={post.img}
        alt={post.img_title}
        className="w-full object-cover rounded-sm text-white text-center"
        style={{ height: "192px" }}
      /> */}

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
          <h2 className="text-2xl font-extrabold mb-4">
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
          {/* <p className="text-gray-700 text-sm font-semibold">
            {renderStarsAndCount(post)}
          </p> */}
        </div>
        {/* For testing  */}
        {/* Display category  */}
        {/* <div className="flex justify-center mb-4">
          <p className="text-gray-700 text-sm font-semibold">
            Category:{" "}
            <span className="text-orange-600 font-semibold tracking-tight">
              {post.healthGoal.subcategoryName || "Not Specified"}
            </span>
          </p>
        </div> */}
      </div>
    </div>
  );
  // END OF MEAL PLAN RELATED

  // EDUCATIONAL CONTENTS RELATED
  // const latestEducationalContents = [...AllEducationalContents]
  //   .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
  //   .slice(0, 3);

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
      onClick={() => handleViewEducationalContent(post.id)}
    >
      {/* <img
        src={post.img}
        alt={post.img_title}
        className="w-full object-cover rounded-sm text-white text-center"
        style={{ height: "192px" }}
      /> */}

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
          <h2 className="text-2xl font-extrabold mb-4">
            {post.title || "Untitled Educational Content"}
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
              {post?.publisher || "Not Specified"}
            </span>
          </p>
          {/* <p className="text-gray-700 text-sm font-semibold">
            {renderStarsAndCount(post)}
          </p> */}
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
                Recipes Recommended
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
                Meal Plans For You
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {mealPlanLimit.map((post) => renderMealPlanCard(post))}
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
                Most Popular Blogs
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {mostPopularBlogPosts.map((post) => renderBlogPost(post))}
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
                Top Health Insights
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {mostPopularEduContent.map((post) =>
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
