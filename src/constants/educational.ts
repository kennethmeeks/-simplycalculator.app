
export interface CategoryEducation {
    title: string;
    whyItWorks: string;
    howToUse: string;
    faq: {q: string, a: string}[];
}

export const CATEGORY_EDUCATION: Record<string, CategoryEducation> = {
    'compound-interest': {
        title: "The Power of Compound Interest",
        howToUse: "Enter your starting amount, how much you'll add each month, and your interest rate. We'll show you exactly how 'money makes money' over time. For the best 2026 planning, we suggest looking at a 10 to 20-year window to see the true impact of compounding.",
        whyItWorks: "Compound interest is often called the 'eighth wonder of the world.' It works by paying interest not just on your original deposit, but also on the interest you've already earned. This creates an exponential curve where your wealth grows faster and faster the longer you leave it alone.",
        faq: [
            { q: "How much will $1,000 grow with compound interest?", a: "If you start with $1,000 and earn a 7% return, after 20 years you'll have nearly $4,000—even if you never add another penny. Compound interest turns small savings into significant wealth over time." },
            { q: "What is compound interest with example?", a: "Imagine you have $100 and earn 10% interest. After year one, you have $110. In year two, you earn 10% on $110 (which is $11), giving you $121. You earned interest on your interest!" },
            { q: "How do I calculate compound interest?", a: "To find your future value, multiply your initial principal by (1 + the interest rate) raised to the power of the number of years. Or, just use this calculator to see it instantly with monthly additions!" },
            { q: "What is the compound interest formula?", a: "The standard formula is A = P(1 + r/n)^(nt), where A is the final amount, P is the principal, r is the interest rate, n is compounding frequency, and t is time in years." },
            { q: "How long does it take to double money with compound interest?", a: "A quick trick is the 'Rule of 72.' Divide 72 by your interest rate. For example, at a 10% return, your money will double roughly every 7.2 years." },
            { q: "Does compounding monthly make a big difference?", a: "Yes. The more often interest is calculated (daily vs. monthly vs. annually), the more interest 'snowballs' onto itself, leading to a higher final balance." }
        ]
    },
    finance: {
        title: "The Financial Decision Engine",
        howToUse: "Input your core numbers: how much you're starting with, your interest rate, and how many years you're planning for. Our engine shows you exactly how your money can grow. For 2026, it's smart to use conservative rates (like 5-7%) to see a more realistic picture of your future wealth.",
        whyItWorks: "Sound financial planning is about understanding the relationship between time and money. Whether you're saving for retirement or calculating a house payment, small changes today lead to massive results later. Our tools use the same math banks use, but simplified so you can make choices without a finance degree.",
        faq: [
            { q: "How much should I save for retirement?", a: "A common goal is to save 15% of your gross income. However, the exact amount depends on your current age, your desired lifestyle in retirement, and how many years you have until you plan to stop working." },
            { q: "What is the rule of 72 in finance?", a: "The Rule of 72 is a quick way to estimate how long it will take to double your money. Divide 72 by your annual interest rate. For example, at 8% interest, your money doubles in about 9 years." },
            { q: "Is a 7% return on investment good?", a: "Yes. Historically, the stock market (S&P 500) has returned about 7-10% annually after inflation. A 7% return is a solid, realistic benchmark for long-term wealth building." },
            { q: "How do I calculate interest on savings?", a: "Use the formula: Principal x (1 + Rate)^Time. Or, just use our calculators to see the breakdown of your monthly growth and interest earned over time!" },
            { q: "Should I pay off debt or invest?", a: "If your debt interest rate (like 20% on a credit card) is higher than your expected investment return (like 7%), always pay off the debt first. It's a guaranteed 'return' on your money." }
        ]
    },
    health: {
        title: "Body Markers & Metabolism Analysis",
        howToUse: "Enter your basic stats: height, weight, age, and activity level. Be honest about your activity—if you sit at a desk most of the day, choose 'Sedentary' for the most accurate result. Our engine uses the newest 2026 standards to see how your body is performing.",
        whyItWorks: "Good health starts with good data. By calculating numbers like your BMR (calories burned at rest) or BMI, you get a scientific baseline. This helps you move past guessing at your diet and instead gives you a clear target based on your unique body type.",
        faq: [
            { q: "How many calories should I eat a day?", a: "The average adult needs about 2,000 to 2,500 calories to maintain weight, but your specific 'TDEE' depends on your age, height, weight, and how much you move. Use this calculator to find your exact personal target." },
            { q: "What is my BMR?", a: "Your Basal Metabolic Rate (BMR) is the number of calories your body burns just to stay alive while at rest (breathing, heart beating, etc.). It's the absolute minimum your body needs to function." },
            { q: "How many calories do I need to lose weight?", a: "To lose about 1lb a week, you generally need to eat 500 calories less than your daily maintenance level (TDEE). Most experts recommend avoiding any diet that drops below 1,200 calories without medical supervision." },
            { q: "What is the difference between BMR and TDEE?", a: "BMR is your resting metabolism. TDEE (Total Daily Energy Expenditure) is your BMR plus all the calories you burn from walking, working, and exercising." },
            { q: "Why do different calculators give me different results?", a: "We use the Mifflin-St Jeor formula, which is considered the 'gold standard' for accuracy in 2026. Other sites might use older formulas (like Harris-Benedict) which can sometimes overestimate calorie needs." }
        ]
    },
    math: {
        title: "Mathematical Foundations & Logic",
        howToUse: "Enter your numbers into the fields provided. Our engine handles everything from simple plus/minus to advanced calculus and geometry. We use high-precision 2026 standards to ensure your results are exact every time.",
        whyItWorks: "Math is the 'rulebook' for physics, building, and logic. Whether you're measuring a triangle for a DIY project or finding the average of a huge data set, using a digital tool removes 'human error.' This gives you a verifiable answer you can trust for school or professional work.",
        faq: [
            { q: "How precise are these calculations?", a: "Our engine calculates to about 12 decimal places. For almost any real-world job—like building a house or doing your taxes—that is way more precision than you'll ever need." },
            { q: "Why use this instead of just doing it in my head?", a: "Mental math is fine for small things, but 'carrying the one' errors are incredibly common in multi-step problems. A calculator ensures that your 10th step is just as accurate as your 1st." },
            { q: "How do the geometry tools figure out shapes?", a: "We use standard mathematical constants (like Pi) and formulas that have been proven for thousands of years. You just provide the measurements; we handle the complex formulas." },
            { q: "Does this follow the standard 'Order of Operations'?", a: "Yes. Our engine strictly follows PEMDAS/BODMAS rules (Parentheses, Exponents, Multiplication, Division, etc.), so the math is always 'legal'." },
            { q: "Can I use this for my engineering homework?", a: "Yes! These tools are built to handle structural and statistical math that meets 2026 academic standards." }
        ]
    },
    'real-estate': {
        title: "Real Estate & Mortgage Economics",
        howToUse: "Enter your home's value, down payment, and expected interest rate. Our engine calculates your monthly 'PITI' (Principal, Interest, Taxes, and Insurance) to give you the most accurate 2026 home-buying budget.",
        whyItWorks: "Buying property is the largest financial move most people ever make. By calculating the all-in monthly cost before you shop, you avoid the 'house-poor' trap where your mortgage eats too much of your monthly income.",
        faq: [
            { q: "What credit score do I need for a mortgage?", a: "Minimum scores by loan type in 2026: FHA loan: 580 (3.5% down) or 500 (10% down); Conventional loan: 620 minimum; VA loan: 620 recommended (veterans only); Jumbo loan: 700-720 minimum. The difference between a 620 and 760 score on a $300,000 mortgage saves you roughly $200 per month." },
            { q: "How much down payment do I need to buy a house?", a: "Minimum down payments in 2026 range from 0% (VA/USDA) to 3% (Conventional) or 3.5% (FHA). Putting less than 20% down typically adds Private Mortgage Insurance (PMI) costing $100-$300 extra per month." },
            { q: "What is the monthly payment on a $400,000 mortgage?", a: "At current 2026 rates around 7%, a 30-year fixed payment is roughly $2,661 per month for principal and interest. Total costs including taxes and insurance are usually closer to $3,200." },
            { q: "What is a good mortgage rate right now?", a: "In 2026, rates between 6.5% and 7% are considered standard for excellent credit. Always compare the APR, which includes both the interest rate and lender fees, to see your true cost." },
            { q: "How much house can I afford?", a: "A common bank rule is the 28/36 rule: housing costs should stay under 28% of your gross income, and total debt under 36%. Our affordability calculator helps you find your specific safe buying zone." }
        ]
    },
    science: {
        title: "Scientific Principles & Unit Conversions",
        howToUse: "Select your input units and provide your measurements. Use the scientific notation toggles for very large or small numbers. The tool converts using standard international constants for 2026 laboratory accuracy.",
        whyItWorks: "Science is about precision. Whether you're a student balancing a chemical equation or a professional engineer checking the force of a moving object, using a dedicated calculator stops small rounding errors from ruining your work. We use the same constants and formulas used in modern research labs.",
        faq: [
            { q: "How accurate is the 'Scientific Notation'?", a: "Extremely. We follow the 2026 IEEE standards for math, which means we can handle incredibly tiny (like the weight of an atom) or massive numbers (like distances between stars) without losing precision." },
            { q: "Can I use this for my school projects?", a: "Yes. Our formulas are the exact same ones found in standard chemistry and physics textbooks. We've just made them faster and more precise for modern engineering and research." },
            { q: "What is the difference between 'Mass' and 'Weight'?", a: "In everyday life, we use them the same way, but in science, they're different. 'Mass' is how much stuff is in you (kilograms), and 'Weight' is how hard gravity is pulling on you (Newtons)." },
            { q: "Do the unit converters handle both Metric and US units?", a: "Yes! You can instantly switch between feet and meters, or pounds and grams, ensuring your projects work across the world." },
            { q: "Are the physical constants (like the Speed of Light) correct?", a: "Yes, we use the most recent 2026 'CODATA' measurements for all scientific and physical constants used in the engine." }
        ]
    },
    automotive: {
        title: "Automotive Engineering & Performance",
        howToUse: "Enter your vehicle's technical data—distance, fuel consumption, tire size, or engine specs. The calculator applies mechanical engineering principles to estimate performance and efficiency.",
        whyItWorks: "Cars are expensive machines where physics and finance intersect. From calculating how much 'real' power your engine makes to realizing how much your commute is actually costing you per mile, data helps you be a smarter owner and a better driver.",
        faq: [
            { q: "What is the 'True Cost' of owning a car?", a: "It's not just your car payment. It includes gas, insurance, maintenance, and—the big one—depreciation. For many new cars, the loss in value is actually more expensive than the gas you buy." },
            { q: "How can I actually improve my gas mileage?", a: "The biggest factors you can control are your speed and your tire pressure. Driving 5-10 mph slower and keeping your tires properly inflated can save you hundreds of dollars a year in fuel." },
            { q: "How accurate are the 'Horsepower' estimates?", a: "They are based on standard automotive physics. While a real 'dyno' is the gold standard, our formulas give you a very accurate ballpark figure based on your torque and RPM." },
            { q: "Why should I care about 'Depreciation'?", a: "Because it's money leaving your pocket every month. Knowing how fast your car loses value helps you decide the perfect time to sell before the value drops through the floor." },
            { q: "How much should I set aside for car maintenance?", a: "A safe bet is to save roughly 10 cents for every mile you drive. If you drive 10,000 miles a year, having $1,000 set aside will cover most tires, brakes, and oil changes." }
        ]
    },
    construction: {
        title: "DIY & Contractor Material Estimates",
        howToUse: "Enter the size of your project—length, width, and depth. Select your material (like concrete, wood, or mulch). We'll tell you exactly how much to buy so you don't overspend or run out in the middle of a job.",
        whyItWorks: "Construction projects always run into 'waste'—boards get cut wrong or concrete gets spilled. Our tools calculate the 'theoretical' amount you need and then suggest a standard 10% safety buffer, which is exactly how professional contractors bid on jobs.",
        faq: [
            { q: "How much 'waste' is normal in a project?", a: "Professionals usually add 10% extra. If you have a lot of weird angles or a very complex shape, you might want to bump that up to 15% to be safe." },
            { q: "Can a calculator replace my contractor's estimate?", a: "This is a perfect starting point for your budget, but always have your actual builder verify the final numbers before you buy $10,000 worth of lumber." },
            { q: "Do these tools handle both yards and feet?", a: "Yes. We automatically convert everything so you can measure in feet but buy your concrete in cubic yards, just like the delivery trucks expect." },
            { q: "How do I calculate for circular patios or odd shapes?", a: "A great pro tip is to 'break it into squares.' Calculate each small square and add them together. We also have dedicated tools for circles and triangles!" }
        ]
    },
    insurance: {
        title: "Insurance Estimates & Risk Analysis",
        howToUse: "Tell us about what you're insuring (like your home, car, or life). We'll help you see how different coverage levels and deductibles change your monthly bill and your 'true' financial risk.",
        whyItWorks: "Insurance is basically a bet against 'what if.' Our tools help you see the math behind that bet. By looking at your deductible vs. your monthly payment, you can decide if it's smarter to pay a little more now or a lot more later if something goes wrong.",
        faq: [
            { q: "What is a 'Deductible' exactly?", a: "It's the amount of money you have to pay yourself before the insurance company pays a dime. If you have a $1,000 deductible and a $3,000 repair, you pay $1,000 and they pay $2,000." },
            { q: "Is a high deductible always a bad thing?", a: "Not necessarily. Higher deductibles usually mean lower monthly payments. If you have an emergency fund saved up, a higher deductible can save you thousands of dollars over a few years." },
            { q: "Does this give me a real insurance quote?", a: "No. Only a licensed insurance agent can give you a binding quote. These tools help you understand the *math* they use so you can shop around with confidence." },
            { q: "How much life insurance do I actually need?", a: "A common expert tip is '10 times your annual salary.' This ensures your family is taken care of if you're no longer there to provide for them." }
        ]
    },
    everyday: {
        title: "Smart Life & Savings Tools",
        howToUse: "Input your everyday numbers—like prices at the grocery store, time zone differences, or sales tax. We turn those quick questions into instant answers that save you time and money.",
        whyItWorks: "Success in life is often about small efficiencies. Being able to instantly see which cereal box is *actually* cheaper (unit price) or knowing exactly how much you're tip should be helps you keep your budget on track without the stress of doing head-math.",
        faq: [
            { q: "How do I know which grocery item is the better deal?", a: "Look at the 'Unit Price.' If a 10oz bag is $5 ($0.50/oz) and a 16oz bag is $7 ($0.43/oz), the 16oz bag is the better deal. Our tools do this math for you in seconds." },
            { q: "What's the best way to calculate a tip?", a: "A quick pro tip is to move the decimal point over one spot to the left (that's 10%) and then double it (that's 20%). Our tip calculator handles the tax and split-bills perfectly too!" },
            { q: "Are these tools accurate for 2026 sales tax?", a: "Our tools use the standard percentage you provide. Since tax rates change by city and state, always check your local rate first!" }
        ]
    },
    personal: {
        title: "Personal Life Metrics",
        howToUse: "Provide your birth date, names, or specific life milestones. Our tools use chronological calculations and established algorithms to provide unique insights into your personal history and future.",
        whyItWorks: "Personal tracking and compatibility tools help contextualize our lives within time and interpersonal connections. By applying exact date math and traditional logic systems, we quantify the intangible parts of our daily existence.",
        faq: [
            { q: "How is chronological age calculated?", a: "We calculate the exact time elapsed between your birth date and the current moment, accounting for leap years and month lengths." },
            { q: "Is compatibility math based on science?", a: "Compatibility tools are based on traditional systems and name-matching algorithms intended for entertainment and personal reflection." }
        ]
    },
    roofing: {
        title: "Structural Roofing & Pitch Analysis",
        howToUse: "Input the base dimensions and the desired pitch or slope of your roof. The engine calculates the total area, ridge lengths, and material requirements (like bundles of shingles or metal panels).",
        whyItWorks: "Roofing requires precise geometry to ensure proper drainage and structural integrity. By using trigonometric functions on the slope and plan area, we determine the exact 'unfolded' surface area of your roof, preventing costly material errors.",
        faq: [
            { q: "What is 'Roof Pitch'?", a: "Pitch is the vertical rise for every 12 inches of horizontal run. A '6/12 pitch' means the roof rises 6 inches for every foot of run." },
            { q: "Should I include dormers in my calculations?", a: "Yes, add the surface area of dormers separately or ensure they are accounted for in your total square footage inputs." }
        ]
    },
    hydraulics: {
        title: "Fluid Dynamics & Hydraulics",
        howToUse: "Provide pipe dimensions, flow rates, and pressure data. Our hydraulics engine applies physics laws to calculate volumes, pressures, and flow speeds for liquids.",
        whyItWorks: "Managing fluids requires understanding the relationship between pressure, volume, and gravity. These calculators use standard formulas (like the Poiseuille law or tank volume geometry) to ensure your plumbing or industrial projects are sized correctly.",
        faq: [
            { q: "How is tank volume calculated?", a: "Volume is determined by the geometric shape (cylindrical, rectangular, etc.) and its vertical or horizontal orientation." },
            { q: "What does GPM mean?", a: "Gallons Per Minute—a standard measure of flow rate in plumbing and industrial systems." }
        ]
    },
    bmi: {
        title: "The Health Snapshot: BMI Math",
        howToUse: "Enter your height and weight. For the best accuracy in 2026, we suggest using the 'Adult' version for anyone over 20. If you are extremely athletic, remember that BMI doesn't see your muscle mass, only your total weight.",
        whyItWorks: "BMI (Body Mass Index) is a standardized way for health professionals to see if a person's weight is in a healthy range for their height. It's a key screening tool used globally because it's simple, non-invasive, and provides a clear baseline for further health discussions.",
        faq: [
            { q: "What is my BMI?", a: "Your Body Mass Index (BMI) is a numeric value of your weight in relation to your height. It's used as a quick indicator to see if your body weight is healthy, underweight, or overweight." },
            { q: "What is a healthy BMI for my age?", a: "For most adults, the ideal BMI is between 18.5 and 24.9. As people age, especially over 65, studies suggest a slightly higher range (up to 27) might be healthier for overall longevity." },
            { q: "How do I calculate my BMI?", a: "To calculate it yourself, divide your weight in kilograms by your height in meters squared. Or, just enter your height and weight into our calculator and we'll do the math for you!" },
            { q: "Is BMI accurate for everyone?", a: "BMI is a reliable 'snapshot' for most people, but it can be misleading for athletes with high muscle mass or elderly people who have lost muscle. It measures weight, not actual body fat percentage." },
            { q: "What is the BMI formula for women?", a: "The formula is the same for men and women: Weight / Height². While the math is identical, women generally have slightly more body fat than men at the same BMI level." }
        ]
    },
    mortgage: {
        title: "Mortgage Math & Home Finance",
        howToUse: "Enter the home price, your down payment, the interest rate, and the loan term (usually 15 or 30 years). Don't forget to add your annual property taxes and insurance to see your true monthly bank draft.",
        whyItWorks: "A mortgage is a 'declining balance' loan. Every month, part of your payment covers the interest, and the rest goes toward the house (the principal). Our engine uses standard amortization math to show you exactly how much you're paying in total over the life of the loan.",
        faq: [
            { q: "What credit score do I need for a mortgage?", a: "In 2026, minimum scores vary by loan type: FHA loans typically require 580 (for 3.5% down), while Conventional loans usually start at 620. VA loans (for veterans) often recommend a 620 minimum. Improving your score from 620 to 760 can save you roughly $200 per month on a $300k mortgage." },
            { q: "How much down payment do I need to buy a house?", a: "Minimum options in 2026 include 3% for First-Time Buyer Conventional loans, 3.5% for FHA, and 0% for VA (military) or USDA (rural) loans. Putting less than 20% down usually adds PMI insurance, costing $100-$300 extra per month." },
            { q: "What is the monthly payment on a $400,000 mortgage?", a: "At 2026 rates around 7%, a 30-year fixed principal and interest payment is approximately $2,661. After adding estimated property taxes ($400) and insurance ($150), your total estimated monthly payment would be roughly $3,211." },
            { q: "What is the monthly payment on a $500,000 mortgage?", a: "For a $500k loan at 7% interest, the 30-year fixed payment is $3,327 for principal/interest. Including average 2026 taxes and insurance, your total monthly bank draft will be approximately $3,877 to $4,894 depending on your local tax rate." },
            { q: "Is it better to get a 15 or 30 year mortgage?", a: "A 30-year mortgage offers lower monthly payments and more flexibility. A 15-year mortgage has a higher payment but saves you massive amounts in interest—often over $230,000 on a $300k home—and allows you to be debt-free in half the time." },
            { q: "What happens if I pay an extra $200 a month on my mortgage?", a: "On a $300,000 mortgage at 7%, adding $200 extra per month allows you to pay off the loan 5 years and 8 months early, saving you roughly $63,000 in total interest. Even $100 extra per month can shave 3 years off your term." },
            { q: "Should I refinance my mortgage in 2026?", a: "Refinancing makes sense if current rates are at least 1% lower than your current rate, or if your credit score has improved enough to secure a better deal. A good rule is to calculate your 'break-even' point: divide your closing costs by your monthly savings to see how many months it takes to profit." }
        ]
    },
    'auto-loan': {
        title: "Auto Loan & Car Finance Analytics",
        howToUse: "Enter the car price, any trade-in value, and the interest rate. We recommend checking 48, 60, and 72-month terms to see how much extra interest you pay for the 'smaller' monthly payment.",
        whyItWorks: "Car loans compound interest differently than mortgages. By calculating your monthly payment across different terms, you can see the 'total cost to own.' A lower monthly payment on a 7-year loan often costs you thousands more than a slightly higher payment on a 5-year loan.",
        faq: [
            { q: "What is my car payment on a $30k loan?", a: "For a $30,000 loan at 6% interest for 60 months (5 years), your monthly payment would be about $580. Over the life of the loan, you'll pay about $4,800 in total interest." },
            { q: "How much car can I afford?", a: "A good rule of thumb is the 20/4/10 rule: put down 20%, finance for no more than 4 years, and keep your total car costs (payment + insurance) under 10% of your gross income." },
            { q: "What is a good car loan interest rate?", a: "For buyers with excellent credit, 4-6% is considered a strong rate in 2026. If you're being quoted over 10%, it's worth shopping around or working on your credit for a few months." },
            { q: "How do I calculate auto loan payments?", a: "Auto loans use a simple interest formula but are amortized. The formula is M = P [ r(1 + r)^n ] / [ (1 + r)^n – 1 ], where r is your monthly interest rate." },
            { q: "Is a 72-month car loan a bad idea?", a: "While it lowers your monthly payment, a 72-month (6-year) loan often keeps you 'upside down' (owing more than the car is worth) for years and significantly increases the total interest you pay." }
        ]
    },
    masonry: {
        title: "Masonry & Hardscape material Math",
        howToUse: "Enter the length and height of your wall or the surface area of your patio. Select your block or brick sizes. The tool will calculate the exact count and the amount of mortar or sand required.",
        whyItWorks: "Brick, block, and stone work relies on repetitive modular geometry. By calculating the area of a single unit (plus joints) versus the total project area, we provide a precise count that minimizes waste for heavy masonry materials.",
        faq: [
            { q: "Do I need to account for mortar joints?", a: "Yes, our masonry tools include a standard 3/8\" or 1/2\" mortar joint in the unit size to ensure an accurate count." },
            { q: "How much mortar do I need per 100 bricks?", a: "Generally, 100 standard bricks require about 5 to 7 bags of pre-mixed mortar, depending on joint thickness." }
        ]
    },
    "home-improvement": {
        title: "Home Renovation & HVAC Planning",
        howToUse: "Input room dimensions for flooring or paint, or specify windows and insulation types for HVAC sizing. The calculators apply material coverage and thermal load formulas to your home project.",
        whyItWorks: "Efficient home improvement balances comfort with cost. Understanding the BTU requirements for a room or the square footage of a floor allows you to purchase materials precisely and select appliances that won't overwork or waste energy.",
        faq: [
            { q: "How do I calculate paint coverage?", a: "Divide the total wall surface area by the 'feet per gallon' rating on the paint (usually 350-400 sq ft)." },
            { q: "What size AC do I need?", a: "Heating and cooling are measured in BTUs or Tons. 20 BTUs per square foot of living space is a common rule of thumb." }
        ]
    },
    medical: {
        title: "Medical Informatics & Clinical Indicators",
        howToUse: "Enter patient markers like glucose levels, lipid profiles, or breathing patterns. The tools apply clinical algorithms standardized by organizations like the ADA, AHA, or CDC to provide situational assessments.",
        whyItWorks: "Clinical decision support tools assist in interpreting biological data. By standardizing blood sugar conversions, heart risk ratios, and sleep apnea scores, we help bridge the gap between laboratory results and actionable health insights.",
        faq: [
            { q: "Are these results a medical diagnosis?", a: "No. These tools are for educational screening. All results must be reviewed by a licensed healthcare provider." },
            { q: "What is A1c to EAG?", a: "It converts your 3-month average blood sugar percentage (A1c) into an Estimated Average Glucose (mG/dL) for daily tracking comparison." }
        ]
    },
    military: {
        title: "Military Readiness & Recruitment Standards",
        howToUse: "Select your branch and enter your physical test totals (pushups, runs, etc.) or body measurements. The calculator applies current branch-specific grading scales (like ACFT or Navy PRT).",
        whyItWorks: "Physical readiness is a core pillar of military service. These tools apply the exact algebraic grading tables and body-fat tape formulas used by military personnel to ensure compliance with service standards.",
        faq: [
            { q: "Do these reflect the 2024 standards?", a: "Yes, we prioritize the latest available grading tables for the ACFT and other branch-specific physical tests." },
            { q: "What is the 'Tape Test'?", a: "The standard military method for estimating body fat percentage using circumference measurements of the neck, waist, and hips." }
        ]
    },
    business: {
        title: "Corporate Finance & Marketing Analytics",
        howToUse: "Input operational data such as gross revenue, variable costs, ad spend, or employee counts. The engine calculates key performance indicators (KPIs) like ROI, ROAS, and CAC.",
        whyItWorks: "Business success is driven by unit economics. By analyzing the relationship between acquisition costs and customer lifetime value, or fixed versus variable costs, these tools help optimize profitability and operational efficiency.",
        faq: [
            { q: "What is CAC?", a: "Customer Acquisition Cost—the total expense of sales and marketing efforts divided by the number of new customers acquired." },
            { q: "How do I calculate Break-Even?", a: "Divide your total fixed costs by the contribution margin per unit (Price minus Variable Cost)." }
        ]
    },
    sales: {
        title: "Retail Logic & Sales Strategy",
        howToUse: "Enter product costs, list prices, and discount percentages. The tool calculates your final price, markups, and profit margins, accounting for stacked discounts if needed.",
        whyItWorks: "Retail mathematics allows for strategic pricing and smart shopping. Understanding the math of percentage reductions and margin-on-cost ensures that business owners remain profitable and shoppers find the best value.",
        faq: [
            { q: "Markup vs. Margin: what's the difference?", a: "Markup is the percentage added to cost to reach a selling price. Margin is the percentage of the selling price that is profit." },
            { q: "Can I stack discounts here?", a: "Yes, our multi-discount tools apply reductions sequentially to show the true final price." }
        ]
    },
    engineering: {
        title: "Mechanical & Industrial Engineering",
        howToUse: "Provide mechanical specs like gear counts, spring dimensions, or flow rates. The engine applies classic physics and engineering laws like Hooke's Law or Reynolds Number math.",
        whyItWorks: "Engineering design requires precision at the component level. By simulating forces, tolerances, and throughputs using verified CAD-level math, we help technicians and students verify structural and mechanical integrity.",
        faq: [
            { q: "What is a Reynolds Number?", a: "A dimensionless value used in fluid mechanics to predict flow patterns, distinguishing between laminar and turbulent flow." },
            { q: "Are these results suitable for manufacturing?", a: "These are for early-stage estimation and verification. Final designs should be validated in professional engineering software." }
        ]
    },
    sports: {
        title: "Athletic Performance & Statistics",
        howToUse: "Enter game stats (hits, at-bats), race times, or strength totals (one-rep max). The engine calculates performance metrics like OBP, pace splits, or Wilks scores.",
        whyItWorks: "Sports analytics turns performance into progress. Whether using sabermetrics in baseball or metabolic equivalents (METs) for fitness, quantifying effort allows athletes to track improvement and set data-backed goals.",
        faq: [
            { q: "What is a 1-Rep Max?", a: "The maximum amount of weight you can lift for a single repetition, used as a benchmark for strength levels." },
            { q: "How are race split times calculated?", a: "By dividing the total distance by your goal time, we determine the exact pace required for every mile or kilometer." }
        ]
    },
    environment: {
        title: "Sustainability & Ecological Impact",
        howToUse: "Input your consumption data like kilowatt hours, miles driven, or waste volume. The tool uses standard emission factors to estimate your carbon or water footprint.",
        whyItWorks: "Environmental awareness starts with measurement. By translating daily habits into ecological units like CO2-equivalents or gallons of water, we help users visualize their impact and plan for sustainable lifestyle changes.",
        faq: [
            { q: "What is a Carbon Footprint?", a: "The total amount of greenhouse gases (including carbon dioxide and methane) produced by our actions." },
            { q: "How can I lower my Solar ROI?", a: "ROI is improved by maximizing self-consumption of generated power and utilizing local tax incentives or rebates." }
        ]
    },
    culinary: {
        title: "Culinary Science & Kitchen Math",
        howToUse: "Enter ingredient weights or volumes and your desired serving count or hydration level. The tool scales ratios, such as Baker's Percentages, for consistent cooking results.",
        whyItWorks: "Great cooking is as much about ratios as it is about taste. By using weight-based scaling rather than volume-only measures, chefs can ensure the same results every time, regardless of the batch size.",
        faq: [
            { q: "Why use weight instead of volume?", a: "Weight is far more accurate, especially for ingredients like flour which can be packed differently in a cup." },
            { q: "What is Baker's Percentage?", a: "A notation method where the mass of each ingredient is expressed as a percentage of the total flour weight (which is always 100%)." }
        ]
    },
    academic: {
        title: "Academic Metrics & Study Optimization",
        howToUse: "Input your grades, word counts, or reading speed. The engine calculates GPAs, reading times, or the scores needed on final exams to reach your target.",
        whyItWorks: "Success in education thrives on objective benchmarks. Whether estimating study workloads or tracking GPA trends, quantifying academic data helps students manage their time and prioritize their efforts effectively.",
        faq: [
            { q: "How is weighted GPA calculated?", a: "Weighted GPA gives more 'points' to honors or AP classes (e.g., 5.0 instead of 4.0), reflecting the difficulty of the curriculum." },
            { q: "What is a standard reading speed?", a: "The average adult reads at about 200-250 words per minute. Our tools allow you to adjust this based on your personal pace." }
        ]
    },
    hobbies: {
        title: "Creative Pursuits & Maker Math",
        howToUse: "Input technical parameters such as photography aperture, 3D printing filament weight, or RPG experience points. The engine applies specific domain logic to your hobby.",
        whyItWorks: "Every hobby has a hidden layer of math. From the physics of light in a lens to the cost-per-gram of a 3D model, understanding the numbers allows creators to focus on their art while maintaining technical precision.",
        faq: [
            { q: "How is 3D print cost determined?", a: "By multiplying the weight of material used (plus electricity and failure allowance) by your cost per roll or kilowatt hour." },
            { q: "What is Depth of Field?", a: "The distance between the nearest and furthest objects in an image that appear acceptably sharp." }
        ]
    },
    tech: {
        title: "IT Infrastructure & Digital Math",
        howToUse: "Provide network addresses, data sizes, or code strings. Our tech engine handles subnetting, byte conversions, and security hashing calculations.",
        whyItWorks: "Computing is built on specific scales and logical structures. From binary conversions to bandwidth estimations, these tools help developers and administrators manage digital environments with clinical accuracy.",
        faq: [
            { q: "What is the difference between bits and bytes?", a: "A byte is 8 bits. Network speeds are usually measured in bits (Mbps), while file sizes are measured in bytes (MB)." },
            { q: "What is a Subnet Mask?", a: "A 32-bit number used to divide an IP address into network and host components for routing." }
        ]
    },
    lifestyle: {
        title: "Lifestyle Logistics & Life Milestones",
        howToUse: "Enter travel data, household expenses, or habit tracking dates. The algorithms organize these data points into clear timelines or financial splits.",
        whyItWorks: "Modern living requires balancing time, space, and shared resources. By quantifying habits or dividing roommate expenses mathematically, these tools reduce interpersonal friction and help track personal growth milestones.",
        faq: [
            { q: "How should we split roommate bills?", a: "Common methods include equal splits, income-weighted splits, or per-square-foot ratios for bedroom size." },
            { q: "What is a habit streak?", a: "A measure of consistency defined by the number of consecutive days you have performed a specific task or behavior." }
        ]
    },
    biology: {
        title: "Bio-Molecular Math & Lab Protocols",
        howToUse: "Enter molecular samples, primer sequences, or cell counts. The engine calculates PCR temperatures, dilution factors, and genetic frequencies.",
        whyItWorks: "Laboratory work requires high-precision mass and volume management. By applying standard biotech formulas for things like C1V1 dilutions or Hardy-Weinberg equilibrium, we help researchers minimize experimental error.",
        faq: [
            { q: "What is C1V1?", a: "The standard formula for dilution: Initial Concentration x Initial Volume = Final Concentration x Final Volume." },
            { q: "Why is annealing temperature important?", a: "It determines the specificity of DNA primer binding in PCR; too high or too low can result in no product or incorrect amplification." }
        ]
    },
    pets: {
        title: "Veterinary Science & Pet Care",
        howToUse: "Input your pet's weight, age, or species-specific markers. The tools apply metabolic formulas (like RER for dogs) or gestation timelines for animal health management.",
        whyItWorks: "Pet care is increasingly data-driven. By calculating caloric needs based on lifecycle stage or tracking livestock gestation, owners can provide scientifically-backed care that promotes longevity and health for their animals.",
        faq: [
            { q: "How much should I feed my dog?", a: "Feeding depends on Restricted Energy Requirements (RER), which considers weight, activity level, and whether the animal is neutered." },
            { q: "How long is a dog's pregnancy?", a: "The average gestation period for dogs is about 63 days from the time of ovulation." }
        ]
    },
    gardening: {
        title: "Horticultural Math & Agriculture",
        howToUse: "Enter garden bed dimensions, plant spacings, or fertilizer NPK ratios. The tool calculates soil volumes, plant counts, and nutrient requirements.",
        whyItWorks: "Successful gardening relies on resource optimization. Understanding the volume of soil needed for a raised bed or the correct spacing to prevent plant competition ensures a healthy, high-yield harvest for both home and farm.",
        faq: [
            { q: "How do I calculate soil volume?", a: "Multiply length x width x depth (in feet) and divide by 27 to find the total cubic yards of soil needed." },
            { q: "What does NPK stand for?", a: "Nitrogen (N), Phosphorus (P), and Potassium (K)—the three primary nutrients found in commercial fertilizers." }
        ]
    },
    "time-date": {
        title: "Chronological Precision & Timekeeping",
        howToUse: "Provide start and end dates/times, or enter a duration to add or subtract. Our engine accounts for complex calendar rules like leap years and month lengths.",
        whyItWorks: "Measuring time correctly is essential for both legacy planning and daily organization. By applying astronomical and calendar-based logic, we help users visualize spans, meet deadlines, and coordinate across global zones.",
        faq: [
            { q: "How many business days are in a year?", a: "Typically around 260-262, depending on how specific holidays fall and whether it is a leap year." },
            { q: "Does the age calculator include leap years?", a: "Yes, our algorithm accounts for every leap day to ensure to-the-day accuracy since your birth." }
        ]
    },
    geography: {
        title: "Geospatial Analysis & Cartography",
        howToUse: "Input GPS coordinates in decimal or DMS format, or provide map scales. The tool converts between systems or calculates real-world travel distances.",
        whyItWorks: "Mapping requires translating the earth's curvature into flat coordinates or scales. By using standard projection math and unit conversions, we provide the precision needed for navigation, surveying, and GIS study.",
        faq: [
            { q: "What is DMS?", a: "Degrees, Minutes, and Seconds—a traditional way of expressing geographic coordinates for navigation." },
            { q: "How does map scale work?", a: "A scale like 1:50,000 means that one unit of measurement on the map represents 50,000 of the same units in the real world." }
        ]
    },
    fashion: {
        title: "Textile Math & Fashion Engineering",
        howToUse: "Enter body measurements or textile specs (stich count, fabric width). The engine calculates yardage requirements, international sizes, and pattern geometry.",
        whyItWorks: "Fashion is a marriage of art and geometry. Whether calculating the radius for a circle skirt or translating shoe sizes across continents, precision measurements ensure a perfect fit and professional-grade construction.",
        faq: [
            { q: "How do I measure for a ring?", a: "Measure the inner circumference or diameter of a well-fitting ring in millimeters and compare to international charts." },
            { q: "What is fabric 'fullness'?", a: "In drapery and skirts, fullness describes how many times the finished width is compared to the flat fabric width (usually 2x or 3x)." }
        ]
    },
    chemistry: {
        title: "Chemical Analysis & Stoichiometry",
        howToUse: "Enter molecular formulas or reaction components. Our chemistry engine calculates molar masses, balances equations, and handles complex thermodynamic states.",
        whyItWorks: "Molecular science is strictly quantitative. By applying the laws of conservation of mass and thermodynamics, we provide the backbone for theoretical study and practical laboratory preparation.",
        faq: [
            { q: "What is a Mole?", a: "A standard scientific unit for measuring large quantities of very small entities such as atoms, molecules, or particles (6.022 x 10^23)." },
            { q: "Why is Stoichiometry useful?", a: "It allows you to calculate the exact amount of reactants needed to produce a specific amount of product with zero waste." }
        ]
    },
    entertainment: {
        title: "Pop Culture Metrics & Fun Analysis",
        howToUse: "Provide media data like binge lists, fiction currencies, or decision points. The tool applies algorithmic fun to analyze your entertainment habits.",
        whyItWorks: "Quantifying fiction adds a new layer to our fandoms. From calculating the real-world value of wizarding currency to estimating how many years you've spent binge-watching, we turn popular data into personal insights.",
        faq: [
            { q: "How is 'watch time' calculated?", a: "We multiply the total number of episodes in a series by the average runtime (excluding commercials) to find the total life span of the show." },
            { q: "Is the Harry Potter currency converter accurate?", a: "It's based on the established canon rates (17 Sickles to a Galleon, 29 Knuts to a Sickle) adjusted for inflation-estimated USD values." }
        ]
    },
    converters: {
        title: "Unit Transformation & Scaling",
        howToUse: "Select your input and output systems. Provide your value and use the precision sliders if needed. Our engine converts across thousands of potential unit pairings.",
        whyItWorks: "Global systems use varied scales (Metric vs. Imperial, Technical vs. Common). Standardization tools use exact conversion coefficients to ensure that data remains consistent across different regions and industries.",
        faq: [
            { q: "Are these SI-standard conversions?", a: "Yes, we prioritize international standards (NIST) for all physical and engineering unit transformations." },
            { q: "How performant are currency conversions?", a: "Currency tools rely on mid-market exchange rates that are periodically updated to reflect global markets." }
        ]
    },
    "mental-health": {
        title: "Psychological Analytics & Self-Reflection",
        howToUse: "Input frequency markers for specific feelings or sleep patterns. The tool uses standard psychological screening models like the PHQ-9 or GAD-7 to provide objective markers.",
        whyItWorks: "Mental health tracking helps bridge the gap between subjective experience and clinical observation. By quantifying emotional and behavioral trends, users can have more productive conversations with their therapists and healthcare providers.",
        faq: [
            { q: "Is this a clinical diagnosis?", a: "No. These are screening indicators. Only a licensed mental health professional can provide a diagnosis." },
            { q: "What is a GAD-7 score?", a: "A validated tool used to screen for and measure the severity of generalized anxiety disorder." }
        ]
    },
    gaming: {
        title: "Interactive Gaming & Performance Math",
        howToUse: "Enter game settings such as DPI, sensitivity, frame rates, or win/loss records. The engine calculates ELO gains, sensitivity conversions, or frame latency.",
        whyItWorks: "Competitive gaming relies on consistent technical settings and progress tracking. By using ELO rating systems and 1:1 mouse movement math, we help players optimize their hardware and understand their competitive trajectory.",
        faq: [
            { q: "What is ELO?", a: "A rating system used for calculating the relative skill levels of players in zero-sum games like Chess or Esports." },
            { q: "How does sensitivity conversion work?", a: "It calculates the exact 'real-world' distance (cm/360) your mouse travels to ensure your aim feels consistent across different games." }
        ]
    },
    parenting: {
        title: "Child Development & Parenting Logistics",
        howToUse: "Enter birth dates, percentiles, or feeding volumes. The engine tracks developmental milestones against WHO or CDC growth charts.",
        whyItWorks: "Pediatric tracking provides peace of mind through data. By comparing weight, height, and head circumference to peer averages, parents can monitor their child's unique growth curve with clinical-grade context.",
        faq: [
            { q: "What does '50th percentile' mean?", a: "It means that compared to a group of 100 children of the same age and gender, 50 are larger and 50 are smaller." },
            { q: "How is a due date calculated?", a: "Most calculators add 280 days (40 weeks) to the first day of your last menstrual period (LMP) using Naegele's rule." }
        ]
    },
    legal: {
        title: "Legal Calculations & Regulatory Timelines",
        howToUse: "Input dates, settlement amounts, or fee structures. The tool calculates statute of limitations, interest on awards, or attorney fee splits based on standard legal arithmetic.",
        whyItWorks: "Legal procedures are governed by strict timelines and financial formulas. Providing accurate date-math and contingency fee breakdowns helps individuals understand their potential outcomes and obligations before entering formal arbitration.",
        faq: [
            { q: "What is Pre-judgment Interest?", a: "Interest that accrues on the amount of a legal judgment from the time the injury occurred until the date of the court's award." },
            { q: "How is a statute of limitations calculated?", a: "It is the maximum time after an event within which legal proceedings may be initiated, often calculated using exact date offsets." }
        ]
    },
    crypto: {
        title: "Cryptocurrency & Blockchain Economics",
        howToUse: "Enter token amounts, entry prices, and guestimated network fees (Gas). The engine calculates profit/loss, dollar-cost averaging (DCA), and hardware hashing rates.",
        whyItWorks: "Blockchain investment requires understanding volatility and transactional friction. By calculating the impact of fees versus price movement and simulating DCA strategies, investors can manage their digital assets with greater mathematical rigor.",
        faq: [
            { q: "What is DCA?", a: "Dollar-Cost Averaging—investing a fixed amount of money into a particular asset at regular intervals, regardless of price." },
            { q: "How is 'Gas' calculated?", a: "Gas refers to the unit that measures the amount of computational effort required to execute specific operations on a blockchain network." }
        ]
    },
    freelance: {
        title: "Freelance Economy & Gig Analytics",
        howToUse: "Input your hourly rate, billable hours, tax reserves, and platform fees. The tool calculates your true take-home pay and suggests optimal project pricing.",
        whyItWorks: "Freelancing requires acting as your own CFO. By accounting for self-employment tax, unbillable time, and overhead, these tools help independent workers set rates that ensure long-term sustainability and profit.",
        faq: [
            { q: "How much should I set aside for taxes?", a: "A common rule of thumb is 25-30% of gross income, but this varies significantly based on your location and total annual earnings." },
            { q: "What is Billable vs. Non-Billable time?", a: "Billable time is work performed directly for a client. Non-billable time includes admin, marketing, and learning that you must fund through your billable rate." }
        ]
    },
    "self-improvement": {
        title: "Personal Development & Growth Tracking",
        howToUse: "Enter your reading times, habit frequency, or goal progress percentages. The engine visualizes your trajectory and estimates time-to-mastery.",
        whyItWorks: "Self-improvement is an iterative process. By measuring incremental gains and applying the '1% better every day' compounding principle, users can turn abstract goals into concrete, data-backed habits.",
        faq: [
            { q: "What is the 10,000-hour rule?", a: "The idea that it takes approximately 10,000 hours of deliberate practice to master a complex skill." },
            { q: "How do I track progress on non-binary goals?", a: "Use a percentage-based scale (0-100) to mark subjective progress toward a major milestone." }
        ]
    },
    logistics: {
        title: "Supply Chain & Logistics Management",
        howToUse: "Enter cargo dimensions, weights, and distances. The engine calculates volumetric weight, shipping costs, and estimated delivery windows.",
        whyItWorks: "Logistics efficiency is built on the optimization of space and time. By calculating pallet layouts and freight classes using industry-standard volumetric formulas, we help businesses reduce shipping waste and improve delivery reliability.",
        faq: [
            { q: "What is Volumetric Weight?", a: "A pricing technique for commercial freight transport which uses a fixed factor to calculate 'weight' from the volume of a package." },
            { q: "How is CBM calculated?", a: "Cubic Meters—Length x Width x Height (in meters). It is the standard measure of volume in international shipping." }
        ]
    },
    "home-tech": {
        title: "Smart Home & IT Optimization",
        howToUse: "Input device power ratings, Wi-Fi signal strengths, or storage capacities. The engine calculates energy costs, network throughputs, and backup requirements.",
        whyItWorks: "The modern home is a mini-datacenter. Understanding the power consumption of 'always-on' smart devices and the bandwidth needs of 4K streaming ensures your home infrastructure is both efficient and capable.",
        faq: [
            { q: "How much data does 4K streaming use?", a: "Approximately 7GB to 15GB per hour, depending on the bit-rate and compression used by the service." },
            { q: "What is 'Phantom Power'?", a: "The electricity consumed by electronic devices while they are switched off or in standby mode." }
        ]
    },
    "food-science": {
        title: "Nutrition Science & Food Chemistry",
        howToUse: "Enter ingredient weights and nutritional density data. The tool calculates macro splits, glycemic loads, and fermentation timelines.",
        whyItWorks: "Food science applies chemical principles to our diet. By calculating the ratio of acidity to sugar in pickling or the precise macro-nutrient balance of a meal, we help users understand the biological impact of what they eat.",
        faq: [
            { q: "What is Glycemic Load?", a: "A measure that takes into account the amount of carbohydrate in a portion of food together with how quickly it raises blood glucose levels." },
            { q: "How is a macro split determined?", a: "Based on your total daily calorie goal and the percentage of those calories coming from Protein, Fats, and Carbs." }
        ]
    },
    "ancient-math": {
        title: "Historical Math & Ancient Systems",
        howToUse: "Input modern decimals to convert to Roman numerals, Mayan vigesimal, or Abacus positions. The engine applies the logic of historical civilizations.",
        whyItWorks: "Mathematics has a rich cultural history. By exploring non-base-10 systems and ancient geometry, users can gain a deeper appreciation for how different cultures solved the universal problems of counting and measuring.",
        faq: [
            { q: "Why did the Mayans use Base-20?", a: "Likely because it accounted for both fingers and toes on a human body, creating a complete biological counting system." },
            { q: "Are Roman numerals still used in math?", a: "Rarely for calculation, but they remain essential for outlines, clock faces, and historical dating systems." }
        ]
    },
    space: {
        title: "Celestial Mechanics & Astronomy",
        howToUse: "Enter orbital data, planet masses, or distances in Light Years. The engine applies Kepler's Laws and General Relativity to calculate cosmic events.",
        whyItWorks: "Space is governed by the laws of physics on a massive scale. By calculating orbital periods and gravitational time dilation, we help enthusiasts explore the mechanics of our solar system and beyond with scientific accuracy.",
        faq: [
            { q: "What is an AU?", a: "Astronomical Unit—the average distance from the Earth to the Sun, approximately 93 million miles." },
            { q: "How is Light Year distance calculated?", a: "The distance light travels in a vacuum in one Earth year, about 5.88 trillion miles." }
        ]
    },
    "intl-travel": {
        title: "International Travel & Coordination",
        howToUse: "Input flight times, visa durations, and budget estimates in local and foreign currencies. The tool calculates real travel costs and time zone offsets.",
        whyItWorks: "Cross-border logistics involve complex variables. Coordinating visa expiry dates against travel itineraries and managing currency fluctuations ensures a smooth, stress-free international experience.",
        faq: [
            { q: "How is 'Jet Lag' time calculated?", a: "A common rule of thumb is that it takes one day to recover for every time zone crossed." },
            { q: "What should I include in a travel budget?", a: "Account for fixed costs (flights, hotels) and variable costs (food, local transit) plus a 15% 'contingency fund' for emergencies." }
        ]
    },
    "small-biz": {
        title: "Small Business Operations & Growth",
        howToUse: "Input staff costs, inventory turnover, and marketing ROI. The engine calculates burn rates and provides projections for payroll and scaling.",
        whyItWorks: "Small business management is the art of cash flow. By calculating the cost-of-goods-sold (COGS) and understanding your runway, owners can make informed decisions about hiring, inventory, and expansion.",
        faq: [
            { q: "What is 'Runway'?", a: "The amount of time a company can continue to operate before it runs out of money, calculated as total cash divided by monthly burn rate." },
            { q: "How is employee churn calculated?", a: "The number of employees who left during a period divided by the average number of employees during that same period." }
        ]
    },
    "sustainability-pro": {
        title: "Professional Sustainability & ESG",
        howToUse: "Enter corporate resource usage, fleet data, and supply chain emissions. The engine calculates Scope 1, 2, and 3 emissions for professional reporting.",
        whyItWorks: "ESG (Environmental, Social, and Governance) compliance requires granular data. By applying GHG Protocol standards to operational data, sustainability officers can create verifiable reports for stakeholders and regulatory bodies.",
        faq: [
            { q: "What are Scope 1, 2, and 3 Emissions?", a: "Scope 1: Direct emissions from owned sources. Scope 2: Indirect emissions from purchased energy. Scope 3: All other indirect emissions in the value chain." },
            { q: "What is Net Zero?", a: "A state in which the greenhouse gases going into the atmosphere are balanced by removal out of the atmosphere." }
        ]
    },
    "real-estate-pro": {
        title: "Advanced Real Estate & Commercial Analysis",
        howToUse: "Input market capitalization rates, net operating income (NOI), and debt coverage ratios. The engine performs high-level commercial valuations and IRR projections.",
        whyItWorks: "Professional real estate investment relies on multi-year cash flow modeling. By calculating Internal Rate of Return (IRR) and Cash-on-Cash yields, professionals can objectively compare complex commercial opportunities.",
        faq: [
            { q: "What is Cap Rate?", a: "Capitalization Rate—the ratio of Net Operating Income to property asset value, used to estimate the investor's potential return." },
            { q: "How is NOI calculated?", a: "Net Operating Income = (Total Income from the property) - (All necessary operating expenses)." }
        ]
    },
    "productivity-pro": {
        title: "High-Performance Productivity Metrics",
        howToUse: "Enter project timelines, task estimates, and actual time spent. The tool calculates velocity, efficiency ratios, and predicted completion dates.",
        whyItWorks: "Professional productivity is a function of flow and focus. By measuring throughput and applying Agile-style velocity tracking, knowledge workers can set realistic deadlines and identify systemic bottlenecks in their workflow.",
        faq: [
            { q: "What is Velocity in project management?", a: "The amount of work (expressed in units like story points or hours) a team or individual can complete in a set period." },
            { q: "How does the 'Eisenhower Matrix' help?", a: "It categorizes tasks by urgency and importance to help you prioritize work that moves long-term goals forward." }
        ]
    },
    "util-hacks": {
        title: "Utility Optimization & Cost Hacking",
        howToUse: "Input utility rates, appliance efficiency ratings, and usage patterns. The tool calculates potential savings from behavioral changes or equipment upgrades.",
        whyItWorks: "Small changes in utility usage compound significantly over time. By modeling the cost-benefit of things like LED transitions or smart thermostat schedules, users can 'hack' their household budget for maximum efficiency.",
        faq: [
            { q: "What is Time-of-Use (TOU) pricing?", a: "A utility billing method where the price of energy varies based on the time of day it is consumed." },
            { q: "How much does a leaking faucet cost?", a: "A slow drip (one per second) can waste over 3,000 gallons of water a year—enough to take more than 180 showers." }
        ]
    },
    "pet-wellness": {
        title: "Holistic Pet Health & Vitality",
        howToUse: "Enter pet activity levels, body condition scores, and biometric data. The engine provides wellness indicators and dietary optimization paths.",
        whyItWorks: "Pet wellness is more than just vet visits; it's a daily balance of nutrition and activity. By tracking body condition and metabolic rates, owners can proactively manage their pet's health and increase their quality of life.",
        faq: [
            { q: "What is a Body Condition Score (BCS)?", a: "A numeric scale used to estimate the body fat of an animal, similar to BMI in humans but visually assessed." },
            { q: "How do I calculate 'Dog Years'?", a: "While the '7-year' rule is common, modern science suggests a more complex logarithmic curve based on the pet's size and breed." }
        ]
    },
    "creative-arts": {
        title: "Artistic Theory & Technical Design",
        howToUse: "Input color hex codes, canvas dimensions, or musical scales. The engine applies color theory, the golden ratio, and harmonic principles to your artistic project.",
        whyItWorks: "Art relies on underlying mathematical structures. Whether using the Rule of Thirds in photography or calculating complementary color harmonies, technical tools help artists achieve aesthetic balance and structural resonance.",
        faq: [
            { q: "What is the Golden Ratio?", a: "A mathematical ratio (approximately 1.618) often found in nature and used in art and architecture to create pleasing compositions." },
            { q: "How are complementary colors chosen?", a: "They are colors located directly opposite each other on the color wheel, creating the highest possible contrast." }
        ]
    },
    "survival-bushcraft": {
        title: "Survival Logistics & Wilderness Math",
        howToUse: "Enter estimated traverse speeds, water requirements, and solar angles. The engine calculates survival timelines and directional data based on natural markers.",
        whyItWorks: "Survival in the wild is a game of resource management. By calculating water loss rates and navigation offsets, adventurers can make objective decisions that significantly increase safety in off-grid environments.",
        faq: [
            { q: "How much water do I need per day in the wild?", a: "A baseline of 3-4 liters for an active adult, but this can double in extreme heat or at high altitudes." },
            { q: "What is a 'True North' offset?", a: "The difference between magnetic north (where a compass points) and the geographic North Pole, also known as magnetic declination." }
        ]
    },
    "event-master": {
        title: "Event Coordination & Strategic Planning",
        howToUse: "Input guest counts, venue capacities, and catering ratios. The tool calculates logistics requirements from staffing levels to beverage quantities.",
        whyItWorks: "Successful events are built on precise ratios. By standardizing guest-to-server ratios and calculating square footage per attendee, planners can ensure guest comfort and operational efficiency for any gathering size.",
        faq: [
            { q: "How much space is needed per guest?", a: "Between 7 and 15 square feet per person for a cocktail party, increasing to 15-20 for a seated dinner." },
            { q: "What is a standard 'No-Show' rate?", a: "For large events, a 15-25% 'no-show' rate is typical, though this varies by event type and RSVP method." }
        ]
    },
    "auto-tune": {
        title: "Advanced Automotive Tuning & Mods",
        howToUse: "Enter engine displacement, turbo boost pressures, or suspension geometry. The tool calculates performance changes and ensures mechanical compatibility.",
        whyItWorks: "Tuning is the science of pushing mechanical limits safely. By calculating air-fuel ratios and gear ratios, enthusiasts can optimize their vehicle's power delivery and handling without risking engine or drivetrain failure.",
        faq: [
            { q: "What is AFR (Air-Fuel Ratio)?", a: "The mass ratio of air to a solid, liquid, or gaseous fuel present in a combustion process." },
            { q: "How does turbo boost affect horsepower?", a: "In general, every pound of boost increases horsepower by about 7%, though thermal efficiency limits this at high pressures." }
        ]
    },
    "garden-agri": {
        title: "Agricultural Yield & Farm Management",
        howToUse: "Enter field acreage, seed density, and historical yield data. The tool provides projections for harvest volume and fertilizer ROI.",
        whyItWorks: "Modern agriculture is a data-driven enterprise. By calculating plant density and nutrient application rates with precision, farmers can maximize their yield per acre while minimizing environmental runoff and cost.",
        faq: [
            { q: "What is 'Yield per Acre'?", a: "The measure of the amount of crop harvested per unit of land area, a key indicator of agricultural productivity." },
            { q: "How do I calculate seed requirements?", a: "Multiply the target plant population by the area, and adjust for the expected germination rate of the seed lot." }
        ]
    },
    "audio-pro": {
        title: "Professional Audio & Acoustic Engineering",
        howToUse: "Input room dimensions, speaker sensitivities, or gain stages. The tool calculates room modes, delay offsets, and sound pressure levels (SPL).",
        whyItWorks: "Audio quality is determined by the physics of sound waves. By calculating standing waves and phase alignments, engineers can create balanced acoustic environments and optimized live sound systems with surgical precision.",
        faq: [
            { q: "What are Room Modes?", a: "Standing waves that occur in a room when the distance between walls matches a multiple of the wavelength of a specific frequency." },
            { q: "How is decibel (dB) gain calculated?", a: "A logarithmic unit used to express the ratio of two values of a physical quantity, such as power or intensity." }
        ]
    },
    "social-content": {
        title: "Social Media Metrics & Content Strategy",
        howToUse: "Enter follower counts, engagement numbers, and content runtimes. The tool calculates virality coefficients and provides insights into optimal posting schedules.",
        whyItWorks: "Digital growth is driven by engagement ratios. By analyzing which formats and times drive the highest reach-to-follow conversion, creators can optimize their creative output for maximum platform impact.",
        faq: [
            { q: "What is Engagement Rate?", a: "Total interactions (likes, comments, shares) divided by total followers or total reach." },
            { q: "How does the 'Hook' affect watch time?", a: "The first 3 seconds are critical; drop-off in this window often determines whether a platform's algorithm will continue to push the content." }
        ]
    },
    "hobby-crafts": {
        title: "Craft Engineering & Material Estimation",
        howToUse: "Input project dimensions, yarn weights, or wood species data. The tool calculates yardage, cut lists, and material costs.",
        whyItWorks: "Crafting at scale requires precision inventory management. By calculating the exact amount of resin, wool, or timber needed for a design, makers can price their work accurately and minimize expensive material waste.",
        faq: [
            { q: "How do I calculate yarn for a project?", a: "By measuring the area of your pattern and dividing by the 'gauge' (stitches per inch) and the length of your specific yarn weight." },
            { q: "What is a 'Cut List'?", a: "A detailed list of every piece of wood needed for a project, including dimensions and quantities, to optimize the use of raw lumber." }
        ]
    },
    aviation: {
        title: "Aeronautical Principles & Flight Math",
        howToUse: "Enter altitude, air temperature, and weight/balance data. The engine calculates density altitude, climb rates, and center-of-gravity (CG) limits.",
        whyItWorks: "Flight safety depends on the laws of aerodynamics. By calculating how air density affects lift and ensuring the aircraft's weight is within the structural center-of-gravity envelope, pilots can ensure safe takeoffs and landings.",
        faq: [
            { q: "What is Density Altitude?", a: "Pressure altitude corrected for non-standard temperature; it represents the 'altitude' the airplane 'feels' it is flying at." },
            { q: "Why is Center of Gravity (CG) critical?", a: "If the CG is too far forward or aft, the pilot may lose control of the aircraft's pitch, leading to a stall or inability to flare for landing." }
        ]
    },
    "space-tech": {
        title: "Aerospace Engineering & Orbital Design",
        howToUse: "Input delta-v requirements, mass fractions, and propulsion data. The engine calculates Tsiolkovsky rocket equations and orbital trajectories.",
        whyItWorks: "Reaching orbit is a game of mass management. By calculating the required fuel-to-payload ratios (the 'Tyranny of the Rocket Equation'), engineers determine if a mission is physically possible with current propulsion technology.",
        faq: [
            { q: "What is Delta-V?", a: "The change in velocity required to perform a space maneuver, such as reaching orbit or changing trajectory." },
            { q: "How is the Rocket Equation used?", a: "It relates the delta-v of a rocket to its exhaust velocity and the ratio of its initial and final mass (fuel vs. structure)." }
        ]
    },
    "solar-energy": {
        title: "Photovoltaic Physics & Solar ROI",
        howToUse: "Enter your roof orientation, panel efficiency, and local peak sun hours. The engine calculates annual energy production and financial payback periods.",
        whyItWorks: "Solar power is a long-term financial and physical hedge. By modeling the sun's path relative to your specific location and calculating the degradation of panels over 25 years, homeowners can see the true value of renewable energy.",
        faq: [
            { q: "What are 'Peak Sun Hours'?", a: "The amount of solar radiation at a location that is equivalent to 1,000 watts per square meter for 1 hour." },
            { q: "What is a Solar Inverter?", a: "The device that converts the Direct Current (DC) electricity generated by panels into useable Alternating Current (AC) for your home." }
        ]
    },
    "data-science": {
        title: "Statistical Modeling & Data Analytics",
        howToUse: "Input your data samples or probability variables. Our statistical engine handles regressions, standard deviations, and Bayesian probability distributions.",
        whyItWorks: "Data science turns noise into signal. By applying rigorous mathematical tests (like p-values or Z-scores) to raw data, analysts can determine whether a trend is a meaningful discovery or just a random occurrence.",
        faq: [
            { q: "What is Standard Deviation?", a: "A measure of the amount of variation or dispersion of a set of values; a low deviation indicates the values tend to be close to the mean." },
            { q: "What is a p-value?", a: "The probability of obtaining test results at least as extreme as the results actually observed, assuming the null hypothesis is correct." }
        ]
    },
    "web-dev": {
        title: "Web Engineering & Design Performance",
        howToUse: "Enter viewport sizes, image dimensions, or asset weights. The engine calculates aspect ratios, loading times, and responsive break-point math.",
        whyItWorks: "The modern web is built on fluid geometry. By calculating how images scale across devices and measuring the impact of asset sizes on 'Core Web Vitals,' developers can build faster, more accessible digital experiences.",
        faq: [
            { q: "What is an Aspect Ratio?", a: "The proportional relationship between its width and its height (e.g., 16:9 for widescreen video)." },
            { q: "What are 'Cumulative Layout Shift' (CLS) issues?", a: "When web elements move unexpectedly as the page loads, often caused by images without defined height/width attributes." }
        ]
    },
    "cyber-sec": {
        title: "Cybersecurity & Cryptographic Math",
        howToUse: "Input password lengths, encryption types, or bit-entropy data. The engine calculates crack-times, hash strengths, and risk scores.",
        whyItWorks: "Security is a math problem where the 'cost to break' must exceed the 'value of data.' By calculating the numerical entropy of a key or the probability of a brute-force success, security pros can implement robust defenses.",
        faq: [
            { q: "What is Entropy in passwords?", a: "A measure of how unpredictable a password is; higher entropy means a password is much harder for a computer to guess." },
            { q: "How long does a 256-bit key take to crack?", a: "With current technology, it is mathematically impossible—taking billions of years even with the world's most powerful computers." }
        ]
    },
    geology: {
        title: "Earth Science & Geological Metrics",
        howToUse: "Enter rock densities, pressure depths, or seismic wave speeds. The engine calculates plate movements, mineral compositions, and pressure-volume-temperature (PVT) states.",
        whyItWorks: "Geology explores the physics of the earth over deep time. By calculating the rates of erosion or the pressure needed for mineral crystallization, scientists can reconstruct the earth's history and predict future physical shifts.",
        faq: [
            { q: "What is the Mohs Scale?", a: "A qualitative scale (1 to 10) characterizing the scratch resistance of various minerals through the ability of harder material to scratch softer material." },
            { q: "How is seismic magnitude calculated?", a: "The Moment Magnitude Scale measures the total energy released by an earthquake based on the area of the fault that slipped." }
        ]
    },
    "weather-pro": {
        title: "Meteorological Analytics & Atmospheric Physics",
        howToUse: "Enter barometric pressure, dew point, and wind speed. The engine calculates heat indices, wind chills, and storm severity probabilities.",
        whyItWorks: "Weather is a complex system of thermodynamics. By calculating the relationships between moisture, temperature, and pressure, we can predict how the 'feels-like' temperature shifts and identify the energy potential of atmospheric events.",
        faq: [
            { q: "What is Dew Point?", a: "The temperature at which air must be cooled to become saturated with water vapor, a key indicator of how 'humid' the air feels." },
            { q: "How is Wind Chill calculated?", a: "A formula that estimates the rate of heat loss from exposed skin caused by the combination of low temperature and wind." }
        ]
    },
    "retail-pro": {
        title: "High-Volume Retail Performance",
        howToUse: "Input foot traffic, conversion rates, and average transaction values. The tool calculates GMROI and provides inventory aging analysis.",
        whyItWorks: "Professional retail management is about maximizing the 'yield' of every square foot. By analyzing the relationship between inventory investment and gross margin, retailers can optimize their stock levels for maximum profitability.",
        faq: [
            { q: "What is GMROI?", a: "Gross Margin Return on Investment—a ratio that measures a retailer's ability to turn inventory into cash above the cost of the inventory." },
            { q: "How is Conversion Rate calculated?", a: "The percentage of total visitors to a store who make a purchase." }
        ]
    },
    manufacturing: {
        title: "Industrial Manufacturing & Lean Six Sigma",
        howToUse: "Enter cycle times, defect rates, and total uptime. The engine calculates OEE (Overall Equipment Effectiveness) and provides sigma-level insights.",
        whyItWorks: "Manufacturing excellence is driven by the reduction of waste and variation. By calculating OEE, plant managers can identify whether losses are due to availability, performance, or quality, allowing for targeted process improvements.",
        faq: [
            { q: "What is OEE?", a: "Overall Equipment Effectiveness—the gold standard for measuring manufacturing productivity, calculated as Availability x Performance x Quality." },
            { q: "What is a 'Lean' process?", a: "A methodology focused on minimizing waste within manufacturing systems while simultaneously maximizing productivity." }
        ]
    },
    "marine-science": {
        title: "Oceanography & Marine Biology",
        howToUse: "Input salinity levels, water depths, and tide data. The engine calculates buoyancy, light attenuation, and tidal pressures.",
        whyItWorks: "The marine environment is governed by fluid dynamics and chemical gradients. By calculating how light fades with depth or how salinity affects the density of seawater, we can better understand the biological constraints of ocean life.",
        faq: [
            { q: "How does salinity affect buoyancy?", a: "Higher salinity increases the density of water, which in turn increases the buoyant force acting on submerged objects." },
            { q: "What is 'Light Attenuation'?", a: "The decrease in light intensity as it travels through water, which determines the depth of the 'photic zone' where photosynthesis can occur." }
        ]
    },
    optics: {
        title: "Optical Physics & Lens Engineering",
        howToUse: "Enter focal lengths, refractive indices, and object distances. The engine applies Snell's Law and the Thin Lens Equation to simulate light paths.",
        whyItWorks: "Optics is the study of how light interacts with matter. By calculating the path of photons through various media, we can design everything from simple eyeglasses to complex telescope arrays with extreme mathematical certainty.",
        faq: [
            { q: "What is Refractive Index?", a: "A dimensionless number that describes how fast light travels through a specific material compared to a vacuum." },
            { q: "How is Focal Length measured?", a: "The distance between the center of a lens or curved mirror and its focus point." }
        ]
    },
    pharmacy: {
        title: "Pharmaceutical Math & Dosage Logic",
        howToUse: "Input patient weight, drug concentrations, and desired delivery times. The engine calculates drip rates, BSA-based dosing, and concentration conversions.",
        whyItWorks: "Clinical pharmacology requires zero-error calculations. By standardizing dosing based on Body Surface Area (BSA) or weight-based protocols, we help healthcare professionals ensure patient safety and therapeutic efficacy.",
        faq: [
            { q: "What is BSA?", a: "Body Surface Area—the measured or calculated surface area of a human body, often considered a more accurate indicator of metabolic mass than weight alone." },
            { q: "How is a drip rate calculated?", a: "By dividing the total volume to be infused by the time, and multiplying by the 'drop factor' of the specific IV tubing." }
        ]
    },
    forensics: {
        title: "Forensic Science & Criminological Math",
        howToUse: "Enter evidence markers like blood spatter angles, body temperatures (algor mortis), or bullet trajectories. The engine applies physical laws to reconstruct events.",
        whyItWorks: "Forensics uses the immutable laws of physics to work backward from a crime scene. By calculating the rate of cooling in a body or the arc of a projectile, investigators can establish objective timelines and situational facts.",
        faq: [
            { q: "What is Algor Mortis?", a: "The second stage of death, defined as the change in body temperature post-mortem until the ambient temperature is matched." },
            { q: "How is impact angle determined in blood spatter?", a: "By calculating the ratio of the width to the length of the blood drop and using the arcsine function." }
        ]
    },
    archaeology: {
        title: "Archaeological Metrics & Radiometric Dating",
        howToUse: "Input isotope ratios, excavation depths, or artifact dimensions. The tool calculates estimated ages using half-life decay constants or stratigraphy math.",
        whyItWorks: "Archaeology uses physical constants to map human history. By applying carbon-14 decay rates or measuring the volume of an ancient structure, researchers can place artifacts and sites into a precise chronological and cultural context.",
        faq: [
            { q: "What is a Half-Life?", a: "The time taken for the radioactivity of a specified isotope to fall to half its original value." },
            { q: "How does Stratigraphy help in dating?", a: "Based on the Law of Superposition, older layers of earth are typically buried deeper than more recent layers." }
        ]
    },
    "music-theory": {
        title: "Music Theory & Sonic Mathematical Ratios",
        howToUse: "Input notes, scales, or BPM (beats per minute). The engine calculates intervals, frequencies (in Hertz), and time-signature divisions.",
        whyItWorks: "Music is essentially audible mathematics. Sound waves vibrate at specific integer ratios to create harmony. By calculating the frequencies of the chromatic scale or the subdivision of complex rhythms, we map the bridge between math and emotion.",
        faq: [
            { q: "What is the frequency of 'A440'?", a: "440 Hertz—the standard tuning pitch for the note A above middle C, used as a reference point for western music." },
            { q: "What is an 'interval'?", a: "The difference in pitch between two sounds, calculated as the ratio of their frequencies." }
        ]
    },
    "coffee-craft": {
        title: "Coffee Science & Brewing Extraction",
        howToUse: "Enter coffee-to-water ratios, grind sizes, and water temperatures. The tool calculates extraction yields and strength (TDS) percentages.",
        whyItWorks: "The perfect cup of coffee is a balanced chemical extraction. By understanding the ratio of dissolved solids to total beverage weight, enthusiasts can replicate the exact flavor profiles of world-class baristas.",
        faq: [
            { q: "What is TDS?", a: "Total Dissolved Solids—a measure of the 'strength' of your coffee, usually between 1.2% and 1.5% for standard drip." },
            { q: "What is a 'Standard Brew Ratio'?", a: "Commonly 1:15 to 1:17 (grams of coffee to grams of water) for a balanced extraction." }
        ]
    },
    mixology: {
        title: "Molecular Mixology & Liquid Density",
        howToUse: "Input alcohol percentages, sugar content (Brix), and volumes. The engine calculates the overall ABV of a cocktail and models liquid layering based on specific gravity.",
        whyItWorks: "Cocktail crafting relies on density and dilution. By calculating the specific gravity of different liqueurs, bartenders can create perfectly layered drinks while ensuring the final alcohol-by-volume (ABV) meets legal and flavor standards.",
        faq: [
            { q: "What is Specific Gravity?", a: "The ratio of the density of a substance to the density of water, which determines whether a liquid will float or sink in a glass." },
            { q: "How is ABV calculated in a mixed drink?", a: "Sum the alcohol volume of all components and divide by the total volume of the finished drink (including juice/syrups)." }
        ]
    },
    "baking-pro": {
        title: "Professional Baking & Dough Hydration",
        howToUse: "Enter flour types, hydration percentages, and ambient temperatures. The tool scales commercial recipes and calculates final dough temperatures (FDT).",
        whyItWorks: "Baking is chemistry where temperature and hydration are the primary variables. By calculating the 'Friction Factor' of a mixer and adjusting water temperature, professional bakers can ensure every loaf ferments at the same rate.",
        faq: [
            { q: "What is Dough Hydration?", a: "The ratio of water to flour by weight. A 70% hydration dough has 70g of water for every 100g of flour." },
            { q: "Why is Final Dough Temperature (FDT) critical?", a: "It controls the speed of yeast activity; inconsistent temperatures lead to inconsistent fermentation and flavor." }
        ]
    },
    "outdoor-elec": {
        title: "Off-Grid Power & Outdoor Electronics",
        howToUse: "Input battery capacities (Ah), load requirements (Watts), and solar recharge rates. The tool calculates energy 'runways' for camping or emergency backup.",
        whyItWorks: "Off-grid living requires strict energy budgeting. By calculating the discharge rate of a battery against your specific electronic loads, you can plan for safety and comfort in environments without traditional grid access.",
        faq: [
            { q: "What is Watt-Hour (Wh)?", a: "A unit of energy equivalent to one watt of power sustained for one hour." },
            { q: "Can I fully drain a Lead-Acid battery?", a: "No, typically you should only use 50% of its capacity to avoid permanent damage. Lithium batteries can usually handle 80-95% discharge." }
        ]
    },
    aquarium: {
        title: "Aquarium Chemistry & Hydro-logistics",
        howToUse: "Enter tank dimensions, water change volumes, and chemical doses. The engine calculates total volume, stocking densities, and dosing ratios.",
        whyItWorks: "An aquarium is a closed biological system. Success depends on maintaining exact chemical balances (Nitrogen cycle) and providing enough volume for the bio-load of your fish, preventing toxic ammonia spikes.",
        faq: [
            { q: "How do I calculate tank volume?", a: "Multiply length x width x height (in inches) and divide by 231 to find the total US Gallons." },
            { q: "What is the 'Inch per Gallon' rule?", a: "A rough guideline for stocking fish, suggesting 1 inch of fish per gallon of water, though filtration and species type are more critical factors." }
        ]
    },
    "rocketry-drones": {
        title: "Unmanned Aerial Performance & Ballistics",
        howToUse: "Input motor thrust, aircraft weight, and battery voltage. The engine calculates thrust-to-weight ratios and estimated flight times or altitudes.",
        whyItWorks: "Flight in small-scale craft is a constant battle between weight and power. By calculating the 'Disk Loading' on a drone or the 'Impulse' of a rocket motor, hobbyists can predict performance and ensure structural safety during flight.",
        faq: [
            { q: "What is a Thrust-to-Weight Ratio?", a: "For a drone, it needs to be at least 2:1 to take off and hover comfortably; racing drones can exceed 10:1." },
            { q: "What is 'C-Rating' on a battery?", a: "A measure of how quickly a battery can be safely discharged (e.g., a 50C battery can discharge at 50 times its capacity)." }
        ]
    },
    horology: {
        title: "Horological Science & Timepiece Math",
        howToUse: "Enter gear counts (teeth), balance wheel frequencies, or time-drift data. The engine calculates beats-per-hour (BPH) and accuracy variances.",
        whyItWorks: "Watchmaking is the ultimate mechanical math. By calculating the exact 'train' ratio from the mainspring to the escapement, horologists can measure and adjust the micro-seconds of drift that define a chronometer's quality.",
        faq: [
            { q: "What is BPH (Beats Per Hour)?", a: "The frequency at which a watch's balance wheel oscillates, common rates are 21,600 or 28,800 BPH." },
            { q: "How many seconds gain/loss is 'COSC' standard?", a: "To be a certified chronometer, a watch must be accurate to within -4 to +6 seconds per day." }
        ]
    },
    linguistics: {
        title: "Linguistic Analytics & Phonetic Math",
        howToUse: "Input text samples or phonetic counts. The engine calculates lexical diversity, reading ease (Flesch-Kincaid), and translation expansion ratios.",
        whyItWorks: "Language has hidden statistical structures. By analyzing word frequency distributions (Zipf's Law) and measuring the complexity of sentence structures, we can objectively quantify readability and the evolution of dialects.",
        faq: [
            { q: "What is Zipf's Law?", a: "The observation that the most frequent word in a language occurs twice as often as the second most frequent, three times as often as the third, and so on." },
            { q: "What is a 'Translation Expansion' ratio?", a: "When translating from English to German, text typically grows by 20-30% in length, which is critical for UI design and layout." }
        ]
    },
    "formal-logic": {
        title: "Formal Logic & Boolean Truth-Sets",
        howToUse: "Enter propositional statements or Boolean variables. The tool evaluates truth tables, identifies logical fallacies, and simplifies gate-logic.",
        whyItWorks: "Logic is the foundational grammar of both philosophy and computer science. By mapping 'If-Then' statements and De Morgan's Laws, we can verify the validity of complex arguments and the efficiency of digital circuits.",
        faq: [
            { q: "What is a Truth Table?", a: "A breakdown of all possible truth values for a logical expression based on its inputs." },
            { q: "What is 'Modus Ponens'?", a: "A fundamental rule of logic: if P implies Q, and P is true, then Q must also be true." }
        ]
    },
    sociology: {
        title: "Demographic Analytics & Social Trends",
        howToUse: "Input population data, Gini coefficients, or survey counts. The tool calculates growth rates, density markers, and inequality indexes.",
        whyItWorks: "Sociology uses statistical modeling to understand human groups. By calculating birth rates or the 'median age' of a population, we can project future service needs and understand the underlying dynamics of social change.",
        faq: [
            { q: "What is the Gini Coefficient?", a: "A statistical measure of distribution intended to represent the income or wealth inequality within a nation or social group." },
            { q: "How is 'Replacement Rate' calculated?", a: "The fertility rate (approx 2.1 children per woman) needed to keep a population stable from one generation to the next." }
        ]
    },
    "urban-planning": {
        title: "Urban Dynamics & Civil Logistics",
        howToUse: "Enter zoning densities, traffic counts, and per-capita infrastructure data. The tool calculates 'Walk Scores', parking requirements, and utility throughputs.",
        whyItWorks: "City design is a balance of human needs and physical constraints. By calculating the 'Floor Area Ratio' (FAR) of a building or the traffic load on a street, planners ensure that cities remain navigable, efficient, and livable.",
        faq: [
            { q: "What is Floor Area Ratio (FAR)?", a: "The ratio of a building's total floor area to the size of the piece of land upon which it is built." },
            { q: "How is 'Walkability' measured?", a: "Based on the proximity of amenities like grocery stores, schools, and parks within a 5-15 minute walk." }
        ]
    },
    "eco-legal": {
        title: "Environmental Law & Compliance Math",
        howToUse: "Input emission levels, permit timelines, and land-use ratios. The engine calculates mitigation offsets and regulatory penalty risks.",
        whyItWorks: "Environmental law is where ecology meets regulation. By quantifying the 'net gain' in biodiversity or calculating the carbon offset required for a project, businesses can ensure they meet both the letter and the spirit of environmental protection acts.",
        faq: [
            { q: "What is Biodiversity Net Gain?", a: "An approach to development that leaves biodiversity in a measurably better state than it was before." },
            { q: "How are carbon credits calculated?", a: "Usually represented as one tonne of carbon dioxide (or equivalent) prevented from entering the atmosphere." }
        ]
    },
    "disaster-prep": {
        title: "Survival Infrastructure & Emergency Logistics",
        howToUse: "Enter household size, duration targets, and resource burn-rates. The tool calculates water storage, caloric reserves, and energy backup requirements.",
        whyItWorks: "Resilience starts with objective preparation. By calculating how long 50 gallons of water will actually last a family of four, or how many solar watts are needed to keep a medical fridge running, we turn anxiety into an actionable plan.",
        faq: [
            { q: "How much water is needed per person per day?", a: "FEMA recommends at least 1 gallon per person per day (half for drinking, half for hygiene), for at least two weeks." },
            { q: "What is a 'Bug-Out' Bag?", a: "A portable kit that contains the items one would require to survive for seventy-two hours when evacuating from a disaster." }
        ]
    },
    "esports-pro": {
        title: "Professional Esports & Team Analytics",
        howToUse: "Input individual match stats, win-rates, and gold-per-minute (GPM) metrics. The engine calculates 'Effective HP' and provides seasonal performance trajectories.",
        whyItWorks: "High-level gaming is won on the margins of math. By identifying efficiency gaps in gold income or tracking accuracy trends over thousands of games, professional players and coaches can find the data-backed edges that win championships.",
        faq: [
            { q: "What is Effective HP (EHP)?", a: "A calculation of a character's survivability that factors in health, armor, and resistances together." },
            { q: "How is 'Gold Per Minute' (GPM) used?", a: "As a primary indicator of map efficiency and resource priority in MOBAs like League of Legends or Dota 2." }
        ]
    },
};

export const DEFAULT_EDUCATION: CategoryEducation = {
    title: "Expert Insight & Methodology",
    howToUse: "Follow the on-screen prompts to input your specific data. Our interactive engine translates your unique inputs into verified mathematical results using 2026 industry-standard algorithms in real-time.",
    whyItWorks: "Every calculation here is built on established logic and mathematical principles designed to remove human error from complex data processing. By standardizing inputs and applying verified formulas, we ensure consistent and reliable outcomes for every scenario.",
    faq: [
        { q: "Is my data stored or private?", a: "Your privacy is our priority. All calculations are performed instantly in your browser or through ephemeral API calls. we never store or track your personal financial or health inputs." },
        { q: "How accurate are these calculators?", a: "Extremely. Our team cross-references every tool against current 2026 industry benchmarks and scientific standards to ensure high-grade precision for professional or personal use." }
    ]
};
