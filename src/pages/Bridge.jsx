// Bridge.jsx
import React, { useState } from 'react';
import axios from 'axios';
import TokenSelector from '../components/TokenSelector';
import QuoteDisplay from '../components/QuoteDisplay';
import TransactionParams from '../components/TransactionParams';

const Bridge = () => {
  const [quote, setQuote] = useState(null);
  const [params, setParams] = useState(null);
  const [showQuote, setShowQuote] = useState(false);
  const [showParams, setShowParams] = useState(false);

  const handleTokenSelect = async (token, chain) => {
    try {
      const quoteResponse = await axios.post('https://bridge-backend-3.onrender.com/quotes', { token, chain });
      setQuote(quoteResponse.data);

      const paramsResponse = await axios.post('https://bridge-backend-3.onrender.com/params', { token, chain });
      setParams(paramsResponse.data);
    } catch (error) {
      console.error('Error fetching quote or parameters:', error);
    }
  };

  const handleQuoteClick = () => {
    setShowQuote(true);
    setShowParams(false);
  };

  const handleParamsClick = () => {
    setShowQuote(false);
    setShowParams(true);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Bridge</h1>
        <TokenSelector onTokenSelect={handleTokenSelect} />
        <div className="flex justify-center mt-6">
          <button
            className={`px-4 py-2 rounded-md mr-4 ${
              showQuote ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
            }`}
            onClick={handleQuoteClick}
          >
            Show Quote
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              showParams ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 border border-blue-500'
            }`}
            onClick={handleParamsClick}
          >
            Show Transaction Params
          </button>
        </div>
        {showQuote && quote && <QuoteDisplay quote={quote} />}
        {showParams && params && <TransactionParams params={params} />}
      </div>
    </div>
  );
};

export default Bridge;