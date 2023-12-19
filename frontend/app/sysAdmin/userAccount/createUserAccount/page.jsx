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
      setError("All fields are required!");
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
    <div>
      <div className="bg-cyan-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-slate-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl dark:text-white">
                Create User Account
              </h1>
              <div className="flex items-center justify-start space-x-2">
                <p className="text-lg font-bold">User Profile:</p>
                <div className="p-2 bg-gray-200 border-black border-2 text-gray-900 rounded-lg">
                  <h3 className="text-base font-semibold ">System Admin</h3>
                </div>
              </div>
              <form className="space-y-3">
                <div className="flex space-x-4">
                  {/* NAME */}
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={clearErrorOnChange(setFullName)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>

                  {/* USERNAME */}
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={clearErrorOnChange(setUsername)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                </div>

                {/* WORK EMAIL */}
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={clearErrorOnChange(setEmail)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                </div>

                {/* DOB */}
                <div className="flex flex-col">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    max={todayDate}
                    value={dob}
                    onChange={(e) => setDOB(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                    onChange={clearErrorOnChange(setPassword)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></input>
                  <input
                    type="password"
                    name="confirm-pwd"
                    id="confirm-pwd"
                    placeholder="Confirm Password"
                    value={confirmPwd}
                    onChange={clearErrorOnChange(setConfirmPwd)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  ></input>
                </div>
                {/* ERROR MSG */}
                <p className="text-black font-bold text-xl">{error}</p>

                {/* SUBMIT BTN */}
                <button
                  type="submit"
                  onClick={handleCreateAccount}
                  className="bg-cyan-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded-lg w-full"
                >
                  Create an account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserAccountPage;
