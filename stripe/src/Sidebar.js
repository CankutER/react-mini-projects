import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
import sublinks from "./data";

const Sidebar = () => {
  const { sublinks, isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div className={"sidebar-wrapper" + (isSidebarOpen ? " show" : "")}>
      <aside className="sidebar">
        <button
          className="close-btn"
          onClick={() => {
            closeSidebar();
          }}
        >
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((link, i) => {
            return (
              <article key={i}>
                <h4>{link.page}</h4>
                <div className="sidebar-sublinks">
                  {link.links.map((item, i) => {
                    return (
                      <a href={item.url} key={i}>
                        {item.icon}
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
