import React from 'react';

import '../../styles/components/quoteResult/AirFreight.css';
import AirFreightTable from './AirFreightTable';

const AirFreight = () => {
  return (
    <div className="freightCard">
      <div className="freightCardDetails">
        <div className="freightCardDetailsItem">
          <h1>Option 1 - DHL</h1>
          <span>
            <i className="fas fa-plane-departure" /> 4 - 7 days
          </span>
          <span>
            Estimated <span className="textLink">delivery</span> date:
          </span>
          <span className="textLink">31 Oct - 03 Nov</span>
        </div>

        <div className="freightCardDetailsItem">
          <h1>Cheapest option!</h1>
          <span className="price">
            US$ 545.16 <i className="fas fa-angle-down" />
          </span>
          <span className="textLink">Tax and duty NOT included</span>
        </div>

        <div className="freightCardDetailsItem">
          <span className="like">
            <i className="far fa-heart" />
          </span>
          <button className="selectButton">Select</button>
          <button className="shareButton">Share</button>
        </div>
      </div>

      <div className="freightCardMoreDetailsContainer">
        <div className="freightCardMoreDetails">
          <div>
            <span>
              Hide details
              <i className="fas fa-angle-down" />
            </span>
          </div>
          <AirFreightTable />
        </div>
      </div>
    </div>
  );
};

export default AirFreight;
