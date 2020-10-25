import React from 'react';

import '../../styles/components/quoteResult/NonAirFreight.css';

const NonAirFreight = ({ originCountry, destCountry }) => {
  return (
    <div className="freightCard">
      <div className="nonAirFreightText">
        We do not support ocean rates from {originCountry} to {destCountry}.
        Feel free to email us at{' '}
        <span className="textLink">bookings@bookairfreight.com</span> for
        alternatives.
      </div>
    </div>
  );
};

export default NonAirFreight;
