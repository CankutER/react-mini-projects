import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import context from "./context";
const Home = () => {
  const mainContext = useContext(context);
  console.log(mainContext);
  return (
    <main>
      <button
        className="sidebar-toggle"
        onClick={() => {
          mainContext.toggleSidebar();
        }}
      >
        <FaBars />
      </button>
      <button
        className="btn"
        onClick={() => {
          mainContext.toggleModal();
        }}
      >
        show modal
      </button>
    </main>
  );
};

export default Home;
