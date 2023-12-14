"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// this is to view particular blog post under business user
// router path: /businessUser/businessBlogPost/viewBusinessBlogPost/[blogPostTitle]

const mockBusinessBlogPost = {
  id: "1234567890",
  blogTitle: "Seasonal Savors: A Cookbook for Every Time of the Year",
  publisher: "Michael Lim",
  category: "Cookbook",
  introduction:
    "Welcome to 'Seasonal Savors', your ultimate companion for year-round culinary adventures! This cookbook is crafted with love, featuring a medley of recipes that celebrate the unique flavors and ingredients each season has to offer. From the fresh blossoms of spring to the hearty harvest of autumn, we invite you to embark on a gastronomic journey through the year. Get ready to explore dishes that will not only nourish the body but also delight the senses.",
  main_content:
    "Our journey begins with the rejuvenating tastes of spring, introducing dishes like 'Spring Pea Risotto' and 'Lemon Herb Chicken'. As we bask in the summer sun, we'll dive into refreshing 'Watermelon Gazpacho' and 'Grilled Peach Salad'. The crisp air of fall calls for 'Pumpkin Spice Soup' and 'Roasted Root Vegetables', while winter comforts with 'Hearty Beef Stew' and 'Decadent Chocolate Peppermint Cake'. Each recipe is accompanied by tips on sourcing the best seasonal produce and pairing your meals with appropriate wines and beverages.",
  conclusion:
    "As the year closes, we hope 'Seasonal Savors' has inspired you to embrace the beauty of seasonal cooking. The recipes provided are more than just instructions; they are a canvas for creativity and a chance to forge memorable moments with loved ones. So, cherish the flavors each season brings and let your kitchen be a place of discovery all year long.",

  image_url:
    "https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_1280.jpg",
  image_title: "Recipe Book",
  date_published: "2021-10-01",
  ratings: 4,
  reviews: 10,
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

const ViewBusinessBlogPost = ({ params }) => {
  const [businessBlogPost, setBusinessBlogPost] =
    useState(mockBusinessBlogPost);
  const [reviewsAndRatings, setReviewsAndRatings] = useState(
    mockBusinessBlogPost_RatingAndReviews
  );

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
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 ">
      <div className="text-center font-semibold font-mono">
        <h1 className="mb-4 text-2xl font-extrabold leading-tight text-cyan-900 lg:mb-6 lg:text-4xl dark:text-white">
          {businessBlogPost.blogTitle}
        </h1>
        <div className="flex justify-center text-base lg:text-xl text-black space-x-6 mx-auto max-w-screen-xl">
          <p>
            Published by:{" "}
            <span className="text-cyan-600">{businessBlogPost.publisher}</span>
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
  );
};

export default ViewBusinessBlogPost;
