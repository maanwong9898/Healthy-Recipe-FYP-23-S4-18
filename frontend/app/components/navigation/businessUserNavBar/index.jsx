"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DropdownMenu = () => {
  return (
    <div className="absolute left-0 top-10 w-48 rounded-md shadow-lg bg-white z-10">
      <ul>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Create Blog Post
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          View My Blog Posts
        </li>
      </ul>
    </div>
  );
};

const BusinessUserNavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDropdownVisible, setDropdownVisible] = useState(false);
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

  const confirmAndLogout = () => {
    console.log("logout");
    // Clear user data from local storage
    localStorage.removeItem("username");
    localStorage.removeItem("profile");

    // Redirect to the homepage
    router.push("/");
  };

  return (
    <nav className="bg-blue-300">
      <div className="flex flex-wrap items-center p-3">
        {/* Logo and mobile menu button */}
        <div className="flex items-center justify-between w-full md:w-auto md:mr-4">
          <Link href="/">
            <img
              className="h-8 w-auto cursor-pointer"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Website Logo"
            />
          </Link>
          <button
            className="text-blue-800 p-2 rounded-md hover:text-white hover:bg-blue-900 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>

        {/* Links for large screens */}
        <div
          className={`w-full md:flex md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <Link
              href="/sysAdmin"
              className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
            >
              Home
            </Link>
            <div
              className="relative flex items-center"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold cursor-pointer">
                Business Blog Posts
              </span>
              {isDropdownVisible && <DropdownMenu />}
            </div>
            <Link
              href="/businessUser/recipes"
              className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
            >
              Recipes
            </Link>
            <Link
              href="/businessUser/educationalContent"
              className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
            >
              Educational Content
            </Link>
            <button
              onClick={confirmAndLogout}
              className="block md:hidden py-2 pr-4 pl-3 text-blue-800 rounded md:bg-transparent md:ml-auto md:p-0"
            >
              Logout
            </button>
          </div>
        </div>
        <div className="md:ml-auto">
          <button
            className="hidden md:block bg-blue-800 text-white rounded-md px-3 py-2 text-sm font-bold"
            onClick={confirmAndLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BusinessUserNavBar;
