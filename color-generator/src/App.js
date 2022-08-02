import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";
import { act } from "react-dom/test-utils";
import { useEffect } from "react";

function App() {
  const [mainColor, setMainColor] = useState("");
  const [isError, setIsError] = useState(false);
  const [palette, setPalette] = useState([]);
  const activeColor = new Values("#f15025");

  useEffect(() => {
    setPalette([
      ...activeColor.tints(10).reverse(),
      activeColor,
      ...activeColor.shades(10),
    ]);
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activeColor.setColor(mainColor)) {
      setMainColor("");
      setIsError(true);
    } else {
      activeColor.setColor(mainColor);
      setPalette([
        ...activeColor.tints(10).reverse(),
        activeColor,
        ...activeColor.shades(10),
      ]);
    }
  };
  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form>
          <input
            type="text"
            className={isError ? "error" : null}
            placeholder="#f15025"
            value={mainColor}
            onChange={(e) => setMainColor(e.target.value)}
          />
          <button type="submit" className="btn " onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {palette.map((color, index) => {
          return <SingleColor key={index} {...color} />;
        })}
      </section>
    </>
  );
}

export default App;
