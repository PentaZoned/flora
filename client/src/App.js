import React, { useState, useEffect } from "react";
import './App.css';
//import Preloader from "../src/components/Preloader";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom";

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from 'apollo-link-context';


//WEBSITE COMPONENTS
import Navbar from "./components/Navbar";
import Login from './components/pages/Login';
import Signup from './components/pages/Signup';
// import Footer from './components/Footer';
// import flowers from "./flowers";
// import Footer from "./components/Footer";
// import logo here


//WEBSITE PAGES
import Home from "./components/pages/Home";
// import Cart from "./components/pages/Cart";
// import Contact from "./components/pages/Contact";
// import Spin from "./components/pages/Spin";
// import Login from './components/pages/Login';
// import Signup from './components/pages/Signup';
// import NotFound from './pages/NotFound';

import Detail from "./components/pages/Detail";


const httpLink = createHttpLink({
  uri: "/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


function App() {
  const navigate = useNavigate();

  const handlePageChange = (pageURL) => {
    navigate(pageURL);
  }

  return (
    <ApolloProvider client={client}>
      <div>
      {/* <Router> */}
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/Cart" element={<Cart/>} />
      <Route path="/Spin" element={<Spin/>}/> */}
            <Route path="/products/:productId" element={<Detail />} />
            <Route path="/login" element={<Login />}/>
            <Route path="/signup" element={<Signup />}/>
          </Routes>
        </div>
        {/* </Router> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
