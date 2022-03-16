import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import AuthService from '../../utils/Auth';

const userId = AuthService.getProfile().data._id;

function Nav() {
  return (
    <div className='container-fluid px-0'>
      <div className='d-flex justify-content-between align-items-center custom-nav'>
        <div>
          <Link
          to={'/'}
          >
          <img src='images/logo.png' alt='Flora Logo' id='logo' width='80px'></img>
          </Link>
        </div>
        <div id='nav-menu'>
          <div className='d-flex'>
            <Link 
            to={`/login`}
            >
              
              <div className='d-flex'>
                <img className='nav-icon' src='images/account-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Account</h6>
              </div>
            {/* {/* </Link> */}
            </Link>
            <Link
            to={`/${userId}/cart`}
            >
              <div className='d-flex mx-5'>
                <img className='nav-icon' src='images/cart-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Cart</h6>
              </div>
            {/* </Link>
            <Link> */}
            </Link>
              <div className='d-flex'>
                <img className='nav-icon' src='images/contact-icon.png' alt='Account Icon'></img>
                <h6 className='custom-nav-link'> Contact</h6>
              </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
      <div className='d-flex align-items-center justify-content-end custom-sub-nav'>
        
        {/* <h5 className='menu-item'>Flowers</h5>
        <h5 className='menu-item'>Plants</h5>
        <h5 className='menu-item'>Cards</h5>
        <h5 className='menu-item'>SALE</h5> */}
      </div>
    </div>
  )
}

export default Nav;