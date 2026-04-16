import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Calculator, Info, Hash } from 'lucide-react';

export const PrimeNumberChecker: React.FC = () => {
  const [number, setNumber] = useState<number>(7);
  const [isPrime, setIsPrime] = useState<boolean | null>(null);

  const checkPrime = (num: number): boolean => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  };

  useEffect(() => {
    setIsPrime(checkPrime(number));
  }, [number]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Prime Number Checker | Check if a Number is Prime</title>
        <meta name="description" content="Free online prime number checker. Check if a number is prime and find its factors for 2026." />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
          <Hash className="w-8 h-8 text-[#0066cc]" />
          Prime Number Checker
        </h1>
        <p className="text-slate-600">Check if a number is prime and find its factors.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="input-label">Enter a Number</label>
                <input 
                  type="number" 
                  value={number} 
                  onChange={(e) => setNumber(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded p-6">
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5" />
              What is a Prime Number?
            </h2>
            <p className="text-slate-600 text-sm mb-4">
              A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
            </p>
            <ul className="text-slate-600 text-sm space-y-3 list-disc pl-4">
              <li><strong>Prime Numbers:</strong> 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ...</li>
              <li><strong>Composite Numbers:</strong> Numbers that have more than two factors.</li>
              <li><strong>Number 1:</strong> Is neither prime nor composite.</li>
              <li><strong>Even Prime:</strong> 2 is the only even prime number.</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Result
            </h2>
            <div className="space-y-6">
              <div className="text-center py-8">
                <div className={`text-6xl font-bold mb-4 ${isPrime ? 'text-green-400' : 'text-red-400'}`}>
                  {isPrime ? 'PRIME' : 'NOT PRIME'}
                </div>
                <div className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                  {number} is {isPrime ? 'a prime' : 'a composite'} number
                </div>
              </div>
            </div>
          </div>
          
          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4" />
              Math Tip
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Prime numbers are the building blocks of all other numbers. Every composite number can be uniquely factored into a product of prime numbers.
            </p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">Understanding Prime Numbers in 2026</h2>
        <p>
          Our <strong>prime number checker</strong> is a simple and efficient tool for checking if a number is prime. By entering the number, we can reveal its primality and its associated factors.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">The Importance of Prime Numbers</h3>
        <p>
          Prime numbers are essential for various mathematical and scientific applications, including cryptography and number theory. They're also used in everything from computer security to genetic research.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Key Components of Prime Numbers</h3>
        <ul>
          <li><strong>Natural Number:</strong> A positive integer (1, 2, 3, ...).</li>
          <li><strong>Divisors:</strong> Numbers that divide another number without leaving a remainder.</li>
          <li><strong>Composite Number:</strong> A number that has more than two factors.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions</h3>
        <div className="space-y-4 pb-12">
          <div>
            <p className="font-bold text-slate-900">What is the largest known prime number?</p>
            <p>The largest known prime number is constantly changing as new ones are discovered. As of early 2026, it has millions of digits.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I find prime numbers?</p>
            <p>You can find prime numbers using various methods, including the Sieve of Eratosthenes and trial division.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
