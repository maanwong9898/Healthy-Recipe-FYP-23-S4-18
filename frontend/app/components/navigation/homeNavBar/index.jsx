// components/HomeNavBar.jsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

const HomeNavbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    router.push("/userLogin");
  };

  const handleHomePage = () => {
    router.push("/");
  };

  const handleAboutUsPage = () => {
    router.push("/aboutUs");
  };

  const handleRecipePage = () => {
    router.push("/recipes");
  };

  const handleMealPlanPage = () => {
    router.push("/mealPlan");
  };

  const handleEduContentPage = () => {
    router.push("/educationalContent");
  };

  const handleBlogPostPage = () => {
    router.push("/businessBlogPost");
  };

  return (
    <nav className="bg-orange-50 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image
          src="/logo.png"
          alt="My Healthy Recipe"
          width={100}
          height={100}
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
          onClick={handleHomePage}
        />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {/* Login button */}
          <button
            type="button"
            onClick={handleLogin}
            className="text-white bg-orange-500 hover:bg-orange-600 font-semibold rounded-full text-base px-6 py-2 text-center md:mr-12"
          >
            Login
          </button>

          {/* Hamburger menu for Mobile screen*/}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <MenuIcon fontSize="large" />
          </button>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex items-center justify-between w-full md:w-auto md:order-1 bg-stone-200 rounded-lg md:bg-transparent`}
        >
          <div className="items-center justify-between w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              <li
                className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onClick={handleAboutUsPage}
              >
                About Us
              </li>
              <li
                className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onClick={handleRecipePage}
              >
                Recipes
              </li>
              <li
                className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onClick={handleMealPlanPage}
              >
                Meal Plans
              </li>
              <li
                className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onClick={handleEduContentPage}
              >
                Educational Contents
              </li>
              <li
                className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onClick={handleBlogPostPage}
              >
                Blog Posts
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
