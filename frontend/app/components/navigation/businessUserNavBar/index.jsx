"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RecipeDropdownMenu = () => {
  return (
    <div className="absolute left-0 top-10 w-48 rounded-md shadow-lg bg-white z-10">
      <ul>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/businessUser/recipes/createRecipe">Create Recipe</Link>
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/businessUser/recipes">View My Recipes</Link>
        </li>
      </ul>
    </div>
  );
};

const BlogPostDropdownMenu = () => {
  return (
    <div className="absolute left-0 top-10 w-48 rounded-md shadow-lg bg-white z-10">
      <ul>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/businessUser/businessBlogPost/createBusinessBlogPost">
            Create Blog Post
          </Link>
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/businessUser/businessBlogPost">View My Blog Posts</Link>
        </li>
      </ul>
    </div>
  );
};

const AccountDropdownMenu = () => {
  return (
    <div className="absolute left-0 top-10 w-48 rounded-md shadow-lg bg-white z-10">
      <ul>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/businessUser/myAccount/viewAccount">My Account</Link>
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

const BusinessUserNavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);

  // Additional state for Recipe dropdown
  const [isRecipeMenuOpen, setIsRecipeMenuOpen] = useState(false);
  const [isRecipeDropdownVisible, setRecipeDropdownVisible] = useState(false);

  const hideTimer = useRef(null);

  const handleMouseEnter = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    hideTimer.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 300);
  };

  const handleMouseEnterAccount = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }
    setAccountDropdownVisible(true);
  };

  const handleMouseLeaveAccount = () => {
    hideTimer.current = setTimeout(() => {
      setAccountDropdownVisible(false);
    }, 300);
  };

  // Handlers for Recipe dropdown
  const handleMouseEnterRecipe = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }
    setRecipeDropdownVisible(true);
  };

  const handleMouseLeaveRecipe = () => {
    hideTimer.current = setTimeout(() => {
      setRecipeDropdownVisible(false);
    }, 300);
  };

  const confirmAndLogout = () => {
    console.log("logout");
    // Clear user data from local storage
    localStorage.removeItem("username");
    localStorage.removeItem("profile");

    // Redirect to the homepage
    router.push("/");
  };

  return (
    <nav className="bg-cyan-600">
      <div className="flex flex-wrap items-center p-3">
        {/* Logo and mobile menu button (small screen) */}
        <div className="flex items-center justify-between w-full md:w-auto md:mr-4">
          <div className="flex items-center text-white rounded-md px-3 py-2 text-lg font-extrabold">
            My Healthy Recipe
          </div>
          <button
            className="text-blue-800 p-2 rounded-md hover:text-white hover:bg-blue-900 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
          <button
            className="text-blue-800 p-2 rounded-md hover:text-white hover:bg-blue-900 md:hidden"
            onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
          >
            Account Settings
          </button>
        </div>

        {/* Links for large screens */}
        <div
          className={`w-full md:flex md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <Link
              href="/businessUser"
              className="text-white hover:bg-sky-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold"
            >
              Home
            </Link>
            <div
              className="relative flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-white hover:bg-sky-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold cursor-pointer">
                Business Blog Posts
              </span>
              {isDropdownVisible && <BlogPostDropdownMenu />}
            </div>
            <div
              className="relative flex items-center"
              onMouseEnter={handleMouseEnterRecipe}
              onMouseLeave={handleMouseLeaveRecipe}
            >
              <span className="text-white hover:bg-sky-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold">
                Recipes
              </span>
              {isRecipeDropdownVisible && <RecipeDropdownMenu />}
            </div>
            <Link
              href="/businessUser/educationalContent"
              className="text-white hover:bg-sky-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold"
            >
              Educational Content
            </Link>
            <button
              onClick={confirmAndLogout}
              className="block md:hidden py-2 pr-4 pl-3 rounded md:bg-transparent md:ml-auto md:p-0"
            >
              Logout
            </button>
          </div>
        </div>
        {/* Links for large screens for Acccounts*/}
        <div
          className={`w-full md:flex md:w-auto md:ml-auto mr-20 ${
            isAccountMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <Link
              href="/dietitian/viewAccount"
              className="sm:hidden hover:bg-sky-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold"
            >
              My Account
            </Link>
            <div
              className="relative flex items-center"
              onMouseEnter={handleMouseEnterAccount}
              onMouseLeave={handleMouseLeaveAccount}
            >
              <span className="hidden md:block text-white hover:bg-sky-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold cursor-pointer">
                Account Settings
              </span>
              {isAccountDropdownVisible && <AccountDropdownMenu />}
            </div>
            <button
              onClick={confirmAndLogout}
              className="block md:hidden py-2 pr-4 pl-3  rounded md:bg-transparent md:ml-auto md:p-0"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BusinessUserNavBar;
