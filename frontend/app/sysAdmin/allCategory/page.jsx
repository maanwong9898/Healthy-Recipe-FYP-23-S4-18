"use client";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import SecureStorage from "react-secure-storage";
import SysAdminNavBar from "../../components/navigation/sysAdminNavBar";

// router path: /sysAdmin/allCategory
const AllCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);
  const [newSubcategoryName, setNewSubcategoryName] = useState("");
  const [editingSubcategoryId, setEditingSubcategoryId] = useState(null);
  const [editedSubcategoryName, setEditedSubcategoryName] = useState("");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds

    if (
      !SecureStorage.getItem("token") ||
      SecureStorage.getItem("role") !== "ADMIN" ||
      now >= parseInt(tokenExpiration)
    ) {
      // clear the secure storage
      SecureStorage.clear();
      console.log("Redirecting to home page");
      router.push("/");
    } else {
      setIsChecking(false);
      setIsLoading(false);
    }
  }, []);

  if (isChecking) {
    return <div>Checking...</div>;
  }

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
    <div className="px-2 sm:px-5 min-h-screen flex flex-col py-5">
      {isLoading && isChecking ? (
        <div>Checking...</div>
      ) : (
        <>
          <SysAdminNavBar />
          <h1 className="text-3xl lg:text-5xl text-gray-900 p-3 mb-4 font-bold text-center sm:text-center">
            Category Management
          </h1>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <h1 className="text-xl lg:text-2xl font-medium tracking-normal font-sans mb-2">
                Select a Category
              </h1>
              <select
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="p-2 rounded-lg border lg:w-72 md:w-72 mb-4"
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
                    className="mr-2 p-2 rounded-lg border w-full md:w-auto"
                    placeholder="New Subcategory Name"
                  />
                  <button
                    onClick={handleCreateSubcategory}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-1.5 rounded-full"
                  >
                    Create
                  </button>
                </div>
              )}
              <h2 className="text-2xl font-medium font-sans capitalize mb-5 ">
                {formatDisplayName(selectedCategory)} Category
              </h2>

              {/* Table */}
              <div className="rounded-lg">
                <table className="w-2/5 rounded-lg border-zinc-200 border-2">
                  <thead className="bg-zinc-700 font-normal text-white border-gray-800 border-2">
                    <tr className="text-center">
                      <th className="px-3 py-2 text-xl">Subcategories</th>
                      <th className="px-3 py-2 text-xl"></th>
                      <th className="px-3 py-2 text-xl"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {subcategories.map((subcategory) => (
                      <tr
                        key={subcategory.id}
                        className={`bg-white border-b ${
                          editingSubcategoryId === subcategory.id
                            ? "p-2 rounded border-2 mr-2"
                            : ""
                        }`}
                      >
                        <td className="px-3 py-2 text-base text-center">
                          {editingSubcategoryId === subcategory.id ? (
                            <input
                              type="text"
                              value={editedSubcategoryName}
                              onChange={(e) =>
                                setEditedSubcategoryName(e.target.value)
                              }
                              className="p-2 rounded-lg border"
                            />
                          ) : (
                            subcategory.subcategoryName
                          )}
                        </td>
                        <td className="px-3 py-2 text-base text-center">
                          {!isHealthGoals &&
                            editingSubcategoryId === subcategory.id && (
                              <button
                                onClick={() =>
                                  handleSaveSubcategory(subcategory.id)
                                }
                                className="text-white font-bold bg-blue-600 hover:bg-blue-700 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
                              >
                                Save
                              </button>
                            )}
                          {!isHealthGoals &&
                            editingSubcategoryId !== subcategory.id && (
                              <button
                                onClick={() =>
                                  handleEditSubcategory(
                                    subcategory.id,
                                    subcategory.subcategoryName
                                  )
                                }
                                className="text-white font-bold bg-slate-700 hover:bg-slate-800 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
                              >
                                Edit
                              </button>
                            )}
                        </td>
                        <td className="px-3 py-2 text-base text-center">
                          {!isHealthGoals && (
                            <button
                              onClick={() =>
                                handleDeleteSubcategory(subcategory.id)
                              }
                              className="text-white font-bold bg-red-600 hover:bg-red-700 rounded-lg text-base px-5 py-2 ml-2 mr-2 text-center"
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
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AllCategories;
