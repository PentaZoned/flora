import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import Auth from "../../utils/Auth";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className='d-flex justify-content-between align-items-center custom-nav'>
        <div id='nav-menu'>
            <Link 
            to={`/profile`}
            >
              
              <div className='d-flex'>
                <img className='nav-icon' src='images/account-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Account</h6>
              </div>
            </Link>

            <Link 
            to={`/cart`}
            >
              <div className='d-flex mx-5'>
                <img className='nav-icon' src='images/cart-icon.png' alt='Account Icon'></img>
                
                <h6 className='custom-nav-link'> Cart</h6>
          
              </div>
              </Link>

              <Link 
            to={`/logout`}
            >
              <div className='d-flex'>
                <img className='nav-icon' src='images/logout-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link' href="/" onClick={() => Auth.logout()}> Logout</h6>
              </div>
            </Link>
        </div>
        </div>
      );
    } else {
      return (<div id='nav-menu'>
      <Link 
        to={`/cart`}
        >
          <div className='d-flex mx-5'>
            <img className='nav-icon' src='images/cart-icon.png' alt='Account Icon'></img>
            
            <h6 className='custom-nav-link'> Cart</h6>
      
          </div>
          </Link>

        <Link 
        to={`/login`}
        >
          
          <div className='d-flex'>
            <img className='nav-icon' src='images/login-icon.png' alt='Account Icon'></img>
            <h6 className='custom-nav-link'> Login</h6>
          </div>
        </Link>

        

          <Link 
        to={`/signup`}
        >
          <div className='d-flex'>
            <img className='nav-icon' src='images/signup-icon.png' alt='Account Icon'></img>
            <h6 className='custom-nav-link'> Sign Up</h6>
          </div>
        </Link>
      </div>
      );
    }
  }
      

    return (
      <div className='container-fluid px-0'>
      <div className='d-flex justify-content-between align-items-center custom-nav'>
      <Link 
        to={`/`}
        >
        <div>
          <img src='images/logo.png' alt='Flora Logo' id='logo' width='80px'></img>
        </div>
        </Link>
        <nav>
        {showNavigation()}
      </nav>

        <div className='d-flex align-items-center justify-content-end custom-sub-nav'>
        <h5 className='menu-item'>Flowers</h5>
        <h5 className='menu-item'>Plants</h5>
        <h5 className='menu-item'>Cards</h5>
        <h5 className='menu-item'>SALE</h5>
      </div>
    </div>
    </div>
    );
}

export default Nav;