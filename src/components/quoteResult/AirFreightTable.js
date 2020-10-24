import React from 'react';

import '../../styles/components/quoteResult/AirFreightTable.css';

const AirFreightTable = () => {
  return (
    <table>
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
          <td>US$ 8.85/KG, 55.00 KG chargeable</td>
          <td>US$ 486.75</td>
        </tr>
        <tr>
          <td className="feeItem">Insurance</td>
          <td>Insurance not supported.</td>
          <td />
        </tr>
        <tr>
          <td className="feeItem">Commission</td>
          <td />
          <td>US$ 58.41</td>
        </tr>
        <tr>
          <td className="feeItem">Tax and duty</td>
          <td />
          <td>Not included</td>
        </tr>
        <tr>
          <td className="feeItem total">Total</td>
          <td>Valid until 31 Oct, 2020</td>
          <td className="totalPrice">US$ 545.16</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AirFreightTable;
