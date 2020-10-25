import React, { useContext, useEffect, useState } from 'react';
import queryString from 'query-string';
import Loader from 'react-loader-spinner';
import Cargo from './Cargo';
import AirFreight from './AirFreight';
import NonAirFreight from './NonAirFreight';
import QuoteContext from '../../context/QuoteContext';
import { fetchQuoteResults } from '../../utils/fetchData';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import '../../styles/components/quote/Quote.css';
import '../../styles/components/quoteResult/QuoteResult.css';
import SortQuotes from './SortQuotes';

const QuoteResult = (props) => {
  // Get quote state from context
  const quoteContext = useContext(QuoteContext);
  const { quote, setQuote } = quoteContext;

  // Initialize quote Results
  const [quoteResults, setQuoteResults] = useState([]);
  // Loading state for spinner
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Getting values from url
    const values = queryString.parse(props.location.search);
    // Updating quote state from context
    setQuote({
      weight: values.total_weight,
      pickup: values.pickup_start_city ? 1 : 0,
      originCountry: values.delivery_start_country,
      city: values.pickup_start_city ? values.pickup_start_city : '',
      destCountry: values.delivery_dest_country
    });
  }, []);

  useEffect(() => {
    // get quote results from API
    fetchQuoteResults(quote, setQuoteResults, setLoading);
  }, [quote]);

  return (
    <div>
      {loading ? (
        <div className="loaderContainer">
          <Loader type="Rings" color="#007aff" height={150} width={150} />
        </div>
      ) : (
        <>
          <div className="quoteTitle">
            <h1>Hooray! We found {quoteResults.length} result(s) for you.</h1>
            <p>
              You won't get charged immediately by pre-booking online. Feel free
              to contact{' '}
              <span className="textLink">bookings@bookairfreight.com</span> if
              you have any questions.
            </p>
          </div>

          <div className="quoteResultsContainer">
            <div className="cargoContainer">
              <Cargo quote={quote} />
            </div>

            <div className="freightOptionsContainer">
              <div className="freightOptionsAirContainer">
                <div className="freightOptionsAirTitle">
                  <h1>Air freight options</h1>

                  <SortQuotes
                    quoteResults={quoteResults}
                    setQuoteResults={setQuoteResults}
                  />
                </div>
                {quoteResults &&
                  quoteResults.map((q, i) => (
                    <AirFreight quoteDetails={q} index={i + 1} key={i} />
                  ))}
              </div>
              <div className="freightOptionsNonAirContainer">
                <h1>Non-air freight options</h1>
                <NonAirFreight
                  originCountry={quote.originCountry}
                  destCountry={quote.destCountry}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default QuoteResult;
