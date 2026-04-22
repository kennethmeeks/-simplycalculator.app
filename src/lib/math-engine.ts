
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
  '/tip-calculator': (inputs) => {
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
  '/fuel-cost-calculator': (inputs) => {
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
  '/grade-calculator': (inputs) => {
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
  '/pressure-conversion': (inputs) => {
    const val = parseFloat(inputs.value);
    const from = inputs.fromUnit;
    if (isNaN(val)) return { value: 'Invalid input' };
    
    // Base is Pascal
    let pa = val;
    if (from === 'psi') pa = val * 6894.76;
    if (from === 'bar') pa = val * 100000;
    if (from === 'atm') pa = val * 101325;
    
    return {
      value: `${pa.toLocaleString()} Pa`,
      explanation: `Conversion results: ${(pa/100000).toFixed(4)} bar | ${(pa/6894.76).toFixed(2)} psi | ${(pa/101325).toFixed(4)} atm`
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
  }
};
