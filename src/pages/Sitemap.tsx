import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const Sitemap: React.FC = () => {
  const categories = [
    {
      title: 'Financial Calculators',
      items: [
        { name: 'Mortgage Calculator', path: '/mortgage' },
        { name: 'Loan Calculator', path: '/loan' },
        { name: 'Auto Loan Calculator', path: '/auto-loan' },
        { name: 'Interest Calculator', path: '/simple-interest' },
        { name: 'Payment Calculator', path: '/repayment' },
        { name: 'Retirement Calculator', path: '/retirement' },
        { name: 'Amortization Calculator', path: '/mortgage' },
        { name: 'Investment Calculator', path: '/investment' },
        { name: 'Currency Calculator', path: '/currency-converter' },
        { name: 'Inflation Calculator', path: '/inflation' },
        { name: 'Finance Calculator', path: '/investment' },
        { name: 'Mortgage Payoff Calculator', path: '/mortgage' },
        { name: 'Income Tax Calculator', path: '/income-tax' },
        { name: 'Compound Interest Calculator', path: '/compound-interest' },
        { name: 'Salary Calculator', path: '/salary' },
        { name: '401K Calculator', path: '/401k' },
        { name: 'Interest Rate Calculator', path: '/interest-rate' },
        { name: 'Sales Tax Calculator', path: '/sales-tax' },
        { name: 'House Affordability Calculator', path: '/house-affordability' },
        { name: 'Savings Calculator', path: '/savings' },
        { name: 'Rent Calculator', path: '/rent' },
        { name: 'Marriage Tax Calculator', path: '/marriage-tax' },
        { name: 'Estate Tax Calculator', path: '/estate-tax' },
        { name: 'Pension Calculator', path: '/pension' },
        { name: 'Social Security Calculator', path: '/social-security' },
        { name: 'Annuity Calculator', path: '/annuity' },
        { name: 'Annuity Payout Calculator', path: '/annuity-payout' },
        { name: 'Credit Card Calculator', path: '/credit-card' },
        { name: 'Credit Cards Payoff Calculator', path: '/credit-card-payoff' },
        { name: 'Debt Payoff Calculator', path: '/debt-payoff' },
        { name: 'Debt Consolidation Calculator', path: '/debt-consolidation' },
        { name: 'Repayment Calculator', path: '/repayment' },
        { name: 'Student Loan Calculator', path: '/student-loan' },
        { name: 'College Cost Calculator', path: '/college-cost' },
        { name: 'Simple Interest Calculator', path: '/simple-interest' },
        { name: 'CD Calculator', path: '/cd' },
        { name: 'Bond Calculator', path: '/bond' },
        { name: 'Mutual Fund Calculator', path: '/mutual-fund' },
        { name: 'Roth IRA Calculator', path: '/roth-ira' },
        { name: 'IRA Calculator', path: '/ira' },
        { name: 'RMD Calculator', path: '/rmd' },
        { name: 'VAT Calculator', path: '/vat' },
        { name: 'Cash Back or Low Interest Calculator', path: '/cash-back-low-interest' },
        { name: 'Auto Lease Calculator', path: '/auto-lease' },
        { name: 'Depreciation Calculator', path: '/depreciation' },
        { name: 'Average Return Calculator', path: '/average-return' },
        { name: 'Margin Calculator', path: '/margin' },
        { name: 'Discount Calculator', path: '/discount' },
        { name: 'Business Loan Calculator', path: '/business-loan' },
        { name: 'Debt-to-Income Ratio Calculator', path: '/dti-ratio' },
        { name: 'Real Estate Calculator', path: '/brrrr' },
        { name: 'Take-Home-Paycheck Calculator', path: '/salary' },
        { name: 'Personal Loan Calculator', path: '/personal-loan' },
        { name: 'Boat Loan Calculator', path: '/boat-loan' },
        { name: 'Lease Calculator', path: '/lease' },
        { name: 'Refinance Calculator', path: '/refinance' },
        { name: 'Budget Calculator', path: '/budget' },
        { name: 'Rental Property Calculator', path: '/rental-property' },
        { name: 'IRR Calculator', path: '/irr' },
        { name: 'ROI Calculator', path: '/roi' },
        { name: 'APR Calculator', path: '/apr' },
        { name: 'FHA Loan Calculator', path: '/mortgage' },
        { name: 'VA Mortgage Calculator', path: '/mortgage' },
        { name: 'Home Equity Loan Calculator', path: '/home-equity' },
        { name: 'HELOC Calculator', path: '/heloc' },
        { name: 'Down Payment Calculator', path: '/mortgage' },
        { name: 'Rent vs. Buy Calculator', path: '/rent' },
        { name: 'Payback Period Calculator', path: '/payback-period' },
        { name: 'Present Value Calculator', path: '/present-value' },
        { name: 'Future Value Calculator', path: '/future-value' },
        { name: 'Commission Calculator', path: '/commission' },
        { name: 'Mortgage Calculator UK', path: '/mortgage-uk' },
        { name: 'Canadian Mortgage Calculator', path: '/canadian-mortgage' },
        { name: 'Mortgage Amortization Calculator', path: '/mortgage' },
        { name: 'Percent Off Calculator', path: '/percentage-off' },
        { name: 'BRRRR Calculator', path: '/brrrr' },
        { name: 'Amazon FBA Calculator', path: '/amazon-fba' },
      ]
    },
    {
      title: 'Fitness and Health Calculators',
      items: [
        { name: 'BMI Calculator', path: '/bmi' },
        { name: 'Calorie Calculator', path: '/calorie' },
        { name: 'Body Fat Calculator', path: '/body-fat' },
        { name: 'BMR Calculator', path: '/bmr' },
        { name: 'Macro Calculator', path: '/macro' },
        { name: 'Ideal Weight Calculator', path: '/ideal-weight' },
        { name: 'Pregnancy Calculator', path: '/pregnancy' },
        { name: 'Pregnancy Weight Gain Calculator', path: '/pregnancy-weight-gain' },
        { name: 'Pregnancy Conception Calculator', path: '/pregnancy-conception' },
        { name: 'Due Date Calculator', path: '/due-date' },
        { name: 'Pace Calculator', path: '/pace' },
        { name: 'Army Body Fat Calculator', path: '/arm-body-fat' },
        { name: 'Carbohydrate Calculator', path: '/carbohydrate' },
        { name: 'Lean Body Mass Calculator', path: '/lean-body-mass' },
        { name: 'Healthy Weight Calculator', path: '/healthy-weight' },
        { name: 'Calories Burned Calculator', path: '/calories-burned' },
        { name: 'One Rep Max Calculator', path: '/one-rep-max' },
        { name: 'Target Heart Rate Calculator', path: '/target-heart-rate' },
        { name: 'Protein Calculator', path: '/protein' },
        { name: 'Fat Intake Calculator', path: '/fat-intake' },
        { name: 'TDEE Calculator', path: '/tdee' },
        { name: 'Ovulation Calculator', path: '/ovulation' },
        { name: 'Conception Calculator', path: '/conception' },
        { name: 'Period Calculator', path: '/period' },
        { name: 'GFR Calculator', path: '/gfr' },
        { name: 'Body Type Calculator', path: '/body-type' },
        { name: 'Body Surface Area Calculator', path: '/body-surface-area' },
        { name: 'BAC Calculator', path: '/bac' },
        { name: 'Anorexic BMI Calculator', path: '/anorexic-bmi' },
        { name: 'Weight Watcher Points Calculator', path: '/weight-watcher-points' },
        { name: 'Overweight Calculator', path: '/overweight' },
        { name: 'Water Intake Calculator', path: '/water-intake' },
        { name: 'Child Height Predictor', path: '/child-height-predictor' },
        { name: 'Sobriety Calculator', path: '/sobriety-calculator' },
        { name: 'Waist to Hip Ratio', path: '/waist-to-hip' },
        { name: 'VO2 Max Calculator', path: '/vo2-max' },
        { name: 'Postpartum Recovery', path: '/postpartum-recovery' },
        { name: 'Fertility Calculator', path: '/fertility-calculator' },
        { name: 'Baby Weight Calculator', path: '/baby-weight' },
      ]
    },
    {
      title: 'Education & Learning',
      items: [
        { name: 'GPA Calculator', path: '/gpa' },
        { name: 'Grade Calculator', path: '/grade' },
        { name: 'Test Score Calculator', path: '/test-score' },
        { name: 'Final Grade Calculator', path: '/final-grade' },
        { name: 'Class Rank Calculator', path: '/class-rank' },
        { name: 'Weighted Average Calculator', path: '/weighted-average' },
        { name: 'Reading Level Calculator', path: '/reading-level' },
        { name: 'Words Per Minute Calculator', path: '/words-per-minute' },
        { name: 'Study Time Calculator', path: '/study-time' },
        { name: 'Scholarship Calculator', path: '/scholarship' },
      ]
    },
    {
      title: 'Automotive Calculators',
      items: [
        { name: 'MPG Calculator', path: '/mpg' },
        { name: 'Car Depreciation Calculator', path: '/car-depreciation' },
        { name: 'Tire Size Calculator', path: '/tire-size' },
        { name: 'Car Lease Calculator', path: '/car-lease' },
        { name: 'Vehicle Tax Calculator', path: '/vehicle-tax' },
        { name: 'Road Trip Cost Calculator', path: '/road-trip-cost' },
        { name: 'Auto Loan Calculator', path: '/auto-loan' },
        { name: 'Fuel Cost Calculator', path: '/fuel-cost' },
        { name: 'Gas Mileage Calculator', path: '/mpg' },
        { name: 'Horsepower Calculator', path: '/engine-horsepower' },
        { name: 'Mileage Calculator', path: '/mpg' },
      ]
    },
    {
      title: 'Home Improvement',
      items: [
        { name: 'Paint Calculator', path: '/paint' },
        { name: 'Flooring Calculator', path: '/flooring' },
        { name: 'Tile Calculator', path: '/tile' },
        { name: 'Fence Calculator', path: '/fence' },
        { name: 'Mulch Calculator', path: '/mulch' },
        { name: 'Gravel Calculator', path: '/gravel' },
        { name: 'Stair Calculator', path: '/stair' },
        { name: 'Wallpaper Calculator', path: '/wallpaper' },
        { name: 'Deck Calculator', path: '/deck' },
      ]
    },
    {
      title: 'Math Calculators',
      items: [
        { name: 'Scientific Calculator', path: '/scientific' },
        { name: 'Fraction Calculator', path: '/fraction' },
        { name: 'Percentage Calculator', path: '/percentage' },
        { name: 'Triangle Calculator', path: '/triangle' },
        { name: 'Volume Calculator', path: '/volume' },
        { name: 'Standard Deviation Calculator', path: '/standard-deviation' },
        { name: 'Random Number Generator', path: '/random-number' },
        { name: 'Number Sequence Calculator', path: '/number-sequence' },
        { name: 'Percent Error Calculator', path: '/percent-error' },
        { name: 'Exponent Calculator', path: '/exponent' },
        { name: 'Binary Calculator', path: '/binary' },
        { name: 'Hex Calculator', path: '/hex' },
        { name: 'Half-Life Calculator', path: '/half-life' },
        { name: 'Quadratic Formula Calculator', path: '/quadratic-formula' },
        { name: 'Slope Calculator', path: '/slope' },
        { name: 'Log Calculator', path: '/log' },
        { name: 'Area Calculator', path: '/area' },
        { name: 'Sample Size Calculator', path: '/sample-size' },
        { name: 'Probability Calculator', path: '/probability' },
        { name: 'Statistics Calculator', path: '/statistics' },
        { name: 'Mean, Median, Mode, Range Calculator', path: '/statistics' },
        { name: 'Permutation and Combination Calculator', path: '/permutation' },
        { name: 'Z-score Calculator', path: '/z-score' },
        { name: 'Confidence Interval Calculator', path: '/confidence-interval' },
        { name: 'Ratio Calculator', path: '/ratio' },
        { name: 'Distance Calculator', path: '/distance' },
        { name: 'Circle Calculator', path: '/circle' },
        { name: 'Surface Area Calculator', path: '/surface-area' },
        { name: 'Pythagorean Theorem Calculator', path: '/pythagorean-theorem' },
        { name: 'Right Triangle Calculator', path: '/right-triangle' },
        { name: 'Root Calculator', path: '/square-root' },
        { name: 'Least Common Multiple Calculator', path: '/lcm' },
        { name: 'Greatest Common Factor Calculator', path: '/gcf' },
        { name: 'Factor Calculator', path: '/factor' },
        { name: 'Rounding Calculator', path: '/rounding' },
        { name: 'Matrix Calculator', path: '/matrix' },
        { name: 'Scientific Notation Calculator', path: '/scientific-notation' },
        { name: 'Big Number Calculator', path: '/big-number' },
        { name: 'Prime Factorization Calculator', path: '/prime-factorization' },
        { name: 'Common Factor Calculator', path: '/common-factor' },
        { name: 'Basic Calculator', path: '/basic-calculator' },
        { name: 'Long Division Calculator', path: '/long-division' },
        { name: 'Average Calculator', path: '/average' },
        { name: 'P-value Calculator', path: '/p-value' },
      ]
    },
    {
      title: 'Other Calculators',
      items: [
        { name: 'Age Calculator', path: '/age' },
        { name: 'Date Calculator', path: '/date' },
        { name: 'Time Calculator', path: '/time' },
        { name: 'Hours Calculator', path: '/hours' },
        { name: 'Height Calculator', path: '/height' },
        { name: 'Concrete Calculator', path: '/concrete' },
        { name: 'IP Subnet Calculator', path: '/ip-subnet' },
        { name: 'Bra Size Calculator', path: '/bra-size' },
        { name: 'Password Generator', path: '/password-generator' },
        { name: 'Dice Roller', path: '/dice-roller' },
        { name: 'Conversion Calculator', path: '/unit-converter' },
        { name: 'Voltage Drop Calculator', path: '/voltage-drop' },
        { name: 'BTU Calculator', path: '/btu' },
        { name: 'Square Footage Calculator', path: '/square-footage' },
        { name: 'Time Card Calculator', path: '/time-card' },
        { name: 'Time Zone Calculator', path: '/time-zone-converter' },
        { name: 'Love Calculator', path: '/love-calculator' },
        { name: 'GDP Calculator', path: '/gdp' },
        { name: 'Stair Calculator', path: '/stair' },
        { name: 'Resistor Calculator', path: '/resistor' },
        { name: 'Ohms Law Calculator', path: '/ohms-law' },
        { name: 'Electricity Calculator', path: '/electricity' },
        { name: 'Shoe Size Conversion', path: '/shoe-size-conversion' },
        { name: 'Tip Calculator', path: '/tip' },
        { name: 'Density Calculator', path: '/density' },
        { name: 'Mass Calculator', path: '/mass' },
        { name: 'Weight Calculator', path: '/weight' },
        { name: 'Speed Calculator', path: '/speed' },
        { name: 'Molarity Calculator', path: '/molarity' },
        { name: 'Molecular Weight Calculator', path: '/molecular-weight' },
        { name: 'Roman Numeral Converter', path: '/roman-numeral-converter' },
        { name: 'Golf Handicap Calculator', path: '/golf-handicap' },
        { name: 'Sleep Calculator', path: '/sleep-calculator' },
        { name: 'Roofing Calculator', path: '/roofing' },
        { name: 'Wind Chill Calculator', path: '/wind-chill' },
        { name: 'Heat Index Calculator', path: '/heat-index' },
        { name: 'Dew Point Calculator', path: '/dew-point' },
        { name: 'Bandwidth Calculator', path: '/bandwidth' },
        { name: 'Base64 Encode / Decode', path: '/base64' },
        { name: 'URL Encode / Decode', path: '/url-converter' },
        { name: 'Time Duration Calculator', path: '/time-duration' },
        { name: 'Day Counter', path: '/day-counter' },
        { name: 'Day of the Week Calculator', path: '/day-of-the-week' },
        { name: 'Word Counter', path: '/word-counter' },
        { name: 'Numerology Calculator', path: '/numerology' },
        { name: 'Zodiac/Star Sign Calculator', path: '/zodiac' },
        { name: 'Temperature Converter', path: '/temperature-converter' },
        { name: 'Days Until Calculator', path: '/days-until' },
        { name: 'Business Days Calculator', path: '/business-days' },
        { name: 'Chronological Age Calculator', path: '/chronological-age' },
        { name: 'Work Hours Calculator', path: '/work-hours' },
        { name: 'Retirement Date Calculator', path: '/retirement-date' },
        { name: 'Anniversary Calculator', path: '/anniversary-calculator' },
      ]
    },
    {
      title: 'SEO & Tools',
      items: [
        { name: 'Calculator Monthly Searches', path: '/calculator-monthly-searches' },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Sitemap | All Online Calculators 2026 | simplycalculator.app</title>
        <meta name="description" content="Browse our complete list of free online calculators. Find tools for finance, fitness, health, math, and more in our comprehensive sitemap." />
      </Helmet>

      <div className="mb-8">
        <nav className="flex text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-[#0066cc]">home</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium">sitemap</span>
        </nav>
        <h1 className="text-3xl font-bold text-slate-900">Sitemap</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {categories.map((cat) => (
          <div key={cat.title} className="space-y-6">
            <h2 className="text-xl font-bold text-[#0066cc] border-b-2 border-[#0066cc] pb-2">
              {cat.title}
            </h2>
            <div className="grid grid-cols-1 gap-y-2">
              {cat.items.map((item, idx) => (
                <div key={`${item.name}-${idx}`}>
                  {item.path !== '#' ? (
                    <Link 
                      to={item.path} 
                      className="text-slate-700 hover:text-[#0066cc] hover:underline text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0066cc]"></span>
                      {item.name}
                    </Link>
                  ) : (
                    <div className="text-slate-400 text-sm flex items-center gap-2 cursor-default">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-200"></span>
                      {item.name}
                      <span className="text-[10px] uppercase tracking-wider bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">Soon</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 prose prose-slate max-w-none border-t pt-8">
        <h2 className="text-2xl font-bold text-slate-900">About Our Calculator Directory</h2>
        <p>
          Welcome to the most comprehensive directory of free online calculators for 2026. At simplycalculator.app, we are dedicated to providing accurate, easy-to-use tools for every aspect of your life. Whether you're planning your financial future, tracking your health journey, or solving complex mathematical equations, our sitemap is designed to help you find the exact tool you need.
        </p>
        <p>
          Each page in our directory is more than just a calculation tool. We provide in-depth guides (300-500 words) that explain the underlying formulas, offer step-by-step usage instructions, and answer frequently asked questions. This ensures that you not only get the right answer but also understand the "why" behind the results.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Navigate the Sitemap</h3>
        <p>
          Our calculators are organized into four primary categories to make navigation intuitive:
        </p>
        <ul>
          <li><strong>Financial Calculators:</strong> Tools for mortgages, loans, investments, taxes, and retirement planning.</li>
          <li><strong>Fitness and Health Calculators:</strong> Track your BMI, calories, pregnancy progress, and ideal body weight.</li>
          <li><strong>Math Calculators:</strong> From basic arithmetic to advanced scientific functions, statistics, and geometry.</li>
          <li><strong>Other Calculators:</strong> A diverse collection of everyday tools including age, GPA, concrete volume, and more.</li>
        </ul>
        <p>
          Items marked with a <span className="text-[10px] uppercase tracking-wider bg-slate-100 px-1.5 py-0.5 rounded text-slate-500">Soon</span> tag are currently in development. We are constantly expanding our library to meet the needs of our users. If there is a specific calculator you'd like to see added to our site, please don't hesitate to contact us.
        </p>
      </div>
    </div>
  );
};
