import React from 'react';

import '../../styles/components/quote/QuoteCard.css';
import Weight from './Weight';
import Pickup from './Pickup';
import Deliver from './Deliver';

const QuoteCard = () => {
  return (
    <div className="cardContainer">
      <div className="cardTitle">
        <span>Pickup & Delivery</span>
      </div>
      <div className="cardContent">
        <Weight />
        <div className="separator" />
        <Pickup />
        <div className="separator" />
        <Deliver />
      </div>
    </div>
  );
};

export default QuoteCard;
