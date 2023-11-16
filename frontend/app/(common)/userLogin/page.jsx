"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

// router path: /userLogin
// mock data for testing

const mockUsers = [
  {
    username: "user1",
    password: "pw1",
    profile: "registeredUser",
  },
  {
    username: "user2",
    password: "pw2",
    profile: "sysAdmin",
  },
];

const userLogin = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // New state for error message

  const handleLogin = (event) => {
    event.preventDefault();

    // Check if there is a user with the entered username
    const user = mockUsers.find((user) => user.username === username);

    // Check if username matches password
    if (user && user.password === password) {
      if (user.profile === "registeredUser") {
        router.push("/registeredUser");
      } else if (user.profile === "sysAdmin") {
        router.push("/sysAdmin");
      }
    } else {
      setError("Incorrect username or password"); // Set error message
    }
  };

  return (
    <div>
      <p>Welcome to the Login page</p>

      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-purple-300 rounded-xl shadow-md py-16 px-16">
          <h2 className="text-[28px] font-bold text-white mb-6 text-center">
            Login
          </h2>
          <form className="flex flex-col">
            <div className="flex space-x-8 mb-2">
              <input
                className="border-2 border-purple-500 rounded-md py-2 px-10"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="flex space-x-8 mb-2">
              <input
                className="border-2 border-purple-500 rounded-md py-2 px-10"
                type="password" // Set the type to "password" for a hidden input
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div className="flex justify-center">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default userLogin;
