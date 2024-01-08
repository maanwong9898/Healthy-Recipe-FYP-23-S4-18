"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";

const NutritionistRegistration = () => {
  return (
    <div className="bg-orange-50 min-h-screen py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row rounded-xl mx-auto bg-slate-100 shadow-lg overflow-hidden">
          {/* IMG + REGISTER AS ANOTHER USER */}
          <div className="w-full md:w-1/2 p-4 md:p-10 bg-white">
            <div className="text-center">
              <h1 className="font-semibold text-3xl">
                Sign Up as a Nutritionist
              </h1>
              <p className="text-sm font-light text-black">
                Sign up as a different user{" "}
                <Link
                  href="/registration"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Sign up here
                </Link>
              </p>
              {/* LOGIN LINK */}
              <p className="text-sm font-light text-black">
                Already have an account?{" "}
                <Link
                  href="/userLogin"
                  className="font-medium text-blue-600 hover:underline"
                >
                  Login here
                </Link>
              </p>
            </div>

            <div
              className="h-full w-full bg-cover bg-center flex items-center justify-center flex-col text-center p-8"
              style={{ backgroundImage: `url('/nutritionist.jpg')` }}
            ></div>
          </div>
          {/* REGISTRATION FORM */}
          <div className="w-full md:w-1/2 mx-5 flex items-center justify-center">
            <div className="w-full p-4 md:p-10">
              <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                Create an Account
              </h1>
              <form>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <label htmlFor="fullName" className="flex items-center">
                    Full Name
                    <span className="text-red-500">*</span>
                  </label>
                  <label htmlFor="username" className="flex items-center">
                    Username
                    <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Your Name"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                    // value=
                    // onChange={}
                  />

                  <input
                    type="text"
                    id="userName"
                    name="userName"
                    placeholder="Your Username"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                    // value=
                    // onChange={}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-2">
                  <label htmlFor="password" className="flex items-center">
                    Password
                    <span className="text-red-500">*</span>
                  </label>
                  <label htmlFor="repeatPassword" className="flex items-center">
                    Repeat Password
                    <span className="text-red-500">*</span>
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                    // value=
                    // onChange={}
                  />

                  <input
                    type="password"
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Repeat Password"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                    // value=
                    // onChange={}
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="contactNumber" className="flex items-center">
                    Contact Number
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="+65 1234 5678"
                    className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                    // value=
                    // onChange={}
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="workEmail" className="flex items-center">
                    Work Email
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="workEmail"
                    name="workEmail"
                    placeholder="Work Email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                    // value=
                    // onChange={}
                  />
                </div>

                <div className="mt-3">
                  <label htmlFor="companyName" className="flex items-center">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    placeholder="Company Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                    // value=
                    // onChange={}
                  />
                </div>

                <div className="mt-3">
                  <label htmlFor="companyAddress" className="flex items-center">
                    Company Address
                  </label>
                  <input
                    type="text"
                    id="companyAddress"
                    name="companyAddress"
                    placeholder="Company Address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                    // value=
                    // onChange={}
                  />
                </div>

                <div className="mt-3">
                  <p className="flex items-center">
                    For verification purposes, please upload any of the
                    following:
                    <span className="text-red-500">*</span>
                  </p>
                  <p className="text-xs text-gray-700">
                    A copy of your Nutritionist certificate
                  </p>
                  <p className="text-xs text-gray-700">
                    A copy of your postgraduate/degree certificate
                  </p>
                  <input
                    type="file"
                    id="nutriCert"
                    name="nutriCert"
                    className="border-solid mt-3"
                    multiple
                  ></input>
                </div>

                {/* ERROR MSG */}
                {/* <p className="text-red-500 text-sm">{error}</p> */}

                <div className="flex flex-row justify-center">
                  <button
                    type="submit"
                    className="text-white bg-blue-600 hover:bg-blue-700 rounded-md font-bold w-full py-2 px-4 mt-4"
                  >
                    Create an Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionistRegistration;
