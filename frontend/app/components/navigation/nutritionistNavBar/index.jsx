"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const AccountDropdownMenu = ({ onLogout }) => {
  return (
    <div className="absolute left-0 top-8 w-44 rounded-md shadow-lg bg-white z-10">
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
    <div className="absolute left-0 top-10 w-48 rounded-md shadow-lg bg-white z-10 text-sm">
      <ul>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/nutritionist/mealPlan/createMealPlan">
            Create Meal Plan
          </Link>
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/nutritionist/mealPlan">View My Meal Plans</Link>
        </li>
      </ul>
    </div>
  );
};

const NutritionistNavBar = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Account Menu
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);

  //Meal Plan Menu
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
      setAccountDropdownVisible(false);
    }, 300);
  };

  //Logout handler
  const confirmAndLogout = () => {
    console.log("logout");
    // Clear user data from local storage
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");

    // check what is the local storage
    console.log(localStorage.getItem("token"));
    console.log(localStorage.getItem("role"));
    console.log(localStorage.getItem("userId"));

    // Redirect to the homepage
    router.push("/");
  };

  return (
    <nav
      className="bg-orange-50"
      style={{ position: "sticky", top: 0, zIndex: 1000 }}
    >
      <div className="flex flex-wrap items-center justify-between mx-auto p-3">
        <Image
          src="/logo.png"
          alt="My Healthy Recipe"
          width={100}
          height={100}
          className="items-center justify-center"
        />

        {/* For small screen */}
        <button
          className="text-gray-900 p-2 rounded-md hover:text-orange-600 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
        <button
          className="p-2 md:hidden"
          onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
        >
          <FontAwesomeIcon icon={faCircleUser} size="xl" />
          <span className="text-base tracking-normal font-medium ml-2 hover:text-orange-600">
            {/* need to change to the actual username of logged in user */}
            {username || "My Account"}
          </span>
        </button>

        {/* Links - Dahsboard, Recipes, Blogs, Educational Content */}
        <div
          className={`w-full md:flex md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-medium">
            {/* Dashboard */}
            <Link
              href="/nutritionist"
              className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold"
            >
              Dashboard
            </Link>

            {/* Meal Plan */}
            <div
              className="relative flex items-center"
              onMouseEnter={handleMouseEnterMealPlan}
              onMouseLeave={handleMouseLeaveMealPlan}
            >
              <span className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold">
                Meal Plans
              </span>
              {isMealPlanDropdownVisible && <MealPlanDropdownMenu />}
            </div>
          </div>
        </div>
        {/* End of Links */}

        {/* Links for large screens for Acccounts*/}
        <div
          className={`w-full md:flex md:w-auto mr-5 ${
            isAccountMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <div
              className="relative flex items-center"
              onMouseEnter={handleMouseEnterAccount}
              onMouseLeave={handleMouseLeaveAccount}
            >
              <span className="hidden md:block rounded font-bold  text-base cursor-pointer">
                <FontAwesomeIcon icon={faCircleUser} size="xl" />
                <span className="text-base tracking-normal font-bold ml-2 hover:text-orange-600">
                  {/* need to change to the actual username of logged in user */}
                  {username || "My Account"}
                </span>
              </span>
              {/* {isAccountDropdownVisible && <AccountDropdownMenu />} */}
              {isAccountDropdownVisible && (
                <AccountDropdownMenu onLogout={confirmAndLogout} />
              )}
            </div>

            {/* For small screens */}
            <Link href="/nutritionist/myAccount/viewAccount">
              <button className="block md:hidden py-2 pr-4 pl-3 rounded-lg md:ml-auto md:p-0 text-base font-bold hover:text-orange-600">
                My Account
              </button>
            </Link>
            <button
              onClick={confirmAndLogout}
              className="block md:hidden py-2 pr-4 pl-3 rounded-lg md:ml-auto md:p-0 text-base font-bold hover:text-orange-600"
            >
              {" "}
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NutritionistNavBar;
