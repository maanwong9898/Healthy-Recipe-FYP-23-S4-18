"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";

const NutritionistRegistration = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [nutriCert, setNutriCert] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleCreateNutritionistAccount = async (event) => {
    event.preventDefault();

    if (
      !fullName.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !confirmPwd.trim() ||
      !contactNumber.trim() ||
      !workEmail.trim() ||
      !nutriCert
    ) {
      setError("Please fill in all the required fields.");
      return;
    } else if (!emailValidation.test(workEmail)) {
      setError("Please enter a valid email address.");
      return;
    } else if (password !== confirmPwd) {
      setError("Passwords do not match.");
      return;
    } else if (contactNumber.length !== 8) {
      setError("Please enter a valid contact number.");
      return;
    } else if (
      companyName.trim() &&
      (!companyAddress.trim() || !postalCode.trim())
    ) {
      setError("Please provide both company address and postal code.");
      return;
    } else {
      setSuccess(
        "Account created successfully! An email will be sent to you once your account has been approved."
      );
    }
    // else if (postalCode.length !== 6) {
    //   setError("Please enter a valid postal code.");
    //   return;
    // }

    console.log("Creating account...");
    const formData = {
      password: password,
      username: userName,
      fullName: fullName,
      email: workEmail,
      companyName: companyName,
      companyAddress: companyAddress,
      contactNumber: contactNumber,
      postalCode: postalCode,
      nutriCert: nutriCert,
    };
    console.log(formData);

    try {
      const response = await axiosInterceptorInstance.post(
        "/register/nut",
        formData
      );
      console.log("Account successfully:", response.data);

      // Reset fields after successful submission
      setFullName("");
      setUserName("");
      setPassword("");
      setConfirmPwd("");
      setContactNumber("");
      setWorkEmail("");
      setCompanyName("");
      setCompanyAddress("");
      setPostalCode("");
      setNutriCert("");

      setError("");
      // Clear success msg after 5 seconds
      setTimeout(() => {
        setSuccess("");
      }, 5000);
    } catch (error) {
      setSuccess(false); // Ensure success is false on error
      console.error("Error creating nutritionist account:", error);
      //setError(error.message || "Failed to create account.");
    }
  };

  const clearErrorOnChange = (setter) => (e) => {
    setter(e.target.value);
    setError("");
  };

  return (
    <div>
      <HomeNavbar />
      <div className="bg-orange-50 min-h-screen py-16">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row rounded-xl mx-auto bg-slate-100 shadow-lg overflow-hidden">
            {/* IMG + REGISTER AS ANOTHER USER */}
            <div className="w-full md:w-1/2 p-4 md:p-10 bg-white">
              <div className="text-center">
                <h1 className="font-semibold text-3xl">
                  Sign Up as a Nutritionist
                </h1>
                <p className="text-sm font-light text-black">
                  Sign up as a different user{" "}
                  <Link
                    href="/registration"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Sign up here
                  </Link>
                </p>
                {/* LOGIN LINK */}
                <p className="text-sm font-light text-black">
                  Already have an account?{" "}
                  <Link
                    href="/userLogin"
                    className="font-medium text-blue-600 hover:underline"
                  >
                    Login here
                  </Link>
                </p>
              </div>

              <div
                className="h-full w-full bg-cover bg-center flex items-center justify-center flex-col text-center p-8"
                style={{
                  backgroundImage: `url('/nutritionist_registration.jpg')`,
                }}
              ></div>
            </div>
            {/* REGISTRATION FORM */}
            <div className="w-full md:w-1/2 mx-5 flex items-center justify-center">
              <div className="w-full p-4 md:p-10">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                  Create an Account
                </h1>
                <form
                  action="https://localhost:8080/register/upload"
                  method="POST"
                  encType="multipart/formdata"
                >
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <label htmlFor="fullName" className="flex items-center">
                      Full Name
                      <span className="text-red-500">*</span>
                    </label>
                    <label htmlFor="username" className="flex items-center">
                      Username
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      placeholder="Your Name"
                      className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      value={fullName}
                      onChange={clearErrorOnChange(setFullName)}
                    />

                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      placeholder="Your Username"
                      className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      value={userName}
                      onChange={clearErrorOnChange(setUserName)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <label htmlFor="password" className="flex items-center">
                      Password
                      <span className="text-red-500">*</span>
                    </label>
                    <label
                      htmlFor="repeatPassword"
                      className="flex items-center"
                    >
                      Repeat Password
                      <span className="text-red-500">*</span>
                    </label>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      value={password}
                      onChange={clearErrorOnChange(setPassword)}
                    />

                    <input
                      type="password"
                      id="repeatPassword"
                      name="repeatPassword"
                      placeholder="Repeat Password"
                      className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      value={confirmPwd}
                      onChange={clearErrorOnChange(setConfirmPwd)}
                    />
                  </div>
                  <div className="mt-3">
                    <label
                      htmlFor="contactNumber"
                      className="flex items-center"
                    >
                      Contact Number
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="contactNumber"
                      name="contactNumber"
                      placeholder="+65 1234 5678"
                      className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                      value={contactNumber}
                      onChange={clearErrorOnChange(setContactNumber)}
                    />
                  </div>
                  <div className="mt-3">
                    <label htmlFor="workEmail" className="flex items-center">
                      Work Email
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="workEmail"
                      name="workEmail"
                      placeholder="Work Email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                      value={workEmail}
                      onChange={clearErrorOnChange(setWorkEmail)}
                    />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="companyName" className="flex items-center">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder="Company Name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                      value={companyName}
                      onChange={clearErrorOnChange(setCompanyName)}
                    />
                  </div>

                  <div className="mt-3">
                    <label
                      htmlFor="companyAddress"
                      className="flex items-center"
                    >
                      Company Address
                    </label>
                    <input
                      type="text"
                      id="companyAddress"
                      name="companyAddress"
                      placeholder="Company Address"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                      value={companyAddress}
                      onChange={clearErrorOnChange(setCompanyAddress)}
                    />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="postalCode" className="flex items-center">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      id="postalCode"
                      name="postalCode"
                      placeholder="Postal Code"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                      value={postalCode}
                      onChange={clearErrorOnChange(setPostalCode)}
                    />
                  </div>

                  <div className="mt-3">
                    <p className="flex items-center">
                      For verification purposes, please upload any of the
                      following
                      <span className="text-red-500">*</span>
                    </p>
                    <p className="text-xs text-gray-700">
                      A copy of your Nutritionist certificate
                    </p>
                    <p className="text-xs text-gray-700">
                      A copy of your undergraduate/postgraduate certificate
                    </p>
                    <input
                      type="file"
                      id="nutriCert"
                      name="nutriCert"
                      className="border-solid mt-3"
                      multiple
                      accept=".pdf, .jpg, .png .jpeg"
                      value={nutriCert}
                      onChange={clearErrorOnChange(setNutriCert)}
                    ></input>
                  </div>

                  {/* ERROR MSG */}
                  <p className="text-red-500 text-sm">{error}</p>

                  {/* SUCCESS MSG */}
                  <p className="text-green-600 text-sm">{success}</p>

                  <div className="flex flex-row justify-center">
                    <button
                      type="submit"
                      onClick={handleCreateNutritionistAccount}
                      className="text-white bg-blue-600 hover:bg-blue-700 rounded-md font-bold w-full py-2 px-4 mt-4"
                    >
                      Create an Account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NutritionistRegistration;
