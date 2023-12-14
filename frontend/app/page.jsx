"use client";

import React from "react";
import { useRouter } from "next/navigation";
import HomeNavBar from "./components/navigation/homeNavBar";

// Mock data for frontend to test the layout
// need to fetch data from backend (database) in the future
// const images = [
//   "https://pngimg.com/d/pasta_PNG88.png",
//   "https://static.vecteezy.com/system/resources/previews/017/745/762/original/hainanese-chicken-rice-served-on-a-plate-with-soup-free-png.png",
//   "https://img.freepik.com/free-photo/salmon-avocado-salad-isolated-white-background_123827-20214.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1699920000&semt=ais",
// ];

const Home = () => {
  const router = useRouter();

  return (
    <div className="bg-white h-screen">
      <HomeNavBar />
      <div className="text-2xl font-bold">Recipes</div>
      {/* <div className="flex">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Movie poster ${index + 1}`}
            className="w-1/3 h-48 object-cover ml-4 mr-4"
          />
        ))}
      </div> */}
      <div className="flex justify-between">
        <div></div> {/* Empty div to push the images to the left */}
        <button onClick={() => router.push("/recipes")} className="mr-4">
          Redirect to recipes
        </button>
      </div>
    </div>
  );
};

export default Home;
