import React from 'react';
import SEO from '../components/SEO';
import { Mail, MessageCircle, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <div className="animate-in fade-in duration-700">
      <SEO title="Contact" description="Get in touch with our precision engineering team." />
      
      <div className="mb-10 p-8 bg-[var(--box-bg)] rounded-3xl border border-[var(--border-color)] relative overflow-hidden group shadow-xl transition-colors">
        <h2 className="text-3xl font-black mb-2 tracking-tighter text-[var(--accent-color)] uppercase">
          Support <span className="text-[var(--text-primary)]">Terminal</span>
        </h2>
        <p className="text-[var(--text-secondary)] font-bold text-xs leading-relaxed uppercase tracking-widest opacity-60">Submit requests for new functional modules or report discrepancies.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-primary)] opacity-40 mb-4">Direct Channels</h3>
            
            <div className="flex gap-4 p-5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] group hover:border-[var(--accent-color)] transition-all">
              <div className="w-10 h-10 bg-[var(--accent-color)] rounded-lg flex items-center justify-center text-[var(--bg-primary)] shrink-0 shadow-lg shadow-[var(--accent-color)]/20">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-[9px] font-bold text-[var(--text-secondary)] uppercase tracking-wider opacity-60 mb-1">Support Email</h4>
                <p className="text-sm font-bold text-[var(--text-primary)] tracking-tight">mumarfarooq.at@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="p-6 border border-[var(--border-color)] rounded-xl bg-[var(--bg-secondary)] shadow-sm">
            <h4 className="text-[10px] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-6 opacity-40">System Status</h4>
            <div className="space-y-4">
              {[
                { label: 'Avg. Response', value: '87m', color: 'text-[var(--text-primary)]' },
                { label: 'Uptime', value: '99.99%', color: 'text-[var(--text-primary)]' }
              ].map(stat => (
                <div key={stat.label} className="flex justify-between items-center text-[12px] font-bold">
                  <span className="text-[var(--text-secondary)] uppercase tracking-wider opacity-50">{stat.label}</span>
                  <span className={stat.color}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[var(--bg-secondary)] p-6 sm:p-8 rounded-xl border border-[var(--border-color)] shadow-sm">
          <form 
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get('email');
              const message = formData.get('message');
              window.location.href = `mailto:mumarfarooq.at@gmail.com?subject=Omnitools Support Request&body=From: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
            }}
          >
            <div>
              <label className="text-[10px] uppercase font-bold text-[var(--text-secondary)] opacity-50 block mb-1.5 pl-1">Your Email</label>
              <input name="email" type="email" required className="custom-input h-10 rounded-lg text-sm" placeholder="name@domain.com" />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-[var(--text-secondary)] opacity-50 block mb-1.5 pl-1">Message</label>
              <textarea name="message" rows={4} required className="custom-input min-h-[120px] py-3 rounded-lg text-sm resize-none" placeholder="Describe your request..."></textarea>
            </div>
            <button type="submit" className="w-full bg-[var(--accent-color)] text-[var(--bg-primary)] font-bold py-3 rounded-lg uppercase tracking-wider text-[11px] flex items-center justify-center gap-3 active:scale-95 transition-all shadow-lg shadow-[var(--accent-color)]/20">
              <Send className="w-4 h-4" /> Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
