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
          <Link href="/sysAdmin/myAccount/viewAccount">My Account</Link>
        </li>
        <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
          <button onClick={onLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};

const UserAccountDropdownMenu = () => {
  return (
    <div className="lg:absolute lg:left-0 top-10 lg:w-48 rounded-lg lg:shadow-lg lg:bg-white z-50 font-medium">
      <ul>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/sysAdmin/userAccount/createUserAccount">
            Create User Account
          </Link>
        </li>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/sysAdmin/userAccount">View User Accounts</Link>
        </li>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/sysAdmin/businessAccountPendingList">
            Verify Business Accounts
          </Link>
        </li>
      </ul>
    </div>
  );
};

const SuspendContentsDropdownMenu = () => {
  return (
    <div className="lg:absolute lg:left-0 top-10 lg:w-48 rounded-lg lg:shadow-lg lg:bg-white z-50 font-medium">
      <ul>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/sysAdmin/suspendBlogPost">Suspend Blog Posts</Link>
        </li>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/sysAdmin/suspendRecipe">Suspend Recipes</Link>
        </li>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/sysAdmin/suspendEducationalContent">
            Suspend Educational Contents
          </Link>
        </li>
        <li className="px-4 py-2 text-base lg:text-sm text-gray-700 hover:bg-gray-100">
          <Link href="/sysAdmin/suspendMealPlan">Suspend Meal Plans</Link>
        </li>
      </ul>
    </div>
  );
};

const SysAdminNavBar = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //Account Menu
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [isAccountDropdownVisible, setAccountDropdownVisible] = useState(false);

  //User Account Menu
  const [isUserAccountDropdownVisible, setUserAccountDropdownVisible] =
    useState(false);

  //Suspend Contents Menu
  const [isSuspendContentsDropdownVisible, setSuspendContentsDropdownVisible] =
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

  // User Account Dropdown Menu handler
  const handleMouseEnterUserAccount = () => {
    setUserAccountDropdownVisible(true);
  };

  const handleMouseLeaveUserAccount = () => {
    hideTimer.current = setTimeout(() => {
      setUserAccountDropdownVisible(false);
    }, 300);
  };

  // Suspend Contents Dropdown Menu handler
  const handleMouseEnterSuspendContents = () => {
    setSuspendContentsDropdownVisible(true);
  };

  const handleMouseLeaveSuspendContents = () => {
    hideTimer.current = setTimeout(() => {
      setSuspendContentsDropdownVisible(false);
    }, 300);
  };

  //Logout handler
  const confirmAndLogout = () => {

    SecureStorage.clear();

    // Redirect to the homepage
    router.push("/");
  };

  const toggleUserAccountDropdown = () => {
    setUserAccountDropdownVisible(!isUserAccountDropdownVisible);
  };

  const toggleSuspendContentsDropdown = () => {
    setSuspendContentsDropdownVisible(!isSuspendContentsDropdownVisible);
  };

  const handleViewDashboard = () => {
    router.push("/sysAdmin");
  };

  const handleViewMyAccount = () => {
    router.push("/sysAdmin/myAccount/viewAccount");
  };

  const handleViewManageCategory = () => {
    router.push("/sysAdmin/allCategory");
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
                onMouseEnter={handleMouseEnterUserAccount}
                onMouseLeave={handleMouseLeaveUserAccount}
              >
                User Accounts
                <span className="font-medium">
                  {isUserAccountDropdownVisible && <UserAccountDropdownMenu />}
                </span>
              </li>
              <li
                className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onClick={handleViewManageCategory}
              >
                Manage Category
              </li>
              <li
                className="relative text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onMouseEnter={handleMouseEnterSuspendContents}
                onMouseLeave={handleMouseLeaveSuspendContents}
              >
                Suspend Contents
                <span className="font-medium">
                  {isSuspendContentsDropdownVisible && (
                    <SuspendContentsDropdownMenu />
                  )}
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
                onClick={toggleUserAccountDropdown}
              >
                User Accounts
                <span>
                  <ExpandMoreIcon />
                  {isUserAccountDropdownVisible && <UserAccountDropdownMenu />}
                </span>
              </li>
              <li
                className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onClick={handleViewManageCategory}
              >
                Manage Category
              </li>
              <li
                className="relative text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                onClick={toggleSuspendContentsDropdown}
              >
                Suspend Contents
                <span>
                  <ExpandMoreIcon />
                  {isSuspendContentsDropdownVisible && (
                    <SuspendContentsDropdownMenu />
                  )}
                </span>
              </li>
            </ul>

            {/* My Accounts for Mobile View */}
            <div className="border-t-2 border-gray-300 lg:hidden md:hidden">
              <ul className="px-4 py-3">
                <li
                  className="text-gray-900 hover:text-orange-600 rounded-md px-3 py-2 font-bold cursor-pointer"
                  onClick={handleViewMyAccount}
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

export default SysAdminNavBar;
