"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";

const userRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [dob, setDOB] = useState("");
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [allergyRestriction, setAllergyRestriction] = useState("");
  const [healthGoals, setHealthGoals] = useState("");
  const [weight, setWeight] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Get today's date in the correct format for the max attribute (yyyy-mm-dd)
  const getFormattedDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  const todayDate = getFormattedDate(new Date());

  const handleSignUp = (event) => {
    event.preventDefault();

    // Checks if the fields are filled
    if (
      !fullName ||
      !username ||
      !email ||
      !dob ||
      !password ||
      !confirmPwd ||
      !dietaryPreference ||
      !allergyRestriction ||
      !healthGoals ||
      !weight
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

      // Checks if registration successful
    } else {
      setSuccess(
        "Registration successful! A verification link has been sent to your email."
      );
      // Remove success msg after 5 seconds
      setTimeout(() => {
        setSuccess("");
      }, 5000);
      // Reset fields in the form + error state
      setFullName("");
      setUsername("");
      setEmail("");
      setDOB("");
      setPassword("");
      setConfirmPwd("");
      setDietaryPreference("");
      setAllergyRestriction("");
      setHealthGoals("");
      setWeight("");
      setError("");
    }

    // To check if data passed is correct
    console.log("User Sign up details:", {
      fullName,
      username,
      email,
      dob,
      password,
      confirmPwd,
      dietaryPreference,
      allergyRestriction,
      healthGoals,
      weight,
    });
  };

  // render the page
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const renderForm = () => {
    switch (step) {
      // PERSONAL DETAILS
      case 1:
        return (
          <div>
            <form className="space-y-3 ">
              <h2>Personal Details</h2>
              <div className="flex space-x-4">
                {/* FULL NAME */}
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm block w-full p-2.5"
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
            <div className="flex flex-row justify-end">
              <button
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                onClick={nextStep}
              >
                Next
              </button>
            </div>
          </div>
        );

      // PROILE BASED DETAILS
      case 2:
        return (
          <div classname="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen">
            <form className="space-y-3">
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
                  <option value="noPref">Anything</option>
                </select>
              </div>

              {/* ALLERGY AND RESTRICTION */}
              <div className="flex flex-col">
                <label htmlFor="allergyRestriction">
                  Allergy and Restriction
                </label>
                <select
                  id="allergyRestriction"
                  name="allergyRestriction"
                  value={allergyRestriction}
                  onChange={(e) => setAllergyRestriction(e.target.value)}
                  className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                >
                  <option value="" disabled defaultValue>
                    Select One...
                  </option>
                  <option value="wheatFree">Wheat-Free</option>
                  <option value="dairyFree">Dairy-Free</option>
                  <option value="glutenFree">Gluten-Free</option>
                  <option value="peanutFree">Peanut-free</option>
                  <option value="soyFree">Soy-Free</option>
                  <option value="seafoodFree">Seafood-Free</option>
                  <option value="eggFree">Egg-Free</option>
                  <option value="noAllergies">No Allergies</option>
                </select>
              </div>

              {/* HEALTH GOALS */}
              <div className="flex flex-col">
                <label htmlFor="healthGoals">Health Goal</label>
                <select
                  id="healthGoals"
                  name="healthGoals"
                  value={healthGoals}
                  onChange={(e) => setHealthGoals(e.target.value)}
                  className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                >
                  <option value="" disabled defaultValue>
                    Select One...
                  </option>
                  <option value="wheatFree">Low Carb</option>
                  <option value="dairyFree">Weight Loss</option>
                  <option value="glutenFree">Balanced Meal</option>
                </select>
              </div>

              {/* WEIGHT */}
              <div className="flex flex-col">
                <label htmlFor="weight">Weight</label>
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Weight in kg"
                ></input>
              </div>

              {/* ERROR MSG */}
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
            <div className="flex flex-row justify-end">
              <button
                className="text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5"
                onClick={prevStep}
              >
                Back
              </button>
            </div>
          </div>
        );
      default:
        null;
    }
  };

  return (
    <div>
      <HomeNavbar />
      <div className="flex-grow bg-cyan-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full max-w-md bg-slate-100 rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-3 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                User Sign Up
              </h1>
              {renderForm()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userRegistration;
