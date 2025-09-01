import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./Components/Header/Header.css"
import "./Components/Profile/Profile.css"
import "./Components/About/About.css"
import "./Components/Myservice/Myservice.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-free/css/all.min.css";

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


