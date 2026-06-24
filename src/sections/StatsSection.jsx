import { Shield, Clock, Award, Zap, CheckCircle, Users } from 'lucide-react';

export default function StatsCredentials() {
  const stats = [
    {
      value: '30+',
      label: 'Years in Business',
      sub: 'Serving Chicago metro since the 1990s',
      icon: Clock,
      large: true,
    },
    {
      value: '10K+',
      label: 'Parts Machined',
      sub: 'Across industrial & manufacturing sectors',
      icon: Zap,
      large: false,
    },
    {
      value: '500+',
      label: 'Clients Served',
      sub: 'Facility managers, engineers & plant directors',
      icon: Users,
      large: false,
    },
    {
      value: '24hr',
      label: 'Rapid Turnaround',
      sub: 'Fast quotes & same-day pickup available',
      icon: Shield,
      large: false,
    },
    {
      value: '1st',
      label: 'Order Free',
      sub: 'New customers get their first order at no cost',
      icon: Award,
      large: false,
    },
  ];

  const credentials = [
    { label: 'CNC Boring Mills', icon: CheckCircle },
    { label: 'Vertical Turret Lathes', icon: CheckCircle },
    { label: 'Low Volume & Prototypes', icon: CheckCircle },
    { label: 'Online Drawing Submission', icon: CheckCircle },
    { label: 'Pick-Up & Delivery', icon: CheckCircle },
    { label: 'High Tolerance Machining', icon: CheckCircle },
  ];

  return (
    <section className="py-[80px] bg-[#1C2530] relative overflow-hidden">
      <style>{`@keyframes stats_subtlePulse { 0%, 100% { opacity: 0.18; transform: scale(1); } 50% { opacity: 0.28; transform: scale(1.06); } }`}</style>

      {/* Background glow accents */}
      <div className="absolute top-[-80px] left-[-80px] w-[420px] h-[420px] rounded-full bg-[#C8102E] animate-[stats_subtlePulse_7s_ease-in-out_infinite] blur-[90px] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-[320px] h-[320px] rounded-full bg-[#C8102E] animate-[stats_subtlePulse_9s_ease-in-out_infinite] blur-[80px] pointer-events-none opacity-[0.14]" />

      <div className="max-w-[1200px] mx-auto px-[24px] relative z-10">

        {/* Section header */}
        <div className="mb-[56px] max-w-[640px]">
          <div className="flex items-center gap-[10px] mb-[16px]">
            <span className="block w-[36px] h-[3px] bg-[#C8102E] rounded-full" />
            <span className="font-['JetBrains_Mono'] text-[13px] font-medium tracking-[0.12em] uppercase text-[#C8102E]">
              Proven Track Record
            </span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#F0F2F4]/90 leading-[1.15] mb-[14px]">
            Numbers That Prove We Deliver
          </h2>
          <p className="font-['Inter'] font-normal text-[16px] leading-[1.65] text-[#6B7280]">
            Three decades of precision machining in the Chicago metro. Real credentials, real speed, real results — no fluff.
          </p>
        </div>

        {/* Bento grid — asymmetric */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-[16px] mb-[40px]">

          {/* Large featured stat — col-span-5 */}
          <div className="lg:col-span-5 lg:row-span-2 bg-[#C8102E] rounded-[10px] p-[32px] flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.16)] relative overflow-hidden group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)]">
            <div className="absolute top-[-40px] right-[-40px] w-[200px] h-[200px] rounded-full bg-[#FFFFFF] opacity-[0.05] pointer-events-none" />
            <div className="absolute bottom-[-30px] left-[-30px] w-[150px] h-[150px] rounded-full bg-[#FFFFFF] opacity-[0.04] pointer-events-none" />

            <div className="flex items-start justify-between mb-[24px]">
              <Clock className="w-[28px] h-[28px] text-[#FFFFFF] opacity-80" strokeWidth={1.5} />
              <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.14em] uppercase text-[#FFFFFF]/60 border border-[#FFFFFF]/20 rounded-[4px] px-[8px] py-[4px]">
                Est. Chicago, IL
              </span>
            </div>

            <div>
              <div className="font-['Barlow_Condensed'] text-[clamp(72px,8vw,108px)] font-[800] leading-[1] tracking-[-0.03em] text-[#FFFFFF] mb-[8px]">
                30+
              </div>
              <div className="font-['Barlow_Condensed'] text-[22px] font-[700] text-[#FFFFFF] mb-[10px] tracking-[-0.01em]">
                Years in Business
              </div>
              <p className="font-['Inter'] text-[14px] text-[#FFFFFF]/75 leading-[1.6]">
                Serving Chicago metro industrial facilities since the 1990s with precision CNC machining and rapid turnaround.
              </p>
            </div>

            <div className="mt-[28px] pt-[20px] border-t border-[#FFFFFF]/20">
              <span className="font-['Inter'] text-[13px] font-medium text-[#FFFFFF]/80">
                A powerful partner you can trust
              </span>
            </div>
          </div>

          {/* Stat card — 10K+ */}
          <div className="lg:col-span-4 bg-[#FFFFFF] rounded-[10px] p-[32px] border border-[#D1D5DB] shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex flex-col justify-between transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px] group">
            <div className="flex items-center justify-between mb-[16px]">
              <Zap className="w-[22px] h-[22px] text-[#C8102E]" strokeWidth={1.5} />
              <span className="w-[8px] h-[8px] rounded-full bg-[#F97316] animate-pulse" />
            </div>
            <div>
              <div className="font-['Barlow_Condensed'] text-[clamp(48px,5vw,72px)] font-[800] leading-[1] tracking-[-0.03em] text-[#1C2530] mb-[6px]">
                10K+
              </div>
              <div className="font-['Barlow_Condensed'] text-[18px] font-[700] text-[#1C2530] mb-[6px]">
                Parts Machined
              </div>
              <p className="font-['Inter'] text-[13px] text-[#6B7280] leading-[1.55]">
                Across industrial & manufacturing sectors throughout the region.
              </p>
            </div>
          </div>

          {/* Stat card — 500+ */}
          <div className="lg:col-span-3 bg-[#1C2530] rounded-[10px] p-[32px] border border-[#FFFFFF]/10 shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex flex-col justify-between transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px]">
            <Users className="w-[22px] h-[22px] text-[#F97316] mb-[16px]" strokeWidth={1.5} />
            <div>
              <div className="font-['Barlow_Condensed'] text-[clamp(44px,4.5vw,68px)] font-[800] leading-[1] tracking-[-0.03em] text-[#F0F2F4]/90 mb-[6px]">
                500+
              </div>
              <div className="font-['Barlow_Condensed'] text-[17px] font-[700] text-[#F0F2F4]/90 mb-[6px]">
                Clients Served
              </div>
              <p className="font-['Inter'] text-[13px] text-[#6B7280] leading-[1.55]">
                Facility managers, plant engineers & maintenance directors.
              </p>
            </div>
          </div>

          {/* Stat card — 24hr */}
          <div className="lg:col-span-4 bg-[#FFFFFF] rounded-[10px] p-[32px] border border-[#D1D5DB] shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex flex-col justify-between transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px]">
            <div className="flex items-center justify-between mb-[16px]">
              <Shield className="w-[22px] h-[22px] text-[#C8102E]" strokeWidth={1.5} />
            </div>
            <div>
              <div className="font-['Barlow_Condensed'] text-[clamp(44px,4.5vw,68px)] font-[800] leading-[1] tracking-[-0.03em] text-[#1C2530] mb-[6px]">
                24hr
              </div>
              <div className="font-['Barlow_Condensed'] text-[18px] font-[700] text-[#1C2530] mb-[6px]">
                Rapid Turnaround
              </div>
              <p className="font-['Inter'] text-[13px] text-[#6B7280] leading-[1.55]">
                Fast quotes & same-day pickup available for urgent jobs.
              </p>
            </div>
          </div>

          {/* Stat card — 1st Order Free — accent highlight */}
          <div className="lg:col-span-3 bg-[#F97316] rounded-[10px] p-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.16)] flex flex-col justify-between transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 hover:-translate-y-[2px] relative overflow-hidden">
            <div className="absolute top-[-30px] right-[-30px] w-[120px] h-[120px] rounded-full bg-[#FFFFFF] opacity-[0.08] pointer-events-none" />
            <Award className="w-[22px] h-[22px] text-[#FFFFFF] mb-[16px]" strokeWidth={1.5} />
            <div>
              <div className="font-['Barlow_Condensed'] text-[clamp(40px,4vw,62px)] font-[800] leading-[1] tracking-[-0.03em] text-[#FFFFFF] mb-[6px]">
                1st
              </div>
              <div className="font-['Barlow_Condensed'] text-[17px] font-[700] text-[#FFFFFF] mb-[6px]">
                Order Free
              </div>
              <p className="font-['Inter'] text-[13px] text-[#FFFFFF]/85 leading-[1.55]">
                New customers get their first order at no cost. Open for business.
              </p>
            </div>
          </div>
        </div>

        {/* Capability badges row */}
        <div className="bg-[#FFFFFF]/[0.04] backdrop-blur-[12px] border border-[#FFFFFF]/10 rounded-[10px] p-[32px]">
          <div className="flex items-center gap-[10px] mb-[20px]">
            <span className="font-['JetBrains_Mono'] text-[12px] tracking-[0.12em] uppercase text-[#6B7280]">
              Core Capabilities
            </span>
            <span className="flex-1 h-[1px] bg-[#FFFFFF]/10" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[12px]">
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="flex flex-col items-start gap-[8px] bg-[#FFFFFF]/[0.06] border border-[#FFFFFF]/10 rounded-[8px] px-[14px] py-[14px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#C8102E]/50 hover:bg-[#C8102E]/10 group"
              >
                <CheckCircle className="w-[16px] h-[16px] text-[#C8102E] group-hover:text-[#F97316] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]" strokeWidth={1.5} />
                <span className="font-['Inter'] text-[12px] font-medium text-[#F0F2F4]/85 leading-[1.4]">
                  {cred.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom image strip */}
        <div className="mt-[40px] grid grid-cols-3 gap-[12px] rounded-[10px] overflow-hidden">
          {[
            'https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg',
            'https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg',
            'https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg',
          ].map((src, i) => (
            <div key={i} className="relative overflow-hidden rounded-[8px] h-[140px] sm:h-[180px]">
              <img
                src={src}
                alt={`Marvel Machining shop floor ${i + 1}`}
                className="w-full h-full object-cover grayscale-[40%] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:grayscale-0 hover:scale-[1.03]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.55)] to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}