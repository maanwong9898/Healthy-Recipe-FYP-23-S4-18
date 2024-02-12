"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import RegisteredUserNavBar from "../../../../components/navigation/registeredUserNavBar";
import SecureStorage from "react-secure-storage";
// this is to view particular meal plan
// router path: registeredUser/mealPlan/viewMealPlan/[id]

const getImageUrlFromBlob = (imgBlob) => {
  // Check if imgBlob is truthy
  if (imgBlob) {
    // Return the image URL created from the blob
    return `data:image/jpeg;base64,${imgBlob}`;
  }
  // Return an empty string or a placeholder image URL if imgBlob is not available
  return "";
};

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
      {recipe?.imgBlob ? (
        // If imgBlob is available, display image from blob
        <img
          className="w-full h-48 object-cover rounded-sm text-white text-center"
          src={getImageUrlFromBlob(recipe?.imgBlob)}
          alt={"Image of " + recipe.title}
        />
      ) : (
        // If imgBlob is not available, display image from imgUrl
        <img
          className="w-full h-48 object-cover rounded-sm text-white text-center"
          src={recipe?.img || "Not specified"}
          alt={"Image of " + recipe.title}
        />
      )}
      {/* <img
        className="w-full h-48 object-cover rounded-sm text-white text-center"
        src={recipe.img}
        alt={"Image of " + recipe.title}
      /> */}
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
  const [newRating, setNewRating] = useState(0);
  const [newReview, setNewReview] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [hasAlreadyReviewed, setHasAlreadyReviewed] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = SecureStorage.getItem("token");
    const role = SecureStorage.getItem("role");
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !token ||
      role !== "REGISTERED_USER" ||
      now >= parseInt(tokenExpiration)
    ) {
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

      // Get the ID of the current user
      const currentUserId = SecureStorage.getItem("userId");

      // Check if current user has already submitted a review
      const userReview = response.data.find(
        (review) => review.userDTO.id === currentUserId
      );
      setHasAlreadyReviewed(!!userReview);
    } catch (error) {
      console.error("Failed to fetch ratings and reviews:", error);
    }
  };

  const handleViewRecipe = (id) => {
    console.log("Viewing recipe with id:", id);

    // Redirect to the correct route
    let routePath = `/registeredUser/recipes/viewRecipe/${id}`;

    router.push(routePath);
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
      mealPlanReviewRatingId: {
        UserID: SecureStorage.getItem("userId"), // The ID of the user submitting the review
        MealPlanID: mealPlan.id, // The ID of the blog post being reviewed
      },
      rating: newRating,
      review: newReview,
    };

    try {
      const response = await axiosInterceptorInstance.post(
        "/mealPlan/rating/add",
        payload
      );
      console.log("Review submitted: ", response.data);

      // Clear the form fields on successful submission
      setNewRating(0);
      setNewReview("");

      // Optionally, refresh the reviews to include the new one
      fetchMealPlanRatingsAndReviews(mealPlan.id);
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

  // if (!mealPlan) {
  //   return <div>Loading...</div>;
  // }

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
      {isLoading && isChecking ? (
        <div>Checking...</div>
      ) : (
        <>
          <RegisteredUserNavBar />
          <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
            {isLoading ? (
              <div className="loading-indicator text-center">
                <p>Loading meal plan...</p>
                {/* You can replace this with a spinner or any other visual indicator */}
              </div>
            ) : (
              <>
                <div className="text-center font-semibold font-sans">
                  <h1 className="flex flex-wrap justify-center mb-4 text-2xl font-extrabold text-gray-900 lg:mb-6 lg:text-4xl">
                    {mealPlan.title || "Untitled Meal Plan"}
                  </h1>
                  {/* Publisher and published date section */}
                  <div className="flex justify-center text-sm font-serif font-semibold lg:text-base text-gray-900 space-x-6 mx-auto max-w-screen-xl">
                    <p>
                      Published by:{" "}
                      <span className="text-orange-600 font-bold tracking-tight">
                        {capitalizeFirstLetter(mealPlan?.publisher) ||
                          "Not specified"}
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
                  {mealPlan?.imgBlob ? (
                    <img
                      src={getImageUrlFromBlob(mealPlan?.imgBlob)}
                      alt={mealPlan.img_title || "Meal Plan Image"}
                      className="max-w-full mx-auto mt-8 mb-8 sm:max-w-xl sm:mt-16 sm:mb-16 rounded-lg shadow-xl"
                    />
                  ) : (
                    <img
                      src={mealPlan.img}
                      alt={mealPlan.img_title || "Meal Plan Image"}
                      className="max-w-full mx-auto mt-8 mb-8 sm:max-w-xl sm:mt-16 sm:mb-16 rounded-lg shadow-xl"
                    />
                  )}

                  {/* Main content */}
                  <section className="main-content mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
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
                    {/* <div className="flex justify-between items-center mb-4 md:mt-8 ml-4">
              <div></div>
              <div className="flex gap-4">
                <button
                  onClick={prevRecipe}
                  className="rounded-md bg-orange-500 hover:bg-orange-600 transition duration-300 ease-in-out"
                >
                  <ChevronLeftIcon
                    style={{ fontSize: "2.5rem", color: "white" }}
                  />
                </button>
                <button
                  onClick={nextRecipe}
                  className="rounded-md bg-orange-500 hover:bg-orange-600 transition duration-300 ease-in-out"
                  style={{
                    marginRight: "1rem",
                  }}
                >
                  <ChevronRightIcon
                    style={{ fontSize: "2.5rem", color: "white" }}
                  />
                </button>
              </div>
            </div> */}
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
                  <section className="main-content mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
                    <div className="w-full p-2 rounded-lg whitespace-pre-line">
                      {mealPlan.conclusion}
                    </div>
                  </section>
                </article>

                {/* Ratings and Reviews */}
                <div className="blog-post-reviews mt-16 mx-auto max-w-screen-xl text-left border-t-2 border-gray-50">
                  <p className="font-sans font-bold text-2xl md:text-4xl text-gray-900 mb-4 md:mt-8 ml-4 lg:ml-0">
                    Rating and Reviews
                  </p>
                  {/*Check if reviews exist*/}
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
                  {/* Ask to write reviews */}
                  {!hasAlreadyReviewed ? (
                    <footer className="blog-post-reviews mt-10 px-9 mx-auto max-w-screen-xl text-left">
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
                                  onChange={() =>
                                    handleRatingChange(ratingValue)
                                  }
                                  className="hidden"
                                />
                                <span
                                  className={
                                    ratingValue <= newRating
                                      ? "text-yellow-300 cursor-pointer"
                                      : "text-gray-300 cursor-pointer"
                                  }
                                >
                                  ★
                                </span>
                              </label>
                            );
                          })}
                        </div>
                        <p className="text-red-500">{validationMessage}</p>
                        <button
                          onClick={submitReview}
                          disabled={submitting}
                          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
                        >
                          {submitting ? "Submitting..." : "Submit Review"}
                        </button>
                      </div>
                    </footer>
                  ) : (
                    <p className="p-4">
                      You have already submitted a review for this education
                      content.
                    </p>
                  )}
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ViewMealPlan;
