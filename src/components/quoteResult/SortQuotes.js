import React, { useEffect, useState } from 'react';
import Select from 'react-select';

const SortQuotes = ({ quoteResults, setQuoteResults }) => {
  const sortInitialState = {
    price: false,
    minDays: false,
    maxDays: false
  };

  const [sortValues, setSortValues] = useState(sortInitialState);

  const sortOptions = [
    { value: 'price', label: 'Price' },
    { value: 'minDays', label: 'Minimum delivery days' },
    { value: 'maxDays', label: 'Maximum delivery days' }
  ];

  useEffect(() => {
    sortQuotes();
  }, [sortValues]);

  const sortQuotes = () => {
    const sortedQuoteResults = [...quoteResults]; // to copy the value and not just the reference
    // sort by price ascending order
    if (sortValues.price) {
      sortedQuoteResults.sort((a, b) => {
        return a.total_price - b.total_price;
      });
    }
    // sort by min days and max days ascending order
    if (sortValues.minDays) {
      sortedQuoteResults.sort((a, b) => {
        return (
          a.min_days_delivery - b.min_days_delivery ||
          a.max_days_delivery - b.max_days_delivery
        );
      });
    }
    // sort by max days descending order
    if (sortValues.maxDays) {
      sortedQuoteResults.sort((a, b) => {
        return b.max_days_delivery - a.max_days_delivery;
      });
    }
    // Update quoteResults with the sortedResults
    setQuoteResults(sortedQuoteResults);
  };

  return (
    <div className="sortContainer">
      <span>Sort by:</span>
      <div className="sortSelect">
        <Select
          options={sortOptions}
          onChange={(e) => {
            setSortValues({
              // reset to initial state and update the sort value selected
              ...sortInitialState,
              [e.value]: true
            });
          }}
        />
      </div>
    </div>
  );
};

export default SortQuotes;
