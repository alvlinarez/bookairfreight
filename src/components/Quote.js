import React from 'react';
import '../styles/components/Quote.css';
import QuoteBox from './QuoteBox';

const Quote = () => {
  return (
    <>
      <form>
        <div className="quoteContainer">
          <label htmlFor="sCountry">Starting country</label>
          <input id="sCountry" name="sCountry" type="text" />
          <label htmlFor="dCountry">Destination country</label>
          <input id="dCountry" name="dCountry" type="text" />
          <label htmlFor="qPrice">Quote price</label>
          <input id="qPrice" name="qPrice" type="text" />
          <label htmlFor="sChannel">Shipping channel</label>
          <select name="sChannel" id="sChannel">
            <option value="air">Air</option>
            <option value="ocean">Ocean</option>
          </select>
        </div>
        <button type="submit" className="btn">Create quote</button>
      </form>
      <QuoteBox />
    </>
  );
};

export default Quote;
