import React from 'react';
import { useHistory } from 'react-router-dom';

import '../../styles/components/quoteResult/Cargo.css';

const Cargo = ({ quote }) => {
  const { weight, originCountry, destCountry } = quote;
  // Routing
  const history = useHistory();
  return (
    <div className="cargoCard">
      <h1>Cargo details</h1>
      <span className="editCargo" onClick={() => history.push('/')}>
        <i className="fas fa-pencil-alt" />
      </span>

      <div className="cargoCardDetailsContainer">
        <div className="cargoCardDetails">
          <span className="opacity">Origin</span>
          <span>{originCountry}</span>
        </div>

        <div className="cargoCardDetails">
          <span className="opacity">Destination</span>
          <span>{destCountry}</span>
        </div>

        <div className="cargoCardDetails">
          <span className="opacity">Shipping type</span>
          <span>Door to Door</span>
        </div>

        <div className="cargoCardDetails">
          <span className="opacity">Shipment details</span>
          <span>{weight} KG</span>
        </div>
      </div>
    </div>
  );
};

export default Cargo;
