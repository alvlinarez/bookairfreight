import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import { fetchOriginCountry, fetchCityAndCountry } from '../../utils/fetchData';
import '../../styles/components/quote/QuoteCard.css';
import QuoteContext from '../../context/QuoteContext';

const QuoteCard = () => {
  // Routing
  const history = useHistory();

  const pickUpOptions = [
    { value: 1, label: 'Yes' },
    { value: 0, label: 'No' }
  ];

  const [selectOptionsValues, setSelectOptionsValues] = useState({
    originCountryOptions: [],
    cityOptions: [],
    destCountryOptions: []
  });

  const [cachedOptionValues, setCachedOptionValues] = useState({
    cachedOptions: []
  });

  // Get quote state from context
  const quoteContext = useContext(QuoteContext);
  const { quote, setQuote } = quoteContext;

  // Form values to set the quote initialized with quote state from the context
  const [values, setValues] = useState({
    weight: quote.weight,
    pickup: quote.pickup,
    originCountry: quote.originCountry,
    city: quote.city,
    destCountry: quote.destCountry
  });

  const [error, setError] = useState(null); // if error exists
  const [msg, setMsg] = useState(''); // error message

  const { weight, pickup, originCountry, city, destCountry } = values;
  const {
    originCountryOptions,
    cityOptions,
    destCountryOptions
  } = selectOptionsValues;

  useEffect(() => {
    // get origin countries
    fetchOriginCountry(selectOptionsValues, setSelectOptionsValues);
  }, []);

  const handleWeightChange = (e) => {
    // verify if its number
    if (isNaN(e.target.value)) {
      return;
    }
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleOriginCountryChange = async (e) => {
    // when origin country changes
    const dataFromCache = cachedOptionValues.cachedOptions.find(
      (cached) => cached.country === e.value
    );
    if (!dataFromCache) {
      // then fetch city and dest country if there is no cached data
      await fetchCityAndCountry(
        e.value,
        pickup,
        selectOptionsValues,
        setSelectOptionsValues,
        cachedOptionValues,
        setCachedOptionValues
      );
    } else {
      setSelectOptionsValues({
        ...selectOptionsValues,
        cityOptions: dataFromCache.cities,
        destCountryOptions: dataFromCache.destCountries
      });
    }

    setValues({
      ...values,
      originCountry: e.value,
      city: '',
      destCountry: ''
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // verify if the values are not empty
    if (weight === '' || originCountry === '' || destCountry === '') {
      setError(true);
      setMsg('All fields are required.');
      return;
    }
    // verifying city is empty if pickup is yes only
    if (pickup === 1) {
      if (city === '') {
        setError(true);
        setMsg('All fields are required.');
        return;
      }
    }
    setError(false);
    setMsg('');
    // Modify quote values from context
    setQuote(values);
    // Redirect
    history.push(
      `/quote-results?total_weight=${weight}&delivery_start_country=${originCountry}&delivery_dest_country=${destCountry}` +
        `${pickup === 1 ? `&pickup_start_city=${city}` : ''}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="cardContainer">
        <div className="cardTitle">
          <span>Weight, Pickup & Delivery</span>
        </div>
        <div className="cardContent">
          {/* Weight */}
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
                  value={weight}
                  onChange={handleWeightChange}
                />
              </div>
            </div>
          </>

          <div className="separator" />

          {/* Pickup */}
          <>
            <span className="cardSubtitle">Pickup</span>
            <div className="cardOptionContainer">
              <div className="cardOption">
                <span className="cardLabel">Need pickup?</span>
                <div className="pickupSelectContainer">
                  <Select
                    value={pickUpOptions.filter((p) => p.value === pickup)}
                    options={pickUpOptions}
                    onChange={(e) => {
                      setValues({
                        ...values,
                        pickup: e.value,
                        // reset value of city if pickup is not selected
                        city: pickup === 1 ? city : ''
                      });
                    }}
                  />
                </div>
              </div>

              <div className="cardOption">
                <span className="cardLabel">Origin country</span>
                <div className="originCountrySelectContainer">
                  <Select
                    options={originCountryOptions}
                    placeholder="Select a country"
                    onChange={handleOriginCountryChange}
                    value={
                      originCountry === ''
                        ? ''
                        : {
                            label: originCountry,
                            value: originCountry
                          }
                    }
                  />
                </div>
              </div>

              {pickup === 1 && (
                <div className="cardOption">
                  <span className="cardLabel">City or Province</span>
                  <div className="citySelectContainer">
                    <Select
                      options={cityOptions}
                      placeholder="Type a city or province"
                      noOptionsMessage={() => 'Please type a city or province'}
                      onChange={(e) => {
                        setValues({
                          ...values,
                          city: e.value
                        });
                      }}
                      value={
                        city === ''
                          ? ''
                          : {
                              label: city,
                              value: city
                            }
                      }
                    />
                  </div>
                </div>
              )}
            </div>
          </>

          <div className="separator" />

          {/* Deliver */}
          <>
            <span className="cardSubtitle">Deliver</span>
            <div className="cardOptionContainer">
              <div className="cardOption">
                <span className="cardLabel">Destination country</span>
                <div className="destCountrySelectContainer">
                  <Select
                    options={destCountryOptions}
                    placeholder="Select or type a country"
                    noOptionsMessage={() => 'Please type the origin country'}
                    onChange={(e) => {
                      setValues({
                        ...values,
                        destCountry: e.value
                      });
                    }}
                    value={
                      destCountry === ''
                        ? ''
                        : {
                            label: destCountry,
                            value: destCountry
                          }
                    }
                  />
                </div>
              </div>
            </div>
          </>
          <div className="error">{error && msg}</div>
        </div>
      </div>
      <div className="checkResultsContainer">
        <span>Shipment total: 1 carton, 10 cubic meters, {weight} kgs</span>
        <button type="submit">Check Results</button>
      </div>
    </form>
  );
};

export default QuoteCard;
