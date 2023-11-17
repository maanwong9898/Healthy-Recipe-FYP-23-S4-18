"use client";

import React, { useState } from "react";
import Link from "next/link";

const DropdownButton = ({ children, links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        {children}
      </button>
      {isOpen && (
        <div className="absolute z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
          <ul
            className="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownButton"
          >
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href} passHref>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const HomeNavbar = () => {
  return (
    <nav className="flex flex-row justify-center space-x-2">
      {/* ... other buttons */}
      <DropdownButton
        links={[
          { title: "Create Recipe", href: "/create-recipe" },
          { title: "View Recipes", href: "/view-recipes" },
          { title: "Delete Recipe", href: "/delete-recipe" },
        ]}
      >
        Recipes
      </DropdownButton>
      {/* ... other buttons */}
    </nav>
  );
};

export default HomeNavbar;
