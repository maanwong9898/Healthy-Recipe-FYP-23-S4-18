"use client";

import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideBarLayout from "../sidebarLayout";

const ViewDietaryPreference = () => {
  const router = useRouter();

  const handleUpdate = () => {
    router.push("/registeredUser/dietaryPreference/updatePreference");
  };
  return (
    <div className="flex">
      <SideBarLayout>
        <div className="w-3/4 p-4 max-w-sm">
          <h2 className="text-lg font-semibold mb-4">My Dietary Preference</h2>

          <div className="mb-4">
            <label htmlFor="diet" className="block mb-2">
              Diet:
            </label>
            <div className="flex items-center border rounded-full w-32">
              <label
                id="diet"
                className="border rounded-full text-center p-2 w-full"
              >
                Vegan
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="allergy" className="block mb-2">
              Allergy and Restriction:
            </label>
            <div className="flex items-center border rounded-full w-32">
              <label
                id="diet"
                className="border rounded-full text-center p-2 w-full"
              >
                Gluten-Free
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="healthGoal" className="block mb-2">
              Health Goal:
            </label>
            <div className="flex items-center border rounded-full w-32">
              <label
                id="diet"
                className="border rounded-full text-center p-2 w-full"
              >
                Weight Loss
              </label>
            </div>
          </div>
          {/* BUTTON */}
          <div className="flex justify-start mt-10">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-7 mx-3"
            >
              <Link href="/registeredUser/dietaryPreference/updatePreference"></Link>
              Update
            </button>
          </div>
        </div>
      </SideBarLayout>
    </div>
  );
};

export default ViewDietaryPreference;
