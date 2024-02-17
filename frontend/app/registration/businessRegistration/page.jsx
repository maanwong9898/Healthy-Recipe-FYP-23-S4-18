"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";

const businessRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [uen, setUen] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleCreateBusinessAccount = async (event) => {
    event.preventDefault();

    // Check if all fields are filled
    if (
      !fullName.trim() ||
      !username.trim() ||
      !password.trim() ||
      !confirmPwd.trim() ||
      !contactNumber.trim() ||
      !workEmail.trim() ||
      !companyName.trim() ||
      !companyAddress.trim() ||
      !postalCode.trim() ||
      !uen.trim()
    ) {
      setError("Please fill in all the required fields.");
      return;
    } else if (!emailValidation.test(workEmail)) {
      setError("Please enter a valid email address.");
      return;
    } else if (password !== confirmPwd) {
      setError("Passwords do not match.");
      return;
    } else if (contactNumber.length !== 8) {
      setError("Please enter a valid contact number.");
      return;
    } else if (uen.length !== 10) {
      setError("Please enter a valid UEN.");
      return;
    } else if (postalCode.length !== 6) {
      setError("Please enter a valid postal code.");
      return;
    }

    const formData = {
      fullName: fullName,
      username: username,
      password: password,
      contactNumber: contactNumber,
      email: workEmail,
      companyName: companyName,
      companyAddress: companyAddress,
      postalCode: postalCode,
      uen: uen,
    };

    try {
      const response = await axiosInterceptorInstance.post(
        "/register/bUser",
        formData
      );

      setSuccess(
        "Account created successfully! You will be notified once your account has been verified."
      );

      // Clear all fields after submitting form
      setFullName("");
      setUsername("");
      setPassword("");
      setConfirmPwd("");
      setContactNumber("");
      setWorkEmail("");
      setCompanyName("");
      setCompanyAddress("");
      setPostalCode("");
      setUen("");

      setError("");
      // Clear success msg after 5 seconds
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    } catch (error) {
      setSuccess(false); // Ensure success is false on error
      console.error("Error creating business user account:", error);
      setError("Failed to create account.");
    }
  };

  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  return (
    <div>
      <HomeNavbar />
      <div className="min-h-screen py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl mx-auto bg-slate-100 shadow-lg overflow-hidden">
            {/* IMG + REGISTER AS ANOTHER USER */}
            <div className="w-full p-4 md:p-10 bg-white">
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
                className="h-auto md:h-full w-full bg-cover bg-center flex items-center justify-center flex-col text-center p-8"
                style={{ backgroundImage: `url('/business_registration.jpg')` }}
              ></div>
            </div>
            {/* REGISTRATION FORM */}
            <div className="w-full flex items-center justify-center">
              <div className="w-full p-4 md:p-10">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                  Create an Account
                </h1>
                <form>
                  {/* Name and Username */}
                  <div className="grid gap-3 mt-2 sm:grid-cols-2">
                    <div className="flex flex-col mb-3.5">
                      <label
                        htmlFor="fullName"
                        className="font-medium text-base mb-1"
                      >
                        Full Name:
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Your Name"
                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                        value={fullName}
                        onChange={clearErrorOnChange(setFullName)}
                      />
                    </div>

                    {/* Username */}
                    <div className="flex flex-col mb-3.5">
                      <label
                        htmlFor="username"
                        className="font-medium text-base mb-1"
                      >
                        Username:
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Your Username"
                        className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                        value={username}
                        onChange={clearErrorOnChange(setUsername)}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="flex flex-col mb-3.5">
                    <label
                      htmlFor="password"
                      className="font-medium text-base mb-1"
                    >
                      Password
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                      value={password}
                      onChange={clearErrorOnChange(setPassword)}
                    />
                  </div>

                  {/* Repeat Password */}
                  <div className="flex flex-col mb-3.5">
                    <label
                      htmlFor="repeatPassword"
                      className="font-medium text-base mb-1"
                    >
                      Repeat Password
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="password"
                      id="repeatPassword"
                      name="repeatPassword"
                      placeholder="Repeat Password"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                      value={confirmPwd}
                      onChange={clearErrorOnChange(setConfirmPwd)}
                    />
                  </div>

                  {/* Contact number */}
                  <div className="flex flex-col mb-3.5">
                    <label
                      htmlFor="contactNumber"
                      className="font-medium text-base mb-1"
                    >
                      Contact Number
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactNumber"
                      name="contactNumber"
                      placeholder="+65 1234 5678"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                      value={contactNumber}
                      onChange={clearErrorOnChange(setContactNumber)}
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col mb-3.5">
                    <label
                      htmlFor="workEmail"
                      className="font-medium text-base mb-1"
                    >
                      Work Email<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      placeholder="Work Email"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                      value={workEmail}
                      onChange={clearErrorOnChange(setWorkEmail)}
                    />
                  </div>

                  {/* UEN */}
                  <div className="flex flex-col mb-3.5">
                    <label htmlFor="uen" className="font-medium text-base mb-1">
                      UEN
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="uen"
                      name="uen"
                      placeholder="UEN"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                      value={uen}
                      onChange={clearErrorOnChange(setUen)}
                    />
                  </div>
                  {/* Comapny name */}
                  <div className="flex flex-col mb-3.5">
                    <label
                      htmlFor="companyName"
                      className="font-medium text-base mb-1"
                    >
                      Company Name
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Company Name"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                      value={companyName}
                      onChange={clearErrorOnChange(setCompanyName)}
                    />
                  </div>
                  {/* Company address */}
                  <div className="flex flex-col mb-3.5">
                    <label
                      htmlFor="companyAddress"
                      className="font-medium text-base mb-1"
                    >
                      Company Address
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="companyAddress"
                      name="companyAddress"
                      placeholder="Company Address"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                      value={companyAddress}
                      onChange={clearErrorOnChange(setCompanyAddress)}
                    />
                  </div>
                  {/* Postal Code */}
                  <div className="flex flex-col mb-3.5">
                    <label
                      htmlFor="postalCode"
                      className="font-medium text-base mb-1"
                    >
                      Postal Code
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder="Postal Code"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5 w-full"
                      value={postalCode}
                      onChange={clearErrorOnChange(setPostalCode)}
                    />
                  </div>
                  {/* ERROR MSG */}
                  {error && (
                    <p className="text-red-500 text-base font-medium">
                      {error}
                    </p>
                  )}
                  {/* SUCCESS MSG */}
                  {success && (
                    <p className="text-green-500 text-base font-medium">
                      {success}
                    </p>
                  )}
                  <div className="flex flex-row justify-center">
                    <button
                      type="submit"
                      onClick={handleCreateBusinessAccount}
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
