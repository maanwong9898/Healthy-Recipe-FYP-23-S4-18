"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SecureStorage from "react-secure-storage";

const AccountDropdownMenu = ({ onLogout }) => {
  return (
    <div className="absolute left-0 top-10 w-48 rounded-lg shadow-lg bg-white z-10">
      <ul>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/nutritionist/myAccount/viewAccount">My Account</Link>
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

const MealPlanDropdownMenu = () => {
  return (
    <div className="lg:absolute lg:left-0 top-10 lg:w-48 rounded-lg lg:shadow-lg lg:bg-white z-50 font-medium">
      <ul>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/nutritionist/mealPlan/createMealPlan">
            Create Meal Plan
          </Link>
        </li>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/nutritionist/mealPlan">View My Meal Plans</Link>
        </li>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/nutritionist/mealPlan/exploreAllMealPlan">
            Explore All Meal Plans
          </Link>
        </li>
      </ul>
    </div>
  );
};

const NutritionistNavBar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);
  const [isMealPlanDropdownVisible, setMealPlanDropdownVisible] =
    useState(false);
  const hideTimer = useRef(null);

  // Account Dropdown Menu handler
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

  // Meal Plan Dropdown Menu handler
  const handleMouseEnterMealPlan = () => {
    setMealPlanDropdownVisible(true);
  };

  const handleMouseLeaveMealPlan = () => {
    hideTimer.current = setTimeout(() => {
      setMealPlanDropdownVisible(false);
    }, 300);
  };

  const toggleMealPlanDropdown = () => {
    setMealPlanDropdownVisible(!isMealPlanDropdownVisible);
  };

  //Logout handler
  const confirmAndLogout = () => {
    console.log("logout");
    SecureStorage.clear();
    // check what is the local storage
    console.log(SecureStorage.getItem("token"));
    console.log(SecureStorage.getItem("role"));
    console.log(SecureStorage.getItem("userId"));

    console.log("Redirecting to home page");
    router.push("/");
  };

  const handleViewDashboard = () => {
    router.push("/nutritionist");
  };

  const handleViewAccount = () => {
    router.push("/nutritionist/myAccount/viewAccount");
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
          onClick={handleViewDashboard}
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
            {/* Large Screen View */}
            <ul className="flex-col font-medium p-4 md:p-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 lg:flex hidden">
              <li
                className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onClick={handleViewDashboard}
              >
                Dashboard
              </li>
              <li
                className="relative text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onMouseEnter={handleMouseEnterMealPlan}
                onMouseLeave={handleMouseLeaveMealPlan}
              >
                Meal Plans
                <span className="font-medium">
                  {isMealPlanDropdownVisible && <MealPlanDropdownMenu />}
                </span>
              </li>
            </ul>

            {/* Mobile View */}
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 lg:hidden">
              <li
                className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onClick={handleViewDashboard}
              >
                Dashboard
              </li>
              <li
                className="relative text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onClick={toggleMealPlanDropdown}
              >
                Meal Plans
                <span>
                  <ExpandMoreIcon />
                  {isMealPlanDropdownVisible && <MealPlanDropdownMenu />}
                </span>
              </li>
            </ul>

            {/* My Accounts for Mobile View */}
            <div className="border-t-2 border-gray-300 lg:hidden md:hidden">
              <ul className="px-4 py-3">
                <li
                  className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                  onClick={handleViewAccount}
                >
                  My Account
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

export default NutritionistNavBar;
