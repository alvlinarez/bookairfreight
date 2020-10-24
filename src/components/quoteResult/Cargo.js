import React from 'react';

import '../../styles/components/quoteResult/Cargo.css';

const Cargo = () => {
  return (
    <div className="cargoCard">
      <h1>Cargo details</h1>
      <span className="editCargo">
        <i className="fas fa-pencil-alt" />
      </span>

      <div className="cargoCardDetailsContainer">
        <div className="cargoCardDetails">
          <span className="opacity">Origin</span>
          <span>Australia</span>
        </div>

        <div className="cargoCardDetails">
          <span className="opacity">Destination</span>
          <span>UK</span>
        </div>

        <div className="cargoCardDetails">
          <span className="opacity">Shipping type</span>
          <span>Door to Door</span>
        </div>

        <div className="cargoCardDetails">
          <span className="opacity">Shipment details</span>
          <span>1 carton, 0.01 CBM, 55 KG</span>
        </div>

        <div className="cargoCardDetails">
          <span className="opacity">Goods ready</span>
          <span>27 Oct, 2020</span>
        </div>
      </div>
    </div>
  );
};

export default Cargo;
