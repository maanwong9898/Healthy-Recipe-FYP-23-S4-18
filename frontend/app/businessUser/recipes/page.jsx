"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// router path: /businessUser/businessBlogPost
// this is the page for business user to view all of their blog posts

// Called the controller to get the list of all business blog posts belongs to this business user
// this is the simple mock data for blog post but a blog post should have more attributes
const mockCreatedRecipes = [
  {
    recipeTitle: "Lemon Garlic Herb Grilled Chicken Breast",
    date_published: "2023-12-10",
    ratings: 3.4,
    reviews: 25,
    isActive: true,
  },
  {
    recipeTitle: "Grilled Salmon with Quinoa and Asparagus",
    date_published: "2023-12-15",
    ratings: 4.8,
    reviews: 20,
    isActive: true,
  },
  {
    recipeTitle: "Mango and Avocado Quinoa Salad",
    date_published: "2023-09-28",
    ratings: 4.8,
    reviews: 23,
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

const MyBusinessRecipes = () => {
  const router = useRouter();
  const [recipes, setRecipes] = useState(mockCreatedRecipes);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState(sortOptions.EARLIEST.key);

  // this function is to view particular recipe
  const handleViewRecipes = (recipeSpecTitle) => {
    // Make sure the blogPostTitle
    console.log(`Blog Title: ${recipeSpecTitle}`);

    // Redirect to the correct route
    let routePath = `/businessUser/recipes/viewRecipe/${recipeSpecTitle}`;

    router.push(routePath);
  };

  // this function is to update particular blog post
  const handleUpdateRecipe = (recipeSpecTitle) => {
    // Make sure the blogPostTitle
    console.log(`Recipe Title: ${recipeSpecTitle}`);

    // Redirect to the correct route
    let routePath = `/businessUser/recipes/updateRecipe/${recipeSpecTitle}`;

    router.push(routePath);
  };

  // Function to handle search
  const handleSearch = () => {
    const filteredRecipes = mockCreatedRecipes.filter((post) =>
      post.recipeTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setRecipes(filteredRecipes);
  };

  // Function to handle sort
  //   const sortRecipes = (option) => {
  //     let sortedBlogs;
  //     switch (option) {
  //       case sortOptions.OLDEST.key:
  //         sortedBlogs = [...businessBlogs].sort(
  //           (a, b) => new Date(a.date_published) - new Date(b.date_published)
  //         );
  //         break;
  //       case sortOptions.EARLIEST.key:
  //         sortedBlogs = [...businessBlogs].sort(
  //           (a, b) => new Date(b.date_published) - new Date(a.date_published)
  //         );
  //         break;
  //       case sortOptions.HIGHEST_RATINGS.key:
  //         sortedBlogs = [...businessBlogs].sort((a, b) => b.ratings - a.ratings);
  //         break;
  //       case sortOptions.LOWEST_RATINGS.key:
  //         sortedBlogs = [...businessBlogs].sort((a, b) => a.ratings - b.ratings);
  //         break;
  //       default:
  //         sortedBlogs = [...businessBlogs];
  //     }
  //     setBusinessBlogs(sortedBlogs);
  //   };

  // useEffect(() => {
  //   sortBlogs(sortOption);
  // }, [sortOption, businessBlogs]);

  return (
    <div className="px-2 sm:px-5  bg-cyan-800 min-h-screen flex flex-col py-5">
      <h1 className="text-2xl text-white p-3 mb-4 font-bold text-center sm:text-left">
        My Recipes
      </h1>
      <div>
        <button className="text-white border-2 border-black bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-base font-bold px-5 py-2.5 mr-7 mb-4 text-center">
          <Link href="/businessUser/recipes/createRecipe">Create Recipes</Link>
        </button>
      </div>
      {/* Search and Sort Section */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <input
            type="text"
            id="recipeSearch" // Adding an id attribute here
            name="recipeSearch" // Adding a name attribute here
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search recipes"
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
              <th className="px-3 py-2 text-xl text-left">Recipe Title</th>
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
            {mockCreatedRecipes.map((businessRecipe, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessRecipe.recipeTitle}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessRecipe.date_published}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessRecipe.ratings}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessRecipe.reviews}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  <span
                    className={`rounded-full px-3 py-1 text-base font-semibold ${
                      businessRecipe.isActive === true
                        ? "text-white bg-gradient-to-br from-cyan-400 to-cyan-600"
                        : "text-white bg-gradient-to-br from-orange-600 to-red-700"
                    }`}
                  >
                    {businessRecipe.isActive === true ? "Active" : "Inactive"}
                  </span>
                </td>

                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() =>
                      handleViewRecipes(businessRecipe.recipeTitle)
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
                      handleUpdateRecipe(businessRecipe.recipeTitle)
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

export default MyBusinessRecipes;
