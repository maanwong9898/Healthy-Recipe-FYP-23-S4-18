// components/HomeNavBar.jsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HomeNavbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleLogin = () => {
    router.push("/userLogin");
  };

  const hideTimer = useRef(null);

  const handleMouseEnterMenu = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }
    setDropdownVisible(true);
  };

  const handleMouseLeaveMenu = () => {
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
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            onClick={handleLogin}
            className="text-white bg-orange-500 hover:bg-orange-600 font-semibold rounded-lg text-base px-4 py-2 text-center"
          >
            Login
          </button>
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
              href="/"
              className="text-black hover:bg-orange-400 rounded-md px-3 py-2 font-bold"
            >
              Home
            </Link>
            <Link
              href="/aboutUs"
              className="text-black hover:bg-orange-400 rounded-md px-3 py-2 font-bold"
            >
              About Us
            </Link>
            <Link
              href="/recipes"
              className="text-black hover:bg-orange-400 rounded-md px-3 py-2 font-bold"
            >
              Recipes
            </Link>
            <Link
              href="/mealPlan"
              className="text-black hover:bg-orange-400 rounded-md px-3 py-2 font-bold"
            >
              Meal Plans
            </Link>
            <Link
              href="/educationalContent"
              className="text-black hover:bg-orange-400 rounded-md px-3 py-2 font-bold"
            >
              Educational Contents
            </Link>
            <Link
              href="/businessBlogPost"
              className="text-black hover:bg-orange-400 rounded-md px-3 py-2 font-bold"
            >
              Blogs
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
