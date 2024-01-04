// "use client";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import Link from "next/link";
// import HomeNavbar from "@/app/components/navigation/homeNavBar";

// // router path: /userLogin
// // mock data for testing

// // should have "profile type" to determine which page to go to
// const mockUsers = [
//   {
//     username: "user1",
//     password: "pw1",
//     profile: "registeredUser",
//   },
//   {
//     username: "admin1",
//     password: "pw1",
//     profile: "sysAdmin",
//   },
//   {
//     username: "business1",
//     password: "pw1",
//     profile: "businessUser",
//   },
//   {
//     username: "dietitian1",
//     password: "pw1",
//     profile: "dietitian",
//   },
// ];

// const userLogin = () => {
//   const router = useRouter();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(""); // New state for error message

//   const handleLogin = (event) => {
//     event.preventDefault();

//     // Check if there is a user with the entered username (suppose to have login controller)
//     const user = mockUsers.find((user) => user.username === username);

//     // Check if username matches password
//     if (user && user.password === password) {
//       // Set username and profile in local storage
//       localStorage.setItem("username", user.username);
//       localStorage.setItem("profile", user.profile);

//       if (user.profile === "registeredUser") {
//         console.log("registeredUser");
//         // print out the username and profile from local storage
//         console.log(localStorage.getItem("username"));
//         console.log(localStorage.getItem("profile"));

//         router.push("/registeredUser");
//       } else if (user.profile === "sysAdmin") {
//         console.log("sysAdmin");
//         // print out the username and profile from local storage
//         console.log(localStorage.getItem("username"));
//         console.log(localStorage.getItem("profile"));

//         router.push("/sysAdmin");
//       } else if (user.profile === "businessUser") {
//         console.log("businessUser");
//         // print out the username and profile from local storage
//         console.log(localStorage.getItem("username"));
//         console.log(localStorage.getItem("profile"));

//         router.push("/businessUser");
//       } else if (user.profile === "dietitian") {
//         console.log("dietitian");
//         // print out the username and profile from local storage
//         console.log(localStorage.getItem("username"));
//         console.log(localStorage.getItem("profile"));

//         router.push("/dietitian");
//       }
//     } else {
//       setError("Incorrect username or password"); // Set error message
//     }
//   };

//   return (
//     <div className="bg-cyan-900">
//       <HomeNavbar />
//       <div className="flex flex-col items-center justify-center h-screen">
//         <div className="w-full max-w-md bg-white rounded-xl shadow-md py-8 px-8">
//           <h2 className="text-[24px] font-bold text-gray-900 mb-6">
//             Welcome Back
//           </h2>
//           <form className="flex flex-col items-center">
//             <div className="mb-5 w-full">
//               <input
//                 className="border-1 bg-gray-100 border-gray-300 rounded-lg text-sm py-2 px-4 w-full"
//                 type="text"
//                 placeholder="Username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//               />
//             </div>
//             <div className="mb-5 w-full">
//               <input
//                 className="border-1 bg-gray-100 border-gray-300 rounded-md text-sm py-2 px-4 w-full"
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div className="flex w-full">
//               <button
//                 className="text-center text-white bg-cyan-500 hover:bg-sky-700 font-medium rounded-lg py-2 px-4 w-full"
//                 onClick={handleLogin}
//               >
//                 Sign In to Your Account
//               </button>
//             </div>
//             <div className="flex justify-center w-full">
//               <p className="text-red-500 text-sm">{error}</p>
//             </div>
//             <div className="flex justify-center w-full">
//               <p className="text-sm font-light text-black mt-6">
//                 Don’t have an account yet?{" "}
//                 <Link
//                   href="/registration"
//                   className="font-medium text-cyan-600 hover:underline"
//                 >
//                   Sign up
//                 </Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default userLogin;

"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import Image from "next/image"; // Import Image component from next/image
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

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

const images = [
  "https://img.freepik.com/free-photo/top-view-delicious-vegetable-soup-with-different-seasonings-dark-green-surface-food-meal-vegetables-soup-ingredient-product_140725-72452.jpg?w=826&t=st=1703904601~exp=1703905201~hmac=f28fb9ae08c8acf6be078c1d04c4d5c0eefbd0d883f11a0eb4d14c94099fb958",
  "https://img.freepik.com/free-photo/top-view-delicious-cooked-vegetables-sliced-with-different-seasonings-dark-background-soup-food-sauce-meal-vegetable_140725-85838.jpg?w=826&t=st=1703904650~exp=1703905250~hmac=3de50193365ccf0123d70d79bdd5f42374b8cdfcae1a7f1755ddfe15e162b123",
  "https://img.freepik.com/free-photo/top-view-delicious-soup-with-greens-vegetables-grey-floor-soup-meal-meat-soup-sauce-dinner_140725-75841.jpg?w=826&t=st=1703904683~exp=1703905283~hmac=272c2b50677394817e139c55da9bf42cafa70a2a270125238381ab54a76ef326",
  "https://img.freepik.com/free-photo/flat-lay-food-ingredients-with-vegetables_23-2148834702.jpg?w=996&t=st=1703905809~exp=1703906409~hmac=9a7191dda672785880d82eb08bb7364222efbf3617bd10b411a497712a586037",
  "https://img.freepik.com/free-photo/top-closer-view-sliced-vegetable-rolls-dough-with-tasty-filling-along-with-greens-notepad-red-spicy-peppers-bright-blue-desk_140725-32601.jpg?w=826&t=st=1703905879~exp=1703906479~hmac=2bf7bccb689fc8f2f4168abe1e27f0d3aae044996982d3f95c705f71d5fef955",
  // Add as many images as you want here
];

const userLogin = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // New state for error message
  const [passwordVisible, setPasswordVisible] = useState(false); // New state for password visibility
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []);

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
    <div>
      <HomeNavbar />
      <div className="bg-gradient-to-r from-emerald-200 via-teal-300 to-cyan-400 flex items-center justify-center h-screen">
        <div className="max-w-4xl mx-auto bg-cyan-600/50 grid grid-cols-1 md:grid-cols-2 items-center gap-20 p-5 rounded-2xl">
          {/* Image container */}
          <div className="hidden md:block">
            <img
              src={images[currentImageIndex]} // Dynamically set the image source
              alt="Slideshow"
              className="rounded-2xl w-full h-auto" // Adjust width and height as needed
            />
          </div>

          {/* Login form container */}
          <div className="max-w-md grid gap-5">
            <h1 className="text-4xl font-bold text-white mb-3">
              My Healthy Recipe
            </h1>

            <form className="space-y-6" onSubmit={handleLogin}>
              {/* Email Input */}
              <div className="relative">
                <div className="absolute top-2.5 left-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  className="w-full bg-cyan-200 text-cyan py-2 pl-12 pr-3 rounded-full border border-white focus:border-black focus:outline-none focus:ring-2 focus:ring-black"
                  onChange={(e) => setUsername(e.target.value)} // Assuming you have a setUsername function
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <div
                  className="absolute top-2.5 left-3 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon
                    icon={passwordVisible ? faEyeSlash : faEye}
                  />
                </div>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="w-full bg-cyan-200 text-cyan py-2 pl-12 pr-3 rounded-full border border-white focus:border-black focus:outline-none focus:ring-2 focus:ring-black"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-700 text-white font-semibold rounded-full py-2"
              >
                Sign In to Your Account
              </button>
            </form>
            {/* Links */}
            <div className="text-white opacity-70 border-t border-white-light pt-4 space-y-4 text-base">
              <p>
                Don't have an account?{" "}
                <Link href="/registration">
                  <span className="text-blue-900 font-semibold cursor-pointer">
                    Sign up
                  </span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default userLogin;
