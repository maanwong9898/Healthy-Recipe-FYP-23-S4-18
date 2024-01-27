"use client";
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Footer = () => {
  return (
    <footer class="bottom-0 w-full p-4 bg-orange-50 border-t border-stone-200 shadow md:flex md:items-center md:justify-between md:p-6">
      <span class="text-sm text-gray-500 sm:text-center">
        © 2023 MyHealthyRecipe . Some Rights Reserved.
      </span>
    </footer>
  );
};
export default Footer;