"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// can be tested
// the page is for system admin to view all user profiles
// router path: /sysAdmin/userProfile

// Mock data for frontend to test the layout
// need to fetch data from backend (database) in the future

const mockUserProfilesList = [
  {
    id: "883eac32-59af-472b-aa58-5822660acb83",
    isActive: true,
    profileTitle: "System admin",
  },
  {
    id: "25930c96-e5d9-4f40-8d37-a6f4ed7cd235",
    isActive: true,
    profileTitle: "Registered user",
  },
  {
    id: "668cb477-afde-437c-bf4f-5bdcc1dfec65",
    isActive: true,
    profileTitle: "Business user",
  },
  {
    id: "037acb05-1e48-4197-88aa-2bdca2e3ce47",
    isActive: true,
    profileTitle: "Dietitian",
  },
];

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState([]);
  //   const [searchTerm, setSearchTerm] = useState("");
  //   const [message, setMessage] = useState("");

  // the url will be changed to the backend url
  //   const viewProfiles = async () => {
  //     try {
  //       const response = await fetch(
  //         "http://localhost:8080/api/userprofile/readAllUserProfiles"
  //       );
  //       if (response.ok) {
  //         const data = await response.json();
  //         // write the data into console for debugging
  //         console.log("data from backend");
  //         console.log(data);
  //         setUserProfile(data);
  //       } else {
  //         console.error("Failed to fetch user profile list");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data", error);
  //     }
  //   };

  //   useEffect(() => {
  //     viewProfiles();
  //   }, []);

  return (
    <div className="bg-blue-800 min-h-screen flex flex-col justify-center items-center py-5">
      <h1 className="text-2xl text-white font-bold mb-4 text-center sm:text-left">
        User Profile List
      </h1>
      <div className="overflow-x-auto w-full max-w-md">
        <table className="w-full rounded border-black border-2">
          <thead className="bg-blue-600 font-semibold text-white">
            <tr>
              <th className="px-2 py-1 mb-3 text-xl text-center sm:text-left border-2 border-black">
                Profile Type
              </th>
            </tr>
          </thead>
          <tbody>
            {mockUserProfilesList.map((eachList, index) => (
              <tr
                key={index}
                className="bg-white border-b border-blue dark:border-blue-600"
              >
                <td className="px-3 py-2 text-base text-center sm:text-left">
                  {eachList.profileTitle}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProfile;
