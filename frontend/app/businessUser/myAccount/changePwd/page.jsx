"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideBarLayout from "../../sideBarLayout.jsx";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";

//router path for this page: /businessUser/myAccount/changePwd

const changeUserPwd = () => {
  const [userOldPwd, setUserOldPwd] = useState("");
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [repeatPwd, setRepeatPwd] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePwdChange = async (event) => {
    event.preventDefault();

    // Check if fields are not empty
    if (oldPwd === "" || newPwd === "" || repeatPwd === "") {
      setError("All fields are required.");
      return;
    }

    // Check if repeat password is the same as new password
    if (newPwd !== repeatPwd) {
      setError("New password and repeat password must be the same.");
      return;
    }

    // For checking purposes
    console.log("User Password Details:", {
      oldPwd,
      newPwd,
      repeatPwd,
    });

    try {
      const userId = localStorage.getItem("userId");
      const updatedData = {
        id: userId,
        oldPassword: oldPwd,
        newPassword: newPwd,
      };

      const response = await axiosInterceptorInstance.post(
        "/allUsers/changePassword",
        updatedData
      );

      console.log("Response:", response);
      setSuccess(response.data);
      setTimeout(() => {
        setSuccess("");
      }, 5000);

      setError("");
      setNewPwd("");
      setOldPwd("");
      setRepeatPwd("");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  // Function to clear error and set new value
  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  return (
    <div className="flex">
      <SideBarLayout>
        <div className="w-3/4 p-4 max-w-sm">
          <h1 className="text-lg font-semibold mb-4">Change Password</h1>

          {/* Form Start */}
          <form onSubmit={handlePwdChange}>
            {/* OLD PWD */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Old Password:</label>
              <input
                type="password"
                id="oldPwd"
                name="oldPwd"
                placeholder="Enter old password"
                value={oldPwd}
                onChange={clearErrorOnChange(setOldPwd)}
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
              />
            </div>

            {/* NEW PWD */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">New Password:</label>
              <input
                type="password"
                id="newPwd"
                name="newPwd"
                placeholder="Enter new password"
                value={newPwd}
                onChange={clearErrorOnChange(setNewPwd)}
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
              />
            </div>

            {/* REPEAT PWD */}
            <div className="flex flex-col mb-3.5">
              <label className="mb-1">Repeat Password:</label>
              <input
                type="password"
                id="repeatPwd"
                name="repeatPwd"
                placeholder="Repeat new password"
                value={repeatPwd}
                onChange={clearErrorOnChange(setRepeatPwd)}
                className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
              />
            </div>
            {/* ERROR MESSAGE */}
            {error && (
              <div className="text-red-500 text-sm font-bold mt-2">{error}</div>
            )}

            {/* SUCCESS MESSAGE */}
            {success && (
              <div className="text-green-500 text-sm font-bold mt-2">
                {success}
              </div>
            )}

            {/* SAVE BTN */}
            <div className="flex flex-row justify-end">
              <button
                type="submit"
                onClick={handlePwdChange}
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

export default changeUserPwd;
