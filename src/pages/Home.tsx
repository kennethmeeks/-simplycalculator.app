import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CATEGORIES } from '../constants/categories';
import { getCategoryIcon } from '../constants/categoryIcons';
import { ChevronRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Online Calculator Hub [Free & No Sign-up]</title>
        <meta name="description" content="Access over 1600+ free online calculators for 2026. Organized tools for Finance, Health, Math, Construction, Tech, and more. Accurate formulas and easy-to-use interfaces." />
        <meta property="og:title" content="All Online Calculators 2026 | 1600+ Free Tools | simplycalculator.app" />
        <meta property="og:description" content="Access over 1600+ free online calculators for 2026. Data-driven tools for Finance, Health, and Engineering." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="simplycalculator.app | 1600+ Free Tools" />
        <meta name="twitter:description" content="Verified mathematical accuracy for all your calculation needs." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "simplycalculator.app",
              "url": "https://simplycalculator.app",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://simplycalculator.app/?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
        <meta name="keywords" content="calculator, online calculator, finance calculator, mortgage calculator, loan calculator, bmi calculator, body fat calculator, science calculator, math calculator, construction calculator, keto calculator, retirement planner, investment calculator, stock average, average price, percentage calculator, percent of, unit converter, weight converter, distance converter, length converter, scientific calculator, basic calculator, currency converter, exchange rate, crypto calculator, bitcoin calculator, tax calculator, income tax, gst calculator, vat calculator, property tax, lottery tax, sales tax, fuel cost, gas calculator, mileage calculator, commute cost, car lease, car loan, car depreciation, boat speed, engine horsepower, boost pressure, tire size, wheel offset, gvwr, bsfc, afr, torque, bolt torque, beam load, beam deflection, concrete volume, brick count, mulch volume, paint coverage, roofing square, stair calculator, square footage, area calculator, volume calculator, triangle solver, circle calculator, surface area, significant figures, quadratic formula, pythagorean theorem, gcf lcm, matrix math, statistics, standard deviation, probability, p-value, sample size, gpa calculator, grade calculator, final exam grade, test score, fraction calculator, ratio calculator, square root, log calculator, natural log, base64 converter, url encoder, unix time, military time, time duration, day counter, date calculator, chronological age, dog age, cat age, angel number, lucky number, numerology, star sign compatibility, zodiac sign, friendship calculator, love calculator, anniversary calculator, work hours, time card, payroll calculator, salary converter, take home pay, 401k growth, 403b savings, 529 plan, 50-30-20 budget, 70-20-10 budget, 28-36 rule, debt-to-income, refinance savings, pmi estimation, heloc calculator, home equity, house affordability, life insurance, car insurance, health insurance, quadratic formula, physics formulas, chemistry molar mass, molarity, normal concentration, ppm, density, mass, volume, pressure, temperature, c to f, f to c, kelvin, rankine, bar to psi, atm to torr, pascal to bar, force converter, newtons to lbs, in-lbs to nm, torque to hp, gear ratio, baud rate, subnet mask, hex to decimal, binary to hex, decimal to octal, cron expression, payload size, latency, ping, regex tester, sql injection risk, json validator, bcrypt rounds, api rate limit, docker image size, git commit frequency, jet lag recovery, luggage capacity, passport renewal, flight miles, wait time probability, wedding budget, roommate split, gift tax, vacation savings, habit streak, bakers percentage, recipe scaler, coffee water ratio, brine concentration, pizza dough yield, slow cooker adjust, meat smoking time, hydration ratio, word to pages, reading time, speaking time, gpa advanced, class rank, study timer, forgetting curve, bibliography check, academic standing, depth of field, 3d print cost, rpg xp, elo rating, iso noise, frame rate delay, aperture f-stop, print resolution, knitting gauge, fish tank volume, sustainable growth, unlevered beta, wacc, cost of debt, altman z-score, bond convexity, bond current yield, bond equivalent yield, bond price, bond yield, bond ytm, coupon payment, coupon rate, credit spread, dscr, debt to asset, debt-to-capital, debt to equity, defensive interval, effective duration, interest coverage, lgd calculator, quick ratio, tax equivalent yield, times interest earned, yield to maturity, beta stock, capm, carried interest, cost of capital, cost of equity, dividend discount, dividend payout, dividend yield, dupont analysis, eps, eps growth, ebitda multiple, eva, enterprise value, ev to sales, free float, graham number, intrinsic value, margin of safety, market cap, market cap, nav fund, operating cash flow ratio, peg ratio, portfolio beta, pe ratio, pb ratio, p-cf ratio, ps ratio, dividend quiz, residual income, retention ratio, roe, roic, ros, roa, stock split, stock average, stock calculator, 12-hour shift pay, 3x rent, 401k projection, 403b projection, 50-30-20 math, 529 growth, 70-20-10 math, 28-36 mortgage, debt payoff, avalanche method, snowball method, consolidation, utilization, payday loan, deferred payment, disaster loan eidl, finance charge, home improvement, house offer, va loan, housing loan, net effective rent, noi, occupancy rate, pag-ibig, price per sq ft, real estate commission, realtor vat, rent or buy, true cost selling, what to offer, mulch estimate, paint estimate, pitch diameter, punch force, rivet size, road base, spindle speed, square foot estimate, stair math, tile count, wallpaper rolls, activation energy, actual yield, afr engine, arrhenius, atom count, atom economy, atomic mass, avogadros constant, bond order, btu furnace, equation balancer, chemical nomenclature, density measurement, dew point, nuclear charge, electricity cost, electron config, electronegativity, empirical formula, equilibrium constant, wavelength, grams to moles, heat index, hydrogen ion, partial pressure, molality, molar ratio, net ionic, normality, ohms law, percent composition, percent yield, pka acid, ppm molarity, rate constant, reaction quotient, resistor band, temperature scale, theoretical yield, voltage drop, time duration, appliance depreciation, wattage usage, back to school budget, balloon arch supply, bathroom mirror, bean bag fill, bed frame size, blind measure, cord wood heating, data usage bandwidth, dilution ratio, electricity single use, eui index, dryer efficiency, generator size, grocery bill, hot tub heat, house cleaning fee, table count event, led savings, lumens brightness, microwave power, period cost, pool salt salt, quit smoking savings, recessed light, roll length, rug size, sofa size, unit price value, password random, word count reading, work hours tracking, fba seller, percentage discount, height predict, bra size, dice roll, gdp output, tip split, discount retail, subnet mask ip, gratuity service, car refi, depreciation auto, 0-60 acceleration, boat velocity, boost hp, bsfc efficiency, lease cost, carpooling cost, commute analysis, engine compression, psi boost, crosswind aviation, drive time distance, horsepower engine, engine miles, radiation flight, fuel trip cost, fuel pump lph, gas volume, gvwr safety, horsepower mechanical, miles annual, miles financial, mph efficiency, nautical statute, road trip price, rpm gear, speedo gear, tesla charge, ticket price, tire diameter, traffic flow, turbo match, vehicle tax reg, wheel whp, wheel offset, winch pull, windsock speed, sugar intake, arm fat, bac estimate, bee expenditure, bmj, bmr mifflin, body fat pct, somatic type, calorie expenditure, calorie deficit, calorie intake, calories burned activity, carbohydrate goal, diet risk, dri nutrient, due date birth, eer energy, fat requirement, fertility tracking, fiber intake, gastric bypass weight, harris benedict, ideal body weight, iifym macros, katch mcardle, keto macros, lean mass, maintenance calorie, meal calories, micronutrient track, net carbs, one rep max, ovulation window, running pace, pregnancy due, pregnancy growth, protein requirement, low activity activity, heart rate target, tdee expenditure, vitamin goal, vitamin a rda, vitamin d rda, cardiovascular fitness, waist hip ratio, hydration needs, healthy weight gain, weight points, unit metric, imperial units, force newton, bar pascal, in-lbs torque, nm ft-lbs, vacuum torr, degrees dms, lat long utm, map scale, billion scale, cent fractional, crore lakh, million western, hex octal, bits bytes, farads uf, cmyk color, gb storage, mbps bandwidth, unix epoch, 24-hour clock, century units, angle radians, ccf therms, cgs si, counts per second, dbm watts, dimensional physics, energy joule, mpg l100, grams calories, hardness scale, paper ream, base64 data, shoe size intl, time zone sync, scientific power, 3d print outsource, absence rate, accumulated asset, additional funds, attrition pct, collection period, fixed cost, website engagement, absence impact, software find, work track, business plan, company worth, churn rate, consulting fee, project margin, adsense earnings, grp rating, market competition, labor cost, lemonade stand, market power, liquid assets, employee effort, employee leave, operating assets, commercial parking, funding math, growth potential, volume discount, profitability index, workflow product, ad spend roi, saas ltv, saas mrr, sales payout, inventory velocity, smokers ctc, contract value, tenure duration, turnover velocity, website revenue, channel earnings, lifecycle cost, unit economics, utm track, production expense, supplier performance, business liquidity, yoy performance, yield multiplier, zero based, acoustic sound, air duct, aspect ratio, data baud, bearing life, pulley belt, sheet metal, engine power, spring constant, cylinder volume, advanced beam, aerodynamics drag, duty machine, efficiency output, pipe pressure, gear torque, conduction heat, hydraulic area, inertia angular, advanced ohms, fluid flow, pipeline capacity, reynolds fluid, spring force, science stress, thermal flow, work energy, velocity flow, arrows archer, baseball stats, basketball rating, bowling handicap, swim calories, climbing scale, power wattage, draft pick, fishing line, golf handicap, batting exit, marathon split, rugby kick, running cadence, ballistics drop, serve speed, jump power, wrestling class, carbon co2, solar payback, eco tree, household water, turbine wind, energy recycling, compost mix" />
      </Helmet>

      <div className="space-y-24">
        {/* Search Hero */}
        <section className="bg-white border border-slate-200 p-12 sm:p-24 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[1px] bg-blue-600"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600">Professional Mathematical Suite 2026</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 tracking-tight leading-tight text-slate-900">
              Verified <br />
              <span className="text-blue-600">Accuracy.</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-500 mb-10 font-medium max-w-xl leading-relaxed">
              Access over 1600+ professional-grade calculators for finance, health, and engineering. 
              Built with industry-standard formulas and zero latency.
            </p>
            
            <div className="flex flex-wrap gap-8">
                <div className="space-y-1">
                  <span className="block text-2xl font-bold text-slate-900">1600+</span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Verified Tools</span>
                </div>
                <div className="w-[1px] h-10 bg-slate-200"></div>
                <div className="space-y-1">
                  <span className="block text-2xl font-bold text-slate-900">100%</span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Privacy Policy</span>
                </div>
                <div className="w-[1px] h-10 bg-slate-200"></div>
                <div className="space-y-1">
                  <span className="block text-2xl font-bold text-slate-900">2026</span>
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Compliant</span>
                </div>
            </div>
          </div>
        </section>

        {/* Featured Tools - Bento Grid */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-900">Featured Calculators</h2>
            <div className="h-[1px] flex-1 bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Main Feature */}
            <Link 
              to="/mortgage"
              className="md:col-span-2 md:row-span-2 group bg-white border border-slate-200 p-10 transition-all hover:border-blue-600 hover:shadow-lg flex flex-col justify-between overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-blue-50 rounded-lg mb-6 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  {getCategoryIcon('real-estate', 'w-6 h-6 text-blue-600 group-hover:text-white')}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
                  Mortgage <br /> Estimation.
                </h3>
                <p className="text-slate-500 font-medium text-sm leading-relaxed max-w-xs">
                  Detailed home financing analysis including property taxes and PMI.
                </p>
              </div>
              <span className="mt-10 text-sm font-bold text-blue-600 inline-flex items-center gap-2">
                Launch Tool <ChevronRight size={16} />
              </span>
            </Link>

            <Link 
              to="/student-loan"
              className="md:col-span-2 group bg-slate-50 p-8 border border-slate-200 transition-all hover:border-blue-600 hover:bg-white flex items-start gap-6"
            >
              <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center rounded-lg group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors">
                {getCategoryIcon('academic', 'w-5 h-5 text-slate-400 group-hover:text-white')}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Student Loan Repayment</h3>
                <p className="text-slate-500 text-sm">Calculate optimal payoff strategies.</p>
              </div>
            </Link>

            <Link 
              to="/bmi"
              className="group bg-white border border-slate-200 p-8 transition-all hover:border-blue-600 hover:shadow-md flex flex-col justify-between"
            >
              <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-lg group-hover:bg-blue-50 transition-colors">
                {getCategoryIcon('health', 'w-5 h-5 text-slate-400 group-hover:text-blue-600')}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Body Metrics</h3>
                <p className="text-slate-500 text-sm">BMI & health standards.</p>
              </div>
            </Link>

            <Link 
              to="/payroll"
              className="group bg-white border border-slate-200 p-8 transition-all hover:border-blue-600 hover:shadow-md flex flex-col justify-between"
            >
              <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-lg group-hover:bg-blue-50 transition-colors">
                {getCategoryIcon('finance', 'w-5 h-5 text-slate-400 group-hover:text-blue-600')}
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-bold text-slate-900 mb-1">Payroll Hub</h3>
                <p className="text-slate-500 text-sm">Net income & tax estimates.</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Global Category Network */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
          {CATEGORIES.map((cat) => (
            <div key={cat.slug} className="group border-t border-slate-100 pt-8 relative">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors border border-slate-100">
                    {getCategoryIcon(cat.slug, "w-5 h-5 text-slate-400 group-hover:text-blue-600")}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                      {cat.title}
                    </h2>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{cat.items.length} Tools Available</span>
                  </div>
                </div>
                <Link 
                    to={`/category/${cat.slug}`} 
                    className="text-[11px] font-bold text-blue-600 hover:underline uppercase tracking-wider"
                >
                    Browse All →
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
                {cat.items.slice(0, 8).map((item) => (
                  <div key={item.path} className="group/item">
                    <Link 
                      to={item.path} 
                      className="text-[15px] text-slate-700 font-medium hover:text-blue-600 block mb-1 transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-[12px] text-slate-400 line-clamp-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Footer Mission Block */}
        <section className="bg-white border border-slate-200 p-12 rounded-xl relative overflow-hidden text-slate-600 mb-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-widest mb-4 text-slate-900 underline decoration-blue-600 underline-offset-4">Core Objectives</h3>
                    <p className="text-[13px] leading-relaxed">
                        Absolute mathematical clarity through zero-latency, verified tooling for critical decision pathways.
                    </p>
                </div>
                <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-widest mb-4 text-slate-900 underline decoration-blue-600 underline-offset-4">Compliant Data</h3>
                    <p className="text-[13px] leading-relaxed">
                        Formula adherence verified against 2026 industry standards. Localized calculations for global markets.
                    </p>
                </div>
                <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-widest mb-4 text-slate-900 underline decoration-blue-600 underline-offset-4">Verified Safe</h3>
                    <p className="text-[13px] leading-relaxed">
                        Built for client-side execution to ensure maximum privacy and data security for all users.
                    </p>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};
