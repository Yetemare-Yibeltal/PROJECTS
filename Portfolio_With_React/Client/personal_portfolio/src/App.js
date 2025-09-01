import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import About from "./Components/About/About";
import Myservice from "./Components/Myservice/Myservice";
import Latestwork from "./Components/LatestWork/Latestwork";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Profile></Profile>
        <About></About>
        <Myservice></Myservice>
        <Latestwork></Latestwork>
      </BrowserRouter>
    </div>
  );
}

export default App;
