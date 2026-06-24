import { useState } from 'react';
import { ShieldCheck, Microscope, Clock, Award, Cog, Users } from 'lucide-react';

export default function WhyMatrix() {
  const [activeIndex, setActiveIndex] = useState(null);

  const reasons = [
    {
      icon: <Microscope className="w-6 h-6" strokeWidth={1.5} />,
      label: 'Micro-Precision Molding',
      headline: 'Tolerances Measured in Microns',
      body: 'Nearly 5 decades of close-tolerance injection molding expertise — producing micro components and sub-assemblies that meet the most demanding dimensional specifications in medical, electronics, and safety applications.',
      image: 'https://www.matrixplastic.com/images/sliders/OrangePushersCompositewithPencil1.jpeg',
      span: 'col-span-2 row-span-2',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />,
      label: 'ISO-Certified Quality',
      headline: 'Quality Built Into Every Cycle',
      body: 'Rigorous in-process inspection and ISO-certified quality systems ensure every part meets specification — every run, every time.',
      image: 'https://www.matrixplastic.com/images/HomepageTiles/BS1_8207-Matrix.jpg',
      span: 'col-span-1 row-span-1',
    },
    {
      icon: <Cog className="w-6 h-6" strokeWidth={1.5} />,
      label: 'In-House Moldmaking',
      headline: 'DFM Expertise from Day One',
      body: 'Our in-house mold making and Design for Manufacturability (DFM) capabilities compress lead times and eliminate costly tooling surprises.',
      image: 'https://www.matrixplastic.com/images/SmartSlider/PagerMold.JPG',
      span: 'col-span-1 row-span-1',
    },
    {
      icon: <Award className="w-6 h-6" strokeWidth={1.5} />,
      label: 'Nearly 5 Decades of Mastery',
      headline: 'Proven Track Record',
      body: 'Trusted by global leaders in medical devices, electronics OEMs, and safety engineering — our legacy is built on programs that demand zero defects.',
      image: 'https://www.matrixplastic.com/images/sliders/JuvenileStaplercompositewithcartridgesandpushers.jpeg',
      span: 'col-span-1 row-span-1',
    },
    {
      icon: <Clock className="w-6 h-6" strokeWidth={1.5} />,
      label: 'Accelerated Validation',
      headline: 'Faster to Production',
      body: 'Integrated engineering, tooling, and molding under one roof means faster validation cycles and a smoother ramp to full production volumes.',
      image: 'https://www.matrixplastic.com/images/SmartSlider/IMG_5591-Edit.jpg',
      span: 'col-span-1 row-span-1',
    },
    {
      icon: <Users className="w-6 h-6" strokeWidth={1.5} />,
      label: 'True Engineering Partnership',
      headline: 'Your Program. Our Precision.',
      body: 'We embed with your engineering team from concept through production — providing the technical depth and collaborative rigor your critical programs require.',
      image: 'https://www.matrixplastic.com/images/sliders/OrangePushersCompositewithPencil1.jpeg',
      span: 'col-span-1 row-span-1',
    },
  ];

  return (
    <section className="py-[80px] bg-[#F5F7FA] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[-120px] right-[-80px] w-[480px] h-[480px] rounded-full bg-[#1A5FA8] opacity-[0.05] blur-[80px]" />
        <div className="absolute bottom-[-80px] left-[-60px] w-[360px] h-[360px] rounded-full bg-[#C95C0A] opacity-[0.04] blur-[60px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-[24px] relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-[56px]">
          <div className="max-w-[600px]">
            <div className="inline-flex items-center gap-2 bg-[#1A5FA8]/10 border border-[#1A5FA8]/20 rounded-full px-[14px] py-[6px] mb-5">
              <span className="w-[6px] h-[6px] rounded-full bg-[#C95C0A] animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-[11px] font-medium tracking-[0.12em] uppercase text-[#1A5FA8]">Why Matrix</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-[clamp(36px,5vw,60px)] font-[800] leading-[1.05] tracking-[-0.03em] text-[#1A5FA8] mb-4">
              Surgical Precision.<br />
              <span className="text-[#C95C0A]">Proven</span> at Every Scale.
            </h2>
            <p className="font-['Inter'] font-normal text-[17px] leading-[1.65] text-[#4A5E78] max-w-[520px]">
              From micro components measured in microns to complex sub-assemblies for the world's most critical applications — Matrix delivers the engineering depth, tooling mastery, and quality discipline your program demands.
            </p>
          </div>

          <a
            href="https://www.matrixplastic.com/contact-us/request-a-quote"
            className="inline-flex items-center gap-2 bg-[#C95C0A] text-[#FFFFFF] font-['Inter'] font-[700] text-[15px] py-[12px] px-[28px] rounded-[6px] shadow-[0_4px_16px_rgba(201,92,10,0.28)] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap self-start lg:self-auto"
          >
            Request a Quote
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto lg:grid-rows-[280px_280px] gap-[16px]">
          {reasons.map((item, i) => {
            const isHero = i === 0;
            const isActive = activeIndex === i;

            return (
              <div
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className={[
                  'relative overflow-hidden rounded-[14px] border border-[#D0D9E8] cursor-default group',
                  'transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
                  isHero
                    ? 'md:col-span-2 md:row-span-2 lg:col-span-2 lg:row-span-2'
                    : 'col-span-1 row-span-1',
                  isActive
                    ? 'shadow-[0_12px_40px_rgba(26,95,168,0.18)] -translate-y-[2px]'
                    : 'shadow-[0_4px_16px_rgba(0,0,0,0.10)]',
                ].join(' ')}
              >
                <img
                  src={item.image}
                  alt={item.headline}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                />

                <div className={[
                  'absolute inset-0',
                  isHero
                    ? 'bg-gradient-to-t from-[rgba(15,35,64,0.88)] via-[rgba(15,35,64,0.50)] to-[rgba(15,35,64,0.15)]'
                    : 'bg-gradient-to-t from-[rgba(15,35,64,0.92)] via-[rgba(15,35,64,0.60)] to-[rgba(15,35,64,0.20)]',
                ].join(' ')} />

                <div className="relative z-10 flex flex-col justify-end h-full p-[32px]">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center justify-center w-[36px] h-[36px] rounded-[8px] bg-[#1A5FA8]/80 text-[#FFFFFF] backdrop-blur-[4px] border border-[#FFFFFF]/10">
                      {item.icon}
                    </div>
                    <span className="font-['JetBrains_Mono'] text-[10px] tracking-[0.10em] uppercase text-[#FFFFFF]/60">
                      {item.label}
                    </span>
                  </div>

                  <h3 className={[
                    "font-['Barlow_Condensed'] font-[700] leading-[1.1] tracking-[-0.02em] text-[#FFFFFF]/95 mb-2",
                    isHero ? 'text-[28px] lg:text-[36px]' : 'text-[20px]',
                  ].join(' ')}>
                    {item.headline}
                  </h3>

                  <p className={[
                    "font-['Inter'] font-normal leading-[1.55] text-[#FFFFFF]/75 transition-all duration-[300ms] ease-[cubic-bezier(0.4,0,0.2,1)]",
                    isHero ? 'text-[15px] max-w-[420px]' : 'text-[13px]',
                    isActive || isHero ? 'opacity-100 max-h-[120px]' : 'opacity-0 max-h-0 overflow-hidden md:opacity-100 md:max-h-[120px]',
                  ].join(' ')}>
                    {item.body}
                  </p>

                  {isHero && (
                    <div className="mt-5 flex items-center gap-3">
                      <div className="h-[2px] w-[32px] bg-[#C95C0A] rounded-full" />
                      <span className="font-['Inter'] text-[12px] font-medium text-[#FFFFFF]/60 tracking-[0.06em] uppercase">
                        Nearly 5 Decades of Precision
                      </span>
                    </div>
                  )}
                </div>

                <div className={[
                  'absolute top-[16px] right-[16px] w-[8px] h-[8px] rounded-full bg-[#C95C0A] transition-all duration-[200ms]',
                  isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50',
                ].join(' ')} />
              </div>
            );
          })}
        </div>

        <div className="mt-[56px] rounded-[14px] bg-[#1A5FA8] border border-[#1A5FA8] shadow-[0_12px_40px_rgba(26,95,168,0.22)] overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 px-[40px] py-[36px]">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
              <div className="flex-shrink-0 w-[56px] h-[56px] rounded-[12px] bg-[#FFFFFF]/10 border border-[#FFFFFF]/15 flex items-center justify-center">
                <ShieldCheck className="w-7 h-7 text-[#FFFFFF]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-['Barlow_Condensed'] font-[700] text-[22px] text-[#FFFFFF]/95 leading-[1.2] mb-1">
                  ISO-Certified. Close-Tolerance. Mission-Critical.
                </p>
                <p className="font-['Inter'] font-normal text-[14px] text-[#FFFFFF]/70 leading-[1.5]">
                  Trusted by medical device manufacturers, electronics OEMs, and safety engineers worldwide.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="tel:6305956144"
                className="inline-flex items-center justify-center gap-2 bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 text-[#FFFFFF]/90 font-['Inter'] font-medium text-[14px] py-[12px] px-[24px] rounded-[6px] hover:bg-[#FFFFFF]/20 focus-visible:ring-2 focus-visible:ring-[#FFFFFF]/50 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
                (630) 595-6144
              </a>
              <a
                href="https://www.matrixplastic.com/contact-us/request-a-quote"
                className="inline-flex items-center justify-center gap-2 bg-[#C95C0A] text-[#FFFFFF] font-['Inter'] font-[700] text-[14px] py-[12px] px-[24px] rounded-[6px] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A5FA8] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap shadow-[0_4px_16px_rgba(201,92,10,0.35)]"
              >
                Request a Quote
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { WhyMatrix };