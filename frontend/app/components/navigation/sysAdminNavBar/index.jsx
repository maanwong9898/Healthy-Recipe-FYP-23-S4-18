"use client";
import React from "react";
import Link from "next/link";

const SysAdminNavBar = () => {
  return (
    <div className="flex flex-col bg-gradient-to-br from-gray-600 to-white p-5">
      <div>
        <Link href="/sysAdmin">
          <button
            type="button"
            className="text-white bg-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Home
          </button>
        </Link>
        <Link href="/sysAdmin/userAccount">
          <button
            type="button"
            className="text-white  bg-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            User Account
          </button>
        </Link>
        <Link href="/">
          <button
            type="button"
            className="text-white  bg-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            User Profile
          </button>
        </Link>
        <Link href="/sysAdmin/createFoodCategory">
          <button
            type="button"
            className="text-white  bg-black hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Food Category
          </button>
        </Link>
      </div>
    </div>
  );
};
export default SysAdminNavBar;
