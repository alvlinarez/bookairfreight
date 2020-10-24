import React from 'react';

import '../../styles/components/quote/Quote.css';

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
      <button onClick={() => props.history.push('/')}>Quote</button>
    </div>
  );
};

export default QuoteResult;
