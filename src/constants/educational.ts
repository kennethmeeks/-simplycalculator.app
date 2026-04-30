
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
    }
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
