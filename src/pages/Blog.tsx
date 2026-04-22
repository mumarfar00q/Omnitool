import React, { useState } from 'react';
import SEO from '../components/SEO';
import { Calendar, User, ArrowRight, X, Clock, Newspaper, Shield, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  tag: string;
  author: string;
  readTime: string;
  excerpt: string;
  content: React.ReactNode;
  image: string;
}

export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  const posts: BlogPost[] = [
    {
      id: 'student-loan-mastery',
      title: "MASTERING STUDENT LOAN REPAYMENT: A STRATEGIC GUIDE",
      date: "APR 15, 2026",
      tag: "EDUCATION",
      author: "OMNITOOLS RESEARCH",
      readTime: "8 MIN READ",
      excerpt: "Understanding the difference between subsidized and unsubsidized interest can save you thousands over the life of your loan.",
      image: "https://img.freepik.com/premium-photo/earth-globe-with-graduation-hat-plants-growing-up-stack-coins-concept-saving-money-education-student-loan-scholarship-tuition-fees-future_42299-3226.jpg?ga=GA1.1.101956067.1776854751&semt=ais_hybrid&w=740&q=80",
      content: (
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <p className="text-lg font-semibold text-[var(--text-primary)]">Student loans are more than just a monthly bill; they are a long-term financial commitment that requires precise management.</p>
          <p>The key to mastering student debt lies in understanding **Capitalization**. When interest is not paid, it is added to the principal balance, meaning you end up paying interest on your interest. This is a common trap for many graduates during grace periods or deferments.</p>
          <h3 className="text-xl font-bold mt-8">Subsidized vs. Unsubsidized</h3>
          <p>Direct Subsidized Loans are superior because the government pays the interest while you're in school at least half-time. In contrast, Unsubsidized Loans accrue interest from the moment they are disbursed.</p>
          <div className="bg-[var(--accent-color)]/10 p-6 rounded-2xl border border-[var(--accent-color)]/20">
            <h4 className="font-bold text-[var(--accent-color)] mb-2 uppercase tracking-widest text-[xs]">Omnitools Pro Tip</h4>
            <p className="text-[var(--accent-color)] opacity-80">Always target the loan with the highest interest rate first (the Avalanche Method) rather than focusing on the smallest balance. The mathematical benefit is undeniable.</p>
          </div>
          <p>By using our **Student Loan Calculator**, you can visualize exactly how increasing your monthly payment by just $50 can shave years off your repayment timeline.</p>
        </div>
      )
    },
    {
      id: 'auto-finance-logic',
      title: "THE MATHEMATICS OF AUTO FINANCING: BEYOND THE STICKER PRICE",
      date: "APR 10, 2026",
      tag: "AUTO FINANCE",
      author: "DATA ENGINE",
      readTime: "6 MIN READ",
      excerpt: "Auto loans are depreciating assets. Learn why the 20/4/10 rule is the gold standard for vehicle budgeting.",
      image: "https://img.freepik.com/premium-photo/tough-jeep-car-climbs-steep-mountain-paths_1153428-2688.jpg?ga=GA1.1.101956067.1776854751&semt=ais_hybrid&w=740&q=80",
      content: (
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <p className="text-lg font-semibold text-[var(--text-primary)]">A car loses roughly 20% of its value the second you drive it off the lot. Financing this depreciation requires a specific strategy.</p>
          <h3 className="text-xl font-bold mt-8">The 20/4/10 Rule</h3>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>20% Down Payment:</strong> This ensures you don't become "upside-down" on your loan (owing more than the car is worth).</li>
            <li><strong>4 Year Term:</strong> Longer terms like 72 or 84 months might lower payments, but you'll pay significantly more in total interest.</li>
            <li><strong>10% of Income:</strong> Your total vehicle expenses (payment, insurance, fuel) should never exceed 10% of your gross monthly income.</li>
          </ul>
          <p>Using our **Auto Loan Calculator**, you can adjust your down payment to see how it affects your Monthly Payment. Notice that even a small increase in the down payment can move you into a better interest rate tier with many lenders.</p>
          <p>Always negotiate the "Out-the-Door" price first, then discuss financing. Dealerships often use low monthly payments to hide the true cost of high-interest rates or extended terms.</p>
        </div>
      )
    },
    {
      id: 'personal-loan-usage',
      title: "WHEN TO USE PERSONAL LOANS: A CALCULATED RISK ASSESSMENT",
      date: "APR 05, 2026",
      tag: "PERSONAL FINANCE",
      author: "FINANCIAL ANALYTICS",
      readTime: "5 MIN READ",
      excerpt: "Consolidating high-interest credit card debt into a lower-interest personal loan can be a powerful tool—if used correctly.",
      image: "https://picsum.photos/seed/personal-finance/800/450",
      content: (
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <p className="text-lg font-semibold text-[var(--text-primary)]">Personal loans are unsecured debt, meaning they don't require collateral. This makes their interest rates highly dependent on your credit score.</p>
          <h3 className="text-xl font-bold mt-8">Debt Consolidation vs. Lifestyle Spending</h3>
          <p>The most effective use of a personal loan is debt consolidation. If you have credit card balances at 24% APR, a personal loan at 12% APR can cut your interest costs in half and provide a definitive "payoff date."</p>
          <p>However, using a personal loan for weddings, vacations, or general consumption is mathematically risky. You are effectively borrowing against your future earnings for temporary satisfaction.</p>
          <div className="p-6 bg-amber-50 dark:bg-amber-900/10 border-l-4 border-amber-400 rounded-r-2xl">
            <p className="text-sm text-amber-800 dark:text-amber-400 font-medium">Warning: Consolidation only works if you stop using the credit cards you just paid off. Otherwise, you end up with even more total debt.</p>
          </div>
          <p>Our **Personal Loan Calculator** helps you see the "Grand Total" of your loan. This is the amount you pay back including all interest. Always compare this to the benefit of the purchase or consolidation.</p>
        </div>
      )
    },
    {
      id: 'emi-fundamentals',
      title: "EMI BASICS: DECODING THE AMORTIZATION FORMULA",
      date: "MAR 28, 2026",
      tag: "MATHEMATICS",
      author: "CORE ENGINE TEAM",
      readTime: "10 MIN READ",
      excerpt: "Eequated Monthly Installment (EMI) represents a balance between principal and interest. Here is how the math works under the hood.",
      image: "https://picsum.photos/seed/emi-math/800/450",
      content: (
        <div className="space-y-6 text-[var(--text-secondary)] leading-relaxed">
          <p className="text-lg font-semibold text-[var(--text-primary)]">The EMI formula is the backbone of modern banking: [P x R x (1+R)^N]/[(1+R)^N-1].</p>
          <ul className="space-y-4">
            <li><strong>P = Principal:</strong> The actual amount you borrow.</li>
            <li><strong>R = Monthly Interest Rate:</strong> Annual rate divided by 12.</li>
            <li><strong>N = Number of Months:</strong> The duration of the loan.</li>
          </ul>
          <p>In the early months of your loan, most of your EMI goes toward Interest. As time passes, the portion going toward the Principal increases. This is why making extra payments Early in the loan life is so much more effective than making them late.</p>
          <p>OmniTools uses this exact formula with high-precision floating point math to ensure your results match bank-grade calculations. Use the **EMI Calculator** for any generic loan to see your payment schedule immediately.</p>
        </div>
      )
    }
  ];

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Knowledge Base | Financial Strategy & Loan Analysis" 
        description="Deep dives into loan mathematics, debt strategy, and financial planning. Expert guides for student, auto, and personal loans." 
      />
      
      <div className="mb-10 p-8 bg-[var(--box-bg)] rounded-3xl border border-[var(--border-color)] relative overflow-hidden group shadow-xl transition-colors">
        <div className="flex items-center gap-2 mb-2">
          <Newspaper className="w-4 h-4 text-[var(--accent-color)]" />
          <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest opacity-60">Publication</span>
        </div>
        <h2 className="text-3xl font-black mb-2 tracking-tighter text-[var(--accent-color)] uppercase">
          Technical <span className="text-[var(--text-primary)]">Knowledge</span>
        </h2>
        <p className="text-[var(--text-secondary)] font-bold text-xs leading-relaxed uppercase tracking-widest opacity-60">In-depth analysis of financial algorithms and debt management strategies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article 
            key={post.id} 
            onClick={() => setActivePost(post)}
            className="group flex flex-col bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl overflow-hidden hover:border-[var(--text-primary)] transition-all cursor-pointer"
          >
            <div className="aspect-[21/9] overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[9px] font-bold py-0.5 px-2 bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] rounded uppercase">
                  {post.tag}
                </span>
                <span className="text-[9px] font-bold text-[var(--text-secondary)] opacity-40 uppercase tracking-widest">{post.date}</span>
              </div>
              
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2 leading-tight tracking-tight">
                {post.title}
              </h3>
              
              <p className="text-[13px] text-[var(--text-secondary)] mb-6 leading-relaxed line-clamp-2 opacity-60">
                {post.excerpt}
              </p>
              
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[var(--accent-color)] group-hover:translate-x-1 transition-transform">
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <div className="flex items-center gap-1 text-[9px] font-bold text-[var(--text-secondary)] opacity-30 uppercase tracking-widest">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Post Modal */}
      <AnimatePresence>
        {activePost && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActivePost(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[1000] overflow-y-auto pt-10 pb-20 px-4 flex justify-center"
            >
              <motion.div 
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-2xl bg-[var(--bg-primary)] rounded-xl overflow-hidden shadow-2xl relative h-fit border border-[var(--border-color)]"
              >
                <div className="h-48 relative">
                  <img 
                    src={activePost.image} 
                    alt={activePost.title} 
                    className="w-full h-full object-cover" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="space-y-2">
                       <span className="text-[9px] font-bold py-0.5 px-2 bg-white/20 text-white backdrop-blur-md rounded uppercase border border-white/20">
                        {activePost.tag}
                      </span>
                      <h2 className="text-2xl font-bold text-white tracking-tight leading-tight">
                        {activePost.title}
                      </h2>
                    </div>
                  </div>
                  <button 
                    onClick={() => setActivePost(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all border border-white/10"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--border-color)]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--text-primary)] flex items-center justify-center text-[var(--bg-primary)]">
                        <User className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-wider">{activePost.author}</p>
                        <p className="text-[9px] font-medium text-[var(--text-secondary)] opacity-40 uppercase">Research Lead</p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1.5 text-[9px] font-bold text-[var(--text-primary)] uppercase tracking-wider">
                         Verification Active
                      </div>
                      <div className="text-[9px] font-bold text-[var(--text-secondary)] opacity-30 uppercase tracking-widest mt-0.5">{activePost.readTime}</div>
                    </div>
                  </div>

                  <div className="prose prose-sm dark:prose-invert max-w-none prose-headings:tracking-tight prose-headings:font-bold prose-p:leading-relaxed prose-p:text-[var(--text-secondary)] prose-p:opacity-80">
                    {activePost.content}
                  </div>

                  <div className="mt-12 pt-6 border-t border-[var(--border-color)] flex items-center justify-between">
                    <div className="text-[10px] font-bold text-[var(--text-secondary)] opacity-30 uppercase tracking-widest">
                      © 2026 Omnitools
                    </div>
                    <button 
                      onClick={() => setActivePost(null)}
                      className="text-[10px] font-bold text-[var(--accent-color)] uppercase tracking-wider flex items-center gap-2 hover:gap-3 transition-all"
                    >
                      Return <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
