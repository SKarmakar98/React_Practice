// import logo from './logo.svg';
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./Components/Navbar";
import Form from "./Components/Form";
import React, { useState } from "react";

function App() {
  let [litecolour, darkcolour] = useState("light");
  let Darkmood = () => {
    if (litecolour == "light") {
      darkcolour("dark");
    } else {
      darkcolour("light");
    }
  };
  return (
    <div className="App bg-dark">
      <Navbar title="App1" />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
