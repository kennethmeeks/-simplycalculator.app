import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { Clock, Plus, Trash2, Calendar } from 'lucide-react';

interface TimeEntry {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  breakMinutes: number;
}

export const HoursCalculator: React.FC = () => {
  const [entries, setEntries] = useState<TimeEntry[]>([
    { id: '1', day: 'Monday', startTime: '09:00', endTime: '17:00', breakMinutes: 30 },
    { id: '2', day: 'Tuesday', startTime: '09:00', endTime: '17:00', breakMinutes: 30 },
    { id: '3', day: 'Wednesday', startTime: '09:00', endTime: '17:00', breakMinutes: 30 },
    { id: '4', day: 'Thursday', startTime: '09:00', endTime: '17:00', breakMinutes: 30 },
    { id: '5', day: 'Friday', startTime: '09:00', endTime: '17:00', breakMinutes: 30 },
  ]);
  
  const [totalHours, setTotalHours] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [totalPay, setTotalPay] = useState(0);

  const addEntry = () => {
    setEntries([...entries, { 
      id: Math.random().toString(36).substr(2, 9), 
      day: 'New Day', 
      startTime: '09:00', 
      endTime: '17:00', 
      breakMinutes: 0 
    }]);
  };

  const removeEntry = (id: string) => {
    if (entries.length > 1) {
      setEntries(entries.filter(e => e.id !== id));
    }
  };

  const updateEntry = (id: string, field: keyof TimeEntry, value: any) => {
    setEntries(entries.map(e => e.id === id ? { ...e, [field]: value } : e));
  };

  useEffect(() => {
    let totalMins = 0;
    
    entries.forEach(e => {
      const start = e.startTime.split(':').map(Number);
      const end = e.endTime.split(':').map(Number);
      
      let diffMins = (end[0] * 60 + end[1]) - (start[0] * 60 + start[1]);
      if (diffMins < 0) diffMins += 24 * 60; // Handle overnight shifts
      
      totalMins += (diffMins - e.breakMinutes);
    });

    setTotalMinutes(totalMins);
    const hours = totalMins / 60;
    setTotalHours(Number(hours.toFixed(2)));
    setTotalPay(Number((hours * hourlyRate).toFixed(2)));
  }, [entries, hourlyRate]);

  return (
    <div className="max-w-4xl mx-auto">
      <Helmet>
        <title>Hours Calculator | Calculate Work Hours & Weekly Timesheet</title>
        <meta name="description" content="Free online hours calculator to track work time, calculate weekly totals, and estimate gross pay. Perfect for employees, freelancers, and payroll in 2026." />
      </Helmet>

      <h1>Hours Calculator</h1>
      <p>Track your daily work hours, subtract breaks, and calculate your total weekly time and estimated gross pay.</p>

      

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="calculator-container">
            <div className="section-title flex justify-between items-center">
              <span>Weekly Timesheet</span>
              <button 
                onClick={addEntry}
                className="text-xs bg-[#0066cc] text-white px-3 py-1 rounded hover:bg-[#0052a3] flex items-center gap-1"
              >
                <Plus className="w-3 h-3" /> Add Day
              </button>
            </div>
            
            <div className="space-y-3">
              {entries.map((e) => (
                <div key={e.id} className="flex flex-col md:flex-row items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded group relative">
                  <input 
                    type="text" 
                    value={e.day} 
                    onChange={(e) => updateEntry(e.id, 'day', e.target.value)}
                    className="w-full md:w-32 text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                  />
                  <div className="flex gap-3 flex-1 w-full md:w-auto">
                    <div className="flex-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">Start</label>
                      <input 
                        type="time" 
                        value={e.startTime} 
                        onChange={(ev) => updateEntry(e.id, 'startTime', ev.target.value)}
                        className="w-full text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">End</label>
                      <input 
                        type="time" 
                        value={e.endTime} 
                        onChange={(ev) => updateEntry(e.id, 'endTime', ev.target.value)}
                        className="w-full text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase block mb-0.5">Break (min)</label>
                      <input 
                        type="number" 
                        value={e.breakMinutes} 
                        onChange={(ev) => updateEntry(e.id, 'breakMinutes', Number(ev.target.value))}
                        className="w-full text-sm border-slate-200 rounded focus:border-[#0066cc] focus:ring-1 focus:ring-[#0066cc]"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => removeEntry(e.id)}
                    className="text-slate-300 hover:text-red-500 transition-colors md:static absolute right-2 top-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="calculator-container">
            <div className="section-title">Payroll Summary</div>
            <div className="space-y-6">
              <div className="result-box">
                <div className="text-xs text-slate-500 uppercase font-bold">Total Hours</div>
                <div className="text-3xl font-bold text-[#0066cc]">{totalHours} <span className="text-sm font-normal text-slate-400">hrs</span></div>
                <div className="text-[10px] text-slate-400 mt-1">{Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m</div>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <label className="input-label">Hourly Rate ($)</label>
                <input 
                  type="number" 
                  value={hourlyRate} 
                  onChange={(e) => setHourlyRate(Number(e.target.value))} 
                  className="input-field" 
                />
              </div>

              <div className="result-box bg-[#f0f7ff] border-[#0066cc]/10">
                <div className="text-xs text-slate-500 uppercase font-bold">Estimated Gross Pay</div>
                <div className="text-3xl font-bold text-[#0066cc]">${totalPay.toLocaleString()}</div>
              </div>
            </div>
          </div>

          <div className="bg-[#e7f3ff] border border-[#0066cc]/20 rounded p-4 text-sm text-[#004d99]">
            <h4 className="font-bold mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Payroll Tip
            </h4>
            <p>Remember that gross pay is before taxes and deductions. Your actual take-home pay will be lower depending on your tax bracket and benefits.</p>
          </div>
          
        </div>
      </div>

      <div className="mt-12 prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900">The Ultimate Guide to Calculating Work Hours</h2>
        <p>
          Accurately tracking work hours is essential for both employees and employers. Whether you are a freelancer billing multiple clients or an hourly employee verifying your paycheck, our <strong>hours calculator</strong> simplifies the process of managing your time and earnings in 2026.
        </p>
        
        <h3 className="text-xl font-bold text-slate-900 mt-8">How to Calculate Total Work Hours</h3>
        <p>
          Calculating hours manually can be prone to errors, especially when dealing with breaks and shifts that cross midnight. Here is the standard method:
        </p>
        
        <h4 className="font-bold text-slate-900">1. Determine Daily Duration</h4>
        <p>
          Subtract the start time from the end time. For example, if you start at 8:30 AM and end at 5:15 PM (17:15 in 24-hour time), the duration is 8 hours and 45 minutes.
        </p>

        <h4 className="font-bold text-slate-900">2. Subtract Unpaid Breaks</h4>
        <p>
          Most employers require a 30-minute or 1-hour unpaid lunch break. Subtract this from your daily total. If you worked 8h 45m and took a 30m break, your billable time is 8h 15m.
        </p>

        <h4 className="font-bold text-slate-900">3. Convert to Decimals</h4>
        <p>
          To calculate pay, you must convert minutes to decimals. Divide the minutes by 60. For 15 minutes: 15 / 60 = 0.25. So, 8h 15m becomes 8.25 hours.
        </p>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Practical Applications of an Hours Calculator</h3>
        <p>
          Tracking time is critical in many professional scenarios:
        </p>
        <ul>
          <li><strong>Freelancers and Contractors:</strong> Accurate billing for projects and maintaining transparency with clients.</li>
          <li><strong>Small Business Owners:</strong> Managing payroll for hourly staff and tracking labor costs.</li>
          <li><strong>Project Management:</strong> Monitoring how much time is spent on specific tasks to improve future estimates.</li>
          <li><strong>Overtime Tracking:</strong> Ensuring you are correctly compensated for hours worked beyond the standard 40-hour week.</li>
        </ul>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Frequently Asked Questions (FAQ)</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold text-slate-900">What is the difference between gross pay and net pay?</p>
            <p>Gross pay is the total amount earned before any deductions. Net pay (or take-home pay) is what remains after federal and state taxes, Social Security, and health insurance premiums are deducted.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">How do I handle shifts that cross midnight?</p>
            <p>If you start at 10:00 PM and end at 6:00 AM the next day, you add 24 hours to the end time for the calculation. Our calculator handles this logic automatically.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">What is the "rounding rule" in payroll?</p>
            <p>Many companies round time to the nearest 15 minutes. For example, 8:07 becomes 8:00, while 8:08 becomes 8:15. Check your local labor laws to ensure your company's rounding policy is compliant.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 mt-8">Pro Tip: Time Management</h3>
        <p>
          Using a digital hours calculator not only ensures accuracy but also helps you identify patterns in your work habits. If you consistently find yourself working more than 50 hours a week, it may be time to reassess your workload or negotiate for additional resources.
        </p>
      </div>
    </div>
  );
};
