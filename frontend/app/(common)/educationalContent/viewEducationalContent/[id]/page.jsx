"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import HomeNavbar from "@/app/components/navigation/homeNavBar/index.jsx";
import SecureStorage from "react-secure-storage";

const fetchEduContentById = async (postId) => {
  try {
    // Ensure postId is a string if the IDs in your URL need to be strings
    postId = postId;

    const response = await axiosInterceptorInstance.get(
      `/educationalContent/get/${postId}`
    );

    if (!response.data) {
      console.error(`Educational Content with ID ${postId} not found`);
      throw new Error(`Educational Content with ID ${postId} not found`);
    }

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
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (SecureStorage.getItem("token")) {
      if (SecureStorage.getItem("role") == "ADMIN") {
        router.push("/sysAdmin");
      } else if (SecureStorage.getItem("role") == "REGISTERED_USER") {
        router.push("/registeredUser/educationalContent");
      } else if (SecureStorage.getItem("role") == "NUTRITIONIST") {
        router.push("/nutritionist");
      } else if (SecureStorage.getItem("role") == "BUSINESS_USER") {
        router.push("/businessUser");
      }
    }

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
  }, [params.id]);

  const fetchEduContentRatingsAndReviews = async (educationalContentId) => {
    try {
      // Include the eduContentId in the URL as a query parameter
      const response = await axiosInterceptorInstance.get(
        `/educationalContent/rating/getEducationalContent?educationalContentId=${educationalContentId}`
      );

      // Assuming response.data is the array of reviews for the given eduContentId
      setReviewsAndRatings(response.data);
    } catch (error) {
      console.error("Failed to fetch ratings and reviews:", error);
    }
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
      <HomeNavbar />
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
          </>
        )}
      </div>
    </div>
  );
};

export default ViewEducationalContent;
