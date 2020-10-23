import React from 'react';
import '../../styles/components/quote/Quote.css';

const Quote = (props) => {
  return (
    <div>
      <div className="quoteTitle">
        <h1>Instant quote</h1>
        <p>
          Bookairfreight <span className="textLink">cannot</span> ship personal
          goods or certain hazardous materials. If you are not sure, feel free
          to <span className="textLink">contact us</span> to check.
        </p>
      </div>
      <button onClick={() => props.history.push('/quote-results')}>
        Quote Results
      </button>
    </div>
  );
};

export default Quote;
