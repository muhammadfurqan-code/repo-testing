import { Phone, Mail, ArrowRight, Zap } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-[80px] overflow-hidden bg-[#1C2530]">
      <style>{`@keyframes cta_banner_subtlePulse { 0%, 100% { opacity: 0.18; transform: scale(1); } 50% { opacity: 0.28; transform: scale(1.06); } }`}</style>

      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg"
          alt="Marvel Machining CNC shop floor"
          className="w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,37,48,0.82)] via-[rgba(28,37,48,0.72)] to-[rgba(28,37,48,0.90)]" />
      </div>

      {/* Red glow orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-0 animate-[cta_banner_subtlePulse_6s_ease-in-out_infinite]"
        style={{ background: 'radial-gradient(circle, rgba(200,16,46,0.22) 0%, transparent 70%)' }}
      />

      {/* Decorative top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#C8102E] z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[24px] flex flex-col items-center text-center">

        {/* Eyebrow label */}
        <div className="flex items-center gap-[8px] mb-[20px]">
          <Zap className="w-5 h-5 text-[#F97316]" strokeWidth={1.5} />
          <span className="font-['JetBrains_Mono'] text-[13px] font-medium tracking-[0.12em] uppercase text-[#F97316]">
            A Powerful Partner You Can Trust
          </span>
          <Zap className="w-5 h-5 text-[#F97316]" strokeWidth={1.5} />
        </div>

        {/* Main headline */}
        <h2 className="font-['Barlow_Condensed'] font-[800] text-[clamp(40px,6vw,80px)] leading-[1.1] tracking-[-0.03em] text-[#F0F2F4]/90 mb-[12px] max-w-[820px]">
          New Customers Get Their{' '}
          <span className="text-[#C8102E]">1st Order Free</span>
        </h2>

        {/* Sub-headline */}
        <p className="font-['Inter'] font-normal text-[18px] leading-[1.6] text-[#F0F2F4]/75 max-w-[580px] mb-[40px]">
          We keep your facility running with superhero speed. Fast quotes, online drawing submission, and rapid pick-up and delivery — built for Chicago-area industrial operations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-[16px] mb-[48px]">
          <a
            href="https://marvelspeed.com/contact-us"
            className="inline-flex items-center gap-[10px] bg-[#F97316] text-[#FFFFFF] font-['Barlow_Condensed'] font-[700] text-[18px] tracking-[0.04em] uppercase py-[14px] px-[36px] rounded-[6px] shadow-[0_4px_16px_rgba(249,115,22,0.35)] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            Request a Free Quote
            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
          </a>

          <a
            href="tel:6303500075"
            className="inline-flex items-center gap-[10px] bg-transparent text-[#C8102E] border-[1.5px] border-[#C8102E] font-['Barlow_Condensed'] font-[700] text-[18px] tracking-[0.04em] uppercase py-[14px] px-[36px] rounded-[6px] hover:bg-[#C8102E] hover:text-[#FFFFFF] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            <Phone className="w-5 h-5" strokeWidth={1.5} />
            630 350-0075
          </a>
        </div>

        {/* Divider */}
        <div className="w-full max-w-[480px] h-[1px] bg-gradient-to-r from-transparent via-[#D1D5DB]/30 to-transparent mb-[32px]" />

        {/* Inline contact info */}
        <div className="flex flex-col sm:flex-row items-center gap-[24px] sm:gap-[40px]">
          <a
            href="tel:6303500075"
            className="flex items-center gap-[10px] font-['Inter'] font-medium text-[15px] text-[#F0F2F4]/75 hover:text-[#F0F2F4]/95 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group"
          >
            <span className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#C8102E]/15 border border-[#C8102E]/30 group-hover:bg-[#C8102E]/25 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <Phone className="w-[16px] h-[16px] text-[#C8102E]" strokeWidth={1.5} />
            </span>
            630 350-0075
          </a>

          <div className="hidden sm:block w-[1px] h-[28px] bg-[#D1D5DB]/20" />

          <a
            href="mailto:orders@marvel-speed.com"
            className="flex items-center gap-[10px] font-['Inter'] font-medium text-[15px] text-[#F0F2F4]/75 hover:text-[#F0F2F4]/95 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group"
          >
            <span className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#C8102E]/15 border border-[#C8102E]/30 group-hover:bg-[#C8102E]/25 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <Mail className="w-[16px] h-[16px] text-[#C8102E]" strokeWidth={1.5} />
            </span>
            orders@marvel-speed.com
          </a>
        </div>

        {/* Trust badge */}
        <div className="mt-[40px] inline-flex items-center gap-[8px] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] backdrop-blur-[12px] rounded-[8px] px-[20px] py-[10px]">
          <span className="font-['JetBrains_Mono'] text-[12px] text-[#6B7280] tracking-[0.08em] uppercase">
            Serving Chicago Metro
          </span>
          <span className="w-[4px] h-[4px] rounded-full bg-[#C8102E]" />
          <span className="font-['JetBrains_Mono'] text-[12px] text-[#6B7280] tracking-[0.08em] uppercase">
            Rapid Turnaround
          </span>
          <span className="w-[4px] h-[4px] rounded-full bg-[#C8102E]" />
          <span className="font-['JetBrains_Mono'] text-[12px] text-[#6B7280] tracking-[0.08em] uppercase">
            CNC &amp; Lathe Specialists
          </span>
        </div>
      </div>

      {/* Decorative bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C8102E] to-transparent z-10" />
    </section>
  );
}