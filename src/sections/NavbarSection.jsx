import { useState } from 'react';
import { Phone, Mail, Menu, X, ChevronRight } from 'lucide-react';

function NavigationBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'CNC Machining', href: '#cnc' },
    { label: 'Industries', href: '#industries' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="bg-[#C8102E] w-full hidden md:block">
        <div className="max-w-[1200px] mx-auto px-[24px] flex items-center justify-end gap-[24px] py-[6px]">
          <a
            href="tel:6303500075"
            className="flex items-center gap-[6px] text-[#FFFFFF] text-[13px] font-['Inter'] font-medium hover:text-[#F0F2F5]/90 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            <Phone className="w-[14px] h-[14px]" strokeWidth={1.5} />
            630 350-0075
          </a>
          <span className="w-[1px] h-[14px] bg-[#FFFFFF]/30" />
          <a
            href="mailto:orders@marvel-speed.com"
            className="flex items-center gap-[6px] text-[#FFFFFF] text-[13px] font-['Inter'] font-medium hover:text-[#F0F2F5]/90 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            <Mail className="w-[14px] h-[14px]" strokeWidth={1.5} />
            orders@marvel-speed.com
          </a>
        </div>
      </div>

      {/* Main navbar */}
      <nav
        className="w-full h-[68px] bg-[rgba(28,35,49,0.94)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.08)] flex items-center"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-[1200px] mx-auto px-[24px] w-full flex items-center justify-between">

          {/* Wordmark */}
          <a
            href="/"
            className="flex flex-col leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-[2px]"
            aria-label="Marvel Machining — home"
          >
            <span className="font-['Barlow_Condensed'] font-[800] text-[22px] tracking-[-0.03em] text-[#F0F2F5]/90 uppercase leading-[1]">
              Marvel
            </span>
            <span className="font-['Barlow_Condensed'] font-[800] text-[22px] tracking-[-0.03em] text-[#C8102E] uppercase leading-[1]">
              Machining
            </span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-[4px]" role="list">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-['Inter'] font-medium text-[14px] text-[#F0F2F5]/80 px-[14px] py-[8px] rounded-[4px] hover:text-[#F0F2F5]/90 hover:bg-[rgba(255,255,255,0.06)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-[12px]">
            <a
              href="tel:6303500075"
              className="flex items-center gap-[6px] font-['Inter'] font-medium text-[13px] text-[#F0F2F5]/70 hover:text-[#F0F2F5]/90 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-[2px] md:hidden lg:flex"
            >
              <Phone className="w-[15px] h-[15px]" strokeWidth={1.5} />
              630 350-0075
            </a>
            <a
              href="#quote"
              className="bg-[#C8102E] text-[#FFFFFF] px-[22px] py-[10px] rounded-[4px] font-semibold font-['Inter'] text-[14px] flex items-center gap-[6px] hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87722] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2331]"
            >
              Request a Quote
              <ChevronRight className="w-[15px] h-[15px]" strokeWidth={2} />
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-[44px] h-[44px] rounded-[4px] text-[#F0F2F5]/80 hover:text-[#F0F2F5]/90 hover:bg-[rgba(255,255,255,0.06)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" strokeWidth={1.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div
        id="mobile-menu"
        className={`md:hidden w-full bg-[rgba(28,35,49,0.98)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.08)] overflow-hidden transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="max-w-[1200px] mx-auto px-[24px] py-[16px] flex flex-col gap-[4px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-['Inter'] font-medium text-[15px] text-[#F0F2F5]/80 px-[14px] py-[12px] rounded-[4px] hover:text-[#F0F2F5]/90 hover:bg-[rgba(255,255,255,0.06)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] flex items-center justify-between"
            >
              {link.label}
              <ChevronRight className="w-[15px] h-[15px] text-[#6B7280]" strokeWidth={1.5} />
            </a>
          ))}

          <div className="mt-[8px] pt-[16px] border-t border-[rgba(255,255,255,0.08)] flex flex-col gap-[10px]">
            <a
              href="tel:6303500075"
              className="flex items-center gap-[8px] font-['Inter'] font-medium text-[14px] text-[#F0F2F5]/70 px-[14px] py-[10px] rounded-[4px] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
            >
              <Phone className="w-[16px] h-[16px] text-[#C8102E]" strokeWidth={1.5} />
              630 350-0075
            </a>
            <a
              href="mailto:orders@marvel-speed.com"
              className="flex items-center gap-[8px] font-['Inter'] font-medium text-[14px] text-[#F0F2F5]/70 px-[14px] py-[10px] rounded-[4px] hover:bg-[rgba(255,255,255,0.06)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
            >
              <Mail className="w-[16px] h-[16px] text-[#C8102E]" strokeWidth={1.5} />
              orders@marvel-speed.com
            </a>
            <a
              href="#quote"
              onClick={() => setMobileOpen(false)}
              className="bg-[#C8102E] text-[#FFFFFF] px-[22px] py-[12px] rounded-[4px] font-semibold font-['Inter'] text-[15px] flex items-center justify-center gap-[6px] hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87722] mt-[4px]"
            >
              Request a Quote
              <ChevronRight className="w-[16px] h-[16px]" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;