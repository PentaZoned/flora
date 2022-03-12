import React, { useState, useEffect } from "react";
//import flowers from "./flowers";
//import logo here
import './App.css';
import Preloader from "../src/components/Preloader";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink 
} from "@apollo/client";
import { setContext } from 'apollo-link-context';




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


const httpLink = createHttpLink({
  uri: "/graphql"
});

const authLink = setContext((_, {headers}) => {
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
    <ApolloProvider client={client}>
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
    </ApolloProvider>
 );
  }


export default App;
