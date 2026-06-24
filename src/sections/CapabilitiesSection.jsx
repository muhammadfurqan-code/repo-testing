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
      description: 'High-tolerance inside bearing and other critical dimensions delivered with precision on our CNC boring mills.',
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg',
      icon: Settings,
      tag: 'High Precision',
      featured: false,
    },
    {
      id: 2,
      title: 'Vertical Turret Lathes',
      description: 'Machine inside and outside seats at various diameters with our fleet of vertical turret lathes.',
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg',
      icon: RotateCcw,
      tag: 'Heavy Duty',
      featured: false,
    },
    {
      id: 3,
      title: 'Prototype & Rebuild',
      description: 'From one-off prototypes to full part rebuilds, we handle the jobs other shops turn away.',
      image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg',
      icon: Layers,
      tag: 'Versatile',
      featured: false,
    },
    {
      id: 4,
      title: 'Fast Quote & Delivery',
      description: 'Online drawing submission, rapid quoting, and pick-up or delivery across the Chicago metro area.',
      image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg',
      icon: Clock,
      tag: 'Chicago Metro',
      featured: false,
    },
  ];

  return (
    <section className="py-[80px] bg-[#F4F5F7]">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[56px]">
          <div className="flex items-center gap-[10px] mb-[16px]">
            <span className="inline-block w-[36px] h-[3px] bg-[#C8102E] rounded-full"></span>
            <span className="font-['JetBrains_Mono'] text-[13px] font-medium text-[#C8102E] uppercase tracking-[0.12em]">
              Our Services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[24px]">
            <div>
              <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#1C2530] leading-[1.1] uppercase">
                High Accuracy<br />
                <span className="text-[#C8102E]">Precision Machining</span> Services
              </h2>
              <p className="mt-[12px] font-['Inter'] font-normal text-[#6B7280] text-[16px] max-w-[480px] leading-[1.6]">
                From fast quotes and online drawing submission to rapid pick-up and delivery — we keep your facility running with superhero service.
              </p>
            </div>
            <a
              href="https://marvelspeed.com/contact-us"
              className="inline-flex items-center gap-[8px] bg-[#F97316] text-[#FFFFFF] font-['Inter'] font-[700] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 hover:shadow-[0_4px_16px_rgba(249,115,22,0.35)] focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 whitespace-nowrap self-start md:self-auto"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-rows-auto gap-[16px]">

          {/* Featured Card — spans 7 cols, 2 rows */}
          <div
            className="lg:col-span-7 lg:row-span-2 relative overflow-hidden rounded-[10px] shadow-[0_12px_40px_rgba(0,0,0,0.16)] group cursor-pointer min-h-[420px]"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={capabilities[0].image}
              alt={capabilities[0].title}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.88)] via-[rgba(28,37,48,0.45)] to-transparent"></div>
            {/* Red accent glow on hover */}
            <div className={`absolute inset-0 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${hoveredCard === 0 ? 'shadow-[inset_0_0_40px_rgba(200,16,46,0.22)]' : ''}`}></div>

            <div className="absolute inset-0 flex flex-col justify-between p-[32px]">
              {/* Top badges */}
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-[6px] bg-[#C8102E] text-[#FFFFFF] font-['JetBrains_Mono'] text-[11px] font-medium uppercase tracking-[0.1em] px-[10px] py-[5px] rounded-[4px]">
                  <Zap className="w-[12px] h-[12px]" strokeWidth={2} />
                  {capabilities[0].tag}
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#F0F2F4]/60 uppercase tracking-[0.1em]">01</span>
              </div>

              {/* Bottom content */}
              <div>
                <h3 className="font-['Barlow_Condensed'] text-[32px] font-[800] tracking-[-0.03em] text-[#F0F2F4]/90 uppercase leading-[1.1] mb-[12px]">
                  {capabilities[0].title}
                </h3>
                <p className="font-['Inter'] font-normal text-[#F0F2F4]/75 text-[15px] leading-[1.6] mb-[24px] max-w-[420px]">
                  {capabilities[0].description}
                </p>
                <a
                  href="https://marvelspeed.com/services_management/low-volume-rapid-response/"
                  className="inline-flex items-center gap-[8px] bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-[700] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#A50D26] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 — CNC Boring, spans 5 cols */}
          <div
            className="lg:col-span-5 relative overflow-hidden rounded-[10px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] group cursor-pointer min-h-[200px]"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={capabilities[1].image}
              alt={capabilities[1].title}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04] saturate-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.82)] via-[rgba(28,37,48,0.35)] to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-[24px]">
              <div className="flex items-start justify-between">
                <span className="inline-block bg-[rgba(200,16,46,0.15)] border border-[#C8102E]/40 text-[#C8102E] font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.1em] px-[8px] py-[4px] rounded-[4px]">
                  {capabilities[1].tag}
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#F0F2F4]/50 uppercase tracking-[0.1em]">02</span>
              </div>
              <div>
                <h3 className="font-['Barlow_Condensed'] text-[24px] font-[600] tracking-[-0.03em] text-[#F0F2F4]/90 uppercase leading-[1.1] mb-[6px]">
                  {capabilities[1].title}
                </h3>
                <p className="font-['Inter'] font-normal text-[#F0F2F4]/70 text-[13px] leading-[1.5]">
                  {capabilities[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 — Vertical Turret Lathes, spans 5 cols */}
          <div
            className="lg:col-span-5 relative overflow-hidden rounded-[10px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] group cursor-pointer min-h-[200px]"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={capabilities[2].image}
              alt={capabilities[2].title}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04] saturate-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.82)] via-[rgba(28,37,48,0.35)] to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-[24px]">
              <div className="flex items-start justify-between">
                <span className="inline-block bg-[rgba(200,16,46,0.15)] border border-[#C8102E]/40 text-[#C8102E] font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.1em] px-[8px] py-[4px] rounded-[4px]">
                  {capabilities[2].tag}
                </span>
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#F0F2F4]/50 uppercase tracking-[0.1em]">03</span>
              </div>
              <div>
                <h3 className="font-['Barlow_Condensed'] text-[24px] font-[600] tracking-[-0.03em] text-[#F0F2F4]/90 uppercase leading-[1.1] mb-[6px]">
                  {capabilities[2].title}
                </h3>
                <p className="font-['Inter'] font-normal text-[#F0F2F4]/70 text-[13px] leading-[1.5]">
                  {capabilities[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 — Prototype & Rebuild, spans 4 cols */}
          <div
            className="lg:col-span-4 bg-[#FFFFFF] border border-[#D1D5DB] rounded-[10px] p-[32px] shadow-[0_1px_3px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px] group cursor-pointer"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start justify-between mb-[20px]">
              <div className="w-[48px] h-[48px] bg-[#F4F5F7] rounded-[8px] flex items-center justify-center group-hover:bg-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <Layers className="w-5 h-5 text-[#C8102E] group-hover:text-[#FFFFFF] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]" strokeWidth={1.5} />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#6B7280] uppercase tracking-[0.1em]">04</span>
            </div>
            <span className="inline-block bg-[#F4F5F7] text-[#6B7280] font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.1em] px-[8px] py-[4px] rounded-[4px] mb-[12px]">
              {capabilities[3].tag}
            </span>
            <h3 className="font-['Barlow_Condensed'] text-[22px] font-[700] tracking-[-0.03em] text-[#1C2530] uppercase leading-[1.1] mb-[10px]">
              {capabilities[3].title}
            </h3>
            <p className="font-['Inter'] font-normal text-[#6B7280] text-[14px] leading-[1.6]">
              {capabilities[3].description}
            </p>
          </div>

          {/* Card 5 — Fast Quote & Delivery, spans 4 cols */}
          <div
            className="lg:col-span-4 bg-[#1C2530] border border-[#D1D5DB]/10 rounded-[10px] p-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px] group cursor-pointer"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start justify-between mb-[20px]">
              <div className="w-[48px] h-[48px] bg-[#C8102E]/15 rounded-[8px] flex items-center justify-center group-hover:bg-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <Clock className="w-5 h-5 text-[#C8102E] group-hover:text-[#FFFFFF] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]" strokeWidth={1.5} />
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#F0F2F4]/40 uppercase tracking-[0.1em]">05</span>
            </div>
            <span className="inline-block bg-[#C8102E]/20 text-[#C8102E] font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.1em] px-[8px] py-[4px] rounded-[4px] mb-[12px]">
              {capabilities[4].tag}
            </span>
            <h3 className="font-['Barlow_Condensed'] text-[22px] font-[700] tracking-[-0.03em] text-[#F0F2F4]/90 uppercase leading-[1.1] mb-[10px]">
              {capabilities[4].title}
            </h3>
            <p className="font-['Inter'] font-normal text-[#F0F2F4]/60 text-[14px] leading-[1.6]">
              {capabilities[4].description}
            </p>
          </div>

          {/* CTA Tile — spans 4 cols */}
          <div className="lg:col-span-4 bg-[#C8102E] rounded-[10px] p-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.16)] flex flex-col justify-between min-h-[180px] relative overflow-hidden group">
            {/* Decorative background element */}
            <div className="absolute -right-[20px] -bottom-[20px] w-[120px] h-[120px] rounded-full bg-[#A50D26] opacity-50"></div>
            <div className="absolute -right-[40px] -top-[30px] w-[100px] h-[100px] rounded-full bg-[#A50D26] opacity-30"></div>

            <div className="relative z-10">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#FFFFFF]/60 uppercase tracking-[0.12em] block mb-[12px]">
                New Customers
              </span>
              <h3 className="font-['Barlow_Condensed'] text-[28px] font-[800] tracking-[-0.03em] text-[#FFFFFF] uppercase leading-[1.1] mb-[8px]">
                1st Order Is Free
              </h3>
              <p className="font-['Inter'] font-normal text-[#FFFFFF]/80 text-[13px] leading-[1.5]">
                We're open for business. New customers get their first order free.
              </p>
            </div>
            <a
              href="https://marvelspeed.com/contact-us"
              className="relative z-10 inline-flex items-center gap-[8px] bg-[#FFFFFF] text-[#C8102E] font-['Inter'] font-[700] py-[10px] px-[20px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#F4F5F7] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] focus-visible:ring-2 focus-visible:ring-[#FFFFFF] focus-visible:ring-offset-2 self-start mt-[20px] text-[14px]"
            >
              Book Now
              <ArrowRight className="w-[16px] h-[16px]" strokeWidth={2} />
            </a>
          </div>

        </div>

        {/* Bottom trust bar */}
        <div className="mt-[48px] pt-[32px] border-t border-[#D1D5DB] flex flex-col sm:flex-row items-center justify-between gap-[16px]">
          <div className="flex flex-wrap items-center gap-[32px]">
            <div className="flex items-center gap-[8px]">
              <Zap className="w-[16px] h-[16px] text-[#C8102E]" strokeWidth={2} />
              <span className="font-['Inter'] font-medium text-[#6B7280] text-[13px]">Rapid Turnaround</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <Settings className="w-[16px] h-[16px] text-[#C8102E]" strokeWidth={2} />
              <span className="font-['Inter'] font-medium text-[#6B7280] text-[13px]">Tight Tolerances</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <Clock className="w-[16px] h-[16px] text-[#C8102E]" strokeWidth={2} />
              <span className="font-['Inter'] font-medium text-[#6B7280] text-[13px]">Chicago Metro Delivery</span>
            </div>
          </div>
          <a
            href="tel:6303500075"
            className="font-['JetBrains_Mono'] text-[14px] font-medium text-[#1C2530] hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            630 350-0075
          </a>
        </div>

      </div>
    </section>
  );
}