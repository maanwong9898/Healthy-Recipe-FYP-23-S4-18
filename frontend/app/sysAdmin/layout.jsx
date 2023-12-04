"use client";
import Head from "next/head"; // Import the Head component from Next.js
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import UserNavigation from "../components/navigation/sysAdminNavBar";
import React from "react";

function SysAdminLayout({ children }) {
  return (
    <>
      <Head>
        <title>System Admin Panel</title> {/* Set the title for SEO purposes */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />{" "}
        {/* Viewport meta tag */}
        {/* Other meta tags and links to stylesheets can be added here */}
      </Head>
      <UserNavigation />
      <div className="w-full overflow-x-hidden">{children}</div>
    </>
  );
}

export default SysAdminLayout;
