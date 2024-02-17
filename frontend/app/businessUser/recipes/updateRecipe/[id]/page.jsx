"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import axiosInterceptorInstance from "../../../../axiosInterceptorInstance.js";
import SecureStorage from "react-secure-storage";
import BusinessUserNavBar from "../../../../components/navigation/businessUserNavBar";

// router path: /businessUser/recipes/updateRecipe/[id]
// this is the page to update a recipe

const UpdateRecipePage = ({ params }) => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [titleCharCount, setTitleCharCount] = useState(0); // To display the number of characters in the title

  const [publisher, setPublisher] = useState("");
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
  const [totalCalories, setTotalCalories] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [fibre, setFibre] = useState("");
  const [sodium, setSodium] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  // image title state
  const [imgTitle, setImgTitle] = useState("");
  const [imgTitleCharCount, setImgTitleCharCount] = useState(0);

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
  const [mealTypeCategory, setMealTypeCategory] = useState([]); // Store category of meal types

  // selected category
  const [allergyRestriction, setAllergyRestriction] = useState([]); // Store selected allergies
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [mealType, setMealType] = useState("");

  const [imageFile, setImageFile] = useState(null);

  const [imageBlob, setImageBlob] = useState(null); // Original image
  const [newImageBlob, setNewImageBlob] = useState(null); // New uploaded image
  const [isLoading, setLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

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
        try {
          const response = await axiosInterceptorInstance.get(
            "/category/getAllDietaryPreferences"
          );
          setDietaryPreferencesCategory(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      // Fetch all allergies categories from backend
      const fetchAllergies = async () => {
        try {
          const response = await axiosInterceptorInstance.get(
            "/category/getAllAllergies"
          );
          setAllergyCategory(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      // Fetch all meal types categories from backend
      const fetchMealTypes = async () => {
        try {
          const response = await axiosInterceptorInstance.get(
            "/category/getAllMealTypes"
          );
          setMealTypeCategory(response.data);
        } catch (error) {
          console.log(error);
        }
      };

      // Fetch recipe by ID
      const fetchRecipesById = async (recipeID) => {
        try {
          // Ensure recipeID is a string if the IDs in your URL need to be strings
          recipeID = recipeID;

          const response = await axiosInterceptorInstance.get(
            `/recipe/get/${recipeID}`
          );

          if (!response.data) {
            console.error(`Recipe not found`);
            throw new Error(`Recipe not found`);
          }

          // Assuming the response contains the recipes directly
          const recipe = response.data;

          // Update state variables with fetched recipe data
          setTitle(recipe.title || "");
          setTitleCharCount(recipe.title ? recipe.title.length : 0);
          setDescription(recipe.description || "");
          setDescriptionCharCount(
            recipe.description ? recipe.description.length : 0
          );
          setDietaryInformation(recipe.info || "");
          setDietaryInformationCharCount(recipe.info ? recipe.info.length : 0);
          setIngredients(
            recipe.ingredients ? recipe.ingredients.split("\n") : [""]
          );
          setInstructions(recipe.steps ? recipe.steps.split("\n") : [""]);
          setTotalCalories(recipe.calories ? recipe.calories.toString() : "0");
          setCarbohydrates(recipe.carbs ? recipe.carbs.toString() : "0");
          setProtein(recipe.protein ? recipe.protein.toString() : "0");
          setFat(recipe.fat ? recipe.fat.toString() : "0");
          setFibre(recipe.fibre ? recipe.fibre.toString() : "0");
          setSodium(recipe.sodium ? recipe.sodium.toString() : "0");
          setCookingTime(
            recipe.cookingTime ? recipe.cookingTime.toString() : ""
          );
          setServingSize(
            recipe.servingSize ? recipe.servingSize.toString() : ""
          );
          setImageUrl(recipe.img || "");
          // Split the ingredients and instructions into arrays and update state
          setIngredientList(
            recipe.ingredients ? recipe.ingredients.split("\n") : []
          );
          setInstructionList(recipe.steps ? recipe.steps.split("\n") : []);
          setImgTitle(recipe.imgTitle || "Not Specified");
          setImgTitleCharCount(recipe.imgTitle ? recipe.imgTitle.length : 0);

          if (recipe.allergies) {
            setAllergyRestriction(
              recipe.allergies.map((allergy) => allergy.id)
            );
          } else {
            setAllergyRestriction([]);
          }

          if (recipe.dietaryPreferencesId) {
            setDietaryPreference(recipe.dietaryPreferencesId.toString());
          } else {
            setDietaryPreference("");
          }

          if (recipe.mealTypeId) {
            setMealType(recipe.mealTypeId.toString());
          } else {
            setMealType("");
          }

          if (recipe.imgBlob) {
           
            // Directly use base64 string as the image source
            setImageBlob(recipe.imgBlob);
          } else {
          }

          setLoading(false);
        } catch (error) {
          console.error("Failed to fetch recipe:", error);
          throw error;
        }
      };

      fetchDietaryPreferences();
      fetchMealTypes();
      fetchAllergies();
      fetchRecipesById(params.id);
    }
  }, []);

  if (isChecking) {
    return <div>Checking ...</div>;
  }

  // Function to handle dietary preference category change
  const handleDietaryPreferenceCategoryChange = (e) => {
    setDietaryPreference(e.target.value);
  };

  // Function to handle meal type category change
  const handleMealTypeCategoryChange = (e) => {
    setMealType(e.target.value);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setTitleCharCount(e.target.value.length);
    setError("");
  };

  const handleDietaryInformationChange = (e) => {
    setDietaryInformation(e.target.value);
    setDietaryInformationCharCount(e.target.value.length);
    setError("");
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setDescriptionCharCount(e.target.value.length);
    setError("");
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
        setNewImageBlob(base64Data); // Assuming you have a state setter like this
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

  const validateForm = () => {
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
      ingredientList.some((ingredient) => !ingredient.trim()) ||
      instructionList.some((instruction) => !instruction.trim())
    ) {
      setError("Please fill out all required fields.");
      return false;
    }

    // check if image title is empty
    if (!imgTitle.trim()) {
      setError("Image title cannot be empty.");
      return false;
    }

    // Ensure integer fields are integers and greater than or equal to 0
    const integerFields = [
      { field: servingSize, name: "Serving Size" },
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
          `Please enter a valid integer (0 or above) for ${integerFields[i].name}.`
        );
        return false;
      }
    }

    return true;
  };

  // Update recipe (calling controller)
  const handleUpdateRecipe = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Format the ingredients and instructions
    const formattedIngredients = ingredientList.join("\n");
    const formattedInstructions = instructionList.join("\n");

    // Use newImageBlob if available, otherwise fallback to original imageBlob
    const updatedImageBlob = newImageBlob || imageBlob;

    const userId = SecureStorage.getItem("userId");

    // Construct the payload
    const recipeData = {
      id: params.id, // Make sure this is the correct ID
      steps: formattedInstructions,
      active: true, // or fetch this dynamically if needed
      title,
      description,
      cookingTime: parseInt(cookingTime),
      info: dietaryInformation,
      calories: parseInt(totalCalories),
      protein: parseInt(protein),
      fat: parseInt(fat),
      fibre: parseInt(fibre),
      sodium: parseInt(sodium),
      carbs: parseInt(carbohydrates),
      servingSize: parseInt(servingSize),
      ingredients: formattedIngredients,
      imgTitle: imgTitle,
      userID: { id: userId }, // Replace with actual user ID or fetch dynamically
      dietaryPreferencesId: parseInt(dietaryPreference),
      mealTypeId: parseInt(mealType),
      allergies: allergyRestriction.map((id) => ({ id })),
      img: imageUrl, // Use original image URL
      imgBlob: updatedImageBlob, // Use updated image blob
    };

    try {
      // Send PUT request
      const response = await axiosInterceptorInstance.put(
        "/recipe/update",
        recipeData
      );

      // Set success message and clear any existing error messages
      setSuccess("Recipe updated successfully!");
      setError("");

      // Make success message disappear after 6 seconds
      setTimeout(() => {
        setSuccess("");
      }, 6000);
    } catch (error) {
      console.error("Error updating recipe", error);
      setError("Failed to update recipe. " + error.message);
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
        <div>Checking...</div>
      ) : (
        <>
          <BusinessUserNavBar />
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <div
                className="mt-16 mb-16 mx-auto bg-white rounded-lg shadow"
                style={{ maxWidth: "600px", width: "100%" }} // Increase maxWidth and set width to 100%
              >
                {" "}
                {/* Smaller maxWidth */}
                <div className="p-4 space-y-4 md:space-y-12 ">
                  <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
                    <h1 class="text-5xl font-bold leading-tight tracking-tight text-center text-gray-900 mb-8">
                      Update Recipe
                    </h1>
                    <form className="space-y-3">
                      {/* TITLE */}
                      <div className="flex flex-col">
                        <label
                          htmlFor="title"
                          className="block text-xl mb-1 font-bold text-gray-900"
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

                      {/* ALLERGIES AND RESTRICTIONS */}
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
                          Cooking Time: (in minutes)
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="cookingTime"
                          id="cookingTime"
                          type="number"
                          placeholder="Cooking Time (in mins)"
                          value={cookingTime}
                          onChange={clearErrorOnChange(setCookingTime)}
                          rows={4} // Adjust this number to increase height
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
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
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
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
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                        />
                        <span className="text-sm text-gray-600">
                          {descriptionCharCount}/1000 characters
                        </span>
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
                          rows={7} // Adjust this number to increase height
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                        />
                        <span className="text-sm text-gray-600">
                          {dietaryInformationCharCount}/230 characters
                        </span>
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
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5 mr-2"
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
                                className="text-white bg-red-500 hover:bg-red-600 font-medium text-sm px-3 py-2.5 rounded-lg"
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
                              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5 mr-2"
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
                                className="text-white bg-red-500 hover:bg-red-600 font-medium text-sm px-3 py-2.5 rounded-lg"
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
                              placeholder="Total Calories"
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
                          Error updating recipe: {error}
                        </p>
                      )}
                      {success && (
                        <p className="text-green-500 font-semibold text-sm">
                          {success}
                        </p>
                      )}
                      {/* SUBMIT BUTTON */}
                      <div className="flex flex-row space-x-5 justify-left">
                        <button className="mt-3 bg-red-600 hover:bg-red-700 text-white w-24 font-bold py-2 px-4 rounded-lg">
                          <Link href="/businessUser/recipes">Back</Link>
                        </button>
                        <button
                          type="submit"
                          onClick={handleUpdateRecipe}
                          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white w-24 font-bold py-2 px-4 rounded-lg"
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

export default UpdateRecipePage;
