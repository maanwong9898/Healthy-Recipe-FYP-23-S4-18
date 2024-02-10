"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import RegisteredUserNavBar from "../../../../components/navigation/registeredUserNavBar";

// this is to view particular blog post from blog page
// router path: /registeredUser/businessBlogPost/viewBusinessBlogPost/[id]

const fetchBlogPostById = async (postId) => {
  try {
    // Ensure postId is a string if the IDs in your URL need to be strings
    postId = postId;

    const response = await axiosInterceptorInstance.get(`/blog/get/${postId}`);
    console.log("Fetched blog post data is:", response.data);

    if (!response.data) {
      console.error(`Blog post with ID ${postId} not found`);
      throw new Error(`Blog post with ID ${postId} not found`);
    }

    console.log("try blog post by id");
    // Assuming the response contains the blog post directly
    const blogPost = response.data;

    return blogPost;
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    throw error;
  }
};

const ViewBusinessBlogPost = ({ params }) => {
  const [businessBlogPost, setBusinessBlogPost] = useState(null);
  const [reviewsAndRatings, setReviewsAndRatings] = useState([]);
  const router = useRouter();
  const [newRating, setNewRating] = useState(0);
  const [newReview, setNewReview] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [hasAlreadyReviewed, setHasAlreadyReviewed] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true); // Set loading state to true

    const userId = SecureStorage.getItem("userId");
    if (userId) {
      console.log("Registered user id is: ", userId);
    } else {
      console.log("User ID not found in local storage");
    }

    const postId = decodeURIComponent(params.id); // Make sure to decode the ID
    fetchBlogPostById(postId)
      .then((data) => {
        setBusinessBlogPost(data);
        // Assuming the blog ID is needed to fetch the reviews
        fetchBlogRatingsAndReviews(data.id);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false when operation is complete
      });
  }, [params.id]);

  const fetchBlogRatingsAndReviews = async (blogId) => {
    try {
      // Include the blogId in the URL as a query parameter
      const response = await axiosInterceptorInstance.get(
        `/blog/rating/getBlog?blogId=${blogId}`
      );
      console.log("All ratings response data:", response.data);

      // Assuming response.data is the array of reviews for the given blogId
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
      blogReviewRatingId: {
        UserID: SecureStorage.getItem("userId"), // The ID of the user submitting the review
        blogID: businessBlogPost.id, // The ID of the blog post being reviewed
      },
      rating: newRating,
      review: newReview,
    };

    try {
      const response = await axiosInterceptorInstance.post(
        "/blog/rating/add",
        payload
      );
      console.log("Review submitted: ", response.data);

      // Clear the form fields on successful submission
      setNewRating(0);
      setNewReview("");

      // Optionally, refresh the reviews to include the new one
      fetchBlogRatingsAndReviews(businessBlogPost.id);
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

  // Check if the blog post has been fetched
  if (!businessBlogPost) {
    return <div>Please wait. It'll just take a moment</div>;
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

  return (
    <div>
      <RegisteredUserNavBar />

      <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
        {/* Conditional rendering based on isLoading state */}
        {isLoading ? (
          <div className="loading-indicator text-center">
            <p>Loading blog post...</p>
            {/* You can replace this with a spinner or any other visual indicator */}
          </div>
        ) : (
          <>
            <div className="text-center font-semibold font-sans">
              <h1 className="flex flex-wrap justify-center mb-4 text-xl font-extrabold text-gray-900 lg:mb-6 lg:text-4xl">
                {businessBlogPost.title || "Untitled Blog Post"}
              </h1>
              {/* Publisher and published date section */}
              <div className="flex justify-center text-sm font-serif font-semibold lg:text-base text-gray-900 space-x-6 mx-auto max-w-screen-xl">
                <p>
                  Published by:{" "}
                  <span className="text-orange-600 font-bold tracking-tight">
                    {businessBlogPost.publisher || "Not specified"}
                  </span>
                </p>
                <p>
                  Published on:{" "}
                  <span className="text-orange-600 font-bold tracking-tight">
                    {new Date(
                      businessBlogPost.createdDateTime
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
                    {businessBlogPost.blogType
                      ? businessBlogPost.blogType.subcategoryName
                      : "Not specified"}
                  </span>
                </p>
              </div>
              {/* End of publisher, published date, category */}
            </div>
            {/* Image section */}
            <article>
              <img
                src={businessBlogPost.img}
                alt="Designed by Freepik"
                className="max-w-full mx-auto mt-8 mb-8 sm:max-w-xl sm:mt-16 sm:mb-16 rounded-lg shadow-xl"
              />
              {/* Info*/}
              <section className="main-content mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
                <div className="w-full p-2 rounded-lg whitespace-pre-line">
                  {businessBlogPost.info}
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
                              onChange={() => handleRatingChange(ratingValue)}
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
                  You have already submitted a review for this blog post.
                </p>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ViewBusinessBlogPost;
