import { useState } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

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
    <header className="sticky top-0 z-50 h-[68px] bg-[rgba(28,37,48,0.92)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.08)] shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
      <div className="max-w-[1200px] mx-auto px-[24px] h-full flex items-center justify-between">

        {/* Wordmark */}
        <a
          href="/"
          className="flex flex-col leading-none group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530] rounded-[4px]"
          aria-label="Marvel Machining — Home"
        >
          <span className="font-['Barlow_Condensed'] font-[800] text-[22px] tracking-[-0.03em] text-[#F0F2F4]/90 uppercase leading-[1] group-hover:text-[#FFFFFF] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
            Marvel
            <span className="text-[#C8102E] ml-[3px]">Machining</span>
          </span>
          <span className="font-['JetBrains_Mono'] text-[9px] font-normal text-[#6B7280] tracking-[0.18em] uppercase mt-[2px]">
            Superhero Speed. Precision You Can Trust.
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-[4px]" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-['Inter'] font-medium text-[14px] text-[#F0F2F4]/75 px-[14px] py-[8px] rounded-[6px] hover:text-[#F0F2F4]/95 hover:bg-[rgba(255,255,255,0.06)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right: Phone + CTA */}
        <div className="hidden md:flex items-center gap-[16px]">
          <a
            href="tel:6303500075"
            className="flex items-center gap-[6px] font-['Inter'] font-medium text-[13px] text-[#F0F2F4]/70 hover:text-[#F0F2F4]/95 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-[4px] px-[4px]"
            aria-label="Call Marvel Machining at 630-350-0075"
          >
            <Phone className="w-4 h-4 text-[#C8102E]" strokeWidth={1.5} />
            <span className="font-['JetBrains_Mono'] text-[12px] tracking-[0.04em]">630 350-0075</span>
          </a>

          <a
            href="#quote"
            className="bg-[#C8102E] text-[#FFFFFF] px-[22px] py-[10px] rounded-[6px] font-['Inter'] font-semibold text-[14px] hover:brightness-110 hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530] whitespace-nowrap"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-[40px] h-[40px] rounded-[6px] text-[#F0F2F4]/80 hover:text-[#F0F2F4] hover:bg-[rgba(255,255,255,0.08)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
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

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden bg-[rgba(22,30,40,0.98)] backdrop-blur-[12px] border-t border-[rgba(255,255,255,0.08)] overflow-hidden transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-[24px] py-[16px] flex flex-col gap-[4px]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-['Inter'] font-medium text-[15px] text-[#F0F2F4]/80 px-[12px] py-[12px] rounded-[6px] hover:text-[#F0F2F4] hover:bg-[rgba(255,255,255,0.07)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] border-b border-[rgba(255,255,255,0.05)] last:border-b-0"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-[12px] pt-[12px] border-t border-[rgba(255,255,255,0.08)] flex flex-col gap-[10px]">
            <a
              href="tel:6303500075"
              className="flex items-center gap-[8px] font-['Inter'] text-[14px] text-[#F0F2F4]/70 hover:text-[#F0F2F4]/95 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] px-[12px] py-[8px] rounded-[6px] hover:bg-[rgba(255,255,255,0.05)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]"
              aria-label="Call Marvel Machining"
            >
              <Phone className="w-4 h-4 text-[#C8102E]" strokeWidth={1.5} />
              <span className="font-['JetBrains_Mono'] text-[13px] tracking-[0.04em]">630 350-0075</span>
            </a>

            <a
              href="#quote"
              onClick={() => setMobileOpen(false)}
              className="bg-[#C8102E] text-[#FFFFFF] px-[22px] py-[12px] rounded-[6px] font-['Inter'] font-semibold text-[15px] text-center hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#161E28]"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavigationBar;