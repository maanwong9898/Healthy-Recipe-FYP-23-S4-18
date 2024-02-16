"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import BusinessUserNavBar from "../../../components/navigation/businessUserNavBar";

// https://uiwjs.github.io/react-md-editor/

// router path: /businessUser/educationalContent/createEducationalContent
// this is the page to create educational content

const CreateEducationalContent = () => {
  const router = useRouter();
  // title state
  const [title, setTitle] = useState("");
  const [titleCharCount, setTitleCharCount] = useState(0);
  // category state
  const [category, setCategory] = useState(""); // State to store selected category
  const [categories, setCategories] = useState([]); // State to store categories
  // info state
  const [info, setInfo] = useState("");
  const [infoCharCount, setInfoCharCount] = useState(0);
  // image url state
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrlCharCount, setImageUrlCharCount] = useState(0);

  // image file state
  const [imageFile, setImageFile] = useState(null);
  const [newImageBlob, setNewImageBlob] = useState(null); // New uploaded image

  // image title state
  const [imgTitle, setImgTitle] = useState("");
  const [imgTitleCharCount, setImgTitleCharCount] = useState(0);

  // success and error state
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleCharCount(e.target.value.length);
    setError("");
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
    setInfoCharCount(e.target.value.length);
    setError("");
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
    setImageUrlCharCount(e.target.value.length);
    setError("");
  };

  const handleImgTitleChange = (e) => {
    setImgTitle(e.target.value);
    setImgTitleCharCount(e.target.value.length);
    setError("");
  };

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

      // Fetch all business blog categories from backend
      const fetchCategories = async () => {
        console.log("Fetching categories...");
        try {
          const response = await axiosInterceptorInstance.get(
            "category/getAllEducationalContentCategories"
          );
          console.log("Categories fetched:", response.data);
          setCategories(response.data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      };

      fetchCategories();
    }
  }, []);

  if (isChecking) {
    return <div>Checking...</div>;
  }

  const handleFileChange = (e) => {
    console.log("File change event:", e);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        let dataURL = event.target.result;
        console.log("Complete Data URL:", dataURL);

        // Extract Base64 Data
        let base64Data = dataURL.split(",")[1];
        console.log("Base64 Data:", base64Data);

        // Use base64Data as needed
        setNewImageBlob(base64Data); // Assuming you have a state setter like this
      };
      reader.readAsDataURL(file);
      console.log("File:", file);
    }
  };

  const renderImage = () => {
    const imageToShow = newImageBlob;
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
    console.log("Type of category:", typeof category);
    console.log("Value of category:", category);

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

    if (!imgTitle.trim()) {
      setError("Image title cannot be empty.");
      return false;
    }

    // if (!imageUrl.trim()) {
    //   setError("Image URL cannot be empty.");
    //   return false;
    // }

    if (!newImageBlob) {
      setError("Image cannot be empty.");
      return false;
    }
    // Clear any existing errors if all validations pass
    setError("");
    return true;
  };

  // create educational content (calling controller)
  const handleCreateEduContent = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      // Stop the form submission if validation fails
      return;
    }

    console.log("Create method called.");
    // Check if any of the required fields are empty
    if (!title.trim() || !info.trim()) {
      setError("Please fill in all the required fields.");
      return;
    }

    console.log("category id:", category);
    const userId = SecureStorage.getItem("userId");

    // Construct the payload according to the required format
    const eduContentData = {
      title: title, // Retrieved from state
      info: info, // Retrieved from state
      img: imageUrl, // Retrieved from state
      educationalContentTypeId: category, // Pass the entire selected category id
      imgBlob: newImageBlob, // Use updated image blob
      imgTitle: imgTitle, // Retrieved from state
      userID: { id: userId }, // replace above
    };

    console.log("Educational Content data for creation:", eduContentData);

    try {
      const response = await axiosInterceptorInstance.post(
        "/educationalContent/add",
        eduContentData
      );
      console.log("Edu content created successfully:", response.data);

      // Consider navigation or success message here
      setSuccess(true); // Set success to true on successful update

      // Automatically clear the success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      // Reset fields after successful submission
      setTitle("");
      setCategory("");
      setInfo("");
      setImageUrl("");
      setImgTitle("");
      setError("");

      // Reset character counters
      setTitleCharCount(0);
      setInfoCharCount(0);
      setImageUrlCharCount(0);
      setImgTitleCharCount(0);
    } catch (error) {
      setSuccess(false); // Ensure success is false on error
      console.error("Error creating educational content", error);
      setError(error.message || "Failed to create educational content.");
    }
  };

  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 lg:px-8">
      {isLoading && isChecking ? (
        <div>Loading...</div>
      ) : (
        <>
          <BusinessUserNavBar />
          {/* Adjust the max-width and width in the inline style */}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {/* Adjust the max-width and width in the inline style */}
              <div
                className="mt-16 mb-16 mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8 lg:p-12"
                style={{ maxWidth: "600px", width: "100%" }} // Increase maxWidth and set width to 100%
              >
                {" "}
                {/* Smaller maxWidth */}
                <div className="p-4 space-y-4 md:space-y-12 ">
                  <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-center text-gray-900 mb-8">
                      Create Educational Content
                    </h1>
                    <form className="space-y-6 md:space-y-5 lg:space-y-3">
                      {/* TITLE */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="title"
                          className="block text-lg mb-1 font-semibold text-gray-900"
                        >
                          Title<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
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
                      {/* CATEGORY */}
                      {/* CATEGORY DROPDOWN */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="category"
                          className="block text-lg mb-1 font-semibold text-gray-900"
                        >
                          Category<span className="text-red-500">*</span>
                        </label>

                        <select
                          id="category"
                          name="category"
                          value={category}
                          // onChange={(e) => setCategory(e.target.value)}
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
                      {/*Info*/}
                      <div className="flex flex-col">
                        <label
                          htmlFor="info"
                          className="block text-lg mb-1 font-semibold text-gray-900"
                        >
                          Main Content<span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="info"
                          name="info"
                          placeholder="Describe your blog post here (Max 1000 characters)"
                          value={info}
                          rows={10}
                          maxLength="1000"
                          onChange={handleInfoChange}
                          className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                        />
                        <span className="text-sm text-gray-600">
                          {infoCharCount}/1000 characters
                        </span>
                      </div>

                      {/* IMAGE URL */}
                      {/* <div className="flex flex-col">
                        <label
                          htmlFor="imageUrl"
                          className="block text-lg mb-1 font-semibold text-gray-900"
                        >
                          Image URL<span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="imageUrl"
                          name="imageUrl"
                          placeholder="Image URL (Max 255 characters)"
                          maxLength="255"
                          value={imageUrl}
                          onChange={handleImageUrlChange}
                          className="bg-gray-50 border border-gray-300 text-black sm:text-base rounded-lg block w-full p-2.5"
                        />
                        <span className="text-sm text-gray-600">
                          {imageUrlCharCount}/255 characters
                        </span>
                      </div> */}

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
                          Error creating educational content: {error}
                        </p>
                      )}
                      {success && (
                        <p className="text-green-500 font-semibold text-sm">
                          Educational content created successfully!
                        </p>
                      )}
                      {/* SUBMIT BUTTON */}
                      <div className="flex flex-row space-x-5">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg">
                          <Link href="/businessUser/educationalContent">
                            Back
                          </Link>
                        </button>
                        <button
                          type="submit"
                          onClick={handleCreateEduContent}
                          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
                        >
                          Create
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

export default CreateEducationalContent;
