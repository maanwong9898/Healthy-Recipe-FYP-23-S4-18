"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";

const RegistrationSelection = () => {
  return (
    <div>
      <HomeNavbar />
      <div className="bg-orange-50 min-h-screen py-20">
        <div className="container mx-auto">
          <div className="flex md:flex-row rounded-xl mx-auto w-3/4 bg-slate-100 shadow-lg overflow-hidden">
            {/* SIGN UP SELECTION CONTAINER */}
            <div className="flex w-full items-center justify-center">
              <div className="p-4 md:p-10">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4 text-center">
                  Sign Up As
                </h1>
                <div className="flex flex-row gap-6 items-center justify-center pt-10">
                  <Link href="/registration/userRegistration">
                    <button className="text-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full py-2.5 px-5">
                      User
                    </button>
                  </Link>
                  <Link href="/registration/businessRegistration">
                    <button className="text-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full py-2.5 px-5">
                      Business User
                    </button>
                  </Link>
                  <Link href="/registration/nutritionistRegistration">
                    <button className="text-center text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full py-2.5 px-5">
                      Nutritionist
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="bg-orange-50 min-h-screen">
    //   <div className="flex flex-col items-center justify-center h-screen">
    //     <div className="w-full max-w-lg bg-white rounded-xl shadow-md py-16 px-16">
    //       <h2 className="text-[28px] font-bold text-black mb-6 text-center items-center">
    //         Sign Up As
    //       </h2>
    //       <form className="flex flex-row items-center justify-center">
    //         <Link href="/registration/userRegistration">
    //           <button className="text-center text-white bg-cyan-500 hover:bg-sky-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
    //             User
    //           </button>
    //         </Link>
    //         <Link href="/registration/nutritionistRegistration">
    //           <button className="text-center text-white bg-cyan-500 hover:bg-sky-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
    //             Nutritionist
    //           </button>
    //         </Link>
    //         <Link href="/registration/businessRegistration">
    //           <button className="text-center text-white bg-cyan-500 hover:bg-sky-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
    //             Business User
    //           </button>
    //         </Link>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default RegistrationSelection;
