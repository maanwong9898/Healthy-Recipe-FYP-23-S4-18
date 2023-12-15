"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

// router path: /businessUser/businessBlogPost/createBusinessBlogPost
// this is the page to create user account (systen admin only) according to user story

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
const CreateBusinessBlogPostPage = () => {
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [category, setCategory] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [mainContent, setMainContent] = useState("");
  const [conclusion, setConclusion] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [error, setError] = useState("");

  // Function to handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleCreatePost = (event) => {
    event.preventDefault();

    // Validation and submission logic here
    console.log("Blog Post Details:", {
      title,
      publisher,
      category,
      introduction,
      mainContent,
      conclusion,
      imageUrl,
      imageTitle,
    });

    // Reset fields and error after submission
    setTitle("");
    setPublisher("");
    setCategory("");
    setIntroduction("");
    setMainContent("");
    setConclusion("");
    setImageUrl("");
    setImageTitle("");
    setError("");
  };

  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  return (
    <div className="bg-cyan-900 min-h-screen flex flex-col justify-center px-6 lg:px-8">
      {/* Adjust the max-width and width in the inline style */}
      <div
        className="mt-16 mb-16 mx-auto bg-cyan-600 rounded-lg shadow"
        style={{ maxWidth: "600px", width: "100%" }} // Increase maxWidth and set width to 100%
      >
        {" "}
        {/* Smaller maxWidth */}
        <div className="p-4 space-y-4 md:space-y-12 ">
          <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
            <h1 className="text-xl font-bold mb-6 leading-tight tracking-tight text-black md:text-2xl">
              Create Business Blog Post
            </h1>
            <form className="space-y-3">
              {/* TITLE */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={clearErrorOnChange(setTitle)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* PUBLISHER */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="publisher"
                  placeholder="Publisher"
                  value={publisher}
                  onChange={clearErrorOnChange(setPublisher)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* CATEGORY */}
              {/* CATEGORY DROPDOWN */}
              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="text-base font-medium text-black mb-2"
                >
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={category}
                  onChange={handleCategoryChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                <textarea
                  name="introduction"
                  placeholder="Introduction"
                  value={introduction}
                  onChange={clearErrorOnChange(setIntroduction)}
                  rows={4} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* MAIN CONTENT */}
              <div className="flex flex-col">
                <textarea
                  name="mainContent"
                  placeholder="Main Content"
                  value={mainContent}
                  onChange={clearErrorOnChange(setMainContent)}
                  rows={7} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* CONCLUSION */}
              <div className="flex flex-col">
                <textarea
                  name="conclusion"
                  placeholder="Conclusion"
                  value={conclusion}
                  onChange={clearErrorOnChange(setConclusion)}
                  rows={4} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* IMAGE URL */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="imageUrl"
                  placeholder="Image URL"
                  value={imageUrl}
                  onChange={clearErrorOnChange(setImageUrl)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* IMAGE TITLE */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="imageTitle"
                  placeholder="Image Title"
                  value={imageTitle}
                  onChange={clearErrorOnChange(setImageTitle)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
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
                  onClick={handleCreatePost}
                  className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black text-white font-bold py-2 px-4 rounded"
                >
                  Create Post
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
