"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// router path: /businessUser/businessBlogPost
// this is the page for business user to view all of their blog posts

// Called the controller to get the list of all business blog posts belongs to this business user
// this is the simple mock data for blog post but a blog post should have more attributes
const mockMyBusinessBlogPosts = [
  {
    blogTitle: "Seasonal Savors: A Cookbook for Every Time of the Year",
    date_published: "2021-10-01",
    ratings: 4,
    reviews: 10,
    isActive: true,
  },
  {
    blogTitle: "Cutting Edge: The Ultimate Guide to Kitchen Knives",
    date_published: "2022-04-15",
    ratings: 2,
    reviews: 5,
    isActive: true,
  },
  {
    blogTitle: "lend It Like a Pro: Mastering Mixers and Blenders",
    date_published: "2023-01-10",
    ratings: 4,
    reviews: 5,
    isActive: true,
  },
];

// Sorting options
const sortOptions = {
  EARLIEST: { key: "EARLIEST", label: "By Earliest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  LOWEST_RATINGS: { key: "LOWEST_RATINGS", label: "Lowest Ratings" },
};

const MyBusinessBlogPosts = () => {
  const router = useRouter();
  const [businessBlogs, setBusinessBlogs] = useState(mockMyBusinessBlogPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState(sortOptions.EARLIEST.key);

  // this function is to view particular blog post
  const handleViewBlogPost = (blogPostTitle) => {
    // Make sure the blogPostTitle
    console.log(`Blog Title: ${blogPostTitle}`);

    // Redirect to the correct route
    let routePath = `/businessUser/businessBlogPost/viewBusinessBlogPost/${blogPostTitle}`;

    router.push(routePath);
  };

  // this function is to update particular blog post
  const handleUpdateBlogPost = (blogPostTitle) => {
    // Make sure the blogPostTitle
    console.log(`Blog Title: ${blogPostTitle}`);

    // Redirect to the correct route
    let routePath = `/businessUser/businessBlogPost/updateBusinessBlogPost/${blogPostTitle}`;

    router.push(routePath);
  };

  // Function to handle search
  const handleSearch = () => {
    const filteredBlogs = mockMyBusinessBlogPosts.filter((post) =>
      post.blogTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBusinessBlogs(filteredBlogs);
  };

  // Function to handle sort
  const sortBlogs = (option) => {
    let sortedBlogs;
    switch (option) {
      case sortOptions.OLDEST.key:
        sortedBlogs = [...businessBlogs].sort(
          (a, b) => new Date(a.date_published) - new Date(b.date_published)
        );
        break;
      case sortOptions.EARLIEST.key:
        sortedBlogs = [...businessBlogs].sort(
          (a, b) => new Date(b.date_published) - new Date(a.date_published)
        );
        break;
      case sortOptions.HIGHEST_RATINGS.key:
        sortedBlogs = [...businessBlogs].sort((a, b) => b.ratings - a.ratings);
        break;
      case sortOptions.LOWEST_RATINGS.key:
        sortedBlogs = [...businessBlogs].sort((a, b) => a.ratings - b.ratings);
        break;
      default:
        sortedBlogs = [...businessBlogs];
    }
    setBusinessBlogs(sortedBlogs);
  };

  // useEffect(() => {
  //   sortBlogs(sortOption);
  // }, [sortOption, businessBlogs]);

  return (
    <div className="px-2 sm:px-5  bg-cyan-800 min-h-screen flex flex-col py-5">
      <h1 className="text-2xl text-white p-3 mb-4 font-bold text-center sm:text-left">
        My Business Blog Posts
      </h1>
      <div>
        <button className="text-white border-2 border-black bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 mr-7 mb-4 text-center">
          <Link href="/businessUser/businessBlogPost/createBusinessBlogPost">
            Create Business Blog Post
          </Link>
        </button>
      </div>
      {/* Search and Sort Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <input
            type="text"
            id="blogSearch" // Adding an id attribute here
            name="blogSearch" // Adding a name attribute here
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search blog posts"
            className="mr-2 p-2 rounded border"
          />
          <button
            onClick={handleSearch}
            className="text-white border-2 border-black bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 mr-7 mb-3 mt-3 text-center"
          >
            Search
          </button>
        </div>
        <div>
          <label htmlFor="sort" className="mr-2 font-2xl text-white">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="p-2 rounded border"
          >
            {Object.values(sortOptions).map((option) => (
              <option key={option.key} value={option.key}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-black border-2">
          <thead className="bg-cyan-600 font-semibold text-cyan-950 border-black border-2">
            <tr>
              <th className="px-3 py-2 text-xl text-left">Blog Post Title</th>
              <th className="px-3 py-2 text-xl text-left">Date Published</th>
              <th className="px-3 py-2 text-xl text-left">Ratings</th>
              <th className="px-3 py-2 text-xl text-left">Reviews</th>
              <th className="px-3 py-2 text-xl text-left">Status</th>
              <th className="px-3 py-2 text-xl text-left"></th>
              <th className="px-3 py-2 text-xl text-left"></th>
              <th className="px-3 py-2 text-xl text-left"></th>
            </tr>
          </thead>
          <tbody>
            {mockMyBusinessBlogPosts.map((businessBlogPost, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessBlogPost.blogTitle}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessBlogPost.date_published}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessBlogPost.ratings}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessBlogPost.reviews}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  <span
                    className={`rounded-full px-3 py-1 text-base font-semibold ${
                      businessBlogPost.isActive === true
                        ? "text-white bg-gradient-to-br from-cyan-400 to-cyan-600"
                        : "text-white bg-gradient-to-br from-orange-600 to-red-700"
                    }`}
                  >
                    {businessBlogPost.isActive === true ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() =>
                      handleViewBlogPost(businessBlogPost.blogTitle)
                    }
                    className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-7
                    mr-7 text-center"
                  >
                    {" "}
                    View
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() =>
                      handleUpdateBlogPost(businessBlogPost.blogTitle)
                    }
                    className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-7
                    mr-7 text-center"
                  >
                    {" "}
                    Edit
                  </button>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    // onClick={() => handleSuspendRecipe(recipe.recipeName)}
                    className="text-white font-bold bg-gradient-to-br from-orange-600 to-red-700 hover:bg-gradient-to-bl border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-7
                    mr-7 text-center"
                  >
                    {" "}
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBusinessBlogPosts;
