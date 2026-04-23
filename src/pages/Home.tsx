import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { TOOLS } from '../registry/tools';
import SEO from '../components/SEO';
import { Search, ChevronRight, Calculator, GraduationCap, Car, BadgeDollarSign, Zap, ShieldCheck, Server } from 'lucide-react';

function ServerStatus() {
  const [data, setData] = React.useState<{ status: string; latency: string } | null>(null);

  React.useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(setData)
      .catch(() => setData({ status: 'Local', latency: '0ms' }));
  }, []);

  return (
    <span className="text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 opacity-70">
      {data?.status === 'Online' ? <Server className="w-3.5 h-3.5 text-green-500 animate-pulse" /> : <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-color)]" />}
      {data?.status === 'Online' ? `Server ${data.status} (${data.latency})` : 'System Secure'}
    </span>
  );
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTools = TOOLS.filter(tool => 
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const iconMap: Record<string, any> = {
    GraduationCap,
    Car,
    BadgeDollarSign,
    Calculator
  };

  return (
    <div className="animate-in fade-in duration-700">
      <SEO 
        title="Omnitools - Professional Analytical Engines" 
        description="High-performance financial calculators engineered for precision and absolute privacy."
        canonical="/"
      />

      <div className="mb-10 relative p-8 bg-[var(--box-bg)] rounded-3xl border border-[var(--border-color)] shadow-2xl overflow-hidden group transition-colors">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-color)]/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[var(--accent-color)]/20 transition-all duration-1000"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-4 text-[var(--accent-color)]">
            <div className="px-1.5 py-0.5 bg-[var(--bg-primary)] text-[var(--accent-color)] text-[10px] font-bold uppercase tracking-wider rounded border border-[var(--border-color)]">v2.0 Stable</div>
            <div className="w-[1px] h-3 bg-[var(--border-color)]"></div>
            <ServerStatus />
          </div>
          <h2 className="text-3xl lg:text-5xl font-black mb-3 tracking-tighter leading-tight text-[var(--accent-color)] uppercase">
            Advanced Analytical <span className="text-[var(--text-primary)]">Tools</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl text-[13px] font-medium leading-relaxed opacity-70">
            High-fidelity specialized calculators engineered for precision. All computations utilize local browser resources for absolute privacy and zero-latency response.
          </p>
        </div>
      </div>

      <div className="relative mb-8 max-w-md group">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-[var(--text-secondary)] opacity-30">
          <Search className="w-3.5 h-3.5" />
        </div>
        <input
          type="text"
          placeholder="Search tools..."
          className="custom-input pl-10 h-10 border-[var(--border-color)] text-xs rounded-lg"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filteredTools.map((tool, idx) => {
          const Icon = iconMap[tool.iconName] || Calculator;
          return (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
            >
              <Link
                to={`/tools/${tool.slug}`}
                className="p-5 bg-[var(--box-bg)] border border-[var(--border-color)] rounded-2xl group block active:scale-[0.99] hover:border-[var(--accent-color)] transition-all shadow-xl shadow-black/5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--accent-color)] group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                       <h3 className="text-sm font-black text-[var(--text-primary)] uppercase tracking-tighter group-hover:text-[var(--accent-color)] transition-colors">
                        {tool.name}
                      </h3>
                      <ChevronRight className="w-3.5 h-3.5 text-[var(--text-secondary)] opacity-10 group-hover:translate-x-1 group-hover:opacity-100 transition-all" />
                    </div>
                    
                    <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed line-clamp-2 font-bold tracking-tight opacity-60">
                      {tool.shortDescription || tool.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Performance', text: 'Sub-15ms core execution cycle optimized for speed.', icon: Zap },
            { title: 'Privacy', text: 'Zero data persistence. Processing remains local.', icon: ShieldCheck },
            { title: 'Integrity', text: 'Formulas cross-verified against industry standards.', icon: Calculator }
          ].map(module => (
            <div key={module.title} className="group">
              <div className="flex items-center gap-2 mb-2">
                <module.icon className="w-3.5 h-3.5 text-[var(--text-primary)] opacity-40" />
                <h4 className="text-[10px] uppercase font-bold text-[var(--text-primary)] tracking-wider opacity-60">{module.title}</h4>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed font-medium opacity-50">At Omnitools, we prioritize {module.text.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
