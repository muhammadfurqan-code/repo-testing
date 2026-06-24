import { Phone, Mail, ArrowRight } from 'lucide-react';

function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-[#0F2340] py-[80px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.matrixplastic.com/images/SmartSlider/IMG_5591-Edit.jpg"
          alt="Precision injection molded components"
          className="w-full h-full object-cover object-center"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F2340]/90 via-[#0F2340]/80 to-[#1A5FA8]/60" />
        <div className="absolute inset-0 bg-[#0F2340]/40" />
      </div>

      {/* Subtle glow accent top-left */}
      <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#1A5FA8]/20 blur-[80px] z-0 pointer-events-none" />
      {/* Subtle glow accent bottom-right */}
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-[#C95C0A]/10 blur-[80px] z-0 pointer-events-none" />

      {/* Thin top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#C95C0A] to-transparent z-10" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-[24px]">
        <div className="flex flex-col items-center text-center gap-[32px]">

          {/* Eyebrow label */}
          <div className="inline-flex items-center gap-[8px] bg-[#1A5FA8]/30 border border-[#1A5FA8]/50 rounded-full px-[16px] py-[6px] backdrop-blur-[8px]">
            <span className="w-[6px] h-[6px] rounded-full bg-[#C95C0A] animate-pulse inline-block" />
            <span className="font-['JetBrains_Mono'] text-[11px] font-medium tracking-[0.12em] uppercase text-[#FFFFFF]/80">
              ISO-Certified · Close-Tolerance Molding
            </span>
          </div>

          {/* Main headline */}
          <div className="flex flex-col items-center gap-[12px] max-w-[820px]">
            <h2 className="font-['Barlow_Condensed'] font-[800] text-[clamp(40px,6vw,80px)] leading-[1.05] tracking-[-0.03em] text-[#FFFFFF]/95 uppercase">
              Ready to Mold Your{' '}
              <span className="text-[#C95C0A]">Next Critical</span>{' '}
              Component?
            </h2>
            <p className="font-['Inter'] font-normal text-[18px] leading-[1.6] text-[#FFFFFF]/75 max-w-[600px]">
              Partner with Matrix Plastic Products — nearly 5 decades of in-house DFM and moldmaking expertise serving medical device manufacturers, electronics OEMs, and safety industry engineers.
            </p>
          </div>

          {/* Primary CTA button */}
          <div className="flex flex-col sm:flex-row items-center gap-[16px]">
            <a
              href="https://www.matrixplastic.com/contact-us/request-a-quote"
              className="inline-flex items-center gap-[10px] bg-[#C95C0A] text-[#FFFFFF] font-['Inter'] font-[700] text-[16px] py-[14px] px-[36px] rounded-[6px] shadow-[0_4px_16px_rgba(201,92,10,0.40)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 hover:shadow-[0_8px_28px_rgba(201,92,10,0.50)] hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2340]"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" strokeWidth={2} />
            </a>

            <a
              href="https://www.matrixplastic.com/contact-us/request-a-quote"
              className="inline-flex items-center gap-[10px] bg-transparent text-[#FFFFFF]/90 font-['Inter'] font-[600] text-[15px] py-[13px] px-[28px] rounded-[6px] border border-[#FFFFFF]/30 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#FFFFFF]/10 hover:border-[#FFFFFF]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2340]"
            >
              Learn More About Our Capabilities
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-[480px] h-[1px] bg-gradient-to-r from-transparent via-[#D0D9E8]/25 to-transparent" />

          {/* Contact info row */}
          <div className="flex flex-col sm:flex-row items-center gap-[24px] sm:gap-[40px]">
            <a
              href="tel:6305956144"
              className="inline-flex items-center gap-[10px] text-[#FFFFFF]/80 font-['Inter'] font-medium text-[15px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#FFFFFF] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] rounded-[4px]"
            >
              <span className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#1A5FA8]/40 border border-[#1A5FA8]/50 group-hover:bg-[#1A5FA8]/60 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <Phone className="w-4 h-4 text-[#FFFFFF]/90" strokeWidth={1.5} />
              </span>
              (630) 595-6144
            </a>

            <div className="hidden sm:block w-[1px] h-[28px] bg-[#D0D9E8]/20" />

            <a
              href="mailto:info@matrixplastic.com"
              className="inline-flex items-center gap-[10px] text-[#FFFFFF]/80 font-['Inter'] font-medium text-[15px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:text-[#FFFFFF] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] rounded-[4px]"
            >
              <span className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#1A5FA8]/40 border border-[#1A5FA8]/50 group-hover:bg-[#1A5FA8]/60 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <Mail className="w-4 h-4 text-[#FFFFFF]/90" strokeWidth={1.5} />
              </span>
              info@matrixplastic.com
            </a>
          </div>

          {/* Trust micro-copy */}
          <p className="font-['JetBrains_Mono'] text-[11px] tracking-[0.08em] text-[#FFFFFF]/45 uppercase">
            ISO Certified · Medical · Electronics · Safety Industry · 50+ Years of Precision
          </p>

        </div>
      </div>

      {/* Thin bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#1A5FA8]/40 to-transparent z-10" />
    </section>
  );
}

export default CTABanner;