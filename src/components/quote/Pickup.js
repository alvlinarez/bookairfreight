import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';

import '../../styles/components/quote/Pickup.css';
import 'react-datepicker/dist/react-datepicker.css';

const Pickup = () => {
  const pickUpOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' }
  ];

  const originCountryOptions = [
    { value: 'china', label: 'China' },
    { value: 'india', label: 'India' },
    { value: 'vietnam', label: 'Vietnam' }
  ];

  const [startDate, setStartDate] = useState('');

  return (
    <>
      <span className="cardSubtitle">Pickup</span>
      <div className="cardOptionContainer">
        <div className="cardOption">
          <span className="cardLabel">Need pickup?</span>
          <div className="pickupSelectContainer">
            <Select defaultValue={pickUpOptions[0]} options={pickUpOptions} />
          </div>
        </div>

        <div className="cardOption">
          <span className="cardLabel">Origin country</span>
          <div className="originCountrySelectContainer">
            <Select
              options={originCountryOptions}
              placeholder="Select a country"
            />
          </div>
        </div>

        <div className="cardOption">
          <span className="cardLabel">Goods ready (estimate)</span>
          <div className="startDateContainer">
            <DatePicker
              onChange={(date) => setStartDate(date)}
              selected={startDate}
              placeholderText="MM/DD/YYYY"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Pickup;
