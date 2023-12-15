"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// router path: /registeredUser/businessBlogPost

// Called the controller to get the list of all "ACTIVE" business blog posts
// this is the simple mock data for blog post but a blog post should have more attributes
const AllBusinessBlogPosts = [
  {
    id: "1234567890",
    blogTitle: "Seasonal Savors: A Cookbook for Every Time of the Year",
    publisher: "Michael Lim",
    category: "Cookbook",
    introduction:
      "Welcome to 'Seasonal Savors', your ultimate companion for year-round culinary adventures! This cookbook is crafted with love, featuring a medley of recipes that celebrate the unique flavors and ingredients each season has to offer. From the fresh blossoms of spring to the hearty harvest of autumn, we invite you to embark on a gastronomic journey through the year. Get ready to explore dishes that will not only nourish the body but also delight the senses.",
    main_content:
      "Our journey begins with the rejuvenating tastes of spring, introducing dishes like 'Spring Pea Risotto' and 'Lemon Herb Chicken'. As we bask in the summer sun, we'll dive into refreshing 'Watermelon Gazpacho' and 'Grilled Peach Salad'. The crisp air of fall calls for 'Pumpkin Spice Soup' and 'Roasted Root Vegetables', while winter comforts with 'Hearty Beef Stew' and 'Decadent Chocolate Peppermint Cake'. Each recipe is accompanied by tips on sourcing the best seasonal produce and pairing your meals with appropriate wines and beverages.",
    conclusion:
      "As the year closes, we hope 'Seasonal Savors' has inspired you to embrace the beauty of seasonal cooking. The recipes provided are more than just instructions; they are a canvas for creativity and a chance to forge memorable moments with loved ones. So, cherish the flavors each season brings and let your kitchen be a place of discovery all year long.",

    image_url:
      "https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_1280.jpg",
    image_title: "Recipe Book",
    date_published: "2021-10-01",
    ratings: 4,
    reviews: 10,
    isActive: true,
  },
  {
    id: "2163969761",
    blogTitle: "Savor the Flavor: A Guide to World Cuisines",
    publisher: "Michael Lim",
    category: "Cookbook",
    introduction:
      "Explore the rich tapestry of global flavors with our latest cookbook release.",
    main_content:
      "Our cookbook offers a journey through the world's kitchens, with easy-to-follow recipes.",
    conclusion:
      "Bring the world to your table with dishes curated by renowned chefs.",
    image_url:
      "https://img.freepik.com/free-photo/special-dessert-cookbook-recipe-valentine-rsquo-s-edition_53876-97350.jpg?w=826&t=st=1702618495~exp=1702619095~hmac=aa4f3570b7822dcc93aa132ff6ba09298167def3a905fb3bca9119c16a6c379b",
    image_title: "Cookbook",
    date_published: "2023-03-25",
    ratings: 5,
    reviews: 89,
    isActive: true,
  },
  {
    id: "2217913265",
    blogTitle: "The Chef's Choice: Top Utensils for Your Kitchen",
    publisher: "Emily Clarke",
    category: "Kitchen Utensils",
    introduction:
      "Discover the essential utensils that every aspiring chef needs in their kitchen.",
    main_content:
      "From versatile knives to ergonomic pans, find out what tools are worth the investment.",
    conclusion:
      "Upgrade your cooking game with our selection of top-rated kitchen utensils.",
    image_url:
      "https://img.freepik.com/free-photo/top-view-wooden-sapoons-empty-plastic-coffee-pot-dark-surface_140725-94278.jpg?w=826&t=st=1702618440~exp=1702619040~hmac=765026606e4839d19a27e3edc0d34f9884e3d0bef24d8de1e5a5cc2e33888bb0",
    image_title: "Kitchen Utensils",
    date_published: "2023-05-16",
    ratings: 4,
    reviews: 78,
    isActive: true,
  },
  {
    id: "9876543210",
    blogTitle: "The Art of Baking: Pastries & Sweets",
    publisher: "Sophia Taylor",
    category: "Cookbook",
    introduction:
      "Dive into the world of baking with our guide 'The Art of Baking: Pastries & Sweets'. This cookbook is a treasure trove of confectionery techniques, from flaky pastries to luscious tarts.",
    main_content:
      "Master the art of delicate pastries, perfect your pie crusts, and decorate cakes like a pro. Each section provides step-by-step instructions for classic and contemporary sweet treats.",
    conclusion:
      "Our pastry cookbook is more than a collection of recipes; it's a passport to creating delightful memories. Turn your kitchen into a bakery and indulge in the art of sweets.",
    image_url:
      "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
    image_title: "Baking Cookbook",
    date_published: "2022-05-15",
    ratings: 5,
    reviews: 45,
    isActive: true,
  },
  {
    id: "1928374650",
    blogTitle: "Essential Tools for the Modern Chef",
    publisher: "Lucas Brown",
    category: "Kitchen Utensils",
    introduction:
      "Our 'Essential Tools for the Modern Chef' guide is the definitive resource for equipping your culinary workspace with the best kitchen gadgets and utensils.",
    main_content:
      "Explore our top picks for innovative kitchen gadgets that streamline your cooking process, from smart thermometers to multipurpose blenders.",
    conclusion:
      "With the right tools, cooking becomes an experience of precision and pleasure. Elevate your culinary creations with our recommended kitchen essentials.",
    image_url:
      "https://img.freepik.com/free-photo/top-view-ice-cream-tools-concept_23-2148425369.jpg?w=826&t=st=1702639149~exp=1702639749~hmac=90330eb53a1f60067db8b4b6d0a313f1d29143679940cb3456ccdcdc52b65b28",
    image_title: "Chef's Tools",
    date_published: "2022-08-23",
    ratings: 4.5,
    reviews: 38,
    isActive: true,
  },
  {
    id: "5647382910",
    blogTitle: "Fermentation: Flavors from Around the World",
    publisher: "Emma Johnson",
    category: "Miscellaneous",
    introduction:
      "Discover the ancient art of fermentation and how it's used to create a world of flavors in 'Fermentation: Flavors from Around the World'.",
    main_content:
      "Learn to ferment your own vegetables, brew kombucha, and make kimchi at home. We cover the basics of safe fermentation and exciting recipes to try.",
    conclusion:
      "Fermentation isn't just a cooking technique; it's a way to connect with cultures globally. Join us on a flavorful journey with our fermentation guide.",
    image_url:
      "https://img.freepik.com/free-photo/cabbage-kimchi-tomatoes-marinated-sauerkraut-sour-glass-jars-rustic-kitchen-table_2829-18677.jpg?w=826&t=st=1702631033~exp=1702631633~hmac=347ea662378262186bcf6bffb55b90345769324938b0eecaa8b21e6d661d548c",
    image_title: "Fermented Foods",
    date_published: "2023-01-10",
    ratings: 4.7,
    reviews: 52,
    isActive: true,
  },
  {
    id: "3485723894",
    blogTitle: "Precision Baking: Digital Scales for Perfect Pastries",
    publisher: "Elena Torres",
    category: "Kitchen Utensils",
    introduction:
      "Precision is key in baking. 'Precision Baking: Digital Scales for Perfect Pastries' introduces the most accurate kitchen scales that ensure your ingredients are measured perfectly every time.",
    main_content:
      "Find out why professional bakers swear by these digital scales, with features like precision taring, unit conversion, and easy-to-clean surfaces. We'll guide you through the selection process so you can choose the scale that fits your baking style.",
    conclusion:
      "Upgrade your baking toolkit with our recommended digital scales and make inconsistency in your baking recipes a thing of the past. It's time to achieve perfection in every batch!",
    image_url:
      "https://img.freepik.com/free-photo/female-food-blogger-streaming-with-tablet-home-while-cooking_23-2148771605.jpg?w=826&t=st=1702632184~exp=1702632784~hmac=f73177c3d549ceaaa48125802848f97d21fc5979dd4f3d15714e8a7b644015e9",
    image_title: "Digital Baking Scale",
    date_published: "2023-11-05",
    ratings: 4.7,
    reviews: 25,
    isActive: true,
  },
  {
    id: "4598762345",
    blogTitle: "Culinary Classics: Timeless Recipes for Modern Cooks",
    publisher: "Raj Patel",
    category: "Cookbook",
    introduction:
      "Rediscover the art of classic cooking with 'Culinary Classics: Timeless Recipes for Modern Cooks'. This cookbook is your gateway to the world's most beloved dishes, adapted for today's health-conscious and time-strapped cooks.",
    main_content:
      "Featuring over 200 recipes, our book takes you on a culinary journey from rustic Italian pastas to sumptuous French desserts, each with step-by-step instructions and tips for modern substitutions without losing the traditional essence.",
    conclusion:
      "'Culinary Classics' isn't just a cookbook; it's a bridge between the old and new, offering dishes that are sure to become a staple in your kitchen. Cook your way through history with our timeless collection.",
    image_url:
      "https://img.freepik.com/free-vector/hand-drawn-flat-design-recipe-book_23-2149297239.jpg?w=996&t=st=1702632250~exp=1702632850~hmac=1e9fb8fd126cceb88390be7e24f9b999d8320552455bf801da4c0b3a82198862",
    image_title: "Classic Cookbook",
    date_published: "2023-07-19",
    ratings: 5.0,
    reviews: 47,
    isActive: true,
  },
  {
    id: "5789328472",
    blogTitle: "Eco-Friendly Eating: Sustainable Kitchen Accessories",
    publisher: "Maya Dubois",
    category: "Miscellaneous",
    introduction:
      "Join the movement towards a greener planet with 'Eco-Friendly Eating: Sustainable Kitchen Accessories'. Our guide showcases the best in eco-conscious kitchenware, from bamboo cutting boards to biodegradable sponges.",
    main_content:
      "Learn how switching to sustainable accessories can not only help the environment but also bring a fresh look to your kitchen. We'll cover the benefits of each product and how to make responsible choices that align with your eco-friendly lifestyle.",
    conclusion:
      "Make a positive impact with every meal prepared. 'Eco-Friendly Eating' is more than a guide—it's a commitment to conscious living and sustainable choices in the heart of your home.",
    image_url:
      "https://img.freepik.com/free-photo/supplies-composition-with-blue-background_23-2149491454.jpg?size=626&ext=jpg&ga=GA1.2.1875319134.1702524039&semt=ais",
    image_title: "Sustainable Kitchenware",
    date_published: "2023-09-30",
    ratings: 4.8,
    reviews: 33,
    isActive: true,
  },
];

const BusinessBlogPostsPageForUser = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // this function is to view particular blog post
  const handleViewBlogPost = (blogPostTitle) => {
    // Make sure the blogPostTitle
    console.log(`Blog Title: ${blogPostTitle}`);

    // Redirect to the correct route
    let routePath = `/registeredUser/businessBlogPost/viewBusinessBlogPost/${blogPostTitle}`;

    router.push(routePath);
  };

  // Filter the active blog posts
  const activeBlogPosts = AllBusinessBlogPosts.filter((post) => post.isActive);

  return (
    <div className="bg-white p-10">
      <h1 className="text-3xl font-bold font-mono text-cyan-800 mb-6">
        Business Blog Posts
      </h1>
      <div className="mb-5 space-x-5 ">
        <input
          type="text"
          value={searchQuery}
          // onChange={handleSearchChange}
          placeholder="Search blog posts..."
          className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        />
        <select
          value={categoryFilter}
          // onChange={handleCategoryChange}
          className="border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none"
        >
          <option value="">All Categories</option>
          <option value="Kitchen Utensils">Kitchen Utensils</option>
          <option value="Cookbook">Cookbook</option>
          <option value="Miscellaneous">Miscellaneous</option>
        </select>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {activeBlogPosts.map((post) => (
          <div
            key={post.id}
            className="rounded shadow-lg overflow-hidden"
            style={{
              border: "0.5px solid transparent",
              background:
                "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
              backgroundOrigin: "border-box",
              backgroundClip: "content-box, border-box",
            }}
          >
            <div className="p-1.5 flex flex-col h-full">
              <img
                src={post.image_url}
                alt={post.image_title}
                className="w-full object-cover rounded-sm"
                style={{ height: "192px" }} // Use inline style to set a fixed height for the image
              />
              <div className="p-4 flex-grow bg-white">
                <h2 className="text-xl font-bold mb-2">{post.blogTitle}</h2>
                <p
                  className="text-gray-700 text-base mb-4 line-clamp-3"
                  style={{ height: "4.5rem" }}
                >
                  {post.introduction}
                </p>
                {/* <Link
                  href={`/registeredUser/businessBlogPost/viewBusinessBlogPost/${blogPostTitle}`}
                >
                  Read me
                </Link> */}
                <button
                  onClick={() => handleViewBlogPost(post.blogTitle)}
                  className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black
                    focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5
                    mr-7 text-center"
                >
                  {" "}
                  Read more
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessBlogPostsPageForUser;
