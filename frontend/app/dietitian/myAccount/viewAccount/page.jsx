"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import DietitianSideBar from "../../sideBarLayout.jsx";

//router path for this page: /dietitian/myAccount/viewAccount
const mockUserAccount = {
  fullName: "Peter Parker",
  username: "dietitian1",
  workEmail: "peter@abc.com",
  // yyyy-mm-dd
  companyName: "Company AAA",
  licenseNumber: "666456789A",
  companyAddress: "123, Tuas Avenue 1, Singapore 123456",
  contactNumber: "98267365",
  organizationAssociated: "Singapore Nutrition and Dietetics Association",
};

const UpdateAccount = () => {
  const [userAccount, setUserAccount] = useState(mockUserAccount);
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [organizationAssociated, setOrganizationAssociated] = useState("");
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    // Set the initial value when userAccount changes
    setFullName(userAccount ? userAccount.fullName : "");
    setWorkEmail(userAccount ? userAccount.workEmail : "");
    setCompanyName(userAccount ? userAccount.companyName : "");
    setLicenseNumber(userAccount ? userAccount.licenseNumber : "");
    setCompanyAddress(userAccount ? userAccount.companyAddress : "");
    setContactNumber(userAccount ? userAccount.contactNumber : "");
    setUsername(userAccount ? userAccount.username : "");
    setOrganizationAssociated(
      userAccount ? userAccount.organizationAssociated : ""
    );
  }, [userAccount]);

  const handleAccountUpdate = (event) => {
    event.preventDefault();

    // Check if fields are not empty
    if (
      fullName === "" ||
      workEmail === "" ||
      companyName === "" ||
      licenseNumber === "" ||
      companyAddress === "" ||
      contactNumber === "" ||
      organizationAssociated === "" ||
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
      licenseNumber,
      companyAddress,
      contactNumber,
      organizationAssociated,
      username,
    });
  };

  return (
    <div className="flex">
      <DietitianSideBar>
        <div className="w-3/4 p-4 max-w-sm">
          <h1 className="text-lg font-semibold mb-4">Account Information</h1>
          <form>
            {/* NAME */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Full Name:</label>
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
              <label className="mb-1">Work Email Address:</label>
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
            {/* ORGANIZATION ASSOCIATED  */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Organization Associated:</label>
              <input
                type="text"
                id="organizationAssociated"
                name="organizationAssociated"
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                value={userAccount ? userAccount.organizationAssociated : ""}
                onChange={(e) => setOrganizationAssociated(e.target.value)}
              />
            </div>

            {/* licenseNumber  */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">License Number:</label>
              <input
                type="text"
                id="licenseNumber"
                name="licenseNumber"
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                value={userAccount ? userAccount.licenseNumber : ""}
                onChange={(e) => setLicenseNumber(e.target.value)}
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
      </DietitianSideBar>
    </div>
  );
};

export default UpdateAccount;
