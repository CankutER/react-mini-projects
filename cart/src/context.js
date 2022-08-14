import React, { useState, useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();
const initialState = {
  cartList: [],
  isLoading: true,
};
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const getItems = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Could not load the items in cart");
      }
      const items = await response.json();
      return items;
    } catch (e) {
      throw new Error("Could not connect to the source");
    }
  };
  useEffect(() => {
    const fetchItems = async () => {
      const items = await getItems(url);
      dispatch({ type: "FETCH", payload: items });
    };
    fetchItems();
  }, []);
  const updateList = (list) => {
    dispatch({ type: "UPDATE_LIST", payload: list });
  };
  return (
    <AppContext.Provider value={{ state, updateList }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
