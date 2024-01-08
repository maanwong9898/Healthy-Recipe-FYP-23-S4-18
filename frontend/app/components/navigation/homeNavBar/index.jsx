// components/HomeNavBar.jsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HomeNavbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const hideTimer = useRef(null);

  const handleMouseEnterMenu = () => {
    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }
    setDropdownVisible(true);
  };

  const handleMouseLeaveMenu = () => {
    hideTimer.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 300);
  };

  const confirmAndLogout = () => {
    console.log("logout");
    // Clear user data from local storage
    localStorage.removeItem("username");
    localStorage.removeItem("profile");

    // Redirect to the homepage
    router.push("/");
  };

  return (
    <nav className="bg-orange-50 shadow-lg">
      <div className="flex flex-wrap items-center p-3">
        {/* Logo and mobile menu button (small screen) */}
        <div className="flex items-center justify-between w-full md:w-auto md:mr-4">
          <div className="flex items-center text-gray-800 rounded-md px-3 py-2 text-lg font-extrabold">
            <Image
              src="/logo.png"
              width={100}
              height={100}
              className="items-center justify-center"
            />
          </div>
          <button
            className="text-black p-2 rounded-md hover:bg-orange-400 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✖" : "☰"}
          </button>
        </div>

        {/* Links for large screens for dietitian nav bar */}
        <div
          className={`w-full md:flex md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
            <Link
              href="/"
              className="text-black hover:bg-orange-400 rounded-md px-3 py-2 font-bold"
            >
              Home
            </Link>
            <Link
              href="/aboutUs"
              className="text-black hover:bg-orange-400 hover:text-black rounded-md px-3 py-2 font-bold"
            >
              About Us
            </Link>
            <Link
              href="/recipes"
              className="text-black hover:bg-orange-400 hover:text-black rounded-md px-3 py-2 font-bold"
            >
              Recipes
            </Link>
            <Link
              href="/mealPlan"
              className="text-black hover:bg-orange-400 hover:text-black rounded-md px-3 py-2 font-bold"
            >
              Meal Plans
            </Link>
            <Link
              href="/educationalContent"
              className="text-black hover:bg-orange-400 hover:text-black rounded-md px-3 py-2 font-bold"
            >
              Educational Content
            </Link>
            <Link
              href="/businessBlogPost"
              className="text-black hover:bg-orange-400 hover:text-black rounded-md px-3 py-2 font-bold"
            >
              Blogs
            </Link>
          </div>
        </div>
        <div className="md:ml-auto px-5">
          <Link href="/userLogin">
            <button className=" hidden md:block text-black bg-orange-500 hover:bg-orange-600 shadow-lg hover:text-black rounded-md px-5 py-2 text-sm font-semibold">
              Login
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;

// const HomeNavbar = () => {
//   return (
//     <>
//       <nav className="bg-blue-300">
//         <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center">
//             <div className="flex items-center text-blue-950 rounded-md px-3 py-2 text-sm font-extrabold">
//               My Healthy Recipe
//             </div>
//             <div className="flex space-x-4">
//               <Link
//                 href="/"
//                 className="text-blue-800 rounded-md px-3 py-2 text-sm font-bold"
//                 aria-current="page"
//               >
//                 Home
//               </Link>
//               <Link
//                 href="/"
//                 className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
//               >
//                 About Us
//               </Link>
//               <Link
//                 href="/"
//                 className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
//               >
//                 Recipes
//               </Link>
//               <Link
//                 href="/"
//                 className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
//               >
//                 Meal Plans
//               </Link>
//               <Link
//                 href="/"
//                 className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
//               >
//                 Educational Content
//               </Link>
//               <Link
//                 href="/"
//                 className="text-blue-800 hover:bg-blue-900 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
//               >
//                 Business Blog Post
//               </Link>
//             </div>
//             <div className="ml-auto">
//               <Link href="/userLogin">
//                 <button className="bg-blue-800 text-white rounded-md px-3 py-2 text-sm font-bold">
//                   Login/Sign Up
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default HomeNavbar;
