import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { IoSearch } from "react-icons/io5";
import foodyzonelogo from "../assets/Foody Zone.svg";
import { SearchContext } from "./SearchContext";

const NavBar = () => {
  const { setSearchValue } = useContext(SearchContext);
  const [currentValue, setCurrentValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const QuickSearch = ["Breakfast", "Chicken", "Cake", "Pasta"];

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setSearchValue(currentValue.trim());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-black to-themeGray w-full fixed z-10 shadow-md"
    >
      <div className="h-28 md:h-20 max-w-screen-xl m-auto flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-3 sm:gap-0">
        {/* Logo */}
        <motion.img
          src={foodyzonelogo}
          alt="Foody logo"
          className="h-9 mt-2 sm:mt-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        />

        {/* Search Bar */}
        <motion.form
          onSubmit={onSubmitHandler}
          className={`flex items-center border border-red-600 rounded-md px-3 py-1 transition-all ${isFocused ? "w-full sm:w-72" : "w-40 sm:w-60"
            }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <input
            type="text"
            value={currentValue}
            placeholder="Search Food..."
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(e) => setCurrentValue(e.target.value)}
            className="bg-transparent text-sm text-white focus:outline-none w-full transition-all duration-300"
          />
          <IoSearch
            size={20}
            className="cursor-pointer hover:scale-110 transition-transform duration-200"
            onClick={onSubmitHandler}
          />
        </motion.form>
      </div>

      {/* Quick Search */}
      <motion.div
        className="flex justify-center gap-3 sm:gap-4 pb-3 pt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        {QuickSearch.map((title, index) => (
          <motion.button
            key={index}
            onClick={() => setSearchValue(title)}
            whileHover={{ scale: 1.1 }}
            className="bg-red-600 text-white px-3 py-1 rounded-md text-xs sm:text-sm"
          >
            {title}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default NavBar;
