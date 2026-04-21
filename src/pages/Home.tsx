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
        <title>All Online Calculators 2026 | 1600+ Free Tools | simplycalculator.app</title>
        <meta name="description" content="Access over 1600+ free online calculators for 2026. Organized tools for Finance, Health, Math, Construction, Tech, and more. Accurate formulas and easy-to-use interfaces." />
        <link rel="canonical" href="https://simplycalculator.app" />
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
        <meta name="keywords" content="calculator, online calculator, finance calculator, mortgage calculator, loan calculator, bmi calculator, body fat calculator, science calculator, math calculator, construction calculator, keto calculator, retirement planner, investment calculator, stock average, average price, percentage calculator, percent of, unit converter, weight converter, distance converter, length converter, scientific calculator, basic calculator, currency converter, exchange rate, crypto calculator, bitcoin calculator, tax calculator, income tax, gst calculator, vat calculator, property tax, lottery tax, sales tax, fuel cost, gas calculator, mileage calculator, commute cost, car lease, car loan, car depreciation, boat speed, engine horsepower, boost pressure, tire size, wheel offset, gvwr, bsfc, afr, torque, bolt torque, beam load, beam deflection, concrete volume, brick count, mulch volume, paint coverage, roofing square, stair calculator, square footage, area calculator, volume calculator, triangle solver, circle calculator, surface area, significant figures, quadratic formula, pythagorean theorem, gcf lcm, matrix math, statistics, standard deviation, probability, p-value, sample size, gpa calculator, grade calculator, final exam grade, test score, fraction calculator, ratio calculator, square root, log calculator, natural log, base64 converter, url encoder, unix time, military time, time duration, day counter, date calculator, chronological age, dog age, cat age, angel number, lucky number, numerology, star sign compatibility, zodiac sign, friendship calculator, love calculator, anniversary calculator, work hours, time card, payroll calculator, salary converter, take home pay, 401k growth, 403b savings, 529 plan, 50-30-20 budget, 70-20-10 budget, 28-36 rule, debt-to-income, refinance savings, pmi estimation, heloc calculator, home equity, house affordability, life insurance, car insurance, health insurance, quadratic formula, physics formulas, chemistry molar mass, molarity, normal concentration, ppm, density, mass, volume, pressure, temperature, c to f, f to c, kelvin, rankine, bar to psi, atm to torr, pascal to bar, force converter, newtons to lbs, in-lbs to nm, torque to hp, gear ratio, baud rate, subnet mask, hex to decimal, binary to hex, decimal to octal, cron expression, payload size, latency, ping, regex tester, sql injection risk, json validator, bcrypt rounds, api rate limit, docker image size, git commit frequency, jet lag recovery, luggage capacity, passport renewal, flight miles, wait time probability, wedding budget, roommate split, gift tax, vacation savings, habit streak, bakers percentage, recipe scaler, coffee water ratio, brine concentration, pizza dough yield, slow cooker adjust, meat smoking time, hydration ratio, word to pages, reading time, speaking time, gpa advanced, class rank, study timer, forgetting curve, bibliography check, academic standing, depth of field, 3d print cost, rpg xp, elo rating, iso noise, frame rate delay, aperture f-stop, print resolution, knitting gauge, fish tank volume, sustainable growth, unlevered beta, wacc, cost of debt, altman z-score, bond convexity, bond current yield, bond equivalent yield, bond price, bond yield, bond ytm, coupon payment, coupon rate, credit spread, dscr, debt to asset, debt-to-capital, debt to equity, defensive interval, effective duration, interest coverage, lgd calculator, quick ratio, tax equivalent yield, times interest earned, yield to maturity, beta stock, capm, carried interest, cost of capital, cost of equity, dividend discount, dividend payout, dividend yield, dupont analysis, eps, eps growth, ebitda multiple, eva, enterprise value, ev to sales, free float, graham number, intrinsic value, margin of safety, market cap, maturity value, nav fund, operating cash flow ratio, peg ratio, portfolio beta, pe ratio, pb ratio, p-cf ratio, ps ratio, dividend quiz, residual income, retention ratio, roe, roic, ros, roa, stock split, stock average, stock calculator, 12-hour shift pay, 3x rent, 401k projection, 403b projection, 50-30-20 math, 529 growth, 70-20-10 math, 28-36 mortgage, debt payoff, avalanche method, snowball method, consolidation, utilization, payday loan, deferred payment, disaster loan eidl, finance charge, home improvement, house offer, va loan, housing loan, net effective rent, noi, occupancy rate, pag-ibig, price per sq ft, real estate commission, realtor vat, rent or buy, true cost selling, what to offer, mulch estimate, paint estimate, pitch diameter, punch force, rivet size, road base, spindle speed, square foot estimate, stair math, tile count, wallpaper rolls, activation energy, actual yield, afr engine, arrhenius, atom count, atom economy, atomic mass, avogadros constant, bond order, btu furnace, equation balancer, chemical nomenclature, density measurement, dew point, nuclear charge, electricity cost, electron config, electronegativity, empirical formula, equilibrium constant, wavelength, grams to moles, heat index, hydrogen ion, partial pressure, molality, molar ratio, net ionic, normality, ohms law, percent composition, percent yield, pka acid, ppm molarity, rate constant, reaction quotient, resistor band, temperature scale, theoretical yield, voltage drop, time duration, appliance depreciation, wattage usage, back to school budget, balloon arch supply, bathroom mirror, bean bag fill, bed frame size, blind measure, cord wood heating, data usage bandwidth, dilution ratio, electricity single use, eui index, dryer efficiency, generator size, grocery bill, hot tub heat, house cleaning fee, table count event, led savings, lumens brightness, microwave power, period cost, pool salt salt, quit smoking savings, recessed light, roll length, rug size, sofa size, unit price value, password random, word count reading, work hours tracking, fba seller, percentage discount, height predict, bra size, dice roll, gdp output, tip split, discount retail, subnet mask ip, gratuity service, car refi, depreciation auto, 0-60 acceleration, boat velocity, boost hp, bsfc efficiency, lease cost, carpooling cost, commute analysis, engine compression, psi boost, crosswind aviation, drive time distance, horsepower engine, engine miles, radiation flight, fuel trip cost, fuel pump lph, gas volume, gvwr safety, horsepower mechanical, miles annual, miles financial, mph efficiency, nautical statute, road trip price, rpm gear, speedo gear, tesla charge, ticket price, tire diameter, traffic flow, turbo match, vehicle tax reg, wheel whp, wheel offset, winch pull, windsock speed, sugar intake, arm fat, bac estimate, bee expenditure, bmj, bmr mifflin, body fat pct, somatic type, calorie expenditure, calorie deficit, calorie intake, calories burned activity, carbohydrate goal, diet risk, dri nutrient, due date birth, eer energy, fat requirement, fertility tracking, fiber intake, gastric bypass weight, harris benedict, ideal body weight, iifym macros, katch mcardle, keto macros, lean mass, maintenance calorie, meal calories, micronutrient track, net carbs, one rep max, ovulation window, running pace, pregnancy due, pregnancy growth, protein requirement, low activity activity, heart rate target, tdee expenditure, vitamin goal, vitamin a rda, vitamin d rda, cardiovascular fitness, waist hip ratio, hydration needs, healthy weight gain, weight points, unit metric, imperial units, force newton, bar pascal, in-lbs torque, nm ft-lbs, vacuum torr, degrees dms, lat long utm, map scale, billion scale, cent fractional, crore lakh, million western, hex octal, bits bytes, farads uf, cmyk color, gb storage, mbps bandwidth, unix epoch, 24-hour clock, century units, angle radians, ccf therms, cgs si, counts per second, dbm watts, dimensional physics, energy joule, mpg l100, grams calories, hardness scale, paper ream, base64 data, shoe size intl, time zone sync, scientific power, 3d print outsource, absence rate, accumulated asset, additional funds, attrition pct, collection period, fixed cost, website engagement, absence impact, software find, work track, business plan, company worth, churn rate, consulting fee, project margin, adsense earnings, grp rating, market competition, labor cost, lemonade stand, market power, liquid assets, employee effort, employee leave, operating assets, commercial parking, funding math, growth potential, volume discount, profitability index, workflow product, ad spend roi, saas ltv, saas mrr, sales payout, inventory velocity, smokers ctc, contract value, tenure duration, turnover velocity, website revenue, channel earnings, lifecycle cost, unit economics, utm track, production expense, supplier performance, business liquidity, yoy performance, yield multiplier, zero based, acoustic sound, air duct, aspect ratio, data baud, bearing life, pulley belt, sheet metal, engine power, spring constant, cylinder volume, advanced beam, aerodynamics drag, duty machine, efficiency output, pipe pressure, gear torque, conduction heat, hydraulic area, inertia angular, advanced ohms, fluid flow, pipeline capacity, reynolds fluid, spring force, science stress, thermal flow, work energy, velocity flow, arrows archer, baseball stats, basketball rating, bowling handicap, swim calories, climbing scale, power wattage, draft pick, fishing line, golf handicap, batting exit, marathon split, rugby kick, running cadence, ballistics drop, serve speed, jump power, wrestling class, carbon co2, solar payback, eco tree, household water, turbine wind, energy recycling, compost mix" />
      </Helmet>

      <div className="space-y-24">
        {/* Search Hero */}
        <section className="bg-[#111] text-white p-12 sm:p-24 shadow-[24px_24px_0px_0px_rgba(37,99,235,1)] relative overflow-hidden border-2 border-white/10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[2px] bg-blue-600"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Industry Standard 2026</span>
            </div>
            <h1 className="text-6xl sm:text-8xl font-black mb-8 tracking-tighter uppercase leading-[0.9] text-white">
              Absolute <br />
              <span className="text-blue-600">Accuracy.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/40 mb-12 font-medium max-w-xl leading-relaxed">
              Professional-grade mathematical engines for finance, health, and research. 
              Verified formulas. Zero overhead.
            </p>
            
            <div className="flex flex-wrap gap-8">
                <div className="space-y-1">
                  <span className="block text-2xl font-black text-white">1600+</span>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-blue-500/60">Verified Tools</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10"></div>
                <div className="space-y-1">
                  <span className="block text-2xl font-black text-white">0.0ms</span>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-blue-500/60">Latency</span>
                </div>
                <div className="w-[1px] h-12 bg-white/10"></div>
                <div className="space-y-1">
                  <span className="block text-2xl font-black text-white">100%</span>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-blue-500/60">Client Side</span>
                </div>
            </div>
          </div>
        </section>

        {/* Featured Tools - Bento Grid */}
        <section>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-[11px] font-black uppercase tracking-[0.6em] text-blue-600 italic">// Featured Stations</h2>
            <div className="h-[1px] flex-1 bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Main Feature */}
            <Link 
              to="/mortgage"
              className="md:col-span-2 md:row-span-2 group bg-white border-2 border-slate-900 p-12 transition-all hover:bg-blue-600 hover:border-blue-600 hover:shadow-[16px_16px_0px_0px_#111] flex flex-col justify-between overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-slate-100 rounded-sm mb-8 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  {getCategoryIcon('real-estate', 'w-8 h-8 text-black group-hover:text-white')}
                </div>
                <h3 className="text-4xl font-black text-slate-900 uppercase tracking-tighter leading-none group-hover:text-white mb-4">
                  Mortgage <br /> Mastery.
                </h3>
                <p className="text-slate-400 font-medium group-hover:text-white/70 max-w-xs uppercase text-[10px] tracking-widest">
                  Comprehensive home financing analysis with sub-second property calculations.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                {getCategoryIcon('real-estate', 'w-64 h-64 text-black group-hover:text-white')}
              </div>
              <span className="mt-12 text-xs font-black uppercase tracking-widest text-blue-600 group-hover:text-white inline-flex items-center gap-2">
                Launch Module <ChevronRight size={14} />
              </span>
            </Link>

            <Link 
              to="/student-loan"
              className="md:col-span-2 group bg-slate-900 p-10 border-2 border-slate-900 transition-all hover:border-blue-600 flex items-start gap-8"
            >
              <div className="w-12 h-12 bg-blue-600 flex items-center justify-center rounded-sm shrink-0">
                {getCategoryIcon('academic', 'w-6 h-6 text-white')}
              </div>
              <div>
                <h3 className="text-xl font-black text-white uppercase tracking-tighter mb-2 italic">Student Loan Repayment</h3>
                <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed">Optimal debt strategies for graduates.</p>
              </div>
            </Link>

            <Link 
              to="/bmi"
              className="group bg-white border-2 border-slate-200 p-8 transition-all hover:border-slate-900 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-slate-50 border border-slate-100 flex items-center justify-center rounded-sm group-hover:bg-slate-900 group-hover:border-slate-900 transition-colors">
                  {getCategoryIcon('health', 'w-5 h-5 text-slate-400 group-hover:text-white')}
                </div>
                <span className="text-[8px] font-black text-slate-300 uppercase tracking-widest">BIO STATS</span>
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 uppercase tracking-tighter mb-1">Body Metrics</h3>
                <p className="text-slate-400 text-[9px] font-bold uppercase tracking-tight">BMI & Body Fat Standards</p>
              </div>
            </Link>

            <Link 
              to="/payroll"
              className="group bg-blue-50 border-2 border-blue-100 p-8 transition-all hover:bg-white hover:border-blue-600 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-sm">
                  {getCategoryIcon('finance', 'w-5 h-5 text-white')}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-black text-[#0066cc] uppercase tracking-tighter mb-1">Payroll Hub</h3>
                <p className="text-blue-300 text-[9px] font-bold uppercase tracking-tight">Net Income & Tax Shielding</p>
              </div>
            </Link>
          </div>
        </section>

        {/* Global Category Network */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-24">
          {CATEGORIES.map((cat) => (
            <div key={cat.slug} className="group border-l border-slate-100 pl-10 relative">
              <div className="absolute top-0 left-[-1px] w-[2px] h-0 bg-blue-600 group-hover:h-full transition-all duration-500"></div>
              
              <div className="flex items-center justify-between mb-10">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-50 rounded-sm flex items-center justify-center group-hover:bg-blue-50 transition-colors border border-slate-100 group-hover:border-blue-100">
                      {getCategoryIcon(cat.slug, "w-4 h-4 text-slate-400 group-hover:text-blue-600")}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 italic">{cat.items.length} Tools</span>
                  </div>
                  <h2 className="text-4xl font-black text-[#111] tracking-tighter uppercase group-hover:text-blue-600 transition-colors leading-none">
                    {cat.title.split(' ')[0]} <br />
                    <span className="opacity-10 group-hover:opacity-100 transition-opacity">{cat.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                </div>
                <Link 
                    to={`/category/${cat.slug}`} 
                    className="text-[9px] font-black text-slate-400 hover:text-blue-600 uppercase tracking-[0.2em] transition-all"
                >
                    HUB DATA →
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                {cat.items.slice(0, 8).map((item) => (
                  <div key={item.path} className="group/item relative overflow-hidden">
                    <Link 
                      to={item.path} 
                      className="text-[14px] text-[#111] font-black hover:text-blue-600 block leading-tight mb-2 uppercase tracking-tight transition-colors border-b border-transparent hover:border-blue-600/30 w-fit"
                    >
                      {item.name}
                    </Link>
                    <p className="text-[10px] text-slate-400 line-clamp-1 leading-relaxed font-bold uppercase tracking-tight opacity-60">
                      {item.desc}
                    </p>
                  </div>
                ))}
                {cat.items.length > 8 && (
                   <Link 
                    to={`/category/${cat.slug}`} 
                    className="flex items-center gap-2 text-[9px] font-black text-blue-600 hover:gap-4 transition-all uppercase tracking-[0.3em] mt-2"
                  >
                    View +{cat.items.length - 8} Tools
                  </Link>
                )}
              </div>
            </div>
          ))}
        </section>

        {/* Footer Mission Block */}
        <section className="bg-slate-900 border-2 border-slate-900 p-16 relative overflow-hidden text-white mb-12">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 text-blue-500 italic">// Core Objectives</h3>
                    <p className="text-[13px] text-slate-400 font-bold leading-relaxed uppercase tracking-tight">
                        Absolute mathematical clarity through zero-latency, verified tooling for critical decision pathways.
                    </p>
                </div>
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 text-blue-500 italic">// Compliance Tier</h3>
                    <p className="text-[13px] text-slate-400 font-bold leading-relaxed uppercase tracking-tight">
                        Formula adherence verified against 2026 industry standards. Multi-region support enabled.
                    </p>
                </div>
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.5em] mb-8 text-blue-500 italic">// Engine Build</h3>
                    <p className="text-[13px] text-slate-400 font-bold leading-relaxed uppercase tracking-tight">
                        Built on a low-latency TypeScript stack for purely local browser-side execution.
                    </p>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};
