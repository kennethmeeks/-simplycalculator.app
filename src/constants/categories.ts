export interface ProfessionalGuidance {
  whyItMatters: string;
  pitfalls: string[];
  proTip: string;
}

export interface CalculatorItem {
  name: string;
  path: string;
  desc: string;
  keywords?: string[];
  guidance?: ProfessionalGuidance;
}

export interface CategoryData {
  title: string;
  slug: string;
  description: string;
  defaultGuidance?: ProfessionalGuidance;
  items: CalculatorItem[];
}

export const CATEGORIES: CategoryData[] = [
  {
    title: 'Finance & Investment',
    slug: 'finance',
    description: 'Grow your wealth and manage your debt with precision. Our finance suite covers everything from daily budgeting to complex investment analysis and tax planning.',
    defaultGuidance: {
      whyItMatters: 'Financial calculations are the foundation of long-term security. Understanding the math behind interest, inflation, and tax liability allows you to make objective decisions that preserve your purchasing power and minimize wasted capital through fees or inefficient debt management.',
      pitfalls: [
        'Ignoring Compound Friction: Small fees (1%) and taxes can reduce your total wealth by 25-30% over long periods if not accounted for.',
        'Nominal vs. Real Returns: Forgetting to subtract inflation from your gains can give you a false sense of security about your actual spending power.'
      ],
      proTip: 'Always calculate your "Real Rate of Return" by subtracting the annual inflation rate from your nominal return to see the actual growth of your wealth.'
    },
    items: [
      { name: '12-Hour Shift Pay Calculator', path: '/12-hour-shift-pay', desc: 'Calculate earnings for 12-hour shift rotations.', keywords: ["12 hour shift salary","shift differential","overtime pay","nursing schedule pay","industrial shift calculator","work hours earnings","12h rotation pay","wages calculator","hourly pay shift","shift work income"] },
      { 
        name: '3x Rent Calculator', 
        path: '/3x-rent', 
        desc: 'Check if your income meets the 3x rent rule.', 
        guidance: {
          whyItMatters: 'The "3x Rent Rule" is a critical industry standard used by landlords to ensure tenants aren\'t "rent burdened." If your housing costs exceed 33% of your gross income, you statistically lack the buffer needed for emergency savings and other vital living expenses.',
          pitfalls: [
            'Gross vs. Net Confusion: Landlords look at gross income, but you live on net income. If you have significant debt, "qualifying" doesn\'t always mean "affordability."',
            'Ignoring Utilities: Forgetting that a "cheap" apartment might have high heating or cooling costs that push you over your actual budget.'
          ],
          proTip: 'If your income is borderline, consider including a co-signer or showcasing a higher-than-average credit score to de-risk your application in the landlord\'s eyes.',
        keywords: ["rent affordability","income for rent","3x rent rule","leasing requirement","apartment qualifying","landlord check","monthly rent budget","can i afford this rent","salary for apartment","rental income test"]
      },
        keywords: ['rent affordability', 'income for rent', '3x rent rule', 'leasing requirement', 'apartment qualifying', 'landlord check', 'monthly rent budget', 'can i afford this rent', 'salary for apartment', 'rental income test'] 
      },
      { 
        name: '401k Calculator', 
        path: '/401k', 
        desc: 'Estimate future 401k balance.', 
        guidance: {
          whyItMatters: 'Planning for retirement is a decades-long game. Small changes in contribution rates or employer matching can lead to six-figure differences in your final nest egg due to the power of compounding.',
          pitfalls: [
            'Ignoring Inflation: $1M in 30 years won\'t buy what $1M buys today. Always look at "Real" future value to understand actual purchasing power.',
            'Early Withdrawal Penalties: Withdrawing from your 401k before 59.5 often triggers a 10% penalty plus income tax, gutting your growth potential.'
          ],
          proTip: 'Aim to contribute at least enough to get the full employer match—it is effectively a 100% immediate return on your investment before market gains are even considered.',
        keywords: ["retirement savings","employer match","401k growth","investment projection","wealth building","pension alternative","nest egg","retirement planning","contribution limit","compounding interest"]
      },
        keywords: ['retirement savings', 'employer match', '401k growth', 'investment projection', 'wealth building', 'pension alternative', 'nest egg', 'retirement planning', 'contribution limit', 'compounding interest'] 
      },
      { name: '403b Calculator', path: '/403b', desc: 'Project non-profit retirement savings.', keywords: ["non profit retirement","teacher pension","TSA calculator","public sector savings","403b growth","tax sheltered annuity","retirement nest egg","investment estimator","annual contribution","tax deferred growth"] },
      { name: '50/30/20 Rule', path: '/50-30-20-rule', desc: 'Standard budgeting rule for needs, wants, and savings.', keywords: ["budgeting method","finance breakdown","savings rule","needs vs wants","financial health","monthly budget","money management","spending plan","wealth simple","popular budget"] },
      { name: '529 Calculator', path: '/529-plan', desc: 'Estimate growth for education savings accounts.', keywords: ["college fund","education savings","tuition planner","tax free growth","university savings","student fund","529 projection","schooling budget","child education","state 529 plan"] },
      { name: '70/20/10 Rule', path: '/70-20-10-rule', desc: 'Manage income for living, debt, and giving.', keywords: ["wealth management","charity budget","living expenses","debt repayment","giving back","financial strategy","income splitting","budget algorithm","wealth pillars","asset allocation"] },
      { name: '28/36 Rule', path: '/28-36-rule', desc: 'Calculate debt-to-income for mortgage readiness.', keywords: ["mortgage qualifying","DTI ratio","home loan ready","lender rule of thumb","housing expenses","credit approval","loan officer criteria","financial ratio","home buyer guide","borrowing power"] },
      { name: 'Balance Transfer', path: '/balance-transfer', desc: 'See if moving debt saves on interest.', keywords: ["debt consolidation","credit card transfer","interest savings","balance transfer fee","0 apr transfer","credit card debt","debt repayment","save on interest","balance transfer math","credit card refinance"] },
      { name: 'Credit Card Interest', path: '/credit-card-interest', desc: 'Calculate the cost of carrying a balance.', keywords: ["apr","credit card debt","interest charges","carrying a balance","monthly interest","credit card math","daily balance method","interest calculator","finance charge","credit card cost"] },
      { name: 'CC Minimum Payment', path: '/credit-card-minimum-payment', desc: 'Find how long it takes to pay off with min payments.', keywords: ["minimum payment trap","credit card payoff","repayment timeline","debt length","credit card interest","minimum payment math","paying off debt","credit card calculator","debt schedule","paying minimum"] },
      { name: 'Credit Card Payment', path: '/credit-card-payment', desc: 'Plan custom payments to reach zero debt.', keywords: ["debt payoff planner","credit card strategy","becoming debt free","custom payments","debt reduction","payoff goal","credit card math","debt repayment","interest savings","repayment schedule"] },
      { name: 'Credit Utilization', path: '/credit-utilization', desc: 'Analyze debt-to-limit ratio for credit health.', keywords: ["credit score math","debt-to-limit ratio","fico score factors","credit health","credit score impact","revolving credit","credit utilization rate","debt ratio","credit report","improving credit score"] },
      { name: 'Debt Calculator', path: '/debt', desc: 'Total debt summary and tracking.', keywords: ["total debt","debt tracker","liabilities","financial health","debt management","money owed","debt overview","personal finance","debt summary","wealth tracking"] },
      { name: 'Debt Avalanche', path: '/debt-avalanche', desc: 'Payoff strategy focused on high interest first.', keywords: ["avalanche method","high interest first","debt payoff strategy","mathematical debt payoff","save most interest","debt prioritization","advanced debt payoff","repayment method","financial optimization","interest savings"] },
      { name: 'Debt Snowball', path: '/debt-snowball', desc: 'Payoff strategy focused on smallest balances first.', keywords: ["snowball method","dave ramsey style","small debt first","psychological debt payoff","paying off bills","quick wins debt","debt strategy","motivation payoff","repayment plan","debt reduction"] },
      { name: 'Debt to Income Ratio', path: '/dti', desc: 'Calculate DTI for loan eligibility.', keywords: ["dti","loan qualifying","mortgage readiness","debt to income math","lender ratio","housing budget","debt burden","financial ratio","borrowing power","loan eligibility"] },
      { name: 'Deferred Payment Loan', path: '/deferred-payment-loan', desc: 'Analyze cost of pausing loan payments.', keywords: ["loan deferment","accrued interest","forbearance math","payment holiday","loan cost","interest capitalization","skipping payments","debt extension","financial relief","loan terms"] },
      { name: 'EIDL Advance', path: '/eidl-advance', desc: 'Analyze disaster loan emergency grants.', keywords: ["sba loan","disaster relief","small business grant","covid relief funds","government assistance","eidl grant","emergency funding","business financial aid","disaster recovery","sba assistance"] },
      { name: 'Finance Charge', path: '/finance-charge', desc: 'Calculate total cost of borrowing.', keywords: ["borrowing cost","loan fees","total interest paid","aps vs apr","credit cost","finance fee math","true cost of loan","lending charges","financial transparency","borrowing math"] },
      { name: 'Adjusted Gross Income', path: '/agi', desc: 'Calculate your AGI for tax purposes.', keywords: ["taxable income","irs agi","tax deductions","net income","tax filing","gross income math","taxable earnings","irs form 1040","tax planning","deduction eligibility"] },
      { name: 'Annualized Return', path: '/annualized-return', desc: 'Convert total return to annual percentage.', keywords: ["investment performance","annualized return","total return conversion","time-weighted return","portfolio growth","stock market math","return analysis","investing metrics","annual percentage","roic"] },
      { name: 'Appreciation', path: '/appreciation', desc: 'Measure value growth of assets over time.', keywords: ["asset growth","house price increase","investment appreciation","property value","wealth increase","capital appreciation","market growth","asset value","financial gain","valuation growth"] },
      { name: 'APY Calculator', path: '/apy', desc: 'Annual Percentage Yield for savings.', keywords: ["apy","savings yield","annual percentage yield","compound frequency","effective rate","bank interest","hysa returns","savings growth","yield math","bank rate"] },
      { name: 'Basis Point', path: '/basis-point', desc: 'Calculate BPS for interest rate shifts.', keywords: ["basis points","interest rate shift","bps to percentage","finance terminology","yield change","mortgage rate move","percent vs bps","financial math","market fluctuations","bond yield"] },
      { name: 'Bitcoin ETF', path: '/bitcoin-etf', desc: 'Analyze spot Bitcoin fund performance.', keywords: ["spot btc etf","bitcoin investment","crypto fund","etf performance","digital gold","institutional crypto","btc track","bitcoin index","crypto portfolio","bitcoin returns"] },
      { name: 'CAGR Calculator', path: '/cagr', desc: 'Compound Annual Growth Rate analysis.', keywords: ["cagr","compound annual growth","investment growth rate","portfolio return","geometric mean","stock growth math","wealth projection","annual expansion","growth formula","investment analysis"] },
      { name: 'Capital Gains Yield', path: '/capital-gains-yield', desc: 'Calculate the return from price changes.', keywords: ["dividend yield vs capital gains","stock profit","unrealized gain","price growth","investment yield","trading returns","stock market math","performance metric","price appreciation","return on price"] },
      { name: 'Compound Growth', path: '/compound-growth', desc: 'Project investment growth over time.', keywords: ["wealth building","compounding interest","investment projection","long term growth","growth math","savings expansion","wealth simple","asset growth","future value","capital growth"] },
      { name: 'Compound Interest Rate', path: '/compound-interest-rate', desc: 'Find the rate needed for specific goals.', keywords: ["growth rate","investment target","interest math","savings goal","compound frequency","yield target","financial planning","wealth rate","bank interest","interest calculator"] },
      { name: 'Continuous Compounding', path: '/continuous-compounding', desc: 'Calculate interest with infinite compounding.', keywords: ["e constant","calculus finance","math interest","infinite compounding","investment growth","advanced finance","physics finance","theoretical return","exponential growth","continuous interest"] },
      { name: 'DCF (Discounted Cash Flow)', path: '/dcf', desc: 'Intrinsic value of an investment.', keywords: ["valuation","stock value","future cash flow","intrinsic growth","investment analysis","wacc","terminal value","finance modeling","corporate finance","valuation tool"] },
      { name: 'Discount Rate', path: '/discount-rate', desc: 'Rate used to determine present value.', keywords: ["time value of money","cost of capital","hurdle rate","pv calculation","financial math","valuation rate","finance theory","discounting","capital budgeting","interest rate"] },
      { name: 'EAR (Effective Annual Rate)', path: '/ear', desc: 'True annual cost of borrowing.', keywords: ["apy vs apr","loan cost","effective rate","borrowing math","bank fees","real interest","annual cost","finance transparency","interest multiplier","loan officer math"] },
      { name: 'Effective Annual Yield', path: '/effective-annual-yield', desc: 'Calculate actual investment yield.', keywords: ["real yield","investment return","savings yield","bank comparison","actual growth","dividend yield","yield math","portfolio growth","wealth yield","return on investment"] },
      { name: 'Effective Interest Rate', path: '/effective-interest-rate', desc: 'Calculate the true interest cost.', keywords: ["apr","nominal vs effective","loan rate","debt cost","finance fee","real cost","borrowing power","lending math","interest tracker","debt breakdown"] },
      { name: 'Equivalent Rate (AER)', path: '/aer', desc: 'Compare savings rates across banks.', keywords: ["savings comparison","bank rates","annual equivalent","deposit yield","high yield savings","best bank rate","savings math","interest compare","wealth savings","bank choice"] },
      { name: 'Expected Utility', path: '/expected-utility', desc: 'Decision making under risk analysis.', keywords: ["game theory","risk management","decision science","probability","economics math","rational choice","utility function","risk aversion","uncertainty","behavioral finance"] },
      { name: 'Expense Ratio', path: '/expense-ratio', desc: 'Calculate impact of fund management fees.', keywords: ["etf fees","mutual fund cost","investment drag","management fee","portfolio cost","index fund","finance leak","wealth erosion","fund comparison","expense impact"] },
      { name: 'FD (Fixed Deposit)', path: '/fd', desc: 'Calculate returns on term deposits.', keywords: ["term deposit","fixed income","bank savings","guaranteed return","deposit growth","safe investment","interest income","wealth preservation","bank investment","fd returns"] },
      { name: 'Hedge Ratio', path: '/hedge-ratio', desc: 'Determine optimal risk mitigation exposure.', keywords: ["derivatives","risk hedging","portfolio insurance","option math","exposure coverage","finance risk","trading strategy","hedging math","stock protection","market hedge"] },
      { name: 'Holding Period Return', path: '/hpr', desc: 'Total return over a specific timeframe.', keywords: ["roi","investment span","total return","performance math","portfolio gain","timeframe yield","wealth growth","stock return","asset performance","return tracking"] },
      { name: 'Information Ratio', path: '/information-ratio', desc: 'Measure risk-adjusted excess returns.', keywords: ["alpha","active management","fund performance","benchmark comparison","manager skill","portfolio risk","excess return","investment metric","risk analysis","finance ratio"] },
      { name: 'Investment Fee', path: '/investment-fee', desc: 'Analyze the long-term cost of fees.', keywords: ["brokerage fee","advisor cost","portfolio drag","compounding fees","wealth management","fee impact","investment cost","finance transparency","retirement leak","savings cost"] },
      { name: 'Jensen\'s Alpha', path: '/jensens-alpha', desc: 'Measure portfolio manager performance.', keywords: ["capm","risk adjustment","stock alpha","manager grade","market beating","intercept","finance coefficient","performance grade","portfolio math","alpha generator"] },
      { name: 'Margin Interest', path: '/margin-interest', desc: 'Calculate cost of borrowing for trades.', keywords: ["margin loan","broker interest","leveraged trading","day trading cost","margin call","borrowing stock","trading math","finance fee","market leverage","loan cost"] },
      { name: 'MVA (Market Value Added)', path: '/mva', desc: 'Measure wealth created for shareholders.', keywords: ["shareholder wealth","corporate performance","eva","market cap vs book","company value","business math","market added","wealth creation","corporate finance","valuation metric"] },
      { name: 'Maximum Drawdown', path: '/maximum-drawdown', desc: 'Calculate peak-to-trough investment risk.', keywords: ["risk tolerance","volatility","loss tracking","portfolio crash","investment safety","market dip","downside risk","trading analysis","wealth protection","capital risk"] },
      { name: 'MIRR (Modified IRR)', path: '/mirr', desc: 'Internal rate of return with reinvestment.', keywords: ["irr alternative","capital budgeting","project finance","reinvestment rate","actual return","business valuation","investment grade","finance modeling","corporate math","profitability"] },
      { name: 'Money Factor', path: '/money-factor', desc: 'Convert lease finance cost to APR.', keywords: ["car lease","auto finance","lease vs buy","dealership math","monthly payment","finance rate","leasing guide","car cost","automotive finance","lease interest"] },
      { name: 'Money Market Account', path: '/money-market', desc: 'Estimate MMA interest and growth.', keywords: ["savings account","high yield cash","liquid investment","bank interest","mma yield","cash management","wealth math","savings tracker","short term savings","emergency fund"] },
      { name: 'Moving Average', path: '/moving-average', desc: 'Smooth price data for trend analysis.', keywords: ["technical analysis","stock chart","trading indicator","sma vs ema","trend following","market data","quantitative finance","price math","trading signal","stock prediction"] },
      { name: 'NOPAT Calculator', path: '/nopat', desc: 'Net Operating Profit After Tax.', keywords: ["corporate earnings","tax adjustment","operating profit","business accounting","finance reporting","profit math","net margin","tax impact","earnings analysis","business health"] },
      { name: 'NPV (Net Present Value)', path: '/npv', desc: 'Analyze project profitability and value.', keywords: ["investment appraisal","project value","capital budgeting","future value today","profitability","business decision","valuation math","corporate finance","investment scorecard","cash flow value"] },
      { name: 'Opportunity Cost', path: '/opportunity-cost', desc: 'Analyze what you lose by choosing one option.', keywords: ["decision math","economics","trade off","business logic","choosing options","resource allocation","hidden cost","finance philosophy","time vs money","lifestyle math"] },
      { name: 'Optimal Hedge Ratio', path: '/optimal-hedge-ratio', desc: 'Calculate minimum variance hedge.', keywords: ["risk hedging","variance reduction","advanced finance","futures market","portfolio math","hedge management","trading risk","hedging optimization","market risk","quant finance"] },
      { name: 'Percentage Return', path: '/percentage-return', desc: 'Simple ROI calculation.', keywords: ["profit margin","gain loss","stock return","portfolio math","investment tracker","percentage gain","wealth simple","market return","asset growth","performance percentage"] },
      { name: 'Perpetuity', path: '/perpetuity', desc: 'Value of infinite regular cash flows.', keywords: ["financial theory","valuation","infinite series","pension value","endowment math","dividends forever","perpetual bond","finance math","valuation formula","wealth projection"] },
      { name: 'PVIFA Calculator', path: '/pvifa', desc: 'Present Value Interest Factor of an Annuity.', keywords: ["annuity math","finance lookup","series calculations","loan repayment","savings tables","pvifa lookup","interest factor","time value of money","savings annuity","periodic payment"] },
      { name: 'Rate of Return', path: '/rate-of-return', desc: 'Calculate total profit on investment.', keywords: ["roi","earnings rate","yield","capital growth","portfolio performance","investment gain","wealth builder","profit rate","market success","financial metric"] },
      { name: 'Real Rate of Return', path: '/real-rate-of-return', desc: 'Adjusted for inflation return math.', keywords: ["inflation adjustment","purchasing power","actual profit","economic return","real wealth","cpi adjustment","investment truth","wealth erosion","real growth","net returns"] },
      { name: 'ROCE (Capital Employed)', path: '/roce', desc: 'Return on Capital Employed.', keywords: ["business efficiency","corporate performance","operating returns","invested capital","ratio analysis","profitability metric","manager performance","capital allocation","finance reporting","business analysis"] },
      { name: 'Savings Interest Rate', path: '/savings-interest-rate', desc: 'Find the APY of your savings.', keywords: ["bank rate","hysa","interest earnings","savings yield","money management","bank return","wealth simple","interest tracker","savings growth","deposit rate"] },
      { name: 'Sharpe Ratio', path: '/sharpe-ratio', desc: 'Measure risk-adjusted performance.', keywords: ["risk reward","volatility","portfolio grade","standard deviation","investment metrics","performance analysis","market grade","wealth assessment","finance ratio","trading stats"] },
      { name: 'Simple Interest', path: '/simple-interest', desc: 'Basic non-compounding interest.', keywords: ["easy math","loan basic","non compound","principal and rate","financial literacy","basic borrowing","school finance","interest intro","daily interest","straight line growth"] },
      { name: 'Sinking Fund', path: '/sinking-fund', desc: 'Calculate regular savings for future goals.', keywords: ["goal based savings","future expense","capital reserve","replacement fund","budget planning","savings math","large purchase","wealth goals","financial target","savings frequency"] },
      { name: 'Sortino Ratio', path: '/sortino-ratio', desc: 'Measure downside risk-adjusted return.', keywords: ["sharpe alternative","downside volatility","mar","portfolio risk","investment safety","loss management","performance grading","wealth protection","market risk","finance metric"] },
      { name: 'Time Value of Money', path: '/tvm', desc: 'Core financial mathematics suite.', keywords: ["finance foundation","present value","future value","discounting","compounding","annuity","financial basics","wealth math","loan amortization","interest theory"] },
      { name: 'Treynor Ratio', path: '/treynor-ratio', desc: 'Risk-adjusted return for beta.', keywords: ["systematic risk","beta","portfolio analysis","market risk","investment grade","performance metric","capm related","wealth strategy","finance analysis","stock risk"] },
      { name: 'TTM (Trailing Twelve Months)', path: '/ttm', desc: 'Analyze the last 12 months of performance.', keywords: ["recent data","financial reporting","trailing metrics","earnings analysis","stock research","company health","market trending","yearly lookback","performance review","data scaling"] },
      { name: 'Value at Risk (VaR)', path: '/var', desc: 'Estimate potential portfolio losses.', keywords: ["risk model","crash probability","portfolio safety","statistical risk","loss estimation","finance modeling","wealth risk","market volatility","trading protection","risk grade"] },
      { name: 'Week Over Week', path: '/wow-growth', desc: 'Track short-term growth metrics.', keywords: ["short term growth","analytics","performance trends","weekly update","business scaling","data tracking","startup metrics","retail growth","metric tracking","short range trend"] },
      { name: 'Year Over Year Growth', path: '/yoy-growth', desc: 'Track annual expansion and growth.', keywords: ["annual growth rate","yoy analysis","financial comparison","business growth","revenue trends","seasonal performance","corporate metrics","growth tracking","yoy percentage","performance history"] },
      { name: 'ADR Calculator', path: '/adr', desc: 'Average Daily Rate for hospitality management.', keywords: ["adr","hotel management","hospitality math","average daily rate","hotel revenue","room rate","revpar","hotel metrics","lodging business","revenue management"] },
      { name: 'AFFO Calculator', path: '/affo', desc: 'Adjusted Funds From Operations for REITs.', keywords: ["reit valuation","affo","funds from operations","real estate investment","reit metrics","dividend safety","property income","reit analysis","investment yield","real estate math"] },
      { name: 'Alabama Tax Calculator', path: '/alabama-tax', desc: 'Estimate Alabama state income tax.', keywords: ["alabama income tax","state tax estimator","al tax bracket","tax refund alabama","state withholding","alabama tax filing","tax planning al","southeast taxes","state tax math","alabama finance"] },
      { name: 'AMT Calculator', path: '/amt', desc: 'Alternative Minimum Tax calculation.', keywords: ["alternative minimum tax","irs amt","tax liability","tax planning","high income tax","tax reform","amt exemption","tax math","federal taxes","marginal tax rate"] },
      { name: 'Annual Income Calculator', path: '/annual-income', desc: 'Calculate total yearly earnings.', keywords: ["salary estimator","yearly earnings","total income","annual pay math","gross income","net pay calculator","salary tracking","wealth builder","income goals","personal finance"] },
      { name: 'Annual Income Quiz', path: '/annual-income-quiz', desc: 'Test your knowledge of income metrics.', keywords: ["income knowledge","salary test","finance quiz","wealth literacy","income metrics","financial education","money quiz","salary benchmarks","wealth quiz","income trivia"] },
      { name: 'Annuity Calculator', path: '/annuity', desc: 'Analyze traditional annuity growth.', keywords: ["annuity growth","retirement income","fixed annuity","deferred annuity","annuity math","investment insurance","retirement savings","pension alternative","future value","annuity strategy"] },
      { name: 'Annuity Payout', path: '/annuity-payout', desc: 'Calculate regular income streams.', keywords: ["annuity income","periodic payments","annuity withdrawal","retirement pay","annuity math","payout schedule","structured settlement","income stream","financial planning","pension math"] },
      { name: 'ARM Mortgage Calculator', path: '/arm-mortgage', desc: 'Adjustable Rate Mortgage payment analysis.', keywords: ["adjustable rate mortgage","mortgage cap","interest rate reset","arm vs fixed","home loan math","mortgage adjustment","hybrid arm","mortgage planning","refinance strategy","housing market"] },
      { name: 'ARV Calculator', path: '/arv', desc: 'After Repair Value for property flips.', keywords: ["real estate flipping","brrrr method","after repair value","property valuation","house flip math","rehab estimate","real estate investing","investment property","housing appraisal","fix and flip"] },
      { name: 'Auto Lease Calculator', path: '/auto-lease', desc: 'Compare monthly leasing costs.', keywords: ["leasing a car","lease vs buy","monthly lease payment","auto leasing math","car lease terms","dealership math","residual value","lease comparison","automotive finance","car budget"] },
      { name: 'Auto Loan Calculator', path: '/auto-loan', desc: 'Plan your vehicle purchase payments.', keywords: ["car loan","auto financing","vehicle payments","car interest rate","monthly car bill","auto loan math","car buying guide","dealership math","vehicle budget","loan amortization"] },
      { name: 'Average Return', path: '/average-return', desc: 'Calculate geometric mean of returns.', keywords: ["geometric mean","stock return average","portfolio performance","average growth","investment math","return analysis","wealth tracking","performance metrics","market average","arithmetic vs geometric"] },
      { name: 'Biden Tax Plan Calculator', path: '/biden-tax-plan', desc: 'Analyze impact of proposed tax changes.', keywords: ["biden tax impact","tax policy changes","wealth tax","marginal rate shift","tax reform 2024","tax planning","federal tax changes","income tax math","policy analysis","tax brackets"] },
      { name: 'Bill Rate Calculator', path: '/bill-rate', desc: 'Calculate optimal hourly billing rates.', keywords: ["freelance rates","contractor pricing","hourly billing","consulting fees","business math","profit margin","service pricing","billable rate","hourly rate math","entrepreneurship"] },
      { name: 'Billable Hours Calculator', path: '/billable-hours', desc: 'Track time and calculate client billing.', keywords: ["time tracking","client billing","freelance hours","billable time","consulting math","invoice helper","work hours tracker","business efficiency","billing math","productivity tool"] },
      { name: 'Biweekly Mortgage Calculator', path: '/bi-weekly-mortgage-payment', desc: 'Detailed breakdown of bi-weekly savings.', keywords: ["biweekly payments","mortgage accelerator","pay off home faster","interest savings","extra mortgage payment","bi-weekly math","home equity builder","debt reduction","mortgage strategy","budgeting"] },
      { name: 'Boat Loan Calculator', path: '/boat-loan', desc: 'Finance your nautical adventures.', keywords: ["marine finance","yacht loan","boat payments","nautical lending","boat buying guide","recreational vehicle loan","marine interest rates","boat budget","vessel finance","leisure loan"] },
      { name: 'Bond Calculator', path: '/bond', desc: 'Calculate yield and maturity of bonds.', keywords: ["bond yield","ytm","bond pricing","fixed income","treasury bonds","corporate debt","bond maturity","investment math","yield to call","interest rate risk"] },
      { name: 'Budget Calculator', path: '/budget', desc: 'Organize your monthly spending.', keywords: ["money management","spending tracker","monthly budget","zero based budget","financial planner","savings goal","expense tracking","wealth builder","household finance","budgeting tool"] },
      { name: 'Build Back Better Calculator', path: '/build-back-better-tax', desc: 'Estimate impact of the BBB Act provisions.', keywords: ["tax provisions","legislative impact","build back better act","tax credits","policy analysis","federal spending","tax planning","economic impact","government policy","social spending tax"] },
      { name: 'Business Loan Calculator', path: '/business-loan', desc: 'Analyze commercial financing costs.', keywords: ["commercial interest","business financing costs","loan repayment math","debt service","startup funding","business debt","fiscal planning","loan interest calculation","financial tools","bank math"] },
      { name: 'California Sales Tax Calculator', path: '/california-sales-tax', desc: 'Calculate CA sales tax by location.', keywords: ["ca sales tax","california tax by city","use tax","retail tax math","state tax rates","california business","shopping tax","ca tax filing","local surtax","sales tax lookup"] },
      { name: 'California Tax Calculator', path: '/california-tax', desc: 'Estimate CA state income tax liability.', keywords: ["california income tax","ftb tax brackets","ca state tax","california withholding","tax refund ca","state tax planning","ca finance","progressive tax","ca tax filing","state liability"] },
      { name: 'Cap Rate Calculator', path: '/cap-rate', desc: 'Capitalization Rate for real estate investments.', keywords: ["real estate valuation","investment yield","property analysis","net operating income","noi","cap rate math","real estate investing","market value","property performance","commercial real estate"] },
      { name: 'Capital Gains Tax', path: '/capital-gains-tax', desc: 'Calculate tax on investment profits.', keywords: ["capital gains math","stock tax","real estate tax","investment profit tax","long term vs short term","cost basis","tax planning","stepped up basis","irs capital gains","tax liability"] },
      { name: 'Capital Gains Tax UK', path: '/capital-gains-tax-uk', desc: 'Calculate UK specific capital gains tax and allowances.', keywords: ["uk taxes","capital gains uk","hmrc","capital gains allowance","uk investment tax","share tax uk","property tax uk","uk tax planning","british finance","capital gains math"] },
      { name: 'CD Calculator', path: '/cd', desc: 'Certificate of Deposit earnings.', keywords: ["cd ladder","certificate of deposit","bank interest","fixed income","savings growth","cd earnings","banking math","term deposit","wealth preservation","hysa vs cd"] },
      { name: 'College Cost Calculator', path: '/college-cost', desc: 'Estimate future tuition and expenses.', keywords: ["college tuition","university cost","education planning","student expenses","college budget","529 projection","schooling cost","degree price","higher education finance","student loans"] },
      { name: 'Commercial Lease Calculator', path: '/commercial-lease', desc: 'Analyze commercial rental agreements.', keywords: ["commercial rent","triple net lease","office space math","retail lease","business rent","leasing costs","property management","commercial real estate","lease terms","landlord math"] },
      { name: 'Commission Calculator', path: '/commission', desc: 'Calculate sales rep earnings.', keywords: ["sales pay","earnings math","incentive pay","bonus structure","sales targets","payroll math","rep earnings","commission rates","sales rewards","income tracking"] },
      { name: 'Compound Interest', path: '/compound-interest', desc: 'Calculate investment growth over time.', keywords: ["growth math","investment growth","compound interest frequency","wealth accumulation","savings projection","future value","financial planning","wealth builder","interest on interest","money growth"] },
      { name: 'Credit Card Payoff', path: '/credit-card', desc: 'Plan your debt payoff strategy.', keywords: ["debt free","credit card strategy","pay off credit card","debt management","interest reduction","credit card math","payoff timeline","financial freedom","debt reduction","credit score help"] },
      { name: 'Cryptocurrency', path: '/crypto', desc: 'Track gains across digital assets.', keywords: ["bitcoin gains","crypto portfolio","altcoin returns","digital asset tracking","blockchain finance","crypto tax math","investment tracking","crypto growth","btc eth","digital wealth"] },
      { name: 'Debt Consolidation', path: '/debt-consolidation', desc: 'Analyze if combining loans saves money.', keywords: ["consolidate debt","loan merging","refinance debt","debt relief","credit card consolidation","interest savings","monthly payment reduction","debt management","credit health","loan math"] },
      { name: 'Debt Payoff Calculator', path: '/debt-payoff', desc: 'Strategize your exit from debt.', keywords: ["debt exit","repayment strategy","debt free journey","loan payoff","credit card relief","debt logic","repayment scheduler","financial peace","debt reduction","money management"] },
      { name: 'Depreciation Calculator', path: '/depreciation', desc: 'Calculate asset value loss over time.', keywords: ["macrs","straight line depreciation","asset value","business accounting","tax deduction","equipment life","book value","depreciation math","write off","capital expense"] },
      { name: 'Dividend Calculator', path: '/dividend', desc: 'Estimate regular income from stocks.', keywords: ["dividend income","stock payout","passive income","dividend yield","reinvesting dividends","drip","income investing","wealth accumulation","stock returns","quarterly dividends"] },
      { name: 'Down Payment Calculator', path: '/down-payment', desc: 'Calculate required home purchase deposit.', keywords: ["home deposit","mortgage down payment","pmi threshold","house buying","real estate math","savings goal","fha down payment","closing costs","home ownership","housing budget"] },
      { name: 'Earnest Money Calculator', path: '/earnest-money', desc: 'Estimate good-faith deposit for home offers.', keywords: ["house offer","good faith deposit","real estate contracts","earnest money math","escrow","home buying process","property offer","real estate basics","buying a home","closing deposit"] },
      { name: 'Estate Tax Calculator', path: '/estate-tax', desc: 'Plan for inheritance and estate transfers.', keywords: ["inheritance tax","death tax","estate planning","legacy wealth","tax liability","step up in basis","gift tax","wealth transfer","estate math","posthumous finance"] },
      { name: 'FHA Loan Calculator', path: '/fha-loan', desc: 'Analyze Federal Housing Administration loans.', keywords: ["government loan","fha mortgage","first time home buyer","mortgage insurance","fha requirements","low down payment","housing assistance","mortgage math","fha limits","home loan"] },
      { name: 'FICA Tax Calculator', path: '/fica-tax', desc: 'Calculate Social Security and Medicare withholdings.', keywords: ["social security tax","medicare withholding","payroll tax","self employment tax","fica math","tax deductions","irs withholdings","ssi medicare","income tax","take home pay"] },
      { name: 'Florida Sales Tax Calculator', path: '/florida-sales-tax', desc: 'Calculate FL sales tax including local surtax.', keywords: ["florida tax","fl sales tax","tourism tax","discretionary sales surtax","florida business","shopping in florida","state tax rates","tax lookup fl","miami taxes","orlando taxes"] },
      { name: 'Future Value', path: '/future-value', desc: 'Calculate future wealth from principal.', keywords: ["future value math","tvm","investment projection","wealth growth","financial math","future worth","compounding","savings goal","investment analysis","money tomorrow"] },
      { name: 'Gift of Equity Calculator', path: '/gift-of-equity', desc: 'Calculate tax and equity for family sales.', keywords: ["equity gift","down payment assistance","family home sale","real estate tax","mortgage gift","equity transfer","home buying math","irs gift rules","housing finance","family discount"] },
      { name: 'Gross Rent Multiplier', path: '/grm', desc: 'GRM for income property valuation.', keywords: ["real estate metrics","grm math","income property","rental valuation","gross rent multiplier","investment analysis","property appraisal","rental yield","real estate investing","market value"] },
      { name: 'Gross to Net Calculator', path: '/gross-to-net', desc: 'Calculate take-home pay from gross salary.', keywords: ["take home pay","net income","payroll math","salary breakdown","tax withholding","gross pay","income estimator","paycheck math","national insurance","tax calculator"] },
      { name: 'GST Calculator', path: '/gst', desc: 'Calculate Goods and Services Tax.', keywords: ["vat gst","tax calculation","inclusive exclusive gst","business tax","goods and services tax","sales tax math","tax filing","price with tax","tax accounting","gst rate"] },
      { name: 'GST/QST Canada', path: '/gst-qst-canada', desc: 'Calculate combined Canadian sales taxes.', keywords: ["canada tax","gst pst hst","quebec tax","qst","canadian sales tax","provincial tax","canada business","shopping canada","canadian finance","tax rates canada"] },
      { name: 'HELOC Calculator', path: '/heloc', desc: 'Home Equity Line of Credit.', keywords: ["home equity line","revolving credit","heloc math","interest only period","line of credit","home equity borrowing","flexible financing","equity access","financial planning","loan limit"] },
      { name: 'Hourly to Salary', path: '/hourly-to-salary', desc: 'Convert hourly wage to annual salary.', keywords: ["wage conversion","salary math","hourly pay","annual earnings","income estimator","pay comparison","yearly salary","hourly wage","work hours","paycheck math"] },
      { name: 'House Affordability', path: '/house-affordability', desc: 'Find your home budget range.', keywords: ["home budget","purchasing power","affordability math","house hunting","mortgage qualification","income vs debt","real estate matching","down payment impact","housing market","buying a home"] },
      { name: 'Income Tax Calculator', path: '/income-tax', desc: 'Estimate your federal income tax liability.', keywords: ["irs tax","federal income tax","tax refund","tax liability","marginal tax rate","effective tax rate","tax planning","form 1040","accounting","tax season"] },
      { name: 'Inflation Calculator', path: '/inflation', desc: 'Purchasing power over time.', keywords: ["purchasing power","cpi","inflation math","value of money","historical inflation","currency depreciation","economic data","price increase","cost of living","monetary value"] },
      { name: 'Interest Rate', path: '/interest-rate', desc: 'Calculate APR and APY.', keywords: ["apr apy","loan interest","savings rate","nominal rate","effective interest","borrowing cost","interest math","interest calculator","financial rate","yield"] },
      { name: 'Investment Return', path: '/investment', desc: 'Project future wealth and growth.', keywords: ["roi","investment growth","wealth projection","portfolio performance","stock gains","asset return","investment math","financial planning","market returns","compounding"] },
      { name: 'IRA Calculator', path: '/ira', desc: 'Analyze traditional IRA contributions.', keywords: ["retirement account","ira contribution","tax deferred growth","ira vs 401k","traditional ira","retirement savings","tax deduction","pension math","nest egg","retirement planning"] },
      { name: 'IRR Calculator', path: '/irr', desc: 'Internal Rate of Return for projects.', keywords: ["internal rate of return","project valuation","capital budgeting","npv vs irr","investment yield","business math","profitability metric","cash flow analysis","corporate finance","investment grade"] },
      { name: 'Lease Calculator', path: '/lease', desc: 'Compare buying vs leasing costs.', keywords: ["car lease","lease v buy","equipment leasing","monthly payment","residual value","lease terms","financing comparison","leasing math","business lease","contract math"] },
      { 
        name: 'Loan Calculator', 
        path: '/loan', 
        desc: 'Estimate payments for any loan.',
        guidance: {
          whyItMatters: 'Understanding the total cost of borrowing allows you to compare different financial products fairly. The APR is often more telling than the quoted interest rate alone when assessing a loan\'s true cost.',
          pitfalls: [
            'Focusing Only on Monthly Payment: Low monthly payments often mask a higher total interest cost due to longer loan terms.',
            'Prepayment Penalties: Some loans charge a fee if you pay them off early. Always check for these if you plan to get out of debt faster.'
          ],
          proTip: 'Always try to get pre-approved before shopping for a major purchase to ensure you\'re getting the best market rate available to you based on your credit score.',
        keywords: ["loan payment","amortization","interest payment","personal loan","borrowing math","debt schedule","loan calculator","principal and interest","lending","debt payoff"]
      }
      },
      { name: 'Lottery Tax Calculator', path: '/lottery-tax', desc: 'Calculate net payout after jackpot taxes.', keywords: ["lottery winnings","lump sum vs annuity","jackpot tax","gambling tax","irs lottery","lottery math","prize winnings","tax planning","lottery payout","big win tax"] },
      { name: 'Margin Calculator', path: '/margin', desc: 'Calculate markup and profit margins.', keywords: ["profit margin","gross profit","business accounting","sales success","revenue math","corporate finance","margin analysis","financial health","profit tracking","business metrics"] },
      { name: 'Marriage Tax', path: '/marriage-tax', desc: 'Check for marriage tax penalties/bonuses.', keywords: ["marriage penalty","marriage bonus","joint filing vs separate","couple tax","irs marriage","tax planning","filing status","household income tax","marriage finance","tax bracket shift"] },
      { name: 'Mileage Reimbursement Calculator', path: '/mileage-reimbursement', desc: 'Calculate IRS standard mileage rates.', keywords: ["irs mileage rate","business miles","travel reimbursement","mileage tracking","deductible miles","gas money","business travel cost","mileage math","tax deduction mileage","commuting cost"] },
      { name: 'Missouri Sales Tax Calculator', path: '/missouri-sales-tax', desc: 'Calculate MO sales tax rates.', keywords: ["missouri tax","mo sales tax","missouri business","shopping in missouri","state tax rates","st louis taxes","kansas city taxes","tax lookup mo","missouri finance","sales tax math"] },
      { name: 'National Insurance', path: '/national-insurance-uk', desc: 'Calculate UK National Insurance contributions.', keywords: ["uk tax","national insurance","ni contributions","uk payroll","hmrc","salary deductions uk","pension ni","benefit eligibility","uk finance","national insurance math"] },
      { name: 'Modified AGI (MAGI)', path: '/magi', desc: 'Modified Adjusted Gross Income for eligibility.', keywords: ["magi","ira eligibility","roth ira limits","taxable income","irs magi","adjusted gross income","tax planning","medicaid eligibility","income thresholds"] },
      { 
        name: 'Mortgage Calculator', 
        path: '/mortgage', 
        desc: 'Calculate monthly payments and amortization.',
        guidance: {
          whyItMatters: 'A mortgage is likely the largest financial commitment of your life. Even a 0.5% difference in interest rate can save or cost you tens of thousands of dollars over the life of a 30-year loan.',
          pitfalls: [
            'Forgetting PMI: If your down payment is less than 20%, you\'ll likely pay Private Mortgage Insurance, which increases your monthly cost without building any equity.',
            'Escrow Volatility: Property taxes and insurance premiums change yearly. Your "fixed" mortgage payment might still fluctuate due to these escrow adjustments.'
          ],
          proTip: 'Making just one extra principal payment per year can shorten a 30-year mortgage by nearly 4 years and save significant interest over time.',
        keywords: ["mortgage payment","piti","loan calculator","home buying math","mortgage interest","monthly payments","real estate financing","house loan","interest rates","mortgage planning"]
      }
      },
      { name: 'Mutual Fund', path: '/mutual-fund', desc: 'Analyze fund performance and fees.', keywords: ["index fund","etf","mutual fund fees","asset allocation","expense ratio","fund performance","investment mix","mutual fund math","diversification","wealth management"] },
      { name: 'Net to Gross Calculator', path: '/net-to-gross', desc: 'Calculate gross pay from target net amount.', keywords: ["target net pay","reverse tax","payroll math","gross up","net to gross","salary calculation","bonus tax","take home pay","withholding math","tax planning"] },
      { name: 'Net Worth Calculator', path: '/net-worth', desc: 'Track total assets and liabilities.', keywords: ["assets liabilities","wealth tracking","net worth math","financial snapshot","personal balance sheet","wealth management","net worth goals","financial health","debt vs assets","tracking net worth"] },
      { name: 'New Jersey Sales Tax Calculator', path: '/new-jersey-sales-tax', desc: 'Calculate NJ sales tax for purchases.', keywords: ["nj sales tax","new jersey tax","shopping nj","state tax rates","nj business","tax lookup nj","sales tax math","new jersey finance","garden state taxes","sales tax guide"] },
      { name: 'New York Tax Calculator', path: '/new-york-tax', desc: 'Estimate NY state and city income tax.', keywords: ["new york tax","nyc income tax","ny state tax","new york city payroll","tax withholding ny","state tax brackets","nyc finance","tax refund ny","ny tax filing","albany taxes"] },
      { name: 'Ohio Sales Tax Calculator', path: '/ohio-sales-tax', desc: 'Calculate OH sales tax by county.', keywords: ["ohio tax","oh sales tax","ohio business","shopping in ohio","state tax rates","cleveland taxes","columbus taxes","tax lookup oh","count sales tax","ohio finance"] },
      { name: 'Overtime Calculator', path: '/overtime', desc: 'Calculate time-and-a-half and double-time pay.', keywords: ["time and a half","double time","extra hours pay","overtime math","flsa","payroll calculation","work hours","earned pay","overtime rate","wage increase"] },
      { name: 'Payback Period', path: '/payback-period', desc: 'Time to recover your investment.', keywords: ["recovery of investment","break even time","financial analysis","capital budgeting","roi duration","business planning","payback period formula","investment math","project viability","fiscal timing"] },
      { name: 'Payroll Calculator', path: '/payroll', desc: 'Calculate net pay and taxes for any salary.', keywords: ["payroll tax","net pay","salary deductions","futa suta","fica","paycheck estimator","payroll math","withholding calculator","employer tax","employee pay"] },
      { name: 'Pension Calculator', path: '/pension', desc: 'Estimate future pension payments.', keywords: ["pension payout","retirement income","defined benefit","pension math","future retirement","annuity","pension projection","monthly pension","retirement savings","pension plan"] },
      { name: 'Present Value', path: '/present-value', desc: 'Calculate current value of future cash.', keywords: ["pv","time value of money","discounting","future cash value","present worth","financial math","investment analysis","net present value","tvm","money today"] },
      { name: 'Refinance Calculator', path: '/refinance', desc: 'See if a new loan rate saves you money.', keywords: ["loan refinance","mortgage refinance","refi math","break even point","interest savings","new loan rate","refinance payment","debt reduction","mortgage planning","refi calculator"] },
      { name: 'Retirement Planner', path: '/retirement', desc: 'Comprehensive retirement strategy tool.', keywords: ["retirement goals","nest egg","retirement strategy","future wealth","retire early","financial independence","retirement projection","wealth builder","savings plan","retirement math"] },
      { name: 'RMD Calculator', path: '/rmd', desc: 'Required Minimum Distributions.', keywords: ["required minimum distribution","ira rmd","irs rules","retirement withdrawal","tax planning","rmd age","distribution math","retirement mandate","taxable distribution","ira withdrawal"] },
      { name: 'ROI Calculator', path: '/roi', desc: 'Measure investment performance.', keywords: ["investment performance","return on investment","roi math","profitability","gain loss percentage","performance metrics","wealth tracking","investment analysis","roi formula","market return"] },
      { name: 'Roth IRA Calculator', path: '/roth-ira', desc: 'Calculate Roth IRA growth and taxes.', keywords: ["roth ira","tax free growth","retirement savings","roth vs traditional","roth contribution","roth growth math","tax planning","future wealth","nest egg","retirement account"] },
      { name: 'Salary Calculator', path: '/salary', desc: 'Convert pay between different time periods.', keywords: ["salary conversion","paycheck math","income estimator","hourly to salary","biweekly pay","gross income","net pay","compensation math","pay range","yearly earnings"] },
      { name: 'Savings Calculator', path: '/savings', desc: 'Track your savings goals.', keywords: ["savings goal","interest growth","savings projection","wealth builder","compound interest","emergency fund","savings math","bank interest","hysa","wealth accumulation"] },
      { name: 'Social Security Calculator', path: '/social-security', desc: 'Estimate your retirement benefits.', keywords: ["social security benefits","retirement age","ssa payout","benefit estimator","social security math","retirement income","government benefits","pension alternative","wealth planning","ssa.gov"] },
      { name: 'Stamp Duty Land Tax (UK)', path: '/sdlt', desc: 'Calculate UK property purchase tax (SDLT).', keywords: ["sdlt","uk property tax","stamp duty math","house buying uk","buy to let sdlt","first time buyer uk","uk real estate","tax lookup uk","property purchase tax","hmrc"] },
      { name: 'Stock Return', path: '/stock-return', desc: 'Calculate total profit from shares.', keywords: ["stock profit","trading returns","total return math","stock performance","share gains","portfolio tracking","dividend return","stock yield","market success","investment analysis"] },
      { name: 'Student Loan Calculator', path: '/student-loan', desc: 'Manage your education financing.', keywords: ["student loan payoff","fassa","education debt","student loan math","repayment plan","interest savings","student loan interest","colleges debt","loan forgiveness math","debt reduction"] },
      { name: 'Take Home Pay', path: '/take-home-pay', desc: 'Estimate your actual take-home pay.', keywords: ["net pay","after tax salary","paycheck estimator","take home math","withholding","disposable income","salary breakdown","tax impact","net income","financial planning"] },
      { name: 'Take Home Pay UK', path: '/take-home-pay-uk', desc: 'Calculate UK net salary after tax and NI.', keywords: ["uk salary","net pay uk","hmrc tax","paycheck calculator uk","national insurance","london salary","uk take home math","british taxes","payslip checker","uk finance"] },
      { name: 'Tax Bracket Calculator', path: '/tax-bracket', desc: 'Find your marginal and effective tax rates.', keywords: ["tax brackets","marginal tax","effective tax","irs tiers","tax planning","income tax math","tax liability","tax reform","federal tax rates","taxable income"] },
      { name: 'UK Coin Weight', path: '/uk-coin-weight', desc: 'Calculate the weight and value of UK coinage.', keywords: ["coin weight uk","british coins","currency math","uk coinage","royal mint","coin value","pound sterling","weight of money","uk currency","coin identification"] },
      { name: 'VAT Calculator', path: '/vat', desc: 'Calculate Value Added Tax for purchases.', keywords: ["vat math","sales tax uk eu","value added tax","tax inclusive price","business tax","vat rate","tax accounting","consumer tax","shopping uk","tax lookup"] },
      { name: 'Stock Beta', path: '/stock-beta', desc: 'Measure stock volatility relative to the market.', keywords: ["market risk","beta coefficient","stock volatility","risk measure","capital asset pricing","stock correlation","portfolio beta","financial math","market sensitivity","risk analysis"] },
      { name: 'CAPM Calculator', path: '/capm', desc: 'Capital Asset Pricing Model for expected returns.', keywords: ["capm","expected return","risk free rate","market risk premium","asset pricing","financial theory","investment math","cost of equity","portfolio theory","beta math"] },
      { name: 'Carried Interest', path: '/carried-interest', desc: 'Calculate private equity and hedge fund performance fees.', keywords: ["performance fees","private equity math","hedge fund pay","investment management","gp catch up","asset management fees","finance incentive","profit split","private equity finance","gp returns"] },
      { name: 'Cost of Capital', path: '/cost-of-capital', desc: 'Standardized WACC and hurdle rate math.', keywords: ["wacc","hurdle rate","capital structure","cost of debt","cost of equity","financial math","valuation","corporate finance","investment appraisal","capital budgeting"] },
      { name: 'Cost of Equity', path: '/cost-of-equity', desc: 'Calculate investor required returns.', keywords: ["required return","cost of equity math","capm","investor expectations","corporate finance","stock valuation","equity risk premium","dividend growth model","financial theory","capital cost"] },
      { name: 'Dividend Discount Model', path: '/dividend-discount-model', desc: 'Intrinsic value based on dividend growth.', keywords: ["ddm","gordon growth model","dividend valuation","intrinsic value","stock price math","future dividends","investment analysis","stock value","dividend growth","valuation model"] },
      { name: 'Dividend Payout Ratio', path: '/dividend-payout-ratio', desc: 'Percentage of earnings paid as dividends.', keywords: ["dividend ratio","earnings payout","dividend safety","company performance","financial metrics","dividend math","profit sharing","stock analysis","dividend sustainability","accounting ratio"] },
      { name: 'Dividend Yield', path: '/dividend-yield', desc: 'Calculate annual dividend return percentage.', keywords: ["dividend percentage","stock yield","income investing","high yield stocks","dividend returns","stock payout","investment ratio","yield math","passive income","portfolio yield"] },
      { name: 'DuPont Analysis', path: '/dupont-analysis', desc: 'Deconstruct return on equity into core drivers.', keywords: ["roe breakdown","dupont framework","profitability drivers","financial analysis","return on equity math","asset turnover","equity multiplier","margin analysis","corporate health","ratio deconstruction"] },
      { name: 'Earnings per Share', path: '/eps', desc: 'Calculate company profit per share.', keywords: ["eps","earnings per share math","corporate profitability","stock metrics","earnings report","eps analysis","company performance","per share value","market data","stock research"] },
      { name: 'EPS Growth', path: '/eps-growth', desc: 'Track earnings per share expansion.', keywords: ["eps expansion","earnings growth rate","company scaling","stock performance","growth metrics","eps trends","market research","investment analysis","growth math","financial projection"] },
      { name: 'EBITDA Multiple', path: '/ebitda-multiple', desc: 'Company valuation relative to earnings.', keywords: ["ebitda multiple","enterprise value ebitda","valuation metric","company value","market comparison","ev ebitda math","corporate valuation","ebitda ratio","acquisition math","business value"] },
      { name: 'Economic Value Added', path: '/eva', desc: 'Measure true economic profit.', keywords: ["eva","economic profit","wealth creation","corporate performance","invested capital","wacc adjustment","business value","economic value add math","management metric","true profit"] },
      { name: 'Enterprise Value', path: '/enterprise-value', desc: 'Calculate total theoretical takeover price.', keywords: ["ev","takeover price","company total value","market cap plus debt","enterprise value math","valuation","corporate finance","business worth","acquisition cost","financial metric"] },
      { name: 'EV to Sales', path: '/ev-to-sales', desc: 'Revenue-based valuation multiple.', keywords: ["revenue multiple","sales valuation","ev sales ratio","business valuation","market cap sales","growth metrics","corporate health","ev sales math","tech valuation","startup metrics"] },
      { name: 'Free Float', path: '/free-float', desc: 'Calculate shares available for public trading.', keywords: ["liquid shares","floating stock","market liquidity","share circulation","trading math","investment risk","stock supply","public float","market analysis","liquidity metrics"] },
      { name: 'Graham Number', path: '/graham-number', desc: 'Value investing fair price formula.', keywords: ["value investing","benjamin graham","fair stock price","intrinsic value","margin of safety","graham formula","stock valuation","conservative investing","fair value math","investing basics"] },
      { name: 'Intrinsic Value', path: '/intrinsic-value', desc: 'Calculate the true worth of an asset.', keywords: ["true worth","stock value","dcf valuation","fair value","discounted cash flow","intrinsic value math","investment analysis","stock worth","valuation model","fundamental analysis"] },
      { name: 'Margin of Safety', path: '/margin-of-safety', desc: 'Risk buffer in value investing.', keywords: ["risk buffer","value investing","mos","safety margin math","investment safety","stock screen","conservative entry","protection level","investing strategy","risk management"] },
      { name: 'Market Cap', path: '/market-cap', desc: 'Total market value of all outstanding shares.', keywords: ["market capitalization","company size","large cap mid cap small cap","stock value","market value","outstanding shares","valuation","stock market basics","equity value","business size"] },
      { name: 'Maturity Value', path: '/maturity-value', desc: 'Future value of a debt instrument.', keywords: ["bond face value","debt maturity","future value of bond","repayment amount","bond math","fixed income","principal at maturity","investment return","debt instrument","maturity math"] },
      { name: 'NAV Calculator', path: '/nav', desc: 'Net Asset Value for funds.', keywords: ["net asset value","etf nav","mutual fund price","fund valuation","per share nav","asset management","investment fund math","nav tracking","portfolio value","fund performance"] },
      { name: 'Operating Cash Flow Ratio', path: '/ocf-ratio', desc: 'Measure liquidity from core operations.', keywords: ["liquidity ratio","operating cash","cash flow health","corporate solvency","financial ratio","ocf ratio math","cash coverage","operating efficiency","business health","accounting metrics"] },
      { name: 'PEG Ratio', path: '/peg-ratio', desc: 'P/E ratio adjusted for growth.', keywords: ["growth adjusted pe","peg ratio math","valuation metrics","stock growth","pe vs peg","investment efficiency","valuation ratio","stock research","fair value","growth investing"] },
      { name: 'Portfolio Beta', path: '/portfolio-beta', desc: 'Calculate overall portfolio risk.', keywords: ["weighted beta","portfolio risk","systematic risk","market correlation","risk analysis","investment risk","portfolio math","beta tracking","portfolio management","market sensitivity"] },
      { name: 'Price to Earnings (P/E)', path: '/pe-ratio', desc: 'Standard stock valuation metric.', keywords: ["pe ratio","p/e multiple","earnings multiple","stock valuation","price to earnings math","valuation ratio","market research","investment metrics","company valuation","pe analysis"] },
      { name: 'Price to Book (P/B)', path: '/pb-ratio', desc: 'Valuation relative to equity.', keywords: ["pb ratio","price to book math","book value","equity valuation","stock metrics","valuation ratio","financial analysis","pb calculation","market value vs book value","asset value"] },
      { name: 'Price to Cash Flow', path: '/p-cf-ratio', desc: 'Valuation relative to operational cash.', keywords: ["pcf ratio","price to cash flow math","valuation metrics","cash flow yield","stock analysis","investment ratio","corporate valuation","price cash flow","market research","profitability"] },
      { name: 'Price to Sales (P/S)', path: '/ps-ratio', desc: 'Valuation relative to total revenue.', keywords: ["ps ratio","price to sales math","revenue multiple","valuation metric","sales yield","stock analysis","startup valuation","ps calculation","revenue valuation","market comparison"] },
      { name: 'Dividend Quiz', path: '/dividend-quiz', desc: 'Test your knowledge on payout metrics.', keywords: ["dividend knowledge","stock quiz","yield test","investing trivia","wealth literacy","payout metrics quiz","finance education","money quiz","stock market test","dividends quiz"] },
      { name: 'Residual Income', path: '/residual-income', desc: 'Measure profit above required return.', keywords: ["extra income","economic profit","surplus income","residual income math","property income","business profit","wealth creation","accounting metric","excess return","financial health"] },
      { name: 'Retention Ratio', path: '/retention-ratio', desc: 'Percentage of earnings kept by the firm.', keywords: ["plowback ratio","earnings retention","dividend payout","company growth math","reinvested earnings","corporate finance","financial ratios","growth potential","profit retention","stock analysis"] },
      { name: 'Return on Equity (ROE)', path: '/roe', desc: 'Profitability relative to shareholder equity.', keywords: ["roe","profitability ratio","shareholder return","equity math","financial health","roe analysis","corporate performance","investing metrics","stock research","return on equity"] },
      { name: 'ROIC Calculator', path: '/roic', desc: 'Return on Invested Capital.', keywords: ["roic","invested capital return","business efficiency","capital allocation","profitability metrics","corporate performance","investment analysis","wacc vs roic","value creation","finance math"] },
      { name: 'Return on Sales (ROS)', path: '/ros', desc: 'Operational profit efficiency.', keywords: ["ros","operating margin","profit efficiency","sales profitability","business health","financial ratios","operating profit math","performance metrics","corporate analysis","margin analysis"] },
      { name: 'Return on Assets (ROA)', path: '/roa', desc: 'Profitability relative to total resources.', keywords: ["roa","asset efficiency","profitability ratio","corporate resources","financial health","roa analysis","investment metrics","asset management","stock research","return on assets"] },
      { name: 'Stock Calculator', path: '/stock', desc: 'Calculate total buy and sell profit.', keywords: ["stock profit","buy sell math","trading gain","investment tracker","stock market calculator","total return","brokerage fees","net profit","capital gains","trading success"] },
      { name: 'Stock Average', path: '/stock-average', desc: 'Calculate average cost per share.', keywords: ["dollar cost averaging","average cost per share","stock accumulation","break even price","portfolio math","investment average","stock cost basis","trading strategy","wealth building","position sizing"] },
      { name: 'Stock Split', path: '/stock-split', desc: 'Analyze impact of share multiplication.', keywords: ["share multiplier","stock split math","reverse split","share price adjustment","market cap impact","corporate action","investing basics","trading analysis","stock dilution","shares outstanding"] },
      { name: 'Sustainable Growth', path: '/sustainable-growth-rate', desc: 'Maximum growth without external debt.', keywords: ["growth rate math","internal funding","business expansion","sustainable growth model","roe retention","corporate finance","growth without debt","financial planning","company scaling","strategic growth"] },
      { name: 'Unlevered Beta', path: '/unlevered-beta', desc: 'Asset risk without financial leverage.', keywords: ["asset beta","risk without debt","leveraging math","market risk","beta de-leveraging","financial theory","investment analysis","asset risk","capm adjustment","finance math"] },
      { name: 'WACC Calculator', path: '/wacc', desc: 'Weighted Average Cost of Capital.', keywords: ["weighted cost of capital","hurdle rate","capital structure","wacc math","corporate valuation","cost of debt equity","investment appraisal","discount rate","financial modeling","business worth"] },
      { name: 'After-tax Cost of Debt', path: '/after-tax-cost-of-debt', desc: 'Effective debt cost after tax shield.', keywords: ["debt tax shield","interest tax deduction","effective interest rate","corporate tax math","cost of borrowing","corporate finance","tax saving","financial planning","debt finance","tax impact"] },
      { name: 'Altman Z-Score', path: '/altman-z-score', desc: 'Predict corporate bankruptcy risk.', keywords: ["bankruptcy prediction","solvency math","credit risk","financial distress","corporate health","z-score analysis","business failure risk","investment safety","financial metrics","accounting alerts"] },
      { name: 'Bond Convexity', path: '/bond-convexity', desc: 'Measure rate sensitivity curvature.', keywords: ["rate sensitivity","bond risk","duration convexity","interest rate impact","bond math","fixed income analysis","yield curve","price volatility","investment risk","advanced bond theory"] },
      { name: 'Bond Current Yield', path: '/bond-current-yield', desc: 'Annual income vs current price.', keywords: ["bond yield math","income vs price","current yield","fixed income return","bond investment","interest income","market price yield","dividend yield vs bond yield","wealth tracking","bond performance"] },
      { name: 'Bond Equivalent Yield', path: '/bond-equivalent-yield', desc: 'Compare discount and coupon bonds.', keywords: ["bey","bond yield comparison","discount bond math","coupon yield","fixed income investment","yield conversion","bond returns","market rates","investment analysis","bey formula"] },
      { name: 'Bond Price', path: '/bond-price', desc: 'Present value of future bond payments.', keywords: ["bond valuation","present value of bond","bond math","discounting","future cash flows","fixed income price","interest rate pricing","market value of debt","bond investing","valuation model"] },
      { name: 'Bond Yield', path: '/bond-yield', desc: 'Calculate total return on bond holdings.', keywords: ["total return bond","bond income","yield math","investment gain","fixed income performance","interest earnings","bond growth","market yield","wealth accumulation","portfolio return"] },
      { name: 'Bond YTM', path: '/bond-ytm', desc: 'Yield to Maturity for standard bonds.', keywords: ["ytm math","yield to maturity","bond returns","total expected return","fixed income yield","bond life","interest rate risk","investment metrics","bond performance","long term yield"] },
      { name: 'Coupon Payment', path: '/coupon-payment', desc: 'Calculate regular bond interest checks.', keywords: ["bond interest","coupon check","periodic pay","fixed income cash flow","interest income math","bond earnings","passive income","coupon schedule","monetary yield","bond pay"] },
      { name: 'Coupon Rate', path: '/coupon-rate', desc: 'Stated interest rate on a bond.', keywords: ["stated rate","bond interest rate","nominal yield","coupon percent","fixed income basics","bond contract","interest math","investment grade","debt instrument","yield vs coupon"] },
      { name: 'Credit Spread', path: '/credit-spread', desc: 'Yield difference between risk levels.', keywords: ["yield gap","risk premium","bond spread math","credit risk","default risk premium","market sentiment","fixed income analysis","yield curve","economic indicator","bond risk"] },
      { name: 'DSCR Calculator', path: '/dscr', desc: 'Debt Service Coverage Ratio for loans.', keywords: ["dscr","loan coverage","business debt health","commercial mortgage qualifying","debt service ratio","financial solvency","lender metrics","cash flow vs debt","loan eligibility","business finance"] },
      { name: 'Debt to Asset', path: '/debt-to-asset', desc: 'Total leverage relative to resources.', keywords: ["leverage ratio","debt to asset math","solvency","financial risk","corporate health","asset funding","capital structure","risk analysis","business stability","debt burden"] },
      { name: 'Debt-to-Capital', path: '/debt-to-capital', desc: 'Leverage within total capitalization.', keywords: ["capitalization ratio","debt to capital math","leverage","financial structure","risk assessment","corporate finance","funding mix","market value vs book value","debt burden","capital health"] },
      { name: 'Debt to Equity', path: '/debt-to-equity', desc: 'Relative proportion of debt and equity.', keywords: ["de ratio","leverage math","equity multiplier","financial risk","solvency ratio","corporate capital","debt vs equity","investment analysis","stock research","capital structure"] },
      { name: 'Defensive Interval', path: '/defensive-interval', desc: 'Days of operations funded by liquid assets.', keywords: ["cash runway","liquidity interval","burn rate","business survival math","financial safety","working capital","liquid assets","operational buffer","startup metrics","corporate health"] },
      { name: 'Effective Duration', path: '/effective-duration', desc: 'Price sensitivity to interest rate shifts.', keywords: ["yield sensitivity","bond price change","interest rate risk","effective duration math","fixed income volatility","bond duration","market risk","investment analysis","price impact","risk metrics"] },
      { name: 'Interest Coverage', path: '/interest-coverage', desc: 'Ability to pay interest from EBIT.', keywords: ["tie ratio","interest coverage math","solvency","ebit vs interest","debt service","corporate health","financial stability","lender criteria","ebitda coverage","business risk"] },
      { name: 'LGD Calculator', path: '/lgd', desc: 'Loss Given Default for credit risk.', keywords: ["lgd","credit loss","default math","recovery rate","risk management","banking metrics","credit risk","financial stability","loss estimation","basel iii"] },
      { name: 'Quick Ratio', path: '/quick-ratio', desc: 'Acid-test liquidity measurement.', keywords: ["acid test ratio","liquidity measurement","short term debt","quick assets","financial health","corporate solvency","current vs quick","cash bridge","accounting basics","business liquidity"] },
      { name: 'Tax Equivalent Yield', path: '/tax-equivalent-yield', desc: 'Compare municipal and taxable bonds.', keywords: ["muni bond yield","tax free vs taxable","tax equivalent math","investment yield","bond returns","marginal tax impact","tax planning","fixed income","muni yield","wealth strategy"] },
      { name: 'Times Interest Earned', path: '/times-interest-earned', desc: 'Solvency and interest payment health.', keywords: ["tie ratio","interest payment health","solvency math","corporate debt","financial coverage","earnings to interest","lender safety","business health","debt burden","solvency metrics"] },
      { name: 'Yield to Maturity', path: '/ytm', desc: 'Total expected bond return over life.', keywords: ["ytm","bond total return","yield to maturity math","fixed income","bond life","interest rate risk","investment metrics","performance analysis","market yield","bond growth"] },
    ]
  },
  {
    title: 'Personal & Fun',
    slug: 'personal',
    description: 'Life metrics and entertaining curiosities. Our personal tools help you track unique milestones, compatibility, and day-to-day life calculations.',
    defaultGuidance: {
      whyItMatters: 'While some metrics are for entertainment, others—like business days or age differences—help organize the social and professional logic of our lives. These tools add clarity to complex personal timelines and help you celebrate milestones with mathematical accuracy.',
      pitfalls: [
        'Timezone Overlap: When calculating "days until" for international events, forgetting the date line can lead to missing the start of your countdown.',
        'Inclusive vs. Exclusive Dates: Forgetting whether you are counting the "start" day or "end" day in a range can result in a 24-hour error.'
      ],
      proTip: 'Use the "Business Days" calculator for project planning rather than simple day counts to get a realistic view of when a task will actually be completed in a professional setting.'
    },
    items: [
      { name: 'Dog Age Calculator', path: '/dog-age', desc: 'Convert dog years to human years.', keywords: ["dog age","pet years","human age for dogs","senior dog math","canine longevity","puppy years","vet health","dog life stages","pet calculator","dog age chart"] },
      { name: 'Cat Age Calculator', path: '/cat-age', desc: 'Convert cat years to human years.', keywords: ["cat age","feline years","human age for cats","kitten years","cat longevity","senior cat math","pet health","feline life stages","cat calculator","cat age chart"] },
      { name: 'Angel Number', path: '/angel-number', desc: 'Discover your unique angel number.', keywords: ["numerology","spiritual growth","angel numbers meaning","divine message","astrology","lucky numbers","manifestation","synchronicity","spiritual path","guidance numbers"] },
      { name: 'Lucky Number', path: '/lucky-number', desc: 'Find your lucky number and color.', keywords: ["lucky numbers","fortune","personality test","numerology","destiny colors","personal luck","gamble luck","daily fortune","spirituality","chance math"] },
      { name: 'Friendship Calculator', path: '/friendship', desc: 'Test the strength of your friendship.', keywords: ["best friends test","friendship test","compatibility","bff check","friendship goals","fun quiz","relationship test","social bond"," friendship strength","buddy math"] },
      { name: 'Star Sign Compatibility', path: '/star-sign-compatibility', desc: 'Check zodiac compatibility.', keywords: ["zodiac compatibility","astrology match","star signs love","horoscope compatibility","romantic match","sun signs","elemental match","zodiac love test","astrology logic","relationship signs"] },
      { name: 'Name Compatibility', path: '/name-compatibility', desc: 'Test love match between two names.', keywords: ["name numerology","love match","name compatibility test","relationship goals","destiny names","name meaning","spiritual connection","personality match","name score","couple names"] },
      { name: 'Love Calculator', path: '/love', desc: 'Test the compatibility between two names.', keywords: ["love meter","compatibility test","crush calculator","relationship logic","love score","fun quiz","dating helper","romance check","love percentage","relationship goals"] },
      { name: 'Numerology', path: '/numerology', desc: 'Meaning behind your name and birth date.', keywords: ["name meaning","birth date numerology","life path number","personality traits","spiritual growth","destiny numbers","numerology chart","destiny soul","number meanings","mystical math"] },
      { name: 'Zodiac', path: '/zodiac', desc: 'Find your star sign and personality traits.', keywords: ["horoscope","star signs","astrology","birth chart","personality test","zodiac dates","sun signs","zodiac traits","astrological signs","sky map"] },
      { name: 'Anniversary Calculator', path: '/anniversary', desc: 'How long you\'ve been together.', keywords: ["relationship tracker","milestone","date counter","celebration","anniversary math","wedding timer","dating duration","event tracker","relationship health","milestone reminder"] },
      { name: 'Days Until', path: '/days-until', desc: 'Count down to any special event.', keywords: ["countdown","how many days until","event timer","special date","holiday countdown","deadline tracker","vacation timer","wedding countdown","birthday countdown","days until tool"] },
      { name: 'Business Days', path: '/business-days', desc: 'Count work days between two dates.', keywords: ["work days","delivery date","project timeline","business hours","calendar math","excluding weekends","deadline tracker","professional timing","project management","business days"] },
      { name: 'Chronological Age', path: '/chronological-age', desc: 'Calculate exact age in years, months, days.', keywords: ["exact age","legal age","milestones","life duration","chronological age","precise age","days since birth","age in seconds","personal history","identity math"] },
      { name: 'Work Hours', path: '/work-hours', desc: 'Track your daily and weekly working time.', keywords: ["timesheet","working hours","paycheck math","daily schedule","overtime tracker","clock in out","work life balance","labor math","productivity tracker","hours worked"] },
      { name: 'Time Card', path: '/time-card', desc: 'Calculate total hours and pay for a week.', keywords: ["hours and minutes","time tracker","payroll calculator","weekly pay","hours worked","worklog","timesheet helper","overtime math","gross pay estimator","time card math"] },
      { name: 'Age Calculator', path: '/age', desc: 'Find out exactly how old you are.', keywords: ["birthday","chronological age","how old am i","years months days","exact age","legal age","life span","date math","personal stats","birthday tracker"] },
    ]
  },
  {
    title: 'Insurance',
    slug: 'insurance',
    description: 'Secure your future with proper coverage in 2026. Our tools help you estimate how much life, health, or auto insurance you actually need.',
    defaultGuidance: {
      whyItMatters: 'Insurance is your financial safety net. Calculating the correct coverage amount is the difference between being "insured" and being "protected." Under-insuring leaves your family vulnerable, while over-insuring wastes thousands in unnecessary premiums over a lifetime.',
      pitfalls: [
        'The "Rule of Thumb" Trap: Relying on generic advice (like "10x your salary") ignores individual debt, education costs, and inflation. Always calculate based on your specific liabilities.',
        'Ignoring Inflation: A $500k policy today will have significantly less purchasing power in 20 years. Re-evaluate your coverage every 3-5 years.'
      ],
      proTip: 'Consider "Laddering" your policies. Instead of one giant 30-year policy, take multiple smaller policies with different durations (e.g., 10, 20, and 30 years) to match your shrinking debt as your mortgage is paid off.'
    },
    items: [
      { name: 'Life Insurance', path: '/life-insurance', desc: 'Coverage for family protection.', keywords: ["life coverage","family protection","premium estimator","insurance math","term life vs whole life","death benefit","policy planning","probate avoidance","financial safety net","beneficiary planning"] },
      { name: 'Health Insurance', path: '/health-insurance', desc: 'Out-of-pocket and premium math.', keywords: ["medical insurance","health coverage","ppo vs hmo","deductible","out of pocket max","insurance premiums","health savings","aca tax","medical budget","health plan math"] },
      { name: 'Car Insurance', path: '/car-insurance', desc: 'Drive with financial peace of mind.', keywords: ["policy costs","car insurance quote","deductible math","collision coverage","liability limits","auto insurance budget","insurance savings","vehicle protection","drive safe","insurance rates"] },
    ]
  },
  {
    title: 'Math',
    slug: 'math',
    description: 'Master mathematics from basic arithmetic to advanced calculus. Our tools cover everything from simple addition to complex linear algebra and statistics.',
    defaultGuidance: {
      whyItMatters: 'Mathematical precision is the universal language of logic and problem-solving. Whether you are solving for X in a classroom or calculating the volume of a sphere in the field, using verified formulas ensures that your results are consistent, preventing cascading errors in more complex projects.',
      pitfalls: [
        'Order of Operations Error: Forgetting PEMDAS/BODMAS is the most common reason for incorrect results. Our tools handle this automatically, but manual verification should always follow these rules.',
        'Improper Rounding: Rounding too early in a multi-step problem can significantly skew the final answer. Always keep as many decimals as possible until the final step.'
      ],
      proTip: 'Whenever possible, draw the problem. Visualization, especially in geometry, helps you identify if an answer "looks" right before you commit to the result.'
    },
    items: [
      { 
        name: 'Scientific Calculator', 
        path: '/scientific', 
        desc: 'Advanced trignometric, logarithmic, and power functions.',
        guidance: {
          whyItMatters: 'Complex engineering, physics, and advanced math require precision beyond basic arithmetic. Trignometric, logarithmic, and exponential functions are the building blocks of modern technology.',
          pitfalls: [
            'Degree vs. Radian Mode: Using the wrong angular unit is the most common reason for incorrect trigonometric results. Always verify your current mode before calculating.',
            'Order of Operations: Complex nested expressions require careful use of parentheses to ensure the math is processed in the order you intended.'
          ],
          proTip: 'Use the memory functions (M+, MR) to store intermediate results and maintain maximum floating-point precision throughout multi-step problems.'
        }
      },
      { name: 'Basic Calculator', path: '/math/basic-calculator', desc: 'A simple calculator for basic operations.', keywords: ['arithmetic', 'simple math', 'calculator', 'basics'] },
      { name: 'Addition', path: '/math/addition', desc: 'Sum multiple numbers with precision.', keywords: ["plus","summation","total","arithmetic","math basics","combine numbers","sum math","basic math","addition tool","math help"] },
      { name: 'Multiplication', path: '/math/multiplication', desc: 'Calculate the product of multiple values.', keywords: ["times","product","multiplier","arithmetic","math basics","multiplication tool","scaling","groups of","math help","basic math"] },
      { name: 'Division', path: '/math/division', desc: 'Calculate quotients and remainders.', keywords: ["divide","quotient","sharing","math basics","arithmetic","division tool","ratio","partition","inverse multiplication","math help"] },
      { name: 'Long Division', path: '/math/long-division', desc: 'Step-by-step long division work.', keywords: ['division', 'remainders', 'step by step'] },
      { name: 'Average Calculator', path: '/math/average', desc: 'Calculate the arithmetic mean of a dataset.', keywords: ["mean","datasets","central tendency","math average","statistics basics","average value","number set","arithmetic mean","middle value","data analysis"] },
      { name: 'Square Root', path: '/math/square-root', desc: 'Calculate the geometric root of any number.', keywords: ["radical","root of 2","pythagorean","exponent math","geometry","math basics","inverse power","perfect square","root calculation","math help"] },
      { name: 'Exponent Calculator', path: '/math/exponent', desc: 'Calculate powers and exponents.', keywords: ['powers', 'exponential', 'math'] },
      { name: 'Log Calculator', path: '/math/log', desc: 'Calculate logarithms with various bases.', keywords: ['logarithms', 'natural log', 'math'] },
      { name: 'Percentage Calculator', path: '/math/percentage', desc: 'Standard "X% of Y" and proportion solver.', keywords: ["percent share","portion of total","math basics","percentage math","arithmetic","discount help","share calculation","portion solver","math help","basics"] },
      { name: 'Percent Error', path: '/math/percent-error', desc: 'Measure precision and accuracy in data.', keywords: ["experimental error","scientific math","accuracy","precision","margin of error","measurement math","physics lab","stats helper","error analysis","math help"] },
      { name: 'Fraction Calculator', path: '/math/fraction', desc: 'Arithmetic with proper and improper fractions.', keywords: ["adding fractions","multiplying fractions","division","subtraction","numerator denominator","math basics","school math","fraction helper","simplification","math solver"] },
      { name: 'Quadratic Formula', path: '/math/quadratic-formula', desc: 'Solve any quadratic equation (ax² + bx + c = 0).', keywords: ["solve for x","roots","parabola","algebra basics","quadratic solver","discriminant","math help","algebra 1","algebra 2","formula helper"] },
      { name: 'GCD/GCF Calculator', path: '/math/gcf', desc: 'Find the greatest common factor.', keywords: ["highest common factor","hcf","divisibility","prime factors","simplifying fractions","common divisors","number theory","math basics","common factor","greatest divisor"] },
      { name: 'LCM Calculator', path: '/math/lcm', desc: 'Find the least common multiple.', keywords: ["common multiples","fractions denominator","number theory","math basics","arithmetic","prime factorization","common denominator","least multiple","multiples list","integers"] },
      { name: 'Pythagorean Theorem', path: '/math/pythagorean-theorem', desc: 'Solve for hypotenuse or legs (a² + b² = c²).', keywords: ["right triangle","geometry basics","a2 b2 c2","side lengths","math help","geometry solver","distance formula","hypotenuse","legs","math homework"] },
      { name: 'Triangle Calculator', path: '/math/triangle', desc: 'Solve for side lengths and angles in any triangle.', keywords: ['right triangle', 'oblique triangle', 'geometry'] },
      { name: 'Right Triangle Calculator', path: '/math/right-triangle', desc: 'Solve for sides and angles in a right-angled triangle.', keywords: ['hypotenuse', 'trig', 'geometry'] },
      { name: 'Area Calculator', path: '/math/area', desc: 'Calculate the 2D surface area for any shape.', keywords: ["surface area","geometry math","2d shapes","square area","rectangle area","polygon area","math basics","floor area","room size","geometry solver"] },
      { name: 'Volume Calculator', path: '/math/volume', desc: 'Calculate total 3D capacity for various objects.', keywords: ["geometric capacity","cube volume","box volume","sphere volume","3d math","liquid capacity","tank size","volume solver","geometry help","math basics"] },
      { name: 'Matrix Calculator', path: '/math/matrix', desc: 'Perform complex matrix operations.', keywords: ['linear algebra', 'matrices'] },
      { name: 'Eigenvalue & Eigenvector', path: '/math/eigen', desc: 'Calculate core scaling and direction factors.', keywords: ["eigen decomposition","linear transformations","principal component","matrix analysis","spectrology","vector space","math help","advanced algebra","matrix scaling","eigen solver"] },
      { name: 'Statistics Calculator', path: '/math/statistics', desc: 'Analyze data with mean, median, mode, and more.', keywords: ['data analysis', 'statistics', 'summary'] },
      { name: 'Standard Deviation Calculator', path: '/math/standard-deviation', desc: 'Calculate standard deviation and variance.', keywords: ['statistics', 'data analysis', 'variance'] },
      { name: 'Z-Score Calculator', path: '/math/z-score', desc: 'Calculate the standard score of a data point.', keywords: ['statistics', 'normal distribution', 'probability'] },
      { name: 'Confidence Interval', path: '/math/confidence-interval', desc: 'Calculate the confidence interval for a data set.', keywords: ['statistics', 'estimation', 'probability'] },
      { name: 'P-Value Calculator', path: '/math/p-value', desc: 'Calculate p-values for statistical tests.', keywords: ['statistics', 'hypothesis testing', 'probability'] },
      { name: 'Probability Calculator', path: '/math/probability', desc: 'Calculate the likelihood of different events.', keywords: ['chance', 'odds', 'statistics'] },
      { name: 'Permutation Calculator', path: '/math/permutation', desc: 'Calculate the number of ways to arrange items.', keywords: ['nPr', 'probability', 'permutations'] },
      { name: 'Combination Calculator', path: '/math/combination', desc: 'Calculate the number of ways to choose items.', keywords: ['nCr', 'probability', 'combinations'] },
      { name: 'Scientific Notation', path: '/math/scientific-notation', desc: 'Convert between standard and E-notation.', keywords: ["standard form","powers of 10","exponential notation","scientific math","huge numbers","microscopic scales","lab measurements","math notation","scientific reporting","math simplified"] },
      { name: 'Significant Figures', path: '/math/significant-figures', desc: 'Track precision through calculations.', keywords: ["sig figs","measurement math","experimental error","science math","precision","rounding rules","physics homework","significant digits","uncertainty","accuracy"] },
      { name: 'Big Number Calculator', path: '/math/big-number', desc: 'Arithmetic operations on extremely large numbers.', keywords: ['large numbers', 'precision', 'advanced math'] },
      { name: 'Factor Calculator', path: '/math/factor', desc: 'Find factors of a number.', keywords: ["divisors","factoring","number theory","math basics","prime numbers","divisibility","combinations","integers","factors list","common factors"] },
      { name: 'Rounding Calculator', path: '/math/rounding', desc: 'Round numbers to any decimal place or specific digit.', keywords: ["rounding up","rounding down","sig figs","nearest integer","decimal precision","approximate","math basics","scientific rounding","precision settings","math help"] },
      { name: 'Prime Factorization', path: '/math/prime-factorization', desc: 'Decompose numbers into prime products.', keywords: ["prime factors","fundamental theorem","divisibility","number theory","factor trees","integer decomposition","math basics","gcd help","lcm help","prime decomposition"] },
      { name: 'Prime Number', path: '/math/prime-number', desc: 'Verify and list prime integers.', keywords: ["primes","sieve of eratosthenes","divisibility","number theory","prime check","integers","factors","cryptography basics","arithmetic","math properties"] },
      { name: 'Common Factor Calculator', path: '/math/common-factor', desc: 'Find common factors between numbers.', keywords: ['gcf', 'factoring', 'math'] },
      { name: 'Absolute Change', path: '/math/absolute-change', desc: 'Calculate the total difference between two values.', keywords: ["math difference","absolute value","change math","arithmetic","number difference","variance","total change","absolute math","subtraction help","math basics"] },
      { name: 'Absolute Value', path: '/math/absolute-value', desc: 'Find the non-negative magnitude of any number.', keywords: ["magnitude","positive value","distance from zero","number magnitude","math basics","arithmetic","positive number","absolute math","real numbers","distance math"] },
      { name: 'Modulo Calculator', path: '/math/modulo', desc: 'Find the remainder of a division.', keywords: ["remainder math","clock arithmetic","programming math","modular","remainders","integer theory","division remainder","mod math","math logic","arithmetic"] },
      { name: 'Ratio Calculator', path: '/math/ratio', desc: 'Simplify and compare ratios.', keywords: ['proportions', 'ratios', 'fractions'] },
      { name: 'Mixed Number', path: '/math/mixed-number', desc: 'Operations with whole numbers and fractions.', keywords: ["improper fractions","integer fractions","school math","fraction helper","arithmetic","whole number math","fraction conversion","mixed fractions","math solver","basics"] },
      { name: 'Simplify Fractions', path: '/math/simplify-fraction', desc: 'Reduce fractions to their simplest form.', keywords: ["lowest terms","common divisor","fraction reduction","math basics","school math","numerator denominator","hcf gcf","simplify math","math help","basics"] },
      { name: 'System of Equations', path: '/math/system-of-equations', desc: 'Find intersections of multiple algebraic lines.', keywords: ["simultaneous equations","linear algebra","solve for x and y","elimination","substitution","graphing systems","intersection","algebra 1","algebra 2","math solver"] },
      { name: 'Slope Calculator', path: '/math/slope', desc: 'Calculate the steepness and direction of a line.', keywords: ["rise over run","gradient","linear equations","coordinate geometry","line steepness","math basics","y-intercept","slope formula","algebra 1","slope solver"] },
      { name: 'Midpoint Calculator', path: '/math/midpoint', desc: 'Find the exact center between two coordinates.', keywords: ["coordinate center","averaging points","geometry basics","bisector","math help","midpoint formula","line center","coordinate math","geometry solver","basics"] },
      { name: 'Distance Calculator', path: '/math/distance', desc: 'Calculate straight-line distance between points.', keywords: ['geometry', 'coordinates', 'distance formula'] },
      { name: 'Number Sequence', path: '/math/number-sequence', desc: 'Analyze and generate arithmetic and geometric sequences.', keywords: ['sequences', 'series', 'patterns'] },
      { name: 'Derivative Calculator', path: '/math/derivative', desc: 'Calculate the rate of change of a function.', keywords: ['calculus', 'differentiation', 'slope', 'rate of change'] },
      { name: 'Integral Calculator', path: '/math/integral', desc: 'Calculate the area under a curve.', keywords: ['calculus', 'integration', 'area', 'antiderivative'] },
      { name: 'Limit Calculator', path: '/math/limit', desc: 'Evaluate the limit of a functional expression.', keywords: ['calculus', 'limits', 'continuity', 'infinitesimal'] },
      { name: 'Sine Calculator', path: '/math/sine', desc: 'Calculate the sine of an angle.', keywords: ["sin theta","trig functions","right triangle","wave math","geometry basics","oscillation","physics math","math help","sine wave","angle math"] },
      { name: 'Cosine Calculator', path: '/math/cosine', desc: 'Calculate the cosine of an angle.', keywords: ["cos theta","trig functions","right triangle","adjacent side","geometry basics","phasor math","math help","cosine wave","angle math","trigonometry"] },
      { name: 'Tangent Calculator', path: '/math/tangent', desc: 'Calculate the tangent of an angle.', keywords: ["tan theta","trig functions","slope","right triangle","gradient","math help","tangent line","angle math","geometry basics","trigonometry"] },
      { name: 'Simplify Expression', path: '/math/simplify-expression', desc: 'Reduce algebraic expressions to simplest form.', keywords: ['algebra', 'simplify', 'equations'] },
      { name: 'Expand Expression', path: '/math/expand-expression', desc: 'FOIL and expand complex algebraic statements.', keywords: ['algebra', 'expansion', 'foil'] },
      { name: 'Linear Solver', path: '/math/linear-solver', desc: 'Solve for x in linear equations.', keywords: ['algebra', 'solve for x', 'linear equations'] },
      { name: 'Circle Calculator', path: '/math/circle', desc: 'Calculate diameter, circumference, and area of a circle.', keywords: ["circle math","pi","radius diameter","circumference","circle area","geometry help","circular dimensions","math basics","geometry solver","circle geometry"] },
      { name: 'Surface Area Calculator', path: '/math/surface-area', desc: 'Calculate the total outside area of 3D objects.', keywords: ['geometry', '3d shapes', 'outside area'] }
    ]
  },
  {
    title: 'Roofing & Framing',
    slug: 'roofing',
    description: 'Specialized structural engineering for envelopes and rafters in 2026. From truss math to shingle coverage, ensure your building is watertight and sound.',
    defaultGuidance: {
      whyItMatters: 'Roofing and framing math are critical for structural integrity and preventing water damage. Incorrect rafter lengths or pitch calculations can lead to sagging loads or improper drainage, which are two of the most expensive building failures to correct after construction is complete.',
      pitfalls: [
        'Ignoring "Exposure" Factor: Not accounting for shingle overlap can lead to a 15-20% deficit in material count.',
        'Ignoring Gravity Loads: Miscalculating the snow load or dead weight of roofing materials can lead to structural collapse in extreme weather.'
      ],
      proTip: 'Always calculate your pitch as "Rise over Run." Measuring from the bottom of the rafter rather than the top can lead to incorrect overhang dimensions.'
    },
    items: [
      { name: 'Roofing Calculator', path: '/roofing', desc: 'Estimate shingles and materials.', keywords: ["roof area math","roofing cost estimator","shingle calculation","roofing supplies","contractor math","home improvement","roofing square footage","shingle bundle count","construction help","roofing project"] },
      { name: 'Rafter Length', path: '/rafter-length', desc: 'Step-by-step rafter sizing and layout.', keywords: ["roof framing","rafter length math","carpentry math","construction calculator","roof slope rafter","building code","truss math","roofing layout","standard rafters","framing math"] },
      { name: 'Roof Pitch', path: '/roof-pitch', desc: 'Calculate slope and angle for roofs.', keywords: ["roof angle","roof slope math","pitch to degrees","roofing rise run","construction math","steepness calculation","roofing layout","roof pitch chart","carpentry tools","roofing basics"] },
      { name: 'Roof Shingle', path: '/roof-shingle', desc: 'Bundle count and exposure factors.', keywords: ["shingle bundles","roofing coverage","roofing squares","exposure math","shingle calculator","roofing materials","contractor estimator","home roofing","roof repair math","shingle wastage"] },
      { name: 'Roof Truss', path: '/roof-truss', desc: 'Structural dimensions for pre-fab supports.', keywords: ["truss design","roof structure","pre-fab trusses","truss span math","construction engineering","roofing support","truss calculation","building math","rafter vs truss","structural roofing"] },
      { name: 'Gambrel Roof', path: '/gambrel-roof', desc: 'Classical barn roof geometry and area.', keywords: ["barn roof math","gambrel geometry","roofing area","classic roof style","architecture math","gambrel trusses","farm building","roofing slope","gambrel area","construction math"] },
      { name: 'Birdsmouth Cut', path: '/birdsmouth-cut', desc: 'Rafter notch dimensions for wall plates.', keywords: ["rafter notch","carpentry math","roof framing","seat cut","rafter layout","construction math","building help","rafter tail","framing joints","carpentry basics"] },
      { name: 'Metal Roof Cost', path: '/metal-roof-cost', desc: 'Compare standing seam vs. corrugated expenses.', keywords: ["metal roofing cost","standing seam pricing","corrugated metal math","roofing materials","metal roof vs shingles","installation cost","roofing budget","home improvement","metal roofing areas","contractor math"] },
      { name: 'Snow Load', path: '/snow-load', desc: 'Calculate weight pressure for structural safety.', keywords: ["roof snow pressure","structural safety","snow weight math","building code","roofing load","weather math","structural engineering","snow accumulation","roof collapse prevention","cold climate math"] },
    ]
  },
  {
    title: 'Real Estate & Mortgages',
    slug: 'real-estate',
    description: 'Expert 2026 planning for property and residential financing. Analyze mortgage structures, investment returns, and leasing math with professional precision.',
    defaultGuidance: {
      whyItMatters: 'Real estate is often an individual\'s primary vehicle for wealth creation, but it is also their largest liability. Understanding the impact of interest rates, amortization, and cap rates allows you to move beyond "emotional buying" and treat property as a calculated financial asset.',
      pitfalls: [
        'Forgetting Closing Costs: Most buyers forget that taxes, title fees, and commissions add 2-5% to the total purchase price beyond the down payment.',
        'Cash Flow vs. Appreciation: Relying solely on a home\'s value to go up is a speculative gamble. Professional investors prioritize positive monthly cash flow over hypothetical future price growth.'
      ],
      proTip: 'Always calculate "Price Per Square Foot" for comparable homes in your specific neighborhood. This is the only way to truly know if you are overpaying for a property based on its area.'
    },
    items: [
      { name: 'Mortgage Calculator', path: '/mortgage', desc: 'Primary mortgage payment analysis.', keywords: ["mortgage payment","piti","loan calculator","home buying math","mortgage interest","monthly payments","real estate financing","house loan","interest rates","mortgage planning"] },
      { name: 'House Affordability', path: '/house-affordability', desc: 'Find your home budget range.', keywords: ["home budget","purchasing power","affordability math","house hunting","mortgage qualification","income vs debt","real estate matching","down payment impact","housing market","buying a home"] },
      { name: 'Mortgage Acceleration', path: '/mortgage-acceleration', desc: 'See how extra payments shorten your loan.', keywords: ["extra payments","loan payoff","interest savings","mortgage math","early payoff","biweekly payments","principal reduction","mortgage term","wealth building","debt free math"] },
      { name: 'Mortgage Amortization', path: '/mortgage-amortization', desc: 'Detailed monthly payment schedule.', keywords: ["loan schedule","payment breakdown","amortization table","principal vs interest","mortgage math","loan lifecycle","financial planning","debt tracking","interest over time","mortgage timeline"] },
      { name: 'Mortgage Extra Payments', path: '/mortgage-extra-payments', desc: 'Calculate savings from additional principal.', keywords: ["early payoff","interest savings","mortgage math","principal payments","loan reduction","wealth building","mortgage strategy","extra payment impact","financial independence","debt reduction"] },
      { name: 'Mortgage Tax & Insurance', path: '/mortgage-with-taxes-and-insurance', desc: 'Complete PITI payment breakdown.', keywords: ["piti calculator","mortgage with tax","home insurance math","full monthly payment","escrow calculator","property tax impact","mortgage planning","house budget","homeownership costs","financing math"] },
      { name: 'Mortgage Payoff', path: '/mortgage-payoff', desc: 'Calculate time and interest saved by early payoff.', keywords: ["loan freedom","mortgage payoff date","interest savings","early retirement math","debt reduction","payoff strategy","mortgage math","financial planning","wealth building","house payoff"] },
      { name: 'Mortgage Refinance', path: '/mortgage-refinance', desc: 'See if current rates justify a new loan.', keywords: ["refi math","lower interest rate","refinance savings","mortgage planning","closing costs math","loan refinance","breakeven point","new monthly payment","mortgage strategy","home finance"] },
      { name: 'Mortgage Points', path: '/mortgage-points', desc: 'Analyze if buying points saves money.', keywords: ["discount points","mortgage rates","buydown math","interest vs upfront cost","loan strategy","mortgage planning","points calculation","financial analysis","real estate math","lender fees"] },
      { name: '10/1 ARM Calculator', path: '/10-1-arm', desc: 'Analyze adjustable rate mortgage shifts.', keywords: ["adjustable rate","arm math","mortgage reset","interest rate shift","loan planning","arm vs fixed","rate cap","flexible mortgage","financing risk","mortgage strategy"] },
      { name: 'Amortization Calculator', path: '/amortization', desc: 'Generic loan payment schedule.', keywords: ["loan schedule","debt repayment","amortization math","principal vs interest","monthly payments","loan solver","financial planning","debt reduction","interest tracking","loan lifecycle"] },
      { name: 'Balloon Payment', path: '/balloon-payment', desc: 'Calculate large final loan settlements.', keywords: ["large final payment","balloon mortgage","loan settlement","interest only math","financing risk","commercial loan math","lump sum payment","mortgage planning","debt structure","loan payoff"] },
      { name: 'Cash-Out Refinance', path: '/cash-out-refinance', desc: 'Analyze pulling equity from your home.', keywords: ["equity withdrawal","mortgage refi","cash out math","home improvement loans","loan modification","refinance strategy","home equity math","financing options","wealth management","real estate cash"] },
      { name: 'Home Equity', path: '/home-equity', desc: 'Calculate property value minus debt.', keywords: ["property value","home wealth","equity growth","mortgage balance","net worth math","asset tracking","real estate equity","house value","owners equity","wealth building"] },
      { name: 'HELOC Calculator', path: '/heloc', desc: 'Home Equity Line of Credit.', keywords: ["home equity line","revolving credit","heloc math","interest only period","line of credit","home equity borrowing","flexible financing","equity access","financial planning","loan limit"] },
      { name: 'LTV Calculator', path: '/ltv', desc: 'Loan-to-Value ratio for mortgage secondary math.', keywords: ["ltv ratio","mortgage risk","equity percentage","loan qualification","pmi threshold","real estate math","financing limit","down payment math","borrowing power","risk analysis"] },
      { name: 'VA Loan Calculator', path: '/va-loan', desc: 'Analyze zero-down military financing.', keywords: ["va loan math","military mortgage","zero down payment","va funding fee","veteran benefits","va financing","mortgage eligibility","service member housing","military finance","govt backed loan"] },
      { name: 'Jumbo Loan Calculator', path: '/jumbo-loan', desc: 'Analyze financing for high-value properties.', keywords: ["high value mortgage","non conforming loan","jumbo financing","luxury property math","interest rate spread","large loan qualification","high balance mortgage","real estate finance","buying luxury","financing math"] },
      { name: 'Canadian Mortgage', path: '/canadian-mortgage', desc: 'CA compounding and payment rules.', keywords: ["canada mortgage","semi annual compounding","ca home buying","canadian interest","mortgage math ca","mortgage stress test","ca real estate","canadian finance","home loan canada","mortgage term ca"] },
      { name: 'UK Mortgage', path: '/mortgage-uk', desc: 'Specific UK mortgage rules/taxes.', keywords: ["uk mortgage","stamp duty math","london property","uk interest rates","hmrc taxes","british real estate","mortgage planning uk","buy to let uk","finance uk","uk home buying"] },
      { name: 'Rent or Buy', path: '/rent-or-buy', desc: 'Financial long-term analysis.', keywords: ["real estate analysis","housing choice","financial modeling","opportunity cost","rent vs buy math","investment comparison","homeownership cost","wealth tracking","shelter math","buying vs renting"] },
      { name: 'BRRRR Calculator', path: '/brrrr', desc: 'Buy, Rehab, Rent, Refi, Repeat strategy.', keywords: ["real estate investing","wealth strategies","brrrr method","flipping houses","rehab math","rental cash flow","refinance math","investing formula","property scaling","wealth building"] },
      { name: 'Rental Property', path: '/rental-property', desc: 'Analyze investment profit and ROI.', keywords: ["investing math","cash flow","cap rate","roi math","rental profit","property management","real estate analytics","investment property","passive income","wealth building"] },
      { name: 'Net Operating Income', path: '/noi', desc: 'Calculate total property profitability.', keywords: ["noi math","property profit","real estate analytics","operating income","ebitda for property","rental income","expense tracking","investment health","property analysis","real estate math"] },
      { name: 'Occupancy Rate', path: '/occupancy-rate', desc: 'Analyze property utilization efficiency.', keywords: ["rental utilization","property management","vacancy rate","occupancy math","hospitality metrics","rental performance","business efficiency","real estate analytics","rental income","utilization math"] },
      { name: 'Real Estate Commission', path: '/real-estate-commission', desc: 'Calculate broker fees and net proceeds.', keywords: ["broker fees","closing cost math","sales commission","net proceeds","selling a home","realtor fees","real estate math","transaction cost","closing statement","success fee"] },
      { name: 'Price Per Sq Ft', path: '/price-per-square-foot', desc: 'Standardize property value comparison.', keywords: ["property value","price per foot","real estate comparison","standardized cost","market analysis","housing value","listing math","property metrics","real estate data","valuation help"] },
    ]
  },
  {
    title: 'Construction & Building',
    slug: 'construction',
    description: 'Specialized calculators for structural engineering and 2026 materials. Estimate lumber, steel weight, and framing requirements for professional worksites.',
    defaultGuidance: {
      whyItMatters: 'Construction math is the difference between a project that is profitable and one that is a financial disaster. Precisely estimating materials like lumber, drywall, and steel ensures that your job site stays active without the delays caused by "just one more trip" to the supplier.',
      pitfalls: [
        'Ignoring "Nominal" vs "Actual": A 2x4 lumber board is actually 1.5" x 3.5". Using nominal dimensions in high-precision framing will lead to misaligned walls and headers.',
        'Deflection Overlooked: Sizing a beam strictly for "strength" without checking "deflection" (how much it bends) can result in cracked drywall and bouncy floors even if the building is technically safe.'
      ],
      proTip: 'When ordering materials for a whole project, always group your cut-list. You might find that ordering 12-foot boards and cutting them results in significantly less waste than ordering standard 8-footers.'
    },
    items: [
      { name: 'Lumber Calculator', path: '/lumber', desc: 'Board feet and volume for framing.', keywords: ["board feet","lumber volume","construction math","framing materials","wood supply","woodworking","building math","lumber yard","carpentry help","material estimation"] },
      { name: 'Board Foot', path: '/board-foot', desc: 'Standard lumber volume measurement.', keywords: ["lumber volume","wood math","board foot calc","carpentry basics","woodworking tool","lumber measurement","framing math","timber volume","material math","woodworking help"] },
      { name: 'Framing Calculator', path: '/framing', desc: 'Estimate studs and plates for walls.', keywords: ["wall framing","stud count","plate math","construction helper","building math","framing layout","carpentry guide","material list","house framing","joist math"] },
      { name: 'Beam Deflection', path: '/beam-deflection', desc: 'Calculate stress and strain on structural beams.', keywords: ["beam math","structural engineering","deflection limit","load bearing","building safety","civil engineering","stress strain","construction math","beam sizing","structural math"] },
      { name: 'Drywall Calculator', path: '/drywall', desc: 'Estimate sheets and joint compound.', keywords: ["drywall sheets","sheetrock math","renovation help","material list","home interior","drywall estimator","mud and tape","construction math","room renovation","building help"] },
      { name: 'Steel Weight', path: '/steel-weight', desc: 'Calculate mass of structural beams and plates.', keywords: ["beam weight","heavy metal math","structural steel","metal mass","construction math","iron work","civil engineering","steel density","metal load","material weight"] },
      { name: 'Metal Weight', path: '/metal-weight', desc: 'Calculate weight for aluminum, brass, and copper.', keywords: ["metal mass","density math","aluminum copper brass","material weight","mechanical engineering","manufacturing math","metal fabrication","industrial math","metal supply","weight calculator"] },
      { name: 'Aluminum Weight', path: '/aluminum-weight', desc: 'Specific mass calculator for aluminum alloys.', keywords: ["aluminum mass","alloy weight","metal density","material math","mechanical engineering","aerospace math","manufacturing","aluminum supply","fabrication helper","weight estimation"] },
      { name: 'Pipe Weight', path: '/pipe-weight', desc: 'Calculate mass for steel and PVC piping.', keywords: ["pipe mass","steel pipe","pvc weight","fluid dynamics","structural pipe","plumbing math","mechanical engineering","pipe capacity","linear weight","material math"] },
      { name: 'Plate Weight', path: '/plate-weight', desc: 'Surface weight for heavy metals.', keywords: ["sheet metal weight","heavy plate","surface mass","industrial math","metal fabrication","bulk weight","material math","mechanical engineering","metal supply","plate density"] },
      { name: 'Rebar Calculator', path: '/rebar', desc: 'Estimate tonnage and count for reinforcement.', keywords: ["concrete reinforcement","rebar weight","construction math","foundation help","structural integrity","tonnage calculation","civil engineering","material estimator","building safety","rebar sizing"] },
      { name: 'Baluster Calculator', path: '/baluster', desc: 'Spacing for railings and banisters.', keywords: ["stair railing","baluster spacing","railing math","carpentry helper","deck safety","building code","banister layout","staircase design","spacing logic","carpentry basics"] },
      { name: 'Spindle Spacing', path: '/spindle-spacing', desc: 'Find the gap for staircase spindles.', keywords: ["staircase math","spindle layout","carpentry helper","railing safety","building math","interior design","railings","spindle gaps","carpentry basics","stair helper"] },
      { name: 'Spiral Staircase', path: '/spiral-staircase', desc: 'Calculate steps and rotation.', keywords: ["spiral steps","stair rotation","compact stairs","architectural math","building help","stair geometry","interior design","construction math","loft stairs","stair riser"] },
      { name: 'Decking Calculator', path: '/decking', desc: 'Estimate boards and fasteners for decks.', keywords: ["deck boards","outdoor living","building a deck","material list","fastener count","deck construction","backyard renovation","deck area math","carpentry help","joist spacing"] },
      { name: 'Log Weight', path: '/log-weight', desc: 'Estimate mass of raw timber.', keywords: ["timber weight","raw wood","forestry math","log mass","truck loading","woodworking","timber yard","environmental math","density helper","wood weight"] },
      { name: 'Glass Weight', path: '/glass-weight', desc: 'Calculate panes for structural glazing.', keywords: ["glass mass","window weight","glazing math","structural glass","interior design","architecture help","building materials","glass density","pane weight","material math"] },
      { name: 'Fire Glass', path: '/fire-glass', desc: 'Volume for fire pits and fireplaces.', keywords: ["fire pit glass","media volume","landscaping math","fireplace decor","glass rock","outdoor design","backyard project","material math","volume estimator","decor help"] },
      { name: 'Sealant Calculator', path: '/sealant', desc: 'Estimate caulk or epoxy for joints.', keywords: ["caulk math","epoxy volume","joint filler","construction help","waterproofing","sealant usage","maintenance math","diy repair","material list","caulking helper"] },
      { name: 'Vinyl Siding', path: '/vinyl-siding', desc: 'Square footage for exterior cladding.', keywords: ["house siding","cladding math","exterior renovation","siding sheets","home exterior","pvc siding","construction helper","material list","siding area","building help"] },
      { name: 'Vinyl Fence', path: '/vinyl-fence', desc: 'Panels and posts for synthetic boundaries.', keywords: ["vinyl fence math","fence panels","post count","boundary wall","landscaping help","property line","outdoor design","fence installation","material list","pvc fence"] },
      { name: 'Retaining Wall', path: '/retaining-wall', desc: 'Blocks and gravel for earth retention.', keywords: ["retaining blocks","landscape math","soil retention","garden design","hardscaping","block count","gravel volume","civil engineering","backyard project","structural safety"] },
      { name: 'French Drain', path: '/french-drain', desc: 'Perforated pipe and stone volume.', keywords: ["drainage math","water runoff","french drain volume","perforated pipe","stone volume","civil engineering","backyard project","landscape drainage","stormwater math","building safety"] },
      { name: 'Rip Rap', path: '/rip-rap', desc: 'Tonnage for erosion control stone.', keywords: ["erosion control","shoreline protection","rip rap tonnage","stone volume","civil engineering","landscape math","heavy stone","river bank safety","material estimator","bulk stone"] },
      { name: 'River Rock', path: '/river-rock', desc: 'Volume and weight for decorative stone.', keywords: ["decorative stone","landscape math","rock weight","river rock volume","outdoor design","garden project","material list","bulk rock","landscaping basics","stone estimator"] },
      { name: 'Limestone Calculator', path: '/limestone', desc: 'Tonnage for aggregate base layers.', keywords: ["limestone tonnage","gravel base","road stone","crushed limestone","material math","landscape supplies","bulk stone","base layer","limestone volume","construction help"] },
      { name: 'Gravel Calculator', path: '/gravel', desc: 'Tons and yards for generic projects.', keywords: ["gravel volume","tonnage math","aggregate","driveway gravel","bulk gravel","material estimator","road base","landscape supplies","gravel weight","construction help"] },
      { name: 'Sand Calculator', path: '/sand', desc: 'Calculate weight and volume for fill sand.', keywords: ["sand volume","fill sand","sand weight","construction math","material estimator","bulk sand","masonry sand","bedding sand","landscape supplies","fill math"] },
      { name: 'Cubic Yard', path: '/cubic-yard', desc: 'Convert dimensions to standard yardage.', keywords: ["cubic yards","volume math","yardage","bulk material","construction help","dirt volume","concrete yards","measurement math","material estimator","conversion help"] },
      { name: 'Gallons per Sq Ft', path: '/gallons-per-square-foot', desc: 'Calculate liquid coverage for surfaces.', keywords: ["liquid coverage","gallons per area","painting math","sealing","coating coverage","fluid math","surface area","calculation helper","material estimator","finishing math"] },
      { name: 'Size to Weight (Box)', path: '/size-to-weight-rectangular', desc: 'Estimate mass from package dimensions.', keywords: ["package mass","shipping math","weight estimator","box weight","logistics math","dimensional weight","material math","courier help","box sizing","weight calculation"] },
      { name: 'Square Ft to Cubic Yd', path: '/square-feet-to-cubic-yards', desc: 'Convert area and depth to volume.', keywords: ["yards from sq ft","volume math","area and depth","yardage conversion","construction helper","bulk material","material estimator","dirt calculation","landscape math","conversion help"] },
      { name: 'Rolling Offset', path: '/rolling-offset', desc: 'Pipe fitting math for 3D bends.', keywords: ["pipe fitting","3d bends","plumbing math","rolling offset","pipe layout","mechanical engineering","industrial plumbing","bend math","fitting calculation","pipework help"] },
      { name: 'SAG Calculator', path: '/sag', desc: 'Measure tension and deflection in lines.', keywords: ["line tension","cable sag","deflection math","electrical lines","telecom sag","structural engineering","line safety","catenary math","tension helper","mechanical math"] },
      { name: 'Steel Plate Weight', path: '/steel-plate-weight', desc: 'Mass for flat structural steel.', keywords: ["steel mass","plate weight","structural steel","metal mass","construction math","metal fabrication","iron work","civil engineering","material math","steel density"] },
      { name: 'Tonnage Calculator', path: '/tonnage', desc: 'Calculate weight for bulk materials.', keywords: ["material tonnage","bulk weight","load estimator","weight calculation","construction math","supply logistics","tonnage math","heavy materials","bulk volume","logistics help"] },
      { name: 'Wall Square Footage', path: '/wall-square-footage', desc: 'Calculate vertical surface area for finishing.', keywords: ["wall area","sq ft surface","painting prep","drywall area","finishing math","interior design","renovation helper","wall measurement","room area","area math"] },
      { name: 'Quiz: Pipe Weight', path: '/pipe-weight-quiz', desc: 'Test your structural weight estimations.', keywords: ["pipe math quiz","structural test","material weight quiz","engineering trivia","construction test","pipe properties","mass estimation","knowledge test","math quiz","engineering help"] },
      { name: 'Board and Batten', path: '/board-and-batten', desc: 'Siding layout and material count.', keywords: ["siding layout","wall paneling","board and batten math","carpentry helper","exterior design","home improvement","material count","siding area","wood siding","architecture basics"] },
      { name: 'Sonotube Calculator', path: '/sonotube', desc: 'Concrete volume for cylindrical forms.', keywords: ["concrete pier","form volume","sonotube math","foundation help","construction helper","concrete cylinder","masonry math","pi math","column volume","building safety"] },
      { name: 'DIY Shed Cost', path: '/diy-shed-cost', desc: 'Budget estimator for storage buildings.', keywords: ["shed budget","building cost","storage shed math","construction estimator","diy building","home improvement","outbuilding cost","material list","wood project","building help"] },
      { name: 'Taper Calculator', path: '/taper', desc: 'Measure slope for industrial machining.', keywords: ["machining math","angle calculation","taper math","engineering helper","lathe math","mechanical precision","industrial math","tooling help","manufacturing","slope math"] },
      { name: 'Thread Pitch', path: '/thread-pitch', desc: 'Identify fasteners for mechanical assembly.', keywords: ["bolt threading","screw pitch","fastener identification","mechanical math","machining","engineering basics","thread count","fastener help","hardware tracker","thread math"] },
      { name: 'True Position', path: '/true-position', desc: 'GD&T math for precision manufacturing.', keywords: ["gd&t math","geometric dimensioning","precision manufacturing","tolerance analysis","quality control","coordinate math","engineering helper","true position solver","mechanical design","metrology"] },
      { name: 'Welding Calculator', path: '/welding', desc: 'Analyze gas flow and heat settings.', keywords: ["weld settings","gas flow math","heat input","welding math","industrial help","metal joining","welding engineering","arc math","fabrication helper","metallurgy basics"] },
      { name: 'Wood Beam Span', path: '/wood-beam-span', desc: 'Safe horizontal distance for timber supports.', keywords: ["timber span","structural support","beam math","building code","carpentry helper","load bearing","civil engineering","horizontal span","wood load","structural safety"] },
    ]
  },
  {
    title: 'Water & Hydraulics',
    slug: 'hydraulics',
    description: '2026 precision fluid dynamics for plumbing, fire safety, and landscaping. Calculate flow rates, vessel volumes, and pressure drops for complex pipe systems.',
    defaultGuidance: {
      whyItMatters: 'Fluid dynamics is the silent force behind modern infrastructure. Whether you\'re sizing a pool pump or ensuring fire safety flow, understanding pressure and volume prevents catastrophic failures like pipe bursts or equipment cavitation that can cost thousands in repairs.',
      pitfalls: [
        'Ignoring Friction Loss: Water loses pressure as it travels through pipes. Forgetting to account for the length and diameter of the pipe will lead to inadequate flow at the destination.',
        'Static vs. Dynamic Pressure: Pressure changes when water starts moving. Designing for static pressure alone often results in systems that underperform under actual load.'
      ],
      proTip: 'Always "over-size" your pipes slightly if you\'re on the edge of a calculation. Increasing pipe diameter by just 25% can reduce friction loss by more than 50%, significantly extending pump life.'
    },
    items: [
      { name: 'Pool Calculator', path: '/pool', desc: 'Gallons, heating, and chemical needs.', keywords: ["pool volume","pool chemicals","gallons math","pool heating","swimming pool help","water maintenance","pool capacity","spa math","pool safety","chemistry helper"] },
      { name: 'Pond Calculator', path: '/pond', desc: 'Liner area and volume for water features.', keywords: ["pond volume","pond liner area","water feature","landscaping help","ecosystem math","pond capacity","backyard project","material estimator","water surface","pond design"] },
      { name: 'Tank Volume', path: '/tank-volume', desc: 'Identify capacity for horizontal or vertical vessels.', keywords: ["tank capacity","vessel volume","storage math","liquid volume","industrial tank","horizontal tank","vertical tank","tank geometry","fluid tracking","volume solver"] },
      { name: 'Pipe Volume', path: '/pipe-volume', desc: 'Internal capacity of plumbing lines.', keywords: ["pipeline capacity","liquid volume","internal volume","fluid storage","pipe dimensions","plumbing math","industrial piping","mechanical engineering","volume flow","fluid transport"] },
      { name: 'Fire Flow', path: '/fire-flow', desc: 'Required GPM for emergency fire suppression.', keywords: ["gpm for fire","fire suppression","emergency flow","water demand","civil engineering","fire safety math","sprinkler flow","hydrant flow","safety standards","fire protection"] },
      { name: 'Gallons Per Minute', path: '/gpm', desc: 'Flow rate for pumps and household plumbing.', keywords: ["flow rate","pump gpm","plumbing math","gallons per minute","fluid volume","mechanical engineering","water pressure","flow solver","utility math","plumbing help"] },
      { name: 'Liters Per Minute', path: '/lpm', desc: 'Metric flow volume for industrial applications.', keywords: ["metric flow","lpm math","liters per minute","industrial flow","fluid volume","mechanical engineering","water utility","flow solver","metric math","plumbing help"] },
      { name: 'Hydraulic Pressure', path: '/hydraulic-pressure', desc: 'Force and area math for heavy machinery.', keywords: ["hydraulic force","pressure and area","fluid power","mechanical engineering","heavy machinery","pascal law","hydraulic math","force multiplier","industrial math","engineering helper"] },
    ]
  },
  {
    title: 'Concrete & Masonry',
    slug: 'masonry',
    description: 'Precision 2026 math for concrete, brick, and stone work. From slab volume to mortar quantity, ensure your foundation is perfectly measured.',
    defaultGuidance: {
      whyItMatters: 'Concrete and masonry projects are high-stakes because "wet" materials have a limited working time and removal once cured is expensive. Accurate calculations prevent the two biggest job-site failures: running out of material mid-pour (creating weak "cold joints") or over-ordering and paying for wasted material and disposal fees.',
      pitfalls: [
        'Ignoring "Waste Factor": Always add 5-10% to your raw calculation to account for spillage, uneven sub-grades, and material stuck in the mixer or pump.',
        'Volume vs. Weight Confusion: Different aggregates (gravel vs. sand) have different densities. Ordering by weight without checking the specific material density can lead to severe shortages.'
      ],
      proTip: 'For large pours, calculate your "Actual Yield" after the first load. If you are using more than expected, you can adjust the remaining order before the project is finished.'
    },
    items: [
      { name: 'Concrete Calculator', path: '/concrete', desc: 'Estimate volume for building slabs.', keywords: ["concrete volume","slab math","cubic yards","concrete pour","construction helper","building math","masonry help","concrete estimator","foundation math","slab thickness"] },
      { name: 'Concrete Block', path: '/concrete-block', desc: 'Count for walls and foundations.', keywords: ["cmu count","concrete block","wall masonry","foundation blocks","construction helper","masonry math","building help","block count","wall estimator","stonework"] },
      { name: 'Concrete Column', path: '/concrete-column', desc: 'Volume for cylindrical or square supports.', keywords: ["concrete pier","cylinder volume","structural column","concrete support","construction math","masonry help","pier volume","building safety","column estimator","civil engineering"] },
      { name: 'Concrete stairs', path: '/concrete-stairs', desc: 'Step volume and riser math.', keywords: ["stair pour","concrete steps","step volume","riser and tread","masonry help","construction helper","concrete math","stair layout","exterior stairs","stair solver"] },
      { name: 'Concrete Weight', path: '/concrete-weight', desc: 'Calculate the mass of wet or dry slabs.', keywords: ["concrete mass","weight per slab","structural load","civil engineering","construction math","density math","concrete gravity","material weight","mass estimator","concrete safety"] },
      { name: 'Cement Calculator', path: '/cement', desc: 'Calculate mix ratios for custom concrete.', keywords: ["cement mixer","ratio math","custom concrete","portland cement","masonry help","mix proportions","cement bags","masonry basics","construction helper","diy concrete"] },
      { name: 'Brick Calculator', path: '/brick', desc: 'Count for facings and masonry walls.', keywords: ["brick count","facing brick","masonry wall","brickwork math","construction help","masonry estimator","brick wall","trowel math","architectural masonry","building help"] },
      { name: 'Grout Calculator', path: '/grout', desc: 'Estimate volume for tile joints.', keywords: ["tile grout","joint volume","flooring help","bathroom tiling","grout count","masonry math","material estimator","tiling helper","renovation math","grout spacing"] },
      { name: 'Mortar Calculator', path: '/mortar', desc: 'Bags needed for brick and block work.', keywords: ["masonry mortar","bricklaying","mortar bags","construction math","masonry help","mortar yield","brick mortar","block mortar","building basics","mortar estimator"] },
      { name: 'Thinset Calculator', path: '/thinset', desc: 'Coverage for tile adhesive.', keywords: ["tile adhesive","thinset coverage","flooring help","bathroom reno","tiling material","adhesive volume","thinset bags","construction math","material estimator","flooring basics"] },
      { name: 'Block Fill', path: '/concrete-block-fill', desc: 'Grout volume for hollow block cores.', keywords: ["hollow core fill","grout blocks","concrete cmu","masonry math","structural fill","volume estimator","block cores","construction help","civil engineering","masonry reinforcement"] },
      { name: 'Concrete Tube', path: '/concrete-estimator-tube', desc: 'Estimate volume for foundation piers.', keywords: ["concrete tube","pier volume","foundation fill","sonotube math","construction help","drilled shaft","concrete estimator","foundation pier","masonry math","building support"] },
      { name: 'Square Yardage', path: '/square-yardage', desc: 'Calculate surface area in square yards.', keywords: ["square yards","area math","flooring area","carpet area","carpet math","yardage conversion","construction helper","material estimator","conversion tool","area conversion"] },
      { name: 'Stone Calculator', path: '/stone', desc: 'Weight and volume for natural masonry.', keywords: ["natural stone","stone weight","masonry math","bulk stone","quarry weight","tonnage math","material estimator","stonework help","landscape design","aggregate weight"] },
      { name: 'Quiz: Stone Weight', path: '/stone-weight-quiz', desc: 'Verify your masonry material math.', keywords: ["stone trivia","masonry test","material math quiz","construction test","stonework knowledge","weight estimation","educational quiz","math test","masonry helper","basics"] },
      { name: 'Tile Calculator', path: '/tile', desc: 'Estimate count and waste factors.', keywords: ["tile count","sq ft tiling","bathroom layout","kitchen backsplash","tile wastage","floor area math","material estimator","tiling project","home renovation","tile sizing"] },
      { name: 'Hole Volume', path: '/hole-volume', desc: 'Post-hole and boring dimensions.', keywords: ["hole volume","post hole","boring dimensions","earth moving","digging math","excavation estimator","civil engineering","geometry math","volume solver","boring volume"] },
    ]
  },
  {
    title: 'Home Improvement',
    slug: 'home-improvement',
    description: 'Utilities for renovations and mechanical systems. Optimize HVAC sizing, calculate flooring needs, and plan your interior design projects.',
    defaultGuidance: {
      whyItMatters: 'Home improvement math protects your budget and your timeline. Whether you are sizing an AC unit or measuring for wainscoting, precision ensures that you buy exactly what you need. This reduces the number of trips to the supply store and ensures your mechanical systems operate at peak efficiency for the square footage of your home.',
      pitfalls: [
        'Linear vs. Square Measure: Forgetting to account for "pattern match" in wallpaper or flooring waste for diagonal layouts can leave you two boxes short of a finished room.',
        'Over-Sizing HVAC: Buying a "bigger" AC unit than your BTU calculation requires often leads to short-cycling, which increases humidity and reduces the lifespan of the equipment.'
      ],
      proTip: 'When measuring for materials like flooring or siding, draw a rough "cut map" to see if your room dimensions will leave you with sliver-thin, difficult-to-install pieces at the edges.'
    },
    items: [
      { name: 'Paint Calculator', path: '/paint', desc: 'Estimate gallons and coverage.', keywords: ["paint gallons","room coverage","painting math","interior design","wall surface","coating estimator","diy painting","renovation helper","paint bucket","area coverage"] },
      { name: 'Wallpaper', path: '/wallpaper', desc: 'Analyze roll count and coverage.', keywords: ["roll count","wallpaper area","wall covering","interior design","pattern repeat","material estimator","room renovation","wallpaper paste","wall decor","covering coverage"] },
      { name: 'Flooring Calculator', path: '/flooring', desc: 'Materials for wood, tile, carpet.', keywords: ["sq ft flooring","floor area math","hardwood tile carpet","room dimensions","material list","flooring budget","home renovation","flooring estimator","wastage factor","flooring math"] },
      { name: 'Carpet Calculator', path: '/carpet', desc: 'Calculate rolls and waste for rooms.', keywords: ["carpet rolls","carpet area","carpet math","flooring help","material estimator","carpet waste","room dimensions","carpet cost","floor covering","installation math"] },
      { name: 'Stair Carpet', path: '/stair-carpet', desc: 'Measure for complex runners.', keywords: ["carpet runner","stair runner math","carpet area","staircase coverage","flooring help","stair runner","carpet estimation","stair layout","interior design","material list"] },
      { name: 'Wainscoting', path: '/wainscoting', desc: 'Wall panel spacing and layout.', keywords: ["wall panels","wainscoting math","panel spacing","wall layout","interior design","carpentry helper","wood paneling","moulding layout","decorative wall","architectural detail"] },
      { name: 'Shiplap Calculator', path: '/shiplap', desc: 'Plank count for accent walls.', keywords: ["plank count","accent wall math","shiplap area","cladding math","interior design","carpentry helper","wood walls","material estimator","wall decor","plank layout"] },
      { name: 'Siding Calculator', path: '/siding', desc: 'Exterior coverage and material count.', keywords: ["house siding","exterior cladding","siding area","cladding math","home exterior","construction helper","material list","siding sheets","cladding estimate","building help"] },
      { name: 'Plywood Calculator', path: '/plywood', desc: 'Sheet count for subfloors and roofs.', keywords: ["sheet count","plywood area","subfloor math","roofing math","carpentry helper","wood panels","material estimator","construction math","building supply","sheathing math"] },
      { name: 'AC Tonnage', path: '/ac-tonnage', desc: 'Required cooling capacity for room size.', keywords: ["cooling capacity","ac sizing","hvac load","air conditioning","room size cooling","tonnage calculation","climate control","hvac help","home cooling","btu conversion"] },
      { name: 'AC BTU Calculator', path: '/ac-btu', desc: 'Heat output and cooling requirements.', keywords: ["heat load","cooling requirements","btu calculation","hvac math","ac sizing","energy efficiency","climate control","room btu","heating math","hvac helper"] },
      { name: 'Boiler Size', path: '/boiler-size', desc: 'Heating capacity for residential systems.', keywords: ["heating capacity","boiler sizing","hydronic heating","home heating","btu output","boiler efficiency","climate control","heating math","winter prep","hvac helper"] },
      { name: 'AC Clearance Hole', path: '/clearance-hole', desc: 'Calculate diameter for venting and pipes.', keywords: ["air leak","clearance hole","venting math","hvac help","mechanical opening","pipe passage","rough opening","building code","airflow math","hvac engineering"] },
      { name: 'Furnace Size', path: '/furnace-size', desc: 'BTU requirements for central heating.', keywords: ["heating capacity","furnace sizing","hvac load","home heating","btu output","furnace efficiency","climate control","heating math","winter prep","hvac helper"] },
      { name: 'Heat Loss', path: '/heat-loss', desc: 'Thermal efficiency and insulation math.', keywords: ["thermal loss","insulation efficiency","heat leakage","energy savings","home efficiency","thermal bridge","r-value math","heat transfer","heating design","building science"] },
      { name: 'Air Changes/Hour', path: '/air-changes-per-hour', desc: 'Ventilation and air quality math.', keywords: ["ventilation rate","air quality","ach math","cfm calculation","indoor air","building code","ventilation helper","fresh air","air exchange","hvac design"] },
      { name: 'Fence Calculator', path: '/fence', desc: 'Posts, rails, and material costs.', keywords: ["post and rail","fence cost","fence panels","enclosure math","property line","construction helper","material list","fencing area","pickets","boundary design"] },
      { name: 'Rectangle Fence', path: '/rectangle-fence-perimeter', desc: 'Calculate linear footage for gated lots.', keywords: ["perimeter math","gated lot","linear footage","fence length","property border","measurement math","geometry helper","fencing project","boundary math","survey help"] },
      { name: 'Fence Post Depth', path: '/fence-post-depth', desc: 'Structural safety for boundary lines.', keywords: ["post hole","structural depth","fence stability","foundation math","frost line","construction safety","soil depth","fence anchor","masonry math","building code"] },
      { name: 'Stair Calculator', path: '/stair', desc: 'Rises, runs, stringer lengths.', keywords: ["staircase math","riser and tread","stringer math","stair layout","building code","carpentry helper","construction math","stair angle","total rise run","stair solver"] },
      { name: 'Ramp Calculator', path: '/ramp', desc: 'Slope and length for accessibility.', keywords: ["slope math","ramp length","rise and run","inclination math","accessibility","construction math","wheelchair access","ramp degree","ada compliance","civil engineering"] },
      { name: 'Ladder Angle', path: '/ladder-angle', desc: 'Safe leaning for climbing equipment.', keywords: ["climbing safety","ladder reach","ladder lean","angle calculation","osha safety","ladder setup","construction safety","height reach","ladder math","home maintenance"] },
      { name: 'Deck Stain', path: '/deck-stain', desc: 'Volume needed for outdoor protection.', keywords: ["wood protection","stain volume","deck sealing","finishing math","exterior maintenance","material estimator","wood preservative","patio care","area coverage","staining helper"] },
      { name: 'Paver Calculator', path: '/paver', desc: 'Blocks and sand for patios.', keywords: ["patio area","paver count","hardscaping","backyard project","landscape calculator","brick pavers","walkway project","material estimator","paver patterns","landscape math"] },
      { name: 'Paver Sand', path: '/paver-sand', desc: 'Base and joint sand requirements.', keywords: ["sand volume","paver base","joint sand","landscape materials","bulk sand","construction math","material estimator","sand weight","bedding sand","filling math"] },
      { name: 'Epoxy Calculator', path: '/epoxy', desc: 'Volume for garage floors and countertops.', keywords: ["floor coating","epoxy volume","countertop resin","garage floor","surface area math","material estimator","resin math","finishing helper","industrial coating","self leveling"] },
      { name: 'Arch Calculator', path: '/arch', desc: 'Center and span for masonry arches.', keywords: ["masonry arch","arch span","structural math","geometric arch","architectural design","construction math","brick arch","building layout","center point","classical architecture"] },
      { name: 'Chicken Coop Size', path: '/chicken-coop-size', desc: 'Safe dimensions for avian welfare.', keywords: ["poultry house","coop dimensions","avian welfare","backyard farm","animal habitat","space requirements","chicken care","farming math","coop layout","livestock housing"] },
      { name: 'Hoop House', path: '/hoop-house', desc: 'Frame and plastic for greenhouses.', keywords: ["greenhouse frame","hoop house math","plastic covering","agricultural tunnel","garden prep","farming help","material list","cold frame","growing season","hydroponic support"] },
      { name: 'Floor Area Ratio', path: '/far', desc: 'Property buildable area compliance.', keywords: ["zoning math","far ratio","buildable area","property density","real estate math","urban planning","architectural compliance","lot size","building footprint","commercial real estate"] },
    ]
  },
  {
    title: 'Science',
    slug: 'science',
    description: 'Scientific precision at your fingertips. Our tools cover chemistry, physics, and engineering to help professionals and students verify complex results.',
    defaultGuidance: {
      whyItMatters: 'Science relies on reproducible and precise measurements to move from hypothesis to fact. Using standardized calculators ensures that unit conversions and complex formulas like the Arrhenius equation or stoichiometric ratios are handled without human error, which is vital for laboratory accuracy and academic integrity.',
      pitfalls: [
        'Unit Mismatch: Mixing metric and imperial units in a single calculation is the leading cause of scientific error. Always verify your input units before proceeding.',
        'Precision vs. Accuracy: Using too many significant figures can imply a level of precision that your instruments didn\'t actually provide.'
      ],
      proTip: 'Always use "Scientific Notation" for extremely large or small numbers to maintain clarity and avoid losing zeros in your manual transcriptions.'
    },
    items: [
      { name: 'Activation Energy', path: '/activation-energy', desc: 'Calculate energy needed for chemical reactions.', keywords: ["kinetics","arrhenius","catalyst","activation energy","energy barrier","reaction rate","transition state","thermodynamics","chemistry heat","reaction physics"] },
      { name: 'Actual Yield', path: '/actual-yield', desc: 'Calculate the measured amount of product.', keywords: ["lab efficiency","synthetic chemistry","production","actual yield","percent yield","theoretical max","chemical output","industrial metrics","harvest math","stoichiometry"] },
      { name: 'AFR (Air-Fuel Ratio)', path: '/afr', desc: 'Analyze combustion engine efficiency.', keywords: ["combustion","automotive","lambda","engine tuning","air fuel ratio","stoichiometry","mechanical engineering","exhaust metrics","fuel efficiency","dyno math"] },
      { name: 'Arrhenius Equation', path: '/arrhenius-equation', desc: 'Calculate reaction rate and temperature dependencies.', keywords: ["kinetics","activation energy","rate constant","arrhenius equation","reaction speed","temperature dependence","thermal chemistry","collision theory","activation math","physics"] },
      { name: 'Atom Calculator', path: '/atom', desc: 'Calculate subatomic particle counts.', keywords: ["protons","neutrons","electrons","isotope","nuclear math","subatomic particles","atomic structure","periodic table","quantum levels","particle physics"] },
      { name: 'Atom Economy', path: '/atom-economy', desc: 'Measure reaction efficiency and waste.', keywords: ["green chemistry","synthetic efficiency","waste reduction","atom economy","chemical yield","sustainability math","industrial chemistry","reaction efficiency","production metrics","environmental impact"] },
      { name: 'Atomic Mass', path: '/atomic-mass', desc: 'Calculate the mass of specific isotopes.', keywords: ["amu","mass number","molar mass","isotopes","periodic table","atomic weight","chemistry math","elemental properties","nuclide","atomic physics"] },
      { name: 'Average Atomic Mass', path: '/average-atomic-mass', desc: 'Weighted average of element isotopes.', keywords: ["abundance","isotopes","weighted average","chemistry math","atomic mass","elemental analysis","isotopic distribution","molecular calculation","stoichiometry","relative mass"] },
      { name: 'Avogadro\'s Number', path: '/avogadros-number', desc: 'Standard constant for mole calculations.', keywords: ["mole count","particles","molecules","atomic units","avogadro number","chemistry constant","scientific notation","molecular physics","standard units","stoichiometry"] },
      { name: 'Bond Order', path: '/bond-order', desc: 'Determine stability of chemical bonds.', keywords: ["molecular orbital","bonding electrons","stability","lewis structure","bond order","chemistry math","valence bond","molecular geometry","bond strength","electronic structure"] },
      { name: 'BTU Calculator', path: '/btu', desc: 'Heat energy and HVAC requirements.', keywords: ["british thermal unit","heat loss","air conditioning","heater sizing","thermal energy","joules to btu","cooling capacity","hvac engineering","heat transfer","unit conversion"] },
      { name: 'Chemical Equation Balancer', path: '/chemical-equation-balancer', desc: 'Balance stoichiometry for any reaction.', keywords: ["stoichiometry","conservation of mass","chemical math","equation balancer","atoms and charge","chemical reactions","balacing helper","molecular logic","chemistry homework","mass balance"] },
      { name: 'Chemical Name', path: '/chemical-name', desc: 'Nomenclature and formula verification.', keywords: ["nomenclature","organic chemistry","alkanes","ionic compounds","chemical naming","iupac rules","chemistry notation","molecular formula","functional groups","chemical symbols"] },
      { name: 'Density Calculator', path: '/density', desc: 'Calculate mass, volume, and density.', keywords: ["mass volume","buoyancy","material properties","specific gravity","physics math","science basics","unit converter","volume mass density","physics homework","weight density"] },
      { name: 'Dew Point', path: '/dew-point', desc: 'Calculate air moisture saturation.', keywords: ["meteorology","humidity","condensation","weather math","relative humidity","psychrometrics","air quality","moisture index","vapor pressure","dewpoint"] },
      { name: 'Effective Nuclear Charge', path: '/effective-nuclear-charge', desc: 'Z-eff calculation for valence electrons.', keywords: ["slaters rule","shielding constant","periodic trends","atomic physics","zeff math","valence electrons","nuclear pull","quantum mechanics","chemistry theory","atomic radius"] },
      { name: 'Electricity', path: '/electricity', desc: 'Energy, power, and cost math.', keywords: ["electrical engineering","kilowatt hours","power consumption","voltage","current","amperes","physics math","energy use","circuit analysis","milliampere"] },
      { name: 'Electron Configuration', path: '/electron-configuration', desc: 'Map orbital distributions of atoms.', keywords: ["spdf","orbitals","aufbau principle","hunds rule","pauli exclusion","electron configuration","quantum chemistry","subshells","electron maps","chemistry basics"] },
      { name: 'Electronegativity', path: '/electronegativity', desc: 'Pauling scale and chemical bonding tendencies.', keywords: ["pauling scale","polarity","chemical bonds","periodic trends","electronegativity","dipole math","bond nature","ionicity","chemistry theory","elemental attraction"] },
      { name: 'Empirical Formula', path: '/empirical-formula', desc: 'Smallest whole number ratio of elements.', keywords: ["simplest formula","mass analysis","chemical ratio","empirical formula","molecular weight","stoichiometry","composition math","chemistry basics","formula generator","chemical properties"] },
      { name: 'Equilibrium Constant', path: '/equilibrium-constant', desc: 'Calculate Kc for chemical systems.', keywords: ["keq","le chatelier","thermodynamics","equilibrium constant","chemical direction","products reactants","chemical stability","mass action","equilibrium law","reversible reactions"] },
      { name: 'Frequency', path: '/frequency', desc: 'Wavelength and period math.', keywords: ["physics waves","electromagnetic spectrum","hertz","wavelength","vibration","oscillation","physics homework","signal processing","wave velocity","period math"] },
      { name: 'Grams to Moles', path: '/grams-to-moles', desc: 'Quick weight-to-quantity conversion.', keywords: ["molar mass","unit conversion","stoichiometry","chemistry basics","mole calculation","gram converter","mass to mole","laboratory math","periodic table math","chemistry help"] },
      { name: 'Heat Index', path: '/heat-index', desc: 'Apparent temperature and humidity.', keywords: ["feels like","weather","meteorology","humidity","summer safety","heat wave","comfort index","apparent temp","meteorology math","outdoor safety"] },
      { name: 'Hydrogen Ion (pH)', path: '/hydrogen-ion-concentration', desc: 'Calculate pH from H+ concentration.', keywords: ["acidity","molarity","acid base","ph scale","hydrogen ion concentration","alkalinity","chemical logic","logarithm math","aqueous chemistry","ph converter"] },
      { name: 'Kp Calculator', path: '/kp', desc: 'Equilibrium constant for partial pressures.', keywords: ["partial pressure","gas equilibrium","thermodynamics","kp calculator","gas laws","equilibrium constant","barometric pressure","vapor phase","keq math","molarity conversion"] },
      { name: 'Mass Calculator', path: '/mass', desc: 'Convert and calculate object mass.', keywords: ["physics","weight vs mass","kilograms","pounds","newton conversion","mass calculation","gravity math","unit converter","object mass","density mass volume"] },
      { name: 'Molality', path: '/molality', desc: 'Moles of solute per kilogram of solvent.', keywords: ["concentration","solvent mass","colligative properties","molality","solubility","mixture math","chemistry lab","boiling point elevation","freezing point depression","solvent tools"] },
      { name: 'Molar Mass', path: '/molar-mass', desc: 'Calculate total mass per mole of compound.', keywords: ["molecular weight","g/mol","stoichiometry","formula mass","molar mass","chemistry math","gas laws","molar calculation","elemental weight","molecular analysis"] },
      { name: 'Molar Mass of Gas', path: '/molar-mass-of-gas', desc: 'Analyze gas density and pressure.', keywords: ["ideal gas law","pv nrt","gas density","molar weight gas","thermodynamics","partial pressure","gas kinetics","avogadro law","gas physics","vapor density"] },
      { name: 'Molar Ratio', path: '/molar-ratio', desc: 'Analyze proportions in chemical equations.', keywords: ["reaction ratio","coefficients","mass balance","molar ratio","stoichiometry","chemical math","mole count","formula ratio","synthetic chemistry","reactant proportions"] },
      { name: 'Molarity Calculator', path: '/molarity', desc: 'Calculate concentration solutions.', keywords: ["volumetric concentration","titration","molar solution","molarity","solute moles","chemistry math","concentration units","liquid analysis","lab prep","chemical strength"] },
      { name: 'Mole Calculator', path: '/mole', desc: 'Fundamental quantity for chemical amounts.', keywords: ["mole conversion","molar unit","chemistry standard","molecular weight","stoichiometry","chemistry tools","mass to mole","volume to mole","laboratory math","chemical units"] },
      { name: 'Mole Fraction', path: '/mole-fraction', desc: 'Ratio of moles in a mixture.', keywords: ["mixture composition","raoults law","partial pressure","mole fraction","chemistry math","solution physics","concentration ratio","gas phase","equilibrium","component analysis"] },
      { name: 'Molecular Weight', path: '/molecular-weight', desc: 'Molar mass of chemical compounds.', keywords: ["formula mass","dalton unit","chemical mass","molecular weight","atomic sum","molar weight","chemistry basic","formula analysis","elemental count","molecular tools"] },
      { name: 'Moles to Atoms', path: '/moles-to-atoms', desc: 'Convert chemical quantity to particle count.', keywords: ["avogadro number","unit conversion","mole conversion","particle math","atom count","chemistry basics","subatomic quantity","quantity of atoms","chemistry help","mole units"] },
      { name: 'Net Ionic Equation', path: '/net-ionic-equation', desc: 'Simplify reactions to active species.', keywords: ["spectator ions","precipitation","aqueous reactions","net ionic equation","chemical logic","solubility rules","dissociation","molecular equations","chemistry homework","active species"] },
      { name: 'Normality', path: '/normality', desc: 'Equivalent concentration for acid-base math.', keywords: ["acid base titration","equivalents","analytical chemistry","normality","chemical strength","normal solutions","volumetric analysis","lab tools","titration math","gram equivalents"] },
      { name: 'Ohms Law', path: '/ohms-law', desc: 'Solve for V, I, and R.', keywords: ["electronics","circuit physics","voltage","current","resistance","power law","electrical engineering","physics homework","ee math","amperage"] },
      { name: 'Percent Composition', path: '/percent-composition', desc: 'Mass percentage of each element.', keywords: ["elemental analysis","mass ratio","chemical formula","composition","percent composition","chemistry math","empirical formula","molecular weight","mixture analysis","stoichiometry"] },
      { name: 'Percent Ionic Character', path: '/percent-ionic-character', desc: 'Analyze bond polarity and types.', keywords: ["covalent bond","dipole moment","polarity","bond nature","percent ionic character","chemistry math","electronegativity","molecular physics","chemical bonding","character analysis"] },
      { name: 'Percent Yield', path: '/percent-yield', desc: 'Compare actual vs theoretical results.', keywords: ["yield analysis","theoretical vs actual","chemistry lab","percent yield","synthetic efficiency","mass balance","production metrics","chemical yield","lab stats","reaction results"] },
      { name: 'pKa Calculator', path: '/pka', desc: 'Acid dissociation constant analysis.', keywords: ["acid strength","equilibrium","titration","ka pka conversion","pka calculator","ph math","chemical stability","dissociation constant","acid base chemistry","aqueous solutions"] },
      { name: 'PPM to Molarity', path: '/ppm-to-molarity', desc: 'Convert parts per million to concentration.', keywords: ["water quantity","trace elements","molar concentration","unit conversion","parts per million","solution chemistry","environmental math","ppm converter","molarity math","solute concentration"] },
      { name: 'Rate Constant', path: '/rate-constant', desc: 'Calculate k for chemical kinetics.', keywords: ["reaction kinetics","speed","order of reaction","rate constant","velocity","time duration","reaction order","chemical motion","kinetic analysis","physics in chemistry"] },
      { name: 'Reaction Quotient', path: '/reaction-quotient', desc: 'Determine system progress toward equilibrium.', keywords: ["predicting equilibrium","direction","le chatelier","reaction quotient","q vs k","thermodynamics","chemical potential","transition state","equilibrium direction","science projection"] },
      { name: 'Resistor Calculator', path: '/resistor', desc: 'Color code and value matching.', keywords: ["electronics","color code","ohmmeter","tolerance","resistance","passive components","circuit design","resistor bands","ee math","electrical basic"] },
      { name: 'Speed Calculator', path: '/speed', desc: 'Velocity, time, and distance.', keywords: ["kinematics","physics basics","speed distance time","velocity","unit converter","average speed","motion math","physics help","displacement","rate"] },
      { name: 'Temperature', path: '/temperature-converter', desc: 'C, F, and Kelvin conversions.', keywords: ["celsius","fahrenheit","kelvin","rankine","thermodynamics","weather math","science units","heat conversion","absolute zero","temperature scale"] },
      { name: 'Force Converter', path: '/force', desc: 'Newtons, pounds, and dyne math.', keywords: ["newton conversion","mass force","pounds force","physics math","unit converter","engineering helper","force calculation","physics units","scientific notation","conversion help"] },
      { name: 'Pressure Conversion', path: '/pressure', desc: 'PSI, Bar, and Atmospheres.', keywords: ["psi to bar","pressure math","atmospheres","pascal unit","engineering help","fluid pressure","manometer math","unit converter","physics science","industrial math"] },
      { name: 'Torque Converter', path: '/torque', desc: 'Nm, ft-lbs, and in-lbs scaling.', keywords: ["lever arm force","twisting force","mechanical moment","torque math","physics helper","wrench math","rotational force","mechanical advantage","engineering mechanics","torque scale"] },
      { name: 'Inch-lbs to Nm', path: '/inch-lbs-to-nm', desc: 'Fastener torque specification shift.', keywords: ["torque conversion","small fastener","precision assembly","fastener spec","mechanical engineering","unit converter","tightening math","automotive help","mechanic tool","fastener safety"] },
      { name: 'Nm to ft-lbs', path: '/nm-to-ft-lbs', desc: 'Industrial torque unit conversion.', keywords: ["newton meters to foot pounds","nm to ft lb","automotive torque","mechanic tools","engine building math","torque conversion","industrial torque","mechanical engineering","nm converter","torque scale"] },
      { name: 'Nm to in-lbs', path: '/nm-to-in-lbs', desc: 'Precision assembly torque conversion.', keywords: ["newton meters to inch pounds","nm to in lb","precision torque","assembly math","mechanical engineering","torque conversion","industrial metrics","precision manufacturing","nm converter","torque scale"] },
      { name: 'CCF to Gallons', path: '/ccf-to-gallons', desc: 'Utilities and water billing math.', keywords: ["utility billing","ccf converter","water volume","gas billing","unit conversion","consumption math","billing help","hundred cubic feet","water meter","resource math"] },
      { name: 'CCF to Therms', path: '/ccf-to-therms', desc: 'Natural gas energy conversion.', keywords: ["natural gas energy","ccf to therm","utility billing","gas heater math","home energy audit","resource math","billing help","fuel efficiency","gas consumption","btu calculator"] },
      { name: 'mg to mL', path: '/mg-to-ml', desc: 'Liquid medication dosage math.', keywords: ["dosage math","medication math","liquid dose","nursing math","pharmacy units","conversion help","concentration","medical calculator","drug dosing","health math"] },
      { name: 'mcg to mg', path: '/mcg-to-mg', desc: 'Microgram to milligram conversion.', keywords: ["dosage math","microgram milligram","unit conversion","pharmacy units","medical math","nursing helper","medication safety","lab math","health info","unit scale"] },
      { name: 'oz to Cups', path: '/oz-to-cups', desc: 'Kitchen and volume scaling.', keywords: ["kitchen math","baking conversion","volume scaling","recipe help","fluid ounces","measuring cup","cooking units","conversion helper","home kitchen","chef math"] },
      { name: 'Gallons to Pounds', path: '/gallons-to-pounds', desc: 'Calculate weight of water and fuels.', keywords: ["weight of water","density math","fuel weight","liquid mass","unit conversion","physics helper","supply logistics","tank weight","fluid math","mass estimator"] },
      { name: 'kg to Gallons', path: '/kg-to-gallons', desc: 'Convert mass to volume for fluids.', keywords: ["kilograms to gallons","mass to volume","density math","unit conversion","fluid solver","supply logistics","industrial math","chemical volume","physics helper","conversion tool"] },
      { name: 'Pint to Pound', path: '/pint-to-pound', desc: 'Weight of various density liquids.', keywords: ["liquid weight","density math","pint to lb","grocery math","unit conversion","mass estimator","kitchen help","fluid science","conversion helper","volume math"] },
      { name: 'Volume Conversion', path: '/volume', desc: 'Liters, gallons, and cubic units.', keywords: ["liters to gallons","cubic units","volume math","geometry helper","unit converter","measurement math","fluid volume","container math","conversion tool","volume solver"] },
      { name: 'Theoretical Yield', path: '/theoretical-yield', desc: 'Calculate maximum possible product.', keywords: ["limiting reactant","stoichiometry","mass balance","theoretical yield","max product","chemical yield","production projection","molar calculation","reaction efficiency","stoichiometric limit"] },
      { name: 'Voltage Drop', path: '/voltage-drop', desc: 'Estimate electrical line loss.', keywords: ["electrical loss","wire sizing","voltage math","resistance","electrical engineering","circuit map","cable length","ee helper","amperage math","power loss"] },
    ]
  },
  {
    title: 'Everyday Tools',
    slug: 'everyday',
    description: 'Utilities for the modern lifestyle. Secure your digital world, manage your time, or handle small mathematical tasks in your daily routine.',
    defaultGuidance: {
      whyItMatters: 'Small math tasks often lead to the biggest lifestyle optimizations. Whether it\'s calculating the unit price of groceries or generating a secure password, these tools eliminate the "mental load" of daily life, allowing you to focus on executing your goals rather than calculating them.',
      pitfalls: [
        'Ignoring the "Bulk Trap": Just because an item is in a larger container doesn\'t mean it is cheaper per unit. Always check the unit price.',
        'Password Fatigue: Relying on variations of the same password across multiple sites makes you vulnerable. Use a generator and a manager for true security.'
      ],
      proTip: 'For any recurring task (like shopping or password resets), bookmark the specific calculator to turn a 5-minute headache into a 10-second confirmation.'
    },
    items: [
      { name: 'Time Calculator', path: '/time', desc: 'Durations and time additions.', keywords: ["general time","clock math","horology","time calculator","arithmetic","time units","universal clock","time conversion","timing tool","precision math"] },
      { name: 'Appliance Depreciation', path: '/appliance-depreciation', desc: 'Track value loss of home equipment.', keywords: ["value loss","appliance worth","depreciation math","accounting help","asset tracking","home equipment","finance helper","equipment life","resale value","finance basics"] },
      { name: 'Appliance Wattage', path: '/appliance-wattage', desc: 'Check power consumption by device.', keywords: ["power usage","appliance efficiency","wattage math","electricity cost","meter tracking","home energy","energy audit","appliance list","utility help","energy star"] },
      { name: 'Back to School', path: '/back-to-school', desc: 'Budget for the academic year.', keywords: ["school budget","education cost","supplies list","academic year","finance helper","budget estimator","student life","back to school prep","expense tracking","education planning"] },
      { name: 'Balloon Arch', path: '/balloon-arch', desc: 'Estimate supplies for event decor.', keywords: ["party decor","balloon count","event supplies","balloon arch dimensions","party planning","event design","balloon math","decoration cost","diy decor","party helper"] },
      { name: 'Bathroom Mirror Size', path: '/bathroom-mirror-size', desc: 'Calculate dimensions for fit and style.', keywords: ["mirror dimensions","room layout","interior design","bathroom reno","vanity mirror","reflection area","design math","mirror placement","home improvement","aesthetic help"] },
      { name: 'Bean Bag Filling', path: '/bean-bag-filling', desc: 'Estimate volume for comfort seating.', keywords: ["stuffing volume","foam pellets","filling math","comfort seating","diy furniture","cushion volume","interior design","material estimator","beanbag repair","furniture help"] },
      { name: 'Bed Size', path: '/bed-size', desc: 'Dimensions for mattress and frames.', keywords: ["mattress dimensions","bed frame size","bedroom layout","bedding math","interior design","furniture sizing","king queen twin","room planning","sleeping space","bed dimensions"] },
      { name: 'Blind Size', path: '/blind-size', desc: 'Measure for custom window treatments.', keywords: ["window treatment","blind dimensions","interior design","home reno","privacy math","shade sizing","measurement math","fitting help","window layout","window cover"] },
      { name: 'Cord of Wood', path: '/cord-of-wood', desc: 'Calculate volume for heating fuel.', keywords: ["firewood volume","heating fuel","wood pile","rick of wood","winter prep","energy budget","fuel storage","wood burning","volume math","firewood help"] },
      { name: 'Data Usage', path: '/data-usage', desc: 'Estimate mobile and home bandwidth needs.', keywords: ["internet bandwidth","gigabytes","streaming math","data cap","mobile data","bandwidth estimator","online usage","data plan","web tracking","connectivity help"] },
      { name: 'Dilution Ratio', path: '/dilution-ratio', desc: 'Mix chemicals and cleaners safely.', keywords: ["chemical mix","concentration math","solution ratio","dilution help","cleaning math","mixing safety","solvent solute","ratio solver","lab math","diy cleaning"] },
      { name: 'Electricity Cost', path: '/electricity-cost', desc: 'Calculate monthly utility expenses.', keywords: ["bill estimator","utility budget","kwh cost","electricity math","home finance","power usage","energy budget","billing help","electricity tracker","money math"] },
      { name: 'Electricity Single Use', path: '/electricity-cost-single-usage', desc: 'Cost to run one device for one task.', keywords: ["device cost","single use energy","appliance run cost","energy audit","electricity math","utility tracker","energy efficiency","daily usage","power cost","task energy"] },
      { name: 'RMS to Watts', path: '/rms-to-watts', desc: 'Calculate audio amplifier power levels.', keywords: ["audio power","amplifier math","rms wattage","speaker matching","sound engineering","audio fidelity","electronic math","power rating","hi-fi math","sound system help"] },
      { name: 'EUI Calculator', path: '/eui', desc: 'Energy Use Intensity for buildings.', keywords: ["energy intensity","building efficiency","kbtu per sq ft","utility audit","home performance","eui math","energy usage","commercial building","green building","efficiency metric"] },
      { name: 'Gas vs Electric Dryer', path: '/gas-vs-electric-dryer', desc: 'Compare long-term appliance costs.', keywords: ["laundry cost","dryer efficiency","gas vs electric","utility math","energy savings","home budget","appliance comparison","cost per load","electricity vs gas","household math"] },
      { name: 'Generator Wattage', path: '/generator-wattage', desc: 'Size your backup power needs.', keywords: ["peak power","generator sizing","backup electricity","surge wattage","home safety","blackout prep","starting watts","running watts","utility backup","power capacity"] },
      { name: 'Grocery Calculator', path: '/grocery', desc: 'Build and budget your shopping list.', keywords: ["shopping budget","grocery bill","meal planning","spending tracker","supermarket math","pantry inventory","budgeting helper","food cost","grocery list","finance basics"] },
      { name: 'Hot Tub Cost', path: '/hot-tub-cost', desc: 'Calculate heating and maintenance expenses.', keywords: ["spa heating","water maintenance","utility cost","hot tub energy","home luxury","heating math","water volume","electricity bill","maintenance budget","pool help"] },
      { name: 'House Cleaning Cost', path: '/house-cleaning-cost', desc: 'Estimate hourly and service-based fees.', keywords: ["cleaning fee","maid service","hourly rate","home maintenance","service budget","cleaning estimator","room count","sq ft cleaning","housework math","service fee"] },
      { name: 'How Many Tables', path: '/how-many-tables', desc: 'Optimize event floor planning.', keywords: ["event planning","floor layout","seating chart","wedding math","party arrangement","room capacity","table count","hospitality math","venue layout","event design"] },
      { name: 'LED Savings', path: '/led-savings', desc: 'Calculate ROI for lighting upgrades.', keywords: ["lighting upgrade","energy savings","roi math","bulb efficiency","electricity bill","led conversion","investment math","home efficiency","eco friendly","lighting cost"] },
      { name: 'Lighting Calculator', path: '/lighting', desc: 'Calculate required brightness for rooms.', keywords: ["footcandles","lux calculation","illumination math","interior design","brightness level","led count","lighting design","room lumens","architectural lighting","optics math"] },
      { name: 'Lumens to Watts', path: '/lumens-to-watts', desc: 'Convert brightness to power usage.', keywords: ["bulb brightness","power conversion","efficiency math","led wattage","incandescent lumens","lighting help","energy usage","unit converter","lumen to watt","electrical math"] },
      { name: 'Microwave Wattage', path: '/microwave-wattage-converter', desc: 'Adjust cooking times by power level.', keywords: ["cooking times","microwave power","power level converter","kitchen math","heating adjust","food prep","wattage conversion","cooking helper","kitchen tips","microwave help"] },
      { name: 'Period Products Cost', path: '/period-products-cost', desc: 'Track lifetime and annual expenses.', keywords: ["sanitary products","menstrual math","lifetime cost","women health finance","budgeting helper","personal care","expense tracker","period math","health budget","personal finance"] },
      { name: 'Pool Salt', path: '/pool-salt', desc: 'Calculate ppm and supply needs.', keywords: ["salt chlorination","ppm math","swimming pool","salt volume","water chemistry","pool maintenance","bag count","chemistry helper","chlorine level","pool safety"] },
      { name: 'Quit Smoking Save', path: '/quit-smoking-and-save', desc: 'Calculate financial gains from quitting.', keywords: ["tobacco savings","health finance","quitting gains","habit tracker","budgeting helper","smoke free wealth","quit smoking info","money saver","health impact","personal finance"] },
      { name: 'Recessed Lighting', path: '/recessed-lighting', desc: 'Spacing and count for ceiling lights.', keywords: ["can lights","ceiling layout","lighting spacing","interior design","recessed math","room illumination","construction help","electrical layout","home reno","architectural math"] },
      { name: 'Roll Length', path: '/roll-length', desc: 'Calculate material remaining on spools.', keywords: ["remaining material","spool volume","diameter math","material tracking","industrial math","yardage remaining","tape length","wire roll","measurement helper","inventory math"] },
      { name: 'Rug Size', path: '/rug-size', desc: 'Select dimensions for room layouts.', keywords: ["area rug size","room layout","interior design","carpet dimensions","furniture mapping","home decor","rug placement","design math","floor planning","aesthetic help"] },
      { name: 'Sofa Size', path: '/sofa-size', desc: 'Measure for living room fit.', keywords: ["couch dimensions","living room layout","interior design","furniture sizing","seating area","home decor","sofa fit","room planning","comfort math","furniture layout"] },
      { name: 'Unit Price', path: '/unit-price', desc: 'Compare supermarket value by volume.', keywords: ["price per oz","supermarket value","grocery math","spending helper","comparison shopping","saving money","bulk value","price per unit","retail math","value estimator"] },
      { name: 'Password Generator', path: '/password-generator', desc: 'Secure random credentials.', keywords: ["random strings","security keys","cypher math","password entropy","privacy tool","credentials","security basics","unique pass","safe login","cyber safety"] },
      { name: 'Word Counter', path: '/word-counter', desc: 'Count chars, words, reading time.', keywords: ["character count","reading speed","writing tool","manuscript math","editor helper","text analysis","blogging math","word frequency","content tool","counting helper"] },
      { name: 'Px to Em', path: '/px-to-em', desc: 'Convert screen pixels to typography units.', keywords: ["typography math","css units","web design","browser defaults","font scaling","precision design","unit converter","em to px","frontend help","ui design"] },
      { name: 'Weird Units', path: '/weird-units', desc: 'Convert unusual measures like attoparsecs or cubits.', keywords: ["funny conversion","science trivia","unusual units","educational math","quirky units","measurement history","math fun","unit converter","attoparsecs","historical units"] },
      { name: 'Hours Calculator', path: '/hours', desc: 'Daily and weekly work tracking.', keywords: ["work clock","timesheet","duration tracking","hours calculator","payroll math","study hours","billable time","time log","productivity math","employment tools"] },
      { name: 'Amazon FBA', path: '/amazon-fba', desc: 'E-commerce seller profit tools.', keywords: ["seller profit","amazon math","fulfillment fees","e-commerce math","dropshipping roi","margin estimator","inventory math","fba fees","online retail","business math"] },
      { name: 'Percentage Off', path: '/percentage-off', desc: 'Quick holiday deal math.', keywords: ["sale price","discount math","holiday shopping","percentage helper","money saver","retail math","spending tracker","discount percentage","shopping help","savings estimator"] },
      { name: 'Height Calculator', path: '/height', desc: 'Convert and predict stature.', keywords: ["stature converter","cm to feet","prediction math","biological data","anthropometry","measurement math","height conversion","human scale","unit converter","growth tracker"] },
      { name: 'Bra Size', path: '/bra-size', desc: 'Measure for comfort and support.', keywords: ["fitting math","cup sizing","measurement help","lingerie math","comfort fit","sizing tool","support guide","retail help","apparel math","clothing sizing"] },
      { name: 'Dice Roller', path: '/dice-roller', desc: 'Virtual dice for tabletop games.', keywords: ["rng math","probability","tabletop games","rpg tool","random numbers","dnd help","math games","dice simulation","chance math","gaming helper"] },
      { name: 'GDP Calculator', path: '/gdp', desc: 'Economic output analysis.', keywords: ["economic output","macroeconomics","national wealth","gdp calculation","finance math","economic growth","purchasing power","global finance","economic indicator","market analysis"] },
      { name: 'Tip Calculator', path: '/tip', desc: 'Split the bill and gratuity.', keywords: ["gratuity math","bill splitting","service tip","hospitality help","group dinner","restaurant math","gratuity helper","finance basics","money math","dining help"] },
      { name: 'Discount Calculator', path: '/discount', desc: 'Retail savings and final prices.', keywords: ["on sale","clearance","retail math","savings tracker","price drop","shopping logic","final price","percent off","money saver","deal finder"] },
      { name: 'IP Subnet', path: '/ip-subnet', desc: 'Network mask and address math.', keywords: ["network mask","cidr math","ipv4 addresses","netmask solver","it infrastructure","network design","subnetting help","ip routing","networking basics","binary mask"] },
      { name: 'Gratuity Calculator', path: '/gratuity', desc: 'Calculate correct tips for service.', keywords: ["service tip","gratuity math","bill splitting","restaurant helper","hospitality math","tipping guide","percent tip","dining math","financial etiquette","service fee"] },
      { name: 'Binary Converter', path: '/binary', desc: 'Convert text and numbers to computer code.', keywords: ["base 2 math","binary logic","logic gates","digital conversion","bit stacking","computer science","programming foundations","binary code","systems design","low level math"] },
      { name: 'Roman Numerals', path: '/roman-numerals', desc: 'Classical numbering to standard integers.', keywords: ["i v x l c d m","classical math","numeral conversion","history tech","numeral system","integer to roman","latin numbers","classical numbering","math helper","encoding"] },
      { name: 'Leet-speak', path: '/leet-speak', desc: 'Translate text into hacker slang.', keywords: ["l33t speak","leet language","hacker slang","text to code","gaming slang","internet culture","encoding fun","haxor translator","leet converter","online language"] },
      { name: 'Number to Billion', path: '/number-to-billion', desc: 'Convert large integers to word scale.', keywords: ["digits to billion","number formatter","large number readability","billion scale","mathematical formatting","economics math","budget presentation","finance scale","market analytics","wealth scale"] },
      { name: 'Million to Lakh', path: '/million-to-lakh', desc: 'International quantity scaling.', keywords: ["million to lakh converter","western to indian numbering","global to south asian scale","numerical conversion","currency units india","regional numbers","numeric scale","international finance india","million lakh transformation","indian numerals"] },
      { name: 'Crore to Million', path: '/crore-to-million', desc: 'Convert Indian numbering to standard millions.', keywords: ["crore to million converter","indian to western numbering","south asian to global scale","numerical conversion","currency units conversion","market cap conversion","large figures global","crore million scale","international numeric conversion","numeric transformation"] },
      { name: 'Billion to Trillion', path: '/billion-to-trillion', desc: 'Scale factors for national economies.', keywords: ["financial scale","huge numbers","economics math","billion vs trillion","large figures","government debt scale","macroeconomics","number scale","wealth conversion","big data scale"] },
      { name: 'Cents to Euros', path: '/cents-to-euros', desc: 'Small-denomination currency conversion.', keywords: ["cent to euro converter","currency units","fractional currency","monetary conversion","eu math","travel finance","currency scale","money math","euro conversion","decimal currency"] },
      { name: 'Coordinates', path: '/coordinates-converter', desc: 'Convert GPS to decimal or DMS.', keywords: ["gps conversion","decimal degrees","location math","gis tools","geography help","dms converter","coordinate systems","navigation math","mapping tools","lat long"] },
      { name: 'Bath vs Shower', path: '/bath-vs-shower', desc: 'Compare water and energy usage.', keywords: ["water conservation","energy savings","shower vs bath","eco friendly home","water usage","utility costs","home efficiency"] },
      { name: 'Beauty Products', path: '/beauty-products', desc: 'Track makeup and skincare shelf life.', keywords: ["cosmetics shelf life","beauty budget","product expiration","makeup usage","skincare routine","beauty inventory","personal care"] },
      { name: 'Coronavirus Mask', path: '/coronavirus-mask', desc: 'Analyze mask efficiency and lifespan.', keywords: ["mask efficiency","covid-19 safety","face mask life","protection levels","health safety","respirator math","hygiene"] },
      { name: 'Hair Growth', path: '/hair-growth', desc: 'Project hair length and grooming schedules.', keywords: ["hair length","growth rate","shaving frequency","barber scheduling","grooming","hair care","trichology"] },
      { name: 'Shower Cost', path: '/shower-cost', desc: 'Calculate the true price of your hygiene routine.', keywords: ["water bill","heating cost","shower duration","utility math","energy bill","showering expenses","hot water cost"] },
      { name: 'Sunscreen', path: '/sunscreen', desc: 'Calculate SPF coverage and UV protection.', keywords: ["spf","uv protection","skin safety","sunburn prevention","sunscreen application","beach day","skincare"] },
      { name: 'Toilet Paper', path: '/toilet-paper', desc: 'Project how long your household supply will last.', keywords: ["household supplies","tp usage","supply duration","quarantine supplies","grocery planning","bathroom math"] },
      { name: 'Toothpaste', path: '/toothpaste', desc: 'Track dental hygiene supply duration.', keywords: ["hygiene supplies","dental care","tube duration","brushing frequency","oral health","toothpaste usage","supply tracking"] },
    ]
  },
  {
    title: 'Automotive',
    slug: 'automotive',
    description: 'Keep your vehicle running efficiently. Manage fuel budgets, track depreciation, and analyze the true cost of car ownership.',
    defaultGuidance: {
      whyItMatters: 'Vehicles are often a person\'s second largest expense after housing. Understanding the true cost of ownership—including depreciation and fuel efficiency—allows you to decide when it\'s cheaper to repair an old car versus buying a new one.',
      pitfalls: [
        'Ignoring "Hidden" Maintenance: Calculating only gas costs without factoring in tires, oil, and depreciation gives a skewed view of your commute costs.',
        'Over-Estimating "Fuel Gains": Spending $30,000 to save $50 a month in gas often has an ROI of decades. Calculate the payback period before upgrading to a hybrid/EV.'
      ],
      proTip: 'Track your MPG over time. A sudden drop in efficiency is often the first sign of a mechanical issue that hasn\'t yet triggered a dashboard warning light.'
    },
    items: [
      { name: 'Car Refinance', path: '/car-refinance', desc: 'Check if new auto rates save you money.', keywords: ["auto loan rates","refinance savings","car payment","loan interest","debt management","auto finance","saving money","interest rates","refinance math","loan offset"] },
      { name: 'Car Depreciation', path: '/car-depreciation', desc: 'Vehicle value loss over time.', keywords: ["vehicle value","resale value","car depreciation math","auto investment","value loss","car worth","trade in value","asset tracking","auto sales","vehicle life"] },
      { name: '0-60 Time', path: '/0-60-time', desc: 'Estimate vehicle acceleration performance.', keywords: ["acceleration math","sprint time","drag racing","performance metrics","0 to 60 mph","traction math","vehicle speed","quarter mile","racing helper","automotive tech"] },
      { name: 'Boat Speed', path: '/boat-speed', desc: 'Calculate nautical velocity and performance.', keywords: ["nautical speed","knots to mph","boat performance","hull speed","maritime math","naval architecture","boating helper","water velocity","marine engineering","nautical units"] },
      { name: 'Boost Horsepower', path: '/boost-horsepower', desc: 'Estimate gains from forced induction.', keywords: ["turbo gains","supercharger math","forced induction","horsepower gain","tuning math","engine performance","boost pressure","modified car","power adder","automotive engineering"] },
      { name: 'BSFC Calculator', path: '/bsfc', desc: 'Brake Specific Fuel Consumption analysis.', keywords: ["fuel efficiency engine","brake specific fuel","thermodynamics","combustion math","engine engineering","specific fuel consumption","thermal efficiency","mechanical engineering","dyno math","energy conversion"] },
      { name: 'Car Lease', path: '/car-lease', desc: 'Auto leasing payment breakdown.', keywords: ["monthly lease","auto leasing","residual value","money factor","lease payment math","car finance","lease vs buy","contract terminology","auto budgeting","vehicle finance"] },
      { name: 'Carpooling Calculator', path: '/carpooling', desc: 'Split commute costs and reduce footprint.', keywords: ["gas split","commuting cost","carpool math","carbon footprint","ride share costs","eco friendly","commute savings","transportation budget","shared travel","ride sharing"] },
      { name: 'Commute Calculator', path: '/commute', desc: 'Analyze time and money spent on travel.', keywords: ["travel time","commute cost","transportation math","work travel","annual commute","time sink","distance math","travel budget","commuter life","efficiency math"] },
      { name: 'Compression Ratio', path: '/compression-ratio', desc: 'Calculate static engine compression.', keywords: ["static compression","engine math","cylinder volume","stroke and bore","combustion chamber","compression ratio","engine building","automotive engineering","piston math","performance tuning"] },
      { name: 'Compression to PSI', path: '/compression-ratio-to-psi', desc: 'Convert CR to estimated boost pressure.', keywords: ["boost math","dynamic compression","psi to cr","forced induction","engine safety","tuning helper","detonation risk","combustion pressure","automotive math","performance tech"] },
      { name: 'Crosswind Calculator', path: '/crosswind', desc: 'Aviation and driving wind component math.', keywords: ["wind components","aviation math","pilot tool","safe landing","driving safety","crosswind speed","navigational math","weather components","aerodynamics","flight planning"] },
      { name: 'Drive Time', path: '/drive-time', desc: 'Estimate duration based on distance and speed.', keywords: ["travel duration","eta math","distance speed time","road trip time","driving duration","navigation math","average speed","trip estimator","time calculation","commute planner"] },
      { name: 'Engine Horsepower', path: '/engine-horsepower', desc: 'Torque and RPM performance metrics.', keywords: ["crank horsepower","torque rpm math","engine output","performance metrics","dyno solver","power band","automotive engineering","mechanical energy","hp calculation","engine test"] },
      { name: 'Engine Hours to Miles', path: '/engine-hours-to-miles', desc: 'Convert industrial engine time to mileage.', keywords: ["industrial hours","generator maintenance","vehicle mileage","hour meter","maintenance tracking","conversion math","fleet management","engine life","industrial mileage","equipment tracking"] },
      { name: 'Flight Radiation', path: '/flight-radiation', desc: 'Estimate cosmic radiation exposure during flight.', keywords: ["cosmic radiation","flight safety","radiation exposure","aviation health","altitude radiation","long haul health","millisieverts","science math","travel radiation","cosmic rays"] },
      { name: 'Fuel Cost', path: '/fuel-cost', desc: 'Price per mile and trip totals.', keywords: ["trip finance","gas cost per mile","travel budget","fuel price","trip estimator","road trip math","commuting cost","fuel economy","vehicle expense","money tracker"] },
      { name: 'Fuel Pump Size', path: '/fuel-pump', desc: 'Calculate required LPH for engine builds.', keywords: ["fuel flow","injector sizing","lph math","fuel system","engine fueling","tuning math","automotive plumbing","performance parts","fuel pressure","flow rate"] },
      { name: 'Gas Calculator', path: '/gas', desc: 'Estimate fuel volume and cost for trips.', keywords: ["gas budget","trip fuel","fuel volume","price per gallon","commute finance","travel savings","petrol math","fill up cost","fuel tracking","driving budget"] },
      { name: 'GVWR Calculator', path: '/gvwr', desc: 'Gross Vehicle Weight Rating safety math.', keywords: ["vehicle weight","towing safety","cargo capacity","hauling math","gvwr limits","truck safety","payload math","axle load","safety compliance","trailer math"] },
      { name: 'Horsepower', path: '/horsepower', desc: 'Calculate mechanical and electrical HP.', keywords: ["power unit","mechanical hp","electrical hp","metric horsepower","power conversion","physics math","engineering units","output calculation","energy physics","hp solver"] },
      { name: 'Miles per Year', path: '/miles-per-year', desc: 'Average distance driven over 12 months.', keywords: ["annual distance","travel trends","car usage","distance math","mileage tracking","lease limits","vehicle history","average driving","travel log","mileage estimator"] },
      { name: 'Miles to Dollars', path: '/miles-to-dollars', desc: 'Convert travel distance to financial cost.', keywords: ["cost of travel","travel finance","reimbursement math","business travel","driving cost","expense tracker","mileage rate","per mile cost","tax deduction","financial logistics"] },
      { name: 'MPG Calculator', path: '/mpg', desc: 'Calculate fuel efficiency trends.', keywords: ["fuel economy","gas efficiency","mpg math","fuel tracking","l/100km","driving habits","efficiency trends","economy calculator","petrol usage","green driving"] },
      { name: 'Nautical Mile', path: '/nautical-mile', desc: 'Convert between nautical and statute miles.', keywords: ["sea travel","maritime units","nautical miles","leg distance","navigation math","maritime conversion","shipping distance","naval units","mapping math","distance units"] },
      { name: 'Road Trip Cost', path: '/road-trip-cost', desc: 'Distance and fuel price planning.', keywords: ["trip planning","vacation budget","road trip math","gas and hotel","itinerary finance","travel expenses","travel tracker","trip estimator","driving budget","money math"] },
      { name: 'RPM Calculator', path: '/rpm', desc: 'Rotations per minute for gears and engines.', keywords: ["rotational speed","engine rpm","gearing math","mechanical engineering","tachometer","pulley math","physics vibrations","timing math","angular velocity","rpm solver"] },
      { name: 'Speedometer Gear', path: '/speedometer-gear', desc: 'Calibrate speedo for tire or gear changes.', keywords: ["tire size change","speedo calibration","gearing gear","instrument cluster","tuning math","automotive repair","tire diameter","speedo error","gearing calculator","mechanical adjustment"] },
      { name: 'Tesla Charging Cost', path: '/tesla-charging-cost', desc: 'Estimate EV recharge expenses.', keywords: ["ev energy","tesla charger","kwh to miles","supercharger cost","electric car math","ev savings","energy efficiency","charging time","tesla budget","electric utility"] },
      { name: 'Ticket Optimizer', path: '/ticket-optimizer', desc: 'Strategic travel and event booking math.', keywords: ["event pricing","booking math","seat optimization","travel arbitrage","ticket arbitrage","dynamic pricing","secondary market","event budget","strategic booking","money math"] },
      { name: 'Tire Size', path: '/tire-size', desc: 'Diameter and speedo adjustments.', keywords: ["tire swap","aspect ratio","sidewall height","tire diameter","speedo adjustment","wheel fitment","tire comparison","automotive math","tire geometry","wheel math"] },
      { name: 'Traffic Density', path: '/traffic-density', desc: 'Calculate vehicle flow and congestion levels.', keywords: ["vehicle flow","congestion index","civil engineering","urban planning","traffic math","vehicles per mile","commute quality","transportation engineering","road capacity","flow analysis"] },
      { name: 'Turbo Size', path: '/turbo-size', desc: 'Match turbochargers to engine displacement.', keywords: ["turbocharger choice","displacement math","forced induction","engine air","cfm for turbo","automotive engineering","performance tuning","boost math","turbo mapping","induction helper"] },
      { name: 'Vehicle Tax', path: '/vehicle-tax', desc: 'Sales tax and registration costs.', keywords: ["registration fee","sales tax car","ad valorem","vehicle finance","car purchase","title fee","tax calculation","auto budgeting","government fees","money math"] },
      { name: 'Wheel Horsepower', path: '/wheel-horsepower', desc: 'Calculate true power at the wheels (WHP).', keywords: ["true power","wheel hp","drivetrain factor","dyno metrics","power to ground","tuning math","automotive engineering","whp vs bhp","performance testing","vehicle dyno"] },
      { name: 'Wheel Offset', path: '/wheel-offset', desc: 'Calculate fitment for custom rims.', keywords: ["rim fitment","backspacing","wheel position","offset math","stance math","automotive design","wheel clearance","rim offset","custom wheels","fitment solver"] },
      { name: 'Winch Size', path: '/winch-size', desc: 'Determine proper recovery pull capacity.', keywords: ["recovery gear","pulling capacity","offroad safety","winch rating","towing math","vehicle weight","recovery force","winching physics","offroad utility","mechanical advantage"] },
      { name: 'Windsock Calculator', path: '/windsock', desc: 'Interpret wind speed from visual indicators.', keywords: ["wind speed","visual indicators","knots from sock","aviation math","meteorology","weather safety","flight planning","wind direction","aerodynamics","pilot tool"] },
    ]
  },
  {
    title: 'Health & Fitness',
    slug: 'health',
    description: 'Monitor your physical benchmarks and nutritional health with precision. Our suite of clinical and fitness tools helps you understand your metabolism and stay on track with your body goals.',
    defaultGuidance: {
      whyItMatters: 'Health metrics provide an objective snapshot of your biological status. While numbers like BMI or body fat percentage aren\'t the only indicators of wellness, they help ground your fitness journey in data, allowing for adjustments in training and nutrition that are based on measurable outcomes rather than guesswork.',
      pitfalls: [
        'Ignoring Trend Over Time: A single measurement (like a high weight morning) is often just water retention. Always look at the 7-day or 30-day average to see real progress.',
        'Over-Reliance on One Index: BMI, for example, can be misleading for athletes with high muscle mass. Always combine multiple metrics (like waist-to-height ratio) for a fuller picture.'
      ],
      proTip: 'For the most accurate metabolism tracking, take measurements first thing in the morning on an empty stomach to minimize variables like hydration levels or recent meals.'
    },
    items: [
      { name: 'Added Sugar Intake', path: '/added-sugar-intake', desc: 'Calculate recommended maximum daily sugar.', keywords: ["dietary sugar","health nutrition","glucose trends","daily sugar limit","hidden sugar","diet planning","carbohydrate math","wellness tracker","metabolic health","nutrition facts"] },
      { name: 'Arm Body Fat', path: '/arm-body-fat', desc: 'Analyze upper body composition.', keywords: ["arm fat","triceps skinfold","biceps fat","upper body composition","limb fat percentage","body fat distribution","caliper test","arm circumference","muscle vs fat","fitness measurement","body fat calculator","localized fat","arm toning","body metrics"] },
      { name: 'BAC Calculator', path: '/bac', desc: 'Estimate Blood Alcohol Concentration.', keywords: ["blood alcohol content","drunk calculator","alcohol level","sobriety test","drinking limit","impaired driving","intoxication level","alcohol metabolism","widmark formula","booze level","wine consumption","beer intake","spirit level","safety calculator"] },
      { name: 'ABSI Calculator', path: '/absi', desc: 'Body Shape Index for mortality risk.', keywords: ["a body shape index","absi","mortality risk","abdominal fat","waist circumference health","body shape health","visceral fat","health risk assessment","metabolic risk","body metrics","longevity calculator","clinical health","central obesity","risk indicator"] },
      { name: 'BAI Calculator', path: '/bai', desc: 'Body Adiposity Index for fat percentage.', keywords: ["body adiposity index","bai","body fat estimation","fat percentage","hip circumference","body fat alternative","composition math","adiposity","health metrics","body fat index","bmi alternative","physical health","fitness tracking","body mass","fat accumulation"] },
      { name: 'Body Frame Size', path: '/body-frame-size', desc: 'Determine bone structure category.', keywords: ["bone structure","frame size","wrist circumference","elbow breadth","small frame","medium frame","large frame","body proportions","skeletal structure","body composition","anthropometry","body build","physique type","bone health"] },
      { name: 'Body Shape', path: '/body-shape', desc: 'Identify your silhouette type.', keywords: ["hourglass","pear shape","apple shape","rectangle body","inverted triangle","silhouette analysis","body measurements","fashion fit","styling guide","physique type","female body shape","male body shape","waist hip ratio","bust waist hip"] },
      { name: 'BRI Calculator', path: '/bri', desc: 'Body Roundness Index for health tracking.', keywords: ["body roundness index","bri","metabolic health","waist to height","physical fitness","body shape index","obesity risk","cardiovascular health","body proportions","health indicator","abdominal fat","visceral wellness","bri vs bmi"] },
      { name: 'BSA Calculator', path: '/bsa', desc: 'Body Surface Area for clinical dosing.', keywords: ["body surface area","bsa","clinical pharmacology","medical dosing","drug dose calculation","oncology math","surface area","burn assessment","renal function","cardiac output","physics medicine","du bois formula","mosteller formula"] },
      { name: 'FFMI Calculator', path: '/ffmi', desc: 'Fat-Free Mass Index for muscularity.', keywords: ["fat free mass index","ffmi","muscularity","natural vs enhanced","bodybuilding math","lean muscle index","muscle mass","athletic performance","fat free weight","physique assessment","genetic potential","fitness modeling","lean body mass"] },
      { name: 'Ponderal Index', path: '/ponderal-index', desc: 'Corpulence index for body proportions.', keywords: ["ponderal index","corpulence index","rohrer index","body proportions","baby health","neonatal assessment","height weight ratio","body metrics","physical health","physique analysis","infant growth","pediatric assessment","body proportions"] },
      { name: 'RFM Calculator', path: '/rfm', desc: 'Relative Fat Mass for body composition.', keywords: ["relative fat mass","rfm","body fat estimation","bmi alternative","waist height ratio","fat percentage","composition analysis","health metrics","body fat index","metabolic health","obesity tracking","physical fitness","body metrics"] },
      { name: 'Skinfold Body Fat', path: '/skinfold-body-fat', desc: 'Estimate fat using caliper measurements.', keywords: ["calipers","skinfold test","body fat calipers","fitness assessment","subcutaneous fat","jackson pollock","multi site test","pinch test","body fat measurement","composition analysis","personal trainer tools","fitness math"] },
      { name: 'Waist to Height', path: '/waist-to-height', desc: 'A better indicator of metabolic risk.', keywords: ["waist to height ratio","whtr","metabolic risk","heart health","abdominal fat","visceral health","bmi alternative","health indicator","waistline","body proportions","cardiovascular risk","physical fitness"] },
      { name: 'BMI for Kids', path: '/bmi-kids', desc: 'Age-specific BMI for children.', keywords: ["pediatric bmi","child health","growth charts","bmi percentile","kids weight","adolescent health","child obesity","school health","parenting tools","pediatric assessment","growth tracking","child development"] },
      { name: 'BMI for Seniors', path: '/bmi-geriatric', desc: 'Weighted BMI standards for older adults.', keywords: ["geriatric bmi","senior health","older adult weight","elderly health","aging well","bmi for over 65","senior nutrition","gerontology","health assessment seniors","body mass index older","longevity health"] },
      { name: 'BEE Calculator', path: '/bee', desc: 'Basal Energy Expenditure analysis.', keywords: ["basal energy expenditure","bee","metabolic rate","harris benedict","energy physics","resting calories","biological fuel","human metabolism","energy budget","calorie needs","clinical nutrition","dietetics"] },
      { 
        name: 'BMI Calculator', 
        path: '/bmi', 
        desc: 'Body Mass Index for adults.', 
        guidance: {
          whyItMatters: 'BMI provides a quick, standardized way to screen for weight categories that may lead to health problems. It\'s a reliable starting point for discussions with a healthcare provider about overall wellness.',
          pitfalls: [
            'Muscle Mass Bias: BMI doesn\'t distinguish between muscle and fat. Highly muscular individuals may be classified as "overweight" despite having low body fat.',
            'Distribution Ignored: BMI doesn\'t account for where fat is stored. Abdominal fat is generally more systemically inflammatory than fat stored in the hips or thighs.'
          ],
          proTip: 'Pair your BMI result with a waist-to-height ratio measurement for a more accurate and comprehensive picture of your metabolic health risk.',
        keywords: ["body mass index","bmi","weight health","obesity chart","underweight","overweight","healthy weight","height weight ratio","body metrics","fitness assessment","medical weight","who standards","cdc standards"]
      },
        keywords: ['body mass index', 'bmi', 'weight health', 'obesity chart', 'underweight', 'overweight', 'healthy weight', 'height weight ratio', 'body metrics', 'fitness assessment', 'medical weight', 'who standards', 'cdc standards'] 
      },
      { name: 'BMR (Mifflin St Jeor)', path: '/bmr', desc: 'Basal Metabolic Rate formula.', keywords: ["basal metabolic rate","bmr","mifflin st jeor","calorie burns","metabolism","resting energy","weight loss maths","daily calories","metabolic engine","diet math","calorie tracking","energy expenditure"] },
      { name: 'Body Fat Calculator', path: '/body-fat', desc: 'Estimate body fat percentage.', keywords: ["fat percentage","body fat","lean mass","subcutaneous fat","visceral fat","composition analysis","navy method","bmi vs body fat","weight loss tracking","muscle mass","adiposity","fitness goals","body sculpting"] },
      { name: 'Face Shape', path: '/face-shape', desc: 'Identify facial structure for styling.', keywords: ["face structure","oval face","round face","heart face","styling guide","hairstyles for face shape","contouring","eyeglasses fit","facial features","beauty tips","physique type","make up help"] },
      { name: 'Weight Loss %', path: '/weight-loss-percentage', desc: 'Calculate relative progress toward goal.', keywords: ["relative weight loss","diet progress","percentage lost","fitness tracker","weight milestones","weight loss math","goal tracking","body transformation","scale math","success metrics"] },
      { name: 'BMI for Men', path: '/bmi-men', desc: 'Gender-adjusted BMI for adult males.', keywords: ["male bmi","mens health","weight for men","body mass index male","fitness chart","mens weight","healthy range men","adult male bmi","physical assessment","mens fitness"] },
      { name: 'BMI for Women', path: '/bmi-women', desc: 'Gender-adjusted BMI for adult females.', keywords: ["female bmi","womens health","weight for women","body mass index female","fitness chart","womens weight","healthy range women","adult female bmi","physical assessment","womens fitness"] },
      { name: 'BMI for Teens', path: '/bmi-teens', desc: 'Adolescent health benchmarks.', keywords: ["teen weight","adolescent bmi","growth charts","youth health","teen health","puberty metrics","bmi for ages 13-19","school health","parenting help","growth tracking"] },
      { name: 'Body Type', path: '/body-type', desc: 'Identify your somatic body category.', keywords: ["ectomorph","mesomorph","endomorph","body category","somatic type","genetics fitness","diet for body type","physique analysis","metabolic body type","fitness science"] },
      { 
        name: 'Calorie Calculator', 
        path: '/calorie', 
        desc: 'Estimate daily energy expenditure.',
        guidance: {
          whyItMatters: 'Daily calorie needs vary based on age, gender, and activity. Getting your caloric intake right is the foundation of energy balance and metabolic health.',
          pitfalls: [
            'Hidden Calories: Liquid calories, cooking oils, and condiments can easily add 500+ calories a day if they are not tracked or accounted for precisely.',
            'BMR vs TDEE Confusion: Basal Metabolic Rate (BMR) is what you burn at complete rest; your total needed calories (TDEE) are always higher based on movement.'
          ],
          proTip: 'Focus on nutrient density, not just calorie counts. 200 calories of fiber-rich vegetables will keep you satiated much longer than 200 calories of refined sugar.',
        keywords: ["total daily energy","tdee","calorie math","weight management","energy needs","human fuel","maintenance calories","diet math","metabolic rate","nutrition tracker"]
      }
      },
      { name: 'Calorie Deficit', path: '/calorie-deficit', desc: 'Calculate calories needed for weight loss.', keywords: ["weight loss math","daily deficit","calorie burn","fat loss formula","dieting math","3500 calorie rule","weight loss roadmap","shredding math","calorie counting","fat loss helper"] },
      { name: 'Calorie Intake (Simple)', path: '/calorie-intake', desc: 'Quick daily calorie estimation.', keywords: ["daily food energy","diet basics","calorie limit","weight maintenance","nutrition goal","quick diet math","food budget","healthy eating","calorie intake","nutrition tracker"] },
      { name: 'Calories Burned', path: '/calories-burned', desc: 'Track energy used during exercise.', keywords: ["exercise burn","activity tracker","metabolic burn","energy used","workouts math","cardio burn","physical activity","caloric expenditure","weight loss math","fitness tracker"] },
      { name: 'Burpee Calories', path: '/burpee-calories', desc: 'Estimate energy burned during bodyweight training.', keywords: ["hiit burn","bodyweight exercise","burpee math","intense workout","cardio energy","calorie burn exercise","home workout","fitness metrics","metabolic surge","strength training"] },
      { name: 'Elliptical Calories', path: '/elliptical-calories', desc: 'Calculate burn based on resistence and time.', keywords: ["cardio machine","elliptical burn","gym math","low impact burn","aerobic energy","fitness tracking","workout efficiency","steady state cardio","gym helper","elliptical trainer"] },
      { name: 'Hiking Calories', path: '/hiking-calories', desc: 'Analyze energy usage on trails with elevation.', keywords: ["outdoor burn","trail calories","elevation gain","backpacking math","trekking energy","walking outdoors","nature fitness","terrain burn","hiking efficiency","activity tracker"] },
      { name: 'Jump Rope Calories', path: '/jump-rope-calories', desc: 'Calculate burn for high-intensity skipping.', keywords: ["skipping math","high intensity burn","jump rope energy","boxing fitness","agility training","cardio burn","stamina math","rope jumping","workout math","intense cardio"] },
      { name: 'Sauna Calories', path: '/sauna-calories', desc: 'Estimate increased metabolic burn from heat.', keywords: ["heat burn","sweat calories","passive burn","metabolic rate heat","sauna benefits","wellness math","recovery burn","detox energy","relaxation math","body temperature"] },
      { name: 'Snow Shoveling', path: '/snow-shoveling-calories', desc: 'Analyze intense winter labor expenditure.', keywords: ["winter labor","manual work burn","shoveling energy","heavy lifting","cold weather exercise","outdoor chores","labor burn","snow removal","winter fitness","chore calories"] },
      { name: 'Stairs Calorie', path: '/stairs-calories', desc: 'Calculate energy used climbing steps.', keywords: ["climbing energy","stairmaster burn","vertical gain","lower body cardio","stair climbing","leg day energy","fitness math","elevation burn","cardio efficiency","physical activity"] },
      { name: 'Steps to Calories', path: '/steps-to-calories', desc: 'Convert daily movement to calorie burn.', keywords: ["pedometer math","daily activity","walking distance","movement energy","active life","step count","distance burn","low intensity burn","fitness tracking","activity levels"] },
      { name: 'Walking Calories', path: '/walking-calories', desc: 'Calculate energy use for standard strides.', keywords: ["steady state cardio","walking math","treadmill energy","low intensity burn","daily exercise","walking pace","stroll energy","fitness tracking","distance burn","activity tracker"] },
      { name: 'Fat Burning Zone', path: '/fat-burning-zone', desc: 'Find your optimal heart rate for fat loss.', keywords: ["lipolysis zone","target heart rate","aerobic threshold","optimal burn","fat loss heart rate","cardio training","workout efficiency","exercise science","fitness zone","weight loss help"] },
      { name: 'Heart Rate Zone', path: '/heart-rate-zone', desc: 'Calculate training thresholds for performance.', keywords: ["training thresholds","vo2 max","anaerobic zone","carb vs fat burn","endurance training","heart rate math","athletic performance","intensity levels","workout design","pulse tracker"] },
      { name: 'Max Heart Rate', path: '/max-heart-rate', desc: 'Theoretically determine your peak cardiovascular limit.', keywords: ["theoretical max pulse","peak heart rate","fox formula","tanaka formula","cardiac capacity","age heart rate","peak effort","fitness limit","theoretical peak","exercise safe"] },
      { name: 'Ape Index', path: '/ape-index', desc: 'Compare your arm span to your height.', keywords: ["climbing indices","arm span height","wingspan ratio","basketball math","anthropometry","skeletal proportions","body geometry","physical metrics","wingspan index","athletic stats"] },
      { name: 'Punch Force (Human)', path: '/punch-force-human', desc: 'Estimate the mechanical power of a strike.', keywords: ["strike power","boxing math","impact energy","punching speed","martial arts tech","kinetic energy","fight metrics","punching force","mechanical power strike","combat science"] },
      { name: 'MET Minutes', path: '/met-minutes', desc: 'Standardize exercise volume across activities.', keywords: ["metabolism units","activity intensity","exercise volume","metabolic equivalent","weekly fitness","activity log","health math","standardized burning","fitness standards","human energy"] },
      { name: 'Carb Calculator', path: '/carbohydrate', desc: 'Calculate daily carb requirements.', keywords: ["daily carbs","dietary sugars","energy intake","carbohydrate math","low carb math","macronutrients","nutrition planning","keto guide","carb load","fitness fuel"] },
      { name: 'Diet Risk Score', path: '/diet-risk-score', desc: 'Analyze nutritional habits.', keywords: ["nutrition audit","eating habits","diet quality","lifestyle risk","health assessment","wellness score","nutrition analysis","dietary risk","healthy living","diet habits"] },
      { name: 'DRI Calculator', path: '/dri', desc: 'Dietary Reference Intake for nutrients.', keywords: ["nutritional goals","rda vs dri","dietary standards","mineral requirements","vitamin needs","essential nutrients","nutrition math","healthy intake","wellness planning","diet guide"] },
      { name: 'Due Date', path: '/due-date', desc: 'Find your expected delivery date.', keywords: ["pregnancy timeline","delivery date","obgyn math","gestation period","conception date","trimester tracking","baby birthday","maternity help","parenthood prep","prenatal planning"] },
      { name: 'EER Calculator', path: '/eer', desc: 'Estimated Energy Requirement.', keywords: ["estimated energy","daily calories","eer formula","human metabolism","metabolic needs","dietary planning","human fuel","energy efficiency","nutrition math","wellness goals"] },
      { name: 'Fat Intake', path: '/fat-intake', desc: 'Calculate daily healthy fat needs.', keywords: ["dietary fats","healthy lipids","omega ratios","fat gram math","macronutrients","nutrition planning","lipid intake","healthy eating","fat grams help","diet balance"] },
      { name: 'Fertility Calculator', path: '/fertility', desc: 'Manage your reproductive health.', keywords: ["conception window","ovulation math","pregnancy planning","reproductive health","fertile days","monthly cycle","family planning","womens health","fertility tracker","cycle math"] },
      { name: 'Fiber Calculator', path: '/fiber', desc: 'Calculate daily dietary fiber needs.', keywords: ["dietary fiber","digestion math","daily roughage","fiber goal","nutritional planning","gut health","insoluble fiber","healthy intake","prebiotic math","diet fiber help"] },
      { name: 'Gastric Sleeve Weight Loss', path: '/gastric-sleeve-weight-loss', desc: 'Post-surgery weight loss projection.', keywords: ["vsg weight loss","bariatric surgery","post op math","gastric sleeve goal","weight loss projection","medical metrics","obesity surgery","weight loss tracking","health transformation","clinical weight"] },
      { name: 'Harris-Benedict (BMR)', path: '/harris-benedict', desc: 'Legacy BMR estimation formula.', keywords: ["basal metabolism","bmr formula","resting energy","historical bmr","harris benedict equation","dietary math","energy needs","metabolism tracking","calorie burner","physiological math"] },
      { name: 'Ideal Weight', path: '/ideal-weight', desc: 'Find your target body weight.', keywords: ["target weight","devine formula","hamwi formula","miller formula","robinson formula","healthy weight","body goal","weight metrics","aesthetic weight","medical ideal"] },
      { name: 'IIFYM Calculator', path: '/iifym', desc: 'If It Fits Your Macros strategy.', keywords: ["flexible dieting","macro tracking","iifym plan","weight loss strategies","nutrition math","diet flexibility","calorie counting","shredding math","fitness eating","nutrition help"] },
      { name: 'Katch-McArdle', path: '/katch-mcardle', desc: 'BMR based on lean body mass.', keywords: ["lean body mass bmr","metabolic rate","lbm energy","advanced bmr","fitness math","calories burn","fat free mass","physique analysis","metabolism precision","athlete bmr"] },
      { name: 'Keto Calculator', path: '/keto', desc: 'Ketogenic diet macronutrient ratios.', keywords: ["ketosis macros","low carb high fat","keto ratios","dietary ketosis","fat burning","nutritional planning","carb limit","healthy fats","macro estimator","low carb help"] },
      { name: 'Lean Body Mass', path: '/lean-body-mass', desc: 'Calculate weight excluding fat.', keywords: ["fat free mass","body composition","lean weight","muscle mass","athletic metrics","physique tracker","body fat removal","fitness metrics","lbm formula","body biology"] },
      { name: 'Macro Calculator', path: '/macro', desc: 'Calculate protein, carbs, and fat ratios.', keywords: ["protein carbohydrate fat","macro balance","fitness math","nutritional ratios","diet design","bodybuilding diet","weight loss math","energy balance","macro split","nutrition budget"] },
      { name: 'Maintenance Calorie', path: '/maintenance-calorie', desc: 'Calories needed to maintain weight.', keywords: ["maintenance energy","weight control","daily calories","energy balance","metabolic rate","nutrition planning","diet basics","staying at weight","stable weight","calorie math"] },
      { name: 'Meal Calorie', path: '/meal-calorie', desc: 'Break down calories per meal.', keywords: ["calorie splitting","meal planning","portion math","diet breakdown","daily intake","food math","meal calories","eating schedule","nutrition helper","serving size"] },
      { name: 'Micronutrient Calculator', path: '/micronutrient', desc: 'Track essential vitamins and minerals.', keywords: ["vitamins tracker","mineral intake","micronutrients","essential nutrients","health monitoring","wellness audit","dietary needs","nutrition facts","micro vs macro","wellness planner"] },
      { name: 'Net Carbs', path: '/net-carbs', desc: 'Calculate carbs minus fiber/sugar alcohols.', keywords: ["effective carbs","low carb math","keto tracker","fiber grams","sugar alcohols","diabetic friendly","nutrition math","net carbohydrate","dieting math","keto helper"] },
      { name: 'One Rep Max', path: '/one-rep-max', desc: 'Estimate your maximum lifting power.', keywords: ["strength metrics","max lifting","powerlifting math","gym benchmarks","one rep max","lifting capacity","strength training","workout metrics","weightlifting help","gym goals"] },
      { name: 'Ovulation', path: '/ovulation', desc: 'Track your most fertile days.', keywords: ["conception window","fertile period","family planning","monthly cycle","ovulation math","pregnancy planning","reproductive health","fertility tracker","cycle tracker","womens health"] },
      { name: 'Pace Calculator', path: '/pace', desc: 'Calculate running pace and speed.', keywords: ["running speed","running pace","marathon pace","jogging math","running metrics","track help","speed converter","aerobic pace","running goals","pace setting"] },
      { name: 'Pregnancy Calculator', path: '/pregnancy', desc: 'Estimate your baby\'s due date.', keywords: ["due date math","baby birthday","gestation period","trimester tracking","pregnancy timer","obgyn math","conception date","maternity help","parenthood prep","baby countdown"] },
      { name: 'Pregnancy Weight Gain', path: '/pregnancy-weight-gain', desc: 'Monitor healthy gestation growth.', keywords: ["gestational growth","maternity weight","healthy pregnancy","obgyn math","prenatal weight","baby growth tracking","maternal health","pregnancy metrics","pregnancy gain","obgyn helper"] },
      { name: 'Protein Calculator', path: '/protein', desc: 'Check daily protein requirements.', keywords: ["gram of protein","daily protein","amino acid intake","bodybuilding math","muscle repair","nutrition planning","high protein diet","protein grams help","essential protein","macronutrients"] },
      { name: 'Quarantine Activity', path: '/quarantine-activity', desc: 'Adjust needs for low-activity periods.', keywords: ["low activity math","lazy day calories","sedentary needs","lockdown fitness","quarantine needs","inactive lifestyle","metabolic rate drop","activity adjustments","wellness tracker","sedentary life"] },
      { name: 'Quiz: Harris-Benedict', path: '/harris-benedict-quiz', desc: 'Test your metabolic knowledge.', keywords: ["metabolism quiz","harris benedict trivia","energy needs education","health learning","metabolism basics","science quiz","nutrition education","energy expenditure quiz","body science","health trivia"] },
      { name: 'RMR Calculator', path: '/rmr', desc: 'Resting Metabolic Rate analysis.', keywords: ["resting metabolism","resting energy","rmr formula","metabolic engine","daily spending","calorie burn resting","human fuel","energy budget","human biology","resting burn"] },
      { name: 'Sleep Calculator', path: '/sleep', desc: 'Find the best time to wake up or sleep.', keywords: ["sleep cycles","circadian rhythm","wake up time","bedtime math","sleep quality","rest periods","sleep schedule","wellness tracker","nap math","sleep helper"] },
      { name: 'Sobriety Calculator', path: '/sobriety', desc: 'Track your journey and progress.', keywords: ["sobriety tracker","recovery progress","drinking habit","dependency tracker","addiction recovery","mental health","health wins","sobriety math","life goals","wellness tracking"] },
      { name: 'Sodium in Salt', path: '/sodium-in-salt', desc: 'Convert salt weight to sodium content.', keywords: ["sodium content","salt mg","sodium converter","blood pressure math","low sodium diet","saline content","hydration math","salinity help","mineral tracking","sodium grams"] },
      { name: 'Target Heart Rate', path: '/target-heart-rate', desc: 'Monitor your optimal workout intensity.', keywords: ["exercise zone","optimal heart rate","training intensities","cardio targets","workout math","heart beat per minute","fitness thresholds","cardio efficiency","physical assessment","hr math"] },
      { 
        name: 'TDEE Calculator', 
        path: '/tdee', 
        desc: 'Total Daily Energy Expenditure.',
        guidance: {
          whyItMatters: 'Your Total Daily Energy Expenditure is the "budget" for your metabolism. Knowing this number is essential for scientific weight management—whether your goal is loss, gain, or maintenance.',
          pitfalls: [
            'Overestimating Activity: Most people overestimate how many calories they burn during exercise. Always be conservative when selecting your baseline activity level.',
            'Adaptive Thermogenesis: As you lose weight, your TDEE drops. You must re-calculate your maintenance calories every 5-10 lbs of significant body weight change.'
          ],
          proTip: 'Track your actual calorie intake and body weight for 2-3 weeks to find your "Tested TDEE," which is more accurate than any one theoretical formula.',
        keywords: ["total daily energy","human fuel","metabolic spending","calorie math","weight maintenance","dietary planning","energy expenditure","tdee formula","human biology","maintenance needs"]
      }
      },
      { name: 'Vitamin Calculator', path: '/vitamin', desc: 'General vitamin goal assessment.', keywords: ["vitamin tracker","multivitamin help","nutritional goals","dietary needs","wellness planner","essential vitamins","fat soluble vitamins","water soluble vitamins","supplemental math","health score"] },
      { name: 'Vitamin A', path: '/vitamin-a', desc: 'Specific Vitamin A requirement math.', keywords: ["retinol needs","eye health vitamins","vitamin a goal","dietary standards","nutrition planning","carotenoids","healthy vision","vitamin a deficiency","skin health vitamins","supplement math"] },
      { name: 'Vitamin D', path: '/vitamin-d', desc: 'Specific Vitamin D requirement math.', keywords: ["sunshine vitamin","bone health","vitamin d dosage","dietary standards","nutrition planning","calcium absorption","vitamin d3","immune health","seasonal wellness","supplement math"] },
      { name: 'VO2 Max', path: '/vo2-max', desc: 'Measure your cardiovascular fitness.', keywords: ["cardiovascular fitness","v o2 max","oxygen consumption","aerobic capacity","endurance metrics","athletic performance","fitness score","heart health","racing math","aerobic power"] },
      { name: 'Waist To Hip', path: '/waist-to-hip', desc: 'Analyze body shape and health risk.', keywords: ["body shape ratio","waist hip calculation","health risk indicator","visceral fat","cardiovascular health","body proportions","abdominal fat","anthropometry","body metric","metabolic risk"] },
      { name: 'Water Intake', path: '/water-intake', desc: 'Find your daily hydration needs.', keywords: ["hydration goal","daily fluids","water math","liquid requirements","human cooling","body water","active hydration","drinking schedule","wellness tracker","fluid balance"] },
      { name: 'Weight Gain', path: '/weight-gain', desc: 'Healthy weight gain strategies.', keywords: ["bulking calculator","muscle gain","weight increase","calorie surplus","healthy gain","bodyweight increase","nutrition design","gaining weight","mass gain","weight tracking"] },
      { name: 'Weight Watchers Points', path: '/weight-watchers-points', desc: 'Estimate system point values.', keywords: ["diet point system","weight watchers math","point estimator","dietary points","points plus","smart points","nutrition tracking","diet strategy","food points","weight loss tracker"] },
    ]
  },
  {
    title: 'Medical & Clinical',
    slug: 'medical',
    description: 'Specialized healthcare and clinical indicators. Tools for diabetes management, cardiovascular risk, and professional medical assessments.',
    defaultGuidance: {
      whyItMatters: 'Clinical calculations are essential for monitoring chronic conditions and assessing risk factors like cardiovascular health or diabetic complications. These tools allow you to translate lab results into actionable insights that can be discussed with your healthcare provider to optimize your treatment plan.',
      pitfalls: [
        'Self-Diagnosis Dependency: These calculators are intended for informational purposes and should never replace professional medical advice. Always verify results with a physician.',
        'Data Latency: Using old lab results for current calculations can lead to incorrect assessments of your health risk. Always use your most recent clinical data.'
      ],
      proTip: 'Keep a digital log of these calculations (like your cholesterol ratio or HOMA-IR) to show your doctor how your metabolic markers are shifting over months or years.'
    },
    items: [
      { name: 'Blood Sugar Converter', path: '/blood-sugar-converter', desc: 'Switch between mg/dL and mmol/L.', keywords: ["diabetes math","glucose conversion","blood sugar units","mg dl to mmol l","diabetic tracking","unit converter medical","glucose monitoring","blood chemistry","lab results converter","diabetes management","blood sugar levels"] },
      { name: 'A1c to Glucose', path: '/a1c', desc: 'Convert Hemoglobin A1c to average blood sugar.', keywords: ["hemoglobin a1c","estimated average glucose","eag","diabetes tracking","sugar average","3 month sugar","hba1c conversion","blood glucose average","diabetic monitoring","clinical a1c"] },
      { name: 'Diabetes Risk', path: '/diabetes-risk', desc: 'Analyze probability of type 2 diabetes.', keywords: ["type 2 diabetes","t2d risk","prediabetes screening","metabolic risk","diabetes symptoms","risk assessment","blood sugar health","obesity risk","diabetes prevention","health indicators"] },
      { name: 'DKA Calculator', path: '/diabetic-ketoacidosis', desc: 'Assess diabetic ketoacidosis risk factors.', keywords: ["diabetic ketoacidosis","dka risk","ketones","blood acidity","intensive care","diabetes emergency","metabolic acidosis","anion gap","bicarbonate levels","ketosis"] },
      { name: 'Glycemic Load', path: '/glycemic-load', desc: 'Impact of food portions on blood glucose.', keywords: ["glycemic index","gi vs gl","blood sugar impact","carb quality","diabetes nutrition","insulin response","low gi diet","food math","dietary management","sugar spikes"] },
      { name: 'HOMA-IR', path: '/homa-ir', desc: 'Homeostatic Model Assessment for insulin resistance.', keywords: ["insulin resistance","homa ir","beta cell function","metabolic syndrome","insulin sensitivity","glucose homeostasis","clinical metabolic","diabetes research","insulin math","blood sugar regulation"] },
      { name: 'Insulin Dosage', path: '/insulin-dosage', desc: 'Calculate units based on carb intake.', keywords: ["insulin carb ratio","bolus calculator","diabetic math","carb counting","mealtime insulin","units of insulin","diabetes management","type 1 diabetes","t1d tools","blood sugar correction"] },
      { name: 'QUICKI Calculator', path: '/quicki', desc: 'Quantitative Insulin Sensitivity Check Index.', keywords: ["insulin sensitivity","quicki","homa ir alternative","insulin resistance","metabolic health","glucose sensitivity","clinical indicators","endocrinology","medical research","insulin index"] },
      { name: 'Warsaw Method', path: '/warsaw-method', desc: 'Pediatric insulin dosage estimation.', keywords: ["pediatric diabetes","children insulin","warsaw formula","pediatric endocrinology","juvenile diabetes","t1d kids","childhood diabetes","insulin dosage children","pediatric medical","warsaw math"] },
      { name: 'Cholesterol Ratio', path: '/cholesterol-ratio', desc: 'Analyze heart health through lipid balance.', keywords: ["lipid profile","heart health","hdl ldl ratio","total cholesterol","triglycerides","cardiovascular risk","atherosclerosis risk","blood lipids","cholesterol math","heart disease prevention"] },
      { name: 'LDL Calculator', path: '/ldl', desc: 'Estimate Low-Density Lipoprotein levels.', keywords: ["bad cholesterol","low density lipoprotein","ldl c","friedewald formula","lipid profile","heart health","cholesterol math","ldl estimation","cardiovascular risk","lipids"] },
      { name: 'VLDL Calculator', path: '/vldl', desc: 'Analyze Very Low-Density Lipoprotein.', keywords: ["triglycerides","vldl","very low density lipoprotein","lipid profile","heart health","lipids","vldl estimation","blood chemistry","cardiovascular risk","metabolic health"] },
      { name: 'SAAG Score', path: '/saag', desc: 'Serum-Ascites Albumin Gradient for clinical diagnostics.', keywords: ["ascites","liver disease","portal hypertension","albumin gradient","hepatology","clinical diagnostics","medical math","liver cirrhosis","internal medicine","saag math"] },
      { name: 'Gout Diagnosis', path: '/gout-diagnosis', desc: 'Likelihood of gout based on clinical symptoms.', keywords: ["gout symptoms","uric acid","joint pain","arthritis","gout risk","clinical diagnosis","rheumatology","podagra","gout assessment","medical screening"] },
      { name: 'Metabolic Syndrome', path: '/metabolic-syndrome', desc: 'Identify clusters of heart disease risk factors.', keywords: ["syndrome x","insulin resistance syndrome","metabolic risk","heart disease risk","diabetes risk","high blood pressure","obesity","high triglycerides","low hdl","clinical diagnosis"] },
      { name: 'AHI Calculator', path: '/ahi', desc: 'Apnea-Hypopnea Index for sleep studies.', keywords: ["sleep apnea","ahi","cpap","sleep study","polysomnography","hypopnea","snoring","sleep disorders","respiratory math","oxygen saturation"] },
      { name: 'Sleep Debt', path: '/sleep-debt', desc: 'Calculate the gap between needed and actual rest.', keywords: ["sleep deprivation","rest gap","sleep hygiene","circadian rhythm","exhaustion","sleep tracking","fatigue","wellness","sleep needed","sleep recovery"] },
      { name: 'STOP-BANG', path: '/stop-bang', desc: 'Obstructive Sleep Segregation screening tool.', keywords: ["sleep apnea screening","stop bang","osa risk","snoring","tiredness","observed apnea","blood pressure apnea","bmi apnea","age apnea","neck circumference"] },
      { name: 'Epworth Sleepiness', path: '/epworth-sleepiness', desc: 'Measure daytime sleepiness levels.', keywords: ["epworth scale","ess","daytime sleepiness","narcolepsy screening","sleep disorders","fatigue","tiredness","sleep apnea related","sleep quality","sleep assessment"] },
      { name: 'Pediatric Epworth', path: '/pediatric-epworth', desc: 'Sleep assessment for children and teens.', keywords: ["pediatric sleep","child sleepiness","teen sleep","ess ch","pediatric epworth scale","childhood sleep disorders","adolescent sleep","pediatrics","child health","teen health"] },
    ]
  },
  {
    title: 'Military & Recruitment',
    slug: 'military',
    description: 'Compliance and fitness standards for the armed forces. Calculate scores for PT tests and body composition requirements across various branches.',
    defaultGuidance: {
      whyItMatters: 'Military standards are designed to ensure operational readiness and safety. For service members, these calculations are often the difference between career advancement and administrative action. Precision in these tests ensures you meet the physical demands of high-stakes environments.',
      pitfalls: [
        'The "Tape Test" Variable: The Army and Navy body fat tests are estimates. Factors like neck tension or hydration can slightly skew results. Always test multiple times to find your true average.',
        'Ignoring Minimum Thresholds: In tests like the ACFT, excelling in one area doesn\'t compensate for failing a minimum in another. Balanced training is critical.'
      ],
      proTip: 'Train 10% above the required standard. On test day, stress and environmental factors (like heat or unfamiliar terrain) often sap performance, and having that buffer ensures you still pass with ease.'
    },
    items: [
      { name: 'ACFT Calculator', path: '/acft', desc: 'Army Combat Fitness Test grading.', keywords: ["acft scoring","army fitness","strength test","deadlift","power throw","army pt","leg tuck","shuttle run","combat fitness","grading scale","physical assessment","military health","standards","exercise math"] },
      { name: 'APFT Calculator', path: '/apft', desc: 'Legacy Army Physical Fitness Test scoring.', keywords: ["army physical fitness","apft","legacy army pt","pushups and situps","two mile run","pt test scoring","army standards","vintage army fitness","physical training","score chart","army metrics","military exercise"] },
      { name: 'Army Body Fat', path: '/army-body-fat', desc: 'Tape test measurement for US Army standards.', keywords: ["army tape test","bodyfat percentage","neck measurement","waist measurement","height tape","army composition","military standards","body fat standards","physical readiness","army taping","army metrics"] },
      { name: 'Navy Body Fat', path: '/navy-body-fat', desc: 'US Navy body composition standards.', keywords: ["navy tape test","body fat percentage navy","neck measurement navy","waist and hip","physical readiness program","navy composition","body fat index navy","prp standards","military health navy"] },
      { name: 'Air Force PT', path: '/air-force-pt', desc: 'Fitness assessment for the US Air Force.', keywords: ["air force fitness","af pt test","pushups situps run","af standards","airman fitness","physical training air force","scoring guide af","air force military","fitness metrics af"] },
      { name: 'Navy PRT', path: '/navy-prt', desc: 'Physical Readiness Test for US Navy personnel.', keywords: ["navy prt scoring","physical readiness test","navy fitness test","pushups situps run","navy standards","sailor fitness","prt chart","physical assessment navy","military health"] },
      { name: 'Marine PFT', path: '/marine-pft', desc: 'Physical Fitness Test for the US Marines.', keywords: ["marines pft","pullups crunches run","marine fitness","usmc standards","marine physical","scoring chart usmc","combat fitness related","marine corporal tools","physical readiness usmc"] },
    ]
  },
  {
    title: 'Converters',
    slug: 'converters',
    description: 'Instant unit transformation. Convert length, weight, tech formats, and historical numbering systems with total accuracy.',
    defaultGuidance: {
      whyItMatters: 'Unit conversion is the bridge between different engineering and scientific standards. A simple error in converting Newtons to foot-pounds or Celsius to Fahrenheit can lead to total system failure in manufacturing or incorrect dosages in medical settings.',
      pitfalls: [
        'Precision Loss: Rounding your conversion factor (e.g., using 2.5 instead of 2.54 for inches to cm) can lead to significant errors when dealing with large quantities.',
        'Base Unit Confusion: In digital conversions (like Mbps to MB/s), the factor of 8 is often forgotten, leading to an 800% error in bandwidth expectations.'
      ],
      proTip: 'Always perform a "sanity check" after converting. If you\'re converting a small number to a smaller unit (like meters to millimeters), the result should be a much larger number. If it isn\'t, you swapped your multiplier.'
    },
    items: [
      { name: 'Unit Converter', path: '/unit-converter', desc: 'Metric and Imperial conversions.', keywords: ["metric converter","imperial units","length weight volume","universal converter","measurement math","si units","customary units","unit transformation","comprehensive converter","precision units","engineering units","daily conversion","measurement transformation","unit scale","conversion tools"] },
      { name: 'Force Converter', path: '/force-converter', desc: 'Convert Newtons, lbf, and more.', keywords: ["newton converter","pound force","lbf to n","dyne conversion","physic force","engineering dynamics","kilonewton","force units","mechanical engineering","statics math","force transformation","kip conversion","structural force"] },
      { name: 'Pressure Conversion', path: '/pressure-conversion', desc: 'PSI, bar, Pascal, and atm.', keywords: ["psi to bar","pascal converter","atmosphere pressure","torr conversion","kilopascal","mbar to psi","hydraulic pressure","pneumatic math","industrial pressure","scientific pressure","weather pressure","meteorology units"] },
      { name: 'Inch-lbs to Nm', path: '/in-lbs-to-nm', desc: 'Torque conversion for precision tools.', keywords: ["torque converter","inch pounds to newton meters","precision assembly","fastener torque","engineering units","mechanical assembly","industrial torque","in lb to nm conversion","torque transformation","precision engineering","torque scale"] },
      { name: 'In-lbs to Ft-lbs', path: '/in-lb-to-ft-lb', desc: 'Convert between torque units.', keywords: ["inch pounds to foot pounds","torque scale","mechanical math","fastener torque","wrench conversion","torque transformation","industrial units","engineering torque","in lb to ft lb","torque converter"] },
      { name: 'Lbs to Newtons', path: '/lbs-to-newtons', desc: 'Weight to force conversion.', keywords: ["pound force to newtons","lbs to n","weight to force","physics math","gravity conversion","unit converter force","lbf converter","engineering mechanics","structural load","mechanical force"] },
      { name: 'Newton Meter', path: '/nm', desc: 'Calculate torque from force and distance.', keywords: ["newton meters","torque calculation","moment of force","lever arm math","mechanical advantage","torque physics","physics homework torque","engineering mechanics","Nm calculator","force times distance"] },
      { name: 'Nm to Ft-lbs', path: '/nm-to-ft-lbs', desc: 'Standard auto torque conversion.', keywords: ["newton meters to foot pounds","nm to ft lb","automotive torque","mechanic tools","engine building math","torque conversion","industrial torque","mechanical engineering","nm converter","torque scale"] },
      { name: 'Nm to In-lbs', path: '/nm-to-in-lbs', desc: 'Metric to imperial torque conversion.', keywords: ["newton meters to inch pounds","nm to in lb","precision torque","assembly math","mechanical engineering","torque conversion","industrial metrics","precision manufacturing","nm converter","torque scale"] },
      { name: 'PSI to GPM', path: '/psi-to-gpm', desc: 'Hydraulic flow and pressure math.', keywords: ["pounds per square inch to gallons per minute","hydraulic flow","fluid dynamics","pump math","psi to gpm converter","fluid mechanics","pressure flow conversion","engineering units","nozzle flow","pipe flow calculation"] },
      { name: 'Torque to HP', path: '/torque-to-hp', desc: 'Calculate power from rotations and force.', keywords: ["torque to horsepower","hp calculation","rpm math","engine power","mechanical physics","dyno math","automotive engineering","power to torque","torque vs hp","engine specifications"] },
      { name: 'Torr to ATM', path: '/torr-to-atm', desc: 'Vacuum and atmosphere pressure math.', keywords: ["torr to atmospheres","vacuum units","scientific pressure","physics lab math","torr conversion","atm scale","vacuum science","laboratory units","pressure measurement","torr to atm calculator"] },
      { name: 'Coordinates Converter', path: '/coordinates-converter', desc: 'Decimal degrees to DMS.', keywords: ["gps conversion","decimal degrees","location math","gis tools","geography help","dms converter","coordinate systems","navigation math","mapping tools","lat long"] },
      { name: 'Degrees Min Sec (DMS)', path: '/dms', desc: 'Precise geographic positioning.', keywords: ["navigational units","dms math","angle conversion","geography tools","precise location","nautical math","aviation navigation","minutes seconds converter","arcseconds","geodesy"] },
      { name: 'Lat Long to UTM', path: '/lat-long-to-utm', desc: 'Map coordinate projection math.', keywords: ["projection systems","utm grid","geospatial math","cartography tools","military grid","coordinate projection","spatial data","itrf conversion","mapping engineering","global grid"] },
      { name: 'Scale Calculator', path: '/scale', desc: 'Model and map ratio conversions.', keywords: ["map scale","model ratios","scale factor","architectural scale","miniature models","ratio converter","drawing scale","engineering drawing","map units","scale math"] },
      { name: 'Billion to Trillion', path: '/billion-to-trillion', desc: 'Finance scale conversions.', keywords: ["financial scale","huge numbers","economics math","billion vs trillion","large figures","government debt scale","macroeconomics","number scale","wealth conversion","big data scale"] },
      { name: 'Cents to Euros', path: '/cents-to-euros', desc: 'Currency fractional math.', keywords: ["cent to euro converter","currency units","fractional currency","monetary conversion","eu math","travel finance","currency scale","money math","euro conversion","decimal currency"] },
      { name: 'Cents to Dollars', path: '/cents-to-dollars', desc: 'Fractional currency math.', keywords: ["cents to dollars converter","currency units","money math","fractional currency","us dollar conversion","decimal currency","financial units","currency scale","monetary value","finance essentials"] },
      { name: 'Crore to Lakh', path: '/crore-to-lakh', desc: 'South Asian numbering conversion.', keywords: ["crore lakh converter","indian numbering system","south asian numbers","numerical conversion","currency units india","regional numbers","financial scales south asia","pakistan numbering","nepal numbering","bangladesh numbering"] },
      { name: 'Crore to Million', path: '/crore-to-million', desc: 'Convert between numbering scales.', keywords: ["crore to million converter","indian to western numbering","south asian to global scale","numerical conversion","currency units conversion","market cap conversion","large figures global","crore million scale","international numeric conversion","numeric transformation"] },
      { name: 'Million to Billion', path: '/million-to-billion', desc: 'Western numbering scale math.', keywords: ["million billion converter","large figures","financial scales","economics math","wealth scale","number conversion","macroeconomics","budget math","market analytics","billion scale"] },
      { name: 'Million to Lakh', path: '/million-to-lakh', desc: 'International numbering conversion.', keywords: ["million to lakh converter","western to indian numbering","global to south asian scale","numerical conversion","currency units india","regional numbers","numeric scale","international finance india","million lakh transformation","indian numerals"] },
      { name: 'Million to Thousand', path: '/million-to-thousand', desc: 'Scale down large figures.', keywords: ["million to thousand converter","number scale","large figures small","numerical conversion","wealth scale","budget math","numeric transformation","unit scale million","downscaling digits","western numbering system"] },
      { name: 'Number to Billion', path: '/number-to-billion', desc: 'Scale large digits to readable billions.', keywords: ["digits to billion","number formatter","large number readability","billion scale","mathematical formatting","economics math","budget presentation","finance scale","market analytics","wealth scale"] },
      { name: 'Number to Million', path: '/number-to-million', desc: 'Scale digits to readable millions.', keywords: ["digits to million","number formatter","large number readability","million scale","mathematical formatting","economics math","budget presentation","finance scale","market analytics","wealth scale"] },
      { name: 'Binary to Hex', path: '/binary-to-hex', desc: 'Digital base conversion.', keywords: ["binary to hexadecimal","base 2 to base 16","digital logic","programming math","computer science","hex converter","bin to hex","low level programming","bitwise conversion","binary hex translator"] },
      { name: 'Binary to Octal', path: '/binary-to-octal', desc: 'Convert base-2 to base-8.', keywords: ["binary to octal","base 2 to base 8","digital logic","programming math","computer science","octal converter","bin to oct","systems programming","numeric base conversion","binary octal translator"] },
      { name: 'Decimal to Hex', path: '/decimal-to-hex', desc: 'Base-10 to programming hex.', keywords: ["decimal to hexadecimal","base 10 to base 16","programming math","web colors related","memory mapping","hex converter","dec to hex","computer science","software engineering","developing tools"] },
      { name: 'Decimal to Octal', path: '/decimal-to-octal', desc: 'Standard base-10 to octal.', keywords: ["decimal to octal","base 10 to base 8","programming math","computer science","numeric base conversion","octal converter","dec to oct","software engineering","it tools","octal digits"] },
      { name: 'Byte Conversion', path: '/byte-conversion', desc: 'Bits, bytes, KB, MB, TB.', keywords: ["digital units","storage scale","data size math","byte converter","bits to petabytes","it math","infrastructure planning","data storage","digital capacity","unit conversion"] },
      { name: 'Capacitance Converter', path: '/capacitance-converter', desc: 'Farads, uF, nF, pF.', keywords: ["farad conversion","capacitor math","microfarad nanofarad","electronics engineering","circuit design","electrical units","ee helper","component math","pcb design","electrical basics"] },
      { name: 'Color Converter', path: '/color-converter', desc: 'RGB, HEX, HSL, CMYK.', keywords: ["hex rgb hsl cmyk","design tools","web colors","graphic design","ui ux helper","color formats","palette matching","front end tools","color theory","css colors"] },
      { name: 'HEX to RGB', path: '/hex-to-rgb', desc: 'Web color to decimal codes.', keywords: ["web color","design conversion","css colors","ui branding","hex to rgb math","frontend tools","digital design","color picker","color codes","graphic design"] },
      { name: 'kB to MB', path: '/kb-to-mb', desc: 'Digital storage sizing.', keywords: ["kilobytes to megabytes","file size math","digital storage","data conversion","storage scale","it basics","bandwidth math","file tracking","drive space","it helper"] },
      { name: 'Mbps Calculator', path: '/mbps', desc: 'Internet speed and bandwidth.', keywords: ["file download time","data speed","internet speed","bandwidth math","download time estimator","it tools","consumer tech math","transfer speed","digital patience","speed tracker"] },
      { name: 'Mbps to Gbps', path: '/mbps-to-gbps', desc: 'Network speed conversion.', keywords: ["bandwidth scaling","network units","it infrastructure","mbps to gbps conversion","data speed","telecom math","internet speed","networking metrics","unit converter","data throughput"] },
      { name: 'MB to GB', path: '/mb-to-gb', desc: 'File size and drive capacity.', keywords: ["megabytes to gigabytes","storage math","drive capacity","file size","it basics","cloud storage units","download math","os install size","data scale","digital inventory"] },
      { name: 'RGB to HEX', path: '/rgb-to-hex', desc: 'Decimal codes to web colors.', keywords: ["css constants","design codes","ui development","rgb to hex math","frontend helper","digital design","color conversion","color chart","palette builder","branding tools"] },
      { name: 'Unix Time Converter', path: '/unix-time-converter', desc: 'Epoch timestamps to dates.', keywords: ["epoch timestamp","epoch converter","posix time","dev tools","server logs math","database time","unix epoch","computer history","coding helper","time stamp conversion"] },
      { name: 'Military Time', path: '/military-time', desc: '24-hour clock conversion.', keywords: ["24 hour clock","navy time","utc conversion","zulu time","military time","standard to 24h","it time","system clock","time protocol","global time"] },
      { name: 'Minutes to Hours', path: '/minutes-to-hours', desc: 'Time unit simplification.', keywords: ["time conversion","h m s","unit simplification","duration math","math helper","productivity tools","schedule math","math basics","time tracker","daily planning"] },
      { name: 'Time Unit Converter', path: '/time-unit-converter', desc: 'Seconds to centuries.', keywords: ["second to month","duration conversion","time scaling","scientific time","historical time","chronology","unit converter time","calendar math","epoch math","precision time"] },
      { name: 'Years to Decades', path: '/years-to-decades', desc: 'Epoch and era math.', keywords: ["decade math","epoch and era","century conversion","historical timeline","time scaling","long term math","age calculation","history help","geological time","chronology"] },
      { name: 'Angle Conversion', path: '/angle-conversion', desc: 'Degrees, radians, and grads.', keywords: ["degrees radians grads","trigonometry math","geometry helper","angle conversion","math units","circular measure","compass math","surveying units","navigation math","math solver"] },
      { name: 'CCF to Therms', path: '/ccf-to-therms', desc: 'Natural gas energy conversion.', keywords: ["natural gas energy","ccf to therm","utility billing","gas heater math","home energy audit","resource math","billing help","fuel efficiency","gas consumption","btu calculator"] },
      { name: 'CGS to SI Units', path: '/cgs-to-si', desc: 'Centimeter-Gram-Second to Metric.', keywords: ["physics units","cgs to si","metric scale","scientific conversion","cm g s units","international system units","physics helper","laboratory math","mechanical units","standardization"] },
      { name: 'CPS Converter', path: '/cps-converter', desc: 'Counts per second and frequency.', keywords: ["frequency math","counts per second","cps conversion","scientific measurement","hertz math","signal processing","lab tools","unit converter physics","cps to hz","frequency scale"] },
      { name: 'dBm to Watts', path: '/dbm-to-watts', desc: 'Signal power conversion.', keywords: ["signal strength","decibel milliwatts","radio power","watts conversion","telecom math","dbm converter","rf engineering","electrical power","signal math","physics units"] },
      { name: 'Density Conversion', path: '/density-conversion', desc: 'Mass per volume units.', keywords: ["mass per volume","specific gravity","density unit converter","physics math","material science","fluid mechanics","chemistry helper","buoyancy math","standard density","scientific units"] },
      { name: 'Dimensional Analysis', path: '/dimensional-analysis', desc: 'Verify unit consistency in physics.', keywords: ["physics units check","consistency math","unit homogeneity","scientific proof","dimensional logic","physics homework help","derived units","fundamental units","math validation","engineering science"] },
      { name: 'Dimes to Dollars', path: '/dimes-to-dollars', desc: 'Coinage math.', keywords: ["dime conversion","coin math","money unit converter","pocket change","ten cent math","financial basics","kids money helper","currency units","monetary scale","coins to dollars"] },
      { name: 'Energy Conversion', path: '/energy-conversion', desc: 'Joules, calories, and BTUs.', keywords: ["joule calorie btu","energy units","work math","heat energy","scientific conversion","physics helper","energy scale","thermodynamics math","watt hours","kilojoules"] },
      { name: 'MPG to L/100km', path: '/mpg-to-l100km', desc: 'Fuel efficiency conversion.', keywords: ["fuel economy","miles per gallon","liters per 100km","gas efficiency","automotive math","fuel consumption","international driving","car performance","efficiency scale","mpg converter"] },
      { name: 'Grams to Calories', path: '/grams-to-calories', desc: 'Nutritional energy math.', keywords: ["energy from food","macronutrient math","calorie counting","grams to calories","nutrition science","dietary energy","fuel calculation","weight loss math","healthy eating","nutrition tracker"] },
      { name: 'Hardness Conversion', path: '/hardness-conversion', desc: 'Rockwell, Brinell, and Vickers.', keywords: ["material hardness","rockwell scale","brinell test","vickers hardness","metallurgy tools","engineering units","manufacturing math","material testing","indentation math","hardness converter"] },
      { name: 'Joules to Volts', path: '/joules-to-volts', desc: 'Energy to electrical potential.', keywords: ["electrical potential","energy to volts","joules to voltage","physics math","electronics engineering","potential difference","scientific conversion","electrical energy","voltage helper","ee math"] },
      { name: 'Knots to KPH', path: '/knots-to-kph', desc: 'Nautical to land speed.', keywords: ["maritime speed","nautical knots","kilometers per hour","navigation math","speed converter","sailing tools","marine aviation","travel math","speed transformation","international speed"] },
      { name: 'Knots to MPH', path: '/knots-to-mph', desc: 'Maritime to customary speed.', keywords: ["nautical to customary","knots to miles per hour","maritime aviation","speed math","navigation conversion","travel helper","coastal navigation","speed scale","wind speed math","vessel speed"] },
      { name: 'Leet-speak Translator', path: '/leet-speak', desc: 'Convert text to l33t code.', keywords: ["l33t speak","leet language","hacker slang","text to code","gaming slang","internet culture","encoding fun","haxor translator","leet converter","online language"] },
      { name: 'Lower to Uppercase', path: '/case-converter', desc: 'Change text capitalization styles.', keywords: ["text formatting","all caps","proper case","typography tools","sentence case","text manipulation","editor helper","case switcher","lowercasing","uppercasing"] },
      { name: 'm/s to km/h', path: '/ms-to-kmh', desc: 'Physics velocity conversion.', keywords: ["meters per second","velocity conversion","kinematics math","physics speed","international units","speed scale","acceleration math","kph to ms","scientific motion","motion tracking"] },
      { name: 'Natural Gas Converter', path: '/natural-gas-converter', desc: 'Volume and energy equivalents.', keywords: ["gas energy units","volume to energy","utility math","natural gas consumption","energy equivalents","resource planning","gas volume math","thermal energy","energy conversion","natural gas help"] },
      { name: 'Nm to Joules', path: '/nm-to-joules', desc: 'Torque-work-energy math.', keywords: ["torque to work","joule conversion","mechanical energy","physics math","torque calculation","rotational energy","work energy theorem","engineering mechanics","unit converter torque","scientific units"] },
      { name: 'Nickels to Dollars', path: '/nickels-to-dollars', desc: 'Pocket change math.', keywords: ["pocket change","five cent math","nickels to dollars","coinage conversion","currency units","money math","financial basics","counting coins","monetary value","retail math"] },
      { name: 'Paper Quantity', path: '/paper-quantity', desc: 'Reams, quires, and sheets.', keywords: ["stationery math","ream quire sheet","printing paper size","office supplies","paper mass","batch counting","printing units","publishing math","paper standardization","inventory math"] },
      { name: 'Pennies to Dollars', path: '/pennies-to-dollars', desc: 'Fractional currency math.', keywords: ["cents to dollars","pennies count","one cent math","fractional currency","money math","pocket change","retail math","financial units","counting pennies","monetary scale"] },
      { name: 'Power Converter', path: '/power-converter', desc: 'Watts, HP, and thermal units.', keywords: ["horsepower watts","thermal units hr","energy flow","mechanical advantage","power unit converter","btu per hour","physics helper","engine power","thermal efficiency","kilowatts"] },
      { name: 'PPM Calculator', path: '/ppm', desc: 'Parts per million concentration.', keywords: ["concentration unit","parts per million","chemical math","purity scale","density calculation","scientific pollution","dilution math","laboratory units","solution math","metric concentration"] },
      { name: 'Currency Converter', path: '/currency-converter', desc: 'Live exchange rate calculations.', keywords: ["fx rates","forex math","global money","money exchange","market conversion","financial travel","cross border finance","live currency","trading math","investment conversion"] },
      { name: 'Roman Numerals', path: '/roman-numeral-converter', desc: 'Convert to and from Arabic numerals.', keywords: ["roman to arabic","latin numerals","historical numbers","numeral conversion","educational math","latin numbers","date converter roman","classical mathematics","notation switcher","math history"] },
      { name: 'Hex Converter', path: '/hex', desc: 'Hex, Dec, and Bin conversions.', keywords: ["hexadecimal dec bin","base 16 conversion","programming logic","computer science","dev tools","hexadecimal math","hex dec chart","bit manipulation","machine code basic","coding essentials"] },
      { name: 'Binary Converter', path: '/binary', desc: 'Logic and base-2 math.', keywords: ["base 2 math","binary logic","logic gates","digital conversion","bit stacking","computer science","programming foundations","binary code","systems design","low level math"] },
      { name: 'Base64 Converter', path: '/base64', desc: 'Encode and decode binary data.', keywords: ["data encoding","binary to text","base64 schema","dev tools","web safe data","string encoding","transmission math","data integrity","coding helper","base64 decoder"] },
      { name: 'URL Converter', path: '/url-converter', desc: 'Safe web address strings.', keywords: ["url encoding","percent encoding","web addresses","browser safe strings","seo utility","dev tools","safe slugs","uri conversion","web development","internet protocols"] },
      { name: 'Shoe Size', path: '/shoe-size-conversion', desc: 'Global footwear standards.', keywords: ["footwear sizing","international shoe","mens shoes","womens shoes","kids shoes","size chart","cm to inches","nike size","adidas size","global sizing"] },
      { name: 'Time Zone', path: '/time-zone-converter', desc: 'Global sync for meetings/travel.', keywords: ["gmt utc offsets","global clock","meeting planner","travel time","international sync","clock conversion","daylight savings","time difference","world time","remote work tools"] },
      { name: 'Scientific Notation', path: '/scientific-notation', desc: 'Standard power-of-10 format.', keywords: ["standard form","powers of 10","exponential notation","scientific math","huge numbers","microscopic scales","lab measurements","math notation","scientific reporting","math simplified"] },
    ]
  },
  {
    title: 'Business & Marketing',
    slug: 'business',
    description: 'Optimize your operations and scale your growth. Our business suite covers everything from SaaS metrics and marketing performance to HR analytics and corporate finance.',
    defaultGuidance: {
      whyItMatters: 'Business is a game of margins. Accuracy in calculating your break-even point or churn rate isn\'t just about bookkeeping; it\'s about identifying which levers will actually lead to profit and which are vanity metrics that distract from sustainable growth.',
      pitfalls: [
        'Vanity Metrics: Focusing on "Gross Revenue" without calculating your "Contribution Margin" can lead you to spend more on acquiring a customer than they are worth.',
        'Ignoring Customer Lifetime Value (LTV): Judging a marketing campaign by its 1-day ROI instead of the total value a customer brings over 12 months can cause you to shut down highly profitable channels.'
      ],
      proTip: 'Calculate your "LTV to CAC" ratio. A healthy business usually aims for an LTV that is at least 3x the Cost of Acquisition (CAC).'
    },
    items: [
      { name: '3D Printer - Buy vs Outsource', path: '/3d-printer-buy-vs-outsource', desc: 'Decide whether to manufacture in-house or outsource.', keywords: ["additive manufacturing cost","print vs buy","economics 3d printing","manufacturing strategy","hobbyist math","3d printing service","roi 3d printer","business strategy","prototyping costs","industrial manufacturing"] },
      { name: 'Absence Percentage', path: '/absence-percentage', desc: 'Calculate the rate of employee absenteeism.', keywords: ["workplace attendance","staff absence rate","hr analytics","employee management","lost time rate","personnel math","operational metrics","hr statistics","absence tracking","workforce health"] },
      { name: 'Accumulated Depreciation', path: '/accumulated-depreciation', desc: 'Track total asset value loss over time.', keywords: ["accounting basics","book value","asset depreciation","financial tracking","tax planning","gaap principles","business assets","accounting math","balance sheet","fiscal management"] },
      { name: 'Additional Funds Needed', path: '/additional-funds-needed', desc: 'Estimate external financing requirements.', keywords: ["external financing","afn formula","growth finance","business planning","funding requirements","financial forecasting","corporate strategy","capital needs","investment planning","fiscal health"] },
      { name: 'Attrition Rate', path: '/attrition-rate', desc: 'Calculate staff turnover percentage.', keywords: ["employee turnover","staff retention","hr analytics","attrition math","personnel management","corporate health","workforce stability","hr metrics","employee loss","talent management"] },
      { name: 'Average Collection Period', path: '/average-collection-period', desc: 'Measure time to collect accounts receivable.', keywords: ["accounts receivable time","collection cycle","ar days","cash flow math","business liquidity","financial efficiency","payment cycle","credit management","accounting metrics","fiscal speed"] },
      { name: 'Average Fixed Cost', path: '/average-fixed-cost', desc: 'Calculate overhead per unit produced.', keywords: ["overhead per unit","fixed costs math","production economics","unit costs","business scaling","manufacturing finance","cost accounting","financial analysis","afc formula","operational efficiency"] },
      { name: 'Bounce Rate', path: '/bounce-rate', desc: 'Analyze website visitor engagement.', keywords: ["website engagement","exit rates","analytics math","digital marketing","user behavior","content quality","web traffic analysis","conversion optimization","audience retention","marketing metrics"] },
      { name: 'Bradford Factor', path: '/bradford-factor', desc: 'Measure the impact of short-term absences.', keywords: ["employee absence system","hr score","bradford factor math","staff attendance","management tools","personnel tracking","short term absence","workforce metrics","hr analytics","attendance discipline"] },
      { name: 'Break-even', path: '/break-even', desc: 'Find the point where revenue equals costs.', keywords: ["zero profit point","financial planning","startup math","business volume","sales targets","margin analysis","roi calculation","unit economics","financial sustainability","profitability"] },
      { name: 'Build vs. Buy', path: '/build-vs-buy', desc: 'Analyze software and hardware procurement.', keywords: ["software procurement","hardware strategy","make vs buy","business decision","it strategy","tco calculation","project management","opportunity cost","strategic analysis","procurement math"] },
      { name: 'Burndown Chart', path: '/burndown-chart', desc: 'Track remaining work in agile projects.', keywords: ["agile work tracking","scrum metrics","sprint progress","project velocity","work remaining","agile management","kanban math","software development life cycle","team productivity","timeline tracking"] },
      { name: 'Burn Rate', path: '/burn-rate', desc: 'Calculate monthly cash consumption.', keywords: ["startup cash depletion","cash runway","financial health","monthly spend","runway calculator","investor metrics","fiscal management","business viability","burn rate math","liquidity tracking"] },
      { name: 'Business Budget', path: '/business-budget', desc: 'Manage corporate income and expenses.', keywords: ["corporate income","business expenses","fiscal planning","company budget","financial management","spending controls","p and l tracking","investment logic","operating budget","business finance"] },
      { name: 'Business Valuation', path: '/business-valuation', desc: 'Estimate the total worth of a company.', keywords: ["company worth","enterprise value","market cap","financial valuation","exit strategy","valuation methods","business sale","investment math","equity value","asset worth"] },
      { name: 'Churn Rate', path: '/churn-rate', desc: 'Measure customer or subscriber loss.', keywords: ["subscriber loss","customer retention","attrition rate","sas metrics","business growth","customer life cycle","financial health","revenue stability","churn assessment","market metrics"] },
      { name: 'Consulting Fees', path: '/consulting-fees', desc: 'Calculate hourly and project-based rates.', keywords: ["hourly rates","day rates","project pricing","freelance math","consultancy pricing","business fees","professional services","service value","pricing strategy","agency rates"] },
      { name: 'Contribution Margin', path: '/contribution-margin', desc: 'Calculate profit after variable costs.', keywords: ["variable cost profit","margin math","business economics","sales efficiency","profit per unit","unit economics","financial reporting","pricing strategy","break even helper","fiscal metrics"] },
      { name: 'Conversion Rate', path: '/conversion-rate', desc: 'Measure percentage of successful actions.', keywords: ["sales success rate","lead conversion","marketing metrics","funnel analytics","business efficiency","cro math","sales strategy","acquisition cost","customer journey","growth metrics"] },
      { name: 'Cost of Doing Business', path: '/cost-of-doing-business', desc: 'Calculate total operating expenses.', keywords: ["operating expenses","opex math","business overhead","startup costs","financial planning","company spending","business finance","operating budget","cost and analysis","corporate math"] },
      { name: 'Cost of Goods Sold', path: '/cogs', desc: 'Track direct costs of product manufacturing.', keywords: ["cogs calculator","product costs","manufacturing direct cost","inventory math","gross profit margin","retail accounting","direct expenses","business operations","cost of sales","accounting basics"] },
      { name: 'CPA Calculator', path: '/cpa', desc: 'Calculate cost per acquisition.', keywords: ["cost per acquisition","marketing roi","customer acquisition cost","advertising math","sales efficiency","campaign performance","acquisition math","marketing analytics","ad spend math","business growth"] },
      { name: 'CPC and CPM', path: '/cpc-cpm', desc: 'Compare digital advertising costs.', keywords: ["cost per click","cost per mille","ad comparison","marketing budget","paid search math","digital advertising","media planning","advertising price","cpc vs cpm","campaign math"] },
      { name: 'CPM Calculator', path: '/cpm', desc: 'Calculate cost per thousand impressions.', keywords: ["cost per thousand","ad impressions","marketing budget","campaign reach","media buying","advertising math","digital marketing metrics","brand awareness math","cpm estimator","advertising costs"] },
      { name: 'CTR Calculator', path: '/ctr', desc: 'Measure click-through rate performance.', keywords: ["click through rate","ctr math","ad engagement","marketing efficiency","click tracking","conversion funnel","advertising metrics","link performance","digital marketing tracker","campaign optimization"] },
      { name: 'CAC Calculator', path: '/cac', desc: 'Calculate customer acquisition cost.', keywords: ["customer acquisition cost","cac math","marketing efficiency","sales growth","business metrics","ltv cac ratio","startup finance","marketing spend","customer growth math","acquisition efficiency"] },
      { name: 'Customer Retention Rate', path: '/customer-retention', desc: 'Measure customer loyalty over time.', keywords: ["customer loyalty","churn vs retention","marketing metrics","business stability","repeat customers","retained users","growth analytics","customer lifecycle","subscriber math","brand health"] },
      { name: 'Direct Material Price Variance', path: '/material-variance', desc: 'Analyze manufacturing cost differences.', keywords: ["manufacturing variance","material cost analysis","budget vs actual","cost accounting","production efficiency","industrial math","procurement variance","standard costing","operational audit","financial analysis"] },
      { name: 'EVM Calculator', path: '/evm', desc: 'Earned Value Management for projects.', keywords: ["earned value management","project performance","schedule variance","cost performance index","project management math","pmp tools","operational metrics","project health","budget tracking","evm metrics"] },
      { name: 'Effective Corporate Tax Rate', path: '/corporate-tax', desc: 'Calculate actual tax liability.', keywords: ["actual tax rate","effective vs statutory","corporate finance","tax planning","fiscal liability","accounting math","tax efficiency","business taxes","financial reporting","tax burden"] },
      { name: 'EMV Calculator', path: '/emv', desc: 'Calculate expected monetary value.', keywords: ["expected monetary value","risk analysis math","business decision making","probability math","investment logic","strategic planning","decision tree math","financial modeling","emv formula","uncertainty analysis"] },
      { name: 'Exit Rate', path: '/exit-rate', desc: 'Track where users leave your site.', keywords: ["page abandonment","user journey","website exit rate","analytics math","digital marketing","bounce vs exit","user behavior","site optimization","marketing audit","traffic analysis"] },
      { name: 'FIFO Calculator', path: '/fifo', desc: 'Inventory valuation using First-In First-Out.', keywords: ["first in first out","inventory valuation","accounting math","stock rotation","inventory management","costing methods","lifo vs fifo","business accounting","retail math","supply chain tools"] },
      { name: 'FTE Calculator', path: '/fte', desc: 'Calculate Full-Time Equivalent staff.', keywords: ["full time equivalent","staffing math","hr analytics","workforce planning","personnel management","productivity metrics","hr statistics","fte formula","operational planning","human resources"] },
      { name: 'GMROI Calculator', path: '/gmroi', desc: 'Gross margin return on investment.', keywords: ["gross margin return on investment","inventory productivity","retail math","financial analysis","merchandise planning","roi retail","stock performance","gmroi formula","profitability metrics","retail management"] },
      { name: 'Google AdSense', path: '/adsense', desc: 'Estimate website advertising earnings.', keywords: ["adsense earnings","website monetization","publisher revenue","google ad revenue","content monetization","revenue estimation","traffic value","digital ads","passive income website","publishing math"] },
      { name: 'GRP Calculator', path: '/grp', desc: 'Measure Gross Rating Points for ads.', keywords: ["gross rating points","advertising reach","media planning","marketing math","broadcast metrics","media buying","campaign frequency","brand exposure","advertising efficiency","grp formula"] },
      { name: 'HHI Calculator', path: '/hhi', desc: 'Measure market competition levels.', keywords: ["market concentration","herfindahl hirschman index","competition analysis","antitrust math","industry structure","economics math","market power","monopoly check","competitive landscape","business economics"] },
      { name: 'High-Low Method', path: '/high-low', desc: 'Separate fixed and variable costs.', keywords: ["high low cost analysis","fixed variable costs","cost accounting","linear estimation","financial analysis","business economics","cost behavior","accounting helper","mathematical split","fiscal modeling"] },
      { name: 'Labor Cost', path: '/labor-cost', desc: 'Calculate total employee expenses.', keywords: ["total staffing cost","payroll burden","hr analytics","employee expenses","business overhead","direct labor cost","workforce math","operational budget","finance hr","compensation total"] },
      { name: 'Lemonade Stand', path: '/lemonade-stand', desc: 'Simple business simulation tool.', keywords: ["business simulation","economic basics","entrepreneur learning","educational game math","profit loss basic","supply demand simple","business foundation","learning tool business","kids entrepreneurship","startup logic"] },
      { name: 'Lerner Index', path: '/lerner-index', desc: 'Measure market power of a firm.', keywords: ["market power index","monopoly pricing","economics math","price markup","industrial organization","competitive analysis","lerner formula","business strategy","power level economics","market efficiency"] },
      { name: 'Liquid Net Worth', path: '/liquid-net-worth', desc: 'Assets available as immediate cash.', keywords: ["immediate cash","liquid assets","personal finance","wealth tracking","liquidity ratio","financial safety net","net worth math","asset analysis","current assets","solvency check"] },
      { name: 'Man-Hours', path: '/man-hours', desc: 'Calculate total project effort.', keywords: ["man hours calculation","project effort","labor math","work duration","resource management","shift planning","project management","man days","productivity metrics","workforce timing"] },
      { name: 'Days Off', path: '/days-off', desc: 'Track employee vacation and leave.', keywords: ["vacation tracker","employee leave","hr management","pto tracking","staffing schedule","absence management","work life balance","personnel math","hr utility","time off tracker"] },
      { name: 'Online Marketing Conversion', path: '/marketing-conversion', desc: 'Track digital sales funnels.', keywords: ["digital sales funnel","marketing conversion","online customer acquisition","funnel analytics","cro math","digital math","sales optimization","marketing efficiency","acquisition metrics","e commerce growth"] },
      { name: 'Operating Asset Turnover', path: '/operating-asset-turnover', desc: 'Measure asset utilization efficiency.', keywords: ["asset utilization","efficiency ratio","operating assets","financial analysis","corporate performance","turnover math","business productivity","capital management","investment metrics","asset turnover formula"] },
      { name: 'Parking Ratio', path: '/parking-ratio', desc: 'Calculate required commercial parking.', keywords: ["commercial parking requirement","parking zoniing math","real estate development","commercial building parking","vehicle stall count","zoning code help","architectural planning","parking space math","development metrics","planning utility"] },
      { name: 'Payback Period', path: '/payback-period', desc: 'Time to recover your investment.', keywords: ["recovery of investment","break even time","financial analysis","capital budgeting","roi duration","business planning","payback period formula","investment math","project viability","fiscal timing"] },
      { name: 'Business Loan', path: '/business-loan', desc: 'Analyze commercial financing costs.', keywords: ["commercial interest","business financing costs","loan repayment math","debt service","startup funding","business debt","fiscal planning","loan interest calculation","financial tools","bank math"] },
      { name: 'Pre and Post Money Valuation', path: '/pre-post-valuation', desc: 'Analyze venture capital funding.', keywords: ["pre money post money","venture capital math","equity dilutation","startup valuation","investor logic","funding rounds","cap table math","equity worth","business valuation finance","v d funding"] },
      { name: 'PVGO Calculator', path: '/pvgo', desc: 'Present Value of Growth Opportunities.', keywords: ["growth opportunities value","pvgo formula","stock valuation","investment analysis","corporate finance","financial modeling","equity research","growth vs assets","market math","future compounding"] },
      { name: 'Price / Quantity', path: '/price-quantity', desc: 'Calculate total volume discounts.', keywords: ["total volume discount","tier pricing math","bulk buy cost","procurement math","price per quantity","inventory spend","wholesale math","cost scaling","purchasing efficiency","spending analysis"] },
      { name: 'Profitability Index', path: '/profitability-index', desc: 'Measure relative profitability.', keywords: ["relative profitability","capital rationing","benefit cost ratio","investment analysis","pi formula","project selection","financial viability","capital budgeting","economic efficiency","business logic"] },
      { name: 'Revenue Per Employee', path: '/revenue-per-employee', desc: 'Measure workforce productivity.', keywords: ["labor productivity","revenue efficiency","hr analytics","workforce value","personnel efficiency","corporate performance","revenue math","management metrics","productivity indicator","hr stats"] },
      { name: 'ROAS Calculator', path: '/roas', desc: 'Return on Advertising Spend.', keywords: ["return on ad spend","roas math","marketing efficiency","advertising roi","campaign results","digital marketing metrics","ad revenue","ecommerce tracking","marketing profit","advertising math"] },
      { name: 'SaaS Lifetime Value', path: '/saas-ltv', desc: 'Estimate total customer revenue.', keywords: ["customer lifetime value","ltv math","saas growth","subscription revenue","business longevity","customer worth","growth metrics","recurring revenue","marketing value","customer retention math"] },
      { name: 'SaaS Metrics', path: '/saas-metrics', desc: 'Comprehensive recurring revenue tools.', keywords: ["arr mrr churn","saas performance","recurring revenue metrics","growth rate sas","ltv cac math","business dash","startup metrics","subscription health","kpi tracking","software finance"] },
      { name: 'Sales Commission', path: '/sales-commission', desc: 'Calculate payouts for sales teams.', keywords: ["sales payouts","bonus math","incentive tracking","revenue share","commission rate","sales rewards","payroll math","commission formula","business logic","incentive planning"] },
      { name: 'Sell-Through Rate', path: '/sell-through', desc: 'Measure inventory sales velocity.', keywords: ["inventory velocity","sell through rate","retail math","merchandise planning","inventory efficiency","sales trend","stock management","retail analytics","turnover math","product velocity"] },
      { name: 'Smoker\'s CTC', path: '/smoker-ctc', desc: 'Calculate total cost to company.', keywords: ["smoking cost business","ctc impact","health insurance math","employee productivity","corporate health costs","hr analytics","workplace wellness","financial analysis smoking","smoking burden","hr metrics"] },
      { name: 'Software Contract Value', path: '/acv-tcv', desc: 'Analyze annual and total contract values.', keywords: ["acv tcv math","contract worth","saas sales","annual contract value","total contract value","revenue recognition","sales pipeline","subscription math","deal size","contract analysis"] },
      { name: 'Tenure', path: '/tenure', desc: 'Calculate duration of employment.', keywords: ["employment duration","staff longevity","hr metrics","tenure math","work history","personnel math","employee loyalty","hr analytics","career timing","loyalty indicators"] },
      { name: 'Turnover Rate', path: '/turnover-rate', desc: 'Measure employee churn velocity.', keywords: ["employee churn","staff attrition","hr analytics","personnel statistics","workforce stability","hiring costs","retention math","turnover rate formula","hr reports","management tools"] },
      { name: 'Website Ad Revenue', path: '/website-ad-revenue', desc: 'Project earnings from web traffic.', keywords: ["web traffic earnings","website advertising","digital revenue","monetization math","site income","ad impressions value","publisher revenue","online business math","revenue projector","content worth"] },
      { name: 'YouTube Money', path: '/youtube-money', desc: 'Estimate channel ad revenue.', keywords: ["youtube estimation","cpm youtube","channel revenue","creator economy math","video monetization","adsense for youtube","video views value","yt income","channel growth","creator tools"] },
      { name: 'Total Cost of Ownership', path: '/tco', desc: 'Calculate long-term lifecycle expenses.', keywords: ["total lifecycle cost","buy vs maintain","operational audit","long term cost","tco math","infrastructure finance","procurement math","business investment","cost analysis","lifecycle management"] },
      { name: 'Unit Economics', path: '/unit-economics', desc: 'Analyze profitability per single unit sold.', keywords: ["unit profitability","contribution margin","cac vs ltv unit","business model analysis","unit cost unit revenue","startup finance","unit economics math","profit per transaction","growth viability","scalable business"] },
      { name: 'UTM Building', path: '/utm-builder', desc: 'Standardize marketing campaign tracking links.', keywords: ["link tracking","utm builder","campaign standardization","marketing attribution","url builder","digital marketing metrics","tracking parameters","google analytics helper","marketing links","traffic source tracking"] },
      { name: 'Variable Cost', path: '/variable-cost', desc: 'Calculate production expenses that scale with volume.', keywords: ["production expenses","variable cost math","scaling costs","business economics","cost accounting","unit ethics","manufacturing finance","operational spending","direct costs","profit margins"] },
      { name: 'Vendor Scorecard', path: '/vendor-scorecard', desc: 'Objective analysis of supplier performance.', keywords: ["supplier performance","vendor metrics","procurement analysis","supply chain management","business partnership","performance scorecard","vendor evaluation","operational audit","purchasing strategy","logistics math"] },
      { name: 'Working Capital', path: '/working-capital', desc: 'Measure short-term operational liquidity.', keywords: ["short term liquidity","operational cash","business solvency","current assets vs liabilities","fiscal health","accounting math","cash flow management","liquidity ratio","financial stability","working capital formula"] },
      { name: 'Year-over-Year Growth', path: '/yoy-growth', desc: 'Compare annual performance metrics.', keywords: ["annual growth rate","yoy analysis","financial comparison","business growth","revenue trends","seasonal performance","corporate metrics","growth tracking","yoy percentage","performance history"] },
      { name: 'Yield Multiplier', path: '/yield-multiplier', desc: 'Analyze investment return amplification.', keywords: ["investment amplification","return multiplier","yield analysis","financial leverage","roi math","investment performance","capital gains","wealth growth","profit multiplier","portfolio math"] },
      { name: 'Zero-Based Budget', path: '/zero-based-budget', desc: 'Allocate every dollar based on necessity.', keywords: ["dollars allocation","budget necessity","fiscal planning","business budgeting","financial management","spending controls","p and l tracking","expense management","corporate finance","budgeting strategy"] },
    ]
  },
  {
    title: 'Sales & Business',
    slug: 'sales',
    description: 'Grow your venture and shop smarter. Our retail suite covers everything from profit margins and markups to strategic discount analysis for major sales events.',
    defaultGuidance: {
      whyItMatters: 'Retail and commercial success is built on understanding the interplay between cost, price, and volume. Whether you\'re planning a Black Friday sale or managing everyday margins, these calculations ensure your pricing strategy is sustainable and your discounts actually drive profitable growth rather than just moving inventory.',
      pitfalls: [
        'Margin vs. Markup Confusion: "Markup" is based on cost, while "Margin" is based on selling price. Forgetting this distinction can lead you to price your products significantly lower than intended, eroding your bottom line.',
        'Cumulative Discount Errors: Two 20% discounts are not the same as one 40% discount. Stacking discounts without calculating the net effect can result in selling items at a loss.'
      ],
      proTip: 'Use the "Price to Earnings" tools to evaluate not just individual sales, but the health of your entire business model. Aim for a margin that absorbs your overhead while remaining competitive in your specific market.'
    },
    items: [
      { name: 'Black Friday Calculator', path: '/black-friday', desc: 'Strategize for the biggest shopping event of the year.', keywords: ["cyber week","retail deals","doorbusters","shopping strategy","savings tracker","holiday shopping","seasonal sales","discount math","shopping list","deal analyzer"] },
      { name: 'Cash Back Calculator', path: '/cash-back', desc: 'Calculate the real value of rewards and rebates.', keywords: ["credit card rewards","rebates","loyalty points","financial perks","shopping returns","reward value","cash incentives","savings math","bonus points","reward tracking"] },
      { name: 'Check Digit', path: '/check-digit', desc: 'Verify barcodes and product IDs for inventory.', keywords: ["upc","ean","isbn","barcode verification","inventory control","product tracking","supply chain","warehouse math","data integrity","logistics"] },
      { name: 'CLTV (Customer Lifetime Value)', path: '/cltv', desc: 'Project the total revenue from a long-term customer.', keywords: ["business growth","customer retention","revenue projection","marketing metrics","business strategy","customer value","long term value","business analytics","roi","customer success"] },
      { name: 'Commission Calculator', path: '/commission', desc: 'Calculate sales earnings and tiered structures.', keywords: ["sales pay","earnings math","incentive pay","bonus structure","sales targets","payroll math","rep earnings","commission rates","sales rewards","income tracking"] },
      { name: 'Cyber Monday Calculator', path: '/cyber-monday', desc: 'Analyze online-exclusive deals and digital savings.', keywords: ["online sales","ecommerce deals","digital shopping","cyber week","savings tracker","web deals","discount math","holiday tech","online retail","shopping logic"] },
      { name: 'Discount Calculator', path: '/discount', desc: 'Standard retail savings and final price analysis.', keywords: ["on sale","clearance","retail math","savings tracker","price drop","shopping logic","final price","percent off","money saver","deal finder"] },
      { name: 'Double Discount', path: '/double-discount', desc: 'Stack primary and secondary reductions.', keywords: ["coupon stacking","extra percent off","clearance math","layered savings","retail strategy","shopping hacks","extra discount","stacked deals","savings multiplier","promo code math"] },
      { name: 'Margin Calculator', path: '/margin', desc: 'Identify profit vs revenue percentages.', keywords: ["profit margin","gross profit","business accounting","sales success","revenue math","corporate finance","margin analysis","financial health","profit tracking","business metrics"] },
      { name: 'Margin and Sales Tax', path: '/margin-sales-tax', desc: 'Project profit after both tax and costs.', keywords: ["tax impact","net profit","business accounting","sales tax math","margin calculation","retail finance","business tax","profit net","tax inclusive","business planning"] },
      { name: 'Margin and VAT', path: '/margin-vat', desc: 'Calculate profitability for international sales.', keywords: ["vat math","europe sales","tax inclusion","global business","profit margin","value added tax","international retail","business accounting","global tax","margin tracking"] },
      { name: 'Margin Calculator Classic', path: '/margin-classic', desc: 'Traditional accounting-style margin analysis.', keywords: ["legacy accounting","classic margin","finance basics","profit math","standard margin","business theory","ratio analysis","profitability","accounting tool","margin ratio"] },
      { name: 'Margin With Discount', path: '/margin-discount', desc: 'Calculate profit when selling at promotional rates.', keywords: ["sale margin","promo profit","discount impact","business sustainability","sales strategy","margin erosion","profitability","deal profit","retail planning","margin logic"] },
      { name: 'Markdown Calculator', path: '/markdown', desc: 'Calculate necessary reductions to move inventory.', keywords: ["clearance planning","inventory aging","retail strategy","stock reduction","markdown strategy","price decrease","inventory management","retail math","liquidation","sales velocity"] },
      { name: 'Markup Calculator', path: '/markup', desc: 'Calculate the percentage added to cost.', keywords: ["cost plus","pricing strategy","business setup","markup math","profitability","retail pricing","margin vs markup","price setting","business startup","selling price"] },
      { name: 'Margin and Markup', path: '/margin-markup', desc: 'Analyze the relationship between costs and profit.', keywords: ["ratio comparison","business accounting","pricing logic","margin markup comparison","profit analysis","financial strategy","retail math","business planning","price strategy","profitability"] },
      { name: 'Markup Calculator Classic', path: '/markup-classic', desc: 'Standard business cost-plus pricing math.', keywords: ["traditional markup","business basics","standard pricing","cost plus math","pricing tool","business theory","retail logic","markup fixed","price calculation","basic finance"] },
      { name: 'PayPal Fee Calculator', path: '/paypal-fee', desc: 'Project net income after platform processing.', keywords: ["ecommerce fees","payment processing","digital transactions","business costs","merchant fees","online income","transaction math","fee tracker","paypal math","net earnings"] },
      { name: 'Percentage Discount', path: '/percentage-discount', desc: 'Convert % off to actual dollar savings.', keywords: ["savings math","percent conversion","discount value","shopping logic","value tracker","price reduction","money saver","deal math","retail percent","shopping help"] },
      { name: 'Percent Off', path: '/percent-off', desc: 'Quick-access tool for promotional price reduction.', keywords: ["sale price","clearance","quick savings","shopping math","retail math","deal finder","instant markdown","shopping help","percentage math","money save"] },
      { name: 'Triple Discount', path: '/triple-discount', desc: 'Calculate complex layered promotions and coupons.', keywords: ["advanced stacking","coupon logic","extreme couponing","triple savings","retail mastery","savings optimization","complex discount","promo stack","deal hunting","master shopper"] },
    ]
  },
  {
    title: 'Engineering & Industrial',
    slug: 'engineering',
    description: 'Precision tools for mechanical, electrical, and structural engineering. Handle complex tolerances, industrial throughput, and manufacturing specifications.',
    defaultGuidance: {
      whyItMatters: 'Precision is the foundational requirement of engineering. From calculating bearing life to defining gear ratios, these industrial tools translate theoretical physics into functional mechanical reality. Accuracy here prevents structural failures, reduces mechanical wear, and ensures safety in heavy-duty environments.',
      pitfalls: [
        'Ignoring Tolerances: No material or process is perfect. Failing to account for a "margin of error" in torque or load will lead to premature fatigue and breakage.',
        'Stress vs. Strain: Confusing these two can lead to selecting materials that are "strong" but too brittle for the intended application.'
      ],
      proTip: 'Always use the "Duty Cycle" calculator for electrical and mechanical motors. Running a machine at 100% capacity without the required cooling periods is the most common cause of industrial equipment burnout.'
    },
    items: [
      { name: 'Acoustic Impedance', path: '/acoustic-impedance', desc: 'Calculate sound propagation in materials.', keywords: ["sound propagation","material acoustics","ultrasonic math","acoustic properties","physics helper","signal processing","material science","wave propagation","impedance bridge","acoustics formula"] },
      { name: 'Airflow Velocity', path: '/airflow-velocity', desc: 'Measure air movement in ducts.', keywords: ["duct airflow","hvac math","air movement","velocity pressure","ventilation design","airflow calculation","engineering units","mechanical engineering","industrial air","airflow tools"] },
      { name: 'Aspect Ratio', path: '/aspect-ratio', desc: 'Calculate screen and image proportions.', keywords: ["screen ratio","image proportions","video aspect","ratio math","cinematography tech","display resolution","resolution converter","pixel math","scaling logic","screen dimension"] },
      { name: 'Baud Rate', path: '/baud-rate', desc: 'Calculate data transmission speed.', keywords: ["data transmission","bit rate","serial communication","networking math","baud vs bps","telecom units","digital signal","com port settings","bandwidth math","it tools"] },
      { name: 'Bearing Life', path: '/bearing-life', desc: 'Estimate operational hours for rotating parts.', keywords: ["rotating parts","bearing life math","mechanical longevity","maintenance schedule","industrial engineering","machine reliability","bearing load","operational hours","fatigue life","tribology"] },
      { name: 'Belt Length', path: '/belt-length', desc: 'Calculate dimensions for pulley systems.', keywords: ["pulley systems","belt dimensions","mechanical drive","belt sizing","engineering drawing","machine design","belt length formula","transmission math","industrial mechanics","belt tension"] },
      { name: 'Bend Allowance', path: '/bend-allowance', desc: 'Sheet metal fabrication math.', keywords: ["sheet metal bend","metal fabrication","bend allowance math","structural design","bending radius","sheet metal flat","manufacturing process","material strain","fab shop math","mechanical engineering"] },
      { name: 'Brake Horsepower', path: '/bhp', desc: 'True engine power without auxiliary losses.', keywords: ["bhp calculator","brake horsepower","engine power","crank horsepower","net power","automotive engineering","dyno math","performance tuning","engine stats","mechanical output","flywheel power","industrial engines","horsepower formula"] },
      { name: 'Compression Spring', path: '/compression-spring', desc: 'Calculate forces and spring constants.', keywords: ["spring rate","compression force","helix spring","mechanical design","spring constant","hookes law","industrial springs","wire diameter","coil count","machine design","engineering math","elastic potential","spring load"] },
      { name: 'Cylinder Volume', path: '/cylinder-volume', desc: 'Calculate capacity of industrial tanks.', keywords: ["cylindrical volume","vessel capacity","tank volume","industrial storage","liquid volume","geometric volume","cylinder math","mechanical engineering","pipe capacity","fluid storage","volume formula"] },
      { name: 'Deflection of Beam', path: '/beam-deflection-advanced', desc: 'Advanced structural load analysis.', keywords: ["structural engineering","beam deflection","bending moment","structural load","civil engineering math","youngs modulus","material science","beam stress","load distribution","structural analysis"] },
      { name: 'Drag Coefficient', path: '/drag-coefficient', desc: 'Aerodynamic resistance math.', keywords: ["aerodynamics","drag force","wind resistance","fluid dynamics","automotive tech","aviation math","air resistance","physics homework","drag area","aerodynamic efficiency","slipstream"] },
      { name: 'Duty Cycle', path: '/duty-cycle', desc: 'Calculate operational vs resting time ratio.', keywords: ["industrial duty cycle","electronics math","welding duty cycle","motor duration","operational ratio","machine usage","industrial efficiency","thermal management","electrical engineering","system uptime"] },
      { name: 'Efficiency Calculator', path: '/efficiency', desc: 'Measure output vs input performance.', keywords: ["performance metrics","output input ratio","efficiency math","industrial productivity","mechanical efficiency","thermal efficiency","energy waste","operational audit","system performance","productivity coefficient"] },
      { name: 'Friction Loss', path: '/friction-loss', desc: 'Calculate pressure drop in pipes.', keywords: ["pipe pressure drop","fluid friction","hydraulic math","darcy weisbach","hazen williams","fluid mechanics","pumping head","pipe flow","mechanical engineering","industrial fluid"] },
      { name: 'Gear Ratio', path: '/gear-ratio', desc: 'Calculate torque and speed for mechanical drives.', keywords: ["transmission math","mechanical drive","gear reduction","torque multiplication","drivetrain engineering","rotational speed","gear tooth count","mechanical advantage","industrial gearing","automotive gearbox","drive ratio","mechanical power"] },
      { name: 'Heat Transfer', path: '/heat-transfer', desc: 'Conduction, convection, and radiation math.', keywords: ["energy movement","conduction math","convection cooling","thermal radiation","thermodynamics math","heat flow","engineering physics","thermal design","heat exchange","physical science"] },
      { name: 'Hydraulic Force', path: '/hydraulic-force', desc: 'Pressure and area relationship in fluids.', keywords: ["pascal law","piston force","hydraulic pressure","fluid power","mechanical advantage","ram force","cylinder math","industrial hydraulics","force area pressure","engineering mechanics"] },
      { name: 'Moment of Inertia', path: '/moment-of-inertia', desc: 'Calculate resistance to angular acceleration.', keywords: ["angular acceleration","rotational inertia","physics homework","mass distribution","angular mass","mechanical dynamics","structural engineering","rotational motion","inertia calculation","physics lab"] },
      { name: 'Ohm\'s Law (Full)', path: '/ohms-law-advanced', desc: 'Calculate V, I, R, and Power.', keywords: ["volts amps ohms","electrical power","circuit math","v i r p","electrical engineering","ee helper","electricity basics","power law","electrical design","circuit analysis"] },
      { name: 'Orifice Plate Flow', path: '/orifice-flow', desc: 'Fluid dynamics through restricted openings.', keywords: ["fluid restriction","flow measurement","differential pressure","orifice plate math","bernoulli equation","fluid dynamics","metering flow","industrial process","instrumentation math","flow meter"] },
      { name: 'Pipe Volume', path: '/pipe-volume', desc: 'Calculate liquid capacity of pipelines.', keywords: ["pipeline capacity","liquid volume","internal volume","fluid storage","pipe dimensions","plumbing math","industrial piping","mechanical engineering","volume flow","fluid transport"] },
      { name: 'Poiseuille Law', path: '/poiseuille-law', desc: 'Calculate flow rate through tubes.', keywords: ["laminar pipe flow","fluid viscosity","tube flow rate","hemodynamics math","microfluidics","physical law","pressure flow relationship","medical physics","industrial fluid","viscous flow"] },
      { name: 'Pressure Drop', path: '/pressure-drop', desc: 'Analyze resistance in fluid systems.', keywords: ["industrial resistance","system head loss","pressure math","fluid dynamics","pipe engineering","pump sizing","flow resistance","mechanical utility","fluid mechanics","pressure loss tracker"] },
      { name: 'Pulleys and Belts', path: '/pulleys', desc: 'Analyze speed and torque in belt drives.', keywords: ["belt drive math","pulley ratio","torque transmission","mechanical advantage","speed reduction","industrial drive","v belt math","transmission engineering","mechanical design","pulley speed"] },
      { name: 'Reynolds Number', path: '/reynolds-number', desc: 'Determine laminar vs turbulent flow.', keywords: ["fluid mechanics","laminar flow","turbulent flow","fluid dynamics","reynolds number","viscosity math","chemical engineering","fluid velocity","inertial forces","viscous forces","aerodynamics","hydrodynamics"] },
      { name: 'Spring Rate', path: '/spring-rate', desc: 'Calculate force per unit of displacement.', keywords: ["spring constant","hookes law","force deflection","mechanical spring","spring engineering","elasticity math","component design","spring load","stiffness calculation","mechanical physics"] },
      { name: 'Stress and Strain', path: '/stress-strain', desc: 'Material science deformation analysis.', keywords: ["material science","hooks law","elasticity","plasticity","mechanical properties","engineering mechanics","tensile strength","youngs modulus","deformation math","material testing","structural engineering"] },
      { name: 'Thermal Conductivity', path: '/thermal-conductivity', desc: 'Measure heat flow through substances.', keywords: ["heat flow rate","thermal resistance","insulation math","material science","heat transmission","k value","r value calculation","building science","thermal design","engineering physics"] },
      { name: 'Torque Calculator', path: '/torque', desc: 'Force times distance relationship.', keywords: ["lever arm force","twisting force","mechanical moment","torque math","physics helper","wrench math","rotational force","mechanical advantage","engineering mechanics","torque scale"] },
      { name: 'Velocity and Flow', path: '/velocity-flow', desc: 'Convert between flow rate and speed.', keywords: ["flow velocity math","volumetric flow","continuity equation","fluid dynamics","discharge rate","pipe velocity","nozzle speed","fluid mechanics","engineering units","measurement math"] },
    ]
  },
  {
    title: 'Sports & Outdoors',
    slug: 'sports',
    description: 'Track your performance in the field, on the trail, or in the gym. Specialized math for professional athletes and outdoor enthusiasts.',
    defaultGuidance: {
      whyItMatters: 'Performance tracking turns effort into measurable progress. Whether you\'re analyzing your ERA on the pitcher\'s mound or calculating your FTP on a bike, these metrics allow athletes to identify their specific strengths and weaknesses, enabling "marginal gains" that lead to professional-level results.',
      pitfalls: [
        'The "Single Stat" Myopia: Relying solely on batting average or miles run doesn\'t show the full picture of efficiency. Balanced metrics (like WHIP or power-to-weight ratio) are better indicators of overall skill.',
        'Ignoring Environmental Factors: Wind, elevation, and heat significantly impact performance numbers. Always cross-reference your raw data with the conditions of the day.'
      ],
      proTip: 'Consistency beats intensity. Use the "Race Predictor" tools to set realistic goals that prevent overtraining and injury, ensuring you reach peak performance on race day rather than in the gym.'
    },
    items: [
      { name: 'Batting Average', path: '/batting-average', desc: 'Calculate base hit frequency.', keywords: ["baseball stats","sabermetrics","batting avg","hitting percentage","baseball math","mlb metrics","hitting stats","at bats","base hits","offense calculator","hitting ratio","batting statistics"] },
      { name: 'ERA Calculator', path: '/era', desc: 'Earned Run Average for pitchers.', keywords: ["earned run average","era","pitching stats","sabermetrics","baseball pitching","pitching performance","pitching math","earned runs","innings pitched","mlb pitching metrics","pitcher analytics"] },
      { name: 'Fielding Percentage', path: '/fielding-percentage', desc: 'Measure defensive accuracy.', keywords: ["fielding percentage","defense stats","baseball fielding","fielding errors","defensive analytics","ball game math","fielding accuracy","putouts","assists","total chances","baseball defense"] },
      { name: 'FIP Calculator', path: '/fip', desc: 'Fielding Independent Pitching measurement.', keywords: ["fip","pitching analytics","sabermetrics","baseball stats advanced","pitching evaluation","pitching vs defense","fielding independent pitching","mlb advanced metrics","pitcher performance"] },
      { name: 'Magic Number', path: '/magic-number-baseball', desc: 'Track playoff clinching scenarios.', keywords: ["division clinch","playoff math","baseball standings","season wrap","magic number math","mlb race","pennant chase","baseball eliminations","playoff probability","bracket math"] },
      { name: 'On Base Percentage', path: '/obp', desc: 'Calculate total ability to reach base.', keywords: ["on base percentage","obp","baseball stats","sabermetrics","hitting stats pro","walks and hits","getting on base","on base analytics","baseball math","mlb metrics","obp calculation"] },
      { name: 'Slugging %', path: '/slugging-percentage', desc: 'Measure extra-base hitting power.', keywords: ["slugging percentage","slg","power hitting stats","extra base hits","baseball power","sabermetrics power","hitting analytics","baseball math","mlb metrics","total bases"] },
      { name: 'WAR Calculator', path: '/war', desc: 'Wins Above Replacement for pro analysis.', keywords: ["wins above replacement","baseball sabermetrics","player value","war stat","baseball analytics","mlb player rating","fip srar related","baseball scouting","offensive war","defensive war"] },
      { name: 'WHIP Calculator', path: '/whip', desc: 'Walks and Hits per Innings Pitched.', keywords: ["pitching efficiency","walks hits innings","baseball stats","baserunners allowed","pitching quality","mlb analytics","pitching math","sabermetrics","pitcher control","whip formula"] },
      { name: 'Dunk Calculator', path: '/dunk', desc: 'Calculate vertical needed based on height.', keywords: ["vertical jump","basketball dunking","reach and height","vertical leap math","basketball training","athletic performance","dunk height","jump training","basketball metrics","slam dunk help"] },
      { name: 'eFG% Calculator', path: '/efg', desc: 'Effective Field Goal % for basketball.', keywords: ["effective field goal","basketball efficiency","three point value","shooting metrics","basketball stats","nba analytics","efg percentage","shooting quality","scoring efficiency","basketball math"] },
      { name: 'Game Score (BBall)', path: '/game-score-basketball', desc: 'Single-game performance indicator.', keywords: ["basketball performance","game efficiency","nba box score","player impact","basketball stats","basketball game score","nba ratings","game stats math","player contribution","basketball analytics"] },
      { name: 'True Shooting %', path: '/ts', desc: 'Basketball efficiency across all scoring.', keywords: ["true shooting","basketball efficiency","free throw math","nba analytics","scoring percentage","basketball stats","offensive efficiency","basketball math","shooting accuracy","nba performance"] },
      { name: 'Cricket Strike Rate', path: '/cricket-strike-rate', desc: 'Analyze batsman scoring speed.', keywords: ["runs per balls","batsman batting speed","cricket stats","t20 metrics","odi strike rate","cricket analytics","cricket math","player performance","batting efficiency","cricket data"] },
      { name: 'Bowling Average', path: '/bowling-avg', desc: 'Runs conceded per wicket taken.', keywords: ["wicket frequency","bowling performance","cricket stats","bowling metrics","cricket analytics","bowler economy","cricket math","wicket taking rate","cricket data","bowling efficiency"] },
      { name: 'Cricket Follow-On', path: '/cricket-follow-on', desc: 'Analyze test match enforcement criteria.', keywords: ["test cricket help","follow on rules","cricket strategy","test match logic","innings gap","cricket math","clinch criteria","match dynamics","cricket rules","test match stats"] },
      { name: 'Duckworth Lewis', path: '/dls', desc: 'Calculate target scores in rain-delayed matches.', keywords: ["rain rule cricket","dls method","target score calculation","cricket parity","rain delay math","cricket officiating","icc match rules","limited overs math","cricket logic","interrupted match"] },
      { name: 'ICC Rating', path: '/icc', desc: 'Determine professional cricket standings.', keywords: ["cricket rankings","icc system","team standings","points calculation","cricket math","world rankings","cricket board math","performance rating","cricket metrics","standings helper"] },
      { name: 'Net Run Rate', path: '/nrr', desc: 'The tie-breaker metric for tournament pools.', keywords: ["net run rate","nrr calculation","tie breaker metrics","cricket tournament","run rate math","tournament pool help","cricket stats","group standings","cricket analytics","cricket logic"] },
      { name: 'Bike Cadence', path: '/bike-cadence', desc: 'Calculate pedal RPM based on speed.', keywords: ["pedal rpm","cycling cadence","crank speed","biking metrics","cadence math","cycling training","peloton helper","pedal speed","cycling efficiency","exercise cadence"] },
      { name: 'Bike Gear', path: '/bike-gear', desc: 'Analyze gear ratios and development.', keywords: ["gear inches","bicycle drive","gear development","bike transmission","cycling math","drivetrain setup","bike tech","speed vs torque bike","chainring math","cassette gearing"] },
      { name: 'Bike Size', path: '/bike-size', desc: 'Find the correct frame for your stature.', keywords: ["bicycle frame size","bike fit","stack and reach","frame geometry","cycling help","bike dimensions","correct bike size","mountain bike frame","road bike fit","cycling comfort"] },
      { name: 'Biking Life Gain', path: '/biking-life-gain', desc: 'Visualize life expectancy gains from cycling.', keywords: ["cycling longevity","life expectancy","health benefits biking","longevity math","wellness benefit","biking rewards","human lifespan","exercise gains","cycling life","health stats"] },
      { name: 'Cycling Breakaway', path: '/cycling-breakaway', desc: 'Calculate success probability of escapes.', keywords: ["cycling strategy","peloton gap","breakaway probability","racing logic","cycling math","racing math","escape success","cycling tactics","pro cycling stats","race dynamics"] },
      { name: 'Cycling Wattage', path: '/cycling-wattage', desc: 'Estimate power output on different inclines.', keywords: ["power output bike","ftp estimation","climbing watts","cycling energy","pedal power","wattage math","cycling training","strava helper","performance metrics","cycling intensity"] },
      { name: 'E-Bike Range', path: '/ebike-range', desc: 'Project battery life across various assist modes.', keywords: ["battery longevity","electric bike range","wh per mile","ebike assist","travel distance","charging math","ebike tech","battery efficiency","green travel","motor assist range"] },
      { name: 'Anaerobic Threshold', path: '/anaerobic-threshold', desc: 'Find your lactate shift boundary.', keywords: ["lactate threshold","endurance boundary","aerobic anaerobic shift","training intensity","racing math","fitness testing","performance threshold","workout zones","physiological math","stamina metrics"] },
      { name: 'Bruce Protocol METs', path: '/bruce-protocol', desc: 'Stress test performance metrics.', keywords: ["stress test scoring","cardiac health","bruce protocol mets","treadmill test","heart math","clincial fitness","exercise physiology","diagnostic metrics","health assessment","medical fitness"] },
      { name: 'ERG Calculator', path: '/erg', desc: 'Rowing machine pace and power math.', keywords: ["rowing machine pace","split times","ergometer power","rowing math","concept2 helper","rowing intensity","indoor rowing","rowing energy","split conversion","crew training"] },
      { name: 'Magic Mile', path: '/magic-mile', desc: 'Predict race times from a single mile test.', keywords: ["galloway mile","race prediction","mile time test","running potential","training math","speed test","running benchmarks","race projection","marathon prep","running math"] },
      { name: 'Race Predictor', path: '/race-predictor', desc: 'Estimate finish times for half/full marathons.', keywords: ["finish time estimate","marathon pace","half marathon goal","running math","pace projection","racing logic","running goals","event planning","stamina math","racing helper"] },
      { name: 'Race Improvement', path: '/race-improvement', desc: 'Measure the value of speed gains.', keywords: ["speed gains","pacing improvements","time shavings","running performance","training value","race tracking","athletic progress","fitness math","personal best tracker","running efficiency"] },
      { name: 'Steps to Miles', path: '/steps-to-miles', desc: 'Convert walking volume to distance.', keywords: ["walking distance","step count conversion","pedometer math","fitness tracking","walking goals","steps to km","exercise math","health tracking","daily activity","distance estimation"] },
      { name: 'Stride Length', path: '/stride-length', desc: 'Estimate your steps based on height.', keywords: ["step length","walking mechanics","height to stride","pedometer accuracy","gait analysis","walking math","stride frequency","motion tracking","physical activity","body proportions"] },
      { name: 'Triathlon Finish', path: '/triathlon-finish', desc: 'Project overall time from three legs.', keywords: ["swim bike run time","ironman finish time","split projector","triathlon simulator","race timing","multisport math","transitions time","endurance racing","triathlon training","event planning"] },
      { name: 'Cycling Power Zones', path: '/cycling-power-zones', desc: 'Calculate FTP-based training levels.', keywords: ["functional threshold power","ftp zones","cycling training zones","power levels","wattage zones","cycling intensity","performance metrics","interval training","cycling science","training levels"] },
      { name: 'DIY Sports Drink', path: '/diy-sports-drink', desc: 'Craft your own electrolyte hydration.', keywords: ["electrolyte recipe","homemade gatorade","hydration math","sports nutrition","diy electrolytes","sugar salt water ratio","rehydration","exercise hydration","nutritional math","performance drink"] },
      { name: 'Triathlon Nutrition', path: '/triathlon-nutrition', desc: 'Plan calorie intake for long-course racing.', keywords: ["ironman nutrition","race fueling","carbohydrate intake","hydration strategy","endurance fueling","triathlon food","calorie burn race","fueling math","marathon nutrition","performance fueling"] },
      { name: 'Bench Press 1RM', path: '/bench-press-1rm', desc: 'Calculate your maximum press power.', keywords: ["one rep max","bench press strength","weightlifting math","powerlifting max","strength testing","lifting goals","bench press formula","gym benchmarks","muscle power","lifting stats"] },
      { name: 'Wilks Calculator', path: '/wilks', desc: 'Compare powerlifters across weight classes.', keywords: ["wilks score","powerlifting coefficient","relative strength","strength comparison","lifting metrics","weight class math","powerlifting stats","coefficient math","lifting rankings","athletic performance"] },
      { name: '5/3/1 Calculator', path: '/531', desc: 'Plan strength training cycles.', keywords: ["wendler program","strength training cycle","lifting math","progressive overload","gym split","training program","weightlifting tracker","powerlifting math","strength growth","lifting schedule"] },
      { name: 'Fish Weight', path: '/fish-weight', desc: 'Estimate weight from length and girth.', keywords: ["angling math","catch and release weight","fish size","marine biology math","fishing stats","fishing trophies","length girth weight","fish weight formula","angling tools","fishing calculator"] },
      { name: 'Hull Speed', path: '/hull-speed', desc: 'Maximum efficient velocity for displacement hulls.', keywords: ["boat velocity","displacement hull math","nautical engineering","sailing speed","hull length speed","marine physics","naval architecture","watercraft speed","boating math","nautical limits"] },
      { name: 'Kiteboarding', path: '/kiteboarding', desc: 'Calculate optimal kite size for wind speed.', keywords: ["kite size wind","parasailing math","kiteboarding wind range","wind speed kite","aerodynamics","extrem sport math","surfing wind","gear selection","kiteboarding safety","watersports math"] },
      { name: 'Scuba Weight', path: '/scuba-weight', desc: 'Achieve neutral buoyancy underwater.', keywords: ["buoyancy control","ballast math","scuba diving weights","diving physics","neutral buoyancy","diver weight belt","archimedes principle","diving safety","gear configuration","ocean diving"] },
      { name: 'Swim Time Converter', path: '/swim-time-converter', desc: 'Compare pool vs open water paces.', keywords: ["pool to open water","meters to yards","swim pace conversion","swimming speed","open water swimming","pool swimming","performance comparison","swim benchmarks","swimming math","racing math"] },
      { name: 'Windsurfing', path: '/windsurfing', desc: 'Sail and board selection math.', keywords: ["sail size wind","board volume","windsurfing math","wind speed sail","windsurfing weight","watersports gear","gliding physics","windsurfing setup","gear selection","surfing math"] },
      { name: 'Archery Kinetic Energy', path: '/archery-ke', desc: 'Measure arrow impact power.', keywords: ["arrow velocity","bow impact","archery physics","projectile energy","hunting math","bow specs","archery tech","kinetic energy formula","penetration math","archery stats"] },
      { name: 'Baseball Stats', path: '/baseball-stats', desc: 'ERA, WHIP, and batting average.', keywords: ["player dashboard","era whip batting","baseball aggregate","player stats","baseball analytics","mlb player rating","sports math","seasonal performance","baseball metrics","player evaluation"] },
      { name: 'Basketball Efficiency', path: '/basketball-per', desc: 'Calculate Player Efficiency Rating.', keywords: ["nba player rating","basketball efficiency","per formula","basketball metrics","player impact","advanced stats basketball","nba analytics","basketball performance","scoring efficiency","player valuation"] },
      { name: 'Bowling Handicap', path: '/bowling-handicap', desc: 'Standardize scores for all skill levels.', keywords: ["bowling score adjust","league handicap","standardized bowling","skill balancing","bowling math","tournament rules","bowling levels","sports fairness","bowling analytics","score balancing"] },
      { name: 'Calorie Burn Swimming', path: '/swimming-calories', desc: 'Track energy used in the pool.', keywords: ["swimming energy","calorie tracking","swim workout burn","cardio math","swimming physical activity","met values swim","health metrics","weight loss swimming","pool exercise","caloric burn"] },
      { name: 'Climbing Grade', path: '/climbing-grade-converter', desc: 'Compare global scaling systems.', keywords: ["yosemite decimal","font grade","bouldering grade","climbing comparison","mountaineering grades","v scale","climbing levels","international grades","climbing math","grade converter"] },
      { name: 'Cycling Power', path: '/cycling-power', desc: 'Estimate wattage output on bikes.', keywords: ["wattage bike","cycling effort","pedal power","climbing energy","cycling math","bicycle watts","performance metrics","cycling intensity","power output","strava math"] },
      { name: 'Draft Pick Value', path: '/draft-pick-value', desc: 'Analyze trade worth in pro sports.', keywords: ["trade value chart","draft capital","player pick worth","sports management","nfl draft value","nba draft math","trade logic","franchise strategy","scouting math","pick valuation"] },
      { name: 'Fishing Line Capacity', path: '/fishing-line-capacity', desc: 'Estimate spool fill for different diameters.', keywords: ["fishing reel capacity","spool fill","line diameter","fishing gear math","reel spooling","angling tech","line yardage","fishing maintenance","line logic","angling math"] },
      { name: 'Golf Handicap', path: '/golf-handicap', desc: 'Standardized USGA/R&A rating math.', keywords: ["golf score adjust","usga handicap","golf metrics","standardized golf","golf ranking math","course rating","slope rating","golf analytics","player performance golf","golf handicap formula"] },
      { name: 'Home Run Distance', path: '/home-run-distance', desc: 'Estimate ball flight based on exit velocity.', keywords: ["exit velocity distance","ball flight math","home run physics","baseball distance","launch angle","home run trajectory","baseball sabermetrics","mlb statcast","ball game math","physics of baseball"] },
      { name: 'Marathon Pace', path: '/marathon-pace', desc: 'Split times for various distances.', keywords: ["marathon split times","racing math","distance running","pace charts","running stamina","marathon goals","race projection","running benchmarks","endurance math","distance split"] },
      { name: 'Rugby Kicking Angle', path: '/rugby-kicking', desc: 'Optimize conversion and penalty shots.', keywords: ["rugby kick math","penalty angle","conversion success","kick trajectory","rugby physics","shooting accuracy","playing field geometry","rugby strategy","kick analytics","sports math"] },
      { name: 'Running Cadence', path: '/running-cadence', desc: 'Steps per minute and stride length.', keywords: ["steps per minute","running stride","running rhythm","cadence math","running efficiency","form analysis","running biomechanics","pace maintenance","stride length math","running metrics"] },
      { name: 'Shooting Yardage', path: '/shooting-ballistics', desc: 'Bullet drop and windage adjustment.', keywords: ["ballistics math","bullet drop","windage adjustment","shooting accuracy","range math","external ballistics","physics of shooting","firearm math","precision shooting","zeroing help"] },
      { name: 'Tennis Serve Speed', path: '/tennis-serve-speed', desc: 'Estimate velocity from video and distance.', keywords: ["serve velocity","tennis serve speed","ball speed math","tennis physics","serve power","player performance tennis","serve timing","tennis analytics","atp metrics","serve analysis"] },
      { name: 'Vertical Jump', path: '/vertical-jump', desc: 'Measure explosive lower body power.', keywords: ["explosive power","lower body strength","athletic testing","vertical leap","jump training","vertical math","plyometrics","lower body metrics","jump height","muscle explosiveness"] },
      { name: 'Wrestling Weight', path: '/wrestling-weight', desc: 'Track healthy weight class navigation.', keywords: ["weight class math","wrestling weight management","body fat wrestling","hydration wreslting","wrestling health","weight cutting","weight monitoring","high school wrestling","athletic performance","sports health"] },
    ]
  },
  {
    title: 'Sustainability & Environment',
    slug: 'environment',
    description: 'Measure your impact on the planet. Tools for carbon tracking, renewable energy planning, and eco-friendly lifestyle choices.',
    defaultGuidance: {
      whyItMatters: 'Ecological impact is best managed when it is measured. From tracking your carbon footprint to calculating the ROI of solar panels, these tools move sustainability from a vague goal to a data-driven strategy. Understanding your resource consumption allows for meaningful reductions that benefit both the planet and your wallet.',
      pitfalls: [
        'Ignoring Life-Cycle Costs: A "green" product that requires massive energy to produce and transport might have a higher net impact than a local standard alternative.',
        'Solar Shading Overlook: Calculating solar ROI without factoring in daily shading from trees or buildings can lead to significantly lower energy yields than projected.'
      ],
      proTip: 'Focus on "Carbon ROI." Replacing an old heating system often has a much higher environmental impact per dollar spent than smaller, more visible changes like banning plastic straws.'
    },
    items: [
      { name: 'Carbon Footprint', path: '/carbon-footprint', desc: 'Calculate annual CO2 emissions.', keywords: ["carbon footprint","co2 emissions","climate impact","greenhouse gas","environment math","eco footprint","sustainability","emissions tracking","climate change","ecology","nature impact","environmental science"] },
      { name: 'Solar ROI', path: '/solar-roi', desc: 'Calculate playback for solar panel installs.', keywords: ["solar payback","renewable energy","solar return","solar installation","energy savings","solar investment","photovoltaic math","green energy","utility savings","solar ROI","environmental finance"] },
      { name: 'Tree Value', path: '/tree-value', desc: 'Estimate ecological and property value of trees.', keywords: ["arboriculture","tree benefits","cliamte impact tree","property value tree","landscape investment","ecological services","carbon storage tree","aesthetic value","tree health","nature math"] },
      { name: 'Water Usage', path: '/water-usage', desc: 'Track daily and monthly household consumption.', keywords: ["water consumption","utility billing","water footprint","household water","conservation","environment math","plumbing usage","water saving","utility tracking","drought math","eco water"] },
      { name: 'Wind Energy', path: '/wind-energy', desc: 'Estimate power output from turbines.', keywords: ["wind power","turbine output","renewable energy","wind speed power","clean energy","aerodynamics","utility generation","wind farm math","energy physics","wind turbine"] },
      { name: 'Recycling Impact', path: '/recycling-impact', desc: 'Visualize energy saved through recycling.', keywords: ["recycling energy","waste reduction","eco impact","sustainability","resource conservation","material reuse","landfill impact","recycling benefits","ecology","green living"] },
      { name: 'Compost Ratio', path: '/compost-ratio', desc: 'Optimize green-to-brown waste mix.', keywords: ["composting","soil science","waste management","organic recycling","green brown ratio","garden nutrition","compost mix","sustainability","microbiology","nature math"] },
    ]
  },
  {
    title: 'Culinary & Cooking',
    slug: 'culinary',
    description: 'Precision in the kitchen and at the bar. Professional scales for bakers, chefs, and home cooks to ensure perfect results every time.',
    defaultGuidance: {
      whyItMatters: 'Cooking is a blend of artistry and chemistry. Professional culinary math, such as baker’s percentages or recipe scaling, ensures that your dishes are consistent whether you\'re serving a family of four or a banquet of forty. Precision here prevents wasted ingredients and ensures the perfect balance of flavors and textures.',
      pitfalls: [
        'Volume vs. Weight in Baking: Measuring flour by the cup instead of by grams can lead to a 20% variance in actual quantity, resulting in dry or dense baked goods.',
        'Scaling Liquid Reductions: When doubling a recipe, reducing a sauce doesn\'t always take double the time. You must watch the viscosity rather than just the clock.'
      ],
      proTip: 'In baking, treat flour as 100% and calculate all other ingredients relative to it. This "Baker\'s Percentage" method allows you to adjust hydration levels for the perfect crust every time.'
    },
    items: [
      { name: 'Baker\'s Percentage', path: '/bakers-percentage', desc: 'Calculate ingredient ratios relative to flour.', keywords: ["flour weight ratio","baking math","bread recipe scaling","ingredient percentages","professional baking","bakers percentage formula","dough math","baking tool","recipe math","bread making"] },
      { name: 'Recipe Scaling', path: '/recipe-scaler', desc: 'Adjust ingredient quantities for different serving sizes.', keywords: ["serving size adjust","recipe conversion","batch cooking math","ingredient math","kitchen tools","proportional cooking","recipe math helper","cooking efficiency","volume scaling","kitchen utilities"] },
      { name: 'Butter to Oil', path: '/butter-to-oil', desc: 'Convert between solid fats and liquid oils in baking.', keywords: ["baking swaps","solid to liquid fat","butter oil conversion","baking chemistry","ingredient substitution","baking math","fats in baking","baking tools","substitution guide","kitchen math"] },
      { name: 'Egg Substitute', path: '/egg-substitute', desc: 'Find alternatives for vegan or allergy-friendly baking.', keywords: ["vegan baking","allergy friendly","egg replacement","baking swaps","plant based baking","substitution guide","vegan cooking","binding agents","baking chemistry","dietary adjustments"] },
      { name: 'Coffee-Water Ratio', path: '/coffee-ratio', desc: 'Calculate grounds needed for the perfect brew.', keywords: ["coffee grounds weight","water coffee ratio","brew strength","barista math","extraction math","pour over math","coffee brewing","perfect cup coffee","brewing tools","coffee math"] },
      { name: 'Brine Calculator', path: '/brine-concentration', desc: 'Achieve perfect salt percentage for meat and pickling.', keywords: ["salt percentage brine","wet brining math","meat curing","pickling salt","food preservation","culinary math","salt to water ratio","brine strength","cooking science","brining tools"] },
      { name: 'Pizza Dough Yield', path: '/pizza-dough', desc: 'Calculate ball weights and hydration levels.', keywords: ["dough ball weight","pizza hydration","pizzeria math","dough yield","crust science","pizza making","ingredient ratios","professional pizza","batch dough","pizza tools"] },
      { name: 'Slow Cooker Adjust', path: '/slow-cooker-time', desc: 'Convert standard bake times to slow cooker durations.', keywords: ["cook time conversion","standard to slow cooker","crockpot math","cooking duration","slow cooking adjustment","kitchen tools","oven to crockpot","cooking timing","meal prep math","culinary math"] },
      { name: 'Meat Smoking Time', path: '/meat-smoking', desc: 'Estimate finish times based on weight and temp.', keywords: ["bbq smoking times","meat smoking weight","smoker temp","pitmaster math","meat done time","barbecue timing","smoking duration","bbq guide","meat cooking math","cooking times"] },
      { name: 'Hydration Calculator', path: '/dough-hydration', desc: 'Calculate water-to-flour ratio for breads.', keywords: ["flour water ratio","bread hydration","baking math","dough consistency","gluten development","artisan bread math","hydration percentage","baking tools","dough math","sourdough hydration"] },
    ]
  },
  {
    title: 'Academic & Education',
    slug: 'academic',
    description: 'Tools for students, researchers, and writers. Manage your grades, track your reading, and optimize your study sessions with clinical precision.',
    defaultGuidance: {
      whyItMatters: 'Academic success is often a matter of strategic time management and metric tracking. By calculating reading times, speaking durations, and target grades, students and educators can move beyond stress and focus on high-impact study sessions that maximize retention and performance.',
      pitfalls: [
        'The "Cramming" Delusion: Scientific studies show that 10 one-hour sessions are significantly more effective than one 10-hour session. Use the "Forgetting Curve" tool to schedule optimal reviews.',
        'Word Count vs. Page Count: Font size and margins significantly skew page length. Always calculate by word count for professional or academic submissions.'
      ],
      proTip: 'Read your own speech or essay out loud while timing it. The "Speaking Time" calculator is an estimate, but your natural cadence will reveal if you have too much content for your allotted timeframe.'
    },
    items: [
      { name: 'Word to Pages', path: '/word-to-page', desc: 'Estimate document length based on font and spacing.', keywords: ["document length","word count to pages","essay length","writing math","manuscript sizing","font pages","spacing math","writing tools","productivity","document formatting"] },
      { name: 'Reading Time', path: '/reading-time', desc: 'Calculate how long it takes to finish a text.', keywords: ["reading speed","finish time text","article duration","reading math","content analysis","time to read","blog metrics","accessibility math","reading stats","text estimation"] },
      { name: 'Word to Time', path: '/word-to-time', desc: 'Minutes to Words converter for reading and speaking.' },
      { name: 'Speaking Time', path: '/speaking-time', desc: 'Estimate speech duration based on word count.', keywords: ["speech duration","presentation timing","speaking speed","word count to time","public speaking","speech prep","timer for text","communication math","verbal speed","speech metrics"] },
      { name: 'GPA Advanced', path: '/gpa-advanced', desc: 'Calculate weighted and unweighted GPA with credits.', keywords: ["grade point average","weighted gpa","academic status","secondary school math","college credits","gpa formula","transcript helper","academic goals","credit hours","grading scales"] },
      { name: 'Class Rank', path: '/class-rank', desc: 'Estimate your academic standing in a cohort.', keywords: ["academic standing","percentile rank","student placement","cohort comparison","education math","class placement","academic achievement","ranking system student","achievement metrics","school stats"] },
      { name: 'Study Session Timer', path: '/study-timer', desc: 'Optimize focus with Pomodoro and interval math.', keywords: ["pomodoro timer","focus intervals","study efficiency","productivity math","exam prep","time management","learning schedule","study blocks","academic focus","time tracker"] },
      { name: 'Forgetting Curve', path: '/forgetting-curve', desc: 'Schedule review sessions for maximum retention.', keywords: ["memory retention","spaced repetition","learning curve math","review sessions","ebbinghaus curve","cognitive psychology math","study science","maximum retention","memory training","learning durability"] },
      { name: 'Bibliography Check', path: '/bibliography-check', desc: 'Verify citation count and source diversity.', keywords: ["source diversity","citation count","academic research","bibliography math","research quality","source audit","citation tracker","academic help","bibliometric analysis","scholarly sources"] },
      { name: 'Grade Calculator', path: '/grade', desc: 'Find the score needed to reach your target grade.' },
      { name: 'Final Exam Grade', path: '/final-exam-grade', desc: 'Find the score needed to reach your target grade.', keywords: ["grade needed","final exam score","target grade math","academic calculator","passing score","exam prep","grade calculator","school math","grading curve","results projector"] },
      { name: 'Academic Bibliography', path: '/academic-bibliography', desc: 'Standardize source tracking.', keywords: ["citation tracker","source management","bibliography math","research assistant","scholarly sources","academic writing","referencing helper","source list","academic tools","research bib"] },
    ]
  },
  {
    title: 'Hobbies & Creative',
    slug: 'hobbies',
    description: 'Calculations for makers, gamers, and artists. From photography precision to 3D printing costs, we handle the math behind your passions.',
    defaultGuidance: {
      whyItMatters: 'Creative hobbies often involve technical "invisible" math that dictates the quality of the final work. Whether it\'s the depth of field in photography or the stitch count in knitting, understanding the underlying ratios allows you to troubleshoot issues and replicate your best results reliably.',
      pitfalls: [
        'Ignoring "Crop Factor" in Photography: A 50mm lens behaves differently on a full-frame sensor versus a crop sensor. Forgetting this will lead to unexpected framing and focus depth.',
        'Low Infill in 3D Printing: Saving on material by reducing infill can lead to structural failure in functional parts. Use the cost tool to find the balance between strength and expense.'
      ],
      proTip: 'Use the "Elo Rating" system for any competitive hobby to match yourself with players of similar skill. This ensures you\'re sufficiently challenged without being overwhelmed, leading to faster skill acquisition.'
    },
    items: [
      { name: 'Depth of Field', path: '/depth-of-field', desc: 'Measure focus range for photography.', keywords: ["focus range","photography math","bokeh calculation","lens physics","sharpness range","optical math","camera settings","fstop depth","dof calculator","cinematography"] },
      { name: '3D Print Cost', path: '/3d-print-cost', desc: 'Estimate material and energy expenses for models.', keywords: ["filament cost","3d printing fuel","maker math","electricity cost 3d","printing time","prototyping costs","additive manufacturing math","slice cost","material usage","printing economy"] },
      { name: 'RPG XP Calculator', path: '/rpg-xp', desc: 'Track experience points and leveling curves.', keywords: ["experience points","leveling math","rpg progression","game mechanics","character level","dnd xp","grind calculator","gaming stats","level up curve","experience math"] },
      { name: 'Elo Rating', path: '/elo-rating', desc: 'Calculate skill levels for competitive gaming.', keywords: ["matchmaking rating","skill levels","competitive gaming math","rankings system","mmr calculator","skill math","gaming analytics","preeiction model","player rank","elo formula"] },
      { name: 'ISO Noise', path: '/iso-noise', desc: 'Predict image grain based on sensor settings.', keywords: ["image grain","sensor noise","iso performance","photography math","digital image quality","shutter math","sensor metrics","photography analysis","low light noise","noise reduction math"] },
      { name: 'Frame Rate Delay', path: '/frame-rate-delay', desc: 'Calculate ms intervals for animations.', keywords: ["animation timing","ms intervals","frame delay","stop motion math","video editing timing","refresh rate","visual effects math","animation frame","frame per second","temporal math"] },
      { name: 'Aperture/F-stop', path: '/aperture-math', desc: 'Calculate light intake and lens speed.', keywords: ["aperture diameter","f stop math","lens speed","light intake","exposure math","optical physics","photography settings","lens geometry","aperture physics","camera math"] },
      { name: 'Print Resolution', path: '/print-resolution', desc: 'Determine DPI needed for target physical sizes.', keywords: ["dpi calculation","print size math","resolution requirements","pixel density","graphic design math","printing specs","large format print","pixel to inch","digital to print","image quality"] },
      { name: 'Knitting Gauge', path: '/knitting-gauge', desc: 'Calculate stitches and rows for patterns.', keywords: ["stitch count","pattern math","yarn assessment","knitting project","rows per inch","handicraft math","garment sizing","knitting gauge formula","fiber arts math","pattern adjustment"] },
      { name: 'Fish Tank Volume', path: '/fish-tank-volume', desc: 'Gallons and weight for aquarium setups.', keywords: ["aquarium capacity","gallon math","tank weight","water volume","aquarium maintenance","fish tank size","aquarist tools","physical volume","water weight","tank math"] },
    ]
  },
  {
    title: 'Tech & Programming',
    slug: 'tech',
    description: 'Digital utilities for developers and technicians. Handle data conversions, network subnets, and coding mathematics.',
    defaultGuidance: {
      whyItMatters: 'The digital world is built on precise data structures and network logic. Accurate subnet mapping, regex verification, and latency calculations are essential for building secure, efficient, and scalable software. These tools help developers eliminate bugs and optimize performance before the code even reaches production.',
      pitfalls: [
        'Hardcoding "Magic Numbers": Using fixed values for things like API rate limits or timeout durations instead of calculating them based on traffic logs leads to systems that break under load.',
        'Regex Greediness: Poorly written regular expressions can lead to "catastrophic backtracking," significantly slowing down your application\'s response time.'
      ],
      proTip: 'Always calculate your "Payload Size" during API design. Reducing the weight of your JSON objects by just 10% can lead to massive cost savings and performance gains in high-traffic mobile applications.'
    },
    items: [
      { name: 'Subnet Mask', path: '/subnet-mask', desc: 'Calculate network ranges and host counts.', keywords: ["ip address math","network range","host count","it engineering","networking basics","subnet range","ipv4 math","network masking","cidr converter","routing math"] },
      { name: 'Hex to Decimal', path: '/hex-to-decimal', desc: 'Convert programming codes to standard numbers.', keywords: ["programming base","number conversion","binary hex dec","it developer tools","computer science math","base 16 to 10","coding conversion","software math","computing basics","system numbers"] },
      { name: 'Cron Expression', path: '/cron-expression', desc: 'Plan and verify automated task schedules.', keywords: ["schedule pattern","cron job math","automation logic","devops tools","task scheduling","server automation","cron verify","linux scheduler","software admin","time expression"] },
      { name: 'Payload Size', path: '/payload-size', desc: 'Estimate data transmission weights for APIs.', keywords: ["api data weight","json size","transmission math","bandwidth usage","data overhead","developer tools","request size","server performance","payload analysis","api optimization"] },
      { name: 'Latency Calculator', path: '/network-latency', desc: 'Calculate round-trip time based on distance.', keywords: ["network delay","round trip time","ping math","data speed distance","infrastructure math","latency analysis","speed of light fiber","networking metrics","data travel time","connection speed"] },
      { name: 'Regex Tester', path: '/regex-tester', desc: 'Verify pattern matching for search and logic.', keywords: ["pattern match","regular expression","search logic","developer tools","regex debugging","string search","code verification","text parsing","search patterns","logic verify"] },
      { name: 'SQL Injection Risk', path: '/sql-injection-risk', desc: 'Analyze query strings for basic vulnerabilities.', keywords: ["security audit","query vulnerability","risk assessment","database security","hacking prevention","cybersecurity math","sql protection","app security","security checker","risk analysis"] },
      { name: 'JSON Validator', path: '/json-validator', desc: 'Verify structure and syntax of data objects.', keywords: ["data structure","syntax check","api integration","json verification","developer tools","software integrity","data formatting","logic check","syntax errors","coding help"] },
      { name: 'Bcrypt Rounds', path: '/bcrypt-rounds', desc: 'Calculate hashing work factors for security.', keywords: ["hash cost","security math","password hashing","work factor","security engineering","cryptography math","hashing security","cybersecurity tool","encryption load","security cycles"] },
      { name: 'API Rate Limit', path: '/api-rate-limit', desc: 'Calculate request quotas over time periods.', keywords: ["request quota","api limits","concurrency math","server load","api management","developer tools","usage limits","rate limiting strategy","software admin","quota tracking"] },
      { name: 'Docker Image Size', path: '/docker-size', desc: 'Optimize container weights for deployment.', keywords: ["container weight","layer size","deployment optimization","docker analytics","cloud engineering","image footprint","devops math","storage efficiency","cloud costs","containerization"] },
      { name: 'Git Commit Frequency', path: '/git-commit-frequency', desc: 'Analyze developer activity trends.', keywords: ["developer activity","coding trends","git analytics","repository health","software metrics","productivity math","contribution board","coding velocity","coding stats","software management"] },
      { name: 'Hex to RGB', path: '/hex-to-rgb', desc: 'Convert web colors to design values.', keywords: ["web color","design conversion","css colors","ui branding","hex to rgb math","frontend tools","digital design","color picker","color codes","graphic design"] },
      { name: 'RGB to HEX', path: '/rgb-to-hex', desc: 'Create code constants from color charts.', keywords: ["css constants","design codes","ui development","rgb to hex math","frontend helper","digital design","color conversion","color chart","palette builder","branding tools"] },
      { name: 'Unix Time', path: '/unix-time', desc: 'Convert epoch timestamps to readable dates.', keywords: ["epoch converter","unix timestamp","programming time","it developer tools","time format","system time","unix date","database time","computer science math","software timestamps"] },
      { name: 'Mbps to Gbps', path: '/mbps-to-gbps', desc: 'Network bandwidth scaling.', keywords: ["bandwidth scaling","network units","it infrastructure","mbps to gbps conversion","data speed","telecom math","internet speed","networking metrics","unit converter","data throughput"] },
      { name: 'Byte Conversion', path: '/byte-conversion', desc: 'Scale from bits to petabytes.', keywords: ["digital units","storage scale","data size math","byte converter","bits to petabytes","it math","infrastructure planning","data storage","digital capacity","unit conversion"] },
      { name: 'Mbps Calculator', path: '/mbps', desc: 'Calculate download and upload times.', keywords: ["file download time","data speed","internet speed","bandwidth math","download time estimator","it tools","consumer tech math","transfer speed","digital patience","speed tracker"] },
      { name: 'Capacitance Converter', path: '/capacitance', desc: 'Farad units for circuit design.', keywords: ["circuit design","electrical component","capacitor units","ee math","electrical engineering","capacitance scale","farad converter","circuit analysis","electronics math","hardware design"] },
    ]
  },
  {
    title: 'Travel & Lifestyle',
    slug: 'lifestyle',
    description: 'Optimize your daily adventures. From flight planning to lifestyle milestones, manage every aspect of your mobile existence.',
    defaultGuidance: {
      whyItMatters: 'Global mobility requires logistical precision. From managing jet lag to splitting expenses with roommates, these tools streamline the complexities of a mobile lifestyle. Accuracy in travel planning ensures that you spend more time enjoying your destination and less time navigating the stress of unforeseen costs or time-zone errors.',
      pitfalls: [
        'The "Cash Value" Illusion of Miles: Not all frequent flyer miles are equal. Calculating the "cents per mile" value is the only way to know if you\'re getting a good deal or if you should just pay cash.',
        'Underestimating Recovery Time: Jet lag isn\'t just about being tired; it\'s a metabolic shift. Forgetting to calculate your recovery window can ruin the first three days of an international trip.'
      ],
      proTip: 'Use the "Luggage Capacity" tool to actually measure your bags rather than relying on the manufacturer\'s "liters" claim. Manufacturers often include pockets that aren\'t usable for bulk items, leading to over-packing errors.'
    },
    items: [
      { name: 'Jet Lag Recovery', path: '/jet-lag', desc: 'Calculate the time needed to adjust to new zones.', keywords: ["circadian rhythm","timezone shift","travel adjustment","sleep health","jet lag math","time adjustment","biological clock","health metrics","travel recovery","wellness math"] },
      { name: 'Pack Your Bag', path: '/luggage-capacity', desc: 'Estimate volume and weight for travel gear.', keywords: ["travel volume","luggage weight","packing logic","travel efficiency","gear management","luggage math","vacation prep","baggage capacity","holiday logistics","travel gear"] },
      { name: 'Passport Renewal', path: '/passport-renewal-timer', desc: 'Track validity and time needed for updates.', keywords: ["travel validity","passport timer","document expiration","travel planning","government math","document tracking","travel prep","passport management","renewal timing","travel legal"] },
      { name: 'Frequent Flyer Miles', path: '/mileage-value', desc: 'Calculate the cash value of airline points.', keywords: ["airline points","loyalty value","travel finance","points conversion","travel rewards","miles to cash","flight rewards","travel savings","airline loyalty","points math"] },
      { name: 'Wait Time', path: '/wait-time', desc: 'Probability analysis for queues and services.', keywords: ["queue probability","service wait","waiting time math","logistics math","customer experience","service speed","retail math","waiting analytics","service queuing","efficiency math"] },
      { name: 'Wedding Budget', path: '/wedding-budget', desc: 'Plan and track expenses for special events.', keywords: ["event planning","wedding costs","budget tracker","financial planning","hospitality math","celebration budget","expense management","wedding math","party planning","event logistics"] },
      { name: 'Roommate Expense', path: '/roommate-split', desc: 'Fairly divide household costs and utilities.', keywords: ["household split","utility division","roommate math","rent splitting","shared expenses","living costs","fair share","expense management","budget tool","household finance"] },
      { name: 'Gift Tax', path: '/gift-tax', desc: 'Analyze tax implications for large transfers.', keywords: ["tax implications","asset transfer","fiscal liability","tax planning","gift tax math","estate planning","financial regulation","tax liability","money transfer tax","finance math"] },
      { name: 'Vacation Fund', path: '/vacation-savings', desc: 'Calculate monthly savings to reach travel goals.', keywords: ["travel savings","vacation goal","monthly savings math","financial planning","holiday fund","savings tracker","budgeting","travel budget","future planning","fiscal goals"] },
      { name: 'Daily Habits', path: '/habit-streak', desc: 'Track consecutive days of life improvements.', keywords: ["habit tracking","consecutive streaks","behavioral math","self improvement","daily routine","habit streak","persistence metrics","life hacks","routine tracker","goal tracking"] },
    ]
  },
  {
    title: 'Biology & Life Sciences',
    slug: 'biology',
    description: 'Advanced tools for biotechnology, microbiology, and genetics. Calculate concentrations, dilutions, and mapping for precise lab results.',
    defaultGuidance: {
      whyItMatters: 'Life sciences operate at the intersection of complex biological systems and rigorous mathematical models. Whether you\'re calculating DNA concentrations or mapping genetic crosses, precision is vital for laboratory reproducibility. These tools help eliminate the "human error" factor in stoichiometric and generational calculations.',
      pitfalls: [
        'Dilution Errors: Miscalculating the C1V1=C2V2 ratio can ruin an entire multi-day experiment. Always double-check your initial concentrations before performing a serial dilution.',
        'Ignoring Population Caps: When calculating bacterial generation time, forgetting that resources are finite (the plateau phase) leads to unrealistic projections of growth.'
      ],
      proTip: 'In genetics, always draw the Punnett square manually once to visualize the ratios before using the calculator. This helps you identify if it\'s a simple Mendelian pattern or if you\'re looking at more complex linked traits.'
    },
    items: [
      { name: 'Annealing Temp', path: '/annealing-temperature', desc: 'Optimal PCR primer binding temperature.', keywords: ["pcr primer","molecular biology","dna annealing","lab math","biotech research","genetic science","primer binding","genomics math","biological physics","laboratory tools"] },
      { name: 'Generation Time', path: '/generation-time', desc: 'Calculate bacterial population growth rates.', keywords: ["bacterial growth","microbiology math","population doubling","logarithmic growth","culture math","generation rate","biological physics","experiment timing","microbe growth","scientific lab"] },
      { name: 'Cell Dilution', path: '/cell-dilution', desc: 'Manage sample concentrations for subculturing.', keywords: ["serial dilution","cell concentration","subculturing math","lab protocol","v1 c1 v2 c2","stock solution","microbiology tool","cell density","titration math","biological lab"] },
      { name: 'Cell Doubling Time', path: '/cell-doubling-time', desc: 'Calculate time between cell divisions.', keywords: ["cell division rate","doubling time formula","tissue culture","growth kinetics","biology math","oncology math","mitosis frequency","cell cycle duration","proliferative math","lab stats"] },
      { name: 'DNA Concentration', path: '/dna-concentration', desc: 'Analyze purity and quantity of genetic samples.', keywords: ["nucleic acid purity","spectrophotometry math","genetics lab","dna quantification","a260 a280 ratio","genomic samples","dna yield","molecular biology","lab ethics","genetic math"] },
      { name: 'Ligation Calculator', path: '/ligation', desc: 'Determine molar ratios for cloning inserts.', keywords: ["molar ratios","cloning logic","insert vector ratio","ligation math","molecular cloning","plasmid construction","dna ligation","biological engineering","lab protocol","gene splice"] },
      { name: 'Log Reduction', path: '/log-reduction', desc: 'Measure efficacy of sterilization processes.', keywords: ["sterilization efficacy","disinfection math","microbial kill","log reduction formula","infection control","industrial hygiene","pathogen removal","safety math","public health","decontamination"] },
      { name: 'Protein Concentration', path: '/protein-concentration', desc: 'Calculate levels in biological samples.', keywords: ["protein assay","bradford method math","concentration calculation","biochemistry lab","protein yield","sample analysis","biological physics","enzyme math","molecular weight","standard curve"] },
      { name: 'Allele Frequency', path: '/allele-frequency', desc: 'Analyze distribution of genetic variants.', keywords: ["hardy weinberg","genetics population","variant frequency","allele distribution","genomic math","inheritance patterns","genetic diversity","biology stats","evolutionary biology","variant math"] },
      { name: 'Dihybrid Cross', path: '/dihybrid-cross', desc: 'Punnett square for two independent traits.', keywords: ["punnett square","two trait cross","genetic probability","mendelian inheritance","phenotype ratio","genotype math","heredity patterns","biology homework","trait tracking","genetic cross"] },
      { name: 'DNA Copy Number', path: '/dna-copy-number', desc: 'Calculate copies per unit of weight.', keywords: ["copies per weight","dna abundance","pcr math","molecular biology","gene quantification","dna weight formula","genetic math","biological concentration","laboratory math","sequence count"] },
      { name: 'DNA to mRNA', path: '/dna-to-mrna', desc: 'Transcribe genetic sequences online.', keywords: ["transcription helper","rna sequence converter","genetic code","messenger rna","dna transcription","molecular biology","translation math","genomic data","sequencing tools","bioinformatics"] },
      { name: 'Punnett Square', path: '/punnett-square', desc: 'Standard genetic cross visualization.', keywords: ["mendelian genetics","genetic probability","trait inheritance","punnett square math","heredity check","biology help","offspring ratio","genotype projector","homozygous heterozygous","genetic cross"] },
      { name: 'qPCR Efficiency', path: '/qpcr-efficiency', desc: 'Analyze amplification performance.', keywords: ["amplification performance","ct values","real time pcr","quantification math","genetic analysis efficiency","qpcr slope","gene expression","molecular biology","laboratory math","cycle threshold"] },
      { name: 'Trihybrid Cross', path: '/trihybrid-cross', desc: 'Complex three-trait genetic mapping.', keywords: ["three trait punnett","complex genetics","inheritance probability","polygenic traits","advanced biology","genotype mapping","phenotype diversity","mendelian math","genetic simulator","trait analysis"] },
    ]
  },
  {
    title: 'Pets & Animals',
    slug: 'pets',
    description: 'Expert care tools for your animal companions and livestock. Calculate health dosages, track pregnancy, and manage nutritional needs for all species.',
    defaultGuidance: {
      whyItMatters: 'Expert care for animals requires understanding their unique biological timelines and nutritional needs. From tracking a horse\'s gestation to calculating safe dosages for a dog, these tools provide pet owners and livestock managers with the objective data needed to ensure animal welfare and optimal health outcomes.',
      pitfalls: [
        'Breed-Specific Variables: A generic "dog food" calculation might be too high for a sedentary breed and too low for an active working dog. Always adjust for the specific energy level of your pet.',
        'Dosage Scaling Errors: Never assume a human dose can be scaled down by weight for an animal. Metabolism between species varies wildly, and some human-safe substances (like chocolate or onions) are toxic to pets.'
      ],
      proTip: 'Track your pet\'s "Body Condition Score" rather than just their weight. A Labrador and a Greyhound might weigh the same but have very different healthy body fat percentages.'
    },
    items: [
      { name: 'Dog Pregnancy', path: '/dog-pregnancy', desc: 'Track gestation and expected delivery date.', keywords: ["canine gestation","puppy due date","dog breeding","whelping schedule","pregnant dog care","pet pregnancy math","canine reproduction","veterinary tools","breeder planner","litter due date"] },
      { name: 'Cat Pregnancy', path: '/cat-pregnancy', desc: 'Feline gestation milestones and due dates.', keywords: ["feline gestation","kitten due date","cat breeding","queening schedule","cat pregnancy status","pet health math","feline reproduction","veterinary help","cat birth coach","litter milestones"] },
      { name: 'Horse Gestation', path: '/mare-gestation', desc: 'Long-term equine pregnancy tracking.', keywords: ["equine gestation","foaling due date","mare pregnancy","horse breeding","equine reproduction","horse health math","gestation duration","stable management","breeder utility","equestrian tools"] },
      { name: 'Cow Gestation', path: '/cow-gestation', desc: 'Analyze livestock breeding cycles.', keywords: ["livestock breeding","bovine gestation","calving due date","cattle management","farm math","cow pregnancy tracker","dairy farming","beef production","agricultural tools","breeding cycles"] },
      { name: 'Goat Gestation', path: '/goat-gestation', desc: 'Due date estimator for Caprine livestock.', keywords: ["caprine gestation","kidding due date","goat breeding","livestock reproduction","goat health math","homesteading tools","breeding schedule","fetal development goat","agricultural business","goat farming"] },
      { name: 'Sheep Gestation', path: '/sheep-gestation', desc: 'Ovine gestation and lambing schedule.', keywords: ["ovine gestation","lambing due date","sheep breeding","livestock management","sheep farming math","lambing schedule","breeding planning","wool production","agricultural tools","reproduction math"] },
      { name: 'Swine Gestation', path: '/swine-gestation', desc: 'Pig breeding and farrowing calculator.', keywords: ["porcine gestation","farrowing due date","pig breeding","swine management","hog farming","breeding math","livestock reproduction","piggy due date","commercial farming","swine health"] },
      { name: 'Rabbit Gestation', path: '/rabbit-gestation', desc: 'Breeding cycle for lagomorphs.', keywords: ["rabbit breeding","lagomorph gestation","kindling due date","rabbitry management","bunny pregnancy","rabbit health math","breeding cycle rabbit","small animal care","rabbitry production","animal hub"] },
      { name: 'Guinea Pig Pregnancy', path: '/guinea-pig-pregnancy', desc: 'Due dates for cavy companions.', keywords: ["cavy gestation","guinea pig birth","small pet pregnancy","guinea pig due date","cavy breeding","pet care math","guinea pig health","companion animal","mating schedule","birth tracker"] },
      { name: 'Llama Calculator', path: '/llama', desc: 'Gestation and health metrics for Camelids.', keywords: ["camelid gestation","llama health","alpaca breeding","gestation math","livestock reproduction","animal weight llama","farming tools","llama tracker","animal health metrics","camelid care"] },
      { name: 'Dog Toxicity (Chocolate)', path: '/dog-chocolate-toxicity', desc: 'Safety check for cocoa ingestion.', keywords: ["chocolate poisoning","dog safety","theobromine toxicity","canine health","vet emergency check","cocoa logic","dog owner help","toxic ingredients dogs","pet safety math","veterinary alert"] },
      { name: 'Dog Toxicity (Onion)', path: '/dog-onion-toxicity', desc: 'Safety check for allium ingestion.', keywords: ["onion toxicity","allium poisoning","dog safety","canine health","toxic foods for dogs","vegetable safety","vet emergency math","canine red blood cells","pet owner guide","dog toxin checker"] },
      { name: 'Dog Toxicity (Raisin)', path: '/dog-raisin-toxicity', desc: 'Safety check for grape/raisin ingestion.', keywords: ["grape poisoning","raisin toxicity","dog safety","kidney health dog","pet emergency check","toxic fruit dogs","veterinary help","pet health math","dog owner alert","toxin calculator"] },
      { name: 'Dog BMI', path: '/dog-bmi', desc: 'Analyze canine body condition score.', keywords: ["body condition score","dog obesity","canine bmi","pet health math","dog weight management","veterinary tools","dog fitness","ideal dog weight","canine health","pet owner help"] },
      { name: 'Dog Crate Size', path: '/dog-crate-size', desc: 'Determine comfortable dimensions for kennels.', keywords: ["kennel dimensions","crate training","dog enclosure size","pet comfort math","home setup dogs","pet equipment sizing","dog housing","crate safety","animal welfare","kennel guide"] },
      { name: 'Dog Harness Size', path: '/dog-harness-size', desc: 'Find the correct fit for canine equipment.', keywords: ["canine gear","harness fit","dog chest girth","pet accessory sizing","walking gear dogs","correct harness size","dog equipment","pet safety","harness measurement","equipment tools"] },
      { name: 'Dog Heat Cycle', path: '/dog-heat-cycle', desc: 'Track reproductive timing for canines.', keywords: ["canine estrus","breeding timing","dog heat cycle","canine reproduction","veterinary math","breeding cycles","dog health tracker","reproductive milestones","breeder tools","pet owner help"] },
      { name: 'Dog Water Intake', path: '/dog-water-intake', desc: 'Calculate daily hydration goals for dogs.', keywords: ["canine hydration","dog water needs","pet health math","dog drinking habits","dehydration prevention","canine wellness","dog care tools","water intake formula","pet safety","daily water goal"] },
      { name: 'Omega-3 For Dogs', path: '/dog-omega-3', desc: 'Dosing for healthy skin and joint support.', keywords: ["fish oil for dogs","joint support","dog supplement math","omega 3 dosing","canine health","pet skin care","nutritional math","vet recommended supplements","dog wellness","epa dha for dogs"] },
      { name: 'Raw Dog Food', path: '/raw-dog-food', desc: 'Balance ratios for ancestral canine diets.', keywords: ["ancestral dog diet","barf diet math","canine nutrition","raw feeding ratios","dog food prep","homemade dog food","pet health math","dog owner tools","nutritional balance","raw diet calculator"] },
      { name: 'Dog Life Expectancy', path: '/dog-life-expectancy', desc: 'Project lifespan by breed and weight.', keywords: ["canine longevity","breed lifespan","dog years math","pet health projector","dog life duration","canine wellness","pet statistics","veterinary data","longevity tracker","dog breed life"] },
      { name: 'Dog Dosage (Benadryl)', path: '/dog-benadryl-dosage', desc: 'Allergy medication guidelines for canines.', keywords: ["benadryl for dogs","antihistamine dose","canine allergy help","vet medication math","dog medicine safety","diphenhydramine dogs","pet health math","allergy relief dog","veterinary guidelines","dosage safety"] },
      { name: 'Dog Dosage (Metacam)', path: '/dog-metacam-dosage', desc: 'Anti-inflammatory dosing for dogs.', keywords: ["metacam for dogs","nsaid dosing","canine pain relief","vet medication math","meloxicam safety","anti inflammatory dogs","pet health math","veterinary caution","medication tracker","pain management dogs"] },
      { name: 'Dog Food Calculator', path: '/dog-food', desc: 'Determine caloric needs by weight and activity.', keywords: ["dog calorie needs","canine nutrition","portion control pet","daily feeding goal","dog food math","weight management dogs","veterinary nutrition","dog activity level","pet owner tools","feeding guide"] },
      { name: 'Cat Dosage (Benadryl)', path: '/cat-benadryl-dosage', desc: 'Safe antihistamine dosing for felines.', keywords: ["feline antihistamine","benadryl for cats","cat allergy help","vet medication math","cat medicine safety","pet health math","allergy relief cat","dosage guidelines","feline wellness","medicine safety"] },
      { name: 'Cat Quality of Life', path: '/cat-quality-of-life', desc: 'Assess senior pet wellbeing.', keywords: ["senior cat health","quality of life scale","feline wellness","pet end of life","veterinary math","cat health audit","companion animal help","wellbeing assessment","cat owner support","palliative care cat"] },
      { name: 'Horse Weight', path: '/horse-weight', desc: 'Estimate mass without a commercial scale.', keywords: ["equine weight","horse mass estimation","equestrian math","stable management","horse health","tape measure weight","veterinary tools","horse care","livestock math","equestrian business"] },
      { name: 'Turtle Tank Size', path: '/turtle-tank-size', desc: 'Calculate required habitat volume.', keywords: ["aquarium volume","turtle habitat","reptile care math","water volume turtle","turtle health","habitat sizing","aquatic pet tools","environmental math","turtle tank guide","reptile housing"] },
      { name: 'Bird Age', path: '/bird-age', desc: 'Estimate lifespan and life stage for avian pets.', keywords: ["avian lifespan","bird life stages","parrot age","bird health math","avian wellness","ornithology basics","pet bird care","bird years","longevity math","aviculture tools"] },
      { name: 'Crickets Chirping', path: '/crickets-thermometer', desc: 'Calculate temperature from cricket chirps (Dolbear\'s Law).', keywords: ["temp from chirps","dolbear law","nature thermometer","cricket math","biological physics","ambient temperature","outdoor adventure","entomology math","physics in nature","climate check"] },
      { name: 'Hamster Age', path: '/hamster-age', desc: 'Convert hamster years to human years.', keywords: ["hamster years","human age conversion","small pet lifespan","hamster health","pet age math","hamster life stage","rodent care","companion animal","age projector","small animal life"] },
      { name: 'Rabbit Cage Size', path: '/rabbit-cage', desc: 'Determine welfare-standard housing dimensions.', keywords: ["rabbit welfare","cage dimensions","bunny housing","lagomorph care math","rabbit safety","proper rabbit cage","pet health math","animal housing standards","rabbitry tools","bunny life"] },
      { name: 'Livestock Mortality', path: '/animal-mortality-rate', desc: 'Analyze herd health benchmarks.', keywords: ["herd health","livestock loss rate","mortality statistics","farm analytics","agricultural math","animal health benchmarks","commercial farming","livestock results","veterinary data","farm management"] },
      { name: 'Feed Conversion', path: '/feed-conversion-ratio', desc: 'Measure livestock growth efficiency.', keywords: ["growth efficiency","fcr formula","livestock profitability","agricultural math","feed to weight ratio","farm efficiency","commercial livestock","beef poultry production","agricultural analytics","feed math"] },
    ]
  },
  {
    title: 'Gardening & Agriculture',
    slug: 'gardening',
    description: 'Professional planning for gardens, farms, and landscapes. Optimize your yields and manage resources for sustainable growth.',
    defaultGuidance: {
      whyItMatters: 'Successful cultivation is a result of managing finite resources like water, light, and nutrients. Professional agricultural math ensures that your yields are maximized while your input costs are minimized. Precision in spacing and fertilizer application prevents resource waste and ensures the long-term health of your soil.',
      pitfalls: [
        'Ignoring "Soil Settle": When calculating soil or mulch volume, forgetting that material compacts over time can leave you 15-20% short of your desired depth.',
        'Over-Fertilization: More is not always better. Excessive nitrogen can "burn" plant roots and lead to nutrient runoff that harms local water systems.'
      ],
      proTip: 'Calculate your "Growing Degree Units" to predict harvest dates. Calendar days are often wrong because plants grow based on heat accumulation rather than the passage of time.'
    },
    items: [
      { name: 'Plant Spacing', path: '/plant-spacing', desc: 'Calculate distance for optimal growth.', keywords: ["garden geometry","plant density","spacing math","horticulture tools","crop management","agricultural math","landscape design","plant growth","farming efficiency","seeding rate"] },
      { name: 'Vegetable Yield', path: '/vegetable-yield', desc: 'Estimate harvest weight by area.', keywords: ["harvest estimation","garden productivity","crop yield math","vegetable weight","homesteading tools","agricultural math","food production","farming output","yield per area","gardening stats"] },
      { name: 'Fertilizer Calculator', path: '/fertilizer', desc: 'Determine NPK requirements for crops.', keywords: ["npk requirements","plant food math","fertilizer ratio","gardening tools","soil nutrients","agricultural math","crop nutrition","farming helper","npk formula","plant health"] },
      { name: 'Compost Calculator', path: '/compost', desc: 'Estimate volume for soil improvement.', keywords: ["soil improvement","compost volume","organic gardening","waste to soil","gardening math","soil enrichment","homesteading tools","composting logic","soil health","green waste"] },
      { name: 'Mulch Calculator', path: '/mulch-garden', desc: 'Depth and area math for garden beds.', keywords: ["mulch coverage","garden bed math","landscape supplies","soil protection","weed control math","gardening volume","bark coverage","outdoor maintenance","home improvement","garden layout"] },
      { name: 'Soil Volume', path: '/soil', desc: 'Calculate bags/yards needed for planters.', keywords: ["soil weight","planter volume","raised bed math","gardening fill","landscaping volume","cubic yards soil","potting math","garden soil bags","backyard project","dirt calculator"] },
      { name: 'Potting Soil', path: '/potting-soil', desc: 'Specific math for container gardening.', keywords: ["container gardening","potting mix math","planter volume","indoor plant care","soil weight","gardening tools","potting ratio","container volume","houseplant help","soil ingredients"] },
      { name: 'Grass Seed', path: '/grass-seed', desc: 'Estimate coverage for lawn establishment.', keywords: ["lawn coverage","grass seed math","lawn rejuvenation","turf establishment","landscaping tools","seeding rate","grass types","backyard renovation","garden math","outdoor maintenance"] },
      { name: 'Daily Light Integral', path: '/daily-light-integral', desc: 'Analyze cumulative light for greenhouse ops.', keywords: ["cumulative light","greenhouse math","dli par","photosynthesis tracking","indoor growing","plant light needs","agricultural lighting","growth monitoring","horticulture science","lighting analytics"] },
      { name: 'VPD Calculator', path: '/vpd', desc: 'Vapor Pressure Deficit for plant transpiration.', keywords: ["vapor pressure deficit","plant transpiration","indoor grow environment","humidity math","plant health","transpiration rate","greenhouse physics","grow room climate","vpd chart","biological humidity"] },
      { name: 'Corn Yield', path: '/corn-yield', desc: 'Estimate bushels per acre before harvest.', keywords: ["bushels per acre","corn harvest math","agricultural yield","farming projection","crop estimation","grain production","farming tools","harvest analytics","field math","agricultural output"] },
      { name: 'Sod Calculator', path: '/sod', desc: 'Estimate pallets or rolls needed for new lawns.', keywords: ["sod pallets","lawn rolls","turf installation","landscaping math","instant lawn","grass coverage","landscape renovation","exterior design","outdoor planning","sod estimator"] },
      { name: 'Lawn Mowing Cost', path: '/lawn-mowing-cost', desc: 'Price estimate based on acreage and terrain.', keywords: ["lawn care prices","mowing math","landscaping business","acreage mowing","grass cutting cost","outdoor maintenance","lawn service audit","service pricing","landscaping tools","mowing efficiency"] },
      { name: 'Bulb Spacing', path: '/bulb-spacing', desc: 'Graphically plan your floral displays.', keywords: ["floral layout","bulb planting math","garden design","spring flowers","landscape geometry","bulb density","gardening tools","flower bed planning","visual garden","floral math"] },
      { name: 'CO2 Grow Room', path: '/co2-grow-room', desc: 'Calculate enrichment levels for indoor farming.', keywords: ["gas enrichment","indoor farming math","grow room performance","co2 levels","plant growth optimization","greenhouse engineering","farming tech","growth science","air quality grow","photosynthesis boost"] },
      { name: 'Water Potential', path: '/water-potential', desc: 'Measure force needed for plants to extract moisture.', keywords: ["moisture extraction","osmosis math","plant hydration","soil water potential","plant physics","biological water","agricultural science","soil moisture","hydrology basics","plant life"] },
      { name: 'Acres Per Hour', path: '/acres-per-hour', desc: 'Measure field machinery efficiency.', keywords: ["field machinery","farming efficiency","acres per hour","tractor math","agricultural production","equipment metrics","field operations","operational efficiency","land management","farming speed"] },
      { name: 'Plant Population', path: '/plant-population', desc: 'Calculate total plants per acre/hectare.', keywords: ["plants per acre","crop density","farming math","agricultural planning","seeding population","plant count","farming stats","land productivity","crop spacing","agricultural strategy"] },
      { name: 'Growing Degree Units', path: '/gdu', desc: 'Track crop maturity based on temperature.', keywords: ["growing degree days","crop maturity","temperature math","agricultural timeline","seasonal heat","farming schedule","climate tracker","heat units","crop development","harvest timing"] },
      { name: 'Grain Conversion', path: '/grain-conversion', desc: 'Convert weights and volumes for harvests.', keywords: ["harvest weight","grain volume math","agricultural conversion","crop metrics","farming units","bushels to kg","grain storage","harvest analytics","market weight","agricultural trade"] },
      { name: 'Water Soluble Fertilizer', path: '/water-soluble-fertilizer', desc: 'Calculate mix ratios for fertigation.', keywords: ["fertigation math","nutrient mix","water soluble food","hydroponic feeding","concentrate ratio","farming tools","plant nutrition","irrigation mix","liquid fertilizer","precision farming"] },
    ]
  },
  {
    title: 'Time & Date',
    slug: 'time-date',
    description: "Don't waste your time counting days - every second is precious. That's why we created this set of calculators that will help you with your problems… around the clock 😉. From the days between dates to the leap year, we didn't run out the clock - each one of our calculators will help you.",
    defaultGuidance: {
      whyItMatters: 'Time is our most finite resource. Whether you\'re tracking work rotations, calculating chronological age for legal purposes, or finding the gap between two historical dates, precision ensures that your schedules are synchronized. These tools remove the ambiguity of leap years and variable month lengths.',
      pitfalls: [
        'The "Inclusive" Error: When counting days between dates, people often forget to specify if they are including both the start AND end day. This leads to a consistent "off-by-one" error in planning.',
        'Leap Year Overlook: Simple math that assumes 365 days a year will drift by several days over a decade. Professional scheduling must account for the 366-day leap year.'
      ],
      proTip: 'For long-term project management, use "Business Days" rather than total days. A 30-day deadline sounds like a month, but it\'s only about 20-22 actual work days.'
    },
    items: [
      { name: '8-Hour Shift', path: '/8-hour-shift', desc: 'Track work rotations and pay.', keywords: ["shift work","schedule","work hours","nursing shift","industrial schedule","payroll tracking","8 hour shift","work rotation","employee management","hourly pay"] },
      { name: 'Add Time', path: '/add-time', desc: 'Add durations to establish end times.', keywords: ["duration","time math","adding hours","time tracker","end time","interval math","time addition","stopwatch math","scheduling","time calculator"] },
      { name: 'Age Calculator', path: '/age', desc: 'Find exact age in years, months, and days.', keywords: ["birthday","chronological age","how old am i","years months days","exact age","legal age","life span","date math","personal stats","birthday tracker"] },
      { name: 'Age Difference', path: '/age-difference', desc: 'Compare ages between two people.', keywords: ["comparison","age gap","relationship age","sibling age","age difference","generation gap","date comparison","family math","partner age","age tracker"] },
      { name: 'Anniversary', path: '/anniversary', desc: 'Track relationships and key milestones.', keywords: ["relationship tracker","milestone","date counter","celebration","anniversary math","wedding timer","dating duration","event tracker","relationship health","milestone reminder"] },
      { name: 'Baby Age', path: '/baby-age', desc: 'Track infant development milestones.', keywords: ["infant age","weeks and months","pediatric tracking","newborn math","baby milestones","growth tracker","parenting tools","infant development","baby stats","age in weeks"] },
      { name: 'BC to AD', path: '/bc-to-ad', desc: 'Historical timeline and era conversion.', keywords: ["historical dates","era conversion","timeline math","archaeology","bc to ad","historical timeline","calendar history","ancient history","epoch conversion","chronology"] },
      { name: 'Birthday', path: '/birthday', desc: 'Countdown to your next celebration.', keywords: ["countdown","special day","age milestones","birth date","birthday timer","party planning","next birthday","zodiac dates","life tracker","event reminder"] },
      { name: 'Business Days', path: '/business-days', desc: 'Count workdays excluding weekends.', keywords: ["work days","delivery date","project timeline","business hours","calendar math","excluding weekends","deadline tracker","professional timing","project management","business days"] },
      { name: 'Calendar', path: '/calendar-math', desc: 'Plan dates and visualize schedules.', keywords: ["date planning","schedule","event tracker","monthly view","calendar math","appointment scheduling","organizer tools","time management","date visualizer","productivity"] },
      { name: 'Chronological Age', path: '/chronological-age', desc: 'Precise life span calculation.', keywords: ["exact age","legal age","milestones","life duration","chronological age","precise age","days since birth","age in seconds","personal history","identity math"] },
      { name: 'Date Calculator', path: '/date-math', desc: 'Identify days and dates forward or back.', keywords: ["calendar math","day finder","scheduling","date calculator","forward dating","backward dating","deadline math","time travel","day of week","future dates"] },
      { name: 'Date To Date', path: '/date-to-date', desc: 'Calculate the span between two events.', keywords: ["days between","duration","interval math","date range","elapsed time","date span","time between dates","project duration","calendar gap","event spacing"] },
      { name: 'Day Counter', path: '/day-counter', desc: 'Track streaks or count down to events.', keywords: ["streak tracker","event countdown","days since","day counter","habit tracker","persistence metrics","milestone counter","anniversary tracker","sobriety counter","goal progress"] },
      { name: 'Day of the Year', path: '/day-of-the-year', desc: 'Find the ordinal number of any date.', keywords: ["julian date","ordinal date","calendar day","day of the year","year progress","365 day count","programming dates","calendar stats","doy tracker","annual math"] },
      { name: 'Every Second', path: '/every-second', desc: 'Micro-precision time analysis.', keywords: ["microsecond math","life clock","time units","every second","time passing","milli-precision","time tracking","physics time","temporal analysis","clock ticks"] },
      { name: 'Hours Calculator', path: '/hours', desc: 'Total hours for payroll or study.', keywords: ["work clock","timesheet","duration tracking","hours calculator","payroll math","study hours","billable time","time log","productivity math","employment tools"] },
      { name: 'Hours and Minutes', path: '/hours-minutes', desc: 'Combine and split time units.', keywords: ["unit conversion","time addition","time subtraction","hours and minutes","total duration","time math","minutes sum","clock arithmetic","efficiency tracking","time breakdown"] },
      { name: 'Korean Age', path: '/korean-age', desc: 'Calculate cultural age variants.', keywords: ["east asian age","cultural age","solar calendar age","korean age","lunar age","international age","age system","korean culture","traditional age","age conversion"] },
      { name: 'Leap Year', path: '/leap-year', desc: 'Verify calendar corrections.', keywords: ["calendar correction","february 29","epoch math","leap year","leap day","time precision","gregorian calendar","calendar physics","astronomy math","year check"] },
      { name: 'Lunar Age', path: '/lunar-age', desc: 'Find age based on moon cycles.', keywords: ["moon calendar","chinese age","lunar cycle","lunar age","astronomy math","zodiac age","spiritual age","traditional calendar","moon age","cycle tracking"] },
      { name: 'Minute Calculator', path: '/minutes', desc: 'Convert and split short durations.', keywords: ["seconds to minutes","short duration","interval tracking","minute calculator","time units","meeting timer","segmenting time","clock math","productivity units","time breakdown"] },
      { name: 'Month Calculator', path: '/months', desc: 'Count full calendar months elapsed.', keywords: ["calendar months","project duration","billing cycle","month calculator","monthly milestones","subscription timing","pregnancy months","extended duration","calendar math","time units"] },
      { name: 'Moon Phase', path: '/moon-phase', desc: 'Track the current lunar stage.', keywords: ["astronomy","lunar cycle","full moon","new moon","moon phase","night sky","stargazing","biological rhythms","moondate","celestial events"] },
      { name: 'Palindrome Date', path: '/palindrome-date', desc: 'Find unique mirror-image dates.', keywords: ["number patterns","special dates","calendar trivia","palindrome date","mirror date","unique dates","date patterns","numerology","calendar collection","mathematical dates"] },
      { name: 'Reverse Time', path: '/reverse-time', desc: 'Counting backward from fixed points.', keywords: ["counting backwards","deadline tracking","reverse clock","reverse time","time remaining","countdown math","task timer","project finish","delivery tracker","urgency metrics"] },
      { name: 'Sidereal Time', path: '/sidereal-time', desc: 'Celestial clock for astronomy.', keywords: ["astronomy","star time","celestial math","sidereal time","telescope alignment","space time","observatory tools","night sky math","orbital mechanics","zenith timing"] },
      { name: 'Subtract Time', path: '/subtract-time', desc: 'Find remaining duration safely.', keywords: ["duration","time difference","end time","subtract time","time subtraction","clock math","remaining time","deadline adjustment","time breakdown","interval math"] },
      { name: 'Time Calculator', path: '/time', desc: 'General arithmetic for duration.', keywords: ["general time","clock math","horology","time calculator","arithmetic","time units","universal clock","time conversion","timing tool","precision math"] },
      { name: 'Time Difference', path: '/time-diff', desc: 'Gap between two specific timestamps.', keywords: ["gap between","duration","elapsed time","time difference","timestamp math","clock arithmetic","time span","interval analysis","timing metrics","event spacing"] },
      { name: 'Time Duration', path: '/duration', desc: 'Total period of any activity.', keywords: ["interval","total time","period","time duration","elapsed length","time span","duration metrics","event timing","activity tracker","time blocks"] },
      { name: 'Time to Decimal', path: '/time-decimal', desc: 'Convert time for digital spreadsheets.', keywords: ["billing math","payroll conversion","excel time","time to decimal","hourly rate","spreadsheeting","it math","work hours","decimal hours","compensation tools"] },
      { name: 'Week Calculator', path: '/weeks', desc: 'Count full weeks between dates.', keywords: ["7 day cycle","weekly rhythm","work week","week calculator","project scheduling","biweekly math","calendar weeks","time units","weekly planner","recurring events"] },
      { name: 'Military Time', path: '/military-time', desc: 'Convert 12-hour clock or find current UTC.', keywords: ["24 hour clock","navy time","utc conversion","zulu time","military time","standard to 24h","it time","system clock","time protocol","global time"] },
      { name: 'Time Zones', path: '/time-zones', desc: 'Find current time across global regions.', keywords: ["world clock","dst","gmt","timezone converter","time zones","global time","utc offset","daylight savings","meeting planner","travel time"] },
      { name: 'Unix Time', path: '/unix-time-conversion', desc: 'Convert epoch seconds to human readable dates.', keywords: ["linux time","epoch converter","timestamp","programming time","unix time","backend math","database time","system clock","raw time","seconds since epoch"] },
    ]
  },
  {
    title: 'Geographic & Cartographic',
    slug: 'geography',
    description: 'Precision mapping and spatial analysis. Convert global coordinates, calculate map scales, and handle advanced surveying math.',
    items: [
      { name: 'Coordinates', path: '/coordinates-converter', desc: 'Convert GPS to decimal or DMS.',
        keywords: ["gps conversion","decimal degrees","location math","gis tools","geography help","dms converter","coordinate systems","navigation math","mapping tools","lat long"]
      },
      { name: 'Lat Long to UTM', path: '/lat-long-to-utm', desc: 'Project global coordinates to grid systems.', keywords: ["projection systems","utm grid","geospatial math","cartography tools","military grid","coordinate projection","spatial data","itrf conversion","mapping engineering","global grid"] },
      { name: 'Degrees Minutes Seconds', path: '/dms', desc: 'Precise navigational unit conversions.', keywords: ["navigational units","dms math","angle conversion","geography tools","precise location","nautical math","aviation navigation","minutes seconds converter","arcseconds","geodesy"] },
      { name: 'Map Scale', path: '/map-scale', desc: 'Calculate real-world distances from map readings.', keywords: ["map reading","real world distance","cartography math","ratio scaling","geographic projection","measurement conversion","scale factor","topographic maps","distance calculation","surveying tools"] },
    ]
  },
  {
    title: 'Fashion & Textiles',
    slug: 'fashion',
    description: 'Precision tools for designers, crafters, and shoppers. Calculate fabric needs, find perfect international sizes, and master complicated quilting geometry.',
    items: [
      { name: 'Fabric Calculator', path: '/fabric', desc: 'Yardage needed for sewing and upholstery.', keywords: ["sewing","upholstery","yardage","textile math","fabric estimator","dressmaking","home decor","sewing project","material count","bolt length"] },
      { name: 'Bra Size Calculator', path: '/bra-size-calc', desc: 'Find the perfect fit based on band and cup measures.', keywords: ["lingerie","intimates","bra fitting","cup size","band size","measurement","underwear","comfort fit","sizing guide","woman fashion"] },
      { name: 'Circle Skirt', path: '/circle-skirt', desc: 'Calculate radius and fabric for swirling designs.', keywords: ["skirt math","sewing pattern","circle radius","full skirt","fashion design","diy clothes","skirt drafting","waist measurement","swirl skirt","draping"] },
      { name: 'Quilt Calculator', path: '/quilt', desc: 'Total sizing, blocks, and backing for blankets.', keywords: ["patchwork","batting","backing","quilt blocks","blanket math","textile art","bedding","quilting design","fabric estimator","handmade blanket"] },
      { name: 'Quilt Binding', path: '/quilt-binding', desc: 'Measure the perimeter for final finishing strips.', keywords: ["edge finishing","quilt border","binding strips","sewing perimeter","quilt closure","textile finality","binding math","quilt framing","bias tape","mitered corners"] },
      { name: 'Hexagon Quilt', path: '/hexagon-quilt', desc: 'Specific math for honeycomb textile patterns.', keywords: ["honeycomb","hexie","epp","english paper piecing","quilt geometry","patchwork hex","textile pattern","geometric quilt","block math","tiling"] },
      { name: 'Half Square Triangle', path: '/half-square-triangle', desc: 'Geometry for precision quilting blocks.', keywords: ["hst","quilt block","triangle math","patchwork","quilting basics","geometric design","fabric triangles","precision sewing","quilt layout","hst sizing"] },
      { name: 'Cross-stitch', path: '/cross-stitch', desc: 'Calculate fabric size based on stitch count and aida.', keywords: ["needlepoint","embroidery","aida cloth","stitch count","pattern sizing","needlework","thread count","hoop size","stitching math","handmade art"] },
      { name: 'Curtain Size', path: '/curtain', desc: 'Measure panels and fullness for window treatments.', keywords: ["window decor","drapery","interior design","curtain fullness","rod length","window coverage","soft furnishings","home renovation","curtain math","decorating"] },
      { name: 'Curtain Panel', path: '/curtain-panel', desc: 'Calculate width and length for custom drapes.', keywords: ["panel width","drape height","window fitting","curtain design","fabric drop","hemming","pleat math","upholstery","window dressing","custom curtains"] },
      { name: 'Tablecloth Size', path: '/tablecloth', desc: 'Find the perfect drop for any table dimension.', keywords: ["dining decor","table setting","linen size","fabric drop","table coverage","event planning","kitchen textile","rectangular tablecloth","round table","hostess math"] },
      { name: 'Weighted Blanket', path: '/weighted-blanket', desc: 'Calculate ideal weight based on body mass.', keywords: ["sensory blanket","anxiety relief","sleep aid","glass beads","blanket weight","therapeutic","comfort","diy weighted blanket","occupational therapy","heavy blanket"] },
      { name: 'Shoe Size Conversion', path: '/shoe-size-conversion', desc: 'Translate US, UK, EU, and CM measures.', keywords: ["footwear sizing","international shoe","mens shoes","womens shoes","kids shoes","size chart","cm to inches","nike size","adidas size","global sizing"] },
      { name: 'Sock Size', path: '/socks-size', desc: 'Find the correct length for knitted or store-bought socks.', keywords: ["knitting socks","foot length","sock sizing","mens socks","womens socks","hosiery","comfort fit","hand knit","footwear","shoe size match"] },
      { name: 'Glove Size', path: '/glove-size', desc: 'Measure hand circumference for the perfect fit.', keywords: ["hand size","winter gear","safety gloves","leather gloves","sizing guide","hand circumference","mittens","apparel","fitment","glove chart"] },
      { name: 'Hat Size', path: '/hat-size', desc: 'Convert head measures to standard millinery units.', keywords: ["millinery","head circumference","cap size","fedora","beanies","fitted hat","headwear","sizing","stetson size","millennium chart"] },
      { name: 'Ring Size Converter', path: '/ring-size', desc: 'Diameter and circumference to international scales.', keywords: ["jewelry","engagement ring","finger size","wedding band","gold ring","sizing belt","jeweler math","circumference","diameter","us vs uk ring"] },
      { name: 'Tie Length', path: '/tie-length', desc: 'Calculate ideal neckwear length by height and knot.', keywords: ["necktie","formal wear","suit accessories","windsor knot","mens fashion","tie sizing","style guide","fashion etiquette","dress code","length guide"] },
      { name: 'Shoelace Length', path: '/shoelace-length', desc: 'Find the correct string span by eyelet count.', keywords: ["sneakers","boots","lace eyelets","shoe repair","lacing pattern","string length","footwear maintenance","aglet","sport shoes","lacing guide"] },
      { name: 'Belt Size', path: '/belt-size', desc: 'Determine correct belt length relative to waist size.', keywords: ["waist size","leather belt","buckle fit","trousers","accessories","pant size","waist measurement","mens belts","womens belts","fashion fit"] },
      { name: 'Jacket Size', path: '/jacket-size', desc: 'Chest and shoulder math for suits and coats.', keywords: ["suit jacket","blazer","outerwear","tailoring","mens style","womens jackets","apparel sizing","fitment","shoulder width","chest measure"] },
      { name: 'Dress Size', path: '/dress-size', desc: 'Identify your fit across global fashion brands.', keywords: ["womens fashion","brand conversion","cocktail dress","evening wear","clothing sizing","fashion chart","online shopping","vanity sizing","global fit","standard size"] },
      { name: 'Jeans Size', path: '/jeans-size', desc: 'Measure waist and inseam for the perfect denim.', keywords: ["denim","levis size","waist inseam","pant fitting","bottoms","clothing size","inseam measure","mens jeans","womens jeans","fit guide"] },
      { name: 'Bikini Calculator', path: '/bikini-size', desc: 'Sizing for swimwear tops and bottoms.', keywords: ["swimsuit","summer fashion","beachwear","one piece vs two piece","bra sizing","cup size","waist size","pool wear","swim sizing","resort wear"] },
      { name: 'Bag Calculator', path: '/bag-size', desc: 'Calculate volume and dimensions for carryalls.', keywords: ["handbag","backpack","tote","luggage","storage volume","bag capacity","design math","accessories","dimensions","liter capacity"] },
      { name: 'Sunglasses Size', path: '/sunglasses-size', desc: 'Calculate frame width for facial structure.', keywords: ["eyewear","optical","face shape","lens width","bridge size","temple length","rayban size","fashion glasses","eyeglass frames","face fit"] },
      { name: 'Lost Socks', path: '/lost-socks', desc: 'Probability analysis for laundry disappearances.', keywords: ["laundry","washing machine","missing items","probability","funny math","sock monster","household mystery","dryer vortex","single socks","chances of loss"] },
      { name: 'Pleated Skirt', path: '/pleated-skirt', desc: 'Calculate fold depth and fabric width.', keywords: ["sewing pleats","box pleat","knife pleat","skirt design","tailoring","fashion math","fabric volume","sewing pattern","skirt drafting","textile design"] },
      { name: 'Quiz: Fabric', path: '/fabric-quiz', desc: 'Test your textile math and yardage skills.', keywords: ["sewing trivia","textile knowledge","fabric education","sewing quiz","yardage test","craft knowledge","diy skills","fashion education","skill check","textile challenge"] },
    ]
  },
  {
    title: 'Chemistry & Lab Science',
    slug: 'chemistry',
    description: 'Precision tools for researchers, students, and professionals. From molecular weight calculations to complex reaction thermodynamics, our chemistry suite provides accurate data for every experiment.',
    items: [
      { name: 'Atom Calculator', path: '/atom', desc: 'Calculate subatomic particles and properties.', keywords: ["protons","neutrons","electrons","isotope","nuclear math","subatomic particles","atomic structure","periodic table","quantum levels","particle physics"] },
      { name: 'Atomic Mass', path: '/atomic-mass', desc: 'Weighted average of naturally occurring isotopes.', keywords: ["amu","mass number","molar mass","isotopes","periodic table","atomic weight","chemistry math","elemental properties","nuclide","atomic physics"] },
      { name: 'Average Atomic Mass', path: '/average-atomic-mass', desc: 'Calculate based on isotopic abundance.', keywords: ["abundance","isotopes","weighted average","chemistry math","atomic mass","elemental analysis","isotopic distribution","molecular calculation","stoichiometry","relative mass"] },
      { name: 'Bond Order', path: '/bond-order', desc: 'Measure the stability and strength of chemical bonds.', keywords: ["molecular orbital","bonding electrons","stability","lewis structure","bond order","chemistry math","valence bond","molecular geometry","bond strength","electronic structure"] },
      { name: 'Chemical Name', path: '/chemical-name', desc: 'IUPAC naming and formula identification.', keywords: ["nomenclature","organic chemistry","alkanes","ionic compounds","chemical naming","iupac rules","chemistry notation","molecular formula","functional groups","chemical symbols"] },
      { name: 'Effective Nuclear Charge', path: '/effective-nuclear-charge', desc: 'Calculate Z-eff for valence electrons.', keywords: ["slaters rule","shielding constant","periodic trends","atomic physics","zeff math","valence electrons","nuclear pull","quantum mechanics","chemistry theory","atomic radius"] },
      { name: 'Electron Configuration', path: '/electron-configuration', desc: 'Assign electrons to orbitals based on energy.', keywords: ["spdf","orbitals","aufbau principle","hunds rule","pauli exclusion","electron configuration","quantum chemistry","subshells","electron maps","chemistry basics"] },
      { name: 'Electronegativity', path: '/electronegativity', desc: 'Measure atom attraction for shared electrons.', keywords: ["pauling scale","polarity","chemical bonds","periodic trends","electronegativity","dipole math","bond nature","ionicity","chemistry theory","elemental attraction"] },
      { name: 'Molar Mass', path: '/molar-mass', desc: 'Calculate the weight of one mole of a substance.', keywords: ["molecular weight","g/mol","stoichiometry","formula mass","molar mass","chemistry math","gas laws","molar calculation","elemental weight","molecular analysis"] },
      { name: 'Percent Composition', path: '/percent-composition', desc: 'Mass percentages of each element in a compound.', keywords: ["elemental analysis","mass ratio","chemical formula","composition","percent composition","chemistry math","empirical formula","molecular weight","mixture analysis","stoichiometry"] },
      { name: 'Percent Ionic Character', path: '/percent-ionic-character', desc: 'Analyze bond type based on electronegativity.', keywords: ["covalent bond","dipole moment","polarity","bond nature","percent ionic character","chemistry math","electronegativity","molecular physics","chemical bonding","character analysis"] },
      { name: 'pKa Calculator', path: '/pka', desc: 'Acid dissociation constant analysis.', keywords: ["acid strength","equilibrium","titration","ka pka conversion","pka calculator","ph math","chemical stability","dissociation constant","acid base chemistry","aqueous solutions"] },
      { name: 'Quiz: Electron Configuration', path: '/electron-configuration-quiz', desc: 'Test your knowledge of orbital filling rules.', keywords: ["chemistry quiz","learning","orbitals","education","electron configuration","atomic structure","science test","study tools","chemistry help","orbital filling"] },
      { name: 'AFR (Air-Fuel Ratio)', path: '/afr', desc: 'Stoichiometric combustion ratios for engines.', keywords: ["combustion","automotive","lambda","engine tuning","air fuel ratio","stoichiometry","mechanical engineering","exhaust metrics","fuel efficiency","dyno math"] },
      { name: 'Atom Economy', path: '/atom-economy', desc: 'Measure the efficiency of chemical processes.', keywords: ["green chemistry","synthetic efficiency","waste reduction","atom economy","chemical yield","sustainability math","industrial chemistry","reaction efficiency","production metrics","environmental impact"] },
      { name: 'Avogadro\'s Number', path: '/avogadros-number', desc: 'Convert between moles and total particles.', keywords: ["mole count","particles","molecules","atomic units","avogadro number","chemistry constant","scientific notation","molecular physics","standard units","stoichiometry"] },
      { name: 'Empirical Formula', path: '/empirical-formula', desc: 'Find the simplest whole-number ratio of elements.', keywords: ["simplest formula","mass analysis","chemical ratio","empirical formula","molecular weight","stoichiometry","composition math","chemistry basics","formula generator","chemical properties"] },
      { name: 'Grams to Moles', path: '/grams-moles', desc: 'Quick unit conversion for lab measurements.', keywords: ["unit converter","molar mass","stoichiometry","laboratory math","grams to moles","chemistry tools","molecular weight","formula mass","chemical units","mass conversion"] },
      { name: 'Hydrogen Ion Concentration', path: '/hydrogen-ion-concentration', desc: 'Calculate [H+] from pH and vice versa.', keywords: ["acidity","molarity","acid base","ph scale","hydrogen ion concentration","alkalinity","chemical logic","logarithm math","aqueous chemistry","ph converter"] },
      { name: 'Molality', path: '/molality', desc: 'Moles of solute per kilogram of solvent.', keywords: ["concentration","solvent mass","colligative properties","molality","solubility","mixture math","chemistry lab","boiling point elevation","freezing point depression","solvent tools"] },
      { name: 'Molarity', path: '/molarity', desc: 'Moles of solute per liter of solution.', keywords: ["volumetric concentration","titration","molar solution","molarity","solute moles","chemistry math","concentration units","liquid analysis","lab prep","chemical strength"] },
      { name: 'Molar Mass of Gas', path: '/molar-mass-gas', desc: 'Identify unknown gases via gas laws.', keywords: ["ideal gas law","gas density","molecular weight","molar mass of gas","gas physics","pressure volume temp","chemistry math","gas identification","molecular constant","thermodynamics"] },
      { name: 'Mole Calculator', path: '/mole', desc: 'Convert between mass, volume, and molarity.', keywords: ["mole conversion","molar unit","chemistry standard","molecular weight","stoichiometry","chemistry tools","mass to mole","volume to mole","laboratory math","chemical units"] },
      { name: 'Molecular Weight', path: '/molecular-weight', desc: 'Sum of atomic weights for any molecule.', keywords: ["formula mass","dalton unit","chemical mass","molecular weight","atomic sum","molar weight","chemistry basic","formula analysis","elemental count","molecular tools"] },
      { name: 'Mole Fraction', path: '/mole-fraction', desc: 'Ratio of moles of a component to the total.', keywords: ["mixture composition","raoults law","partial pressure","mole fraction","chemistry math","solution physics","concentration ratio","gas phase","equilibrium","component analysis"] },
      { name: 'Moles to Atoms', path: '/moles-atoms', desc: 'Calculate the total atomic count in a sample.', keywords: ["particle count","avogadro","elemental analysis","moles to atoms","molecular physics","scientific notation","chemistry math","particle calculator","atomic structure","stoichiometry"] },
      { name: 'Normality', path: '/normality', desc: 'Gram-equivalent weight per liter of solution.', keywords: ["acid base titration","equivalents","analytical chemistry","normality","chemical strength","normal solutions","volumetric analysis","lab tools","titration math","gram equivalents"] },
      { name: 'PPM to Molarity', path: '/ppm-molarity', desc: 'Convert trace concentrations to standard molarity.', keywords: ["parts per million","trace analysis","concentration units","ppm to molarity","water quality","environmental science","toxicology math","solution strength","unit converter","chemistry analytics"] },
      { name: 'Activity Coefficient', path: '/activity-coefficient', desc: 'Measure non-ideal chemical behavior.', keywords: ["ionic strength","debye huckel","thermodynamics","activity coefficient","solution physics","chemical potential","non-ideal behavior","physical chemistry","ion activity","solution theory"] },
      { name: 'Alligation', path: '/alligation', desc: 'Mix solutions of different strengths.', keywords: ["mixture math","pharmacy math","dilution","alligation","compounding","solution strength","pharmacology","medical math","blending ratios","dose calculation"] },
      { name: 'Bleach Dilution', path: '/bleach-dilution', desc: 'Safe concentrations for sanitizing.', keywords: ["cleaning","disinfectant","safety","household chemistry","bleach dilution","sanitization","chlorine ratio","hygiene math","public health","decontamination"] },
      { name: 'Buffer Capacity', path: '/buffer-capacity', desc: 'Measure the resistance to pH changes.', keywords: ["acid base","resistance","lab preparation","buffer capacity","ph stability","chemical resistance","biological chemistry","buffer strength","buffer math","titration resistance"] },
      { name: 'Buffer pH', path: '/buffer-ph', desc: 'Henderson-Hasselbalch equation for buffers.', keywords: ["conjugate base","acid dissociation","lab prep","buffer ph","henderson hasselbalch","equilibrium","ph control","biochemistry","acid base balance","chemical stability"] },
      { name: 'Concentration', path: '/concentration', desc: 'General tool for various molar and mass units.', keywords: ["solution math","chemical strength","molarity","concentration","unit conversion","mass volume","percentage","molarity calculator","lab analytics","solute density"] },
      { name: 'Dilution Factor', path: '/dilution-factor', desc: 'Ratio of final to initial volume.', keywords: ["serial dilution","lab protocol","concentration drop","dilution factor","microbiology","chemistry workflow","titration","aliquot math","solution ratio","lab prep"] },
      { name: 'Henderson-Hasselbalch', path: '/henderson-hasselbalch', desc: 'Relate pH, pKa, and concentration ratios.', keywords: ["buffer equation","equilibrium","biochemistry","henderson-hasselbalch","ph pka","acid base","buffer math","biological systems","logarithm chemistry","stability"] },
      { name: 'Mass Percent', path: '/mass-percent', desc: 'Percentage by weight of a solute.', keywords: ["weight percent","concentration","mixture analysis","mass percent","solute weight","solution strength","pharmacy math","industrial chemistry","percent composition","chemical units"] },
      { name: 'Mixing Ratio', path: '/mixing-ratio', desc: 'Proportions of components in a blend.', keywords: ["blending","formulation","industrial chemistry","mixing ratio","ratio math","chemical proportions","component blend","engineering","mixture design","manufacturing math"] },
      { name: 'Neutralization', path: '/neutralization', desc: 'Equivalents for acid-base reactions.', keywords: ["titration","salt formation","analytical math","neutralization","acid base","equivalence point","ph adjustment","chemical reaction","reaction math","indicator"] },
      { name: 'Percent Conc. to Molarity', path: '/percent-conc-molarity', desc: 'Convert percentage to molar units.', keywords: ["density","molecular weight","conversion","percent conc to molarity","solution units","chemistry tools","lab math","concentration converter","stoichiometry","molar physics"] },
      { name: 'Percent Solution', path: '/percent-solution', desc: 'w/v, v/v, or w/w solution percentages.', keywords: ["weight volume","concentration","pharmacy","percent solution","compounding","medical math","solution strength","lab protocol","chemical unit","percentage"] },
      { name: 'pH Calculator', path: '/ph', desc: 'Logarithmic scale of hydrogen ion activity.', keywords: ["acidity","alkalinity","poh","acid base","ph calculator","logarithm","hydrogen ion","solution ph","chemistry basics","aqueous analysis"] },
      { name: 'Raoult\'s Law', path: '/raoults-law', desc: 'Vapor pressure of solutions.', keywords: ["colligative properties","partial pressure","ideal solution","raoults law","vapor pressure","boiling point","mixture physics","solution behavior","thermodynamics","chemical potential"] },
      { name: 'Reconstitution', path: '/reconstitution', desc: 'Calculate diluent needed for dry drugs.', keywords: ["pharmacy","medication","lab safety","compounding","reconstitution","diluent math","drug prep","medical math","pharmacology","reconstitution ratio"] },
      { name: 'Saponification Value', path: '/saponification-value', desc: 'Measure fatty acid average chain length.', keywords: ["soap making","lipids","oil analysis","chemistry","saponification value","fatty acids","chem math","soap production","oil quality","industrial chemistry"] },
      { name: 'Serial Dilution', path: '/serial-dilution', desc: 'Stepwise concentration reductions.', keywords: ["lab protocol","microbiology","dilution series","serial dilution","titration","concentration reduction","experimental design","biological prep","aliquot math","standard curve"] },
      { name: 'Solution Dilution', path: '/solution-dilution', desc: 'C1V1 = C2V2 standard calculations.', keywords: ["molarity shift","stock solution","lab prep","solution dilution","c1v1 c2v2","dilution formula","chemistry help","volumetric math","concentration adjustment","science tools"] },
      { name: 'TDS (Total Dissolved Solids)', path: '/tds', desc: 'Measure mineral content in water.', keywords: ["water quality","limnology","environmental science","tds","dissolved solids","conductivity","water analysis","mineral content","geochemistry","filtration math"] },
      { name: 'Tritration', path: '/titration', desc: 'Analyze molarity through reaction endpoints.', keywords: ["equivalence point","indicator","analytical chemistry","titration","molarity","acid base","volumetric analysis","lab math","buret","precision science"] },
      { name: 'Water Hardness', path: '/water-hardness', desc: 'Calculate calcium and magnesium levels.', keywords: ["mineral scales","softener","water quality","water hardness","calcium magnesium","aquatic chemistry","industrial water","geology","water treatment","scaling math"] },
      { name: 'Activation Energy', path: '/activation-energy', desc: 'Find energy barrier for chemical reactions.', keywords: ["kinetics","arrhenius","catalyst","activation energy","energy barrier","reaction rate","transition state","thermodynamics","chemistry heat","reaction physics"] },
      { name: 'Actual Yield', path: '/actual-yield', desc: 'Relate percent yield to theoretical values.', keywords: ["lab efficiency","synthetic chemistry","production","actual yield","percent yield","theoretical max","chemical output","industrial metrics","harvest math","stoichiometry"] },
      { name: 'Arrhenius Equation', path: '/arrhenius-equation', desc: 'Temperature dependence of reaction rates.', keywords: ["kinetics","activation energy","rate constant","arrhenius equation","reaction speed","temperature dependence","thermal chemistry","collision theory","activation math","physics"] },
      { name: 'Chemical Equation Balancer', path: '/chemical-equation-balancer', desc: 'Balance atoms and charge for reactions.', keywords: ["stoichiometry","conservation of mass","chemical math","equation balancer","atoms and charge","chemical reactions","balacing helper","molecular logic","chemistry homework","mass balance"] },
      { name: 'Equilibrium Constant', path: '/equilibrium-constant', desc: 'Relate product and reactant activities.', keywords: ["keq","le chatelier","thermodynamics","equilibrium constant","chemical direction","products reactants","chemical stability","mass action","equilibrium law","reversible reactions"] },
      { name: 'Kp Calculator', path: '/kp', desc: 'Equilibrium constant for gas phase reactions.', keywords: ["partial pressure","gas equilibrium","thermodynamics","kp calculator","gas laws","equilibrium constant","barometric pressure","vapor phase","keq math","molarity conversion"] },
      { name: 'Molar Ratio', path: '/molar-ratio', desc: 'Stoichiometric coefficients from equations.', keywords: ["reaction ratio","coefficients","mass balance","molar ratio","stoichiometry","chemical math","mole count","formula ratio","synthetic chemistry","reactant proportions"] },
      { name: 'Net Ionic Equation', path: '/net-ionic-equation', desc: 'Simplify reactions to active species.', keywords: ["spectator ions","precipitation","aqueous reactions","net ionic equation","chemical logic","solubility rules","dissociation","molecular equations","chemistry homework","active species"] },
      { name: 'Percent Yield', path: '/percent-yield', desc: 'Efficiency of a synthetic reaction.', keywords: ["yield analysis","theoretical vs actual","chemistry lab","percent yield","synthetic efficiency","mass balance","production metrics","chemical yield","lab stats","reaction results"] },
      { name: 'Rate Constant', path: '/rate-constant', desc: 'Velocity of a chemical reaction.', keywords: ["reaction kinetics","speed","order of reaction","rate constant","velocity","time duration","reaction order","chemical motion","kinetic analysis","physics in chemistry"] },
      { name: 'Reaction Quotient', path: '/reaction-quotient', desc: 'Determine reaction directionality (Q vs K).', keywords: ["predicting equilibrium","direction","le chatelier","reaction quotient","q vs k","thermodynamics","chemical potential","transition state","equilibrium direction","science projection"] },
      { name: 'Theoretical Yield', path: '/theoretical-yield', desc: 'Maximum possible product from reactants.', keywords: ["limiting reactant","stoichiometry","mass balance","theoretical yield","max product","chemical yield","production projection","molar calculation","reaction efficiency","stoichiometric limit"] },
      { name: 'Boiling Point', path: '/boiling-point', desc: 'Phase transition temperature analysis.', keywords: ["liquid to gas","vapor pressure","clausius clapeyron","phase transition","boiling point","chemistry math","thermal science","heating curve","boiling temp","physical chemistry"] },
      { name: 'Boiling Point Altitude', path: '/boiling-point-altitude', desc: 'Correction for atmospheric pressure.', keywords: ["mountain cooking","pressure drop","meteorology","altitude boiling","high altitude cooking","atmospheric pressure","water boiling point","boiling math","elevation effect","physics in kitchen"] },
      { name: 'Boiling Point Elevation', path: '/boiling-point-elevation', desc: 'Colligative shift from solutes.', keywords: ["van't hoff","solute effect","solution properties","colligative properties","boiling point elevation","chemistry math","molarity effect","pure solvent","osmotic influence","physical chemistry"] },
      { name: 'Entropy', path: '/entropy', desc: 'Measure of molecular disorder and heat.', keywords: ["second law","thermodynamics","state function","disorder","molecular chaos","entropy math","thermal physics","statistical mechanics","chemistry energy","randomness"] },
      { name: 'Freezing Point Depression', path: '/freezing-point-depression', desc: 'Melting point drop from impurities.', keywords: ["road salt","colligative properties","van't hoff","melting point","impurity effect","freezing point depression","chemistry math","solute concentration","antifreeze physics","physical chemistry"] },
      { name: 'Gibbs Free Energy', path: '/gibbs-free-energy', desc: 'Predict reaction spontaneity.', keywords: ["delta g","enthalpy entropy","spontaneous","reaction spontaneity","gibbs free energy","thermodynamics","chemical potential","equilibrium math","energy change","science constants"] },
      { name: 'Gibbs\' Phase Rule', path: '/gibbs-phase-rule', desc: 'Calculate degrees of freedom for systems.', keywords: ["phase diagram","thermodynamics","equilibrium","degrees of freedom","gibbs phase rule","phase chemistry","system components","state transitions","material science","physical chemistry"] },
      { name: 'Heat of Combustion', path: '/heat-of-combustion', desc: 'Energy released during oxidation.', keywords: ["enthalpy","calorimetry","fuel energy","oxidation","heat of combustion","combustion math","energy release","thermochemistry","fuel efficiency","chemical energy"] },
      { name: 'Q10 Calculator', path: '/q10', desc: 'Temperature sensitivity coefficient.', keywords: ["biological rate","metabolism","kinetics","temperature sensitivity","q10 coefficient","biological math","reaction velocity","physiology math","thermal biology","metabolic rate"] },
      { name: 'STP (Standard Temp & Pressure)', path: '/stp', desc: 'Gas properties at 0°C and 1 atm.', keywords: ["standard conditions","ideal gas","molar volume","chemical constants","stp math","gas laws","standard temperature","atmospheric science","laboratory math","chemistry basics"] },
      { name: 'Vapor Pressure', path: '/vapor-pressure', desc: 'Stability of liquid-gas equilibrium.', keywords: ["evaporation","volatility","clausius clapeyron","vapor pressure","gas liquid equilibrium","saturation pressure","chemistry math","thermal physics","liquid stability","vaporization"] },
      { name: 'Vapor Pressure of Water', path: '/vapor-pressure-water', desc: 'Specific table values and equations.', keywords: ["humidity","dew point","environmental science","vapor pressure water","saturation math","meteorology","hygrometry","water gas equilibrium","atmospheric science","physical chemistry"] },
      { name: 'Cell EMF', path: '/cell-emf', desc: 'Electromotive force of electrochemical cells.', keywords: ["voltage","standard reduction potential","redox","electromotive force","electrochemical cell","galvanic cell","chemistry math","battery physics","reduction potential","electrochemistry"] },
      { name: 'Electrolysis', path: '/electrolysis', desc: 'Faraday\'s laws of mass and charge.', keywords: ["electroplating","current time","courier","faraday laws","electrolytic cell","mass deposit","electrochemistry","chemical production","ion transport","chemistry math"] },
      { name: 'Ionic Strength', path: '/ionic-strength', desc: 'Calculate charge density of solutions.', keywords: ["activity","molarity charge","electrochemistry","ionic strength","debye huckel","solution physics","charge density","chemistry math","electrolyte behavior","physical chemistry"] },
      { name: 'Lattice Energy', path: '/lattice-energy', desc: 'Stability of ionic crystalline solids.', keywords: ["born haber cycle","electrostatics","coulombs law","ionic crystalline solids","crystal stability","lattice math","solid state chemistry","ionic bonds","thermal physics","material science"] },
      { name: 'Nernst Equation', path: '/nernst-equation', desc: 'Cell potential at non-standard states.', keywords: ["voltage shift","ion concentration","electrochemistry","nernst equation","cell potential","non standard state","redox math","potential calculation","concentration cell","electrochemistry tools"] },
      { name: 'Diffusion Coefficient', path: '/diffusion-coefficient', desc: 'Rate of mass transport in fluids.', keywords: ["fick's law","molecular motion","mass transfer","diffusion coefficient","molecular transport","fluid dynamics","kinetic theory","physical chemistry","material science","mass transport"] },
      { name: 'Rate of Effusion', path: '/rate-effusion', desc: 'Graham\'s law for gases through small holes.', keywords: ["molecular weight","gas kinetics","effusion rate","graham law","gas flow","kinetics math","molecular motion","gas leaks","chemistry math","ideal gas properties"] },
      { name: 'Half-Life', path: '/half-life', desc: 'Time for half of a sample to decay.', keywords: ["first order kinetics","radioactivity","isotopes","decay time","radioactive half life","nuclear math","decay constant","dating techniques","physics math","science duration"] },
      { name: 'Langmuir Isotherm', path: '/langmuir-isotherm', desc: 'Adsorption of molecules on surfaces.', keywords: ["surface science","monolayer","physical chemistry","adsorption isotherm","surface binding","molecular adsorption","chemistry math","surface area","gas adsorption","kinetics"] },
      { name: 'Osmotic Pressure', path: '/osmotic-pressure', desc: 'Force required to stop solvent flow.', keywords: ["semipermeable membrane","colligative","biology","osmotic pressure","solvent flow","osmosis math","solution physics","biological pressure","chemistry math","membrane transport"] },
      { name: 'Partial Pressure', path: '/partial-pressure', desc: 'Dalton\'s law for gas mixtures.', keywords: ["gas laws","mole fraction","total pressure","dalton law","gas mixture","partial pressure math","atmospheric science","chemistry math","ideal gas","mixture physics"] },
      { name: 'Radioactive Decay', path: '/radioactive-decay', desc: 'Calculate remaining mass and activity.', keywords: ["isotopes","nuclear physics","decay constant","radioactivity","remaining mass","decay rate","nuclear math","atomic science","half life tracking","radiation safety"] },
      { name: 'Two-Photon Absorption', path: '/two-photon-absorption', desc: 'High-precision spectroscopy math.', keywords: ["optics","laser science","physical chemistry","two photon absorption","spectroscopy math","nonlinear optics","quantum chemistry","laser physics","fluorescence","molecular physics"] },
      { name: 'Young-Laplace Equation', path: '/young-laplace-equation', desc: 'Relate pressure difference to surface tension.', keywords: ["capillary action","bubbles","surface science","young laplace","surface tension","pressure difference","fluid physics","droplet math","interfacial tension","physics basics"] },
      { name: 'COD (Chemical Oxygen Demand)', path: '/cod', desc: 'Measure organic pollutants in water.', keywords: ["environmental science","wastewater","pollution","cod math","water quality","organic pollutants","oxygen demand","sanitary engineering","industrial waste","environmental analysis"] },
      { name: 'Combustion Analysis', path: '/combustion-analysis', desc: 'Identify organic compounds from residues.', keywords: ["empirical formula","c h o analysis","chemistry","composition analysis","organic compounds","combustion math","elemental analysis","molecular formula","quantitative chemistry","lab tools"] },
      { name: 'Combustion Reaction', path: '/combustion-reaction', desc: 'Balance fuel and oxygen equations.', keywords: ["oxidation","hydrocarbons","energy release","combustion reaction","fuel oxygen","reaction balancing","burn math","chemical energy","thermodynamics","fire science"] },
      { name: 'Crude Protein', path: '/crude-protein', desc: 'Calculate protein from nitrogen content.', keywords: ["kjeldahl method","food science","agriculture","crude protein","nitrogen content","protein math","livestock feed","nutritional analysis","food quality","biochemical math"] },
      { name: 'Degree of Unsaturation', path: '/degree-unsaturation', desc: 'Find rings and double bonds in formula.', keywords: ["dou","organic chemistry","structure analysis","degree of unsaturation","rings and bonds","hydrogen deficiency","chemical formula","molecular structure","organic math","structural isomerism"] },
      { name: 'Double Bond Equivalent', path: '/double-bond-equivalent', desc: 'Identify hydrogen deficiency levels.', keywords: ["unsaturation","structure","organic math","double bond equivalent","hydrogen deficiency index","chemical structure","rings and pi bonds","organic analysis","formula math","structure prediction"] },
      { name: 'Liquid Ethylene Density', path: '/liquid-ethylene-density', desc: 'Precision industrial hydrocarbon math.', keywords: ["petrochemical","ideal gas","industrial chemistry","ethylene density","liquid hydrocarbon","precision math","chemical engineering","fluid density","refinery tools","industrial science"] },
      { name: 'Radiocarbon Dating', path: '/radiocarbon-dating', desc: 'Carbon-14 age estimation.', keywords: ["archaeology","isotopes","decay math","carbon 14 dating","age estimation","historical science","radioactive dating","dating math","half life application","anthropology tools"] },
      { name: 'Calibration Curve', path: '/calibration-curve', desc: 'Linear regression for instrument data.', keywords: ["analytical chemistry","standard add","instrumental","calibration curve","linear regression","data analysis","instrument math","standard curve","precision measurement","quantitative analysis"] },
      { name: 'Enzyme Activity', path: '/enzyme-activity', desc: 'Rate of catalytic substrate conversion.', keywords: ["kinetics","biochemistry","units","enzyme activity","catalytic rate","substrate conversion","biochemical math","enzyme performance","lab analysis","reaction speed"] },
      { name: 'Isoelectric Point', path: '/isoelectric-point', desc: 'pH where amino acids have zero net charge.', keywords: ["pi","proteins","electrophoresis","biotech","isoelectric point","amino acid net charge","zwitterion","biochemical math","protein separation","purification tools"] },
      { name: 'Michaelis-Menten', path: '/michaelis-menten', desc: 'Classic enzyme kinetics modeling.', keywords: ["vmax","km","biochemical rates","michaelis menten","enzyme kinetics","reaction modeling","biochemistry math","substrate binding","kinetics analysis","catalysis"] },
      { name: 'Protein Solubility', path: '/protein-solubility', desc: 'Prediction based on ionic strength.', keywords: ["salting out","biotech","protein purification","ionic strength effect","solubility prediction","protein science","biochemical math","fractionation","purification math","protein stability"] },
      { name: 'Resuspension', path: '/resuspension', desc: 'Recovering pellets into fixed volumes.', keywords: ["centrifugation","lab protocol","biotech","pellet recovery","buffer math","homogenization","sample prep","biochemical workflow","lab automation","molecular biology"] },
      { name: 'Beer-Lambert Law', path: '/beer-lambert', desc: 'Absorbance to concentration conversion.', keywords: ["spectroscopy","molar absorptivity","analyticals","beer lambert law","absorbance to concentration","optical path","chemistry math","spectrophotometry","sample analysis","quantitative science"] },
      { name: 'Cubic Cell', path: '/cubic-cell', desc: 'Crystal lattice density and packing factor.', keywords: ["solid state","materials science","nanotech","cubic crystal lattice","packing factor","unit cell density","crystallography math","solid state physics","atomic arrangement","lattice geometry"] },
      { name: 'Detention Time', path: '/detention-time', desc: 'Fluid residence time in chambers.', keywords: ["wastewater","civil engineering","flow math","detention time","residence time","tank volume","hydraulic engineering","treatment efficiency","fluid dynamics","environmental math"] },
      { name: 'Hydraulic Retention Time', path: '/hydraulic-retention-time', desc: 'Measure system throughput efficiency.', keywords: ["bioreactor","water treatment","engineering","hydraulic retention time","hrt math","system throughput","wastewater engineering","flow efficiency","biochemical engineering","environmental tools"] },
      { name: 'Miller Indices', path: '/miller-indices', desc: 'Identify crystal planes and directions.', keywords: ["crystallography","solid state","materials","miller indices","crystal planes","lattice orientation","solid state physics","xry diffraction","crystal geometry","material science math"] },
    ]
  },
  {
    title: 'Entertainment & Fun',
    slug: 'entertainment',
    description: 'Pop culture Marathons, personality generators, and time-reclaiming utilities. Analyze your binge-watching habits and explore the math of fiction.',
    items: [
      { name: 'Audiobooks Saver', path: '/audiobooks-time', desc: "Calculate time reclaimed from 'dead time' listening.", keywords: ["audiobooks","time management","productivity","listening time","audible","commute productivity","dead time","reading goals","efficiency","book time"] },
      { name: 'Podcast Reclaimer', path: '/podcast-time', desc: 'Reclaim waiting time with educational binging.', keywords: ["podcasts","learning time","productivity hack","commute learning","spotify","apple podcasts","education","reclaim time","efficiency","listening"] },
      { name: 'Star Wars Marathon', path: '/star-wars-marathon', desc: 'Total duration of all films and series.', keywords: ["star wars","disney plus","binge watch","movie marathon","jedi","skywalker","mandalorian","clone wars","film length","fandom"] },
      { name: 'LotR Marathon', path: '/lord-of-the-rings-marathon', desc: 'Calculate time for Extended vs Theatrical versions.', keywords: ["lord of the rings","tolkien","hobbit","extended edition","theatrical release","fantasy marathon","movie night","film length","middle earth","binge"] },
      { name: 'Harry Potter Currency', path: '/harry-potter-currency', desc: 'Convert Galleons, Sickles, and Knuts to USD.', keywords: ["harry potter","wizarding world","galleons","knuts","sickles","fandom currency","hogwarts","us dollars","magic money","book trivia"] },
      { name: 'The Witcher', path: '/witcher-marathon', desc: 'Series and games completion time.', keywords: ["the witcher","geralt","netflix series","video games","rpg","completionist","binge watch","fantasy saga","game length","tv show time"] },
      { name: 'TV Series Duration', path: '/tv-series-duration', desc: 'Total watch time for any multi-season show.', keywords: ["netflix","binge watching","tv show length","streaming","hulu","hbo max","series time","episode count","marathon calculator","watch time"] },
      { name: 'Quarantine Binge', path: '/quarantine-binge', desc: 'Calculate the total volume of your media consumption.', keywords: ["lockdown","quarantine","binge watching","media consumption","productivity","screen time","tv watching","statistics","stay at home","fun math"] },
      { name: 'Oscar Marathon', path: '/oscar-marathon', desc: 'Time needed to watch all Best Picture nominees.', keywords: ["academy awards","oscars","best picture","movies","nominees","film critic","award season","marathon","cinema","watch list"] },
      { name: 'Social Media Alternatives', path: '/social-media-time', desc: 'Visualize what you could learn with scrolling time.', keywords: ["screen time","scrolling","productivity","digital detox","alternatives","learning skills","social media addict","time waste","efficiency","self improvement"] },
      { name: 'TV Alternatives', path: '/tv-alternatives', desc: 'Reclaim screen time for active life skills.', keywords: ["cutting the cord","active life","productivity","hobbies","time reclaimer","learning","self growth","boredom","screen time limit","lifestyle change"] },
      { name: 'Drake Equation (Love)', path: '/drake-equation-love', desc: 'Statistical probability of finding a soulmate.', keywords: ["soulmate","probability of love","drake equation","dating math","romance","statistics","finding the one","love science","relationship math","fun calculator"] },
      { name: 'Beach Price Index', path: '/beach-price-index', desc: 'Analyze the true cost of seaside holidays.', keywords: ["vacation cost","holiday budget","beach trip","travel index","seaside","cost of living","tourism","economy","budgeting","travel math"] },
      { name: 'Helium Balloons', path: '/helium-balloons', desc: 'Calculate lift capacity for various objects.', keywords: ["helium","balloons","lift capacity","physics","up movie","science experiment","party supplies","weight lift","buoyancy","fun science"] },
      { name: 'Hammock Hang', path: '/hammock-hang', desc: 'Calculate angle and tension for safe suspension.', keywords: ["camping","hammocking","outdoor gear","suspension","physics","safe hanging","backbacking","camping gear","tension","angle"] },
      { name: 'Tent Size', path: '/tent-size', desc: 'Optimal floor area for campers and gear.', keywords: ["camping","backpacking","tent space","outdoor gear","sleeping bag","camping equipment","survival","hiking","living space","adventure"] },
      { name: 'NATO Phonetic', path: '/nato-phonetic', desc: 'Translate text to Alpha, Bravo, Charlie.', keywords: ["military alphabet","communication","spelling","alpha bravo charlie","aviation","radio code","phonetic alphabet","linguistics","translation","standardization"] },
      { name: 'Pig Latin', path: '/pig-latin', desc: 'Convert phrases into classical kid-slang.', keywords: ["kids language","pig latin","translation","funny language","slang","cipher","word game","linguistics","children game","fun converter"] },
      { name: 'Yes or No Generator', path: '/yes-or-no', desc: 'Algorithmic decision maker for simple choices.', keywords: ["decision maker","yes or no","choice","random generator","fate","luck","fortune","decision tool","fun generator","simple choice"] },
      { name: 'Bold Text', path: '/bold-text', desc: 'Unicode generator for stylized social posts.', keywords: ["unicode","stylized text","social media font","instagram font","twitter font","fancy text","bold font","text generator","typography","custom text"] },
      { name: 'Italic Text', path: '/italic-text', desc: 'Unicode slant for digital emphasis.', keywords: ["italic font","unicode slant","fancy text","social media","style","text generator","typography","stylized text","custom font","emphasis"] },
      { name: 'Underline Text', path: '/underline-text', desc: 'Unicode underlining for web content.', keywords: ["underline","unicode text","custom font","social media style","fancy text","style","text ornament","styling","text generator","decoration"] },
      { name: 'Cursive Font', path: '/cursive-generator', desc: 'Transform plain text into elegant script.', keywords: ["cursive","script font","elegant text","fancy font","handwriting","social media","custom text","text generator","unicode script","stylized"] },
      { name: 'Glitch Text', path: '/glitch-text', desc: 'Zalgo-style corrupted text generation.', keywords: ["glitch","zalgo","corrupted text","void text","fancy font","spooky text","stylized","custom text","weird font","text generator"] },
      { name: 'Upside-Down Text', path: '/upside-down-text', desc: 'Flip your characters 180 degrees.', keywords: ["upside down","flipped text","inverted","funny text","social media","custom font","unicode flip","reverse characters","text generator","stylized"] },
      { name: 'Clay Shrinkage', path: '/clay-shrinkage', desc: 'Pottery math for drying and firing stages.', keywords: ["pottery","ceramics","kiln","sculpture","craft math","drying time","firing stages","clay body","material science","craftsmanship"] },
      { name: 'Quarantine Silver Lining', path: '/quarantine-silver-lining', desc: 'Analyze positive growth during isolation periods.', keywords: ["positivity","growth","quarantine","mental health","reflection","self improvement","optimism","isolation","wellness","life analysis"] },
    ]
  },
  {
    title: 'Self-Care & Mental Health',
    slug: 'mental-health',
    description: 'Tools for emotional wellbeing, mindfulness, and personal resilience. Track your progress toward a balanced and healthy mind.',
    items: [
      { name: 'Burnout Risk', path: '/burnout-risk', desc: 'Assess occupational stress levels.', keywords: ['burnout', 'stress', 'work life balance', 'mental health', 'exhaustion'] },
      { name: 'Anxiety Screening (GAD-7)', path: '/anxiety-gad7', desc: 'Generalized Anxiety Disorder assessment.', keywords: ['anxiety', 'gad7', 'mental screening', 'clinical math', 'worry'] },
      { name: 'Depression Test (PHQ-9)', path: '/depression-phq9', desc: 'Patient Health Questionnaire for depression.', keywords: ['phq9', 'depression', 'mental health', 'clinical screening'] },
      { name: 'Resilience Quotient', path: '/resilience-score', desc: 'Measure your ability to bounce back from adversity.', keywords: ['resilience', 'grit', 'mental toughness', 'coping'] },
      { name: 'Emotional Intelligence', path: '/eq-test', desc: 'Assess your empathy and social awareness.', keywords: ['eq', 'ei', 'empathy', 'social skills', 'psychology'] },
      { name: 'Happiness Index', path: '/happiness-index', desc: 'Measure overall life satisfaction.', keywords: ['happiness', 'wellbeing', 'life satisfaction', 'subjective health'] },
      { name: 'Gratitude Score', path: '/gratitude-value', desc: 'Analyze the impact of regular gratitude practice.', keywords: ['gratitude', 'psychology', 'positivity', 'journaling'] },
      { name: 'Social Media Drain', path: '/social-media-drain', desc: 'Calculate the emotional cost of heavy scrolling.', keywords: ['digital detox', 'screen time', 'social media', 'attention span'] },
      { name: 'Sleep Cycle Optimizer', path: '/sleep-optimize', desc: 'Align your waking time with natural sleep stages.', keywords: ['circadian rhythm', 'rem sleep', 'deep sleep', 'sleep hygiene'] },
      { name: 'Habit Formation Time', path: '/habit-timing', desc: 'Estimate days needed to automate new behaviors.', keywords: ['habits', 'psychology', 'consistency', 'routine'] },
      { name: 'Focus Duration', path: '/focus-tracker', desc: 'Measure your peak concentration intervals.', keywords: ['productivity', 'deep work', 'focus', 'attention'] },
      { name: 'Personality (Big Five)', path: '/big-five-personality', desc: 'Analyze openness, conscientiousness, and more.', keywords: ['ocean', 'personality', 'psychology', 'traits'] },
      { name: 'Attachment Style', path: '/attachment-style', desc: 'Identify your relationship bonding patterns.', keywords: ['relationships', 'psychology', 'bonding', 'attachment'] },
      { name: 'Decision Fatigue', path: '/decision-fatigue', desc: 'Analyze the cost of making too many choices.', keywords: ['decisions', 'productivity', 'cognitive load', 'willpower'] },
      { name: 'Mindfulness Minutes', path: '/mindfulness-tracker', desc: 'Track your meditation and presence goals.', keywords: ['meditation', 'mindfulness', 'zen', 'stress relief'] },
    ]
  },
  {
    title: 'Gaming & Esports',
    slug: 'gaming',
    description: 'Precision math for competitive gamers and RPG enthusiasts. Optimize your gear, track your progression, and master the meta.',
    items: [
      { name: 'Aim Training Progress', path: '/aim-tracking', desc: 'Measure accuracy and reaction time gains.', keywords: ['fps', 'aiming', 'valorant', 'csgo', 'reaction time'] },
      { name: 'FPS Drop Impact', path: '/fps-drop', desc: 'Analyze the effect of frame rate dips on gameplay.', keywords: ['gaming tech', 'performance', 'latency', 'hardware'] },
      { name: 'Ping (Latency) Math', path: '/ping', desc: 'Calculate the physical delay in online matches.', keywords: ['networking', 'latency', 'lag', 'esports'] },
      { name: 'Gacha Probability', path: '/gacha-odds', desc: 'Calculate odd of pulling rare items in rolls.', keywords: ['rng', 'probability', 'gacha', 'loot boxes', 'luck'] },
      { name: 'Battle Pass Completion', path: '/battle-pass-grind', desc: 'Time needed to reach level 100.', keywords: ['fortnite', 'cod', 'progression', 'grinding', 'gaming'] },
      { name: 'Speedrun Splits', path: '/speedrun-timer', desc: 'Analyze time differences between world records.', keywords: ['speedrunning', 'splits', 'pb', 'world record'] },
      { name: 'RPG XP Curve', path: '/xp', desc: 'Estimate kills needed for next level.', keywords: ['rpg', 'mmo', 'experience points', 'leveling'] },
      { name: 'DPI to eDPI', path: '/edpi', desc: 'Standardize mouse sensitivity across systems.', keywords: ['mouse sensitivity', 'gaming metrics', 'fps tuning'] },
      { name: 'Streamer Revenue', path: '/streamer-earnings', desc: 'Estimate payouts from subs and bits.', keywords: ['twitch', 'youtube', 'content creator', 'monetization'] },
      { name: 'PC Build Power', path: '/pc-power-usage', desc: 'Calculate required PSU wattage for components.', keywords: ['hardware', 'psu', 'gpu', 'cpu', 'pc building'] },
      { name: 'Refresh Rate Value', path: '/refresh-rate-benefit', desc: 'Measure visual smoothness improvements.', keywords: ['monitor tech', 'hz', 'gaming hardware', 'display'] },
      { name: 'VR Sickness Risk', path: '/vr-motion', desc: 'Assess probability of nausea based on frame rates.', keywords: ['virtual reality', 'motion sickness', 'oculus', 'vive'] },
      { name: 'Tournament Seeding', path: '/tournament-bracket', desc: 'Generate fair brackets for competitors.', keywords: ['esports', 'competition', 'brackets', 'seeding'] },
      { name: 'Resource Farming', path: '/farming-efficiency', desc: 'Calculate loot gathered per hour.', keywords: ['mmo', 'survival games', 'looting', 'grinding'] },
      { name: 'In-Game Economy', path: '/game-currency', desc: 'Convert virtual gold to real-world value.', keywords: ['rpg finance', 'gold farming', 'virtual economy'] },
    ]
  },
  {
    title: 'Parenting & Childcare',
    slug: 'parenting',
    description: 'Supporting you through every milestone. From pregnancy tracking to college planning, handle the math of raising the next generation.',
    defaultGuidance: {
      whyItMatters: "Parenting decisions are often driven by emotion, but grounding them in developmental data and financial planning provides a stable foundation for your child's future. Accuracy in these calculations ensures safety and long-term security.",
      pitfalls: [
        "Ignoring the cumulative impact of inflation on college savings",
        "Using age-based markers as rigid deadlines rather than developmental ranges"
      ],
      proTip: "Use the 529 plan's compound interest to your advantage by starting contributions as early as possible, even in small amounts."
    },
    items: [
      { name: 'Baby Feeding', path: '/baby-feeding-math', desc: 'Calculate oz/ml based on age and weight.', keywords: ['breastfeeding', 'formula', 'infant nutrition', 'baby health'] },
      { name: 'Diaper Cost', path: '/diaper-expenses', desc: 'Estimate annual spending on nappies.', keywords: ['baby budget', 'parenting costs', 'shopping'] },
      { name: 'Child Height Predictor', path: '/height-predictor', desc: 'Predict adult stature using parental data.', keywords: ['genetics', 'growth chart', 'pediatrics', 'height'] },
      { name: 'Teething Timeline', path: '/teething-scheduler', desc: 'Identify which teeth are appearing next.', keywords: ['dental', 'baby development', 'health'] },
      { name: 'Milestone Tracker', path: '/cdc-milestones', desc: 'Check development against CDC guidelines.', keywords: ['pediatrics', 'growth', 'learning', 'development'] },
      { name: 'Tummy Time Goal', path: '/tummy-time-tracker', desc: 'Track daily exercise for neck strength.', keywords: ['infant physical therapy', 'motor skills', 'baby exercise'] },
      { name: 'Nanny Tax', path: '/nanny-tax', desc: 'Calculate payroll and tax for home caregivers.', keywords: ['taxes', 'employment', 'household help', 'legal'] },
      { name: 'College Fund (529)', path: '/college-savings-goal', desc: 'Project future tuition costs and savings.', keywords: ['investment', 'education finance', 'savings'] },
      { name: 'Potty Training Streak', path: '/potty-training-success', desc: 'Track consecutive accident-free days.', keywords: ['toddler development', 'parenting', 'milestones'] },
      { name: 'Screen Time: Kids', path: '/kids-screen-limit', desc: 'Balance learning vs entertainment hours.', keywords: ['digital wellness', 'child health', 'parenting'] },
      { name: 'Car Seat Safety', path: '/car-seat-size', desc: 'Verify correct seat type for weight/height.', keywords: ['safety', 'automotive', 'child health'] },
      { name: 'Nap Schedule', path: '/nap-time', desc: 'Find the best sleep windows for infants.', keywords: ['baby sleep', 'routine', 'parenting'] },
      { name: 'Sibling Age Gap', path: '/sibling-gap', desc: 'Analyze developmental overlap between kids.', keywords: ['family planning', 'psychology', 'parenting'] },
      { name: 'Birthday Party Cost', path: '/birthday-budgeter', desc: 'Plan expenses for the perfect celebration.', keywords: ['event planning', 'budgeting', 'hosting'] },
      { name: 'School Lunch Prep', path: '/meal-prep-kids', desc: 'Batch calculate portions for the week.', keywords: ['nutrition', 'prep', 'parenting hacking'] },
    ]
  },
  {
    title: 'Legal & Compliance',
    slug: 'legal',
    description: 'Navigate complex regulations with data. Tools for small business compliance, personal legal rights, and tax implications.',
    defaultGuidance: {
      whyItMatters: "Navigating legal requirements with precision is essential to avoid costly penalties and protect your intellectual or physical property. These tools provide the necessary data to make informed compliance decisions.",
      pitfalls: [
        "Misinterpreting jurisdiction-specific rules as global standards",
        "Underestimating the time required for patent or trademark processing"
      ],
      proTip: "Always document the date and source of your data when calculating compliance risks to maintain a clear audit trail."
    },
    items: [
      { name: 'GDPR Penalty Risk', path: '/gdpr-risk', desc: 'Estimate potential fines based on revenue.', keywords: ['compliance', 'data privacy', 'business law', 'eu regs'] },
      { name: 'Copyright Term', path: '/copyright-expiration', desc: 'Find when works enter the public domain.', keywords: ['intellectual property', 'ip law', 'creative rights'] },
      { name: 'Trademark Cost', path: '/trademark-filing-fee', desc: 'Calculate standard USPTO and lawyer fees.', keywords: ['branding', 'business setup', 'legal costs'] },
      { name: 'Incorporation Comparison', path: '/llc-state-compare', desc: 'Compare fees across US states.', keywords: ['business structures', 'llc', 'corp', 'delaware vs nevada'] },
      { name: 'Patent Timeline', path: '/patent-expiration', desc: 'Calculate remaining life of an invention.', keywords: ['ip law', 'engineering', 'innovation rights'] },
      { name: 'NDA Validity', path: '/nda-term', desc: 'Standard term analysis for confidentiality.', keywords: ['contracts', 'business law', 'privacy'] },
      { name: 'Rental Deposit Law', path: '/security-deposit-interest', desc: 'Calculate interest owed on deposits.', keywords: ['real estate', 'landlord tenant', 'rights'] },
      { name: 'Small Claims Fee', path: '/small-claims-cost', desc: 'Estimate filing and service charges.', keywords: ['litigation', 'civil law', 'dispute resolution'] },
      { name: 'Power of Attorney', path: '/poa-checklist', desc: 'Verify required witness and notary counts.', keywords: ['estate planning', 'legal prep', 'compliance'] },
      { name: 'Will Validity', path: '/will-checklist', desc: 'Standard requirements for legal testaments.', keywords: ['estate law', 'death prep', 'succession'] },
      { name: 'Tax Bracket: Marginal', path: '/marginal-tax-rate', desc: 'The real tax on your next dollar.', keywords: ['irs', 'personal finance', 'tax strategy'] },
      { name: 'Child Support Estimator', path: '/child-support', desc: 'Standard formula based on income.', keywords: ['family law', 'divorce', 'custody finance'] },
      { name: 'Alimony Projector', path: '/alimony-math', desc: 'Estimate spousal support durations.', keywords: ['divorce', 'settlement', 'legal math'] },
      { name: 'Estate Tax Liability', path: '/estate-tax', desc: 'Calculate potential tax on inheritance.', keywords: ["inheritance tax","death tax","estate planning","legacy wealth","tax liability","step up in basis","gift tax","wealth transfer","estate math","posthumous finance"] },
      { name: 'HIPAA Compliance Score', path: '/hipaa-audit', desc: 'Basic self-assessment for health data.', keywords: ['healthcare law', 'data privacy', 'compliance'] },
    ]
  },
  {
    title: 'Crypto & Blockchain',
    slug: 'crypto',
    description: 'Digital finance for the decentralized web. Track your portfolio, gas fees, and the economics of mining.',
    defaultGuidance: {
      whyItMatters: "The high volatility and technical complexity of blockchain assets demand rigorous mathematical analysis. Understanding gas fees, tax implications, and smart contract risks is the difference between profit and total loss.",
      pitfalls: [
        "Neglecting the impact of impermanent loss in liquidity pools",
        "Forgetting to account for transaction (gas) fees when calculating ROI"
      ],
      proTip: "Use a hardware wallet and verify seed phrases offline to ensure the highest level of security for your digital assets."
    },
    items: [
      { name: 'Bitcoin Profit/Loss', path: '/btc-roi', desc: 'Calculate gains based on purchase dates.', keywords: ['crypto', 'investing', 'satoshi', 'bitcoin'] },
      { name: 'Gas Fee Estimator', path: '/eth-gas', desc: 'Calculate transaction costs in Gwei.', keywords: ['ethereum', 'blockchain', 'defi', 'fees'] },
      { name: 'NFT Minting Cost', path: '/nft-mint-price', desc: 'Analyze gas vs sell price logic.', keywords: ['digital art', 'crypto collectibles', 'monetization'] },
      { name: 'Crypto Tax: FIFO', path: '/crypto-tax-fifo', desc: 'Inventory method for capital gains.', keywords: ['irs', 'crypto accounting', 'compliance'] },
      { name: 'Staking Rewards (APY)', path: '/staking', desc: 'Project yield from locked assets.', keywords: ['passive income', 'pos', 'blockchain yield'] },
      { name: 'Impermanent Loss', path: '/impermanent-loss', desc: 'Analyze liquidity pool risk vs holding.', keywords: ['defi', 'uniswap', 'yield farming', 'amm'] },
      { name: 'Mining Profitability', path: '/mining-profit', desc: 'Hashrate vs electricity vs reward.', keywords: ['bitcoin mining', 'asic', 'gpu mining', 'energy'] },
      { name: 'Fiat to Crypto converter', path: '/fiat-to-crypto', desc: 'Live exchange for digital assets.', keywords: ['conversion', 'currency', 'coinbase', 'binance'] },
      { name: 'Crypto Wallet Seed Check', path: '/seed-phrase-verify', desc: 'BIP39 checksum verification tool.', keywords: ['security', 'recovery', 'hardware wallet'] },
      { name: 'Whale Alert Volume', path: '/whale-tracking', desc: 'Analyze unusual large move events.', keywords: ['market psychology', 'big trades', 'crypto news'] },
      { name: 'Defi Yield Farming', path: '/yield-farming-roi', desc: 'Complexity math for liquidity rewards.', keywords: ['decentralized finance', 'passive income', 'liquidity'] },
      { name: 'Blockchain Energy', path: '/crypto-energy-use', desc: 'Carbon footprint of your transactions.', keywords: ['sustainability', 'ecology', 'mining impact'] },
      { name: 'HODL Value Tracker', path: '/hodl', desc: 'Visualize long term holding power.', keywords: ['psychology', 'investing', 'diamond hands'] },
      { name: 'Crypto Exchange Fees', path: '/exchange-fee-compare', desc: 'Compare maker/taker rates.', keywords: ['trading', 'binance', 'kraken', 'fees'] },
      { name: 'Stablecoin Depeg Risk', path: '/stablecoin-math', desc: 'Analyze collateralization ratios.', keywords: ['risk management', 'usdt', 'usdc'] },
    ]
  },
  {
    title: 'Freelance & Gig Economy',
    slug: 'freelance',
    description: 'The math of the independent professional. Optimize your rates, manage your taxes, and scale your personal brand.',
    defaultGuidance: {
      whyItMatters: "As an independent professional, your time is your most valuable asset. Calculating your true hourly rate including overhead and taxes is critical for building a sustainable and profitable business.",
      pitfalls: [
        "Setting rates based solely on competitors without accounting for personal overhead",
        "Failing to set aside a consistent percentage for self-employment taxes"
      ],
      proTip: "Build a 'safety buffer' into your project estimates to account for unexpected onboarding time or scope creep."
    },
    items: [
      { name: 'Freelance Hourly Rate', path: '/hourly-rate', desc: 'Reclaim your worth: include tax and overhead.', keywords: ['business strategy', 'pricing', 'career growth'] },
      { name: 'Tax Reserve (1099)', path: '/1099-tax-reserve', desc: 'Calculate the percentage to set aside.', keywords: ['independent contractor', 'irs', 'self employment'] },
      { name: 'Digital Nomad Index', path: '/nomad-living-cost', desc: 'Budget for remote work in new cities.', keywords: ['travel', 'lifestyle', 'remote work'] },
      { name: 'Internet Speed Check', path: '/remote-work-speed', desc: 'Verify if your connection can handle video.', keywords: ['tech', 'productivity', 'zoom', 'teams'] },
      { name: 'Coworking Space ROI', path: '/coworking-value', desc: 'Compare shared office vs home costs.', keywords: ['productivity', 'workplace', 'real estate'] },
      { name: 'Invoicing Penalty', path: '/late-payment-fee', desc: 'Calculate 1.5% or fixed month terms.', keywords: ['collections', 'accounts receivable', 'legal'] },
      { name: 'Retirement: Solo 401k', path: '/solo-401k-limit', desc: 'Calculate max contribution levels.', keywords: ['savings', 'investing', 'retirement'] },
      { name: 'Client Onboarding Time', path: '/onboarding-cost', desc: 'The hidden cost of starting new projects.', keywords: ['efficiency', 'workflow', 'business math'] },
      { name: 'Project Profitability', path: '/project-roi', desc: 'Net profit after all specific expenses.', keywords: ['analytics', 'business growth', 'agency math'] },
      { name: 'Solo Business Amortization', path: '/solo-biz-depreciation', desc: 'Hardware loss over 3-5 years.', keywords: ['accounting', 'tax', 'pc hardware'] },
      { name: 'Upwork vs Fiverr Fees', path: '/platform-fee', desc: 'Project net take-home from marketplaces.', keywords: ['gig economy', 'freelancing', 'fees'] },
      { name: 'Business Trip Deductible', path: '/biz-trip-tax', desc: 'Verify IRS meal and lodging logic.', keywords: ['travel', 'tax', 'compliance'] },
      { name: 'Coffee Shop Productivity', path: '/coffee-shop-roi', desc: 'The cost of your desk seat in lattes.', keywords: ['humor', 'lifestyle', 'productivity'] },
      { name: 'Portfolio Conversion', path: '/portfolio-conversion', desc: 'Leads generated per page view.', keywords: ['marketing', 'design', 'conversion'] },
      { name: 'Indemnity Insurance', path: '/professional-insurance', desc: 'Cost analysis for personal liability.', keywords: ['legal', 'risk', 'business'] },
    ]
  },
  {
    title: 'Self Improvement & Education',
    slug: 'self-improvement',
    description: 'Data-driven growth for the mind and career. Track your learning, optimize your time, and reach your goals.',
    defaultGuidance: {
      whyItMatters: "Transforming personal growth from a vague goal into a data-driven process increases your probability of success. Tracking learning velocity and skill mastery provides the feedback loop needed for elite performance.",
      pitfalls: [
        "Overestimating reading speed at the expense of comprehension",
        "Expecting linear progress instead of accounting for the 'plateau' effect in skill acquisition"
      ],
      proTip: "Apply the Pomodoro technique with personalized intervals to maximize your specific focus-to-rest ratio."
    },
    items: [
      { name: 'Reading Velocity', path: '/reading-speed', desc: 'Calculate your WPM and book completion.', keywords: ['learning', 'books', 'literacy', 'productivity'] },
      { name: 'Language Fluency Time', path: '/language-learning-timer', desc: 'Estimate hours to reach B2/C1 levels.', keywords: ['education', 'linguistics', 'cefr'] },
      { name: 'Skill Mastery (10k Hours)', path: '/10000-hours-progress', desc: 'Track your path to world-class expertise.', keywords: ['practice', 'growth', 'mastery'] },
      { name: 'Daily Habit Streak', path: '/habit-streak-math', desc: 'Analyze the exponential value of consistency.', keywords: ['discipline', 'habits', 'psychology'] },
      { name: 'Micro-Learning Value', path: '/micro-learning-roi', desc: 'What 15 mins a day earns you in a year.', keywords: ['productivity', 'education', 'time management'] },
      { name: 'Public Speaking Speed', path: '/speaking-wpm', desc: 'Audit your presentation pace and timing.', keywords: ['communication', 'business', 'soft skills'] },
      { name: 'Memory Palace Space', path: '/memory-palace-capacity', desc: 'Plan your locus-based storage nodes.', keywords: ['mnemonics', 'learning', 'psychology'] },
      { name: 'Degree Cost vs Salary', path: '/degree-roi', desc: 'Compare tuition to expected entry pay.', keywords: ['college finance', 'career', 'education'] },
      { name: 'Study Session Interval', path: '/pomodoro-optimizer', desc: 'Find your perfect work-rest ratio.', keywords: ['focus', 'productivity', 'time'] },
      { name: 'Vocabulary Growth', path: '/vocabulary-tracker', desc: 'Estimate total known words in any language.', keywords: ['linguistics', 'learning', 'reading'] },
    ]
  },
  {
    title: 'Logistics & Shipping',
    slug: 'logistics',
    description: 'Professional supply chain math for businesses and shippers. Manage volume, weight, and delivery efficiency.',
    defaultGuidance: {
      whyItMatters: "Efficiency in the supply chain is built on precise mathematical models. Calculating reorder points, safety stock, and load optimization minimizes waste and ensures that products move through the global economy with minimal friction.",
      pitfalls: [
        "Relying on historic averages during period of high market volatility",
        "Failing to account for the 'bullwhip effect' when scaling orders"
      ],
      proTip: "Use dimensional weight calculations proactively to negotiate better rates with freight carriers before shipments are finalized."
    },
    items: [
      { name: 'Reorder Point (ROP)', path: '/reorder-point', desc: 'The exact moment to restock inventory.', keywords: ['supply chain', 'warehouse', 'business'] },
      { name: 'Safety Stock', path: '/safety-stock', desc: 'Calculate buffer inventory for demand spikes.', keywords: ['logistics', 'risk management', 'supply chain'] },
      { name: 'Economic Order Quantity', path: '/eoq', desc: 'Balance holding vs ordering costs.', keywords: ['inventory theory', 'optimum', 'business math'] },
      { name: 'Dimensional Weight (DIM)', path: '/dim-weight', desc: 'Calculate shipping weight by volume.', keywords: ['shipping', 'fedex', 'ups', 'freight'] },
      { name: 'Container Load', path: '/container-loading', desc: 'Optimize space for TEU/FEU units.', keywords: ['export', 'import', 'stowage'] },
      { name: 'Pallet Fit', path: '/pallet-count', desc: 'Calculate how many units fit on a standard pallet.', keywords: ['warehousing', 'shipping', 'packaging'] },
      { name: 'Lead Time Variance', path: '/lead-time-calc', desc: 'Measure supplier reliability over time.', keywords: ['supply chain', 'analytics', 'logistics'] },
      { name: 'Freight Class (NMFC)', path: '/freight-classifier', desc: 'Identify shipping categories for LTL.', keywords: ['trucking', 'logistics', 'compliance'] },
      { name: 'Fuel Surcharge', path: '/fuel-surcharge', desc: 'Standard diesel-price adjustment for fees.', keywords: ['trucking', 'finance', 'logistics'] },
      { name: 'Warehouse Utilization', path: '/warehouse-space', desc: 'Measure active vs dead storage space.', keywords: ['inventory', 'real estate', 'industrial'] },
    ]
  },
  {
    title: 'Home Tech & Smart Home',
    slug: 'home-tech',
    description: 'Optimize your digital sanctuary. Calculations for automation, network coverage, and energy-efficient gadgets.',
    defaultGuidance: {
      whyItMatters: "A truly smart home relies on robust network logic and energy efficiency calculations. Understanding protocol ranges and power draw helps you build a digital sanctuary that is both reliable and cost-effective.",
      pitfalls: [
        "Overloading a single Wi-Fi mesh node without considering physical obstructions",
        "Ignoring the cumulative 'vampire load' of connected devices on your utility bill"
      ],
      proTip: "Place your smart home hub centrally and use Zigbee or Z-Wave repeaters to create a self-healing mesh network for maximum reliability."
    },
    items: [
      { name: 'Zigbee vs Z-Wave Range', path: '/smarthome-range', desc: 'Analyze protocol coverage through walls.', keywords: ['iot', 'home automation', 'networking'] },
      { name: 'Smart Bulb ROI', path: '/smart-bulb-savings', desc: 'Compare LED automation to manual switches.', keywords: ['energy', 'utility', 'saving'] },
      { name: 'Wi-Fi Mesh Placer', path: '/wifi-mesh-count', desc: 'Optimizing node count by square footage.', keywords: ['networking', 'internet', 'tech'] },
      { name: 'Camera Storage Time', path: '/security-cam-storage', desc: 'Determine HDD needs for 24/7 video.', keywords: ['cctv', 'surveillance', 'data'] },
      { name: 'UPS Runtime', path: '/ups-battery-life', desc: 'Calculate backup duration during outages.', keywords: ['electricity', 'hardware', 'safety'] },
      { name: 'Streaming Bandwidth', path: '/streaming-data-use', desc: 'Analyze data caps vs 4K/8K content.', keywords: ['tech', 'internet', 'entertainment'] },
      { name: 'Smart Home Hub Logic', path: '/automation-complexity', desc: 'Assess delay and reliability of scenes.', keywords: ['iot', 'programming', 'latency'] },
      { name: 'Standby Power Draw', path: '/vampire-load', desc: 'Hidden electricity costs of "off" devices.', keywords: ['energy', 'utility', 'bill'] },
      { name: 'Ethernet vs Wi-Fi Speed', path: '/network-performance', desc: 'Real-world throughput comparison.', keywords: ['gaming', 'work', 'tech'] },
      { name: 'Smart Lock Battery', path: '/smart-lock-life', desc: 'Estimate cycles before low power warning.', keywords: ['security', 'hardware', 'lifestyle'] },
    ]
  },
  {
    title: 'Food Science & Health',
    slug: 'food-science',
    description: 'The chemistry of what we consume. Precise tools for dietary tracking, safe consumption limits, and nutritional bio-availability.',
    defaultGuidance: {
      whyItMatters: "Precise nutritional tracking and understanding metabolic chemistry are key to long-term wellness. These tools help you move beyond generic advice to data-driven dietary decisions tailored to your unique biology.",
      pitfalls: [
        "Focusing solely on calories while ignoring the glycemic load of mixed meals",
        "Misestimating the biological half-life of substances like caffeine or alcohol"
      ],
      proTip: "Pair high-glycemic carbohydrates with fibers and healthy fats to significantly reduce blood sugar spikes after eating."
    },
    items: [
      { name: 'Saturated Fat Limit', path: '/sat-fat-limit', desc: 'Daily recommendation based on calorie intake.', keywords: ['keto', 'heart health', 'diet'] },
      { name: 'Sodium Watcher', path: '/sodium-intake', desc: 'Heart-healthy salt limits tracker.', keywords: ['hypertension', 'health', 'nutrition'] },
      { name: 'Caffeine Half-Life', path: '/caffeine-metabolism', desc: 'Calculate when your last cup leaves the blood.', keywords: ['sleep', 'energy', 'biohacking'] },
      { name: 'Alcohol Clearance', path: '/bac-time', desc: 'Estimate time to reach zero blood levels.', keywords: ['safety', 'health', 'metabolism'] },
      { name: 'Vitamin Absorption', path: '/vitamin-bioavailability', desc: 'Analyze uptake efficiency of supplements.', keywords: ['health', 'nutrition', 'clinical'] },
      { name: 'Glycemic Load: Mixed', path: '/mixed-meal-glycemic', desc: 'Impact of fibers and fats on sugar spikes.', keywords: ['diabetes', 'nutrition', 'diet'] },
      { name: 'Electrolyte Balance', path: '/hydration-salts', desc: 'Ratios for high-intensity recovery.', keywords: ['sports science', 'fitness', 'health'] },
      { name: 'Food Waste Cost', path: '/fridge-waste-calc', desc: 'Visualize the annual value of discarded food.', keywords: ['sustainability', 'budgeting', 'lifestyle'] },
      { name: 'Meal Prep Portions', path: '/meal-prep-volume', desc: 'Scale bulk cooking for individual meals.', keywords: ['prep', 'fitness', 'efficiency'] },
      { name: 'DASH Diet Score', path: '/dash-compliance', desc: 'Blood pressure diet adherence utility.', keywords: ['health', 'hypertension', 'clinical'] },
    ]
  },
  {
      title: 'Historical & Ancient Math',
      slug: 'ancient-math',
      description: 'Explore the foundations of human calculation. Convert ancient numbering systems and simulate historical tools.',
      defaultGuidance: {
        whyItMatters: "Exploring the mathematical foundations of ancient civilizations provides profound insight into human progress. Converting historical systems and simulating ancient tools bridges the gap between traditional wisdom and modern calculation.",
        pitfalls: [
          "Applying modern decimal logic to non-decimal systems like Babylonian Base-60",
          "Ignoring the calendar reforms (like the Gregorian shift) when calculating historical dates"
        ],
        proTip: "When studying Roman Numerals, remember they were primarily used for recording and numbering, while actual calculations were performed on an abacus."
      },
      items: [
          { name: 'Roman Numeral Mastery', path: '/roman-numerals-pro', desc: 'Advanced conversion for historical dates.', keywords: ['history', 'latin', 'numbers'] },
          { name: 'Abacus Simulator', path: '/soroban-calc', desc: 'Simulate Eastern bead-frame arithmetic.', keywords: ['tradition', 'math', 'education'] },
          { name: 'Mayan Long Count', path: '/mayan-calendar', desc: 'Calculate dates in the Mesoamerican system.', keywords: ['astronomy', 'history', 'archaeology'] },
          { name: 'Babylonian Base-60', path: '/sexagesimal-calc', desc: 'Math used by the first astronomers.', keywords: ['history', 'science', 'trigonometry'] },
          { name: 'Egyptian Fractions', path: '/egyptian-math', desc: 'Decompose modern numbers into unit fractions.', keywords: ["unit fractions","math history","greedy algorithm","fraction theory","ancient math","number theory","fractional series","egyptian math","recreational math","fractions"] },
          { name: 'Historical Inflation', path: '/gold-purchasing-power', desc: 'Compare 1800 vs modern purchasing power.', keywords: ['economics', 'history', 'finance'] },
          { name: 'Slide Rule Accuracy', path: '/slide-rule-sim', desc: 'Logarithmic calculations without digital chips.', keywords: ['engineering history', 'vintage tech', 'math'] },
          { name: 'Shilling to Pence', path: '/pre-decimal-uk', desc: 'Convert 19th-century British currency.', keywords: ['history', 'uk finance', 'literature'] },
          { name: 'Gregorian Shift', path: '/calendar-reform', desc: 'The 11 days that disappeared in 1752.', keywords: ['history', 'time', 'correction'] },
          { name: 'Ancient Sea Navigation', path: '/dead-reckoning', desc: 'Calculate position via speed and direction.', keywords: ['maritime', 'history', 'exploration'] },
      ]
  },
  {
      title: 'Space & Astronomy',
      slug: 'space',
      description: 'The mathematics of the cosmos. Calculate orbital mechanics, light speed travel, and planetary trajectories.',
      defaultGuidance: {
        whyItMatters: "The vast scale of the cosmos demands precision that bridges physics and imagination. Calculating orbital mechanics and light-speed trajectories allows us to navigate the stars and understand our place in the universe.",
        pitfalls: [
          "Using standard Newtonian physics in scenarios where relativistic time expansion is significant",
          "Assuming constant gravity when calculating escape velocities from non-spherical bodies"
        ],
        proTip: "Use the Schwarzschild radius to conceptualize the density limits of matter; it's a fundamental constant for understanding black hole physics."
      },
      items: [
          { name: 'Light Speed Travel', path: '/light-year-time', desc: 'Time expansion and distance for relativity.', keywords: ['physics', 'sci-fi', 'astronomy'] },
          { name: 'Escape Velocity', path: '/escape-velocity', desc: 'Energy needed to leave a planetary body.', keywords: ['rocket science', 'physics', 'nasa'] },
          { name: 'Orbit Decay', path: '/satellite-lifespan', desc: 'Estimate time before re-entry of objects.', keywords: ['space tech', 'engineering', 'science'] },
          { name: 'Planet Weight', path: '/your-weight-on-planets', desc: 'Calculate your mass across the solar system.', keywords: ['gravity', 'fun math', 'astronomy'] },
          { name: 'Standard gravity (G)', path: '/universal-gravitation', desc: 'Calculate force between two large masses.', keywords: ['physics', 'science', 'newton'] },
          { name: 'Telescope FOM', path: '/telescope-limiting-mag', desc: 'Figure of Merit for astronomical viewing.', keywords: ['hobbies', 'stargazing', 'optics'] },
          { name: 'Sun Altitude', path: '/solar-angle', desc: 'Position of the sun based on lat/long/time.', keywords: ['renewables', 'navigation', 'nature'] },
          { name: 'Schwarzschild Radius', path: '/black-hole-size', desc: 'Event horizon size for any given mass.', keywords: ['astrophysics', 'relativity', 'universe'] },
          { name: 'Drake Equation (Aliens)', path: '/drake-aliens', desc: 'Statistical probability of other civilizations.', keywords: ['seti', 'possibility', 'astrobiology'] },
          { name: 'Space Shuttle G-Force', path: '/launch-acceleration', desc: 'Forces felt during atmospheric exit.', keywords: ['physics', 'aerospace', 'human health'] },
      ]
  },
  {
    title: 'International Travel',
    slug: 'intl-travel',
    description: 'Calculations for global explorers. Handle logistics, currency, and cross-border standards.',
    defaultGuidance: {
      whyItMatters: "Global exploration is as much about logistical precision as it is about cultural immersion. Managing time zone shifts, currency volatility, and visa regulations ensures a smooth journey across borders and prevents costly travel disruptions.",
      pitfalls: [
        "Relying on generic jet lag advice instead of timing light exposure to your specific shift",
        "Failing to verify the exact Schengen zone stay limits"
      ],
      proTip: "Use the 24-hour clock for all travel bookings to avoid the common AM/PM booking error, especially for late-night flights."
    },
    items: [
      { name: 'Jet Lag Recovery', path: '/jet-lag-optimizer', desc: 'Custom light-exposure plan by time zone shift.', keywords: ["circadian rhythm","timezone shift","travel adjustment","sleep health","jet lag math","time adjustment","biological clock","health metrics","travel recovery","wellness math"] },
      { name: 'VAT Refund Estimator', path: '/vat-refund', desc: 'Calculate money back on foreign shopping.', keywords: ['finance', 'travel', 'taxes'] },
      { name: 'Flight Path Distance', path: '/great-circle-distance', desc: 'Shortest path between two global points.', keywords: ['geometry', 'aviation', 'geography'] },
      { name: 'Roam Data Cost', path: '/roaming-fee-calc', desc: 'Project expenses for foreign mobile data.', keywords: ['tech', 'travel', 'finance'] },
      { name: 'Passport Photos', path: '/passport-photo-aspect', desc: 'Standard ratios for various countries.', keywords: ['compliance', 'photography', 'travel'] },
      { name: 'Visa Duration', path: '/visa-stay-counter', desc: 'Track days remaining in a foreign zone (e.g. Schengen).', keywords: ['legal', 'travel', 'compliance'] },
      { name: 'Altitude Sickness', path: '/altitude-risk', desc: 'Asses risk based on ascent speed and height.', keywords: ['health', 'hiking', 'science'] },
      { name: 'Flight Compensation', path: '/flight-delay-payout', desc: 'EU261 and international delay math.', keywords: ['legal', 'travel', 'rights'] },
      { name: 'Global Power Plugs', path: '/plug-type-finder', desc: 'Identify voltage and socket types by country.', keywords: ['tech', 'travel', 'standardization'] },
      { name: 'Tipping Etiquette', path: '/intl-tipping', desc: 'Standard percentages for services globally.', keywords: ['culture', 'dining', 'finance'] },
    ]
  },
  {
    title: 'Small Business Admin',
    slug: 'small-biz',
    description: 'The back-office brain for entrepreneurs. Streamline your operations with data-driven tools.',
    defaultGuidance: {
      whyItMatters: "The success of a small business is often determined by the accuracy of its back-office operations. Streamlining marketing ROI, leasing costs, and subscription stacks allows entrepreneurs to focus on growth while maintaining financial health.",
      pitfalls: [
        "Ignoring customer churn rate when calculating the ROI of acquisition campaigns",
        "Failing to account for the 'per-seat' licensing costs as the team scales"
      ],
      proTip: "Audit your SaaS subscriptions quarterly to identify and remove redundant tools that may be duplicating functionality."
    },
    items: [
      { name: 'Email Marketing ROI', path: '/email-roi', desc: 'Analyze list value vs campaign cost.', keywords: ['marketing', 'business', 'growth'] },
      { name: 'Customer Referrals', path: '/referral-lpv', desc: 'Lead Potential Value of word-of-mouth.', keywords: ['growth', 'sales', 'business'] },
      { name: 'Office Rent p/sqft', path: '/commercial-lease', desc: 'Compare real estate value for startups.', keywords: ["commercial rent","triple net lease","office space math","retail lease","business rent","leasing costs","property management","commercial real estate","lease terms","landlord math"] },
      { name: 'Employee Per-Seat Cost', path: '/it-seat-cost', desc: 'Hardware and software licenses per head.', keywords: ['tech', 'budgeting', 'it'] },
      { name: 'Bulk Buy Discount', path: '/bulk-discount-roi', desc: 'Storage cost vs purchase savings.', keywords: ['logistics', 'finance', 'business'] },
      { name: 'Conference ROI', path: '/event-roi', desc: 'Leads gathered vs travel and ticket costs.', keywords: ['marketing', 'sales', 'business'] },
      { name: 'Social Post Timing', path: '/social-engagement-timer', desc: 'Predict peak visibility based on timezone.', keywords: ['marketing', 'tech', 'data'] },
      { name: 'Subscription Overlap', path: '/saas-redundancy', desc: 'Identify wasted cost in tool stacks.', keywords: ['productivity', 'it', 'finance'] },
      { name: 'Logo Aspect Ratio', path: '/logo-proportions', desc: 'Standard golden ratio and grid checks.', keywords: ['design', 'branding', 'math'] },
      { name: 'Domain Name Value', path: '/domain-valuation', desc: 'Estimate worth based on length and keywords.', keywords: ['tech', 'business', 'sales'] },
    ]
  },
  {
    title: 'Green Living & Sustainability',
    slug: 'sustainability-pro',
    description: 'Deepen your ecological mindfulness. Sophisticated tools for a lower-impact lifestyle.',
    defaultGuidance: {
      whyItMatters: "Deepening your ecological mindfulness requires moving beyond surface-level habits to quantifiable environmental impact. These tools provide the precision needed to optimize your carbon footprint and transition to a truly sustainable lifestyle.",
      pitfalls: [
        "Underestimating the energy loss from 'phantom loads' in home electronics",
        "Focusing on recycling while ignoring the higher impact of reducing food miles"
      ],
      proTip: "Match your compost's carbon-to-nitrogen ratio accurately to accelerate decomposition and prevent odors in urban gardening settings."
    },
    items: [
      { name: 'Compost C/N Ratio', path: '/compost-chemistry', desc: 'Carbon to Nitrogen balance for healthy soil.', keywords: ['gardening', 'science', 'nature'] },
      { name: 'Electric Vehicle ROI', path: '/ev-payback', desc: 'Savings over gas based on local kwh/gal.', keywords: ['automotive', 'finance', 'green'] },
      { name: 'Meatless Impact', path: '/vegetarian-co2-savings', desc: 'Visualize water and carbon saved per meal.', keywords: ['diet', 'ecology', 'sustainability'] },
      { name: 'Smart Power Strip', path: '/phantom-load-savings', desc: 'ROi of shutting down idle gear.', keywords: ['tech', 'energy', 'home'] },
      { name: 'Rainwater Harvest', path: '/rain-barrel-yield', desc: 'Calculate gallons collected from roof area.', keywords: ['gardening', 'water', 'eko'] },
      { name: 'Secondary Packaging', path: '/shipping-waste-calc', desc: 'Analyze volume of boxes vs product.', keywords: ['business', 'logistics', 'eko'] },
      { name: 'Light Temperature', path: '/kelvin-color-temp', desc: 'Circadian impact of different bulb hues.', keywords: ['health', 'home', 'tech'] },
      { name: 'Dishwasher vs Handwash', path: '/dish-washing-water', desc: 'Efficiency comparison based on load size.', keywords: ['home', 'utility', 'saving'] },
      { name: 'Local Produce Value', path: '/food-miles', desc: 'Calculate transportation energy of your diet.', keywords: ['ecology', 'food', 'sustainability'] },
      { name: 'Solar Shade Loss', path: '/solar-shading', desc: 'Impact of tree or building obstructions on PV.', keywords: ['renewables', 'engineering', 'solar'] },
    ]
  },
  {
    title: 'Real Estate Strategy',
    slug: 'real-estate-pro',
    description: 'Expert-level property analysis for investors and homebuyers.',
    defaultGuidance: {
      whyItMatters: "Expert-level property analysis is the foundation of successful real estate investment. Calculating cap rates, cash-on-cash returns, and renovation ROI with precision allows you to identify high-value opportunities and manage risk effectively.",
      pitfalls: [
        "Failing to account for vacancy rates and maintenance reserves in gross scheduled income",
        "Underestimating the 'carry cost' during house flipping renovation periods"
      ],
      proTip: "When using the BRRRR strategy, focus on increasing the After Repair Value (ARV) through high-impact aesthetics that appeal to appraisers."
    },
    items: [
      { name: 'Cap Rate Advanced', path: '/cap-rate-pro', desc: 'Project returns including vacancy and repairs.', keywords: ['investment', 'finance', 'real estate'] },
      { name: 'House Flipping ROI', path: '/flip', desc: 'Buy, reno, and carry cost analysis.', keywords: ['business', 'real estate', 'finance'] },
      { name: 'Airbnb Profitability', path: '/short-term-rental-yield', desc: 'Compare cleaning vs occupancy income.', keywords: ['travel', 'finance', 'real estate'] },
      { name: 'Cash-on-Cash Return', path: '/coc-return', desc: 'Annual pre-tax cash flow relative to invested capital.', keywords: ['finance', 'investment', 'real estate'] },
      { name: 'Mortgage Payoff: Early', path: '/early-repayment', desc: 'Interest saved by adding $100/mo extra.', keywords: ['personal finance', 'banking', 'savings'] },
      { name: 'Property Management ROI', path: '/pm-fee-value', desc: 'Cost of your time vs hiring a pro.', keywords: ['lifestyle', 'business', 'real estate'] },
      { name: 'Commercial GSI', path: '/gross-scheduled-income', desc: 'Total potential income at 100% occupancy.', keywords: ['finance', 'business', 'real estate'] },
      { name: 'BRRRR Strategy', path: '/brrrr', desc: 'Refinance and repeat investment math.', keywords: ["real estate investing","wealth strategies","brrrr method","flipping houses","rehab math","rental cash flow","refinance math","investing formula","property scaling","wealth building"] },
      { name: 'Home Equity Line of Credit', path: '/heloc-limit', desc: 'Borrowing power based on LTV ratios.', keywords: ['banking', 'loan', 'finance'] },
      { name: 'Property Tax Pro-Rata', path: '/tax-proration', desc: 'Division of tax between buyer and seller.', keywords: ['legal', 'closing', 'real estate'] },
    ]
  },
  {
    title: 'Personal Development',
    slug: 'productivity-pro',
    description: 'Master your routine and reclaim your potential. Tools for elite performance and lifelong growth.',
    defaultGuidance: {
      whyItMatters: "Elite performance is achieved when routine is transformed into a measurable process. Tracking deep work ratios, opportunity costs, and knowledge half-lives provides the data needed to reclaim your potential and reach world-class expertise.",
      pitfalls: [
        "Misjudging personal capacity due to the 'planning fallacy' (underestimating time needed)",
        "Equating productivity with 'busy work' instead of focused deep work"
      ],
      proTip: "Apply a 40% 'buffer' to all project completion estimates to account for the inherent bias toward optimism in planning."
    },
    items: [
      { name: 'Deep Work Ratio', path: '/deep-work-tracking', desc: 'Analyze focused hours vs shallow admin.', keywords: ['productivity', 'career', 'psychology'] },
      { name: 'Project Completion Time', path: '/estimating-bias', desc: 'Correct for the planning fallacy (add 40%).', keywords: ['psychology', 'time', 'management'] },
      { name: 'Not-to-do List ROI', path: '/distraction-avoidance', desc: 'Time saved by cutting specific habits.', keywords: ['productivity', 'lifestyle', 'time'] },
      { name: 'Knowledge Half-Life', path: '/skill-decay-timer', desc: 'Track when specific tech skills expire.', keywords: ['career', 'education', 'learning'] },
      { name: 'Personal Burn Rate', path: '/life-runway', desc: 'Days of survival without new income.', keywords: ['finance', 'lifestyle', 'freedom'] },
      { name: 'Opportunity Cost', path: '/opportunity-cost-logic', desc: 'The hidden price of saying "Yes".', keywords: ["decision math","economics","trade off","business logic","choosing options","resource allocation","hidden cost","finance philosophy","time vs money","lifestyle math"] },
      { name: 'Information Diet', path: '/content-consumption-ratio', desc: 'Analyze curated vs random info input.', keywords: ['digital wellness', 'psychology', 'growth'] },
      { name: 'Meeting Cost: Pro', path: '/meeting-price-tag', desc: 'Real-time billing of participant salaries.', keywords: ['business', 'productivity', 'efficiency'] },
      { name: 'Second Brain Space', path: '/digital-knowledge-volume', desc: 'Growth tracking for your note-taking system.', keywords: ['tech', 'learning', 'productivity'] },
      { name: 'Flow State Frequency', path: '/flow-tracker', desc: 'Optimize your environments for high performance.', keywords: ['psychology', 'peak performance', 'work'] },
    ]
  },
  {
    title: 'Everyday Utility & Life Hacks',
    slug: 'util-hacks',
    description: 'The math behind the mundane. Clever tools to optimize your household, finances, and time.',
    defaultGuidance: {
      whyItMatters: "The math behind mundane activities can unlock significant savings in time and resources. Optimizing household utilities, managing inventory, and understanding the physical limits of everyday items transforms your living space into a high-efficiency environment.",
      pitfalls: [
        "Ignoring the impact of inflation on the long-term value of gift cards",
        "Overestimating the weight capacity of shelves without accounting for dynamic loads"
      ],
      proTip: "Use the inverse square law when planning home lighting; doubling the distance from a light source reduces intensities by four times."
    },
    items: [
      { name: 'Gift Card Value', path: '/gift-card-depreciation', desc: 'Hidden value loss through inflation and fees.', keywords: ['personal finance', 'shopping', 'lifestyle'] },
      { name: 'Coffee Grinder Setting', path: '/coffee-grind-math', desc: 'Convert between micron settings and brew types.', keywords: ['culinary', 'coffee', 'tech'] },
      { name: 'Candle Burn Time', path: '/candle-life', desc: 'Estimate hours of fragrance remaining.', keywords: ['home', 'lifestyle', 'decor'] },
      { name: 'Pool Volume: Irregular', path: '/freeform-pool-volume', desc: 'Geometry for non-rectangular swimming pools.', keywords: ['home improvement', 'water', 'construction'] },
      { name: 'Wallpaper Match Gap', path: '/wallpaper-repeat', desc: 'Calculate waste based on pattern repeat frequency.', keywords: ['design', 'home improvement', 'decor'] },
      { name: 'Shelf Weight Capacity', path: '/shelf-load', desc: 'Verify safety limits for book and gear storage.', keywords: ['home', 'safety', 'engineering'] },
      { name: 'Laundry Load Cost', path: '/washing-machine-cost', desc: 'Calculate electricity and water per wash.', keywords: ['utility', 'finance', 'home'] },
      { name: 'Pet Age: Years to Days', path: '/pet-age-precise', desc: 'Exact life-stage tracking for vet visits.', keywords: ['pets', 'time', 'health'] },
      { name: 'Battery Drain: IoT', path: '/iot-battery-life', desc: 'Project lifespan of sensors and smart tags.', keywords: ['tech', 'electronics', 'home'] },
      { name: 'Window Tint Heat Reduction', path: '/tint-efficiency', desc: 'Estimate utility savings from glass cooling.', keywords: ['automotive', 'home improvement', 'physics'] },
      { name: 'Garden Solar Light', path: '/solar-light-drain', desc: 'Estimate runtime after 8 hours of sun.', keywords: ['garden', 'solar', 'tech'] },
      { name: 'Room Echo Duration', path: '/reverb-time', desc: 'Basic acoustic math for home offices.', keywords: ['audio', 'home office', 'physics'] },
      { name: 'Subscription ROI', path: '/utility-subscription-value', desc: 'Frequency of use vs monthly price.', keywords: ['finance', 'productivity', 'lifestyle'] },
      { name: 'Commute Calories', path: '/walking-commute-calories', desc: 'Passive health gains from your daily walk.', keywords: ['health', 'fitness', 'lifestyle'] },
      { name: 'Fridge Temperature Shift', path: '/fridge-efficiency', desc: 'Impact of door opening frequency on bill.', keywords: ['home', 'energy', 'saving'] },
      { name: 'Air Purifier CADR', path: '/air-purifier-size', desc: 'Room size matching for clean air delivery.', keywords: ['health', 'home', 'tech'] },
      { name: 'Plant Repotting Volume', path: '/pot-volume-update', desc: 'Soil volume change from old to new pot.', keywords: ['gardening', 'nature', 'math'] },
      { name: 'Mirror Placement Angle', path: '/mirror-reflection', desc: 'Optics for room brightening and viewing.', keywords: ['design', 'interior', 'physics'] },
      { name: 'Table Setting Spacing', path: '/dinner-table-math', desc: 'Elbow room math for event hosting.', keywords: ['event planning', 'hosting', 'lifestyle'] },
      { name: 'Luggage Overweight Fee', path: '/baggage-fee-risk', desc: 'Probability of being caught by sensitive scales.', keywords: ['travel', 'finance', 'logistics'] },
      { name: 'Dice Roll: Advanced', path: '/dice-probability-pro', desc: 'Odds for complex tabletop gaming scenarios.', keywords: ['gaming', 'math', 'hobbies'] },
      { name: 'Angel Number Meaning', path: '/angel-number-generator', desc: 'Zodiac-aligned pattern detection.', keywords: ['numerology', 'spirituality', 'lifestyle'] },
      { name: 'Social Post Readability', path: '/flesch-kincaid-social', desc: 'Optimize caption complexity for engagement.', keywords: ['marketing', 'writing', 'psychology'] },
      { name: 'Power Strip Load', path: '/circuit-breaker-load', desc: 'Prevention tool for overdrawing home outlets.', keywords: ['home', 'safety', 'tech'] },
      { name: 'Flashlight Beam Distance', path: '/lumens-candela-distance', desc: 'Inverse square law for tactical lighting.', keywords: ['outdoor', 'physics', 'tech'] },
      { name: 'Bicycle Tire Pressure: PSI', path: '/bike-psi-optimizer', desc: 'Casing width vs rider weight logic.', keywords: ['sports', 'cycling', 'physics'] },
      { name: 'Streaming Buffer Time', path: '/video-buffer-calc', desc: 'Wait time based on bitrates and bandwidth.', keywords: ['tech', 'internet', 'entertainment'] },
      { name: 'Shoe Lifespan: Miles', path: '/shoe-wear-tracker', desc: 'Track midsole compression for health.', keywords: ['fitness', 'health', 'lifestyle'] },
      { name: 'Sunlight Exposure: Vitamin D', path: '/sun-exposure-timer', desc: 'Safe time limit based on UV index.', keywords: ['health', 'nature', 'science'] },
      { name: 'Grocery Bag Strength', path: '/bag-weight-limit', desc: 'Estimate when handles will fail based on volume.', keywords: ['humor', 'lifestyle', 'physics'] },
    ]
  },
  {
    title: 'Pet Health & Wellness',
    slug: 'pet-wellness',
    description: 'Expert care for your animal companions. Track growth, nutrition, and life stages for a happier pet.',
    defaultGuidance: {
      whyItMatters: "Expert care for animal companions requires a foundation in nutritional science and developmental tracking. Precision in calculating calorie intake, growth curves, and life stages ensures your pet lives a long, healthy, and happy life.",
      pitfalls: [
        "Feeding based on package averages instead of your pet's specific body mass index",
        "Underestimating the hydration needs of senior cats with renal considerations"
      ],
      proTip: "Monitor your puppy's 12-week metrics to project their adult weight accurately and adjust their dietary planning accordingly."
    },
    items: [
      { name: 'Dog Pregnancy Timer', path: '/dog-pregnancy-tracker', desc: 'Estimated whelping date based on mating.', keywords: ['pets', 'breeding', 'health'] },
      { name: 'Cat BMI Calculator', path: '/cat-body-mass', desc: 'Assess feline fitness using leg/chest metrics.', keywords: ['pets', 'health', 'cats'] },
      { name: 'Aquarium Water Vol', path: '/fish-tank-gallons', desc: 'Calculate true volume minus gravel and decor.', keywords: ['pets', 'hobby', 'water'] },
      { name: 'Senior Cat Hydration', path: '/cat-water-intake', desc: 'Monitor fluid needs for renal health.', keywords: ['pets', 'cats', 'health'] },
      { name: 'Pet Food Calorie Mix', path: '/pet-kcal-converter', desc: 'Convert grams of dry food to total kilocalories.', keywords: ['pets', 'nutrition', 'finance'] },
      { name: 'Hamster Wheel Energy', path: '/hamster-distance', desc: 'Convert nightly rotations into miles and calories.', keywords: ['pets', 'small animals', 'fitness'] },
      { name: 'Horse Pasture Needs', path: '/horse-grazing-acres', desc: 'Land required based on weight and activity.', keywords: ['animals', 'farming', 'lifestyle'] },
      { name: 'Puppy Growth Curve', path: '/puppy-weight-projector', desc: 'Estimate adult weight from 12-week metrics.', keywords: ['pets', 'dogs', 'growth'] },
      { name: 'Reptile Heat Gradient', path: '/reptile-temperate-map', desc: 'Calculate bulb distance for safe basking zones.', keywords: ['pets', 'exotics', 'safety'] },
      { name: 'Bird Life Stage', path: '/avian-age-converter', desc: 'Relative bird age compared to human years.', keywords: ['pets', 'birds', 'health'] },
    ]
  },
  {
    title: 'Creative Arts & Photography',
    slug: 'creative-arts',
    description: 'Technical precision for visual storytellers. Optics, layout, and production math for creators.',
    defaultGuidance: {
      whyItMatters: "Technical precision is the secret weapon of the artistic storyteller. Optics, layout math, and production calculations provide the structure needed to transform creative vision into polished, professional-grade visual assets.",
      pitfalls: [
        "Neglecting sensor crop factors when calculating focal length equivalents",
        "Ignoring the impact of neutral density filters on total exposure timing"
      ],
      proTip: "Find the hyperfocal distance for your specific lens and aperture to maximize the depth of field in landscape photography."
    },
    items: [
      { name: 'Depth of Field (DoF)', path: '/dof', desc: 'Find the hyperfocal distance for sharp landscapes.', keywords: ['photography', 'optics', 'tech'] },
      { name: 'Sensor Crop Factor', path: '/focal-length-equivalent', desc: 'Field of view math for APS-C vs Full Frame.', keywords: ['photography', 'tech', 'gear'] },
      { name: 'Long Exposure ND', path: '/nd-filter-timer', desc: 'Adjust shutter speed for heavy neutral density.', keywords: ['photography', 'nature', 'tech'] },
      { name: 'Timelapse Duration', path: '/timelapse-projector', desc: 'Shooting interval vs final video length.', keywords: ['video', 'photography', 'tech'] },
      { name: 'Printing DPI Pro', path: '/print-resolution-calc', desc: 'Match image dimensions to high-quality print sizes.', keywords: ['design', 'art', 'tech'] },
      { name: 'Color Mix: Paint', path: '/pigment-ratio-mixer', desc: 'Ratios for watercolor and acrylic blending.', keywords: ['art', 'crafts', 'color'] },
      { name: 'Golden Ratio Layout', path: '/golden-section-sizing', desc: 'Find harmonious dimensions for UI and canvas.', keywords: ['design', 'math', 'art'] },
      { name: 'Canvas Stretcher Bar', path: '/canvas-margin-calc', desc: 'Calculate wood needs for specific art sizes.', keywords: ['art', 'diy', 'crafts'] },
      { name: 'Video File Size', path: '/video-bitrate-math', desc: 'Estimate storage based on bitrate and duration.', keywords: ['video', 'tech', 'logistics'] },
      { name: 'Bokeh Diameter', path: '/lens-blur-circle', desc: 'Theoretical background blur intensity math.', keywords: ['photography', 'optics', 'science'] },
    ]
  },
  {
    title: 'Outdoor Survival & Adventure',
    slug: 'survival-bushcraft',
    description: 'Gear logic for the great outdoors. Safety, navigation, and endurance tools for adventurers.',
    defaultGuidance: {
      whyItMatters: "Gear logic and navigational precision are critical for safety in the great outdoors. Calculating hiking times, pack weight ratios, and purification limits allows you to push boundaries while maintaining a high safety margin.",
      pitfalls: [
        "Using base weight ratios that exceed 20% of your total body weight",
        "Failing to adjust water boiling times for higher altitudes"
      ],
      proTip: "Use Naismith's Rule as a baseline and add 30 minutes for every 1000 feet of ascent to predict your arrival time accurately."
    },
    items: [
      { name: 'Hiking Time: Naismith', path: '/naismith-rule-tracker', desc: 'Pace estimation including elevation impact.', keywords: ['outdoor', 'fitness', 'travel'] },
      { name: 'Backpacker Base Weight', path: '/pack-weight-ratio', desc: 'Gear load vs total body weight safety.', keywords: ['outdoor', 'hiking', 'safety'] },
      { name: 'Water Purification', path: '/water-boil-timer', desc: 'Adjust time based on boiling point altitude.', keywords: ['science', 'outdoor', 'survival'] },
      { name: 'Firewood Cord Volume', path: '/firewood-storage-math', desc: 'Calculate cords from bulk pile measurements.', keywords: ['lifestyle', 'home', 'energy'] },
      { name: 'Sleeping Bag Rating', path: '/bag-temp-adjuster', desc: 'Correct EN ratings for wind and pad R-value.', keywords: ['outdoor', 'gear', 'tech'] },
      { name: 'Signal Mirror Range', path: '/signal-mirror-horizon', desc: 'Optical line-of-sight math for emergencies.', keywords: ['safety', 'physics', 'survival'] },
      { name: 'Tent Size: Comfort', path: '/tent-space-per-person', desc: 'Actual usable sleeping area vs listed capacity.', keywords: ['outdoor', 'travel', 'design'] },
      { name: 'Foraging Harvest %', path: '/sustainable-foraging-yield', desc: 'Biomass safety limits for wild harvesting.', keywords: ['nature', 'environment', 'ecology'] },
      { name: 'Calorie Burn: Altitude', path: '/altitude-metabolic-rate', desc: 'Oxygen deficiency impact on energy burn.', keywords: ['fitness', 'science', 'outdoor'] },
      { name: 'Compass Declination', path: '/magnetic-north-offset', desc: 'Correction math for topographic map accuracy.', keywords: ['travel', 'science', 'tech'] },
    ]
  },
  {
    title: 'Event Logistics & Hosting',
    slug: 'event-master',
    description: 'Flawless execution for gatherings big and small. Seating, catering, and timeline management.',
    defaultGuidance: {
      whyItMatters: "Flawless execution of gatherings requires a deep understanding of catering volumes, crowd density, and event timelines. Professional management of these variables ensures a high-quality experience for both hosts and guests.",
      pitfalls: [
        "Overestimating invitation response rates without accounting for standard attrition",
        "Failing to calculate the aisle-width constraints in high-density seating plans"
      ],
      proTip: "When planning an open bar, calculate volumes based on 1.5 drinks per person for the first hour and 1 drink per person for subsequent hours."
    },
    items: [
      { name: 'Beverage Bar Math', path: '/wedding-bar-volume', desc: 'Alcohol quantities based on guest count and hours.', keywords: ['event planning', 'beverages', 'finance'] },
      { name: 'Catering Portion Size', path: '/food-prep-portions', desc: 'Buffet vs plated prep counts for zero waste.', keywords: ['cooking', 'catering', 'event planning'] },
      { name: 'Dance Floor Sizing', path: '/floor-occupancy-calc', desc: 'Square footage based on peak crowd density.', keywords: ['event planning', 'design', 'hosting'] },
      { name: 'Playlist Duration Gap', path: '/music-filler-math', desc: 'Calculate tracks needed to hit an event end-time.', keywords: ['audio', 'hosting', 'time'] },
      { name: 'Invitation Attrition', path: '/guest-dropoff-rate', desc: 'Invite vs actual attendance probability.', keywords: ['event planning', 'psychology', 'stat'] },
      { name: 'Venue Capacity: Seated', path: '/venue-elbow-room', desc: 'Aisle width and table density constraints.', keywords: ['design', 'event planning', 'safety'] },
      { name: 'Wedding Flower Count', path: '/bouquet-stem-math', desc: 'Budgeting stems for full-look arrangements.', keywords: ['art', 'event planning', 'flowers'] },
      { name: 'Tent Stake Tension', path: '/event-tent-wind-load', desc: 'Safety math for outdoor vinyl structures.', keywords: ['engineering', 'event planning', 'safety'] },
      { name: 'Gift Registry Progress', path: '/registry-completion-value', desc: 'Track average gift price vs remaining items.', keywords: ['lifestyle', 'finance', 'weddings'] },
      { name: 'Mailing Timeline', path: '/rsvp-reverse-timer', desc: 'When to mail based on target response date.', keywords: ['event planning', 'time', 'logistics'] },
    ]
  },
  {
    title: 'Automotive Performance & Tuning',
    slug: 'auto-tune',
    description: 'Go beyond the dashboard. Thermodynamics, gear logic, and maintenance math for enthusiasts.',
    defaultGuidance: {
      whyItMatters: "True automotive excellence requires moving beyond the dashboard to understand the underlying thermodynamics and mechanical logic. Precision tuning of torque, boost, and gear ratios maximizes performance while maintaining vehicle reliability.",
      pitfalls: [
        "Focusing on peak horsepower while ignoring the usable torque curve",
        "Underestimating the aerodynamic drag impact at high track speeds"
      ],
      proTip: "Use corner balance calculations to optimize chassis weight distribution, which significantly improves handling and tire wear."
    },
    items: [
      { name: 'Torque to Horsepower', path: '/hp-torque-converter', desc: 'Analyze engine output at specific RPM ranges.', keywords: ['automotive', 'physics', 'tech'] },
      { name: 'Compression Ratio', path: '/static-compression-math', desc: 'Cylinder volume vs deck height and gasket.', keywords: ["static compression","engine math","cylinder volume","stroke and bore","combustion chamber","compression ratio","engine building","automotive engineering","piston math","performance tuning"] },
      { name: 'Turbo Boost Efficiency', path: '/boost-pressure-adj', desc: 'Air density shift based on intercooler temp.', keywords: ['automotive', 'physics', 'tech'] },
      { name: 'Fuel Injector Duty', path: '/injector-sizing-pro', desc: 'Match flow rates to target horsepower.', keywords: ['automotive', 'tuning', 'tech'] },
      { name: 'Braking Distance: Pro', path: '/friction-stop-distance', desc: 'Impact of weight and speed on stopping power.', keywords: ['safety', 'automotive', 'physics'] },
      { name: 'Aerodynamic Drag', path: '/spoiler-downforce-drag', desc: 'Surface area impact at highway speeds.', keywords: ['automotive', 'science', 'tech'] },
      { name: 'Oil Life Multiplier', path: '/oil-interval-logic', desc: 'Adjust change times based on short trips vs highway.', keywords: ['automotive', 'maintenance', 'saving'] },
      { name: 'Gear Ratio: Top Speed', path: '/transmission-math-pro', desc: 'Project terminal velocity at redline.', keywords: ['automotive', 'tuning', 'racing'] },
      { name: 'Weight Distribution', path: '/corner-balance-calc', desc: 'Chassis balance for handling optimization.', keywords: ['automotive', 'racing', 'engineering'] },
      { name: '0-60 Time Simulator', path: '/accel-est', desc: 'Weight-to-power ratio estimates.', keywords: ['automotive', 'racing', 'tech'] },
    ]
  },
  {
    title: 'Home Gardening & Agriculture',
    slug: 'garden-agri',
    description: 'Grow your own future. Soil science, irrigation, and harvest planning for green thumbs.',
    defaultGuidance: {
      whyItMatters: "Cultivating a successful garden is a scientific endeavor that relies on precise soil chemistry and irrigation logic. Managing nutrient solutions, seed spacing, and light intervals allows you to maximize yields and create a thriving ecological sanctuary.",
      pitfalls: [
        "Over-watering based on a schedule instead of measuring actual soil moisture",
        "Ignoring the carbon-to-nitrogen ratio in compost, leading to slow decomposition"
      ],
      proTip: "Calculate your garden's Daily Light Integral (DLI) to ensure your plants are receiving the exact photoperiod they need for optimal growth."
    },
    items: [
      { name: 'Seed Spacing: Block', path: '/intensive-seed-math', desc: 'Maximize yields per square foot in raised beds.', keywords: ['gardening', 'nature', 'efficiency'] },
      { name: 'Compost C:N Ratio', path: '/compost-chemistry-mix', desc: 'Balance browns and greens for fast breakdown.', keywords: ['nature', 'science', 'ecology'] },
      { name: 'Hydroponic PPM Pro', path: '/nutrient-solution-mixer', desc: 'Concentration math for liquid fertilizers.', keywords: ['nature', 'tech', 'gardening'] },
      { name: 'Mulch Depth Volume', path: '/landscaping-bulk-yield', desc: 'Cubic yards needed for specific bed depths.', keywords: ['gardening', 'construction', 'diy'] },
      { name: 'Greenhouse Heat Loss', path: '/btu-growing-space', desc: 'Calculate heating needs for winter production.', keywords: ['nature', 'engineering', 'energy'] },
      { name: 'Frost Date Probability', path: '/planting-window-stats', desc: 'Statistical safety for tender seedlings.', keywords: ['nature', 'time', 'weather'] },
      { name: 'Soil pH Adjustment', path: '/lime-sulfur-dosage', desc: 'Amendments based on current vs target acidity.', keywords: ['nature', 'science', 'chemistry'] },
      { name: 'Irrigation Drip Rate', path: '/gph-watering-calc', desc: 'Match emitter output to plant water needs.', keywords: ['nature', 'tech', 'water'] },
      { name: 'Daily Light Integral', path: '/plant-dli', desc: 'Photoperiod vs PPFD for grow light timing.', keywords: ["cumulative light","greenhouse math","dli par","photosynthesis tracking","indoor growing","plant light needs","agricultural lighting","growth monitoring","horticulture science","lighting analytics"] },
      { name: 'Rain Barrel Yield', path: '/roof-runoff-gallons', desc: 'Capture potential from your roof surface area.', keywords: ['nature', 'sustainability', 'water'] },
    ]
  },
  {
    title: 'Audio & Music Production',
    slug: 'audio-pro',
    description: 'Sound engineering and composition tools. Acoustics, delays, and digital signal math.',
    defaultGuidance: {
      whyItMatters: "Professional sound engineering is built on the precise manipulation of frequencies and temporal relationships. Understanding delay sync, gain staging, and acoustic math allows you to create high-fidelity recordings that translate perfectly across all listening environments.",
      pitfalls: [
        "Allowing digital clipping due to poor gain staging",
        "Ignoring the room's resonant frequencies when positioning monitoring equipment"
      ],
      proTip: "Sync your reverb pre-delay and tail times to the track's BPM to create a sense of depth that feels rhythmically connected to the music."
    },
    items: [
      { name: 'BPM to Milliseconds', path: '/tempo-delay-sync', desc: 'Match echo and reverb tails to track speed.', keywords: ['audio', 'music', 'tech'] },
      { name: 'Note Frequency (Hz)', path: '/musical-pitch-hz', desc: 'Convert keyboard notes to exact frequencies.', keywords: ['music', 'science', 'audio'] },
      { name: 'Reverb Pre-Delay', path: '/room-depth-audio', desc: 'Simulate physical space with timing math.', keywords: ['audio', 'tech', 'music'] },
      { name: 'Speaker Phase Align', path: '/distance-ms-offset', desc: 'Align subwoofer and mains for maximum punch.', keywords: ['audio', 'physics', 'tech'] },
      { name: 'Headroom: Normalizer', path: '/digital-peak-headroom', desc: 'Safety margin for mastering and streaming.', keywords: ['audio', 'tech', 'logic'] },
      { name: 'Microphone Gain Stage', path: '/preamp-gain-logic', desc: 'Optimize SNR without floor noise or clipping.', keywords: ['audio', 'tech', 'engineering'] },
      { name: 'DAW Buffer Latency', path: '/sample-latency-calc', desc: 'Millisecond delay based on audio sample rate.', keywords: ['audio', 'tech', 'computer'] },
      { name: 'Audio Cable Loss', path: '/signal-decay-distance', desc: 'Voltage drop estimates for long analog runs.', keywords: ['audio', 'tech', 'physics'] },
      { name: 'Nyquist Limit Shield', path: '/aliasing-freq-limiter', desc: 'Safety math for digital anti-aliasing filters.', keywords: ['audio', 'tech', 'science'] },
      { name: 'Sample Storage Math', path: '/audio-wav-file-size', desc: 'Predict drive space for high-res recording.', keywords: ['audio', 'tech', 'logistics'] },
    ]
  },
  {
    title: 'Social Media & Content Strategy',
    slug: 'social-content',
    description: 'Growth algorithms and engagement logic. Data-driven tools for digital influence.',
    defaultGuidance: {
      whyItMatters: "Growth in the digital landscape is driven by engagement algorithms and data-driven content strategy. Analyzing retention gaps, CTR statistics, and posting cadences allows reached-based influence to scale efficiently.",
      pitfalls: [
        "Focusing on follower count while ignoring actual audience engagement rates",
        "Posting at generic times instead of analyzing your specific audience's peak activity"
      ],
      proTip: "Analyze viewer retention drop-off points to identify exactly where your content loses interest and adjust your script pacing accordingly."
    },
    items: [
      { name: 'Engagement Rate %', path: '/social-engagement-roi', desc: 'True audience value beyond follower count.', keywords: ['marketing', 'social', 'business'] },
      { name: 'Video Retention Gap', path: '/retention-dropoff-calc', desc: 'Analyze where viewers exit your content.', keywords: ['marketing', 'video', 'psychology'] },
      { name: 'CTR Optimization Pro', path: '/thumbnail-ctr-stats', desc: 'Click-through probability based on impressions.', keywords: ['marketing', 'tech', 'content'] },
      { name: 'Brand Partnership Fee', path: '/influencer-rate-logic', desc: 'Fair pricing based on reach and production.', keywords: ['business', 'marketing', 'finance'] },
      { name: 'Hashtag Reach Logic', path: '/tag-discovery-prob', desc: 'Estimated views from specific tag categories.', keywords: ['marketing', 'social', 'tech'] },
      { name: 'Script Word Duration', path: '/speech-to-minutes', desc: 'Project video length based on script volume.', keywords: ['video', 'writing', 'time'] },
      { name: 'Bio Link Conversion', path: '/linktree-click-rate', desc: 'Traffic flow from profile to destination.', keywords: ['marketing', 'tech', 'ux'] },
      { name: 'Demographics Shift', path: '/audience-growth-vec', desc: 'Project audience changes over 6-12 months.', keywords: ['marketing', 'social', 'stat'] },
      { name: 'Repurposing Multiplier', path: '/content-reuse-ratio', desc: 'Efficiency of cross-platform distribution.', keywords: ['marketing', 'productivity', 'content'] },
      { name: 'Posting Cadence ROI', path: '/social-burnout-limit', desc: 'Finding the peak between reach and exhaustion.', keywords: ['marketing', 'psychology', 'lifestyle'] },
    ]
  },
  {
    title: 'Hobbyist Crafts & DIY',
    slug: 'hobby-crafts',
    description: 'Material math for the maker movement. Precision tools for sewing, woodworking, and more.',
    defaultGuidance: {
      whyItMatters: "The maker movement relies on material math and technical precision to bring complex projects to life. Accurate calculations for yarn yardage, resin volume, and scale conversions ensure that your DIY endeavors are both successful and resource-efficient.",
      pitfalls: [
        "Underestimating the amount of resin needed for deep-pour art projects",
        "Failing to account for fabric shrinkage or seam allowances in complex sewing patterns"
      ],
      proTip: "When working with irregular hides in leathercraft, use a surface-area grid to calculate the true usable yield before cutting."
    },
    items: [
      { name: 'Yarn Yardage: Pro', path: '/knitting-yarn-usage', desc: 'Estimate skeins needed for specific garment sizes.', keywords: ['crafts', 'fashion', 'math'] },
      { name: 'Sewing Seam Waste', path: '/fabric-cut-allowance', desc: 'True material needs including overlap and bias.', keywords: ['crafts', 'sewing', 'diy'] },
      { name: 'Pottery Clay Shrink', path: '/ceramic-shrinkage-adj', desc: 'Wet-to-fire dimensional changes.', keywords: ['art', 'ceramics', 'science'] },
      { name: 'Wood Moisture Meter', path: '/timber-dry-time', desc: 'Estimate seasoning time based on species.', keywords: ['diy', 'woodworking', 'nature'] },
      { name: 'Epoxy Resin Volume', path: '/resin-pour-calc', desc: 'Cubic volume for tables and art casting.', keywords: ['art', 'diy', 'crafts'] },
      { name: 'Cross-Stitch Count', path: '/fabric-grid-sizing', desc: 'Aida count vs final design dimensions.', keywords: ['crafts', 'design', 'diy'] },
      { name: 'Model Scale Pro', path: '/diecast-scale-math', desc: 'Convert between 1:1, 1:24, 1:48 and 1:64.', keywords: ['hobbies', 'toys', 'math'] },
      { name: '3D Print Filament', path: '/pla-usage-meter', desc: 'Meters of filament based on gram weight.', keywords: ['tech', '3d printing', 'diy'] },
      { name: 'Soldering Heat Time', path: '/soldering-thermal-sink', desc: 'Dwell time based on wire gauge and tip temp.', keywords: ['tech', 'electronics', 'diy'] },
      { name: 'Leather Hide Yield', path: '/leathercraft-surface-math', desc: 'Calculating usable area from irregular hides.', keywords: ['crafts', 'fashion', 'diy'] },
    ]
  },
  {
    title: 'Aviation & Pilot Mathematics',
    slug: 'aviation',
    description: 'Sky-high precision. Airspeed, lift, and fuel logistics for general and commercial aviation.',
    defaultGuidance: {
      whyItMatters: "Precision in aviation is not just a matter of performance, but of fundamental safety. Accurate calculation of true airspeed, density altitude, and weight balance is critical for navigating the skies and ensuring every flight reaches its destination safely.",
      pitfalls: [
        "Failing to adjust for the impact of humidity on density altitude",
        "Miscalculating the crosswind component relative to the specific runway heading"
      ],
      proTip: "Monitor your CG envelope proactively; even small shifts in weight distribution can significantly impact stall speeds and turn radius."
    },
    items: [
      { name: 'True Airspeed (TAS)', path: '/tas', desc: 'Correct IAS for pressure altitude and temp.', keywords: ['aviation', 'physics', 'travel'] },
      { name: 'Density Altitude', path: '/density-alt-math', desc: 'Impact of humidity and temp on aircraft lift.', keywords: ['aviation', 'weather', 'safety'] },
      { name: 'Crosswind Component', path: '/runway-wind-vector', desc: 'Calculate headwind vs crosswind for safe landing.', keywords: ['aviation', 'safety', 'math'] },
      { name: 'Fuel Burn to Destination', path: '/flight-fuel-flow', desc: 'Weight-based fuel consumption projection.', keywords: ['aviation', 'logistics', 'saving'] },
      { name: 'Descent Rate (FPM)', path: '/glideslope-math', desc: 'Calculate vertical speed for a stabilized approach.', keywords: ['aviation', 'tech', 'safety'] },
      { name: 'Weight & Balance Pro', path: '/cg-envelope-calc', desc: 'Verify Center of Gravity is within safety limits.', keywords: ['aviation', 'engineering', 'safety'] },
      { name: 'Stall Speed Multiplier', path: '/bank-angle-stall', desc: 'How G-load impacts stall speed during turns.', keywords: ['aviation', 'physics', 'safety'] },
      { name: 'Propeller Tip Speed', path: '/prop-tip-mach', desc: 'Supersonic threshold math for prop efficiency.', keywords: ['aviation', 'engineering', 'science'] },
      { name: 'Turn Radius: Standard', path: '/aviation-turn-radius', desc: 'Ground track radius based on bank and speed.', keywords: ['aviation', 'math', 'navigation'] },
      { name: 'Pressure Altitude', path: '/baro-alt-correction', desc: 'Altimeter setting vs standard datum plane.', keywords: ['aviation', 'weather', 'tech'] },
    ]
  },
  {
    title: 'Space Exploration & Astronomy',
    slug: 'space-tech',
    description: 'Cosmic scale calculations. Orbital mechanics, light travel, and planetary physics.',
    defaultGuidance: {
      whyItMatters: "The mathematics of the cosmos bridges the gap between theoretical physics and real-world exploration. Calculating orbital velocity, escape velocity, and light travel time allows us to project our presence into the universe and understand the physics of distant stars.",
      pitfalls: [
        "Using Earth-centric gravity constants when calculating trajectories for other planetary bodies",
        "Ignoring the time-delay impact of light speed when planning interstellar communications"
      ],
      proTip: "Use the Schwarzschild radius as a baseline to understand the event horizons of various masses, which is essential for astrophysics modeling."
    },
    items: [
      { name: 'Orbital Velocity', path: '/orbital-speed-math', desc: 'Speed required to maintain orbit at specific altitudes.', keywords: ['space', 'physics', 'science'] },
      { name: 'Light Travel Time', path: '/interstellar-ping', desc: 'Communication delay based on light-year distance.', keywords: ['space', 'science', 'tech'] },
      { name: 'Escape Velocity', path: '/planetary-escape-math', desc: 'Thrust needed to break free from gravity wells.', keywords: ['space', 'physics', 'engineering'] },
      { name: 'Schwarzschild Radius', path: '/black-hole-event-horizon', desc: 'The point of no return for specific masses.', keywords: ['science', 'physics', 'space'] },
      { name: 'Planet Weight (G-Force)', path: '/comparative-gravity', desc: 'Your weight on Mars, Jupiter, or the Moon.', keywords: ['space', 'science', 'travel'] },
      { name: 'Telescope Resolving Power', path: '/optical-limit-calc', desc: 'Angular resolution based on aperture size.', keywords: ['space', 'optics', 'hobby'] },
      { name: 'Parallax Distance', path: '/stellar-parallax-math', desc: 'Calculate star distance using orbital shift.', keywords: ['science', 'astronomy', 'math'] },
      { name: 'Rocket ∆v (Delta-V)', path: '/rocket-equation-pro', desc: 'Efficiency math for multi-stage rocket burn.', keywords: ['space', 'engineering', 'physics'] },
      { name: 'Drake Equation Tool', path: '/alien-life-probability', desc: 'Statistical estimates for galactic civilizations.', keywords: ['science', 'sociology', 'space'] },
      { name: 'Goldilocks Zone Radius', path: '/habitable-zone-calc', desc: 'Safe distance from stars for liquid water.', keywords: ['science', 'astronomy', 'space'] },
    ]
  },
  {
    title: 'Renewable Energy & Solar',
    slug: 'solar-energy',
    description: 'Power from the sun. Efficiency, storage, and ROI for sustainable energy systems.',
    defaultGuidance: {
      whyItMatters: "Maximizing the efficiency of sustainable energy systems requires precise calculations of yield, storage, and ROI. Optimizing panel tilt and understanding dc-ac conversion losses ensures that your transition to green power is both economically and ecologically viable.",
      pitfalls: [
        "Sizing a battery bank without accounting for the required amp-hour buffer for off-grid duration",
        "Ignoring the impact of seasonal shading on total annual kWh generation."
      ],
      proTip: "Optimize your solar panel tilt based on your specific latitude to maximize annual sun exposure rather than just focusing on peak summer output."
    },
    items: [
      { name: 'Solar Panel Yield', path: '/pv-output-est', desc: 'Estimated kWh generation based on square footage.', keywords: ['energy', 'home', 'green'] },
      { name: 'Battery Bank Sizing', path: '/off-grid-storage-calc', desc: 'Amp-hours needed for specific backup duration.', keywords: ['energy', 'tech', 'diy'] },
      { name: 'Payback Period: Solar', path: '/solar-roi-timer', desc: 'Years until energy savings cover installation.', keywords: ['finance', 'saving', 'green'] },
      { name: 'Angle of Incidence', path: '/panel-tilt-optimization', desc: 'Maximize sun exposure based on latitude.', keywords: ['energy', 'science', 'tech'] },
      { name: 'Inverter Efficiency', path: '/dc-ac-loss-math', desc: 'Calculate energy drop during conversion steps.', keywords: ['energy', 'engineering', 'saving'] },
      { name: 'Wind Turbine Output', path: '/wind-power-yield', desc: 'Potential energy based on blade diameter and wind.', keywords: ['energy', 'science', 'green'] },
      { name: 'Charge Controller Load', path: '/mppt-sizing-logic', desc: 'Verify amp rating vs solar array peak output.', keywords: ['energy', 'tech', 'diy'] },
      { name: 'Ground Loop HVAC', path: '/geothermal-heat-pump-eff', desc: 'Thermal exchange efficiency for liquid loops.', keywords: ['energy', 'home', 'engineering'] },
      { name: 'Hydroelectric Micro-Flow', path: '/micro-hydro-btu', desc: 'Potential energy from small stream head/flow.', keywords: ['energy', 'nature', 'green'] },
      { name: 'Carbon Credits Earned', path: '/carbon-offset-value', desc: 'Value of renewable generation in carbon markets.', keywords: ['finance', 'green', 'environment'] },
    ]
  },
  {
    title: 'Data Science & Machine Learning',
    slug: 'data-science',
    description: 'Statistical significance and model performance. Tools for the modern data analyst.',
    defaultGuidance: {
      whyItMatters: "The integrity of machine learning models is built on rigorous statistical significance and performance analysis. Calculating precision, recall, and F1 scores ensures that your models provide accurate insights and balance correctly between different types of error.",
      pitfalls: [
        "Focusing solely on accuracy in imbalanced datasets without checking precision and recall",
        "Ignoring the 'log-loss' penalty for confident but incorrect predictions."
      ],
      proTip: "Use A/B testing with chi-square significance to verify if a conversion lift is statistically real before scaling any new algorithm."
    },
    items: [
      { name: 'Precision & Recall', path: '/ml-performance-matrix', desc: 'Evaluate classification model accuracy.', keywords: ['data', 'tech', 'stat'] },
      { name: 'F1 Score Calculator', path: '/ml-f1-balance', desc: 'Harmonic mean of precision and recall.', keywords: ['data', 'tech', 'logic'] },
      { name: 'Shannon Entropy', path: '/information-theory-entropy', desc: 'Unpredictability level in a dataset.', keywords: ['data', 'science', 'math'] },
      { name: 'Silhouette Score', path: '/clustering-consistency-calc', desc: 'Validation of k-means or DBSCAN separation.', keywords: ['data', 'tech', 'stat'] },
      { name: 'A/B Test Significance', path: '/chi-square-probability', desc: 'Is your conversion lift statistically real?', keywords: ['marketing', 'data', 'stat'] },
      { name: 'Z-Score Normalization', path: '/dataset-standardizer', desc: 'Scale variables to a standard normal distribution.', keywords: ['data', 'stat', 'math'] },
      { name: 'Correlation Coefficient', path: '/pearson-r-strength', desc: 'Measure linear relationship between variables.', keywords: ['data', 'science', 'math'] },
      { name: 'Log-Loss Multiplier', path: '/ml-cross-entropy', desc: 'Penalty math for confident incorrect predictions.', keywords: ['data', 'tech', 'logic'] },
      { name: 'Eigenvalue Solver: 2x2', path: '/pca-math-matrix', desc: 'Linear transformation scale factors.', keywords: ['math', 'data', 'science'] },
      { name: 'Gradient Descent Step', path: '/learning-rate-optimizer', desc: 'Weights adjustment based on error derivative.', keywords: ['data', 'tech', 'math'] },
    ]
  },
  {
    title: 'Web Development & UI/UX',
    slug: 'web-dev',
    description: 'Optimizing the digital experience. Layout math, performance, and accessibility tools.',
    defaultGuidance: {
      whyItMatters: "Optimizing the digital experience is a blend of layout math, performance auditing, and accessibility compliance. Precise calculations for fluid typography, contrast ratios, and container aspect ratios ensure a seamless and inclusive user interface across all devices.",
      pitfalls: [
        "Failing to account for the true pixel width of fr units after CSS grid gaps are applied",
        "Ignoring WCAG contrast ratios, which can make text unreadable for a significant portion of users."
      ],
      proTip: "Use CSS clamp() for fluid typography to ensure that your font scaling remains harmonious and readable on ultra-wide monitors and small mobile screens alike."
    },
    items: [
      { name: 'Fluid Typography', path: '/clamp-font-math', desc: 'CSS clamp() values for responsive font scaling.', keywords: ['web', 'design', 'ux'] },
      { name: 'Flexbox Basis Offset', path: '/flex-grow-shrink-calc', desc: 'Calculate true width after flex expansion.', keywords: ['web', 'tech', 'design'] },
      { name: 'Color Contrast (WCAG)', path: '/accessibility-ratio-check', desc: 'Verify text readability vs background color.', keywords: ['web', 'design', 'ux'] },
      { name: 'Aspect Ratio Box', path: '/container-aspect-padding', desc: 'Old-school padding-top hack for video boxes.', keywords: ['web', 'design', 'tech'] },
      { name: 'SVG Viewbox Logic', path: '/svg-translate-scale', desc: 'Coordinate mapping for vector alignment.', keywords: ['web', 'design', 'art'] },
      { name: 'Grid Gap Net Width', path: '/css-grid-fr-math', desc: 'Actual pixel width of fr units after gaps.', keywords: ['web', 'design', 'tech'] },
      { name: 'Golden Ratio Layout', path: '/layout-phi-proportions', desc: 'Divide containers using perfect proportions.', keywords: ['design', 'art', 'web'] },
      { name: 'Critical Path Depth', path: '/dom-complexity-score', desc: 'Estimate render lag from node depth.', keywords: ['web', 'tech', 'performance'] },
      { name: 'Sitemap Priority Map', path: '/seo-xml-weighting', desc: 'Distribute crawl budget across link tiers.', keywords: ['marketing', 'web', 'seo'] },
      { name: 'User Persona Split', path: '/segment-conversion-weight', desc: 'Allocate resources based on user value.', keywords: ['ux', 'marketing', 'data'] },
    ]
  },
  {
    title: 'Cybersecurity & Encryption',
    slug: 'cyber-sec',
    description: 'Hardening the digital perimeter. Hashing, entropy, and risk assessment math.',
    defaultGuidance: {
      whyItMatters: "Hardening the digital perimeter is a matter of mathematical entropy and risk assessment. Calculating password strength, bcrypt work factors, and CVSS scores provides the data needed to protect sensitive information and defend against evolving cyber threats.",
      pitfalls: [
        "Underestimating the time a brute-force attack takes for passwords with low character entropy",
        "Ignoring the network latency impact of intensive SSL handshakes"
      ],
      proTip: "Increase your Bcrypt rounds cost as hardware processing power evolves to maintain a consistent defense against offline hashing attacks."
    },
    items: [
      { name: 'Password Entropy (Bits)', path: '/password-brute-force-timer', desc: 'Time to crack based on char-set and length.', keywords: ['security', 'tech', 'math'] },
      { name: 'Bcrypt Rounds Cost', path: '/hashing-work-factor', desc: 'Iterative delay based on salt rounds.', keywords: ['security', 'tech', 'server'] },
      { name: 'SSL Handshake Latency', path: '/tls-ping-overhead', desc: 'Network delay impact of cert verification.', keywords: ['security', 'tech', 'performance'] },
      { name: 'IP Subnetter Pro', path: '/vlsm-supernet-math', desc: 'Maximize host counts in fragmented networks.', keywords: ['security', 'tech', 'networking'] },
      { name: 'JWT Payload Entropy', path: '/token-leakage-prob', desc: 'Risk assessment of sensitive data in claims.', keywords: ['security', 'tech', 'web'] },
      { name: 'RSA Bit Length RSA', path: '/asymmetric-key-strength', desc: 'Security level 2048 vs 4096 vs ECC.', keywords: ['security', 'tech', 'math'] },
      { name: 'Firewall Throughput', path: '/packet-inspection-lag', desc: 'Capacity drop-off with Deep Packet Inspection.', keywords: ['security', 'tech', 'performance'] },
      { name: 'DDoS Traffic Scale', path: '/attack-vector-bandwidth', desc: 'Requests per second vs server capacity.', keywords: ['security', 'tech', 'safety'] },
      { name: 'CVE Risk Score (CVSS)', path: '/vuln-severity-calc', desc: 'Calculate 0.0-10.0 score based on impact.', keywords: ['security', 'tech', 'business'] },
      { name: 'Honey-Pot Capture Rate', path: '/threat-intel-yield', desc: 'Statistical probability of attacker detection.', keywords: ['security', 'tech', 'data'] },
    ]
  },
  {
    title: 'Geology & Mineral Mining',
    slug: 'geology',
    description: 'Earth science and resource extraction. Seismic wave and mineral density tools.',
    defaultGuidance: {
      whyItMatters: "Earth science and resource extraction rely on precise calculations of mineral density, seismic velocity, and soil porosity. Understanding these variables allows for the efficient identification of geological samples and the safe assessment of ground stability.",
      pitfalls: [
        "Misidentifying minerals by relying on visual properties instead of specific gravity (SG) measurements",
        "Underestimating slope shear strength, which can lead to hazardous landslide risks"
      ],
      proTip: "Use seismic wave velocity data to accurately model subsurface rock densities before initiating any significant geotechnical project."
    },
    items: [
      { name: 'Mineral Density (SG)', path: '/specific-gravity-mineral', desc: 'Identify samples via displacement weight.', keywords: ['science', 'nature', 'math'] },
      { name: 'Seismic Wave Velocity', path: '/p-wave-velocity-calc', desc: 'Speed through different rock densities.', keywords: ['science', 'nature', 'physics'] },
      { name: 'Soil Porosity Ratio', path: '/earth-void-fraction', desc: 'Sponge-like capacity for water storage.', keywords: ['science', 'nature', 'engineering'] },
      { name: 'Ore Value per Tonne', path: '/mining-grade-revenue', desc: 'Market value based on ppm/percent yield.', keywords: ['business', 'science', 'mining'] },
      { name: 'Stalactite Drip Rate', path: '/speleothem-growth-timer', desc: 'Millimeters per century projection.', keywords: ['science', 'nature', 'time'] },
      { name: 'Magma Cooling Rate', path: '/thermal-igneous-timer', desc: 'Crystal size prediction based on volume.', keywords: ['science', 'nature', 'physics'] },
      { name: 'Mohs Scale Hardness', path: '/scratch-test-logic', desc: 'Identify mineral durability relationships.', keywords: ['science', 'nature', 'education'] },
      { name: 'Landslide Friction', path: '/slope-shear-strength', desc: 'Safety factor for hillsides and grading.', keywords: ['safety', 'engineering', 'nature'] },
      { name: 'River Meander Ratio', path: '/fluvial-sinuosity-calc', desc: 'Path length vs straight-line distance.', keywords: ['nature', 'science', 'math'] },
      { name: 'Fault Slip Rate', path: '/tectonic-movement-mm', desc: 'Accumulated stress based on plate velocity.', keywords: ['science', 'nature', 'safety'] },
    ]
  },
  {
    title: 'Meteorology & Climate Science',
    slug: 'weather-pro',
    description: 'Atmospheric thermodynamics and forecasting. Wind chill, pressure, and storm math.',
    defaultGuidance: {
      whyItMatters: "Atmospheric thermodynamics and forecasting provide the foundation for understanding our weather and climate. Precise calculations of dew points, wind chill, and storm distances are critical for public safety and logistical planning in the face of nature's variability.",
      pitfalls: [
        "Relying on ambient temperature alone without considering the heat index's apparent impact",
        "Misestimating storm distance by ignoring the temporal gap between lightning and thunder"
      ],
      proTip: "Use the barometric trend to predict incoming weather fronts; a sudden drop in pressure is a high-probability indicator of an approaching storm."
    },
    items: [
      { name: 'Dew Point (Magnus)', path: '/dew-point-precision', desc: 'The exact temp where condensation begins.', keywords: ['weather', 'science', 'nature'] },
      { name: 'Wind Chill Index', path: '/perceived-cold-math', desc: 'Human heat loss based on air movement.', keywords: ['weather', 'safety', 'lifestyle'] },
      { name: 'Heat Index (Apparent)', path: '/humidity-heat-risk', desc: 'Why 90°F feels like 105°F with humidity.', keywords: ['weather', 'safety', 'lifestyle'] },
      { name: 'Barometric Trend', path: '/pressure-weather-predict', desc: 'Probability of rain based on pressure drop.', keywords: ['weather', 'science', 'nature'] },
      { name: 'Storm Distance Timer', path: '/thunder-lightning-gap', desc: 'Seconds between flash and sound to miles.', keywords: ['weather', 'safety', 'education'] },
      { name: 'Lifted Index (LI)', path: '/thunderstorm-stability', desc: 'Atmospheric buoyancy vs storm potential.', keywords: ['weather', 'science', 'safety'] },
      { name: 'Snow-to-Liquid Ratio', path: '/snowfall-volume-water', desc: 'Dry powder vs wet slush water content.', keywords: ['weather', 'nature', 'science'] },
      { name: 'Coriolis Force Calc', path: '/atmospheric-spin-physics', desc: 'Wind deflection based on earth rotation.', keywords: ['weather', 'science', 'physics'] },
      { name: 'UV Index Exposure', path: '/sunburn-risk-timer', desc: 'Skin safety based on cloud cover and index.', keywords: ['weather', 'safety', 'health'] },
      { name: 'Glacier Melt Velocity', path: '/climate-ice-mass-loss', desc: 'Sea level rise contributions per year.', keywords: ['weather', 'environment', 'science'] },
    ]
  },
  {
    title: 'Retail & E-commerce Strategy',
    slug: 'retail-pro',
    description: 'Profitability and inventory logic. Data-driven tools for high-volume sales.',
    defaultGuidance: {
      whyItMatters: "Sustaining a profitable retail operation requires a data-driven approach to margin management and inventory velocity. Calculating markup, break-even points, and customer lifetime value allows for optimized sales strategies and efficient resource allocation.",
      pitfalls: [
        "Failing to account for inventory shrinkage when calculating net annual revenue",
        "Focusing on customer acquisition cost (CAC) without considering its ratio to long-term lifetime value (LTV)"
      ],
      proTip: "Analyze your floor space yield periodically to identify high-performing categories and optimize your physical or digital layout for maximum revenue."
    },
    items: [
      { name: 'Gross Margin (Markup)', path: '/retail-profit-markup', desc: 'Target sell price based on cost/margin goals.', keywords: ['business', 'finance', 'retail'] },
      { name: 'Inventory Turnover', path: '/shelf-velocity-math', desc: 'Frequency of restock vs annual sales.', keywords: ['business', 'logistics', 'saving'] },
      { name: 'Break-Even Unit Sales', path: '/fixed-cost-recovery', desc: 'How many sales to cover initial overhead.', keywords: ['business', 'finance', 'math'] },
      { name: 'Customer Lifetime Value', path: '/clv-retention-roi', desc: 'Projected net profit from a single customer.', keywords: ['business', 'marketing', 'data'] },
      { name: 'CAC to LTV Ratio', path: '/growth-efficiency-math', desc: 'Health of your marketing spend efficiency.', keywords: ['business', 'marketing', 'finance'] },
      { name: 'Shrinkage Percentage', path: '/loss-prevention-math', desc: 'Inventory gap after sales and waste.', keywords: ['business', 'retail', 'saving'] },
      { name: 'Average Order Value', path: '/basket-size-stats', desc: 'Revenue per transaction optimizations.', keywords: ['business', 'retail', 'data'] },
      { name: 'Discount Stacking ROI', path: '/promo-margin-safety', desc: 'Profit remaining after overlapping coupons.', keywords: ['business', 'saving', 'retail'] },
      { name: 'Floor Space Yield', path: '/revenue-per-sqft', desc: 'Physical store efficiency for layout design.', keywords: ['retail', 'design', 'business'] },
      { name: 'Abandoned Cart Value', path: '/lost-revenue-recovery', desc: 'Potential gain from email follow-up tasks.', keywords: ['marketing', 'retail', 'tech'] },
    ]
  },
  {
    title: 'Precision Manufacturing & CNC',
    slug: 'manufacturing',
    description: 'Robotic accuracy and tool paths. Feeds, speeds, and tolerance math for the shop.',
    defaultGuidance: {
      whyItMatters: "Modern manufacturing relies on robotic accuracy and precise tool path calculations. Managing feeds, speeds, and tolerances with mathematical rigor ensures that components are produced with high efficiency and meet the most demanding industrial standards.",
      pitfalls: [
        "Ignoring material-specific springback when setting metal brake angles",
        "Using incorrect thread pitch limits, which can compromise the structural integrity of precision assemblies"
      ],
      proTip: "Optimize your Overall Equipment Effectiveness (OEE) score by tracking machine uptime and identifying the root causes of production bottlenecks."
    },
    items: [
      { name: 'Speeds and Feeds CNC', path: '/sfm-ipt-cutting', desc: 'RPM and feed rate based on tool diameter.', keywords: ['manufacturing', 'tech', 'engineering'] },
      { name: 'Bolt Hole Circle', path: '/flange-drill-coords', desc: 'X/Y offsets for circular hole patterns.', keywords: ['manufacturing', 'math', 'diy'] },
      { name: 'Taper Angle Math', path: '/lathe-taper-offset', desc: 'Degree of cut for tapered shafts/parts.', keywords: ['manufacturing', 'engineering', 'math'] },
      { name: 'Material Removal (MRR)', path: '/metal-cutting-efficiency', desc: 'Cubic inches per minute of metal removal.', keywords: ['manufacturing', 'physics', 'tech'] },
      { name: 'Thread Pitch Limit', path: '/tap-drill-sizing', desc: 'Find the right drill bit for any screw size.', keywords: ['manufacturing', 'diy', 'engineering'] },
      { name: 'Tolerance Stack-up', path: '/assembly-fit-safety', desc: 'Cumulative error risk across multiple parts.', keywords: ['manufacturing', 'safety', 'engineering'] },
      { name: 'G-Code Arc Center', path: '/cnc-radius-geometry', desc: 'I/J coordinates for perfect circular cuts.', keywords: ['manufacturing', 'tech', 'logic'] },
      { name: 'Production OEE Score', path: '/machine-uptime-math', desc: 'Overall Equipment Effectiveness (0-100%).', keywords: ['manufacturing', 'business', 'tech'] },
      { name: 'Springback Overbend', path: '/metal-brake-angle', desc: 'Bending compensation based on material type.', keywords: ['manufacturing', 'engineering', 'physics'] },
      { name: 'Die Clearance Ratio', path: '/stamping-punch-safety', desc: 'Optimal gap for clean sheet-metal cuts.', keywords: ['manufacturing', 'engineering', 'safety'] },
    ]
  },
  {
    title: 'Oceanography & Marine Science',
    slug: 'marine-science',
    description: 'Deep sea data and vessel physics. Buoyancy, tides, and underwater acoustics.',
    defaultGuidance: {
      whyItMatters: "The study of our oceans requires a rigorous application of physics and chemistry to understand vessel hull speeds, water pressure, and tidal harmonics. These tools provide the necessary data to navigate the deep sea safely and manage marine resources sustainably.",
      pitfalls: [
        "Ignoring the impact of salinity and pressure when calculating the speed of sound in water",
        "Failing to account for the scope swing radius when anchoring in high-wind marine environments"
      ],
      proTip: "Use harmonic tide predictions to estimate water levels accurately; simple lunar-cycle averages can lead to significant errors in shallow coastal navigation."
    },
    items: [
      { name: 'Water Pressure at Depth', path: '/atmosphere-underwater', desc: 'Calculate PSI for every 10 meters of descent.', keywords: ['science', 'physics', 'nature'] },
      { name: 'Speed of Sound: Water', path: '/sonar-travel-math', desc: 'Adjusted for salinity, temp, and pressure.', keywords: ['science', 'tech', 'physics'] },
      { name: 'Vessel Hull Speed', path: '/knot-velocity-limit', desc: 'Maximum efficient speed for displacement hulls.', keywords: ['travel', 'physics', 'marine'] },
      { name: 'Tidal Height Predictor', path: '/harmonic-tide-math', desc: 'Estimated water level based on lunar-cycle.', keywords: ['nature', 'weather', 'travel'] },
      { name: 'Salinity (PPT) Mix', path: '/seawater-brine-mixer', desc: 'Convert conductivity to parts-per-thousand.', keywords: ['science', 'nature', 'math'] },
      { name: 'Anchor Rode Length', path: '/scope-swing-radius', desc: 'Chain/Line needed for safe holding in wind.', keywords: ['travel', 'safety', 'marine'] },
      { name: 'Plankton Density Count', path: '/clark-biomass-sample', desc: 'Extrapolate totals from small volume slides.', keywords: ['science', 'nature', 'ecology'] },
      { name: 'Ocean Surface Albedo', path: '/thermal-reflectivity', desc: 'Energy absorption based on sun angle.', keywords: ['science', 'weather', 'environment'] },
      { name: 'Wave Energy Density', path: '/joule-output-swell', desc: 'Potential power from wave height/period.', keywords: ['green', 'physics', 'nature'] },
      { name: 'Corrosion Rate (Mils)', path: '/anode-lifespan-marine', desc: 'Sacrificial zinc depletion in saltwater.', keywords: ['maintenance', 'marine', 'science'] },
    ]
  },
  {
    title: 'Microscopy & Optics',
    slug: 'optics',
    description: 'Precision lenses and microscopic detail. Refraction, magnification, and diffraction math.',
    defaultGuidance: {
      whyItMatters: "Precision in optics is essential for revealing the microscopic details of our world and achieving peak performance from lens-based systems. Understanding numerical aperture, diffraction limits, and light bending ensures clarity and accuracy in both scientific and creative applications.",
      pitfalls: [
        "Exceeding the theoretical resolution cap (diffraction limit) of a lens, leading to blurry microscopic images",
        "Miscalculating the focal length shift when working with convex mirrors"
      ],
      proTip: "When focus-stacking at high magnification, calculate your depth of field (DoF) to ensure each transition is sharp and artifacts are minimized."
    },
    items: [
      { name: 'Numerical Aperture', path: '/lens-light-gathering', desc: 'Objective lens performance vs light cone.', keywords: ['science', 'optics', 'tech'] },
      { name: 'Depth of Field Micro', path: '/focus-stack-math', desc: 'Sharp thickness at high magnification.', keywords: ['science', 'optics', 'art'] },
      { name: 'Refractive Index', path: '/snells-law-solver', desc: 'Light bending angle between different media.', keywords: ['science', 'physics', 'optics'] },
      { name: 'Diffraction Limit', path: '/airy-disk-radius', desc: 'The theoretical resolution cap of any lens.', keywords: ['science', 'optics', 'physics'] },
      { name: 'Magnification Scaling', path: '/digital-zoom-pixels', desc: 'Optical vs digital final image resolution.', keywords: ['tech', 'art', 'optics'] },
      { name: 'Laser Beam Divergence', path: '/photonic-spread-dist', desc: 'Spot size expansion over long distances.', keywords: ['tech', 'physics', 'optics'] },
      { name: 'Focal Length Shift', path: '/convex-mirror-math', desc: 'Object distance vs image size projection.', keywords: ['optics', 'physics', 'math'] },
      { name: 'Binocular FOV Shift', path: '/landscape-view-arc', desc: 'Degrees of view vs linear feet at 1000yds.', keywords: ['hobby', 'travel', 'optics'] },
      { name: 'Prism Color Split', path: '/chromatic-dispersion', desc: 'Wavelength separation across glass types.', keywords: ['science', 'optics', 'art'] },
      { name: 'Lens Diopter Power', path: '/eye-correction-strength', desc: 'Focal length to corrective strength math.', keywords: ['health', 'optics', 'math'] },
    ]
  },
  {
    title: 'Pharmacology & Lab Safety',
    slug: 'pharmacy',
    description: 'Medical dosing and solution chemistry. Critical accuracy for laboratory and healthcare.',
    defaultGuidance: {
      whyItMatters: "Critical accuracy in medical dosing and laboratory chemistry is paramount for healthcare safety and scientific integrity. These tools help you calculate dosage by weight, infusion rates, and elimination half-lives with the precision required for clinical environments.",
      pitfalls: [
        "Failing to adjust pediatric doses based on age and developmental factors",
        "Ignoring the potency decay of medications past their listed expiration datum"
      ],
      proTip: "Always use the C1V1 = C2V2 dilution formula to ensure stock solutions are mixed with high precision for sensitive laboratory assays."
    },
    items: [
      { name: 'Dosage by Weight', path: '/mg-kg-bodyweight', desc: 'Standard clinical dose calculation.', keywords: ['health', 'math', 'safety'] },
      { name: 'Infusion Drip Rate', path: '/iv-gt-minute', desc: 'Gtt/min based on bag size and target duration.', keywords: ['health', 'nursing', 'safety'] },
      { name: 'Pediatric Dose Adj', path: '/age-based-medical-dose', desc: 'Adjustment factors for infants and children.', keywords: ['health', 'safety', 'pharmacy'] },
      { name: 'Half-Life Elimination', path: '/plasma-decay-timer', desc: 'Drug concentration over time in the body.', keywords: ['health', 'science', 'pharmacy'] },
      { name: 'Solution Dilution Lab', path: '/c1v1-c2v2-mixer', desc: 'Stock solution math for precision labs.', keywords: ['science', 'chemistry', 'safety'] },
      { name: 'Blood Level Titration', path: '/steady-state-loading', desc: 'Dose needed to reach therapeutic windows.', keywords: ['health', 'science', 'math'] },
      { name: 'Insulin to Carb Ratio', path: '/diabetes-unit-math', desc: 'Units needed based on meal carbohydrate count.', keywords: ['health', 'safety', 'life'] },
      { name: 'Clearance Rate (CrCl)', path: '/kidney-filtration-math', desc: 'Drug clearance based on serum creatinine.', keywords: ['health', 'science', 'clinical'] },
      { name: 'Allergy Threshold %', path: '/reagent-purity-check', desc: 'Sensitivity of chemical assays in volume.', keywords: ['science', 'safety', 'health'] },
      { name: 'Expired Life Buffer', path: '/potency-decay-math', desc: 'Estimated loss of efficacy past datum.', keywords: ['health', 'safety', 'pharmacy'] },
    ]
  },
  {
    title: 'Toxicology & Forensic Science',
    slug: 'forensics',
    description: 'Investigative math. Post-mortem timing, chemical traces, and impact trajectory.',
    defaultGuidance: {
      whyItMatters: "Investigative math provides the objective evidence needed to solve complex forensic puzzles. Calculating trajectory offsets, time of death via algor mortis, and blood spatter origin allows for the rigorous reconstruction of events based on physical traces.",
      pitfalls: [
        "Relying on ambient temperature alone to estimate time of death without considering cooling body thermodynamics",
        "Misinterpreting blood spatter origin by ignoring surface tension and impact velocity"
      ],
      proTip: "Use DNA marker probability to calculate the likelihood of a random match; understanding the statistical ratios is key to presenting forensic evidence accurately."
    },
    items: [
      { name: 'Time of Death (Algor)', path: '/cooling-t-post-mortem', desc: 'Body temp drop vs ambient environment.', keywords: ['forensics', 'science', 'safety'] },
      { name: 'Blood Spatter Angle', path: '/impact-velocity-origin', desc: 'Calculate point of origin from elliptical drops.', keywords: ['forensics', 'math', 'physics'] },
      { name: 'Bullet Drop Distance', path: '/trajectory-offset-math', desc: 'Elevation adjustments for long-range traces.', keywords: ['forensics', 'physics', 'safety'] },
      { name: 'Trace Solubility', path: '/chemical-residue-ppq', desc: 'Parts-per-quadrillion detection limits.', keywords: ['science', 'chemistry', 'forensics'] },
      { name: 'Skull Volume (Est)', path: '/anthropometry-vol', desc: 'Calculate capacity from metric measurements.', keywords: ['science', 'archaeology', 'math'] },
      { name: 'DNA Marker Probability', path: '/match-likelihood-ratio', desc: 'Chance of random match in population groups.', keywords: ['forensics', 'stat', 'tech'] },
      { name: 'Bite Mark Expansion', path: '/dental-distortion-math', desc: 'Accounting for skin elasticity in forensics.', keywords: ['science', 'forensics', 'art'] },
      { name: 'Ink Ageing (Chroma)', path: '/solvent-dry-time-logic', desc: 'Analyze document maturity via chemical drift.', keywords: ['security', 'forensics', 'history'] },
      { name: 'Glass Fracture Vector', path: '/shatter-point-physics', desc: 'Direction of force based on radial cracks.', keywords: ['forensics', 'physics', 'safety'] },
      { name: 'Gait Speed Analyzer', path: '/stride-height-est', desc: 'Estimate suspect height from footprint gap.', keywords: ['forensics', 'math', 'science'] },
    ]
  },
  {
    title: 'Archaeology & Cultural History',
    slug: 'archaeology',
    description: 'Time-travel with data. Radiocarbon dating, relic value, and societal scaling.',
    defaultGuidance: {
      whyItMatters: "Exploring human history through data requires a fusion of scientific dating and stratigraphic analysis. Calculating carbon-14 decay, ancient labor logic, and demographic support allows us to reconstruct past societies with remarkable precision.",
      pitfalls: [
        "Applying modern purchasing power logic to ancient currencies without accounting for long-term numismatic inflation",
        "Ignoring the environmental constraints when estimating harvest yields relative to ancient populations"
      ],
      proTip: "When mapping a site, use UTM coordinates for precision trench placement; even small grid offsets can lead to significant stratigraphic errors."
    },
    items: [
      { name: 'Carbon-14 Decay', path: '/radiocarbon-dating-age', desc: 'Estimate relic age based on isotope decay.', keywords: ['archaeology', 'science', 'history'] },
      { name: 'Pottery Typology Ratio', path: '/style-frequency-seriation', desc: 'Relative dating by stratigraphic prevalence.', keywords: ['archaeology', 'history', 'stat'] },
      { name: 'Population Support', path: '/ancient-yield-math', desc: 'People fed per acre of primitive crops.', keywords: ['history', 'sociology', 'nature'] },
      { name: 'Building Man-Hours', path: '/pyramid-labor-logic', desc: 'Total effort required for ancient structures.', keywords: ['history', 'math', 'engineering'] },
      { name: 'Numismatic Inflation', path: '/ancient-currency-adj', desc: 'Purchasing power of Roman/Greek coins today.', keywords: ['history', 'finance', 'logic'] },
      { name: 'Burial Wealth Index', path: '/social-stratification-math', desc: 'Status ranking based on grave goods.', keywords: ['archaeology', 'sociology', 'history'] },
      { name: 'Linguistic Drift (Glotto)', path: '/language-split-timer', desc: 'Time since two dialects shared a parent.', keywords: ['history', 'linguistics', 'science'] },
      { name: 'Temple Alignment Sun', path: '/archaeoastronomy-math', desc: 'Calculate solstices on ancient ruins.', keywords: ['archaeology', 'space', 'science'] },
      { name: 'Site Mapping: UTM', path: '/surveying-grid-offset', desc: 'Precision coordinates for trench placement.', keywords: ['archaeology', 'tech', 'travel'] },
      { name: 'Relic Preservation Cost', path: '/conservation-btu-calc', desc: 'Energy to maintain constant museum humidity.', keywords: ['art', 'history', 'science'] },
    ]
  },
  {
    title: 'Music Theory & Composition',
    slug: 'music-theory',
    description: 'Harmonic algorithms and tuning. Scale math, interval ratios, and rhythmic logic.',
    defaultGuidance: {
      whyItMatters: "Harmonic algorithms and rhythmic logic form the foundation of compelling musical composition. Understanding scale math, interval ratios, and polyrhythmic sync points allows you to create masterpieces that are both emotionally resonant and mathematically structured.",
      pitfalls: [
        "Ignoring the mathematical impurity of equal temperament when seeking 'just intonation' intervals",
        "Miscalculating the sync points in complex polyrhythms, leading to rhythmic drift"
      ],
      proTip: "Map your keyboard frequencies to 432Hz scientific tuning to explore the subtle psychoacoustic effects of natural planetary harmonics."
    },
    items: [
      { name: 'Tuning Hertz (Hz)', path: '/frequency-scale-map', desc: 'Map A=440Hz vs A=432Hz scientific tunings.', keywords: ['music', 'audio', 'science'] },
      { name: 'Interval Ratio Pro', path: '/just-intonation-math', desc: 'Mathematical purity of fifths, thirds, and octaves.', keywords: ['music', 'math', 'audio'] },
      { name: 'Complexity: Entropy', path: '/melodic-predictability', desc: 'Information theory applied to composition.', keywords: ['music', 'math', 'logic'] },
      { name: 'Polyrhythm Sync Point', path: '/rhythm-beat-overlap', desc: 'Where do 3-over-4 grooves actually align?', keywords: ['music', 'math', 'tech'] },
      { name: 'Tempo Multiplier', path: '/dotted-note-timing', desc: 'Calculate exact milliseconds for complex beats.', keywords: ['music', 'audio', 'time'] },
      { name: 'Musical Scale Generator', path: '/mode-formula-logic', desc: 'Interval steps for Dorian, Phrygian, etc.', keywords: ['music', 'education', 'math'] },
      { name: 'Harmonic Partial Math', path: '/overtone-series-freq', desc: 'Predict frequencies of natural string vibrations.', keywords: ['music', 'physics', 'audio'] },
      { name: 'Song Duration: tempo', path: '/bpm-to-track-length', desc: 'Exact length based on bars and beats.', keywords: ['music', 'time', 'production'] },
      { name: 'Circle of Fifths Pro', path: '/key-signature-sharps', desc: 'Calculate accidentals based on key-center.', keywords: ['music', 'theory', 'education'] },
      { name: 'MIDI Velocity Spread', path: '/dynamic-range-normalizer', desc: 'Scale input sensitivy for realistic playability.', keywords: ['music', 'tech', 'production'] },
    ]
  },
  {
    title: 'Coffee & Tea Science',
    slug: 'coffee-craft',
    description: 'Extraction and chemistry. Precision brewing for a better morning.',
    defaultGuidance: {
      whyItMatters: "Precision brewing is a chemical extraction process that relies on exact water-to-coffee ratios and thermal management. Understanding TDS, extraction yields, and grind size surface area transforms your morning routine into a reproducible scientific success.",
      pitfalls: [
        "Focusing solely on brewing time while ignoring the impact of water hardness on flavor clarity",
        "Underestimating the rate of caffeine release in long-steep tea cycles"
      ],
      proTip: "Aim for an extraction yield between 18% and 22% for the peak sweetness and complex acidity profile that characterizes the 'golden brew'."
    },
    items: [
      { name: 'Extraction Yield %', path: '/coffee-tds-extraction', desc: 'Strength vs solubles dissolved in cup.', keywords: ['cooking', 'lifestyle', 'science'] },
      { name: 'Water to Coffee Ratio', path: '/golden-brew-math', desc: 'Standard 1:15 to 1:18 gram calculations.', keywords: ['cooking', 'lifestyle', 'math'] },
      { name: 'Espresso Brew Ratio', path: '/dose-yield-time', desc: 'Grams in vs grams out for the perfect pull.', keywords: ['cooking', 'lifestyle', 'tech'] },
      { name: 'Water Hardness (PPM)', path: '/mineral-extract-buffer', desc: 'Calcium/Magnesium impact on flavor clarity.', keywords: ['science', 'nature', 'coffee'] },
      { name: 'Caffeine Content (Est)', path: '/mg-per-brew-method', desc: 'Projected buzz based on beans and timing.', keywords: ['health', 'lifestyle', 'science'] },
      { name: 'Green Bean Bulk-to-Dry', path: '/roasting-weight-loss', desc: 'Moisture loss % during the roast cycle.', keywords: ['business', 'science', 'cooking'] },
      { name: 'Steeping Slope Time', path: '/tea-tannin-release', desc: 'Bitterness risk vs flavor extraction timer.', keywords: ['cooking', 'lifestyle', 'science'] },
      { name: 'Grind Size Surface', path: '/surface-area-micro', desc: 'Calculate water contact surface for extraction.', keywords: ['science', 'cooking', 'math'] },
      { name: 'Latte Milk Temp', path: '/thermal-froth-texture', desc: 'Peak sweetness based on sugar breakdown temp.', keywords: ['cooking', 'lifestyle', 'physics'] },
      { name: 'Roaster Heat Ramp', path: '/ror-degrees-min', desc: 'Rate of Rise tracking for profiles.', keywords: ['tech', 'science', 'cooking'] },
    ]
  },
  {
    title: 'Mixology & Spirit Science',
    slug: 'mixology',
    description: 'Molecular cocktails and volume math. Professional bar logistics and density.',
    defaultGuidance: {
      whyItMatters: "Molecular mixology uses volume math and fluid density to create sophisticated cocktail experiences. Calculating true ABV, brix levels, and specific gravity allow for professional-grade consistency and perfect layered presentation.",
      pitfalls: [
        "Ignoring the significant dilution caused by ice melt during long stirring or shaking cycles",
        "Misjudging the acidity balance of sour mixes without verifying the citric acid titration"
      ],
      proTip: "When layering drinks, chill your high-density ingredients first; cold liquids are more viscous and hold their layers better against lower-density spirits."
    },
    items: [
      { name: 'True ABV Calculator', path: '/cocktail-alcohol-dilution', desc: 'Final strength after ice melt and syrups.', keywords: ['lifestyle', 'party', 'math'] },
      { name: 'Ice Melt Dilution %', path: '/thermal-chill-math', desc: 'Water volume added during specific stir times.', keywords: ['physics', 'cooking', 'lifestyle'] },
      { name: 'Sugar Syrup Brix (SG)', path: '/simple-syrup-density', desc: 'Viscosity and sweetness of 1:1 vs 2:1 mixes.', keywords: ['science', 'cooking', 'finance'] },
      { name: 'Carbonation Pressure', path: '/psi-bubbles-co2', desc: 'Vol of gas based on temp and tank pressure.', keywords: ['science', 'party', 'tech'] },
      { name: 'Sour Mix pH Balance', path: '/citric-acid-titration', desc: 'Mimic lime juice acidity using powders.', keywords: ['chemistry', 'cooking', 'lifestyle'] },
      { name: 'Batch Prep Logistics', path: '/servings-to-liter-mix', desc: 'Scale recipes for event-sized punch bowls.', keywords: ['hosting', 'event planning', 'math'] },
      { name: 'Liquid Density Layers', path: '/floating-shot-physics', desc: 'Layer drinks based on specific gravity (SG).', keywords: ['science', 'art', 'lifestyle'] },
      { name: 'Glassware Capacity', path: '/rim-to-wash-volume', desc: 'Actual usable space vs overflow limit.', keywords: ['design', 'hosting', 'math'] },
      { name: 'Bottle Pour Yields', path: '/spirit-profit-per-750', desc: 'Number of cocktails per standard bottle size.', keywords: ['business', 'finance', 'lifestyle'] },
      { name: 'Infusion Timer (Rate)', path: '/vanilla-extract-logic', desc: 'Potency over days vs alcohol base strength.', keywords: ['cooking', 'time', 'science'] },
    ]
  },
  {
    title: 'Baking & Pastry Precision',
    slug: 'baking-pro',
    description: 'Thermodynamics of dough and sugar. High-precision math for professional results.',
    defaultGuidance: {
      whyItMatters: "Baking is a game of thermodynamics and high-precision chemistry. Using baker's percentages and calculating desired dough temperatures ensures consistent, professional results across different flours and environmental conditions.",
      pitfalls: [
        "Underestimating the impact of ambient humidity on flour water absorption",
        "Ignoring the friction factor of your mixer when calculating initial water temperature"
      ],
      proTip: "Adjust your candy stages based on altitude; boiling points drop approximately 2°F for every 1000 feet above sea level, impacting sugar crystallization."
    },
    items: [
      { name: 'Bakers Percentage Pro', path: '/advanced-flour-ratio', desc: 'Scale dough using flour as 100% baseline.', keywords: ['cooking', 'science', 'math'] },
      { name: 'Hydration Level Adj', path: '/flour-water-absorption', desc: 'Accounting for humidity and protein content.', keywords: ['cooking', 'science', 'nature'] },
      { name: 'Desired Dough Temp', path: '/friction-factor-math', desc: 'Water temp needed for a specific end-of-mix target.', keywords: ['physics', 'cooking', 'saving'] },
      { name: 'Sourdough Starter Fed', path: '/levain-build-timer', desc: 'Timing based on inoculation ratio and temp.', keywords: ['cooking', 'nature', 'time'] },
      { name: 'Pan Volume Scaling', path: '/cake-tin-dimension-adj', desc: 'Adjust eggs and flour for different pan sizes.', keywords: ['cooking', 'diy', 'math'] },
      { name: 'Egg Substitution Grams', path: '/liquid-egg-ratio', desc: 'Consistent measurements for industrial prep.', keywords: ['cooking', 'business', 'math'] },
      { name: 'Sugar Stage Temp', path: '/candy-thermometer-alt', desc: 'Soft ball vs Hard crack adjust for altitude.', keywords: ['science', 'cooking', 'weather'] },
      { name: 'Chocolate Temper Rate', path: '/crystal-beta-timer', desc: 'Cooling curves for snap and high-gloss finish.', keywords: ['physics', 'cooking', 'food science'] },
      { name: 'Butter Fat Purity', path: '/clarified-ghee-yield', desc: 'Solids removal math for high-heat cooking.', keywords: ['cooking', 'science', 'saving'] },
      { name: 'Yeast Activity Multi', path: '/fermentation-rate-atm', desc: 'Rise speed variation by air pressure.', keywords: ['science', 'cooking', 'weather'] },
    ]
  },
  {
    title: 'Renewable Power & Off-Grid',
    slug: 'outdoor-elec',
    description: 'Living off the sun and wind. Survival and sustainable energy logistics.',
    defaultGuidance: {
      whyItMatters: "Living sustainably off the grid requires a mastery of solar paths, voltage drops, and battery duty cycles. Managing parasitic loads and optimizing panel placement ensures a reliable energy supply even in the most remote survival scenarios.",
      pitfalls: [
        "Under-sizing wire gauges on long low-voltage DC runs, leading to significant power loss and safety risks",
        "Failing to account for the phantom load of inverters when they are in standby mode"
      ],
      proTip: "Use solar shadow path projections to identify the exact tree-line overlap for your specific winter solstice, ensuring peak generation when you need it most."
    },
    items: [
      { name: 'Solar Shadow Path', path: '/winter-sun-arc-math', desc: 'Panels placement to avoid tree-line overlap.', keywords: ['energy', 'nature', 'math'] },
      { name: 'Battery State of Charge', path: '/voltage-rest-soc', desc: 'Estimate capacity remaining from battery volts.', keywords: ['energy', 'tech', 'diy'] },
      { name: 'Wire Gauge Safety', path: '/dc-voltage-drop-pro', desc: 'Prevent fire and loss on long low-volt runs.', keywords: ['safety', 'diy', 'engineering'] },
      { name: 'Generator Run-Time', path: '/fuel-load-duration', desc: 'Hours remaining based on current kw usage.', keywords: ['saving', 'safety', 'tech'] },
      { name: 'Appliance Duty Cycle', path: '/fridge-compressor-math', desc: 'True daily draw vs label peak usage.', keywords: ['energy', 'saving', 'home'] },
      { name: 'Inverter Standby Loss', path: '/phantom-load-drain', desc: 'Parasitic energy usage when not in use.', keywords: ['energy', 'saving', 'tech'] },
      { name: 'Wind-Turbine Cut-In', path: '/start-up-velocity', desc: 'Minimum wind needed to begin generation.', keywords: ['energy', 'nature', 'physics'] },
      { name: 'LED Efficiency ROI', path: '/lumens-per-watt-win', desc: 'Cost savings over old filament bulbs.', keywords: ['saving', 'home', 'finance'] },
      { name: 'Heat Tape Wattage', path: '/pipe-freeze-protection', desc: 'Energy needed to prevent frozen plumbing.', keywords: ['home', 'weather', 'safety'] },
      { name: 'Solar Tax Credit Value', path: '/tax-rebate-net-cost', desc: 'Final price after national/local incentives.', keywords: ['finance', 'saving', 'green'] },
    ]
  },
  {
    title: 'Aquarium & Hydrobiology',
    slug: 'aquarium',
    description: 'Aquatic ecosystem management. Chemistry, lighting, and stocking logistics.',
    defaultGuidance: {
      whyItMatters: "Maintaining a balanced aquatic ecosystem is a matter of precise chemical monitoring and bioload management. Accurate calculations for water volume, filtration turnover, and nutrient dosing ensure a thriving environment for your fish and plants.",
      pitfalls: [
        "Over-stocking the tank without accounting for the actual filtration capacity",
        "Ignoring the water displacement from substrate and decorations, leading to incorrect dosing"
      ],
      proTip: "Use a slow-drip method for salinity changes in reef tanks; even small sudden swings in specific gravity can be fatal for sensitive corals."
    },
    items: [
      { name: 'Tank Volume: Actual', path: '/water-displacement-net', desc: 'Liquid volume after substrate and rock.', keywords: ['hobby', 'nature', 'math'] },
      { name: 'Stocking Density Pro', path: '/bioload-filtration-limit', desc: 'Fish inches vs filtration turn-over rate.', keywords: ['hobby', 'nature', 'safety'] },
      { name: 'CO2 Bubble Per Sec', path: '/co2-injection-ppm', desc: 'Targeting 30ppm for planted tank health.', keywords: ['hobby', 'science', 'nature'] },
      { name: 'Heater Wattage Size', path: '/delta-t-thermal-size', desc: 'Watts needed for specific room-to-tank gap.', keywords: ['hobby', 'engineering', 'safety'] },
      { name: 'Light PAR Coverage', path: '/plant-ppfd-spread', desc: 'Light intensity at substrate depth levels.', keywords: ['hobby', 'tech', 'science'] },
      { name: 'Salt Mix Precision', path: '/salinity-drift-mixer', desc: 'Gallons and grams for specific salinity (SG).', keywords: ['hobby', 'chemistry', 'science'] },
      { name: 'Buffer (kH) dosing', path: '/alkalinity-swing-math', desc: 'Stability math for coral and plant health.', keywords: ['hobby', 'science', 'math'] },
      { name: 'Nitrate Accumulation', path: '/water-change-interval', desc: 'Frequency based on bioload and target ppm.', keywords: ['hobby', 'nature', 'maintenance'] },
      { name: 'Flow Rate (GPH) Pro', path: '/sump-turnover-logic', desc: 'Balanced head-height vs pump capacity.', keywords: ['hobby', 'tech', 'math'] },
      { name: 'Substrate Depth Vol', path: '/gravel-bag-count', desc: 'Pounds needed for specific bed thicknesses.', keywords: ['hobby', 'design', 'diy'] },
    ]
  },
  {
    title: 'Model Rocketry & Drones',
    slug: 'rocketry-drones',
    description: 'Aerodynamic performance and propulsion. Flight physics for high-altitude hobbies.',
    defaultGuidance: {
      whyItMatters: "High-altitude rocketry and multi-rotor flight rely on aerodynamic precision and energy management. Calculating apogee, thrust-to-weight ratios, and battery flight times allows for safe launches and optimal performance in every mission.",
      pitfalls: [
        "Ignoring the Center of Pressure (CP) vs Center of Gravity (CG) relationship, which can lead to unstable flight",
        "Failing to account for motor thrust curves when predicting peak altitude"
      ],
      proTip: "Always size your parachute for a descent velocity of 15-20 fps to ensure your model lands safely without structural damage or excessive drift."
    },
    items: [
      { name: 'Rocket Apogee Est', path: '/launch-math-altitude', desc: 'Project peak height based on impulse/weight.', keywords: ['tech', 'physics', 'hobby'] },
      { name: 'Drone Battery Flight', path: '/multi-rotor-airtime', desc: 'Minutes remaining based on amp draw/weight.', keywords: ['tech', 'travel', 'math'] },
      { name: 'Parachute Sizing Pro', path: '/descent-velocity-drag', desc: 'Safe landing speed based on model mass.', keywords: ['safety', 'physics', 'hobby'] },
      { name: 'Motor Thrust Curve', path: '/isp-specific-impulse', desc: 'Efficiency of different fuel compositions.', keywords: ['tech', 'engineering', 'physics'] },
      { name: 'FPV Signal Horizon', path: '/radio-link-range', desc: 'Linear distance vs height signal limits.', keywords: ['tech', 'physics', 'hobby'] },
      { name: 'Blade Pitch Lift', path: '/propeller-grams-thrust', desc: 'Vertical lift capacity of different props.', keywords: ['tech', 'physics', 'engineering'] },
      { name: 'Center of Pressure (Cp)', path: '/stability-fin-math', desc: 'Calculate Cp vs Cg for accurate flight.', keywords: ['physics', 'safety', 'hobby'] },
      { name: 'Mach Velocity Shift', path: '/transonic-drag-divider', desc: 'Aerodynamic resistance near Mach 1.0.', keywords: ['physics', 'science', 'tech'] },
      { name: 'Launch Weather Delay', path: '/crosswind-drift-vec', desc: 'Targeting landing zone after wind shifts.', keywords: ['weather', 'safety', 'travel'] },
      { name: 'ESC Amp Load Limits', path: '/peak-current-safety', desc: 'Verify motor draw doesn\'t melt circuits.', keywords: ['tech', 'safety', 'diy'] },
    ]
  },
  {
    title: 'Horology & Precision Timing',
    slug: 'horology',
    description: 'Mastery of time. Mechanical oscillation, accuracy, and calendar math.',
    defaultGuidance: {
      whyItMatters: "The mastery of time is built on the pursuit of mechanical accuracy and synchronized oscillations. Understanding beat errors, amplitude shifts, and lunar-cycle complications allows for the precise maintenance and appreciation of fine watchmaking.",
      pitfalls: [
        "Assuming a mechanical watch is inaccurate based on a single-day measurement instead of a multi-position average",
        "Ignoring the impact of gravity (isochronism) on balance wheel rotation"
      ],
      proTip: "Monitor your watch's amplitude at full wind; a drop below 250 degrees is a high-probability indicator that the movement requires professional servicing."
    },
    items: [
      { name: 'Watch Rate (BPH/Hz)', path: '/movement-beat-error', desc: 'Vibrations per hour to milliseconds.', keywords: ['hobby', 'tech', 'engineering'] },
      { name: 'Amplitude Degree Shift', path: '/balance-wheel-rotation', desc: 'Energy health of a mechanical movement.', keywords: ['hobby', 'physics', 'tech'] },
      { name: 'Atomic Drift Calculator', path: '/quartz-accuracy-sec', desc: 'Seconds lost per year vs thermal shifts.', keywords: ['tech', 'science', 'time'] },
      { name: 'Moon Phase Precision', path: '/synodic-month-timer', desc: 'Predict next full moon date for complications.', keywords: ['astro', 'time', 'design'] },
      { name: 'Spring Mainspring Power', path: '/reserve-hour-math', desc: 'Estimated runtime based on torque curves.', keywords: ['engineering', 'tech', 'hobby'] },
      { name: 'Julian to Calendar', path: '/day-count-historical', desc: 'Convert old manuscripts date formats.', keywords: ['history', 'time', 'education'] },
      { name: 'Sidereal Day Ratio', path: '/star-time-offset', desc: 'Earth rotation vs fixed stars timing.', keywords: ['astro', 'time', 'science'] },
      { name: 'Chronometer Tolerance', path: '/cosc-accuracy-check', desc: 'Verify if your watch meets swiss COSC spec.', keywords: ['hobby', 'tech', 'stat'] },
      { name: 'Dial Layout Degree', path: '/watch-maker-divide', desc: 'Angle between markers for 12 vs 24hr faces.', keywords: ['design', 'math', 'art'] },
      { name: 'Water Pressure Rating', path: '/atm-depth-seal', desc: 'Static vs dynamic pressure in water depth.', keywords: ['safety', 'marine', 'physics'] },
    ]
  },
  {
    title: 'Linguistics & Phonetics',
    slug: 'linguistics',
    description: 'Decoding the structure of speech. Entropy, word count, and statistical language tools.',
    defaultGuidance: {
      whyItMatters: "Analyzing the structure of human language requires a fusion of statistical data and phonetic precision. Calculating Zipf's law rankings, lexical diversity, and reading velocity provides deep insights into communication patterns and literacy development.",
      pitfalls: [
        "Using word frequency scores from outdated corpora that don't reflect modern technical or social slang",
        "Ignoring the impact of syllable complexity on overall reading grade levels"
      ],
      proTip: "Apply the Gunning Fog Index to your professional writing periodically to ensure you're communicating at the ideal readability level for your target audience."
    },
    items: [
      { name: 'Zipf\'s Law Rank', path: '/word-frequency-power', desc: 'Predict word prevalence in any large text.', keywords: ['language', 'stat', 'data'] },
      { name: 'Phoneme Entropy', path: '/speech-information-bits', desc: 'Information density per spoken second.', keywords: ['language', 'tech', 'science'] },
      { name: 'Transcription Duration', path: '/audio-to-text-timer', desc: 'Hours needed based on word complexity.', keywords: ['productivity', 'business', 'language'] },
      { name: 'Gunning Fog Index', path: '/readability-education-grade', desc: 'Calculate grade-level difficulty of text.', keywords: ['writing', 'education', 'marketing'] },
      { name: 'Lexical Diversity (TTR)', path: '/vocabulary-richness', desc: 'Unique words vs total word count ratio.', keywords: ['language', 'stat', 'writing'] },
      { name: 'Syllacle Counting Rule', path: '/poetic-meter-logic', desc: 'Automated scan for haiku or iambic rhythm.', keywords: ['art', 'writing', 'language'] },
      { name: 'Dialect Shift (Leven)', path: '/string-edit-distance', desc: 'Mathematical difference between spelling/speech.', keywords: ['language', 'stat', 'tech'] },
      { name: 'Reading Velocity Pro', path: '/wpm-retention-timer', desc: 'Project finish time for novels or docs.', keywords: ['lifestyle', 'education', 'time'] },
      { name: 'Translation Expansion', path: '/text-length-growth', desc: 'Budgeting space for English-to-German/etc.', keywords: ['design', 'web', 'language'] },
      { name: 'Character Set Bits', path: '/unicode-bytes-count', desc: 'Storage size for multi-language datasets.', keywords: ['tech', 'language', 'server'] },
    ]
  },
  {
    title: 'Formal Logic & Philosophy',
    slug: 'formal-logic',
    description: 'Structured thinking. Boolean algebra, truth tables, and philosophical probability.',
    defaultGuidance: {
      whyItMatters: "Structured thinking and deductive reasoning are the pillars of high-level philosophical analysis. Using truth tables, Bayesian probability, and game theory allows you to update your beliefs based on logic and navigate complex ethical dilemmas with clarity.",
      pitfalls: [
        "Committing a 'logical fallacy' by assuming correlation implies causation in statistical arguments",
        "Failing to update your prior probabilities (Bayes' Theorem) when significant new evidence arises"
      ],
      proTip: "Apply Occam's Razor to competing theories: the simplest explanation that accounts for all data points is statistically the most likely to be correct."
    },
    items: [
      { name: 'Truth Table Utility', path: '/boolean-logic-solver', desc: 'Verify AND/OR/XOR gates for complex logic.', keywords: ['education', 'math', 'tech'] },
      { name: 'Pascal\'s Wager Odds', path: '/infinite-payoff-math', desc: 'Logical outcomes for high-stakes beliefs.', keywords: ['philosophy', 'stat', 'logic'] },
      { name: 'Categorical Syllogism', path: '/venn-diagram-logic', desc: 'Test validity of All/None premise chains.', keywords: ['education', 'logic', 'writing'] },
      { name: 'Occam\'s Sharpness', path: '/simplicity-bias-weight', desc: 'Choosing between competing assumptions.', keywords: ['philosophy', 'logic', 'science'] },
      { name: 'Bayes Theorem Pro', path: '/priori-probability-adj', desc: 'Update belief odds based on new evidence.', keywords: ['math', 'stat', 'logic'] },
      { name: 'Prisoner\'s Dilemma', path: '/game-theory-payoff', desc: 'Optimal strategy for cooperation vs betrayal.', keywords: ['sociology', 'business', 'logic'] },
      { name: 'Golden Mean Balance', path: '/virtue-ethics-midpoint', desc: 'Finding the center between two extremes.', keywords: ['philosophy', 'lifestyle', 'logic'] },
      { name: 'Modal Logic Shift', path: '/possibility-worlds-math', desc: 'Necessity vs probability in formal systems.', keywords: ['math', 'philosophy', 'logic'] },
      { name: 'Information Value ROI', path: '/decision-node-utility', desc: 'Cost of clarity vs cost of ignorance.', keywords: ['business', 'logic', 'stat'] },
      { name: 'Fallacy Detection Pct', path: '/rhetorical-bias-counter', desc: 'Analyze debate strength vs logical holes.', keywords: ['education', 'writing', 'logic'] },
    ]
  },
  {
    title: 'Demographics & Sociology',
    slug: 'sociology',
    description: 'Large-scale human behavior. Population trends, urban density, and social data.',
    defaultGuidance: {
      whyItMatters: "Mapping the evolution of human societies requires a precise understanding of population growth, wealth distribution, and social migration patterns. These tools provide the statistical foundation for analyzing how we live, work, and interact within large-scale civilizations.",
      pitfalls: [
        "Ignoring the impact of aging populations on dependency ratios in modern developed nations",
        "Failing to account for the 'Gini Coefficient' when assessing the true economic health of a region"
      ],
      proTip: "Use the Rule of 70 to quickly estimate how many years it will take for a population or your savings to double at any given annual growth rate."
    },
    items: [
      { name: 'Population Doubling', path: '/rule-of-70-growth', desc: 'Years to 2x based on annual growth rate.', keywords: ['sociology', 'math', 'nature'] },
      { name: 'Gini Index (Wealth Inequality)', path: '/wealth-inequality-index', desc: 'Mathematical measure of income distribution.', keywords: ['sociology', 'economics', 'stat', 'gini index'] },
      { name: 'Urban Density Solver', path: '/people-per-square-mile', desc: 'Acreage vs total head count metrics.', keywords: ['sociology', 'urban planning', 'math'] },
      { name: 'Dependency Ratio Pro', path: '/working-age-support', desc: 'Labor force vs youth and elderly population.', keywords: ['sociology', 'economics', 'logic'] },
      { name: 'Malthusian Peak Time', path: '/resource-scarcity-timer', desc: 'Consumption velocity vs food production.', keywords: ['sociology', 'nature', 'math'] },
      { name: 'Social Gravity Model', path: '/city-migration-pull', desc: 'Probability of movement between two hubs.', keywords: ['sociology', 'math', 'travel'] },
      { name: 'Dunbar\'s Number Adj', path: '/social-network-limit', desc: 'Effective community size for human brains.', keywords: ['psychology', 'sociology', 'logic'] },
      { name: 'Birth Rate (CBR)', path: '/fertility-per-thousand', desc: 'Live births vs total population annually.', keywords: ['sociology', 'health', 'stat'] },
      { name: 'HDI Component Calc', path: '/human-dev-index-score', desc: 'Life expectancy, income, and schooling.', keywords: ['sociology', 'economics', 'education'] },
      { name: 'Housing Gap Index', path: '/shelter-deficit-math', desc: 'Total demand vs available build inventory.', keywords: ['urban planning', 'business', 'sociology'] },
    ]
  },
  {
    title: 'Urban Planning & Transit',
    slug: 'urban-planning',
    description: 'Designing the future city. Traffic flow, zoning logic, and infrastructure math.',
    defaultGuidance: {
      whyItMatters: "Designing the sustainable cities of the future relies on the precise management of traffic flow, zoning density, and public transit efficiency. Understanding these variables allows planners to create walkable, green environments that optimize resource usage and enhance the quality of life.",
      pitfalls: [
        "Focusing on road expansion while ignoring 'induced demand,' which leads back to congestion",
        "Underestimating the park-acre-ratio needed to maintain the psychological wellbeing of high-density urban populations"
      ],
      proTip: "Maximize your city's walkability by targeting an amenity density radius that ensures most essential services are reach-based within 15 minutes."
    },
    items: [
      { name: 'Traffic Flow (V/C)', path: '/road-capacity-stress', desc: 'Congestion logic for volume vs cap.', keywords: ['urban planning', 'travel', 'tech'] },
      { name: 'Floor Area Ratio (FAR)', path: '/zoning-density-math', desc: 'Building square footage vs land lot size.', keywords: ['urban planning', 'business', 'design'] },
      { name: 'Transit Headway Timer', path: '/bus-frequency-logic', desc: 'Wait times based on total fleet count.', keywords: ['travel', 'math', 'logistics'] },
      { name: 'Walkability Score Est', path: '/amenity-density-radius', desc: 'Average distance to essential services.', keywords: ['urban planning', 'lifestyle', 'ux'] },
      { name: 'Greenspace per Habit', path: '/park-acre-ratio', desc: 'Public nature access vs local population.', keywords: ['urban planning', 'nature', 'health'] },
      { name: 'Parking Load Factor', path: '/commercial-stall-need', desc: 'Spots required based on retail square footage.', keywords: ['urban planning', 'business', 'travel'] },
      { name: 'Pedestrian Flow Rate', path: '/sidewalk-congestion-math', desc: 'People per foot of walkway per minute.', keywords: ['safety', 'design', 'urban planning'] },
      { name: 'Storm Drain Velocity', path: '/runoff-pipe-diameter', desc: 'Capacity needed for peak rainfall intensity.', keywords: ['engineering', 'water', 'urban planning'] },
      { name: 'Bike Lane ROI Score', path: '/cycling-car-offset', desc: 'Reduced congestion vs lane cost.', keywords: ['travel', 'environment', 'finance'] },
      { name: 'Lighting Illumination', path: '/lux-safety-standard', desc: 'Street light brightness for public safety.', keywords: ['safety', 'tech', 'design'] },
    ]
  },
  {
    title: 'Environmental Law & Compliance',
    slug: 'eco-legal',
    description: 'Regulatory accuracy. Emissions limits, fines, and permit math.',
    defaultGuidance: {
      whyItMatters: "Navigating the complexities of environmental regulations requires a data-driven approach to emissions monitoring and habitat protection. Maintaining accurate logs of waste-water ppm and carbon footprints ensures that your operations remain compliant and ecologically responsible.",
      pitfalls: [
        "Failing to account for the cumulative weight of hazardous waste over a full reporting year",
        "Ignoring the impact of decibel-curfew laws when planning industrial or construction projects near residential zones."
      ],
      proTip: "Verify your Habitat Exclusion zones against endangered species buffers early in the site planning phase to prevent significant legal and construction delays."
    },
    items: [
      { name: 'Effluent ppm Limit', path: '/waste-water-threshold', desc: 'Compliance math for industrial discharge.', keywords: ['legal', 'green', 'science'] },
      { name: 'Carbon Penalty Cost', path: '/tax-liability-ton-co2', desc: 'Estimated fine for exceeding emission caps.', keywords: ['legal', 'finance', 'green'] },
      { name: 'Air Quality Index Shift', path: '/aqi-conversion-pm25', desc: 'Sensor data to 0-500 scale for legal reporting.', keywords: ['safe', 'health', 'legal'] },
      { name: 'Mitigation Bank Credits', path: '/wetland-trade-value', desc: 'Restoration area vs build area credits.', keywords: ['legal', 'business', 'nature'] },
      { name: 'Permit Renewal Timer', path: '/compliance-expiry-risk', desc: 'Probability of fine based on lead time.', keywords: ['legal', 'time', 'business'] },
      { name: 'Dumping Violation Stat', path: '/hazardous-waste-log', desc: 'Cumulative weight per year reporting.', keywords: ['legal', 'safety', 'stat'] },
      { name: 'Noise Nuisance (dB)', path: '/decibel-curfew-drop', desc: 'Sound decay distance for zoning laws.', keywords: ['legal', 'audio', 'safety'] },
      { name: 'Recycling diversion %', path: '/waste-to-landfill-ratio', desc: 'Sustainability metrics for corporate reports.', keywords: ['green', 'business', 'logic'] },
      { name: 'Lobbying Spend ROI', path: '/policy-influence-math', desc: 'Legislative change probability vs budget.', keywords: ['legal', 'business', 'finance'] },
      { name: 'Endangered Species Buffer', path: '/habitat-exclusion-sqft', desc: 'Protected area math for site planning.', keywords: ['legal', 'nature', 'math'] },
    ]
  },
  {
    title: 'Disaster Preparedness',
    slug: 'disaster-prep',
    description: 'Survival logistics. Rations, shelter stability, and emergency range.',
    defaultGuidance: {
      whyItMatters: "Survival in high-stakes emergency scenarios depends on rigorous logistical planning and resource management. Precise calculations for water rations, calorie buffers, and evacuation ranges ensure that you and your community can navigate disasters with confidence and resilience.",
      pitfalls: [
        "Calculating food rations based on bulk weight instead of actual caloric energy density",
        "Underestimating the panic-buy multiplier during the first 24 hours of a regional supply chain disruption."
      ],
      proTip: "Store at least 4 liters of water per person per day; this accounts for hydration, essential hygiene, and unexpected temperature-driven loss."
    },
    items: [
      { name: 'Water Ration Solver', path: '/survival-hydration-logic', desc: 'Liters needed per person based on temp.', keywords: ['safety', 'health', 'survival'] },
      { name: 'Food Calorie Buffer', path: '/emergency-ration-timer', desc: 'Days of shelf-life vs daily energy needs.', keywords: ['safety', 'health', 'saving'] },
      { name: 'Solar Phone Charger', path: '/panel-to-powerbank-time', desc: 'Hours of direct sun vs battery capacity.', keywords: ['tech', 'energy', 'survival'] },
      { name: 'Wind Shelter Tension', path: '/tarp-wind-load-safety', desc: 'Cord strength needed for high-velocity gusts.', keywords: ['safety', 'physics', 'survival'] },
      { name: 'Panic Buy Multiplier', path: '/shortage-inventory-math', desc: 'How fast shelves clear based on crowd size.', keywords: ['psychology', 'safety', 'logistics'] },
      { name: 'Emergency Fuel Miles', path: '/evac-range-tank-size', desc: 'How far you can go on a quarter tank.', keywords: ['safety', 'travel', 'fuel'] },
      { name: 'Radio Battery Duration', path: '/icom-signal-standby', desc: 'Receive-time vs Transmit-time energy drain.', keywords: ['tech', 'safety', 'energy'] },
      { name: 'Flashlight Lumen Span', path: '/beam-throw-distance', desc: 'Linear feet of visibility at specific outputs.', keywords: ['safety', 'tech', 'survival'] },
      { name: 'First Aid Kit Depth', path: '/bandage-yield-ratio', desc: 'Medical supplies vs expected injury count.', keywords: ['safety', 'health', 'math'] },
      { name: 'Escape Time Path', path: '/building-egress-minutes', desc: 'Seconds per door based on obstacle density.', keywords: ['safety', 'design', 'time'] },
    ]
  },
  {
    title: 'Esports & Gaming Performance',
    slug: 'esports-pro',
    description: 'Data-driven gaming. Reflexes, framerates, and competitive logic.',
    defaultGuidance: {
      whyItMatters: "Competitive gaming is a field governed by frame-timings, network latency, and reflex optimization. Analyzing your DPI settings, input lag, and rank-progression logic allows you to maximize your performance and gain a measurable advantage in high-stakes digital arenas.",
      pitfalls: [
        "Focusing on high DPI settings while failing to match your exact eDPI across different game engines",
        "Ignoring the input-lag penalty associated with inconsistent framerates on lower-refresh monitors."
      ],
      proTip: "Match your mouse sensitivity across all your competitive titles using eDPI calculations to ensure that your muscle memory remains a consistent asset regardless of the platform."
    },
    items: [
      { name: 'Latency Advantage (ms)', path: '/ping-reaction-gap', desc: 'How much your internet speed impacts duel wins.', keywords: ['gaming', 'tech', 'stat'] },
      { name: 'FPS to Frametime', path: '/input-lag-ms-conversion', desc: 'Visual delay between frames at specific 144/240Hz.', keywords: ['gaming', 'tech', 'performance'] },
      { name: 'Mouse Sensitivity (DPI)', path: '/edpi-match-pro', desc: 'Exact sensitivity matching across different games.', keywords: ['gaming', 'tech', 'data'] },
      { name: 'Elo Rating Progress', path: '/rank-up-win-ratio', desc: 'Games needed to climb based on k-factor.', keywords: ['gaming', 'stat', 'math'] },
      { name: 'XP Grind Calculator', path: '/battlepass-level-timer', desc: 'Hours per day to finish a season on time.', keywords: ['gaming', 'time', 'lifestyle'] },
      { name: 'Loot Box Probability', path: '/drop-rate-luck-timer', desc: 'Cumulative odds of hitting a legendary item.', keywords: ['gaming', 'stat', 'logic'] },
      { name: 'Heal-per-Second (HPS)', path: '/moba-sustain-math', desc: 'Recovery speed vs enemy damage output.', keywords: ['gaming', 'logic', 'math'] },
      { name: 'GPU Bottleneck Score', path: '/bottleneck-cpu-test', desc: 'Is your processor slowing down your graphics?', keywords: ['gaming', 'tech', 'computer'] },
      { name: 'Armor DR % Calculator', path: '/effective-hp-tank', desc: 'True durability after damage reduction buffs.', keywords: ['gaming', 'logic', 'math'] },
      { name: 'Stream Bitrate Health', path: '/obs-upload-headroom', desc: 'Optimal stream quality based on upload speed.', keywords: ['gaming', 'tech', 'marketing'] },
    ]
  },
];
