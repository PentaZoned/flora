import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client";
import { setContext } from 'apollo-link-context';

import Nav from "./components/Nav/Nav";
import Home from './pages/Home';
import SingleItem from './components/SingleItem/index';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import { CartProvider } from './utils/GlobalState';

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

  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          {/* Provider wraps all logic that handles and updates state */}
          <CartProvider>
            <Nav />
            <Routes>
              <Route
              path='/'
              element={<Home />}
              />
              <Route
              path='/products/:id'
              element={<SingleItem />}
              />
              <Route
              path='/login'
              element={<Login />}
              />
              <Route
              path='/signup'
              element={<Signup />}
              />
              <Route
              path='/:userId/cart'
              element={<Cart />}
              />
          </Routes>
          </CartProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
