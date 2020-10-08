import React from 'react';
import '../styles/components/QuoteBox.css';

const QuoteBox = () => {
  return (
    <div className="boxContainer">

      <div className="deliveryContainer">
        <div className="deliveryTitle">
          <span><i className="fas fa-plane" /></span>
          <p>Traditional air freight</p>
        </div>
        <div className="deliveryDetails">
          <p>4-6 days</p>
          <span>Estimated delivery</span>
          <span className="deliveryDate">Sept 20 - Sept 26</span>
        </div>
      </div>

      <div className="priceContainer">
        <div className="priceTitle">
          <p>China -> USA</p>
        </div>
        <div className="price">
          <p>US$ 2,300</p>
        </div>
      </div>

    </div>
  );
};

export default QuoteBox;
