"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";

const userRegistration = () => {
  return (
    <div>
      <HomeNavbar />
      <h1>this is user registration</h1>
    </div>
  );
};

export default userRegistration;
