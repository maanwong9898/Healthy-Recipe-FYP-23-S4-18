"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import Footer from "../components/footer";

const RegistrationSelection = () => {
  return (
    <div>
      <HomeNavbar />
      <div className="min-h-screen py-16">
        <div className="mx-auto p-6">
          <div className="grid grid-rows-3 gap-4 lg:grid-cols-3 mx-auto">
            {/* IMG + REGISTER AS USER */}
            <div className="w-full p-4 md:p-10 bg-white h-96 flex flex-col border border-slate-100 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <h1 className="font-semibold text-2xl">Sign Up as a User</h1>
              </div>
              <div
                className="h-full w-full bg-cover bg-center items-center justify-center text-center p-8"
                style={{ backgroundImage: `url('/user_registration.jpg')` }}
              ></div>
              <div className="pt-5">
                <Link href="/registration/userRegistration">
                  <button className="w-full text-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full py-2.5 px-5">
                    Sign up here
                  </button>
                </Link>
              </div>
            </div>

            {/* IMG + REGISTER AS BUSINESS USER */}
            <div className="w-full p-4 md:p-10 bg-white h-96 flex flex-col border border-slate-100 rounded-lg shadow-md">
              <div className="text-center mb-4">
                <h1 className="font-semibold text-2xl">
                  Sign Up as a Business User
                </h1>
              </div>
              <div
                className="h-full w-full bg-cover bg-center items-center justify-center text-center p-8"
                style={{ backgroundImage: `url('/business_selection.jpg')` }}
              ></div>
              <div className="pt-5">
                <Link href="/registration/businessRegistration">
                  <button className="w-full text-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full py-2.5 px-5">
                    Sign up here
                  </button>
                </Link>
              </div>
            </div>

            {/* IMG + REGISTER AS NUTRITIONIST */}
            <div className="w-full p-4 md:p-10 bg-white h-96 flex flex-col border border-slate-100 rounded-lg shadow-md">
              <div className="text-center">
                <h1 className="font-semibold text-2xl">
                  Sign Up as a Nutritionist
                </h1>
              </div>
              <div
                className="h-full w-full bg-cover bg-center items-center justify-center text-center p-8"
                style={{
                  backgroundImage: `url('/nutritionist_registration.jpg')`,
                }}
              ></div>
              <div className="pt-5">
                <Link href="/registration/nutritionistRegistration">
                  <button className="w-full items-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full py-2.5 px-5">
                    Sign up here
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSelection;
