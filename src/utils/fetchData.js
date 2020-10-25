import axios from 'axios';

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
