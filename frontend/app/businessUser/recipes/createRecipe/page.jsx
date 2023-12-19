"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

// router path: /businessUser/businessBlogPost/createBusinessBlogPost
// this is the page to create business blog post according to user story

const mockRecipeCategory = [
  {
    category: "Vegan",
  },
  {
    category: "Vegetarian",
  },
  {
    category: "Pescatarian",
  },
];

const CreateRecipePage = () => {
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [category, setCategory] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servingSize, setServingSize] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [totalCalories, setTotalCalories] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [fibre, setFibre] = useState("");
  const [sodium, setSodium] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageTitle, setImageTitle] = useState("");
  const [error, setError] = useState("");
  const [ingredientList, setIngredientList] = useState([""]);

  // Function to handle category change
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Function to handle add ingredietns
  const handleAddIngredient = () => {
    setIngredientList([...ingredientList, ""]);
  };

  // Function to change the ingredient list
  const handleIngredientChange = (index, value) => {
    const updatedList = [...ingredientList];
    updatedList[index] = value;
    setIngredientList(updatedList);
  };

  // Function to delete the ingredient
  const handleDeleteIngredient = () => {
    const updatedList = [...ingredientList];
    updatedList.pop();
    setIngredientList(updatedList);
  };

  useEffect(() => {
    // Access localStorage after component mounts and is on the client-side
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setPublisher(storedUsername);
    }
  }, []);

  const handleCreateRecipe = (event) => {
    event.preventDefault();

    // Validation and submission logic here
    console.log("Recipe Details:", {
      title,
      publisher,
      category,
      cookingTime,
      servingSize,
      description,
      ingredientList,
      instructions,
      totalCalories,
      sugar,
      protein,
      carbohydrates,
      fat,
      imageUrl,
      imageTitle,
    });

    // Reset fields and error after submission
    setTitle("");
    // setPublisher("");
    setCategory("");
    setCookingTime("");
    setServingSize("");
    setDescription("");
    setIngredients("");
    setIngredientList([""]);
    setInstructions("");
    setTotalCalories("");
    setSugar("");
    setProtein("");
    setCarbohydrates("");
    setFat("");
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
        className="mt-16 mb-16 mx-auto bg-slate-100 rounded-lg shadow"
        style={{ maxWidth: "600px", width: "100%" }} // Increase maxWidth and set width to 100%
      >
        {" "}
        {/* Smaller maxWidth */}
        <div className="p-4 space-y-4 md:space-y-12 ">
          <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
            <h1 className="text-xl font-bold mb-6 leading-tight tracking-tight text-black md:text-2xl">
              Create Recipe
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
                  {mockRecipeCategory.map((cat, index) => (
                    <option key={index} value={cat.category}>
                      {cat.category}
                    </option>
                  ))}
                </select>
              </div>

              {/* COOKING TIME */}
              <div className="flex flex-col">
                <label
                  htmlFor="cookingTime"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Cooking Time: (in minutes)
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
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Serving Size:
                </label>
                <select
                  id="servingSize"
                  name="servingSize"
                  value={servingSize}
                  onChange={handleCategoryChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Select One...</option>
                  <option value="2serving">2 Pax</option>
                  <option value="4serving">4 Pax</option>
                  <option value="6serving">6 Pax</option>
                  <option value="8serving">8 Pax</option>
                </select>
              </div>

              {/* DESCRIPTION */}
              <div className="flex flex-col">
                <label
                  htmlFor="description"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Description:
                </label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="Write a short description about your recipe"
                  value={description}
                  onChange={clearErrorOnChange(setDescription)}
                  rows={7} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>

              {/* INGREDIENTS */}
              <div className="flex flex-col">
                <label
                  htmlFor="ingredients"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Ingredients:
                </label>
                {ingredientList.map((ingredient, index) => (
                  <div key={index} className="flex space-x-2 mb-2 flex-col">
                    <input
                      placeholder={`Ingredient ${index + 1}`}
                      value={ingredient}
                      onChange={(e) =>
                        handleIngredientChange(index, e.target.value)
                      }
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    />
                    {index === ingredientList.length - 1 && (
                      <div className="flex flex-row space-x-5 justify-center">
                        <button
                          type="button"
                          onClick={handleDeleteIngredient}
                          disabled={ingredientList.length === 1}
                          className="text-white bg-red-500 hover:bg-red-800 font-medium text-sm px-3 py-2.5 w-40 mt-3 rounded-lg"
                        >
                          Delete Ingredient
                        </button>
                        <button
                          type="button"
                          onClick={handleAddIngredient}
                          className="text-white bg-gray-800 hover:bg-gray-900 font-medium text-sm px-3 py-2.5 w-40 mt-3 rounded-lg"
                        >
                          Add Ingredient
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* INSTRUCTIONS */}
              <div className="flex flex-col">
                <label
                  htmlFor="instructions"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Instructions:
                </label>
                <textarea
                  name="instructions"
                  id="instructions"
                  placeholder="Seperate each step with a semicolon (;)"
                  value={instructions}
                  onChange={clearErrorOnChange(setInstructions)}
                  rows={3} // Adjust this number to increase height
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />
              </div>

              {/* NUTRITIONAL INFORMATION */}
              <div className="flex flex-col">
                <label
                  htmlFor="nutritionalInformation"
                  className="block text-xl mb-1 font-bold text-cyan-950"
                >
                  Nutritional Information:
                </label>

                <div className="grid grid-cols-2 gap-6 mt-3">
                  {/* TOTAL CALORIES */}
                  <div className="flex flex-col">
                    <label htmlFor="calories" className="mb-1">
                      Total Calories:
                    </label>
                    <input
                      tyoe="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg">
                  <Link href="/businessUser/recipes">Cancel</Link>
                </button>
                <button
                  type="submit"
                  onClick={handleCreateRecipe}
                  className="bg-cyan-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg"
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

export default CreateRecipePage;
