import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./Counter";

function App() {
  return (
    <>
      <h1 className="text-center text-light mt-3">Counter App</h1>
      <Counter />
    </>
  );
}

export default App;
