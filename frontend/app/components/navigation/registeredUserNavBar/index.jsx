"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AccountDropdownMenu = () => {
  return (
    <div className="absolute left-0 top-10 w-48 rounded-md shadow-lg bg-white z-10">
      <ul>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/registeredUser/userAccount/viewAccount">My Account</Link>
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/registeredUser/userAccount">Dietary Preference</Link>
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/registeredUser/userAccount">
            Track Weight and Measurements
          </Link>
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/registeredUser/userAccount">Check BMI</Link>
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

const RegisteredUserNavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);

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
          <div className="flex items-center text-white rounded-md px-3 py-2 text-sm font-extrabold">
            My Healthy Recipe
          </div>
          <button
            className="text-white p-2 rounded-md hover:text-white hover:bg-blue-900 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
          <button
            className="text-white p-2 rounded-md hover:text-white hover:bg-blue-900 md:hidden"
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
          <div className="flex flex-col  md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium">
            <Link
              href="/"
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
                About Us
              </span>
            </div>
            <Link
              href="/"
              className="text-white hover:bg-sky-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold"
            >
              Recipes
            </Link>
            <Link
              href="/"
              className="text-white hover:bg-sky-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold"
            >
              Meal Plans
            </Link>
            <Link
              href="/"
              className="text-white hover:bg-sky-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold"
            >
              Educational Content
            </Link>
            <Link
              href="/"
              className="text-white hover:bg-sky-200 hover:text-black rounded-md px-3 py-2 text-sm font-bold"
            >
              Business Blog Posts
            </Link>
            <button
              onClick={confirmAndLogout}
              className="block md:hidden py-2 pr-4 pl-3 text-blue-800 rounded md:bg-transparent md:ml-auto md:p-0"
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
              className="block md:hidden py-2 pr-4 pl-3 text-blue-800 rounded md:bg-transparent md:ml-auto md:p-0"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RegisteredUserNavBar;
