"use client";
import React, { useEffect, useState, useRef } from "react";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import axiosInterceptorInstance from "../../../axiosInterceptorInstance.js";

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [message, setMessage] = useState("");
  const [loadingMessage, setLoadingMessage] = useState(
    "Verification is being processed..."
  );
  const [showMessage, setShowMessage] = useState(false);
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get("token");
      setToken(tokenFromUrl);

      setTimeout(() => {
        setLoadingMessage("Thank you for waiting");
        setShowMessage(true); // Set showMessage to true after 3 seconds
      }, 3000); // Wait for 3 seconds before changing the message

      const verifyToken = async (tokenFromUrl) => {
        try {
          const response = await axiosInterceptorInstance.get(
            `/verify/confirm?token=${tokenFromUrl}`
          );
          setMessage(response.data);
        } catch (error) {
          console.error(`Error verify token: ${tokenFromUrl}`, error);
          setMessage("Error verifying token");
        }
      };

      verifyToken(tokenFromUrl);
    }
  }, []);

  return (
    <div>
      <HomeNavbar />
      <p className="font-bold text-2xl m-3">{loadingMessage}</p>
      {showMessage && (
        <p className="font-medium text-base m-3">{message}</p>
      )}{" "}
      {/* Conditionally render the message */}
    </div>
  );
};

export default VerifyEmail;
