// components/Header.jsx
"use client";
import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="bg-purple-300 p-8">
        <nav className="flex justify-between items-center w-[92%] mx-auto">
          <div className="text-2xl font-bold">Healthy recipe</div>
          <div className="nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-2">
              <li>
                <Link href="/">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Home
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Recipes
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Meal Plans
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Education Content
                  </button>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <button
                    type="button"
                    className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    About us
                  </button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/userLogin">
              <button
                type="button"
                className="text-white bg-gradient-to-br from-red-500 to-yellow-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Log In
              </button>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
