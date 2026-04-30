
export interface CategoryEducation {
    title: string;
    whyItWorks: string;
    howToUse: string;
    faq: {q: string, a: string}[];
}

export const CATEGORY_EDUCATION: Record<string, CategoryEducation> = {
    finance: {
        title: "Finance & Investment Principles",
        howToUse: "Enter your primary financial variables such as principal, interest rate, or time period. Our algorithms apply standard financial formulas (like TVM, CAGR, or ROI) to project your results. Adjust inputs to see how small changes impact your long-term wealth.",
        whyItWorks: "Financial planning relies on the time value of money. Whether you're calculating retirement growth or loan interest, understanding the mathematical relationship between time and capital is the key to building sound financial strategies. Our calculators use verified industry formulas to ensure accuracy.",
        faq: [
            { q: "How accurate are these financial projections?", a: "These tools provide estimates based on mathematical formulas. Real-world results may vary due to market fluctuations, tax changes, and fees." },
            { q: "Should I use these for professional tax advice?", a: "No, these are educational tools. Always consult with a certified financial planner or tax professional for critical decisions." },
            { q: "What is the 'Rule of 72'?", a: "A quick way to estimate how many years it will take for your investment to double, calculated by dividing 72 by your annual rate of return." }
        ]
    },
    health: {
        title: "Health & Fitness Science",
        howToUse: "Input your physical measurements like height, weight, age, and activity level. Use the toggle buttons for Metric or Imperial units. The engine calculates your biological markers based on established medical formulas like BMI or Mifflin-St Jeor.",
        whyItWorks: "Metabolic and physical tracking allows you to make data-driven decisions about your health. By understanding your Basal Metabolic Rate (BMR) or Body Mass Index (BMI), you can better manage your nutritional intake and fitness goals. These formulas are standardized tools used by healthcare professionals globally.",
        faq: [
            { q: "Is BMI an accurate measure of health?", a: "BMI is a screening tool that correlates weight and height. It does not directly measure body fat or muscle mass, which are also critical health markers." },
            { q: "What is BMR?", a: "Basal Metabolic Rate is the number of calories your body needs to perform basic life-sustaining functions while at rest." },
            { q: "How often should I recalculate my stats?", a: "Recalculating every 4-8 weeks is recommended as your weight and activity levels change." }
        ]
    },
    math: {
        title: "Mathematical Foundations",
        howToUse: "Input your variables into the specified fields. Our math engine handles both basic arithmetic and advanced algebraic or geometric functions. Results are calculated instantly with high precision.",
        whyItWorks: "Mathematics is the language of the universe. From solving the Pythagorean theorem to complex statistics, our tools are built on fundamental geometric and algebraic laws that provide consistent, verifiable outcomes for students and professionals alike.",
        faq: [
            { q: "Does the calculator support order of operations?", a: "Yes, all internal calculations follow standard PEMDAS/BODMAS rules to ensure mathematical integrity." },
            { q: "Are the geometric formulas verified?", a: "Yes, we use standard Euclidean geometry constants (like Pi) and formulas for all shape-based calculations." }
        ]
    },
    construction: {
        title: "Construction & Engineering Metrics",
        howToUse: "Enter the dimensions of your project area—length, width, and depth/height. Specify your material types where applicable. The calculator will determine the volume or quantity required, usually adding a standard waste factor.",
        whyItWorks: "Accurate material estimation prevents waste and ensures structural integrity. By applying geometric volume formulas to construction materials like concrete, lumber, or gravel, you can project costs and requirements with contractor-level precision.",
        faq: [
            { q: "Should I add extra for waste?", a: "Yes, most calculators provide the exact mathematical requirement. We recommend adding 5-10% for cuts and transit waste." },
            { q: "Are these calculations suitable for structural permit applications?", a: "These tools are for estimation. Final structural plans should be verified by a licensed engineer or architect." }
        ]
    },
    insurance: {
        title: "Risk Management & Insurance Logic",
        howToUse: "Provide details about your assets, liability requirements, and coverage goals. The engine calculates estimated premiums or coverage gaps based on general actuarial principles.",
        whyItWorks: "Insurance math is centered around risk mitigation. By calculating the potential cost of losses versus the cost of coverage, you can identify 'optimal risk' for your specific situation. These tools help translate complex policy math into understandable figures.",
        faq: [
            { q: "Does this provide official quotes?", a: "No, these are estimates based on generalized models. Official quotes require individual underwriting from a provider." },
            { q: "What is a deductible?", a: "The amount you pay out-of-pocket before your insurance coverage begins for a specific claim." }
        ]
    },
    science: {
        title: "Scientific Principles & Unit Conversions",
        howToUse: "Select your input units and provide your measurements. Use the scientific notation toggles for very large or small numbers. The tool converts using standard international constants.",
        whyItWorks: "Science relies on standardized units and repeatable measurement. Our tools use the latest SI (International System of Units) conversion factors and physical constants (like the speed of light or Avogadro's number) to provide peer-review quality calculations.",
        faq: [
            { q: "What is Scientific Notation?", a: "A way of expressing numbers that are too large or too small to be conveniently written in decimal form (e.g., 6.022 x 10^23)." },
            { q: "Are the physical constants up to date?", a: "Yes, we utilize standard consensus values for all fundamental physical and chemical constants." }
        ]
    },
    everyday: {
        title: "Utility & Lifestyle Optimization",
        howToUse: "Input the specific data points requested, such as times, dates, or supermarket prices. Our algorithms simplify these common tasks into clear, actionable results.",
        whyItWorks: "Daily life is full of small mathematical decisions. From comparing unit prices at the grocery store to managing time across zones, efficiency tools help reduce cognitive load and save time and money through basic algebraic optimization.",
        faq: [
            { q: "How do I calculate Unit Price?", a: "Divide the total price of the item by the total weight, volume, or count to find the cost per single unit." },
            { q: "Is time conversion accurate for DST?", a: "Our tools use standard UTC offsets. Always double-check results for specific regions during Daylight Saving transitions." }
        ]
    },
    automotive: {
        title: "Automotive Engineering & Performance",
        howToUse: "Enter your vehicle's technical data—distance, fuel consumption, tire size, or engine specs. The calculator applies mechanical engineering principles to estimate performance and efficiency.",
        whyItWorks: "Vehicle ownership involves complex trade-offs between speed, cost, and safety. By calculating metrics like MPG, torque, or tire diameter changes, you can better maintain your vehicle and optimize your driving experience using physics-based modeling.",
        faq: [
            { q: "How exact are fuel cost estimates?", a: "Estimates are based on average fuel prices and reported efficiency. Individual driving habits and terrain can cause significant variations." },
            { q: "Why does tire size affect my speedometer?", a: "A larger or smaller tire circumference changes how many rotations occur per mile. If your speedometer isn't calibrated to the new size, it will show an incorrect speed." }
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
    "real-estate": {
        title: "Real Estate & Mortgage Economics",
        howToUse: "Enter the property value, down payment, interest rate, and loan term. Adjust the taxes and insurance fields to find your total monthly PITI (Principal, Interest, Taxes, and Insurance) payment.",
        whyItWorks: "Property investment is built on amortization and equity growth. Understanding how interest compounds over 15 or 30 years allows you to see the real cost of debt and the pace of wealth creation through homeownership.",
        faq: [
            { q: "What is amortization?", a: "The process of paying off a debt over time through regular installments. A portion of each payment goes toward the principal and another to interest." },
            { q: "Is PMI included in calculations?", a: "Most calculators allow you to add Private Mortgage Insurance (PMI) if your down payment is below 20%." }
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
    title: "Educational Documentation",
    howToUse: "Follow the on-screen prompts to input your data. Our interactive engine translates your unique inputs into verified mathematical or logical results in real-time.",
    whyItWorks: "This tool is built on established logic and mathematical principles designed to simplify complex data processing. By standardizing inputs and applying specific formulas, we ensure consistent and reliable outcomes for every user.",
    faq: [
        { q: "Is my data stored?", a: "No, all calculations are performed in your browser or through ephemeral API calls. We do not store your personal inputs." },
        { q: "Are the formulas verified?", a: "Yes, our team cross-references every tool against industry standards to ensure high-grade accuracy." }
    ]
};
