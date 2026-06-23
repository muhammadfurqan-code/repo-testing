import { useState } from 'react';
import { Zap, Settings, RotateCcw, Layers, Clock, ArrowRight } from 'lucide-react';

export default function CapabilitiesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const capabilities = [
    {
      id: 0,
      title: 'Low Volume & Rapid Response',
      description: 'Our facility is tailored for fast set-up and rapid response times, ideal for low volume quantities, prototypes, and rebuilding worn components. When your line is down, we move fast.',
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg',
      icon: Zap,
      tag: 'Most Requested',
      featured: true,
    },
    {
      id: 1,
      title: 'CNC Boring',
      description: 'Our various CNC boring mills deliver high tolerance inside bearing and other critical dimensions with repeatable accuracy.',
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg',
      icon: Settings,
      tag: 'High Precision',
      featured: false,
    },
    {
      id: 2,
      title: 'Vertical Turret Lathes',
      description: 'Our vertical turret lathes allow for machining inside and outside seats at various diameters with tight tolerances.',
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg',
      icon: RotateCcw,
      tag: 'Heavy Duty',
      featured: false,
    },
    {
      id: 3,
      title: 'Precision Turning',
      description: 'Multi-axis CNC turning centers handle complex geometries and tight tolerances across a wide range of materials.',
      image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg',
      icon: Layers,
      tag: 'CNC',
      featured: false,
    },
    {
      id: 4,
      title: 'Fast Quotes & Online Submission',
      description: 'Submit drawings online, get a fast quote, and choose pick-up or delivery. No red tape — just results.',
      image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg',
      icon: Clock,
      tag: 'Rapid Turnaround',
      featured: false,
    },
  ];

  return (
    <section className="py-[80px] bg-[#F4F5F7]">
      <style>{`@keyframes capabilities_shimmerPulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }`}</style>
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[56px] flex flex-col md:flex-row md:items-end md:justify-between gap-[24px]">
          <div>
            <div className="flex items-center gap-[10px] mb-[12px]">
              <span className="block w-[36px] h-[3px] bg-[#C8102E] rounded-full"></span>
              <span className="font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C8102E]">
                Our Services
              </span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#1C2331] leading-[1.1] max-w-[520px]">
              High Accuracy Precision Machining Services
            </h2>
            <p className="mt-[14px] font-['Inter'] font-normal text-[15px] text-[#6B7280] max-w-[480px] leading-[1.6]">
              From fast quotes and online drawing submission to rapid pick-up and delivery — we keep your facility running.
            </p>
          </div>
          <a
            href="https://marvelspeed.com/contact-us"
            className="inline-flex items-center gap-[8px] bg-[#E87722] text-[#FFFFFF] font-['Inter'] font-[700] text-[14px] py-[12px] px-[28px] rounded-[4px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#E87722] focus-visible:ring-offset-2 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap self-start md:self-auto"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-rows-auto gap-[16px]">

          {/* Featured Tile — spans 7 cols, 2 rows */}
          <div
            className="lg:col-span-7 lg:row-span-2 relative overflow-hidden rounded-[12px] shadow-[0_12px_40px_rgba(0,0,0,0.16)] group cursor-pointer min-h-[420px]"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={capabilities[0].image}
              alt={capabilities[0].title}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[rgba(28,35,49,0.55)] group-hover:bg-[rgba(28,35,49,0.45)] transition-all duration-[300ms]"></div>
            {/* Red glow bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[180px] bg-gradient-to-t from-[rgba(200,16,46,0.55)] to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-between p-[32px]">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-[6px] bg-[#C8102E] text-[#FFFFFF] font-['JetBrains_Mono'] text-[11px] font-medium tracking-[0.1em] uppercase px-[10px] py-[5px] rounded-[4px]">
                  <Zap className="w-3 h-3" strokeWidth={2} />
                  {capabilities[0].tag}
                </span>
                <div className="w-[44px] h-[44px] rounded-full bg-[rgba(255,255,255,0.12)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.2)] flex items-center justify-center">
                  <Zap className="w-5 h-5 text-[#F0F2F5]" strokeWidth={1.5} />
                </div>
              </div>

              <div>
                <h3 className="font-['Barlow_Condensed'] text-[clamp(28px,3.5vw,42px)] font-[800] tracking-[-0.03em] text-[#F0F2F5]/90 leading-[1.05] mb-[12px]">
                  {capabilities[0].title}
                </h3>
                <p className="font-['Inter'] font-normal text-[15px] text-[#F0F2F5]/80 leading-[1.6] max-w-[420px] mb-[20px]">
                  {capabilities[0].description}
                </p>
                <a
                  href="https://marvelspeed.com/services_management/low-volume-rapid-response/"
                  className="inline-flex items-center gap-[8px] bg-[#FFFFFF] text-[#C8102E] font-['Inter'] font-[700] text-[13px] px-[20px] py-[10px] rounded-[4px] hover:bg-[#C8102E] hover:text-[#FFFFFF] focus-visible:ring-2 focus-visible:ring-[#FFFFFF] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>

          {/* CNC Boring — spans 5 cols */}
          <div
            className="lg:col-span-5 relative overflow-hidden rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] group cursor-pointer min-h-[200px]"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={capabilities[1].image}
              alt={capabilities[1].title}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-[rgba(28,35,49,0.52)] group-hover:bg-[rgba(28,35,49,0.42)] transition-all duration-[300ms]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[rgba(28,35,49,0.85)] to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-between p-[24px]">
              <div className="flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#F0F2F5]/70 tracking-[0.1em] uppercase border border-[rgba(255,255,255,0.2)] px-[8px] py-[4px] rounded-[4px]">
                  {capabilities[1].tag}
                </span>
                <div className="w-[36px] h-[36px] rounded-full bg-[rgba(200,16,46,0.3)] backdrop-blur-[6px] border border-[rgba(200,16,46,0.4)] flex items-center justify-center">
                  <Settings className="w-4 h-4 text-[#F0F2F5]" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-['Barlow_Condensed'] text-[22px] font-[700] tracking-[-0.02em] text-[#F0F2F5]/90 leading-[1.1] mb-[6px]">
                  {capabilities[1].title}
                </h3>
                <p className="font-['Inter'] text-[13px] text-[#F0F2F5]/75 leading-[1.5] line-clamp-2">
                  {capabilities[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Vertical Turret Lathes — spans 5 cols */}
          <div
            className="lg:col-span-5 relative overflow-hidden rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] group cursor-pointer min-h-[200px]"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={capabilities[2].image}
              alt={capabilities[2].title}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-[rgba(28,35,49,0.52)] group-hover:bg-[rgba(28,35,49,0.42)] transition-all duration-[300ms]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[rgba(28,35,49,0.85)] to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-between p-[24px]">
              <div className="flex items-center justify-between">
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#F0F2F5]/70 tracking-[0.1em] uppercase border border-[rgba(255,255,255,0.2)] px-[8px] py-[4px] rounded-[4px]">
                  {capabilities[2].tag}
                </span>
                <div className="w-[36px] h-[36px] rounded-full bg-[rgba(200,16,46,0.3)] backdrop-blur-[6px] border border-[rgba(200,16,46,0.4)] flex items-center justify-center">
                  <RotateCcw className="w-4 h-4 text-[#F0F2F5]" strokeWidth={1.5} />
                </div>
              </div>
              <div>
                <h3 className="font-['Barlow_Condensed'] text-[22px] font-[700] tracking-[-0.02em] text-[#F0F2F5]/90 leading-[1.1] mb-[6px]">
                  {capabilities[2].title}
                </h3>
                <p className="font-['Inter'] text-[13px] text-[#F0F2F5]/75 leading-[1.5] line-clamp-2">
                  {capabilities[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Precision Turning — spans 4 cols */}
          <div
            className="lg:col-span-4 relative overflow-hidden rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] group cursor-pointer min-h-[180px]"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={capabilities[3].image}
              alt={capabilities[3].title}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-[rgba(28,35,49,0.55)] group-hover:bg-[rgba(28,35,49,0.45)] transition-all duration-[300ms]"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[rgba(28,35,49,0.9)] to-transparent"></div>

            <div className="absolute inset-0 flex flex-col justify-between p-[24px]">
              <div className="w-[36px] h-[36px] rounded-full bg-[rgba(232,119,34,0.35)] backdrop-blur-[6px] border border-[rgba(232,119,34,0.5)] flex items-center justify-center">
                <Layers className="w-4 h-4 text-[#F0F2F5]" strokeWidth={1.5} />
              </div>
              <div>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#E87722] tracking-[0.12em] uppercase mb-[4px] block">
                  {capabilities[3].tag}
                </span>
                <h3 className="font-['Barlow_Condensed'] text-[20px] font-[700] tracking-[-0.02em] text-[#F0F2F5]/90 leading-[1.1] mb-[4px]">
                  {capabilities[3].title}
                </h3>
                <p className="font-['Inter'] text-[12px] text-[#F0F2F5]/70 leading-[1.5] line-clamp-2">
                  {capabilities[3].description}
                </p>
              </div>
            </div>
          </div>

          {/* Fast Quotes — spans 8 cols, flat card with bg */}
          <div
            className="lg:col-span-8 relative overflow-hidden rounded-[12px] bg-[#1C2331] shadow-[0_4px_16px_rgba(0,0,0,0.12)] group cursor-pointer min-h-[180px] border border-[rgba(255,255,255,0.06)]"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={capabilities[4].image}
              alt={capabilities[4].title}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
            />
            {/* Red glow accent */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[rgba(200,16,46,0.12)] blur-[80px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-[rgba(232,119,34,0.08)] blur-[60px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-[20px] p-[32px] h-full">
              <div className="flex items-start gap-[16px]">
                <div className="w-[48px] h-[48px] rounded-[8px] bg-[rgba(200,16,46,0.2)] border border-[rgba(200,16,46,0.35)] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#C8102E]" strokeWidth={1.5} />
                </div>
                <div>
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#E87722] tracking-[0.12em] uppercase mb-[6px] block">
                    {capabilities[4].tag}
                  </span>
                  <h3 className="font-['Barlow_Condensed'] text-[24px] font-[700] tracking-[-0.02em] text-[#F0F2F5]/90 leading-[1.1] mb-[6px]">
                    {capabilities[4].title}
                  </h3>
                  <p className="font-['Inter'] text-[14px] text-[#6B7280] leading-[1.6] max-w-[420px]">
                    {capabilities[4].description}
                  </p>
                </div>
              </div>
              <a
                href="https://marvelspeed.com/contact-us"
                className="inline-flex items-center gap-[8px] bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-[700] text-[14px] px-[28px] py-[12px] rounded-[4px] hover:bg-[#A50D25] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2331] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap flex-shrink-0 shadow-[0_0_40px_rgba(200,16,46,0.22)]"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom trust bar */}
        <div className="mt-[48px] flex flex-wrap items-center justify-center gap-[32px] md:gap-[48px] py-[24px] border-t border-[#D1D5DB]">
          {[
            { label: 'Same-Day Quotes', icon: Zap },
            { label: 'Tight Tolerances', icon: Settings },
            { label: 'Pick-Up & Delivery', icon: Clock },
            { label: '1st Order Free', icon: Layers },
          ].map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-[8px]">
              <Icon className="w-4 h-4 text-[#C8102E]" strokeWidth={1.5} />
              <span className="font-['Inter'] font-medium text-[13px] text-[#6B7280] tracking-[0.02em]">{label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default CapabilitiesSection;