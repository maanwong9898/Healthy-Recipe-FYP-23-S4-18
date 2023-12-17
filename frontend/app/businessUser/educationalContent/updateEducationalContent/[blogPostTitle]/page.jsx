"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// this is to update particular educational content under business user
// router path: /businessUser/educationalContent/updateEducationalContent/[blogPostTitle]

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
  ratings: 4,
  reviews: 45,
  isActive: true,
};

// should have a list of reviews and ratings for each eudcational blog post
const mockEducationalContent_RatingAndReviews = [
  {
    username: "Michael",
    ratings: 4,
    reviews: "This is a good blog post",
    date_published: "2021-10-01",
  },
  {
    username: "Jeniffer",
    ratings: 5,
    reviews: "Highly recommended!",
    date_published: "2023-11-15",
  },
];

const mockEducationalContentCategory = [
  {
    category: "Healthy Eating",
  },
  {
    category: "Healthy Lifestyle",
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
  const [educationalContent, setEducationalContent] = useState(
    mockEducationalContent
  );
  const [reviewsAndRatings, setReviewsAndRatings] = useState(
    mockEducationalContent_RatingAndReviews
  );

  // States for the form fields
  const [title, setTitle] = useState(mockEducationalContent.blogTitle);
  const [publisher, setPublisher] = useState(mockEducationalContent.publisher);
  const [category, setCategory] = useState(mockEducationalContent.category);
  const [introduction, setIntroduction] = useState(
    mockEducationalContent.introduction
  );
  const [mainContent, setMainContent] = useState(
    mockEducationalContent.main_content
  );
  const [conclusion, setConclusion] = useState(
    mockEducationalContent.conclusion
  );
  const [imageUrl, setImageUrl] = useState(mockEducationalContent.image_url);
  const [imageTitle, setImageTitle] = useState(
    mockEducationalContent.image_title
  );
  const [error, setError] = useState("");

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
              Update Educational Content
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
                  {mockEducationalContentCategory.map((cat, index) => (
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
                  <Link href="/businessUser/educationalContent">Cancel</Link>
                </button>
                <button
                  type="submit"
                  className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black text-white font-bold py-2 px-4 rounded"
                >
                  Update Educational Content
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
