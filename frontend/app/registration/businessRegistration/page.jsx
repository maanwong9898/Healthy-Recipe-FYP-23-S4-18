"use client";
import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import Footer from "../../components/footer";

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
    } else {
      setSuccess(
        "Account created successfully! An email will be sent to you once your account has been approved."
      );
    }

    console.log("Creating business account...");

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
    console.log(formData);

    try {
      const response = await axiosInterceptorInstance.post(
        "/register/bUser",
        formData
      );
      console.log("Account created successfully:", response.data);
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
      //setError(error.message || "Failed to create account.");
    }
  };

  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  return (
    <div>
      <HomeNavbar />
      <div className="bg-orange-50 min-h-screen py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row rounded-xl mx-auto bg-slate-100 shadow-lg overflow-hidden">
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
                      value={fullName}
                      onChange={clearErrorOnChange(setFullName)}
                    />

                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      placeholder="Your Username"
                      className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      value={username}
                      onChange={clearErrorOnChange(setUsername)}
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
                      value={password}
                      onChange={clearErrorOnChange(setPassword)}
                    />

                    <input
                      type="password"
                      id="repeatPassword"
                      name="repeatPassword"
                      placeholder="Repeat Password"
                      className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      value={confirmPwd}
                      onChange={clearErrorOnChange(setConfirmPwd)}
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
                      value={contactNumber}
                      onChange={clearErrorOnChange(setContactNumber)}
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
                      value={workEmail}
                      onChange={clearErrorOnChange(setWorkEmail)}
                    />

                    <input
                      type="text"
                      id="uen"
                      name="uen"
                      placeholder="UEN"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      value={uen}
                      onChange={clearErrorOnChange(setUen)}
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
                      value={companyName}
                      onChange={clearErrorOnChange(setCompanyName)}
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
                      value={companyAddress}
                      onChange={clearErrorOnChange(setCompanyAddress)}
                    />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="postalCode" className="flex items-center">
                      Postal Code
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder="Postal Code"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                      value={postalCode}
                      onChange={clearErrorOnChange(setPostalCode)}
                    />
                  </div>
                  {/* ERROR MSG */}
                  <p className="text-red-500 text-sm">{error}</p>

                  {/* SUCCESS MSG */}
                  <p className="text-green-600 text-sm">{success}</p>

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
      <Footer />
    </div>
  );
};

export default businessRegistration;
