import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import Auth from "../../utils/Auth";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div id='nav-menu'>
            <div className="d-flex">
              <Link
                to={`/profile`}
              >
                <img className='nav-icon' src='images/account-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Account</h6>
              </Link>
            </div>

            <div className="d-flex mx-5">
              <Link
                to={`/cart`}
              >
                <img className='nav-icon' src='images/cart-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Cart</h6>
              </Link>
            </div>

            <div className="d-flex">
              <Link
                to={`/logout`}
              >
                <img className='nav-icon' src='images/logout-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link' href="/" onClick={() => Auth.logout()}> Logout</h6>
              </Link>
            </div>
        </div>
      );
    } else {
      return (
        <div id='nav-menu'>
            <div className="d-flex">
              <Link
                to={`/cart`}
              >
                <img className='nav-icon' src='images/cart-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Cart</h6>
              </Link>
            </div>

            <div className="d-flex mx-5">
              <Link
                to={`/login`}
              >
                <img className='nav-icon' src='images/login-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Login</h6>
              </Link>
            </div>

            <div className="d-flex">
              <Link
                to={`/signup`}
              >
                <img className='nav-icon' src='images/signup-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Sign Up</h6>
              </Link>
            </div>
        </div>
      );
    }
  }


  return (
    <header className='container-fluid px-0'>
      <div className='flex-row d-flex justify-content-between align-items-center custom-nav'>
        <Link
          to={`/`}
        >
          <img src='images/logo.png' alt='Flora Logo' id='logo' width='80px'></img>
        </Link>
        <nav>
          {showNavigation()}
        </nav>
      </div>


      <div className='d-flex align-items-center justify-content-end custom-sub-nav'>
        <h5 className='menu-item'>Flowers</h5>
        <h5 className='menu-item'>Plants</h5>
        <h5 className='menu-item'>Cards</h5>
        <h5 className='menu-item'>SALE</h5>
      </div>
    </header>

  );
}

export default Nav;