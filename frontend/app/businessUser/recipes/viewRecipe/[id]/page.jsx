"use client";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import BusinessUserNavBar from "../../../../components/navigation/businessUserNavBar";

// router path: /businessUser/recipes/viewRecipe/[id]

// To render the steps as a list
const renderSteps = (stepsString) => {
  // Split the steps string into an array, one element per step
  const stepsArray = stepsString.split("\n");

  // Map each step to a list item
  return stepsArray.map((step, index) => (
    <li key={index} className="p-2">
      {index + 1}. {step}
    </li>
  ));
};

const fetchRecipesById = async (recipeID) => {
  try {
    // Ensure recipeID is a string if the IDs in your URL need to be strings
    recipeID = recipeID;

    const response = await axiosInterceptorInstance.get(
      `/recipe/get/${recipeID}`
    );

    if (!response.data) {
      console.error(`Recipe not found`);
      throw new Error(`Recipe not found`);
    }

    // Assuming the response contains the recipes directly
    const recipe = response.data;

    return recipe;
  } catch (error) {
    console.error("Failed to fetch recipe:", error);
    throw error;
  }
};

const BusinessViewRecipe = ({ params }) => {
  const [recipe, setRecipe] = useState(null);
  const [reviewsAndRatings, setReviewsAndRatings] = useState([]);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  const fetchRecipesRatingsAndReviews = async (recipeId) => {
    try {
      // Include the recipeId in the URL as a query parameter
      const response = await axiosInterceptorInstance.get(
        `/recipe/rating/getRecipe?recipeId=${recipeId}`
      );

      // Assuming response.data is the array of reviews for the given recipeId
      setReviewsAndRatings(response.data);
    } catch (error) {
      console.error("Failed to fetch ratings and reviews:", error);
    }
  };

  useEffect(() => {
    const token = SecureStorage.getItem("token");
    const role = SecureStorage.getItem("role");
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !token ||
      role !== "BUSINESS_USER" ||
      now >= parseInt(tokenExpiration)
    ) {
      // If token is invalid or role is not business user, redirect to login
      SecureStorage.clear();
      router.push("/");
      return;
    } else {
      setIsChecking(false);

      const recipeId = decodeURIComponent(params.id); // Make sure to decode the ID
      fetchRecipesById(recipeId)
        .then((data) => {
          setRecipe(data);
          // Assuming the blog ID is needed to fetch the reviews
          fetchRecipesRatingsAndReviews(data.id);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching recipe in use effect:", error);
        });
    }
  }, [params.id]);

  if (isChecking) {
    return <div>Checking...</div>;
  }

  // this function is to update particular recipe
  const handleUpdateRecipe = (id) => {
    // Redirect to the correct route
    let routePath = `/businessUser/recipes/updateRecipe/${id}`;

    router.push(routePath);
  };

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

  const renderAllergens = (allergies) => {
    if (!allergies || allergies.length === 0) {
      return <span className="text-orange-600 font-bold">None</span>;
    }
    return (
      <div className="flex flex-wrap justify-center items-center">
        {allergies.map((allergy, index) => (
          <span
            key={index}
            className="bg-red-200 text-red-700 px-4 py-1 rounded-full text-center m-2"
          >
            {allergy.subcategoryName}
          </span>
        ))}
      </div>
    );
  };

  const renderDietaryPreferences = (dietaryPreferences) => {
    if (!dietaryPreferences) {
      return <span className="text-orange-600 font-bold">Not specified</span>;
    }
    return (
      <div className="flex justify-center items-center">
        <span className="bg-green-200 text-green-700 px-4 py-1 rounded-full text-center m-2">
          {dietaryPreferences.subcategoryName}
        </span>
      </div>
    );
  };

  // render meal type
  const renderMealType = (mealType) => {
    if (!mealType) {
      return <span className="text-orange-600 font-bold">Not specified</span>;
    }
    return (
      <div className="flex justify-center items-center">
        <span className="bg-blue-200 text-blue-700 px-4 py-1 rounded-full text-center m-2">
          {mealType.subcategoryName}
        </span>
      </div>
    );
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

  return (
    <div>
      {isLoading && isChecking ? (
        <div>Loading...</div>
      ) : (
        <>
          <BusinessUserNavBar />
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
                <div className="px-10 text-center font-semibold font-sans">
                  <h1 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-6xl">
                    {recipe?.title || "Untitled Recipe"}
                  </h1>

                  {/* Publisher and published date section */}
                  <div className="flex justify-center text-base font-serif font-semibold lg:text-base text-gray-900 space-x-6 mx-auto max-w-screen-xl">
                    <p>
                      Published by:{" "}
                      <span className="text-orange-600 font-bold tracking-tight">
                        {recipe?.userID?.fullName || "Not specified"}
                      </span>
                    </p>
                    <p>
                      Published on:{" "}
                      <span className="text-orange-600 font-bold tracking-tight">
                        {recipe
                          ? new Date(
                              recipe.createdDT || recipe.lastUpdatedDT
                            ).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })
                          : "Not specified"}
                      </span>
                    </p>
                  </div>
                  {/* End of publisher and published date section  */}

                  {/* Combined Allergens and Dietary Preferences section */}
                  <div className="mt-14 flex justify-center space-x-4">
                    {/* Allergens section */}
                    <div className="flex-1 p-3" role="alert">
                      <p className="font-bold text-base lg:text-xl text-gray-900 mb-1">
                        Allergens Information:
                      </p>
                      {recipe
                        ? renderAllergens(recipe.allergies)
                        : "Not specified"}
                    </div>

                    {/* Dietary Preferences section */}
                    <div className="flex-1 p-3" role="alert">
                      <p className="font-bold text-base lg:text-xl text-gray-900 mb-1">
                        Dietary Preferences:
                      </p>
                      {recipe
                        ? renderDietaryPreferences(recipe.dietaryPreferences)
                        : "Not specified"}
                    </div>

                    {/* Meal Type section */}
                    <div className="flex-1 p-3" role="alert">
                      <p className="font-bold text-base lg:text-xl text-gray-900 mb-1">
                        Meal Type:
                      </p>
                      {recipe
                        ? renderMealType(recipe.mealType)
                        : "Not specified"}
                    </div>
                  </div>
                </div>

                {/* start of summary card */}
                <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-4 p-5 bg-slate-100 mx-auto">
                  <div className="flex flex-col items-center justify-center">
                    {/* Container div for image */}
                    <div className="h-auto w-full border-0">
                      {recipe?.imgBlob ? (
                        // If imgBlob is available, display image from blob
                        <img
                          className="rounded-lg h-full lg:h-96 w-full object-cover" // Positioning image to cover the container
                          src={getImageUrlFromBlob(recipe?.imgBlob)}
                          alt={recipe?.title || "Recipe Image"}
                        />
                      ) : (
                        // If imgBlob is not available, display image from imgUrl
                        <img
                          className="rounded-lg h-full lg:h-96 w-full object-cover" // Positioning image to cover the container
                          src={recipe?.img || "Not specified"}
                          alt="Not found"
                        />
                      )}
                    </div>
                    {/* Image title */}
                    <p className="mt-4 text-center text-gray-900 font-medium text-sm">
                      {recipe?.imgTitle || "Image Title Not Specified"}
                    </p>
                  </div>

                  {/* Cooking time, description etc section */}
                  <div className="flex flex-col ml-0 lg:ml-4 mt-4">
                    <div className="flex lg:flex-row lg:space-x-8 lg:space-y-0 flex-col space-y-4 font-bold">
                      <p className="mr-4 text-bold text-lg tracking-tight">
                        Cooking Time:{" "}
                        <span className="text-orange-600 font-semibold text-lg">
                          {recipe?.cookingTime
                            ? `Approx. ${recipe.cookingTime} mins`
                            : "Not specified"}
                        </span>
                      </p>
                      <p className="mr-4 text-bold text-lg tracking-tight">
                        Total Serving:{" "}
                        <span className="text-orange-600 font-semibold text-lg">
                          {recipe?.servingSize || "Not specified"} pax
                        </span>
                      </p>
                    </div>
                    <p className="font-bold mt-4 lg:mt-8 text-2xl tracking-tight">
                      Description:
                    </p>
                    <p className="mt-2 items-center whitespace-pre-line md:text-lg">
                      {recipe?.description || "Not specified"}
                    </p>
                    <p className="font-bold mt-4 lg:mt-8 text-2xl tracking-tight">
                      Dietary Information:
                    </p>
                    <p className="mt-2 items-center whitespace-pre-line md:text-lg">
                      {recipe?.info || "Not specified"}
                    </p>

                    <div className="mt-4 lg:mt-4 mb-4">
                      <p className="font-bold mt-4 lg:mt-8 text-2xl tracking-tight">
                        Nutrition Information:{" "}
                        <span className="font-medium text-sm ">
                          (per serving)
                        </span>
                      </p>
                    </div>
                    <div className="grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                      <div className="rounded-full bg-orange-100 w-20 h-20 flex flex-col items-center text-center justify-center">
                        <p className="text-sm">Calories</p>
                        <p className="text-orange-600 font-semibold">
                          {recipe?.calories ? `${recipe.calories} kcal` : "N/A"}
                        </p>
                      </div>
                      <div className="rounded-full bg-orange-100 w-20 h-20 flex flex-col items-center text-center justify-center">
                        <p className="text-sm">Carbs</p>
                        <p className="text-orange-600 font-semibold">
                          {recipe?.carbs ? `${recipe.carbs} g` : "N/A"}
                        </p>
                      </div>
                      <div className="rounded-full bg-orange-100 w-20 h-20 flex flex-col items-center text-center justify-center">
                        <p className="text-sm">Protein</p>
                        <p className="text-orange-600 font-semibold">
                          {recipe?.protein ? `${recipe.protein} g` : "N/A"}
                        </p>
                      </div>
                      <div className="rounded-full bg-orange-100 w-20 h-20 flex flex-col items-center text-center justify-center">
                        <p className="text-sm">Fat</p>
                        <p className="text-orange-600 font-semibold">
                          {recipe?.fat ? `${recipe.fat} g` : "N/A"}{" "}
                        </p>
                      </div>
                      <div className="rounded-full bg-orange-100 w-20 h-20 flex flex-col items-center text-center justify-center">
                        <p className="text-sm">Fibre</p>
                        <p className="text-orange-600 font-semibold">
                          {recipe?.fibre ? `${recipe.fibre} g` : "N/A"}
                        </p>
                      </div>
                      <div className="rounded-full bg-orange-100 w-20 h-20 flex flex-col items-center text-center justify-center">
                        <p className="text-sm">Sodium</p>
                        <p className="text-orange-600 font-semibold">
                          {recipe?.sodium ? `${recipe.sodium} mg` : "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of summary card */}

                {/* Ingredients and Instructions */}
                <div className="flex flex-col md:flex-row mt-8 mx-4 md:mx-20">
                  <ul className="flex flex-col mt-4 md:w-1/2 md:mt-5 whitespace-pre-line leading-8 lg:ml-24">
                    <li className="font-bold text-2xl tracking-tight mb-2 text-gray-900">
                      Ingredients
                    </li>
                    {recipe?.ingredients
                      .split("\n")
                      .map((ingredient, index) => (
                        <li key={index} className="list-disc ml-4 md:text-xl">
                          {ingredient}
                        </li>
                      )) || <li>Not specified</li>}
                  </ul>

                  <ul className="flex flex-col mt-8 md:w-1/2 md:ml-0 md:mt-4 whitespace-pre-line leading-6">
                    <ol className="font-bold text-2xl tracking-tight mb-2 text-gray-900">
                      Instructions
                    </ol>
                    <ol className="md:text-xl">
                      {recipe ? (
                        renderSteps(recipe.steps)
                      ) : (
                        <li>Not specified</li>
                      )}
                    </ol>
                  </ul>
                </div>

                {/* reviews and ratings */}
                <div className="mt-16 mx-auto max-w-screen-xl text-left border-t-2 border-gray-50">
                  <p className="font-sans font-bold text-2xl md:text-4xl text-gray-900 mb-4 md:mt-8 ml-4 lg:ml-0">
                    Rating and Reviews
                  </p>
                  {/* Check if reviews exist */}
                  {reviewsAndRatings.length > 0 ? (
                    reviewsAndRatings.map((review, index) => (
                      <div
                        key={index}
                        className="my-4 p-4 border-b border-gray-200"
                      >
                        <div className="flex items-center mb-2">
                          <span className="font-bold text-sm md:text-base mr-2">
                            {review?.userDTO?.username || "Anonymous"}
                          </span>
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-xs md:text-sm text-gray-500 ml-2">
                            {new Date(
                              review?.createdDateTime
                            ).toLocaleDateString("en-GB", {
                              day: "2-digit",
                              month: "short",
                              year: "numeric",
                            })}
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
                <div className="flex flex-row space-x-5 justify-end mr-10 mt-6">
                  <button
                    onClick={() => handleUpdateRecipe(recipe.id)}
                    className="bg-blue-600 hover:bg-blue-700 text-white w-24 font-bold py-2 px-4 rounded-lg"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BusinessViewRecipe;
