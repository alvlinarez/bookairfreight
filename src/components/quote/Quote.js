import React from 'react';
import QuoteCard from './QuoteCard';
import '../../styles/components/quote/Quote.css';

const Quote = () => {
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

      <QuoteCard />
    </div>
  );
};

export default Quote;
