import { useState } from 'react';
import { ShieldCheck, Award, CheckCircle2, ClipboardList, Microscope, ArrowRight } from 'lucide-react';

export default function QualityCertifications() {
  const [activeTab, setActiveTab] = useState(0);

  const certifications = [
    {
      code: 'ISO 9001:2015',
      label: 'Quality Management',
      description: 'Our ISO 9001:2015 certification demonstrates our commitment to consistent quality management systems, continuous improvement, and customer satisfaction across every injection molding and moldmaking program.',
      icon: ShieldCheck,
      image: 'https://www.matrixplastic.com/images/HomepageTiles/BS1_8207-Matrix.jpg',
      highlight: true,
    },
    {
      code: 'ISO 13485:2016',
      label: 'Medical Device QMS',
      description: 'ISO 13485 certification validates our specialized quality management system for medical device manufacturing — ensuring traceability, risk management, and regulatory compliance for every critical component.',
      icon: Microscope,
      image: 'https://www.matrixplastic.com/images/sliders/OrangePushersCompositewithPencil1.jpeg',
      highlight: false,
    },
    {
      code: 'RoHS Compliant',
      label: 'Material Compliance',
      description: 'All materials and processes meet RoHS directives, ensuring our plastic components are free from hazardous substances — critical for electronics OEMs and safety-industry applications.',
      icon: ClipboardList,
      image: 'https://www.matrixplastic.com/images/sliders/JuvenileStaplercompositewithcartridgesandpushers.jpeg',
      highlight: false,
    },
  ];

  const qualityPillars = [
    {
      stat: '48+',
      label: 'Years of Precision',
      detail: 'Nearly five decades of in-house DFM and moldmaking expertise.',
    },
    {
      stat: '±0.001"',
      label: 'Tolerance Capability',
      detail: 'Close-tolerance molding for the most demanding medical and electronics programs.',
    },
    {
      stat: '100%',
      label: 'In-Process Inspection',
      detail: 'Every production run undergoes rigorous dimensional and visual inspection protocols.',
    },
    {
      stat: 'PPAP',
      label: 'Production Part Approval',
      detail: 'Full PPAP documentation packages available for automotive and medical customers.',
    },
  ];

  const processSteps = [
    { step: '01', title: 'Design for Manufacturability', body: 'DFM review identifies risk before tooling begins, eliminating costly downstream corrections.' },
    { step: '02', title: 'Validated Tooling', body: 'Mold qualification follows IQ/OQ/PQ protocols with full dimensional reporting.' },
    { step: '03', title: 'Statistical Process Control', body: 'SPC monitoring maintains Cpk targets throughout production runs.' },
    { step: '04', title: 'First Article Inspection', body: 'FAI packages with GD&T balloon drawings and CMM data delivered with every new program.' },
    { step: '05', title: 'Traceability & Documentation', body: 'Lot traceability, material certs, and process records retained per ISO requirements.' },
  ];

  return (
    <section className="bg-[#F5F7FA] py-[80px]">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[64px]">
          <div className="flex items-center gap-[10px] mb-[16px]">
            <span className="inline-block w-[36px] h-[3px] bg-[#C95C0A] rounded-full"></span>
            <span className="font-['JetBrains_Mono'] text-[13px] font-medium tracking-[0.12em] text-[#C95C0A] uppercase">Certified Excellence</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-[24px]">
            <div className="max-w-[620px]">
              <h2 className="font-['Barlow_Condensed'] text-[clamp(32px,4vw,52px)] font-[800] tracking-[-0.03em] text-[#1A5FA8] leading-[1.1] mb-[16px]">
                Quality Systems Built<br />
                <span className="text-[#4A5E78]">for Critical Applications</span>
              </h2>
              <p className="font-['Inter'] text-[16px] font-normal text-[#4A5E78] leading-[1.65] max-w-[540px]">
                Matrix Plastic Products operates under a rigorous, multi-layered quality management framework. Our certifications are not credentials on a wall — they are the operational backbone of every mold, every shot, and every shipment.
              </p>
            </div>
            <a
              href="https://www.matrixplastic.com/contact-us/request-a-quote"
              className="inline-flex items-center gap-[8px] bg-[#C95C0A] text-[#FFFFFF] font-['Inter'] font-[700] py-[12px] px-[28px] rounded-[6px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 whitespace-nowrap self-start lg:self-auto"
            >
              Request a Quote
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Bento Grid — Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[20px] mb-[20px]">

          {/* Featured Cert Card — Large */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
            <div className="relative h-[220px] overflow-hidden">
              <img
                src="https://www.matrixplastic.com/images/HomepageTiles/BS1_8207-Matrix.jpg"
                alt="Quality inspection at Matrix Plastic Products"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.75)] via-[rgba(15,35,64,0.30)] to-transparent"></div>
              <div className="absolute bottom-[20px] left-[28px] flex items-center gap-[12px]">
                <span className="font-['JetBrains_Mono'] text-[11px] font-medium tracking-[0.10em] text-[#FFFFFF]/80 uppercase bg-[rgba(26,95,168,0.55)] backdrop-blur-[6px] border border-[rgba(208,217,232,0.25)] px-[12px] py-[5px] rounded-[6px]">
                  Primary Certification
                </span>
              </div>
            </div>
            <div className="p-[32px]">
              <div className="flex items-start gap-[16px] mb-[16px]">
                <div className="flex-shrink-0 w-[48px] h-[48px] rounded-[10px] bg-[#EDF1F7] flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#1A5FA8]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-['JetBrains_Mono'] text-[13px] text-[#C95C0A] font-medium tracking-[0.06em] mb-[2px]">ISO 9001:2015</p>
                  <h3 className="font-['Barlow_Condensed'] text-[24px] font-[600] text-[#1A5FA8] leading-[1.2]">Quality Management System</h3>
                </div>
              </div>
              <p className="font-['Inter'] text-[15px] text-[#4A5E78] leading-[1.65] mb-[20px]">
                Our ISO 9001:2015 certification is the cornerstone of every program we run. It governs our design review, supplier qualification, process control, and corrective action systems — ensuring that quality is engineered in, not inspected out.
              </p>
              <div className="grid grid-cols-2 gap-[10px]">
                {['Document Control', 'Corrective Action (CAPA)', 'Supplier Qualification', 'Customer Feedback Loop'].map((item) => (
                  <div key={item} className="flex items-center gap-[8px]">
                    <CheckCircle2 className="w-4 h-4 text-[#1A5FA8] flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-['Inter'] text-[13px] text-[#4A5E78]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Two Smaller Certs */}
          <div className="lg:col-span-5 flex flex-col gap-[20px]">

            {/* ISO 13485 */}
            <div className="bg-[#1A5FA8] border border-[rgba(208,217,232,0.20)] rounded-[14px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(26,95,168,0.22)] flex-1">
              <div className="relative h-[130px] overflow-hidden">
                <img
                  src="https://www.matrixplastic.com/images/sliders/OrangePushersCompositewithPencil1.jpeg"
                  alt="Micro-precision plastic components for medical devices"
                  className="w-full h-full object-cover opacity-40"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A5FA8]"></div>
              </div>
              <div className="px-[28px] pb-[28px] pt-[4px]">
                <div className="flex items-center gap-[10px] mb-[10px]">
                  <Microscope className="w-5 h-5 text-[#FFFFFF]/80" strokeWidth={1.5} />
                  <span className="font-['JetBrains_Mono'] text-[12px] text-[#FFFFFF]/70 tracking-[0.08em]">ISO 13485:2016</span>
                </div>
                <h3 className="font-['Barlow_Condensed'] text-[22px] font-[600] text-[#FFFFFF]/90 leading-[1.2] mb-[10px]">Medical Device QMS</h3>
                <p className="font-['Inter'] text-[13px] text-[#FFFFFF]/75 leading-[1.6]">
                  Specialized quality management for medical device components — full traceability, risk-based thinking, and regulatory compliance built into every production run.
                </p>
              </div>
            </div>

            {/* RoHS + Material Compliance */}
            <div className="bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] p-[28px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] flex-1">
              <div className="flex items-center gap-[10px] mb-[12px]">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[#EDF1F7] flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-[#C95C0A]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-['JetBrains_Mono'] text-[11px] text-[#C95C0A] tracking-[0.08em] font-medium">RoHS / REACH</p>
                  <h3 className="font-['Barlow_Condensed'] text-[20px] font-[600] text-[#1A5FA8] leading-[1.2]">Material Compliance</h3>
                </div>
              </div>
              <p className="font-['Inter'] text-[13px] text-[#4A5E78] leading-[1.6] mb-[14px]">
                Full material traceability and compliance documentation for electronics OEMs and safety-critical applications. SDS sheets, resin certs, and lot records on demand.
              </p>
              <div className="flex flex-wrap gap-[8px]">
                {['RoHS Compliant', 'REACH Aware', 'Material Certs', 'Lot Traceability'].map((tag) => (
                  <span key={tag} className="font-['JetBrains_Mono'] text-[11px] text-[#1A5FA8] bg-[#EDF1F7] border border-[#D0D9E8] px-[10px] py-[4px] rounded-[4px] tracking-[0.04em]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Quality Pillars — Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] mb-[20px]">
          {qualityPillars.map((pillar, i) => (
            <div
              key={i}
              className="bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] p-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:border-[#1A5FA8]/30"
            >
              <p className="font-['Barlow_Condensed'] text-[clamp(28px,3vw,40px)] font-[800] text-[#1A5FA8] tracking-[-0.03em] leading-[1] mb-[4px]">{pillar.stat}</p>
              <p className="font-['Inter'] text-[13px] font-[600] text-[#4A5E78] mb-[8px] uppercase tracking-[0.06em]">{pillar.label}</p>
              <p className="font-['Inter'] text-[12px] text-[#4A5E78]/80 leading-[1.55]">{pillar.detail}</p>
            </div>
          ))}
        </div>

        {/* Quality Process — Horizontal Stepper */}
        <div className="bg-[#1A5FA8] rounded-[14px] p-[40px] shadow-[0_12px_40px_rgba(0,0,0,0.14)] overflow-hidden relative">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full bg-[rgba(255,255,255,0.04)] translate-x-[100px] -translate-y-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-[40%] w-[200px] h-[200px] rounded-full bg-[rgba(201,92,10,0.12)] translate-y-[80px] pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-[10px] mb-[8px]">
              <span className="inline-block w-[28px] h-[2px] bg-[#C95C0A] rounded-full"></span>
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#FFFFFF]/60 tracking-[0.12em] uppercase">Our Quality Process</span>
            </div>
            <h3 className="font-['Barlow_Condensed'] text-[28px] font-[700] text-[#FFFFFF]/90 tracking-[-0.02em] mb-[32px]">
              From First Article to Full Production
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[16px]">
              {processSteps.map((s, i) => (
                <div key={i} className="relative">
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-[20px] left-[calc(100%_-_8px)] w-[calc(100%_-_24px)] h-[1px] bg-[rgba(255,255,255,0.15)] z-0"></div>
                  )}
                  <div className="relative z-10 bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] rounded-[10px] p-[20px] h-full backdrop-blur-[4px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[rgba(255,255,255,0.12)]">
                    <span className="font-['JetBrains_Mono'] text-[11px] text-[#C95C0A] font-medium tracking-[0.10em] block mb-[8px]">{s.step}</span>
                    <h4 className="font-['Barlow_Condensed'] text-[16px] font-[600] text-[#FFFFFF]/90 leading-[1.3] mb-[8px]">{s.title}</h4>
                    <p className="font-['Inter'] text-[12px] text-[#FFFFFF]/65 leading-[1.55]">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-[20px] bg-[#EDF1F7] border border-[#D0D9E8] rounded-[14px] p-[32px] flex flex-col sm:flex-row items-center justify-between gap-[20px]">
          <div className="flex items-center gap-[16px]">
            <div className="w-[48px] h-[48px] rounded-[10px] bg-[#1A5FA8] flex items-center justify-center flex-shrink-0 shadow-[0_4px_16px_rgba(26,95,168,0.30)]">
              <ClipboardList className="w-6 h-6 text-[#FFFFFF]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="font-['Barlow_Condensed'] text-[20px] font-[700] text-[#1A5FA8] leading-[1.2]">Need Certification Documentation?</p>
              <p className="font-['Inter'] text-[14px] text-[#4A5E78]">Request our full quality manual, ISO certificates, or PPAP templates with your quote.</p>
            </div>
          </div>
          <div className="flex items-center gap-[12px] flex-shrink-0">
            <a
              href="tel:6305956144"
              className="font-['Inter'] text-[14px] font-[600] text-[#1A5FA8] border border-[#1A5FA8] py-[10px] px-[20px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#1A5FA8] hover:text-[#FFFFFF] focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-2 whitespace-nowrap"
            >
              (630) 595-6144
            </a>
            <a
              href="https://www.matrixplastic.com/contact-us/request-a-quote"
              className="inline-flex items-center gap-[8px] bg-[#C95C0A] text-[#FFFFFF] font-['Inter'] font-[700] py-[10px] px-[22px] rounded-[6px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 whitespace-nowrap text-[14px]"
            >
              Request a Quote
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}