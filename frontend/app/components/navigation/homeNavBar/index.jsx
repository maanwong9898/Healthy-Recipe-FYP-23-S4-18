// components/HomeNavBar.jsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

const HomeNavbar = () => {
  return (
    <>
      <nav className="bg-blue-300">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center">
            <div className="flex items-center">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Website Logo"
              />
            </div>
            <div className="flex space-x-4">
              <Link
                href="/"
                className="text-blue-800 rounded-md px-3 py-2 text-sm font-bold"
                aria-current="page"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
              >
                Recipe
              </Link>
              <Link
                href="/"
                className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
              >
                Meal Plan
              </Link>
              <Link
                href="/"
                className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
              >
                Educational Content
              </Link>
              <Link
                href="/"
                className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
              >
                Business Blog Post
              </Link>
              <Link
                href="/"
                className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
              >
                About Us
              </Link>
            </div>
            <div className="ml-auto">
              <Link href="/userLogin">
                <button className="bg-blue-800 text-white rounded-md px-3 py-2 text-sm font-bold">
                  Login/Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HomeNavbar;
