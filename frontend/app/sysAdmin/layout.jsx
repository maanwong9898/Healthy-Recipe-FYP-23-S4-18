"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import UserNavigation from "../components/navigation/sysAdminNavBar";
import React from "react";

function SysAdminLayout({ children }) {
  return (
    <>
      {children}
      <UserNavigation />
      <div>System admin layout page</div>
    </>
  );
}

export default SysAdminLayout;
