"use client";

import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

// Create a Provider Component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const updateUser = (userDetails) => {
    setUser(userDetails);
  };

  const clearUser = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
