"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// router path: /registeredUser/mealPlan

const AllMealPLan = [
  {
    id: 1,
    mealPlanTitle:
      "Wholesome Slimming: Balanced Vegetarian Meals for Weight Loss",
    date_published: "2021-10-01",
    image_url:
      "https://img.freepik.com/free-photo/meal-planning-notepad-food-composition_23-2149099820.jpg?w=826&t=st=1702872342~exp=1702872942~hmac=6ae3572ab02e9eec7aaf4e50c601c93cae848e494ac5b951cce2e39baba488af",
    image_title: "Meal Plan",
    introduction:
      "Welcome to 'Wholesome Slimming', your ultimate companion for weight loss! This meal plan is crafted with love, featuring a medley of recipes that celebrate the unique flavors and ingredients each season has to offer. From the fresh blossoms of spring to the hearty harvest of autumn, we invite you to embark on a gastronomic journey through the year. Get ready to explore dishes that will not only nourish the body but also delight the senses.",
    ratings: 4,
    reviews: 10,
    isActive: true,
  },
  {
    id: 2,
    mealPlanTitle: "3-Day Vegan Kickstart: Energizing Meal Plan",
    date_published: "2022-05-20",
    image_url:
      "https://img.freepik.com/free-photo/vegetarian-buddha-bowl-with-fresh-vegetable-salad-chickpea_1150-42359.jpg?w=826&t=st=1702872465~exp=1702873065~hmac=b3d188c7e7cf055d98e23a233a61e67f0498ca9d2f9111d16d37f8f949bbe598",
    image_title: "Meal Plan",
    introduction:
      "Welcome to '3-Day Vegan Kickstart', your ultimate companion for weight loss! This meal plan is crafted with love, featuring a medley of recipes that celebrate the unique flavors and ingredients each season has to offer. From the fresh blossoms of spring to the hearty harvest of autumn, we invite you to embark on a gastronomic journey through the year. Get ready to explore dishes that will not only nourish the body but also delight the senses.",
    ratings: 4,
    reviews: 14,
    isActive: true,
  },
  {
    id: 3,
    mealPlanTitle: "Plant-Based Cleanse for Weight Loss",
    date_published: "2022-07-11",
    image_url:
      "https://img.freepik.com/free-photo/delicious-salmon-bowls-table-arrangement_23-2150427654.jpg?w=826&t=st=1702873329~exp=1702873929~hmac=9f1ab4442187d579f9b67a3528bafd2a289418b59c1580bbec10b96d8b3497e1",
    image_title: "Meal Plan",
    introduction:
      "Welcome to 'Plant-Based Cleanse', your ultimate companion for weight loss! This meal plan is crafted with love, featuring a medley of recipes that celebrate the unique flavors and ingredients each season has to offer. From the fresh blossoms of spring to the hearty harvest of autumn, we invite you to embark on a gastronomic journey through the year. Get ready to explore dishes that will not only nourish the body but also delight the senses.",
    ratings: 4,
    reviews: 22,
    isActive: true,
  },
  {
    id: 4,
    mealPlanTitle: "5-Day Low-Carb Vegetarian Meal Plan for Busy Bees",
    date_published: "2023-03-15",
    image_url:
      "https://img.freepik.com/free-photo/dietary-menu-healthy-vegan-salad-vegetables-broccoli-mushrooms-spinach-quinoa-bowl-flat-lay-top-view_2829-20115.jpg?w=826&t=st=1702873377~exp=1702873977~hmac=b436b09238317e08afedaf2d0affae034e487ee7c863181a8b0a01f601f985f0",
    image_title: "Meal Plan",
    introduction:
      "Welcome to '5-Day Low-Carb Vegetarian Meal Plan', your ultimate companion for weight loss! This meal plan is crafted with love, featuring a medley of recipes that celebrate the unique flavors and ingredients each season has to offer. From the fresh blossoms of spring to the hearty harvest of autumn, we invite you to embark on a gastronomic journey through the year. Get ready to explore dishes that will not only nourish the body but also delight the senses.",
    ratings: 4,
    reviews: 9,
    isActive: false,
  },
  {
    id: 5,
    mealPlanTitle: "Gluten-Free Vegan Journey to Wellness",
    date_published: "2021-12-01",
    image_url:
      "https://img.freepik.com/free-photo/assortment-common-food-allergens-people_23-2149870557.jpg?w=826&t=st=1702873456~exp=1702874056~hmac=3ba6684ce61bd22b35cc37160036a3b072ff292529a5b56e0a5f9ee555437f5b",
    image_title: "Meal Plan",
    introduction:
      "Welcome to 'Gluten-Free Vegan Journey to Wellness', your ultimate companion for weight loss! This meal plan is crafted with love, featuring a medley of recipes that celebrate the unique flavors and ingredients each season has to offer. From the fresh blossoms of spring to the hearty harvest of autumn, we invite you to embark on a gastronomic journey through the year. Get ready to explore dishes that will not only nourish the body but also delight the senses.",
    ratings: 4,
    reviews: 30,
    isActive: true,
  },
];

const MealPlanPageForUser = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredMealPlans = AllMealPLan.filter(
    (post) =>
      post.isActive &&
      post.mealPlanTitle.toLowerCase().includes(searchQuery) &&
      (categoryFilter ? post.category === categoryFilter : true)
  );

  // Latest posts
  const latestMealPlans = [...AllMealPLan]
    .filter((post) => post.isActive)
    .sort((a, b) => new Date(b.date_published) - new Date(a.date_published))
    .slice(0, 3);

  // Top rated posts
  const topRatedMealPlans = [...AllMealPLan]
    .filter((post) => post.isActive)
    .sort((a, b) => b.ratings - a.ratings || b.reviews - a.reviews)
    .slice(0, 3);

  // Other posts excluding latest and top rated
  const otherMealPlans = AllMealPLan.filter(
    (post) =>
      post.isActive &&
      !latestMealPlans.some((latest) => latest.id === post.id) &&
      !topRatedMealPlans.some((top) => top.id === post.id)
  );

  // this function is to view particular blog post
  const handleViewMealPlan = (blogPostTitle) => {
    // Make sure the blogPostTitle
    console.log(`Blog Title: ${blogPostTitle}`);

    // Redirect to the correct route
    let routePath = `/registeredUser/mealPlan/viewMealPlan/${blogPostTitle}`;

    router.push(routePath);
  };

  // Filter the active blog posts
  const activeBlogPosts = AllMealPLan.filter((post) => post.isActive);

  // Function to render a single post card
  const renderPostCard = (mealPlan) => (
    <div
      key={mealPlan.id}
      className="rounded shadow-lg overflow-hidden flex flex-col"
      style={{
        border: "0.5px solid transparent",
        background:
          "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
    >
      <img
        src={mealPlan.image_url}
        alt={mealPlan.image_title}
        className="w-full object-cover rounded-sm"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div>
          <h2 className="text-2xl font-extrabold mb-2">
            {mealPlan.mealPlanTitle}
          </h2>
          <p
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            {mealPlan.introduction}
          </p>
        </div>
        <button
          onClick={() => handleViewMealPlan(mealPlan.mealPlanTitle)}
          className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
        >
          Read more
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-extrabold font-mono text-cyan-800 mb-4 md:mb-8">
        Meal Plan
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-5">
        <div className="flex flex-row md:flex-row border-2 border-gray-300 rounded-lg mb-4 md:mb-0">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search meal plan..."
            className="px-4 py-2 h-10 rounded-lg rounded-r-none text-base focus:outline-none"
          />
          <button
            // onClick={/* Function to handle search */}
            className="px-4 py-2 bg-cyan-600 text-white rounded-lg rounded-l-none hover:bg-cyan-700 focus:outline-none"
          >
            Search
          </button>
        </div>
        <select
          value={categoryFilter}
          onChange={handleCategoryChange}
          className="border-2 border-gray-300 bg-white h-10 px-4 md:px-5 rounded-lg text-base focus:outline-none"
        >
          <option value="">Sort By</option>
          <option value="vegan">Latest</option>
          <option value="vegetarian">Oldest</option>
          <option value="pescatarian">Highest Rating</option>
        </select>
      </div>
      {filteredMealPlans.length === 0 && (
        <p className="text-center font-semibold text-xl md:text-2xl mb-4 text-red-500">
          No results found{searchQuery && ` for "${searchQuery}"`}.
        </p>
      )}
      {/* Latest Meal Plan Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 mt-4">Just for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {latestMealPlans.map((post) => renderPostCard(post))}
        </div>
      </div>
      {/* end of latest */}

      {/* Post with most review Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 mt-4">Most Popular Meal Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topRatedMealPlans.map((post) => renderPostCard(post))}
        </div>
      </div>
      {/* end of most popular */}
      {/* Other Posts Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 mt-4">Other Meal Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherMealPlans.map((post) => renderPostCard(post))}
        </div>
      </div>
      {/* end of other */}
    </div>
  );
};

export default MealPlanPageForUser;
