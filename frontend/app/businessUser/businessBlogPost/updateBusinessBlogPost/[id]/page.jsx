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

// need to change user id to the current user id

// Import the Quill editor only on the client-side
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

const fetchBlogPostById = async (postId) => {
  try {
    // Ensure postId is a string if the IDs in your URL need to be strings
    postId = postId;

    const response = await axiosInterceptorInstance.get(`/blog/get/${postId}`);
    console.log("Fetched blog post data is:", response.data);

    if (!response.data) {
      console.error(`Blog post with ID ${postId} not found`);
      throw new Error(`Blog post with ID ${postId} not found`);
    }

    console.log("try update blog post");
    // Assuming the response contains the blog post directly
    const blogPost = response.data;

    return blogPost;
  } catch (error) {
    console.error("Failed to fetch blog post:", error);
    throw error;
  }
};

const UpdateBusinessBlogPostPage = ({ params }) => {
  const [businessBlogPost, setBusinessBlogPost] = useState("");
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
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
        console.log("The displayed particular blog is:", data);

        // Set each piece of state with the corresponding data
        setTitle(data.title || "No Title");
        setPublisher(data.publisher || "No Publisher");
        setCategory(data.blogType.id || "");
        setInfo(data.info || "No Info");
        setImageUrl(data.img || "No Image");
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });

    // Fetch all business blog categories from backend
    const fetchCategories = async () => {
      console.log("Fetching categories...");
      try {
        const response = await axiosInterceptorInstance.get(
          "category/getAllBlogPostCategories"
        );
        console.log("Categories fetched:", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [params.id]);

  const updateBlogPost = async (updatedPost) => {
    console.log("Sending the following data to update:", updatedPost);
    try {
      // Ensure all values are simple data types
      const response = await axiosInterceptorInstance.put(
        "/blog/edit",
        updatedPost
      );
      console.log("Blog post updated successfully:", response.data);
      setSuccess(true);
      setError(""); // Now 'setError' is available

      // Handle successful update (e.g., redirect or show a message)
    } catch (error) {
      setError("Failed to update the blog post.");
      setSuccess(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value); // Updating the title state
    setSuccess(false); // Reset success state on change
    console.log("New title:", e.target.value); // Log to check the updated value
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value); // Correctly setting the main content state
    setSuccess(false); // Reset success state on change
    console.log("New info:", e.target.value); // Log to check the updated value
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("id");
    try {
      console.log("Updated category is:", category.id);
      const updatedPost = {
        id: businessBlogPost.id, // Assuming businessBlogPost.id is the right ID
        active: true, // Assuming you always want this to be true
        publisher: publisher,
        title: title,
        info: info,
        img: imageUrl,
        blogTypeId: category,
        userID: { id: userId }, // Need to change to the current user ID
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
    <div className="min-h-screen flex flex-col justify-center px-6 lg:px-8">
      <div
        className="mt-16 mb-16 mx-auto bg-zinc-100 rounded-lg shadow-lg p-4 md:p-8 lg:p-12"
        style={{ maxWidth: "600px", width: "100%" }}
      >
        <div className="p-4 space-y-4 md:space-y-12">
          <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              Update Blog Post
            </h1>
            <form
              className="space-y-6 md:space-y-5 lg:space-y-3"
              onSubmit={handleSubmit}
            >
              {/* TITLE */}
              <div className="flex flex-col">
                <label
                  htmlFor="title"
                  className="block text-lg mb-1 font-semibold text-gray-900"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                />
              </div>
              {/* CATEGORY DROPDOWN */}
              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="block text-lg mb-1 font-semibold text-gray-900"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                >
                  <option value="">Select a category</option>
                  {categories.map((cat, index) => (
                    <option key={index} value={cat.id}>
                      {cat.subcategoryName}
                    </option>
                  ))}
                </select>
              </div>
              {/* info */}
              <div className="flex flex-col">
                <label
                  htmlFor={quillEditorId}
                  className="block text-lg mb-1 font-semibold text-gray-900"
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
                  className="block text-lg mb-1 font-semibold text-gray-900 mt-4"
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
                  className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
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
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg">
                  <Link href="/businessUser/businessBlogPost">Back</Link>
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
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
