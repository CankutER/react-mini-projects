import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);
  const [currId, setCurrId] = useState(data[0].id);

  // THIS SOLUTION IS FOR RESTARTING THE TIMER AFTER MANUALLY USED NEXT/PREV

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrId(currId === data.length ? 1 : currId + 1);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [currId]);

  //

  // THIS SOLUTION IS FOR A TIMER INDEPENDENT FROM MANUALLY EXECUTED SLIDES

  // useEffect(() => {
  //   setInterval(() => {
  //     setCurrId((currId) => (currId === data.length ? 1 : currId + 1));
  //   }, 5000);
  // }, []);

  //
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className="section-center">
        {people.map((person) => {
          return (
            <article
              key={person.id}
              className={
                currId === person.id
                  ? "activeSlide"
                  : currId - 1 === person.id ||
                    (currId === 1 && person.id === people.length)
                  ? "lastSlide"
                  : currId + 1 === person.id ||
                    (currId === people.length && person.id === 1)
                  ? "nextSlide"
                  : null
              }
            >
              <img
                src={person.image}
                alt={person.name}
                className="person-img"
              />
              <h4>{person.name}</h4>
              <p className="title">{person.title}</p>
              <p className="text">{person.quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button
          className="prev"
          onClick={() => {
            setCurrId(currId === 1 ? people.length : currId - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setCurrId(currId === people.length ? 1 : currId + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
