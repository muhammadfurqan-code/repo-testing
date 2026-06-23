import { Phone, Mail, ArrowRight, Zap } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-[80px] overflow-hidden bg-[#1C2331]">
      <img
        src="https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg"
        alt="CNC machining shop floor at Marvel Machining"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />

      <div className="absolute inset-0 bg-[rgba(28,35,49,0.72)]" />

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(200,16,46,0.08)] via-transparent to-[rgba(28,35,49,0.60)]" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(200,16,46,0.10)] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-[24px] flex flex-col items-center text-center">

        <div className="flex items-center gap-[8px] mb-[20px]">
          <Zap className="w-5 h-5 text-[#E87722]" strokeWidth={1.5} />
          <span className="font-['JetBrains_Mono'] text-[13px] font-medium tracking-[0.12em] uppercase text-[#E87722]">
            New Customers — 1st Order Free
          </span>
          <Zap className="w-5 h-5 text-[#E87722]" strokeWidth={1.5} />
        </div>

        <h2 className="font-['Barlow_Condensed'] font-[800] text-[clamp(40px,6vw,80px)] leading-[1.05] tracking-[-0.03em] text-[#F0F2F5]/90 mb-[20px] max-w-[860px]">
          Your Facility Needs Parts.
          <br />
          <span className="text-[#C8102E]">We Deliver Fast.</span>
        </h2>

        <p className="font-['Inter'] font-normal text-[18px] leading-[1.6] text-[#F0F2F5]/75 max-w-[560px] mb-[40px]">
          From fast quotes and online drawing submission to rapid pick-up and delivery — Marvel Machining keeps your operation running with superhero speed and precision you can trust.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-[16px] mb-[48px]">
          <a
            href="https://marvelspeed.com/contact-us"
            className="inline-flex items-center gap-[10px] bg-[#E87722] text-[#FFFFFF] font-['Barlow_Condensed'] font-[700] text-[18px] tracking-[0.04em] uppercase py-[14px] px-[36px] rounded-[4px] shadow-[0_4px_16px_rgba(232,119,34,0.38)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#d46a1a] hover:shadow-[0_8px_28px_rgba(232,119,34,0.50)] hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87722] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2331]"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
          </a>

          <a
            href="tel:6303500075"
            className="inline-flex items-center gap-[10px] bg-transparent text-[#F0F2F5]/90 font-['Inter'] font-medium text-[16px] border-[1.5px] border-[rgba(240,242,245,0.30)] py-[13px] px-[28px] rounded-[4px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#C8102E] hover:text-[#FFFFFF] hover:bg-[rgba(200,16,46,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2331]"
          >
            <Phone className="w-5 h-5 text-[#C8102E]" strokeWidth={1.5} />
            630 350-0075
          </a>
        </div>

        <div className="w-full max-w-[480px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(240,242,245,0.15)] to-transparent mb-[28px]" />

        <div className="flex flex-col sm:flex-row items-center gap-[8px] sm:gap-[28px]">
          <a
            href="tel:6303500075"
            className="flex items-center gap-[8px] font-['Inter'] text-[14px] text-[#F0F2F5]/60 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#F0F2F5]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] rounded-[2px]"
          >
            <Phone className="w-[14px] h-[14px] text-[#6B7280]" strokeWidth={1.5} />
            (630) 350-0075
          </a>

          <span className="hidden sm:block w-[1px] h-[16px] bg-[rgba(240,242,245,0.15)]" />

          <a
            href="mailto:orders@marvel-speed.com"
            className="flex items-center gap-[8px] font-['Inter'] text-[14px] text-[#F0F2F5]/60 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#F0F2F5]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] rounded-[2px]"
          >
            <Mail className="w-[14px] h-[14px] text-[#6B7280]" strokeWidth={1.5} />
            orders@marvel-speed.com
          </a>

          <span className="hidden sm:block w-[1px] h-[16px] bg-[rgba(240,242,245,0.15)]" />

          <span className="flex items-center gap-[8px] font-['Inter'] text-[14px] text-[#F0F2F5]/60">
            <span className="w-[6px] h-[6px] rounded-full bg-[#22c55e] animate-pulse inline-block" />
            Chicago &amp; Surrounding Areas
          </span>
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C8102E] to-transparent opacity-60" />
    </section>
  );
}