import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, Moon, Sun, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from './ThemeContext';

export default function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tools', href: '/tools' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="h-14 bg-[#0f172a] border-b border-white/5 px-6 shrink-0 relative z-[100] transition-colors shadow-sm flex items-center justify-between sticky top-0">
      <div className="flex items-center gap-2">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="w-8 h-8 bg-[var(--accent-color)] rounded-lg flex items-center justify-center text-[var(--bg-primary)] group-hover:scale-105 transition-all duration-300 shadow-md shadow-[var(--accent-color)]/20">
            <Calculator className="w-4 h-4" />
          </div>
          <h1 className="text-xl font-black tracking-tight text-[var(--accent-color)]">
            Omni<span className="text-white">tools</span>
          </h1>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <nav className="hidden md:flex items-center gap-6 text-[12px] font-bold text-white/40 uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "transition-all hover:text-white relative py-1",
                location.pathname === link.href ? "text-white" : ""
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="h-3 w-[1px] bg-[var(--border-color)] mx-3 hidden md:block"></div>

        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-1.5 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-all active:scale-90"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border-color)] hover:text-[var(--text-primary)] transition-all active:scale-90"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 right-0 bg-[var(--bg-primary)] border-b border-[var(--border-color)] p-4 shadow-xl md:hidden flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "px-4 py-3 rounded-lg text-[13px] font-medium transition-all",
                location.pathname === link.href 
                  ? "bg-[var(--text-primary)] text-[var(--bg-primary)]" 
                  : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
