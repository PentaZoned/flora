import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import AuthService from '../../utils/Auth';

let userId = null;
try {
  const profile = AuthService.getProfile();
  if (profile)
    userId = profile.data._id;
} catch (error) {
}

function Nav() {
  function showNavigation() {
    if (AuthService.loggedIn()) {
      return (
        <div id='nav-menu'>
            <div className="d-flex">
            <div className="mx-5 inline">
              <Link
                to={`/profile`}
                className='hvr-wobble-vertical'
              >
                <img className='nav-icon' src='images/account-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Account</h6>
              </Link>
            </div>

            <div className="mx-5 inline">
              <Link
                to={`/${userId}/cart`}
                className='hvr-wobble-vertical'
              >
                <img className='nav-icon' src='images/cart-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Cart</h6>
              </Link>
              </div>

              <div className="mx-5 inline">
              <Link
                to={`/logout`}
                className='hvr-wobble-vertical'
              >
                <img className='nav-icon' src='images/logout-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link' href="/" onClick={() => AuthService.logout()}> Logout</h6>
              </Link>
              </div>
            </div>

        </div>
      );
    } else {
      return (
        <div id='nav-menu'>
            <div className="d-flex">
            <div className="mx-5 inline">
            <Link className='link'
            to={`/${userId}/cart`}
             className='hvr-wobble-vertical'
            >
              <div className='d-flex mx-5'>
                <img className='nav-icon' src='images/cart-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Cart</h6>
              </Link>
              </div>


              <div className="mx-5 inline">
                <Link
                to={`/login`}
                className='hvr-wobble-vertical'
              >
                <img className='nav-icon' src='images/login-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Login</h6>
              </Link>
              </div>


              <div className="mx-5 inline">
                <Link
                to={`/signup`}
                className='hvr-wobble-vertical'
              >
                <img className='nav-icon' src='images/signup-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Sign Up</h6>
              </Link>
              </div>
            </div>
           
        </div>
      );
    }
  }


  return (
    <header className='container-fluid px-0'>
      <div className='d-flex d-flex justify-content-between align-items-center custom-nav'>
        <div>
        <Link
          to={`/`}
        >
          <img src='images/logo.png' alt='Flora Logo' id='logo' width='80px'></img>
        </Link>
        </div>
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