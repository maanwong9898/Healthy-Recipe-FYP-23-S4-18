"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// this is to update particular blog post under business user
// router path: /businessUser/businessBlogPost/updateBusinessBlogPost/%5BblogPostTitle%5D

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

const mockBlogCategory = [
  {
    category: "Cookbook",
  },
  {
    category: "Kitchen Utensils",
  },
  {
    category: "Miscellaneous",
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

const UpdateBusinessBlogPostPage = ({ params }) => {
  const [businessBlogPost, setBusinessBlogPost] =
    useState(mockBusinessBlogPost);
  const [reviewsAndRatings, setReviewsAndRatings] = useState(
    mockBusinessBlogPost_RatingAndReviews
  );

  // States for the form fields
  const [title, setTitle] = useState(mockBusinessBlogPost.blogTitle);
  const [publisher, setPublisher] = useState(mockBusinessBlogPost.publisher);
  const [category, setCategory] = useState(mockBusinessBlogPost.category);
  const [introduction, setIntroduction] = useState(
    mockBusinessBlogPost.introduction
  );
  const [mainContent, setMainContent] = useState(
    mockBusinessBlogPost.main_content
  );
  const [conclusion, setConclusion] = useState(mockBusinessBlogPost.conclusion);
  const [imageUrl, setImageUrl] = useState(mockBusinessBlogPost.image_url);
  const [imageTitle, setImageTitle] = useState(
    mockBusinessBlogPost.image_title
  );
  const [error, setError] = useState("");

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
  //end of checking whitespace in title

  return (
    <div className="bg-cyan-900 min-h-screen flex flex-col justify-center px-6 lg:px-8">
      <div
        className="mt-16 mb-16 mx-auto bg-cyan-600 rounded-lg shadow"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <div className="p-4 space-y-4 md:space-y-12">
          <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
            <h1 className="text-xl font-bold mb-6 leading-tight tracking-tight text-black md:text-2xl">
              Update Business Blog Post
            </h1>
            <form className="space-y-3">
              {/* TITLE */}
              <div className="flex flex-col">
                <label
                  htmlFor="title"
                  className="text-xl font-medium text-black mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* PUBLISHER */}
              <div className="flex flex-col">
                <label
                  htmlFor="publisher"
                  className="text-xl font-medium text-black mb-2"
                >
                  Publisher
                </label>
                <input
                  type="text"
                  name="publisher"
                  id="publisher"
                  placeholder="Publisher"
                  value={publisher}
                  onChange={(e) => setPublisher(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* CATEGORY DROPDOWN */}
              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="text-xl font-medium text-black mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  // onChange={handleCategoryChange}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Select a category</option>
                  {mockBlogCategory.map((cat, index) => (
                    <option key={index} value={cat.category}>
                      {cat.category}
                    </option>
                  ))}
                </select>
              </div>
              {/* INTRODUCTION */}
              <div className="flex flex-col">
                <label
                  htmlFor="introduction"
                  className="text-xl font-medium text-black mb-2"
                >
                  Introduction
                </label>
                <textarea
                  name="introduction"
                  id="introduction"
                  placeholder="Introduction"
                  value={introduction}
                  onChange={(e) => setIntroduction(e.target.value)}
                  rows={4} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* MAIN CONTENT */}
              <div className="flex flex-col">
                <label
                  htmlFor="mainContent"
                  className="text-xl font-medium text-black mb-2"
                >
                  Main Content
                </label>
                <textarea
                  name="mainContent"
                  id="mainContent"
                  placeholder="Main Content"
                  value={mainContent}
                  onChange={(e) => setMainContent(e.target.value)}
                  rows={7} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* CONCLUSION */}
              <div className="flex flex-col">
                <label
                  htmlFor="conclusion"
                  className="text-xl font-medium text-black mb-2"
                >
                  Conclusion
                </label>
                <textarea
                  name="conclusion"
                  id="conclusion"
                  placeholder="Conclusion"
                  value={conclusion}
                  onChange={(e) => setConclusion(e.target.value)}
                  rows={4} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* IMAGE URL */}
              <div className="flex flex-col">
                <label
                  htmlFor="imageUrl"
                  className="text-xl font-medium text-black mb-2"
                >
                  Image URL
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  id="imageUrl"
                  placeholder="Image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* IMAGE TITLE */}
              <div className="flex flex-col">
                <label
                  htmlFor="imageTitle"
                  className="text-xl font-medium text-black mb-2"
                >
                  Image Title
                </label>
                <input
                  type="text"
                  name="imageTitle"
                  id="imageTitle"
                  placeholder="Image Title"
                  value={imageTitle}
                  onChange={(e) => setImageTitle(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* ERROR MESSAGE */}
              {error && <p className="text-red-500">{error}</p>}
              {/* SUBMIT BUTTON */}
              <div className="flex flex-row space-x-5">
                <button className="bg-gradient-to-br from-red-500 to-red-700 hover:bg-blue-950 border-2 border-black text-white font-bold py-2 px-4 rounded">
                  <Link href="/businessUser/businessBlogPost">Cancel</Link>
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black text-white font-bold py-2 px-4 rounded"
                >
                  Update Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBusinessBlogPostPage;
