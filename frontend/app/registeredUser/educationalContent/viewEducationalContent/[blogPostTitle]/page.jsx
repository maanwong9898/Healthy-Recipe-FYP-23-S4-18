"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// this is to view particular educational content under registered user
// router path: /registeredUser/educationalContent/viewEducationalContent/[blogPostTitle]

const mockEducationalContent = {
  id: "3456789012",
  blogTitle: "Living Well: Daily Practices for a Vibrant Life",
  publisher: "Jordan Smith",
  category: "Healthy Lifestyle",
  introduction:
    "Welcome to 'Living Well: Daily Practices for a Vibrant Life', a comprehensive guide to enhancing your daily routine for optimal health and happiness. This book is your ally in building a lifestyle that fosters physical, mental, and emotional well-being.",
  main_content:
    "Explore chapters like 'Morning Yoga Routines', 'Mindful Meditation Techniques', 'Balanced Diet Plans', and 'Effective Exercise Regimens'. Each section provides practical advice, easy-to-follow activities, and motivational insights to help you create a balanced and enriching lifestyle.",
  conclusion:
    "'Living Well' is more than a guide; it's a companion in your journey towards holistic well-being. By integrating these practices into your daily life, you'll discover a deeper sense of vitality, clarity, and joy. Embrace the path to a vibrant life, one day at a time.",
  image_url:
    "https://img.freepik.com/free-photo/close-up-kid-meditating-mat_23-2149101612.jpg?w=826&t=st=1702698008~exp=1702698608~hmac=3493459a84121109aad5dd0837dbd50ad85e685e28eb107942118ebb3c13189f",
  image_title: "Healthy Lifestyle",
  date_published: "2023-03-22",
  ratings: 4.7,
  reviews: 45,
  isActive: true,
};
// should have a list of reviews and ratings for each blog post
const mockEducationalContent_RatingAndReviews = [
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

const UserViewEducationalContent = ({ params }) => {
  const [educationalContent, setEducationalContent] = useState(
    mockEducationalContent
  );
  const [reviewsAndRatings, setReviewsAndRatings] = useState(
    mockEducationalContent_RatingAndReviews
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
  const slugifiedBlogTitle = slugify(mockEducationalContent.blogTitle);

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
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 ">
      <div className="text-center font-semibold font-mono">
        <h1 className="mb-4 text-2xl font-extrabold leading-tight text-cyan-900 lg:mb-6 lg:text-4xl dark:text-white">
          {educationalContent.blogTitle}
        </h1>
        <div className="flex justify-center text-base lg:text-xl text-black space-x-6 mx-auto max-w-screen-xl">
          <p>
            Published by:{" "}
            <span className="text-cyan-600">
              {educationalContent.publisher}
            </span>
          </p>
          <p>
            Posted on:{" "}
            <span className="text-cyan-600">
              {new Date(educationalContent.date_published).toLocaleDateString()}
            </span>
          </p>
          <p>
            Category:{" "}
            <span className="text-cyan-600">{educationalContent.category}</span>
          </p>
        </div>
      </div>
      <article>
        <section className="introduction  mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
          {educationalContent.introduction}
        </section>

        <img
          src={educationalContent.image_url}
          alt={educationalContent.image_title}
          className="max-w-xl mx-auto mt-8 mb-8 rounded-lg shadow-xl sm:mt-16 sm:mb-16"
        />

        <section className="main-content  mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
          {educationalContent.main_content}
        </section>
        <p className="font-mono font-bold text-cyan-600  mt-10 pl-9 pr-9 mx-auto max-w-screen-xl text-2xl text-left">
          Conclusion
        </p>
        <section className="conclusion  mt-5 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
          {educationalContent.conclusion}
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

export default UserViewEducationalContent;
