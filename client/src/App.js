import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Preloader from "../src/components/Preloader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//website components
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
//put other website components here

import Footer from "./components/Footer";

function App() {
 
    // preloader
    const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
  <Router>
  <Preloader load={load} />
  <div className="App" id={load ? "no-scroll" : "scroll"}>
    <Navbar />
    <Routes>
      <Route path="/" exact component={Home} />
       {/* put the navbar items here*/}

    </Routes>
    <Footer />
  </div>
</Router>
);
}

export default App;
