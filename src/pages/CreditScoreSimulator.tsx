import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CalculatorSEO } from '../components/CalculatorSEO';
import { ResultActions } from '../components/ResultActions';

import { CreditCard, TrendingUp, AlertCircle, CheckCircle2, Info, ShieldCheck, History, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

export const CreditScoreSimulator: React.FC = () => {
  const [currentScore, setCurrentScore] = useState<number>(700);
  const [simulatedScore, setSimulatedScore] = useState<number>(700);
  const [scoreChange, setScoreChange] = useState<number>(0);

  // Simulation Actions
  const [actions, setActions] = useState({
    payOffBalance: false,
    openNewCard: false,
    closeOldAccount: false,
    missPayment: false,
    increaseLimit: false,
    newLoan: false,
  });

  useEffect(() => {
    let change = 0;
    
    if (actions.payOffBalance) change += 45;
    if (actions.openNewCard) change -= 15;
    if (actions.closeOldAccount) change -= 25;
    if (actions.missPayment) change -= 80;
    if (actions.increaseLimit) change += 20;
    if (actions.newLoan) change -= 10;

    const newScore = Math.min(850, Math.max(300, currentScore + change));
    setSimulatedScore(newScore);
    setScoreChange(newScore - currentScore);
  }, [currentScore, actions]);

  const toggleAction = (key: keyof typeof actions) => {
    setActions(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const getScoreColor = (score: number) => {
    if (score >= 800) return 'text-emerald-600';
    if (score >= 740) return 'text-green-600';
    if (score >= 670) return 'text-amber-600';
    if (score >= 580) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 800) return 'Exceptional';
    if (score >= 740) return 'Very Good';
    if (score >= 670) return 'Good';
    if (score >= 580) return 'Fair';
    return 'Poor';
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Credit Score Simulator [Free & No Sign-up]</title>
        <meta name="description" content="Free online credit score simulator. Estimate how financial actions like paying off debt or opening new accounts will impact your credit score in 2026." />
        <meta name="keywords" content="credit score simulator, credit score estimator, credit impact calculator, fico score simulator, credit score help 2026" />
      </Helmet>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Credit Score Simulator</h1>
        <p className="text-slate-600">Estimate how different financial decisions might impact your credit score in 2026.</p>
      </div>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              Current Credit Profile
            </h2>
            <div className="space-y-4">
              <div>
                <label className="input-label">Your Current Estimated Score (300 - 850)</label>
                <input 
                  type="range" 
                  min="300" 
                  max="850" 
                  value={currentScore} 
                  onChange={(e) => setCurrentScore(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                  <span>300 (Poor)</span>
                  <span className="text-lg font-bold text-slate-900">{currentScore}</span>
                  <span>850 (Exceptional)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="calculator-container">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              Simulate Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button 
                onClick={() => toggleAction('payOffBalance')}
                className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${actions.payOffBalance ? 'bg-green-50 border-green-200 ring-1 ring-green-200' : 'bg-white border-slate-200 hover:border-slate-300'}`}
              >
                <div className={`p-2 rounded-lg ${actions.payOffBalance ? 'bg-green-100 text-green-600' : 'bg-slate-100 text-slate-500'}`}>
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Pay Off All Credit Cards</div>
                  <div className="text-xs text-slate-500">Reduces utilization to 0%</div>
                </div>
              </button>

              <button 
                onClick={() => toggleAction('increaseLimit')}
                className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${actions.increaseLimit ? 'bg-blue-50 border-blue-200 ring-1 ring-blue-200' : 'bg-white border-slate-200 hover:border-slate-300'}`}
              >
                <div className={`p-2 rounded-lg ${actions.increaseLimit ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Increase Credit Limit</div>
                  <div className="text-xs text-slate-500">Lowers overall utilization</div>
                </div>
              </button>

              <button 
                onClick={() => toggleAction('openNewCard')}
                className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${actions.openNewCard ? 'bg-amber-50 border-amber-200 ring-1 ring-amber-200' : 'bg-white border-slate-200 hover:border-slate-300'}`}
              >
                <div className={`p-2 rounded-lg ${actions.openNewCard ? 'bg-amber-100 text-amber-600' : 'bg-slate-100 text-slate-500'}`}>
                  <CreditCard className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Open New Credit Card</div>
                  <div className="text-xs text-slate-500">Hard inquiry + new account</div>
                </div>
              </button>

              <button 
                onClick={() => toggleAction('newLoan')}
                className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${actions.newLoan ? 'bg-indigo-50 border-indigo-200 ring-1 ring-indigo-200' : 'bg-white border-slate-200 hover:border-slate-300'}`}
              >
                <div className={`p-2 rounded-lg ${actions.newLoan ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'}`}>
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Take Out Personal Loan</div>
                  <div className="text-xs text-slate-500">Changes credit mix</div>
                </div>
              </button>

              <button 
                onClick={() => toggleAction('closeOldAccount')}
                className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${actions.closeOldAccount ? 'bg-red-50 border-red-200 ring-1 ring-red-200' : 'bg-white border-slate-200 hover:border-slate-300'}`}
              >
                <div className={`p-2 rounded-lg ${actions.closeOldAccount ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
                  <History className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Close Oldest Account</div>
                  <div className="text-xs text-slate-500">Reduces average age of credit</div>
                </div>
              </button>

              <button 
                onClick={() => toggleAction('missPayment')}
                className={`p-4 rounded-xl border text-left transition-all flex items-center gap-3 ${actions.missPayment ? 'bg-red-50 border-red-200 ring-1 ring-red-200' : 'bg-white border-slate-200 hover:border-slate-300'}`}
              >
                <div className={`p-2 rounded-lg ${actions.missPayment ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'}`}>
                  <AlertCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-900">Miss a Payment (30+ Days)</div>
                  <div className="text-xs text-slate-500">Major negative impact</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <h2 className="text-lg font-bold mb-6 flex items-center gap-2 relative z-10">
              <TrendingUp className="w-5 h-5" />
              Simulated Result
            </h2>
            
            <div className="text-center py-8 relative z-10">
              <motion.div 
                key={simulatedScore}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`text-7xl font-black mb-2 ${getScoreColor(simulatedScore)}`}
              >
                {simulatedScore}
              </motion.div>
              <div className="text-sm font-bold uppercase tracking-widest text-slate-400">
                {getScoreLabel(simulatedScore)}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 relative z-10">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Estimated Change</span>
                <span className={`font-bold text-lg ${scoreChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {scoreChange >= 0 ? '+' : ''}{scoreChange} Points
                </span>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-800">
                <ResultActions 
                  onReset={() => {
                    setCurrentScore(700);
                    setActions({
                      payOffBalance: false,
                      openNewCard: false,
                      closeOldAccount: false,
                      missPayment: false,
                      increaseLimit: false,
                      newLoan: false,
                    });
                  }}
                  onCopy={() => {
                    const text = `Credit Score Simulation:\nInitial Score: ${currentScore}\nSimulated Score: ${simulatedScore}\nChange: ${scoreChange >= 0 ? '+' : ''}${scoreChange} Points\nCalculated at simplycalculator.app`;
                    navigator.clipboard.writeText(text);
                  }}
                  dark
                />
              </div>
            </div>
          </div>

          <div className="calculator-container">
            <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-500" />
              Simulator Note
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              This simulator provides an <strong>estimate</strong> based on general credit scoring models (FICO/VantageScore). Actual impact varies based on your unique credit history and the specific scoring model used by lenders.
            </p>
          </div>

          
        </div>
      </div>

      <CalculatorSEO 
        name="Credit Score Simulator" 
        path="/credit-score-simulator" 
        description="Estimate how financial actions impact your credit score. Simulate paying off debt, new accounts, and payment history for 2026."
      />
    </div>
  );
};
