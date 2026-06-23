import { Award, Clock, Zap, Shield, CheckCircle, Star } from 'lucide-react';

export default function StatsCredentials() {
  const credentials = [
    {
      icon: Award,
      label: 'ISO-Compliant Quality Standards',
      description: 'Tight tolerances held to spec, every run',
    },
    {
      icon: Zap,
      label: 'Rapid-Response Turnaround',
      description: 'Fast quotes, pick-up & delivery across Chicagoland',
    },
    {
      icon: Shield,
      label: '1st Order Free — New Customers',
      description: 'We earn your trust before you spend a dollar',
    },
    {
      icon: Star,
      label: 'Low-Volume & Prototype Ready',
      description: 'Tailored setup for small runs, prototypes & rebuilds',
    },
  ];

  return (
    <section className="py-[80px] bg-[#1C2331] relative overflow-hidden">
      {/* Background texture overlay */}
      <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)'}}></div>

      {/* Red glow accent top-left */}
      <div className="absolute -top-[80px] -left-[80px] w-[400px] h-[400px] rounded-full bg-[#C8102E] opacity-[0.07] blur-[80px] pointer-events-none"></div>
      {/* Red glow accent bottom-right */}
      <div className="absolute -bottom-[60px] -right-[60px] w-[320px] h-[320px] rounded-full bg-[#C8102E] opacity-[0.06] blur-[80px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-[24px] relative z-10">

        {/* Section header */}
        <div className="mb-[56px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-[40px] h-[3px] bg-[#C8102E] rounded-full"></div>
            <span className="font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#E87722]">
              Proven Track Record
            </span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#F0F2F5]/90 leading-[1.1] max-w-[540px]">
            The Numbers Behind the Name
          </h2>
          <p className="font-['Inter'] font-normal text-[#6B7280] mt-3 max-w-[480px] text-[15px] leading-[1.6]">
            Marvel Machining has been keeping Chicagoland facilities running with superhero-speed precision. Here's what that looks like in practice.
          </p>
        </div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[16px]">

          {/* LARGE STAT — Years in Business — col-span-5 row-span-2 */}
          <div className="md:col-span-5 md:row-span-2 bg-[#C8102E] rounded-[8px] p-[32px] flex flex-col justify-between relative overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.16)] group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)]">
            {/* Decorative circle */}
            <div className="absolute -bottom-[40px] -right-[40px] w-[200px] h-[200px] rounded-full border-[1px] border-[#FFFFFF]/10 pointer-events-none"></div>
            <div className="absolute -bottom-[20px] -right-[20px] w-[140px] h-[140px] rounded-full border-[1px] border-[#FFFFFF]/10 pointer-events-none"></div>

            <div>
              <div className="inline-flex items-center gap-2 bg-[#FFFFFF]/10 rounded-[4px] px-[10px] py-[5px] mb-[24px]">
                <Clock className="w-4 h-4 text-[#FFFFFF]" strokeWidth={1.5} />
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#FFFFFF] tracking-[0.08em] uppercase">Founded</span>
              </div>
              <div className="font-['Barlow_Condensed'] text-[clamp(72px,10vw,120px)] font-[800] text-[#FFFFFF] leading-[0.9] tracking-[-0.03em]">
                20<span className="text-[#FFFFFF]/60 text-[clamp(40px,5vw,64px)]">+</span>
              </div>
              <div className="font-['Barlow_Condensed'] text-[22px] font-[600] text-[#FFFFFF]/80 mt-2 tracking-[-0.01em]">
                Years in Business
              </div>
            </div>

            <p className="font-['Inter'] text-[14px] text-[#FFFFFF]/70 leading-[1.6] mt-[20px]">
              Two decades of precision machining experience serving industrial facilities across the Chicago metro area.
            </p>

            {/* Image strip */}
            <div className="mt-[24px] rounded-[6px] overflow-hidden h-[100px] relative">
              <img
                src="https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg"
                alt="Marvel Machining shop floor"
                className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-[#C8102E]/40"></div>
            </div>
          </div>

          {/* STAT — Rapid Quotes */}
          <div className="md:col-span-4 bg-[#FFFFFF] rounded-[8px] p-[32px] border border-[#D1D5DB] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px] group">
            <div className="flex items-start justify-between mb-[16px]">
              <div className="w-[44px] h-[44px] rounded-[8px] bg-[#F4F5F7] flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#C8102E]" strokeWidth={1.5} />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#6B7280] tracking-[0.08em] uppercase">Response</span>
            </div>
            <div className="font-['Barlow_Condensed'] text-[clamp(48px,6vw,72px)] font-[800] text-[#C8102E] leading-[0.9] tracking-[-0.03em]">
              24<span className="text-[#6B7280] text-[28px] font-[600]">hr</span>
            </div>
            <div className="font-['Barlow_Condensed'] text-[18px] font-[600] text-[#1C2331] mt-2">
              Quote Turnaround
            </div>
            <p className="font-['Inter'] text-[13px] text-[#6B7280] mt-2 leading-[1.5]">
              Fast quotes with online drawing submission — no waiting, no runaround.
            </p>
          </div>

          {/* STAT — 1st Order Free — accent */}
          <div className="md:col-span-3 bg-[#1C2331] rounded-[8px] p-[32px] border border-[#E87722]/30 shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[80px] h-[80px] bg-[#E87722]/10 rounded-bl-[80px]"></div>
            <div className="w-[44px] h-[44px] rounded-[8px] bg-[#E87722]/15 flex items-center justify-center mb-[16px]">
              <Star className="w-5 h-5 text-[#E87722]" strokeWidth={1.5} />
            </div>
            <div className="font-['Barlow_Condensed'] text-[clamp(40px,5vw,60px)] font-[800] text-[#E87722] leading-[0.9] tracking-[-0.03em]">
              1<span className="text-[24px] align-super font-[600]">st</span>
            </div>
            <div className="font-['Barlow_Condensed'] text-[16px] font-[600] text-[#F0F2F5]/90 mt-2">
              Order Free
            </div>
            <p className="font-['Inter'] text-[12px] text-[#6B7280] mt-2 leading-[1.5]">
              New customers welcome.
            </p>
          </div>

          {/* STAT — Industries Served */}
          <div className="md:col-span-4 bg-[#FFFFFF] rounded-[8px] p-[32px] border border-[#D1D5DB] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px] relative overflow-hidden group">
            <div className="flex items-start justify-between mb-[16px]">
              <div className="w-[44px] h-[44px] rounded-[8px] bg-[#F4F5F7] flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#C8102E]" strokeWidth={1.5} />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#6B7280] tracking-[0.08em] uppercase">Served</span>
            </div>
            <div className="font-['Barlow_Condensed'] text-[clamp(48px,6vw,72px)] font-[800] text-[#C8102E] leading-[0.9] tracking-[-0.03em]">
              100<span className="text-[#6B7280] text-[28px] font-[600]">s</span>
            </div>
            <div className="font-['Barlow_Condensed'] text-[18px] font-[600] text-[#1C2331] mt-2">
              Parts Delivered
            </div>
            <p className="font-['Inter'] text-[13px] text-[#6B7280] mt-2 leading-[1.5]">
              Hundreds of precision parts shipped to facilities across Chicagoland.
            </p>
            <div className="mt-[16px] h-[56px] rounded-[6px] overflow-hidden relative">
              <img
                src="https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg"
                alt="CNC boring precision parts"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* STAT — Capabilities count */}
          <div className="md:col-span-3 bg-[#FFFFFF] rounded-[8px] p-[32px] border border-[#D1D5DB] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px]">
            <div className="w-[44px] h-[44px] rounded-[8px] bg-[#F4F5F7] flex items-center justify-center mb-[16px]">
              <CheckCircle className="w-5 h-5 text-[#C8102E]" strokeWidth={1.5} />
            </div>
            <div className="font-['Barlow_Condensed'] text-[clamp(40px,5vw,60px)] font-[800] text-[#C8102E] leading-[0.9] tracking-[-0.03em]">
              6<span className="text-[#6B7280] text-[24px] font-[600]">+</span>
            </div>
            <div className="font-['Barlow_Condensed'] text-[16px] font-[600] text-[#1C2331] mt-2">
              Core Services
            </div>
            <p className="font-['Inter'] text-[12px] text-[#6B7280] mt-2 leading-[1.5]">
              CNC boring, lathes, low-volume & more.
            </p>
          </div>

        </div>

        {/* Credential badges row */}
        <div className="mt-[40px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[12px]">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            return (
              <div
                key={i}
                className="flex items-start gap-3 bg-[#FFFFFF]/05 border border-[#FFFFFF]/08 rounded-[8px] px-[20px] py-[16px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#FFFFFF]/10 hover:border-[#C8102E]/30"
              >
                <div className="mt-[2px] shrink-0">
                  <Icon className="w-5 h-5 text-[#C8102E]" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="font-['Inter'] font-medium text-[13px] text-[#F0F2F5]/90 leading-[1.3]">
                    {cred.label}
                  </div>
                  <div className="font-['Inter'] text-[12px] text-[#6B7280] mt-[3px] leading-[1.4]">
                    {cred.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-[48px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[20px] border-t border-[#FFFFFF]/08 pt-[32px]">
          <div>
            <p className="font-['Barlow_Condensed'] text-[20px] font-[600] text-[#F0F2F5]/90 tracking-[-0.01em]">
              Ready to experience superhero-speed machining?
            </p>
            <p className="font-['Inter'] text-[14px] text-[#6B7280] mt-1">
              Call <a href="tel:6303500075" className="text-[#E87722] hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] font-medium">630 350-0075</a> or email <a href="mailto:orders@marvel-speed.com" className="text-[#E87722] hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] font-medium">orders@marvel-speed.com</a>
            </p>
          </div>
          <a
            href="mailto:orders@marvel-speed.com"
            className="bg-[#E87722] text-[#FFFFFF] font-[700] font-['Inter'] py-[12px] px-[28px] rounded-[4px] text-[15px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#E87722] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2331] whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
          >
            Request a Quote
          </a>
        </div>

      </div>
    </section>
  );
}