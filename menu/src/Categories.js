import React from "react";

const Categories = ({ categories, filterMenu }) => {
  return [
    <button
      onClick={() => filterMenu("all")}
      key="all"
      type="button"
      className="filter-btn"
    >
      all
    </button>,
  ].concat(
    categories.map((category, i) => {
      return (
        <button
          key={i}
          type="button"
          className="filter-btn"
          onClick={() => filterMenu(category)}
        >
          {category}
        </button>
      );
    })
  );
};

export default Categories;
