import React from 'react';
import '../styles/components/QuoteBox.css';

const QuoteBox = ({ quote, delivery }) => {
  const { startCountry, destCountry, price, channel } = quote;
  const { startRange, endRange, startDeliverDate, endDeliverDate } = delivery;

  const formatDate = (date) => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    return month + ' ' + day;
  };

  const thousandCommas = (n) => {
    return n.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className="boxContainer">
      <div className="deliveryContainer">
        <div className="deliveryTitle">
          <span>
            {channel === 'air' ? (
              <i className="fas fa-plane" />
            ) : (
              <i className="fas fa-ship" />
            )}
          </span>
          <p>Traditional {channel === 'air' ? 'air' : 'ocean'} freight</p>
        </div>
        <div className="deliveryDetails">
          <p>
            {startRange}-{endRange} days
          </p>
          <span>Estimated delivery</span>
          <span className="deliveryDate">
            {formatDate(new Date(startDeliverDate))} -{' '}
            {formatDate(new Date(endDeliverDate))}
          </span>
        </div>
      </div>

      <div className="priceContainer">
        <div className="priceTitle">
          <p>
            {startCountry} -> {destCountry}
          </p>
        </div>
        <div className="price">
          <p>US$ {thousandCommas(price)}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
