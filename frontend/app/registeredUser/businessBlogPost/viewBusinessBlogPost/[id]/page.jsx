"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";

// this is to view particular blog post from landing page
// router path: /businessBlogPost

// Slugify utility function
const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

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

  useEffect(() => {
    const postId = decodeURIComponent(params.id); // Make sure to decode the ID
    fetchBlogPostById(postId)
      .then((data) => {
        setBusinessBlogPost(data);
        // Assuming the blog ID is needed to fetch the reviews
        fetchBlogRatingsAndReviews(data.id);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }, [params.id]);

  const fetchBlogRatingsAndReviews = async (blogId) => {
    try {
      const response = await axiosInterceptorInstance.get(`/blog/rating/get`);
      console.log("All ratings response data:", response.data);

      // Filter the reviews to match the current blog post ID
      const filteredReviews = response.data.filter(
        (review) => review.blogReviewRatingId.blogID === blogId
      );

      console.log("filtered reviews:", filteredReviews);

      // Log each review to the console
      filteredReviews.forEach((reviewData, index) => {
        console.log(`Review ${index + 1}:`, reviewData.review);
      });

      setReviewsAndRatings(filteredReviews);
    } catch (error) {
      console.error("Failed to fetch ratings and reviews:", error);
    }
  };

  // this function is to update particular blog post
  const handleUpdateBlogPost = (id) => {
    console.log("Updating blog post with id:", id);

    // Redirect to the correct route
    let routePath = `/businessUser/businessBlogPost/updateBusinessBlogPost/${id}`;

    router.push(routePath);
  };

  if (!businessBlogPost) {
    return <div>Loading...</div>;
  }

  // Function to render stars based on rating
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
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 ">
      <div className="text-center font-semibold font-mono">
        <h1 className="mb-4 text-2xl font-extrabold leading-tight text-cyan-900 lg:mb-6 lg:text-4xl dark:text-white">
          {businessBlogPost.title}
        </h1>
        <div className="flex justify-center text-base lg:text-xl text-black space-x-6 mx-auto max-w-screen-xl">
          <p>
            Published by:{" "}
            <span className="text-cyan-600">{businessBlogPost.publisher}</span>
          </p>
          <p>
            Posted on:{" "}
            <span className="text-cyan-600">
              {new Date(businessBlogPost.createdDateTime).toLocaleDateString(
                "en-GB",
                {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                }
              )}
            </span>
          </p>

          <p>
            Category:{" "}
            <span className="text-cyan-600">
              {businessBlogPost.blogType
                ? businessBlogPost.blogType.subcategoryName
                : "Not specified"}
            </span>
          </p>
        </div>
      </div>
      <article>
        <img
          src={businessBlogPost.img}
          alt="Designed by Freepik"
          className="max-w-xl mx-auto mt-8 mb-8 rounded-lg shadow-xl sm:mt-16 sm:mb-16"
        />

        {/* Main Content */}
        <section className="main-content mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
          <div
            dangerouslySetInnerHTML={{
              __html: businessBlogPost.info,
            }}
          />
        </section>
      </article>
      <footer className="blog-post-reviews mt-10 px-9 mx-auto max-w-screen-xl text-left">
        <p className="font-mono font-bold text-2xl text-cyan-600">
          Rating and Reviews
        </p>
        {/* Check if reviews exist */}
        {reviewsAndRatings.length > 0 ? (
          reviewsAndRatings.map((review, index) => (
            <div key={index} className="my-4 p-4 border-b border-gray-200">
              <div className="flex items-center mb-2">
                <span className="font-bold mr-2">
                  {review.userAccount.fullName}
                </span>
                <div className="flex">{renderStars(review.rating)}</div>
                <span className="text-sm text-gray-500 ml-2">
                  {new Date(review.createdDateTime).toLocaleDateString(
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
          <footer className="blog-post-reviews mt-10 px-9 mx-auto max-w-screen-xl text-left">
            {reviewsAndRatings.map((review, index) => (
              <div key={index} className="my-4 p-4 border-b border-gray-200">
                <div className="flex items-center mb-2">
                  <span className="font-bold mr-2">{review.username}</span>
                  <div className="flex">{renderStars(review.ratings)}</div>
                  <span className="text-sm text-gray-500 ml-2">
                    {new Date(review.date_published).toLocaleDateString()}
                  </span>
                </div>
                <p>{review.reviews}</p>
              </div>
            ))}
            <div className="my-4 p-4">
              <textarea
                value={""}
                // onChange={(e) => setNewReview(e.target.value)}
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
                        // onClick={() => handleRatingChange(ratingValue)}
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
                // onClick={submitReview}
                className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit Review
              </button>
            </div>
          </footer>
        )}
      </footer>
    </div>
  );
};

export default ViewBusinessBlogPost;
