import React from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import context from "./context";
import { useContext } from "react";

const Sidebar = () => {
  const mainContext = useContext(context);
  return (
    <aside
      className={"sidebar" + (mainContext.isSidebarOpen ? " show-sidebar" : "")}
    >
      <div className="sidebar-header">
        <img src={`${logo}`} alt="coding addict" />
        <button
          className="close-btn"
          onClick={() => {
            mainContext.toggleSidebar();
          }}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((icon) => {
          return (
            <li key={icon.id}>
              <a href={icon.url}>{icon.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
