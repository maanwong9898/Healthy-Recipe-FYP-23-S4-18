"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const userRegistration = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState("");

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
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Full Name"
                  ></input>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Username"
                  ></input>
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  ></input>
                </div>
                <div className="flex space-x-4">
                  {/* <select id="dropdown1" className="border p-2 rounded">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                  </select>

                  <select id="dropdown2" className="border p-2 rounded">
                    <option value="optionA">Option A</option>
                    <option value="optionB">Option B</option>
                  </select>

                  <select id="dropdown2" className="border p-2 rounded">
                    <option value="optionA">Option A</option>
                    <option value="optionB">Option B</option>
                  </select> */}
                  <div className="relative max-w-sm">
                    <label>
                      Date Of Birth
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <label>Dietary Preference</label>
                  <select
                    id="dietPreference"
                    value={selectedOption}
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Select Option...</option>
                    <option value="vegan">Vegan</option>
                    <option value="Vegetarian">Vegetarian</option>
                    <option value="Pescatarian">Pescatarian</option>
                    <option value="Omnivore">Omnivore</option>
                  </select>
                </div>
                <div className="flex space-x-4">
                  <input
                    type="text"
                    name="height"
                    id="height"
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Height"
                  ></input>
                  <input
                    type="text"
                    name="weight"
                    id="weight"
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Weight"
                  ></input>
                </div>
                <div className="flex space-x-4">
                  <input
                    type="password"
                    name="pwd"
                    id="pwd"
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password"
                  ></input>
                  <input
                    type="password"
                    name="confirm-pwd"
                    id="confirm-pwd"
                    className="border px-4 py-2 rounded-lg bg-gray-50 border-gray-300 text-gray-900 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Confirm Password"
                  ></input>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>

                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/userLogin"
                    class="font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Login here
                  </a>
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
