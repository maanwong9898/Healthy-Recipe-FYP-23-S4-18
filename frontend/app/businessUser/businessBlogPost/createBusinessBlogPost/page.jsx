"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

// https://uiwjs.github.io/react-md-editor/

// router path: /businessUser/businessBlogPost/createBusinessBlogPost
// this is the page to create business blog post according to user story

// Import the Quill editor only on the client-side
const QuillNoSSRWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading editor...</p>,
});

const CreateBusinessBlogPostPage = () => {
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [category, setCategory] = useState(""); // State to store selected category
  const [categories, setCategories] = useState([]); // State to store categories
  const [info, setInfo] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [userId, setUserId] = useState("");

  // Function to handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  useEffect(() => {
    // Access localStorage after component mounts and is on the client-side
    // const storedUsername = localStorage.getItem("username");
    const storedUserId = localStorage.getItem("userId"); // Retrieve user ID from localStorage
    console.log("Current id", storedUserId);
    // if (storedUsername) {
    //   setPublisher(storedUsername);
    // }
    if (storedUserId) {
      setUserId(storedUserId);
    }

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
  }, []);

  const handleCreatePost = async (event) => {
    event.preventDefault();

    console.log("Create method called.");
    // Check if any of the required fields are empty
    if (!title.trim() || !info.trim()) {
      setError("Please fill in all the required fields.");
      return;
    }

    console.log("category id:", category);

    // Construct the payload according to the required format
    const blogPostData = {
      educationalContent: false, // Assuming this is a constant for all posts
      title: title, // Retrieved from state
      info: info, // Retrieved from state
      img: imageUrl, // Retrieved from state
      blogTypeId: category, // Pass the entire selected category id
      userID: { id: userId }, // replace above
    };

    console.log("Blog post data for creation:", blogPostData);

    try {
      const response = await axiosInterceptorInstance.post(
        "/blog/add",
        blogPostData
      );
      console.log("Blog post created successfully:", response.data);

      // Consider navigation or success message here
      setSuccess(true); // Set success to true on successful update

      // Reset fields after successful submission
      setTitle("");
      setCategory("");
      setInfo("");
      setImageUrl("");
      setImageTitle("");
      setError("");
    } catch (error) {
      setSuccess(false); // Ensure success is false on error
      console.error("Error creating blog post:", error);
      setError(error.message || "Failed to create blog post");
    }
  };

  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  // Quill editor wrapper should have an id that matches the label's for attribute
  const quillEditorId = "info";

  // Adding constraint for input text
  // Set character limits
  const TITLE_MAX_LENGTH = 100; // Example limit for title
  const IMAGE_URL_MAX_LENGTH = 255; // Example limit for image URL

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 lg:px-8">
      {/* Adjust the max-width and width in the inline style */}
      <div
        className="mt-16 mb-16 mx-auto bg-zinc-100 rounded-lg shadow-lg p-4 md:p-8 lg:p-12"
        style={{ maxWidth: "600px", width: "100%" }} // Increase maxWidth and set width to 100%
      >
        {" "}
        {/* Smaller maxWidth */}
        <div className="p-4 space-y-4 md:space-y-12 ">
          <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              Create Business Blog Post
            </h1>
            <form className="space-y-6 md:space-y-5 lg:space-y-3">
              {/* TITLE */}
              <div className="flex flex-col">
                <label
                  htmlFor="title"
                  className="block text-lg mb-1 font-semibold text-gray-900"
                >
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={title}
                  maxLength={TITLE_MAX_LENGTH} // Set the maximum length here
                  onChange={clearErrorOnChange(setTitle)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                />
              </div>
              {/* CATEGORY */}
              {/* CATEGORY DROPDOWN */}
              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="block text-lg mb-1 font-semibold text-gray-900"
                >
                  Category:
                </label>

                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={handleCategoryChange}
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
              {/* Info */}
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
                  modules={CreateBusinessBlogPostPage.modules}
                  formats={CreateBusinessBlogPostPage.formats}
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
                  Image URL:
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Image URL"
                  value={imageUrl}
                  maxLength={IMAGE_URL_MAX_LENGTH} // Set the maximum length here
                  onChange={clearErrorOnChange(setImageUrl)}
                  className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                />
              </div>
              {/* ERROR MESSAGE */}
              {error && (
                <p className="text-red-500">
                  Error creating blog post: {error}
                </p>
              )}
              {success && (
                <p className="text-green-500">
                  Blog post was created successfully!
                </p>
              )}
              {/* SUBMIT BUTTON */}
              <div className="flex flex-row space-x-5">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg">
                  <Link href="/businessUser/businessBlogPost">Cancel</Link>
                </button>
                <button
                  type="submit"
                  onClick={handleCreatePost}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBusinessBlogPostPage;
