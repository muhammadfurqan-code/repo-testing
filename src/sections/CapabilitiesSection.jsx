import { useState } from 'react';
import { Cog, Microscope, ShieldCheck, Wrench, Layers, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CapabilitiesSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const capabilities = [
    {
      id: 'injection-molding',
      title: 'Injection Molding',
      subtitle: 'Close-Tolerance Production',
      description: 'High-precision injection molding for medical, electronics, and safety applications. Sub-micron repeatability across millions of cycles with validated processes and advanced materials.',
      image: 'https://www.matrixplastic.com/images/sliders/OrangePushersCompositewithPencil1.jpeg',
      icon: Cog,
      tags: ['ISO-Certified', 'Multi-Cavity', 'Clean Room'],
      featured: true,
      colSpan: 'col-span-2 md:col-span-2',
      rowSpan: 'row-span-2',
    },
    {
      id: 'moldmaking',
      title: 'Moldmaking',
      subtitle: 'Design Expertise',
      description: 'Nearly 5 decades of in-house mold design and fabrication. Precision tooling engineered for longevity, repeatability, and zero-defect production.',
      image: 'https://www.matrixplastic.com/images/SmartSlider/PagerMold.JPG',
      icon: Wrench,
      tags: ['DFM', 'In-House Tooling'],
      featured: false,
      colSpan: 'col-span-2 md:col-span-1',
      rowSpan: 'row-span-1',
    },
    {
      id: 'micro-molding',
      title: 'Micro Molding',
      subtitle: 'Micro Components, Micro Details',
      description: 'Ultra-precise micro tooling and molding for the smallest, most demanding components in medical devices and electronics.',
      image: 'https://www.matrixplastic.com/images/SmartSlider/IMG_5591-Edit.jpg',
      icon: Microscope,
      tags: ['Sub-Millimeter', 'Medical Grade'],
      featured: false,
      colSpan: 'col-span-2 md:col-span-1',
      rowSpan: 'row-span-1',
    },
    {
      id: 'engineering-dfm',
      title: 'Engineering & DFM',
      subtitle: 'Design for Manufacturability',
      description: 'Collaborative DFM analysis and engineering support from concept through production validation. We optimize geometry, material selection, and tooling strategy.',
      image: 'https://www.matrixplastic.com/images/HomepageTiles/BS1_8207-Matrix.jpg',
      icon: Layers,
      tags: ['DFM Analysis', 'Prototyping', 'Validation'],
      featured: false,
      colSpan: 'col-span-2 md:col-span-1',
      rowSpan: 'row-span-1',
    },
    {
      id: 'quality-inspection',
      title: 'Quality & Inspection',
      subtitle: 'ISO-Certified Precision',
      description: 'Rigorous dimensional inspection, statistical process control, and full traceability for regulated industries. Every part validated to spec.',
      image: 'https://www.matrixplastic.com/images/sliders/JuvenileStaplercompositewithcartridgesandpushers.jpeg',
      icon: ShieldCheck,
      tags: ['ISO Certified', 'SPC', 'Full Traceability'],
      featured: false,
      colSpan: 'col-span-2 md:col-span-1',
      rowSpan: 'row-span-1',
    },
  ];

  return (
    <section className="py-[80px] bg-[#F5F7FA]">
      <style>{`
        @keyframes capabilities_subtlePulse {
          0%, 100% { opacity: 0.18; }
          50% { opacity: 0.32; }
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[56px] flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block w-[40px] h-[3px] bg-[#C95C0A] rounded-full"></span>
              <span className="font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C95C0A]">
                Core Capabilities
              </span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-[clamp(32px,4vw,52px)] font-[800] tracking-[-0.03em] text-[#1A5FA8] leading-[1.1]">
              Precision at Every Stage<br />
              <span className="text-[#4A5E78] font-[600]">of the Manufacturing Cycle</span>
            </h2>
          </div>
          <div className="flex-shrink-0">
            <p className="font-['Inter'] text-[15px] font-normal text-[#4A5E78] max-w-[340px] leading-[1.6]">
              From mold design through final inspection, Matrix delivers surgical precision for medical, electronics, and safety-critical applications.
            </p>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-[16px] auto-rows-[280px] md:auto-rows-[260px]">

          {/* Featured Card — Injection Molding (large, col-span-2, row-span-2) */}
          <div
            className="col-span-2 row-span-2 relative overflow-hidden rounded-[14px] shadow-[0_12px_40px_rgba(0,0,0,0.14)] cursor-pointer group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(26,95,168,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A5FA8]"
            onMouseEnter={() => setHoveredCard('injection-molding')}
            onMouseLeave={() => setHoveredCard(null)}
            tabIndex={0}
          >
            <img
              src="https://www.matrixplastic.com/images/sliders/OrangePushersCompositewithPencil1.jpeg"
              alt="Precision injection molded orange pushers with pencil for scale"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.88)] via-[rgba(15,35,64,0.45)] to-[rgba(15,35,64,0.10)]"></div>

            {/* Accent glow pulse */}
            <div className="absolute top-0 right-0 w-[220px] h-[220px] rounded-full bg-[#1A5FA8] opacity-[0.18] blur-[60px] animate-[capabilities_subtlePulse_4s_ease-in-out_infinite]"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-[32px]">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 bg-[rgba(26,95,168,0.85)] backdrop-blur-[8px] px-[14px] py-[7px] rounded-[6px] border border-[rgba(208,217,232,0.25)]">
                  <Cog className="w-4 h-4 text-[#FFFFFF]" strokeWidth={1.5} />
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#FFFFFF]/90 tracking-[0.08em] uppercase">Featured</span>
                </div>
                <div className="w-[44px] h-[44px] rounded-full bg-[rgba(201,92,10,0.90)] flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
                  <ArrowRight className="w-5 h-5 text-[#FFFFFF]" strokeWidth={1.5} />
                </div>
              </div>

              <div>
                <p className="font-['JetBrains_Mono'] text-[11px] tracking-[0.14em] uppercase text-[#C95C0A] mb-2">
                  Close-Tolerance Production
                </p>
                <h3 className="font-['Barlow_Condensed'] text-[clamp(28px,3.5vw,44px)] font-[800] tracking-[-0.03em] text-[#FFFFFF]/90 leading-[1.1] mb-3">
                  Injection Molding
                </h3>
                <p className="font-['Inter'] text-[14px] font-normal text-[#FFFFFF]/80 leading-[1.6] max-w-[480px] mb-5">
                  High-precision injection molding for medical, electronics, and safety applications. Sub-micron repeatability across millions of cycles with validated processes and advanced materials.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['ISO-Certified', 'Multi-Cavity', 'Clean Room', 'Validated Processes'].map((tag) => (
                    <span
                      key={tag}
                      className="font-['Inter'] text-[11px] font-medium text-[#FFFFFF]/90 bg-[rgba(255,255,255,0.12)] border border-[rgba(208,217,232,0.25)] px-[10px] py-[4px] rounded-[4px] backdrop-blur-[4px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Moldmaking Card */}
          <div
            className="col-span-2 md:col-span-1 row-span-1 relative overflow-hidden rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] cursor-pointer group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(26,95,168,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A5FA8]"
            onMouseEnter={() => setHoveredCard('moldmaking')}
            onMouseLeave={() => setHoveredCard(null)}
            tabIndex={0}
          >
            <img
              src="https://www.matrixplastic.com/images/SmartSlider/PagerMold.JPG"
              alt="Precision pager mold tooling"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.90)] via-[rgba(15,35,64,0.40)] to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-[24px]">
              <div className="w-[38px] h-[38px] rounded-[8px] bg-[rgba(26,95,168,0.85)] backdrop-blur-[6px] flex items-center justify-center border border-[rgba(208,217,232,0.20)]">
                <Wrench className="w-5 h-5 text-[#FFFFFF]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-['JetBrains_Mono'] text-[10px] tracking-[0.12em] uppercase text-[#C95C0A] mb-1">Design Expertise</p>
                <h3 className="font-['Barlow_Condensed'] text-[22px] font-[800] tracking-[-0.02em] text-[#FFFFFF]/90 leading-[1.15] mb-2">Moldmaking</h3>
                <p className="font-['Inter'] text-[12px] text-[#FFFFFF]/75 leading-[1.55] hidden md:block">
                  Nearly 5 decades of in-house mold design and fabrication for zero-defect production.
                </p>
                <div className="flex gap-2 mt-2">
                  {['DFM', 'In-House'].map((t) => (
                    <span key={t} className="font-['Inter'] text-[10px] font-medium text-[#FFFFFF]/85 bg-[rgba(255,255,255,0.12)] border border-[rgba(208,217,232,0.20)] px-[8px] py-[3px] rounded-[4px]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Micro Molding Card */}
          <div
            className="col-span-2 md:col-span-1 row-span-1 relative overflow-hidden rounded-[14px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] cursor-pointer group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(26,95,168,0.22)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A5FA8]"
            onMouseEnter={() => setHoveredCard('micro-molding')}
            onMouseLeave={() => setHoveredCard(null)}
            tabIndex={0}
          >
            <img
              src="https://www.matrixplastic.com/images/SmartSlider/IMG_5591-Edit.jpg"
              alt="Micro molded plastic components at extreme close-up"
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.90)] via-[rgba(15,35,64,0.40)] to-transparent"></div>
            <div className="absolute inset-0 flex flex-col justify-between p-[24px]">
              <div className="w-[38px] h-[38px] rounded-[8px] bg-[rgba(201,92,10,0.85)] backdrop-blur-[6px] flex items-center justify-center border border-[rgba(208,217,232,0.20)]">
                <Microscope className="w-5 h-5 text-[#FFFFFF]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-['JetBrains_Mono'] text-[10px] tracking-[0.12em] uppercase text-[#C95C0A] mb-1">Micro Components</p>
                <h3 className="font-['Barlow_Condensed'] text-[22px] font-[800] tracking-[-0.02em] text-[#FFFFFF]/90 leading-[1.15] mb-2">Micro Molding</h3>
                <p className="font-['Inter'] text-[12px] text-[#FFFFFF]/75 leading-[1.55] hidden md:block">
                  Ultra-precise micro tooling for the smallest, most demanding medical and electronics components.
                </p>
                <div className="flex gap-2 mt-2">
                  {['Sub-mm', 'Medical'].map((t) => (
                    <span key={t} className="font-['Inter'] text-[10px] font-medium text-[#FFFFFF]/85 bg-[rgba(255,255,255,0.12)] border border-[rgba(208,217,232,0.20)] px-[8px] py-[3px] rounded-[4px]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Engineering & DFM — surface card (no image) */}
          <div
            className="col-span-2 md:col-span-1 row-span-1 relative overflow-hidden rounded-[14px] bg-[#FFFFFF] border border-[#D0D9E8] shadow-[0_1px_3px_rgba(0,0,0,0.08)] cursor-pointer group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] hover:border-[#1A5FA8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A5FA8]"
            onMouseEnter={() => setHoveredCard('engineering-dfm')}
            onMouseLeave={() => setHoveredCard(null)}
            tabIndex={0}
          >
            <img
              src="https://www.matrixplastic.com/images/HomepageTiles/BS1_8207-Matrix.jpg"
              alt="Engineering and design for manufacturability at Matrix Plastic"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.08] group-hover:opacity-[0.14] transition-all duration-[400ms]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="relative z-10 flex flex-col justify-between h-full p-[24px]">
              <div className="flex items-start justify-between">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#EDF1F7] flex items-center justify-center border border-[#D0D9E8] group-hover:bg-[#1A5FA8] transition-all duration-[200ms]">
                  <Layers className="w-5 h-5 text-[#1A5FA8] group-hover:text-[#FFFFFF] transition-all duration-[200ms]" strokeWidth={1.5} />
                </div>
                <ArrowRight className="w-5 h-5 text-[#D0D9E8] group-hover:text-[#1A5FA8] transition-all duration-[200ms]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-['JetBrains_Mono'] text-[10px] tracking-[0.12em] uppercase text-[#C95C0A] mb-1">DFM Analysis</p>
                <h3 className="font-['Barlow_Condensed'] text-[22px] font-[800] tracking-[-0.02em] text-[#1A5FA8] leading-[1.15] mb-2">Engineering & DFM</h3>
                <p className="font-['Inter'] text-[12px] text-[#4A5E78] leading-[1.55] hidden md:block">
                  Collaborative DFM analysis from concept through production validation. Optimized geometry, material selection, and tooling strategy.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['DFM', 'Prototyping', 'Validation'].map((t) => (
                    <span key={t} className="font-['Inter'] text-[10px] font-medium text-[#4A5E78] bg-[#EDF1F7] border border-[#D0D9E8] px-[8px] py-[3px] rounded-[4px]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Quality Inspection — surface card with image */}
          <div
            className="col-span-2 md:col-span-1 row-span-1 relative overflow-hidden rounded-[14px] bg-[#FFFFFF] border border-[#D0D9E8] shadow-[0_1px_3px_rgba(0,0,0,0.08)] cursor-pointer group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] hover:border-[#1A5FA8] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#1A5FA8]"
            onMouseEnter={() => setHoveredCard('quality-inspection')}
            onMouseLeave={() => setHoveredCard(null)}
            tabIndex={0}
          >
            <img
              src="https://www.matrixplastic.com/images/sliders/JuvenileStaplercompositewithcartridgesandpushers.jpeg"
              alt="Juvenile stapler components and sub-assemblies with surgical precision"
              className="absolute inset-0 w-full h-full object-cover opacity-[0.09] group-hover:opacity-[0.15] transition-all duration-[400ms]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="relative z-10 flex flex-col justify-between h-full p-[24px]">
              <div className="flex items-start justify-between">
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#EDF1F7] flex items-center justify-center border border-[#D0D9E8] group-hover:bg-[#1A5FA8] transition-all duration-[200ms]">
                  <ShieldCheck className="w-5 h-5 text-[#1A5FA8] group-hover:text-[#FFFFFF] transition-all duration-[200ms]" strokeWidth={1.5} />
                </div>
                <ArrowRight className="w-5 h-5 text-[#D0D9E8] group-hover:text-[#1A5FA8] transition-all duration-[200ms]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-['JetBrains_Mono'] text-[10px] tracking-[0.12em] uppercase text-[#C95C0A] mb-1">ISO-Certified</p>
                <h3 className="font-['Barlow_Condensed'] text-[22px] font-[800] tracking-[-0.02em] text-[#1A5FA8] leading-[1.15] mb-2">Quality & Inspection</h3>
                <p className="font-['Inter'] text-[12px] text-[#4A5E78] leading-[1.55] hidden md:block">
                  Rigorous dimensional inspection, SPC, and full traceability for regulated industries. Every part validated to spec.
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {['ISO Certified', 'SPC', 'Traceability'].map((t) => (
                    <span key={t} className="font-['Inter'] text-[10px] font-medium text-[#4A5E78] bg-[#EDF1F7] border border-[#D0D9E8] px-[8px] py-[3px] rounded-[4px]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-[48px] bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] px-[32px] py-[28px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] divide-y-2 md:divide-y-0 md:divide-x divide-[#D0D9E8]">
            {[
              { value: '50+', label: 'Years of Precision', sub: 'In-house expertise' },
              { value: 'ISO', label: 'Certified Processes', sub: 'Quality management' },
              { value: '±0.001"', label: 'Tolerance Capability', sub: 'Close-tolerance molding' },
              { value: '100%', label: 'In-House Tooling', sub: 'Design through production' },
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col items-center text-center ${i > 0 ? 'md:pl-[24px] pt-[24px] md:pt-0' : ''}`}>
                <span className="font-['Barlow_Condensed'] text-[clamp(28px,3vw,40px)] font-[800] tracking-[-0.03em] text-[#1A5FA8] leading-[1]">{stat.value}</span>
                <span className="font-['Inter'] text-[13px] font-medium text-[#4A5E78] mt-1">{stat.label}</span>
                <span className="font-['JetBrains_Mono'] text-[10px] text-[#4A5E78]/70 tracking-[0.06em] mt-[2px]">{stat.sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Row */}
        <div className="mt-[40px]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#1A5FA8] rounded-[14px] px-[32px] py-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
            <div>
              <h3 className="font-['Barlow_Condensed'] text-[24px] font-[700] tracking-[-0.02em] text-[#FFFFFF]/90 leading-[1.2]">
                Ready to Start Your Next Precision Molding Program?
              </h3>
              <p className="font-['Inter'] text-[14px] text-[#FFFFFF]/75 mt-1">
                Talk to our engineers — (630) 595-6144 · info@matrixplastic.com
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <a
                href="tel:6305956144"
                className="font-['Inter'] text-[14px] font-semibold text-[#FFFFFF] bg-transparent border-[1.5px] border-[rgba(255,255,255,0.45)] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#FFFFFF] hover:bg-[rgba(255,255,255,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF] whitespace-nowrap text-center"
              >
                Call Us Now
              </a>
              <a
                href="https://www.matrixplastic.com/contact-us/request-a-quote"
                className="font-['Inter'] text-[14px] font-[700] text-[#FFFFFF] bg-[#C95C0A] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A5FA8] whitespace-nowrap text-center shadow-[0_4px_16px_rgba(0,0,0,0.10)]"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default CapabilitiesSection;