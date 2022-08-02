import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [personId, setPersonId] = useState(0);
  const increaseId = () => {
    if (personId === people.length - 1) {
      setPersonId(0);
    } else {
      setPersonId(personId + 1);
    }
  };
  const decreaseId = () => {
    if (personId === 0) {
      setPersonId(people.length - 1);
    } else {
      setPersonId(personId - 1);
    }
  };
  const randomId = () => {
    const num = Math.floor(Math.random() * people.length);
    if (num === personId) {
      randomId();
    } else {
      setPersonId(num);
    }
  };
  return (
    <article className="review">
      <div className="img-container">
        <img
          src={people[personId].image}
          alt={people[personId].name}
          className="person-img"
        />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{people[personId].name}</h4>
      <p className="job">{people[personId].job}</p>
      <p className="info">{people[personId].text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={decreaseId}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={increaseId}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomId}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
