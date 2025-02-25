import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import background from "../assets/bg.png";
import { SearchContext } from "./SearchContext";
import axios from "axios";
import MealCard from "./MealCard";
import notFound from "../assets/404NotFound.webp";

const Hero = () => {
  const { searchValue } = useContext(SearchContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`;

  useEffect(() => {
    axios
      .get(
        searchValue
          ? API_URL
          : "https://www.themealdb.com/api/json/v1/1/search.php?s="
      )
      .then((response) => {
        setLoading(false);
        const meals = response.data.meals;
        if (Array.isArray(meals)) {
          setData(meals);
        } else {
          setData([]);
        }
      })
      .catch(() => {
        setLoading(false);
        setData([]);
      });
  }, [searchValue]);

  return (
    <div
      className="flex justify-center overflow-hidden "
      style={{ height: "calc(100vh - 160px)" }}
    >
      <img
        src={background}
        alt="background"
        className="max-w-fit w-auto h-full fixed"
      />

      {loading ? (
        <div className="absolute min-h-screen flex justify-center items-center text-xl font-thin">
          Loading...
        </div>
      ) : data && data.length > 0 ? (
        <motion.div
          className="absolute z-[1] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-8 mt-40 max-w-screen-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {data.map((item, index) => (
            <motion.div
              key={item.idMeal}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
              viewport={{ once: true, amount: 0.05 }} // Appears much sooner
            >
              <MealCard item={item} />
            </motion.div>

          ))}
        </motion.div>
      ) : (
        <div className="absolute min-h-screen flex flex-col justify-center items-center text-xl font-thin">
          <img src={notFound} alt="Not Found" className="max-w-48 md:max-w-80" />
          <p>Recipe not available</p>
        </div>
      )}
    </div>
  );
};

export default Hero;



// import React, { useContext, useEffect, useState } from "react";
// import background from "../assets/bg.png";
// import { FaYoutube } from "react-icons/fa";
// import { SearchContext } from "./SearchContext";
// import axios from "axios";

// const Hero = () => {
//   const { searchValue, setSearchValue } = useContext(SearchContext);
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=3da7972510ad4b8fbb9f41da14971129&query=${searchValue}&maxFat=25&number=20`;

//   useEffect(() => {
//     axios
//       .get(API_URL)
//       .then((response) => {
//         console.log(response);
//         setLoading(false);
//         const meals = response.data.results;
//         if (Array.isArray(meals)) {
//           setData(meals); // Only set data if meals is a valid array
//         } else {
//           setData([]); // Fallback to empty array if meals is null or not an array
//         }

//         console.log(response.data.meals);
//       })
//       .catch((error) => {
//         setLoading(false);
//         setData([]);
//         console.log(error);
//       });
//   }, [searchValue]);

//   return (
//     <div
//       className=" flex justify-center overflow-hidden"
//       style={{ height: "calc(100vh - 160px)" }}
//     >
//       <img
//         src={background}
//         alt="background"
//         className="max-w-fit w-auto h-fit fixed"
//       />

//       {loading ? (
//         <div className="absolute min-h-screen flex justify-center items-center text-xl font-thin ">
//           Loading...
//         </div>
//       ) : data && data.length > 0 ? (
//         <div className="absolute z-[1] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-44 max-w-screen-xl">
//           {data.map((item, index) => (
//             <div
//               key={item.idMeal}
//               className="bg-white/10 lg:bg-white/15 backdrop-blur-none lg:backdrop-blur-sm rounded-lg shadow-lg m-4 px-2 py-2 relative"
//             >
//               <div className="flex justify-center items-center">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   className="w-3/4 md:w-full h-auto rounded-full"
//                 />
//               </div>
//               <div className="px-3 py-2 mt-4">
//                 <h1 className="text-xl  md:text-3xl font-bold text-center">
//                   {item.title}
//                 </h1>
//                 <p className="bg-red-500 ">
//                   {item.nutrition.nutrients.map((nutrient, index) => {
//                     <p>sdsdsd</p>;
//                   })}
//                 </p>

//                 <div className="absolute bottom-2">
//                   <a
//                     href={item.strYoutube}
//                     target="_blank"
//                     className="text-red-500 underline"
//                   >
//                     <FaYoutube size={20} />
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="absolute min-h-screen flex justify-center items-center text-xl font-thin ">
//           Meal not available
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;
