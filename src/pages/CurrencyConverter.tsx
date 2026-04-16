import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';


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

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About Currency Conversion</h2>
        <p>
          Currency conversion is the process of exchanging one currency for another at a specific rate, known as the exchange rate. These rates fluctuate constantly due to economic factors, market demand, and geopolitical events.
        </p>
        <p>
          Our <strong>currency converter 2026</strong> uses real-time data to provide you with the most accurate estimates for your travel planning, international shopping, or business needs.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Why Exchange Rates Change</h3>
        <p>
          Several factors influence the value of a currency:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Interest Rates:</strong> Higher interest rates often attract foreign investment, increasing the demand for that currency.</li>
          <li><strong>Inflation:</strong> Countries with lower inflation rates typically see their currency's value increase relative to others.</li>
          <li><strong>Economic Stability:</strong> Strong economic performance and political stability make a currency more attractive to investors.</li>
          <li><strong>Trade Balance:</strong> A country that exports more than it imports will generally have a stronger currency.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Tips for International Travelers</h3>
        <p>
          When traveling abroad, keep these tips in mind to get the best value for your money:
        </p>
        <ol className="list-decimal pl-6 space-y-2">
          <li><strong>Avoid Airport Exchanges:</strong> Kiosks at airports often have the least favorable rates and high fees.</li>
          <li><strong>Use Local ATMs:</strong> Withdrawing local currency from an ATM often provides a better rate than a currency exchange booth.</li>
          <li><strong>Pay in Local Currency:</strong> If a merchant offers to charge your card in your home currency, decline. This is called "Dynamic Currency Conversion" and usually includes hidden fees.</li>
        </ol>
      </div>
    </div>
  );
};
