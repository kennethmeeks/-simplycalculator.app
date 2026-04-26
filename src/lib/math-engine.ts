
/**
 * Deterministic math engine for standard calculators
 */

export const standardCalculations: Record<string, (inputs: Record<string, string>) => { value: string; explanation?: string }> = {
  '/bmi': (inputs) => {
    const weight = parseFloat(inputs.weight);
    const height = parseFloat(inputs.height) / 100; // cm to m
    if (isNaN(weight) || isNaN(height) || height === 0) return { value: 'Invalid input' };
    const bmi = weight / (height * height);
    let cat = '';
    if (bmi < 18.5) cat = 'Underweight';
    else if (bmi < 25) cat = 'Normal weight';
    else if (bmi < 30) cat = 'Overweight';
    else cat = 'Obese';
    return { 
      value: bmi.toFixed(2),
      explanation: `Your BMI is ${bmi.toFixed(2)}, which is categorized as ${cat}.`
    };
  },
  '/mortgage': (inputs) => {
    const p = parseFloat(inputs.principal);
    const down = parseFloat(inputs.downPayment) || 0;
    const r = parseFloat(inputs.rate) / 100 / 12;
    const n = parseFloat(inputs.term) * 12;
    if (isNaN(p) || isNaN(r) || isNaN(n) || n === 0) return { value: 'Invalid input' };
    
    const principal = p - down;
    let payment = 0;
    if (r === 0) {
      payment = principal / n;
    } else {
      payment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
    
    return { 
      value: `$${payment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      explanation: `Your monthly payment (principal and interest) for a $${principal.toLocaleString()} loan at ${parseFloat(inputs.rate)}% interest.`
    };
  },
  '/compound-interest': (inputs) => {
    const p = parseFloat(inputs.principal);
    const r = parseFloat(inputs.rate) / 100;
    const t = parseFloat(inputs.term);
    const n = parseFloat(inputs.compounding) || 12;
    if (isNaN(p) || isNaN(r) || isNaN(t)) return { value: 'Invalid input' };
    
    const amount = p * Math.pow(1 + r / n, n * t);
    return {
      value: `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      explanation: `After ${t} years, your investment will grow to $${amount.toLocaleString()}.`
    };
  },
  '/age': (inputs) => {
    const birth = new Date(inputs.birthDate);
    if (isNaN(birth.getTime())) return { value: 'Invalid date' };
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return {
      value: `${age} years`,
      explanation: `Calculated based on today's date (${today.toLocaleDateString()}).`
    };
  },
  '/chronological-age': (inputs) => {
    const birth = new Date(inputs.birthDate);
    const target = new Date(inputs.targetDate || new Date());
    if (isNaN(birth.getTime()) || isNaN(target.getTime())) return { value: 'Invalid date' };
    
    let age = target.getFullYear() - birth.getFullYear();
    const m = target.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && target.getDate() < birth.getDate())) {
      age--;
    }
    return {
      value: `${age} years`,
      explanation: `On ${target.toLocaleDateString()}, you will be ${age} years old.`
    };
  },
  '/salary': (inputs) => {
    const amt = parseFloat(inputs.amount);
    const freq = inputs.frequency || 'annual';
    if (isNaN(amt)) return { value: 'Invalid input' };
    
    let annual = amt;
    if (freq === 'monthly') annual = amt * 12;
    if (freq === 'biweekly') annual = amt * 26;
    if (freq === 'weekly') annual = amt * 52;
    if (freq === 'hourly') annual = amt * 2080;

    return {
      value: `$${(annual / 12).toLocaleString(undefined, { maximumFractionDigits: 2 })} /mo`,
      explanation: `Equivalent to $${annual.toLocaleString()} annually.`
    };
  },
  '/loan': (inputs) => {
    const p = parseFloat(inputs.amount);
    const r = parseFloat(inputs.rate) / 100 / 12;
    const n = parseFloat(inputs.term); // months
    if (isNaN(p) || isNaN(r) || isNaN(n) || n === 0) return { value: 'Invalid input' };
    
    let payment = 0;
    if (r === 0) {
      payment = p / n;
    } else {
      payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
    
    return {
      value: `$${payment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      explanation: `Monthly payment for a $${p.toLocaleString()} loan over ${n} months.`
    };
  },
  '/math/percentage': (inputs) => {
    const x = parseFloat(inputs.num1);
    const y = parseFloat(inputs.num2);
    const op = inputs.operation;
    if (isNaN(x) || isNaN(y)) return { value: 'Invalid input' };
    
    if (op === 'of') {
      return { value: `${(x / 100 * y).toFixed(2)}`, explanation: `${x}% of ${y} is ${(x / 100 * y).toFixed(2)}` };
    }
    if (op === 'is') {
      return { value: `${((x / y) * 100).toFixed(2)}%`, explanation: `${x} is ${((x / y) * 100).toFixed(2)}% of ${y}` };
    }
    if (op === 'diff') {
      const diff = ((y - x) / x) * 100;
      return { value: `${diff.toFixed(2)}%`, explanation: `Percentage change from ${x} to ${y} is ${diff.toFixed(2)}%` };
    }
    return { value: 'Select operation' };
  },
  '/tip': (inputs) => {
    const bill = parseFloat(inputs.billAmount);
    const tip = parseFloat(inputs.tipPercent);
    const people = parseFloat(inputs.numPeople) || 1;
    if (isNaN(bill) || isNaN(tip)) return { value: 'Invalid input' };
    const totalTip = bill * (tip / 100);
    const total = bill + totalTip;
    return {
      value: `$${(total / people).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} /person`,
      explanation: `Total bill: $${total.toLocaleString()}. Tip amount: $${totalTip.toLocaleString()}.`
    };
  },
  '/fuel-cost': (inputs) => {
    const dist = parseFloat(inputs.distance);
    const mpg = parseFloat(inputs.efficiency);
    const price = parseFloat(inputs.pricePerUnit);
    if (isNaN(dist) || isNaN(mpg) || isNaN(price) || mpg === 0) return { value: 'Invalid input' };
    const cost = (dist / mpg) * price;
    return {
      value: `$${cost.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      explanation: `Estimated cost for a ${dist.toLocaleString()} mile trip.`
    };
  },
  '/grade': (inputs) => {
    const current = parseFloat(inputs.currentGrade);
    const target = parseFloat(inputs.targetGrade);
    const weight = parseFloat(inputs.finalWeight);
    if (isNaN(current) || isNaN(target) || isNaN(weight) || weight === 0) return { value: 'Invalid input' };
    const needed = (target - current * (1 - weight / 100)) / (weight / 100);
    return {
      value: `${needed.toFixed(2)}%`,
      explanation: `You need a ${needed.toFixed(2)}% on your final exam to achieve a ${target}% overall.`
    };
  },
  '/simple-interest': (inputs) => {
    const p = parseFloat(inputs.principal);
    const r = parseFloat(inputs.rate);
    const t_val = parseFloat(inputs.time);
    const unit = inputs.timeUnit || 'years';
    if (isNaN(p) || isNaN(r) || isNaN(t_val)) return { value: 'Invalid input' };
    
    let t = t_val;
    if (unit === 'months') t = t_val / 12;
    else if (unit === 'days') t = t_val / 365;
    
    const interest = p * (r / 100) * t;
    const total = p + interest;
    return { value: `$${total.toLocaleString(undefined, {minimumFractionDigits: 2})}`, explanation: `Total interest: $${interest.toLocaleString(undefined, {minimumFractionDigits: 2})}. Total balance: $${total.toLocaleString(undefined, {minimumFractionDigits: 2})}.` };
  },
  '/bmr': (inputs) => {
    const w = parseFloat(inputs.weight);
    const h = parseFloat(inputs.height);
    const a = parseFloat(inputs.age);
    const g = inputs.gender;
    if (isNaN(w) || isNaN(h) || isNaN(a)) return { value: 'Invalid input' };
    
    // Mifflin-St Jeor Equation
    let bmr = 10 * w + 6.25 * h - 5 * a;
    if (g === 'male') bmr += 5;
    else bmr -= 161;
    
    return {
      value: `${bmr.toFixed(0)} kcal/day`,
      explanation: `Resting metabolic rate: ${bmr.toFixed(0)} calories burned at rest.`
    };
  },
  '/pressure': (inputs) => {
    const val = parseFloat(inputs.value);
    const from = inputs.fromUnit;
    const to = inputs.toUnit;
    if (isNaN(val)) return { value: 'Invalid input' };
    
    // Base is Pascal
    let pa = val;
    if (from === 'psi') pa = val * 6894.76;
    if (from === 'bar') pa = val * 100000;
    if (from === 'atm') pa = val * 101325;
    
    let result = pa;
    if (to === 'psi') result = pa / 6894.76;
    if (to === 'bar') result = pa / 100000;
    if (to === 'atm') result = pa / 101325;
    if (to === 'pa') result = pa;
    
    return {
      value: `${result.toLocaleString()} ${to?.toUpperCase() || 'Pa'}`,
      explanation: `Conversion result: ${val} ${from?.toUpperCase()} is equal to ${result.toFixed(4)} ${to?.toUpperCase()}.`
    };
  },
  '/math/percent-error': (inputs) => {
    const exp = parseFloat(inputs.experimental);
    const theo = parseFloat(inputs.theoretical);
    if (isNaN(exp) || isNaN(theo) || theo === 0) return { value: 'Invalid input' };
    const err = Math.abs((exp - theo) / theo) * 100;
    return {
      value: `${err.toFixed(4)}%`,
      explanation: `The percentage difference between your measured value (${exp}) and the accepted value (${theo}) is ${err.toFixed(4)}%.`
    };
  },
  '/coordinates-converter': (inputs) => {
    const lat = parseFloat(inputs.latitude);
    const lon = parseFloat(inputs.longitude);
    const format = inputs.format || 'dms';
    if (isNaN(lat) || isNaN(lon)) return { value: 'Invalid input' };

    const toDMS = (coord: number, isLat: boolean) => {
      const absolute = Math.abs(coord);
      const degrees = Math.floor(absolute);
      const minutesNotTruncated = (absolute - degrees) * 60;
      const minutes = Math.floor(minutesNotTruncated);
      const seconds = ((minutesNotTruncated - minutes) * 60).toFixed(2);
      const direction = isLat 
        ? (coord >= 0 ? 'N' : 'S') 
        : (coord >= 0 ? 'E' : 'W');
      return `${degrees}° ${minutes}' ${seconds}" ${direction}`;
    };

    if (format === 'dms') {
      return {
        value: `${toDMS(lat, true)}, ${toDMS(lon, false)}`,
        explanation: 'Converted from decimal degrees to Degrees Minutes Seconds.'
      };
    }
    return {
      value: `${lat.toFixed(6)}, ${lon.toFixed(6)}`,
      explanation: 'Decimal Degree format (standard GPS).'
    };
  },
  '/roi': (inputs) => {
    const invested = parseFloat(inputs.invested);
    const returned = parseFloat(inputs.returned);
    const years = parseFloat(inputs.years);
    if (isNaN(invested) || isNaN(returned)) return { value: 'Invalid input' };
    
    const roi = ((returned - invested) / invested) * 100;
    let explanation = `Your return on investment is ${roi.toFixed(2)}%. Profit: $${(returned - invested).toLocaleString()}.`;
    
    if (!isNaN(years) && years > 0) {
      const annualized = (Math.pow(returned / invested, 1 / years) - 1) * 100;
      explanation += ` Annualized ROI: ${annualized.toFixed(2)}% per year.`;
    }
    
    return {
      value: `${roi.toFixed(2)}%`,
      explanation
    };
  },
  '/mpg': (inputs) => {
    const miles = parseFloat(inputs.miles);
    const gallons = parseFloat(inputs.gallons);
    if (isNaN(miles) || isNaN(gallons) || gallons === 0) return { value: 'Invalid input' };
    const mpg = miles / gallons;
    return {
      value: `${mpg.toFixed(2)} MPG`,
      explanation: `Your vehicle efficiency is ${mpg.toFixed(2)} miles per gallon.`
    };
  },
  '/car-depreciation': (inputs) => {
    const price = parseFloat(inputs.price);
    const age = parseFloat(inputs.age);
    if (isNaN(price) || isNaN(age)) return { value: 'Invalid input' };
    
    // Simple 15% annual depreciation model
    const current = price * Math.pow(0.85, age);
    return {
      value: `$${current.toLocaleString(undefined, {maximumFractionDigits: 0})}`,
      explanation: `At a 15% annual depreciation rate, a $${price.toLocaleString()} car is worth approx. $${current.toLocaleString()} after ${age} years.`
    };
  },
  '/auto-loan': (inputs) => {
    const price = parseFloat(inputs.price);
    const down = parseFloat(inputs.downPayment) || 0;
    const rate = parseFloat(inputs.rate);
    const term = parseFloat(inputs.term);
    if (isNaN(price) || isNaN(rate) || isNaN(term)) return { value: 'Invalid input' };

    const p = price - down;
    const r = rate / 100 / 12;
    const n = term;
    
    let payment = 0;
    if (r === 0) {
      payment = p / n;
    } else {
      payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    }
    
    return {
      value: `$${payment.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} /mo`,
      explanation: `Monthly payment for a $${p.toLocaleString()} loan over ${n} months.`
    };
  },
  '/3x-rent-calculator': (inputs) => {
    const rent = parseFloat(inputs.monthlyRent);
    const income = parseFloat(inputs.annualIncome);
    if (isNaN(rent) || isNaN(income)) return { value: 'Invalid input' };

    const requiredIncome = rent * 3 * 12;
    const canAfford = income >= requiredIncome;
    const monthlyIncome = income / 12;
    const rentRatio = (rent / monthlyIncome) * 100;

    return {
      value: canAfford ? 'Eligible' : 'Not Recommended',
      explanation: `To afford $${rent.toLocaleString()} rent comfortably (3x rule), you need $${requiredIncome.toLocaleString()} annual income. Your current rent-to-income ratio is ${rentRatio.toFixed(1)}%.`
    };
  },
  '/12-hour-shift-pay': (inputs) => {
    const rate = parseFloat(inputs.hourlyRate);
    const diff = parseFloat(inputs.shiftDifferential) || 0;
    const hours = parseFloat(inputs.hoursPerShift) || 12;
    const shifts = parseFloat(inputs.shiftsPerWeek) || 3;
    if (isNaN(rate)) return { value: 'Invalid input' };

    const totalRate = rate + diff;
    const weeklyPay = totalRate * hours * shifts;
    const annualPay = weeklyPay * 52;

    return {
      value: `$${weeklyPay.toLocaleString()} /wk`,
      explanation: `With a ${hours}-hour shift and ${shifts} shifts/week, including a $${diff} differential, your annual gross is $${annualPay.toLocaleString()}.`
    };
  },
  '/overtime-calculator': (inputs) => {
    const rate = parseFloat(inputs.hourlyRate);
    const regHours = parseFloat(inputs.regularHours) || 40;
    const otHours = parseFloat(inputs.overtimeHours) || 0;
    const multi = parseFloat(inputs.otMultiplier) || 1.5;
    if (isNaN(rate)) return { value: 'Invalid input' };

    const regPay = rate * regHours;
    const otPay = (rate * multi) * otHours;
    const total = regPay + otPay;

    return {
      value: `$${total.toLocaleString()}`,
      explanation: `Regular Pay: $${regPay.toLocaleString()}. Overtime Pay: $${otPay.toLocaleString()} (${otHours} hours at $${(rate*multi).toFixed(2)}/hr).`
    };
  },
  '/hourly-to-salary': (inputs) => {
    const hr = parseFloat(inputs.hourlyRate);
    const hrsPerWk = parseFloat(inputs.hoursPerWeek) || 40;
    if (isNaN(hr)) return { value: 'Invalid input' };

    const weekly = hr * hrsPerWk;
    const annual = weekly * 52;
    const monthly = annual / 12;

    return {
      value: `$${annual.toLocaleString()} /yr`,
      explanation: `Based on ${hrsPerWk} hours/week: Weekly: $${weekly.toLocaleString()} | Monthly: $${monthly.toLocaleString(undefined, {maximumFractionDigits: 0})}.`
    }
  },
  '/pregnancy': (inputs) => {
    const lmp = new Date(inputs.lastPeriod);
    if (isNaN(lmp.getTime())) return { value: 'Invalid date' };
    
    // Naegele's rule: +280 days
    const due = new Date(lmp);
    due.setDate(due.getDate() + 280);
    
    // Weeks along
    const diff = new Date().getTime() - lmp.getTime();
    const weeks = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));
    
    return {
      value: due.toLocaleDateString(),
      explanation: `Estimated due date based on LMP + 280 days. You are approximately ${weeks} weeks pregnant.`
    };
  },
  '/bitcoin-etf-calculator': (inputs) => {
    const investment = parseFloat(inputs.investment);
    const btcPrice = parseFloat(inputs.btcPrice);
    const currentPrice = parseFloat(inputs.currentPrice);
    const expense = parseFloat(inputs.expenseRatio) / 100;
    if (isNaN(investment) || isNaN(btcPrice) || isNaN(currentPrice)) return { value: 'Invalid input' };

    const btcAmount = investment / btcPrice;
    const grossValue = btcAmount * currentPrice;
    const fee = grossValue * expense;
    const netValue = grossValue - fee;
    const profit = netValue - investment;
    const roi = (profit / investment) * 100;

    return {
      value: `$${netValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`,
      explanation: `Your Bitcoin ETF investment is now worth $${netValue.toLocaleString()}. Gross: $${grossValue.toLocaleString()} less an estimated annual fee of $${fee.toLocaleString()}. This represents a ${roi.toFixed(2)}% return.`
    };
  },
  '/btc-roi': (inputs) => {
    const invested = parseFloat(inputs.invested);
    const buy = parseFloat(inputs.purchasePrice);
    const sell = parseFloat(inputs.sellingPrice);
    if (isNaN(invested) || isNaN(buy) || isNaN(sell)) return { value: 'Invalid input' };

    const amount = invested / buy;
    const value = amount * sell;
    const profit = value - invested;
    const roi = (profit / invested) * 100;

    return {
      value: `$${value.toLocaleString()}`,
      explanation: `Your $${invested.toLocaleString()} investment at $${buy.toLocaleString()}/BTC resulted in ${amount.toFixed(8)} BTC. At $${sell.toLocaleString()}/BTC, it is worth $${value.toLocaleString()} (${roi.toFixed(2)}% profit).`
    };
  },
  '/50-30-20-rule': (inputs) => {
    const income = parseFloat(inputs.income);
    if (isNaN(income)) return { value: 'Invalid input' };

    const needs = income * 0.5;
    const wants = income * 0.3;
    const savings = income * 0.2;

    return {
      value: `Needs: $${needs.toLocaleString()}`,
      explanation: `Based on your $${income.toLocaleString()} income: Needs (50%): $${needs.toLocaleString()}, Wants (30%): $${wants.toLocaleString()}, Savings/Debt (20%): $${savings.toLocaleString()}.`
    };
  },
  '/blood-sugar-converter': (inputs) => {
    const val = parseFloat(inputs.value);
    const unit = inputs.unit || 'mgdl';
    if (isNaN(val)) return { value: 'Invalid input' };

    if (unit === 'mgdl') {
      const mmol = val / 18.018;
      return { value: `${mmol.toFixed(2)} mmol/L`, explanation: `${val} mg/dL is equal to ${mmol.toFixed(2)} mmol/L.` };
    } else {
      const mgdl = val * 18.018;
      return { value: `${Math.round(mgdl)} mg/dL`, explanation: `${val} mmol/L is equal to ${Math.round(mgdl)} mg/dL.` };
    }
  },
  '/a1c-calculator': (inputs) => {
    const a1c = parseFloat(inputs.a1c);
    if (isNaN(a1c)) return { value: 'Invalid input' };

    // Formula: (28.7 * A1c) - 46.7
    const eag = (28.7 * a1c) - 46.7;
    return {
      value: `${Math.round(eag)} mg/dL`,
      explanation: `An A1c of ${a1c}% indicates an Estimated Average Glucose (eAG) of ${Math.round(eag)} mg/dL.`
    };
  },
  '/water-intake': (inputs) => {
    const weight = parseFloat(inputs.weight);
    const activity = parseFloat(inputs.activity) || 0;
    if (isNaN(weight)) return { value: 'Invalid input' };

    // Base: 33ml per kg + 500ml per 30m exercise
    const base = weight * 0.033;
    const extra = (activity / 30) * 0.5;
    const total = base + extra;

    return {
      value: `${total.toFixed(1)} Liters`,
      explanation: `Based on your weight (${weight}kg) and activity (${activity}m), you should drink approximately ${total.toFixed(1)}L (${Math.round(total * 4.22)} cups) of water daily.`
    };
  },
  '/military-time': (inputs) => {
    const time = inputs.time.toUpperCase().trim();
    if (!time) return { value: 'Invalid input' };

    // From 24h to 12h
    if (/^\d{4}$/.test(time)) {
      let hours = parseInt(time.substring(0, 2));
      const mins = time.substring(2, 4);
      const period = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;
      return { value: `${hours}:${mins} ${period}`, explanation: `Military time ${time} is ${hours}:${mins} ${period}.` };
    }
    
    // From 12h to 24h (simple)
    return { value: 'Use 0000 format', explanation: 'Enter a 4-digit military time (e.g., 1430) to convert to standard time.' };
  },
  '/401k': (inputs) => {
    const salary = parseFloat(inputs.salary);
    const contrib = parseFloat(inputs.contribution) / 100;
    const match = parseFloat(inputs.match) / 100;
    const years = parseFloat(inputs.years);
    if (isNaN(salary) || isNaN(contrib) || isNaN(years)) return { value: 'Invalid input' };

    const rate = 0.07; // 7% average market return
    let balance = 0;
    const annualContribution = salary * contrib;
    const annualMatch = Math.min(salary * match, annualContribution); // Typically logic: match up to what you contribute or a cap
    const totalAnnual = annualContribution + annualMatch;

    for (let i = 0; i < years; i++) {
      balance = (balance + totalAnnual) * (1 + rate);
    }

    return {
      value: `$${Math.round(balance).toLocaleString()}`,
      explanation: `Assuming a 7% annual return, your balance after ${years} years would be $${Math.round(balance).toLocaleString()}. Total annual contribution: $${totalAnnual.toLocaleString()} ($${annualContribution.toLocaleString()} yours + $${annualMatch.toLocaleString()} match).`
    };
  },
  '/403b': (inputs) => {
    // 403b logic is essentially the same as 401k for basic estimation
    return standardCalculations['/401k'](inputs);
  },
  '/aim-tracking': (inputs) => {
    const hits = parseFloat(inputs.hits);
    const misses = parseFloat(inputs.misses);
    const time = parseFloat(inputs.time);
    if (isNaN(hits) || isNaN(misses)) return { value: 'Invalid input' };

    const total = hits + misses;
    const accuracy = total > 0 ? (hits / total) * 100 : 0;
    const hps = time > 0 ? (hits / time) : 0;

    return {
      value: `${accuracy.toFixed(1)}% Accuracy`,
      explanation: `Session Performance: ${accuracy.toFixed(1)}% accuracy across ${total} shots. Scoring ${hps.toFixed(2)} hits per second over ${time}s.`
    };
  },
  '/discount': (inputs) => {
    const price = parseFloat(inputs.originalPrice);
    const discount = parseFloat(inputs.discountPercent);
    if (isNaN(price) || isNaN(discount)) return { value: 'Invalid input' };

    const saved = price * (discount / 100);
    const final = price - saved;

    return {
      value: `$${final.toFixed(2)}`,
      explanation: `You save $${saved.toFixed(2)} (${discount}%). The final price is $${final.toFixed(2)}.`
    };
  },
  '/margin': (inputs) => {
    const cost = parseFloat(inputs.cost);
    const rev = parseFloat(inputs.revenue);
    if (isNaN(cost) || isNaN(rev) || rev === 0) return { value: 'Invalid input' };

    const margin = ((rev - cost) / rev) * 100;
    return {
      value: `${margin.toFixed(2)}% Margin`,
      explanation: `Gross Profit: $${(rev - cost).toFixed(2)}. Profit Margin: ${margin.toFixed(2)}%.`
    };
  },
  '/markup': (inputs) => {
    const cost = parseFloat(inputs.cost);
    const markup = parseFloat(inputs.markupPercent);
    if (isNaN(cost) || isNaN(markup)) return { value: 'Invalid input' };

    const price = cost * (1 + markup / 100);
    return {
      value: `$${price.toFixed(2)}`,
      explanation: `To achieve a ${markup}% markup on a $${cost} cost, set the price to $${price.toFixed(2)}.`
    };
  },
  '/paypal-fee': (inputs) => {
    const amount = parseFloat(inputs.amount);
    const rate = parseFloat(inputs.feeRate) || 2.9;
    const fixed = parseFloat(inputs.fixedFee) || 0.30;
    if (isNaN(amount)) return { value: 'Invalid input' };

    const fee = (amount * (rate / 100)) + fixed;
    const net = amount - fee;

    return {
      value: `$${net.toFixed(2)} Net`,
      explanation: `Total Fee: $${fee.toFixed(2)} (${rate}% + $${fixed.toFixed(2)}). You will receive $${net.toFixed(2)}.`
    };
  },
  '/kilograms-to-pounds': (inputs) => {
    const kg = parseFloat(inputs.kg);
    if (isNaN(kg)) return { value: 'Invalid input' };
    const lbs = kg * 2.20462;
    return { value: `${lbs.toFixed(2)} lbs`, explanation: `${kg} kg is approximately ${lbs.toFixed(2)} pounds.` };
  },
  '/pounds-to-kilograms': (inputs) => {
    const lbs = parseFloat(inputs.lbs);
    if (isNaN(lbs)) return { value: 'Invalid input' };
    const kg = lbs / 2.20462;
    return { value: `${kg.toFixed(2)} kg`, explanation: `${lbs} lbs is approximately ${kg.toFixed(2)} kilograms.` };
  },
  '/percentage-discount': (inputs) => {
    return standardCalculations['/discount']({ originalPrice: inputs.price, discountPercent: inputs.percentOff });
  },
  '/steps-to-miles': (inputs) => {
    const steps = parseFloat(inputs.steps);
    const stride = parseFloat(inputs.strideLength) || 30; // inches
    if (isNaN(steps)) return { value: 'Invalid input' };

    const miles = (steps * stride) / 63360; // 63360 inches in a mile
    return {
      value: `${miles.toFixed(2)} miles`,
      explanation: `Based on ${steps} steps and a ${stride}" stride length.`
    };
  },
  '/vertical-jump': (inputs) => {
    const stand = parseFloat(inputs.standingReach);
    const jump = parseFloat(inputs.jumpReach);
    if (isNaN(stand) || isNaN(jump)) return { value: 'Invalid input' };

    const diff = jump - stand;
    return {
      value: `${diff.toFixed(1)}" Jump`,
      explanation: `Your vertical jump height is ${diff.toFixed(1)} inches.`
    };
  },
  '/final-exam-grade': (inputs) => {
    const current = parseFloat(inputs.currentGrade);
    const target = parseFloat(inputs.targetGrade);
    const weight = parseFloat(inputs.weight) / 100;
    if (isNaN(current) || isNaN(target) || isNaN(weight) || weight <= 0) return { value: 'Invalid input' };

    const needed = (target - (current * (1 - weight))) / weight;

    return {
      value: `${needed.toFixed(1)}%`,
      explanation: `To get a ${target}% overall, you need at least ${needed.toFixed(1)}% on your final exam.`
    };
  },
  '/mbps-to-gbps': (inputs) => {
    const mbps = parseFloat(inputs.mbps);
    if (isNaN(mbps)) return { value: 'Invalid input' };
    const gbps = mbps / 1000;
    return { value: `${gbps.toFixed(3)} Gbps`, explanation: `${mbps} Mbps is equal to ${gbps.toFixed(3)} Gigabits per second.` };
  },
  '/byte-conversion': (inputs) => {
    let val = parseFloat(inputs.value);
    const from = inputs.fromUnit || 'mb';
    if (isNaN(val)) return { value: 'Invalid input' };

    // Normalize to bytes
    let b = val;
    if (from === 'kb') b = val * 1024;
    if (from === 'mb') b = val * 1024 * 1024;
    if (from === 'gb') b = val * 1024 * 1024 * 1024;
    if (from === 'tb') b = val * 1024 * 1024 * 1024 * 1024;

    const mb = b / (1024 * 1024);
    const gb = mb / 1024;

    return {
      value: `${gb.toFixed(2)} GB`,
      explanation: `Equivalent to ${mb.toLocaleString()} MB or ${gb.toFixed(4)} GB.`
    };
  },
  '/inches-to-cm': (inputs) => {
    const val = parseFloat(inputs.inches);
    if (isNaN(val)) return { value: 'Invalid input' };
    const cm = val * 2.54;
    return { value: `${cm.toFixed(2)} cm`, explanation: `${val} inches is equal to ${cm.toFixed(2)} centimeters.` };
  },
  '/cm-to-inches': (inputs) => {
    const val = parseFloat(inputs.cm);
    if (isNaN(val)) return { value: 'Invalid input' };
    const inc = val / 2.54;
    return { value: `${inc.toFixed(2)} in`, explanation: `${val} cm is approximately ${inc.toFixed(2)} inches.` };
  },
  '/black-friday': (inputs) => {
    const price = parseFloat(inputs.price);
    const d1 = parseFloat(inputs.discount1) || 0;
    const d2 = parseFloat(inputs.discount2) || 0;
    if (isNaN(price)) return { value: 'Invalid input' };

    const first = price * (1 - d1 / 100);
    const final = first * (1 - d2 / 100);
    return { value: `$${final.toFixed(2)}`, explanation: `After ${d1}% store discount and an extra ${d2}% coupon, the final price is $${final.toFixed(2)}.` };
  },
  '/cash-back': (inputs) => {
    const amt = parseFloat(inputs.amount);
    const rate = parseFloat(inputs.rate);
    if (isNaN(amt) || isNaN(rate)) return { value: 'Invalid input' };
    const saved = amt * (rate / 100);
    return { value: `$${saved.toFixed(2)}`, explanation: `With a ${rate}% cash back rate, you earn $${saved.toFixed(2)} on your purchase.` };
  },
  '/cltv': (inputs) => {
    const val = parseFloat(inputs.avgOrderValue);
    const freq = parseFloat(inputs.frequency);
    const dur = parseFloat(inputs.duration);
    if (isNaN(val) || isNaN(freq) || isNaN(dur)) return { value: 'Invalid input' };
    const cltv = val * freq * dur;
    return { value: `$${cltv.toLocaleString()}`, explanation: `Estimated Customer Lifetime Value over ${dur} months is $${cltv.toLocaleString()}.` };
  },
  '/double-discount': (inputs) => {
    return standardCalculations['/black-friday']({ price: inputs.price, discount1: inputs.d1, discount2: inputs.d2 });
  },
  '/net-worth': (inputs) => {
    const a = parseFloat(inputs.assets);
    const l = parseFloat(inputs.liabilities);
    if (isNaN(a) || isNaN(l)) return { value: 'Invalid input' };
    const nw = a - l;
    return { value: `$${nw.toLocaleString()}`, explanation: `Your total net worth is $${nw.toLocaleString()} (Assets $${a.toLocaleString()}, Liabilities $${l.toLocaleString()}).` };
  },
  '/roas': (inputs) => {
    const rev = parseFloat(inputs.revenue);
    const cost = parseFloat(inputs.cost);
    if (isNaN(rev) || isNaN(cost) || cost === 0) return { value: 'Invalid input' };
    const roas = rev / cost;
    return { value: `${roas.toFixed(2)}x`, explanation: `For every $1 spent, you generated $${roas.toFixed(2)} in revenue.` };
  },
  '/reading-time': (inputs) => {
    const words = parseFloat(inputs.words);
    const speed = parseFloat(inputs.speed) || 250;
    if (isNaN(words)) return { value: 'Invalid input' };
    const mins = words / speed;
    return { value: `${Math.ceil(mins)} min`, explanation: `By reading at ${speed} words per minute, it will take about ${Math.ceil(mins)} minutes to finish ${words} words.` };
  },
  '/hex-to-rgb': (inputs) => {
    const hex = inputs.hex.replace('#', '');
    if (hex.length !== 6) return { value: 'Invalid Hex' };
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return { value: `rgb(${r}, ${g}, ${b})`, explanation: `The RGB equivalent of #${hex} is rgb(${r}, ${g}, ${b}).` };
  },
  '/rgb-to-hex': (inputs) => {
    const r = parseInt(inputs.r);
    const g = parseInt(inputs.g);
    const b = parseInt(inputs.b);
    if (isNaN(r) || isNaN(g) || isNaN(b)) return { value: 'Invalid input' };
    const componentToHex = (c: number) => {
      const h = c.toString(16);
      return h.length === 1 ? '0' + h : h;
    };
    const hex = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`.toUpperCase();
    return { value: hex, explanation: `The Hex equivalent of rgb(${r}, ${g}, ${b}) is ${hex}.` };
  },
  '/solar-roi': (inputs) => {
    const cost = parseFloat(inputs.cost);
    const savings = parseFloat(inputs.monthlySavings);
    if (isNaN(cost) || isNaN(savings) || savings <= 0) return { value: 'Invalid input' };
    const months = cost / savings;
    const years = months / 12;
    return { value: `${years.toFixed(1)} Years`, explanation: `It will take approximately ${years.toFixed(1)} years to recover your $${cost.toLocaleString()} investment through monthly savings of $${savings.toLocaleString()}.` };
  },
  '/concrete': (inputs) => {
    const l = parseFloat(inputs.length);
    const w = parseFloat(inputs.width);
    const t = parseFloat(inputs.thickness) / 12; // in to ft
    if (isNaN(l) || isNaN(w) || isNaN(t)) return { value: 'Invalid input' };
    const cubicFeet = l * w * t;
    const cubicYards = cubicFeet / 27;
    return { value: `${cubicYards.toFixed(2)} Yards`, explanation: `Total volume for a slab of ${l}x${w} with ${inputs.thickness}" thickness is ${cubicYards.toFixed(2)} cubic yards (or ${Math.ceil(cubicYards * 45)} 80lb bags).` };
  },
  '/paint': (inputs) => {
    const l = parseFloat(inputs.length);
    const h = parseFloat(inputs.height);
    const coats = parseFloat(inputs.coats) || 1;
    if (isNaN(l) || isNaN(h)) return { value: 'Invalid input' };
    const sqft = l * h * coats;
    const gallons = sqft / 350; // Standard coverage per gallon
    return { value: `${gallons.toFixed(1)} Gallons`, explanation: `To cover ${sqft} sq ft, you will need approximately ${gallons.toFixed(1)} gallons of paint.` };
  },
  '/flooring': (inputs) => {
    const l = parseFloat(inputs.length);
    const w = parseFloat(inputs.width);
    const waste = parseFloat(inputs.waste) / 100 || 0.1;
    if (isNaN(l) || isNaN(w)) return { value: 'Invalid input' };
    const net = l * w;
    const gross = net * (1 + waste);
    return { value: `${Math.ceil(gross)} sq ft`, explanation: `Net area is ${net} sq ft. Including ${waste * 100}% waste, you should order ${Math.ceil(gross)} sq ft.` };
  },
  '/bra-size': (inputs) => {
    const bust = parseFloat(inputs.bust);
    const under = parseFloat(inputs.underbust);
    if (isNaN(bust) || isNaN(under)) return { value: 'Invalid input' };
    const diff = Math.round(bust - under);
    const band = Math.round(under);
    const cups = ['AA', 'A', 'B', 'C', 'D', 'DD', 'DDD', 'G', 'H', 'I', 'J'];
    const cup = cups[diff] || 'Unknown';
    return { value: `${band}${cup}`, explanation: `Based on your measurements, your estimated size is ${band}${cup}.` };
  },
  '/concrete-stairs': (inputs) => {
    const steps = parseFloat(inputs.steps);
    const w = parseFloat(inputs.width);
    const run = parseFloat(inputs.run);
    const rise = parseFloat(inputs.rise);
    if (isNaN(steps) || isNaN(w) || isNaN(run) || isNaN(rise)) return { value: 'Invalid input' };
    
    // Each step is a wedge? No, usually landing part.
    // Vol = Sum (width * run * height_at_step)
    // Height at step i = i * rise
    let volume = 0;
    for(let i=1; i<=steps; i++) {
        volume += (w * run * (i * rise));
    }
    const cubicYards = volume / 46656; // cubic inches to cubic yards
    return { value: `${cubicYards.toFixed(2)} Yards`, explanation: `Total concrete needed for ${steps} steps is ${cubicYards.toFixed(2)} cubic yards.` };
  },
  '/brick': (inputs) => {
    const l = parseFloat(inputs.length);
    const h = parseFloat(inputs.height);
    const type = inputs.brickType || 'std';
    if (isNaN(l) || isNaN(h)) return { value: 'Invalid input' };
    
    const area = l * h;
    const bricksPerSqft = (type === 'std') ? 7 : 6; // Standard estimate
    const count = Math.ceil(area * bricksPerSqft * 1.1); // 10% waste
    return { value: `${count} Bricks`, explanation: `For a ${l}'x${h}' wall, you need about ${count} bricks (includes 10% waste).` };
  },
  '/a1c-to-glucose': (inputs) => {
    const a1c = parseFloat(inputs.a1c);
    if (isNaN(a1c)) return { value: 'Invalid input' };
    const mgdl = (28.7 * a1c) - 46.7;
    const mmol = mgdl / 18.0182;
    return { value: `${Math.round(mgdl)} mg/dL`, explanation: `An A1c of ${a1c}% corresponds to an average glucose of ${Math.round(mgdl)} mg/dL (${mmol.toFixed(1)} mmol/L).` };
  },
  '/words-to-pages': (inputs) => {
    const words = parseFloat(inputs.words);
    const spacing = parseFloat(inputs.spacing) || 1;
    if (isNaN(words)) return { value: 'Invalid input' };
    const wordsPerPage = 500 / spacing;
    const pages = words / wordsPerPage;
    return { value: `${pages.toFixed(1)} Pages`, explanation: `Approximately ${pages.toFixed(1)} pages based on standard formatting.` };
  },
  '/bac-calculator': (inputs) => {
    const drinks = parseFloat(inputs.drinks);
    const weight = parseFloat(inputs.weight);
    const gender = inputs.gender;
    const hours = parseFloat(inputs.hours) || 0;
    if (isNaN(drinks) || isNaN(weight)) return { value: 'Invalid input' };
    
    const r = (gender === 'female') ? 0.66 : 0.73;
    const bac = (drinks * 5.14 / (weight * r)) - (0.015 * hours);
    const result = Math.max(0, bac);
    return { value: `${result.toFixed(3)}%`, explanation: `Estimated Blood Alcohol Concentration based on Widmark's formula.` };
  },
  '/wallpaper': (inputs) => {
    const w = parseFloat(inputs.width);
    const h = parseFloat(inputs.height);
    const roll = parseFloat(inputs.rollSize) || 56;
    if (isNaN(w) || isNaN(h)) return { value: 'Invalid input' };
    const area = w * h;
    const rolls = area / roll;
    return { value: `${Math.ceil(rolls)} Rolls`, explanation: `To cover ${area} sq ft, you will need ${Math.ceil(rolls)} rolls (based on ${roll} sq ft per roll).` };
  },
  '/freelance-hourly-rate': (inputs) => {
    const income = parseFloat(inputs.targetIncome);
    const overhead = parseFloat(inputs.overhead) || 0;
    const hours = parseFloat(inputs.billableHours) || 30;
    if (isNaN(income)) return { value: 'Invalid input' };
    
    const yearlyOverhead = overhead * 12;
    const totalNeeded = income + yearlyOverhead;
    const yearlyHours = hours * 48; // 4 weeks vacation
    const rate = totalNeeded / yearlyHours;
    return { value: `$${rate.toFixed(2)}/hr`, explanation: `To net $${income} after overhead and taxes, your hourly rate should be $${rate.toFixed(2)}.` };
  },
  '/concrete-weight': (inputs) => {
    const vol = parseFloat(inputs.volume);
    const density = parseFloat(inputs.type) || 150;
    if (isNaN(vol)) return { value: 'Invalid input' };
    const weightLbs = vol * 27 * density;
    const tons = weightLbs / 2000;
    return { value: `${tons.toFixed(2)} Tons`, explanation: `Total weight of ${vol} cubic yards is approximately ${weightLbs.toLocaleString()} lbs or ${tons.toFixed(2)} tons.` };
  },
  '/cement': (inputs) => {
    const vol = parseFloat(inputs.volume);
    if (isNaN(vol)) return { value: 'Invalid input' };
    // Rule of thumb: 1 yard of concrete takes roughly 5-6 bags of cement if doing custom mix
    const bags70lb = vol * 6; 
    return { value: `${Math.ceil(bags70lb)} Bags`, explanation: `To create ${vol} cu yards of concrete from scratch, you will need about ${Math.ceil(bags70lb)} 70lb bags of Portland cement plus sand/gravel.` };
  },
  '/wainscoting': (inputs) => {
    const wall = parseFloat(inputs.wallLength) * 12; // ft to in
    const panel = parseFloat(inputs.panelWidth);
    const stile = parseFloat(inputs.stileWidth);
    if (isNaN(wall) || isNaN(panel) || isNaN(stile)) return { value: 'Invalid input' };
    
    // wall = n*panel + (n+1)*stile
    // wall - stile = n*(panel + stile)
    const n = Math.floor((wall - stile) / (panel + stile));
    return { value: `${n} Panels`, explanation: `Based on your wall length and desired widths, you can fit ${n} panels perfectly.` };
  },
  '/dog-age': (inputs) => {
    const age = parseFloat(inputs.age);
    const size = inputs.size || 'medium';
    if (isNaN(age)) return { value: 'Invalid input' };
    
    let humanAge = 0;
    if (age === 1) humanAge = 15;
    else if (age === 2) humanAge = 24;
    else {
      let factor = 4;
      if (size === 'small') factor = 4;
      else if (size === 'medium') factor = 5;
      else if (size === 'large') factor = 6;
      else if (size === 'giant') factor = 7;
      humanAge = 24 + (age - 2) * factor;
    }
    return { value: `${humanAge} Years`, explanation: `A ${age} year old ${size} dog is approximately ${humanAge} years old in human years.` };
  },
  '/in-lbs-to-nm': (inputs) => {
    const val = parseFloat(inputs.value);
    if (isNaN(val)) return { value: 'Invalid input' };
    const nm = val * 0.112984829;
    return { value: `${nm.toFixed(2)} Nm`, explanation: `${val} in-lbs is equal to ${nm.toFixed(2)} Newton-meters.` };
  },
  '/billion-to-trillion': (inputs) => {
    const val = parseFloat(inputs.value);
    if (isNaN(val)) return { value: 'Invalid input' };
    const tri = val / 1000;
    return { value: `${tri.toLocaleString()} Trillion`, explanation: `${val.toLocaleString()} billion is equal to ${tri.toLocaleString()} trillion.` };
  },
  '/payback-period': (inputs) => {
    const invest = parseFloat(inputs.investment);
    const flow = parseFloat(inputs.cashFlow);
    if (isNaN(invest) || isNaN(flow) || flow <= 0) return { value: 'Invalid input' };
    const pp = invest / flow;
    return { value: `${pp.toFixed(1)} Years`, explanation: `It will take ${pp.toFixed(1)} years to recover the initial investment of $${invest.toLocaleString()}.` };
  },
  '/one-rep-max': (inputs) => {
    const w = parseFloat(inputs.weight);
    const r = parseFloat(inputs.reps);
    if (isNaN(w) || isNaN(r)) return { value: 'Invalid input' };
    // Brzycki Formula
    const orm = w / (1.0278 - (0.0278 * r));
    return { value: `${Math.round(orm)}`, explanation: `Based on the Brzycki Formula, your estimated 1RM is ${Math.round(orm)}.` };
  },
  '/capital-gains-yield': (inputs) => {
    const buy = parseFloat(inputs.buy);
    const sell = parseFloat(inputs.sell);
    if (isNaN(buy) || isNaN(sell)) return { value: 'Invalid input' };
    const yield_val = ((sell - buy) / buy) * 100;
    return { 
      value: `${yield_val.toFixed(2)}%`, 
      explanation: `The return from price appreciation is ${yield_val.toFixed(2)}%.` 
    };
  },
  '/compound-growth': (inputs) => {
    const p = parseFloat(inputs.principal);
    const r = parseFloat(inputs.rate) / 100;
    const t = parseFloat(inputs.years);
    if (isNaN(p) || isNaN(r) || isNaN(t)) return { value: 'Invalid input' };
    const amount = p * Math.pow(1 + r, t);
    return {
      value: `$${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      explanation: `At ${parseFloat(inputs.rate)}% annual growth, $${p.toLocaleString()} grows to $${amount.toLocaleString()} in ${t} years.`
    };
  },
  '/annualized-return': (inputs) => {
    const initial = parseFloat(inputs.initial);
    const final = parseFloat(inputs.final);
    const years = parseFloat(inputs.years);
    if (isNaN(initial) || isNaN(final) || isNaN(years) || years === 0) return { value: 'Invalid input' };
    const annualized = (Math.pow(final / initial, 1 / years) - 1) * 100;
    return {
      value: `${annualized.toFixed(2)}%`,
      explanation: `The smoothed annual return over ${years} years is ${annualized.toFixed(2)}%.`
    };
  },
  '/appreciation-calculator': (inputs) => {
    return standardCalculations['/compound-growth']({ 
      principal: inputs.value, 
      rate: inputs.rate, 
      years: inputs.years 
    });
  },
  '/basis-point-calculator': (inputs) => {
    const rate = parseFloat(inputs.rate);
    const bps = parseFloat(inputs.bps);
    const op = inputs.op;
    if (isNaN(rate) || isNaN(bps)) return { value: 'Invalid input' };
    const change = bps / 10000 * 100; // 1 bps = 0.01%
    const final = op === 'add' ? rate + change : rate - change;
    return {
      value: `${final.toFixed(4)}%`,
      explanation: `${rate}% ${op === 'add' ? '+' : '-'} ${bps} basis points (${change.toFixed(2)}%) equals ${final.toFixed(4)}%.`
    };
  },
  '/pe-ratio': (inputs) => {
    const price = parseFloat(inputs.price);
    const eps = parseFloat(inputs.eps);
    if (isNaN(price) || isNaN(eps) || eps === 0) return { value: 'Invalid input' };
    const pe = price / eps;
    return { value: `${pe.toFixed(2)}`, explanation: `The Price-to-Earnings ratio is ${pe.toFixed(2)}x.` };
  },
  '/eps-calculator': (inputs) => {
    const income = parseFloat(inputs.netIncome);
    const div = parseFloat(inputs.preferredDividends) || 0;
    const shares = parseFloat(inputs.shares);
    if (isNaN(income) || isNaN(shares) || shares === 0) return { value: 'Invalid input' };
    const eps = (income - div) / shares;
    return { value: `$${eps.toFixed(2)}`, explanation: `Earnings Per Share is $${eps.toFixed(2)} based on ${shares.toLocaleString()} shares.` };
  },
  '/roe-calculator': (inputs) => {
    const income = parseFloat(inputs.netIncome);
    const equity = parseFloat(inputs.equity);
    if (isNaN(income) || isNaN(equity) || equity === 0) return { value: 'Invalid input' };
    const roe = (income / equity) * 100;
    return { value: `${roe.toFixed(2)}%`, explanation: `Return on Equity is ${roe.toFixed(2)}% (Net Income / Shareholder Equity).` };
  },
  '/market-cap': (inputs) => {
    const price = parseFloat(inputs.price);
    const shares = parseFloat(inputs.shares);
    if (isNaN(price) || isNaN(shares)) return { value: 'Invalid input' };
    const cap = price * shares;
    return { value: `$${cap.toLocaleString()}`, explanation: `Market Capitalization is $${cap.toLocaleString()} based on ${shares.toLocaleString()} shares.` };
  },
  '/dividend-yield': (inputs) => {
    const div = parseFloat(inputs.dividend);
    const price = parseFloat(inputs.price);
    if (isNaN(div) || isNaN(price) || price === 0) return { value: 'Invalid input' };
    const yield_val = (div / price) * 100;
    return { value: `${yield_val.toFixed(2)}%`, explanation: `The annual dividend yield is ${yield_val.toFixed(2)}%.` };
  },
  '/pb-ratio': (inputs) => {
    const price = parseFloat(inputs.price);
    const book = parseFloat(inputs.bookValue);
    if (isNaN(price) || isNaN(book) || book === 0) return { value: 'Invalid input' };
    const pb = price / book;
    return { value: `${pb.toFixed(2)}`, explanation: `The Price-to-Book ratio is ${pb.toFixed(2)}x.` };
  },
  '/debt-to-equity': (inputs) => {
    const debt = parseFloat(inputs.totalDebt);
    const equity = parseFloat(inputs.totalEquity);
    if (isNaN(debt) || isNaN(equity) || equity === 0) return { value: 'Invalid input' };
    const ratio = debt / equity;
    return { value: `${ratio.toFixed(2)}`, explanation: `The Debt-to-Equity ratio is ${ratio.toFixed(2)}.` };
  },
  '/quick-ratio': (inputs) => {
    const cash = parseFloat(inputs.cash) || 0;
    const rec = parseFloat(inputs.receivables) || 0;
    const liab = parseFloat(inputs.liabilities);
    if (isNaN(liab) || liab === 0) return { value: 'Invalid input' };
    const ratio = (cash + rec) / liab;
    return { value: `${ratio.toFixed(2)}`, explanation: `The Quick Ratio (Acid-Test) is ${ratio.toFixed(2)}.` };
  },
  '/70-20-10-rule': (inputs) => {
    const income = parseFloat(inputs.income);
    if (isNaN(income)) return { value: 'Invalid input' };
    const live = income * 0.7;
    const save = income * 0.2;
    const give = income * 0.1;
    return {
      value: `Live: $${live.toLocaleString()}`,
      explanation: `Budget breakdown: $${live.toLocaleString()} for living expenses (70%), $${save.toLocaleString()} for savings/debt (20%), and $${give.toLocaleString()} for giving (10%).`
    };
  },
  '/28-36-rule': (inputs) => {
    const income = parseFloat(inputs.income);
    const housing = parseFloat(inputs.housing);
    const debt = parseFloat(inputs.debt);
    if (isNaN(income)) return { value: 'Invalid input' };
    const frontRatio = (housing / income) * 100;
    const backRatio = (debt / income) * 100;
    const frontPass = frontRatio <= 28;
    const backPass = backRatio <= 36;
    return {
      value: frontPass && backPass ? 'Healthy Levels' : 'Above Guidelines',
      explanation: `Front-end ratio (Housing): ${frontRatio.toFixed(1)}% (max 28%). Back-end ratio (Total Debt): ${backRatio.toFixed(1)}% (max 36%). Your debt levels are ${frontPass && backPass ? 'within' : 'above'} standard bank guidelines.`
    };
  },
  '/balance-transfer': (inputs) => {
    const bal = parseFloat(inputs.balance);
    const feePercent = parseFloat(inputs.fee) || 0;
    const newApr = parseFloat(inputs.newApr) || 0;
    if (isNaN(bal)) return { value: 'Invalid input' };
    const fee = bal * (feePercent / 100);
    const total = bal + fee;
    return {
      value: `$${total.toLocaleString()}`,
      explanation: `Transfer fee: $${fee.toLocaleString()} (${feePercent}%). Total balance on new card: $${total.toLocaleString()} at ${newApr}% APR.`
    };
  },
  '/credit-card-interest': (inputs) => {
    const bal = parseFloat(inputs.balance);
    const rate = parseFloat(inputs.rate);
    if (isNaN(bal) || isNaN(rate)) return { value: 'Invalid input' };
    const monthlyRate = rate / 100 / 12;
    const interest = bal * monthlyRate;
    return {
      value: `$${interest.toFixed(2)}`,
      explanation: `This month you will be charged approximately $${interest.toFixed(2)} in interest based on a ${rate}% APR.`
    };
  },
  '/credit-card-minimum-payment': (inputs) => {
    const bal = parseFloat(inputs.balance);
    const rate = parseFloat(inputs.rate) || 0;
    const percent = parseFloat(inputs.minPercent) || 2;
    if (isNaN(bal)) return { value: 'Invalid input' };
    const monthlyInterest = (bal * (rate / 100)) / 12;
    const principalPart = bal * (percent / 100);
    const min = Math.max(25, principalPart + monthlyInterest);
    return {
      value: `$${min.toLocaleString(undefined, {minimumFractionDigits: 2})}`,
      explanation: `Estimated minimum payment is ${percent}% of balance plus interest, but typically no less than $25.`
    };
  },
  '/credit-card-payment': (inputs) => {
    const bal = parseFloat(inputs.balance);
    const term = parseFloat(inputs.term);
    const rate = parseFloat(inputs.rate) / 100 / 12;
    if (isNaN(bal) || isNaN(term) || isNaN(rate)) return { value: 'Invalid input' };
    let payment = 0;
    if (rate === 0) payment = bal / term;
    else payment = (bal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1);
    return {
      value: `$${payment.toLocaleString(undefined, {minimumFractionDigits: 2})}/mo`,
      explanation: `To pay off $${bal.toLocaleString()} in ${term} months at ${parseFloat(inputs.rate)}% APR, you need to pay $${payment.toFixed(2)} per month.`
    };
  },
  '/credit-utilization': (inputs) => {
    const bal = parseFloat(inputs.balances);
    const limit = parseFloat(inputs.limits);
    if (isNaN(bal) || isNaN(limit) || limit === 0) return { value: 'Invalid input' };
    const util = (bal / limit) * 100;
    return {
      value: `${util.toFixed(1)}%`,
      explanation: `Your credit utilization is ${util.toFixed(1)}%. Experts recommend keeping this below 30% for a better credit score.`
    };
  },
  '/debt-calculator': (inputs) => {
    const cards = parseFloat(inputs.cards) || 0;
    const loans = parseFloat(inputs.loans) || 0;
    const other = parseFloat(inputs.other) || 0;
    const total = cards + loans + other;
    return {
      value: `$${total.toLocaleString()}`,
      explanation: `Total liabilities: Credit Cards ($${cards.toLocaleString()}), Loans ($${loans.toLocaleString()}), Other ($${other.toLocaleString()}).`
    };
  },
  '/debt-avalanche': (inputs) => {
    const total = parseFloat(inputs.total);
    const rate = parseFloat(inputs.rate);
    const over = parseFloat(inputs.overpayment) || 0;
    if (isNaN(total)) return { value: 'Invalid input' };
    return {
      value: `Focus: High Rate`,
      explanation: `In the Avalanche method, you pay your minimums on everything but put the extra $${over} toward your ${rate}% debt first to save the most on interest over time.`
    };
  },
  '/debt-snowball': (inputs) => {
    const total = parseFloat(inputs.total);
    const small = parseFloat(inputs.smallest);
    const over = parseFloat(inputs.overpayment) || 0;
    if (isNaN(total)) return { value: 'Invalid input' };
    return {
      value: `Focus: Small Balance`,
      explanation: `In the Snowball method, you pay extra $${over} toward your smallest debt ($${small}) first to gain psychological momentum by eliminating accounts quickly.`
    };
  },
  '/deferred-payment-loan': (inputs) => {
    const p = parseFloat(inputs.principal);
    const r = parseFloat(inputs.rate) / 100 / 12;
    const m = parseFloat(inputs.months);
    if (isNaN(p) || isNaN(r) || isNaN(m)) return { value: 'Invalid input' };
    const interest = p * r * m;
    const total = p + interest;
    return {
      value: `$${total.toLocaleString()}`,
      explanation: `After ${m} months of deferment at ${parseFloat(inputs.rate)}% interest, your new balance will be $${total.toLocaleString()} (including $${interest.toLocaleString()} accrued interest).`
    };
  },
  '/agi-calculator': (inputs) => {
    const inc = parseFloat(inputs.income);
    const ret = parseFloat(inputs.retirement) || 0;
    const adj = parseFloat(inputs.adjustments) || 0;
    if (isNaN(inc)) return { value: 'Invalid input' };
    const agi = inc - ret - adj;
    return { value: `$${agi.toLocaleString()}`, explanation: `Adjusted Gross Income: $${inc.toLocaleString()} Gross - $${(ret + adj).toLocaleString()} adjustments = $${agi.toLocaleString()}.` };
  },
  '/529-plan': (inputs) => {
    const p = parseFloat(inputs.initial);
    const m = parseFloat(inputs.monthly);
    const r = parseFloat(inputs.return) / 100 / 12;
    const t = parseFloat(inputs.years) * 12;
    if (isNaN(p) || isNaN(m) || isNaN(t)) return { value: 'Invalid input' };
    let balance = p;
    for (let i = 0; i < t; i++) {
      balance = (balance + m) * (1 + r);
    }
    return { value: `$${Math.round(balance).toLocaleString()}`, explanation: `At a ${parseFloat(inputs.return)}% annual return, your 529 balance will be approximately $${Math.round(balance).toLocaleString()} in ${inputs.years} years.` };
  },
  '/shiplap': (inputs) => {
    const w = parseFloat(inputs.width);
    const h = parseFloat(inputs.height);
    const bw = parseFloat(inputs.boardWidth) / 12; // in to ft
    if (isNaN(w) || isNaN(h) || isNaN(bw)) return { value: 'Invalid input' };
    const area = w * h;
    const boards = Math.ceil(area / (bw * 8)); // Assuming 8-foot boards
    return { value: `${boards} Boards (8ft)`, explanation: `To cover ${area} sq ft, you'll need approx. ${boards} boards (8ft length).` };
  },
  '/stair-carpet': (inputs) => {
    const steps = parseFloat(inputs.steps);
    const w = parseFloat(inputs.width);
    const run = parseFloat(inputs.run);
    const rise = parseFloat(inputs.rise);
    if (isNaN(steps) || isNaN(w) || isNaN(run) || isNaN(rise)) return { value: 'Invalid input' };
    const stepLength = run + rise;
    const totalSqIn = steps * stepLength * w;
    const sqft = totalSqIn / 144;
    return { value: `${Math.ceil(sqft * 1.1)} sq ft`, explanation: `Including 10% waste, you need about ${Math.ceil(sqft * 1.1)} sq ft of carpet for ${steps} steps.` };
  },
  '/bench-press-1rm': (inputs) => {
    return standardCalculations['/one-rep-max'](inputs);
  },
  '/batting-average': (inputs) => {
    const hits = parseFloat(inputs.hits);
    const ab = parseFloat(inputs.atBats);
    if (isNaN(hits) || isNaN(ab) || ab === 0) return { value: 'Invalid input' };
    const avg = hits / ab;
    return { value: avg.toFixed(3).substring(1), explanation: `Batting average is .${avg.toFixed(3).split('.')[1]}` };
  },
  '/era-calculator': (inputs) => {
    const runs = parseFloat(inputs.earnedRuns);
    const ip = parseFloat(inputs.inningsPitched);
    if (isNaN(runs) || isNaN(ip) || ip === 0) return { value: 'Invalid input' };
    const era = (runs / ip) * 9;
    return { value: era.toFixed(2), explanation: `Earned Run Average (ERA) is ${era.toFixed(2)}.` };
  },
  '/cricket-strike-rate': (inputs) => {
    const runs = parseFloat(inputs.runs);
    const balls = parseFloat(inputs.balls);
    if (isNaN(runs) || isNaN(balls) || balls === 0) return { value: 'Invalid input' };
    const sr = (runs / balls) * 100;
    return { value: sr.toFixed(1), explanation: `Strike rate is ${sr.toFixed(1)} runs per 100 balls.` };
  },
  '/steps-to-calories': (inputs) => {
    const steps = parseFloat(inputs.steps);
    const weight = parseFloat(inputs.weight);
    if (isNaN(steps) || isNaN(weight)) return { value: 'Invalid input' };
    // Very rough estimate: 0.04 calories per step for average person
    const cal = steps * 0.04 * (weight / 70); 
    return { value: `${Math.round(cal)} kcal`, explanation: `Approx ${Math.round(cal)} calories burned over ${steps.toLocaleString()} steps for a ${weight}kg person.` };
  },
  '/finance-charge': (inputs) => {
    const amt = parseFloat(inputs.amount);
    const r = parseFloat(inputs.rate) / 100 / 12;
    const n = parseFloat(inputs.term);
    if (isNaN(amt) || isNaN(r) || isNaN(n)) return { value: 'Invalid input' };
    const payment = (amt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const charge = (payment * n) - amt;
    return { value: `$${charge.toLocaleString(undefined, {minimumFractionDigits: 2})}`, explanation: `Total interest (finance charge) over ${n} months is $${charge.toLocaleString()}.` };
  },
  '/recipe-scaling': (inputs) => {
    const current = parseFloat(inputs.originalYield);
    const desired = parseFloat(inputs.desiredYield);
    if (isNaN(current) || isNaN(desired) || current === 0) return { value: 'Invalid input' };
    const factor = desired / current;
    return { value: `${factor.toFixed(2)}x`, explanation: `Multiply all ingredients by ${factor.toFixed(2)} to scale the recipe.` };
  },
  '/eidl-advance': (inputs) => {
    const emp = parseFloat(inputs.employees);
    if (isNaN(emp)) return { value: 'Invalid input' };
    const amt = Math.min(10000, emp * 1000);
    return { value: `$${amt.toLocaleString()}`, explanation: `The EIDL Advance provides $1,000 per employee, capped at $10,000.` };
  },
  '/car-lease': (inputs) => {
    const msrp = parseFloat(inputs.price);
    const resVal = parseFloat(inputs.residual) / 100;
    const mf = parseFloat(inputs.moneyFactor);
    const term = 36;
    if (isNaN(msrp) || isNaN(resVal) || isNaN(mf)) return { value: 'Invalid input' };
    const capCost = msrp * 0.95; // Assume some discount
    const residual = msrp * resVal;
    const depreciation = (capCost - residual) / term;
    const financeCharge = (capCost + residual) * mf;
    const total = depreciation + financeCharge;
    return { value: `$${total.toFixed(2)}/mo`, explanation: `Estimated payment based on a $${capCost.toLocaleString()} net cap cost and 3-year term.` };
  },
  '/time-calculator': (inputs) => {
    const h1 = parseInt(inputs.h1) || 0;
    const m1 = parseInt(inputs.m1) || 0;
    const h2 = parseInt(inputs.h2) || 0;
    const m2 = parseInt(inputs.m2) || 0;
    let totalMins = (h1 * 60 + m1) + (h2 * 60 + m2);
    const hours = Math.floor(totalMins / 60);
    const mins = totalMins % 60;
    return { value: `${hours}h ${mins}m`, explanation: `The total time duration is ${hours} hours and ${mins} minutes.` };
  },
  '/grout': (inputs) => {
    const area = parseFloat(inputs.area);
    const tw = parseFloat(inputs.tileW);
    const tl = parseFloat(inputs.tileL);
    const jw = parseFloat(inputs.jointW);
    if (isNaN(area) || isNaN(tw) || isNaN(tl) || isNaN(jw)) return { value: 'Invalid input' };
    // Very rough grout coverage estimation
    const lbs = (area * 0.15); 
    return { value: `${Math.ceil(lbs)} lbs`, explanation: `Estimated grout needed for ${area} sq ft based on standard tile spacing.` };
  },
  '/bitcoin-profit-loss': (inputs) => {
    const buy = parseFloat(inputs.buyPrice);
    const sell = parseFloat(inputs.sellPrice);
    const amt = parseFloat(inputs.amount);
    if (isNaN(buy) || isNaN(sell) || isNaN(amt)) return { value: 'Invalid input' };
    const profit = (sell - buy) * amt;
    return { value: `$${profit.toLocaleString()}`, explanation: `${profit >= 0 ? 'Profit' : 'Loss'} of $${Math.abs(profit).toLocaleString()} on ${amt} BTC.` };
  },
  '/concrete-block': (inputs) => {
    const l = parseFloat(inputs.length);
    const h = parseFloat(inputs.height);
    if (isNaN(l) || isNaN(h)) return { value: 'Invalid input' };
    const count = Math.ceil((l * 12 / 16) * (h * 12 / 8));
    return { value: `${count} Blocks`, explanation: `Based on standard 8x16" blocks, you need approximately ${count} blocks for a ${l}x${h} wall.` };
  },
  '/concrete-column': (inputs) => {
    const d = parseFloat(inputs.diameter) / 12; // in to ft
    const h = parseFloat(inputs.height);
    if (isNaN(d) || isNaN(h)) return { value: 'Invalid input' };
    const vol = Math.PI * Math.pow(d / 2, 2) * h;
    const yards = vol / 27;
    return { value: `${yards.toFixed(2)} Yards`, explanation: `A column with ${inputs.diameter}" diameter and ${h}' height requires ${yards.toFixed(2)} cubic yards of concrete.` };
  },
  '/0-60-time': (inputs) => {
    const hp = parseFloat(inputs.power);
    const lb = parseFloat(inputs.weight);
    if (isNaN(hp) || isNaN(lb)) return { value: 'Invalid input' };
    const time = 2.0 * Math.pow(lb / hp, 0.33); 
    return { value: `${time.toFixed(1)}s`, explanation: `Estimated 0-60 acceleration time based on power-to-weight ratio.` };
  },
  '/diabetes-risk': (inputs) => {
    const age = parseFloat(inputs.age);
    const bmi = parseFloat(inputs.bmi);
    if (isNaN(age) || isNaN(bmi)) return { value: 'Invalid input' };
    let score = 0;
    if (age > 45) score += 2;
    if (bmi > 25) score += 3;
    return { value: score > 3 ? 'High' : 'Low', explanation: 'This is a simplified screening based on age and weight. Please consult a doctor.' };
  },
  '/insulin-dosage': (inputs) => {
    const carbs = parseFloat(inputs.carbs);
    const ratio = parseFloat(inputs.ratio);
    if (isNaN(carbs) || isNaN(ratio) || ratio === 0) return { value: 'Invalid input' };
    const units = carbs / ratio;
    return { value: `${units.toFixed(1)} Units`, explanation: `Based on a 1:${ratio} ratio, you need ${units.toFixed(1)} units of insulin for ${carbs}g of carbs.` };
  },
  '/subnet-mask': (inputs) => {
    const mask = parseInt(inputs.mask);
    if (isNaN(mask) || mask < 0 || mask > 32) return { value: 'Invalid' };
    const subnets = Math.pow(2, 32 - mask);
    return { value: `/ ${mask}`, explanation: `A /${mask} subnet provides ${subnets.toLocaleString()} usable IP addresses.` };
  },
  '/unix-time': (inputs) => {
    const ts = parseInt(inputs.timestamp);
    if (isNaN(ts)) return { value: 'Invalid' };
    const date = new Date(ts * 1000);
    return { value: date.toLocaleString(), explanation: `Unix timestamp ${ts} converted to local time.` };
  },
  '/color-converter': (inputs) => {
    // Basic hex/rgb detection
    const color = inputs.color;
    if (color.startsWith('#')) return standardCalculations['/hex-to-rgb']({ hex: color });
    return { value: 'Parsed', explanation: 'Current system supports hex-to-rgb conversion.' };
  },
  '/break-even': (inputs) => {
    const fixed = parseFloat(inputs.fixedCosts);
    const price = parseFloat(inputs.pricePerUnit);
    const variable = parseFloat(inputs.variableCostPerUnit);
    if (isNaN(fixed) || isNaN(price) || isNaN(variable) || price <= variable) return { value: 'Inf' };
    const units = fixed / (price - variable);
    return { value: `${Math.ceil(units)} Units`, explanation: `You need to sell ${Math.ceil(units)} units at $${price} each to cover your $${fixed.toLocaleString()} fixed costs.` };
  },
  '/cac': (inputs) => {
    const cost = parseFloat(inputs.salesMarketingCosts);
    const customers = parseFloat(inputs.newCustomers);
    if (isNaN(cost) || isNaN(customers) || customers === 0) return { value: 'Invalid input' };
    const cac = cost / customers;
    return { value: `$${cac.toFixed(2)}`, explanation: `The average cost to acquire one new customer is $${cac.toFixed(2)}.` };
  },
  '/website-ad-revenue': (inputs) => {
    const views = parseFloat(inputs.pageviews);
    const rpm = parseFloat(inputs.rpm);
    if (isNaN(views) || isNaN(rpm)) return { value: 'Invalid input' };
    const rev = (views / 1000) * rpm;
    return { value: `$${rev.toLocaleString()}`, explanation: `With ${views.toLocaleString()} pageviews and a $${rpm} RPM, you generate approximately $${rev.toLocaleString()} per month.` };
  },
  '/dog-food': (inputs) => {
    const weight = parseFloat(inputs.weight);
    const act = parseFloat(inputs.activity) || 1.5;
    if (isNaN(weight)) return { value: 'Invalid input' };
    // RER = 70 * (weight_kg)^0.75
    const rer = 70 * Math.pow(weight * 0.453592, 0.75);
    const kcal = rer * act;
    return { value: `${Math.round(kcal)} kcal`, explanation: `Your dog needs about ${Math.round(kcal)} calories per day based on their weight and activity level.` };
  },
  '/carbon-footprint': (inputs) => {
    const miles = parseFloat(inputs.milesPerMonth) || 0;
    const mpg = parseFloat(inputs.avgMpg) || 25;
    const bill = parseFloat(inputs.electricBill) || 0;
    const milesFootprint = (miles / mpg) * 19.6 * 12; // lbs CO2 per year
    const electricFootprint = (bill / 0.13) * 0.9 * 12; // lbs CO2 per year
    const total = (milesFootprint + electricFootprint) / 2204; // Metric tons
    return { value: `${total.toFixed(1)} Tons/yr`, explanation: `Estimated annual carbon footprint is ${total.toFixed(1)} metric tons of CO2 based on driving and electricity usage.` };
  },
  '/dog-pregnancy': (inputs) => {
    const mating = new Date(inputs.matingDate);
    if (isNaN(mating.getTime())) return { value: 'Invalid' };
    const due = new Date(mating);
    due.setDate(due.getDate() + 63);
    return { value: due.toLocaleDateString(), explanation: `Estimated whelping date (63 days from mating).` };
  },
  '/anniversary': (inputs) => {
    const start = new Date(inputs.startDate);
    if (isNaN(start.getTime())) return { value: 'Invalid' };
    const now = new Date();
    const diff = now.getTime() - start.getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    return { value: `${years} Years`, explanation: `You have been together for ${years} years.` };
  },
  '/bakers-percentage': (inputs) => {
    const flour = parseFloat(inputs.flour);
    const water = parseFloat(inputs.water);
    const salt = parseFloat(inputs.salt);
    if (isNaN(flour) || flour === 0) return { value: 'Invalid' };
    const hydration = (water / flour) * 100;
    const saltPct = (salt / flour) * 100;
    return { value: `${hydration.toFixed(1)}% Hydration`, explanation: `Baker's Percentages: Water (${hydration.toFixed(1)}%), Salt (${saltPct.toFixed(1)}%).` };
  },
  '/gpa': (inputs) => {
    const grades = [parseFloat(inputs.grade1), parseFloat(inputs.grade2), parseFloat(inputs.grade3)].filter(g => !isNaN(g));
    if (grades.length === 0) return { value: 'Invalid' };
    const sum = grades.reduce((a, b) => a + b, 0);
    const gpa = sum / grades.length;
    return { value: gpa.toFixed(2), explanation: `Average GPA across ${grades.length} courses.` };
  },
  '/gpa-advanced': (inputs) => {
    // Simplified: expects 0-4 scale
    return standardCalculations['/gpa'](inputs);
  },
  '/million-to-billion': (inputs) => {
    const val = parseFloat(inputs.value);
    if (isNaN(val)) return { value: 'Invalid' };
    return { value: `${(val / 1000).toFixed(3)} Billion`, explanation: `${val.toLocaleString()} million is equal to ${(val / 1000).toFixed(3)} billion.` };
  },
  'crore-to-lakh': (inputs) => {
    const val = parseFloat(inputs.value);
    if (isNaN(val)) return { value: 'Invalid' };
    return { value: `${(val * 100).toLocaleString()} Lakh`, explanation: `${val} Crore is equal to ${val * 100} Lakh.` };
  },
  '/crore-to-lakh': (inputs) => {
    return standardCalculations['crore-to-lakh'](inputs);
  },
  '/nm-to-ft-lbs': (inputs) => {
    const val = parseFloat(inputs.value);
    if (isNaN(val)) return { value: 'Invalid' };
    const ftlbs = val * 0.737562149;
    return { value: `${ftlbs.toFixed(2)} ft-lbs`, explanation: `${val} Newton-meters is approximately ${ftlbs.toFixed(2)} foot-pounds.` };
  },
  '/unit-converter': (inputs) => {
    const val = parseFloat(inputs.value);
    const type = inputs.type;
    if (isNaN(val)) return { value: 'Invalid' };
    if (type === 'length') return { value: `${(val * 3.28).toFixed(2)} ft`, explanation: `${val}m is approx ${(val * 3.28).toFixed(2)} feet.` };
    return { value: String(val), explanation: 'Feature under construction.' };
  },
  '/scientific': (inputs) => {
    try {
      const expression = inputs.expression;
      if (!expression) return { value: 'Enter expression' };
      // Basic math evaluation for scientific calculator
      // Note: In real app we might use mathjs, but for simplicity:
      const clean = expression.replace(/[^0-9+\-*/(). ^sqrt]/g, '').replace('sqrt', 'Math.sqrt').replace('^', '**');
      const result = eval(clean);
      return { value: String(result), explanation: `Result of: ${expression}` };
    } catch (e) {
      return { value: 'Error', explanation: 'Invalid mathematical expression.' };
    }
  }
};
