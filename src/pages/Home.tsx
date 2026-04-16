import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const Home: React.FC = () => {
  const categories = [
    {
      title: 'Finance & Investment',
      items: [
        { name: 'Payroll Calculator', path: '/payroll', desc: 'Calculate net pay and taxes for any salary.' },
        { name: 'Take Home Pay', path: '/take-home-pay', desc: 'Estimate your actual take-home pay.' },
        { name: 'Capital Gains Tax', path: '/capital-gains-tax', desc: 'Calculate tax on investment profits.' },
        { name: 'Tax Bracket', path: '/tax-bracket', desc: 'Find your marginal and effective tax rates.' },
        { name: 'Dividend Calculator', path: '/dividend', desc: 'Project future dividend income and growth.' },
        { name: 'Net Worth Calculator', path: '/net-worth', desc: 'Fits Finance perfectly - track total assets and liabilities.' },
        { name: 'Stock Return', path: '/stock-return', desc: 'Calculate total return on stock investments.' },
        { name: 'Cryptocurrency', path: '/cryptocurrency', desc: 'Calculate profit and loss for crypto.' },
        { name: 'Bitcoin Profit', path: '/bitcoin-profit', desc: 'Track your Bitcoin investment performance.' },
        { name: 'Loan Calculator', path: '/loan', desc: 'Estimate payments for any type of loan.' },
        { name: 'Investment Return Calculator', path: '/investment', desc: '401k/retirement companion - project future wealth and growth.' },
        { name: 'Savings Calculator', path: '/savings', desc: 'Track your savings goals.' },
        { name: 'Credit Card Calculator', path: '/credit-card', desc: 'Plan your debt payoff strategy.' },
        { name: 'Inflation Calculator', path: '/inflation', desc: 'Calculate purchasing power over time.' },
        { name: 'ROI Calculator', path: '/roi', desc: 'Measure investment performance.' },
        { name: 'APR Calculator', path: '/apr', desc: 'Find the true cost of borrowing.' },
        { name: 'Simple Interest', path: '/simple-interest', desc: 'Basic interest calculations.' },
        { name: 'Sales Tax Calculator', path: '/sales-tax', desc: 'Calculate final price with tax.' },
        { name: 'Salary Calculator', path: '/salary', desc: 'Convert pay between different time periods.' },
        { name: 'Compound Interest', path: '/compound-interest', desc: 'Calculate investment growth over time.' },
        { name: 'Auto Loan Calculator', path: '/auto-loan', desc: 'Plan your vehicle purchase payments.' },
        { name: 'VAT Calculator', path: '/vat', desc: 'Calculate Value Added Tax (VAT).' },
        { name: 'Interest Rate', path: '/interest-rate', desc: 'Calculate APR and APY.' },
        { name: 'Annuity Calculator', path: '/annuity', desc: 'Calculate future value of regular investments.' },
        { name: 'Annuity Payout', path: '/annuity-payout', desc: 'Estimate income from a lump sum.' },
        { name: 'Credit Card Payoff', path: '/credit-card-payoff', desc: 'Time and interest to clear debt.' },
        { name: 'Debt Payoff', path: '/debt-payoff', desc: 'Plan your journey to zero debt.' },
        { name: 'Debt Consolidation', path: '/debt-consolidation', desc: 'Compare loans and save money.' },
        { name: 'Repayment Calculator', path: '/repayment', desc: 'Find the monthly payment for any loan.' },
        { name: 'Student Loan', path: '/student-loan', desc: 'Estimate education debt payments.' },
        { name: 'College Cost', path: '/college-cost', desc: 'Plan for future tuition expenses.' },
        { name: 'CD Calculator', path: '/cd', desc: 'Calculate Certificate of Deposit earnings.' },
        { name: 'Bond Calculator', path: '/bond', desc: 'Calculate bond yield and price.' },
        { name: 'Mutual Fund', path: '/mutual-fund', desc: 'Project mutual fund growth.' },
        { name: 'Present Value', path: '/present-value', desc: 'Calculate value of future money today.' },
        { name: 'Future Value', path: '/future-value', desc: 'Calculate future value of an investment.' },
        { name: 'Payback Period', path: '/payback-period', desc: 'Calculate investment recovery time.' },
        { name: 'Commission Calculator', path: '/commission', desc: 'Calculate sales commission earnings.' },
        { name: 'Margin Calculator', path: '/margin', desc: 'Calculate profit margin and markup.' },
        { name: 'Depreciation', path: '/depreciation', desc: 'Calculate asset depreciation over time.' },
        { name: 'Average Return', path: '/average-return', desc: 'Calculate arithmetic and geometric means.' },
        { name: 'Business Loan Calculator', path: '/business-loan', desc: 'Estimate small business loan payments.' },
        { name: 'IRR Calculator', path: '/irr', desc: 'Calculate Internal Rate of Return.' },
        { name: 'DTI Ratio', path: '/dti-ratio', desc: 'Calculate debt-to-income ratio.' },
        { name: 'Personal Loan Calculator', path: '/personal-loan', desc: 'Estimate personal loan payments.' },
        { name: 'Refinance', path: '/refinance', desc: 'See if refinancing saves you money.' },
        { name: 'Monthly Budget Planner', path: '/budget', desc: 'Universal utility - plan your monthly income and expenses.' },
        { name: 'Credit Score Simulator', path: '/credit-score-simulator', desc: 'Massive personal finance demand - estimate credit score impact.' },
        { name: 'Boat Loan Calculator', path: '/boat-loan', desc: 'Estimate monthly payments for boat financing.' },
        { name: 'Lease Calculator', path: '/lease', desc: 'Calculate monthly lease payments for any asset.' },
        { name: 'Currency Converter', path: '/currency-converter', desc: 'Real-time exchange rates for global currencies.' },
      ]
    },
    {
      title: 'Personal & Fun',
      items: [
        { name: 'Dog Age Calculator', path: '/dog-age', desc: 'Convert dog years to human years.' },
        { name: 'Cat Age Calculator', path: '/cat-age', desc: 'Convert cat years to human years.' },
        { name: 'Angel Number', path: '/angel-number', desc: 'Discover your unique angel number.' },
        { name: 'Lucky Number', path: '/lucky-number', desc: 'Find your lucky number and color.' },
        { name: 'Friendship Calculator', path: '/friendship', desc: 'Test the strength of your friendship.' },
        { name: 'Star Sign Compatibility', path: '/star-sign-compatibility', desc: 'Check zodiac compatibility.' },
        { name: 'Name Compatibility', path: '/name-compatibility', desc: 'Test love match between two names.' },
        { name: 'Love Calculator', path: '/love-calculator', desc: 'Test the compatibility between two names.' },
        { name: 'Numerology', path: '/numerology', desc: 'Discover the meaning behind your name and birth date.' },
        { name: 'Zodiac', path: '/zodiac', desc: 'Find your star sign and personality traits.' },
        { name: 'Age Calculator', path: '/age', desc: 'Find out exactly how old you are.' },
        { name: 'Anniversary Calculator', path: '/anniversary-calculator', desc: 'Find out how long you\'ve been together.' },
        { name: 'Days Until', path: '/days-until', desc: 'Count down to any special event or date.' },
        { name: 'Time Zone Converter', path: '/time-zone-converter', desc: 'Convert time across different global zones.' },
        { name: 'Business Days', path: '/business-days', desc: 'Calculate working days between two dates.' },
        { name: 'Chronological Age', path: '/chronological-age', desc: 'Calculate exact age in years, months, and days.' },
        { name: 'Work Hours', path: '/work-hours', desc: 'Track your daily and weekly working time.' },
        { name: 'Time Card', path: '/time-card', desc: 'Calculate total hours and pay for a work week.' },
      ]
    },
    {
      title: 'Insurance & Protection',
      items: [
        { name: 'Life Insurance', path: '/life-insurance', desc: 'Calculate how much coverage your family needs.' },
        { name: 'Health Insurance', path: '/health-insurance', desc: 'Estimate annual medical and premium costs.' },
        { name: 'Car Insurance', path: '/car-insurance', desc: 'Estimate your auto insurance premiums.' },
      ]
    },
    {
      title: 'Math & Science',
      items: [
        { name: 'IQ Score Estimator', path: '/iq-score', desc: 'Estimate your intelligence quotient.' },
        { name: 'Quadratic Formula', path: '/quadratic-formula', desc: 'Solve quadratic equations step-by-step.' },
        { name: 'GCF Calculator', path: '/gcf', desc: 'Find the greatest common factor.' },
        { name: 'LCM Calculator', path: '/lcm', desc: 'Find the least common multiple.' },
        { name: 'Pythagorean Theorem', path: '/pythagorean-theorem', desc: 'Solve for any side of a right triangle.' },
        { name: 'Probability Calculator', path: '/probability', desc: 'Calculate the likelihood of events.' },
        { name: 'Permutation Calculator', path: '/permutation', desc: 'Calculate arrangements (nPr).' },
        { name: 'Combination Calculator', path: '/combination', desc: 'Calculate selections (nCr).' },
        { name: 'Prime Number Checker', path: '/prime-number', desc: 'Check if a number is prime.' },
        { name: 'Significant Figures', path: '/significant-figures', desc: 'Count and round sig figs.' },
        { name: 'Standard Deviation', path: '/standard-deviation', desc: 'Calculate variance and dispersion.' },
        { name: 'Percentage Calculator', path: '/percentage', desc: 'Quick and easy percentage math.' },
        { name: 'Fraction Calculator', path: '/fraction', desc: 'Add, subtract, and simplify fractions.' },
        { name: 'Scientific Calculator', path: '/scientific', desc: 'Advanced math and trigonometry.' },
        { name: 'Average Calculator', path: '/average', desc: 'Calculate the mean of a set of numbers.' },
        { name: 'Ratio Calculator', path: '/ratio', desc: 'Simplify and compare different ratios.' },
        { name: 'Square Root', path: '/square-root', desc: 'Find the square root of any number.' },
        { name: 'Log Calculator', path: '/log', desc: 'Calculate logarithms for any base.' },
        { name: 'Matrix Calculator', path: '/matrix', desc: 'Add, subtract, and multiply matrices.' },
        { name: 'Percent Error', path: '/percent-error', desc: 'Calculate accuracy and precision.' },
        { name: 'Scientific Notation', path: '/scientific-notation', desc: 'Convert numbers to and from scientific format.' },
        { name: 'Random Number', path: '/random-number', desc: 'Generate random numbers within a range.' },
        { name: 'Area Calculator', path: '/area', desc: 'Calculate area for common 2D shapes.' },
        { name: 'Volume Calculator', path: '/volume', desc: 'Calculate volume for common 3D shapes.' },
        { name: 'Triangle Calculator', path: '/triangle', desc: 'Solve for area, perimeter, and angles.' },
        { name: 'Statistics Calculator', path: '/statistics', desc: 'Mean, median, mode, and std dev.' },
        { name: 'Slope Calculator', path: '/slope', desc: 'Find the slope of a line between two points.' },
        { name: 'Hex Calculator', path: '/hex', desc: 'Convert between hex, decimal, and binary.' },
        { name: 'Binary Calculator', path: '/binary', desc: 'Convert between binary, decimal, and hex.' },
        { name: 'Exponent Calculator', path: '/exponent', desc: 'Solve for any base raised to a power.' },
        { name: 'Long Division', path: '/long-division', desc: 'Step-by-step division with remainders.' },
        { name: 'Factor Calculator', path: '/factor', desc: 'Find all factors and factor pairs of a number.' },
        { name: 'Rounding Calculator', path: '/rounding', desc: 'Round numbers to the nearest whole, tenth, or hundredth.' },
        { name: 'Big Number Calculator', path: '/big-number', desc: 'Perform arithmetic with extremely large numbers.' },
        { name: 'Prime Factorization', path: '/prime-factorization', desc: 'Find the prime factors of any integer.' },
        { name: 'Common Factor', path: '/common-factor', desc: 'Find common factors between two or more numbers.' },
        { name: 'Basic Calculator', path: '/basic-calculator', desc: 'Simple four-function calculator for quick math.' },
        { name: 'P-value Calculator', path: '/p-value', desc: 'Calculate p-values for various statistical tests.' },
        { name: 'Number Sequence', path: '/number-sequence', desc: 'Calculate terms and sums of arithmetic and geometric sequences.' },
        { name: 'Half-Life', path: '/half-life', desc: 'Solve exponential decay and radioactive half-life problems.' },
        { name: 'Sample Size', path: '/sample-size', desc: 'Determine the required sample size for surveys and studies.' },
        { name: 'Z-score', path: '/z-score', desc: 'Calculate standard scores for any value in a distribution.' },
        { name: 'Confidence Interval', path: '/confidence-interval', desc: 'Calculate the range for a population mean.' },
        { name: 'Distance Calculator', path: '/distance', desc: 'Find the straight-line distance between 2D or 3D points.' },
        { name: 'Circle Calculator', path: '/circle', desc: 'Calculate area, circumference, radius, and diameter.' },
        { name: 'Surface Area', path: '/surface-area', desc: 'Calculate surface area for common 3D geometric shapes.' },
        { name: 'IP Subnet Calculator', path: '/ip-subnet', desc: 'IPv4 subnetting and network planning.' },
      ]
    },
    {
      title: 'Tax and Salary',
      items: [
        { name: 'Income Tax Calculator', path: '/income-tax', desc: 'Estimate your federal income tax liability.' },
        { name: 'Salary Calculator', path: '/salary', desc: 'Convert pay between different time periods.' },
        { name: 'Marriage Tax', path: '/marriage-tax', desc: 'Compare single vs. joint tax liability.' },
        { name: 'Estate Tax', path: '/estate-tax', desc: 'Estimate federal estate tax liability.' },
        { name: 'Retirement Calculator', path: '/retirement', desc: 'Plan your financial future.' },
        { name: '401k Calculator', path: '/401k', desc: 'Estimate future 401k balance.' },
        { name: 'Roth IRA', path: '/roth-ira', desc: 'Calculate Roth IRA growth and taxes.' },
        { name: 'IRA Calculator', path: '/ira', desc: 'Traditional IRA savings projection.' },
        { name: 'RMD Calculator', path: '/rmd', desc: 'Required Minimum Distribution.' },
        { name: 'Pension Calculator', path: '/pension', desc: 'Estimate monthly pension benefits.' },
        { name: 'Social Security', path: '/social-security', desc: 'Estimate retirement benefits.' },
        { name: 'Retirement Date', path: '/retirement-date', desc: 'Find out when you can stop working.' },
      ]
    },
    {
      title: 'Electronics & Circuits',
      items: [
        { name: 'Voltage Drop Calculator', path: '/voltage-drop', desc: 'Calculate voltage loss in electrical wires.' },
        { name: 'Resistor Calculator', path: '/resistor', desc: 'Find resistor values from color bands.' },
        { name: 'Ohm\'s Law Calculator', path: '/ohms-law', desc: 'Calculate voltage, current, and resistance.' },
        { name: 'Electricity Calculator', path: '/electricity', desc: 'Estimate appliance energy costs.' },
      ]
    },
    {
      title: 'Real Estate & Construction',
      items: [
        { name: 'Mortgage Calculator', path: '/mortgage', desc: 'Estimate monthly mortgage payments.' },
        { name: 'UK Mortgage', path: '/mortgage-uk', desc: 'Calculate UK monthly payments & SDLT.' },
        { name: 'Canadian Mortgage', path: '/canadian-mortgage', desc: 'Calculate payments with CA compounding.' },
        { name: 'HELOC Calculator', path: '/heloc', desc: 'Estimate Home Equity Line of Credit.' },
        { name: 'Home Equity', path: '/home-equity', desc: 'Calculate your current property equity.' },
        { name: 'House Affordability', path: '/house-affordability', desc: 'How much home can you afford?' },
        { name: 'Rent Calculator', path: '/rent', desc: 'Estimate affordable monthly rent.' },
        { name: 'Rental Property', path: '/rental-property', desc: 'Analyze real estate investment ROI.' },
        { name: 'BRRRR Calculator', path: '/brrrr', desc: 'Analyze advanced real estate deals.' },
        { name: 'Concrete Calculator', path: '/concrete', desc: 'Calculate volume for slabs and footings.' },
        { name: 'Roofing Calculator', path: '/roofing', desc: 'Estimate shingles and squares for your roof.' },
        { name: 'BTU Calculator', path: '/btu', desc: 'Calculate heating and cooling needs.' },
        { name: 'Square Footage', path: '/square-footage', desc: 'Calculate area for flooring and paint.' },
      ]
    },
    {
      title: 'Home Improvement',
      items: [
        { name: 'Paint Calculator', path: '/paint', desc: 'Estimate gallons of paint needed for any room.' },
        { name: 'Flooring Calculator', path: '/flooring', desc: 'Calculate material and cost for new floors.' },
        { name: 'Tile Calculator', path: '/tile', desc: 'Estimate tiles and boxes for your project.' },
        { name: 'Fence Calculator', path: '/fence', desc: 'Calculate posts, rails, and pickets needed.' },
        { name: 'Mulch Calculator', path: '/mulch', desc: 'Estimate cubic yards and bags for your garden.' },
        { name: 'Gravel Calculator', path: '/gravel', desc: 'Calculate tons and yards for driveways.' },
        { name: 'Stair Calculator', path: '/stair', desc: 'Estimate stringer length and step count.' },
        { name: 'Wallpaper Calculator', path: '/wallpaper', desc: 'Calculate rolls needed for your walls.' },
        { name: 'Deck Calculator', path: '/deck', desc: 'Estimate boards and joists for your deck.' },
      ]
    },
    {
      title: 'Science & Environment',
      items: [
        { name: 'Heat Index', path: '/heat-index', desc: 'Calculate real feel temperature.' },
        { name: 'Dew Point', path: '/dew-point', desc: 'Calculate humidity and comfort levels.' },
        { name: 'Engine Horsepower', path: '/engine-horsepower', desc: 'Calculate HP from torque and RPM.' },
        { name: 'Fuel Cost', path: '/fuel-cost', desc: 'Estimate trip gas money and MPG.' },
      ]
    },
    {
      title: 'Fitness & Health',
      items: [
        { name: 'BMI Calculator', path: '/bmi', desc: 'Body Mass Index for adults.' },
        { name: 'Calorie Calculator', path: '/calorie', desc: 'Estimate daily energy expenditure.' },
        { name: 'BMR Calculator', path: '/bmr', desc: 'Basal Metabolic Rate (Mifflin-St Jeor).' },
        { name: 'Body Fat Calculator', path: '/body-fat', desc: 'Estimate body fat percentage.' },
        { name: 'Macro Calculator', path: '/macro', desc: 'Calculate protein, carbs, and fat ratios.' },
        { name: 'TDEE Calculator', path: '/tdee', desc: 'Total Daily Energy Expenditure.' },
        { name: 'Pace Calculator', path: '/pace', desc: 'Calculate running pace and speed.' },
        { name: 'Target Heart Rate', path: '/target-heart-rate', desc: 'Find your training zones.' },
        { name: 'Protein Calculator', path: '/protein', desc: 'Daily protein needs for your goals.' },
        { name: 'Pregnancy Calculator', path: '/pregnancy', desc: 'Estimate your baby\'s due date.' },
        { name: 'Ideal Weight', path: '/ideal-weight', desc: 'Find your target body weight.' },
        { name: 'Ovulation Calculator', path: '/ovulation', desc: 'Predict your most fertile days.' },
        { name: 'Sleep Calculator', path: '/sleep-calculator', desc: 'Find the best time to wake up or go to bed.' },
        { name: 'Calories Burned', path: '/calories-burned', desc: 'Estimate energy spent during activities.' },
        { name: 'Water Intake', path: '/water-intake', desc: 'Calculate your daily hydration needs.' },
        { name: 'One Rep Max', path: '/one-rep-max', desc: 'Estimate your maximum lifting strength.' },
        { name: 'Arm Body Fat', path: '/arm-body-fat', desc: 'Estimate body fat using arm measurements.' },
        { name: 'Child Height Predictor', path: '/child-height-predictor', desc: 'Estimate your child\'s future height.' },
        { name: 'Sobriety Calculator', path: '/sobriety-calculator', desc: 'Track your journey to recovery.' },
        { name: 'Lean Body Mass', path: '/lean-body-mass', desc: 'Calculate your weight without fat.' },
        { name: 'Waist to Hip Ratio', path: '/waist-to-hip', desc: 'Assess body fat distribution and health risk.' },
        { name: 'VO2 Max Calculator', path: '/vo2-max', desc: 'Estimate your aerobic fitness level.' },
        { name: 'Postpartum Recovery', path: '/postpartum-recovery', desc: 'Timeline for healing after childbirth.' },
        { name: 'Due Date Calculator', path: '/due-date', desc: 'Calculate your expected delivery date.' },
        { name: 'Fertility Calculator', path: '/fertility-calculator', desc: 'Track your menstrual cycle and fertility.' },
        { name: 'Baby Weight', path: '/baby-weight', desc: 'Track your infant\'s growth and weight.' },
      ]
    },
    {
      title: 'Education & Learning',
      items: [
        { name: 'GPA Calculator', path: '/gpa', desc: 'Calculate your academic GPA.' },
        { name: 'Grade Calculator', path: '/grade', desc: 'Calculate current grade and final exam score.' },
        { name: 'Test Score', path: '/test-score', desc: 'Find your percentage and letter grade.' },
        { name: 'Final Grade', path: '/final-grade', desc: 'What you need on your final exam.' },
        { name: 'Class Rank', path: '/class-rank', desc: 'Calculate your percentile in your class.' },
        { name: 'Weighted Average', path: '/weighted-average', desc: 'Calculate average with different weights.' },
        { name: 'Reading Level', path: '/reading-level', desc: 'Check the readability of your text.' },
        { name: 'Words Per Minute', path: '/words-per-minute', desc: 'Test your typing speed and accuracy.' },
        { name: 'Study Time', path: '/study-time', desc: 'Plan your weekly academic schedule.' },
        { name: 'Scholarship', path: '/scholarship', desc: 'Calculate financial aid and tuition coverage.' },
      ]
    },
    {
      title: 'Automotive',
      items: [
        { name: 'MPG Calculator', path: '/mpg', desc: 'Calculate fuel efficiency and L/100km.' },
        { name: 'Car Depreciation', path: '/car-depreciation', desc: 'Estimate your vehicle\'s future value.' },
        { name: 'Tire Size', path: '/tire-size', desc: 'Calculate diameter and circumference.' },
        { name: 'Car Lease', path: '/car-lease', desc: 'Calculate monthly lease payments.' },
        { name: 'Vehicle Tax', path: '/vehicle-tax', desc: 'Calculate sales tax and registration fees.' },
        { name: 'Road Trip Cost', path: '/road-trip-cost', desc: 'Plan your trip budget and gas money.' },
        { name: 'Auto Loan', path: '/auto-loan', desc: 'Plan your vehicle purchase payments.' },
        { name: 'Fuel Cost', path: '/fuel-cost', desc: 'Estimate trip gas money and MPG.' },
      ]
    },
    {
      title: 'Everyday Tools',
      items: [
        { name: 'Time Calculator', path: '/time', desc: 'Add, subtract, and calculate durations.' },
        { name: 'Password Generator', path: '/password-generator', desc: 'Create secure, random passwords.' },
        { name: 'Discount Calculator', path: '/discount', desc: 'Calculate sale savings and final prices.' },
        { name: 'Tip Calculator', path: '/tip', desc: 'Split the bill and calculate tips.' },
        { name: 'Hours Calculator', path: '/hours', desc: 'Track work time and weekly payroll.' },
        { name: 'Amazon FBA', path: '/amazon-fba', desc: 'Estimate seller profit margins.' },
        { name: 'Unit Converter', path: '/unit-converter', desc: 'Convert between any measurement units.' },
        { name: 'Percentage Off', path: '/percentage-off', desc: 'Calculate savings and final sale price.' },
        { name: 'Word Counter', path: '/word-counter', desc: 'Count words, characters, and reading time.' },
        { name: 'Temperature Converter', path: '/temperature-converter', desc: 'Convert between Celsius, Fahrenheit, and Kelvin.' },
        { name: 'Roman Numeral Converter', path: '/roman-numeral-converter', desc: 'Convert between Arabic and Roman numerals.' },
        { name: 'Height Calculator', path: '/height', desc: 'Convert between different height units and estimate growth.' },
        { name: 'Bra Size Calculator', path: '/bra-size', desc: 'Find your correct bra size with simple measurements.' },
        { name: 'Dice Roller', path: '/dice-roller', desc: 'Roll virtual dice for games and probability.' },
        { name: 'GDP Calculator', path: '/gdp', desc: 'Calculate Gross Domestic Product using different methods.' },
        { name: 'Stair Calculator', path: '/stair', desc: 'Calculate staircase dimensions, steps, and stringers.' },
        { name: 'Shoe Size Conversion', path: '/shoe-size-conversion', desc: 'Convert shoe sizes between US, UK, EU, and CM.' },
        { name: 'Density Calculator', path: '/density', desc: 'Calculate density from mass and volume.' },
        { name: 'Mass Calculator', path: '/mass', desc: 'Calculate mass from density and volume.' },
        { name: 'Weight Calculator', path: '/weight', desc: 'Calculate weight from mass and gravity.' },
        { name: 'Speed Calculator', path: '/speed', desc: 'Calculate speed from distance and time.' },
        { name: 'Molarity Calculator', path: '/molarity', desc: 'Calculate molarity from moles and volume.' },
        { name: 'Molecular Weight', path: '/molecular-weight', desc: 'Calculate molecular weight from chemical formulas.' },
        { name: 'Golf Handicap', path: '/golf-handicap', desc: 'Calculate your golf handicap index.' },
        { name: 'Wind Chill', path: '/wind-chill', desc: 'Calculate the feel-like temperature based on wind.' },
        { name: 'Bandwidth Calculator', path: '/bandwidth', desc: 'Estimate download and upload times for files.' },
        { name: 'Base64 Converter', path: '/base64', desc: 'Encode and decode text to Base64 format.' },
        { name: 'URL Converter', path: '/url-converter', desc: 'Encode and decode URLs for safe web use.' },
        { name: 'Time Duration', path: '/time-duration', desc: 'Calculate the time elapsed between two points.' },
        { name: 'Day Counter', path: '/day-counter', desc: 'Count the number of days between two dates.' },
        { name: 'Day of the Week', path: '/day-of-the-week', desc: 'Find out what day of the week a date falls on.' },
      ]
    },
    {
      title: 'SEO & Tools',
      items: [
        { name: 'Calculator Monthly Searches', path: '/calculator-monthly-searches', desc: 'Discover trending calculator keywords and volumes.' },
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Free Online Calculators 2026 | simplycalculator.app</title>
        <meta name="description" content="Access a comprehensive collection of free online calculators for 2026. Finance, health, math, and more. Accurate, easy to use, and mobile-friendly." />
      </Helmet>

      <div className="space-y-8">
        <section>
          <h1 className="text-2xl font-bold mb-4">Free Online Calculators</h1>
          <p className="text-sm leading-relaxed">
            Welcome to our free online calculator site. We provide a wide range of calculators to help you with your daily math needs. Whether you are looking for financial tools, health trackers, or simple math helpers, we have you covered.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <React.Fragment key={cat.title}>
              <div className="space-y-4">
                <h2 className="section-title">{cat.title}</h2>
                <div className="space-y-3">
                  {cat.items.map((item) => (
                    <div key={item.path} className="flex flex-col">
                      <Link to={item.path} className="text-[#0066cc] font-bold hover:underline">
                        {item.name}
                      </Link>
                      <span className="text-xs text-[#666]">{item.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
              {idx === 1 && (
                <div className="md:col-span-2 py-6">
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <section className="mt-12 pt-8 border-t border-[#eee]">
          <h2 className="text-xl font-bold mb-4">About Our Calculators</h2>
          <p className="text-sm">
            All our calculators are designed to be accurate and easy to use. We use standard formulas and the latest data to ensure you get the best results. Our mortgage calculator 2026 is updated with the latest interest rate trends, and our health tools follow WHO guidelines.
          </p>
          <p className="text-sm">
            We are constantly adding new tools. If you have a suggestion for a calculator that would be useful to you, please let us know through our contact page. You can also browse our full list of tools on our <Link to="/sitemap" className="text-[#0066cc] hover:underline">sitemap</Link>.
          </p>
        </section>
      </div>
    </>
  );
};
