import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };
  const getTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Could not fetch the data");
      }
      const tours = await response.json();

      setTours(tours);
      setIsLoading(false);
    } catch (err) {
      setIsError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getTours();
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return (
      <main>
        <section>
          <div className="title">
            <h2>Error Fetching Data</h2>
            <div className="underline"></div>
          </div>
        </section>
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={getTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <section>
        <div className="title">
          <h2>our tours</h2>
          <div className="underline"></div>
        </div>
        <div>
          <Tours tours={tours} removeTour={removeTour}></Tours>
        </div>
      </section>
    </main>
  );
}

export default App;
