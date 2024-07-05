import React from 'react';

const TransactionParams = ({ params }) => {
  return (
    <div>
      <h3>Transaction Parameters</h3>
      <p>To: {params.to}</p>
      <p>Value: {params.value}</p>
      <p>Gas: {params.gas}</p>
      <p>Gas Price: {params.gasPrice}</p>
    </div>
  );
};

export default TransactionParams;