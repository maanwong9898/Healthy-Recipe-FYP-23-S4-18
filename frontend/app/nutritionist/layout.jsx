"use client";
import Head from "next/head"; // Import the Head component from Next.js
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import NutritionistNavigation from "../components/navigation/nutritionistNavBar";
import React from "react";
import Footer from "../components/footer";

function NutritionistLayout({ children }) {
  return (
    <>
      <Head>
        <title>Nutritionist Panel</title> {/* Set the title for SEO purposes */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />{" "}
        {/* Viewport meta tag */}
        {/* Other meta tags and links to stylesheets can be added here */}
      </Head>
      {/* <NutritionistNavigation /> */}
      <div className="w-full overflow-x-hidden">{children}</div>
      <Footer />
    </>
  );
}

export default NutritionistLayout;
