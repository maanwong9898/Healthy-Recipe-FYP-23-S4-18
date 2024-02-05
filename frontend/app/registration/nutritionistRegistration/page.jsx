"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import Footer from "../../components/footer";

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
  // const [nutriCert, setNutriCert] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [filePreviews, setFilePreviews] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [newImageBlob, setNewImageBlob] = useState(null); // New uploaded image
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleCreateNutritionistAccount = async (event) => {
    event.preventDefault();

    if (!newImageBlob) {
      setError("Please upload the required certificate.");
      return;
    }

    if (
      !fullName.trim() ||
      !userName.trim() ||
      !password.trim() ||
      !confirmPwd.trim() ||
      !contactNumber.trim() ||
      !workEmail.trim() ||
      !newImageBlob.trim()
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
        "Account created successfully! You will be notified once your account has been verified."
      );
    }
    // else if (postalCode.length !== 6) {
    //   setError("Please enter a valid postal code.");
    //   return;
    // }

    console.log("Creating account...");
    const nutritionistData = {
      password: password,
      username: userName,
      fullName: fullName,
      email: workEmail,
      companyName: companyName,
      companyAddress: companyAddress,
      contactNumber: contactNumber,
      postalCode: postalCode,
      imgBlob: newImageBlob, // Use updated image blob
      // nutriCert: nutriCert,
    };
    console.log(nutritionistData);

    try {
      const response = await axiosInterceptorInstance.post(
        "/register/nut",
        nutritionistData
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
      // setNutriCert("");

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

  const handleFileChange = (e) => {
    console.log("File change event:", e);
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        let dataURL = event.target.result;
        console.log("Complete Data URL:", dataURL);

        // Extract Base64 Data
        let base64Data = dataURL.split(",")[1];
        console.log("Base64 Data:", base64Data);

        // Use base64Data as needed
        setNewImageBlob(base64Data); // Assuming you have a state setter like this
      };
      reader.readAsDataURL(file);
      console.log("File:", file);
    }
  };

  const renderImage = () => {
    const imageToShow = newImageBlob;
    return imageToShow ? (
      <img
        src={`data:image/jpeg;base64,${imageToShow}`}
        alt="Nutritionist Certificate"
        className="mt-2 w-32 h-32 object-cover rounded"
        onError={(e) => {
          console.error("Error loading image:", e);
          e.target.style.display = "none";
        }}
      />
    ) : (
      <p>No image available</p>
    );
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
                // action="https://localhost:8080/register/upload"
                // method="POST"
                // encType="multipart/formdata"
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
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      value={fullName}
                      onChange={clearErrorOnChange(setFullName)}
                    />

                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      placeholder="Your Username"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
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
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      value={password}
                      onChange={clearErrorOnChange(setPassword)}
                    />

                    <input
                      type="password"
                      id="repeatPassword"
                      name="repeatPassword"
                      placeholder="Repeat Password"
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
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
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
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
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
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
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
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
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
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
                      className="bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                      value={postalCode}
                      onChange={clearErrorOnChange(setPostalCode)}
                    />
                  </div>

                  <div className="mt-3">
                    <p className="items-center">
                      For verification purposes, please upload either of the
                      following
                      <span className="text-red-500">*</span>
                    </p>
                    <p className="text-xs text-gray-700">
                      A copy of your Nutritionist certificate
                    </p>
                    <p className="text-xs text-gray-700">
                      A copy of your undergraduate/postgraduate certificate
                    </p>

                    {/* IMAGE file */}
                    <div className="flex flex-col">
                      <label
                        htmlFor="image"
                        className="block text-xl mb-1 font-bold text-gray-900"
                      >
                        Image<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="border-solid mt-3 rounded-lg bg-white border border-gray-400 w-full"
                      />
                    </div>

                    <div className="mt-2 flex flex-row space-x-4">
                      {renderImage()}
                    </div>
                  </div>

                  {/* ERROR MSG */}
                  <p className="text-red-500 text-base">{error}</p>

                  {/* SUCCESS MSG */}
                  <p className="text-green-600 text-base">{success}</p>

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
      <Footer />
    </div>
  );
};

export default NutritionistRegistration;
