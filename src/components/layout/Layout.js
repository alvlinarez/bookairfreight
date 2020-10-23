import React from 'react';
import '../../styles/components/layout/layout.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="appContainer">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
