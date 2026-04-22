import React, { Suspense, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import { TOOLS, CATEGORIES } from '../registry/tools';
import { Calculator, ChevronRight, Share2, Printer, Globe, Zap, ShieldCheck, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  // Initialize expanded categories
  useEffect(() => {
    const initial: Record<string, boolean> = {};
    CATEGORIES.forEach((cat, index) => {
      // By default, open the first one or if there's only one
      if (CATEGORIES.length === 1 || index === 0) {
        initial[cat.id] = true;
      } else {
        initial[cat.id] = false;
      }
    });
    setExpandedCategories(initial);
  }, []);

  const toggleCategory = (id: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="flex flex-col h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] font-sans overflow-hidden transition-colors">
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden no-print">
        {/* Sidebar */}
        <aside className="w-64 bg-[var(--bg-secondary)] border-r border-[var(--border-color)] p-4 flex flex-col gap-4 hidden lg:flex shrink-0 transition-colors">
          <div className="flex-1 overflow-y-auto space-y-1 pr-2 scrollbar-thin">
            {CATEGORIES.map(category => {
              const isExpanded = expandedCategories[category.id];
              return (
                <section key={category.id} className="space-y-0.5">
                  <button 
                    onClick={() => toggleCategory(category.id)}
                    className="w-full flex items-center justify-between px-3 py-2 hover:bg-[var(--text-primary)]/5 rounded-lg transition-all group"
                  >
                    <h3 className={cn(
                      "text-[10px] uppercase tracking-[0.1em] font-bold transition-colors",
                      isExpanded ? "text-[var(--text-primary)]" : "text-gray-400 dark:text-gray-600"
                    )}>
                      {category.name}
                    </h3>
                    <ChevronDown className={cn(
                      "w-3 h-3 text-gray-400 transition-transform duration-300",
                      isExpanded ? "rotate-180 text-[var(--text-primary)]" : ""
                    )} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-0.5 overflow-hidden flex flex-col pl-1"
                      >
                        {category.toolIds.map(id => {
                          const tool = TOOLS.find(t => t.id === id);
                          if (!tool) return null;
                          const isActive = location.pathname === `/tools/${tool.slug}`;
                          return (
                            <Link
                              key={id}
                              to={`/tools/${tool.slug}`}
                              className={cn(
                                "sidebar-link",
                                isActive ? "sidebar-link-active" : ""
                              )}
                            >
                              {tool.name}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </section>
              );
            })}
          </div>
          
          <div className="p-3 bg-[var(--bg-primary)] border border-[var(--border-color)] rounded-xl">
            <p className="text-[9px] text-[var(--text-secondary)] font-bold uppercase tracking-widest mb-1 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-green-500" /> Secure
            </p>
            <p className="text-[10px] text-[var(--text-secondary)] leading-relaxed opacity-60 italic">
              Verified mathematical modules.
            </p>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-[var(--bg-primary)] overflow-y-auto relative scroll-smooth p-4 md:p-8 transition-colors">
          <Suspense fallback={
            <div className="flex items-center justify-center p-12">
              <div className="w-8 h-8 border-2 border-[var(--text-primary)]/10 border-t-[var(--text-primary)] rounded-full animate-spin" />
            </div>
          }>
            <div className="max-w-3xl mx-auto space-y-8 pb-12 print:max-w-none print:m-0">
              {/* Top Ad Slot */}
              <div className="ad-placeholder h-20 mb-2">
                Sponsorship Slot
              </div>

              {children}

              {/* Bottom Ad Slot */}
              <div className="ad-placeholder h-24 mt-8">
                Sponsorship Slot
              </div>
            </div>
          </Suspense>
        </main>

        {/* Right Aside */}
        <aside className="w-60 border-l border-[var(--border-color)] p-6 shrink-0 hidden xl:flex flex-col gap-6 bg-[var(--bg-secondary)] overflow-y-auto transition-colors">
          <section>
            <h4 className="text-[9px] uppercase font-bold text-gray-400 dark:text-gray-600 mb-4 tracking-[0.1em]">Promotion</h4>
            <div className="ad-placeholder h-60">
              Ad Slot
            </div>
          </section>

          <section>
            <h4 className="text-[9px] uppercase font-bold text-gray-400 dark:text-gray-600 mb-4 tracking-[0.1em]">System</h4>
            <div className="space-y-2">
              {[
                { label: 'Calculators', status: 'Online', color: 'bg-emerald-500' },
                { label: 'SSL', status: 'Active', color: 'bg-indigo-500' },
                { label: 'Latency', status: '8ms', color: 'bg-violet-500' }
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between px-3 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)]">
                  <span className="text-[9px] font-bold text-gray-500 uppercase">{item.label}</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-bold text-[var(--text-primary)]">{item.status}</span>
                    <div className={cn("w-1.5 h-1.5 rounded-full", item.color)}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </div>

      {/* Mini Footer */}
      <footer className="no-print h-10 bg-[var(--bg-secondary)] border-t border-[var(--border-color)] flex items-center justify-between px-6 shrink-0 text-[9px] text-gray-400 dark:text-gray-600 uppercase font-bold tracking-[0.1em] transition-colors">
        <div>© 2026 OMNITOOLS</div>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="hover:text-[var(--text-primary)] transition-colors">Privacy</Link>
          <Link to="/contact" className="hover:text-[var(--text-primary)] transition-colors">Support</Link>
        </div>
      </footer>
    </div>
  );
}
