"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NutritionistNavBar from "../../../../components/navigation/nutritionistNavBar";
import SecureStorage from "react-secure-storage";

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
    <div
      className="max-w-xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col cursor-pointer hover:shadow-stone-700 transition duration-300 ease-in-out"
      style={{
        border: "0.5px solid transparent",
        background: "#48494B",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
      onClick={() => onViewRecipe(recipe.id)}
    >
      {/* Image */}
      <img
        className="w-full h-48 object-cover rounded-sm text-white text-center"
        src={recipe.img}
        alt={"Image of " + recipe.title}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        {/* Title */}
        <div className="grid grid-rows-3 items-center">
          <div className="text-center">
            <h2 className="text-2xl font-extrabold mb-2">
              {recipe?.title || "Untitled Recipe Title"}
            </h2>
            {/* Publisher */}
            <p className="text-gray-700 text-sm font-semibold">
              Publisher:{" "}
              <span className="text-orange-600 font-semibold tracking-tight">
                {recipe.userID.fullName || "Not specified"}
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-base mb-4 line-clamp-3">
            {recipe.description}
          </p>

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
    </div>
  );
};

const ViewMealPlan = ({ params }) => {
  const [mealPlan, setMealPlan] = useState(null);
  const [reviewsAndRatings, setReviewsAndRatings] = useState([]);
  const router = useRouter();
  // Add additional state for carousel index
  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = SecureStorage.getItem("token");
    const role = SecureStorage.getItem("role");
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (!token || role !== "NUTRITIONIST" || now >= parseInt(tokenExpiration)) {
      // If token is invalid or role is not business user, redirect to login
      SecureStorage.clear();
      router.push("/");
      return;
    } else {
      setIsChecking(false);

      const mealPlanId = decodeURIComponent(params.id); // Make sure to decode the ID
      fetchMealPlanById(mealPlanId)
        .then((data) => {
          setMealPlan(data);
          // Assuming the meal plan ID is needed to fetch the reviews
          fetchMealPlanRatingsAndReviews(data.id);
        })
        .catch((error) => {
          console.error("Error fetching meal plan:", error);
        })
        .finally(() => {
          setIsLoading(false); // Set loading to false when operation is complete
        });
    }
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
          className={i < rating ? "text-yellow-300" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
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

  const nextRecipe = () => {
    setCurrentRecipeIndex((prevIndex) =>
      prevIndex === mealPlan.recipes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevRecipe = () => {
    setCurrentRecipeIndex((prevIndex) =>
      prevIndex === 0 ? mealPlan.recipes.length - 1 : prevIndex - 1
    );
  };

  // Render the previous, current, and next recipe cards
  const renderRecipeCards = () => {
    if (!mealPlan || !mealPlan.recipes) return null;

    const prevIndex =
      currentRecipeIndex === 0
        ? mealPlan.recipes.length - 1
        : currentRecipeIndex - 1;
    const nextIndex =
      currentRecipeIndex === mealPlan.recipes.length - 1
        ? 0
        : currentRecipeIndex + 1;

    return (
      <>
        <RecipeCard
          recipe={mealPlan.recipes[prevIndex]}
          onViewRecipe={handleViewRecipe}
        />
        <RecipeCard
          recipe={mealPlan.recipes[currentRecipeIndex]}
          onViewRecipe={handleViewRecipe}
        />
        <RecipeCard
          recipe={mealPlan.recipes[nextIndex]}
          onViewRecipe={handleViewRecipe}
        />
      </>
    );
  };

  // Render the current recipe card for mobile
  const renderMobileRecipeCards = () => {
    if (!mealPlan || !mealPlan.recipes) return null;
    const recipe = mealPlan.recipes[currentRecipeIndex];

    return <RecipeCard recipe={recipe} onViewRecipe={handleViewRecipe} />;
  };

  // Paganiation buttons for the recipe carousel
  const renderPaginationButtons = () => {
    if (!mealPlan || !mealPlan.recipes) return null;

    return mealPlan.recipes.map((recipe, index) => (
      <button
        key={index}
        className={`w-3 h-3 rounded-full mx-1 bg-orange-300 cursor-pointer focus:outline-none ${
          index === currentRecipeIndex ? "bg-orange-500" : ""
        }`}
        onClick={() => setCurrentRecipeIndex(index)}
      />
    ));
  };

  const capitalizeFirstLetter = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  };

  return (
    <div>
      <NutritionistNavBar />
      <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
        <div className="text-center font-semibold font-sans">
          <h1 className="flex flex-wrap justify-center mb-4 text-2xl font-extrabold text-gray-900 lg:mb-6 lg:text-4xl">
            {mealPlan.title || "Untitled Meal Plan"}
          </h1>
          {/* Publisher and published date section */}
          <div className="flex justify-center text-sm font-serif font-semibold lg:text-base text-gray-900 space-x-6 mx-auto max-w-screen-xl">
            <p>
              Published by:{" "}
              <span className="text-orange-600 font-bold tracking-tight">
                {capitalizeFirstLetter(mealPlan?.publisher) || "Not specified"}
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
          <section className="main-content mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-xl text-left">
            <div className="w-full p-2 rounded-lg whitespace-pre-line">
              {mealPlan.introduction}
            </div>
          </section>

          {/* Image */}
          <div className="h-auto w-full border-0">
            {mealPlan?.imgBlob ? (
              <img
                src={getImageUrlFromBlob(mealPlan?.imgBlob)}
                alt={mealPlan.img_title || "Meal Plan Image"}
                className="lg:max-w-4xl max-w-full mx-auto mt-8 mb-8 rounded-lg shadow-xl"
              />
            ) : (
              <img
                src={mealPlan.img}
                alt={mealPlan.img_title || "Meal Plan Image"}
                className="lg:max-w-4xl max-w-full mx-auto mt-8 mb-8 rounded-lg shadow-xl"
              />
            )}
            {/* Image title */}
            <p className="mt-2 text-center text-gray-900 font-medium text-sm">
              {mealPlan?.imgTitle || "Image Title Not Specified"}
            </p>
          </div>

          {/* Main content */}
          <section className="main-content mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-xl text-left">
            <div className="w-full p-2 rounded-lg whitespace-pre-line">
              {mealPlan.mainContent}
            </div>
          </section>

          {/* Recipes Section*/}
          <div className="mt-16 mx-auto max-w-screen-xl text-left border-t-2 border-gray-50 hidden lg:block p-6">
            <p className="font-sans font-bold text-2xl md:text-4xl text-gray-900 mb-8 md:mt-8 ml-4 lg:ml-0">
              Suggested Recipes
            </p>

            {/* Recipes Carousel Section - Large Screen */}
            {mealPlan?.recipes && mealPlan.recipes.length > 0 ? (
              <div className="grid grid-cols-3 gap-4 relative">
                {/* Render recipe cards here */}
                {renderRecipeCards()}
                {/* Position arrows */}
                <button
                  onClick={prevRecipe}
                  className="absolute top-1/2 left-0 transform rounded-full bg-orange-400 hover:bg-orange-500 transition duration-300 ease-in-out"
                  style={{ zIndex: 1 }}
                >
                  <ChevronLeftIcon
                    style={{ fontSize: "2.5rem", color: "white" }}
                  />
                </button>
                <button
                  onClick={nextRecipe}
                  className="absolute top-1/2 right-0 transform rounded-full bg-orange-400 hover:bg-orange-500 transition duration-300 ease-in-out"
                  style={{ zIndex: 1 }}
                >
                  <ChevronRightIcon
                    style={{ fontSize: "2.5rem", color: "white" }}
                  />
                </button>
              </div>
            ) : (
              <p className="text-center">No suggested recipes.</p>
            )}
            <div className="flex justify-center mt-4">
              {renderPaginationButtons()}
            </div>
          </div>

          {/* Recipes Carousel Section - Mobile Screen */}
          <div className="mt-16 mx-auto max-w-screen-xl text-left border-t-2 border-gray-50 lg:hidden p-6 items-center">
            <p className="font-sans font-bold text-4xl text-gray-900 mb-4 md:mt-8 ml-4">
              Suggested Recipes
            </p>

            {mealPlan?.recipes && mealPlan.recipes.length > 0 ? (
              <div className="grid grid-cols-1 gap-4 justify-center items-center relative">
                {/* Render recipe cards here */}
                {renderMobileRecipeCards()}

                {/* Position arrows */}
                <button
                  onClick={prevRecipe}
                  className="absolute top-1/2 left-0 transform rounded-full bg-orange-400 hover:bg-orange-500 transition duration-300 ease-in-out"
                  style={{ zIndex: 1 }}
                >
                  <ChevronLeftIcon
                    style={{ fontSize: "2.5rem", color: "white" }}
                  />
                </button>
                <button
                  onClick={nextRecipe}
                  className="absolute top-1/2 right-0 transform rounded-full bg-orange-400 hover:bg-orange-500 transition duration-300 ease-in-out"
                  style={{ zIndex: 1 }}
                >
                  <ChevronRightIcon
                    style={{ fontSize: "2.5rem", color: "white" }}
                  />
                </button>
              </div>
            ) : (
              <p className="text-center">No suggested recipes.</p>
            )}
            <div className="flex justify-center mt-4">
              {renderPaginationButtons()}
            </div>
          </div>

          {/* Conclusion */}
          <section className="main-content mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-xl text-left">
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
    </div>
  );
};

export default ViewMealPlan;
