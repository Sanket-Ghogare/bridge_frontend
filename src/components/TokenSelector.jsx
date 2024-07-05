import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TokenSelector = ({ onTokenSelect }) => {
    const [tokens, setTokens] = useState([
        { id: 'token1', name: 'Token 1' },
        { id: 'token2', name: 'Token 2' },
        { id: 'token3', name: 'Token 3' },
      ]);
  const [selectedToken, setSelectedToken] = useState('');
  const [selectedChain, setSelectedChain] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await axios.get('https://bridge-backend-3.onrender.com/tokens');
        setTokens(response.data.tokens);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching tokens:', error);
        setIsLoading(false);
      }
    };
    fetchTokens();
  }, []);

  const handleTokenChange = (event) => {
    setSelectedToken(event.target.value);
  };

  const handleChainChange = (event) => {
    setSelectedChain(event.target.value);
    onTokenSelect(selectedToken, event.target.value);
  };

  return (
    <div>
      <label htmlFor="token">Token:  </label>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <select id="token" value={selectedToken} onChange={handleTokenChange}>
          <option value="">Select a token</option>
          <option value="token1">Token 1</option>
          <option value="token2">Token 2</option>
          <option value="token3">Token 3</option>
        </select>
      )}

      <label htmlFor="chain">Chain:  </label>
      <select id="chain" value={selectedChain} onChange={handleChainChange}>
        <option value="">Select a chain</option>
        <option value="ethereum">Ethereum</option>
        <option value="polygon">Polygon</option>
        <option value="binance">Binance</option>
      </select>
    </div>
  );
};

export default TokenSelector;

