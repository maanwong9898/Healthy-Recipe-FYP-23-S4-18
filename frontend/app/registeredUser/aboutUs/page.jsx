"use client";

import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axiosInterceptorInstance from "../../axiosInterceptorInstance";
import SecureStorage from "react-secure-storage";
import RegisteredUserNavBar from "../../components/navigation/registeredUserNavBar";
import { useRouter } from "next/navigation";

ChartJS.register(ArcElement, Tooltip, Legend);

const AboutUs = () => {
  const [userAgeGroup, setUserAgeGroup] = useState([]);
  const [userDietaryPreferenceCount, setUserDietaryPreferenceCount] = useState(
    []
  );
  const [isLoading, setIsLoading] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  const fetchDietaryPreferences = async () => {
    try {
      const response = await axiosInterceptorInstance.get(
        "/registeredUsers/getDemo"
      );
      setUserDietaryPreferenceCount(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching dietary preferences:", error);
    }
  };

  const fetchUserAgeGroup = async () => {
    try {
      const response = await axiosInterceptorInstance.get(
        "/registeredUsers/getAgeGroup"
      );
      const ageData = groupedAgeData(response.data);
      setUserAgeGroup(ageData);
    } catch (error) {
      console.error("Error fetching age groups:", error);
    }
  };

  useEffect(() => {
    const tokenExpiration = SecureStorage.getItem("token_expiration");
    const now = new Date().getTime(); // Current time in milliseconds
    if (
      !SecureStorage.getItem("token") ||
      SecureStorage.getItem("role") !== "REGISTERED_USER" ||
      now >= parseInt(tokenExpiration)
    ) {
      // clear the secure storage
      SecureStorage.clear();
      router.push("/");
    } else {
      setIsChecking(false);

      fetchDietaryPreferences();
      fetchUserAgeGroup();
    }
  }, []);

  // Group raw age data into age groups
  const groupedAgeData = (rawData) => {
    const userAgeGroup = {
      below18: 0,
      "18-30": 0,
      "31-50": 0,
      above50: 0,
    };

    rawData.forEach((item) => {
      const age = item.age;

      if (age < 18) {
        userAgeGroup.below18 += item.ageCount;
      } else if (age >= 18 && age <= 30) {
        userAgeGroup["18-30"] += item.ageCount;
      } else if (age >= 31 && age <= 50) {
        userAgeGroup["31-50"] += item.ageCount;
      } else {
        userAgeGroup.above50 += item.ageCount;
      }
    });

    return userAgeGroup;
  };

  //Pie chart data for age groups
  const agePieData = {
    labels: ["Below 18", "18-30", "31-50", "Above 50"],
    datasets: [
      {
        label: "Age Groups",
        data: [
          userAgeGroup.below18,
          userAgeGroup["18-30"],
          userAgeGroup["31-50"],
          userAgeGroup.above50,
        ],
        backgroundColor: ["#FFD1DC", "#AEC6CF", "#B0E0E6", "#B19CD9"],
      },
    ],
  };

  //Pie chart data for dietary preferences
  const dietaryPreferencePieData = {
    labels: userDietaryPreferenceCount.map((preference) => preference.name),
    datasets: [
      {
        label: "Dietary Preferences",
        data: userDietaryPreferenceCount.map((preference) => preference.count),
        backgroundColor: [
          "#FFD1DC",
          "#AEC6CF",
          "#B0E0E6",
          "#FFDAB9",
          "#B19CD9",
          "#FFB347",
          "#AFEEEE",
          "#E6E6FA",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen">
      {isLoading && isChecking ? (
        <div className="text-xl text-center p-4">
          <p>Please wait. It'll just take a moment.</p>
        </div>
      ) : (
        <>
          <RegisteredUserNavBar />
          <div className="w-full py-6 flex flex-col">
            {/* Banner section */}
            <div className="relative h-80">
              <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(/banner.png)` }}
              ></div>
              <h1 className="absolute inset-0 flex items-center justify-center text-5xl lg:text-8xl font-bold text-gray-900 p-8">
                About Us
              </h1>
            </div>
            {isLoading ? (
              <div className="text-xl text-center p-4">
                <p>Please wait. It'll just take a moment.</p>
              </div>
            ) : (
              <>
                {/* Our Mission section */}
                <section className="mt-8 mb-8 ml-3">
                  <h2 className="font-bold text-2xl mb-2">Our Mission</h2>
                  <p className="max-w-2xl text-gray-900">
                    Welcome to My Healthy Recipe, your number-one source for
                    healthy and delicious recipes. We're dedicated to providing
                    nutritional, delicious, and easy-to-make recipes. Committed
                    to your well-being, we follow HPB's guidelines for daily
                    sodium intake to ensure that every recipe aligns with the
                    highest nutritional standards. More than just a collection
                    of recipes, our commitment to health is ingrained in every
                    dish we create.
                  </p>
                </section>

                {/* Why You Should Join Us section */}
                <section className="mb-8 ml-3">
                  <h2 className="font-bold text-2xl mb-2">
                    Why You Should Join Us?
                  </h2>
                  <p className="max-w-2xl text-gray-900">
                    Unlock health and culinary delights by registering with us
                    at My Healthy Recipe! When you register as a user, you're
                    creating a personalized health journey that represents your
                    unique goals rather than just browsing. You'll be able to
                    access a variety of healthy recipes, meal plans, and
                    educational content tailored to your needs. You'll also be
                    able to track your weight and BMI to see how your health is
                    improving over time.
                    <br />
                    <br />
                    For businesses, elevate your brand and connect with a
                    health-conscious audience on the Healthy Recipe Diet
                    platform. We provide a dynamic space for you to showcase
                    your knowledge and expertise. You will be able to create
                    blog posts featuring on our website. You can also create and
                    share recipes and educational content with our users. We'll
                    help you reach a new audience and grow your business.
                    <br />
                    <br />
                    For dietitians, we provide a platform for you to share your
                    knowledge and expertise with our users. You can create and
                    share meal plans with our users. We'll help you reach a new
                    audience and grow your business.
                  </p>
                </section>

                {/* Demographics info section */}
                <section className="mb-8 ml-3">
                  <h2 className="font-bold text-2xl mb-2">Our Users</h2>
                  <div className="flex flex-col lg:flex-row lg:gap-14">
                    <div className="mb-8 lg:mb-0 mr-3">
                      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <p className="justify-star text-center font-medium text-lg">
                          User Age Groups
                        </p>
                        <Pie data={agePieData}></Pie>
                      </div>
                    </div>
                    <div className="mb-8 lg:mb-0 mr-3">
                      <div className="block p-6 bg-white border border-gray-200 rounded-lg shadow">
                        <p className="justify-star text-center font-medium text-lg">
                          Dietary Preferences
                        </p>
                        <Pie data={dietaryPreferencePieData}></Pie>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Get In Touch section */}
                <section className="mb-8 ml-3">
                  <h2 className="font-bold text-2xl mb-2">Get In Touch</h2>
                  <p className="text-gray-900">
                    Partner Inquiries: partners@myhealthyrecipe.com
                    <br />
                    Advertising Inquiries: advertising@myhealthyrecipe.com
                    <br />
                    User Support: support@myhealthyrecipe.com
                  </p>
                </section>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AboutUs;
