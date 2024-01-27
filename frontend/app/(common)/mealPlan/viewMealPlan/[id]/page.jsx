"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

// this is to view particular meal plan
// router path: /mealPlan/viewMealPlan/[id]

const fetchMealPlanById = async (mealPlanId) => {
  try {
    // Ensure mealPlanId is a string if the IDs in your URL need to be strings
    mealPlanId = mealPlanId;

    const response = await axiosInterceptorInstance.get(
      `/mealPlan/get/${mealPlanId}`
    );
    console.log("Fetched meal plan data is:", response.data);

    if (!response.data) {
      console.error(`Meal plan with ID ${mealPlanId} not found`);
      throw new Error(`Meal plan with ID ${mealPlanId} not found`);
    }

    // Assuming the response contains the meal plan directly
    const mealPlan = response.data;

    return mealPlan;
  } catch (error) {
    console.error("Failed to fetch meal plan:", error);
    throw error;
  }
};

const RecipeCard = ({ recipe, onViewRecipe }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
      <div className="h-48 overflow-hidden">
        {" "}
        {/* Fixed height container */}
        <img
          className="w-full h-full object-cover"
          src={recipe.img}
          alt={"Image of " + recipe.title}
        />
      </div>
      <div className="px-6 py-4">
        <div
          className="font-bold text-xl mb-2 cursor-pointer hover:text-orange-600"
          onClick={() => onViewRecipe(recipe.id)}
        >
          {recipe.title}
        </div>
        <p
          className="text-gray-700 text-base mb-4 line-clamp-3"
          style={{ height: "4.5rem" }}
        >
          {recipe.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {/* Nutritional Information */}
        <div className="flex flex-wrap justify-center -mx-1">
          <span className="inline-block bg-blue-100 text-blue-800 rounded-full px-3 py-1 text-sm font-semibold m-1">
            Calories: {recipe.calories}kcal
          </span>
          <span className="inline-block bg-red-100 text-red-800 rounded-full px-3 py-1 text-sm font-semibold m-1">
            Fat: {recipe.fat}g
          </span>
          <span className="inline-block bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm font-semibold m-1">
            Protein: {recipe.protein}g
          </span>
          <span className="inline-block bg-yellow-100 text-yellow-800 rounded-full px-3 py-1 text-sm font-semibold m-1">
            Carbs: {recipe.carbs}g
          </span>
          <span className="inline-block bg-purple-100 text-purple-800 rounded-full px-3 py-1 text-sm font-semibold m-1">
            Sodium: {recipe.sodium}mg
          </span>
          <span className="inline-block bg-orange-100 text-orange-800 rounded-full px-3 py-1 text-sm font-semibold m-1">
            Fibre: {recipe.fibre}g
          </span>
        </div>
      </div>
    </div>
  );
};

const ViewMealPlan = ({ params }) => {
  const [mealPlan, setMealPlan] = useState(null);
  const [reviewsAndRatings, setReviewsAndRatings] = useState([]);
  const router = useRouter();
  // Add additional state for carousel index
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [currentRecipeSetIndex, setCurrentRecipeSetIndex] = useState(0);

  useEffect(() => {
    const mealPlanId = decodeURIComponent(params.id); // Make sure to decode the ID
    fetchMealPlanById(mealPlanId)
      .then((data) => {
        setMealPlan(data);
        // Assuming the meal plan ID is needed to fetch the reviews
        fetchMealPlanRatingsAndReviews(data.id);
      })
      .catch((error) => {
        console.error("Error fetching meal plan:", error);
      });
  }, [params.id]);

  const fetchMealPlanRatingsAndReviews = async (mealPlanId) => {
    try {
      // Include the mealPlanId in the URL as a query parameter
      const response = await axiosInterceptorInstance.get(
        `/mealPlan/rating/getMealPlan?mealPlanId=${mealPlanId}`
      );
      console.log("All ratings response data:", response.data);

      // Assuming response.data is the array of reviews for the given meal plan id
      setReviewsAndRatings(response.data);

      // Optionally, log each review to the console
      response.data.forEach((reviewData, index) => {
        console.log(`Review ${index + 1}:`, reviewData.review);
      });
    } catch (error) {
      console.error("Failed to fetch ratings and reviews:", error);
    }
  };

  const handleViewRecipe = (id) => {
    console.log("Viewing recipe with id:", id);

    // Redirect to the correct route
    let routePath = `/recipes/viewRecipe/${id}`;

    router.push(routePath);
  };

  if (!mealPlan) {
    return <div>Loading...</div>;
  }

  // Function to render stars based on rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={i < rating ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const nextRecipeSet = () => {
    setCurrentRecipeSetIndex((prevIndex) => {
      const nextIndex = prevIndex + 3;
      if (nextIndex >= mealPlan.recipes.length) return 0;
      return nextIndex;
    });
  };

  const prevRecipeSet = () => {
    setCurrentRecipeSetIndex((prevIndex) => {
      // Change the variable name to avoid conflict
      const newIndex = prevIndex - 3;
      if (newIndex < 0) return Math.max(0, mealPlan.recipes.length - 3);
      return newIndex;
    });
  };

  const isMobileSize = window.innerWidth <= 480;

  // Determine the slice of recipes to display
  const displayedRecipes = isMobileSize
    ? [mealPlan?.recipes[currentRecipeSetIndex]]
    : mealPlan?.recipes.slice(currentRecipeSetIndex, currentRecipeSetIndex + 3);

  // // Determine the slice of recipes to display
  // const displayedRecipes = mealPlan?.recipes.slice(
  //   currentRecipeSetIndex,
  //   currentRecipeSetIndex + 3
  // );

  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
      <div className="text-center font-semibold font-sans">
        <h1 className="flex flex-wrap justify-center mb-4 text-2xl font-extrabold text-gray-900 lg:mb-6 lg:text-5xl">
          {mealPlan.title || "No title"}
        </h1>
        {/* Publisher and published date section */}
        <div className="flex justify-center text-sm font-serif font-semibold lg:text-base text-gray-900 space-x-6 mx-auto max-w-screen-xl">
          <p>
            Published by:{" "}
            <span className="text-orange-600 font-bold tracking-tight">
              {mealPlan?.userID.fullName || "Not specified"}
            </span>
          </p>
          <p>
            Published on:{" "}
            <span className="text-orange-600 font-bold tracking-tight">
              {new Date(
                mealPlan.createdDT || mealPlan.lastUpdatedDT
              ).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </p>

          <p>
            Category:{" "}
            <span className="text-orange-600 font-bold tracking-tight">
              {mealPlan.healthGoal
                ? mealPlan.healthGoal.subcategoryName
                : "Not specified"}
            </span>
          </p>
        </div>
        {/* End of publisher, published date, category */}
      </div>

      <article>
        {/*Intro*/}
        <section className="main-content mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
          <div className="w-full p-2 rounded-lg whitespace-pre-line">
            {mealPlan.introduction}
          </div>
        </section>
        {/* Image */}
        <img
          src={mealPlan.img}
          alt="Credit to the source of the image"
          className="max-w-xl mx-auto mt-8 mb-8 rounded-lg shadow-xl sm:mt-16 sm:mb-16"
        />
        {/* Main content */}
        <section className="main-content mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
          <div className="w-full p-2 rounded-lg whitespace-pre-line">
            {mealPlan.mainContent}
          </div>
        </section>
        {/* Recipes */}
        <div className="mt-16 mx-auto max-w-screen-xl text-left border-t-2 border-gray-50">
          <p className="font-sans font-bold text-2xl md:text-4xl text-gray-900 mb-4 md:mt-8 ml-4 lg:ml-0">
            Suggested Recipes
          </p>
          {/* Recipes Carousel Section */}
          {mealPlan?.recipes && mealPlan.recipes.length > 0 ? (
            <div className="relative">
              <div className="grid md:grid-cols-3 gap-4 justify-center">
                {displayedRecipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onViewRecipe={handleViewRecipe}
                  />
                ))}
              </div>
              {mealPlan.recipes.length > 3 && (
                <>
                  <button
                    onClick={prevRecipeSet}
                    className="absolute top-1/2 transform -translate-y-1/2 z-10"
                    // style={{
                    //   marginLeft: "0.5rem, // Adjust right margin to bring the arrow inside the viewport
                    // }}
                  >
                    <ArrowLeftIcon
                      style={{
                        fontSize: "3rem",
                        color: "blue",
                      }} // 50% transparent blue
                    />
                  </button>
                  <button
                    onClick={nextRecipeSet}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
                    style={{
                      marginRight: "1rem", // Adjust right margin to bring the arrow inside the viewport
                    }}
                  >
                    <ArrowRightIcon
                      style={{ fontSize: "3rem", color: "blue" }} // Set the size and color here
                    />
                  </button>
                </>
              )}
            </div>
          ) : (
            <p className="text-center">No suggested recipes.</p>
          )}
        </div>
        {/* Conclusion */}
        <section className="main-content mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
          <div className="w-full p-2 rounded-lg whitespace-pre-line">
            {mealPlan.conclusion}
          </div>
        </section>
      </article>

      {/* Ratings and Reviews */}
      <div className="mt-16 mx-auto max-w-screen-xl text-left border-t-2 border-gray-50">
        <p className="font-sans font-bold text-2xl md:text-4xl text-gray-900 mb-4 md:mt-8 ml-4 lg:ml-0">
          Rating and Reviews
        </p>
        {/* Check if reviews exist */}
        {reviewsAndRatings.length > 0 ? (
          reviewsAndRatings.map((review, index) => (
            <div key={index} className="my-4 p-4 border-b border-gray-200">
              <div className="flex items-center mb-2">
                <span className="font-bold text-sm md:text-base mr-2">
                  {review?.userDTO?.username || "Anonymous"}
                </span>
                <div className="flex">{renderStars(review.rating)}</div>
                <span className="text-xs md:text-sm text-gray-500 ml-2">
                  {new Date(review?.createdDateTime).toLocaleDateString(
                    "en-GB",
                    {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    }
                  )}
                </span>
              </div>
              <p>{review.review}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No ratings and reviews yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default ViewMealPlan;