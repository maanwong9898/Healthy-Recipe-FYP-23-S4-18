"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import SecureStorage from "react-secure-storage";

const AccountDropdownMenu = ({ onLogout }) => {
  return (
    <div className="lg:absolute lg:left-0 top-10 lg:w-48 rounded-lg lg:shadow-lg lg:bg-white z-50 font-medium">
      <ul>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/registeredUser/myAccount/viewAccount">My Account</Link>
        </li>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/registeredUser/myAccount/dietaryPreference">
            Dietary Preference
          </Link>
        </li>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/registeredUser/myAccount/trackWeight">
            Track Weight Measurements
          </Link>
        </li>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/registeredUser/myAccount/checkBMI">BMI Calculator</Link>
        </li>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100 hidden lg:block">
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

const RegisteredUserNavBar = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);

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

  //Logout handler
  const confirmAndLogout = () => {
    SecureStorage.clear();
    router.push("/");
  };

  const toggleMyAccountsDropdown = () => {
    setAccountDropdownVisible(!isAccountDropdownVisible);
  };

  const handleHomePage = () => {
    router.push("/registeredUser");
  };

  const handleAboutUsPage = () => {
    router.push("/registeredUser/aboutUs");
  };

  const handleRecipePage = () => {
    router.push("/registeredUser/recipes");
  };

  const handleMealPlanPage = () => {
    router.push("/registeredUser/mealPlan");
  };

  const handleEduContentPage = () => {
    router.push("/registeredUser/educationalContent");
  };

  const handleBlogPostPage = () => {
    router.push("/registeredUser/businessBlogPost");
  };

  return (
    <nav className="bg-orange-50 border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Image
          src="/logo.png"
          alt="My Healthy Recipe"
          width={100}
          height={100}
          className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
          onClick={handleHomePage}
          priority
        />

        <div className="relative flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div
            className="hidden lg:block md:block"
            onMouseEnter={handleMouseEnterAccount}
            onMouseLeave={handleMouseLeaveAccount}
          >
            {/* Account button */}
            <button
              type="button"
              className="flex items-center justify-center text-sm"
            >
              <AccountCircleIcon fontSize="large" />
              <span className="text-base font-bold ml-2 hover:text-orange-600">
                My Account
              </span>
            </button>
            {isAccountDropdownVisible && (
              <AccountDropdownMenu onLogout={confirmAndLogout} />
            )}
          </div>

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
            <ul className="flex flex-col font-medium p-4 md:p-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
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

            {/* My Accounts for Mobile View */}
            <div className="border-t-2 border-gray-300 lg:hidden md:hidden">
              <ul className="flex flex-col font-medium p-4 md:p-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:border-0 lg:hidden">
                <li
                  className="relative text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                  onClick={toggleMyAccountsDropdown}
                >
                  My Account
                  <span>
                    <ExpandMoreIcon />
                    {isAccountDropdownVisible && <AccountDropdownMenu />}
                  </span>
                </li>
                <li
                  className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                  onClick={confirmAndLogout}
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default RegisteredUserNavBar;
