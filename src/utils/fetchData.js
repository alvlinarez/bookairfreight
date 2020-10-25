import axios from 'axios';

// Needed to add value and label keys to all data values to display on all selects
export const fetchOriginCountry = async (
  selectOptionsValues,
  setSelectOptionsValues
) => {
  try {
    const { data } = await axios.get(
      'https://api-dev.bookairfreight.com/v1/interview/starting-countries'
    );
    const countries = data.countries.map((country) => {
      return {
        value: country,
        label: country
      };
    });
    setSelectOptionsValues({
      ...selectOptionsValues,
      originCountryOptions: countries
    });
  } catch (e) {
    console.log(e);
    setSelectOptionsValues({
      ...selectOptionsValues,
      originCountryOptions: []
    });
  }
};

export const fetchCityAndCountry = async (
  originCountry,
  pickup,
  selectOptionsValues,
  setSelectOptionsValues
) => {
  try {
    const citiesUrl = `https://api-dev.bookairfreight.com/v1/interview/pickup-locations?country=${originCountry}`;
    const destCountriesUrl = `https://api-dev.bookairfreight.com/v1/interview/dest-countries?starting_country=${originCountry}`;
    // If pickup city is selected only
    if (pickup === 1) {
      const [citiesRes, destCountriesRes] = await Promise.all([
        axios.get(citiesUrl),
        axios.get(destCountriesUrl)
      ]);
      const cities = citiesRes.data.cities.map((city) => {
        return {
          value: city,
          label: city
        };
      });
      const countries = destCountriesRes.data.countries.map((country) => {
        return {
          value: country,
          label: country
        };
      });
      setSelectOptionsValues({
        ...selectOptionsValues,
        cityOptions: cities,
        destCountryOptions: countries
      });
    } else {
      const { data } = await axios.get(destCountriesUrl);
      const countries = data.countries.map((country) => {
        return {
          value: country,
          label: country
        };
      });
      setSelectOptionsValues({
        ...selectOptionsValues,
        destCountryOptions: countries
      });
    }
  } catch (e) {
    console.log(e);
    setSelectOptionsValues({
      ...selectOptionsValues,
      cityOptions: [],
      destCountryOptions: []
    });
  }
};

export const fetchQuoteResults = async (quote, setQuoteResults, setLoading) => {
  // Verifying if quote values are not empty
  const { weight, pickup, originCountry, city, destCountry } = quote;
  if (weight === '' && originCountry === '' && destCountry === '') {
    return;
  }
  try {
    const { data } = await axios.get(
      `https://api-dev.bookairfreight.com/v1/interview/quotes?total_weight=${weight}&delivery_start_country=${originCountry}&delivery_dest_country=${destCountry}${
        pickup === 1 ? `&pickup_start_city=${city}` : ``
      }`
    );
    setQuoteResults(data.quotes);
    // Disable loading spinner
    setLoading(false);
  } catch (e) {
    console.log(e);
    setQuoteResults([]);
  }
};
