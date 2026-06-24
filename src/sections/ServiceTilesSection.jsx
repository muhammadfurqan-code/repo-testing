import { useState } from 'react';
import { ArrowRight, Cog, Layers, FlaskConical, ShieldCheck, Wrench } from 'lucide-react';

const services = [
  {
    id: 'engineering',
    label: 'Design & Engineering',
    sublabel: 'DFM Expertise',
    description: 'Nearly 5 decades of in-house Design for Manufacturability expertise — we partner with your team from concept through validation to ensure every geometry, wall thickness, and gate location is optimized for precision production.',
    image: 'https://www.matrixplastic.com/images/HomepageTiles/BS1_8207-Matrix.jpg',
    icon: Cog,
    href: 'https://www.matrixplastic.com/index.php/services/engineering-dfm',
    featured: true,
  },
  {
    id: 'moldmaking',
    label: 'Moldmaking',
    sublabel: 'Unparalleled Precision',
    description: 'In-house mold fabrication with design expertise for micro tooling and complex geometries. Tight tolerances, superior surface finishes, and long tool life.',
    image: 'https://www.matrixplastic.com/images/SmartSlider/PagerMold.JPG',
    icon: Wrench,
    href: 'https://www.matrixplastic.com/index.php/services/moldmaking',
    featured: false,
  },
  {
    id: 'injection-molding',
    label: 'Injection Molding',
    sublabel: 'Surgical Precision',
    description: 'Close-tolerance injection molding for medical devices, electronics OEMs, and safety-critical applications. Advanced materials, validated processes, ISO-certified production.',
    image: 'https://www.matrixplastic.com/images/sliders/OrangePushersCompositewithPencil1.jpeg',
    icon: Layers,
    href: 'https://www.matrixplastic.com/index.php/services/injection-molding-solving-problems-reducing-cycle-time-and-improving-yield',
    featured: false,
  },
  {
    id: 'quality-inspection',
    label: 'Quality Inspection',
    sublabel: 'ISO-Certified',
    description: 'Rigorous dimensional inspection and quality systems ensuring every component meets your most demanding specifications.',
    image: 'https://www.matrixplastic.com/images/sliders/JuvenileStaplercompositewithcartridgesandpushers.jpeg',
    icon: ShieldCheck,
    href: 'https://www.matrixplastic.com/index.php/services/inspection',
    featured: false,
  },
  {
    id: 'custom-manufacturing',
    label: 'Custom Manufacturing',
    sublabel: 'Components & Sub-Assemblies',
    description: 'End-to-end custom manufacturing including sub-assembly, secondary operations, and turnkey production for global industry leaders.',
    image: 'https://www.matrixplastic.com/images/SmartSlider/IMG_5591-Edit.jpg',
    icon: FlaskConical,
    href: 'https://www.matrixplastic.com/index.php/services/custom-manufacturing',
    featured: false,
  },
];

export default function ServiceTiles() {
  const [hoveredId, setHoveredId] = useState(null);

  const featured = services[0];
  const rest = services.slice(1);

  return (
    <section className="py-[80px] bg-[#F5F7FA]">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[56px] max-w-[680px]">
          <span className="inline-block font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C95C0A] mb-[12px]">
            Our Capabilities
          </span>
          <h2 className="font-['Barlow_Condensed'] text-[clamp(32px,4vw,52px)] font-[800] tracking-[-0.03em] leading-[1.1] text-[#1A5FA8] mb-[16px]">
            Injection Molding, Moldmaking,<br className="hidden sm:block" /> and Assembly
          </h2>
          <p className="font-['Inter'] text-[16px] font-normal text-[#4A5E78] leading-[1.65] max-w-[560px]">
            A premier custom manufacturer specializing in ultra-precise molded components and sub-assemblies for medical devices, electronics OEMs, and safety-critical industries.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-[16px] auto-rows-auto">

          {/* Featured Card — spans 7 cols, 2 rows */}
          <a
            href={featured.href}
            className="lg:col-span-7 lg:row-span-2 relative rounded-[14px] overflow-hidden group block min-h-[420px] shadow-[0_12px_40px_rgba(0,0,0,0.14)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(26,95,168,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-2"
            onMouseEnter={() => setHoveredId(featured.id)}
            onMouseLeave={() => setHoveredId(null)}
            aria-label={`Learn more about ${featured.label}`}
          >
            <img
              src={featured.image}
              alt={`${featured.label} — Matrix Plastic Products`}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.88)] via-[rgba(15,35,64,0.45)] to-[rgba(15,35,64,0.10)]" />
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-between p-[32px]">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-[6px] bg-[rgba(26,95,168,0.85)] backdrop-blur-[8px] text-[#FFFFFF]/90 font-['JetBrains_Mono'] text-[11px] tracking-[0.1em] uppercase px-[12px] py-[6px] rounded-[6px] border border-[rgba(208,217,232,0.25)]">
                  <featured.icon className="w-[14px] h-[14px]" strokeWidth={1.5} />
                  {featured.sublabel}
                </span>
                <span className="bg-[#C95C0A] text-[#FFFFFF] font-['Inter'] text-[11px] font-[700] uppercase tracking-[0.08em] px-[10px] py-[5px] rounded-[6px]">
                  Core Service
                </span>
              </div>
              <div>
                <h3 className="font-['Barlow_Condensed'] text-[clamp(28px,3.5vw,44px)] font-[800] tracking-[-0.03em] leading-[1.1] text-[#FFFFFF]/90 mb-[12px]">
                  {featured.label}
                </h3>
                <p className="font-['Inter'] text-[14px] font-normal text-[#FFFFFF]/75 leading-[1.6] max-w-[420px] mb-[24px]">
                  {featured.description}
                </p>
                <span className="inline-flex items-center gap-[8px] bg-[#1A5FA8] text-[#FFFFFF] font-['Inter'] font-semibold text-[14px] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[#154E8C]">
                  Explore Service
                  <ArrowRight className="w-[16px] h-[16px] transition-all duration-[200ms] group-hover:translate-x-[3px]" strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </a>

          {/* Moldmaking — spans 5 cols */}
          <a
            href={rest[0].href}
            className="lg:col-span-5 relative rounded-[14px] overflow-hidden group block min-h-[200px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(26,95,168,0.22)] hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-2"
            onMouseEnter={() => setHoveredId(rest[0].id)}
            onMouseLeave={() => setHoveredId(null)}
            aria-label={`Learn more about ${rest[0].label}`}
          >
            <img
              src={rest[0].image}
              alt={`${rest[0].label} — Matrix Plastic Products`}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.85)] via-[rgba(15,35,64,0.35)] to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-[24px]">
              <span className="inline-flex items-center gap-[6px] self-start bg-[rgba(15,35,64,0.7)] backdrop-blur-[8px] text-[#FFFFFF]/80 font-['JetBrains_Mono'] text-[10px] tracking-[0.1em] uppercase px-[10px] py-[5px] rounded-[6px] border border-[rgba(208,217,232,0.2)]">
                {/* <rest[0].icon className="w-[12px] h-[12px]" strokeWidth={1.5} /> */}
                {rest[0].sublabel}
              </span>
              <div>
                <h3 className="font-['Barlow_Condensed'] text-[26px] font-[800] tracking-[-0.02em] leading-[1.15] text-[#FFFFFF]/90 mb-[8px]">
                  {rest[0].label}
                </h3>
                <p className="font-['Inter'] text-[13px] text-[#FFFFFF]/70 leading-[1.55] mb-[16px] line-clamp-2">
                  {rest[0].description}
                </p>
                <span className="inline-flex items-center gap-[6px] text-[#FFFFFF]/80 font-['Inter'] text-[13px] font-medium group-hover:text-[#FFFFFF] transition-all duration-[200ms]">
                  Learn More <ArrowRight className="w-[14px] h-[14px] group-hover:translate-x-[3px] transition-all duration-[200ms]" strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </a>

          {/* Injection Molding — spans 5 cols */}
          <a
            href={rest[1].href}
            className="lg:col-span-5 relative rounded-[14px] overflow-hidden group block min-h-[200px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(26,95,168,0.22)] hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-2"
            onMouseEnter={() => setHoveredId(rest[1].id)}
            onMouseLeave={() => setHoveredId(null)}
            aria-label={`Learn more about ${rest[1].label}`}
          >
            <img
              src={rest[1].image}
              alt={`${rest[1].label} — Matrix Plastic Products`}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.85)] via-[rgba(15,35,64,0.35)] to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-[24px]">
              <span className="inline-flex items-center gap-[6px] self-start bg-[rgba(15,35,64,0.7)] backdrop-blur-[8px] text-[#FFFFFF]/80 font-['JetBrains_Mono'] text-[10px] tracking-[0.1em] uppercase px-[10px] py-[5px] rounded-[6px] border border-[rgba(208,217,232,0.2)]">
                {/* <rest[1].icon className="w-[12px] h-[12px]" strokeWidth={1.5} /> */}
                {rest[1].sublabel}
              </span>
              <div>
                <h3 className="font-['Barlow_Condensed'] text-[26px] font-[800] tracking-[-0.02em] leading-[1.15] text-[#FFFFFF]/90 mb-[8px]">
                  {rest[1].label}
                </h3>
                <p className="font-['Inter'] text-[13px] text-[#FFFFFF]/70 leading-[1.55] mb-[16px] line-clamp-2">
                  {rest[1].description}
                </p>
                <span className="inline-flex items-center gap-[6px] text-[#FFFFFF]/80 font-['Inter'] text-[13px] font-medium group-hover:text-[#FFFFFF] transition-all duration-[200ms]">
                  Learn More <ArrowRight className="w-[14px] h-[14px] group-hover:translate-x-[3px] transition-all duration-[200ms]" strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </a>

          {/* Quality Inspection — spans 4 cols */}
          <a
            href={rest[2].href}
            className="lg:col-span-4 relative rounded-[14px] overflow-hidden group block min-h-[220px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(26,95,168,0.22)] hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-2"
            onMouseEnter={() => setHoveredId(rest[2].id)}
            onMouseLeave={() => setHoveredId(null)}
            aria-label={`Learn more about ${rest[2].label}`}
          >
            <img
              src={rest[2].image}
              alt={`${rest[2].label} — Matrix Plastic Products`}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.88)] via-[rgba(15,35,64,0.40)] to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-between p-[24px]">
              <span className="inline-flex items-center gap-[6px] self-start bg-[rgba(201,92,10,0.85)] backdrop-blur-[8px] text-[#FFFFFF]/90 font-['JetBrains_Mono'] text-[10px] tracking-[0.1em] uppercase px-[10px] py-[5px] rounded-[6px]">
                {/* <rest[2].icon className="w-[12px] h-[12px]" strokeWidth={1.5} /> */}
                {rest[2].sublabel}
              </span>
              <div>
                <h3 className="font-['Barlow_Condensed'] text-[24px] font-[800] tracking-[-0.02em] leading-[1.15] text-[#FFFFFF]/90 mb-[8px]">
                  {rest[2].label}
                </h3>
                <p className="font-['Inter'] text-[12px] text-[#FFFFFF]/70 leading-[1.55] mb-[14px] line-clamp-2">
                  {rest[2].description}
                </p>
                <span className="inline-flex items-center gap-[6px] text-[#FFFFFF]/80 font-['Inter'] text-[12px] font-medium group-hover:text-[#FFFFFF] transition-all duration-[200ms]">
                  Learn More <ArrowRight className="w-[13px] h-[13px] group-hover:translate-x-[3px] transition-all duration-[200ms]" strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </a>

          {/* Custom Manufacturing — spans 8 cols */}
          <a
            href={rest[3].href}
            className="lg:col-span-8 relative rounded-[14px] overflow-hidden group block min-h-[220px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(26,95,168,0.22)] hover:-translate-y-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-2"
            onMouseEnter={() => setHoveredId(rest[3].id)}
            onMouseLeave={() => setHoveredId(null)}
            aria-label={`Learn more about ${rest[3].label}`}
          >
            <img
              src={rest[3].image}
              alt={`${rest[3].label} — Matrix Plastic Products`}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(15,35,64,0.88)] via-[rgba(15,35,64,0.55)] to-[rgba(15,35,64,0.15)]" />
            <div className="absolute inset-0 flex flex-col justify-center p-[32px] max-w-[520px]">
              <span className="inline-flex items-center gap-[6px] self-start bg-[rgba(15,35,64,0.7)] backdrop-blur-[8px] text-[#FFFFFF]/80 font-['JetBrains_Mono'] text-[10px] tracking-[0.1em] uppercase px-[10px] py-[5px] rounded-[6px] border border-[rgba(208,217,232,0.2)] mb-[16px]">
                {/* <rest[3].icon className="w-[12px] h-[12px]" strokeWidth={1.5} /> */}
                {rest[3].sublabel}
              </span>
              <h3 className="font-['Barlow_Condensed'] text-[clamp(24px,2.5vw,34px)] font-[800] tracking-[-0.02em] leading-[1.15] text-[#FFFFFF]/90 mb-[10px]">
                {rest[3].label}
              </h3>
              <p className="font-['Inter'] text-[13px] text-[#FFFFFF]/70 leading-[1.6] mb-[20px]">
                {rest[3].description}
              </p>
              <span className="inline-flex items-center gap-[8px] self-start bg-[rgba(255,255,255,0.12)] backdrop-blur-[8px] border border-[rgba(208,217,232,0.3)] text-[#FFFFFF]/90 font-['Inter'] text-[13px] font-semibold py-[10px] px-[20px] rounded-[6px] transition-all duration-[200ms] group-hover:bg-[rgba(255,255,255,0.2)]">
                Explore Service <ArrowRight className="w-[14px] h-[14px] group-hover:translate-x-[3px] transition-all duration-[200ms]" strokeWidth={1.5} />
              </span>
            </div>
          </a>

        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-[48px] flex flex-col sm:flex-row items-center justify-between gap-[20px] bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] px-[32px] py-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
          <div>
            <p className="font-['Barlow_Condensed'] text-[20px] font-[700] tracking-[-0.01em] text-[#1A5FA8] mb-[4px]">
              Ready to start your precision molding project?
            </p>
            <p className="font-['Inter'] text-[14px] text-[#4A5E78]">
              ISO-certified. Close-tolerance. Trusted by global industry leaders for nearly 5 decades.
            </p>
          </div>
          <div className="flex items-center gap-[12px] flex-shrink-0">
            <a
              href="tel:6305956144"
              className="font-['Inter'] text-[14px] font-medium text-[#1A5FA8] border border-[#1A5FA8] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#EDF1F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-2 whitespace-nowrap"
            >
              (630) 595-6144
            </a>
            <a
              href="https://www.matrixplastic.com/contact-us/request-a-quote"
              className="font-['Inter'] text-[14px] font-[700] bg-[#C95C0A] text-[#FFFFFF] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 whitespace-nowrap"
            >
              Request a Quote
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}