
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
        whyItWorks: "Compound interest is often called the 'eighth wonder of the world.' It works by paying interest not just on your original deposit, but also on the interest you've already earned. This creates a 'snowball effect' where your wealth grows faster and faster the longer you leave it alone.",
        faq: [
            { q: "How much will $1,000 grow with 7% compound interest?", a: "With a 7% return, $1,000 becomes nearly $4,000 in 20 years. If you add $100 a month, that same $1,000 grows to over $52,000! This 'snowball effect' is the key to building 2026 wealth." },
            { q: "What is the Rule of 72?", a: "It's a quick way to see how fast your money doubles. Divide 72 by your interest rate. At 10%, your money doubles in 7.2 years. At 6%, it takes 12 years. Our calculator handles the exact decimals for you." },
            { q: "Is monthly or yearly compounding better?", a: "Monthly is better! The more often interest is calculated, the faster your balance grows. While the difference seems small at first, it can add up to thousands of dollars over a 20-year period." },
            { q: "How much do I need to invest to become a millionaire?", a: "If you start at age 25 and earn 7%, saving about $400 a month will get you to $1,000,000 by age 65. The earlier you start, the less 'heavy lifting' your wallet has to do." },
            { q: "What is the compound interest formula?", a: "The math is A = P(1 + r/n)^(nt). But don't worry about the algebra—our engine handles the complex exponents and monthly additions automatically so you can focus on your goals." }
        ]
    },
    finance: {
        title: "The Financial Decision Engine",
        howToUse: "Input your core numbers: how much you're starting with, your interest rate, and how many years you're planning for. Our engine shows you exactly how your money can grow. For 2026, it's smart to use conservative rates (like 5-7%) to see a more realistic picture of your future wealth.",
        whyItWorks: "Sound financial planning is about understanding the relationship between time and money. Whether you're saving for retirement or calculating a house payment, small changes today lead to massive results later. Our tools use the same math banks use, but simplified so you can make choices without a finance degree.",
        faq: [
            { q: "How much should I have in my emergency fund?", a: "Most experts recommend 3 to 6 months of essential living expenses. For 2026, many families aim for a 'high-yield' savings account to ensure their emergency cash also grows at 4-5%." },
            { q: "What is the 50/30/20 rule?", a: "It's a simple budget blueprint: 50% for Needs (rent/food), 30% for Wants (fun/hobbies), and 20% for Savings and Debt. It's the gold standard for balancing your life and your future." },
            { q: "How do I calculate my net worth?", a: "Assets (what you own, like cash and house value) minus Liabilities (what you owe, like loans). Tracking this once a month is the best way to see if your overall financial health is improving." },
            { q: "Should I pay off debt or invest my extra cash?", a: "Check the interest rates! If your debt (like a credit card) costs 20% but your investment earns 8%, pay the debt first. If your debt is only 3% (like an old mortgage), it's often better to invest." },
            { q: "How much of my paycheck should I save?", a: "Aiming for 15-20% is ideal, but even 1% is a win. The most important habit in 2026 is 'automated savings'—moving the money before you have a chance to spend it." }
        ]
    },
    health: {
        title: "Body Markers & Metabolism Analysis",
        howToUse: "Enter your basic stats: height, weight, age, and activity level. Be honest about your activity—if you sit at a desk most of the day, choose 'Sedentary' for the most accurate result. Our engine uses the newest 2026 standards to see how your body is performing.",
        whyItWorks: "Good health starts with good data. By calculating numbers like your BMR (calories burned at rest) or BMI, you get a scientific baseline. This helps you move past guessing at your diet and instead gives you a clear target based on your unique body type.",
        faq: [
            { q: "How many calories does my body burn if I just stay in bed?", a: "This is called your BMR. It's the energy your body needs just to keep your heart beating and lungs breathing. Most adults burn between 1,400 and 1,800 calories a day doing absolutely nothing." },
            { q: "How many calories should I eat to lose weight safely?", a: "To lose about a pound a week, aim for 500 calories below your 'maintenance' level. For most, this means staying above 1,200 calories (women) or 1,500 calories (men) to stay healthy." },
            { q: "What is the difference between my 'resting' and 'active' calories?", a: "Resting calories (BMR) are what you burn just existing. Active calories are what you burn walking, working, and exercising. Together, they make up your Total Daily Energy Expenditure (TDEE)." },
            { q: "Why do different sites give me different calorie targets?", a: "We use the Mifflin-St Jeor formula, which is the 2026 medical gold standard. Other sites might use older formulas that over-count how much you need, which can stall your progress." },
            { q: "Does drinking water actually help with weight loss?", a: "Yes. Water helps your metabolism run at peak speed and can help you feel full. We recommend at least 8-10 glasses a day for active adults in 2026." }
        ]
    },
    math: {
        title: "Mathematical Foundations & Logic",
        howToUse: "Enter your numbers into the fields provided. Our engine handles everything from simple plus/minus to advanced calculus and geometry. We use high-precision 2026 standards to ensure your results are exact every time.",
        whyItWorks: "Math is the 'rulebook' for physics, building, and logic. Whether you're measuring a triangle for a DIY project or finding the average of a huge data set, using a digital tool removes 'human error.' This gives you a verifiable answer you can trust for school or professional work.",
        faq: [
            { q: "Can I trust these numbers for my building or school project?", a: "Yes. Our engine calculates to 12 decimal places, which is more precision than required for construction, engineering, or higher education standards in 2026." },
            { q: "Why use this instead of a phone calculator?", a: "Standard calculators often hide the 'steps' or make it hard to handle complex formulas like square roots and percentages. Our tools show you the logic so you can verify the results." },
            { q: "How does the 'Order of Operations' work?", a: "We follow PEMDAS (Parentheses, Exponents, Multiplication, Division, Addition, Subtraction). It's the universal law of math that ensures everyone gets the same answer to the same problem." },
            { q: "Is Pi really accurate here?", a: "Yes, we use the high-precision constant for Pi (3.1415926535...) so your circles and spheres are exact down to the millimeter." },
            { q: "Can this help me with my engineering homework?", a: "Absolutely. These tools are built to handle structural and statistical math that meets 2026 academic standards." }
        ]
    },
    'real-estate': {
        title: "Home Buying & Mortgage Math",
        howToUse: "Enter the home's price, your down payment, and the interest rate. We'll calculate your total monthly bank draft (PITI) using 2026 market standards, so you know exactly what you can afford before you start shopping.",
        whyItWorks: "Buying a home is a long-term math problem. By looking at your monthly payment instead of just the total price, you can see how things like taxes and insurance change your budget. Our tools help you find a 'safe' monthly payment that won't leave you house-poor.",
        faq: [
            { q: "How much home can I afford based on my salary?", a: "A common rule is the '28/36' rule: your mortgage shouldn't exceed 28% of your gross monthly income, and total debt shouldn't exceed 36%. Use our affordability tool to see your max house price." },
            { q: "What is the monthly payment on a $400,000 house?", a: "At 7% interest with 10% down, your principal and interest is roughly $2,395. After adding average 2026 taxes and insurance, your total monthly bank draft is likely around $3,000." },
            { q: "Is it better to rent or buy in 2026?", a: "Buying build equity, while renting offers flexibility. If you plan to stay in a city for more than 5 years, buying is usually the winner. We help you calculate the 'Break Even' point for your specific zip code." },
            { q: "How do I avoid paying PMI?", a: "Put at least 20% down. If you can't, look at 'Lender Paid' options or aim to reach 20% equity through extra payments, which allows you to cancel the insurance and save $100-$300 a month." },
            { q: "How much are closing costs on a home?", a: "Typically 2% to 5% of the purchase price. On a $300k home, expect to pay $6,000 to $15,000 at the signing table for things like title fees, appraisals, and prepaid taxes." }
        ]
    },
    science: {
        title: "Scientific Principles & Unit Conversions",
        howToUse: "Select your input units and provide your measurements. Use the scientific notation toggles for very large or small numbers. The tool converts using standard international constants for 2026 laboratory accuracy.",
        whyItWorks: "Science is about precision. Whether you're a student balancing a chemical equation or a professional engineer checking the force of a moving object, using a dedicated calculator stops small rounding errors from ruining your work. We use the same constants and formulas used in modern research labs.",
        faq: [
            { q: "Why are some numbers written with 'x10' instead of zeroes?", a: "This is Scientific Notation. It's a shorthand for very big numbers (like the distance to the moon) or very tiny ones (like the width of a cell) so they're easier to read and calculate." },
            { q: "Are the physical constants like the 'Speed of Light' current?", a: "Yes, we use the most recent 2026 CODATA measurements. This ensures your physics and chemistry projects match the most up-to-date scientific data." },
            { q: "Can I use this for my college lab reports?", a: "Definitely. Our formulas are the exact ones used in modern research and academia. We provide the high-precision results required for professional science." },
            { q: "What is the difference between 'Mass' and 'Weight'?", a: "In simple terms: Mass is how much 'stuff' makes you up (doesn't change), and Weight is how hard gravity pulls on that stuff (changes if you're on the moon!)." },
            { q: "How do I convert between Metric and US units?", a: "Just select your 'From' and 'To' units. Our engine handles the complex math (like 2.54 cm per inch) automatically and precisely." }
        ]
    },
    automotive: {
        title: "Car Performance & Running Costs",
        howToUse: "Enter your vehicle's stats—like fuel used, miles driven, or engine specs. Our engine uses standard car math to show you how your vehicle actually performs on the road and what it costs to keep it running.",
        whyItWorks: "Vehicle costs go far beyond the gas tank. By calculating things like your 'True MPG' or how much value your car loses every year (depreciation), you can see the real impact of your driving habits and make smarter choices at the dealership.",
        faq: [
            { q: "How much does it really cost to own a car?", a: "It's not just your car payment. When you add gas, insurance, maintenance, and 'depreciation' (value loss), the average 2026 car costs about $800 to $1,000 a month to operate." },
            { q: "Why is 'Depreciation' such a big deal?", a: "It's usually your biggest hidden cost. Most new cars lose 20% of their value in the first year alone. Our tools help you see which cars hold their value better so you don't lose money when you sell." },
            { q: "Does my tire size affect my gas mileage?", a: "Yes. Larger, heavier tires increase rolling resistance and can lower your MPG. We help you calculate the performance trade-offs for different wheel and tire setups." },
            { q: "What is a 'Good' MPG in 2026?", a: "For gas cars, 30+ MPG is the standard. For hybrids, aim for 45-50+. We help you convert between Metric and US units so you can compare efficiency accurately." },
            { q: "How much horsepower does my car actually have?", a: "Manufacturers measure at the engine, but you usually lose 15% of that power before it hits the wheels. We help you calculate your 'True' performance numbers based on real-world data." }
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
            { q: "How can I lower my car insurance premium?", a: "In 2026, the best ways are increasing your deductible, bundling with home insurance, or asking for 'Low Mileage' discounts if you work from home. Improving your credit score can also slash your rate by up to 40%." },
            { q: "How much life insurance do I really need?", a: "A common 'high-search' rule is 10 to 12 times your annual income. This ensures your family can replace your salary and pay off the mortgage if the worst happens. Use our coverage tool to find your exact number." },
            { q: "What is the difference between Term and Whole Life?", a: "Term life is like renting: you're covered for a set time (10-30 years) for a very low price. Whole life is like buying: it lasts forever and builds cash value, but costs 10-20 times more. For most, Term is the smarter choice." },
            { q: "Is a higher deductible always better?", a: "It saves you money on your monthly bill, but only if you have the cash (like $1,000) saved in an emergency fund to cover it. If you're living paycheck to paycheck, a lower deductible is often safer." },
            { q: "Does home insurance cover floods?", a: "Usually NO. Standard policies cover fires and storms, but flood insurance is almost always a separate policy through FEMA or a private company. Always check your 'Flood Zone' status before buying." }
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
        howToUse: "Provide your birth date, names, or special milestones. Our tools use simple date math to show you interesting facts about your personal history and future.",
        whyItWorks: "Tracking life milestones helps us see the patterns in our daily existence. By using exact calendars and traditional systems, we turn personal dates into meaningful insights.",
        faq: [
            { q: "How is chronological age calculated?", a: "We calculate the exact time elapsed between your birth date and the current moment, accounting for leap years and month lengths." },
            { q: "Is compatibility math based on science?", a: "Compatibility tools are based on traditional systems and name-matching algorithms intended for entertainment and personal reflection." }
        ]
    },
    roofing: {
        title: "Roofing & Material Estimator",
        howToUse: "Enter the base size of your building and the 'pitch' or steepness of your roof. Our engine calculates exactly how many shingles or panels you need to buy.",
        whyItWorks: "Roofing requires precise math to make sure water drains well and your house stays dry. By calculating the actual 'unfolded' surface area of your roof, we help you avoid buying too much or too little material.",
        faq: [
            { q: "What is 'Roof Pitch'?", a: "Pitch is the vertical rise for every 12 inches of horizontal run. A '6/12 pitch' means the roof rises 6 inches for every foot of run." },
            { q: "Should I include dormers in my calculations?", a: "Yes, add the surface area of dormers separately or ensure they are accounted for in your total square footage inputs." }
        ]
    },
    hydraulics: {
        title: "Plumbing & Flow Calculations",
        howToUse: "Enter your pipe sizes, water flow speed, and pressure. Our engine calculates volumes and speeds to make sure your plumbing or tank project works perfectly.",
        whyItWorks: "Managing liquids is all about understanding pressure and volume. These calculators use standard physics rules to ensure your home or industrial project stays leak-free and flows smoothly.",
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
            { q: "What is the monthly payment on a $300,000 mortgage?", a: "At a 7% interest rate, your principal and interest is about $1,996 for a 30-year loan. When you add taxes and insurance, your total monthly bank draft will likely be between $2,400 and $2,700 depending on your local tax rate." },
            { q: "Is a 15-year or 30-year mortgage better?", a: "A 30-year loan has lower monthly payments, which is safer for your budget. However, a 15-year loan has much lower interest rates and can save you over $200,000 in interest over the life of the house. Most in 2026 choose the 30-year for flexibility." },
            { q: "How much down payment do I really need?", a: "While 20% stops you from paying PMI insurance, many 2026 buyers use 3.5% (FHA) or 3% (Conventional) loans. If you're a veteran, you can even get a $0 down VA loan with great rates." },
            { q: "What is the 'Rule of Thumb' for house prices?", a: "A good conservative guide is '3 times your annual gross salary.' If you make $100k, look at houses around $300k. This ensures you have money left over for life, travel, and emergencies." },
            { q: "Should I buy points to lower my interest rate?", a: "Buying 'points' means paying cash upfront to lower your monthly rate. It's a great deal if you plan to stay in the house for 7+ years, but if you might move sooner, it's often better to keep your cash." }
        ]
    },
    'auto-loan': {
        title: "Auto Loan & Car Finance Analytics",
        howToUse: "Enter the car price, any trade-in value, and the interest rate. We recommend checking 48, 60, and 72-month terms to see how much extra interest you pay for the 'smaller' monthly payment.",
        whyItWorks: "Car loans compound interest differently than mortgages. By calculating your monthly payment across different terms, you can see the 'total cost to own.' A lower monthly payment on a 7-year loan often costs you thousands more than a slightly higher payment on a 5-year loan.",
        faq: [
            { q: "What is my car payment on a $40,000 loan?", a: "For a 60-month (5 year) loan at 6% interest, your monthly payment is about $773. You'll pay around $6,400 in total interest over the life of the car." },
            { q: "What is the 20/4/10 rule for car buying?", a: "Put 20% down, finance for no more than 4 years (48 months), and keep total car costs (payment + insurance) under 10% of your take-home pay. It's the best way to avoid being 'upside down' on a loan." },
            { q: "Is a 72-month or 84-month car loan bad?", a: "Yes, usually. While the monthly payment is lower, you pay thousands more in interest and will likely owe more than the car is worth for the first 4 years. Stick to 60 months or less if possible in 2026." },
            { q: "How much does my credit score affect my car rate?", a: "A lot! Someone with a 750 score might get a 5% rate, while someone with a 600 score might get 15%. On a $30k car, that's a difference of over $150 a month!" },
            { q: "Should I lease or buy a car in 2026?", a: "Leasing is better if you want a new car every 3 years and drive less than 12k miles a year. Buying is much cheaper in the long run (6-10 years) because you eventually stop making payments." }
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
        title: "Renovation & Heating Planning",
        howToUse: "Enter your room sizes for flooring and paint, or details about your windows and insulation for heating (HVAC) needs. We'll show you exactly what materials you need to get the job done.",
        whyItWorks: "Good home improvement saves you money on energy and materials. By calculating the exact 'thermal load' or square footage, you can pick the right size unit or paint amount without guesswork.",
        faq: [
            { q: "How do I calculate paint coverage?", a: "Divide the total wall surface area by the 'feet per gallon' rating on the paint (usually 350-400 sq ft)." },
            { q: "What size AC do I need?", a: "Heating and cooling are measured in BTUs or Tons. 20 BTUs per square foot of living space is a common rule of thumb." }
        ]
    },
    medical: {
        title: "Health Markers & Clinical Logic",
        howToUse: "Enter your test results—like blood sugar, cholesterol, or sleep patterns. Our tools use medical standards from the CDC and ADA to help you understand what your numbers mean.",
        whyItWorks: "Health tools help you see the story behind your lab results. By using 2026 clinical standards, we bridge the gap between complex biology and clear, actionable health insights.",
        faq: [
            { q: "Are these results a medical diagnosis?", a: "No. These tools are for educational screening. All results must be reviewed by a licensed healthcare provider." },
            { q: "What is A1c to EAG?", a: "It converts your 3-month average blood sugar percentage (A1c) into an Estimated Average Glucose (mG/dL) for daily tracking comparison." }
        ]
    },
    military: {
        title: "Military Fitness & Body Standards",
        howToUse: "Select your branch and enter your physical test scores (like pushups or run times). We'll show you how you grade out against 2026 military standards.",
        whyItWorks: "Military fitness is about readiness and compliance. These tools use the exact grading tables and body-fat formulas used by the US military to help you track your progress.",
        faq: [
            { q: "Do these reflect the 2024 standards?", a: "Yes, we prioritize the latest available grading tables for the ACFT and other branch-specific physical tests." },
            { q: "What is the 'Tape Test'?", a: "The standard military method for estimating body fat percentage using circumference measurements of the neck, waist, and hips." }
        ]
    },
    business: {
        title: "Company Finance & Marketing Math",
        howToUse: "Enter your business numbers—like total sales, costs, ad spend, or staff count. We'll show you if you're making a profit and how efficiently your company is running.",
        whyItWorks: "Business success is built on clear data. By looking at how much it costs to get a new customer vs. how much they spend, these tools help you make smarter choices for growth and profitability.",
        faq: [
            { q: "How do I calculate my business break-even point?", a: "Divide your fixed costs (rent/salaries) by your 'Contribution Margin' (Sale Price minus Variable Cost per unit). This shows you exactly how many sales you need each month to stop losing money." },
            { q: "What is a healthy profit margin for a small business?", a: "It varies by industry: restaurants often aim for 5-10%, while software (SaaS) can be 20-40%. Our tools help you see your 'Net Margin' so you can compare your performance to 2026 benchmarks." },
            { q: "What is the difference between ROI and ROAS?", a: "ROI (Return on Investment) looks at your total profit vs total cost. ROAS (Return on Ad Spend) looks specifically at how much revenue you got for every $1 spent on marketing." },
            { q: "How much should a small business owner pay themselves?", a: "A common starting point is a reasonable 'market' salary for your role, ensuring the business still has profit left over. Don't forget that as an owner, you can also take 'Distributions' from the profits." },
            { q: "What is CAC and why does it matter?", a: "Customer Acquisition Cost. It's the total cost of your marketing divided by the number of new customers. If your CAC is higher than the profit from a customer, your business model isn't sustainable yet." }
        ]
    },
    sales: {
        title: "Shop Logic & Sales Strategy",
        howToUse: "Enter your product costs, selling prices, and any discount percentages. We'll calculate your final price and exactly how much profit you're making on every sale.",
        whyItWorks: "Retail math is about finding the right price for success. By understanding 'Markup' and 'Margin,' business owners can keep profits high while shoppers can find the absolute best deals.",
        faq: [
            { q: "Markup vs. Margin: what's the difference?", a: "Markup is how much you add to the cost (Cost + 50% = Price). Margin is how much of the selling price is profit (Price - Cost / Price). Knowing both is critical for 2026 retail success." },
            { q: "How do I calculate a 'Sales Velocity'?", a: "Divide the total number of units sold by the number of days in the period. This helps you predict when you'll run out of stock and how much money you're making per day." },
            { q: "Can I stack multiple discounts in this calculator?", a: "Yes! Our tool applies discounts one after another (sequentially), which is how most stores handle 'extra 20% off already reduced' sales." },
            { q: "What is a good 'Conversion Rate' for an online shop?", a: "The 2026 average is about 2% to 3%. If your site is lower than this, you might need better photos or faster loading times. Our web-dev tools can help you find those bottlenecks." },
            { q: "How do I calculate 'Volume Discounts'?", a: "Our sales tools help you find the 'Break Even' point where offering a lower price for bulk orders actually makes you more total profit through increased volume." }
        ]
    },
    engineering: {
        title: "Engineering & Machine Math",
        howToUse: "Enter your machine specs—like gear counts, spring sizes, or water flow. Our engine uses standard laws of physics to help you verify your design or school project.",
        whyItWorks: "Engineering requires tiny details to be exactly right. By checking forces and tolerances with verified math, we help you spot issues before they become expensive problems.",
        faq: [
            { q: "What is a Reynolds Number?", a: "A dimensionless value used in fluid mechanics to predict flow patterns, distinguishing between laminar and turbulent flow." },
            { q: "Are these results suitable for manufacturing?", a: "These are for early-stage estimation and verification. Final designs should be validated in professional engineering software." }
        ]
    },
    sports: {
        title: "Athletic Stats & Projections",
        howToUse: "Enter game stats (like hits or at-bats), race times, or your heaviest lifts. We'll calculate your performance scores (like OBP or PACE) to track how you're improving.",
        whyItWorks: "Sports math helps you turn sweat into progress. Whether you're tracking your baseball stats or figuring out your 10k race pace, having real data helps you set and reach higher goals.",
        faq: [
            { q: "What is a 1-Rep Max?", a: "The maximum amount of weight you can lift for a single repetition, used as a benchmark for strength levels." },
            { q: "How are race split times calculated?", a: "By dividing the total distance by your goal time, we determine the exact pace required for every mile or kilometer." }
        ]
    },
    environment: {
        title: "Carbon Footprint & Eco Math",
        howToUse: "Enter your usage data—like how much electricity you use or miles you drive. We'll show you your 'Carbon Footprint' and the impact you're having on the environment.",
        whyItWorks: "Saving the planet starts with knowing where you stand. By measuring your habits in real numbers, you can see where small changes will make the biggest difference for our future.",
        faq: [
            { q: "What is a Carbon Footprint?", a: "The total amount of greenhouse gases (including carbon dioxide and methane) produced by our actions." },
            { q: "How can I lower my Solar ROI?", a: "ROI is improved by maximizing self-consumption of generated power and utilizing local tax incentives or rebates." }
        ]
    },
    culinary: {
        title: "Kitchen Math & Pro Ratios",
        howToUse: "Enter your ingredient weights and how many people you want to feed. We'll scale your recipe perfectly so it tastes the same whether you're feeding 2 or 20.",
        whyItWorks: "Great cooking is all about ratios. By using weight (like grams) instead of volume (like cups), you can ensure perfect consistency every time you step into the kitchen.",
        faq: [
            { q: "Why use weight instead of volume?", a: "Weight is far more accurate, especially for ingredients like flour which can be packed differently in a cup." },
            { q: "What is Baker's Percentage?", a: "A notation method where the mass of each ingredient is expressed as a percentage of the total flour weight (which is always 100%)." }
        ]
    },
    academic: {
        title: "Grades & Study Math",
        howToUse: "Enter your grades, word counts, or reading speed. We'll calculate your GPA or how long it will actually take you to finish that study assignment.",
        whyItWorks: "Success in school is easier when you know the numbers. Whether tracking your GPA or planning your study time for a final exam, data helps you manage your stress and your schedule.",
        faq: [
            { q: "How is weighted GPA calculated?", a: "Weighted GPA gives more 'points' to honors or AP classes (e.g., 5.0 instead of 4.0), reflecting the difficulty of the curriculum." },
            { q: "What is a standard reading speed?", a: "The average adult reads at about 200-250 words per minute. Our tools allow you to adjust this based on your personal pace." }
        ]
    },
    hobbies: {
        title: "Maker Math & Creative Data",
        howToUse: "Enter your project details—like camera settings, 3D printing filament weight, or RPG stats. We'll handle the technical math for your favorite pursuit.",
        whyItWorks: "Every hobby has a layer of math hidden inside. Understanding the technical side allows you to spend more time on the fun part—creating—while knowing your gear and settings are spot on.",
        faq: [
            { q: "How is 3D print cost determined?", a: "By multiplying the weight of material used (plus electricity and failure allowance) by your cost per roll or kilowatt hour." },
            { q: "What is Depth of Field?", a: "The distance between the nearest and furthest objects in an image that appear acceptably sharp." }
        ]
    },
    tech: {
        title: "IT Infrastructure & Data Math",
        howToUse: "Enter details like network IP addresses, file sizes, or code strings. Our tech engine handles simple bit-math, subnetting, and data conversions instantly.",
        whyItWorks: "Modern technology is built on logic and scales. From figuring out how many 'bits' are in a 'byte' to planning a network, these tools help tech pros and students work with 100% accuracy.",
        faq: [
            { q: "What is the difference between bits and bytes?", a: "A byte is 8 bits. Network speeds are usually measured in bits (Mbps), while file sizes are measured in bytes (MB)." },
            { q: "What is a Subnet Mask?", a: "A 32-bit number used to divide an IP address into network and host components for routing." }
        ]
    },
    lifestyle: {
        title: "Life Logistics & Habit Tracking",
        howToUse: "Enter your travel dates, household expenses, or habit streaks. We'll organize your life data into clear schedules or fair bill splits.",
        whyItWorks: "Modern life is busy. By mathematically splitting bills or tracking your daily habits, you can reduce stress and stay on track with your personal growth and financial goals.",
        faq: [
            { q: "How should we split roommate bills?", a: "Common methods include equal splits, income-weighted splits, or per-square-foot ratios for bedroom size." },
            { q: "What is a habit streak?", a: "A measure of consistency defined by the number of consecutive days you have performed a specific task or behavior." }
        ]
    },
    biology: {
        title: "Biology & Lab Calculations",
        howToUse: "Enter your lab samples—like cell counts or DNA primer numbers. Our engine calculates things like 'C1V1' dilutions so your experiments are always exact.",
        whyItWorks: "Lab work leaves no room for error. By using the same formulas scientists use for dilutions and genetic math (like Hardy-Weinberg), we help you avoid mistakes and focus on your research.",
        faq: [
            { q: "What is C1V1?", a: "The standard formula for dilution: Initial Concentration x Initial Volume = Final Concentration x Final Volume." },
            { q: "Why is annealing temperature important?", a: "It determines the specificity of DNA primer binding in PCR; too high or too low can result in no product or incorrect amplification." }
        ]
    },
    pets: {
        title: "Pet Care & Health Math",
        howToUse: "Enter your pet's weight, age, and type. We'll show you how much to feed them and what life stage they're in based on professional vet math.",
        whyItWorks: "Pets can't tell us how they're feeling, so data helps. By calculating their daily calorie needs (RER) and tracking growth curves, you can keep your furry friends healthy and happy for years to many.",
        faq: [
            { q: "How much should I feed my dog?", a: "Feeding depends on Restricted Energy Requirements (RER), which considers weight, activity level, and whether the animal is neutered." },
            { q: "How long is a dog's pregnancy?", a: "The average gestation period for dogs is about 63 days from the time of ovulation." }
        ]
    },
    gardening: {
        title: "Garden Bed & Soil Math",
        howToUse: "Enter the size of your garden or raised bed and how deep your soil needs to be. We'll show you exactly how many yards of soil to buy.",
        whyItWorks: "Gardening is better with a plan. By calculating the exact volume of soil or the right space between plants, you save money at the nursery and grow a healthier, bigger harvest.",
        faq: [
            { q: "How do I calculate soil volume?", a: "Multiply length x width x depth (in feet) and divide by 27 to find the total cubic yards of soil needed." },
            { q: "What does NPK stand for?", a: "Nitrogen (N), Phosphorus (P), and Potassium (K)—the three primary nutrients found in commercial fertilizers." }
        ]
    },
    "time-date": {
        title: "Time Gaps & Duration Math",
        howToUse: "Enter two dates or a period of time. Our engine handles all the complex rules (like leap years and month lengths) to give you the exact answer.",
        whyItWorks: "Time math is tricky to do in your head. Our tools use established calendar rules to help you meet deadlines, count the days to a big event, or plan across different time zones.",
        faq: [
            { q: "How many business days are in a year?", a: "Typically around 260-262, depending on how specific holidays fall and whether it is a leap year." },
            { q: "Does the age calculator include leap years?", a: "Yes, our algorithm accounts for every leap day to ensure to-the-day accuracy since your birth." }
        ]
    },
    geography: {
        title: "Maps, Distance & GPS Math",
        howToUse: "Enter your GPS coordinates or a map scale. We'll help you convert between different systems or figure out real-world travel distances.",
        whyItWorks: "Mapping the earth requires translating a round world onto flat screens and maps. By using standard geography formulas and unit scaling, we help you navigate with 100% confidence.",
        faq: [
            { q: "What is DMS?", a: "Degrees, Minutes, and Seconds—a traditional way of expressing geographic coordinates for navigation." },
            { q: "How does map scale work?", a: "A scale like 1:50,000 means that one unit of measurement on the map represents 50,000 of the same units in the real world." }
        ]
    },
    fashion: {
        title: "Fashion Sizes & Sewing Math",
        howToUse: "Enter your body measurements or fabric details (like length and width). We'll help you find your size or calculate exactly how much fabric your project needs.",
        whyItWorks: "Great fashion is all about geometry and fit. Whether you're sewing a circle skirt or buying shoes from across the world, precision math ensures you always get the perfect fit.",
        faq: [
            { q: "How do I measure for a ring?", a: "Measure the inner circumference or diameter of a well-fitting ring in millimeters and compare to international charts." },
            { q: "What is fabric 'fullness'?", a: "In drapery and skirts, fullness describes how many times the finished width is compared to the flat fabric width (usually 2x or 3x)." }
        ]
    },
    chemistry: {
        title: "Chemistry & Lab Math",
        howToUse: "Enter your chemical formula or sample details. Our engine handles molar mass and balanced equations so you get the results you need for school or the lab.",
        whyItWorks: "Chemistry is an exact science. By using the laws of mass and energy, we provide the backbone for your experiments, helping you prep materials and understand reactions without rounding errors.",
        faq: [
            { q: "What is a Mole?", a: "A standard scientific unit for measuring large quantities of very small entities such as atoms, molecules, or particles (6.022 x 10^23)." },
            { q: "Why is Stoichiometry useful?", a: "It allows you to calculate the exact amount of reactants needed to produce a specific amount of product with zero waste." }
        ]
    },
    entertainment: {
        title: "Pop Culture & Gaming Math",
        howToUse: "Enter details like your binge-watch lists or fictional currency amounts. We turn your favorite fandom data into fun, interesting insights.",
        whyItWorks: "We believe math should be fun. From figuring out how many days you've spent watching a show to converting 'wizard gold' into dollars, these tools help you explore your favorite stories in a new way.",
        faq: [
            { q: "How is 'watch time' calculated?", a: "We multiply the total number of episodes in a series by the average runtime (excluding commercials) to find the total life span of the show." },
            { q: "Is the Harry Potter currency converter accurate?", a: "It's based on the established canon rates (17 Sickles to a Galleon, 29 Knuts to a Sickle) adjusted for inflation-estimated USD values." }
        ]
    },
    converters: {
        title: "Unit & Dimension Converters",
        howToUse: "Pick the units you're starting with (like 'Feet') and what you want to change them to (like 'Meters'). Enter your number and we'll do the rest.",
        whyItWorks: "The world uses many different scales. We use 2026 international standards to ensure that when you convert weight, length, or money, your data remains 100% accurate across any border.",
        faq: [
            { q: "Are these SI-standard conversions?", a: "Yes, we prioritize international standards (NIST) for all physical and engineering unit transformations." },
            { q: "How performant are currency conversions?", a: "Currency tools rely on mid-market exchange rates that are periodically updated to reflect global markets." }
        ]
    },
    "mental-health": {
        title: "Self-Reflection & Mood Tracking",
        howToUse: "Enter how often you feel specific emotions or track your daily sleep patterns. We use established screening tools (like the PHQ-9) to help you see patterns in your well-being.",
        whyItWorks: "Tracking your feelings helps you see trends over time. This makes it easier to have productive, clear conversations with your doctor or therapist about the progress of your mental health journey.",
        faq: [
            { q: "Is this a clinical diagnosis?", a: "No. These are screening indicators. Only a licensed mental health professional can provide a diagnosis." },
            { q: "What is a GAD-7 score?", a: "A validated tool used to screen for and measure the severity of generalized anxiety disorder." }
        ]
    },
    gaming: {
        title: "Gaming & Performance Math",
        howToUse: "Enter your game settings—like mouse speed (DPI), frame rates, or your win/loss record. We'll calculate your rank (ELO) or show you how to match your aim across different games.",
        whyItWorks: "Competitive gaming is about being consistent. By using real rank math and mouse-movement logic, we help you get your hardware set up perfectly so you can focus on winning.",
        faq: [
            { q: "What is ELO?", a: "A rating system used for calculating the relative skill levels of players in zero-sum games like Chess or Esports." },
            { q: "How does sensitivity conversion work?", a: "It calculates the exact 'real-world' distance (cm/360) your mouse travels to ensure your aim feels consistent across different games." }
        ]
    },
    parenting: {
        title: "Child Growth & Milestone Math",
        howToUse: "Enter your child's birth date, height, or weight. We'll show you their developmental milestones using current 2026 WHO and CDC growth charts.",
        whyItWorks: "Every child is unique. By looking at real data from millions of other children, we help you see your child's growth curve in a clear, clinical way that gives you peace of mind.",
        faq: [
            { q: "What does '50th percentile' mean?", a: "It means that compared to a group of 100 children of the same age and gender, 50 are larger and 50 are smaller." },
            { q: "How is a due date calculated?", a: "Most calculators add 280 days (40 weeks) to the first day of your last menstrual period (LMP) using Naegele's rule." }
        ]
    },
    legal: {
        title: "Legal Dates & Award Forecasts",
        howToUse: "Enter your case dates, settlement amounts, or fee details. We'll calculate the 'Statute of Limitations' or show you how attorney fees are split.",
        whyItWorks: "Legal rules use very specific timelines. By providing exact date-math and fee breakdowns, we help you understand your legal rights and financial obligations before you step into a courtroom.",
        faq: [
            { q: "What is Pre-judgment Interest?", a: "Interest that accrues on the amount of a legal judgment from the time the injury occurred until the date of the court's award." },
            { q: "How is a statute of limitations calculated?", a: "It is the maximum time after an event within which legal proceedings may be initiated, often calculated using exact date offsets." }
        ]
    },
    crypto: {
        title: "Crypto & Blockchain Economics",
        howToUse: "Enter how many tokens you have, what you paid for them, and any network fees. We'll calculate your true profit/loss and show you the impact of 'Gas' fees.",
        whyItWorks: "Digital money is volatile. By looking at your fees and using strategies like DCA (Dollar-Cost Averaging), you can manage your digital coins without the stress of confusing spreadsheet math.",
        faq: [
            { q: "How do I calculate profit from my crypto trades?", a: "Subtract your 'Cost Basis' (what you paid plus fees) from the 'Sell Price.' Don't forget that if you swap one coin for another, it's usually treated as a taxable sale in 2026." },
            { q: "What is DCA (Dollar-Cost Averaging)?", a: "It's the strategy of buying a fixed dollar amount (like $50) of a coin every week, regardless of price. This lowers your average cost over time and removes the stress of trying to 'time the market'." },
            { q: "How do 'Gas Fees' work?", a: "Gas is the 'toll' you pay the network to process your transaction. Fees spike when the network is busy. Use our calculator to check the best times to move your coins to save on fees." },
            { q: "How much tax do I pay on crypto gains?", a: "In most places, gains are taxed at your 'Capital Gains' rate. If you hold for more than a year, you usually pay a much lower rate (0-20%) than if you sell in less than a year." },
            { q: "Is 2026 a good time to start in crypto?", a: "With institutional adoption growing, 2026 is a mature phase for digital assets. The best approach is to start small, use a secure wallet, and focus on long-term value over 'get-rich-quick' tokens." }
        ]
    },
    freelance: {
        title: "Freelance Rates & Take-Home Pay",
        howToUse: "Enter your hourly rate, the hours you worked, and any platform fees or taxes. We'll show you exactly how much money lands in your bank account.",
        whyItWorks: "Being your own boss means being your own accountant. By subtracting taxes and fees automatically, these tools help you pick a rate that actually pays your bills and supports your life.",
        faq: [
            { q: "How much should I save for self-employment taxes?", a: "A safe rule is to set aside 25-30% of every check. This covers your standard income tax plus the 15.3% Self-Employment (FICA) tax that employers usually handle for staff." },
            { q: "What hourly rate is equal to a $100k salary?", a: "To make $100k, you need a $50/hour rate—but as a freelancer with no benefits and higher taxes, you should aim for $75 to $100 per hour to maintain the same 'lifestyle' as an employee." },
            { q: "How do I calculate my take-home pay after fees?", a: "Enter your gross rate into our engine, subtract platform fees (like Upwork's 10%) and estimated taxes. We'll show you the exact 'bottom line' that actually hits your bank account." },
            { q: "What business expenses can I write off?", a: "Common 2026 deductions include your home office (square foot method), software subscriptions, hardware (like laptops), and professional education. Every $1 you write off saves you roughly $0.25 to $0.35 in taxes." },
            { q: "Should I charge by the hour or by the project?", a: "Hourly is safest for unpredictable tasks. Project-based (Value-Based) is better if you're very fast and experienced, as it decouples your income from your time and rewards your expertise." }
        ]
    },
    "self-improvement": {
        title: "Habit Streaks & Progress Tracking",
        howToUse: "Enter how often you stick to a habit, how long you read, or your goal progress. We'll show you a clear path to reaching your 2026 milestones.",
        whyItWorks: "Success is about getting 1% better every day. By measuring your gains in real numbers, you turn abstract dreams into concrete habits that actually stick.",
        faq: [
            { q: "What is the 10,000-hour rule?", a: "The idea that it takes approximately 10,000 hours of deliberate practice to master a complex skill." },
            { q: "How do I track progress on non-binary goals?", a: "Use a percentage-based scale (0-100) to mark subjective progress toward a major milestone." }
        ]
    },
    logistics: {
        title: "Shipping & Cargo Estimator",
        howToUse: "Enter the size and weight of your packages and where they're going. We'll calculate the 'Volumetric Weight' and true shipping costs.",
        whyItWorks: "Shipping is about more than just weight. By calculating how much space your cargo takes up (CBM), we help you find the most efficient way to move products across the country or the world.",
        faq: [
            { q: "What is Volumetric Weight?", a: "A pricing technique for commercial freight transport which uses a fixed factor to calculate 'weight' from the volume of a package." },
            { q: "How is CBM calculated?", a: "Cubic Meters—Length x Width x Height (in meters). It is the standard measure of volume in international shipping." }
        ]
    },
    "home-tech": {
        title: "Home Power & Data Usage",
        howToUse: "Enter your devices' power usage or your current Wi-Fi strength. We'll show you your monthly energy cost and if your network can handle 4K streaming.",
        whyItWorks: "Modern homes are powered by data and electricity. Understanding which 'always-on' gadgets are eating your budget helps you run a smarter, faster, and cheaper home.",
        faq: [
            { q: "How much data does 4K streaming use?", a: "Approximately 7GB to 15GB per hour, depending on the bit-rate and compression used by the service." },
            { q: "What is 'Phantom Power'?", a: "The electricity consumed by electronic devices while they are switched off or in standby mode." }
        ]
    },
    "food-science": {
        title: "Food Math & Macro Splits",
        howToUse: "Enter the weight of your ingredients and their nutrition details. We'll calculate your 'Macro Splits' (protein, carbs, fat) and how much sugar is in every bite.",
        whyItWorks: "Healthy eating is a math problem for your metabolism. By looking at 'Glycemic Load' and nutrition density, you can plan meals that give you the most energy and best health.",
        faq: [
            { q: "What is Glycemic Load?", a: "A measure that takes into account the amount of carbohydrate in a portion of food together with how quickly it raises blood glucose levels." },
            { q: "How is a macro split determined?", a: "Based on your total daily calorie goal and the percentage of those calories coming from Protein, Fats, and Carbs." }
        ]
    },
    "ancient-math": {
        title: "Historical Math & Ancient Systems",
        howToUse: "Enter modern numbers to see how they look in Roman numerals, ancient Mayan symbols, or on a traditional Abacus. We show you exactly how people from history solved the same math problems we have today.",
        whyItWorks: "Math is a universal language with many dialects. By exploring how non-base-10 systems work, you can gain a deeper appreciation for the logic and history behind the numbers we use every day.",
        faq: [
            { q: "Why did the Mayans use Base-20?", a: "Likely because it accounted for both fingers and toes on a human body, creating a complete biological counting system." },
            { q: "Are Roman numerals still used in math?", a: "Rarely for calculation, but they remain essential for outlines, clock faces, and historical dating systems." }
        ]
    },
    space: {
        title: "Astronomy & Gravity Math",
        howToUse: "Enter planet details, weights, or distances in Light Years. We'll show you exactly how the laws of gravity and motion work on a massive, cosmic scale.",
        whyItWorks: "Space follows very strict rules of physics. By calculating orbits and how light travels, we help you explore the mechanics of our solar system with pro-level scientific accuracy.",
        faq: [
            { q: "What is an AU?", a: "Astronomical Unit—the average distance from the Earth to the Sun, approximately 93 million miles." },
            { q: "How is Light Year distance calculated?", a: "The distance light travels in a vacuum in one Earth year, about 5.88 trillion miles." }
        ]
    },
    "intl-travel": {
        title: "Travel Budget & Time Sync",
        howToUse: "Enter your flight times, how long your visa lasts, and your budget in any currency. We'll handle the time zones and money conversions for your trip.",
        whyItWorks: "International travel has a lot of moving parts. By syncing your budget and timeline ahead of time, you can focus on the adventure and stop worrying about confusing exchange rates.",
        faq: [
            { q: "How is 'Jet Lag' time calculated?", a: "A common rule of thumb is that it takes one day to recover for every time zone crossed." },
            { q: "What should I include in a travel budget?", a: "Account for fixed costs (flights, hotels) and variable costs (food, local transit) plus a 15% 'contingency fund' for emergencies." }
        ]
    },
    "small-biz": {
        title: "Small Business Cash Flow",
        howToUse: "Enter your staff costs, how fast you're selling products, and your marketing results. We'll show you your 'Runway' and when to hire your next team member.",
        whyItWorks: "Small businesses live and die by cash flow. By calculating your daily 'Burn Rate,' you can make proactive choices about inventory and growth before you run out of funds.",
        faq: [
            { q: "What is my business 'Runway'?", a: "Runway is how many months your business can survive if you make zero additional sales. Total Cash divided by your 'Monthly Burn' (expenses). A safe runway for 2026 is 6 to 12 months." },
            { q: "What is the difference between 'Cash Flow' and 'Profit'?", a: "Profit is what's left after all bills are paid on paper. Cash Flow is the actual money moving in and out of your bank. You can be 'profitable' but still go out of business if your cash is tied up in inventory or unpaid invoices." },
            { q: "How do I calculate 'Customer Lifetime Value' (CLV)?", a: "Average purchase value x number of times they buy per year x average customer relationship years. Knowing this helps you decide how much you can afford to spend on marketing to get one new customer." },
            { q: "When is the right time to hire my first employee?", a: "When you have 3-6 months of their salary saved up AND the work you're falling behind on would generate more revenue than their cost. Our calculator helps you find that 'sweet spot' for growth." },
            { q: "How much inventory should I keep on hand?", a: "Aim for a 2-4 week supply for fast-moving items. Too much inventory 'traps' your cash on the shelf, while too little leads to lost sales. This balance is the secret to high-performing 2026 businesses." }
        ]
    },
    "sustainability-pro": {
        title: "Green Reporting & Eco Metrics",
        howToUse: "Enter your company's usage—like fuel, energy, and supply chain data. We'll calculate your 'Scope 1, 2, and 3' emissions for your 2026 sustainability report.",
        whyItWorks: "Helping the planet means tracking every detail. By using the same standards pros use (like the GHG Protocol), we turn complex resource data into a clear map of your environmental impact.",
        faq: [
            { q: "What are Scope 1, 2, and 3 Emissions?", a: "Scope 1: Direct emissions from owned sources. Scope 2: Indirect emissions from purchased energy. Scope 3: All other indirect emissions in the value chain." },
            { q: "What is Net Zero?", a: "A state in which the greenhouse gases going into the atmosphere are balanced by removal out of the atmosphere." }
        ]
    },
    "real-estate-pro": {
        title: "Commercial Real Estate Math",
        howToUse: "Enter your property income, expenses, and loan details. We'll calculate high-level pros—like 'Cap Rate' and 'IRR'—so you can pick the best investment.",
        whyItWorks: "Professional investing is about more than just a mortgage. By looking at long-term cash flow and return rates, these tools help you compare different buildings to find the best deal.",
        faq: [
            { q: "What is a 'Good' Cap Rate in 2026?", a: "It depends on the risk. A safe apartment building might have a 4-5% Cap Rate, while a riskier warehouse or retail space might be 7-9%. Generally, a higher Cap Rate means more potential profit but more risk." },
            { q: "What is the difference between NOI and Cash Flow?", a: "NOI (Net Operating Income) looks at the property's performance before the mortgage. Cash Flow is what's left after you pay the bank. A property can have a great NOI but still have 'Negative Cash Flow' if your loan is too expensive." },
            { q: "How is IRR (Internal Rate of Return) used?", a: "IRR is the 'Master Number' for investors. it calculates your total profit over the entire time you own the building, including the final sale. It's the best way to compare a real estate deal to a stock market investment." },
            { q: "What is 'Debt Service Coverage Ratio' (DSCR)?", a: "It's your NOI divided by your annual mortgage payments. Banks usually want this to be at least 1.2 to 1.25, meaning the property makes 25% more than it needs to pay the loan." },
            { q: "Should I focus on 'Cash-on-Cash' return?", a: "Yes! This is your annual cash flow divided by the actual cash you put into the deal. In 2026, most pros look for at least 8-10% Cash-on-Cash to justify the work of managing a property." }
        ]
    },
    "productivity-pro": {
        title: "Deep Work & Timing Stats",
        howToUse: "Enter your project dates and how long your tasks are taking. We'll show you your true 'Velocity' and when you'll actually finish your project.",
        whyItWorks: "Great productivity is about finding your rhythm. By tracking how fast you actually work (Agile Velocity), you can set deadlines that you can actually hit without burning out.",
        faq: [
            { q: "What is Velocity in project management?", a: "The amount of work (expressed in units like story points or hours) a team or individual can complete in a set period." },
            { q: "How does the 'Eisenhower Matrix' help?", a: "It categorizes tasks by urgency and importance to help you prioritize work that moves long-term goals forward." }
        ]
    },
    "util-hacks": {
        title: "Utility Hacks & Energy Savings",
        howToUse: "Enter your electricity rates and how much power your appliances use. We'll show you how much you can save by switching to LEDs or changing your AC schedule.",
        whyItWorks: "Little changes in your power use add up to hundreds of dollars a year. By modeling your usage, we help you 'hack' your home budget and lower your bills automatically.",
        faq: [
            { q: "What is Time-of-Use (TOU) pricing?", a: "A utility billing method where the price of energy varies based on the time of day it is consumed." },
            { q: "How much does a leaking faucet cost?", a: "A slow drip (one per second) can waste over 3,000 gallons of water a year—enough to take more than 180 showers." }
        ]
    },
    "pet-wellness": {
        title: "Pet Health & Weight Tracking",
        howToUse: "Enter how active your pet is and their current weight. We'll show you their 'Body Condition Score' (BCS) and help you plan a healthy diet.",
        whyItWorks: "A healthy pet is a happy pet. By tracking their weight and metabolic stats, you can proactively manage their health and help them live a long, energetic life.",
        faq: [
            { q: "What is a Body Condition Score (BCS)?", a: "A numeric scale used to estimate the body fat of an animal, similar to BMI in humans but visually assessed." },
            { q: "How do I calculate 'Dog Years'?", a: "While the '7-year' rule is common, modern science suggests a more complex logarithmic curve based on the pet's size and breed." }
        ]
    },
    "creative-arts": {
        title: "Art Theory & Design Tools",
        howToUse: "Enter color codes (like #FFFFFF) or the size of your canvas. We'll help you use the 'Golden Ratio' and color theory to make your art look professional.",
        whyItWorks: "Most great art has a hidden layer of math inside. Whether using the Rule of Thirds or matching colors, these tools provide the technical skeleton for your creative vision.",
        faq: [
            { q: "What is the Golden Ratio?", a: "A mathematical ratio (approximately 1.618) often found in nature and used in art and architecture to create pleasing compositions." },
            { q: "How are complementary colors chosen?", a: "They are colors located directly opposite each other on the color wheel, creating the highest possible contrast." }
        ]
    },
    "survival-bushcraft": {
        title: "Survival & Wilderness Skills",
        howToUse: "Enter how fast you walk and how much water you have. We'll calculate how long your supplies will last and help you stay on track in the wild.",
        whyItWorks: "Survival is about knowing your limits. By calculating your water use and travel speed accurately, you can make life-saving choices and return home safely from your adventure.",
        faq: [
            { q: "How much water do I need per day in the wild?", a: "A baseline of 3-4 liters for an active adult, but this can double in extreme heat or at high altitudes." },
            { q: "What is a 'True North' offset?", a: "The difference between magnetic north (where a compass points) and the geographic North Pole, also known as magnetic declination." }
        ]
    },
    "event-master": {
        title: "Event Planning & Party Math",
        howToUse: "Enter how many guests are coming and how big the venue is. We'll calculate exactly how much food, drink, and space you need for a perfect party.",
        whyItWorks: "Great events are built on balance. By calculating guest-to-server ratios and square footage per person, you ensure everyone is comfortable and the party flows perfectly.",
        faq: [
            { q: "How much space is needed per guest?", a: "Between 7 and 15 square feet per person for a cocktail party, increasing to 15-20 for a seated dinner." },
            { q: "What is a standard 'No-Show' rate?", a: "For large events, a 15-25% 'no-show' rate is typical, though this varies by event type and RSVP method." }
        ]
    },
    "auto-tune": {
        title: "Car Tuning & Performance Mods",
        howToUse: "Enter your car's engine size and any performance parts you've added (like a turbo). We'll show you how your power and handling will change.",
        whyItWorks: "Tuning is about pushing limits safely. By calculating your air-fuel and gear ratios, you can get the most power possible out of your engine without risking a breakdown.",
        faq: [
            { q: "What is AFR (Air-Fuel Ratio)?", a: "The mass ratio of air to a solid, liquid, or gaseous fuel present in a combustion process." },
            { q: "How does turbo boost affect horsepower?", a: "In general, every pound of boost increases horsepower by about 7%, though thermal efficiency limits this at high pressures." }
        ]
    },
    "garden-agri": {
        title: "Farm Yield & Field Management",
        howToUse: "Enter your field size, how many seeds you're planting, and your past results. We'll calculate your expected harvest and how much fertilizer you need.",
        whyItWorks: "Modern farming is built on data. By calculating exactly how many plants fit on an acre, you can maximize your harvest while wasting less money and effort on products you don't need.",
        faq: [
            { q: "What is 'Yield per Acre'?", a: "The measure of the amount of crop harvested per unit of land area, a key indicator of agricultural productivity." },
            { q: "How do I calculate seed requirements?", a: "Multiply the target plant population by the area, and adjust for the expected germination rate of the seed lot." }
        ]
    },
    "audio-pro": {
        title: "Pro Audio & Room Acoustics",
        howToUse: "Enter your room size or speaker and microphone specs. We'll help you calculate the best sound levels and speaker placement for perfect audio.",
        whyItWorks: "Great sound is all about the physics of waves. By calculating how sound bounces off your walls, we help you fix echo issues and create a pro-level listening environment.",
        faq: [
            { q: "What are Room Modes?", a: "Standing waves that occur in a room when the distance between walls matches a multiple of the wavelength of a specific frequency." },
            { q: "How is decibel (dB) gain calculated?", a: "A logarithmic unit used to express the ratio of two values of a physical quantity, such as power or intensity." }
        ]
    },
    "social-content": {
        title: "Social Media Growth & Stats",
        howToUse: "Enter your follower count, your total likes and comments, and how long your videos are. We'll show you how likely your content is to go viral.",
        whyItWorks: "Digital growth is about engagement. By look at the ratio of views to likes, these tools help you see what really resonates with your audience so you can grow your following faster.",
        faq: [
            { q: "What is Engagement Rate?", a: "Total interactions (likes, comments, shares) divided by total followers or total reach." },
            { q: "How does the 'Hook' affect watch time?", a: "The first 3 seconds are critical; drop-off in this window often determines whether a platform's algorithm will continue to push the content." }
        ]
    },
    "hobby-crafts": {
        title: "Craft & Material Estimator",
        howToUse: "Enter the size of your project and the weight of your yarn or type of wood. We'll show you exactly how much material to buy and what it will cost.",
        whyItWorks: "Crafting can be expensive if you buy too much. By calculating the exact yards of wool or feet of lumber you need, you can price your work correctly and save money on your next DIY project.",
        faq: [
            { q: "How do I calculate yarn for a project?", a: "By measuring the area of your pattern and dividing by the 'gauge' (stitches per inch) and the length of your specific yarn weight." },
            { q: "What is a 'Cut List'?", a: "A detailed list of every piece of wood needed for a project, including dimensions and quantities, to optimize the use of raw lumber." }
        ]
    },
    aviation: {
        title: "Aviation & Flight Math",
        howToUse: "Enter your altitude, air temperature, and weight. Our engine calculates how the 'thinness' of the air (density altitude) and your plane's balance (center of gravity) will affect your flight in 2026.",
        whyItWorks: "Safe flying is about managing physics. By calculating how temperature affects lift and ensuring your cargo is balanced correctly, you can predict exactly how long your takeoff roll will be and how safely the plane will handle in the air.",
        faq: [
            { q: "Why does hot weather make it harder to take off?", a: "Hot air is less dense ('thinner'), which means your wings get less lift and your engine makes less power. This is called high 'Density Altitude,' and it's critical for summer flight safety." },
            { q: "What happens if a plane is poorly balanced?", a: "If too much weight is in the back (aft CG), the plane might tip up and stall. If it's too far forward, you might not be able to pull the nose up to land. Correct balance is a life-saving calculation." },
            { q: "Can I use this for real flight planning?", a: "While these tools use standard 2026 aerodynamic formulas, always cross-check results with your specific aircraft's Pilot Operating Handbook (POH) before flying." },
            { q: "How does altitude affect fuel use?", a: "Generally, the higher you fly, the less fuel you use because the air is thinner, provided you lean your engine correctly. Our tools help estimate these efficiency gains." },
            { q: "What is 'True Airspeed'?", a: "It's how fast you're actually moving through the air, which can be much faster than what your dashboard says when you're flying high." }
        ]
    },
    "space-tech": {
        title: "Rocket Science & Space Flight",
        howToUse: "Enter your rocket's fuel weight and where you're trying to go. Our engine calculates exactly how much power (Delta-V) you need to reach orbit or travel to another planet.",
        whyItWorks: "Reaching space is all about weight and power. By calculating the 'Tyranny of the Rocket Equation,' we help you see if your design is light enough and powerful enough to break free of Earth's gravity.",
        faq: [
            { q: "What is Delta-V?", a: "The change in velocity required to perform a space maneuver, such as reaching orbit or changing trajectory." },
            { q: "How is the Rocket Equation used?", a: "It relates the delta-v of a rocket to its exhaust velocity and the ratio of its initial and final mass (fuel vs. structure)." }
        ]
    },
    "solar-energy": {
        title: "Solar Power & Savings",
        howToUse: "Enter which way your roof faces, how much sun you get, and your panel details. We'll show you exactly how much energy you'll make and when the panels will pay for themselves.",
        whyItWorks: "Solar is a long-term investment in your home. By looking at 25 years of sun data and the way panels lose power over time, we help you see the real financial value of going green.",
        faq: [
            { q: "What are 'Peak Sun Hours'?", a: "The amount of solar radiation at a location that is equivalent to 1,000 watts per square meter for 1 hour." },
            { q: "What is a Solar Inverter?", a: "The device that converts the Direct Current (DC) electricity generated by panels into useable Alternating Current (AC) for your home." }
        ]
    },
    "data-science": {
        title: "Data Magic & Stats",
        howToUse: "Enter your numbers or probabilities. Our engine handles the complex statistics—like averages and standard deviations—to help you find the real story in your data.",
        whyItWorks: "Numbers can be messy. By using exact statistical tests (like p-values), we help you figure out if a trend is a meaningful discovery or just a random lucky guess.",
        faq: [
            { q: "What is Standard Deviation?", a: "A measure of the amount of variation or dispersion of a set of values; a low deviation indicates the values tend to be close to the mean." },
            { q: "What is a p-value?", a: "The probability of obtaining test results at least as extreme as the results actually observed, assuming the null hypothesis is correct." }
        ]
    },
    "web-dev": {
        title: "Web Design & Screen Sizes",
        howToUse: "Enter the size of your screen or the weight of your images. Our engine helps you calculate the best aspect ratios and loading speeds so your website looks great on every device.",
        whyItWorks: "The web needs to look good on phones and giant monitors. By calculating exactly how images scale and measuring 'Core Web Vitals,' we help you build a faster, better, and more professional digital world.",
        faq: [
            { q: "What is an Aspect Ratio?", a: "The proportional relationship between its width and its height (e.g., 16:9 for widescreen video)." },
            { q: "What are 'Cumulative Layout Shift' (CLS) issues?", a: "When web elements move unexpectedly as the page loads, often caused by images without defined height/width attributes." }
        ]
    },
    "cyber-sec": {
        title: "Security & Password Strength",
        howToUse: "Enter your password length or the type of security you're using. We'll show you exactly how long it would take for a computer to crack your code.",
        whyItWorks: "Security is a math game. By calculating the 'Entropy' (the randomness) of your password, we help you understand the real-world risk and build better defenses for your digital life.",
        faq: [
            { q: "What is Entropy in passwords?", a: "A measure of how unpredictable a password is; higher entropy means a password is much harder for a computer to guess." },
            { q: "How long does a 256-bit key take to crack?", a: "With current technology, it is mathematically impossible—taking billions of years even with the world's most powerful computers." }
        ]
    },
    geology: {
        title: "Earth, Rocks & Seismic Math",
        howToUse: "Enter rock details or seismic (earthquake) speeds. Our engine calculates how the earth moves and what's deep beneath our feet.",
        whyItWorks: "Geology is the physics of our planet over millions of years. By calculating how fast plates move or how much pressure turns rock into diamonds, we help you explore the incredible history of the Earth.",
        faq: [
            { q: "What is the Mohs Scale?", a: "A qualitative scale (1 to 10) characterizing the scratch resistance of various minerals through the ability of harder material to scratch softer material." },
            { q: "How is seismic magnitude calculated?", a: "The Moment Magnitude Scale measures the total energy released by an earthquake based on the area of the fault that slipped." }
        ]
    },
    "weather-pro": {
        title: "Weather Stats & Air Science",
        howToUse: "Enter the air pressure, humidity (dew point), and wind speed. We'll show you exactly how 'thick' the air feels and what the storm risk is.",
        whyItWorks: "Weather is a giant balancing act of air and water. By calculating the heat index and wind chill, we turn raw barometer and sensor data into clear, easy-to-understand forecasts for your comfort.",
        faq: [
            { q: "What is Dew Point?", a: "The temperature at which air must be cooled to become saturated with water vapor, a key indicator of how 'humid' the air feels." },
            { q: "How is Wind Chill calculated?", a: "A formula that estimates the rate of heat loss from exposed skin caused by the combination of low temperature and wind." }
        ]
    },
    "retail-pro": {
        title: "Store Sales & Shopper Math",
        howToUse: "Enter how many people came into your store and how many bought something. We'll show you how much every visitor is worth to your bottom line.",
        whyItWorks: "Professional retail is about making the most of every visitor. By help you see your 'Conversion Rate' and inventory turnover, you can pick the right products and staff to grow your shop.",
        faq: [
            { q: "What is GMROI?", a: "Gross Margin Return on Investment—a ratio that measures a retailer's ability to turn inventory into cash above the cost of the inventory." },
            { q: "How is Conversion Rate calculated?", a: "The percentage of total visitors to a store who make a purchase." }
        ]
    },
    manufacturing: {
        title: "Factory Efficiency & Output",
        howToUse: "Enter how long a job takes and how often your machines are running. We'll calculate your 'OEE' score to show you if your factory is working at its best.",
        whyItWorks: "Great manufacturing is about finding and fixing waste. By looking at your machine uptime and defect rates, we help you spot exactly where to improve to increase your output.",
        faq: [
            { q: "What is OEE?", a: "Overall Equipment Effectiveness—the gold standard for measuring manufacturing productivity, calculated as Availability x Performance x Quality." },
            { q: "What is a 'Lean' process?", a: "A methodology focused on minimizing waste within manufacturing systems while simultaneously maximizing productivity." }
        ]
    },
    "marine-science": {
        title: "Ocean, Tides & Salt Math",
        howToUse: "Enter salt levels (salinity) and how deep the water is. We'll calculate the water pressure and how fast light fades as you go deeper.",
        whyItWorks: "The ocean is a world of pressure and gradients. By calculating how salt affects weight and how heat moves through the deep, we help you understand the amazing biology of life under the sea.",
        faq: [
            { q: "How does salinity affect buoyancy?", a: "Higher salinity increases the density of water, which in turn increases the buoyant force acting on submerged objects." },
            { q: "What is 'Light Attenuation'?", a: "The decrease in light intensity as it travels through water, which determines the depth of the 'photic zone' where photosynthesis can occur." }
        ]
    },
    optics: {
        title: "Lenses, Light & Focus",
        howToUse: "Enter lens details or how far away an object is. Our engine uses standard laws of light to show you exactly where an image will focus.",
        whyItWorks: "Optics is the study of how light bounces and bends. By calculating how photons move through glass and air, we help you design everything from cameras to vision-correcting glasses.",
        faq: [
            { q: "What is Refractive Index?", a: "A dimensionless number that describes how fast light travels through a specific material compared to a vacuum." },
            { q: "How is Focal Length measured?", a: "The distance between the center of a lens or curved mirror and its focus point." }
        ]
    },
    pharmacy: {
        title: "Health Dosage & Concentration",
        howToUse: "Enter the patient's weight and the medicine details. Our engine calculates exactly how much to give and how fast should drip.",
        whyItWorks: "Medicine math must be perfect. By standardizing doses based on body size and metabolism, we help ensures that every patient gets exactly what they need for safe and effective care.",
        faq: [
            { q: "What is BSA?", a: "Body Surface Area—the measured or calculated surface area of a human body, often considered a more accurate indicator of metabolic mass than weight alone." },
            { q: "How is a drip rate calculated?", a: "By dividing the total volume to be infused by the time, and multiplying by the 'drop factor' of the specific IV tubing." }
        ]
    },
    forensics: {
        title: "Forensics & Scene Logic",
        howToUse: "Enter details from the scene—like temperatures or angles. We'll use the laws of physics to help you reconstruct exactly what happened.",
        whyItWorks: "Forensics is about working backward from the facts. By calculating things like body cooling or the arc of a projectile, we turn evidence into an objective map of past events.",
        faq: [
            { q: "What is Algor Mortis?", a: "The second stage of death, defined as the change in body temperature post-mortem until the ambient temperature is matched." },
            { q: "How is impact angle determined in blood spatter?", a: "By calculating the ratio of the width to the length of the blood drop and using the arcsine function." }
        ]
    },
    archaeology: {
        title: "Ancient History & Carbon Dating",
        howToUse: "Enter your sample's isotope levels or the depth where it was found. We'll calculate the estimated age of your artifact.",
        whyItWorks: "Archaeology uses the constant rules of nature to map human history. By applying 'Carbon-14' math and looking at earth layers, we help you place ancient finds into their correct cultural context.",
        faq: [
            { q: "What is a Half-Life?", a: "The time taken for the radioactivity of a specified isotope to fall to half its original value." },
            { q: "How does Stratigraphy help in dating?", a: "Based on the Law of Superposition, older layers of earth are typically buried deeper than more recent layers." }
        ]
    },
    "music-theory": {
        title: "Music Math & Frequencies",
        howToUse: "Enter your notes, scale, or the speed of the song (BPM). We'll show you your frequencies and how to divide your rhythms perfectly.",
        whyItWorks: "Music is audible mathematics. By calculating the exact vibration of a string or the subdivision of a beat, we map the bridge between technical numbers and the emotions of a great song.",
        faq: [
            { q: "What is the frequency of 'A440'?", a: "440 Hertz—the standard tuning pitch for the note A above middle C, used as a reference point for western music." },
            { q: "What is an 'interval'?", a: "The difference in pitch between two sounds, calculated as the ratio of their frequencies." }
        ]
    },
    "coffee-craft": {
        title: "Coffee Science & Brewing Ratio",
        howToUse: "Enter how much coffee and water you're using. We'll show you the exact 'Brew Ratio' for a perfect, professional-tasting cup.",
        whyItWorks: "The perfect cup of coffee is all about extraction. By weighing your coffee and water accurately, you can replicate the exact flavor of a world-class barista every morning.",
        faq: [
            { q: "What is TDS?", a: "Total Dissolved Solids—a measure of the 'strength' of your coffee, usually between 1.2% and 1.5% for standard drip." },
            { q: "What is a 'Standard Brew Ratio'?", a: "Commonly 1:15 to 1:17 (grams of coffee to grams of water) for a balanced extraction." }
        ]
    },
    mixology: {
        title: "Craft Cocktails & Liquid Math",
        howToUse: "Input your alcohol percentages, sugar levels, and liquid volumes. Our engine calculates the final strength (ABV) and shows you how to layer drinks perfectly using liquid weight (density).",
        whyItWorks: "A great cocktail is a balance of flavor and physics. By calculating the exact alcohol-by-volume and understanding which syrups are 'heavier' than spirits, you can create professional tiered drinks and perfectly balanced recipes every time.",
        faq: [
            { q: "How do I make a layered 'Rainbow' drink?", a: "It's all about density. Liquids with more sugar (like grenadine) are heavier and sink to the bottom, while high-proof spirits are lighter and float. We calculate these 'Specific Gravity' weights for you." },
            { q: "How strong is my homemade punch?", a: "Add up the total alcohol from your spirits and divide it by the total volume of all juices and mixers. For a party standard, aim for 10-15% ABV to keep things safe and enjoyable." },
            { q: "What is 'Brix' and why does it matter?", a: "Brix is just a fancy word for sugar content. Knowing your Brix helps you balance sweetness against the 'bite' of the alcohol for a professional-tasting drink." },
            { q: "Does ice dilution change the math?", a: "Yes. Stirring or shaking adds water, usually diluting your drink by about 20-25%. Our advanced tools factor this in for expert-level accuracy." },
            { q: "What is a 'Standard Drink'?", a: "Usually 1.5oz of spirits, 5oz of wine, or 12oz of beer. Each contains roughly 14 grams of pure alcohol." }
        ]
    },
    "baking-pro": {
        title: "Bread Science & Dough Hydration",
        howToUse: "Enter the weight of your flour and the temperature of your kitchen. Our engine calculates exactly how much water to add for a perfect crumb.",
        whyItWorks: "Professional baking is all about controlling chemistry. By managing water ratios and final dough temperature, you can ensure your bread ferments perfectly every single time.",
        faq: [
            { q: "What is Dough Hydration?", a: "The ratio of water to flour by weight. A 70% hydration dough has 70g of water for every 100g of flour." },
            { q: "Why is Final Dough Temperature (FDT) critical?", a: "It controls the speed of yeast activity; inconsistent temperatures lead to inconsistent fermentation and flavor." }
        ]
    },
    "outdoor-elec": {
        title: "Camping & Battery Power",
        howToUse: "Enter your battery's capacity and what you're plugging in. We'll show you exactly how many hours of power you have left for your trip.",
        whyItWorks: "Off-grid power is about budgeting your energy. By looking at how much 'juice' you have vs. how much your gadgets use, we help you plan for safety and comfort in the great outdoors.",
        faq: [
            { q: "What is Watt-Hour (Wh)?", a: "A unit of energy equivalent to one watt of power sustained for one hour." },
            { q: "Can I fully drain a Lead-Acid battery?", a: "No, typically you should only use 50% of its capacity to avoid permanent damage. Lithium batteries can usually handle 80-95% discharge." }
        ]
    },
    aquarium: {
        title: "Fish Tank & Water Math",
        howToUse: "Enter your tank's size and how many fish you have. We'll show you exactly how to balance your water and how much oxygen you need.",
        whyItWorks: "A fish tank is a tiny, closed world. By calculating your water's 'Nitrogen Cycle' and volume, you can keep your fish healthy and prevent toxic spikes that ruin your setup.",
        faq: [
            { q: "How do I calculate tank volume?", a: "Multiply length x width x height (in inches) and divide by 231 to find the total US Gallons." },
            { q: "What is the 'Inch per Gallon' rule?", a: "A rough guideline for stocking fish, suggesting 1 inch of fish per gallon of water, though filtration and species type are more critical factors." }
        ]
    },
    "rocketry-drones": {
        title: "Drone Power & Rockets",
        howToUse: "Enter your drone's weight and motor power. Our engine calculates if you have enough 'lift' to fly and how long your battery will last.",
        whyItWorks: "Flight is a constant battle between weight and thrust. By calculating your power-to-weight ratio, we help you fly safely and get the best performance out of your aerial gear.",
        faq: [
            { q: "What is a Thrust-to-Weight Ratio?", a: "For a drone, it needs to be at least 2:1 to take off and hover comfortably; racing drones can exceed 10:1." },
            { q: "What is 'C-Rating' on a battery?", a: "A measure of how quickly a battery can be safely discharged (e.g., a 50C battery can discharge at 50 times its capacity)." }
        ]
    },
    horology: {
        title: "Watchmaking & Timekeeping Science",
        howToUse: "Enter your watch's gear counts or its 'beat' frequency. Our engine calculates how many times it ticks per hour (BPH) and helps you track if it's gaining or losing time.",
        whyItWorks: "Mechanical watches are tiny machines governed by strict math. By calculating the exact ratio of the gears, we can help you understand the health of your timepiece and measure the micro-seconds of drift that define a high-quality chronometer.",
        faq: [
            { q: "What does 'BPH' mean in a watch?", a: "It stands for Beats Per Hour. It's how many times the watch 'ticks' in an hour. High-end watches usually tick 28,800 times per hour, which makes the second hand look very smooth." },
            { q: "Is it normal for my watch to lose 10 seconds a day?", a: "For a standard mechanical watch, yes. However, 'Chronometer' grade watches (like Rolex or Omega) are built to stay within -4 to +6 seconds per day. Use our tools to track your own watch's drift." },
            { q: "How many hours of 'Power Reserve' do I need?", a: "Most modern watches last 40-70 hours. If you take your watch off on Friday night and want it to still be running Monday morning, you need a 60-hour reserve." },
            { q: "Why does my watch tick faster than others?", a: "Different 'movements' use different frequencies. A faster tick usually means better accuracy because it's less affected by your wrist movements." },
            { q: "What is a 'Tourbillon'?", a: "A complex mechanical feature designed to cancel out the effects of gravity on a watch's accuracy. It's one of the highest expressions of watchmaking math." }
        ]
    },
    linguistics: {
        title: "Language Analytics & Writing Density",
        howToUse: "Paste your text or enter word counts. Our engine calculates how easy your writing is to read (Flesch-Kincaid) and analyzes your vocabulary variety and sentence structure.",
        whyItWorks: "All language has a hidden mathematical rhythm. By measuring things like 'Lexical Diversity' (how many unique words you use), we can help you tune your writing for a specific audience—whether that's a professional journal or a simple social media post.",
        faq: [
            { q: "How do I make my writing easier to read?", a: "Use shorter sentences and simpler words. Our engine provides a 'Reading Grade Level' which helps you target the right complexity for your audience." },
            { q: "What is a good 'Reading Grade Level' for the web?", a: "Aim for a 7th to 9th-grade level. Even for smart audiences, writing that is easy to scan is more effective and ranks better on 2026 search engines." },
            { q: "Does my vocabulary variety matter?", a: "Yes. Too much repetition can be boring, but too much variety (high lexical diversity) can make text hard to understand. The best writing finds a balance of clear, core terms." },
            { q: "How much does text grow when translated?", a: "If translating English to German or Spanish, expect the text to grow by 20-30%. This is critical for knowing if your text will still fit on a page or button." },
            { q: "Can math really analyze my speaking style?", a: "Yes. By using 'Zipf's Law' (the math of word frequency), we can identify unique speech patterns and the evolution of different dialects." }
        ]
    },
    "formal-logic": {
        title: "Logic Gates & Truth-Set Math",
        howToUse: "Type in your 'if-then' statements or logic variables. We'll build a truth table to help you find errors in your reasoning or design.",
        whyItWorks: "Logic is the foundational grammar for computer science. By mapping out every possible 'True' or 'False' combo, you can verify your arguments and build faster, better code.",
        faq: [
            { q: "What is a Truth Table?", a: "A breakdown of all possible truth values for a logical expression based on its inputs." },
            { q: "What is 'Modus Ponens'?", a: "A fundamental rule of logic: if P implies Q, and P is true, then Q must also be true." }
        ]
    },
    sociology: {
        title: "Social Trends & Population Data",
        howToUse: "Enter your population numbers or growth rates. We'll show you how your town or group will change over time.",
        whyItWorks: "Sociology uses data to understand how groups of people live. By calculating birth rates and age averages, we help project what services people will need in the years to many.",
        faq: [
            { q: "What is the Gini Coefficient?", a: "A statistical measure of distribution intended to represent the income or wealth inequality within a nation or social group." },
            { q: "How is 'Replacement Rate' calculated?", a: "The fertility rate (approx 2.1 children per woman) needed to keep a population stable from one generation to the next." }
        ]
    },
    "urban-planning": {
        title: "City Design & Street Logistics",
        howToUse: "Enter the size of your building and how many people walk by. We'll calculate 'Walk Scores' and if you have enough parking for your project.",
        whyItWorks: "Good city design balances human needs with space. By calculating exactly how much traffic or power a new building needs, we help ensure your project fits perfectly into the neighborhood.",
        faq: [
            { q: "What is Floor Area Ratio (FAR)?", a: "The ratio of a building's total floor area to the size of the piece of land upon which it is built." },
            { q: "How is 'Walkability' measured?", a: "Based on the proximity of amenities like grocery stores, schools, and parks within a 5-15 minute walk." }
        ]
    },
    "eco-legal": {
        title: "Eco Law & Compliance",
        howToUse: "Enter your pollution levels or project dates. We'll show you your 'Net Gain' and if you're meeting 2026 environmental standards.",
        whyItWorks: "Environmental law is where nature meets the rules. By quantifying your 'Carbon Offsets' and impact, we help businesses stay honest and protected while protecting the planet.",
        faq: [
            { q: "What is Biodiversity Net Gain?", a: "An approach to development that leaves biodiversity in a measurably better state than it was before." },
            { q: "How are carbon credits calculated?", a: "Usually represented as one tonne of carbon dioxide (or equivalent) prevented from entering the atmosphere." }
        ]
    },
    "disaster-prep": {
        title: "Emergency Prep & Supplies",
        howToUse: "Enter how many people are in your family and how many days you're preparing for. We'll calculate exactly how much water and food you need to stay safe.",
        whyItWorks: "Safety starts with a plan. By calculating how long your supplies will actually last, we turn worry into a clear, actionable list of what you need for your emergency kit.",
        faq: [
            { q: "How much water is needed per person per day?", a: "FEMA recommends at least 1 gallon per person per day (half for drinking, half for hygiene), for at least two weeks." },
            { q: "What is a 'Bug-Out' Bag?", a: "A portable kit that contains the items one would require to survive for seventy-two hours when evacuating from a disaster." }
        ]
    },
    "esports-pro": {
        title: "Esports & Team Performance",
        howToUse: "Enter your match scores, how much gold you're earning, and your accuracy stats. We'll calculate your performance in every game.",
        whyItWorks: "Pro gaming is won with data. By Identifying gaps in how you earn resources or how well you aim, coaches and players can find the data-backed edge needed to win championships.",
        faq: [
            { q: "What is Effective HP (EHP)?", a: "A calculation of a character's survivability that factors in health, armor, and resistances together." },
            { q: "How is 'Gold Per Minute' (GPM) used?", a: "As a primary indicator of map efficiency and resource priority in MOBAs like League of Legends or Dota 2." }
        ]
    },
};

export const DEFAULT_EDUCATION: CategoryEducation = {
    title: "Simple Answers & Expert Logic",
    howToUse: "Just follow the simple prompts to enter your numbers. Our engine does the hard work, turning your unique inputs into clear, accurate results using the latest 2026 standards in real-time.",
    whyItWorks: "We believe that complex math should be accessible to everyone. Our tools are built on the same formulas used by scientists, banks, and engineers, but we've simplified the inputs so you can get the answers you need without a specialized degree.",
    faq: [
        { q: "is my data safe and private?", a: "Absolutely. We don't store your personal info or track your calculations. Everything happens right in your browser (or secretly via our secure engine), and it vanishes as soon as you close the page." },
        { q: "Are these calculators accurate for 2026?", a: "Yes. We update our constants and formulas constantly to match the current 2026 industry standards and real-world benchmarks, ensuring you get pro-level precision every time." }
    ]
};
