"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideBarLayout from "../../sidebarLayout.jsx";

//router path for this page: /sysAdmin/myAccount/changePwd

const mockUserPwd = {
  oldPwd: "pw1",
};

const changeUserPwd = () => {
  const [userOldPwd, setUserOldPwd] = useState(mockUserPwd);
  const [oldPwd, setOldPwd] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [repeatPwd, setRepeatPwd] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePwdChange = (event) => {
    event.preventDefault();

    // Check if fields are not empty
    if (oldPwd === "" || newPwd === "" || repeatPwd === "") {
      setError("All fields are required.");

      // Check if old password is the same as the one in the database
    } else if (oldPwd !== userOldPwd.oldPwd) {
      setError("Old password is invalid.");

      // Check if new password matches the repeat password
    } else if (newPwd !== repeatPwd) {
      setError("New password does not match.");

      // Success msg
    } else {
      setSuccess("Password changed successfully!");
      // Remove success msg after 5 seconds
      setTimeout(() => {
        setSuccess("");
      }, 5000);
      // Clear error messages after update
      setError("");
    }
    // For checking purposes
    console.log("User Password Details:", {
      oldPwd,
      newPwd,
      repeatPwd,
    });
  };

  return (
    <div className="flex">
      <SideBarLayout>
        <div className="w-3/4 p-4 max-w-sm">
          <h1 className="text-lg font-semibold mb-4">Change Password</h1>

          {/* OLD PWD */}
          <div className="flex flex-col mb-3.5">
            <label className="mb-1">Old Password:</label>
            <input
              type="password"
              id="oldPwd"
              name="oldPwd"
              placeholder="Enter old password"
              value={oldPwd}
              onChange={(event) => setOldPwd(event.target.value)}
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
              onChange={(event) => setNewPwd(event.target.value)}
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
              onChange={(event) => setRepeatPwd(event.target.value)}
              className="border px-4 py-2 rounded-lg w-full bg-white border-gray-300 text-gray-900 sm:text-sm"
            />
          </div>
          <p className="text-red-500 text-sm">{error}</p>
          <p className="text-green-500 text-sm">{success}</p>

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
        </div>
      </SideBarLayout>
    </div>
  );
};

export default changeUserPwd;
