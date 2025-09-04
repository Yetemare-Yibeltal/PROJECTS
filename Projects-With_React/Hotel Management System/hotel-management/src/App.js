import "./App.css";

import Contact from "./Pages/Contact-page/Contact";
import About from "./Pages/About-Page/About";
import Gallary from "./Pages/Gallary-Page/Gallary";
import Room from "./Pages/Room-page/Room";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home-Page/Home";
import NotFound from "./Pages/NotFound-page/NotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room" element={<Room />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
