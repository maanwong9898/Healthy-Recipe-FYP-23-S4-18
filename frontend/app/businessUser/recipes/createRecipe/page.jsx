"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import BusinessUserNavBar from "../../../components/navigation/businessUserNavBar";

// router path: /businessUser/recipes/createRecipe
// this is the page to create a recipe

const CreateRecipePage = () => {
  const router = useRouter();
  // State for recipe information
  const [title, setTitle] = useState("");
  const [titleCharCount, setTitleCharCount] = useState(0); // To display the number of characters in the title
  const [category, setCategory] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servingSize, setServingSize] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionCharCount, setDescriptionCharCount] = useState(0); // To display the number of characters in the description
  const [dietaryInformation, setDietaryInformation] = useState("");
  const [dietaryInformationCharCount, setDietaryInformationCharCount] =
    useState(0); // To display the number of characters in the dietary information
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // State for nutritional information
  const [totalCalories, setTotalCalories] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [fibre, setFibre] = useState("");
  const [sodium, setSodium] = useState("");

  // State for image URL
  const [imageUrl, setImageUrl] = useState("");
  const [imageUrlCharCount, setImageUrlCharCount] = useState(0); // To display the number of characters in the image URL
  // Display success or error message after submission
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Initialize instructionList state similar to ingredientList
  const [instructionList, setInstructionList] = useState([""]);
  const [ingredientList, setIngredientList] = useState([""]);

  // store category
  const [dietaryPreferencesCategory, setDietaryPreferencesCategory] = useState(
    []
  );
  const [allergyCategory, setAllergyCategory] = useState([]); // Store category of allergies
  const [mealTypeCategory, setMealTypeCategory] = useState([]);

  // selected category
  const [allergyRestriction, setAllergyRestriction] = useState([]); // Store selected allergies
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [mealType, setMealType] = useState("");

  const [imageFile, setImageFile] = useState(null);
  const [newImageBlob, setNewImageBlob] = useState(null); // New uploaded image

  // image title state
  const [imgTitle, setImgTitle] = useState("");
  const [imgTitleCharCount, setImgTitleCharCount] = useState(0);

  const [isChecking, setIsChecking] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
    setError("");
  };

  // useEffect to fetch all the categories needed for user registration
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

      // Fetch all dietary preferences categories from backend
      const fetchDietaryPreferences = async () => {
        console.log("Fetching dietary preferences categories...");
        try {
          const response = await axiosInterceptorInstance.get(
            "/category/getAllDietaryPreferences"
          );
          console.log(
            "Dietary Preferences Categories Successfully Fetched :  ",
            response.data
          );
          setDietaryPreferencesCategory(response.data);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };

      // Fetch all allergies categories from backend
      const fetchAllergies = async () => {
        console.log("Fetching allergies categories...");
        try {
          const response = await axiosInterceptorInstance.get(
            "/category/getAllAllergies"
          );
          console.log(
            "Allergies Categories Successfully Fetched :  ",
            response.data
          );
          setAllergyCategory(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      // Fetch all meal type categories from backend
      const fetchMealTypes = async () => {
        console.log("Fetching meal type categories...");
        try {
          const response = await axiosInterceptorInstance.get(
            "/category/getAllMealTypes"
          );
          console.log(
            "Meal Type Categories Successfully Fetched :  ",
            response.data
          );
          setMealTypeCategory(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      fetchDietaryPreferences();
      fetchAllergies();
      fetchMealTypes();
    }
  }, []);

  if (isChecking) {
    return <div>Checking...</div>;
  }
  // Function to handle title change
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleCharCount(e.target.value.length);
    setError("");
  };

  // Function to handle description change
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setDescriptionCharCount(e.target.value.length);
    setError("");
  };

  // Function to handle dietary information change
  const handleDietaryInformationChange = (e) => {
    setDietaryInformation(e.target.value);
    setDietaryInformationCharCount(e.target.value.length);
    setError("");
  };

  // Function to handle dietary preference category change
  const handleDietaryPreferenceCategoryChange = (e) => {
    setDietaryPreference(e.target.value);
  };

  // Function to handle meal type category change
  const handleMealTypeCategoryChange = (e) => {
    setMealType(e.target.value);
  };

  // Function to handle allergy category change
  const handleAllergyCategoryChange = (e, allergyId) => {
    const checked = e.target.checked;

    if (checked) {
      // If the checkbox is checked, add the allergyId to the array
      setAllergyRestriction((prevAllergies) => [...prevAllergies, allergyId]);
    } else {
      // If the checkbox is unchecked, remove the allergyId from the array
      setAllergyRestriction((prevAllergies) =>
        prevAllergies.filter((id) => id !== allergyId)
      );
    }
  };

  // Function to handle image URL change
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

  // Function to validate the form before submission
  const validateForm = () => {
    // check image blob
    // if (!newImageBlob) {
    //   setError("Please upload an image.");
    //   return false;
    // }

    // Checking only essential fields
    if (
      !title.trim() ||
      !cookingTime.trim() ||
      !servingSize.trim() ||
      !description.trim() ||
      !totalCalories.trim() ||
      !carbohydrates.trim() ||
      !protein.trim() ||
      !fat.trim() ||
      !fibre.trim() ||
      !sodium.trim() ||
      !imgTitle.trim() ||
      !newImageBlob ||
      // imgblob cannot be empty
      // !newImageBlob.trim() ||/ssww
      // !imageUrl.trim() ||
      ingredientList.some((ingredient) => !ingredient.trim()) ||
      instructionList.some((instruction) => !instruction.trim())
    ) {
      setError("Please fill out all required fields.");
      return false;
    }

    // Ensure integer fields are integers and greater than or equal to 0
    const integerFields = [
      { field: totalCalories, name: "Total Calories" },
      { field: carbohydrates, name: "Carbohydrates" },
      { field: protein, name: "Protein" },
      { field: fat, name: "Fat" },
      { field: fibre, name: "Fibre" },
      { field: sodium, name: "Sodium" },
    ];

    for (let i = 0; i < integerFields.length; i++) {
      const value = parseInt(integerFields[i].field);
      if (!Number.isInteger(value) || value < 0) {
        setError(
          `Please enter a valid integer (0 and above) for ${integerFields[i].name}.`
        );
        return false;
      }
    }

    // Additional check for cooking time and serving size to be greater than 0
    const cookingTimeValue = parseInt(cookingTime);
    if (!Number.isInteger(cookingTimeValue) || cookingTimeValue < 1) {
      setError("Cooking Time must be 1 minute or more.");
      return false;
    }

    const servingSizeValue = parseInt(servingSize);
    if (!Number.isInteger(servingSizeValue) || servingSizeValue < 1) {
      setError("Serving Size must be 1 or more.");
      return false;
    }

    return true;
  };

  // Create recipe(calling controller)
  const handleCreateRecipe = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Format the ingredients and instructions
    const formattedIngredients = ingredientList.join("\n");
    const formattedInstructions = instructionList.join("\n");

    // Construct the payload
    const recipeData = {
      steps: formattedInstructions,
      title,
      description,
      info: dietaryInformation,
      userID: { id: SecureStorage.getItem("userId") }, // Replace with actual user ID or fetch dynamically
      calories: parseInt(totalCalories),
      protein: parseInt(protein),
      fat: parseInt(fat),
      fibre: parseInt(fibre),
      sodium: parseInt(sodium),
      carbs: parseInt(carbohydrates),
      ingredients: formattedIngredients,
      servingSize: parseInt(servingSize),
      cookingTime: parseInt(cookingTime),
      dietaryPreferencesId: parseInt(dietaryPreference),
      mealTypeId: parseInt(mealType),
      allergies: allergyRestriction.map((id) => ({ id })),
      // img: imageUrl,
      imgBlob: newImageBlob, // Use updated image blob
      imgTitle: imgTitle, // Retrieved from state
    };

    console.log("The recipe data from the form : ", recipeData);

    try {
      // Send POST request
      const response = await axiosInterceptorInstance.post(
        "/recipe/add",
        recipeData
      );
      console.log("Recipe Created", response.data);

      // Set success message and clear any existing error messages
      setSuccess("Recipe created successfully!");
      setError("");

      // Make success message disappear after 6 seconds
      setTimeout(() => {
        setSuccess("");
      }, 6000);

      // Assume response.data.id contains the new recipe ID
      const recipeId = response.data.id;

      // Clear the form
      setTitle("");
      setTitleCharCount(0);
      setCategory("");
      setCookingTime("");
      setServingSize("");
      setDescription("");
      setDescriptionCharCount(0);
      setDietaryInformation("");
      setDietaryInformationCharCount(0);
      setIngredients("");
      setInstructions("");
      setTotalCalories("");
      setCarbohydrates("");
      setProtein("");
      setFat("");
      setFibre("");
      setSodium("");
      setImageUrl("");
      setImageUrlCharCount(0);
      // setImageTitle("");
      setImgTitle("");
      setIngredientList([""]);
      setInstructionList([""]);
      setDietaryPreference("");
      setMealType("");
      setAllergyRestriction([]);
    } catch (error) {
      // console.error("Error creating recipe", error);
      console.log(error.message);
      setError("Failed to create recipe. ");
      setSuccess(""); // Clear any existing success message
    }
  };

  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  // Add field to list
  const handleAddField = (setter, list) => {
    setter([...list, ""]);
  };

  // Remove field from list at specific index
  const handleRemoveField = (setter, list, index) => {
    setter(list.filter((_, idx) => idx !== index));
  };

  // Handle change for ingredient
  const handleIngredientChange = (index, value) => {
    const updatedList = [...ingredientList];
    updatedList[index] = value;
    setIngredientList(updatedList);
  };

  // Handle change for instruction
  const handleInstructionChange = (index, value) => {
    const updatedList = [...instructionList];
    updatedList[index] = value;
    setInstructionList(updatedList);
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
                className="mt-16 mb-16 mx-auto bg-white rounded-lg shadow"
                style={{ maxWidth: "700px", width: "100%" }} // Increase maxWidth and set width to 100%
              >
                {" "}
                {/* Smaller maxWidth */}
                <div className="p-4 space-y-4 md:space-y-12">
                  <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
                    <h1 class="text-5xl font-bold leading-tight tracking-tight text-center text-gray-900 mb-8">
                      Create Recipe
                    </h1>
                    <form className="space-y-3">
                      {/* TITLE */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="title"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Title
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          placeholder="Title of Recipe (Max 80 characters)"
                          maxLength={80}
                          value={title}
                          onChange={handleTitleChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        <p className="text-gray-500 text-sm">
                          {titleCharCount}/80 characters
                        </p>
                      </div>
                      {/* DIETARY PREFERENCE */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="dietaryPreference"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Dietary Preference
                        </label>
                        <select
                          id="dietaryPreference"
                          name="dietaryPreference"
                          value={dietaryPreference}
                          onChange={handleDietaryPreferenceCategoryChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                        >
                          <option value="">Select Dietary Preference</option>
                          {dietaryPreferencesCategory.map((cat, index) => (
                            <option key={index} value={cat.id}>
                              {cat.subcategoryName}
                            </option>
                          ))}
                        </select>
                      </div>
                      {/* MEAL TYPE */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="mealType"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Meal Type
                        </label>
                        <select
                          id="mealType"
                          name="mealType"
                          value={mealType}
                          onChange={handleMealTypeCategoryChange}
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                        >
                          <option value="">Select Meal Type</option>
                          {mealTypeCategory.map((cat, index) => (
                            <option key={index} value={cat.id}>
                              {cat.subcategoryName}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* ALLERGIES AND RESTRICTIONS for large screen*/}
                      <div className="flex flex-col">
                        <label
                          htmlFor="allergyRestriction"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Allergens Contained
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
                          {allergyCategory.map((cat, index) => (
                            <label key={index} className="mr-2 items-center">
                              <input
                                type="checkbox"
                                name="allergies"
                                value={cat.id}
                                checked={allergyRestriction.includes(cat.id)}
                                onChange={(e) =>
                                  handleAllergyCategoryChange(e, cat.id)
                                }
                                className="w-4 h-4 bg-gray-100 border-gray-300 rounded mr-2"
                              />
                              {cat.subcategoryName}
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* COOKING TIME */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="cookingTime"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Cooking Time (in mins)
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="cookingTime"
                          id="cookingTime"
                          placeholder="Cooking Time (in mins)"
                          value={cookingTime}
                          onChange={clearErrorOnChange(setCookingTime)}
                          rows={4} // Adjust this number to increase height
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                      </div>

                      {/* SERVING SIZE */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="servingSize"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Serving Size<span className="text-red-500">*</span>
                        </label>
                        <input
                          name="servingSize"
                          type="number"
                          id="servingSize"
                          placeholder="Serving Size"
                          value={servingSize}
                          onChange={clearErrorOnChange(setServingSize)}
                          rows={4} // Adjust this number to increase height
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                      </div>

                      {/* DESCRIPTION */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="description"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Description<span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="description"
                          id="description"
                          placeholder="Write a detailed description about the recipe (Max 1000 characters)"
                          maxLength={1000}
                          value={description}
                          onChange={handleDescriptionChange}
                          rows={7} // Adjust this number to increase height
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        <p className="text-gray-500 text-sm">
                          {descriptionCharCount}/1000 characters
                        </p>
                      </div>

                      {/* Dietary Information for user to input */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="dietaryInformation"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Dietary Information
                          <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="dietaryInformation"
                          id="dietaryInformation"
                          placeholder="Write a short description about the dietary information (Max 230 characters)"
                          maxLength={230}
                          value={dietaryInformation}
                          onChange={handleDietaryInformationChange}
                          rows={4} // Adjust this number to increase height
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        />
                        <p className="text-gray-500 text-sm">
                          {dietaryInformationCharCount}/230 characters
                        </p>
                      </div>

                      {/* INGREDIENTS */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="ingredients"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Ingredients<span className="text-red-500">*</span>
                        </label>
                        {ingredientList.map((ingredient, index) => (
                          <div key={index} className="flex mb-2">
                            <input
                              name="ingredient"
                              placeholder={`Ingredient ${index + 1}`}
                              value={ingredient}
                              onChange={(e) =>
                                handleIngredientChange(index, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-2"
                            />
                            {ingredientList.length > 1 && (
                              <button
                                type="button"
                                onClick={() =>
                                  handleRemoveField(
                                    setIngredientList,
                                    ingredientList,
                                    index
                                  )
                                }
                                className="text-white bg-red-500 hover:bg-red-800 font-medium text-sm px-3 py-2.5 rounded-lg"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            handleAddField(setIngredientList, ingredientList)
                          }
                          className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm px-3 py-2.5 mt-3 rounded-lg"
                        >
                          Add Ingredient
                        </button>
                      </div>

                      {/* INSTRUCTIONS */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="instructions"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Instructions<span className="text-red-500">*</span>
                        </label>
                        {instructionList.map((instruction, index) => (
                          <div key={index} className="flex mb-2">
                            <input
                              name="instruction"
                              placeholder={`Step ${index + 1}`}
                              value={instruction}
                              onChange={(e) =>
                                handleInstructionChange(index, e.target.value)
                              }
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-2"
                            />
                            {instructionList.length > 1 && (
                              <button
                                type="button"
                                onClick={() =>
                                  handleRemoveField(
                                    setInstructionList,
                                    instructionList,
                                    index
                                  )
                                }
                                className="text-white bg-red-500 hover:bg-red-800 font-medium text-sm px-3 py-2.5 rounded-lg"
                              >
                                Remove
                              </button>
                            )}
                          </div>
                        ))}
                        <button
                          type="button"
                          onClick={() =>
                            handleAddField(setInstructionList, instructionList)
                          }
                          className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm px-3 py-2.5 mt-3 rounded-lg"
                        >
                          Add Step
                        </button>
                      </div>

                      {/* NUTRITIONAL INFORMATION */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="nutritionalInformation"
                          className="block text-xl mb-1 font-bold text-gray-900"
                        >
                          Nutritional Information (per serving)
                          <span className="text-red-500">*</span>
                        </label>

                        <div className="grid grid-cols-2 gap-6 mt-3">
                          {/* TOTAL CALORIES */}
                          <div className="flex flex-col">
                            <label htmlFor="calories" className="mb-1">
                              Total Calories:
                            </label>
                            <input
                              type="number"
                              name="totalCalories"
                              id="totalCalories"
                              placeholder="Enter calories in kcal"
                              value={totalCalories}
                              onChange={clearErrorOnChange(setTotalCalories)}
                              className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5"
                            ></input>
                          </div>

                          {/* CARBS */}
                          <div className="flex flex-col">
                            <label htmlFor="carbohydrates" className="mb-1">
                              Carbohydrates:
                            </label>
                            <input
                              type="number"
                              name="carbohydrates"
                              id="carbohydrates"
                              placeholder="Enter carbs in grams"
                              value={carbohydrates}
                              onChange={clearErrorOnChange(setCarbohydrates)}
                              className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5"
                            />
                          </div>

                          {/* PROTEIN */}
                          <div className="flex flex-col">
                            <label htmlFor="protein" className="mb-1">
                              Protein:
                            </label>
                            <input
                              type="number"
                              name="protein"
                              id="protein"
                              placeholder="Enter protein in grams"
                              value={protein}
                              onChange={clearErrorOnChange(setProtein)}
                              className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5"
                            />
                          </div>

                          {/* FAT */}
                          <div className="flex flex-col">
                            <label htmlFor="fat" className="mb-1">
                              Fat:
                            </label>
                            <input
                              type="number"
                              name="fat"
                              id="fat"
                              placeholder="Enter fat in grams"
                              value={fat}
                              onChange={clearErrorOnChange(setFat)}
                              className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5"
                            />
                          </div>

                          {/* FIBRE */}
                          <div className="flex flex-col">
                            <label htmlFor="fibre" className="mb-1">
                              Fibre:
                            </label>
                            <input
                              type="number"
                              name="fibre"
                              id="fibre"
                              placeholder="Enter fibre in grams"
                              value={fibre}
                              onChange={clearErrorOnChange(setFibre)}
                              className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5"
                            />
                          </div>

                          {/* SODIUM */}
                          <div className="flex flex-col">
                            <label htmlFor="sodium" className="mb-1">
                              Sodium:
                            </label>
                            <input
                              type="number"
                              name="sodium"
                              id="sodium"
                              placeholder="Enter sodium in mg"
                              value={sodium}
                              onChange={clearErrorOnChange(setSodium)}
                              className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5"
                            />
                          </div>
                        </div>
                      </div>

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

                      {/* Display error or success message */}
                      {error && (
                        <p className="text-red-500 font-semibold text-sm">
                          Error creating recipe: {error}
                        </p>
                      )}
                      {success && (
                        <p className="text-green-500 font-semibold text-sm">
                          {success}
                        </p>
                      )}
                      {/* SUBMIT BUTTON */}
                      <div className="flex flex-row space-x-5">
                        <button className="mt-3 bg-red-600 hover:bg-red-700 text-white w-24 font-bold py-2 px-4 rounded-lg">
                          <Link href="/businessUser/recipes">Back</Link>
                        </button>
                        <button
                          type="submit"
                          onClick={handleCreateRecipe}
                          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white w-24 font-bold py-2 px-4 rounded-lg"
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

export default CreateRecipePage;
