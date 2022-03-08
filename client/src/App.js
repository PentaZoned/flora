import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Preloader from "../src/components/Preloader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//website components
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
//put other website components here

import Footer from "./components/Footer";

function App() {
 
    // preloader
    const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
  <Router>
  <Preloader load={load} />
  <div className="App" id={load ? "no-scroll" : "scroll"}>
    <Navbar />
    <ScrollToTop />
    <Switch>
      <Route path="/" exact component={Home} />
       {/* put the navbar items here*/}

    </Switch>
    <Footer />
  </div>
</Router>
);
}

export default App;
