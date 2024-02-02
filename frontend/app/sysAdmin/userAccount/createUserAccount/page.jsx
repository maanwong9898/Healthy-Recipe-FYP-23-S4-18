"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance";

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
  const [success, setSuccess] = useState("");

  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Get today's date in the correct format for the max attribute (yyyy-mm-dd)
  const getFormattedDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const todayDate = getFormattedDate(new Date());

  const handleCreateAdminAccount = async (event) => {
    event.preventDefault();

    // Checks if the fields are filled
    if (
      !fullName.trim() ||
      !username.trim() ||
      !email.trim() ||
      !dob.trim() ||
      !password.trim() ||
      !confirmPwd.trim()
    ) {
      setError("All fields are required!");
      return;
    } else if (password !== confirmPwd) {
      setError("Passwords do not match.");
      return;
    } else if (!emailValidation.test(email)) {
      setError("Invalid email address.");
      return;
    } else if (dob > todayDate) {
      setError("Invalid date of birth.");
      return;
    } else {
      setSuccess("Account created successfully!");
    }

    console.log("Creating admin account...");

    const formData = {
      password: password,
      username: username,
      fullName: fullName,
      dob: dob,
      email: email,
    };

    console.log(formData);

    try {
      const response = await axiosInterceptorInstance.post(
        "/register/admin",
        formData
      );
      console.log("Account created successfully:", response.data);
      setSuccess(true);

      // Reset fields in the form
      setFullName("");
      setUsername("");
      setEmail("");
      setDOB("");
      setPassword("");
      setConfirmPwd("");

      setError("");

      setTimeout(() => {
        setSuccess("");
      }, 10000);
    } catch (error) {
      console.error("Error creating admin account:", error);
      setError(error.messcage || "Failed to create account.");
    }

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

  const handleBackButton = () => {
    router.push("/sysAdmin/userAccount");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 lg:px-8">
      {/* Adjust the max-width and width in the inline style */}
      <div
        className="mt-16 mb-16 mx-auto bg-white rounded-lg shadow-lg p-4 md:p-8 lg:p-12"
        style={{ maxWidth: "600px", width: "100%" }} // Increase maxWidth and set width to 100%
      >
        {/* Smaller maxWidth */}
        <div className="p-4 space-y-4 md:space-y-12 ">
          <div className="p-6 space-y-4 md:space-y-2 sm:p-4">
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight tracking-tight text-center text-gray-900 mb-8">
              Create New Admin Account
            </h1>
            <form className="space-y-6 md:space-y-5 lg:space-y-3">
              <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
                {/* Full Name */}
                <div className="flex flex-col w-full">
                  <label className="block text-lg mb-1 font-medium text-gray-900">
                    Full Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={clearErrorOnChange(setFullName)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                  />
                </div>
                {/* User Name */}
                <div className="flex flex-col w-full">
                  <label className="block text-lg mb-1 font-medium text-gray-900">
                    Username<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={clearErrorOnChange(setUsername)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                  />
                </div>
              </div>
              {/* Work Email */}
              <div className="flex flex-col">
                <label className="block text-lg mb-1 font-medium text-gray-900">
                  Work Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={clearErrorOnChange(setEmail)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                />
              </div>

              {/* DOB */}
              <div className="flex flex-col">
                <label className="block text-lg mb-1 font-medium text-gray-900">
                  Date of Birth<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  max={todayDate}
                  value={dob}
                  onChange={(e) => setDOB(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                />
              </div>
              {/* Passwords */}
              <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
                {/* Password */}
                <div className="flex flex-col w-full">
                  <label className="block text-lg mb-1 font-medium text-gray-900">
                    Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    placeholder="Password"
                    value={password}
                    onChange={clearErrorOnChange(setPassword)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                  />
                </div>
                {/* Repeat Password*/}
                <div className="flex flex-col w-full">
                  <label className="block text-lg mb-1 font-medium text-gray-900">
                    Repeat Password<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    name="confirm-pwd"
                    id="confirm-pwd"
                    placeholder="Confirm Password"
                    value={confirmPwd}
                    onChange={clearErrorOnChange(setConfirmPwd)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg block w-full p-2.5"
                  />
                </div>
              </div>
              {/* ERROR MESSAGE */}
              {error && (
                <p className="text-red-500 font-medium text-base">
                  Error creating account: {error}
                </p>
              )}
              {success && (
                <p className="text-green-500 font-medium text-base">
                  Admin account created successfully!
                </p>
              )}

              {/* SUBMIT BUTTON */}
              <div className="flex flex-row space-x-5">
                <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg w-full">
                  <Link href="/sysAdmin/userAccount">Back</Link>
                </button>
                <button
                  type="submit"
                  onClick={handleCreateAdminAccount}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg w-full"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserAccountPage;
