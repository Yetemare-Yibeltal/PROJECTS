import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import "./Components/Header/Header.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
      <Profile></Profile>
      <About></About>
      </BrowserRouter>
    </div>
  );
}

export default App;
