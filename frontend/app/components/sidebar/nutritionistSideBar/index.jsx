"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const NutritionistSideBarLayout = () => {
  //Expand my account
  //   const [isExpanded, setIsExpanded] = useState(false);
  //   const ExpandMyAccount = () => {
  //     setIsExpanded(!isExpanded);
  //   };

  return (
    <div className="w-1/4 h-screen bg-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-10">My Dashboard</h2>
      <ul>
        <li className="mb-4 hover:underline">
          <Link href="/nutritionist/myAccount/viewAccount">My Account</Link>
        </li>

        <li className="mb-4 hover:underline m-4">
          <Link href="/nutritionist/myAccount/changePwd">Change Password</Link>
        </li>

        <li className="mb-4 hover:underline">
          <Link href="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};
export default NutritionistSideBarLayout;
