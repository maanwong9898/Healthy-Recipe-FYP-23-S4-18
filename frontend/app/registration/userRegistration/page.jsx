"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";

const userRegistration = () => {
  // state for personal information
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [dob, setDOB] = useState("");

  // state for all the categories needed for user registration
  const [dietaryPreferencesCategory, setDietaryPreferencesCategory] = useState(
    []
  );
  const [dietaryPreference, setDietaryPreference] = useState("");
  const [allergyCategory, setAllergyCategory] = useState([]); // Store category of allergies
  const [allergyRestriction, setAllergyRestriction] = useState([]); // Store selected allergies
  const [healthGoalsCategory, setHealthGoalsCategory] = useState([]);
  const [healthGoals, setHealthGoals] = useState("");

  // state for weight input to be called for another controller
  const [weight, setWeight] = useState("");

  // state for error and success message
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Regex for email validation
  const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Get today's date in the correct format for the max attribute (yyyy-mm-dd)
  const getFormattedDate = (date) => {
    return date.toISOString().split("T")[0];
  };

  // Set the date max input to be today's date
  const todayDate = getFormattedDate(new Date());

  // useEffect to fetch all the categories needed for user registration
  useEffect(() => {
    // Fetch all health goal from backend
    const fetchHealthGoals = async () => {
      console.log("Fetching health goals...");
      try {
        const response = await axiosInterceptorInstance.get(
          "/category/getAllHealthGoals"
        );
        console.log("Health Goals Categories Fetched", response.data);
        setHealthGoalsCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch all dietary preferences categories from backend
    const fetchDietaryPreferences = async () => {
      console.log("Fetching dietary preferences...");
      try {
        const response = await axiosInterceptorInstance.get(
          "/category/getAllDietaryPreferences"
        );
        console.log("Dietary Preferences Categories Fetched", response.data);
        setDietaryPreferencesCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    // Fetch all allergies categories from backend
    const fetchAllergies = async () => {
      console.log("Fetching allergies...");
      try {
        const response = await axiosInterceptorInstance.get(
          "/category/getAllAllergies"
        );
        console.log("Allergies Categories Fetched", response.data);
        setAllergyCategory(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchHealthGoals();
    fetchDietaryPreferences();
    fetchAllergies();
  }, []);

  // Function to handle health goals category change
  const handleHealthCategoryChange = (e) => {
    setHealthGoals(e.target.value);
  };

  // Function to handle dietary preference category change
  const handleDietaryPreferenceCategoryChange = (e) => {
    setDietaryPreference(e.target.value);
  };

  // Function to handle allergy category change
  const handleAllergyCategoryChange = (e, allergyId) => {
    const checked = e.target.checked;

    if (checked) {
      // If the checkbox is checked, add the allergyId to the array
      setAllergyRestriction((prevAllergies) => [...prevAllergies, allergyId]);
    } else {
      // If the checkbox is unchecked, remove the allergyId from the array
      setAllergyRestriction((prevAllergies) =>
        prevAllergies.filter((id) => id !== allergyId)
      );
    }
  };

  // Function to handlle form submission
  const handleCreateNewUserAccount = async (event) => {
    event.preventDefault();

    // Validation for mandatory fields
    if (!fullName.trim()) {
      setError("Full Name cannot be empty.");
      return;
    }
    if (!username.trim()) {
      setError("Username cannot be empty.");
      return;
    }
    if (!email.match(emailValidation)) {
      setError("Invalid email address.");
      return;
    }
    if (!password) {
      setError("Password cannot be empty.");
      return;
    }
    if (password !== confirmPwd) {
      setError("Passwords do not match.");
      return;
    }

    console.log("Health goal selected:", healthGoals);
    console.log("Dietary preference selected:", dietaryPreference);
    console.log("Allergies selected:", allergyRestriction);
    console.log("Creating new user account...");

    const formData = {
      fullName: fullName,
      username: username,
      email: email,
      password: password,
      dob: dob,
      dietaryPreferencesId: dietaryPreference,
      allergies: allergyRestriction.map((id) => ({ id })),
      healthGoalId: healthGoals,
      weight: weight,
    };
    console.log(formData);

    try {
      const response = await axiosInterceptorInstance.post(
        "/register/user",
        formData
      );
      console.log("Account successfully:", response.data);
      setSuccess("Account successfully created!");

      console.log("user id is:", response.data.id);

      // Check if weight is provided and send it to the setWeight endpoint
      if (weight) {
        // make sure the weight is a valid number
        const parsedWeight = parseFloat(weight);
        if (!isNaN(parsedWeight)) {
          // Check if parsedWeight is a valid number
          const weightData = {
            id: {
              userId: response.data.id, // Assuming the user ID is returned in the response
            },
            weight: parsedWeight,
          };

          try {
            const weightResponse = await axiosInterceptorInstance.post(
              "http://localhost:8080/registeredUsers/setWeight",
              weightData
            );
            console.log("Weight set successfully", weightResponse.data);
          } catch (weightError) {
            console.error("Invalid weight input");
            setError("Invalid weight input. Please enter a valid weight.");
            return; // Stop the form submission
          }
        } else {
          console.error("Invalid weight input");
        }
      }

      setFullName("");
      setUsername("");
      setPassword("");
      setConfirmPwd("");
      setDOB("");
      setEmail("");
      setDietaryPreference("");
      setAllergyRestriction("");
      setHealthGoals("");
      setWeight("");
      setError("");
    } catch (error) {
      console.log("Error:", error.response.data);
    }
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
                <h1 className="font-semibold text-3xl">Sign Up as a User</h1>
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
                style={{ backgroundImage: `url('/user_registration.jpg')` }}
              ></div>
            </div>
            {/* REGISTRATION FORM */}
            <div className="w-full md:w-1/2 mx-5 flex items-center justify-center">
              <div className="w-full p-4 md:p-10">
                <h1 className="text-3xl md:text-4xl font-semibold mb-4">
                  Create an Account
                </h1>
                <form>
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
                      onChange={(event) => setFullName(event.target.value)}
                    />

                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      placeholder="Your Username"
                      className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      value={username}
                      onChange={(event) => setUsername(event.target.value)}
                    />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="email" className="flex items-center">
                      Email Address
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Email Address"
                      className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
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
                      onChange={(event) => setPassword(event.target.value)}
                    />

                    <input
                      type="password"
                      id="repeatPassword"
                      name="repeatPassword"
                      placeholder="Repeat Password"
                      className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg p-2.5"
                      value={confirmPwd}
                      onChange={(event) => setConfirmPwd(event.target.value)}
                    />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="dob" className="flex items-center">
                      Date of Birth
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="workEmail"
                      name="workEmail"
                      placeholder="Work Email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                      value={dob}
                      onChange={(event) => setDOB(event.target.value)}
                    />
                  </div>

                  {/* DIETARY PREFERENCE */}
                  <div className="mt-3">
                    <label
                      htmlFor="dietaryPreference"
                      className="flex items-center"
                    >
                      Dietary Preference
                    </label>
                    <select
                      id="dietaryPreference"
                      name="dietaryPreference"
                      value={dietaryPreference}
                      onChange={handleDietaryPreferenceCategoryChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                    >
                      <option value="">Select Dietary Preference</option>
                      {dietaryPreferencesCategory.map((cat, index) => (
                        <option key={index} value={cat.id}>
                          {cat.subcategoryName}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* ALLERGIES AND RESTRICTIONS */}
                  <div className="mt-3">
                    <label
                      htmlFor="allergyRestriction"
                      className="flex items-center"
                    >
                      Allergies and Restrictions
                    </label>
                    <div>
                      {allergyCategory.map((cat, index) => (
                        <label key={index} className="mr-2 items-center">
                          <input
                            type="checkbox"
                            name="allergies"
                            value={cat.id}
                            checked={allergyRestriction.includes(cat.id)}
                            onChange={(e) =>
                              handleAllergyCategoryChange(e, cat.id)
                            }
                            className="mr-2"
                          />
                          {cat.subcategoryName}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* HEALTH GOAL */}
                  <div className="mt-3">
                    <label htmlFor="healthGoals" className="flex items-center">
                      Health Goal
                    </label>
                    <select
                      id="healthGoals"
                      name="healthGoals"
                      value={healthGoals}
                      onChange={handleHealthCategoryChange}
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                    >
                      <option value="">Select Health Goal</option>
                      {healthGoalsCategory.map((cat, index) => (
                        <option key={index} value={cat.id}>
                          {cat.subcategoryName}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="mt-3">
                    <label htmlFor="weight" className="flex items-center">
                      Weight
                    </label>
                    <input
                      type="text"
                      id="weight"
                      name="weight"
                      placeholder="Your Weight In kg"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg w-full p-2.5"
                      value={weight}
                      onChange={(event) => setWeight(event.target.value)}
                    />
                  </div>

                  {/* ERROR MSG */}
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  {/* SUCCESS MSG */}
                  {success && (
                    <p className="text-green-500 text-sm">{success}</p>
                  )}

                  {/* SUBMIT BUTTON */}

                  <div className="flex flex-row justify-center">
                    <button
                      type="submit"
                      onClick={handleCreateNewUserAccount}
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

export default userRegistration;
