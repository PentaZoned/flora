import React, { useState, useEffect } from "react";
//import flowers from "./flowers";
//import logo here
import './App.css';
import Preloader from "../src/components/Preloader";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


//website components

import Navbar from "./components/Navbar";
// import Footer from './components/Footer';


//website pages
import Home from "./components/pages/Home";
// import Cart from "./components/pages/Cart";
// import Contact from "./components/pages/Contact";
// import Spin from "./components/pages/Spin";
// import Login from './components/pages/Login';
// import Signup from './components/pages/Signup';





//put other website components here


// import NotFound from './pages/NotFound';

// import Footer from "./components/Footer";

function App() {
  // const navigate = useNavigate();
    // preloader
    const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // const handlePageChange = (pageURL) => {
  //   navigate(pageURL);
  // }

  return (

    <div>
    <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/Cart" element={<Cart/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Spin" element={<Spin/>}/> */}
        {/* <Route path="/flowers/:id" element={<Detail />} */}
        {/* <Route path="/login" element={<Login />}/> */}
        {/* <Route path="/signup" element={<Signup />}/>*/}
  
      </Routes>
      {/* <Footer /> */}
    </div>
    </div>
  );
  }


export default App;
