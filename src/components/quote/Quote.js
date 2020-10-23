import React from 'react';

const Quote = (props) => {
  return (
    <div>
      <h1>Instant quote</h1>
      <button onClick={() => props.history.push('/quote-results')}>
        Quote Results
      </button>
    </div>
  );
};

export default Quote;
