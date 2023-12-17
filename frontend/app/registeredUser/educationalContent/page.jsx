"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";

// router path: /registeredUser/educationalContent

// Called the controller to get the list of all "ACTIVE" educational content
// this is the simple mock data for blog post but a educational content should have more attributes
const AllEducationalContent = [
  {
    id: "3456789012",
    blogTitle: "Living Well: Daily Practices for a Vibrant Life",
    publisher: "Jordan Smith",
    category: "Healthy Lifestyle",
    introduction:
      "Welcome to 'Living Well: Daily Practices for a Vibrant Life', a comprehensive guide to enhancing your daily routine for optimal health and happiness. This book is your ally in building a lifestyle that fosters physical, mental, and emotional well-being.",
    main_content:
      "Explore chapters like 'Morning Yoga Routines', 'Mindful Meditation Techniques', 'Balanced Diet Plans', and 'Effective Exercise Regimens'. Each section provides practical advice, easy-to-follow activities, and motivational insights to help you create a balanced and enriching lifestyle.",
    conclusion:
      "'Living Well' is more than a guide; it's a companion in your journey towards holistic well-being. By integrating these practices into your daily life, you'll discover a deeper sense of vitality, clarity, and joy. Embrace the path to a vibrant life, one day at a time.",
    image_url:
      "https://img.freepik.com/free-photo/close-up-kid-meditating-mat_23-2149101612.jpg?w=826&t=st=1702698008~exp=1702698608~hmac=3493459a84121109aad5dd0837dbd50ad85e685e28eb107942118ebb3c13189f",
    image_title: "Healthy Lifestyle",
    date_published: "2023-03-22",
    ratings: 4.7,
    reviews: 45,
    isActive: true,
  },
  {
    id: "1234567890",
    blogTitle: "Eating Right: A Journey Through Nutritious Foods",
    publisher: "Emily Robinson",
    category: "Healthy Eating",
    introduction:
      "Welcome to 'Eating Right: A Journey Through Nutritious Foods', where we delve into the world of healthy eating. This guide is designed to help you understand the importance of nutrition and make informed food choices.",
    main_content:
      "Covers topics like 'Understanding Food Labels', 'Benefits of Organic Produce', 'Plant-Based Diet Essentials', and 'Hydration and Health'. Filled with informative content, simple recipes, and healthy eating habits tips.",
    conclusion:
      "'Eating Right' is your guide to transforming your diet and embracing a healthier way of eating. It’s a tool for nourishing your body and mind with the right foods.",
    image_url:
      "https://img.freepik.com/free-photo/buddha-bowl-dish-with-vegetables-legumes-top-view_1150-42589.jpg?w=826&t=st=1702787109~exp=1702787709~hmac=73a45a1e35f274ca836fc803f6aa7a47776024868c99c455d67649ef44e4d9ef",
    image_title: "Healthy Eating",
    date_published: "2023-05-15",
    ratings: 4.8,
    reviews: 68,
    isActive: true,
  },
  {
    id: "2345678901",
    blogTitle: "The Art of Mindful Eating",
    publisher: "Lucas Nguyen",
    category: "Healthy Lifestyle",
    introduction:
      "Welcome to 'The Art of Mindful Eating', a guide to transforming your relationship with food through mindfulness and understanding of your body’s needs.",
    main_content:
      "Topics include 'Mindfulness Techniques for Eating', 'Understanding Hunger and Fullness Cues', 'Managing Emotional Eating', and 'Creating a Balanced Meal Plan'.",
    conclusion:
      "More than a dietary guide, it's a pathway to developing a deeper connection with food and yourself, encouraging a harmonious relationship with eating.",
    image_url:
      "https://img.freepik.com/free-photo/flat-lay-batch-cooking-composition_23-2148765597.jpg?w=826&t=st=1702787315~exp=1702787915~hmac=e63a3ab97681618a6ab4413af72a46ee7be44e6fe202b6bf636e471ec0faa50d",
    image_title: "Mindful Eating",
    date_published: "2023-06-10",
    ratings: 4.9,
    reviews: 52,
    isActive: true,
  },
  {
    id: "3456789012",
    blogTitle: "Fitness Fundamentals: Building a Strong Foundation",
    publisher: "Aisha Patel",
    category: "Healthy Lifestyle",
    introduction:
      "Welcome to 'Fitness Fundamentals: Building a Strong Foundation', a guide to starting and maintaining an effective fitness routine.",
    main_content:
      "Chapters like 'Starting Your Fitness Journey', 'Effective Home Workouts', 'Cardio for Heart Health', and 'Strength Training Basics'. Offers workout plans and motivational tips.",
    conclusion:
      "A journey of self-improvement and physical empowerment, a step towards a stronger, healthier you.",
    image_url:
      "https://img.freepik.com/free-photo/men-women-warm-up-before-after-exercising_1150-22999.jpg?w=360&t=st=1702787646~exp=1702788246~hmac=921ac1e84bbd1bd7069e942594077e59a33ff5622ceff66206c8b6743bd46f98",
    image_title: "Fitness Fundamentals",
    date_published: "2023-07-20",
    ratings: 4.6,
    reviews: 39,
    isActive: true,
  },
  {
    id: "4567890123",
    blogTitle: "Garden to Table: Fresh Cooking Made Simple",
    publisher: "Mia Chen",
    category: "Healthy Eating",
    introduction:
      "Discover the joy of cooking with fresh ingredients in 'Garden to Table: Fresh Cooking Made Simple'. This book brings the garden's bounty into your kitchen with easy, delicious recipes.",
    main_content:
      "Featuring sections like 'Herb Gardening Basics', 'Farm-Fresh Salads', 'Seasonal Soups', and 'Preserving Your Harvest'. Each chapter includes tips for growing and cooking with fresh produce.",
    conclusion:
      "Embark on a culinary adventure with 'Garden to Table', where you'll learn to appreciate the flavors of fresh, home-grown ingredients and transform them into delectable dishes.",
    image_url:
      "https://img.freepik.com/free-photo/top-view-cropped-man-cook-apron-mixing-salad_1098-20537.jpg?w=826&t=st=1702787895~exp=1702788495~hmac=a28f1b7dcacfef1befa5374171458e2aeea993a6b2545fae6c6d538ab7c2ebbf",
    image_title: "Garden Cooking",
    date_published: "2023-08-05",
    ratings: 4.7,
    reviews: 55,
    isActive: true,
  },
  {
    id: "5678901234",
    blogTitle: "Holistic Health: Integrating Body, Mind, and Spirit",
    publisher: "David Lee",
    category: "Healthy Lifestyle",
    introduction:
      "Explore the world of holistic wellness with 'Holistic Health: Integrating Body, Mind, and Spirit'. This guide offers a comprehensive approach to maintaining health in all aspects of life.",
    main_content:
      "Dive into topics like 'Yoga for Every Body', 'Mindfulness in Daily Life', 'Nutrition for the Soul', and 'Natural Remedies'. Each chapter provides insights into creating a balanced lifestyle.",
    conclusion:
      "With 'Holistic Health', gain the tools to nurture your body, calm your mind, and uplift your spirit, leading to a more fulfilling and balanced life.",
    image_url:
      "https://img.freepik.com/free-photo/woman-practicing-yoga-seashore_1098-1455.jpg?w=360&t=st=1702787979~exp=1702788579~hmac=a63360fd0a2da7d5034e3ab3ab830f591eb8f52d0f1ce898df7f332d9e63b9f7",
    image_title: "Holistic Wellness",
    date_published: "2023-09-10",
    ratings: 4.9,
    reviews: 60,
    isActive: true,
  },
  {
    id: "6789012345",
    blogTitle: "Sustainable Living: Eco-Friendly Habits for Everyday Life",
    publisher: "Sarah Johnson",
    category: "Healthy Lifestyle",
    introduction:
      "Join the movement towards a greener future with 'Sustainable Living: Eco-Friendly Habits for Everyday Life'. Learn how to make choices that benefit both your health and the environment.",
    main_content:
      "Includes chapters like 'Reducing Your Carbon Footprint', 'Eco-Friendly Home Solutions', 'Green Eating Habits', and 'Conserving Natural Resources'. Each section is filled with practical, actionable advice.",
    conclusion:
      "'Sustainable Living' is not just a guide, but a roadmap to making a positive impact on the planet while enhancing your own well-being. Step into a more sustainable, healthier lifestyle.",
    image_url:
      "https://img.freepik.com/free-photo/healthy-young-asian-runner-woman-warm-up-body-stretching-before-exercise_7861-1084.jpg?w=826&t=st=1702788336~exp=1702788936~hmac=e95ba7896d328bf54ed317f5f9527d11f0acf382f49f2374f9cd7b7463c1813e",
    image_title: "Sustainable Lifestyle",
    date_published: "2023-10-15",
    ratings: 4.8,
    reviews: 47,
    isActive: true,
  },
];

const EducationalContentPageForUser = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
  };

  const filteredBlogPosts = AllEducationalContent.filter(
    (post) =>
      post.isActive &&
      post.blogTitle.toLowerCase().includes(searchQuery) &&
      (categoryFilter ? post.category === categoryFilter : true)
  );

  // Latest posts
  const latestPosts = [...AllEducationalContent]
    .filter((post) => post.isActive)
    .sort((a, b) => new Date(b.date_published) - new Date(a.date_published))
    .slice(0, 3);

  // Top rated posts
  const topRatedPosts = [...AllEducationalContent]
    .filter((post) => post.isActive)
    .sort((a, b) => b.ratings - a.ratings || b.reviews - a.reviews)
    .slice(0, 3);

  // Other posts excluding latest and top rated
  const otherPosts = AllEducationalContent.filter(
    (post) =>
      post.isActive &&
      !latestPosts.some((latest) => latest.id === post.id) &&
      !topRatedPosts.some((top) => top.id === post.id)
  );

  // this function is to view particular educational content under registered user
  const handleViewEducationalContent = (blogPostTitle) => {
    // Make sure the blogPostTitle
    console.log(`Blog Title: ${blogPostTitle}`);

    // Redirect to the correct route
    let routePath = `/registeredUser/educationalContent/viewEducationalContent/${blogPostTitle}`;

    router.push(routePath);
  };

  // Filter the active blog posts
  const activeBlogPosts = AllEducationalContent.filter((post) => post.isActive);

  // Function to render a single post card
  const renderPostCard = (post) => (
    <div
      key={post.id}
      className="rounded shadow-lg overflow-hidden flex flex-col"
      style={{
        border: "0.5px solid transparent",
        background:
          "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
    >
      <img
        src={post.image_url}
        alt={post.image_title}
        className="w-full object-cover rounded-sm"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div>
          <h2 className="text-2xl font-extrabold mb-2">{post.blogTitle}</h2>
          <p
            className="text-gray-700 text-base mb-4 line-clamp-3"
            style={{ height: "4.5rem" }}
          >
            {post.introduction}
          </p>
        </div>
        <button
          onClick={() => handleViewEducationalContent(post.blogTitle)}
          className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
        >
          Read more
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-white p-4 md:p-10">
      <h1 className="text-2xl md:text-4xl font-extrabold font-mono text-cyan-800 mb-4 md:mb-8">
        Educational Content
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-5">
        <div className="flex flex-row md:flex-row border-2 border-gray-300 rounded-lg mb-4 md:mb-0">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search blog posts..."
            className="px-4 py-2 h-10 rounded-lg rounded-r-none text-base focus:outline-none"
          />
          <button
            // onClick={/* Function to handle search */}
            className="px-4 py-2 bg-cyan-600 text-white rounded-lg rounded-l-none hover:bg-cyan-700 focus:outline-none"
          >
            Search
          </button>
        </div>
        <select
          value={categoryFilter}
          onChange={handleCategoryChange}
          className="border-2 border-gray-300 bg-white h-10 px-4 md:px-5 rounded-lg text-base focus:outline-none"
        >
          <option value="">All Categories</option>
          <option value="Healthy_Eating">Healthy Eating</option>
          <option value="Healthy_Lifestyle">Healthy Lifestyle</option>
        </select>
      </div>
      {filteredBlogPosts.length === 0 && (
        <p className="text-center font-semibold text-xl md:text-2xl mb-4 text-red-500">
          No results found{searchQuery && ` for "${searchQuery}"`}.
        </p>
      )}
      {/* Latest Posts Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 mt-4">
          Latest Educational Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {latestPosts.map((post) => renderPostCard(post))}
        </div>
      </div>
      {/* end of latest */}

      {/* Post with most review Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 mt-4">
          Most Popular Educational Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topRatedPosts.map((post) => renderPostCard(post))}
        </div>
      </div>
      {/* end of most popular */}
      {/* Other Posts Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 mt-4">
          Other Educational Content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {otherPosts.map((post) => renderPostCard(post))}
        </div>
      </div>
      {/* end of other */}
    </div>
  );
};

export default EducationalContentPageForUser;

// <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-10">
//         {activeBlogPosts.map((post) => (
//           <div
//             key={post.id}
//             className="rounded shadow-lg overflow-hidden"
//             style={{
//               border: "0.5px solid transparent",
//               background:
//                 "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
//               backgroundOrigin: "border-box",
//               backgroundClip: "content-box, border-box",
//             }}
//           >
//             <div className="p-1.5 flex flex-col h-full">
//               <img
//                 src={post.image_url}
//                 alt={post.image_title}
//                 className="w-full object-cover rounded-sm"
//                 style={{ height: "192px" }} // Use inline style to set a fixed height for the image
//               />
//               <div className="p-4 flex-grow bg-white">
//                 <h2 className="text-2xl font-extrabold mb-2">
//                   {post.blogTitle}
//                 </h2>
//                 <p
//                   className="text-gray-700 text-base mb-4 line-clamp-3"
//                   style={{ height: "4.5rem" }}
//                 >
//                   {post.introduction}
//                 </p>
//                 <Link
//                   href={`/registeredUser/businessBlogPost/viewBusinessBlogPost/${blogPostTitle}`}
//                 >
//                   Read me
//                 </Link>
//                 <button
//                   onClick={() => handleViewEducationalContent(post.blogTitle)}
//                   className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black
//                     focus:ring-4 focus:outline-none focus:ring-blue-300
//                     dark:focus:ring-blue-800 rounded-lg text-base px-5 py-2.5
//                     mr-7 text-center"
//                 >
//                   {" "}
//                   Read more
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
