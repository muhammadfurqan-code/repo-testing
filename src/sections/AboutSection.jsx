import { Phone, Mail, ArrowRight, Shield, Zap, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-[80px] bg-[#F4F5F7]">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section label */}
        <div className="flex items-center gap-[10px] mb-[16px]">
          <span className="inline-block w-[36px] h-[3px] bg-[#C8102E]"></span>
          <span className="font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C8102E]">
            About Us
          </span>
        </div>

        {/* Main grid: asymmetric split — image left (larger), content right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-[0px] items-stretch rounded-[12px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.16)]">

          {/* LEFT — stacked image collage */}
          <div className="relative grid grid-rows-[1fr_auto] min-h-[520px] lg:min-h-[640px]">

            {/* Primary image */}
            <div className="relative overflow-hidden">
              <img
                src="https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg"
                alt="Marvel Machining CNC shop floor operations"
                className="w-full h-full object-cover object-center"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[rgba(28,35,49,0.45)]"></div>

              {/* Founding badge — overlaid bottom-left */}
              <div className="absolute bottom-[24px] left-[24px] bg-[#C8102E] text-[#FFFFFF] px-[18px] py-[12px] rounded-[4px] shadow-[0_4px_16px_rgba(200,16,46,0.40)]">
                <p className="font-['JetBrains_Mono'] text-[11px] tracking-[0.10em] uppercase text-[#FFFFFF]/80 mb-[2px]">Serving Chicago Since</p>
                <p className="font-['Barlow_Condensed'] text-[32px] font-[800] leading-[1] text-[#FFFFFF]">2005</p>
              </div>

              {/* Glow vignette */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(28,35,49,0.55)_100%)] pointer-events-none"></div>
            </div>

            {/* Secondary image strip — bottom row */}
            <div className="grid grid-cols-2 h-[160px]">
              <div className="relative overflow-hidden">
                <img
                  src="https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg"
                  alt="CNC boring mill precision operation"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-[rgba(28,35,49,0.30)]"></div>
              </div>
              <div className="relative overflow-hidden">
                <img
                  src="https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg"
                  alt="Vertical turret lathe machining"
                  className="w-full h-full object-cover object-center"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-[rgba(28,35,49,0.30)]"></div>
              </div>
            </div>
          </div>

          {/* RIGHT — content panel */}
          <div className="bg-[#1C2331] flex flex-col justify-center px-[48px] py-[56px] lg:px-[56px]">

            <h2 className="font-['Barlow_Condensed'] text-[clamp(32px,4vw,52px)] font-[800] leading-[1.05] tracking-[-0.03em] text-[#F0F2F5]/90 mb-[20px]">
              A Powerful Partner<br />
              <span className="text-[#C8102E]">You Can Trust.</span>
            </h2>

            <p className="font-['Inter'] font-normal text-[16px] leading-[1.7] text-[#F0F2F5]/80 mb-[16px]">
              Marvel Machining has been keeping Chicago-area facilities running since 2005. We specialize in rapid-response CNC machining, boring, and vertical turret lathe work — built for industrial teams who can't afford downtime.
            </p>

            <p className="font-['Inter'] font-normal text-[16px] leading-[1.7] text-[#F0F2F5]/80 mb-[36px]">
              From fast quotes and online drawing submission to same-day pick-up and delivery, our shop is engineered for low-volume, high-urgency jobs. New customers get their <span className="text-[#E87722] font-medium">1st order free</span> — because we'd rather earn your trust than ask for it.
            </p>

            {/* Differentiator stats row */}
            <div className="grid grid-cols-3 gap-[16px] mb-[40px]">
              <div className="border border-[rgba(255,255,255,0.08)] rounded-[8px] px-[16px] py-[20px] bg-[rgba(255,255,255,0.04)]">
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <Zap className="w-5 h-5 text-[#E87722]" strokeWidth={1.5} />
                </div>
                <p className="font-['Barlow_Condensed'] text-[28px] font-[800] text-[#F0F2F5]/90 leading-[1]">24hr</p>
                <p className="font-['Inter'] text-[12px] text-[#6B7280] mt-[4px] leading-[1.4]">Rapid Quote Turnaround</p>
              </div>
              <div className="border border-[rgba(255,255,255,0.08)] rounded-[8px] px-[16px] py-[20px] bg-[rgba(255,255,255,0.04)]">
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <Shield className="w-5 h-5 text-[#C8102E]" strokeWidth={1.5} />
                </div>
                <p className="font-['Barlow_Condensed'] text-[28px] font-[800] text-[#F0F2F5]/90 leading-[1]">20+</p>
                <p className="font-['Inter'] text-[12px] text-[#6B7280] mt-[4px] leading-[1.4]">Years in Operation</p>
              </div>
              <div className="border border-[rgba(255,255,255,0.08)] rounded-[8px] px-[16px] py-[20px] bg-[rgba(255,255,255,0.04)]">
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <Award className="w-5 h-5 text-[#E87722]" strokeWidth={1.5} />
                </div>
                <p className="font-['Barlow_Condensed'] text-[28px] font-[800] text-[#F0F2F5]/90 leading-[1]">1st</p>
                <p className="font-['Inter'] text-[12px] text-[#6B7280] mt-[4px] leading-[1.4]">Order Free for New Customers</p>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-col sm:flex-row gap-[12px]">
              <a
                href="mailto:orders@marvel-speed.com"
                className="inline-flex items-center justify-center gap-[8px] bg-[#C8102E] text-[#FFFFFF] py-[12px] px-[28px] rounded-[4px] font-['Inter'] font-[700] text-[15px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#A50D25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2331]"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </a>
              <a
                href="tel:6303500075"
                className="inline-flex items-center justify-center gap-[8px] bg-transparent text-[#C8102E] border border-[#C8102E] py-[12px] px-[28px] rounded-[4px] font-['Inter'] font-medium text-[15px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[rgba(200,16,46,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2331]"
              >
                <Phone className="w-5 h-5" strokeWidth={1.5} />
                630 350-0075
              </a>
            </div>

            {/* Address line */}
            <div className="mt-[28px] pt-[24px] border-t border-[rgba(255,255,255,0.07)]">
              <div className="flex items-center gap-[10px]">
                <Mail className="w-5 h-5 text-[#6B7280] flex-shrink-0" strokeWidth={1.5} />
                <a
                  href="mailto:orders@marvel-speed.com"
                  className="font-['Inter'] text-[14px] text-[#6B7280] hover:text-[#F0F2F5]/80 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  orders@marvel-speed.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export { AboutSection };