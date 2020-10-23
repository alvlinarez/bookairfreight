import React, { useEffect, useState } from 'react';
import '../styles/components/Quote.css';
import QuoteBox from './QuoteBox';

const Quote = () => {
  const [values, setValues] = useState({
    startCountry: '',
    destCountry: '',
    price: '',
    channel: ''
  }); // form values

  const [error, setError] = useState(null); // if error exists
  const [msg, setMsg] = useState(''); // error message

  const [deliveryValues, setDeliveryValues] = useState({
    startRange: 0,
    endRange: 0,
    startDeliverDate: '',
    endDeliverDate: ''
  }); // values to calculate delivery quote

  const [quoteValues, setQuoteValues] = useState({}); // quote values

  const [showQuoteBox, setShowQuoteBox] = useState(false);
  // Quotebox initializes hidden

  const [channelData, setChannelData] = useState([]);

  const { startCountry, destCountry, price, channel } = values;

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const generateRandomDays = (min = 0, max = 0) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const calculateQuote = () => {
    let startRange = 0,
      endRange = 0,
      startDeliverDate = 0,
      endDeliverDate = 0;
    let date = new Date();
    if (channel === 'air') {
      startRange = generateRandomDays(3, 7);
      endRange = startRange + generateRandomDays(2, 4);
    } else {
      startRange = generateRandomDays(25, 30);
      endRange = startRange + generateRandomDays(5, 10);
    }
    startDeliverDate = date.setDate(date.getDate() + startRange);
    date = new Date();
    endDeliverDate = date.setDate(date.getDate() + endRange);
    setDeliveryValues({
      ...deliveryValues,
      startRange,
      endRange,
      startDeliverDate,
      endDeliverDate
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifying if fields are not empty
    if (
      startCountry.trim() === '' ||
      destCountry.trim() === '' ||
      price.trim() === '' ||
      channel.trim() === ''
    ) {
      setError(true);
      setMsg('All fields are required.');
      return;
    }
    // If price is a number
    if (isNaN(price)) {
      setMsg('Price must be a number.');
      setError(true);
      return;
    }

    // Validation success
    setError(null);
    setMsg('');
    // Calculate quote
    calculateQuote();
    // Assign form values to quote to pass through props to QuoteBox
    setQuoteValues(values);
    setShowQuoteBox(true);
  };

  useEffect(() => {
    const data = [
      {
        channel: 'air',
        displayString: 'AirBook',
        imgUrl: './assets/images/plane2.png',
        minDays: 1,
        maxDays: 2
      },
      {
        channel: 'ocean',
        displayString: 'Ocean Atlantic',
        imgUrl: './assets/images/boat2.png',
        minDays: 5,
        maxDays: 10
      }
    ];
    setChannelData(data);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="quoteContainer">
          <label htmlFor="startCountry">Starting country</label>
          <input
            id="startCountry"
            name="startCountry"
            type="text"
            value={startCountry}
            onChange={handleChange}
          />

          <label htmlFor="destCountry">Destination country</label>
          <input
            id="destCountry"
            name="destCountry"
            type="text"
            value={destCountry}
            onChange={handleChange}
          />

          <label htmlFor="price">Quote price</label>
          <input
            id="price"
            name="price"
            type="text"
            value={price}
            onChange={handleChange}
          />

          <label htmlFor="channel">Shipping channel</label>
          <select
            name="channel"
            id="channel"
            value={channel}
            onChange={handleChange}
          >
            {channelData &&
              channelData.map((c) => (
                <option value={c.channel} key={c.channel}>
                  {c.displayString}
                </option>
              ))}
          </select>
        </div>
        {error && <div className="error">{msg}</div>}
        <button type="submit" className="btn">
          Create quote
        </button>
      </form>
      {showQuoteBox && (
        <QuoteBox quote={quoteValues} delivery={deliveryValues} />
      )}
    </>
  );
};

export default Quote;
