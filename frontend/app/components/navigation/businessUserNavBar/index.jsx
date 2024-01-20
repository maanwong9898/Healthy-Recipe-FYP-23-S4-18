"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const AccountDropdownMenu = () => {
  return (
    <div className="absolute left-8 top-14 w-32 rounded-md shadow-lg bg-white">
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

const RecipesDropdownMenu = () => {
  return (
    <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg text-sm">
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

const BusinessUserNavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);

  const [isRecipesDropdownOpen, setRecipesDropdownOpen] = useState(false);

  const [isBlogDropdownOpen, seBlogDropdownOpen] = useState(false);
  const [isEducationalContentDropdownOpen, setEducationalContentDropdownOpen] =
    useState(false);

  const toggleRecipesDropdown = () => {
    setRecipesDropdownOpen(!isRecipesDropdownOpen);
  };

  const toggleBlogDropdown = () => {
    seBlogDropdownOpen(!isBlogDropdownOpen);
  };

  const toggleEducationalContentDropdown = () => {
    setEducationalContentDropdownOpen(!isEducationalContentDropdownOpen);
  };

  const hideTimer = useRef(null);

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

  const handleMouseEnterRecipes = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }
    setRecipesDropdownOpen(true);
  };

  const handleMouseLeaveRecipes = () => {
    hideTimer.current = setTimeout(() => {
      setRecipesDropdownOpen(false);
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
    <nav
      className="bg-orange-50 border-gray-200"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          className="items-center justify-center"
        />
        <div className="flex md:order-2 space-x-3 md:space-x-0">
          <div className="flex items-center space-x-7">
            <div
              className="flex items-center relative"
              onMouseEnter={handleMouseEnterAccount}
              onMouseLeave={handleMouseLeaveAccount}
            >
              <button
                type="button"
                className="text-base z-10 list-none divide-y divide-gray-100 rounded my-4 w-44"
              >
                <FontAwesomeIcon icon={faCircleUser} size="2xl" />
                <span className="text-base tracking-normal font-normal ml-2">
                  {/* need to change to the actual username of logged in user */}
                  Username
                </span>
              </button>
              {isAccountDropdownVisible && <AccountDropdownMenu />}
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items -center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 "
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>
        <div
          className={`w-full md:flex md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
            <Link
              href="/businessUser"
              className="text-black hover:text-orange-500 rounded-md px-3 py-2 font-bold"
            >
              Dashboard
            </Link>
            <div className="relative group">
              <button
                //onClick={toggleRecipesDropdown}
                onMouseEnter={handleMouseEnterRecipes}
                onMouseLeave={handleMouseLeaveRecipes}
                className="text-black hover:text-orange-500 rounded-md px-3 py-2 font-bold"
              >
                <span className="mr-2">Recipes</span>

                <FontAwesomeIcon icon={faChevronDown} size="sm" />
              </button>
              {isRecipesDropdownOpen && <RecipesDropdownMenu />}
            </div>
            <div className="relative group">
              <button
                onClick={toggleBlogDropdown}
                className="text-black hover:text-orange-500 rounded-md px-3 py-2 font-bold"
              >
                <span className="mr-2">Blogs</span>

                <FontAwesomeIcon icon={faChevronDown} size="sm" />
              </button>
              {isBlogDropdownOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white border rounded-md shadow-lg text-sm">
                  <Link
                    href="/businessUser/businessBlogPost/createBusinessBlogPost"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                  >
                    Create Blog Post
                  </Link>
                  <Link
                    href="/businessUser/businessBlogPost"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                  >
                    View My Blog Posts
                  </Link>
                </div>
              )}
            </div>
            <div className="relative group">
              <button
                onClick={toggleEducationalContentDropdown}
                className="text-black hover:text-orange-500 rounded-md px-3 py-2 font-bold"
              >
                <span className="mr-2">Educational Contents</span>

                <FontAwesomeIcon icon={faChevronDown} size="sm" />
              </button>
              {isEducationalContentDropdownOpen && (
                <div className="absolute z-10 ml-2 mt-2 w-56 bg-white border rounded-md shadow-lg text-sm">
                  <Link
                    href="/businessUser/educationalContent/createEducationalContent"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                  >
                    Create Educational Content
                  </Link>
                  <Link
                    href="/businessUser/educationalContent"
                    className="block px-4 py-2 text-gray-900 hover:bg-gray-200"
                  >
                    View My Educational Contents
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={confirmAndLogout}
              className="block font-bold md:hidden py-2 pr-4 pl-3 rounded-md hover:bg-orange-400 md:bg-orange-500 md:ml-auto md:p-0"
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
