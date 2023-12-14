"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// router path: /sysAdmin/suspendBlogPost

// Called the controller to get the list of all "Active" business blog posts
// this is the simple mock data for blog post but a blog post should have more attributes
const mockBusinessBlogPosts = [
  // Existing Entry
  {
    blogTitle: "Seasonal Savors: A Cookbook for Every Time of the Year",
    creator_name: "Business1",
    company_name: "Company A",
    date_published: "2021-10-01",
    isActive: true,
  },
  // New Entries
  {
    blogTitle: "Urban Gardening: Growing Greens in Small Spaces",
    creator_name: "Business1",
    company_name: "GreenThumb Inc.",
    date_published: "2022-04-15",
    isActive: true,
  },
  {
    blogTitle: "Tech Trends: Innovations Shaping Our Future",
    creator_name: "Business1",
    company_name: "TechWorld Solutions",
    date_published: "2023-01-10",
    isActive: true,
  },
  {
    blogTitle: "Fitness Fundamentals: A Guide to a Healthier Life",
    creator_name: "Carlos",
    company_name: "ActiveLife LLC",
    date_published: "2022-07-21",
    isActive: true,
  },
  {
    blogTitle: "Artisan Baking: Secrets of Sourdough",
    creator_name: "Emma",
    company_name: "BakeCrafters",
    date_published: "2021-12-05",
    isActive: true,
  },
  {
    blogTitle: "Travel Tales: Exploring Hidden Gems of the World",
    creator_name: "Raj",
    company_name: "GlobeTrotters Blog",
    date_published: "2023-03-30",
    isActive: true,
  },
];

const SuspendBusinessBlogPostPage = () => {
  const [businessBlogs, setBusinessBlogs] = useState(mockBusinessBlogPosts);

  return (
    <div className="px-2 sm:px-5  bg-cyan-800 min-h-screen flex flex-col py-5">
      <h1 className="text-2xl text-white p-3 mb-4 font-bold text-center sm:text-left">
        Business Blog Posts
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-black border-2">
          <thead className="bg-cyan-600 font-semibold text-cyan-950 border-black border-2">
            <tr>
              <th className="px-3 py-2 text-xl text-left">Blog Post Title</th>
              <th className="px-3 py-2 text-xl text-left">Posted By</th>
              <th className="px-3 py-2 text-xl text-left">Company</th>
              <th className="px-3 py-2 text-xl text-left">Date Published</th>
              <th className="px-3 py-2 text-xl text-left">Status</th>
              <th className="px-3 py-2 text-xl text-left"></th>
            </tr>
          </thead>
          <tbody>
            {mockBusinessBlogPosts.map((businessBlogPost, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessBlogPost.blogTitle}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessBlogPost.creator_name}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessBlogPost.company_name}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessBlogPost.date_published}
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

                <td className="px-3 py-2 flex flex-wrap justify-center sm:justify-start gap-2">
                  <button
                    // onClick={() => handleSuspendRecipe(recipe.recipeName)}
                    className="text-white font-bold bg-gradient-to-br from-orange-600 to-red-700 hover:bg-gradient-to-bl
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 ml-7
                    mr-7 text-center"
                  >
                    {" "}
                    Suspend
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

export default SuspendBusinessBlogPostPage;

// // this function is to suspend the recipe
//   // ready to be tested
//   // the url will be changed to the backend url
//   const viewUserRecipe = async () => {
//     try {
//       const response = await fetch(
//         "http://localhost:8080/api/recipe/readAllRecipes"
//       );
//       if (response.ok) {
//         const data = await response.json();
//         // write the data into console for debugging
//         console.log("data from backend");
//         console.log(data);
//         setRecipes(data);
//       } else {
//         console.error("Failed to fetch recipe list");
//       }
//     } catch (error) {
//       console.error("Error fetching data", error);
//     }
//   };

//   // this function is to suspend particular recipe
//   const handleSuspendRecipe = async (recipeName) => {
//     // Check the username
//     console.log(`Recipe: ${recipeName}`);

//     // Send a request to backend to suspend the account
//     try {
//       const response = await fetch(
//         `http://localhost:8080/api/recipe/suspendRecipe/${recipeName}`,
//         {
//           method: "PUT",
//         }
//       );
//       if (response.ok) {
//         // Refresh the recipe list
//         viewUserRecipe();
//       } else {
//         console.error("Failed to suspend recipe");
//       }
//     } catch (error) {
//       console.error("Error suspending recipe", error);
//     }
//   };

//   useEffect(() => {
//     viewUserRecipe();
//   }, []);
