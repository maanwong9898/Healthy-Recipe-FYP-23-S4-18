"use client";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState } from "react";

// router path: /registeredUser/viewRecipe/[recipeTitle]

const mockRecipeContent = {
  id: "1234512345",
  recipeTitle: "Grilled Salmon with Quinoa and Asparagus",
  publisher: "Daniel Carter",
  category: "High-Protein",
  cooking_time: "25 Mins",
  number_of_servings: "2 Pax",
  description:
    "A nutritious and delicious dish featuring grilled salmon, quinoa, and asparagus.",
  ingredients:
    "2 salmon fillets \n\n" +
    "1 cup quinoa, rinsed \n\n" +
    "2 cups water \n\n" +
    "1 bunch asparagus, trimmed \n\n" +
    "2 tablespoons olive oil \n\n" +
    "Juice of 1 lemon \n\n" +
    "Salt and pepper to taste \n\n" +
    "Fresh dill for garnish",
  instructions:
    "Step 1: \n Preheat the grill to medium-high heat.\n\n" +
    "Step 2: \n Season salmon fillets with salt, pepper, and a drizzle of olive oil. Grill for 4-5 minutes per side, or until cooked through. \n\n" +
    "Step 3: \n In a saucepan, combine quinoa and water. Bring to a boil, then reduce heat, cover, and simmer for 15 minutes, or until quinoa is cooked and water is absorbed.\n\n" +
    "Step 4: \n While quinoa is cooking, toss asparagus with olive oil, salt, and pepper. Grill for 3-4 minutes, or until tender-crisp.\n\n" +
    "Step 5: \n Assemble the dish by placing a bed of quinoa on each plate, topping with grilled salmon and asparagus.\n\n" +
    "Step 6: \n Drizzle with lemon juice, garnish with fresh dill, and serve hot.",
  total_calories: "450",
  carbs: "30g",
  protein: "40g",
  fat: "18g",
  fibre: "5g",
  sodium: "100mg",
  image_url:
    "https://img.freepik.com/free-photo/baked-salmon-garnished-with-asparagus-tomatoes-with-herbs_2829-14481.jpg?w=1800&t=st=1702801194~exp=1702801794~hmac=3ccec1eb9e8014410d7d5a0f87530ae6909d6ed292f1ab0d6f0b26f6dcd1f22e",
  image_title: "Grilled Salmon with Quinoa and Asparagus",
  date_published: "2023-12-15",
  ratings: 4.8,
  reviews: 20,
  isActive: true,
};

// should have a list of reviews and ratings for each recipe
const mockRecipe_RatingAndReviews = [
  {
    username: "Jason",
    ratings: 4,
    reviews: "This is a good recipe",
    date_published: "2021-10-01",
  },
  {
    username: "Jessica",
    ratings: 5,
    reviews: "Highly recommended!",
    date_published: "2023-11-15",
  },
];

const UserViewRecipe = ({ params }) => {
  const [recipe, setRecipe] = useState(mockRecipeContent);
  const [reviewsAndRatings, setReviewsAndRatings] = useState(
    mockRecipe_RatingAndReviews
  );
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(null);

  const submitReview = () => {
    // Add logic here to handle the submission of the review and rating
    // For example, you could update the state to include the new review or send it to a backend server
    console.log("Review:", newReview, "Rating:", newRating);
    // Reset the state after submission
    setNewReview("");
    setNewRating(null);
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
          className={i < rating ? "text-yellow-500" : "text-gray-300"}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
      <div className="px-10 text-left font-semibold font-mono">
        <h1 className="mb-4 text-xl font-extrabold leading-tight text-cyan-900 lg:mb-6 lg:text-4xl dark:text-white">
          {recipe.recipeTitle}
        </h1>
        <div className="flex justify-left ml-3 text-base lg:text-base text-black space-x-6 mx-auto max-w-screen-xl">
          <p>
            Published by:{" "}
            <span className="text-cyan-600">{recipe.publisher}</span>
          </p>
          <p>
            Posted on:{" "}
            <span className="text-cyan-600">
              {new Date(recipe.date_published).toLocaleDateString()}
            </span>
          </p>
          <p>
            Category: <span className="text-cyan-600">{recipe.category}</span>
          </p>
        </div>

        {/* Show ratings at the top of the title */}
        <div className="flex justify-left ml-3 text-base lg:text-base text-black space-x-6 mx-auto max-w-screen-xl">
          <p>
            Rating: <span className="text-cyan-600">{recipe.ratings}</span>
          </p>
          <p>
            Reviews: <span className="text-cyan-600">{recipe.reviews}</span>
          </p>
        </div>
      </div>

      {/* start of summary card */}
      <div className="flex flex-col md:flex-row mt-4 p-5 bg-gray-50">
        <img
          className="h-auto max-w-lg rounded-lg ml-5 shadow-md"
          src={recipe.image_url}
          alt={recipe.image_title}
        />
        <div className="flex flex-col ml-4">
          <div className="flex flex-row font-bold">
            <p className="mr-4">
              Cooking Time:{" "}
              <span className="text-cyan-600">{recipe.cooking_time}</span>
            </p>
            <p className="mr-4 text-bold">
              Serving Size:{" "}
              <span className="text-cyan-600">{recipe.number_of_servings}</span>
            </p>
          </div>
          <p className="mt-2">{recipe.description}</p>

          <div className="mt-40 mb-4">
            <p className="font-bold">Nutritional Information Per Serving:</p>
          </div>
          <div className="grid-rows-6 flex flex-row space-x-10">
            <div className="rounded-full bg-blue-100 w-20 h-20 flex flex-col items-center text-center justify-center">
              <p className="text-sm">Calories</p>
              <p className="text-cyan-600 font-semibold">
                {recipe.total_calories}
              </p>
            </div>
            <div className="rounded-full bg-blue-100 w-20 h-20 flex flex-col items-center text-center justify-center">
              <p className="text-sm">Carbs</p>
              <p className="text-cyan-600 font-semibold">{recipe.carbs}</p>
            </div>
            <div className="rounded-full bg-blue-100 w-20 h-20 flex flex-col items-center text-center justify-center">
              <p className="text-sm">Protein</p>
              <p className="text-cyan-600 font-semibold">{recipe.protein}</p>
            </div>
            <div className="rounded-full bg-blue-100 w-20 h-20 flex flex-col items-center text-center justify-center">
              <p className="text-sm">Fat</p>
              <p className="text-cyan-600 font-semibold">{recipe.fat}</p>
            </div>
            <div className="rounded-full bg-blue-100 w-20 h-20 flex flex-col items-center text-center justify-center">
              <p className="text-sm">Fibre</p>
              <p className="text-cyan-600 font-semibold">{recipe.fibre}</p>
            </div>
            <div className="rounded-full bg-blue-100 w-20 h-20 flex flex-col items-center text-center justify-center">
              <p className="text-sm">Sodium</p>
              <p className="text-cyan-600 font-semibold">{recipe.sodium}</p>
            </div>
          </div>
        </div>
      </div>
      {/* End of summary card */}

      {/* Ingredients and Instructions */}
      <div className="flex flex-col md:flex-row mt-8 ml-7 px-20">
        {/* Ingredients column */}
        <ul className="flex flex-col md:w-1/2 whitespace-pre-line">
          <ol className="font-bold text-xl mb-2">Ingredients</ol>
          <ol>{recipe.ingredients}</ol>
        </ul>

        {/* Instructions column */}
        <ul className="flex flex-col md:w-1/2 md:ml-4 mt-4 md:mt-0 whitespace-pre-line">
          <ol className="font-bold text-xl mb-2">Instructions</ol>
          <ol>{recipe.instructions}</ol>
        </ul>
      </div>

      {/* reviews and ratings */}
      <footer className="recipes-reviews mt-10 mx-auto max-w-screen-xl text-left">
        <p className="font-mono font-bold text-2xl text-cyan-600">
          Rating and Reviews
        </p>

        {reviewsAndRatings.map((review, index) => (
          <div key={index} className="my-4 p-4 border-b border-gray-200">
            <div className="flex items-center mb-2">
              <span className="font-bold mr-2">{review.username}</span>
              <div className="flex">{renderStars(review.ratings)}</div>
              <span className="text-sm text-gray-500 ml-2">
                {new Date(recipe.date_published).toLocaleDateString()}
              </span>
            </div>
            <p>{review.reviews}</p>
          </div>
        ))}
        <div className="my-4 p-4">
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here"
            className="w-full p-2 border rounded"
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
                    onClick={() => handleRatingChange(ratingValue)}
                    className="hidden"
                  />
                  <span
                    className={
                      ratingValue <= newRating
                        ? "text-yellow-500 cursor-pointer"
                        : "text-gray-400 cursor-pointer"
                    }
                  >
                    ★
                  </span>
                </label>
              );
            })}
          </div>
          <button
            onClick={submitReview}
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit Review
          </button>
        </div>
      </footer>
    </div>
  );
};

export default UserViewRecipe;
