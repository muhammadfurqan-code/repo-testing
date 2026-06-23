import { useState, useEffect } from 'react';
import { Phone, Mail, ArrowRight, CheckCircle, Zap, Shield, Clock } from 'lucide-react';

function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const trustItems = [
    { icon: Zap, label: 'Rapid-Response Turnaround' },
    { icon: Shield, label: 'Precision Guaranteed' },
    { icon: CheckCircle, label: '1st Order Free for New Customers' },
    { icon: Clock, label: 'Fast Quotes & Online Drawing Submission' },
  ];

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative w-full">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[68px] bg-[rgba(28,35,49,0.94)] backdrop-blur-[12px] border-b border-[rgba(255,255,255,0.08)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${scrolled ? 'shadow-[0_4px_16px_rgba(0,0,0,0.12)]' : ''}`}
      >
        <div className="max-w-[1200px] mx-auto px-[24px] h-full flex items-center justify-between">
          {/* Wordmark */}
          <a
            href="/"
            className="font-['Barlow_Condensed'] font-[800] text-[22px] tracking-[-0.03em] text-[#F0F2F5]/90 uppercase leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-[4px]"
          >
            Marvel<span className="text-[#C8102E]"> Machining</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-[32px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-['Inter'] font-medium text-[14px] text-[#F0F2F5]/75 hover:text-[#F0F2F5] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-[2px]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:6303500075"
              className="font-['Inter'] font-medium text-[14px] text-[#F0F2F5]/75 hover:text-[#F0F2F5] flex items-center gap-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              630 350-0075
            </a>
            <a
              href="https://marvelspeed.com/contact-us"
              className="bg-[#C8102E] text-[#FFFFFF] px-[22px] py-[10px] rounded-[4px] font-semibold font-['Inter'] text-[14px] hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[rgba(28,35,49,0.94)]"
            >
              Request a Quote
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-[4px]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-[22px] h-[2px] bg-[#F0F2F5]/90 transition-all duration-[200ms] ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-[22px] h-[2px] bg-[#F0F2F5]/90 transition-all duration-[200ms] ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-[22px] h-[2px] bg-[#F0F2F5]/90 transition-all duration-[200ms] ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[rgba(28,35,49,0.98)] border-t border-[rgba(255,255,255,0.08)] px-[24px] py-[20px] flex flex-col gap-[16px]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-['Inter'] font-medium text-[15px] text-[#F0F2F5]/80 hover:text-[#F0F2F5] transition-all duration-[200ms] py-[4px]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:6303500075"
              className="font-['Inter'] font-medium text-[15px] text-[#F0F2F5]/80 hover:text-[#F0F2F5] flex items-center gap-[8px] transition-all duration-[200ms] py-[4px]"
            >
              <Phone className="w-4 h-4" strokeWidth={1.5} />
              630 350-0075
            </a>
            <a
              href="https://marvelspeed.com/contact-us"
              className="bg-[#C8102E] text-[#FFFFFF] px-[22px] py-[12px] rounded-[4px] font-semibold font-['Inter'] text-[15px] text-center hover:brightness-110 transition-all duration-[200ms]"
            >
              Request a Quote
            </a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        className="relative w-full min-h-[100svh] flex flex-col justify-end bg-[url('https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg')] bg-cover bg-center"
        aria-label="Hero section"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/15" />

        {/* Vignette edges */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_55%,_rgba(0,0,0,0.45)_100%)]" />

        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-[24px] w-full pb-[80px] pt-[140px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-[10px] mb-[20px]">
            <span className="block w-[36px] h-[3px] bg-[#C8102E] rounded-full" />
            <span className="font-['Barlow_Condensed'] font-[700] text-[13px] tracking-[0.12em] uppercase text-[#F0F2F5]/75">
              A Powerful Partner You Can Trust
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-['Barlow_Condensed'] font-[800] text-[clamp(40px,6vw,80px)] leading-[1.05] tracking-[-0.03em] text-[#F0F2F5]/90 max-w-[820px] mb-[24px]">
            Superhero Speed.{' '}
            <span className="text-[#C8102E]">Precision</span>{' '}
            You Can Trust.
          </h1>

          {/* Subheadline */}
          <p className="font-['Inter'] font-normal text-[clamp(16px,2vw,20px)] text-[#F0F2F5]/80 max-w-[560px] leading-[1.65] mb-[40px]">
            Chicago-area CNC machining built for industrial facilities that can't afford downtime. Fast quotes, online drawing submission, and rapid pick-up and delivery — every order.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap gap-[16px] mb-[64px]">
            <a
              href="https://marvelspeed.com/contact-us"
              className="inline-flex items-center gap-[8px] bg-[#E87722] text-[#FFFFFF] font-[700] font-['Inter'] text-[16px] py-[12px] px-[28px] rounded-[4px] hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87722] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="tel:6303500075"
              className="inline-flex items-center gap-[8px] bg-transparent text-[#F0F2F5]/90 border border-[rgba(240,242,245,0.45)] font-['Inter'] font-medium text-[16px] py-[12px] px-[28px] rounded-[4px] hover:bg-[rgba(240,242,245,0.08)] hover:border-[rgba(240,242,245,0.7)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0F2F5] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
            >
              <Phone className="w-5 h-5" strokeWidth={1.5} />
              630 350-0075
            </a>
          </div>

          {/* Trust Strip */}
          <div className="border-t border-[rgba(255,255,255,0.12)] pt-[32px]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[20px] md:gap-[32px]">
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-[10px]">
                  <div className="flex-shrink-0 w-[36px] h-[36px] rounded-[4px] bg-[rgba(200,16,46,0.18)] border border-[rgba(200,16,46,0.30)] flex items-center justify-center shadow-[0_0_40px_rgba(200,16,46,0.22)]">
                    <Icon className="w-[18px] h-[18px] text-[#C8102E]" strokeWidth={1.5} />
                  </div>
                  <span className="font-['Inter'] font-medium text-[13px] text-[#F0F2F5]/75 leading-[1.45] pt-[2px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom accent bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C8102E] via-[#E87722] to-[#C8102E] z-10" />
      </section>

      {/* Announcement bar below hero */}
      <div className="w-full bg-[#C8102E] py-[12px] px-[24px]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-center gap-[8px] sm:gap-[16px]">
          <span className="font-['Barlow_Condensed'] font-[700] text-[15px] tracking-[0.06em] uppercase text-[#FFFFFF]">
            New Customers:
          </span>
          <span className="font-['Inter'] font-medium text-[14px] text-[#FFFFFF]/90">
            Your 1st order is FREE. We're open for business and ready to earn your trust.
          </span>
          <a
            href="https://marvelspeed.com/contact-us"
            className="inline-flex items-center gap-[6px] font-['Inter'] font-semibold text-[13px] text-[#FFFFFF] underline underline-offset-2 hover:no-underline transition-all duration-[200ms] whitespace-nowrap"
          >
            Claim Your Free Order
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;