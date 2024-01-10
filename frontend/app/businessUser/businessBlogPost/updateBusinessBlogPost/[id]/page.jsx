"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// this is to update particular blog post under business user
// router path: /businessUser/businessBlogPost/updateBusinessBlogPost/[id]

// Import the Quill editor only on the client-side
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

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

const fetchBlogPostById = async (postId) => {
  try {
    const response = await axiosInterceptorInstance.get("/blog/get");
    console.log("response data is:", response.data);

    const filteredData = response.data.filter(
      (post) => post.educationalContent === false
    );

    console.log("filtered data is:", filteredData);

    // Ensure postId is an integer if the IDs in data are integers
    postId = parseInt(postId, 10);

    const blogPost = filteredData.find((post) => post.id === postId);
    if (!blogPost) {
      console.error(`Blog post with ID ${postId} not found in filtered data`);
      throw new Error(`Blog post with ID ${postId} not found`);
    }
    return blogPost;
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    throw error;
  }
};

const updateBlogPost = async (updatedPost) => {
  console.log("Sending the following data to update:", updatedPost);
  try {
    // Ensure all values are simple data types
    const response = await axiosInterceptorInstance.put(
      "/blog/edit",
      updatedPost
    );
    console.log("Blog post updated successfully:", response.data);

    // Handle successful update (e.g., redirect or show a message)
  } catch (error) {
    console.error("Error updating blog post:", error);
    // Update the state to show the error
    setError(error.message || "Failed to update blog post");
  }
};

const UpdateBusinessBlogPostPage = ({ params }) => {
  const [businessBlogPost, setBusinessBlogPost] = useState("");
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [category, setCategory] = useState("");
  const [info, setInfo] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    console.log("The success state is being called");
    // Reset success state when component mounts or postId changes
    setSuccess(false);
  }, [params.id]);

  useEffect(() => {
    const postId = decodeURIComponent(params.id); // Make sure to decode the ID
    fetchBlogPostById(postId)
      .then((data) => {
        setBusinessBlogPost(data);
        console.log("data is:", data);

        // Set each piece of state with the corresponding data
        setTitle(data.title);
        setPublisher(data.publisher);
        setCategory(data.category);
        setInfo(data.info);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
        // Handle the error appropriately
      });
  }, [params.id]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value); // Updating the title state
    setSuccess(false); // Reset success state on change
    console.log("New title:", e.target.value); // Log to check the updated value
  };

  const handlePublisherChange = (e) => {
    setPublisher(e.target.value); // Correctly setting the publisher state
    setSuccess(false); // Reset success state on change
    console.log("New publisher:", e.target.value); // Log to check the updated value
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value); // Correctly setting the main content state
    setSuccess(false); // Reset success state on change
    console.log("New info:", e.target.value); // Log to check the updated value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const updatedPost = {
        id: businessBlogPost.id, // Assuming businessBlogPost.id is the right ID
        active: true, // Assuming you always want this to be true
        publisher: publisher,
        title: title,
        info: info,
        userID: { id: "3" }, // Assuming userID should always be "3"
      };

      await updateBlogPost(updatedPost);
      // Consider navigation or success message here
      setSuccess(true); // Set success to true on successful update
      setError(""); // Clear any previous errors
    } catch (updateError) {
      setSuccess(false); // Ensure success is false on error
      setError(updateError.message || "Failed to update blog post");
    }
  };

  // Quill editor wrapper should have an id that matches the label's for attribute
  const quillEditorId = "info";

  return (
    <div className="bg-cyan-900 min-h-screen flex flex-col justify-center px-6 lg:px-8">
      <div
        className="mt-16 mb-16 mx-auto bg-slate-100 rounded-lg shadow"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <div className="p-4 space-y-4 md:space-y-12">
          <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
            <h1 className="text-xl font-bold mb-6 leading-tight tracking-tight text-black md:text-2xl">
              Update Business Blog Post
            </h1>
            <form className="space-y-3" onSubmit={handleSubmit}>
              {/* <form className="space-y-3"> */}
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
                  onChange={handleTitleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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

              {/* info */}
              <div className="flex flex-col">
                <label
                  htmlFor={quillEditorId}
                  className="block text-xl mb-1 font-medium text-cyan-950"
                >
                  Info:
                </label>
                <QuillNoSSRWrapper
                  theme="snow"
                  value={info}
                  onChange={setInfo}
                  modules={UpdateBusinessBlogPostPage.modules}
                  formats={UpdateBusinessBlogPostPage.formats}
                  className="h-44 pb-7"
                  id={quillEditorId} // Make sure this id is unique and matches the htmlFor attribute of the label
                />
              </div>
              {/* IMAGE URL */}
              <div className="flex flex-col">
                <label
                  htmlFor="imageUrl"
                  className="text-xl font-medium text-black mb-2 mt-6"
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
              {success && (
                <p className="text-green-500">
                  Blog post updated successfully!
                </p>
              )}
              {/* SUBMIT BUTTON */}
              <div className="flex flex-row space-x-5">
                <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg">
                  <Link href="/businessUser/businessBlogPost">Back</Link>
                </button>
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg"
                >
                  Update
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
