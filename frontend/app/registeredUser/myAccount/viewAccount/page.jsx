"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideBarLayout from "../../sidebarLayout.jsx";

const mockUserAccount = {
  fullName: "Jenny Chia",
  username: "user1",
  email: "jenny@gmail.com",
  // yyyy-mm-dd
  dob: "1996-03-12",
};

const UpdateAccount = () => {
  const [userAccount, setUserAccount] = useState(mockUserAccount);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const getFormattedDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const todayDate = getFormattedDate(new Date());

  useEffect(() => {
    // Set the initial value when userAccount changes
    setFullName(userAccount ? userAccount.fullName : "");
    setEmail(userAccount ? userAccount.email : "");
    setDOB(userAccount ? userAccount.dob : "");
  }, [userAccount]);

  const handleAccountUpdate = (event) => {
    event.preventDefault();

    // Check if fields are not empty
    if (fullName === "" || email === "" || dob === "") {
      setError("All fields are required.");

      // Check if email is valid
    } else if (!emailValidation.test(email)) {
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
      email,
      dob,
    });
  };

  return (
    <div className="flex">
      <SideBarLayout>
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
                value={fullName}
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
                className="border px-4 py-2 rounded-lg w-full bg-gray-200 border-gray-300 text-gray-900 sm:text-sm"
                value={userAccount ? userAccount.username : ""}
                onChange={(e) => setUsername(e.target.value)}
                disabled
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* DOB */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                name="dob"
                max={todayDate}
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
              ></input>
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
      </SideBarLayout>
    </div>
  );
};

export default UpdateAccount;
