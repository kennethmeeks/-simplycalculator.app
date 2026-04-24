import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';


const currencies = [
  'USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'INR', 'BRL', 'MXN', 'ZAR', 'HKD', 'SGD', 'NZD'
];

export const CurrencyConverter: React.FC = () => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState<number>(100);
  const [rate, setRate] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRate = async () => {
      setLoading(true);
      setError(null);
      try {
        // Using a free, public API for currency rates
        const response = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
        const data = await response.json();
        if (data.result === 'success') {
          const newRate = data.rates[toCurrency];
          setRate(newRate);
          setResult(amount * newRate);
        } else {
          throw new Error('Failed to fetch exchange rates');
        }
      } catch (err) {
        setError('Could not fetch exchange rates. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchRate();
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Currency Converter | Real-Time Exchange Rates 2026</title>
        <meta name="description" content="Free online currency converter for 2026. Get real-time exchange rates and convert between major global currencies instantly." />
      </Helmet>

      <h1>Currency Converter</h1>
      <p>Convert between major global currencies with real-time exchange rates.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="calculator-container">
          <div className="section-title">Conversion Details</div>
          <div className="space-y-4">
            <div className="input-group">
              <label className="input-label">Amount</label>
              <input 
                type="number" 
                value={amount} 
                onChange={(e) => setAmount(Number(e.target.value))} 
                className="input-field w-full" 
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="input-group">
                <label className="input-label">From</label>
                <select 
                  value={fromCurrency} 
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="input-field w-full"
                >
                  {currencies.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="input-group">
                <label className="input-label">To</label>
                <select 
                  value={toCurrency} 
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="input-field w-full"
                >
                  {currencies.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="calculator-container">
            <div className="section-title">Result</div>
            <div className="result-box">
              {loading ? (
                <div className="text-center py-4">Fetching latest rates...</div>
              ) : error ? (
                <div className="text-center text-red-600 py-4">{error}</div>
              ) : (
                <div className="text-center space-y-2">
                  <div className="text-sm text-slate-500">{amount.toLocaleString()} {fromCurrency} equals</div>
                  <div className="text-3xl font-bold text-[#0066cc]">
                    {result.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {toCurrency}
                  </div>
                  <div className="text-xs text-slate-400 mt-4">
                    1 {fromCurrency} = {rate.toFixed(4)} {toCurrency}
                  </div>
                </div>
              )}
            </div>
          </div>
          
        </div>
      </div>

      <CalculatorSEO 
        name="Currency Converter" 
        path="/currency-converter" 
        description="Convert between major global currencies with real-time 2026 exchange rates. Ideal for travel, business, and international shopping."
      />
    </div>
  );
};
