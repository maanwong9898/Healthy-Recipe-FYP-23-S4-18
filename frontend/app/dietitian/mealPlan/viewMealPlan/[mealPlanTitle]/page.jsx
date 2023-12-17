"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// this is to view particular meal plan under dietitian
// router path: /dietitian/mealPlan/viewMealPlan/[mealPlanTitle]

const mockMealPlan = {
  id: "7890123456",
  mealPlanTitle: "Healthy Transformation: Weight Loss Journey",
  publisher: "Alex Johnson",
  category: "Weight Loss",
  introduction:
    "Embark on a transformative journey with 'Healthy Transformation: Weight Loss Journey'. This meticulously designed meal plan is your ally in achieving sustainable weight loss, ensuring you get all the essential nutrients without compromising on taste. Each meal is crafted to boost metabolism, reduce caloric intake, and increase satiety, guiding you towards a healthier lifestyle with every bite. Start your journey today towards a fitter, happier you with meals that are as delicious as they are nourishing.",
  main_content:
    "Dive into a culinary adventure that aligns with your weight loss goals. This plan features 'Spinach and Egg Scramble', a breakfast rich in protein and iron, setting a strong, energized tone for the day. For lunch, the 'Grilled Salmon Salad' offers a perfect blend of omega-3 fatty acids and fiber, promoting heart health and aiding digestion. Dinner is a delightful 'Chicken and Veggie Stir-Fry', packed with lean protein and a rainbow of vegetables, ensuring a balance of nutrients while keeping calories in check. Each recipe is thoughtfully selected to provide maximum nutritional benefits, aiding in weight loss while ensuring you feel full and satisfied.",
  conclusion:
    "With 'Healthy Transformation', embrace a world where diet food is no longer bland and boring. Discover the joy of eating meals that are bursting with flavor, carefully balanced to support your weight loss journey. As you progress through this plan, you'll not only shed pounds but also gain a deeper appreciation for wholesome, healthy eating. Celebrate your journey towards a vibrant, healthier lifestyle, one delicious meal at a time.",
  image_url: "https://example.com/weight_loss_meal_plan.jpg",
  image_title: "Weight Loss Meal Plan",
  date_published: "2023-04-15",
  ratings: 4.8,
  reviews: 32,
  isActive: true,
  recipes: [
    {
      id: 101,
      name: "Spinach and Egg Scramble",
      category: "Weight Loss",
      description: "A protein-rich start to your day with spinach and eggs.",
    },
    {
      id: 102,
      name: "Grilled Salmon Salad",
      category: "Weight Loss",
      description: "Fresh and flavorful salad with omega-rich grilled salmon.",
    },
    {
      id: 103,
      name: "Chicken and Veggie Stir-Fry",
      category: "Weight Loss",
      description:
        "A quick and healthy stir-fry loaded with lean chicken and vegetables.",
    },
  ],
};

// should have a list of reviews and ratings for each meal plan
const mockMealPlan_RatingAndReviews = [
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

const viewMealPlan = ({ params }) => {
  const [mealPlan, setMealPlan] = useState(mockMealPlan);
  const [reviewsAndRatings, setReviewsAndRatings] = useState(
    mockMealPlan_RatingAndReviews
  );

  // this is to prevent unexpected error when title contains space
  // Decode params from URL
  const decodedParams = decodeURIComponent(params.mealPlanTitle);

  // Slugify the decoded params
  const slugFromParams = slugify(decodedParams);

  // Slugify the blog title
  const slugifiedMealPlanTitle = slugify(mockMealPlan.mealPlanTitle);

  // Compare the slugs
  const isMatchingTitle = slugFromParams === slugifiedMealPlanTitle;

  if (!isMatchingTitle) {
    // Handle the mismatch here
    console.error(
      "The meal plan title from the URL does not match the title of the mock data."
    );
  } else {
    console.log(
      "The meal plan title from the URL matches the title of the mock data."
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
          {mealPlan.mealPlanTitle}
        </h1>
        <div className="flex justify-center text-base lg:text-xl text-black space-x-6 mx-auto max-w-screen-xl">
          <p>
            Published by:{" "}
            <span className="text-cyan-600">{mealPlan.publisher}</span>
          </p>
          <p>
            Posted on:{" "}
            <span className="text-cyan-600">
              {new Date(mealPlan.date_published).toLocaleDateString()}
            </span>
          </p>
          <p>
            Category: <span className="text-cyan-600">{mealPlan.category}</span>
          </p>
        </div>
      </div>
      <article>
        <section className="introduction  mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
          {mealPlan.introduction}
        </section>

        <img
          src={mealPlan.image_url}
          alt={mealPlan.image_title}
          className="max-w-xl mx-auto mt-8 mb-8 rounded-lg shadow-xl sm:mt-16 sm:mb-16"
        />

        <section className="main-content  mt-10 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
          {mealPlan.main_content}
        </section>
        <p className="font-mono font-bold text-cyan-600  mt-10 pl-9 pr-9 mx-auto max-w-screen-xl text-2xl text-left">
          Conclusion
        </p>
        <section className="conclusion  mt-5 pl-9 pr-9 mx-auto max-w-screen-xl md:text-base text-left">
          {mealPlan.conclusion}
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
      <div className="flex flex-row space-x-5 justify-end mr-10">
        <button className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black text-white font-bold py-3 px-4 rounded ml-9">
          <Link href="/businessUser/businessBlogPost/updateBusinessBlogPost/${mealPlanTitle}">
            Edit
          </Link>
        </button>
        <button
          type="submit"
          className="bg-gradient-to-br from-red-500 to-red-700 hover:bg-blue-950 border-2 border-black text-white font-bold py-3 px-4 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default viewMealPlan;
