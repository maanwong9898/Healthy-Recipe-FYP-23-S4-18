// router path: /registeredUser
"use client";
import React from "react";
import Link from "next/link";

const registerUserPage = () => {
  return (
    <div>
      <h1>Register User Home Page</h1>
      <p>Welcome User XXX</p>
      <Link href="/registeredUser/viewAccount">
        <button
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          View User Account
        </button>
      </Link>
    </div>
  );
};

export default registerUserPage;
