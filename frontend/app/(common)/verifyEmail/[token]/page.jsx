"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";

const VerifyEmail = () => {
  const router = useRouter();
  const [token, setToken] = useState("");

  useEffect(() => {
    // When the component mounts and the URL is available
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const tokenFromUrl = urlParams.get("token");
      setToken(tokenFromUrl);

      // You can then use the token to make a verification request to your backend
      // axios.get(`http://localhost:8080/verify/confirm?token=${tokenFromUrl}`)
      //   .then(response => {
      //     // Handle the response from the backend
      //   })
      //   .catch(error => {
      //     // Handle any errors that occur during verification
      //   });
    }
  }, []);

  return (
    <div>
      <h1>Verify Email</h1>
      <p>Token: {token}</p>
    </div>
  );
};

export default VerifyEmail;
