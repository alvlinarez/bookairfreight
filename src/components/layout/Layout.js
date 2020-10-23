import React from 'react';
import '../../styles/components/layout/layout.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div className="appContainer">{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
