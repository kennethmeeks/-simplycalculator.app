import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { CATEGORIES } from '../constants/categories';

export const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>All Online Calculators 2026 | Free & Accurate | simplycalculator.app</title>
        <meta name="description" content="Access over 1000+ free online calculators for 2026. Organized tools for Finance, Health, Math, Construction, Tech, and more. Accurate formulas and easy-to-use interfaces." />
        <meta name="keywords" content="calculator, online calculator, finance calculator, mortgage calculator, loan calculator, bmi calculator, body fat calculator, science calculator, math calculator, construction calculator, keto calculator, retirement planner, investment calculator, stock average, average price, percentage calculator, percent of, unit converter, weight converter, distance converter, length converter, scientific calculator, basic calculator, currency converter, exchange rate, crypto calculator, bitcoin calculator, tax calculator, income tax, gst calculator, vat calculator, property tax, lottery tax, sales tax, fuel cost, gas calculator, mileage calculator, commute cost, car lease, car loan, car depreciation, boat speed, engine horsepower, boost pressure, tire size, wheel offset, gvwr, bsfc, afr, torque, bolt torque, beam load, beam deflection, concrete volume, brick count, mulch volume, paint coverage, roofing square, stair calculator, square footage, area calculator, volume calculator, triangle solver, circle calculator, surface area, significant figures, quadratic formula, pythagorean theorem, gcf lcm, matrix math, statistics, standard deviation, probability, p-value, sample size, gpa calculator, grade calculator, final exam grade, test score, fraction calculator, ratio calculator, square root, log calculator, natural log, base64 converter, url encoder, unix time, military time, time duration, day counter, date calculator, chronological age, dog age, cat age, angel number, lucky number, numerology, star sign compatibility, zodiac sign, friendship calculator, love calculator, anniversary calculator, work hours, time card, payroll calculator, salary converter, take home pay, 401k growth, 403b savings, 529 plan, 50-30-20 budget, 70-20-10 budget, 28-36 rule, debt-to-income, refinance savings, pmi estimation, heloc calculator, home equity, house affordability, life insurance, car insurance, health insurance, quadratic formula, physics formulas, chemistry molar mass, molarity, normal concentration, ppm, density, mass, volume, pressure, temperature, c to f, f to c, kelvin, rankine, bar to psi, atm to torr, pascal to bar, force converter, newtons to lbs, in-lbs to nm, torque to hp, gear ratio, baud rate, subnet mask, hex to decimal, binary to hex, decimal to octal, cron expression, payload size, latency, ping, regex tester, sql injection risk, json validator, bcrypt rounds, api rate limit, docker image size, git commit frequency, jet lag recovery, luggage capacity, passport renewal, flight miles, wait time probability, wedding budget, roommate split, gift tax, vacation savings, habit streak, bakers percentage, recipe scaler, coffee water ratio, brine concentration, pizza dough yield, slow cooker adjust, meat smoking time, hydration ratio, word to pages, reading time, speaking time, gpa advanced, class rank, study timer, forgetting curve, bibliography check, academic standing, depth of field, 3d print cost, rpg xp, elo rating, iso noise, frame rate delay, aperture f-stop, print resolution, knitting gauge, fish tank volume, sustainable growth, unlevered beta, wacc, cost of debt, altman z-score, bond convexity, bond current yield, bond equivalent yield, bond price, bond yield, bond ytm, coupon payment, coupon rate, credit spread, dscr, debt to asset, debt-to-capital, debt to equity, defensive interval, effective duration, interest coverage, lgd calculator, quick ratio, tax equivalent yield, times interest earned, yield to maturity, beta stock, capm, carried interest, cost of capital, cost of equity, dividend discount, dividend payout, dividend yield, dupont analysis, eps, eps growth, ebitda multiple, eva, enterprise value, ev to sales, free float, graham number, intrinsic value, margin of safety, market cap, maturity value, nav fund, operating cash flow ratio, peg ratio, portfolio beta, pe ratio, pb ratio, p-cf ratio, ps ratio, dividend quiz, residual income, retention ratio, roe, roic, ros, roa, stock split, stock average, stock calculator, 12-hour shift pay, 3x rent, 401k projection, 403b projection, 50-30-20 math, 529 growth, 70-20-10 math, 28-36 mortgage, debt payoff, avalanche method, snowball method, consolidation, utilization, payday loan, deferred payment, disaster loan eidl, finance charge, home improvement, house offer, va loan, housing loan, net effective rent, noi, occupancy rate, pag-ibig, price per sq ft, real estate commission, realtor vat, rent or buy, true cost selling, what to offer, mulch estimate, paint estimate, pitch diameter, punch force, rivet size, road base, spindle speed, square foot estimate, stair math, tile count, wallpaper rolls, activation energy, actual yield, afr engine, arrhenius, atom count, atom economy, atomic mass, avogadros constant, bond order, btu furnace, equation balancer, chemical nomenclature, density measurement, dew point, nuclear charge, electricity cost, electron config, electronegativity, empirical formula, equilibrium constant, wavelength, grams to moles, heat index, hydrogen ion, partial pressure, molality, molar ratio, net ionic, normality, ohms law, percent composition, percent yield, pka acid, ppm molarity, rate constant, reaction quotient, resistor band, temperature scale, theoretical yield, voltage drop, time duration, appliance depreciation, wattage usage, back to school budget, balloon arch supply, bathroom mirror, bean bag fill, bed frame size, blind measure, cord wood heating, data usage bandwidth, dilution ratio, electricity single use, eui index, dryer efficiency, generator size, grocery bill, hot tub heat, house cleaning fee, table count event, led savings, lumens brightness, microwave power, period cost, pool salt salt, quit smoking savings, recessed light, roll length, rug size, sofa size, unit price value, password random, word count reading, work hours tracking, fba seller, percentage discount, height predict, bra size, dice roll, gdp output, tip split, discount retail, subnet mask ip, gratuity service, car refi, depreciation auto, 0-60 acceleration, boat velocity, boost hp, bsfc efficiency, lease cost, carpooling cost, commute analysis, engine compression, psi boost, crosswind aviation, drive time distance, horsepower engine, engine miles, radiation flight, fuel trip cost, fuel pump lph, gas volume, gvwr safety, horsepower mechanical, miles annual, miles financial, mph efficiency, nautical statute, road trip price, rpm gear, speedo gear, tesla charge, ticket price, tire diameter, traffic flow, turbo match, vehicle tax reg, wheel whp, wheel offset, winch pull, windsock speed, sugar intake, arm fat, bac estimate, bee expenditure, bmj, bmr mifflin, body fat pct, somatic type, calorie expenditure, calorie deficit, calorie intake, calories burned activity, carbohydrate goal, diet risk, dri nutrient, due date birth, eer energy, fat requirement, fertility tracking, fiber intake, gastric bypass weight, harris benedict, ideal body weight, iifym macros, katch mcardle, keto macros, lean mass, maintenance calorie, meal calories, micronutrient track, net carbs, one rep max, ovulation window, running pace, pregnancy due, pregnancy growth, protein requirement, low activity activity, heart rate target, tdee expenditure, vitamin goal, vitamin a rda, vitamin d rda, cardiovascular fitness, waist hip ratio, hydration needs, healthy weight gain, weight points, unit metric, imperial units, force newton, bar pascal, in-lbs torque, nm ft-lbs, vacuum torr, degrees dms, lat long utm, map scale, billion scale, cent fractional, crore lakh, million western, hex octal, bits bytes, farads uf, cmyk color, gb storage, mbps bandwidth, unix epoch, 24-hour clock, century units, angle radians, ccf therms, cgs si, counts per second, dbm watts, dimensional physics, energy joule, mpg l100, grams calories, hardness scale, paper ream, base64 data, shoe size intl, time zone sync, scientific power, 3d print outsource, absence rate, accumulated asset, additional funds, attrition pct, collection period, fixed cost, website engagement, absence impact, software find, work track, business plan, company worth, churn rate, consulting fee, project margin, adsense earnings, grp rating, market competition, labor cost, lemonade stand, market power, liquid assets, employee effort, employee leave, operating assets, commercial parking, funding math, growth potential, volume discount, profitability index, workflow product, ad spend roi, saas ltv, saas mrr, sales payout, inventory velocity, smokers ctc, contract value, tenure duration, turnover velocity, website revenue, channel earnings, lifecycle cost, unit economics, utm track, production expense, supplier performance, business liquidity, yoy performance, yield multiplier, zero based, acoustic sound, air duct, aspect ratio, data baud, bearing life, pulley belt, sheet metal, engine power, spring constant, cylinder volume, advanced beam, aerodynamics drag, duty machine, efficiency output, pipe pressure, gear torque, conduction heat, hydraulic area, inertia angular, advanced ohms, fluid flow, pipeline capacity, reynolds fluid, spring force, science stress, thermal flow, work energy, velocity flow, arrows archer, baseball stats, basketball rating, bowling handicap, swim calories, climbing scale, power wattage, draft pick, fishing line, golf handicap, batting exit, marathon split, rugby kick, running cadence, ballistics drop, serve speed, jump power, wrestling class, carbon co2, solar payback, eco tree, household water, turbine wind, energy recycling, compost mix" />
      </Helmet>

      <div className="space-y-16">
        {/* Search Hero */}
        <section className="bg-[#111] text-white p-12 sm:p-20 shadow-[20px_20px_0px_0px_rgba(37,99,235,1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-5xl sm:text-7xl font-black mb-6 tracking-tighter uppercase leading-none text-blue-500">
              Free & Accurate Calculators.
            </h1>
            <p className="text-lg sm:text-xl text-white/50 mb-10 font-medium">
              Professional-grade calculators for finance, health, and industry. 
              Reliable formulas updated for 2026.
            </p>
            
            <div className="flex flex-wrap gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-blue-500">
                <span className="bg-white/5 px-3 py-1 border border-white/10">500+ Specialized Tools</span>
                <span className="bg-white/5 px-3 py-1 border border-white/10">Formula Verified</span>
                <span className="bg-white/5 px-3 py-1 border border-white/10">Free Access</span>
            </div>
          </div>
        </section>

        {/* Featured Tools */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Featured Tools</h2>
            <div className="h-[2px] flex-1 bg-slate-100"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Student Loan Calculator', path: '/student-loan', color: 'bg-blue-600', icon: '🎓' },
                { name: 'Payroll Calculator', path: '/payroll', color: 'bg-indigo-600', icon: '💰' },
                { name: 'Mortgage Calculator', path: '/mortgage', color: 'bg-emerald-600', icon: '🏠' },
                { name: 'BMI Calculator', path: '/bmi', color: 'bg-rose-600', icon: '⚖️' },
              ].map((tool) => (
              <Link 
                key={tool.path}
                to={tool.path}
                className="group relative bg-white border-2 border-slate-200 p-8 hover:border-blue-600 transition-all hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_#2563eb]"
              >
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter group-hover:text-blue-600">
                  {tool.name}
                </h3>
                <div className="mt-4 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600">
                  Access Tool →
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-20">
          {CATEGORIES.map((cat) => (
            <div key={cat.slug} className="group">
              <div className="flex items-end justify-between mb-8 pb-4 border-b-4 border-[#111]">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2">{cat.items.length} Tools Available</span>
                  <h2 className="text-3xl font-black text-[#111] tracking-tighter uppercase group-hover:text-blue-600 transition-colors">
                    {cat.title}
                  </h2>
                </div>
                <Link 
                    to={`/category/${cat.slug}`} 
                    className="text-[10px] font-black text-[#111] hover:text-blue-600 uppercase tracking-widest border-2 border-[#111] px-4 py-2 hover:bg-[#111] hover:text-white transition-all shadow-[4px_4px_0px_0px_#eee]"
                >
                    Expand Hub »
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                {cat.items.slice(0, 10).map((item) => (
                  <div key={item.path} className="group/item">
                    <Link 
                      to={item.path} 
                      className="text-[15px] text-[#111] font-black hover:text-blue-600 block leading-tight mb-2 uppercase tracking-tight transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-[11px] text-[#999] line-clamp-2 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                ))}
                {cat.items.length > 10 && (
                   <Link 
                    to={`/category/${cat.slug}`} 
                    className="flex items-center gap-2 text-[11px] font-black text-blue-600 hover:tracking-widest transition-all uppercase"
                  >
                    Explore {cat.items.length - 10} more in {cat.title} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="bg-[#f0f0f0] border-2 border-[#111] p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-blue-600 italic">// Mission</h3>
                    <p className="text-[14px] text-[#111] font-bold leading-relaxed">
                        Absolute mathematical clarity through accessible, accurate, and free tooling for every complex decision in life.
                    </p>
                </div>
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-blue-600 italic">// Compliance</h3>
                    <p className="text-[14px] text-[#111] font-bold leading-relaxed">
                        All tools follow industry-standard mathematical formulas and are verified for accuracy.
                    </p>
                </div>
                <div>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-blue-600 italic">// Development</h3>
                    <p className="text-[14px] text-[#111] font-bold leading-relaxed">
                        The simplycalculator platform is maintained by a global team of developers and industry contributors.
                    </p>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};
