"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const userRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [error, setError] = useState("");

  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSignUp = (event) => {
    event.preventDefault();

    // Checks if the fields are filled
    if (
      !fullName ||
      !username ||
      !email ||
      !dob ||
      !dietaryPreference ||
      !height ||
      !weight ||
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
    } else if (!emailValidation.test(email)) {
      setError("Invalid email address.");
      return;

      // Checks if height is integer value
      // } else if (!Number.isInteger(Number(height))) {
      //   setError("Height is invalid.");
      //   return;

      // Checks if registration successful
    } else {
      alert("Registration successful!");
      // Reset fields in the form + error state
      setFullName("");
      setUsername("");
      setEmail("");
      setDOB("");
      setDietaryPreference("");
      setHeight("");
      setWeight("");
      setPassword("");
      setConfirmPwd("");
      setError("");
    }

    // To check if data passed is correct
    console.log("User Sign up details:", {
      fullName,
      username,
      email,
      dob,
      dietaryPreference,
      height,
      weight,
      password,
      confirmPwd,
    });
  };

  return (
    <div>
      <HomeNavbar />
      <div className="bg-blue-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign Up
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div className="flex space-x-4">
                  {/* FULL NAME */}
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
                {/* EMAIL */}
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                </div>

                {/* DOB -- NEEDS TO BE CHANGED (FURTHER VALIDATION)*/}
                <div className="flex flex-col">
                  <label htmlFor="dob">Date of Birth</label>
                  <DatePicker
                    selected={dob}
                    onChange={(date) => setDOB(date)}
                    dateFormat="dd/MM/yyyy" // Change the date format
                    placeholderText="dd/mm/yyyy"
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  />
                </div>

                {/* DIETARY PREFERENCE */}
                <div className="flex flex-col">
                  <label htmlFor="dietPref">Dietary Preference</label>
                  <select
                    id="dietaryPreference"
                    name="dietaryPreference"
                    value={dietaryPreference}
                    onChange={(e) => setDietaryPreference(e.target.value)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  >
                    <option value="" disabled defaultValue>
                      Select One...
                    </option>
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="omnivore">Omnivore</option>
                  </select>
                </div>

                {/* HEIGHT */}
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="height"
                    id="height"
                    placeholder="Height (cm)"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                  {/* WEIGHT */}
                  <input
                    type="text"
                    name="weight"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Weight (kg)"
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
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  ></input>
                  <input
                    type="password"
                    name="confirm-pwd"
                    id="confirm-pwd"
                    placeholder="Confirm Password"
                    value={confirmPwd}
                    onChange={(e) => setConfirmPwd(e.target.value)}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userRegistration;
