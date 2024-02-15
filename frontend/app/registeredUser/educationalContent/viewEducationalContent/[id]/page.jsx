"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import RegisteredUserNavBar from "../../../../components/navigation/registeredUserNavBar";
import SecureStorage from "react-secure-storage";
import Footer from "@/app/components/footer/index.jsx";

// this is to view particular educational content from landing page
// router path: registeredUser/educationalContent/viewEducationalContent/[id]

const fetchEduContentById = async (postId) => {
  try {
    // Ensure postId is a string if the IDs in your URL need to be strings
    postId = postId;

    const response = await axiosInterceptorInstance.get(
      `/educationalContent/get/${postId}`
    );
    console.log("Fetched educational content is:", response.data);

    if (!response.data) {
      console.error(`Educational Content with ID ${postId} not found`);
      throw new Error(`Educational Content with ID ${postId} not found`);
    }

    // Assuming the response contains the educational content directly
    const eduContent = response.data;

    return eduContent;
  } catch (error) {
    console.error("Failed to fetch educational content:", error);
    throw error;
  }
};

const ViewEducationalContent = ({ params }) => {
  const [eduContent, setEduContent] = useState(null);
  const [reviewsAndRatings, setReviewsAndRatings] = useState([]);
  const router = useRouter();
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
      const postId = decodeURIComponent(params.id); // Make sure to decode the ID
      fetchEduContentById(postId)
        .then((data) => {
          setEduContent(data);
          // Assuming the educational content id is needed to fetch the reviews
          fetchEduContentRatingsAndReviews(data.id);
        })
        .catch((error) => {
          console.error("Error fetching educational content:", error);
        })
        .finally(() => {
          setIsLoading(false); // Set loading to false when operation is complete
        });
    }
  }, [params.id]);

  const fetchEduContentRatingsAndReviews = async (educationalContentId) => {
    try {
      // Include the eduContentId in the URL as a query parameter
      const response = await axiosInterceptorInstance.get(
        `/educationalContent/rating/getEducationalContent?educationalContentId=${educationalContentId}`
      );
      console.log("All ratings response data:", response.data);

      // Assuming response.data is the array of reviews for the given eduContentId
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
      educationalContentReviewRatingId: {
        UserID: SecureStorage.getItem("userId"), // The ID of the user submitting the review
        educationalContentID: eduContent.id, // The ID of the blog post being reviewed
      },
      rating: newRating,
      review: newReview,
    };

    try {
      const response = await axiosInterceptorInstance.post(
        "/educationalContent/rating/add",
        payload
      );
      console.log("Review submitted: ", response.data);

      // Clear the form fields on successful submission
      setNewRating(0);
      setNewReview("");

      // Optionally, refresh the reviews to include the new one
      fetchEduContentRatingsAndReviews(eduContent.id);
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

  // // Check if the educational content has been fetched yet
  // if (!eduContent) {
  //   return <div className="text-xl">Please wait. It'll just take a moment</div>;
  // }

  const getImageUrlFromBlob = (imgBlob) => {
    // Check if imgBlob is truthy
    if (imgBlob) {
      // Return the image URL created from the blob
      return `data:image/jpeg;base64,${imgBlob}`;
    }
    // Return an empty string or a placeholder image URL if imgBlob is not available
    return "";
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
            {/* Conditional rendering based on isLoading state */}
            {isLoading ? (
              <div className="loading-indicator text-center">
                <p>Loading educational content...</p>
              </div>
            ) : (
              <>
                <div className="text-center font-semibold font-sans p-4 lg:p-0">
                  <h1 className="flex flex-wrap justify-center mb-4 text-2xl font-extrabold text-gray-900 lg:mb-6 lg:text-5xl">
                    {eduContent.title || "Untitled Educational Content"}
                  </h1>
                  {/* Publisher and published date section */}
                  <div className="flex justify-center text-sm font-serif font-semibold lg:text-base text-gray-900 space-x-6 mx-auto max-w-screen-xl">
                    <p>
                      Published by:{" "}
                      <span className="text-orange-600 font-bold tracking-tight">
                        {capitalizeFirstLetter(eduContent.publisher) ||
                          "Not Specified"}
                      </span>
                    </p>
                    <p>
                      Posted on:{" "}
                      <span className="text-orange-600 font-bold tracking-tight">
                        {new Date(
                          eduContent.createdDateTime
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
                        {eduContent.educationalContentType
                          ? eduContent.educationalContentType.subcategoryName
                          : "Not specified"}
                      </span>
                    </p>
                  </div>
                  {/* End of publihsed, published date, category */}
                </div>

                {/* Image Section */}
                <div className="h-auto w-full border-0">
                  {eduContent?.imgBlob ? (
                    // If imgBlob is available, display image from blob
                    <img
                      className="lg:max-w-4xl max-w-full mx-auto mt-8 mb-8 rounded-lg shadow-xl"
                      src={getImageUrlFromBlob(eduContent?.imgBlob)}
                      alt={"Educational content Image"}
                    />
                  ) : (
                    // If imgBlob is not available, display image from imgUrl
                    <img
                      className="lg:max-w-4xl max-w-full mx-auto mt-8 mb-8 rounded-lg shadow-xl"
                      src={eduContent?.img || "Not specified"}
                      alt="Educational content Image"
                    />
                  )}
                  {/* Image title */}
                  <p className="mt-2 text-center text-gray-900 font-medium text-sm">
                    {eduContent?.imgTitle || "Image Title Not Specified"}
                  </p>
                </div>

                {/* Info*/}
                <section className="main-content mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-xl text-left">
                  <div className="w-full p-2 rounded-lg whitespace-pre-line">
                    {eduContent.info}
                  </div>
                </section>
                
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
          {/* <Footer /> */}
        </>
      )}
    </div>
  );
};

export default ViewEducationalContent;
