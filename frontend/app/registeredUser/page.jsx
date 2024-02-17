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

//  Fetch meal plan based on health goals of user
const fetchMealPlansByHealthGoals = async (healthGoalId) => {
  try {
    const response = await axiosInterceptorInstance.get(
      `/registeredUsers/getMealPlans/${healthGoalId}`
    );

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
    const response = await axiosInterceptorInstance.get(
      "/registeredUsers/getMealPlans"
    );
    const filteredData = response.data.filter(
      (mealPlan) => mealPlan.active === true
    );
    return filteredData;
  } catch (error) {
    console.error("Failed to fetch most popular meal plans:", error);
    throw error;
  }
};

// Fetch recipes by dietary preferences and allergies
const fetchRecipesByDPandAllergies = async (userId) => {
  try {
    const response = await axiosInterceptorInstance.get(
      `/registeredUsers/findRecipeDTOsByAllergiesAndDP/${userId}`
    );

    return response.data;
  } catch (error) {
    console.error("Failed to fetch recipe:", error);
    throw error;
  }
};

const fetchMostPopularRecipes = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "/landingPage/getMostPopularRecipes"
    );
    return response.data;
  } catch (error) {
    console.error("Failed to fetch most popular recipes:", error);
    throw error;
  }
};

const RegisteredUserHomepage = () => {
  const router = useRouter();
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
      router.push("/");
    } else {
      setIsChecking(false);

      const getMostPopularEduContents = async () => {
        try {
          const eduContentData = await fetchMostPopularEduContent();

          setMostPopularEduContent(eduContentData);
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
          const healthGoalId = response.data.healthGoal?.id;

          if (healthGoalId) {
            // If a health goal is present, fetch meal plans related to that health goal
            await getMealPlansByHealthGoals(healthGoalId);
          } else {
            // If no health goal is found, fetch the most popular meal plans
            const mostPopularMealPlans = await fetchMostPopularMealPlans();
            setMealPlans(mostPopularMealPlans);
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
        </div>
      </div>
    </div>
  );

  const handleViewBlogPost = (id) => {
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
         
        </div>
      </div>
    </div>
  );
  // END OF BLOG POST RELATED

  const mealPlanLimit = [...mealPlans].slice(0, 3);

  const handleViewMealPlan = (id) => {
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
        </div>
      </div>
    </div>
  );
  // END OF MEAL PLAN RELATED

  const handleViewEducationalContent = (id) => {
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
