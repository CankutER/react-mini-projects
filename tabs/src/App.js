import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tabs, setTabs] = useState([]);
  const [displayed, setDisplayed] = useState(null);
  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Couldn't load the data");
      }
      const data = await response.json();
      console.log(data);
      setTabs(data);
      setDisplayed(data.find((item) => item.order === data.length));
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // USING A FUNCTION INSIDE ONCLICK PROPERTY OF JSX FOR ONCLICK BUTTON EFFECT

  function addActive(e) {
    const companyBtns = document.querySelectorAll(".job-btn");
    companyBtns.forEach((btn) => btn.classList.remove("active-btn"));
    e.currentTarget.classList.add("active-btn");
  }

  //

  // ADD EVENT LISTENERS WITH USEEFFECT FOR ONCLICK BUTTON EFFECT

  // useEffect(() => {
  //   const companyBtns = document.querySelectorAll(".job-btn");
  //   companyBtns.forEach((btn) => {
  //     btn.addEventListener("click", () => {
  //       companyBtns.forEach((btn) => btn.classList.remove("active-btn"));
  //       btn.classList.add("active-btn");
  //     });
  //   });
  //   return () => {
  //     companyBtns.forEach((btn) => {
  //       btn.removeEventListener("click", () => {
  //         companyBtns.forEach((btn) => btn.classList.remove("active-btn"));
  //         btn.classList.add("active-btn");
  //       });
  //     });
  //   };
  // });

  //

  if (isLoading)
    return (
      <section className="section">
        <div className="title">
          <h2>Loading...</h2>
        </div>
      </section>
    );
  if (isError) {
    return (
      <section className="section">
        <div className="title">
          <h2>Couldn't Load the Data</h2>
        </div>
      </section>
    );
  }
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {tabs.map((tab) => {
            return (
              <button
                className={`job-btn ${
                  tab.order === tabs.length && "active-btn"
                }`}
                key={tab.id}
                onClick={(e) => {
                  addActive(e);
                  setDisplayed(tab);
                }}
              >
                {tab.company}
              </button>
            );
          })}
        </div>
        {/* USED CONDITIONAL RENDERING SINCE GETTING 'displayed' OBJECT DEPENDS ON ASYNC FETCH, GIVES AN ERROR ON "displayed.map" BEFORE FETCH COMPLETES */}
        {displayed && (
          <article className="job-info">
            <h3>{displayed.title}</h3>
            <h4>{displayed.company}</h4>
            <p className="job-date">{displayed.dates}</p>

            {displayed.duties.map((duty, i) => {
              return (
                <div key={i} className="job-desc">
                  <FaAngleDoubleRight className="job-icon" />
                  <p>{duty}</p>
                </div>
              );
            })}
            {/*  */}
          </article>
        )}
      </div>
    </section>
  );
}

export default App;
