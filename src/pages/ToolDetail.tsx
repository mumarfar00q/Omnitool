import React, { Suspense } from 'react';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { TOOLS } from '../registry/tools';
import SEO from '../components/SEO';
import { ChevronRight, Share2, Printer, ArrowLeft, Globe } from 'lucide-react';

export default function ToolDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const tool = TOOLS.find(t => t.slug === slug);

  if (!tool) {
    return <Navigate to="/" replace />;
  }

  const ToolComponent = tool.component;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `OmniTools - ${tool.name}`,
        text: tool.description,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handlePrint = () => {
    // Small timeout to ensure everything is rendered, though usually not needed for window.print()
    // In some browsers/environments, window.print() might be blocked in iframes
    try {
      window.focus();
      window.print();
    } catch (e) {
      console.error("Print failed:", e);
      // Fallback for some restricted environments
      window.parent.postMessage('print', '*');
      alert("Opening print dialog... If it doesn't appear, please use the browser's print command (Ctrl+P).");
    }
  };

  const words = tool.name.split(' ');
  const firstPart = words.slice(0, Math.ceil(words.length / 2)).join(' ');
  const secondPart = words.slice(Math.ceil(words.length / 2)).join(' ');

  return (
    <div className="animate-in fade-in slide-in-from-top-4 duration-700">
      <SEO title={tool.name} description={tool.description} />
      
      {/* Print-only Header */}
      <div className="print-only hidden print:block mb-10 border-b-2 border-slate-900 pb-6">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Omni<span className="text-[var(--accent-color)]">tools</span></h1>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">THE GLOBAL CALCULATION STANDARD</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-mono font-bold leading-none">{new Date().toLocaleDateString()} • {new Date().toLocaleTimeString()}</p>
            <p className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-tighter">Certified Calculation Output</p>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-extrabold uppercase tracking-tight">{tool.name}</h2>
          <p className="text-sm font-medium text-slate-600 italic mt-1">{tool.description}</p>
        </div>
      </div>

      {/* Breadcrumbs & Back Action */}
      <div className="flex items-center justify-between mb-2">
        <button 
          onClick={() => navigate(-1)}
          className="no-print flex items-center gap-1.5 text-[11px] font-bold text-gray-400 dark:text-slate-500 hover:text-[var(--accent-color)] transition-colors uppercase tracking-widest group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        
        <nav className="no-print flex gap-2 text-[11px] text-gray-400 dark:text-slate-500 uppercase tracking-wide">
          <Link to="/" className="hover:text-[var(--accent-color)] transition-colors">Explorer</Link>
          <span>/</span>
          <span className="text-[var(--accent-color)] font-bold">{tool.name}</span>
        </nav>
      </div>

      <div className="mb-8 no-print">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              {firstPart} <span className="text-[var(--accent-color)]">{secondPart}</span>
            </h2>
            <p className="text-[var(--text-secondary)] mt-2 font-medium text-sm leading-relaxed max-w-xl">{tool.description}</p>
          </div>

          <div className="flex gap-2">
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-secondary)] text-[12px] font-bold hover:border-[var(--text-primary)] hover:text-[var(--text-primary)] transition-all uppercase tracking-wider"
            >
              <Printer className="w-4 h-4" /> Print
            </button>
            <button 
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-color)] text-[var(--bg-primary)] text-[12px] font-bold transition-all uppercase tracking-wider shadow-lg shadow-[var(--accent-color)]/20"
            >
              <Share2 className="w-4 h-4" /> Share
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[var(--card-bg)] rounded-2xl border border-[var(--border-color)] p-4 sm:p-6 mb-10 transition-colors shadow-sm overflow-hidden min-h-[400px]">
        <Suspense fallback={
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-[var(--text-primary)]/10 border-t-[var(--text-primary)] rounded-full animate-spin" />
          </div>
        }>
          <div className="max-w-xl mx-auto">
            <ToolComponent />
          </div>
        </Suspense>
      </div>

      {/* Print-only Footer */}
      <div className="print-only hidden print:block mt-12 pt-8 border-t border-slate-200">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">SOURCE VERIFICATION</p>
            <div className="flex items-center gap-2 text-indigo-600">
              <Globe className="w-4 h-4" />
              <span className="font-mono text-xs font-bold">{window.location.origin.replace(/^https?:\/\//, '')}</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">INTEGRITY LOCK</p>
            <p className="text-[9px] font-mono text-slate-300">SECURE CALCULATION • ZERO LOG POLICY • OPEN FORMULAS</p>
          </div>
        </div>
      </div>

      <div className="no-print mt-16 pt-16 border-t border-[var(--border-color)]">
        <div className="flex items-center gap-3 mb-12">
          <h4 className="text-[11px] font-black text-[var(--accent-color)] uppercase tracking-[0.3em]">Similar Intelligence Modules</h4>
          <div className="h-[1px] flex-1 bg-[var(--border-color)]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TOOLS.filter(t => t.id !== tool.id).slice(0, 3).map((t) => (
            <Link 
              key={t.id} 
              to={`/tools/${t.slug}`} 
              className="tool-card group active:scale-95 flex flex-col justify-between h-full hover:border-[var(--accent-color)] transition-all bg-[var(--card-bg)] rounded-[2rem] p-8 border border-[var(--border-color)]"
            >
              <div>
                <h5 className="text-[13px] font-black group-hover:text-[var(--accent-color)] transition-colors uppercase tracking-[0.15em] mb-3">{t.name}</h5>
                <p className="text-[11px] text-[var(--text-secondary)] leading-relaxed line-clamp-2 font-medium opacity-80">Next-generation analytical engine powered by OmniTools core architecture.</p>
              </div>
              <ChevronRight className="w-5 h-5 text-[var(--text-secondary)]/30 group-hover:text-[var(--accent-color)] group-hover:translate-x-1 self-end mt-6 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
