import React from 'react';

const QuoteDisplay = ({ quote }) => {
  return (
    <div>
      <h3>Quote</h3>
      <p>Amount:   {quote.amount}</p>
      <p>Rate: {quote.rate}</p>
      <p>Fee: {quote.fee}</p>
    </div>
  );
};

export default QuoteDisplay;