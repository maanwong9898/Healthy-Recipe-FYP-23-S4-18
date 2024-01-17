"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";

// router path: /sysAdmin/suspendBlogPost

const SuspendBusinessBlogPostPage = () => {
  const [businessBlogs, setBusinessBlogs] = useState([]);

  // get all the blog from the backend
  const viewAllBusinessBlogs = async () => {
    try {
      const response = await axiosInterceptorInstance.get("/blog/get");
      console.log(response.data);
      setBusinessBlogs(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  // Combined Function to toggle a business blog post active status (either suspend or unsuspend)
  const handleToggleBlogPostStatus = async (blogPostId, isActive) => {
    const newStatus = !isActive;

    try {
      const response = await axiosInterceptorInstance.put("/blog/suspend", {
        id: blogPostId,
        active: newStatus,
      });

      // Check if the response is successful before updating the state
      if (response.status === 200) {
        const updatedBlogs = businessBlogs.map((blog) => {
          if (blog.id === blogPostId) {
            return { ...blog, active: newStatus };
          }
          return blog;
        });
        setBusinessBlogs(updatedBlogs);
      } else {
        console.error("Failed to update the blog post status:", response);
      }
    } catch (error) {
      console.error("Error updating blog post status", error);
    }
  };

  useEffect(() => {
    viewAllBusinessBlogs();
  }, []);

  return (
    <div className="px-2 sm:px-5  bg-cyan-800 min-h-screen flex flex-col py-5">
      <h1 className="text-2xl text-white p-3 mb-4 font-bold text-center sm:text-left">
        All Business Blog Posts
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full rounded-lg border-black border-2">
          <thead className="bg-cyan-600 font-semibold text-cyan-950 border-black border-2">
            <tr>
              <th className="px-3 py-2 text-xl text-left">Blog Post Title</th>
              <th className="px-3 py-2 text-xl text-left">Publisher</th>
              <th className="px-3 py-2 text-xl text-left">Company</th>
              <th className="px-3 py-2 text-xl text-left">Date Published</th>
              <th className="px-3 py-2 text-xl text-left">Status</th>
              <th className="px-3 py-2 text-xl text-left"></th>
            </tr>
          </thead>
          <tbody>
            {businessBlogs.map((businessBlogPost, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessBlogPost.title}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessBlogPost.userID?.fullName || "nil"}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {businessBlogPost.userID?.companyName || "nil"}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {new Date(
                    businessBlogPost.createdDateTime
                  ).toLocaleDateString("en-GB")}
                </td>
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  <span
                    className={`rounded-full px-3 py-1 text-base font-semibold ${
                      businessBlogPost.active === true
                        ? "text-white bg-gradient-to-br from-cyan-400 to-cyan-600"
                        : "text-white bg-gradient-to-br from-orange-600 to-red-700"
                    }`}
                  >
                    {businessBlogPost.active === true ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="px-3 py-2 justify-center sm:justify-start">
                  <button
                    onClick={() =>
                      handleToggleBlogPostStatus(
                        businessBlogPost.id,
                        businessBlogPost.active
                      )
                    }
                    className={`text-white font-bold bg-gradient-to-br border-black border-2 ${
                      businessBlogPost.active
                        ? "from-orange-600 to-red-700 hover:bg-gradient-to-bl"
                        : "from-blue-400 to-purple-600 hover:bg-gradient-to-bl"
                    } focus:ring-4 focus:outline-none focus:ring-blue-300
    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5 text-center`}
                  >
                    {businessBlogPost.active ? "Suspend" : "Unsuspend"}
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
