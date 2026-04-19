export interface CalculatorField {
  id: string;
  label: string;
  type: 'number' | 'text' | 'select' | 'date';
  placeholder?: string;
  unit?: string;
  options?: { label: string; value: string }[];
  defaultValue?: string;
}

export const POPULAR_SCHEMAS: Record<string, CalculatorField[]> = {
  '/bmi': [
    { id: 'weight', label: 'Weight', type: 'number', unit: 'kg', placeholder: 'e.g. 70' },
    { id: 'height', label: 'Height', type: 'number', unit: 'cm', placeholder: 'e.g. 175' }
  ],
  '/bmr': [
    { id: 'weight', label: 'Weight', type: 'number', unit: 'kg' },
    { id: 'height', label: 'Height', type: 'number', unit: 'cm' },
    { id: 'age', label: 'Age', type: 'number' },
    { id: 'gender', label: 'Gender', type: 'select', options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }] }
  ],
  '/mortgage': [
    { id: 'principal', label: 'Home Price', type: 'number', unit: '$' },
    { id: 'downPayment', label: 'Down Payment', type: 'number', unit: '$' },
    { id: 'rate', label: 'Interest Rate', type: 'number', unit: '%' },
    { id: 'term', label: 'Loan Term', type: 'number', unit: 'years' }
  ],
  '/loan': [
    { id: 'amount', label: 'Loan Amount', type: 'number', unit: '$' },
    { id: 'rate', label: 'Interest Rate', type: 'number', unit: '%' },
    { id: 'term', label: 'Term', type: 'number', unit: 'months' }
  ],
  '/mpg': [
    { id: 'miles', label: 'Miles Driven', type: 'number' },
    { id: 'gallons', label: 'Fuel Used', type: 'number', unit: 'gallons' }
  ],
  '/car-depreciation': [
    { id: 'price', label: 'Purchase Price', type: 'number', unit: '$' },
    { id: 'age', label: 'Car Age', type: 'number', unit: 'years' },
    { id: 'condition', label: 'Condition', type: 'select', options: [{label: 'Excellent', value: 'exc'}, {label: 'Good', value: 'good'}, {label: 'Fair', value: 'fair'}]}
  ],
  '/age': [
    { id: 'birthDate', label: 'Birth Date', type: 'date' }
  ],
  '/chronological-age': [
     { id: 'birthDate', label: 'Birth Date', type: 'date' },
     { id: 'targetDate', label: 'Age at Date', type: 'date', defaultValue: new Date().toISOString().split('T')[0] }
  ],
  '/math/percentage': [
    { id: 'num1', label: 'Number 1', type: 'number' },
    { id: 'num2', label: 'Number 2', type: 'number' },
    { id: 'operation', label: 'Operation', type: 'select', options: [
        { label: 'What is X% of Y?', value: 'of' },
        { label: 'X is what % of Y?', value: 'is' },
        { label: 'Percentage increase/decrease', value: 'diff' }
    ]}
  ],
  '/dog-age': [
    { id: 'age', label: 'Dog Age', type: 'number', unit: 'years' },
    { id: 'size', label: 'Dog Size', type: 'select', options: [
        { label: 'Small (20 lbs or less)', value: 'small' },
        { label: 'Medium (21-50 lbs)', value: 'medium' },
        { label: 'Large (51-90 lbs)', value: 'large' },
        { label: 'Giant (Over 90 lbs)', value: 'giant' }
    ]}
  ],
  '/in-lbs-to-nm': [
    { id: 'value', label: 'Inch-Pounds', type: 'number', unit: 'in-lb' }
  ],
  '/nm-to-ft-lbs': [
    { id: 'value', label: 'Newton-Meters', type: 'number', unit: 'Nm' }
  ],
  '/pressure-conversion': [
    { id: 'value', label: 'Value', type: 'number' },
    { id: 'fromUnit', label: 'From Unit', type: 'select', options: [
        { label: 'PSI', value: 'psi' },
        { label: 'Bar', value: 'bar' },
        { label: 'Pascal', value: 'pa' },
        { label: 'ATM', value: 'atm' }
    ]},
    { id: 'toUnit', label: 'To Unit', type: 'select', options: [
        { label: 'PSI', value: 'psi' },
        { label: 'Bar', value: 'bar' },
        { label: 'Pascal', value: 'pa' },
        { label: 'ATM', value: 'atm' }
    ]}
  ],
  '/billion-to-trillion': [
    { id: 'value', label: 'Billions', type: 'number' }
  ],
  '/million-to-billion': [
    { id: 'value', label: 'Millions', type: 'number' }
  ],
  '/crore-to-lakh': [
    { id: 'value', label: 'Crore', type: 'number' }
  ],
  '/byte-conversion': [
    { id: 'value', label: 'Value', type: 'number' },
    { id: 'fromUnit', label: 'From', type: 'select', options: [
        { label: 'Bytes', value: 'b' },
        { label: 'Kilobytes (KB)', value: 'kb' },
        { label: 'Megabytes (MB)', value: 'mb' },
        { label: 'Gigabytes (GB)', value: 'gb' },
        { label: 'Terabytes (TB)', value: 'tb' }
    ]},
    { id: 'toUnit', label: 'To', type: 'select', options: [
        { label: 'Bytes', value: 'b' },
        { label: 'Kilobytes (KB)', value: 'kb' },
        { label: 'Megabytes (MB)', value: 'mb' },
        { label: 'Gigabytes (GB)', value: 'gb' },
        { label: 'Terabytes (TB)', value: 'tb' }
    ]}
  ],
  '/mbps-to-gbps': [
    { id: 'value', label: 'Mbps', type: 'number', unit: 'Mbps' }
  ],
  '/payback-period': [
    { id: 'investment', label: 'Total Investment', type: 'number', unit: '$' },
    { id: 'cashFlow', label: 'Annual Cash Flow', type: 'number', unit: '$' }
  ],
  '/business-loan': [
    { id: 'amount', label: 'Loan Amount', type: 'number', unit: '$' },
    { id: 'rate', label: 'Interest Rate', type: 'number', unit: '%' },
    { id: 'term', label: 'Term (Months)', type: 'number' }
  ],
  '/pe-ratio': [
    { id: 'price', label: 'Stock Price', type: 'number', unit: '$' },
    { id: 'eps', label: 'Earnings Per Share (EPS)', type: 'number', unit: '$' }
  ],
  '/eps-calculator': [
    { id: 'netIncome', label: 'Net Income', type: 'number', unit: '$' },
    { id: 'preferredDividends', label: 'Preferred Dividends', type: 'number', unit: '$' },
    { id: 'shares', label: 'Weighted Avg Shares', type: 'number' }
  ],
  '/roe-calculator': [
    { id: 'netIncome', label: 'Net Income', type: 'number', unit: '$' },
    { id: 'equity', label: 'Shareholder Equity', type: 'number', unit: '$' }
  ],
  '/market-cap': [
    { id: 'price', label: 'Share Price', type: 'number', unit: '$' },
    { id: 'shares', label: 'Total Shares Outstanding', type: 'number' }
  ],
  '/dividend-yield': [
    { id: 'dividend', label: 'Annual Dividend', type: 'number', unit: '$' },
    { id: 'price', label: 'Current Price', type: 'number', unit: '$' }
  ],
  '/pb-ratio': [
    { id: 'price', label: 'Stock Price', type: 'number', unit: '$' },
    { id: 'bookValue', label: 'Book Value Per Share', type: 'number', unit: '$' }
  ],
  '/debt-to-equity': [
    { id: 'totalDebt', label: 'Total Debt', type: 'number', unit: '$' },
    { id: 'totalEquity', label: 'Total Shareholder Equity', type: 'number', unit: '$' }
  ],
  '/quick-ratio': [
    { id: 'cash', label: 'Cash & Equivalents', type: 'number', unit: '$' },
    { id: 'receivables', label: 'Marketable Securities & Receivables', type: 'number', unit: '$' },
    { id: 'liabilities', label: 'Current Liabilities', type: 'number', unit: '$' }
  ],
  '/batting-average': [
    { id: 'hits', label: 'Hits', type: 'number' },
    { id: 'atBats', label: 'At Bats', type: 'number' }
  ],
  '/era-calculator': [
    { id: 'earnedRuns', label: 'Earned Runs', type: 'number' },
    { id: 'inningsPitched', label: 'Innings Pitched', type: 'number' }
  ],
  '/one-rep-max': [
    { id: 'weight', label: 'Weight Lifted', type: 'number' },
    { id: 'reps', label: 'Repetitions', type: 'number' }
  ],
  '/bench-press-1rm': [
    { id: 'weight', label: 'Weight', type: 'number' },
    { id: 'reps', label: 'Reps', type: 'number' }
  ],
  '/bike-gear': [
    { id: 'chainring', label: 'Chainring Teeth', type: 'number' },
    { id: 'cog', label: 'Rear Cog Teeth', type: 'number' },
    { id: 'circumference', label: 'Wheel Circumference (mm)', type: 'number', defaultValue: '2100' }
  ],
  '/cricket-strike-rate': [
    { id: 'runs', label: 'Total Runs', type: 'number' },
    { id: 'balls', label: 'Balls Faced', type: 'number' }
  ],
  '/steps-to-calories': [
    { id: 'steps', label: 'Steps', type: 'number' },
    { id: 'weight', label: 'Weight (kg)', type: 'number' }
  ],
};
