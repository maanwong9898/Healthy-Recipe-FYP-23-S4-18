"use client";

import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="container p-4">
      <h1 className="text-3xl font-semibold ml-3 mb-5 mt-4">About us</h1>

      <section className="mb-4 ml-3">
        <h2 className="font-bold text-xl">Our Mission</h2>
        <p className="max-w-xl">
          Welcome to My Healthy Recipe, your number-one source for healthy and
          delicious recipes. We're dedicated to providing nutritional,
          delicious, and easy-to-make recipes. Committed to your well-being, we
          follow HPB's guidelines for daily sodium intake to ensure that every
          recipe aligns with the highest nutritional standards. More than just a
          collection of recipes, our commitment to health is ingrained in every
          dish we create.
        </p>
      </section>

      <section className="mb-4 ml-3">
        <h2 className="font-bold text-xl mb-2">Why You Should Join Us?</h2>
        <p className="max-w-xl">
          Unlock health and culinary delights by registering with us at My
          Healthy Recipe! When you register as a user, you're creating a
          personalized health journey that represents your unique goals rather
          than just browsing. You'll be able to access a variety of healthy
          recipes, meal plans, and educational content tailored to your needs.
          You'll also be able to track your weight and BMI to see how your
          health is improving over time.
          <br />
          <br />
          For businesses, elevate your brand and connect with a health-conscious
          audience on the Healthy Recipe Diet platform. We provide a dynamic
          space for you to showcase your knowledge and expertise. You will be
          able to create blog posts featuring on our website. You can also
          create and share recipes and educational content with our users. We'll
          help you reach a new audience and grow your business.
          <br />
          <br />
          For dietitians, we provide a platform for you to share your knowledge
          and expertise with our users. You can create and share meal plans with
          our users. We'll help you reach a new audience and grow your business.
        </p>
      </section>

      <section className="mb-4 flex flex-col ml-3">
        <h2 className="font-bold text-xl mb-3">Our Users</h2>
        <div className="flex flex-row">
          <Image
            src="/age-group-pie-chart.png"
            alt="Age Group Pie Chart"
            width={400}
            height={400}
            className="mt-6"
          />
          <Image
            src="/dietary-preference-pie-chart.png"
            alt="Dietary Preference Pie Chart"
            width={400}
            height={400}
            className="mt-6"
          />
        </div>
      </section>

      <section className="mb-4 ml-3">
        <h2 className="font-bold text-xl mb-2">Get In Touch</h2>
        <p>Partner Inquiries: partners@myhealthyrecipe.com</p>
        <p>Advertising Inquiries: advertising@myhealthyrecipe.com</p>
        <p>User Support: support@myhealthyrecipe.com</p>
      </section>
    </div>
  );
};

export default AboutUs;
