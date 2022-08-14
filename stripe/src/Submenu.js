import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    closeSubmenu,
    submenuContent,
    subGrid,
    subPos,
    openSubmenu,
  } = useGlobalContext();

  const submenuRef = useRef();
  useEffect(() => {
    submenuRef.current.addEventListener("mouseover", (e) => {
      e.stopPropagation();
      openSubmenu();
    });
    window.addEventListener("mouseover", () => {
      closeSubmenu();
    });
    return () => {
      window.removeEventListener("mouseover", () => {
        closeSubmenu();
      });
      submenuRef.current.removeEventListener("mouseover", (e) => {
        e.stopPropagation();
        openSubmenu();
      });
    };
  });
  return (
    <aside
      ref={submenuRef}
      className={"submenu" + (isSubmenuOpen ? " show" : "")}
      style={{ left: `${subPos}px` }}
    >
      <section>
        <h4>{submenuContent.page}</h4>
        <div
          className={"submenu-center" + (subGrid > 1 ? ` col-${subGrid}` : "")}
        >
          {submenuContent.links.map((item, i) => {
            return (
              <a href={item.url} key={i}>
                {item.icon}
                {item.label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
