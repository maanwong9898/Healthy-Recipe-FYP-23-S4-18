"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SideBarLayout = () => {
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
          <Link href="/registeredUser/userAccount/viewUpdateAccount">
            My Account
          </Link>
        </li>

        <li className="mb-4 hover:underline m-4">
          <Link href="/registeredUser/userAccount/changePwd">
            Change Password
          </Link>
        </li>

        <li className="mb-4 hover:underline">
          <Link href="/registeredUser/dietaryPreference">
            Dietary Preference
          </Link>
        </li>
        <li className="mb-4 hover:underline">
          <Link href="/registeredUser/trackWeight">
            Track Weight Measurements
          </Link>
        </li>
        <li className="mb-4 hover:underline">
          <Link href="/registeredUser/checkBMI">BMI Calculator</Link>
        </li>
        <li className="mb-4 hover:underline">
          <Link href="/">Logout</Link>
        </li>
      </ul>
    </div>
  );
};
export default SideBarLayout;
