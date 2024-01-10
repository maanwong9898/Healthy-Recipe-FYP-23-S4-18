"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeNavbar from "@/app/components/navigation/homeNavBar";

const businessRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [uen, setUen] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignUp = () => {
    if (
      fullName === "" ||
      username === "" ||
      password === "" ||
      confirmPwd === "" ||
      contactNumber === "" ||
      workEmail === "" ||
      companyName === "" ||
      companyAddress === "" ||
      uen === ""
    ) {
      setError("All fields are required.");
      return;
    }
    // Checks if the pwd matches
    else if (password !== confirmPwd) {
      setError("Passwords do not match.");
      return;
    }
    // Checks if email is in the right format
    else if (!emailValidation.test(workEmail)) {
      setError("Invalid email address.");
      return;
    } else {
      setSuccess(
        "Registration successful! An email will be sent to you once the admin has verified your account."
      );
      // Remove success msg after 5 seconds
      setTimeout(() => {
        setSuccess("");
      }, 5000);
      // Reset fields in the form + error state
      setFullName("");
      setUsername("");
      setPassword("");
      setConfirmPwd("");
      setContactNumber("");
      setWorkEmail("");
      setCompanyName("");
      setCompanyAddress("");
      setUen("");
      setError("");
    }
  };

  return (
    <div>
      <HomeNavbar />
      <div className="bg-orange-50 min-h-screen py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row rounded-xl mx-auto bg-slate-200 shadow-lg overflow-hidden">
            {/* IMG + REGISTER AS ANOTHER USER */}
            <div className="w-full md:w-1/2 p-4 md:p-10 bg-white">
              <div className="text-center">
                <h1 className="font-semibold text-3xl">
                  Sign Up as a Business User
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
                style={{ backgroundImage: `url('/business_registration.jpg')` }}
              ></div>
            </div>
            {/* REGISTRATION FORM */}
            <div className="w-full md:w-1/2 mx-5 flex items-center justify-center">
              <div className="w-full p-4 md:p-10">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                  Create an Account
                </h1>
                <form action={handleSignUp}>
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
                    <label
                      htmlFor="repeatPassword"
                      className="flex items-center"
                    >
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
                    <label
                      htmlFor="contactNumber"
                      className="flex items-center"
                    >
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

                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <label htmlFor="workEmail" className="flex items-center">
                      Work Email
                      <span className="text-red-500">*</span>
                    </label>
                    <label htmlFor="uen" className="flex items-center">
                      UEN
                      <span className="text-red-500">*</span>
                    </label>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      placeholder="Work Email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      // value=
                      // onChange={}
                    />

                    <input
                      type="text"
                      id="uen"
                      name="uen"
                      placeholder="UEN"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      // value=
                      // onChange={}
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="companyName" className="flex items-center">
                      Company Name
                      <span className="text-red-500">*</span>
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
                    <label
                      htmlFor="companyAddress"
                      className="flex items-center"
                    >
                      Company Address
                      <span className="text-red-500">*</span>
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
                  {/* ERROR MSG */}
                  <p className="text-red-500 text-sm">{error}</p>

                  <div className="flex flex-row justify-center">
                    <button
                      type="submit"
                      onChange={handleSignUp}
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
    </div>
  );
};

export default businessRegistration;
