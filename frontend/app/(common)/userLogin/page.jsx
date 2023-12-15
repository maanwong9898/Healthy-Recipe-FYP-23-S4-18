"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";

// router path: /userLogin
// mock data for testing

// should have "profile type" to determine which page to go to
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
    <div className="bg-cyan-900">
      <HomeNavbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-[40px] text-white font-extrabold mb-4">
          My Healthy Recipe
        </p>
        <div className="w-full max-w-md bg-cyan-600 rounded-xl shadow-md py-8 px-8">
          <h2 className="text-[24px] font-bold text-cyan-950 mb-6">
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
                className="bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black text-white rounded-md font-bold py-2 px-4 w-full"
                onClick={handleLogin}
              >
                Sign In to Your Account
              </button>
            </div>
            <div className="flex justify-center w-full">
              <p className="text-black font-bold text-xl">{error}</p>
            </div>
            <div className="flex justify-center w-full">
              <p className="text-[18px] font-light text-white mt-6">
                Don’t have an account yet?{" "}
                <Link
                  href="/registration"
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
