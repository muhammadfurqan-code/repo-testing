import { useState } from 'react';
import {
  Factory,
  Zap,
  Truck,
  FlaskConical,
  Wrench,
  Building2,
  Cog,
  Shield,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

const industries = [
  {
    icon: Factory,
    name: 'Heavy Manufacturing',
    desc: 'High-tolerance parts for production lines and assembly operations.',
    image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg',
    span: 'col-span-2 row-span-2',
    featured: true,
  },
  {
    icon: Zap,
    name: 'Power Generation',
    desc: 'Critical components for turbines, generators, and energy infrastructure.',
    image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg',
    span: 'col-span-1 row-span-1',
    featured: false,
  },
  {
    icon: Truck,
    name: 'Transportation & Fleet',
    desc: 'Rapid-response machining to keep vehicles and fleets operational.',
    image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide3.jpg',
    span: 'col-span-1 row-span-1',
    featured: false,
  },
  {
    icon: FlaskConical,
    name: 'Chemical & Petrochemical',
    desc: 'Precision parts built to withstand demanding process environments.',
    image: 'https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg',
    span: 'col-span-1 row-span-1',
    featured: false,
  },
  {
    icon: Wrench,
    name: 'Maintenance & Repair',
    desc: 'Same-day and next-day turnaround for facility maintenance teams.',
    image: 'https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg',
    span: 'col-span-1 row-span-1',
    featured: false,
  },
  {
    icon: Building2,
    name: 'Food & Beverage',
    desc: 'Sanitary-grade machined components meeting strict facility standards.',
    image: 'https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg',
    span: 'col-span-1 row-span-1',
    featured: false,
  },
  {
    icon: Cog,
    name: 'Automation & Robotics',
    desc: 'Tight-tolerance parts for automated systems and robotic assemblies.',
    image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg',
    span: 'col-span-1 row-span-1',
    featured: false,
  },
  {
    icon: Shield,
    name: 'Defense & Aerospace',
    desc: 'Exacting standards for mission-critical defense and aerospace components.',
    image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg',
    span: 'col-span-1 row-span-1',
    featured: false,
  },
];

const pills = [
  'Steel Mills',
  'Plastics & Rubber',
  'Mining & Extraction',
  'HVAC & Utilities',
  'Printing & Packaging',
  'Water Treatment',
  'Construction Equipment',
  'OEM Suppliers',
];

export default function IndustriesServed() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const featured = industries[0];
  const secondary = industries.slice(1, 3);
  const tertiary = industries.slice(3);

  return (
    <section className="py-[80px] bg-[#F4F5F7]">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[56px] flex flex-col md:flex-row md:items-end md:justify-between gap-[24px]">
          <div>
            <div className="flex items-center gap-[10px] mb-[12px]">
              <span className="inline-block w-[36px] h-[3px] bg-[#C8102E] rounded-full"></span>
              <span className="font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C8102E]">
                Industries Served
              </span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-[clamp(32px,4vw,52px)] font-[800] tracking-[-0.03em] text-[#1C2331] leading-[1.05]">
              Services For<br />
              <span className="text-[#C8102E]">Every Industry</span>
            </h2>
            <p className="mt-[14px] font-['Inter'] font-normal text-[16px] text-[#6B7280] max-w-[480px] leading-[1.6]">
              From fast quotes and online drawing submission to rapid pick-up and delivery — Marvel Machining keeps your facility running.
            </p>
          </div>
          <a
            href="tel:6303500075"
            className="inline-flex items-center gap-[8px] bg-[#C8102E] text-[#FFFFFF] py-[12px] px-[28px] rounded-[4px] font-['Inter'] font-[700] text-[15px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:bg-[#A50D25] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 self-start md:self-auto whitespace-nowrap"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>

        {/* Bento Grid — asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[16px]">

          {/* Featured Card — large */}
          <div
            className="relative overflow-hidden rounded-[12px] md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2 min-h-[340px] md:min-h-[420px] cursor-pointer group shadow-[0_12px_40px_rgba(0,0,0,0.16)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img
              src={featured.image}
              alt={featured.name}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[rgba(28,35,49,0.62)]"></div>
            {/* Red accent bar */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-[#C8102E]"></div>
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-[32px]">
              <div className="inline-flex items-center justify-center w-[48px] h-[48px] rounded-[8px] bg-[#C8102E] mb-[16px] shadow-[0_0_40px_rgba(200,16,46,0.22)]">
                <featured.icon className="w-6 h-6 text-[#FFFFFF]" strokeWidth={1.5} />
              </div>
              <h3 className="font-['Barlow_Condensed'] text-[28px] font-[800] tracking-[-0.02em] text-[#F0F2F5]/90 leading-[1.1] mb-[8px]">
                {featured.name}
              </h3>
              <p className="font-['Inter'] text-[14px] font-normal text-[#F0F2F5]/75 leading-[1.55] mb-[20px] max-w-[320px]">
                {featured.desc}
              </p>
              <span className="inline-flex items-center gap-[6px] text-[#E87722] font-['Inter'] font-[700] text-[13px] uppercase tracking-[0.08em] group-hover:gap-[10px] transition-all duration-[200ms]">
                Learn More <ChevronRight className="w-4 h-4" strokeWidth={2} />
              </span>
            </div>
          </div>

          {/* Secondary Cards */}
          {secondary.map((industry, idx) => {
            const Icon = industry.icon;
            const globalIdx = idx + 1;
            return (
              <div
                key={industry.name}
                className="relative overflow-hidden rounded-[12px] min-h-[200px] cursor-pointer group shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px]"
                onMouseEnter={() => setHoveredIndex(globalIdx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-[400ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[rgba(28,35,49,0.58)]"></div>
                <div className="absolute top-0 left-0 w-full h-[3px] bg-[#C8102E]"></div>
                <div className="absolute inset-0 flex flex-col justify-end p-[24px]">
                  <div className="inline-flex items-center justify-center w-[38px] h-[38px] rounded-[6px] bg-[#C8102E] mb-[10px]">
                    <Icon className="w-5 h-5 text-[#FFFFFF]" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] text-[20px] font-[800] tracking-[-0.02em] text-[#F0F2F5]/90 leading-[1.15] mb-[4px]">
                    {industry.name}
                  </h3>
                  <p className="font-['Inter'] text-[12px] text-[#F0F2F5]/70 leading-[1.5]">
                    {industry.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Tertiary Cards — flat surface style */}
          {tertiary.map((industry, idx) => {
            const Icon = industry.icon;
            const globalIdx = idx + 3;
            return (
              <div
                key={industry.name}
                className="bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] p-[24px] cursor-pointer group shadow-[0_1px_3px_rgba(0,0,0,0.10)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:border-[#C8102E] hover:-translate-y-[2px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] flex flex-col gap-[12px]"
                onMouseEnter={() => setHoveredIndex(globalIdx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="inline-flex items-center justify-center w-[42px] h-[42px] rounded-[8px] bg-[#F4F5F7] group-hover:bg-[#C8102E] transition-all duration-[200ms]">
                  <Icon
                    className="w-5 h-5 text-[#C8102E] group-hover:text-[#FFFFFF] transition-all duration-[200ms]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-[18px] font-[800] tracking-[-0.01em] text-[#1C2331] leading-[1.2] mb-[4px]">
                    {industry.name}
                  </h3>
                  <p className="font-['Inter'] text-[13px] font-normal text-[#6B7280] leading-[1.55]">
                    {industry.desc}
                  </p>
                </div>
                <span className="inline-flex items-center gap-[4px] text-[#C8102E] font-['Inter'] font-[600] text-[12px] uppercase tracking-[0.08em] mt-auto group-hover:gap-[8px] transition-all duration-[200ms]">
                  Details <ChevronRight className="w-3 h-3" strokeWidth={2.5} />
                </span>
              </div>
            );
          })}

        </div>

        {/* Pill Strip */}
        <div className="mt-[48px]">
          <p className="font-['JetBrains_Mono'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#6B7280] mb-[16px]">
            Also serving
          </p>
          <div className="flex flex-wrap gap-[10px]">
            {pills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center font-['Inter'] text-[13px] font-medium text-[#1C2331] bg-[#FFFFFF] border border-[#D1D5DB] rounded-full px-[16px] py-[7px] shadow-[0_1px_3px_rgba(0,0,0,0.10)] hover:border-[#C8102E] hover:text-[#C8102E] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] cursor-pointer transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-[56px] relative overflow-hidden rounded-[12px] bg-[#1C2331] p-[40px] flex flex-col md:flex-row md:items-center md:justify-between gap-[24px] shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-[#C8102E]"></div>
          <div className="absolute -right-[60px] -top-[60px] w-[220px] h-[220px] rounded-full bg-[#C8102E] opacity-[0.06] pointer-events-none"></div>
          <div>
            <p className="font-['JetBrains_Mono'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#E87722] mb-[8px]">
              New customers
            </p>
            <h3 className="font-['Barlow_Condensed'] text-[clamp(22px,3vw,34px)] font-[800] tracking-[-0.02em] text-[#F0F2F5]/90 leading-[1.1]">
              1st Order Is Free — We're Open For Business
            </h3>
            <p className="font-['Inter'] text-[14px] font-normal text-[#F0F2F5]/70 mt-[8px] max-w-[500px]">
              Fast quotes, online drawing submission, and rapid pick-up and delivery across Chicago and surrounding areas.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-[12px] shrink-0">
            <a
              href="tel:6303500075"
              className="inline-flex items-center justify-center gap-[8px] bg-[#E87722] text-[#FFFFFF] py-[12px] px-[28px] rounded-[4px] font-['Inter'] font-[700] text-[15px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-[#E87722] focus-visible:ring-offset-2 whitespace-nowrap"
            >
              Call 630 350-0075
            </a>
            <a
              href="mailto:orders@marvel-speed.com"
              className="inline-flex items-center justify-center gap-[8px] bg-transparent text-[#C8102E] border border-[#C8102E] py-[12px] px-[28px] rounded-[4px] font-['Inter'] font-[600] text-[15px] hover:bg-[#C8102E] hover:text-[#FFFFFF] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 whitespace-nowrap"
            >
              Email Us
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}