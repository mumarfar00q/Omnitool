import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { cn } from '../../lib/utils';
import { Calculator, Info, RotateCcw } from 'lucide-react';

export default function StudentLoanCalculator() {
  const [amount, setAmount] = useState<number>(0);
  const [interest, setInterest] = useState<number>(0);
  const [term, setTerm] = useState<number>(0);
  const [termType, setTermType] = useState<'months' | 'years'>('years');

  const results = useMemo(() => {
    const totalMonths = termType === 'years' ? term * 12 : term;
    const monthlyRate = interest / 100 / 12;
    
    let monthlyPayment = 0;
    if (monthlyRate === 0) {
      monthlyPayment = totalMonths > 0 ? amount / totalMonths : 0;
    } else {
      monthlyPayment = (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
    }
    
    const totalPayment = monthlyPayment * totalMonths;
    const totalInterest = Math.max(0, totalPayment - amount);

    return {
      monthlyPayment: isFinite(monthlyPayment) ? monthlyPayment : 0,
      totalPayment: isFinite(totalPayment) ? totalPayment : 0,
      totalInterest: isFinite(totalInterest) ? totalInterest : 0,
    };
  }, [amount, interest, term, termType]);

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-6 animate-in fade-in duration-500">
      {/* Inputs */}
      <div className="col-span-12 lg:col-span-5 space-y-4">
        <div className="space-y-3">
          <div>
            <label className="micro-label block mb-1.5 opacity-60">Principal Amount ($)</label>
            <input
              type="number"
              value={amount === 0 ? '' : amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="0"
              className="custom-input h-10"
            />
          </div>

          <div>
            <label className="micro-label block mb-1.5 opacity-60">Interest Rate (%)</label>
            <input
              type="number"
              step="0.1"
              value={interest === 0 ? '' : interest}
              onChange={(e) => setInterest(Number(e.target.value))}
              placeholder="0.0"
              className="custom-input h-10"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="micro-label opacity-60">Loan Term</label>
              <div className="flex bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-lg p-0.5">
                <button
                  onClick={() => setTermType('months')}
                  className={cn(
                    "px-3 py-1 text-[9px] font-bold uppercase rounded transition-all",
                    termType === 'months' ? "bg-[var(--accent-color)] text-[var(--bg-primary)]" : "text-[var(--text-secondary)] opacity-60"
                  )}
                >
                  Months
                </button>
                <button
                  onClick={() => setTermType('years')}
                  className={cn(
                    "px-3 py-1 text-[9px] font-bold uppercase rounded transition-all",
                    termType === 'years' ? "bg-[var(--accent-color)] text-[var(--bg-primary)]" : "text-[var(--text-secondary)] opacity-60"
                  )}
                >
                  Years
                </button>
              </div>
            </div>
            <input
              type="number"
              value={term === 0 ? '' : term}
              onChange={(e) => setTerm(Number(e.target.value))}
              placeholder="0"
              className="custom-input h-10"
            />
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <button
            onClick={() => { setAmount(0); setInterest(0); setTerm(0); setTermType('years'); }}
            className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-[var(--text-primary)] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Reset
          </button>
          
          <button className="flex-1 bg-[var(--accent-color)] text-[var(--bg-primary)] h-10 rounded-lg font-bold text-[11px] transition-all uppercase tracking-wider active:scale-[0.98] shadow-lg shadow-[var(--accent-color)]/20">
            Calculate
          </button>
        </div>
      </div>

      {/* Results */}
      <div className="col-span-12 lg:col-span-7 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 flex flex-col shadow-sm">
        <div className="flex flex-col xl:flex-row gap-4 mb-6">
          <div className="flex-1 p-5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex flex-col items-center justify-center text-center">
            <span className="micro-label mb-2 opacity-50">Monthly Payment</span>
            <span className="text-3xl font-bold text-[var(--text-primary)] tracking-tight">
              ${results.monthlyPayment.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </span>
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
            <div className="p-4 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex flex-col justify-center">
              <span className="micro-label mb-1 opacity-50">Total Interest</span>
              <span className="text-lg font-bold text-[var(--text-primary)]">
                ${results.totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
            <div className="p-4 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] flex flex-col justify-center">
              <span className="micro-label mb-1 opacity-50">Grand Total</span>
              <span className="text-lg font-bold text-[var(--text-primary)]">
                ${results.totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>
        </div>

        {/* Breakdown Visualization */}
        <div className="space-y-3">
          <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-widest text-gray-400">
            <span>Repayment Composition</span>
            <span>Duration: {term} {termType}</span>
          </div>
          
          <div className="h-2 w-full bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-full flex overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(amount / (results.totalPayment || 1)) * 100}%` }}
              className="bg-[var(--accent-color)] h-full"
            />
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(results.totalInterest / (results.totalPayment || 1)) * 100}%` }}
              className="bg-[var(--accent-color)] opacity-20 h-full"
            />
          </div>

          <div className="flex gap-4 pt-1">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)]"></div>
              <span className="text-[9px] font-bold text-[var(--text-secondary)] opacity-60 uppercase">Principal</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-color)] opacity-20"></div>
              <span className="text-[9px] font-bold text-[var(--text-secondary)] opacity-60 uppercase">Interest</span>
            </div>
          </div>
        </div>

        <div className="mt-auto pt-4">
          <p className="text-[9px] font-medium text-gray-400 flex items-center gap-2">
            <Info className="w-3.5 h-3.5" />
            Standard amortized repayment schedule assumes consistent interest.
          </p>
        </div>
      </div>
    </div>
  );
}
