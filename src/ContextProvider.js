import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const[location1,setlocation]=useState({
    location:''
  })

  return (
    <StateContext.Provider
      value={{
       location1, setlocation
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
