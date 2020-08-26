import React, { createContext, useContext, useReducer} from "react";

export const StateContext = createContext(); // this is the Data layer

export const StateProvider = ({ reducer, initialState, children }) => 
(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children} {/* children represents the <App /> in index.js */}
  </StateContext.Provider>
); // this is a high order component

export const useStateValue = () => useContext(StateContext); // this is a hook which 
// allow us to pull information from the data layer