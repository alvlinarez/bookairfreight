import React, { useContext } from 'react';

import '../../styles/components/quoteResult/AirFreightTable.css';
import QuoteContext from '../../context/QuoteContext';

const AirFreightTable = ({ price, maxDaysDelivery, showDetails }) => {
  const quoteContext = useContext(QuoteContext);
  const {
    quote: { weight }
  } = quoteContext;

  // Didnt know the shipping cost and the price per kilo neither
  // so I made this custom operation but at the end it shows the real price
  const shippingCost = parseFloat(weight) * 7.5;
  const commission = price - shippingCost;

  return (
    <table style={{ display: showDetails ? 'table' : 'none' }}>
      <thead>
        <tr>
          <th>Fee items</th>
          <th>Notes</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="feeItem">Shipping cost</td>
          <td>US$ 7.5/KG, {weight} KG chargeable</td>
          <td>US$ {shippingCost.toFixed(2)}</td>
        </tr>
        <tr>
          <td className="feeItem">Insurance</td>
          <td>Insurance not supported.</td>
          <td />
        </tr>
        <tr>
          <td className="feeItem">Commission</td>
          <td />
          <td>US$ {commission.toFixed(2)}</td>
        </tr>
        <tr>
          <td className="feeItem">Tax and duty</td>
          <td />
          <td>Not included</td>
        </tr>
        <tr>
          <td className="feeItem total">Total</td>
          <td>Valid until {maxDaysDelivery}, 2020</td>
          <td className="totalPrice">US$ {price}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AirFreightTable;
