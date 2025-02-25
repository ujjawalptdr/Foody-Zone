// SearchContext.js
import React, { createContext, useState } from "react";

// Create the context
export const SearchContext = createContext();

// Create a provider component
export const SearchProvider = ({ children }) => {
  const [searchValue, setSearchValue] = useState(undefined);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};
