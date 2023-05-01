import React from 'react';
import PropTypes from 'prop-types';
import {TheadTransaction, TableTransaction, TdTransaction} from "./TransactionHistory.styled.jsx"



const TransactionHistory = ({ items }) => {

    return (
<TableTransaction className="transaction-history">
  <TheadTransaction>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TheadTransaction>
<tbody>
    {items.map(({ id, type, amount, currency }) => (
    <tr key = {id}>
      <TdTransaction>{type}</TdTransaction>
      <TdTransaction>{amount}</TdTransaction>
      <TdTransaction>{currency}</TdTransaction>
    </tr>

))}
  </tbody>
</TableTransaction>
   )
 }

export default TransactionHistory;


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
      })
    ).isRequired
  };