import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
  return (
    <div className='container-fluid px-0'>
      <div className='row d-flex align-items-center custom-nav'>
        <div>
          <img src='images/logo.png' alt='Flora Logo' id='logo' width='80px'></img>
        </div>
      </div>
    </div>
  )
}

export default Nav;