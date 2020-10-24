import React from 'react';
import Select from 'react-select';

import '../../styles/components/quote/Deliver.css';

const Deliver = () => {
  const destCountryOptions = [
    { value: 'usa', label: 'USA' },
    { value: 'australia', label: 'Australia' },
    { value: 'canada', label: 'Canada' }
  ];
  return (
    <>
      <span className="cardSubtitle">Deliver</span>
      <div className="cardOptionContainer">
        <div className="cardOption">
          <span className="cardLabel">Destination country</span>
          <div className="destCountrySelectContainer">
            <Select
              options={destCountryOptions}
              placeholder="Select or type a country"
              isDisabled={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Deliver;
