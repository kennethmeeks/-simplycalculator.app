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
  '/compound-interest': [
    { id: 'principal', label: 'Initial Investment', type: 'number', unit: '$' },
    { id: 'rate', label: 'Interest Rate', type: 'number', unit: '%' },
    { id: 'term', label: 'Time Period', type: 'number', unit: 'years' },
    { id: 'compounding', label: 'Compounding Frequency', type: 'select', options: [
      { label: 'Monthly', value: '12' },
      { label: 'Quarterly', value: '4' },
      { label: 'Semi-Annually', value: '2' },
      { label: 'Annually', value: '1' }
    ]}
  ],
  '/salary': [
    { id: 'amount', label: 'Amount', type: 'number', unit: '$' },
    { id: 'frequency', label: 'Pay Frequency', type: 'select', options: [
      { label: 'Hourly (40h/week)', value: 'hourly' },
      { label: 'Weekly', value: 'weekly' },
      { label: 'Bi-Weekly', value: 'biweekly' },
      { label: 'Monthly', value: 'monthly' },
      { label: 'Annually', value: 'annual' }
    ]}
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
  '/tip-calculator': [
    { id: 'billAmount', label: 'Bill Amount', type: 'number', unit: '$' },
    { id: 'tipPercent', label: 'Tip Percentage', type: 'number', unit: '%' },
    { id: 'numPeople', label: 'Number of People', type: 'number', defaultValue: '1' }
  ],
  '/fuel-cost-calculator': [
    { id: 'distance', label: 'Trip Distance', type: 'number', unit: 'miles' },
    { id: 'efficiency', label: 'Fuel Efficiency', type: 'number', unit: 'MPG' },
    { id: 'pricePerUnit', label: 'Fuel Price', type: 'number', unit: 'per gallon' }
  ],
  '/grade-calculator': [
    { id: 'currentGrade', label: 'Current Grade', type: 'number', unit: '%' },
    { id: 'targetGrade', label: 'Target Grade', type: 'number', unit: '%' },
    { id: 'finalWeight', label: 'Final Exam Weight', type: 'number', unit: '%' }
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
  '/3x-rent-calculator': [
    { id: 'monthlyRent', label: 'Monthly Rent', type: 'number', unit: '$' },
    { id: 'annualIncome', label: 'Your Annual Gross Income', type: 'number', unit: '$' }
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
    { id: 'salary', label: 'Annual Salary', type: 'number', unit: '$' },
    { id: 'contribution', label: 'Your Contribution', type: 'number', unit: '%' },
    { id: 'match', label: 'Employer Match', type: 'number', unit: '%' },
    { id: 'years', label: 'Years to Retirement', type: 'number' }
  ],
  '/overtime-calculator': [
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
    { id: 'salary', label: 'Annual Gross Salary', type: 'number', unit: '$' },
    { id: 'state', label: 'State (US)', type: 'text', placeholder: 'e.g. CA' },
    { id: 'status', label: 'Filing Status', type: 'select', options: [
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
    { id: 'amount', label: 'Amount', type: 'number', unit: '$' },
    { id: 'startYear', label: 'Start Year', type: 'number', defaultValue: '2000' },
    { id: 'endYear', label: 'End Year', type: 'number', defaultValue: new Date().getFullYear().toString() }
  ],
  '/bitcoin-etf-calculator': [
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
    { id: 'salary', label: 'Annual Salary', type: 'number', unit: '$' },
    { id: 'contribution', label: 'Your Contribution', type: 'number', unit: '%' },
    { id: 'match', label: 'Employer Match', type: 'number', unit: '%' },
    { id: 'years', label: 'Years to retirement', type: 'number' }
  ],
  '/50-30-20-rule': [
    { id: 'income', label: 'Monthly Take-Home Pay', type: 'number', unit: '$' }
  ],
  '/apy-calculator': [
    { id: 'rate', label: 'Nominal Interest Rate', type: 'number', unit: '%' },
    { id: 'compounding', label: 'Compounding Frequency', type: 'select', options: [
      { label: 'Daily', value: '365' },
      { label: 'Monthly', value: '12' },
      { label: 'Quarterly', value: '4' },
      { label: 'Semi-Annually', value: '2' },
      { label: 'Annually', value: '1' }
    ]}
  ],
  '/cagr-calculator': [
    { id: 'beginningValue', label: 'Beginning Value', type: 'number', unit: '$' },
    { id: 'endingValue', label: 'Ending Value', type: 'number', unit: '$' },
    { id: 'periods', label: 'Number of Periods', type: 'number', unit: 'years' }
  ],
  '/dti-calculator': [
    { id: 'monthlyDebt', label: 'Total Monthly Debt Payments', type: 'number', unit: '$' },
    { id: 'grossMonthlyIncome', label: 'Gross Monthly Income', type: 'number', unit: '$' }
  ],
  '/blood-sugar-converter': [
    { id: 'value', label: 'Blood Sugar Value', type: 'number' },
    { id: 'unit', label: 'Current Unit', type: 'select', options: [
      { label: 'mg/dL (USA)', value: 'mgdl' },
      { label: 'mmol/L (Intl)', value: 'mmoll' }
    ]}
  ],
  '/a1c-calculator': [
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
  '/acft-calculator': [
    { id: 'deadlift', label: '3-Rep Max Deadlift', type: 'number', unit: 'lbs' },
    { id: 'powerThrow', label: 'Standing Power Throw', type: 'number', unit: 'm' },
    { id: 'pushups', label: 'Hand-Release Push-ups', type: 'number' },
    { id: 'sprintDragCarry', label: 'Sprint-Drag-CarryTime', type: 'text', placeholder: 'MM:SS' },
    { id: 'plank', label: 'Plank Time', type: 'text', placeholder: 'MM:SS' },
    { id: 'run', label: '2-Mile Run Time', type: 'text', placeholder: 'MM:SS' }
  ],
  '/army-body-fat': [
    { id: 'gender', label: 'Gender', type: 'select', options: [{label: 'Male', value: 'male'}, {label: 'Female', value: 'female'}]},
    { id: 'height', label: 'Height', type: 'number', unit: 'inches' },
    { id: 'neck', label: 'Neck', type: 'number', unit: 'inches' },
    { id: 'waist', label: 'Waist', type: 'number', unit: 'inches' },
    { id: 'hips', label: 'Hips (Female Only)', type: 'number', unit: 'inches' }
  ],
  '/unit-converter': [
    { id: 'value', label: 'Value', type: 'number' },
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
    { id: 'value', label: 'Value', type: 'number' },
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
    { id: 'pageviews', label: 'Monthly Pageviews', type: 'number' },
    { id: 'rpm', label: 'Revenue per 1000 views (RPM)', type: 'number', unit: '$' }
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
    { id: 'cost', label: 'Installation Cost', type: 'number', unit: '$' },
    { id: 'monthlySavings', label: 'Expected Monthly Savings', type: 'number', unit: '$' }
  ]
};
