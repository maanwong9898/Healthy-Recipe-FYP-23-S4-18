"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";

const dietitianRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [licenseNum, setLicenseNum] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState("");
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignUp = (event) => {
    event.preventDefault();
    // Checks if fields are empty
    if (
      !fullName ||
      !username ||
      !workEmail ||
      !organization ||
      !licenseNum ||
      !password ||
      !confirmPwd
    ) {
      setError("All fields are required.");
      return;
      // Checks if the pwd matches
    } else if (password !== confirmPwd) {
      setError("Passwords do not match.");
      return;
      // Checks if email is in the right format
    } else if (!emailValidation.test(workEmail)) {
      setError("Invalid email address.");
      return;
    } else {
      alert("Registration successful!");
      // Reset fields in the form + error state
      setFullName("");
      setUsername("");
      setWorkEmail("");
      setOrganization("");
      setLicenseNum("");
      setPassword("");
      setConfirmPwd("");
      setError("");
    }

    // To check if data passed is correct
    console.log("Business Sign up details:", {
      fullName,
      username,
      workEmail,
      organization,
      licenseNum,
      password,
      confirmPwd,
    });
  };

  return (
    <div>
      <HomeNavbar />
      <div className="bg-blue-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Dietitian Sign Up
              </h1>
              <form className="space-y-3">
                <div className="flex space-x-4">
                  {/* NAME */}
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>

                  {/* USERNAME */}
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                </div>

                {/* WORK EMAIL */}
                <div>
                  <input
                    type="email"
                    name="workEmail"
                    id="workEmail"
                    placeholder="Work Email Address"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                </div>

                {/* ORGANIZATION */}
                <div>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    placeholder="Organization"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                </div>

                <div className="flex flex-row">
                  {/* LICENSE NUMBER */}
                  <input
                    type="text"
                    name="licenseNum"
                    id="licenseNum"
                    placeholder="License Number"
                    value={licenseNum}
                    onChange={(e) => setLicenseNum(e.target.value)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  ></input>
                </div>

                {/* PASSWORDS */}
                <div className="flex space-x-4">
                  <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></input>
                  <input
                    type="password"
                    name="confirmPwd"
                    id="confirmPwd"
                    placeholder="Confirm Password"
                    value={confirmPwd}
                    onChange={(e) => setConfirmPwd(e.target.value)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></input>
                </div>
                {/* ERROR MSG */}
                <p className="text-red-500 text-sm">{error}</p>

                {/* SUBMIT BTN */}
                <button
                  type="submit"
                  onClick={handleSignUp}
                  className="bg-blue-500 hover:bg-blue-700 text-white  rounded-md font-bold py-2 px-4 w-full"
                >
                  Create an account
                </button>

                {/* LOGIN LINK */}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    href="/userLogin"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Login here
                  </Link>
                </p>
                {/* SIGN UP LINK */}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Sign up as a different user{" "}
                  <Link
                    href="/registration"
                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Sign up here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dietitianRegistration;