"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";

// this is to view particular educational content
// router path: /businessUser/educationalContent/viewEducationalContent/[id]

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

const fetchEduContentById = async (postId) => {
  try {
    // Ensure postId is a string if the IDs in your URL need to be strings
    postId = postId;

    const response = await axiosInterceptorInstance.get(
      `/educationalContent/get/${postId}`
    );
    console.log("Fetched educational content data is:", response.data);

    if (!response.data) {
      console.error(`Educational Content with ID ${postId} not found`);
      throw new Error(`Educational content with ID ${postId} not found`);
    }

    // Assuming the response contains the blog post directly
    const eduContent = response.data;

    return eduContent;
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    throw error;
  }
};

const ViewEduContent = ({ params }) => {
  const [eduContent, setEduContent] = useState(null);
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

    const postId = decodeURIComponent(params.id); // Make sure to decode the ID
    fetchEduContentById(postId)
      .then((data) => {
        setEduContent(data);
        // Assuming the educational content ID is needed to fetch the reviews
        fetchEduContentRatingsAndReviews(data.id);
      })
      .catch((error) => {
        console.error("Error fetching educational content:", error);
      });
  }, [params.id]);

  const fetchEduContentRatingsAndReviews = async (educationalContentId) => {
    try {
      // Include the educationalContentId in the URL as a query parameter
      const response = await axiosInterceptorInstance.get(
        `/educationalContent/rating/getEducationalContent?educationalContentId=${educationalContentId}`
      );
      console.log("All ratings response data:", response.data);

      // Assuming response.data is the array of reviews for the given educationalContentId
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

  if (!eduContent) {
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

  // this function is to update particular educational content
  const handleUpdateEduContent = (id) => {
    console.log("Updating edu content with id:", id);

    // Redirect to the correct route
    let routePath = `/businessUser/educationalContent/updateEducationalContent/${id}`;

    router.push(routePath);
  };

  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white">
      <div className="text-center font-semibold font-mono">
        <h1 className="mb-4 text-2xl font-extrabold leading-tight text-cyan-900 lg:mb-6 lg:text-4xl">
          {eduContent.title}
        </h1>
        <div className="flex justify-center text-base lg:text-xl text-black space-x-6 mx-auto max-w-screen-xl">
          <p>
            Published by:{" "}
            <span className="text-cyan-600">{eduContent.publisher}</span>
          </p>
          <p>
            Posted on:{" "}
            <span className="text-cyan-600">
              {new Date(eduContent.createdDateTime).toLocaleDateString(
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
              {eduContent.educationalContentType
                ? eduContent.educationalContentType.subcategoryName
                : "Not specified"}
            </span>
          </p>
        </div>
      </div>
      <article>
        <img
          src={eduContent.img}
          alt="Designed by Freepik"
          className="max-w-xl mx-auto mt-8 mb-8 rounded-lg shadow-xl sm:mt-16 sm:mb-16"
        />
        {/* Info*/}
        <section className="main-content mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
          <div className="w-full p-2 rounded-lg whitespace-pre-line">
            {eduContent.info}
          </div>
        </section>
      </article>
      {/* Ratings and Reviews */}
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
      </div>
      <div className="flex flex-row space-x-5 justify-end mr-10 mt-16">
        <button
          onClick={() => handleUpdateEduContent(eduContent.id)}
          className="bg-blue-600 hover:bg-blue-700 text-white w-24 font-bold py-2 px-4 rounded-lg"
        >
          Edit
        </button>
        {/* <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white w-24 font-bold py-2 px-4 rounded-lg"
        >
          Delete
        </button> */}
      </div>
    </div>
  );
};

export default ViewEduContent;
