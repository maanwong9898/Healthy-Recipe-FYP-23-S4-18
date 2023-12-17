"use client";
import Head from "next/head"; // Import the Head component from Next.js
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import UserSidebar from "../components/sidebar/registeredUserSideBar/index.jsx";
import React from "react";

function UserSideBarLayout({ children }) {
  return (
    <>
      <Head>
        <title>Account Settings Side Bar</title>{" "}
        {/* Set the title for SEO purposes */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />{" "}
        {/* Viewport meta tag */}
        {/* Other meta tags and links to stylesheets can be added here */}
      </Head>
      <UserSidebar />
      <div className="w-full overflow-x-hidden">{children}</div>
    </>
  );
}

export default UserSideBarLayout;
