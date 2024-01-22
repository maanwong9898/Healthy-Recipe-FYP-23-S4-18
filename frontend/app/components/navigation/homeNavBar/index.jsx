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

  return (
    <nav
      className="bg-orange-50"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-3 ">
        <Image
          src="/logo.png"
          alt="My Healthy Recipe"
          width={100}
          height={100}
          className="items-center justify-center"
        />

        {/* For small screen */}
        <button
          className="text-black p-2 rounded-md hover:text-orange-600 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Login button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            onClick={handleLogin}
            className="text-white bg-orange-500 hover:bg-orange-600 font-semibold rounded-full text-base px-6 py-2 text-center md:mr-12"
          >
            Login
          </button>
        </div>

        {/* Links */}
        <div
          className={`w-full md:flex md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
            <Link
              href="/"
              className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold"
            >
              Home
            </Link>
            <Link
              href="/aboutUs"
              className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold"
            >
              About Us
            </Link>
            <Link
              href="/recipes"
              className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold"
            >
              Recipes
            </Link>
            <Link
              href="/mealPlan"
              className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold"
            >
              Meal Plans
            </Link>
            <Link
              href="/educationalContent"
              className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold"
            >
              Educational Contents
            </Link>
            <Link
              href="/businessBlogPost"
              className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold"
            >
              Blogs
            </Link>
          </div>
        </div>
        {/* Links for large screens*/}
        {/* <div className="w-full md:flex md:w-auto mr-5">
          <div className="flex flex-col md:flex-row items-start md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <button
              type="button"
              onClick={handleLogin}
              className="text-white bg-orange-500 hover:bg-orange-600 font-bold rounded-full text-base px-6 py-2 text-center"
            >
              Login
            </button>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default HomeNavbar;
