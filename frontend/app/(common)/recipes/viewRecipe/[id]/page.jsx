"use client";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";

// router path: /recipes/viewRecipe/[id]

// rating and reviews not done yet

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
    console.log("Fetched recipe data is:", response.data);

    if (!response.data) {
      console.error(`Recipe with ID ${recipeID} not found`);
      throw new Error(`Recipe with ID ${recipeID} not found`);
    }

    // Assuming the response contains the recipes directly
    const recipe = response.data;

    // check the content of the recipe
    console.log("try recipe by id", recipe);
    return recipe;
  } catch (error) {
    console.error("Failed to fetch recipe:", error);
    throw error;
  }
};

const ViewRecipe = ({ params }) => {
  const [recipe, setRecipe] = useState(null);
  const [reviewsAndRatings, setReviewsAndRatings] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const recipeId = decodeURIComponent(params.id); // Make sure to decode the ID
    fetchRecipesById(recipeId)
      .then((data) => {
        setRecipe(data);
        // Assuming the blog ID is needed to fetch the reviews
        fetchRecipesRatingsAndReviews(data.id);
      })
      .catch((error) => {
        console.error("Error fetching recipe in use effect:", error);
      });
  }, [params.id]);

  const fetchRecipesRatingsAndReviews = async (recipeId) => {
    try {
      // Include the recipeId in the URL as a query parameter
      const response = await axiosInterceptorInstance.get(
        `/recipe/rating/getRecipe?recipeId=${recipeId}`
      );
      console.log("All recipe ratings response data:", response.data);

      // Assuming response.data is the array of reviews for the given recipeId
      setReviewsAndRatings(response.data);

      // Optionally, log each review to the console
      response.data.forEach((reviewData, index) => {
        console.log(`Review ${index + 1}:`, reviewData.review);
      });
    } catch (error) {
      console.error("Failed to fetch ratings and reviews:", error);
    }
  };

  // this function is to update particular blog post
  const handleUpdateRecipe = (id) => {
    console.log("Updating recipe with id:", id);

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
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  const renderAllergens = (allergies) => {
    if (!allergies || allergies.length === 0) {
      return <span>None</span>;
    }
    return (
      <div className="flex flex-wrap">
        {allergies.map((allergy, index) => (
          <span
            key={index}
            className="m-1 bg-red-200 text-red-700 px-2 py-1 rounded"
          >
            {allergy.subcategoryName}
          </span>
        ))}
      </div>
    );
  };

  const renderDietaryPreferences = (dietaryPreferences) => {
    if (!dietaryPreferences) {
      return <span>Not specified</span>;
    }
    return (
      <span className="bg-green-200 text-green-700 px-2 py-1 rounded">
        {dietaryPreferences.subcategoryName}
      </span>
    );
  };

  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
      <div className="px-10 text-left font-semibold font-mono">
        <h1 className="mb-4 text-xl font-extrabold leading-tight text-cyan-900 lg:mb-6 lg:text-4xl dark:text-white">
          {recipe?.title || "Untitled Recipe"}
        </h1>

        <div className="flex justify-left ml-3 text-base lg:text-base text-black space-x-6 mx-auto max-w-screen-xl">
          <p>
            Published by:{" "}
            <span className="text-cyan-600">
              {recipe?.userID?.fullName || "Not specified"}
            </span>
          </p>
          <p>
            Published on:{" "}
            <span className="text-cyan-600">
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

        {/* Combined Allergens and Dietary Preferences section */}
        <div className="mt-8 flex justify-start space-x-4">
          {/* Allergens section */}
          <div className="flex-1 p-3" role="alert">
            <p className="font-bold">Contains Allergens:</p>
            {recipe ? renderAllergens(recipe.allergies) : "Not specified"}
          </div>

          {/* Dietary Preferences section */}
          <div className="flex-1 p-3" role="alert">
            <p className="font-bold">Dietary Preferences:</p>
            {recipe
              ? renderDietaryPreferences(recipe.dietaryPreferences)
              : "Not specified"}
          </div>
        </div>

        {/* Show ratings at the top of the title temporary no need*/}
        {/* <div className="flex justify-left ml-3 text-base lg:text-base text-black space-x-6 mx-auto max-w-screen-xl">
          <p>
            Rating: <span className="text-cyan-600">{recipe.ratings}</span>
          </p>
          <p>
            Reviews: <span className="text-cyan-600">{recipe.reviews}</span>
          </p>
        </div> */}
      </div>

      {/* start of summary card */}
      <div className="flex flex-col lg:flex-row mt-4 p-5 bg-gray-50">
        <img
          className="h-auto max-w-lg rounded-lg ml-5 shadow-md"
          src={recipe?.img || "Not specified"}
          alt="Not found"
        />
        <div className="flex flex-col ml-4">
          <div className="flex flex-row font-bold">
            <p className="mr-4">
              Cooking Time:{" "}
              <span className="text-cyan-600">
                {recipe?.cookingTime
                  ? `Approx. ${recipe.cookingTime} mins`
                  : "Not specified"}
              </span>
            </p>
            <p className="mr-4 text-bold">
              Total Serving:{" "}
              <span className="text-cyan-600">
                {recipe?.servingSize || "Not specified"} pax
              </span>
            </p>
          </div>
          <p className="font-bold mt-4 ">Description:</p>
          <p className="mt-2">{recipe?.description || "Not specified"}</p>
          <p className="font-bold mt-4">Dietary Info:</p>
          <p className="mt-2">{recipe?.info || "Not specified"}</p>

          {/* I need to display the info divided by serving size in future  */}

          <div className="mt-40 mb-4">
            <p className="font-bold">Nutritional Information Per Serving:</p>
          </div>
          <div className="grid-rows-6 flex flex-row space-x-10">
            <div className="rounded-full bg-blue-100 w-20 h-20 flex flex-col items-center text-center justify-center">
              <p className="text-sm">Calories</p>
              <p className="text-cyan-600 font-semibold">
                {recipe?.calories || "N/A"}
              </p>
            </div>
            <div className="rounded-full bg-blue-100 w-20 h-20 flex flex-col items-center text-center justify-center">
              <p className="text-sm">Carbs</p>
              <p className="text-cyan-600 font-semibold">
                {recipe?.carbs ? `${recipe.carbs}g` : "N/A"}
              </p>
            </div>
            <div className="rounded-full bg-blue-100 w-20 h-20 flex flex-col items-center text-center justify-center">
              <p className="text-sm">Protein</p>
              <p className="text-cyan-600 font-semibold">
                {recipe?.protein ? `${recipe.protein}g` : "N/A"}
              </p>
            </div>
            <div className="rounded-full bg-blue-100 w-20 h-20 flex flex-col items-center text-center justify-center">
              <p className="text-sm">Fat</p>
              <p className="text-cyan-600 font-semibold">
                {recipe?.fat ? `${recipe.fat}g` : "N/A"}{" "}
              </p>
            </div>
            <div className="rounded-full bg-blue-100 w-20 h-20 flex flex-col items-center text-center justify-center">
              <p className="text-sm">Fibre</p>
              <p className="text-cyan-600 font-semibold">
                {recipe?.fibre ? `${recipe.fibre}g` : "N/A"}
              </p>
            </div>
            <div className="rounded-full bg-blue-100 w-20 h-20 flex flex-col items-center text-center justify-center">
              <p className="text-sm">Sodium</p>
              <p className="text-cyan-600 font-semibold">
                {recipe?.fibre ? `${recipe.fibre}mg` : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End of summary card */}

      {/* Ingredients and Instructions */}
      <div className="flex flex-col md:flex-row mt-8 ml-7 px-20">
        <ul className="flex flex-col md:w-1/2 whitespace-pre-line">
          <li className="font-bold text-xl mb-2">Ingredients</li>
          {recipe?.ingredients.split("\n").map((ingredient, index) => (
            <li key={index} className="list-disc ml-4">
              {ingredient}
            </li>
          )) || <li>Not specified</li>}
        </ul>

        <ul className="flex flex-col md:w-1/2 md:ml-7 mt-4 md:mt-0 whitespace-pre-line">
          <ol className="font-bold text-xl mb-2">Instructions</ol>
          <ol>{recipe ? renderSteps(recipe.steps) : <li>Not specified</li>}</ol>
        </ul>
      </div>

      {/* reviews and ratings */}
      <footer className="blog-post-reviews mt-15 mx-auto max-w-screen-xl text-left">
        <p className="font-mono font-bold text-2xl text-gray-900">
          Rating and Reviews
        </p>
        {/* Check if reviews exist */}
        {reviewsAndRatings.length > 0 ? (
          reviewsAndRatings.map((review, index) => (
            <div key={index} className="my-4 p-4 border-b border-gray-200">
              <div className="flex items-center mb-2">
                <span className="font-bold mr-2">
                  {review?.userDTO?.username || "Anonymous"}
                </span>
                <div className="flex">{renderStars(review.rating)}</div>
                <span className="text-sm text-gray-500 ml-2">
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
      </footer>
      {/* <div className="flex flex-row space-x-5 justify-end mr-10">
        <button
          onClick={() => handleUpdateRecipe(recipe.id)}
          className="bg-blue-600 hover:bg-blue-700 text-white w-24 font-bold py-2 px-4 rounded-lg"
        >
          Edit
        </button>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"
        >
          Delete
        </button>
      </div> */}
    </div>
  );
};

export default ViewRecipe;
