"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import BusinessUserNavBar from "../../../../components/navigation/businessUserNavBar";

const fetchEduContentById = async (eduContentId) => {
  try {
    // Ensure eduContentId is a string if the IDs in your URL need to be strings
    eduContentId = eduContentId;

    const response = await axiosInterceptorInstance.get(
      `/educationalContent/get/${eduContentId}`
    );

    if (!response.data) {
      console.error(`Educational content with ID ${eduContentId} not found`);
      throw new Error(`Educational content with ID ${eduContentId} not found`);
    }

    // Assuming the response contains the educational content directly
    const educationalContent = response.data;

    return educationalContent;
  } catch (error) {
    console.error("Failed to fetch educational content:", error);
    throw error;
  }
};

const UpdateEducationalContent = ({ params }) => {
  const router = useRouter();
  const [educationalContent, setEducationalContent] = useState("");
  // title states
  const [title, setTitle] = useState("");
  const [titleCharCount, setTitleCharCount] = useState(0);
  // category states
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  // info states
  const [info, setInfo] = useState("");
  const [infoCharCount, setInfoCharCount] = useState(0);
  // image states
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrlCharCount, setImageUrlCharCount] = useState(0);
  // image title state
  const [imgTitle, setImgTitle] = useState("");
  const [imgTitleCharCount, setImgTitleCharCount] = useState(0);
  // error and success states
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [imageBlob, setImageBlob] = useState(""); // Original image
  const [newImageBlob, setNewImageBlob] = useState(null); // New uploaded image

  useEffect(() => {
    const token = SecureStorage.getItem("token");
    const role = SecureStorage.getItem("role");
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !token ||
      role !== "BUSINESS_USER" ||
      now >= parseInt(tokenExpiration)
    ) {
      // If token is invalid or role is not business user, redirect to login
      SecureStorage.clear();
      router.push("/");
      return;
    } else {
      setIsChecking(false);

      const eduContentId = decodeURIComponent(params.id); // Make sure to decode the ID
      fetchEduContentById(eduContentId)
        .then((data) => {
          setEducationalContent(data);

          // Set each piece of state with the corresponding data
          setTitle(data.title || "Not Specified");
          setTitleCharCount(data.title ? data.title.length : 0); // Set title character count
          setCategory(data.educationalContentType.id || "");
          setInfo(data.info || "Not Specified");
          setInfoCharCount(data.info ? data.info.length : 0); // Set info character count
          setImageUrl(data.img || "Not Specified");
          setImageUrlCharCount(data.img ? data.img.length : 0); // Set image URL character count
          setImgTitle(data.imgTitle || "Not Specified");
          setImgTitleCharCount(data.imgTitle ? data.imgTitle.length : 0); // Set image title character count
          if (data.imgBlob) {
            // Directly use base64 string as the image source
            setImageBlob(data.imgBlob);
          } else {
            // Handle the absence of an image blob appropriately
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching educational content:", error);
        });

      // Fetch all education content categories from backend
      const fetchCategories = async () => {
        try {
          const response = await axiosInterceptorInstance.get(
            "category/getAllEducationalContentCategories"
          );
          setCategories(response.data);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };

      fetchCategories();
    }
  }, [params.id]);

  if (isChecking) {
    return <div>Checking ...</div>;
  }

  // Update educational content (calling controller)
  const handleUpdateEduContent = async (updatedEduContent) => {
    try {
      // Ensure all values are simple data types
      const response = await axiosInterceptorInstance.put(
        "/educationalContent/edit",
        updatedEduContent
      );
      setSuccess(true);
      setError(""); // Now 'setError' is available

      // Handle successful update (e.g., redirect or show a message)
    } catch (error) {
      setError("Failed to update the educational content.");
      setSuccess(false);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setSuccess(false);
    setTitleCharCount(e.target.value.length);
    setError(""); // Clear error message
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    // Clear category related error when a new category is selected
    if (e.target.value) {
      setError("");
    }
  };

  const handleInfoChange = (e) => {
    setInfo(e.target.value);
    setSuccess(false);
    setInfoCharCount(e.target.value.length);
    setError(""); // Clear error message
  };

  // handle image url change
  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    setSuccess(false);
    setImageUrlCharCount(e.target.value.length);
    setError(""); // Clear error message
  };

  const handleImgTitleChange = (e) => {
    setImgTitle(e.target.value);
    setImgTitleCharCount(e.target.value.length);
    setError("");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        let dataURL = event.target.result;

        // Extract Base64 Data
        let base64Data = dataURL.split(",")[1];

        // Use base64Data as needed
        setNewImageBlob(base64Data);
      };
      reader.readAsDataURL(file);
    }
  };

  const renderImage = () => {
    const imageToShow = newImageBlob || imageBlob;
    return imageToShow ? (
      <img
        src={`data:image/jpeg;base64,${imageToShow}`}
        alt="Recipe"
        className="max-w-full h-auto"
        onError={(e) => {
          console.error("Error loading image:", e);
          e.target.style.display = "none";
        }}
      />
    ) : (
      <p>No image available</p>
    );
  };

  // Validate the form before submitting
  const validateForm = () => {
    if (!title.trim()) {
      setError("Title cannot be empty.");
      return false;
    }

    // Check if category is a number and is greater than 0
    if (typeof category !== "number" || category <= 0) {
      setError("Category must be selected.");
      return false;
    }

    if (!info.trim()) {
      setError("Info cannot be empty.");
      return false;
    }

    // check if image title is empty
    if (!imgTitle.trim()) {
      setError("Image title cannot be empty.");
      return false;
    }

    // Clear any existing errors if all validations pass
    setError("");
    return true;
  };

  // Form to update educational content
  const handleUpdateClick = async (e) => {
    e.preventDefault();
    setSuccess(false); // Reset success state here

    if (!validateForm()) {
      // Stop the form submission if validation fails
      return;
    }

    const userId = SecureStorage.getItem("userId");

    // Use newImageBlob if available, otherwise fallback to original imageBlob
    const updatedImageBlob = newImageBlob || imageBlob;

    try {
      const updatedEduContent = {
        id: educationalContent.id, // Assuming educationalContent.id is the right ID
        active: true,
        title: title,
        info: info,
        imgTitle: imgTitle,
        img: imageUrl, // Use imageUrl if available
        imgBlob: updatedImageBlob, // Use updated image blob
        educationalContentTypeId: category,
        userID: { id: userId }, // Need to change to the current user ID
      };

      await handleUpdateEduContent(updatedEduContent);
      // Consider navigation or success message here
      setError(""); // Clear any previous errors
    } catch (updateError) {
      setSuccess(false); // Ensure success is false on error
      setError(updateError.message || "Failed to update educational content");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 lg:px-8">
      {isLoading && isChecking ? (
        <div>Loading...</div>
      ) : (
        <>
          <BusinessUserNavBar />
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <div
                className="mt-16 mb-16 mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8 lg:p-12"
                style={{ maxWidth: "600px", width: "100%" }}
              >
                <div className="p-4 space-y-4 md:space-y-12">
                  <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-center text-gray-900 mb-8">
                      Update Educational Content
                    </h1>
                    <form className="space-y-6 md:space-y-5 lg:space-y-3">
                      {/* TITLE */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="title"
                          className="block text-lg mb-1 font-semibold text-gray-900"
                        >
                          Title
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="title"
                          id="title"
                          placeholder="Title (Max 80 characters)"
                          maxLength="80"
                          value={title}
                          onChange={handleTitleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                        />
                        <span className="text-sm text-gray-600">
                          {titleCharCount}/80 characters
                        </span>
                      </div>
                      {/* CATEGORY DROPDOWN */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="category"
                          className="block text-lg mb-1 font-semibold text-gray-900"
                        >
                          Category
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={category}
                          onChange={(e) => setCategory(Number(e.target.value))}
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
                      {/* Info*/}
                      <div className="flex flex-col">
                        <label
                          htmlFor="info"
                          className="block text-lg mb-1 font-semibold text-gray-900"
                        >
                          Main Content
                          <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="info"
                          id="info"
                          placeholder="Info"
                          value={info}
                          rows={10}
                          maxLength="1000"
                          onChange={handleInfoChange}
                          className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                        />
                      </div>
                      <span className="text-sm text-gray-600">
                        {infoCharCount}/1000 characters
                      </span>

                      {/* IMAGE file */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="image"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Image<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="file"
                          id="image"
                          name="image"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full"
                        />
                      </div>

                      <div className="image-section">{renderImage()}</div>

                      {/* IMAGE TITLE */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="imgTitle"
                          className="block text-lg mb-1 font-semibold text-gray-900"
                        >
                          Image Title<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="imgTitle"
                          name="imgTitle"
                          placeholder="Describe your image here"
                          maxLength="255"
                          value={imgTitle}
                          onChange={handleImgTitleChange}
                          className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                        />
                        <span className="text-sm text-gray-600">
                          {imgTitleCharCount}/255 characters
                        </span>
                      </div>
                      {/* ERROR MESSAGE */}
                      {error && (
                        <p className="text-red-500 font-semibold text-sm">
                          Error updating educational content: {error}
                        </p>
                      )}
                      {success && (
                        <p className="text-green-500 font-semibold text-sm">
                          Educational content updated successfully!
                        </p>
                      )}
                      {/* SUBMIT BUTTON */}
                      <div className="flex flex-row space-x-5">
                        <Link href="/businessUser/educationalContent">
                          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg">
                            Back
                          </button>
                        </Link>
                        <button
                          type="submit"
                          onClick={handleUpdateClick}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default UpdateEducationalContent;
