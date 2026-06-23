import { ArrowRight, Zap, Settings, Layers } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: 'Low Volume & Rapid Response',
      description:
        'Our facility is tailored for fast set-up and rapid response times, ideal for low volume quantities, prototypes, and rebuilding worn components. We keep your facility running without the wait.',
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg',
      href: 'https://marvelspeed.com/services_management/low-volume-rapid-response/',
      featured: true,
      tag: 'Most Requested',
    },
    {
      id: 2,
      title: 'CNC Boring',
      description:
        'Our various CNC boring mills offer the ability to deliver high tolerance inside bearing and other critical dimensions with repeatable accuracy.',
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg',
      href: 'https://marvelspeed.com/services_management/cnc-boring/',
      featured: false,
      tag: 'High Precision',
    },
    {
      id: 3,
      title: 'Vertical Turret Lathes',
      description:
        'Our various vertical turret lathes allow for machining inside and outside seats at varying diameters and tolerances for critical industrial applications.',
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg',
      href: 'https://marvelspeed.com/services_management/vertical-turret-lathes/',
      featured: false,
      tag: 'Heavy Duty',
    },
    {
      id: 4,
      title: 'Services For Industries',
      description:
        'From fast quotes and online drawing submission to fast pick-up and delivery — we serve industrial facilities across Chicago and surrounding areas.',
      image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg',
      href: 'https://marvelspeed.com/contact-us',
      featured: false,
      tag: 'Full Service',
    },
    {
      id: 5,
      title: '1st Order Free',
      description:
        'We are open for business. New customers get their first order free — experience Superhero speed and precision with zero risk.',
      image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide3.jpg',
      href: 'https://marvelspeed.com/contact-us',
      featured: false,
      tag: 'New Customers',
      accent: true,
    },
  ];

  return (
    <section className="py-[80px] bg-[#F4F5F7]">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[56px]">
          <div className="flex items-center gap-[10px] mb-[12px]">
            <span className="inline-block w-[36px] h-[3px] bg-[#C8102E] rounded-full"></span>
            <span className="font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C8102E]">
              Our Services
            </span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#1C2331] leading-[1.1] max-w-[520px]">
            High Accuracy Precision Machining Services
          </h2>
          <p className="mt-[14px] font-['Inter'] font-normal text-[15px] text-[#6B7280] max-w-[480px] leading-[1.65]">
            A powerful partner you can trust — from rapid prototypes to full production runs, we keep your facility running.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-rows-auto gap-[20px]">

          {/* Featured Card — spans 7 cols, 2 rows */}
          <div className="lg:col-span-7 lg:row-span-2 group relative bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px]">
            <div className="relative h-[280px] md:h-[340px] overflow-hidden">
              <img
                src={services[0].image}
                alt={services[0].title}
                className="w-full h-full object-cover transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-[rgba(28,35,49,0.45)]"></div>
              <div className="absolute top-[16px] left-[16px]">
                <span className="inline-flex items-center gap-[6px] bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-medium text-[11px] uppercase tracking-[0.1em] px-[10px] py-[5px] rounded-[4px]">
                  <Zap className="w-[10px] h-[10px]" strokeWidth={2} />
                  {services[0].tag}
                </span>
              </div>
            </div>
            <div className="p-[32px]">
              <h3 className="font-['Barlow_Condensed'] text-[24px] font-[600] tracking-[-0.02em] text-[#1C2331] mb-[12px] leading-[1.15]">
                {services[0].title}
              </h3>
              <p className="font-['Inter'] font-normal text-[14px] text-[#6B7280] leading-[1.7] mb-[24px]">
                {services[0].description}
              </p>
              <a
                href={services[0].href}
                className="inline-flex items-center gap-[8px] bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-semibold text-[14px] py-[12px] px-[28px] rounded-[4px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#A50D25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
              >
                Read More
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Card 2 — CNC Boring, spans 5 cols */}
          <div className="lg:col-span-5 group relative bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px]">
            <div className="relative h-[180px] overflow-hidden">
              <img
                src={services[1].image}
                alt={services[1].title}
                className="w-full h-full object-cover transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-[rgba(28,35,49,0.35)]"></div>
              <div className="absolute top-[12px] left-[12px]">
                <span className="inline-block bg-[rgba(28,35,49,0.75)] text-[#F0F2F5]/90 font-['Inter'] font-medium text-[10px] uppercase tracking-[0.1em] px-[8px] py-[4px] rounded-[4px]">
                  {services[1].tag}
                </span>
              </div>
            </div>
            <div className="p-[24px]">
              <h3 className="font-['Barlow_Condensed'] text-[20px] font-[600] tracking-[-0.02em] text-[#1C2331] mb-[8px] leading-[1.2]">
                {services[1].title}
              </h3>
              <p className="font-['Inter'] font-normal text-[13px] text-[#6B7280] leading-[1.65] mb-[16px]">
                {services[1].description}
              </p>
              <a
                href={services[1].href}
                className="inline-flex items-center gap-[6px] text-[#C8102E] font-['Inter'] font-semibold text-[13px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:gap-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-1 rounded-[2px]"
              >
                Read More
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Card 3 — Vertical Turret Lathes, spans 5 cols */}
          <div className="lg:col-span-5 group relative bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px]">
            <div className="relative h-[180px] overflow-hidden">
              <img
                src={services[2].image}
                alt={services[2].title}
                className="w-full h-full object-cover transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-[rgba(28,35,49,0.35)]"></div>
              <div className="absolute top-[12px] left-[12px]">
                <span className="inline-block bg-[rgba(28,35,49,0.75)] text-[#F0F2F5]/90 font-['Inter'] font-medium text-[10px] uppercase tracking-[0.1em] px-[8px] py-[4px] rounded-[4px]">
                  {services[2].tag}
                </span>
              </div>
            </div>
            <div className="p-[24px]">
              <h3 className="font-['Barlow_Condensed'] text-[20px] font-[600] tracking-[-0.02em] text-[#1C2331] mb-[8px] leading-[1.2]">
                {services[2].title}
              </h3>
              <p className="font-['Inter'] font-normal text-[13px] text-[#6B7280] leading-[1.65] mb-[16px]">
                {services[2].description}
              </p>
              <a
                href={services[2].href}
                className="inline-flex items-center gap-[6px] text-[#C8102E] font-['Inter'] font-semibold text-[13px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:gap-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-1 rounded-[2px]"
              >
                Read More
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Card 4 — Services For Industries, spans 6 cols */}
          <div className="lg:col-span-6 group relative bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px] flex flex-col md:flex-row">
            <div className="relative w-full md:w-[200px] flex-shrink-0 h-[180px] md:h-auto overflow-hidden">
              <img
                src={services[3].image}
                alt={services[3].title}
                className="w-full h-full object-cover transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-[rgba(28,35,49,0.40)]"></div>
            </div>
            <div className="p-[24px] flex flex-col justify-between">
              <div>
                <span className="inline-block bg-[#F4F5F7] text-[#6B7280] font-['Inter'] font-medium text-[10px] uppercase tracking-[0.1em] px-[8px] py-[4px] rounded-[4px] mb-[10px]">
                  {services[3].tag}
                </span>
                <h3 className="font-['Barlow_Condensed'] text-[20px] font-[600] tracking-[-0.02em] text-[#1C2331] mb-[8px] leading-[1.2]">
                  {services[3].title}
                </h3>
                <p className="font-['Inter'] font-normal text-[13px] text-[#6B7280] leading-[1.65] mb-[16px]">
                  {services[3].description}
                </p>
              </div>
              <a
                href={services[3].href}
                className="inline-flex items-center gap-[6px] text-[#C8102E] font-['Inter'] font-semibold text-[13px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:gap-[10px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-1 rounded-[2px] self-start"
              >
                Learn More
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Card 5 — 1st Order Free (accent), spans 6 cols */}
          <div className="lg:col-span-6 group relative rounded-[8px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px]">
            <div className="absolute inset-0">
              <img
                src={services[4].image}
                alt={services[4].title}
                className="w-full h-full object-cover transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-[rgba(28,35,49,0.82)]"></div>
            </div>
            <div className="relative z-10 p-[32px] flex flex-col justify-between min-h-[220px]">
              <div>
                <span className="inline-flex items-center gap-[6px] bg-[#E87722] text-[#FFFFFF] font-['Inter'] font-[700] text-[11px] uppercase tracking-[0.12em] px-[10px] py-[5px] rounded-[4px] mb-[16px]">
                  <Zap className="w-[10px] h-[10px]" strokeWidth={2} />
                  {services[4].tag}
                </span>
                <h3 className="font-['Barlow_Condensed'] text-[28px] font-[700] tracking-[-0.02em] text-[#F0F2F5]/90 mb-[10px] leading-[1.1]">
                  {services[4].title}
                </h3>
                <p className="font-['Inter'] font-normal text-[13px] text-[#F0F2F5]/90 leading-[1.65] mb-[20px] max-w-[340px]">
                  {services[4].description}
                </p>
              </div>
              <a
                href={services[4].href}
                className="inline-flex items-center gap-[8px] bg-[#E87722] text-[#FFFFFF] font-['Inter'] font-[700] text-[14px] py-[12px] px-[28px] rounded-[4px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87722] focus-visible:ring-offset-2 self-start"
              >
                Claim Free Order
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-[48px] flex flex-col sm:flex-row items-center justify-between gap-[20px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] px-[32px] py-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.10)]">
          <div>
            <p className="font-['Barlow_Condensed'] text-[18px] font-[600] text-[#1C2331] tracking-[-0.01em]">
              Need a rapid-response quote?
            </p>
            <p className="font-['Inter'] font-normal text-[13px] text-[#6B7280] mt-[2px]">
              Call <a href="tel:6303500075" className="text-[#C8102E] font-medium hover:underline">630 350-0075</a> or email <a href="mailto:orders@marvel-speed.com" className="text-[#C8102E] font-medium hover:underline">orders@marvel-speed.com</a>
            </p>
          </div>
          <a
            href="https://marvelspeed.com/contact-us"
            className="inline-flex items-center gap-[8px] bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-semibold text-[14px] py-[12px] px-[28px] rounded-[4px] whitespace-nowrap transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#A50D25] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>

      </div>
    </section>
  );
}