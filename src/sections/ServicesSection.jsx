import { useState } from 'react';
import { ArrowRight, Zap, Settings, Layers } from 'lucide-react';

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 0,
      title: 'Low Volume & Rapid Response',
      description:
        'Our facility is tailored for fast set-up and rapid response times, ideal for low volume quantities, prototypes, and rebuilding worn components. When your line is down, we move fast.',
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg',
      tag: 'Most Requested',
      featured: true,
    },
    {
      id: 1,
      title: 'CNC Boring',
      description:
        'Our various CNC boring mills deliver high tolerance inside bearing and other critical dimensions with repeatable accuracy your engineers can rely on.',
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg',
      tag: 'High Precision',
      featured: false,
    },
    {
      id: 2,
      title: 'Vertical Turret Lathes',
      description:
        'Our vertical turret lathes allow for machining inside and outside seats at various diameters — built for the heavy, complex parts other shops turn away.',
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg',
      tag: 'Heavy Parts',
      featured: false,
    },
    {
      id: 3,
      title: 'CNC Milling',
      description:
        'Multi-axis CNC milling for complex geometries, tight tolerances, and production-ready parts. From single prototypes to short-run production batches.',
      image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg',
      tag: 'Multi-Axis',
      featured: false,
    },
    {
      id: 4,
      title: 'Parts Rebuilding & Repair',
      description:
        'Extend the life of critical components with precision rebuilding. We restore worn parts to OEM specs — faster and more cost-effective than full replacement.',
      image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg',
      tag: 'Cost Savings',
      featured: false,
    },
    {
      id: 5,
      title: 'Fast Quote & Delivery',
      description:
        'From online drawing submission to fast pick-up and delivery across the Chicago metro area. Get a quote fast, approve it faster, and receive your parts on time.',
      image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide3.jpg',
      tag: 'Chicago Metro',
      featured: false,
    },
  ];

  return (
    <section className="py-[80px] bg-[#F4F5F7]">
      <style>{`
        @keyframes services_subtlePulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[56px]">
          <div className="flex items-center gap-[10px] mb-[16px]">
            <span className="inline-block w-[36px] h-[3px] bg-[#C8102E] rounded-full"></span>
            <span className="font-['JetBrains_Mono'] text-[13px] font-medium tracking-[0.12em] uppercase text-[#C8102E]">
              Our Services
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[24px]">
            <div>
              <h2 className="font-['Barlow_Condensed'] text-[clamp(32px,4vw,52px)] font-[800] tracking-[-0.03em] text-[#1C2530] leading-[1.1] max-w-[560px]">
                High Accuracy Precision Machining Services
              </h2>
              <p className="font-['Inter'] font-normal text-[16px] text-[#6B7280] mt-[14px] max-w-[480px] leading-[1.65]">
                A powerful partner you can trust. From fast quotes and online drawing submission to rapid pick-up and delivery across the Chicago metro area.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="mailto:orders@marvel-speed.com"
                className="inline-flex items-center gap-[8px] bg-[#F97316] text-[#FFFFFF] font-['Inter'] font-[700] text-[15px] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 hover:shadow-[0_4px_16px_rgba(249,115,22,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] auto-rows-auto">

          {/* Featured Card — spans 2 cols, 2 rows on large */}
          <div
            className="lg:col-span-2 lg:row-span-2 relative rounded-[10px] overflow-hidden bg-[#FFFFFF] border border-[#D1D5DB] shadow-[0_12px_40px_rgba(0,0,0,0.16)] group cursor-pointer transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px]"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-[320px] lg:h-[420px] overflow-hidden">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.72)] via-[rgba(28,37,48,0.28)] to-transparent"></div>
              <div className="absolute top-[20px] left-[20px]">
                <span className="inline-block bg-[#C8102E] text-[#FFFFFF] font-['JetBrains_Mono'] text-[11px] font-medium tracking-[0.1em] uppercase px-[10px] py-[5px] rounded-[4px]">
                  {services[0].tag}
                </span>
              </div>
              <div className="absolute bottom-[24px] left-[24px] right-[24px]">
                <h3 className="font-['Barlow_Condensed'] text-[28px] font-[800] tracking-[-0.02em] text-[#F0F2F4]/90 leading-[1.15] mb-[8px]">
                  {services[0].title}
                </h3>
                <p className="font-['Inter'] text-[14px] font-normal text-[#F0F2F4]/75 leading-[1.6] max-w-[420px]">
                  {services[0].description}
                </p>
              </div>
            </div>
            <div className="p-[24px] flex items-center justify-between bg-[#FFFFFF]">
              <div className="flex items-center gap-[8px]">
                <Zap className="w-5 h-5 text-[#C8102E]" strokeWidth={1.5} />
                <span className="font-['Inter'] text-[13px] font-medium text-[#6B7280]">Rapid turnaround available</span>
              </div>
              <a
                href="mailto:orders@marvel-speed.com"
                className="inline-flex items-center gap-[6px] text-[#C8102E] font-['Inter'] font-medium text-[14px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:gap-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-1 rounded-[4px]"
              >
                Get Quote <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Card 1 — CNC Boring */}
          <div
            className="relative rounded-[10px] overflow-hidden bg-[#FFFFFF] border border-[#D1D5DB] shadow-[0_4px_16px_rgba(0,0,0,0.12)] group cursor-pointer transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px]"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-[180px] overflow-hidden">
              <img
                src={services[1].image}
                alt={services[1].title}
                className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.55)] to-transparent"></div>
              <span className="absolute top-[14px] left-[14px] bg-[#1C2530]/80 text-[#F0F2F4]/90 font-['JetBrains_Mono'] text-[10px] tracking-[0.1em] uppercase px-[8px] py-[4px] rounded-[4px] border border-[rgba(255,255,255,0.1)]">
                {services[1].tag}
              </span>
            </div>
            <div className="p-[24px]">
              <h3 className="font-['Barlow_Condensed'] text-[22px] font-[800] tracking-[-0.02em] text-[#1C2530] leading-[1.2] mb-[8px]">
                {services[1].title}
              </h3>
              <p className="font-['Inter'] text-[13px] font-normal text-[#6B7280] leading-[1.6] mb-[16px]">
                {services[1].description}
              </p>
              <a
                href="mailto:orders@marvel-speed.com"
                className="inline-flex items-center gap-[6px] text-[#C8102E] font-['Inter'] font-medium text-[13px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:gap-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-[4px]"
              >
                Learn More <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Card 2 — Vertical Turret Lathes */}
          <div
            className="relative rounded-[10px] overflow-hidden bg-[#FFFFFF] border border-[#D1D5DB] shadow-[0_4px_16px_rgba(0,0,0,0.12)] group cursor-pointer transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px]"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-[180px] overflow-hidden">
              <img
                src={services[2].image}
                alt={services[2].title}
                className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.55)] to-transparent"></div>
              <span className="absolute top-[14px] left-[14px] bg-[#1C2530]/80 text-[#F0F2F4]/90 font-['JetBrains_Mono'] text-[10px] tracking-[0.1em] uppercase px-[8px] py-[4px] rounded-[4px] border border-[rgba(255,255,255,0.1)]">
                {services[2].tag}
              </span>
            </div>
            <div className="p-[24px]">
              <h3 className="font-['Barlow_Condensed'] text-[22px] font-[800] tracking-[-0.02em] text-[#1C2530] leading-[1.2] mb-[8px]">
                {services[2].title}
              </h3>
              <p className="font-['Inter'] text-[13px] font-normal text-[#6B7280] leading-[1.6] mb-[16px]">
                {services[2].description}
              </p>
              <a
                href="mailto:orders@marvel-speed.com"
                className="inline-flex items-center gap-[6px] text-[#C8102E] font-['Inter'] font-medium text-[13px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:gap-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-[4px]"
              >
                Learn More <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Card 3 — CNC Milling — wide */}
          <div
            className="lg:col-span-2 relative rounded-[10px] overflow-hidden bg-[#1C2530] border border-[#D1D5DB] shadow-[0_4px_16px_rgba(0,0,0,0.12)] group cursor-pointer transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px] flex flex-col md:flex-row"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative md:w-[260px] flex-shrink-0 h-[200px] md:h-auto overflow-hidden">
              <img
                src={services[3].image}
                alt={services[3].title}
                className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05] opacity-80"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(28,37,48,0.7)] md:block hidden"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.7)] to-transparent md:hidden block"></div>
            </div>
            <div className="p-[32px] flex flex-col justify-center">
              <span className="inline-block mb-[12px] bg-[#C8102E] text-[#FFFFFF] font-['JetBrains_Mono'] text-[10px] tracking-[0.1em] uppercase px-[8px] py-[4px] rounded-[4px] w-fit">
                {services[3].tag}
              </span>
              <h3 className="font-['Barlow_Condensed'] text-[26px] font-[800] tracking-[-0.02em] text-[#F0F2F4]/90 leading-[1.2] mb-[10px]">
                {services[3].title}
              </h3>
              <p className="font-['Inter'] text-[14px] font-normal text-[#F0F2F4]/70 leading-[1.65] mb-[20px] max-w-[400px]">
                {services[3].description}
              </p>
              <a
                href="mailto:orders@marvel-speed.com"
                className="inline-flex items-center gap-[8px] bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-medium text-[14px] py-[10px] px-[20px] rounded-[6px] w-fit transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#A50D26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
              >
                Request Quote <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Card 4 — Parts Rebuilding */}
          <div
            className="relative rounded-[10px] overflow-hidden bg-[#FFFFFF] border border-[#D1D5DB] shadow-[0_4px_16px_rgba(0,0,0,0.12)] group cursor-pointer transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px]"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative h-[180px] overflow-hidden">
              <img
                src={services[4].image}
                alt={services[4].title}
                className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.55)] to-transparent"></div>
              <span className="absolute top-[14px] left-[14px] bg-[#F97316] text-[#FFFFFF] font-['JetBrains_Mono'] text-[10px] tracking-[0.1em] uppercase px-[8px] py-[4px] rounded-[4px]">
                {services[4].tag}
              </span>
            </div>
            <div className="p-[24px]">
              <h3 className="font-['Barlow_Condensed'] text-[22px] font-[800] tracking-[-0.02em] text-[#1C2530] leading-[1.2] mb-[8px]">
                {services[4].title}
              </h3>
              <p className="font-['Inter'] text-[13px] font-normal text-[#6B7280] leading-[1.6] mb-[16px]">
                {services[4].description}
              </p>
              <a
                href="mailto:orders@marvel-speed.com"
                className="inline-flex items-center gap-[6px] text-[#C8102E] font-['Inter'] font-medium text-[13px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:gap-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-[4px]"
              >
                Learn More <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Card 5 — Fast Quote & Delivery — accent highlight */}
          <div
            className="lg:col-span-2 relative rounded-[10px] overflow-hidden bg-[#FFFFFF] border border-[#D1D5DB] shadow-[0_4px_16px_rgba(0,0,0,0.12)] group cursor-pointer transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px] flex flex-col md:flex-row items-stretch"
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="p-[32px] flex flex-col justify-center flex-1">
              <span className="inline-block mb-[12px] bg-[#F4F5F7] text-[#6B7280] font-['JetBrains_Mono'] text-[10px] tracking-[0.1em] uppercase px-[8px] py-[4px] rounded-[4px] border border-[#D1D5DB] w-fit">
                {services[5].tag}
              </span>
              <h3 className="font-['Barlow_Condensed'] text-[26px] font-[800] tracking-[-0.02em] text-[#1C2530] leading-[1.2] mb-[10px]">
                {services[5].title}
              </h3>
              <p className="font-['Inter'] text-[14px] font-normal text-[#6B7280] leading-[1.65] mb-[20px] max-w-[400px]">
                {services[5].description}
              </p>
              <div className="flex flex-wrap gap-[12px]">
                <a
                  href="tel:6303500075"
                  className="inline-flex items-center gap-[8px] bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-medium text-[14px] py-[10px] px-[20px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#A50D26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
                >
                  Call 630 350-0075
                </a>
                <a
                  href="mailto:orders@marvel-speed.com"
                  className="inline-flex items-center gap-[8px] bg-transparent text-[#C8102E] border border-[#C8102E] font-['Inter'] font-medium text-[14px] py-[10px] px-[20px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#C8102E] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
                >
                  Email Us
                </a>
              </div>
            </div>
            <div className="relative md:w-[280px] flex-shrink-0 h-[200px] md:h-auto overflow-hidden">
              <img
                src={services[5].image}
                alt={services[5].title}
                className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05] opacity-75"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[rgba(244,245,247,0.5)] hidden md:block"></div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-[48px] rounded-[10px] bg-[#1C2530] border border-[rgba(255,255,255,0.08)] shadow-[0_12px_40px_rgba(0,0,0,0.16)] p-[32px] flex flex-col md:flex-row items-center justify-between gap-[24px]">
          <div>
            <p className="font-['JetBrains_Mono'] text-[11px] tracking-[0.14em] uppercase text-[#F97316] mb-[6px]">
              New customers
            </p>
            <h3 className="font-['Barlow_Condensed']text-[28px] font-[800] tracking-[-0.02em] text-[#F0F2F4]/90 leading-[1.2]">
              Your 1st Order Is Free — Open For Business Now
            </h3>
            <p className="font-['Inter'] text-[14px] font-normal text-[#F0F2F4]/70 mt-[6px]">
              We keep your facility running with Superhero service. Fast quotes, rapid turnaround, Chicago metro delivery.
            </p>
          </div>
          <div className="flex flex-wrap gap-[12px] flex-shrink-0">
            <a
              href="mailto:orders@marvel-speed.com"
              className="inline-flex items-center gap-[8px] bg-[#F97316] text-[#FFFFFF] font-['Inter'] font-[700] text-[15px] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 hover:shadow-[0_4px_16px_rgba(249,115,22,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530]"
            >
              Book Now <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <a
              href="tel:6303500075"
              className="inline-flex items-center gap-[8px] bg-transparent text-[#F0F2F4]/90 border border-[rgba(255,255,255,0.18)] font-['Inter'] font-medium text-[15px] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[rgba(255,255,255,0.4)] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0F2F4] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530]"
            >
              630 350-0075
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesSection;