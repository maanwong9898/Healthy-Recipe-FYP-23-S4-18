"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";

const RegistrationSelection = () => {
  return (
    <div className="bg-blue-900">
      <HomeNavbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-blue-300 rounded-xl shadow-md py-16 px-16">
          <h2 className="text-[28px] font-bold text-black mb-6 text-center">
            Sign Up As
          </h2>
          <form className="flex flex-col items-center space-y-4">
            <div className="flex space-x-4">
              <Link href="/registration/userRegistration">
                <button className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  User
                </button>
              </Link>
              <Link href="/registration/businessRegistration">
                <button className="text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                  Business User
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSelection;
