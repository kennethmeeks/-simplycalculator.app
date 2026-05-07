
export const getHighIntentSEO = (name: string, categoryTitle: string = 'Professional', categorySlug: string = '') => {
    const lowerName = name.toLowerCase();
    const lowSlug = categorySlug.toLowerCase();
    
    // 1. Dynamic CTR-Optimized Title Patterns
    let title = `${name} Calculator — 100% Free, Instant & Accurate (2026)`;
    
    if (lowerName === 'calibration curve') {
        title = `Calibration Curve Calculator — Linear Regression & Interpolation`;
    } else if (lowerName === 'gini index' || lowerName === 'wealth inequality index') {
        title = `Gini Index Calculator — Measure Wealth & Income Inequality`;
    } else if (lowerName === 'car depreciation') {
        title = `Car Depreciation Calculator — Check Your Vehicle's 2026 Value`;
    } else if (lowerName === 'mortgage') {
        title = `Mortgage Calculator — Monthly Payment & Interest (2026)`;
    } else if (lowerName === '12-hour shift pay') {
        title = `12-Hour Shift Pay Calculator — Gross & Net Wage Estimator`;
    } else if (lowerName === '401k' || lowerName === '401(k)') {
        title = `401k Calculator — 2026 Retirement Savings & Match Projection`;
    } else if (lowerName === '403b' || lowerName === '403(b)') {
        title = `403b Calculator — Plan Your Teacher & Non-Profit Retirement`;
    } else if (lowerName === '50-30-20 rule') {
        title = `50-30-20 Rule Calculator — Smart Budgeting & Savings Split`;
    } else if (lowerName === '529 plan') {
        title = `529 Plan Calculator — College Savings & Tax Advantage Growth`;
    } else if (lowerName === '70-20-10 rule') {
        title = `70-20-10 Rule Budget Calculator — Income Distribution Tool`;
    } else if (lowerName === '28-36 rule') {
        title = `28-36 Rule Calculator — Debt-to-Income Mortgage Qualifier`;
    } else if (lowerName === 'acoustic impedance') {
        title = `Acoustic Impedance Calculator — Sound Propagation Physics Tool`;
    } else if (lowerName === 'bmi' || lowerName === 'bmi calculator') {
        title = `BMI Calculator — Check Your Body Mass Index (2026)`;
    } else if (lowerName === 'angel number') {
        title = `Angel Number Calculator — Discover Your Spiritual Sign (2026)`;
    } else if (lowerName === 'livestock mortality' || lowerName === 'animal mortality rate') {
        title = `Livestock Mortality Calculator — Herd Health & Death Rate (2026)`;
    } else if (lowerName === 'annualized return') {
        title = `Annualized Return Calculator — Total Return to CAGR (2026)`;
    } else if (lowerName === 'atom calculator') {
        title = `Atom Calculator — Protons, Neutrons & Electrons (2026)`;
    } else if (lowerName === 'ddos traffic scale' || lowerName === 'attack vector bandwidth') {
        title = `DDoS Traffic Scale — Attack Vector & Bandwidth Calculator`;
    } else if (lowerName === 'smart home hub logic' || lowerName === 'automation complexity') {
        title = `Smart Home Hub Logic — Automation Complexity & Reliability`;
    } else if (lowerName === 'bathroom mirror size') {
        title = `Bathroom Mirror Size Calculator — Perfect Fit & Dimensions`;
    } else if (lowerName === 'bitcoin etf') {
        title = `Bitcoin ETF Calculator — Spot BTC Fund Profit & Return Estimator`;
    } else if (lowerName === 'bold text' || lowerName === 'bold-text') {
        title = `Bold Text Generator — Stylized Fonts for Social Media (2026)`;
    } else if (lowerName === 'capital gains yield') {
        title = `Capital Gains Yield Calculator — Asset Price Return (2026)`;
    } else if (lowerName === 'cholesterol ratio') {
        title = `Cholesterol Ratio Calculator — HDL/LDL Lipid Health Chart`;
    } else if (lowerName === 'compound growth') {
        title = `Compound Growth Calculator — Projection & Future Value Tool`;
    } else if (lowerName === 'compound interest rate') {
        title = `Compound Interest Rate Calculator — Find Required Growth Rate`;
    } else if (lowerName === 'credit card interest') {
        title = `Credit Card Interest Calculator — Cost of Monthly Debt Balance`;
    } else if (lowerName === 'age' || lowerName === 'birth' || lowerName === 'birthday') {
        title = `Age Calculator — Your Exact Age in Years, Months, Days`;
    } else if (lowerName === 'gpa' || lowerName === 'grade') {
        title = `GPA Calculator — Semester & Cumulative Grade Average`;
    } else if (lowerName === 'compound interest') {
        title = `Compound Interest Calculator — Project Your Savings Growth`;
    } else if (lowerName.includes('word') && lowerName.includes('time')) {
        title = `Word to Time Converter — Minutes to Words Reading Calculator`;
    } else if (lowerName === 'scientific' || lowerName === 'scientific calculator') {
        title = `Scientific Calculator — Free Online Full Screen Tool (2026)`;
    } else if (lowerName === 'square footage' || lowerName === 'square feet') {
        title = `Square Footage Calculator — Calculate Area in Sq Ft & Sq M`;
    } else if (lowerName === 'percentage' || lowerName === 'percent') {
        title = `Percentage Calculator — Quick Percent Increase & Decrease`;
    } else if (lowerName === 'tip' || lowerName === 'gratuity') {
        title = `Tip Calculator — Fast Bill Split & Gratuity (2026)`;
    } else if (lowerName === 'discount' || lowerName === 'percent off') {
        title = `Discount Calculator — 2026 Sale Price & Savings Tool`;
    } else if (lowerName === 'sales tax' || lowerName === 'vat') {
        title = `Sales Tax Calculator — 2026 Accurate Tax & Total Price`;
    } else if (lowSlug === 'roofing' || lowerName.includes('roof') || lowerName.includes('shingle')) {
        title = `${name} — Precise Roofing & Framing Estimator (2026)`;
    } else if (lowSlug === 'geology' || lowerName.includes('mineral') || lowerName.includes('seismic')) {
        title = `${name} — Geology & Earth Science Analysis Tool`;
    } else if (lowSlug === 'everyday' || lowerName.includes('lucky') || lowerName.includes('friendship')) {
        title = `${name} — Fun & Functional Everyday Tools (2026)`;
    } else if (lowSlug === 'finance' || lowerName.includes('401k') || lowerName.includes('ira') || lowerName.includes('savings')) {
        title = `Fast ${name} Calculator — 2026 Financial Planning Tool`;
    } else if (lowerName.includes('mortgage') || lowerName.includes('loan') || lowerName.includes('payment')) {
        title = `How Much is ${name}? | Instant 2026 Payment Estimator`;
    } else if (lowerName.includes('bmi') || lowerName.includes('bmr') || lowerName.includes('calories') || lowSlug === 'health') {
        title = `Check Your ${name} — 2026 Clinical Health & BMI Index`;
    } else if (lowerName.includes('conversion') || lowerName.includes('converter') || lowerName.includes('to')) {
        const parts = name.split(' to ');
        if (parts.length === 2) {
             title = `Convert ${parts[0]} to ${parts[1]} — Precise 2026 Results`;
        } else {
             title = `${name} — Precise Unit & Value Converter`;
        }
    } else if (lowSlug === 'construction' || lowerName.includes('concrete') || lowerName.includes('lumber')) {
        title = `${name} Estimator | 2026 Job Site Material Tools`;
    } else if (lowerName.includes('salary') || lowerName.includes('wage') || lowerName.includes('hourly')) {
        title = `${name} Analysis — Calculate Your 2026 Net Take-Home`;
    } else if (lowerName.includes('age') || lowerName.includes('birthday') || lowSlug === 'personal') {
        title = `When is my ${name}? | Accurate Date & Milestone Tracker`;
    } else if (lowSlug === 'automotive' || lowerName.includes('car') || lowerName.includes('mpg')) {
        title = `${name} Tool — 2026 Vehicle Performance & Costs`;
    } else if (lowSlug === 'math' || lowerName.includes('scientific') || lowerName.includes('solve')) {
        title = `Solve ${name} Instantly — 2026 Mathematics Engine`;
    } else if (lowerName === 'inflation') {
        title = `Inflation Calculator — Buying Power & Dollar Value (2026)`;
    } else if (lowerName === 'calories' || lowerName === 'calorie') {
        title = `Calorie Calculator — Daily TDEE & Weight Loss Intake (2026)`;
    } else if (lowerName === 'debt avalanche') {
        title = `Debt Avalanche Calculator — Pay Off Debt Fastest (2026 Math)`;
    } else if (lowerName === 'debt snowball') {
        title = `Debt Snowball Calculator — Build 2026 Budgeting Momentum`;
    } else if (lowerName === 'balance transfer') {
        title = `Balance Transfer Calculator — See Your 2026 Interest Savings`;
    } else if (lowerName === 'credit card minimum payment' || lowerName === 'cc minimum payment') {
        title = `Credit Card Minimum Payment Calculator — Payoff Time & Interest`;
    } else if (lowerName === 'credit card payment') {
        title = `Credit Card Payment Calculator — Plan Your Path to Zero Debt`;
    } else if (lowerName === 'credit utilization') {
        title = `Credit Utilization Calculator — Debt-to-Limit & Credit Health`;
    } else if (lowerName === 'inverter efficiency' || lowerName === 'dc ac loss math') {
        title = `Inverter Efficiency Calculator — DC to AC Power Loss Analysis`;
    } else if (lowerName === 'debt calculator' || lowerName === 'debt') {
        title = `Debt Calculator — Track Your Total Debt & Net Worth Impact`;
    } else if (lowerName === 'deferred payment loan') {
        title = `Deferred Payment Loan Calculator — Cost of Pausing Payments`;
    } else if (lowerName === 'dimensional analysis') {
        title = `Dimensional Analysis Calculator — Unit Conversion & Math`;
    } else if (lowerName === 'dog bmi') {
        title = `Dog BMI Calculator — Check Your Canine's Healthy Weight`;
    } else if (lowerName === 'eidl advance') {
        title = `EIDL Advance Calculator — SBA Disaster Loan Grant Estimator`;
    } else if (lowerName === 'finance charge') {
        title = `Finance Charge Calculator — Calculate the True Cost of Interest`;
    } else if (lowerName === 'gold purchasing power' || lowerName === 'historical inflation') {
        title = `Gold Purchasing Power Calculator — 1800 vs 2026 Economics`;
    } else if (lowerName === 'golf handicap') {
        title = `Golf Handicap Calculator — USGA & R&A Rating Estimator`;
    } else if (lowerName === 'grade' || lowerName === 'grade calculator') {
        title = `Grade Calculator — Find the Score Needed for Your Target Grade`;
    } else if (lowerName === 'gravel bag count' || lowerName === 'substrate depth') {
        title = `Gravel Bag Count Calculator — Volume & Bed Thickness Estimator`;
    } else if (lowerName === 'hex to rgb') {
        title = `HEX to RGB Converter — Web Color to Design Code Tool`;
    } else if (lowerName === 'hours and minutes' || lowerName === 'hours-minutes') {
        title = `Hours and Minutes Calculator — Add, Subtract & Split Time`;
    } else if (lowerName === 'fuel injector duty' || lowerName === 'injector-sizing-pro') {
        title = `Fuel Injector Sizing Pro — HP & Duty Cycle Calculator`;
    } else if (lowerName === 'jumbo loan') {
        title = `Jumbo Loan Calculator — Financing for High-Value Properties`;
    } else if (lowerName === 'knots to kph') {
        title = `Knots to KPH Converter — Nautical to Land Speed Calculator`;
    } else if (lowerName === 'personal burn rate' || lowerName === 'life runway') {
        title = `Life Runway Calculator — Personal Burn Rate & Survival Days`;
    } else if (lowerName === 'man-hours') {
        title = `Man-Hours Calculator — Total Project Effort & Labor Estimator`;
    } else if (lowerName === 'common factor') {
        title = `Common Factor Calculator — Find GCF & Mathematical Factors`;
    } else if (lowerName === 'metal weight') {
        title = `Metal Weight Calculator — Aluminum, Brass & Copper Weight`;
    } else if (lowerName === 'million to billion') {
        title = `Million to Billion Converter — Large Number Economics Tool`;
    } else if (lowerName === 'f1 score calculator' || lowerName === 'f1 score') {
        title = `F1 Score Calculator — Harmonic Mean of Precision & Recall`;
    } else if (lowerName === 'drone battery flight' || lowerName === 'multi-rotor-airtime') {
        title = `Drone Battery Flight Calculator — Airtime & Flight Duration`;
    } else if (lowerName === 'nomad living cost' || lowerName === 'nomad-living-cost') {
        title = `Nomad Living Cost Calculator — 2026 Remote Work Budgeting`;
    } else if (lowerName === 'operating asset turnover') {
        title = `Operating Asset Turnover Calculator — Capital Efficiency Ratio`;
    } else if (lowerName === 'optimal hedge ratio') {
        title = `Optimal Hedge Ratio Calculator — Portfolio Risk Management`;
    } else if (lowerName === 'overtone series freq' || lowerName === 'overtone-series-freq') {
        title = `Overtone Series Frequency Calculator — Harmonic Physics Tool`;
    } else if (lowerName === 'ph') {
        title = `pH Calculator — Calculate Acidity & Ion Concentration`;
    } else if (lowerName === 'plug type finder' || lowerName === 'plug-type-finder') {
        title = `World Plug Type Finder — 2026 Global Travel Voltage Guide`;
    } else if (lowerName === 'price per square foot' || lowerName === 'price-per-square-foot') {
        title = `Price Per Square Foot Calculator — Real Estate Value Analyzer`;
    } else if (lowerName === 'psi to gpm') {
        title = `PSI to GPM Calculator — Water Flow & Pressure Estimator`;
    } else if (lowerName === 'new york tax' || lowerName === 'new-york-tax') {
        title = `New York Tax Calculator — 2026 State & City Income Tax`;
    } else if (lowerName === 'satellite lifespan' || lowerName === 'satellite-lifespan') {
        title = `Satellite Lifespan Calculator — Orbital Decay & Re-entry Time`;
    } else if (lowerName === 'security deposit interest' || lowerName === 'security-deposit-interest') {
        title = `Security Deposit Interest Calculator — Landlord-Tenant Interest`;
    } else if (lowerName === 'size to weight rectangular' || lowerName === 'size-to-weight-rectangular') {
        title = `Size to Weight Calculator — Mass Estimator for Rectangular Items`;
    } else if (lowerName === 'stone calculator' || lowerName === 'stone') {
        title = `Stone Calculator — Weight & Volume for Masonry & Aggregate`;
    } else if (lowerName === 'tax rebate net cost' || lowerName === 'tax-rebate-net-cost') {
        title = `Tax Rebate Net Cost Calculator — Calculate Final After-Tax Price`;
    } else if (lowerName === 'tdee calculator' || lowerName === 'tdee') {
        title = `TDEE Calculator — Total Daily Energy Expenditure (2026 Rules)`;
    } else if (lowerName === 'thread pitch' || lowerName === 'thread-pitch') {
        title = `Thread Pitch Calculator — Mechanical Fastener Identification`;
    } else if (lowerName === 'tls ping overhead' || lowerName === 'tls-ping-overhead') {
        title = `TLS Ping Overhead Calculator — SSL Handshake Latency Tool`;
    } else if (lowerName === 'triathlon finish' || lowerName === 'triathlon-finish') {
        title = `Triathlon Finish Time Calculator — 2026 Race Day Predictor`;
    } else if (lowerName === 'battery state of charge' || lowerName === 'voltage-rest-soc') {
        title = `Battery State of Charge Calculator — Voltage to % Capacity (2026)`;
    } else if (lowerName === 'wi-fi mesh placer' || lowerName === 'wifi-mesh-count') {
        title = `Wi-Fi Mesh Node Calculator — Optimize Coverage by Sq Ft`;
    } else if (lowerName === 'yield multiplier' || lowerName === 'yield-multiplier') {
        title = `Yield Multiplier Calculator — Projected Investment Growth Tool`;
    } else if (lowerName === 'floor area ratio (far)' || lowerName === 'zoning-density-math') {
        title = `FAR Calculator — Floor Area Ratio & Zoning Density Tool`;
    }
 
    // 2. Dynamic High-Value Meta Descriptions (Unique per Category)
    let description = `Get instant, accurate results with our free ${name} calculator. Updated for 2026 with professional math standards for ${categoryTitle} needs. Try it now!`;

    if (lowerName === 'calibration curve') {
        description = `Generate professional linear regression models with the Calibration Curve Calculator. Calculate slopes, intercepts, and interpolate unknown sample concentrations instantly.`;
    } else if (lowerName === 'wealth inequality index' || lowerName === 'gini index') {
        description = `Understand economic distribution with our Gini Index Calculator. Precise wealth and income inequality analysis for students, researchers, and professional economists.`;
    } else if (lowerName === 'mortgage') {
        description = `Find your exact monthly mortgage payment with our professional calculator. Includes principal, interest, taxes, and PMI analysis for 2026 house hunting.`;
    } else if (lowerName === '12-hour shift pay') {
        description = `Calculate your total earnings for 12-hour shifts. This 2026 wage tool handles overtime, shift differentials, and weekly pay projections for healthcare and manufacturing.`;
    } else if (lowerName === '401k') {
        description = `Project your 401k balance at retirement. Calculate employer matching, annual contributions, and compound growth to see if you're on track for 2026 and beyond.`;
    } else if (lowerName === '403b') {
        description = `Retirement planning for educators and non-profit employees. Calculate your 403b growth, contribution limits, and tax-deferred advantages for a secure future.`;
    } else if (lowerName === '50-30-20 rule') {
        description = `Master your budget with the 50-30-20 Rule Calculator. Automatically split your income into needs, wants, and savings to reach your 2026 financial goals.`;
    } else if (lowerName === '529 plan') {
        description = `Plan for college with the 529 Plan Calculator. Estimate savings growth, tax benefits, and future education costs for your children's university degree.`;
    } else if (lowerName === '70-20-10 rule') {
        description = `Organize your spending with the 70-20-10 budget tool. Learn how to live on 70%, save 20%, and donate or pay down debt with 10% of your take-home pay.`;
    } else if (lowerName === '28-36 rule') {
        description = `See how much house you can afford. The 28-36 Rule Calculator helps you determine if your debt-to-income ratio meets standard 2026 bank lending requirements.`;
    } else if (lowerName === 'acoustic impedance') {
        description = `Calculate the acoustic impedance of various materials. Accurate sound propagation and reflection analysis for physicists, engineers, and audio technicians.`;
    } else if (lowerName === 'bmi' || lowerName === 'bmi calculator') {
        description = `Calculate your Body Mass Index (BMI) using NIH and WHO standards. Understand your weight category and healthy range with our accurate clinical index.`;
    } else if (lowerName === 'angel number') {
        description = `Find your unique angel numbers and their spiritual meanings. Our 2026 numerology engine calculates patterns to help you interpret signs from the universe.`;
    } else if (lowerName === 'livestock mortality') {
        description = `Calculate herd death rates with our Livestock Mortality tool. Essential for 2026 agricultural health tracking, profit loss analysis, and industrial farming benchmarks.`;
    } else if (lowerName === 'annualized return') {
        description = `Convert total investment returns into an annualized percentage (CAGR). Compare different time horizons and asset classes with the 2026 return engine.`;
    } else if (lowerName === 'atom calculator') {
        description = `Calculate subatomic particle counts (protons, neutrons, electrons) for any element or isotope. Perfect for 2026 chemistry students and professional researchers.`;
    } else if (lowerName === 'ddos traffic scale') {
        description = `Analyze network attack intensity with the DDoS Traffic Scale. Calculate requests per second and bandwidth requirements to test server and CDN capacity.`;
    } else if (lowerName === 'smart home hub logic') {
        description = `Assess the complexity and reliability of your IoT scenes. This tool helps you understand delay, latency, and failure points in modern 2026 smart home hubs.`;
    } else if (lowerName === 'bathroom mirror size') {
        description = `Find the ideal mirror dimensions for your vanity. Our 2026 bathroom design tool calculates fit, style proportions, and placement for the perfect look.`;
    } else if (lowerName === 'bitcoin etf') {
        description = `Track your Spot Bitcoin ETF performance. Calculate returns, holdings value, and growth based on 2026 market prices and SEC-approved fund data.`;
    } else if (lowerName === 'bold text' || lowerName === 'bold-text') {
        description = `Generate bold and stylized text for social media. Our Unicode text generator helps you create custom bold fonts for Instagram, Twitter, and Facebook bio posts.`;
    } else if (lowerName === 'capital gains yield') {
        description = `Calculate your capital gains yield on stocks and assets. Understand your total return through price changes with our professional 2026 investment tool.`;
    } else if (lowerName === 'cholesterol ratio') {
        description = `Analyze your lipid profile with the Cholesterol Ratio Calculator. Calculate your total/HDL and LDL/HDL ratios to assess cardiovascular health risk benchmarks.`;
    } else if (lowerName === 'compound growth') {
        description = `Project your long-term compound growth. See how your investments appreciate over decades with our high-precision 2026 accumulation engine.`;
    } else if (lowerName === 'compound interest rate') {
        description = `Calculate the interest rate needed to reach your financial goals. Find the exact required yield for your savings and investment targets automatically.`;
    } else if (lowerName === 'credit card interest') {
        description = `Calculate the true cost of your credit card balance. See how much monthly interest you're paying and find your payoff timeline for better 2026 debt management.`;
    } else if (lowerName === 'age') {
        description = `Find out your exact age in years, months, and days. Perfect for calculating age for documents, milestones, or just curiousity with precision down to the day.`;
    } else if (lowerName === 'gpa') {
        description = `Calculate your weighted or unweighted college and high school GPA instantly. Plan your grades and track academic success with our free 2026 student tool.`;
    } else if (lowerName === 'compound interest') {
        description = `Watch your money grow with the Compound Interest Calculator. See the power of compounding on your savings and investments over any time horizon.`;
    } else if (lowerName === 'inflation') {
        description = `Calculate the purchasing power of your US Dollars over time. See how inflation impacts prices and find the adjusted value of money between any years.`;
    } else if (lowerName === 'scientific' || lowerName === 'scientific calculator') {
        description = `Use our advanced full-screen Scientific Calculator for free. Includes trigonometric functions, logarithms, and high-precision math for students and engineers (2026).`;
    } else if (lowerName === 'square footage') {
        description = `Find the square footage of any room or lot. Our accurate 2026 tool calculates area for rectangles, circles, and irregular shapes for flooring and construction.`;
    } else if (lowerName === 'percentage') {
        description = `Find percentages, percentage increases, and percent decreases instantly. Our free math tool handles all your percentage calculations with professional accuracy.`;
    } else if (lowerName === 'tip') {
        description = `Calculate tips and split bills quickly with our 2026 Tip Calculator. Perfect for dining out, delivery, and services with custom percentage options.`;
    } else if (lowerName === 'discount') {
        description = `Calculate your final price after a discount. See exactly how much you save on sales with our easy-to-use 2026 discount and savings tool.`;
    } else if (lowerName === 'sales tax') {
        description = `Find the final price including sales tax. Our accurate 2026 calculator helps you understand taxes for any purchase across different rates.`;
    } else if (lowerName === 'calories' || lowerName === 'calorie') {
        description = `Calculate your TDEE and daily calorie needs for weight loss or maintenance. Use 2026 clinical standards to reach your health goals safely and effectively.`;
    } else if (lowerName === 'debt avalanche') {
        description = `Use the debt avalanche method to pay off your loans fastest. See how prioritizing high-interest debt saves thousands in interest for a 2026 debt-free life.`;
    } else if (lowerName === 'debt snowball') {
        description = `Start your debt snowball today. Calculate your payoff timeline by clearing small balances first to build the momentum needed for total 2026 financial freedom.`;
    } else if (lowerName === 'balance-transfer' || lowerName === 'balance transfer') {
        description = `Calculate if a 0% APR balance transfer is worth the fee. Compare your current interest costs against transfer scenarios to save money in 2026.`;
    } else if (lowerName === 'credit card minimum payment' || lowerName === 'cc minimum payment') {
        description = `Calculate the true cost of making only minimum payments. See how many years it takes to clear your debt and total interest paid in 2026.`;
    } else if (lowerName === 'credit card payment') {
        description = `Find the right monthly payment to clear your credit card debt within your goal. Our 2026 debt planner helps you estimate interest savings and timelines.`;
    } else if (lowerName === 'credit utilization') {
        description = `Analyze your credit utilization ratio. See how your debt-to-limit balance affects your credit score and get tips for maintaining 2026 credit health.`;
    } else if (lowerName === 'inverter efficiency' || lowerName === 'dc ac loss math') {
        description = `Calculate energy loss during DC to AC conversion. Our 2026 inverter efficiency tool helps solar engineers and DIYers optimize power systems.`;
    } else if (lowerName === 'debt calculator' || lowerName === 'debt') {
        description = `Stay on top of your financial health with the free Debt Calculator. Total your liabilities, track progress, and see the impact of debt on your 2026 net worth.`;
    } else if (lowerName === 'deferred payment loan') {
        description = `Calculate the total cost of deferring loan payments. See how interest accrues during a pause and the impact on your final balance and payoff date.`;
    } else if (lowerName === 'dimensional analysis') {
        description = `Convert complex units and verify physics equations with Dimensional Analysis. Our free 2026 tool ensures unit consistency for students and engineers.`;
    } else if (lowerName === 'dog bmi') {
        description = `Check if your dog is at a healthy weight. Our 2026 canine body condition tool helps you understand your pet's BMI and fitness based on breed standards.`;
    } else if (lowerName === 'eidl advance') {
        description = `Analyze your EIDL advance grant potential. Our 2026 SBA loan estimator helps disaster-affected businesses understand emergency funding and eligibility.`;
    } else if (lowerName === 'finance charge') {
        description = `Calculate your total finance charge on loans and credit. See the true dollar cost of your 2026 borrowing, including interest and transaction fees.`;
    } else if (lowerName === 'gold purchasing power' || lowerName === 'historical inflation') {
        description = `Compare the purchasing power of gold from 1800 to 2026. Understand historical inflation and how the value of currency has shifted against real assets.`;
    } else if (lowerName === 'golf handicap') {
        description = `Calculate your golf handicap index with 2026 USGA/R&A standards. Track your course ratings and slope to find your official playing ability accurately.`;
    } else if (lowerName === 'grade' || lowerName === 'grade calculator') {
        description = `Manage your academic success with our Grade Calculator. Find out exactly what you need on your next assignment or exam to reach your 2026 target grade.`;
    } else if (lowerName === 'gravel bag count' || lowerName === 'substrate depth') {
        description = `Calculate the number of gravel bags needed for your aquarium or garden bed. Estimate volume and weight based on your 2026 substrate depth requirements.`;
    } else if (lowerName === 'hex to rgb') {
        description = `Convert HEX color codes to RGB values for design and development. Our 2026 color tool provides instant decimal results for CSS and graphic software.`;
    } else if (lowerName === 'hours and minutes' || lowerName === 'hours-minutes') {
        description = `Add or subtract time units with precision. Our Hours and Minutes tool is perfect for 2026 timecard management and duration calculations.`;
    } else if (lowerName === 'fuel injector duty' || lowerName === 'injector-sizing-pro') {
        description = `Optimize your engine performance. Calculate fuel injector flow rates and duty cycles needed to support your target horsepower in 2026.`;
    } else if (lowerName === 'jumbo loan') {
        description = `Calculate monthly payments for high-value properties with the Jumbo Loan Calculator. Analyze 2026 interest rates and financing options for luxury real estate.`;
    } else if (lowerName === 'knots to kph') {
        description = `Convert nautical speed (knots) to kilometers per hour (KPH) instantly. Accurate 2026 results for maritime navigation and aviation planning.`;
    } else if (lowerName === 'personal burn rate' || lowerName === 'life runway') {
        description = `Calculate your financial runway. See how many days you can survive without new income based on your 2026 personal burn rate and savings.`;
    } else if (lowerName === 'man-hours') {
        description = `Estimate the total man-hours required for any project. Our 2026 labor tool helps project managers calculate effort and staffing needs accurately.`;
    } else if (lowerName === 'common factor') {
        description = `Find the greatest common factor and all common factors between numbers. Essential 2026 tool for students and math researchers.`;
    } else if (lowerName === 'metal weight') {
        description = `Calculate the weight of metal sheets and rods. Support for aluminum, brass, and copper with 2026 material density standards.`;
    } else if (lowerName === 'million to billion') {
        description = `Convert large figures across western numbering scales. Understand millions, billions, and trillions for macroeconomics and large-scale 2026 budgets.`;
    } else if (lowerName === 'f1 score calculator' || lowerName === 'f1 score') {
        description = `Calculate the F1 score for your machine learning models. Find the harmonic mean of precision and recall for balanced 2026 model evaluation.`;
    } else if (lowerName === 'drone battery flight' || lowerName === 'multi-rotor-airtime') {
        description = `Predict your drone's flight time accurately. Calculate airtime based on battery capacity, weight, and amp draw for multi-rotor systems in 2026.`;
    } else if (lowerName === 'nomad living cost' || lowerName === 'nomad-living-cost') {
        description = `Plan your remote life. Calculate the true cost of living as a digital nomad in 2026, including housing, visas, and local expenses across global hubs.`;
    } else if (lowerName === 'operating asset turnover') {
        description = `Measure how effectively your business generates sales from its operating assets. A critical 2026 efficiency metric for investors and managers.`;
    } else if (lowerName === 'optimal hedge ratio') {
        description = `Find the perfect hedge to minimize portfolio risk. Calculate the correlation-based optimal split for your 2026 investment strategy.`;
    } else if (lowerName === 'overtone series freq' || lowerName === 'overtone-series-freq') {
        description = `Calculate harmonic frequencies for any fundamental. Perfect for 2026 audio engineers and physics students exploring wave resonance.`;
    } else if (lowerName === 'ph') {
        description = `Calculate the pH of any solution. Understand acidity and alkalinity levels based on hydrogen ion concentration for 2026 chemistry and lab work.`;
    } else if (lowerName === 'plug type finder' || lowerName === 'plug-type-finder') {
        description = `Find the correct power adapter for your international travel. Our 2026 global plug guide covers voltage, frequency, and socket types for every country.`;
    } else if (lowerName === 'price per square foot' || lowerName === 'price-per-square-foot') {
        description = `Compare real estate value easily. Calculate the price per square foot for 2026 home buying, selling, or rental property analysis.`;
    } else if (lowerName === 'psi to gpm') {
        description = `Convert water pressure (PSI) to flow rate (GPM). Essential for 2026 plumbing design, sprinkler systems, and fire safety calculations.`;
    } else if (lowerName === 'new york tax' || lowerName === 'new-york-tax') {
        description = `Calculate your 2026 New York income tax. See the impact of NY State and NYC local taxes on your take-home pay with our updated tax engine.`;
    } else if (lowerName === 'satellite lifespan' || lowerName === 'satellite-lifespan') {
        description = `Predict when a satellite will re-enter the atmosphere. Our 2026 orbital decay tool calculates lifespan based on altitude, mass, and drag coefficients.`;
    } else if (lowerName === 'security deposit interest' || lowerName === 'security-deposit-interest') {
        description = `Calculate the interest owed on a rental security deposit. Support for 2026 landlord-tenant laws and state-specific mandatory interest rates.`;
    } else if (lowerName === 'size to weight rectangular' || lowerName === 'size-to-weight-rectangular') {
        description = `Convert rectangular dimensions to weight. Estimate the total mass of boxes, plates, or sheets based on 2026 material density standards.`;
    } else if (lowerName === 'stone calculator' || lowerName === 'stone') {
        description = `Calculate the amount of stone needed for your 2026 project. Get precise weight and volume for structural masonry, gravel, or decorative rock.`;
    } else if (lowerName === 'tax rebate net cost' || lowerName === 'tax-rebate-net-cost') {
        description = `Calculate the true price after rebates. Factor in 2026 solar tax credits, EV incentives, and manufacturer rebates for final net cost analysis.`;
    } else if (lowerName === 'tdee calculator' || lowerName === 'tdee') {
        description = `Find your Total Daily Energy Expenditure. Our 2026 TDEE engine calculates maintenance calories based on activity level and body composition.`;
    } else if (lowerName === 'thread pitch' || lowerName === 'thread-pitch') {
        description = `Identify the correct bolt or screw. Our 2026 thread pitch tool helps you measure fastener spacing for automotive and mechanical engineering.`;
    } else if (lowerName === 'tls ping overhead' || lowerName === 'tls-ping-overhead') {
        description = `Analyze network performance. Calculate the latency impact of SSL/TLS handshakes and certificate verification for 2026 web operations.`;
    } else if (lowerName === 'triathlon finish' || lowerName === 'triathlon-finish') {
        description = `Predict your total triathlon time. Calculate finish times for swim, bike, and run segments including 2026 transition (T1/T2) buffers.`;
    } else if (lowerName === 'battery state of charge' || lowerName === 'voltage-rest-soc') {
        description = `Estimate your battery's remaining capacity based on resting voltage. Support for 2026 LiPo, LiFePO4, and Lead Acid discharge curves.`;
    } else if (lowerName === 'wi-fi mesh placer' || lowerName === 'wifi-mesh-count') {
        description = `Calculate the optimal number of Wi-Fi mesh nodes for your home or office. Ensure 2026-standard coverage based on total square footage and floor count.`;
    } else if (lowerName === 'yield multiplier' || lowerName === 'yield-multiplier') {
        description = `Analyze how compounding and leverage amplify your investment returns. Projected 2026 wealth modeling for professional portfolios.`;
    } else if (lowerName === 'floor area ratio (far)' || lowerName === 'zoning-density-math') {
        description = `Calculate the Floor Area Ratio (FAR) for your 2026 construction project. Compare building square footage against lot size for local zoning compliance.`;
    } else if (lowSlug === 'roofing') {
        description = `Estimate shingles, rafter length, and pitch with the ${name}. Professional structural engineering tools for watertight and sound project results in 2026.`;
    } else if (lowSlug === 'geology') {
        description = `Analyze geological data with the ${name}. Precision tools for mineral density, seismic velocity, and soil porosity for earth science research in 2026.`;
    } else if (lowSlug === 'everyday') {
        description = `Try the ${name} for your daily questions. From birth dates to lucky numbers, our 2026 everyday tools provide fun and functional insights instantly.`;
    } else if (lowSlug === 'finance') {
        description = `Maximize your wealth with the ${name}. Our professional 2026 finance engine provides precise math on compound interest, debt payoff, and investment returns.`;
    } else if (lowSlug === 'health' || lowerName.includes('bmi')) {
        description = `Understand your bio-markers with the ${name}. We use 2026 clinical standards to calculate your health metrics accurately for better wellness tracking.`;
    } else if (lowSlug === 'construction') {
        description = `Simplify your project estimates with the ${name}. Calculate materials, surface areas, and volumes for the job site with professional contractors' precision.`;
    } else if (lowSlug === 'automotive') {
        description = `Analyze your vehicle's performance and running costs with our 2026 ${name}. Get precise data on car depreciation, fuel economy, and power-to-weight ratios in seconds.`;
    } else if (lowerName.includes('word') && lowerName.includes('time')) {
        description = `Convert word counts to minutes instantly. Our Word to Time tool is perfect for speeches, scripts, and reading assignments using custom 2026 reading speeds.`;
    } else if (lowerName.includes('converter')) {
        description = `Need to convert units? Use the ${name} for high-precision metric and imperial swaps. Instant results for technical, cooking, or educational use.`;
    }

    // Final truncate to stay within SEO limits
    if (title.length > 70) title = title.substring(0, 67) + '...';

    return { title, description };
};
