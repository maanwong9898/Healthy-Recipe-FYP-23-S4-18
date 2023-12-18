"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";

const DietitianRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [licenseNum, setLicenseNum] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [orgAssociated, setOrgAssociated] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignUp = (event) => {
    event.preventDefault();
    // Checks if fields are empty
    if (
      fullName === "" ||
      username === "" ||
      workEmail === "" ||
      password === "" ||
      confirmPwd === "" ||
      contactNumber === "" ||
      licenseNum === ""
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
      setAddress("");
      setOrgAssociated("");
      setLicenseNum("");
      setError("");
    }

    // To check if data passed is correct
    console.log("Business Sign up details:", {
      fullName,
      username,
      workEmail,
      companyName,
      address,
      contactNumber,
      orgAssociated,
      licenseNum,
      password,
      confirmPwd,
    });
  };

  return (
    <div>
      <HomeNavbar />
      <div className="bg-cyan-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                Dietitian Sign Up
              </h1>
              <form className="space-y-2">
                <h2>Personal Details</h2>
                <div className="flex space-x-4">
                  {/* NAME */}
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  ></input>

                  {/* USERNAME */}
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
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
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5"
                  ></input>
                  <input
                    type="password"
                    name="confirmPwd"
                    id="confirmPwd"
                    placeholder="Confirm Password"
                    value={confirmPwd}
                    onChange={(e) => setConfirmPwd(e.target.value)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5"
                  ></input>
                </div>

                {/* CONTACT NUMBER */}
                <div className="flex flex-row">
                  <input
                    type="text"
                    name="contactNumber"
                    id="contactNumber"
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  ></input>
                </div>

                <h2>Organization Details</h2>
                {/* WORK EMAIL */}
                <div>
                  <input
                    type="email"
                    name="workEmail"
                    id="workEmail"
                    placeholder="Email Address"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  ></input>
                </div>

                {/* ORGANIZATION */}
                <div>
                  <input
                    type="text"
                    name="companyName"
                    id="companyName"
                    placeholder="Company Name *Optional"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  ></input>
                </div>

                {/* ADDRESS */}
                <div className="flex flex-row">
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Company Address *Optional"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  ></input>
                </div>

                {/* Organization Associated */}
                <div className="flex flex-row">
                  <input
                    type="text"
                    name="orgAssociated"
                    id="orgAssociated"
                    placeholder="Organization Associated *Optional"
                    value={orgAssociated}
                    onChange={(e) => setOrgAssociated(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  ></input>
                </div>

                {/* UEN */}
                <div className="flex flex-row">
                  <input
                    type="text"
                    name="licenseNum"
                    id="licenseNum"
                    placeholder="License Number"
                    value={licenseNum}
                    onChange={(e) => setLicenseNum(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                  ></input>
                </div>

                {/* ERROR/SUCCESS MSG */}
                <p className="text-red-500 text-sm">{error}</p>
                <p className="text-green-500 text-sm">{success}</p>

                {/* SUBMIT BTN */}
                <button
                  type="submit"
                  onClick={handleSignUp}
                  className=" text-white bg-cyan-500 hover:bg-sky-700 rounded-md font-bold py-2 px-4 w-full"
                >
                  Create an account
                </button>

                {/* LOGIN LINK */}
                <p className="text-sm font-light text-black">
                  Already have an account?{" "}
                  <Link
                    href="/userLogin"
                    className="font-medium text-cyan-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
                {/* SIGN UP LINK */}
                <p className="text-sm font-light text-black">
                  Sign up as a different user{" "}
                  <Link
                    href="/registration"
                    className="font-medium text-cyan-600 hover:underline"
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

export default DietitianRegistration;
