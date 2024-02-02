"use client";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

// router path: /sysAdmin/allCategory
const AllCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [newSubcategoryName, setNewSubcategoryName] = useState("");
  const [editingSubcategoryId, setEditingSubcategoryId] = useState(null);
  const [editedSubcategoryName, setEditedSubcategoryName] = useState("");
  const router = useRouter();

  useEffect(() => {
    // This effect runs once on component mount
    const token = localStorage.getItem("token"); // Replace with your token retrieval logic
    if (!token) {
      // No token found, redirect to the home page
      router.push("/"); // Redirect to the home page
    } else {
      console.log("Token found:", token);
      // Token is found, fetch subcategories as usual
      if (selectedCategory) {
        fetchSubcategories(selectedCategory);
      }
    }
  }, [selectedCategory, router]);

  // Fetch subcategories whenever the selected category changes
  useEffect(() => {
    if (selectedCategory) {
      fetchSubcategories(selectedCategory);
    }
  }, [selectedCategory]);

  // Mapping of categories to their respective API endpoints (for fetching subcategories)
  const categoryToEndpointMap = {
    DietaryPreferences: "DietaryPreferences",
    HealthGoals: "HealthGoals",
    Allergies: "Allergies",
    BusinessBlogPosts: "BlogPostCategories",
    EducationalContent: "EducationalContentCategories",
    MealTypes: "MealTypes",
  };

  // Function to fetch subcategories based on the selected category
  const fetchSubcategories = async (category) => {
    try {
      const endpointName = categoryToEndpointMap[category];
      const endpoint = `/category/getAll${endpointName}`;
      const response = await axiosInterceptorInstance.get(endpoint);
      setSubcategories(response.data || []);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  // Function to handle category change in dropdown
  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    fetchSubcategories(category);
    setNewSubcategoryName(""); // Reset new subcategory name
  };

  // Function to handle creation of a new subcategory
  const handleCreateSubcategory = async () => {
    if (newSubcategoryName.trim()) {
      try {
        await postSubcategory(selectedCategory, newSubcategoryName);
        await fetchSubcategories(selectedCategory); // Refetch subcategories
        setNewSubcategoryName(""); // Reset input field after adding
      } catch (error) {
        console.error("Error creating subcategory:", error);
      }
    }
  };

  // Function to post a new subcategory to the server (called by handleCreateSubcategory)
  const postSubcategory = async (categoryType, subcategoryName) => {
    const endpointMap = {
      DietaryPreferences: "category/dietaryPreference",
      HealthGoals: "category/healthGoal",
      Allergies: "category/allergy",
      BusinessBlogPosts: "category/blogPost",
      EducationalContent: "category/educational",
      MealTypes: "category/mealType",
    };

    const endpoint = endpointMap[categoryType];
    const data = { subcategoryName };

    if (endpoint) {
      console.log("Create category Posting to endpoint:", endpoint);
      const response = await axiosInterceptorInstance.post(endpoint, data);
      return response.data;
    } else {
      throw new Error("Invalid category type");
    }
  };

  // Function to initiate editing of a subcategory
  const handleEditSubcategory = (id, name) => {
    setEditingSubcategoryId(id);
    setEditedSubcategoryName(name);
  };

  // Function to save edits made to a subcategory
  const handleSaveSubcategory = async (id) => {
    const payload = {
      id: id,
      subcategoryName: editedSubcategoryName,
    };

    const endpointMap = {
      DietaryPreferences: "category/dietaryPreferences/edit",
      HealthGoals: "category/healthGoal/edit",
      Allergies: "category/allergy/edit",
      BusinessBlogPosts: "category/blogPostCategory/edit",
      EducationalContent: "category/educationalContentCategory/edit",
      MealTypes: "category/mealType/edit",
    };

    try {
      const endpoint = endpointMap[selectedCategory];
      if (!endpoint) {
        throw new Error("Invalid category type");
      }
      const response = await axiosInterceptorInstance.put(endpoint, payload);
      // Update the subcategories state here if necessary
      await fetchSubcategories(selectedCategory); // Refetch subcategories
      setEditingSubcategoryId(null); // Reset editing state
    } catch (error) {
      console.error("Error updating subcategory:", error);
    }
  };

  // Function to handle deletion of a subcategory
  const handleDeleteSubcategory = async (id) => {
    // Endpoint mapping based on category
    const deleteEndpointMap = {
      DietaryPreferences: `/category/deleteDietaryPreference/${id}`,
      HealthGoals: `/category/deleteHealthGoal/${id}`,
      Allergies: `/category/deleteAllergy/${id}`,
      BusinessBlogPosts: `/category/deleteBlogPostCategory/${id}`,
      EducationalContent: `/category/deleteEducationalContent/${id}`,
      MealTypes: `/category/deleteMealType/${id}`,
    };

    try {
      const endpoint = deleteEndpointMap[selectedCategory];
      if (!endpoint) {
        throw new Error("Invalid category type");
      }
      await axiosInterceptorInstance.delete(endpoint);
      await fetchSubcategories(selectedCategory); // Refetch subcategories to reflect deletion
    } catch (error) {
      console.error("Error deleting subcategory:", error);
    }
  };

  // Define categories directly
  const categories = [
    "DietaryPreferences",
    "HealthGoals",
    "Allergies",
    "BusinessBlogPosts",
    "EducationalContent",
    "MealTypes",
  ];

  // Utility function to format the display names for categories
  const formatDisplayName = (name) => {
    return name
      .replace(/([A-Z])/g, " $1") // Insert a space before all caps
      .replace(/^./, (str) => str.toUpperCase()) // Uppercase the first character
      .trim();
  };

  // Check if the selected category is HealthGoals
  const isHealthGoals = selectedCategory === "HealthGoals";
  return (
    <div className="w-full min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Select a Category</h1>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="p-2 rounded border-2 mb-4"
      >
        <option value="">-- Select a Category --</option>
        {categories.map((categoryKey) => (
          <option key={categoryKey} value={categoryKey}>
            {formatDisplayName(categoryKey)}
          </option>
        ))}{" "}
      </select>

      {selectedCategory && !isHealthGoals && (
        <div className="flex items-center mb-10">
          <input
            type="text"
            value={newSubcategoryName}
            onChange={(e) => setNewSubcategoryName(e.target.value)}
            className="p-2 rounded border-2 mr-2"
            placeholder="New Subcategory Name"
          />
          <button
            onClick={handleCreateSubcategory}
            className="text-white bg-gradient-to-br from-cyan-400 to-cyan-800 border-2 border-black hover:bg-blue-700 font-bold py-2 px-4 rounded"
          >
            Create
          </button>
        </div>
      )}

      <h2 className="text-2xl font-bold capitalize mb-5 ">
        {formatDisplayName(selectedCategory)} Category
      </h2>
      <table className="sm:w-3/4 md:w-2/6 w-full border-black border-2">
        <thead className="bg-zinc-700 font-normal text-white border-gray-800 border-2">
          <tr>
            <th className="px-4 py-2 text-xl text-left">Subcategories</th>
            <th className="px-4 py-2 text-xl text-left"></th>
            <th className="px-4 py-2 text-xl text-left"></th>
          </tr>
        </thead>
        <tbody>
          {subcategories.map((subcategory) => (
            <tr
              key={subcategory.id}
              className={`border-t bg-white border-b border-blue dark:border-blue-600 ${
                editingSubcategoryId === subcategory.id ? "bg-gray-300" : ""
              }`}
            >
              <td className="px-4 py-9 text-base">
                {editingSubcategoryId === subcategory.id ? (
                  <input
                    type="text"
                    value={editedSubcategoryName}
                    onChange={(e) => setEditedSubcategoryName(e.target.value)}
                    className="p-2 rounded border-2"
                  />
                ) : (
                  subcategory.subcategoryName
                )}
              </td>
              <td>
                {!isHealthGoals && editingSubcategoryId === subcategory.id && (
                  <button
                    onClick={() => handleSaveSubcategory(subcategory.id)}
                    className="text-white
                     bg-gradient-to-br from-cyan-400 to-cyan-800 border-2 border-black hover:bg-blue-700 font-bold py-2 px-4 rounded"
                  >
                    Save
                  </button>
                )}
                {!isHealthGoals && editingSubcategoryId !== subcategory.id && (
                  <button
                    onClick={() =>
                      handleEditSubcategory(
                        subcategory.id,
                        subcategory.subcategoryName
                      )
                    }
                    className="text-white bg-gradient-to-br from-cyan-400 to-cyan-800 border-2 border-black hover:bg-blue-700 font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </button>
                )}
              </td>
              <td>
                {!isHealthGoals && (
                  <button
                    onClick={() => handleDeleteSubcategory(subcategory.id)}
                    className="text-white bg-red-600 border-2 border-black font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllCategories;
