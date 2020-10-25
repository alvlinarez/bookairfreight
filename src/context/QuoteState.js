import React, { useReducer } from 'react';
import QuoteContext from './QuoteContext';
import QuoteReducer from './QuoteReducer';

import { SET_QUOTE } from '../types/quoteTypes';

const QuoteState = ({ children }) => {
  const initialState = {
    quote: {
      weight: '',
      pickup: 1,
      originCountry: '',
      city: '',
      destCountry: ''
    }
  };
  const [state, dispatch] = useReducer(QuoteReducer, initialState);

  // Modify Quote
  const setQuote = (quote) => {
    dispatch({
      type: SET_QUOTE,
      payload: quote
    });
  };

  return (
    <QuoteContext.Provider
      value={{
        quote: state.quote,
        setQuote
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
};

export default QuoteState;
