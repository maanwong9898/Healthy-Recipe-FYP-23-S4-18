"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";

// router path: /userLogin
// mock data for testing

const mockUsers = [
  {
    username: "user1",
    password: "pw1",
    profile: "registeredUser",
  },
  {
    username: "admin1",
    password: "pw1",
    profile: "sysAdmin",
  },
  {
    username: "business1",
    password: "pw1",
    profile: "businessUser",
  },
  {
    username: "dietitian1",
    password: "pw1",
    profile: "dietitian",
  },
];

const userLogin = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // New state for error message

  const handleLogin = (event) => {
    event.preventDefault();

    // Check if there is a user with the entered username (suppose to have login controller)
    const user = mockUsers.find((user) => user.username === username);

    // Check if username matches password
    if (user && user.password === password) {
      // Set username and profile in local storage
      localStorage.setItem("username", user.username);
      localStorage.setItem("profile", user.profile);

      if (user.profile === "registeredUser") {
        console.log("registeredUser");
        // print out the username and profile from local storage
        console.log(localStorage.getItem("username"));
        console.log(localStorage.getItem("profile"));

        router.push("/registeredUser");
      } else if (user.profile === "sysAdmin") {
        console.log("sysAdmin");
        // print out the username and profile from local storage
        console.log(localStorage.getItem("username"));
        console.log(localStorage.getItem("profile"));

        router.push("/sysAdmin");
      } else if (user.profile === "businessUser") {
        console.log("businessUser");
        // print out the username and profile from local storage
        console.log(localStorage.getItem("username"));
        console.log(localStorage.getItem("profile"));

        router.push("/businessUser");
      } else if (user.profile === "dietitian") {
        console.log("dietitian");
        // print out the username and profile from local storage
        console.log(localStorage.getItem("username"));
        console.log(localStorage.getItem("profile"));

        router.push("/dietitian");
      }
    } else {
      setError("Incorrect username or password"); // Set error message
    }
  };

  return (
    <div className="bg-blue-900">
      <HomeNavbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-blue-300 rounded-xl shadow-md py-16 px-16">
          <h2 className="text-[28px] font-bold text-black mb-6">
            Welcome Back
          </h2>
          <form className="flex flex-col items-center">
            <div className="mb-5 w-full">
              <input
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-5 w-full">
              <input
                className="border-1 border-blue-700 rounded-md py-2 px-4 w-full"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex w-full">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white  rounded-md font-bold py-2 px-4 w-full"
                onClick={handleLogin}
              >
                Sign In to Your Account
              </button>
            </div>
            <div className="flex justify-center w-full">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
            <div className="flex justify-center w-full">
              <p className="text-[18px] font-light text-black-600 mt-6">
                Don’t have an account yet?{" "}
                <Link
                  href="/userSignup"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default userLogin;
