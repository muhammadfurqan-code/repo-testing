import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

function NavigationBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Engineering & DFM', href: 'https://www.matrixplastic.com/index.php/services/engineering-dfm' },
    { label: 'Moldmaking', href: 'https://www.matrixplastic.com/index.php/services/moldmaking' },
    { label: 'Injection Molding', href: 'https://www.matrixplastic.com/index.php/services/injection-molding-solving-problems-reducing-cycle-time-and-improving-yield' },
    { label: 'Quality Inspection', href: 'https://www.matrixplastic.com/index.php/services/inspection' },
    { label: 'Custom Manufacturing', href: 'https://www.matrixplastic.com/index.php/services/custom-manufacturing' },
    { label: 'About', href: 'https://www.matrixplastic.com/index.php/about-matrix' },
  ];

  return (
    <nav
      className="sticky top-0 z-50 w-full h-auto min-h-[68px] bg-[rgba(15,35,64,0.92)] backdrop-blur-[12px] border-b border-[rgba(208,217,232,0.15)] shadow-[0_4px_16px_rgba(0,0,0,0.10)]"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-[1200px] mx-auto px-[24px] h-[68px] flex items-center justify-between gap-[16px]">

        {/* Logo */}
        <a
          href="https://www.matrixplastic.com/"
          className="flex-shrink-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2340] rounded-[4px]"
          aria-label="Matrix Plastic Products — Home"
        >
          <img
            src="https://www.matrixplastic.com/images/logos/MatrixLogo(R)_horizontal_white_536x129.png"
            alt="Matrix Plastic Products logo"
            className="h-12 w-auto object-contain"
            loading="lazy"
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = 'none'; }}
          />
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-[4px] lg:gap-[8px] flex-1 justify-center list-none m-0 p-0">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-['Inter'] font-medium text-[13px] lg:text-[14px] text-[#FFFFFF]/80 hover:text-[#FFFFFF] px-[10px] lg:px-[12px] py-[6px] rounded-[6px] hover:bg-[rgba(26,95,168,0.18)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0F2340] whitespace-nowrap tracking-[0.01em]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right: Phone + CTA */}
        <div className="hidden md:flex items-center gap-[16px] flex-shrink-0">
          <a
            href="tel:6305956144"
            className="flex items-center gap-[6px] font-['Inter'] font-medium text-[13px] text-[#FFFFFF]/75 hover:text-[#FFFFFF] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0F2340] rounded-[4px] whitespace-nowrap"
            aria-label="Call us at 630-595-6144"
          >
            <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
            <span className="hidden lg:inline">(630) 595-6144</span>
          </a>

          <a
            href="https://www.matrixplastic.com/contact-us/request-a-quote"
            className="bg-[#C95C0A] text-[#FFFFFF] px-[22px] py-[10px] rounded-[6px] font-['Inter'] font-[700] text-[13px] lg:text-[14px] whitespace-nowrap hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2340] shadow-[0_1px_3px_rgba(0,0,0,0.08)] tracking-[0.01em]"
          >
            Request a Quote
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-[40px] h-[40px] rounded-[6px] text-[#FFFFFF]/80 hover:text-[#FFFFFF] hover:bg-[rgba(26,95,168,0.20)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-1 focus-visible:ring-offset-[#0F2340] flex-shrink-0"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
        className={`md:hidden overflow-hidden transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        } bg-[rgba(10,26,50,0.97)] backdrop-blur-[12px] border-t border-[rgba(208,217,232,0.10)]`}
        aria-hidden={!mobileOpen}
      >
        <div className="max-w-[1200px] mx-auto px-[24px] py-[16px] flex flex-col gap-[4px]">

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-['Inter'] font-medium text-[15px] text-[#FFFFFF]/85 hover:text-[#FFFFFF] px-[12px] py-[12px] rounded-[6px] hover:bg-[rgba(26,95,168,0.20)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] border-b border-[rgba(208,217,232,0.07)] last:border-b-0"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* Mobile Phone */}
          <a
            href="tel:6305956144"
            className="flex items-center gap-[8px] font-['Inter'] font-medium text-[15px] text-[#FFFFFF]/75 hover:text-[#FFFFFF] px-[12px] py-[12px] rounded-[6px] hover:bg-[rgba(26,95,168,0.20)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] mt-[4px]"
            aria-label="Call us at 630-595-6144"
            onClick={() => setMobileOpen(false)}
          >
            <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
            (630) 595-6144
          </a>

          {/* Mobile CTA */}
          <a
            href="https://www.matrixplastic.com/contact-us/request-a-quote"
            className="mt-[8px] mb-[8px] bg-[#C95C0A] text-[#FFFFFF] px-[22px] py-[14px] rounded-[6px] font-['Inter'] font-[700] text-[15px] text-center hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1A32] shadow-[0_4px_16px_rgba(0,0,0,0.10)]"
            onClick={() => setMobileOpen(false)}
          >
            Request a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;