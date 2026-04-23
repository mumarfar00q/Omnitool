import React from 'react';
import { Link } from 'react-router-dom';
import { TOOLS, CATEGORIES } from '../registry/tools';
import SEO from '../components/SEO';
import { GraduationCap, Car, BadgeDollarSign, Calculator, ChevronRight } from 'lucide-react';

export default function ToolsList() {
  const iconMap: Record<string, any> = { GraduationCap, Car, BadgeDollarSign, Calculator };

  return (
    <div className="animate-in fade-in duration-500">
      <SEO 
        title="Financial Tools | Precise Analytical Calculators" 
        description="Comprehensive directory of our financial and utility calculators including Student, Auto, and Personal loan engines." 
        canonical="/tools"
      />
      
  <div className="mb-10 p-8 bg-[var(--box-bg)] rounded-3xl border border-[var(--border-color)] relative overflow-hidden group shadow-xl transition-colors">
    <h2 className="text-3xl font-black mb-2 tracking-tighter text-[var(--accent-color)] uppercase">
      Tool <span className="text-[var(--text-primary)]">Directory</span>
    </h2>
    <p className="text-[var(--text-secondary)] font-bold text-xs leading-relaxed uppercase tracking-widest opacity-60">Efficient calculation engines categorized for quick access.</p>
  </div>

      <div className="space-y-12">
        {CATEGORIES.map((category) => (
        <section key={category.id}>
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.1em] opacity-50">
              {category.name}
            </h3>
            <div className="h-[1px] flex-1 bg-[var(--border-color)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.toolIds.map((id) => {
              const tool = TOOLS.find(t => t.id === id);
              if (!tool) return null;
              const Icon = iconMap[tool.iconName] || Calculator;
              return (
                <Link 
                  key={tool.id} 
                  to={`/tools/${tool.slug}`}
                  className="p-5 bg-[var(--box-bg)] border border-[var(--border-color)] rounded-2xl group block active:scale-[0.99] hover:border-[var(--accent-color)] transition-all shadow-xl shadow-black/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)] group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-black text-[var(--text-primary)] uppercase tracking-tighter truncate group-hover:text-[var(--accent-color)] transition-colors">
                          {tool.name}
                        </h4>
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--text-secondary)] opacity-10 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                      </div>
                      <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed line-clamp-1 font-bold tracking-tight opacity-60">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        ))}
      </div>
    </div>
  );
}
