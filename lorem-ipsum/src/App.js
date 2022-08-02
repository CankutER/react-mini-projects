import { logDOM } from "@testing-library/react";
import React, { useState } from "react";
import data from "./data";
function App() {
  const [amount, setAmount] = useState(0);
  const [textSource, setTextSource] = useState([]);

  const handleGenerate = (e) => {
    e.preventDefault();
    let paragraphs = [];
    for (let i = 0; i < amount; i++) {
      paragraphs.push(data[i % data.length]);
    }
    setTextSource(paragraphs);
    setAmount(0);
  };
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form action="" className="lorem-form">
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit" onClick={handleGenerate} className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {textSource.map((text, i) => {
          return <p key={i}>{text}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
