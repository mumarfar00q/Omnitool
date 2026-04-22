import React from 'react';
import SEO from '../components/SEO';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="animate-in fade-in duration-700">
      <SEO title="Privacy Policy" description="How we handle your data with absolute transparency and security." />
      
      <div className="mb-10">
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Privacy <span className="text-[var(--accent-color)]">Protocol</span></h2>
        <p className="text-[var(--text-secondary)] font-medium text-[11px] opacity-40 uppercase tracking-widest">Version 2.0 • Last Updated April 2026</p>
      </div>

      <div className="bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl p-6 mb-10">
        <div className="flex items-start gap-4">
          <div className="w-8 h-8 bg-[var(--accent-color)] rounded-lg flex items-center justify-center text-[var(--bg-primary)] shrink-0 shadow-lg shadow-[var(--accent-color)]/20">
            <Lock className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-[11px] font-bold uppercase tracking-wider mb-2">Zero-Data Architecture</h3>
            <p className="text-[12px] text-[var(--text-secondary)] font-medium leading-relaxed opacity-70">
              Calculations on the Omnitools platform (including EMI, Student, Auto, and Personal Loan Calculators) occur strictly within your browser. No data is transmitted to or stored on our servers.
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-10 max-w-2xl">
        <section>
          <div className="flex items-center gap-2 mb-3 group">
             <div className="h-[1px] w-4 bg-[var(--accent-color)] opacity-40 group-hover:w-8 transition-all"></div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider">1. Local Computational Logic</h4>
          </div>
          <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed font-medium opacity-60">
            Omnitools tools operate on a "local-first" principle. The inputs you provide are processed by your browser's CPU, not our cloud infrastructure. Your profile remains in your machine's temporary memory and is purged immediately upon closing the application tab.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3 group">
            <div className="h-[1px] w-4 bg-[var(--accent-color)] opacity-40 group-hover:w-8 transition-all"></div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider">2. No Third-Party Tracking</h4>
          </div>
          <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed font-medium opacity-60">
            We do not use invasive tracking pixels or marketing cookies. While we use standard server logs to monitor site health, this data is anonymized and carries no identifiable financial information (PII).
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3 group">
            <div className="h-[1px] w-4 bg-[var(--accent-color)] opacity-40 group-hover:w-8 transition-all"></div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider">3. Data Collection</h4>
          </div>
          <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed font-medium opacity-60">
            The only point of data collection occurs when you voluntarily use our Contact Terminal. We receive your provided email and message to facilitate a response. This data is stored securely and is never sold.
          </p>
        </section>

        <section>
          <div className="flex items-center gap-2 mb-3 group">
             <div className="h-[1px] w-4 bg-[var(--accent-color)] opacity-40 group-hover:w-8 transition-all"></div>
            <h4 className="text-[10px] font-bold uppercase tracking-wider">4. Monetization</h4>
          </div>
          <p className="text-[13px] text-[var(--text-secondary)] leading-relaxed font-medium opacity-60">
             Omnitools may display contextual advertisements to keep our engines free. These are served based on general content relevance rather than your private calculation inputs.
          </p>
        </section>
      </div>
    </div>
  );
}
