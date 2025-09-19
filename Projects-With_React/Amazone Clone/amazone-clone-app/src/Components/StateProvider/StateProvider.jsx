import React, { createContext, useContext, useReducer } from "react";

// PREPARES THE DATALAYER
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Push and pull information from the data layer
export const useStateValue = () => useContext(StateContext);
