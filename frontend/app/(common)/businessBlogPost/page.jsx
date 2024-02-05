// "use client";
// import { useRouter } from "next/navigation";
// import React from "react";
// import { useState, useEffect } from "react";
// import HomeNavbar from "@/app/components/navigation/homeNavBar";
// import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
// import SearchIcon from "@mui/icons-material/Search";

// // rouuter path: /businessBlogPost

// // Sorting options
// const sortOptions = {
//   LATEST: { key: "LATEST", label: "By Latest" },
//   OLDEST: { key: "OLDEST", label: "By Oldest" },
//   HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
//   ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
//   ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
// };

// // Fetch all blog posts
// const fetchBlogPosts = async () => {
//   try {
//     console.log("Fetching blog posts...");
//     const response = await axiosInterceptorInstance.get("/blog/get");
//     console.log("All blogs:", response.data);
//     const filteredData = response.data.filter((post) => post.active === true);
//     return filteredData;
//   } catch (error) {
//     console.error("Failed to fetch blog posts:", error);
//     throw error;
//   }
// };

// const fetchBlogAverage = async (blogId) => {
//   try {
//     const response = await axiosInterceptorInstance.get(
//       `/blog/getAverage/${blogId}`
//     );
//     console.log("Average rating for blog post", blogId, "is:", response.data);
//     return response.data; // Assuming this returns the average data for the blog
//   } catch (error) {
//     console.error(`Failed to fetch average for blog post ${blogId}:`, error);
//     return null; // or handle the error as you see fit
//   }
// };

// const BusinessBlogPostsPage = () => {
//   const router = useRouter();
//   const [categoryFilter, setCategoryFilter] = useState("");
//   const [AllBusinessBlogPosts, setAllBusinessBlogPosts] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [sortOption, setSortOption] = useState("");
//   const [isSearchEmpty, setIsSearchEmpty] = useState(false);
//   const [searchPerformed, setSearchPerformed] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [displayedBlogPosts, setDisplayedBlogPosts] = useState([]);
//   const [resultsCount, setResultsCount] = useState(0);
//   // Additional state to track if search button has been clicked
//   const [searchButtonClicked, setSearchButtonClicked] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true); // Start loading

//     const getData = async () => {
//       const fetchedBlog = await fetchBlogPosts();
//       const blogsWithAverage = await Promise.all(
//         fetchedBlog.map(async (blog) => {
//           const average = await fetchBlogAverage(blog.id);
//           return { ...blog, average };
//         })
//       );
//       console.log("Blog with average:", blogsWithAverage);
//       setAllBusinessBlogPosts(blogsWithAverage);
//       setDisplayedBlogPosts(blogsWithAverage);
//     };

//     const fetchCategories = async () => {
//       try {
//         const response = await axiosInterceptorInstance.get(
//           "category/getAllBlogPostCategories"
//         );
//         setCategories(response.data);
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     Promise.all([getData(), fetchCategories()])
//       .catch((error) => {
//         console.error("Error in fetchData or fetchCategories:", error);
//       })
//       .finally(() => {
//         setIsLoading(false); // End loading after both operations are complete
//       });
//   }, []);

//   // Filter blog posts based on search term and category filter
//   useEffect(() => {
//     console.log("All in one useEffect triggered");
//     let filteredPosts = AllBusinessBlogPosts;

//     if (categoryFilter) {
//       filteredPosts = filteredPosts.filter(
//         (post) => post.blogType.subcategoryName === categoryFilter
//       );
//     }

//     if (searchTerm.trim()) {
//     } else {
//       setSearchPerformed(false);
//     }

//     let sortedPosts = [...filteredPosts];
//     // Sorting
//     switch (sortOption) {
//       case "LATEST":
//         sortedPosts.sort(
//           (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
//         );
//         break;
//       case "OLDEST":
//         sortedPosts.sort(
//           (a, b) => new Date(a.createdDateTime) - new Date(b.createdDateTime)
//         );
//         break;
//       case "ALPHABETICAL_AZ":
//         sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
//         break;
//       case "ALPHABETICAL_ZA":
//         sortedPosts.sort((a, b) => b.title.localeCompare(a.title));
//         break;
//       case "HIGHEST_RATINGS":
//         sortedPosts.sort((a, b) => {
//           const ratingDiff =
//             (b.average?.averageRatings || 0) - (a.average?.averageRatings || 0);
//           if (ratingDiff !== 0) return ratingDiff;
//           return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
//         });
//         break;
//     }

//     console.log("Filtered posts:", filteredPosts);

//     setDisplayedBlogPosts(sortedPosts);
//     setIsSearchEmpty(sortedPosts.length === 0);

//     // Reset searchButtonClicked when searchTerm changes
//     setSearchButtonClicked(false);

//     console.log("Displayed blog posts:", displayedBlogPosts);
//   }, [searchTerm, categoryFilter, AllBusinessBlogPosts, sortOption]);

//   const handleSearchClick = async () => {
//     console.log("Search button clicked");
//     setSearchButtonClicked(true); // Set flag when search is performed
//     setIsSearchEmpty(false);
//     setSearchPerformed(true);

//     if (!searchTerm.trim()) {
//       const filteredPosts = categoryFilter
//         ? AllBusinessBlogPosts.filter(
//             (post) => post.blogType.subcategoryName === categoryFilter
//           )
//         : AllBusinessBlogPosts;

//       // Sort the results
//       let sortedResults = [...filteredPosts];
//       switch (sortOption) {
//         case "LATEST":
//           sortedResults.sort(
//             (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
//           );
//           break;
//         case "OLDEST":
//           sortedResults.sort(
//             (a, b) => new Date(a.createdDateTime) - new Date(b.createdDateTime)
//           );
//           break;
//         case "ALPHABETICAL_AZ":
//           sortedResults.sort((a, b) => a.title.localeCompare(b.title));
//           break;
//         case "ALPHABETICAL_ZA":
//           sortedResults.sort((a, b) => b.title.localeCompare(a.title));
//           break;
//         case "HIGHEST_RATINGS":
//           sortedResults.sort((a, b) => {
//             const ratingDiff =
//               (b.average?.averageRatings || 0) -
//               (a.average?.averageRatings || 0);
//             if (ratingDiff !== 0) return ratingDiff;
//             return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
//           });
//           break;
//       }

//       setDisplayedBlogPosts(sortedResults);
//       setResultsCount(sortedResults.length);
//       setIsSearchEmpty(false);
//       setSearchPerformed(false);

//       console.log("Displayed blog posts after click:", displayedBlogPosts);
//     } else {
//       // Search for blog posts
//       try {
//         const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+");
//         const response = await axiosInterceptorInstance.get(
//           `/blog/find?keyword=${formattedSearchTerm}`
//         );
//         let filteredResults = response.data.filter(
//           (post) => post.active === true
//         );

//         // Fetch average ratings for each blog post
//         let filteredResultsWithAverage = await Promise.all(
//           filteredResults.map(async (post) => {
//             const average = await fetchBlogAverage(post.id);
//             return { ...post, average }; // Augment each blog post with its average
//           })
//         );

//         if (categoryFilter) {
//           filteredResultsWithAverage = filteredResultsWithAverage.filter(
//             (post) => post.blogType.subcategoryName === categoryFilter
//           );
//         }

//         // Sort the results
//         let sortedResults = [...filteredResultsWithAverage];
//         switch (sortOption) {
//           case "LATEST":
//             sortedResults.sort(
//               (a, b) =>
//                 new Date(b.createdDateTime) - new Date(a.createdDateTime)
//             );
//             break;
//           case "OLDEST":
//             sortedResults.sort(
//               (a, b) =>
//                 new Date(a.createdDateTime) - new Date(b.createdDateTime)
//             );
//             break;
//           case "ALPHABETICAL_AZ":
//             sortedResults.sort((a, b) => a.title.localeCompare(b.title));
//             break;
//           case "ALPHABETICAL_ZA":
//             sortedResults.sort((a, b) => b.title.localeCompare(a.title));
//             break;
//           case "HIGHEST_RATINGS":
//             sortedResults.sort((a, b) => {
//               const ratingDiff =
//                 (b.average?.averageRatings || 0) -
//                 (a.average?.averageRatings || 0);
//               if (ratingDiff !== 0) return ratingDiff;
//               return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
//             });
//             break;
//         }

//         console.log("Sorted results:", sortedResults);

//         if (sortedResults.length > 0) {
//           setDisplayedBlogPosts(sortedResults);
//           setResultsCount(sortedResults.length);
//           setIsSearchEmpty(false);
//         } else {
//           setIsSearchEmpty(true);
//           setDisplayedBlogPosts([]);
//           setResultsCount(0);
//         }
//         setSearchPerformed(true);
//       } catch (error) {
//         console.error("Error searching blog posts:", error);
//       }
//     }
//   };

//   const handleViewBlogPost = (id) => {
//     console.log(`Blog Title: ${id}`);
//     let routePath = `/businessBlogPost/viewBusinessBlogPost/${id}`;
//     router.push(routePath);
//   };

//   // Render each blog post card
//   const renderPostCard = (post) => (
//     <div
//       key={post.id}
//       className="rounded-lg shadow-lg overflow-hidden flex flex-col"
//       style={{
//         border: "0.5px solid transparent",
//         background:
//           "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
//         backgroundOrigin: "border-box",
//         backgroundClip: "content-box, border-box",
//       }}
//     >
//       <img
//         src={post.img}
//         alt="Designed by Freepik"
//         className="w-full object-cover rounded-sm"
//         style={{ height: "192px" }}
//       />
//       <div className="flex-grow flex flex-col justify-between p-4 bg-white">
//         <div>
//           <h2
//             className="text-2xl font-extrabold mb-2 hover:text-orange-600 cursor-pointer"
//             onClick={() => handleViewBlogPost(post.id)}
//           >
//             {post.title}
//           </h2>
//           <div
//             className="text-gray-700 text-base mb-4 line-clamp-3"
//             style={{ height: "4.5rem" }}
//           >
//             <div className="whitespace-pre-line">{post.info}</div>
//           </div>
//           {/* <div className="flex justify-between items-center">
//             <div className="flex items-center text-red-700 font-semibold text-xl">
//               {post.createdDateTime}
//             </div>
//           </div> */}
//         </div>
//         {/* <div className="flex justify-between items-center">
//           <div className="flex items-center text-red-700 font-semibold text-xl">
//             {post.blogType.subcategoryName}
//           </div>
//         </div> */}
//         {/* <button
//           onClick={() => handleViewBlogPost(post.id)}
//           className="text-white font-bold bg-gradient-to-br from-cyan-400 to-cyan-800 hover:bg-blue-950 border-2 border-black focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 rounded-lg text-sm mt-3 px-4 py-2 text-center"
//         >
//           Read more
//         </button> */}
//       </div>
//     </div>
//   );

//   // Get the latest 3 posts
//   const latestPosts = [...AllBusinessBlogPosts]
//     .sort((a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime))
//     .slice(0, 3);

//   // Get the other posts that are not the latest 3
//   const otherBusinessBlogPosts = AllBusinessBlogPosts.filter(
//     (post) => !latestPosts.find((latestPost) => latestPost.id === post.id)
//   );

//   return (
//     <div>
//       <HomeNavbar />
//       <div className="p-4 md:p-10">
//         <h1 className="text-3xl text-center md:text-7xl font-extrabold font-sans text-gray-900 mb-4 md:mb-8">
//           Blog Posts
//         </h1>
//         <div className="flex sm:justify-between sm:items-center mb-4">
//           {/* Search Section */}
//           <div className="flex-grow">
//             <input
//               type="text"
//               id="mealPlanSearch"
//               name="mealPlanSearch"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   handleSearchClick();
//                 }
//               }}
//               placeholder="Search by title..."
//               className="mr-2 p-2 rounded-lg border w-full md:w-auto"
//               style={{ flex: 1 }}
//             />
//             <button
//               onClick={handleSearchClick}
//               className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-5 rounded-full mt-2 w-full lg:w-auto"
//               style={{ flexShrink: 0 }}
//             >
//               Search
//             </button>
//             {/* Results count */}
//             {searchButtonClicked && searchPerformed && (
//               <p className="text-left text-red-500 font-bold text-lg sm:ml-2">
//                 {resultsCount} results found.
//               </p>
//             )}
//           </div>

//           {/* Sort dropdown */}
//           <div className="mb-2 md:mb-0 md:mr-6">
//             <label
//               htmlFor="sort"
//               className="text-xl text-black mb-2 sm:mb-0 sm:mr-2"
//             >
//               Sort By:
//             </label>
//             <select
//               id="sort"
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="mr-2 p-2 rounded-lg border w-full md:w-auto"
//               style={{ maxWidth: "300px" }}
//             >
//               {Object.values(sortOptions).map((option) => (
//                 <option key={option.key} value={option.key}>
//                   {option.label}
//                 </option>
//               ))}
//             </select>
//           </div>
//           {/* Filter Section - Adjusted to align to the right */}
//           <div className="flex flex-col sm:flex-row sm:items-center">
//             <label
//               htmlFor="categoryFilter"
//               className="text-xl text-black mb-2 sm:mb-0 sm:mr-2"
//             >
//               Filter By:
//             </label>
//             <div className="flex-grow-0">
//               <select
//                 id="categoryFilter"
//                 value={categoryFilter}
//                 onChange={(e) => setCategoryFilter(e.target.value)}
//                 className="mr-2 p-2 rounded-lg border w-full md:w-auto"
//                 style={{ maxWidth: "300px" }}
//               >
//                 <option value="">All Categories</option>
//                 {categories.map((category) => (
//                   <option key={category.id} value={category.subcategoryName}>
//                     {category.subcategoryName}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>
//         {/* Display the blog posts */}
//         {/* Display message while fetching data ftom backend */}
//         {isLoading ? (
//           <div className="text-xl text-center p-4">
//             <p>Please wait. It'll just take a moment.</p>
//           </div>
//         ) : (
//           <>
//             {!searchPerformed && !categoryFilter && !sortOption ? (
//               <>
//                 <div className="mb-5">
//                   <h2 className="text-2xl font-bold mb-4 mt-4">
//                     Latest Business Blog Post
//                   </h2>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
//                     {latestPosts.map((post) => renderPostCard(post))}
//                   </div>
//                 </div>
//                 <h2 className="text-2xl font-bold mb-4 mt-4">
//                   Other Business Blog Post
//                 </h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                   {otherBusinessBlogPosts.map((post) => renderPostCard(post))}
//                 </div>
//               </>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                 {displayedBlogPosts.map((post) => renderPostCard(post))}
//               </div>
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BusinessBlogPostsPage;

"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useState, useEffect } from "react";
import HomeNavbar from "@/app/components/navigation/homeNavBar";
import axiosInterceptorInstance from "../../axiosInterceptorInstance.js";
import SearchIcon from "@mui/icons-material/Search";
import { QueryClientProvider, useQuery } from "react-query"; // Added useQuery here
import { queryClient } from "../../queryClient.js"; // Adjust the path as necessary
// rouuter path: /businessBlogPost

// Sorting options
const sortOptions = {
  LATEST: { key: "LATEST", label: "By Latest" },
  OLDEST: { key: "OLDEST", label: "By Oldest" },
  HIGHEST_RATINGS: { key: "HIGHEST_RATINGS", label: "Highest Ratings" },
  ALPHABETICAL_AZ: { key: "ALPHABETICAL_AZ", label: "Alphabetically (A to Z)" },
  ALPHABETICAL_ZA: { key: "ALPHABETICAL_ZA", label: "Alphabetically (Z to A)" },
};

// Fetch all blog posts
const fetchBlogPosts = async () => {
  try {
    console.log("Fetching blog posts...");
    const response = await axiosInterceptorInstance.get("/blog/get");
    console.log("All blogs:", response.data);
    // Fetch average ratings for each blog post
    const blogsWithAverage = await Promise.all(
      response.data.map(async (blog) => {
        const average = await fetchBlogAverage(blog.id);
        return { ...blog, average };
      })
    );

    // Filter active blog posts
    const filteredData = blogsWithAverage.filter(
      (post) => post.active === true
    );

    return filteredData;
  } catch (error) {
    console.error("Failed to fetch blog posts:", error);
    throw error;
  }
};

const fetchBlogAverage = async (blogId) => {
  try {
    const response = await axiosInterceptorInstance.get(
      `/blog/getAverage/${blogId}`
    );
    console.log("Average rating for blog post", blogId, "is:", response.data);
    return response.data; // Assuming this returns the average data for the blog
  } catch (error) {
    console.error(`Failed to fetch average for blog post ${blogId}:`, error);
    return null; // or handle the error as you see fit
  }
};

const fetchCategories = async () => {
  try {
    const response = await axiosInterceptorInstance.get(
      "category/getAllBlogPostCategories"
    );
    return response.data; // Just return the data
  } catch (error) {
    throw new Error("Error fetching categories:", error);
  }
};

const BusinessBlogPostsPage = () => {
  const router = useRouter();
  const [categoryFilter, setCategoryFilter] = useState("");
  // const [AllBusinessBlogPosts, setAllBusinessBlogPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [isSearchEmpty, setIsSearchEmpty] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);
  // const [categories, setCategories] = useState([]);
  const [displayedBlogPosts, setDisplayedBlogPosts] = useState([]);
  const [resultsCount, setResultsCount] = useState(0);
  // Additional state to track if search button has been clicked
  const [searchButtonClicked, setSearchButtonClicked] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // Fetch blog posts
  const {
    data: AllBusinessBlogPosts,
    isLoading,
    isError,
  } = useQuery("businessBlogPosts", fetchBlogPosts);

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
  } = useQuery("blogCategories", fetchCategories);

  // Handle error state
  if (isError) {
    return <div>Error fetching data</div>;
  }

  useEffect(() => {
    console.log("All in one useEffect triggered");
    // Ensure AllBusinessBlogPosts is an array
    let allPosts = Array.isArray(AllBusinessBlogPosts)
      ? AllBusinessBlogPosts
      : [];

    // Filter blog posts
    let filteredPosts = allPosts;
    if (categoryFilter) {
      filteredPosts = allPosts.filter(
        (post) => post.blogType.subcategoryName === categoryFilter
      );
    }

    // Search term logic
    if (!searchTerm.trim()) {
      setSearchPerformed(false);
    } else {
      // Apply search logic here if needed
    }

    // Sorting logic
    let sortedPosts = [...filteredPosts];
    switch (sortOption) {
      case "LATEST":
        sortedPosts.sort(
          (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
        );
        break;
      case "OLDEST":
        sortedPosts.sort(
          (a, b) => new Date(a.createdDateTime) - new Date(b.createdDateTime)
        );
        break;
      case "ALPHABETICAL_AZ":
        sortedPosts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "ALPHABETICAL_ZA":
        sortedPosts.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "HIGHEST_RATINGS":
        sortedPosts.sort((a, b) => {
          const ratingDiff =
            (b.average?.averageRatings || 0) - (a.average?.averageRatings || 0);
          if (ratingDiff !== 0) return ratingDiff;
          return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
        });
        break;
    }

    console.log("Filtered posts:", filteredPosts);
    setDisplayedBlogPosts(sortedPosts);
    setIsSearchEmpty(sortedPosts.length === 0);
    // Reset searchButtonClicked when searchTerm changes
    setSearchButtonClicked(false);
  }, [searchTerm, categoryFilter, AllBusinessBlogPosts, sortOption]);

  const handleSearchClick = async () => {
    console.log("Search button clicked");
    setSearchButtonClicked(true); // Set flag when search is performed
    setIsSearchEmpty(false);
    setSearchPerformed(true);

    if (!searchTerm.trim()) {
      const filteredPosts = categoryFilter
        ? AllBusinessBlogPosts.filter(
            (post) => post.blogType.subcategoryName === categoryFilter
          )
        : AllBusinessBlogPosts;

      // Sort the results
      let sortedResults = [...filteredPosts];
      switch (sortOption) {
        case "LATEST":
          sortedResults.sort(
            (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
          );
          break;
        case "OLDEST":
          sortedResults.sort(
            (a, b) => new Date(a.createdDateTime) - new Date(b.createdDateTime)
          );
          break;
        case "ALPHABETICAL_AZ":
          sortedResults.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "ALPHABETICAL_ZA":
          sortedResults.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case "HIGHEST_RATINGS":
          sortedResults.sort((a, b) => {
            const ratingDiff =
              (b.average?.averageRatings || 0) -
              (a.average?.averageRatings || 0);
            if (ratingDiff !== 0) return ratingDiff;
            return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
          });
          break;
      }

      setDisplayedBlogPosts(sortedResults);
      setResultsCount(sortedResults.length);
      setIsSearchEmpty(false);
      setSearchPerformed(false);

      console.log("Displayed blog posts after click:", displayedBlogPosts);
    } else {
      // Search for blog posts
      try {
        const formattedSearchTerm = searchTerm.trim().replace(/\s+/g, "+");
        const response = await axiosInterceptorInstance.get(
          `/blog/find?keyword=${formattedSearchTerm}`
        );
        let filteredResults = response.data.filter(
          (post) => post.active === true
        );

        // Fetch average ratings for each blog post
        let filteredResultsWithAverage = await Promise.all(
          filteredResults.map(async (post) => {
            const average = await fetchBlogAverage(post.id);
            return { ...post, average }; // Augment each blog post with its average
          })
        );

        if (categoryFilter) {
          filteredResultsWithAverage = filteredResultsWithAverage.filter(
            (post) => post.blogType.subcategoryName === categoryFilter
          );
        }

        // Sort the results
        let sortedResults = [...filteredResultsWithAverage];
        switch (sortOption) {
          case "LATEST":
            sortedResults.sort(
              (a, b) =>
                new Date(b.createdDateTime) - new Date(a.createdDateTime)
            );
            break;
          case "OLDEST":
            sortedResults.sort(
              (a, b) =>
                new Date(a.createdDateTime) - new Date(b.createdDateTime)
            );
            break;
          case "ALPHABETICAL_AZ":
            sortedResults.sort((a, b) => a.title.localeCompare(b.title));
            break;
          case "ALPHABETICAL_ZA":
            sortedResults.sort((a, b) => b.title.localeCompare(a.title));
            break;
          case "HIGHEST_RATINGS":
            sortedResults.sort((a, b) => {
              const ratingDiff =
                (b.average?.averageRatings || 0) -
                (a.average?.averageRatings || 0);
              if (ratingDiff !== 0) return ratingDiff;
              return new Date(b.createdDateTime) - new Date(a.createdDateTime); // Latest date first if tie
            });
            break;
        }

        console.log("Sorted results:", sortedResults);

        if (sortedResults.length > 0) {
          setDisplayedBlogPosts(sortedResults);
          setResultsCount(sortedResults.length);
          setIsSearchEmpty(false);
        } else {
          setIsSearchEmpty(true);
          setDisplayedBlogPosts([]);
          setResultsCount(0);
        }
        setSearchPerformed(true);
      } catch (error) {
        console.error("Error searching blog posts:", error);
      }
    }
  };

  const handleViewBlogPost = (id) => {
    console.log(`Blog Title: ${id}`);
    let routePath = `/businessBlogPost/viewBusinessBlogPost/${id}`;
    router.push(routePath);
  };

  // Render each blog post card
  const renderPostCard = (post) => (
    <div
      key={post.id}
      className="rounded-lg shadow-lg overflow-hidden flex flex-col"
      style={{
        border: "0.5px solid transparent",
        background:
          "linear-gradient(to right, #22d3ee 0%, #8b5cf6 100%), white",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
    >
      <img
        src={post.img}
        alt="Designed by Freepik"
        className="w-full object-cover rounded-sm"
        style={{ height: "192px" }}
      />
      <div className="flex-grow flex flex-col justify-between p-4 bg-white">
        <div>
          <h2
            className="text-2xl font-extrabold mb-2 hover:text-orange-600 cursor-pointer"
            onClick={() => handleViewBlogPost(post.id)}
          >
            {post.title}
          </h2>
          <p className="text-gray-700 text-base mb-4 line-clamp-3">
            <div className="whitespace-pre-line">{post.info}</div>
          </p>
          {/* Publisher */}
          <p
            className="text-gray-900 text-base font-semibold"
            style={{ height: "3.5rem" }}
          >
            Publisher:{" "}
            <span className="text-orange-600 font-bold tracking-tight">
              {post?.publisher || "Not Specified"}
            </span>
          </p>

          {/* <div className="flex justify-between items-center">
              <div className="flex items-center text-red-700 font-semibold text-xl">
                {post.blogType.subcategoryName}
              </div>
            </div> */}
        </div>
      </div>
    </div>
  );

  // Ensure AllBusinessBlogPosts is an array or default to empty array
  const iterableBlogPosts = Array.isArray(AllBusinessBlogPosts)
    ? AllBusinessBlogPosts
    : [];

  // Ensure iterable data for latest and other blog posts
  const latestPosts = Array.isArray(iterableBlogPosts)
    ? [...iterableBlogPosts]
        .sort(
          (a, b) => new Date(b.createdDateTime) - new Date(a.createdDateTime)
        )
        .slice(0, 3)
    : [];

  const otherBusinessBlogPosts = Array.isArray(iterableBlogPosts)
    ? iterableBlogPosts.filter(
        (post) => !latestPosts.find((latestPost) => latestPost.id === post.id)
      )
    : [];

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <HomeNavbar />
        <div className="p-4 md:p-10">
          <h1 className="text-3xl text-center md:text-7xl font-extrabold font-sans text-gray-900 mb-4 md:mb-8">
            Blog Posts
          </h1>
          <div className="flex sm:justify-between sm:items-center mb-4">
            {/* Search Section */}
            <div className="flex-grow">
              <input
                type="text"
                id="mealPlanSearch"
                name="mealPlanSearch"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSearchClick();
                  }
                }}
                placeholder="Search by title..."
                className="mr-2 p-2 rounded-lg border w-full md:w-auto"
                style={{ flex: 1 }}
              />
              <button
                onClick={handleSearchClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1.5 px-5 rounded-full mt-2 w-full lg:w-auto"
                style={{ flexShrink: 0 }}
              >
                Search
              </button>
              {/* Results count */}
              {searchButtonClicked && searchPerformed && (
                <p className="text-left text-red-500 font-bold text-lg sm:ml-2">
                  {resultsCount} results found.
                </p>
              )}
            </div>

            {/* Sort dropdown */}
            <div className="mb-2 md:mb-0 md:mr-6">
              <label
                htmlFor="sort"
                className="text-xl text-black mb-2 sm:mb-0 sm:mr-2"
              >
                Sort By:
              </label>
              <select
                id="sort"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="mr-2 p-2 rounded-lg border w-full md:w-auto"
                style={{ maxWidth: "300px" }}
              >
                {Object.values(sortOptions).map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            {/* Filter Section - Adjusted to align to the right */}
            <div className="flex flex-col sm:flex-row sm:items-center">
              <label
                htmlFor="categoryFilter"
                className="text-xl text-black mb-2 sm:mb-0 sm:mr-2"
              >
                Filter By:
              </label>
              <div className="flex-grow-0">
                <select
                  id="categoryFilter"
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value)}
                  className="mr-2 p-2 rounded-lg border w-full md:w-auto"
                  style={{ maxWidth: "300px" }}
                >
                  <option value="">All Categories</option>
                  {categories?.map((category) => (
                    <option key={category.id} value={category.subcategoryName}>
                      {category.subcategoryName}
                    </option>
                  )) || []}
                </select>
              </div>
            </div>
          </div>
          {/* Display the blog posts */}
          {/* Display message while fetching data ftom backend */}
          {isLoading ? (
            <div className="text-xl text-center p-4">
              <p>Please wait. It'll just take a moment.</p>
            </div>
          ) : (
            <>
              {!searchPerformed && !categoryFilter && !sortOption ? (
                <>
                  <div className="mb-5">
                    <h2 className="text-2xl font-bold mb-4 mt-4">
                      Latest Business Blog Post
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {latestPosts.map((post) => renderPostCard(post))}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-4 mt-4">
                    Other Business Blog Post
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {otherBusinessBlogPosts.map((post) => renderPostCard(post))}
                  </div>
                </>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {displayedBlogPosts.map((post) => renderPostCard(post))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </QueryClientProvider>
  );
};

const WrappedBusinessBlogPostsPage = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BusinessBlogPostsPage />
    </QueryClientProvider>
  );
};

export default WrappedBusinessBlogPostsPage;
