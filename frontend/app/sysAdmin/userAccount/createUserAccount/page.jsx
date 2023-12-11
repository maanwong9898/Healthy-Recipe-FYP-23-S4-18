"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

// router path: /sysAdmin/userAccount/createUserAccount
// this is the page to create user account (systen admin only) according to user story

const CreateUserAccountPage = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState("");

  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Get today's date in the correct format for the max attribute (yyyy-mm-dd)
  const getFormattedDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const todayDate = getFormattedDate(new Date());

  const handleCreateAccount = (event) => {
    event.preventDefault();

    // Checks if the fields are filled
    if (!fullName || !username || !email || !dob || !password || !confirmPwd) {
      setError("All fields are required.");
      return;

      // Checks if the pwd matches
    } else if (password !== confirmPwd) {
      setError("Passwords do not match.");
      return;

      // Checks if email is in the right format
    } else if (!emailValidation.test(email)) {
      setError("Invalid email address.");
      return;

      // Checks if registration successful
    } else {
      alert("Account creation is successful!");
      // Reset fields in the form + error state
      setFullName("");
      setUsername("");
      setEmail("");
      setDOB("");
      setPassword("");
      setConfirmPwd("");
      setError("");
    }

    // To check if data passed is correct
    console.log("User Account Details:", {
      fullName,
      username,
      email,
      dob,
      password,
      confirmPwd,
    });
  };

  // Function to clear the error when user starts correcting the input
  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  return (
    <div className="bg-blue-900">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-blue-300 rounded-xl shadow-md py-3 px-8 mt-5 mb-3">
          <h2 className="text-[28px] font-bold text-center text-black mb-6">
            Create User Account
          </h2>
          <form
            className="flex flex-col items-center"
            onSubmit={handleCreateAccount}
          >
            {/* Full Name input */}
            <div className="mb-5 w-full">
              <input
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={fullName}
                onChange={clearErrorOnChange(setFullName)}
              />
            </div>
            {/* Username input */}
            <div className="mb-5 w-full">
              <input
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={username}
                onChange={clearErrorOnChange(setUsername)}
              />
            </div>
            {/* Email input */}
            <div className="mb-5 w-full">
              <input
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
                type="email"
                name="email"
                id="email"
                placeholder="Email Address"
                value={email}
                onChange={clearErrorOnChange(setEmail)}
              />
            </div>
            {/* Date of Birth input */}
            <div className="mb-5 w-full">
              <label htmlFor="dob">Date of Birth</label>
              <input
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
                type="date"
                id="dob"
                name="dob"
                value={dob}
                max={todayDate}
                onChange={clearErrorOnChange(setDOB)}
              />
            </div>
            {/* Password input */}
            <div className="mb-5 w-full">
              <input
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
                type="password"
                name="pwd"
                id="pwd"
                placeholder="Password"
                value={password}
                onChange={clearErrorOnChange(setPassword)}
              />
            </div>
            {/* Confirm Password input */}
            <div className="mb-5 w-full">
              <input
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
                type="password"
                name="confirm-pwd"
                id="confirm-pwd"
                placeholder="Confirm Password"
                value={confirmPwd}
                onChange={clearErrorOnChange(setConfirmPwd)}
              />
            </div>
            {/* Submit button */}
            <div className="flex w-full">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white rounded-md font-bold py-2 px-4 w-full"
              >
                Create Account
              </button>
            </div>
            {/* Error message display */}
            {error && (
              <div className="flex justify-center w-full">
                <p className="text-red-500 text-base font-bold">{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUserAccountPage;
