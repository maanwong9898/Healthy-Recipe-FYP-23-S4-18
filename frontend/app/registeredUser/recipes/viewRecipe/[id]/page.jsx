"use client";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";

// router path: /registeredUser/recipes/viewRecipe/[id]

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
  const [newRating, setNewRating] = useState(0);
  const [newReview, setNewReview] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [hasAlreadyReviewed, setHasAlreadyReviewed] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {
    console.log(" first useEffect");
    const userId = localStorage.getItem("userId");
    if (userId) {
      console.log("Registered user id is: ", userId);
    } else {
      console.log("User ID not found in local storage");
    }
    const recipeId = decodeURIComponent(params.id); // Make sure to decode the ID
    fetchRecipesById(recipeId)
      .then((data) => {
        setRecipe(data);
        // Assuming the recipe ID is needed to fetch the reviews
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

      // Get the ID of the current user
      const currentUserId = localStorage.getItem("userId");

      // Check if current user has already submitted a review
      const userReview = response.data.find(
        (review) => review.userDTO.id === currentUserId
      );
      setHasAlreadyReviewed(!!userReview);
    } catch (error) {
      console.error("Failed to fetch ratings and reviews:", error);
    }
  };

  const submitReview = async () => {
    if (newRating === 0) {
      // Assuming 0 means no rating is selected
      setValidationMessage(
        "Please select a rating before submitting your review."
      );
      return; // Prevent the rest of the function from running
    }

    setSubmitting(true);
    setValidationMessage(""); // Clear any previous validation messages

    // Construct the payload according to your API requirements
    const payload = {
      recipeReviewRatingId: {
        UserID: localStorage.getItem("userId"), // The ID of the user submitting the review
        RecipeID: recipe.id, // The ID of the recipe being reviewed
      },
      rating: newRating,
      review: newReview,
    };

    try {
      const response = await axiosInterceptorInstance.post(
        "/recipe/rating/add",
        payload
      );
      console.log("Review submitted: ", response.data);

      // Clear the form fields on successful submission
      setNewRating(0);
      setNewReview("");

      // Optionally, refresh the reviews to include the new one
      fetchRecipesRatingsAndReviews(recipe.id);
    } catch (error) {
      console.error("Failed to submit review: ", error);
      // Handle error (e.g., show error message to the user)
    } finally {
      setSubmitting(false); // End the submission process
    }
  };

  const handleRatingChange = (ratingValue) => {
    setNewRating(ratingValue);
  };

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

  return (
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
            {recipe ? renderAllergens(recipe.allergies) : "Not specified"}
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
        </div>

        {/* Show ratings at the top of the title temporary no need*/}
        {/* <div className="flex justify-left ml-3 text-base lg:text-base text-black space-x-6 mx-auto max-w-screen-xl">
          <p>
            Rating: <span className="text-orange-600 font-bold">{recipe.ratings}</span>
          </p>
          <p>
            Reviews: <span className="text-orange-600 font-bold">{recipe.reviews}</span>
          </p>
        </div> */}
      </div>

      {/* start of summary card */}
      <div className="flex flex-col lg:flex-row mt-4 p-5 bg-slate-100 mx-auto">
        <img
          className="h-auto w-full lg:max-w-lg rounded-lg ml-0 lg:ml-5 shadow-md"
          src={recipe?.img || "Not specified"}
          alt="Not found"
        />
        <div className="flex flex-col ml-0 lg:ml-4 mt-4">
          <div className="flex flex-row font-bold">
            <p className="mr-4 text-bold text-lg tracking-tight">
              Cooking Time:{" "}
              <span className="text-orange-600 font-semibold text-base">
                {recipe?.cookingTime
                  ? `Approx. ${recipe.cookingTime} mins`
                  : "Not specified"}
              </span>
            </p>
            <p className="mr-4 text-bold text-lg tracking-tight">
              Total Serving:{" "}
              <span className="text-orange-600 font-semibold text-base">
                {recipe?.servingSize || "Not specified"} pax
              </span>
            </p>
          </div>
          <p className="font-bold mt-4 lg:mt-8 text-2xl tracking-tight whitespace-pre-line">
            Description:
          </p>
          <p className="mt-2 items-center">
            {recipe?.description || "Not specified"}
          </p>
          <p className="font-bold mt-4 lg:mt-8 text-2xl tracking-tight whitespace-pre-line">
            Dietary Information:
          </p>
          <p className="mt-2 items-center">{recipe?.info || "Not specified"}</p>

          <div className="mt-4 lg:mt-28 mb-4">
            <p className="font-bold text-2xl tracking-tight">
              Nutrition Information:{" "}
              <span className="font-medium text-sm ">(per serving)</span>
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
                {recipe?.fibre ? `${recipe.fibre} mg` : "N/A"}
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
          {recipe?.ingredients.split("\n").map((ingredient, index) => (
            <li key={index} className="list-disc ml-4">
              {ingredient}
            </li>
          )) || <li>Not specified</li>}
        </ul>

        <ul className="flex flex-col mt-8 md:w-1/2 md:ml-0 md:mt-4 whitespace-pre-line leading-6">
          <ol className="font-bold text-2xl tracking-tight mb-2 text-gray-900">
            Instructions
          </ol>
          <ol>{recipe ? renderSteps(recipe.steps) : <li>Not specified</li>}</ol>
        </ul>
      </div>
      {/* reviews and ratings */}
      <div className="blog-post-reviews mt-16 mx-auto max-w-screen-xl text-left border-t-2 border-gray-50">
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

        {/* Ask to write reviews */}
        {!hasAlreadyReviewed ? (
          <div className="blog-post-reviews mt-10 px-9 mx-auto max-w-screen-xl text-left">
            <p className="font-sans font-bold text-2xl text-gray-900">
              Write a Review
            </p>
            <div className="my-4">
              <textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Write your review here"
                className="w-full p-2.5 border border-gray-300 bg-gray-50 rounded-lg"
              />
              <div className="flex my-2">
                {[...Array(5)].map((_, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={ratingValue}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        checked={newRating === ratingValue}
                        onChange={() => handleRatingChange(ratingValue)}
                        className="hidden"
                      />
                      <span
                        className={
                          ratingValue <= newRating
                            ? "text-yellow-400 cursor-pointer"
                            : "text-gray-400 cursor-pointer"
                        }
                      >
                        ★
                      </span>
                    </label>
                  );
                })}
              </div>
              <p className="text-red-500 font-semibold text-sm">
                {validationMessage}
              </p>
              <button
                onClick={submitReview}
                disabled={submitting}
                className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                {submitting ? "Submitting..." : "Submit Review"}
              </button>
            </div>
          </div>
        ) : (
          <p>You have already submitted a review for this recipe.</p>
        )}
      </div>
    </div>
  );
};

export default ViewRecipe;
