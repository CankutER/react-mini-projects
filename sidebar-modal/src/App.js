import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { useRef } from "react";
import context from "./context";
import { useState } from "react";

function App() {
  const [modalIsOpen, setModal] = useState(false);
  const [isSidebarOpen, setSidebar] = useState(false);
  const toggleModal = () => {
    setModal(!modalIsOpen);
  };
  const toggleSidebar = () => {
    setSidebar(!isSidebarOpen);
  };
  return (
    <context.Provider
      value={{ toggleModal, modalIsOpen, isSidebarOpen, toggleSidebar }}
    >
      <Home />
      <Modal />
      <Sidebar />
    </context.Provider>
  );
}

export default App;
