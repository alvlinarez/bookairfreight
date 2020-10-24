import React from 'react';

const Pickup = () => {
  return (
    <>
      <span className="cardSubtitle">Pickup</span>
      <div className="cardOptionContainer">
        <div className="cardOption">
          <span className="cardLabel">Need pickup?</span>
          <input type="text" />
        </div>

        <div className="cardOption">
          <span className="cardLabel">Origin country</span>
          <input type="text" />
        </div>

        <div className="cardOption">
          <span className="cardLabel">Goods ready (estimate)</span>
          <input type="text" />
        </div>
      </div>
    </>
  );
};

export default Pickup;
