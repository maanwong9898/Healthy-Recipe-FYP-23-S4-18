"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

const mockRecipeContent = {
  id: "1234512345",
  recipeTitle: "Grilled Salmon with Quinoa and Asparagus",
  publisher: "Daniel Carter",
  category: "Pescatarian",
  cooking_time: "25 Mins",
  number_of_servings: "2 Pax",
  description:
    "A nutritious and delicious dish featuring grilled salmon, quinoa, and asparagus.",
  ingredients:
    "2 salmon fillets \n\n" +
    "1 cup quinoa, rinsed \n\n" +
    "2 cups water \n\n" +
    "1 bunch asparagus, trimmed \n\n" +
    "2 tablespoons olive oil \n\n" +
    "Juice of 1 lemon \n\n" +
    "Salt and pepper to taste \n\n" +
    "Fresh dill for garnish",
  instructions:
    "Step 1: \n Preheat the grill to medium-high heat.\n\n" +
    "Step 2: \n Season salmon fillets with salt, pepper, and a drizzle of olive oil. Grill for 4-5 minutes per side, or until cooked through. \n\n" +
    "Step 3: \n In a saucepan, combine quinoa and water. Bring to a boil, then reduce heat, cover, and simmer for 15 minutes, or until quinoa is cooked and water is absorbed.\n\n" +
    "Step 4: \n While quinoa is cooking, toss asparagus with olive oil, salt, and pepper. Grill for 3-4 minutes, or until tender-crisp.\n\n" +
    "Step 5: \n Assemble the dish by placing a bed of quinoa on each plate, topping with grilled salmon and asparagus.\n\n" +
    "Step 6: \n Drizzle with lemon juice, garnish with fresh dill, and serve hot.",
  total_calories: "450",
  carbs: "30g",
  protein: "40g",
  fat: "18g",
  fibre: "5g",
  sodium: "100mg",
  image_url:
    "https://img.freepik.com/free-photo/baked-salmon-garnished-with-asparagus-tomatoes-with-herbs_2829-14481.jpg?w=1800&t=st=1702801194~exp=1702801794~hmac=3ccec1eb9e8014410d7d5a0f87530ae6909d6ed292f1ab0d6f0b26f6dcd1f22e",
  image_title: "Grilled Salmon with Quinoa and Asparagus",
  date_published: "2023-12-15",
  ratings: 4.8,
  reviews: 20,
  isActive: true,
};

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

const UpdateRecipe = (params) => {
  //form content
  const [title, setTitle] = useState(mockRecipeContent.recipeTitle);
  //const [publisher, setPublisher] = useState("");
  const [category, setCategory] = useState(mockRecipeContent.category);
  const [cookingTime, setCookingTime] = useState(
    mockRecipeContent.cooking_time
  );
  const [servingSize, setServingSize] = useState(
    mockRecipeContent.number_of_servings
  );
  const [description, setDescription] = useState(mockRecipeContent.description);
  const [ingredients, setIngredients] = useState(mockRecipeContent.ingredients);
  const [instructions, setInstructions] = useState(
    mockRecipeContent.instructions
  );
  const [totalCalories, setTotalCalories] = useState(
    mockRecipeContent.total_calories
  );
  const [carbohydrates, setCarbohydrates] = useState(mockRecipeContent.carbs);
  const [protein, setProtein] = useState(mockRecipeContent.protein);
  const [fat, setFat] = useState(mockRecipeContent.fat);
  const [fibre, setFibre] = useState(mockRecipeContent.fibre);
  const [sodium, setSodium] = useState(mockRecipeContent.sodium);
  const [imageUrl, setImageUrl] = useState(mockRecipeContent.image_url);
  const [imageTitle, setImageTitle] = useState(mockRecipeContent.image_title);
  const [ingredientList, setIngredientList] = useState([
    mockRecipeContent.ingredients,
  ]);

  const [error, setError] = useState("");

  //New State
  const [selectedCategory, setSelectedCategory] = useState("");

  // Function to handle category change
  const handleCategorySelection = (e) => {
    setSelectedCategory(e.target.value);
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

  // Function to seperate the ingredients
  const ingredientsArray = ingredients.split("\n\n");

  useEffect(() => {
    setIngredientList(ingredientsArray);
  }, [ingredients]);

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
              Update Recipe
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
                  onChange={(e) => setTitle(e.target.value)}
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
                  onChange={(e) => setCategory(e.target.value)}
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
                  onChange={(e) => setCookingTime(e.target.value)}
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
                  onChange={(e) => setServingSize(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option value="">Select One...</option>
                  <option value="2 Pax">2 Pax</option>
                  <option value="4 Pax">4 Pax</option>
                  <option value="6 Pax">6 Pax</option>
                  <option value="8 Pax">8 Pax</option>
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
                  setDescription
                  onChange={(e) => setDescription(e.target.value)}
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
                  onChange={(e) => setInstructions(e.target.value)}
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
                      onChange={(e) => setTotalCalories(e.target.value)}
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
                      onChange={(e) => setCarbohydrates(e.target.value)}
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
                      onChange={(e) => setProtein(e.target.value)}
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
                      onChange={(e) => setFat(e.target.value)}
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
                      onChange={(e) => setFibre(e.target.value)}
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
                      onChange={(e) => setSodium(e.target.value)}
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
                  onChange={(e) => setImageUrl(e.target.value)}
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
                  onChange={(e) => setImageTitle(e.target.value)}
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
                  //onClick={handleCreateRecipe}
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

export default UpdateRecipe;
