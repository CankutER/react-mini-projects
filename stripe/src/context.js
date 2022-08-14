import React, { useState, useContext } from "react";
import sublinks from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [isSubmenuOpen, setSubmenu] = useState(false);
  const [submenuContent, setSubmenuContent] = useState(sublinks[0]);
  const [subGrid, setSubGrid] = useState(1);
  const [subPos, setSubPos] = useState("50%");
  const openSubmenu = () => {
    setSubmenu(true);
  };
  const closeSubmenu = () => {
    setSubmenu(false);
  };
  const openSidebar = () => {
    setSidebar(true);
  };
  const closeSidebar = () => {
    setSidebar(false);
  };
  const setContent = (item) => {
    setSubmenuContent(item);
  };
  const setGrid = (num) => {
    setSubGrid(num);
  };
  const setPos = (pos) => {
    setSubPos(pos);
  };
  return (
    <AppContext.Provider
      value={{
        sublinks,
        isSidebarOpen,
        isSubmenuOpen,
        openSidebar,
        closeSidebar,
        openSubmenu,
        closeSubmenu,
        setContent,
        submenuContent,
        setGrid,
        subGrid,
        setPos,
        subPos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
