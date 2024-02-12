"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import HomeNavbar from "../../../../components/navigation/homeNavBar";
import Footer from "../../../../components/footer";

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
  const [isLoading, setIsLoading] = useState(true);

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

  // Check if the blog post has been fetched
  // if (!businessBlogPost) {
  //   return <div>Please wait. It'll just take a moment</div>;
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

  return (
    <div>
      <HomeNavbar />
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
              <h1 className="flex flex-wrap justify-center mb-4 text-2xl font-extrabold text-gray-900 lg:mb-6 lg:text-5xl">
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
              {businessBlogPost?.imgBlob ? (
                // If imgBlob is available, display image from blob
                <img
                  className="max-w-full mx-auto mt-8 mb-8 sm:max-w-xl sm:mt-16 sm:mb-16 rounded-lg shadow-xl"
                  src={getImageUrlFromBlob(businessBlogPost?.imgBlob)}
                  alt={"Blog Image"}
                />
              ) : (
                // If imgBlob is not available, display image from imgUrl
                <img
                  className="max-w-full mx-auto mt-8 mb-8 sm:max-w-xl sm:mt-16 sm:mb-16 rounded-lg shadow-xl"
                  src={businessBlogPost?.img || "Not specified"}
                  alt="Blog Image"
                />
              )}
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

export default ViewBusinessBlogPost;
