import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const MealCard = ({ item }) => {
  const [showRecipe, setShowRecipe] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white/10 lg:bg-white/15 backdrop-blur-none lg:backdrop-blur-sm rounded-xl shadow-lg m-4 p-4 relative overflow-hidden flex flex-col items-center"
    >
      {/* Meal Image */}
      <motion.img
        src={item.strMealThumb}
        alt={item.strMeal}
        className="w-3/3 md:w-full h-auto rounded-full shadow-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />

      {/* Meal Title */}
      <div className="px-4 py-3 text-center">
        <h1 className="text-2xl md:text-3xl font-bold">{item.strMeal}</h1>
      </div>

      {/* Recipe Section */}
      <div className="flex flex-col items-center">
        <AnimatePresence>
          {showRecipe && (
            <motion.pre
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-sm md:text-base text-gray-200 py-3 text-pretty mt-3 bg-black/20 p-3 rounded-md w-full max-h-60 overflow-y-auto"
            >
              {item.strInstructions}
            </motion.pre>
          )}
        </AnimatePresence>

        {/* Toggle Recipe Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowRecipe(!showRecipe)}
          className="mt-4 px-4 py-2 text-sm sm:text-base bg-gradient-to-r from-red-500 to-pink-800 hover:from-pink-800 hover:to-red-500 transition-all rounded-lg font-semibold shadow-md"
        >
          {showRecipe ? "Hide Recipe" : "Show Recipe"}
        </motion.button>
      </div>

      {/* YouTube Link - Positioned at the Bottom with Proper Spacing */}
      <div className="mt-5 w-full">
        <a
          href={item.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-start gap-2  text-red-600 hover:text-red-400 transition-all text-sm font-semibold"
        >
          <FaYoutube size={24} />
          Watch on YouTube
        </a>
      </div>
    </motion.div>
  );
};

export default MealCard;


