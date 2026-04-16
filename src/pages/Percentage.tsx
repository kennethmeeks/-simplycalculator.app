import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { parseInput } from '@/src/lib/calculatorUtils';

export const PercentageCalculator: React.FC = () => {
  const [val1, setVal1] = useState<number | string>(20);
  const [val2, setVal2] = useState<number | string>(100);
  const [result1, setResult1] = useState(0);

  const [val3, setVal3] = useState<number | string>(50);
  const [val4, setVal4] = useState<number | string>(200);
  const [result2, setResult2] = useState(0);

  useEffect(() => {
    const v1 = parseInput(val1.toString());
    const v2 = parseInput(val2.toString());
    const v3 = parseInput(val3.toString());
    const v4 = parseInput(val4.toString());

    setResult1((v1 / 100) * v2);
    setResult2(v4 !== 0 ? (v3 / v4) * 100 : 0);
  }, [val1, val2, val3, val4]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Percentage Calculator | Calculate Percentages with Formula & Steps</title>
        <meta name="description" content="Free online percentage calculator for 2026. Calculate percentages, percentage change, and more with clear steps and formulas for easy understanding." />
      </Helmet>

      <h1>Percentage Calculator</h1>
      <p>Calculate percentages in various forms.</p>

      

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="space-y-8">
          <div className="calculator-container">
            <div className="section-title text-slate-900 font-bold mb-4">What is X% of Y?</div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm">What is</span>
                <input 
                  type="number" 
                  value={val1} 
                  onChange={(e) => setVal1(e.target.value)} 
                  className="input-field w-20" 
                />
                <span className="text-sm">% of</span>
                <input 
                  type="number" 
                  value={val2} 
                  onChange={(e) => setVal2(e.target.value)} 
                  className="input-field w-24" 
                />
                <span className="text-sm">?</span>
              </div>
              <div className="result-box bg-slate-50 p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-700">Result: </span>
                <span className="text-xl font-bold text-[#0066cc]">{result1.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="calculator-container">
            <div className="section-title text-slate-900 font-bold mb-4">X is what % of Y?</div>
            <div className="space-y-4">
              <div className="flex items-center gap-2 flex-wrap">
                <input 
                  type="number" 
                  value={val3} 
                  onChange={(e) => setVal3(e.target.value)} 
                  className="input-field w-20" 
                />
                <span className="text-sm">is what % of</span>
                <input 
                  type="number" 
                  value={val4} 
                  onChange={(e) => setVal4(e.target.value)} 
                  className="input-field w-24" 
                />
                <span className="text-sm">?</span>
              </div>
              <div className="result-box bg-slate-50 p-4 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-700">Result: </span>
                <span className="text-xl font-bold text-[#0066cc]">{result2.toFixed(2)}%</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          
          <div className="mt-8 calculator-container p-6 bg-white rounded-xl shadow-sm border border-slate-200">
            <div className="section-title text-slate-900 font-bold mb-4 border-b pb-2">Common Percentage Formulas</div>
            <ul className="space-y-2 text-slate-600 list-disc pl-5">
              <li>Percentage = (Value / Total Value) × 100</li>
              <li>Value = (Percentage / 100) × Total Value</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">About Percentage Calculations</h2>
        <p>
          Percentages are a fundamental part of our daily lives, used in everything from calculating sales tax and discounts to understanding investment returns and statistical data. Our <strong>percentage calculator with steps and formula</strong> provides a simple and efficient way to perform these common calculations without the need for manual math. In 2026, being able to quickly determine a percentage is a vital skill for both personal finance and professional tasks.
        </p>
        <p>
          Whether you're a student working on a math problem, a shopper looking for the best deal, or a business owner analyzing growth, this tool simplifies the process. We don't just give you the answer; we provide the context you need to understand the relationship between the numbers.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Use the Percentage Calculator</h3>
        <p>
          We offer two primary calculation modes to cover the most common needs:
        </p>
        <ol>
          <li><strong>Find a Percentage of a Value (What is X% of Y?):</strong> Use this when you know the percentage and the total amount. For example, finding a 15% tip on a $50 bill.
            <ul className="list-disc pl-5 mt-2">
              <li><strong>Formula:</strong> (Percentage / 100) × Total Value</li>
              <li><strong>Step:</strong> Convert the percentage to a decimal (divide by 100) and multiply by the total.</li>
            </ul>
          </li>
          <li className="mt-4"><strong>Find the Percentage Ratio (X is what % of Y?):</strong> Use this when you want to know what portion one number represents of another. For example, if you've saved $50 out of a $200 goal.
            <ul className="list-disc pl-5 mt-2">
              <li><strong>Formula:</strong> (Value / Total Value) × 100</li>
              <li><strong>Step:</strong> Divide the part by the whole and multiply the result by 100.</li>
            </ul>
          </li>
        </ol>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Common Percentage Use Cases</h3>
        <p>
          Percentages are used in various scenarios, including:
        </p>
        <ul>
          <li><strong>Sales Tax:</strong> Calculating the additional cost added to a purchase.</li>
          <li><strong>Discounts:</strong> Determining how much you save during a sale.</li>
          <li><strong>Interest Rates:</strong> Understanding the cost of borrowing or the return on savings.</li>
          <li><strong>Statistics:</strong> Comparing data sets of different sizes.</li>
          <li><strong>Grades:</strong> Calculating your score on a test or assignment.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What does "percent" actually mean?</p>
            <p>The word "percent" comes from the Latin "per centum," which means "by the hundred." It is a way of expressing a number as a fraction of 100. So, 50% is literally 50 per 100, or 0.5.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I calculate a percentage increase?</p>
            <p>To find a percentage increase, subtract the original value from the new value, divide that result by the original value, and then multiply by 100. The formula is: ((New - Old) / Old) * 100.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">Can a percentage be greater than 100%?</p>
            <p>Yes! A percentage greater than 100% simply means that the value is more than the original total. For example, if a company's revenue grows from $1M to $2.5M, that's a 150% increase, and the new total is 250% of the original.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I convert a decimal to a percentage?</p>
            <p>To convert a decimal to a percentage, simply multiply the decimal by 100 and add the "%" sign. For example, 0.75 becomes 75%.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Example Calculation</h3>
        <p>
          If you want to find <strong>25%</strong> of <strong>$80</strong>, you would divide 25 by 100 to get 0.25, then multiply 80 by 0.25, resulting in <strong>$20</strong>. Conversely, if you want to know what percentage <strong>$20</strong> is of <strong>$80</strong>, you would divide 20 by 80 (0.25) and multiply by 100 to get <strong>25%</strong>.
        </p>
      </div>
    </div>
  );
};
