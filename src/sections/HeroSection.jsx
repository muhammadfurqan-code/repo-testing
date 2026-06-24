import { useState, useEffect } from 'react';
import { Phone, Mail, ArrowRight, CheckCircle, Shield, Award, Clock } from 'lucide-react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const trustSignals = [
    { icon: Shield, label: 'ISO Certified' },
    { icon: Award, label: 'Nearly 5 Decades of Expertise' },
    { icon: CheckCircle, label: 'Close-Tolerance Precision' },
    { icon: Clock, label: 'Medical & Safety Industry Trusted' },
  ];

  return (
    <section
      className="relative min-h-[92vh] flex flex-col justify-end bg-[url('https://www.matrixplastic.com/images/sliders/OrangePushersCompositewithPencil1.jpeg')] bg-cover bg-center overflow-hidden"
      aria-label="Hero — Injection Molding and Moldmaking with Surgical Precision"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/15" aria-hidden="true" />

      {/* Additional depth overlay at bottom */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2340]/60 via-[#0F2340]/20 to-transparent" aria-hidden="true" />

      {/* Main content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-[24px] w-full pb-[72px] pt-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">

          {/* Left column — headline + CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Eyebrow label */}
            <div
              className={`inline-flex items-center gap-2 transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="h-[2px] w-[32px] bg-[#C95C0A] rounded-full" />
              <span className="font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#FFFFFF]/80">
                Precision Injection Molding & Moldmaking
              </span>
            </div>

            {/* Main headline */}
            <h1
              className={`font-['Barlow_Condensed'] text-[clamp(40px,6vw,80px)] leading-[1.1] font-[800] tracking-[-0.03em] text-[#FFFFFF]/90 transition-all duration-[800ms] delay-[100ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Injection Molding and<br />
              Moldmaking with{' '}
              <span className="text-[#C95C0A]">Surgical Precision</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`font-['Inter'] text-[17px] leading-[1.65] font-normal text-[#FFFFFF]/85 max-w-[560px] transition-all duration-[800ms] delay-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Matrix Plastic Products is a premier custom manufacturer partnering with medical device manufacturers, electronics OEMs, and safety industry engineers to produce ultra-precise molded components and sub-assemblies for the most critical applications.
            </p>

            {/* CTA buttons */}
            <div
              className={`flex flex-wrap gap-4 items-center transition-all duration-[800ms] delay-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              <a
                href="https://www.matrixplastic.com/contact-us/request-a-quote"
                className="inline-flex items-center gap-2 bg-[#C95C0A] text-[#FFFFFF] py-[12px] px-[28px] rounded-[6px] font-[700] font-['Inter'] text-[15px] shadow-[0_4px_16px_rgba(201,92,10,0.38)] hover:brightness-110 hover:shadow-[0_6px_24px_rgba(201,92,10,0.48)] focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                aria-label="Request a quote from Matrix Plastic Products"
              >
                Request A Quote
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </a>

              <a
                href="tel:6305956144"
                className="inline-flex items-center gap-2 bg-[#FFFFFF]/10 text-[#FFFFFF]/90 border border-[#FFFFFF]/30 py-[12px] px-[28px] rounded-[6px] font-['Inter'] font-medium text-[15px] backdrop-blur-[8px] hover:bg-[#FFFFFF]/20 hover:border-[#FFFFFF]/50 focus-visible:ring-2 focus-visible:ring-[#FFFFFF]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                aria-label="Call Matrix Plastic Products at 630-595-6144"
              >
                <Phone className="w-5 h-5" strokeWidth={1.5} />
                (630) 595‑6144
              </a>
            </div>
          </div>

          {/* Right column — stat cards (asymmetric bento) */}
          <div
            className={`lg:col-span-5 grid grid-cols-2 gap-3 transition-all duration-[900ms] delay-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Large featured stat */}
            <div className="col-span-2 bg-[#FFFFFF]/10 backdrop-blur-[12px] border border-[#FFFFFF]/15 rounded-[14px] px-[32px] py-[24px] flex flex-col gap-1 shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
              <span className="font-['Barlow_Condensed'] text-[48px] font-[800] leading-[1] text-[#FFFFFF]/90 tracking-[-0.03em]">
                ~50
                <span className="text-[#C95C0A]"> Years</span>
              </span>
              <span className="font-['Inter'] text-[14px] font-medium text-[#FFFFFF]/70 uppercase tracking-[0.08em]">
                In-House DFM & Moldmaking Expertise
              </span>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#FFFFFF]/10 backdrop-blur-[12px] border border-[#FFFFFF]/15 rounded-[14px] px-[20px] py-[20px] flex flex-col gap-1 shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
              <span className="font-['Barlow_Condensed'] text-[34px] font-[800] leading-[1] text-[#FFFFFF]/90 tracking-[-0.03em]">
                ISO
              </span>
              <span className="font-['Inter'] text-[12px] font-medium text-[#FFFFFF]/65 uppercase tracking-[0.07em]">
                Certified Quality
              </span>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#1A5FA8]/40 backdrop-blur-[12px] border border-[#1A5FA8]/40 rounded-[14px] px-[20px] py-[20px] flex flex-col gap-1 shadow-[0_4px_16px_rgba(26,95,168,0.22)]">
              <span className="font-['Barlow_Condensed'] text-[34px] font-[800] leading-[1] text-[#FFFFFF]/90 tracking-[-0.03em]">
                ±0.001<span className="text-[22px]">"</span>
              </span>
              <span className="font-['Inter'] text-[12px] font-medium text-[#FFFFFF]/65 uppercase tracking-[0.07em]">
                Close Tolerances
              </span>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div
          className={`mt-[56px] pt-[24px] border-t border-[#FFFFFF]/15 transition-all duration-[900ms] delay-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {trustSignals.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-5 h-5 text-[#C95C0A]" strokeWidth={1.5} />
                <span className="font-['Inter'] text-[13px] font-medium text-[#FFFFFF]/75 whitespace-nowrap">
                  {label}
                </span>
              </div>
            ))}

            <div className="ml-auto hidden md:flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FFFFFF]/50" strokeWidth={1.5} />
              <a
                href="mailto:info@matrixplastic.com"
                className="font-['Inter'] text-[13px] text-[#FFFFFF]/60 hover:text-[#FFFFFF]/90 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-1 focus-visible:ring-[#FFFFFF]/50 rounded-[2px]"
              >
                info@matrixplastic.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade for section transition */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#1A5FA8]/40 to-transparent" aria-hidden="true" />
    </section>
  );
}

export { HeroSection };