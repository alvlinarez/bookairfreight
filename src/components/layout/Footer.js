import React from 'react';

import '../../styles/components/layout/footer.css';
import whiteLogo from '../../../public/static/bookairfreight-logo-white.png';

const Footer = () => {
  return (
    <footer>
      <div className="footerTitle">
        <div className="footerTitleLogo">
          <img src={whiteLogo} alt="White logo" />
        </div>
        <p>We make booking air freight as easy as booking your flight</p>
      </div>
      <div className="footerMenu">
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Contact us</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
