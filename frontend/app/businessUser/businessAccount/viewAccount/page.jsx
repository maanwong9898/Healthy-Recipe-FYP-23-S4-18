"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import BusinessSideBar from "../../sideBarLayout.jsx";

const mockUserAccount = {
  fullName: "Micheal Brown",
  username: "business1",
  workEmail: "michealbrowm@abc.com",
  // yyyy-mm-dd
  companyName: "Company ABC",
  UEN: "123456789",
  companyAddress: "123, ABC Road",
  contactNumber: "65437789",
};

const UpdateAccount = () => {
  const [userAccount, setUserAccount] = useState(mockUserAccount);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [UEN, setUEN] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Set the initial value when userAccount changes
    setFullName(userAccount ? userAccount.fullName : "");
    setWorkEmail(userAccount ? userAccount.workEmail : "");
    setCompanyName(userAccount ? userAccount.companyName : "");
    setUEN(userAccount ? userAccount.UEN : "");
    setCompanyAddress(userAccount ? userAccount.companyAddress : "");
    setContactNumber(userAccount ? userAccount.contactNumber : "");
    setUsername(userAccount ? userAccount.username : "");
  }, [userAccount]);

  const handleAccountUpdate = (event) => {
    event.preventDefault();

    // Check if fields are not empty
    if (
      fullName === "" ||
      workEmail === "" ||
      companyName === "" ||
      UEN === "" ||
      companyAddress === "" ||
      contactNumber === "" ||
      username === ""
    ) {
      setError("All fields are required.");

      // Check if email is valid
    } else if (!emailValidation.test(workEmail)) {
      setError("Invalid email address.");

      // Success msg
    } else {
      setSuccess("Update Successful!");
      // Remove success msg after 5 seconds
      setTimeout(() => {
        setSuccess("");
      }, 5000);
      // Clear error messages after update
      setError("");
    }

    // For checking purposes
    console.log("User Updated Details:", {
      fullName,
      workEmail,
      companyName,
      UEN,
      companyAddress,
      contactNumber,
      username,
    });
  };

  return (
    <div className="flex">
      <BusinessSideBar>
        <div className="w-3/4 p-4 max-w-sm">
          <h1 className="text-lg font-semibold mb-4">Account Information</h1>
          <form>
            {/* NAME */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                value={userAccount ? userAccount.fullName : ""}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* USERNAME */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Username:</label>
              <input
                type="text"
                id="username"
                name="username"
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                value={userAccount ? userAccount.username : ""}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* CONTACT NUMBER */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Contact Number:</label>
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                value={userAccount ? userAccount.contactNumber : ""}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Work Email:</label>
              <input
                type="text"
                id="workEmail"
                name="workEmail"
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                value={userAccount ? userAccount.workEmail : ""}
                onChange={(e) => setworkEmail(e.target.value)}
              />
            </div>

            {/* COMPANY NAME  */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Company Name:</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                value={userAccount ? userAccount.companyName : ""}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            {/* COMPANY ADDRESS  */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Company Address:</label>
              <input
                type="text"
                id="companyAddress"
                name="companyAddress"
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                value={userAccount ? userAccount.companyAddress : ""}
                onChange={(e) => setCompanyAddress(e.target.value)}
              />
            </div>

            {/* COMPANY UEN  */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">UEN:</label>
              <input
                type="text"
                id="uen"
                name="uen"
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                value={userAccount ? userAccount.UEN : ""}
                onChange={(e) => setUEN(e.target.value)}
              />
            </div>

            <p className="text-red-500 text-sm">{error}</p>
            <p className="text-green-500 text-sm">{success}</p>

            {/* SAVE BTN */}
            <div className="flex flex-row justify-end">
              <button
                type="submit"
                onClick={handleAccountUpdate}
                className="bg-blue-500 hover:bg-blue-700 text-white rounded-md font-bold py-2 px-4 ml-auto"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </BusinessSideBar>
    </div>
  );
};

export default UpdateAccount;
