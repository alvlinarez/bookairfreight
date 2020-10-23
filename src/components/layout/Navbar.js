import React from 'react';

import '../../styles/components/layout/navbar.css';
import logo from '../../../public/static/bookairfreight-logo.png';

const Navbar = () => {
  return (
    <nav className="navContainer">
      <div className="navTitle">
        <ul>
          <li>
            <div className="logoContainer">
              <img src={logo} alt="Logo" />
            </div>
          </li>
          <li>
            <div className="navTitleSettings opacity">
              <span>Settings</span>
            </div>
          </li>
        </ul>
      </div>

      <div className="navOptions">
        <ul>
          <li className="currentNavOption">
            <span>
              <i className="fas fa-search" /> Get a quote
            </span>
          </li>
          <li>
            <span>
              <i className="fas fa-heart" />
              Saved quotes
            </span>
          </li>
          <li>
            <span>
              <i className="fas fa-shipping-fast" />
              Shipments
            </span>
          </li>
          <li>
            <span>
              <i className="fas fa-folder-open" />
              Documents
            </span>
          </li>
          <li>
            <span>
              <i className="fas fa-coins" />
              Billing
            </span>
          </li>
          <li>
            <span>
              <i className="fas fa-comment-dots" />
              Help center
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
