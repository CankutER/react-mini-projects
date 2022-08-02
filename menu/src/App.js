import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menu, setMenu] = useState(items);
  const uniqueCategories = items.reduce((acc, curr) => {
    if (!acc.includes(curr.category)) {
      acc.push(curr.category);
    }
    return acc;
  }, []);
  function filterMenu(category) {
    if (category !== "all") {
      const filteredMenu = items.filter((item) => item.category === category);
      setMenu(filteredMenu);
    } else {
      setMenu(items);
    }
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <Categories categories={uniqueCategories} filterMenu={filterMenu} />
        </div>
        <div className="section-center">
          <Menu menu={menu} />
        </div>
      </section>
    </main>
  );
}

export default App;
