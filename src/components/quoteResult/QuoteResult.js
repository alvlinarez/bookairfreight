import React from 'react';

import Cargo from './Cargo';
import AirFreight from './AirFreight';
import NonAirFreight from './NonAirFreight';
import '../../styles/components/quote/Quote.css';
import '../../styles/components/quoteResult/QuoteResult.css';

const QuoteResult = (props) => {
  return (
    <div>
      <div className="quoteTitle">
        <h1>Hooray! We found 1 result for you.</h1>
        <p>
          You won't get charged immediately by pre-booking online. Feel free to
          contact <span className="textLink">bookings@bookairfreight.com</span>{' '}
          if you have any questions.
        </p>
      </div>

      <div className="quoteResultsContainer">
        <div className="cargoContainer">
          <Cargo />
        </div>

        <div className="freightOptionsContainer">
          <div className="freightOptionsAirContainer">
            <h1>Air freight options</h1>
            <AirFreight />
            <AirFreight />
          </div>
          <div className="freightOptionsNonAirContainer">
            <h1>Non-air freight options</h1>
            <NonAirFreight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteResult;
