"use client";

import { useRouter } from "next/navigation";
import React, { use } from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import SideBarLayout from "../../sidebarLayout.jsx";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";
const ViewDietaryPreference = () => {
  const router = useRouter();
  const [userAccount, setUserAccount] = useState({});
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [allergies, setAllergies] = useState([]);
  const [healthGoal, setHealthGoal] = useState("");

  useEffect(() => {
    viewUserDashboard();
  }, []);

  const viewUserDashboard = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const response = await axiosInterceptorInstance.get(
        "/register/dashboard/" + userId,
        config
      );

      setUserAccount(response.data);
      setDietaryPreference(
        response.data.dietaryPreferences?.subcategoryName || "Not specified"
      );
      setAllergies(response.data.allergies || []);
      setHealthGoal(
        response.data.healthGoal?.subcategoryName || "Not specified"
      );
    } catch (error) {
      console.error("Error fetching user data", error);
    }
  };

  const handleUpdate = () => {
    router.push("/registeredUser/myAccount/dietaryPreference/updatePreference");
  };

  return (
    <div className="flex">
      <SideBarLayout>
        <div className="w-3/4 p-4 max-w-sm">
          <h2 className="text-lg font-semibold mb-4">My Dietary Preference</h2>
          {/* Diet Preference */}
          <div className="mb-4">
            <label htmlFor="diet" className="block mb-2">
              Diet:
            </label>
            <div className="flex items-center border rounded-full w-32">
              <label
                id="diet"
                className="border rounded-full text-center p-2 w-full"
              >
                {dietaryPreference}
              </label>
            </div>
          </div>
          {/* Allergies */}
          <div className="mb-4">
            <label htmlFor="allergy" className="block mb-2">
              Allergy and Restriction:
            </label>
            <div className="flex flex-row flex-wrap gap-2">
              {allergies.map((allergy, index) => (
                <span
                  key={index}
                  className="flex items-center border rounded-full px-4 py-2"
                >
                  {allergy.subcategoryName}
                </span>
              ))}
            </div>
          </div>
          {/* Health Goal */}
          <div className="mb-4">
            <label htmlFor="healthGoal" className="block mb-2">
              Health Goal:
            </label>
            <div className="flex items-center border rounded-full w-60">
              <label
                id="healthGoal"
                className="border rounded-full text-center p-2 w-full"
              >
                {healthGoal}
              </label>
            </div>
          </div>
          {/* Update Button */}
          <div className="flex justify-start mt-10">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-7 mx-3"
            >
              Update
            </button>
          </div>
        </div>
      </SideBarLayout>
    </div>
  );
};

export default ViewDietaryPreference;

// const ViewDietaryPreference = () => {
//   const router = useRouter();
//   const [userAccount, setUserAccount] = useState("");
//   const [dietaryPreference, setDietaryPreference] = useState("");
//   const [allergy, setAllergy] = useState([]);
//   const [healthGoal, setHealthGoal] = useState("");

//   const viewUserDashboard = async () => {
//     try {
//       const userId = localStorage.getItem("userId");
//       const token = localStorage.getItem("token");

//       const config = {
//         headers: { Authorization: `Bearer ${token}` },
//       };

//       // Make the GET request to the userAndAdmin endpoint
//       const response = await axiosInterceptorInstance.get(
//         "/register/dashboard/" + userId,
//         config
//       );

//       console.log(response.data);
//       setUserAccount(response.data);
//     } catch (error) {
//       console.error("Error fetching user data", error);
//     }
//   };

//   useEffect(() => {
//     viewUserDashboard();
//   }, []);

//   const handleUpdate = () => {
//     router.push("/registeredUser/myAccount/dietaryPreference/updatePreference");
//   };
//   return (
//     <div className="flex">
//       <SideBarLayout>
//         <div className="w-3/4 p-4 max-w-sm">
//           <h2 className="text-lg font-semibold mb-4">My Dietary Preference</h2>

//           <div className="mb-4">
//             <label htmlFor="diet" className="block mb-2">
//               Diet:
//             </label>
//             <div className="flex items-center border rounded-full w-32">
//               <label
//                 id="diet"
//                 className="border rounded-full text-center p-2 w-full"
//               >
//                 Vegan
//               </label>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="allergy" className="block mb-2">
//               Allergy and Restriction:
//             </label>
//             <div className="flex items-center border rounded-full w-32">
//               <label
//                 id="diet"
//                 className="border rounded-full text-center p-2 w-full"
//               >
//                 Gluten
//               </label>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="healthGoal" className="block mb-2">
//               Health Goal:
//             </label>
//             <div className="flex items-center border rounded-full w-32">
//               <label
//                 id="diet"
//                 className="border rounded-full text-center p-2 w-full"
//               >
//                 Weight Loss
//               </label>
//             </div>
//           </div>
//           {/* BUTTON */}
//           <div className="flex justify-start mt-10">
//             <button
//               onClick={handleUpdate}
//               className="bg-blue-500 hover:bg-blue-700 text-white rounded-md py-2 px-7 mx-3"
//             >
//               <Link href="/registeredUser/dietaryPreference/updatePreference"></Link>
//               Update
//             </button>
//           </div>
//         </div>
//       </SideBarLayout>
//     </div>
//   );
// };

// export default ViewDietaryPreference;
