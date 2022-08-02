import React, { useState } from "react";

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [toggle, setToggle] = useState({
    btn: "read more",
    text: info.slice(0, info.length / 2) + "...",
  });

  const toggleFunc = () => {
    if (toggle.btn === "read more") {
      setToggle({ btn: "show less", text: info });
    } else {
      setToggle({
        btn: "read more",
        text: info.slice(0, info.length / 2) + "...",
      });
    }
  };
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {toggle.text}
          <button onClick={toggleFunc}>{toggle.btn}</button>
        </p>
        <button
          className="delete-btn"
          onClick={() => {
            removeTour(id);
          }}
        >
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
