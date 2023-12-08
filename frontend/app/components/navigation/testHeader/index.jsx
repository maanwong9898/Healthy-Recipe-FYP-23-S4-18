"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DropdownMenu = () => {
  return (
    <div className="absolute left-0 top-10 w-48 rounded-md shadow-lg bg-white z-10">
      <ul>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/dietitian/createMealPlan">Create Meal Plan</Link>
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/dietitian/mealPlan">View My Meal Plans</Link>
        </li>
      </ul>
    </div>
  );
};

const DietitianNavBar = () => {
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
          <div className="flex items-center text-blue-950 rounded-md px-3 py-2 text-sm font-extrabold">
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
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Account
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
                Meal Plan
              </span>
              {isDropdownVisible && <DropdownMenu />}
            </div>
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

export default DietitianNavBar;
