import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '../lib/utils';

const FAQS = [
  {
    question: "How accurate are the loan calculations?",
    answer: "OmniTools utilizes the standard amortization formula used by major financial institutions globally. Our engines process calculations using high-precision math to ensure accuracy down to the cent. However, final bank results may vary slightly due to specific local processing fees or subtle daily interest compounding methods."
  },
  {
    question: "Is my personal financial data stored on your servers?",
    answer: "No. At OmniTools, we prioritize 'Edge Privacy.' All calculations are performed locally in your browser session. Your loan amounts, interest rates, and personal profiles are never transmitted to our servers or stored in any database. We process math, not identity."
  },
  {
    question: "What is the difference between EMI and Total Interest?",
    answer: "The EMI (Equated Monthly Installment) is the fixed amount you pay every month to repay both the principal and the interest. Total Interest is the cumulative cost of borrowing—the 'extra' money you pay back to the lender over the entire life of the loan."
  },
  {
    question: "Why do different loan types have different term lengths?",
    answer: "Auto loans are tied to a depreciating asset, so lenders typically limit terms to 4-7 years. Personal loans are unsecured and offer higher flexibility but often higher interest rates. Student loans usually offer the longest durations due to their nature as an investment in future earnings."
  },
  {
    question: "Can I use these tools for professional financial planning?",
    answer: "Yes, our tools are designed to provide professional-grade baselines. They are used daily by real estate agents, finance students, and debt advisors to verify calculations and provide immediate, readable breakdowns for their clients."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="animate-in fade-in duration-700">
      <SEO title="Support" description="Technical and utility questions about our precision calculator suite." />
      
      <div className="mb-10 p-8 bg-[var(--box-bg)] rounded-3xl border border-[var(--border-color)] relative overflow-hidden group shadow-xl transition-colors">
        <h2 className="text-3xl font-black mb-2 tracking-tighter text-[var(--accent-color)] uppercase">
          Technical <span className="text-[var(--text-primary)]">Support</span>
        </h2>
        <p className="text-[var(--text-secondary)] font-bold text-xs leading-relaxed uppercase tracking-widest opacity-60">Common inquiries regarding our mathematical engines and privacy protocols.</p>
      </div>

      <div className="space-y-3 max-w-2xl">
        {FAQS.map((faq, idx) => (
          <div 
            key={idx} 
            className="border border-[var(--border-color)] rounded-lg overflow-hidden bg-[var(--bg-secondary)]"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex items-center justify-between text-left p-4 group"
            >
              <span className={cn(
                "text-sm font-bold transition-all",
                openIndex === idx ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]"
              )}>
                {faq.question}
              </span>
              <div className={cn(
                "transition-all",
                openIndex === idx ? "rotate-180 text-[var(--text-primary)]" : "text-[var(--text-secondary)] opacity-30"
              )}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            {openIndex === idx && (
              <div className="p-4 pt-0 border-t border-[var(--border-color)] animate-in slide-in-from-top-1 fade-in duration-300 bg-[var(--bg-primary)]">
                <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed font-medium pt-3 opacity-70">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 p-6 bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl flex flex-col sm:flex-row items-center gap-6 shadow-sm group">
        <div className="w-10 h-10 rounded-lg bg-[var(--accent-color)] flex items-center justify-center text-[var(--bg-primary)] shadow-lg shadow-[var(--accent-color)]/20">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-[var(--text-primary)] uppercase tracking-wider mb-1 group-hover:text-[var(--accent-color)] transition-colors">Still have questions?</h4>
          <p className="text-[11px] text-[var(--text-secondary)] font-medium opacity-50">Our engineering team is ready to help with complex calculations or tool requests.</p>
        </div>
        <Link to="/contact" className="sm:ml-auto bg-[var(--accent-color)] text-[var(--bg-primary)] px-5 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-wider active:scale-95 transition-all shadow-lg shadow-[var(--accent-color)]/20">
          Contact Support
        </Link>
      </div>
    </div>
  );
}
