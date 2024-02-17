"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import BusinessUserNavBar from "../../../../components/navigation/businessUserNavBar";
import SecureStorage from "react-secure-storage";

// this is to view particular educational content
// router path: /businessUser/educationalContent/viewEducationalContent/[id]

const fetchEduContentById = async (postId) => {
  try {
    // Ensure postId is a string if the IDs in your URL need to be strings
    postId = postId;

    const response = await axiosInterceptorInstance.get(
      `/educationalContent/get/${postId}`
    );

    if (!response.data) {
      console.error(`Educational Content with ID ${postId} not found`);
      throw new Error(`Educational content with ID ${postId} not found`);
    }

    // Assuming the response contains the educational content directly
    const eduContent = response.data;

    return eduContent;
  } catch (error) {
    console.error("Failed to fetch educational content:", error);
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
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  const fetchEduContentRatingsAndReviews = async (educationalContentId) => {
    try {
      // Include the educationalContentId in the URL as a query parameter
      const response = await axiosInterceptorInstance.get(
        `/educationalContent/rating/getEducationalContent?educationalContentId=${educationalContentId}`
      );
      // Assuming response.data is the array of reviews for the given educationalContentId
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
      const postId = decodeURIComponent(params.id); // Make sure to decode the ID
      fetchEduContentById(postId)
        .then((data) => {
          setEduContent(data);
          // Assuming the educational content ID is needed to fetch the reviews
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

  if (isChecking) {
    return <div>Checking...</div>;
  }

  // Check if the educational content has been fetched yet
  if (!eduContent) {
    return <div className="text-xl">Please wait. It'll just take a moment</div>;
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

  // this function is to update particular educational content
  const handleUpdateEduContent = (id) => {
    // Redirect to the correct route
    let routePath = `/businessUser/educationalContent/updateEducationalContent/${id}`;

    router.push(routePath);
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
                <div className="text-center font-semibold font-sans">
                  <h1 className="flex flex-wrap justify-center mb-4 text-2xl font-extrabold text-gray-900 lg:mb-6 lg:text-5xl">
                    {eduContent.title || "Untitled Educational Content"}
                  </h1>
                  {/* Publisher and published date section */}
                  <div className="flex justify-center text-sm font-serif font-semibold lg:text-base text-gray-900 space-x-6 mx-auto max-w-screen-xl">
                    <p>
                      Published by:{" "}
                      <span className="text-orange-600 font-bold tracking-tight">
                        {eduContent.publisher || "Not Specified"}
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
                <div className="flex flex-row space-x-5 justify-end mr-10 mt-16">
                  <button
                    onClick={() => handleUpdateEduContent(eduContent.id)}
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

export default ViewEduContent;
