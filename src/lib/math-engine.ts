
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
    const payment = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
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
    const payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
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
  }
};
