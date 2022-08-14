import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
  const { sublinks, openSidebar, openSubmenu, setContent, setGrid, setPos } =
    useGlobalContext();
  const findPos = (e) => {
    const pos = e.target.getBoundingClientRect();

    return pos.left + pos.width / 2;
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={`${logo}`} alt="" className="nav-logo" />
          <button
            className="btn toggle-btn"
            onClick={() => {
              openSidebar();
            }}
          >
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {sublinks.map((link, i) => {
            return (
              <li key={i}>
                <button
                  className="link-btn"
                  onMouseOver={(e) => {
                    e.stopPropagation();
                    openSubmenu();
                    setContent(link);
                    setGrid(link.links.length);
                    setPos(findPos(e));
                  }}
                >
                  {link.page}
                </button>
              </li>
            );
          })}
        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
