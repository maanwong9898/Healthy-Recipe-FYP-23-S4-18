"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

// router path: /businessUser/businessBlogPost/createBusinessBlogPost
// this is the page to create business blog post according to user story

const mockBlogCategory = [
  {
    category: "Cookbook",
  },
  {
    category: "Kitchenware",
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

  useEffect(() => {
    // Access localStorage after component mounts and is on the client-side
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setPublisher(storedUsername);
    }
  }, []);

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
    // setPublisher("");
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
                <label
                  htmlFor="title"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={clearErrorOnChange(setTitle)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* PUBLISHER */}
              {/* <div className="flex flex-col">
                <label
                  htmlFor="publisher"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Publisher:
                </label>
                <input
                  type="text"
                  id="publisher"
                  name="publisher"
                  placeholder="Publisher"
                  value={publisher}
                  onChange={clearErrorOnChange(setPublisher)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div> */}
              {/* CATEGORY */}
              {/* CATEGORY DROPDOWN */}
              <div className="flex flex-col">
                <label
                  htmlFor="category"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Category:
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
                <label
                  htmlFor="introduction"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Introduction:
                </label>
                <textarea
                  name="introduction"
                  id="introduction"
                  placeholder="Introduction"
                  value={introduction}
                  onChange={clearErrorOnChange(setIntroduction)}
                  rows={4} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* MAIN CONTENT */}
              <div className="flex flex-col">
                <label
                  htmlFor="mainContent"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Main Content:
                </label>
                <textarea
                  name="mainContent"
                  id="mainContent"
                  placeholder="Main Content"
                  value={mainContent}
                  onChange={clearErrorOnChange(setMainContent)}
                  rows={7} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* CONCLUSION */}
              <div className="flex flex-col">
                <label
                  htmlFor="conclusion"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Conclusion:
                </label>
                <textarea
                  name="conclusion"
                  id="conclusion"
                  placeholder="Conclusion"
                  value={conclusion}
                  onChange={clearErrorOnChange(setConclusion)}
                  rows={4} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* IMAGE URL */}
              <div className="flex flex-col">
                <label
                  htmlFor="imageUrl"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Image URL:
                </label>
                <input
                  type="text"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="Image URL"
                  value={imageUrl}
                  onChange={clearErrorOnChange(setImageUrl)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>
              {/* IMAGE TITLE */}
              <div className="flex flex-col">
                <label
                  htmlFor="imageTitle"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Image Title:
                </label>
                <input
                  type="text"
                  id="imageTitle"
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
