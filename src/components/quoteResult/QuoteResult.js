import React from 'react';

const QuoteResult = (props) => {
  return (
    <div>
      <h1>Quote Result</h1>
      <button onClick={() => props.history.push('/')}>Quote</button>
    </div>
  );
};

export default QuoteResult;
