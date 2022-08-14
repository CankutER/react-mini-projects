import React from "react";
import { useGlobalContext } from "./context";
// components
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
// items

function App() {
  const { state } = useGlobalContext();
  if (state.isLoading) {
    return <h1 className="loading">Loading...</h1>;
  }
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
