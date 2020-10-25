import React, { useState } from 'react';

import '../../styles/components/quoteResult/AirFreight.css';
import AirFreightTable from './AirFreightTable';
import { formatDate } from '../../utils/date';

const AirFreight = ({ quoteDetails, index }) => {
  const [showDetails, setShowDetails] = useState(false);
  const { total_price, min_days_delivery, max_days_delivery } = quoteDetails;
  const date = new Date();
  return (
    <div className="freightCard">
      <div className="freightCardDetails">
        <div className="freightCardDetailsItem">
          <h1>Option {index} - DHL</h1>
          <span>
            <i className="fas fa-plane-departure" /> {min_days_delivery} -{' '}
            {max_days_delivery} days
          </span>
          <span>
            Estimated <span className="textLink">delivery</span> date:
          </span>
          <span className="textLink">
            {formatDate(date.addDays(min_days_delivery))} -{' '}
            {formatDate(date.addDays(max_days_delivery))}
          </span>
        </div>

        <div className="freightCardDetailsItem">
          <h1>Cheapest option!</h1>
          <span className="price" onClick={() => setShowDetails(!showDetails)}>
            US$ {total_price} <i className="fas fa-angle-down" />
          </span>
          <span className="textLink">Tax and duty NOT included</span>
        </div>

        <div className="freightCardDetailsItem">
          <span className="like">
            <i className="far fa-heart" />
          </span>
          <button className="selectButton">Select</button>
          <button
            className="shareButton"
            onClick={() =>
              window.prompt(
                'Share this link: Ctrl+C, Enter',
                window.location.href
              )
            }
          >
            Share
          </button>
        </div>
      </div>

      <div className="freightCardMoreDetailsContainer">
        <div className="freightCardMoreDetails">
          <div>
            <span onClick={() => setShowDetails(!showDetails)}>
              {showDetails ? 'Hide details' : 'Show details'}
              <i className="fas fa-angle-down" />
            </span>
          </div>
          <AirFreightTable
            showDetails={showDetails}
            price={total_price}
            maxDaysDelivery={formatDate(date.addDays(max_days_delivery))}
          />
        </div>
      </div>
    </div>
  );
};

export default AirFreight;
