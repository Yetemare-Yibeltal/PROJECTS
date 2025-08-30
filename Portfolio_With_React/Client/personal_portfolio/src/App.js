import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import "./Components/Header/Header.css"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
      <Profile></Profile>
      </BrowserRouter>
    </div>
  );
}

export default App;
