import React from 'react';

const Weight = () => {
  return (
    <>
      <span className="cardSubtitle">Weight</span>
      <div className="cardOptionContainer">
        <div className="cardOption">
          <span className="cardLabel">Total weight (KG)</span>
          <input
            maxLength="256"
            name="weight"
            inputMode="decimal"
            placeholder="1"
            type="text"
            className="cardInput"
          />
        </div>
      </div>
    </>
  );
};

export default Weight;
