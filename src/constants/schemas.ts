export interface CalculatorField {
  id: string;
  label: string;
  type: 'number' | 'text' | 'select' | 'date';
  placeholder?: string;
  unit?: string;
  options?: { label: string; value: string }[];
  defaultValue?: string;
  description?: string;
}

export const POPULAR_SCHEMAS: Record<string, CalculatorField[]> = {
  '/car-refinance': [
    { id: 'loanBalance', label: 'Current Loan Balance', type: 'number', unit: '$' },
    { id: 'currentRate', label: 'Current Interest Rate', type: 'number', unit: '%' },
    { id: 'currentPayment', label: 'Current Monthly Payment', type: 'number', unit: '$' },
    { id: 'newRate', label: 'New Interest Rate', type: 'number', unit: '%' },
    { id: 'newTerm', label: 'New Loan Term', type: 'number', unit: 'months' }
  ],
  '/drive-time': [
    { id: 'distance', label: 'Trip Distance', type: 'number', unit: 'miles' },
    { id: 'speed', label: 'Average Speed', type: 'number', unit: 'mph' }
  ],
  '/fuel-cost': [
    { id: 'distance', label: 'Trip Distance', type: 'number', unit: 'miles' },
    { id: 'efficiency', label: 'Fuel Efficiency', type: 'number', unit: 'MPG' },
    { id: 'pricePerUnit', label: 'Fuel Price', type: 'number', unit: 'per gallon' }
  ],
  '/0-60-time': [
    { id: 'power', label: 'Horsepower', type: 'number', unit: 'hp' },
    { id: 'weight', label: 'Vehicle Weight', type: 'number', unit: 'lbs' }
  ],
  '/boost-horsepower': [
    { id: 'naPower', label: 'Naturally Aspirated HP', type: 'number', unit: 'hp' },
    { id: 'boost', label: 'Turbo/Supercharger Boost', type: 'number', unit: 'psi' }
  ],
  '/compression-ratio': [
    { id: 'cylinderVolume', label: 'Cylinder Volume (Max)', type: 'number', unit: 'cc' },
    { id: 'clearanceVolume', label: 'Clearance Volume (Min)', type: 'number', unit: 'cc' }
  ],
  '/bmi': [
    { id: 'weight', label: 'Body Weight', type: 'number', unit: 'kg', placeholder: 'e.g. 70', description: 'Used to determine weight category.' },
    { id: 'height', label: 'Body Height', type: 'number', unit: 'cm', placeholder: 'e.g. 175', description: 'Used alongside weight for the BMI ratio.' }
  ],
  '/bmr': [
    { id: 'weight', label: 'Body Weight', type: 'number', unit: 'kg', description: 'Base weight for metabolic energy calculation.' },
    { id: 'height', label: 'Body Height', type: 'number', unit: 'cm', description: 'Vertical height in centimeters.' },
    { id: 'age', label: 'Current Age', type: 'number', description: 'Metabolism typically slows as age increases.' },
    { id: 'gender', label: 'Gender', type: 'select', options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }], description: 'Biological gender impacts caloric needs.' }
  ],
  '/mortgage': [
    { id: 'principal', label: 'Home Purchase Price', type: 'number', unit: '$', placeholder: 'e.g. 450000', description: 'Total purchase price of the home.' },
    { id: 'downPayment', label: 'Down Payment', type: 'number', unit: '$', placeholder: 'e.g. 90000', description: 'Initial cash payment towards the purchase.' },
    { id: 'rate', label: 'Interest Rate', type: 'number', unit: '%', placeholder: 'e.g. 6.5', description: 'Annual interest rate for the loan.' },
    { id: 'term', label: 'Loan Term', type: 'number', unit: 'years', placeholder: 'e.g. 30', description: 'Number of years to repay the loan.' }
  ],
  '/loan': [
    { id: 'amount', label: 'Total Loan Amount', type: 'number', unit: '$', placeholder: 'e.g. 25000', description: 'The total amount you are borrowing.' },
    { id: 'rate', label: 'Annual Interest Rate', type: 'number', unit: '%', placeholder: 'e.g. 7.9', description: 'Annual interest rate for this loan.' },
    { id: 'term', label: 'Loan Term', type: 'number', unit: 'months', placeholder: 'e.g. 60', description: 'Repayment period in months.' }
  ],
  '/mpg': [
    { id: 'miles', label: 'Miles Driven', type: 'number' },
    { id: 'gallons', label: 'Fuel Used', type: 'number', unit: 'gallons' }
  ],
  '/car-depreciation': [
    { id: 'price', label: 'Purchase Price', type: 'number', unit: '$' },
    { id: 'age', label: 'Car Age', type: 'number', unit: 'years' },
    { id: 'condition', label: 'Vehicle Condition', type: 'select', options: [{label: 'Excellent', value: 'exc'}, {label: 'Good', value: 'good'}, {label: 'Fair', value: 'fair'}]}
  ],
  '/calibration-curve': [
    { id: 'xValues', label: 'X Values (Standards)', type: 'text', placeholder: 'e.g. 0, 1, 5, 10, 20' },
    { id: 'yValues', label: 'Y Values (Response)', type: 'text', placeholder: 'e.g. 0, 0.12, 0.58, 1.15, 2.31' },
    { id: 'unknownY', label: 'Unknown Sample Y (Optional)', type: 'number', placeholder: 'Interpolate X for this Y' }
  ],
  '/wealth-inequality-index': [
    { id: 'values', label: 'Income or Wealth Values', type: 'text', placeholder: 'e.g. 10000, 25000, 50000, 100000' }
  ],
  '/money-factor': [
    { id: 'factor', label: 'Money Factor', type: 'number', placeholder: 'e.g. 0.0025', description: 'Often found on lease contracts; multiply by 2400 for APR.' }
  ],
  '/age': [
    { id: 'birthDate', label: 'Birth Date', type: 'date' }
  ],
  '/compound-interest': [
    { id: 'principal', label: 'Initial Investment', type: 'number', unit: '$', placeholder: 'e.g. 1000', description: 'The starting amount of your investment.' },
    { id: 'rate', label: 'Interest Rate', type: 'number', unit: '%', placeholder: 'e.g. 5', description: 'The annual interest percentage.' },
    { id: 'term', label: 'Time Period', type: 'number', unit: 'years', placeholder: 'e.g. 10', description: 'How long you plan to keep the money invested.' },
    { id: 'compounding', label: 'Compounding Frequency', type: 'select', options: [
      { label: 'Monthly', value: '12' },
      { label: 'Quarterly', value: '4' },
      { label: 'Semi-Annually', value: '2' },
      { label: 'Annually', value: '1' }
    ], description: 'How often interest is added back to the principal.'}
  ],
  '/salary': [
    { id: 'amount', label: 'Gross Salary Amount', type: 'number', unit: '$', placeholder: 'e.g. 50000', description: 'The gross amount earned.' },
    { id: 'frequency', label: 'Pay Frequency', type: 'select', options: [
      { label: 'Hourly (40h/week)', value: 'hourly' },
      { label: 'Weekly', value: 'weekly' },
      { label: 'Bi-Weekly', value: 'biweekly' },
      { label: 'Monthly', value: 'monthly' },
      { label: 'Annually', value: 'annual' }
    ], description: 'Select how often you receive this payment.'}
  ],
  '/chronological-age': [
     { id: 'birthDate', label: 'Birth Date', type: 'date' },
     { id: 'targetDate', label: 'Age at Date', type: 'date', defaultValue: new Date().toISOString().split('T')[0] }
  ],
  '/math/percentage': [
    { id: 'num1', label: 'Reference Value (X)', type: 'number' },
    { id: 'num2', label: 'Total Value (Y)', type: 'number' },
    { id: 'operation', label: 'Percentage Operation', type: 'select', options: [
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
  '/afr': [
    { id: 'fuel', label: 'Fuel Type', type: 'select', options: [
      { label: 'Gasoline (14.7)', value: '14.7' },
      { label: 'Ethanol (9.0)', value: '9.0' },
      { label: 'Methanol (6.47)', value: '6.47' },
      { label: 'E85 (9.76)', value: '9.76' }
    ]},
    { id: 'lambda', label: 'Measured Lambda (λ)', type: 'number', placeholder: 'e.g. 0.85' }
  ],
  '/pressure': [
    { id: 'value', label: 'Pressure Amount', type: 'number' },
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
    { id: 'value', label: 'Billions Amount', type: 'number' }
  ],
  '/million-to-billion': [
    { id: 'value', label: 'Millions Amount', type: 'number' }
  ],
  '/crore-to-lakh': [
    { id: 'value', label: 'Crore Amount', type: 'number' }
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
    { id: 'price', label: 'Stock Current Price', type: 'number', unit: '$' },
    { id: 'eps', label: 'Trailing Earnings Per Share (EPS)', type: 'number', unit: '$' }
  ],
  '/eps': [
    { id: 'netIncome', label: 'Net Income', type: 'number', unit: '$' },
    { id: 'preferredDividends', label: 'Preferred Dividends', type: 'number', unit: '$' },
    { id: 'shares', label: 'Weighted Avg Shares', type: 'number' }
  ],
  '/roe': [
    { id: 'netIncome', label: 'Net Income', type: 'number', unit: '$' },
    { id: 'equity', label: 'Shareholder Equity', type: 'number', unit: '$' }
  ],
  '/market-cap': [
    { id: 'price', label: 'Share Price', type: 'number', unit: '$' },
    { id: 'shares', label: 'Total Shares Outstanding', type: 'number' }
  ],
  '/dividend-yield': [
    { id: 'dividend', label: 'Annual Dividend Per Share', type: 'number', unit: '$' },
    { id: 'price', label: 'Current Stock Price', type: 'number', unit: '$' }
  ],
  '/pb-ratio': [
    { id: 'price', label: 'Market Price Per Share', type: 'number', unit: '$' },
    { id: 'bookValue', label: 'Book Value Per Share (BVPS)', type: 'number', unit: '$' }
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
    { id: 'hits', label: 'Total Base Hits', type: 'number' },
    { id: 'atBats', label: 'At Bats', type: 'number' }
  ],
  '/era': [
    { id: 'earnedRuns', label: 'Earned Runs', type: 'number' },
    { id: 'inningsPitched', label: 'Innings Pitched', type: 'number' }
  ],
  '/one-rep-max': [
    { id: 'weight', label: 'Weight Lifted', type: 'number' },
    { id: 'reps', label: 'Repetitions', type: 'number' }
  ],
  '/bench-press-1rm': [
    { id: 'weight', label: 'Lifted Weight', type: 'number' },
    { id: 'reps', label: 'Repetitions (Reps)', type: 'number' }
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
    { id: 'steps', label: 'Total Daily Steps', type: 'number' },
    { id: 'weight', label: 'Person Weight', type: 'number' }
  ],
  '/tip': [
    { id: 'billAmount', label: 'Bill Amount', type: 'number', unit: '$' },
    { id: 'tipPercent', label: 'Tip Percentage', type: 'number', unit: '%' },
    { id: 'numPeople', label: 'Number of People', type: 'number', defaultValue: '1' }
  ],
  '/grade': [
    { id: 'currentGrade', label: 'Current Grade', type: 'number', unit: '%' },
    { id: 'targetGrade', label: 'Target Grade', type: 'number', unit: '%' },
    { id: 'finalWeight', label: 'Final Exam Weight', type: 'number', unit: '%' }
  ],
  '/simple-interest': [
    { id: 'principal', label: 'Principal Amount', type: 'number', unit: '$' },
    { id: 'rate', label: 'Annual Interest Rate', type: 'number', unit: '%' },
    { id: 'time', label: 'Loan Duration', type: 'number' },
    { id: 'timeUnit', label: 'Duration Unit', type: 'select', options: [{label: 'Years', value: 'years'}, {label: 'Months', value: 'months'}, {label: 'Days', value: 'days'}], defaultValue: 'years' }
  ],
  '/math/percent-error': [
    { id: 'experimental', label: 'Experimental Value (Measured)', type: 'number' },
    { id: 'theoretical', label: 'Theoretical Value (Accepted)', type: 'number' }
  ],
  '/12-hour-shift-pay': [
    { id: 'hourlyRate', label: 'Hourly Rate', type: 'number', unit: '$' },
    { id: 'shiftDifferential', label: 'Shift Differential (per hour)', type: 'number', unit: '$', defaultValue: '0' },
    { id: 'hoursPerShift', label: 'Hours per Shift', type: 'number', defaultValue: '12' },
    { id: 'shiftsPerWeek', label: 'Shifts per Week', type: 'number', defaultValue: '3' }
  ],
  '/3x-rent': [
    { id: 'monthlyRent', label: 'Target Monthly Rent', type: 'number', unit: '$' },
    { id: 'annualIncome', label: 'Total Annual Gross Income', type: 'number', unit: '$' }
  ],
  '/coordinates-converter': [
    { id: 'latitude', label: 'Latitude', type: 'number', placeholder: 'e.g. 40.7128' },
    { id: 'longitude', label: 'Longitude', type: 'number', placeholder: 'e.g. -74.0060' },
    { id: 'format', label: 'Output Format', type: 'select', options: [
      { label: 'Degrees Minutes Seconds (DMS)', value: 'dms' },
      { label: 'Decimal Degrees (DD)', value: 'dd' }
    ]}
  ],
  '/401k': [
    { id: 'salary', label: 'Gross Annual Salary', type: 'number', unit: '$' },
    { id: 'contribution', label: 'Your Contribution Rate', type: 'number', unit: '%' },
    { id: 'match', label: 'Employer Match Rate', type: 'number', unit: '%' },
    { id: 'years', label: 'Years Until Retirement', type: 'number' }
  ],
  '/overtime': [
    { id: 'hourlyRate', label: 'Regular Hourly Rate', type: 'number', unit: '$' },
    { id: 'regularHours', label: 'Regular Hours Worked', type: 'number', defaultValue: '40' },
    { id: 'overtimeHours', label: 'Overtime Hours Worked', type: 'number' },
    { id: 'otMultiplier', label: 'Overtime Multiplier (1.5x)', type: 'number', defaultValue: '1.5' }
  ],
  '/roi': [
    { id: 'invested', label: 'Amount Invested', type: 'number', unit: '$' },
    { id: 'returned', label: 'Amount Returned', type: 'number', unit: '$' },
    { id: 'years', label: 'Time Period (Optional)', type: 'number', unit: 'years' }
  ],
  '/auto-loan': [
    { id: 'price', label: 'Vehicle price', type: 'number', unit: '$' },
    { id: 'downPayment', label: 'Down Payment', type: 'number', unit: '$' },
    { id: 'rate', label: 'Interest Rate', type: 'number', unit: '%' },
    { id: 'term', label: 'Loan Term', type: 'number', unit: 'months' }
  ],
  '/hourly-to-salary': [
    { id: 'hourlyRate', label: 'Hourly Wage', type: 'number', unit: '$' },
    { id: 'hoursPerWeek', label: 'Hours per Week', type: 'number', defaultValue: '40' }
  ],
  '/take-home-pay': [
    { id: 'salary', label: 'Gross Annual Salary', type: 'number', unit: '$' },
    { id: 'state', label: 'US State (e.g., CA, TX)', type: 'text', placeholder: 'e.g. CA' },
    { id: 'status', label: 'Tax Filing Status', type: 'select', options: [
      { label: 'Single', value: 'single' },
      { label: 'Married', value: 'married' },
      { label: 'Head of Household', value: 'head' }
    ]}
  ],
  '/pregnancy': [
    { id: 'lastPeriod', label: 'First day of last period', type: 'date' },
    { id: 'cycleLength', label: 'Average cycle length', type: 'number', defaultValue: '28', unit: 'days' }
  ],
  '/gpa-advanced': [
    { id: 'grade1', label: 'Grade (0-4 or A-F)', type: 'text', placeholder: 'e.g. 4.0 or A' },
    { id: 'credits1', label: 'Credits', type: 'number', defaultValue: '3' },
    { id: 'grade2', label: 'Grade', type: 'text' },
    { id: 'credits2', label: 'Credits', type: 'number', defaultValue: '3' },
    { id: 'grade3', label: 'Grade', type: 'text' },
    { id: 'credits3', label: 'Credits', type: 'number', defaultValue: '3' }
  ],
  '/inflation': [
    { id: 'amount', label: 'Original Currency Amount', type: 'number', unit: '$' },
    { id: 'startYear', label: 'Start Year', type: 'number', defaultValue: '2000' },
    { id: 'endYear', label: 'End Year', type: 'number', defaultValue: new Date().getFullYear().toString() }
  ],
  '/bitcoin-etf': [
    { id: 'investment', label: 'Investment Amount', type: 'number', unit: '$' },
    { id: 'btcPrice', label: 'Bitcoin Price at Purchase', type: 'number', unit: '$' },
    { id: 'expenseRatio', label: 'ETF Expense Ratio (Annual)', type: 'number', unit: '%', defaultValue: '0.2' },
    { id: 'currentPrice', label: 'Current Bitcoin Price', type: 'number', unit: '$' }
  ],
  '/btc-roi': [
    { id: 'invested', label: 'Amount Invested', type: 'number', unit: '$' },
    { id: 'purchasePrice', label: 'Bitcoin Price at Purchase', type: 'number', unit: '$' },
    { id: 'sellingPrice', label: 'Bitcoin Price at Sale', type: 'number', unit: '$' }
  ],
  '/403b': [
    { id: 'salary', label: 'Gross Annual Salary', type: 'number', unit: '$' },
    { id: 'contribution', label: 'Your Contribution Rate', type: 'number', unit: '%' },
    { id: 'match', label: 'Employer Match Rate', type: 'number', unit: '%' },
    { id: 'years', label: 'Years Until Retirement', type: 'number' }
  ],
  '/50-30-20-rule': [
    { id: 'income', label: 'Monthly Take-Home Pay', type: 'number', unit: '$' }
  ],
  '/apy': [
    { id: 'rate', label: 'Nominal Interest Rate', type: 'number', unit: '%' },
    { id: 'compounding', label: 'Compounding Frequency', type: 'select', options: [
      { label: 'Daily', value: '365' },
      { label: 'Monthly', value: '12' },
      { label: 'Quarterly', value: '4' },
      { label: 'Semi-Annually', value: '2' },
      { label: 'Annually', value: '1' }
    ]}
  ],
  '/cagr': [
    { id: 'beginningValue', label: 'Beginning Value', type: 'number', unit: '$' },
    { id: 'endingValue', label: 'Ending Value', type: 'number', unit: '$' },
    { id: 'periods', label: 'Number of Periods', type: 'number', unit: 'years' }
  ],
  '/dti': [
    { id: 'monthlyDebt', label: 'Total Monthly Debt Payments', type: 'number', unit: '$' },
    { id: 'grossMonthlyIncome', label: 'Gross Monthly Income', type: 'number', unit: '$' }
  ],
  '/blood-sugar-converter': [
    { id: 'value', label: 'Blood Glucose Reading', type: 'number' },
    { id: 'unit', label: 'Reading Unit', type: 'select', options: [
      { label: 'mg/dL (USA)', value: 'mgdl' },
      { label: 'mmol/L (Intl)', value: 'mmoll' }
    ]}
  ],
  '/a1c': [
    { id: 'a1c', label: 'A1c Level', type: 'number', unit: '%' }
  ],
  '/tdee': [
    { id: 'bmr', label: 'BMR (if known)', type: 'number', placeholder: 'Optional' },
    { id: 'activity', label: 'Activity Level', type: 'select', options: [
      { label: 'Sedentary (Office job)', value: '1.2' },
      { label: 'Lightly Active', value: '1.375' },
      { label: 'Moderately Active', value: '1.55' },
      { label: 'Very Active', value: '1.725' },
      { label: 'Extra Active', value: '1.9' }
    ]}
  ],
  '/water-intake': [
    { id: 'weight', label: 'Your Weight', type: 'number', unit: 'kg' },
    { id: 'activity', label: 'Daily Exercise', type: 'number', unit: 'minutes', defaultValue: '30' }
  ],
  '/sleep': [
    { id: 'wakeTime', label: 'I want to wake up at', type: 'text', placeholder: 'e.g. 07:00 AM' }
  ],
  '/acft': [
    { id: 'deadlift', label: '3-Rep Max Deadlift', type: 'number', unit: 'lbs' },
    { id: 'powerThrow', label: 'Standing Power Throw', type: 'number', unit: 'm' },
    { id: 'pushups', label: 'Hand-Release Push-ups', type: 'number' },
    { id: 'sprintDragCarry', label: 'Sprint-Drag-CarryTime', type: 'text', placeholder: 'MM:SS' },
    { id: 'plank', label: 'Plank Time', type: 'text', placeholder: 'MM:SS' },
    { id: 'run', label: '2-Mile Run Time', type: 'text', placeholder: 'MM:SS' }
  ],
  '/army-body-fat': [
    { id: 'gender', label: 'Gender', type: 'select', options: [{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]},
    { id: 'height', label: 'Body Height', type: 'number', unit: 'inches' },
    { id: 'neck', label: 'Neck Circumference', type: 'number', unit: 'inches' },
    { id: 'waist', label: 'Waist Circumference', type: 'number', unit: 'inches' },
    { id: 'hips', label: 'Hips (Female Only)', type: 'number', unit: 'inches' }
  ],
  '/unit-converter': [
    { id: 'value', label: 'Measurement Value', type: 'number' },
    { id: 'type', label: 'Category', type: 'select', options: [
      { label: 'Length', value: 'length' },
      { label: 'Weight', value: 'weight' },
      { label: 'Volume', value: 'volume' },
      { label: 'Temperature', value: 'temp' }
    ]}
  ],
  '/color-converter': [
    { id: 'color', label: 'Color Code', type: 'text', placeholder: 'e.g. #0066cc or rgb(0,102,204)' }
  ],
  '/military-time': [
    { id: 'time', label: 'Time to Convert', type: 'text', placeholder: 'e.g. 2:30 PM or 1430' }
  ],
  '/break-even': [
    { id: 'fixedCosts', label: 'Total Fixed Costs', type: 'number', unit: '$' },
    { id: 'pricePerUnit', label: 'Price per Unit', type: 'number', unit: '$' },
    { id: 'variableCostPerUnit', label: 'Variable Cost per Unit', type: 'number', unit: '$' }
  ],
  '/cac': [
    { id: 'salesMarketingCosts', label: 'Total Sales & Marketing Spend', type: 'number', unit: '$' },
    { id: 'newCustomers', label: 'New Customers Acquired', type: 'number' }
  ],
  '/aim-tracking': [
    { id: 'hits', label: 'Total Hits', type: 'number' },
    { id: 'misses', label: 'Total Misses', type: 'number' },
    { id: 'time', label: 'Session Time', type: 'number', unit: 'seconds' }
  ],
  '/discount': [
    { id: 'originalPrice', label: 'Original Price', type: 'number', unit: '$' },
    { id: 'discountPercent', label: 'Discount Percentage', type: 'number', unit: '%' }
  ],
  '/margin': [
    { id: 'cost', label: 'Cost of Goods', type: 'number', unit: '$' },
    { id: 'revenue', label: 'Total Revenue', type: 'number', unit: '$' }
  ],
  '/markup': [
    { id: 'cost', label: 'Cost of Goods', type: 'number', unit: '$' },
    { id: 'markupPercent', label: 'Markup Percentage', type: 'number', unit: '%' }
  ],
  '/paypal-fee': [
    { id: 'amount', label: 'Transaction Amount', type: 'number', unit: '$' },
    { id: 'feeRate', label: 'Fee Percentage', type: 'number', unit: '%', defaultValue: '2.9' },
    { id: 'fixedFee', label: 'Fixed Fee', type: 'number', unit: '$', defaultValue: '0.30' }
  ],
  '/percentage-discount': [
    { id: 'price', label: 'Original Price', type: 'number', unit: '$' },
    { id: 'percentOff', label: 'Percentage Off', type: 'number', unit: '%' }
  ],
  '/steps-to-miles': [
    { id: 'steps', label: 'Number of Steps', type: 'number' },
    { id: 'strideLength', label: 'Stride Length (Optional)', type: 'number', unit: 'inches', placeholder: 'Default: 30' }
  ],
  '/vertical-jump': [
    { id: 'standingReach', label: 'Standing Reach', type: 'number', unit: 'inches' },
    { id: 'jumpReach', label: 'Maximum Jump Reach', type: 'number', unit: 'inches' }
  ],
  '/home-run-distance': [
    { id: 'exitVelocity', label: 'Exit Velocity', type: 'number', unit: 'mph' },
    { id: 'launchAngle', label: 'Launch Angle', type: 'number', unit: 'degrees' }
  ],
  '/carbon-footprint': [
    { id: 'milesPerMonth', label: 'Monthly Driving distance', type: 'number', unit: 'miles' },
    { id: 'avgMpg', label: 'Vehicle Avg MPG', type: 'number', defaultValue: '25' },
    { id: 'electricBill', label: 'Monthly Electric Bill', type: 'number', unit: '$' }
  ],
  '/final-exam-grade': [
    { id: 'currentGrade', label: 'Current Class Grade', type: 'number', unit: '%' },
    { id: 'targetGrade', label: 'Target Final Grade', type: 'number', unit: '%' },
    { id: 'weight', label: 'Final Exam Weight', type: 'number', unit: '%' }
  ],
  '/mbps-to-gbps': [
    { id: 'mbps', label: 'Megabits per second (Mbps)', type: 'number' }
  ],
  '/byte-conversion': [
    { id: 'value', label: 'Data Quantity', type: 'number' },
    { id: 'fromUnit', label: 'From Unit', type: 'select', options: [
      { label: 'Bytes', value: 'b' },
      { label: 'Kilobytes (KB)', value: 'kb' },
      { label: 'Megabytes (MB)', value: 'mb' },
      { label: 'Gigabytes (GB)', value: 'gb' },
      { label: 'Terabytes (TB)', value: 'tb' }
    ]}
  ],
  '/kilograms-to-pounds': [
    { id: 'kg', label: 'Weight in Kilograms (kg)', type: 'number' }
  ],
  '/pounds-to-kilograms': [
    { id: 'lbs', label: 'Weight in Pounds (lbs)', type: 'number' }
  ],
  '/inches-to-cm': [
    { id: 'inches', label: 'Length in Inches (in)', type: 'number' }
  ],
  '/cm-to-inches': [
    { id: 'cm', label: 'Length in Centimeters (cm)', type: 'number' }
  ],
  '/black-friday': [
    { id: 'price', label: 'Original Price', type: 'number', unit: '$' },
    { id: 'discount1', label: 'Store Discount', type: 'number', unit: '%' },
    { id: 'discount2', label: 'Additional Coupon', type: 'number', unit: '%' }
  ],
  '/cash-back': [
    { id: 'amount', label: 'Purchase Amount', type: 'number', unit: '$' },
    { id: 'rate', label: 'Cash Back Rate', type: 'number', unit: '%' }
  ],
  '/cltv': [
    { id: 'avgOrderValue', label: 'Average Order Value', type: 'number', unit: '$' },
    { id: 'frequency', label: 'Purchase Frequency (per month)', type: 'number' },
    { id: 'duration', label: 'Customer Lifespan (months)', type: 'number' }
  ],
  '/double-discount': [
    { id: 'price', label: 'Original Price', type: 'number', unit: '$' },
    { id: 'd1', label: 'First Discount', type: 'number', unit: '%' },
    { id: 'd2', label: 'Second Discount', type: 'number', unit: '%' }
  ],
  '/running-pace': [
    { id: 'distance', label: 'Distance', type: 'number', unit: 'miles' },
    { id: 'time', label: 'Total Time', type: 'text', placeholder: 'HH:MM:SS' }
  ],
  '/home-affordability': [
    { id: 'income', label: 'Annual Household Income', type: 'number', unit: '$' },
    { id: 'debt', label: 'Monthly Debt Payments', type: 'number', unit: '$' },
    { id: 'downPayment', label: 'Available Down Payment', type: 'number', unit: '$' }
  ],
  '/net-worth': [
    { id: 'assets', label: 'Total Assets (Savings, Home, etc.)', type: 'number', unit: '$' },
    { id: 'liabilities', label: 'Total Liabilities (Loans, Debt)', type: 'number', unit: '$' }
  ],
  '/roas': [
    { id: 'revenue', label: 'Revenue from Ads', type: 'number', unit: '$' },
    { id: 'cost', label: 'Ad Spend', type: 'number', unit: '$' }
  ],
  '/website-ad-revenue': [
    { id: 'pageviews', label: 'Monthly Website Pageviews', type: 'number' },
    { id: 'rpm', label: 'Revenue per 1,000 Impressions (RPM)', type: 'number', unit: '$' }
  ],
  '/reading-time': [
    { id: 'words', label: 'Word Count', type: 'number' },
    { id: 'speed', label: 'Reading Speed', type: 'select', options: [
      { label: 'Slow (150 wpm)', value: '150' },
      { label: 'Average (250 wpm)', value: '250' },
      { label: 'Fast (400 wpm)', value: '400' }
    ]}
  ],
  '/unix-time': [
    { id: 'timestamp', label: 'Unix Timestamp', type: 'number' }
  ],
  '/hex-to-rgb': [
    { id: 'hex', label: 'Hex Code', type: 'text', placeholder: '#FFFFFF' }
  ],
  '/rgb-to-hex': [
    { id: 'r', label: 'Red (0-255)', type: 'number' },
    { id: 'g', label: 'Green (0-255)', type: 'number' },
    { id: 'b', label: 'Blue (0-255)', type: 'number' }
  ],
  '/bakers-percentage': [
    { id: 'flour', label: 'Total Flour Weight', type: 'number', unit: 'g' },
    { id: 'water', label: 'Water Weight', type: 'number', unit: 'g' },
    { id: 'salt', label: 'Salt Weight', type: 'number', unit: 'g' }
  ],
  '/dog-food': [
    { id: 'weight', label: 'Dog Weight', type: 'number', unit: 'lbs' },
    { id: 'activity', label: 'Activity Level', type: 'select', options: [
      { label: 'Low', value: '1.2' },
      { label: 'Moderate', value: '1.5' },
      { label: 'High', value: '2.0' }
    ]}
  ],
  '/solar-roi': [
    { id: 'cost', label: 'Total Solar Installation Cost', type: 'number', unit: '$' },
    { id: 'monthlySavings', label: 'Estimated Monthly Savings', type: 'number', unit: '$' }
  ],
  '/concrete': [
    { id: 'length', label: 'Total Slab Length', type: 'number', unit: 'ft' },
    { id: 'width', label: 'Total Slab Width', type: 'number', unit: 'ft' },
    { id: 'thickness', label: 'Slab Vertical Thickness', type: 'number', unit: 'in' }
  ],
  '/concrete-block': [
    { id: 'length', label: 'Wall Length', type: 'number', unit: 'ft' },
    { id: 'height', label: 'Wall Height', type: 'number', unit: 'ft' },
    { id: 'blockSize', label: 'Block Size', type: 'select', options: [
      { label: '8" x 8" x 16"', value: '8x8x16' },
      { label: '4" x 8" x 16"', value: '4x8x16' }
    ]}
  ],
  '/concrete-column': [
    { id: 'diameter', label: 'Diameter', type: 'number', unit: 'in' },
    { id: 'height', label: 'Column Height', type: 'number', unit: 'ft' }
  ],
  '/paint': [
    { id: 'length', label: 'Wall Length', type: 'number', unit: 'ft' },
    { id: 'height', label: 'Wall Height', type: 'number', unit: 'ft' },
    { id: 'coats', label: 'Number of Coats', type: 'number', defaultValue: '2' }
  ],
  '/flooring': [
    { id: 'length', label: 'Room Length', type: 'number', unit: 'ft' },
    { id: 'width', label: 'Room Width', type: 'number', unit: 'ft' },
    { id: 'waste', label: 'Waste percentage', type: 'number', unit: '%', defaultValue: '10' }
  ],
  '/diabetes-risk': [
    { id: 'age', label: 'Current Age', type: 'number' },
    { id: 'bmi', label: 'Current Known BMI', type: 'number' }
  ],
  '/insulin-dosage': [
    { id: 'carbs', label: 'Total Carbs', type: 'number', unit: 'g' },
    { id: 'ratio', label: 'Insulin-to-Carb Ratio', type: 'number' }
  ],
  '/subnet-mask': [
    { id: 'ip', label: 'IP Address', type: 'text', placeholder: '192.168.1.1' },
    { id: 'mask', label: 'Subnet Mask', type: 'text', placeholder: '24' }
  ],
  '/dog-pregnancy': [
    { id: 'matingDate', label: 'Mating Date', type: 'date' }
  ],
  '/anniversary': [
    { id: 'startDate', label: 'Start Date', type: 'date' }
  ],
  '/bra-size': [
    { id: 'bust', label: 'Bust Measurement', type: 'number', unit: 'in' },
    { id: 'underbust', label: 'Underbust Measurement', type: 'number', unit: 'in' }
  ],
  '/concrete-stairs': [
    { id: 'steps', label: 'Number of Steps', type: 'number' },
    { id: 'width', label: 'Step Width', type: 'number', unit: 'in' },
    { id: 'run', label: 'Step Run', type: 'number', unit: 'in' },
    { id: 'rise', label: 'Step Rise', type: 'number', unit: 'in' }
  ],
  '/brick': [
    { id: 'length', label: 'Wall Length', type: 'number', unit: 'ft' },
    { id: 'height', label: 'Wall Height', type: 'number', unit: 'ft' },
    { id: 'brickType', label: 'Brick size', type: 'select', options: [
      { label: 'Standard (8 x 2.25 x 3.75)', value: 'std' },
      { label: 'Engineer (8 x 2.75 x 3.75)', value: 'eng' }
    ]}
  ],
  '/a1c-to-glucose': [
    { id: 'a1c', label: 'A1c Level', type: 'number', unit: '%' }
  ],
  '/words-to-pages': [
    { id: 'words', label: 'Word Count', type: 'number' },
    { id: 'spacing', label: 'Spacing', type: 'select', options: [
      { label: 'Single Spaced', value: '1' },
      { label: 'Double Spaced', value: '2' }
    ]}
  ],
  '/gpa': [
    { id: 'grade1', label: 'Course 1 Grade', type: 'number' },
    { id: 'grade2', label: 'Course 2 Grade', type: 'number' },
    { id: 'grade3', label: 'Course 3 Grade', type: 'number' }
  ],
  '/bac': [
    { id: 'drinks', label: 'Number of Drinks', type: 'number' },
    { id: 'weight', label: 'Body Weight', type: 'number', unit: 'lbs' },
    { id: 'gender', label: 'Gender', type: 'select', options: [{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]},
    { id: 'hours', label: 'Hours since drinking', type: 'number' }
  ],
  '/car-lease': [
    { id: 'price', label: 'Vehicle Total MSRP', type: 'number', unit: '$' },
    { id: 'residual', label: 'Estimated Residual Value', type: 'number', unit: '%' },
    { id: 'moneyFactor', label: 'Lease Money Factor', type: 'number', placeholder: 'e.g. 0.0025' }
  ],
  '/recipe-scaling': [
    { id: 'originalYield', label: 'Original Yield', type: 'number' },
    { id: 'desiredYield', label: 'Desired Yield', type: 'number' }
  ],
  '/bitcoin-profit-loss': [
    { id: 'buyPrice', label: 'BTC Purchase Price', type: 'number', unit: '$' },
    { id: 'sellPrice', label: 'BTC Selling Price', type: 'number', unit: '$' },
    { id: 'amount', label: 'Quantity of BTC', type: 'number' }
  ],
  '/time-calculator': [
    { id: 'h1', label: 'Initial Hours', type: 'number' },
    { id: 'm1', label: 'Initial Minutes', type: 'number' },
    { id: 'h2', label: 'Adjustment Hours', type: 'number' },
    { id: 'm2', label: 'Adjustment Minutes', type: 'number' }
  ],
  '/grout': [
    { id: 'area', label: 'Total Surface Area', type: 'number', unit: 'sq ft' },
    { id: 'tileW', label: 'Tile Width', type: 'number', unit: 'in' },
    { id: 'tileL', label: 'Tile Length', type: 'number', unit: 'in' },
    { id: 'jointW', label: 'Joint Width', type: 'number', unit: 'in' }
  ],
  '/wallpaper': [
    { id: 'width', label: 'Total Wall Width', type: 'number', unit: 'ft' },
    { id: 'height', label: 'Total Wall Height', type: 'number', unit: 'ft' },
    { id: 'rollSize', label: 'Standard Roll Coverage', type: 'number', unit: 'sq ft', defaultValue: '56' }
  ],
  '/hourly-rate': [
    { id: 'targetIncome', label: 'Annual Target Income', type: 'number', unit: '$' },
    { id: 'overhead', label: 'Monthly Overhead', type: 'number', unit: '$' },
    { id: 'billableHours', label: 'Weekly Billable Hours', type: 'number', defaultValue: '30' }
  ],
  '/concrete-weight': [
    { id: 'volume', label: 'Total Volume', type: 'number', unit: 'cubic yards' },
    { id: 'type', label: 'Concrete Type', type: 'select', options: [
      { label: 'Normal Weight (150 lb/cu ft)', value: '150' },
      { label: 'Lightweight (110 lb/cu ft)', value: '110' }
    ]}
  ],
  '/cement': [
    { id: 'volume', label: 'Desired Concrete Volume', type: 'number', unit: 'cubic yards' },
    { id: 'ratio', label: 'Mix Ratio (Cement:Sand:Gravel)', type: 'select', options: [
      { label: '1:2:3 (Standard)', value: '1:2:3' },
      { label: '1:2:4 (Footings)', value: '1:2:4' }
    ]}
  ],
  '/stair-carpet': [
    { id: 'steps', label: 'Number of Steps', type: 'number' },
    { id: 'width', label: 'Stair Width', type: 'number', unit: 'in' },
    { id: 'run', label: 'Tread (Run)', type: 'number', unit: 'in' },
    { id: 'rise', label: 'Riser (Height)', type: 'number', unit: 'in' }
  ],
  '/wainscoting': [
    { id: 'wallLength', label: 'Total Wall Length', type: 'number', unit: 'ft' },
    { id: 'panelWidth', label: 'Desired Panel Width', type: 'number', unit: 'in' },
    { id: 'stileWidth', label: 'Stile (Divider) Width', type: 'number', unit: 'in' }
  ],
  '/shiplap': [
    { id: 'width', label: 'Wall Width', type: 'number', unit: 'ft' },
    { id: 'height', label: 'Wall Height', type: 'number', unit: 'ft' },
    { id: 'boardWidth', label: 'Board Width', type: 'number', unit: 'in', defaultValue: '5.25' }
  ],
  '/529-plan': [
    { id: 'initial', label: 'Initial Account Balance', type: 'number', unit: '$' },
    { id: 'monthly', label: 'Monthly Contribution Amount', type: 'number', unit: '$' },
    { id: 'return', label: 'Expected Annual Return Rate', type: 'number', unit: '%' },
    { id: 'years', label: 'Number of Years Until College', type: 'number' }
  ],
  '/70-20-10-rule': [
    { id: 'income', label: 'Monthly Take-Home Pay', type: 'number', unit: '$' }
  ],
  '/28-36-rule': [
    { id: 'income', label: 'Gross Monthly Income', type: 'number', unit: '$' },
    { id: 'housing', label: 'Monthly Housing Payment', type: 'number', unit: '$' },
    { id: 'debt', label: 'Total Monthly Debt', type: 'number', unit: '$' }
  ],
  '/balance-transfer': [
    { id: 'balance', label: 'Credit Card Balance', type: 'number', unit: '$' },
    { id: 'newApr', label: 'New Card Intro APR', type: 'number', unit: '%' },
    { id: 'fee', label: 'Balance Transfer Fee', type: 'number', unit: '%' }
  ],
  '/credit-card-interest': [
    { id: 'balance', label: 'Outstanding Balance', type: 'number', unit: '$' },
    { id: 'rate', label: 'Standard Interest Rate (APR)', type: 'number', unit: '%' },
    { id: 'payment', label: 'Target Monthly Payment', type: 'number', unit: '$' }
  ],
  '/credit-card-minimum-payment': [
    { id: 'balance', label: 'Credit Card Balance', type: 'number', unit: '$' },
    { id: 'rate', label: 'Interest Rate (APR)', type: 'number', unit: '%' },
    { id: 'minPercent', label: 'Minimum Payment Percentage', type: 'number', unit: '%' }
  ],
  '/credit-card-payment': [
    { id: 'balance', label: 'Total Debt Balance Due', type: 'number', unit: '$' },
    { id: 'term', label: 'Desired Payoff Duration', type: 'number', unit: 'months' },
    { id: 'rate', label: 'Card Interest Rate (APR)', type: 'number', unit: '%' }
  ],
  '/credit-utilization': [
    { id: 'balances', label: 'Total Credit Balances', type: 'number', unit: '$' },
    { id: 'limits', label: 'Total Credit Limits', type: 'number', unit: '$' }
  ],
  '/debt': [
    { id: 'cards', label: 'Total Credit Card Debt', type: 'number', unit: '$' },
    { id: 'loans', label: 'Total Loan Debt', type: 'number', unit: '$' },
    { id: 'other', label: 'Other Liabilities', type: 'number', unit: '$' }
  ],
  '/debt-avalanche': [
    { id: 'total', label: 'Total Debt Balance', type: 'number', unit: '$' },
    { id: 'rate', label: 'Highest Interest Rate', type: 'number', unit: '%' },
    { id: 'overpayment', label: 'Monthly Overpayment', type: 'number', unit: '$' }
  ],
  '/debt-snowball': [
    { id: 'total', label: 'Total Debt Balance', type: 'number', unit: '$' },
    { id: 'smallest', label: 'Smallest Debt Amount', type: 'number', unit: '$' },
    { id: 'overpayment', label: 'Monthly Overpayment', type: 'number', unit: '$' }
  ],
  '/deferred-payment-loan': [
    { id: 'principal', label: 'Loan Principal Amount', type: 'number', unit: '$' },
    { id: 'rate', label: 'Loan Interest Rate', type: 'number', unit: '%' },
    { id: 'months', label: 'Total Deferment Period', type: 'number', unit: 'months' }
  ],
  '/eidl-advance': [
    { id: 'employees', label: 'Number of Employees', type: 'number' },
    { id: 'requested', label: 'Loan Amount Requested', type: 'number', unit: '$' }
  ],
  '/finance-charge': [
    { id: 'amount', label: 'Loan Amount', type: 'number', unit: '$' },
    { id: 'rate', label: 'Interest Rate (APR)', type: 'number', unit: '%' },
    { id: 'term', label: 'Loan Term', type: 'number', unit: 'months' }
  ],
  '/agi': [
    { id: 'income', label: 'Gross Annual Income', type: 'number', unit: '$' },
    { id: 'retirement', label: 'Retirement Contributions', type: 'number', unit: '$' },
    { id: 'adjustments', label: 'Additional Itemized Adjustments', type: 'number', unit: '$' }
  ],
  '/annualized-return': [
    { id: 'initial', label: 'Initial Investment Value', type: 'number', unit: '$' },
    { id: 'final', label: 'Final Investment Value', type: 'number', unit: '$' },
    { id: 'years', label: 'Time Period', type: 'number', unit: 'years' }
  ],
  '/appreciation': [
    { id: 'value', label: 'Initial Asset Value', type: 'number', unit: '$' },
    { id: 'rate', label: 'Appreciation Rate', type: 'number', unit: '%' },
    { id: 'years', label: 'Time Period', type: 'number', unit: 'years' }
  ],
  '/basis-point': [
    { id: 'rate', label: 'Initial Rate', type: 'number', unit: '%' },
    { id: 'bps', label: 'Basis Points (BPS)', type: 'number' },
    { id: 'op', label: 'Operation', type: 'select', options: [{label: 'Add', value: 'add'}, {label: 'Subtract', value: 'sub'}]}
  ],
  '/capital-gains-yield': [
    { id: 'buy', label: 'Purchase Price', type: 'number', unit: '$', placeholder: 'e.g. 45000', description: 'The price at which you bought the asset.' },
    { id: 'sell', label: 'Sale Price', type: 'number', unit: '$', placeholder: 'e.g. 105000', description: 'The price at which you sold the asset.' }
  ],
  '/cat-age': [
    { id: 'age', label: 'Cat Age', type: 'number', unit: 'years' }
  ],
  '/bmi-kids': [
    { id: 'weight', label: 'Body Weight', type: 'number', unit: 'kg' },
    { id: 'height', label: 'Body Height', type: 'number', unit: 'cm' },
    { id: 'age', label: 'Child Age', type: 'number', unit: 'years' },
    { id: 'gender', label: 'Gender', type: 'select', options: [{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }] }
  ],
  '/math/addition': [
    { id: 'num1', label: 'First Addend', type: 'number' },
    { id: 'num2', label: 'Second Addend', type: 'number' },
    { id: 'num3', label: 'Third Addend (Optional)', type: 'number' }
  ],
  '/math/multiplication': [
    { id: 'num1', label: 'Multiplicand', type: 'number' },
    { id: 'num2', label: 'Multiplier', type: 'number' }
  ],
  '/math/division': [
    { id: 'num1', label: 'Dividend Amount', type: 'number' },
    { id: 'num2', label: 'Divisor Value', type: 'number' }
  ],
  '/math/average': [
    { id: 'numbers', label: 'Numbers (comma separated)', type: 'text', placeholder: 'e.g. 10, 20, 30' }
  ],
  '/math/square-root': [
    { id: 'value', label: 'Square Root Value', type: 'number' }
  ],
  '/math/exponent': [
    { id: 'base', label: 'Base', type: 'number' },
    { id: 'power', label: 'Exponent', type: 'number' }
  ],
  '/math/log': [
    { id: 'value', label: 'Logarithm Argument Value', type: 'number' },
    { id: 'base', label: 'Logarithmic Base (default 10)', type: 'number', defaultValue: '10' }
  ],
  '/math/modulo': [
    { id: 'num1', label: 'Dividend (Number to Divide)', type: 'number' },
    { id: 'num2', label: 'Divisor (Modulo)', type: 'number' }
  ],
  '/math/circle': [
    { id: 'radius', label: 'Radius', type: 'number' },
    { id: 'type', label: 'Calculate', type: 'select', options: [
      { label: 'Area', value: 'area' },
      { label: 'Circumference', value: 'circum' },
      { label: 'Diameter', value: 'diam' }
    ]}
  ],
  '/math/triangle': [
    { id: 'base', label: 'Base', type: 'number' },
    { id: 'height', label: 'Height', type: 'number' }
  ],
  '/math/pythagorean-theorem': [
    { id: 'a', label: 'Side A', type: 'number' },
    { id: 'b', label: 'Side B', type: 'number' }
  ],
  '/math/gcf': [
    { id: 'num1', label: 'First Number', type: 'number' },
    { id: 'num2', label: 'Second Number', type: 'number' }
  ],
  '/math/lcm': [
    { id: 'num1', label: 'First Number', type: 'number' },
    { id: 'num2', label: 'Second Number', type: 'number' }
  ],
  '/math/prime-number': [
    { id: 'num', label: 'Prime Check Number', type: 'number' }
  ],
  '/math/fraction': [
    { id: 'num1', label: 'First Fraction', type: 'text', placeholder: 'e.g. 1/2' },
    { id: 'num2', label: 'Second Fraction', type: 'text', placeholder: 'e.g. 1/4' },
    { id: 'op', label: 'Operation', type: 'select', options: [
      { label: 'Add', value: '+' },
      { label: 'Subtract', value: '-' },
      { label: 'Multiply', value: '*' },
      { label: 'Divide', value: '/' }
    ]}
  ],
  '/compound-growth': [
    { id: 'principal', label: 'Principal Amount', type: 'number', unit: '$' },
    { id: 'rate', label: 'Annual Growth Rate', type: 'number', unit: '%' },
    { id: 'years', label: 'Calculation Period (Years)', type: 'number' }
  ],
  '/health-insurance': [
    { id: 'zipCode', label: 'Zip Code', type: 'text', placeholder: 'e.g. 90210', description: 'Used to determine regional benchmark rates.' },
    { id: 'age', label: 'Applicant Age', type: 'number', description: 'Premiums are age-rated in most states.' },
    { id: 'coverageLevel', label: 'Coverage Type', type: 'select', options: [
      { label: 'Individual', value: 'individual' },
      { label: 'Individual + Spouse', value: 'employee_plus_one' },
      { label: 'Family', value: 'family' }
    ]},
    { id: 'tobaccoUse', label: 'Tobacco Use', type: 'select', options: [{ label: 'No', value: 'no' }, { label: 'Yes', value: 'yes' }] },
    { id: 'householdIncome', label: 'Annual Household Income', type: 'number', unit: '$', description: 'Used for calculating Advance Premium Tax Credits (APTC).' }
  ],
  '/life-insurance': [
    { id: 'age', label: 'Current Age', type: 'number' },
    { id: 'tobaccoUse', label: 'Tobacco Use', type: 'select', options: [{ label: 'No', value: 'no' }, { label: 'Yes', value: 'yes' }] },
    { id: 'deathBenefit', label: 'Desired Death Benefit (Coverage)', type: 'number', unit: '$', placeholder: 'e.g. 500000' },
    { id: 'term', label: 'Policy Term', type: 'number', unit: 'years', placeholder: 'e.g. 20' }
  ],
  '/car-insurance': [
    { id: 'zipCode', label: 'Zip Code', type: 'text' },
    { id: 'age', label: 'Primary Driver Age', type: 'number' },
    { id: 'vehicleValue', label: 'Vehicle Market Value', type: 'number', unit: '$' },
    { id: 'drivingHistory', label: 'Driving Record', type: 'select', options: [
      { label: 'Clean', value: 'clean' },
      { label: 'Minor Violations', value: 'minor' },
      { label: 'Major Violations', value: 'major' }
    ]}
  ],
  '/accel-est': [
    { id: 'power', label: 'Weight (lbs)', type: 'number', placeholder: 'e.g. 3200' },
    { id: 'hp', label: 'Horsepower', type: 'number', placeholder: 'e.g. 300' }
  ],
  '/hp-torque-converter': [
    { id: 'torque', label: 'Torque', type: 'number', unit: 'ft-lbs' },
    { id: 'rpm', label: 'Engine Speed', type: 'number', unit: 'RPM' }
  ],
  '/static-compression-math': [
    { id: 'bore', label: 'Cylinder Bore', type: 'number', unit: 'in' },
    { id: 'stroke', label: 'Piston Stroke', type: 'number', unit: 'in' },
    { id: 'headVol', label: 'Cylinder Head Volume', type: 'number', unit: 'cc' },
    { id: 'gasketThick', label: 'Gasket Thickness', type: 'number', unit: 'in' }
  ],
  '/boost-pressure-adj': [
    { id: 'currentBoost', label: 'Current Boost', type: 'number', unit: 'PSI' },
    { id: 'ambientTemp', label: 'Ambient Temperature', type: 'number', unit: '°F' },
    { id: 'intakeTemp', label: 'Intake Temperature', type: 'number', unit: '°F' }
  ],
  '/injector-sizing-pro': [
    { id: 'targetHp', label: 'Target Horsepower', type: 'number' },
    { id: 'numInjectors', label: 'Number of Injectors', type: 'number', defaultValue: '4' },
    { id: 'dutyCycle', label: 'Maximum Duty Cycle', type: 'number', unit: '%', defaultValue: '80' }
  ],
  '/friction-stop-distance': [
    { id: 'speed', label: 'Initial Speed', type: 'number', unit: 'MPH' },
    { id: 'weight', label: 'Vehicle Weight', type: 'number', unit: 'lbs' },
    { id: 'friction', label: 'Coefficient of Friction', type: 'number', defaultValue: '0.8', description: 'Dry asphalt: 0.7-0.9, Wet: 0.4-0.6' }
  ],
  '/spoiler-downforce-drag': [
    { id: 'speed', label: 'Vehicle Speed', type: 'number', unit: 'MPH' },
    { id: 'area', label: 'Frontal Area', type: 'number', unit: 'sq ft' },
    { id: 'cd', label: 'Drag Coefficient', type: 'number', defaultValue: '0.3' }
  ],
  '/oil-interval-logic': [
    { id: 'lastMileage', label: 'Last Change Mileage', type: 'number' },
    { id: 'drivingStyle', label: 'Driving Style', type: 'select', options: [
      { label: 'Highway (Easy)', value: '1' },
      { label: 'Mixed', value: '0.8' },
      { label: 'City/Short Trips', value: '0.6' },
      { label: 'Towing/Hot/Hard', value: '0.4' }
    ]}
  ],
  '/transmission-math-pro': [
    { id: 'rpm', label: 'Redline RPM', type: 'number' },
    { id: 'ratio', label: 'Top Gear Ratio', type: 'number' },
    { id: 'finalDrive', label: 'Final Drive Ratio', type: 'number' },
    { id: 'tireDiameter', label: 'Tire Diameter', type: 'number', unit: 'in' }
  ],
  '/corner-balance-calc': [
    { id: 'fl', label: 'Front Left', type: 'number', unit: 'lbs' },
    { id: 'fr', label: 'Front Right', type: 'number', unit: 'lbs' },
    { id: 'rl', label: 'Rear Left', type: 'number', unit: 'lbs' },
    { id: 'rr', label: 'Rear Right', type: 'number', unit: 'lbs' }
  ]
};
