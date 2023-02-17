import React from "react";
import Weather from "./components/weather";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header></header>
      <main>
        <Weather />
        <ToastContainer />
      </main>
    </div>
  );
}

export default App;
