"use client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import UserNavigation from "../components/navigation/sysAdminNavBar";
import React from "react";

function SysAdminLayout({ children }) {
  return (
    <>
      <UserNavigation />
      {children}
    </>
  );
}

export default SysAdminLayout;
