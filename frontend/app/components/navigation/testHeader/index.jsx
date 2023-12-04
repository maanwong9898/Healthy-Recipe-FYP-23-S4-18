// components/navigation/sysAdminNavBar/index.jsx
"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DropdownMenu = () => {
  return (
    <div className="absolute left-0 top-10 w-48 rounded-md shadow-lg bg-white z-10">
      {/* Adjust the mt- value to set the distance from the top */}
      <ul>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          View User Account
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Edit Account
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          Another Option
        </li>
      </ul>
    </div>
  );
};

const TestHeader = () => {
  const router = useRouter();

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
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Website Logo"
            />
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
                User Account
              </span>
              {isDropdownVisible && <DropdownMenu />}
            </div>
            <Link
              href="/sysAdmin/userProfile"
              className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
            >
              User Profile
            </Link>
            <Link
              href="/sysAdmin/foodCategory"
              className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
            >
              Food Category
            </Link>
            <Link
              href="/"
              className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
            >
              Business Account Request
            </Link>
          </div>
          <div className="ml-auto">
            <button
              className="bg-blue-800 text-white rounded-md px-3 py-2 text-sm font-bold"
              onClick={confirmAndLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TestHeader;
