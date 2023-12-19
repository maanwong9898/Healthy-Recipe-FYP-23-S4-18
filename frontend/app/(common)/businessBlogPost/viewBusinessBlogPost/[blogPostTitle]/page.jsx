"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import HomeNavbar from "@/app/components/navigation/homeNavBar";

// this is to view particular blog post under registered user
// router path: /registeredUser/businessBlogPost/viewBusinessBlogPost/[blogPostTitle]

const mockBusinessBlogPost = {
  id: "1928374650",
  blogTitle: "Transform Your Cooking with Our Revolutionary Kitchen Tools",
  publisher: "Lucas Brown",
  category: "Kitchenware",
  introduction:
    "Discover the future of cooking with our exclusive line of advanced kitchen tools. Designed for efficiency and elegance, our products are a must-have for every modern kitchen.",
  main_content:
    "Our collection features the UltraBlend Pro, a multifunctional blender with smart settings for perfect textures every time, priced at $199. The PrecisionChef Smart Thermometer, available for $49, ensures your dishes are cooked to perfection. Don't miss our SpaceSaver Kitchen Set, an all-in-one solution for small kitchens, now only $129. Each product is crafted for durability and style, promising a seamless cooking experience.",
  conclusion:
    "Elevate your culinary skills with our state-of-the-art kitchen tools. Exceptional quality at unbeatable prices – upgrade your kitchen today and cook like a pro!",
  image_url:
    "https://img.freepik.com/free-photo/top-view-ice-cream-tools-concept_23-2148425369.jpg?w=826&t=st=1702639149~exp=1702639749~hmac=90330eb53a1f60067db8b4b6d0a313f1d29143679940cb3456ccdcdc52b65b28",
  image_title: "Revolutionary Kitchen Tools",
  date_published: "2022-08-23",
  ratings: 4.8,
  reviews: 105,
  isActive: true,
};
// should have a list of reviews and ratings for each blog post
const mockBusinessBlogPost_RatingAndReviews = [
  {
    username: "Jason",
    ratings: 4,
    reviews: "This is a good blog post",
    date_published: "2021-10-01",
  },
  {
    username: "Jessica",
    ratings: 5,
    reviews: "Highly recommended!",
    date_published: "2023-11-15",
  },
];

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

const UserViewBusinessBlogPost = ({ params }) => {
  const [businessBlogPost, setBusinessBlogPost] =
    useState(mockBusinessBlogPost);
  const [reviewsAndRatings, setReviewsAndRatings] = useState(
    mockBusinessBlogPost_RatingAndReviews
  );

  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);

  const submitReview = () => {
    // Add logic here to handle the submission of the review and rating
    // For example, you could update the state to include the new review or send it to a backend server
    console.log("Review:", newReview, "Rating:", newRating);
    // Reset the state after submission
    setNewReview("");
    setNewRating(0);
  };

  const handleRatingChange = (ratingValue) => {
    setNewRating(ratingValue);
  };

  // this is to prevent unexpected error when title contains space
  // Decode params from URL
  const decodedParams = decodeURIComponent(params.blogPostTitle);

  // Slugify the decoded params
  const slugFromParams = slugify(decodedParams);

  // Slugify the blog title
  const slugifiedBlogTitle = slugify(mockBusinessBlogPost.blogTitle);

  // Compare the slugs
  const isMatchingTitle = slugFromParams === slugifiedBlogTitle;

  if (!isMatchingTitle) {
    // Handle the mismatch here
    console.error(
      "The blog post title from the URL does not match the title of the mock data."
    );
  } else {
    console.log(
      "The blog post title from the URL matches the title of the mock data."
    );
  }
  // end of checking whitespace in title

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
    <div>
      <HomeNavbar />
      <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 ">
        <div className="text-center font-semibold font-mono">
          <h1 className="mb-4 text-2xl font-extrabold leading-tight text-cyan-900 lg:mb-6 lg:text-4xl dark:text-white">
            {businessBlogPost.blogTitle}
          </h1>
          <div className="flex justify-center text-base lg:text-xl text-black space-x-6 mx-auto max-w-screen-xl">
            <p>
              Published by:{" "}
              <span className="text-cyan-600">
                {businessBlogPost.publisher}
              </span>
            </p>
            <p>
              Posted on:{" "}
              <span className="text-cyan-600">
                {new Date(businessBlogPost.date_published).toLocaleDateString()}
              </span>
            </p>
            <p>
              Category:{" "}
              <span className="text-cyan-600">{businessBlogPost.category}</span>
            </p>
          </div>
        </div>
        <article>
          <section className="introduction  mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
            {businessBlogPost.introduction}
          </section>

          <img
            src={businessBlogPost.image_url}
            alt={businessBlogPost.image_title}
            className="max-w-xl mx-auto mt-8 mb-8 rounded-lg shadow-xl sm:mt-16 sm:mb-16"
          />

          <section className="main-content  mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
            {businessBlogPost.main_content}
          </section>
          <p className="font-mono font-bold text-cyan-600  mt-10 pl-9 pr-9 mx-auto max-w-screen-xl text-2xl text-left">
            Conclusion
          </p>
          <section className="conclusion  mt-5 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
            {businessBlogPost.conclusion}
          </section>
        </article>
        <footer className="blog-post-reviews mt-10 px-9 mx-auto max-w-screen-xl text-left">
          <p className="font-mono font-bold text-2xl text-cyan-600">
            Rating and Reviews
          </p>

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
        </footer>
      </div>
    </div>
  );
};

export default UserViewBusinessBlogPost;
