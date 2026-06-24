import { useState } from 'react';
import { Award, Clock, Shield, ChevronRight, Phone, Mail } from 'lucide-react';

export default function AboutSection() {
  const [imgError, setImgError] = useState({});

  const stats = [
    { value: '~50', label: 'Years in Business', icon: Clock },
    { value: 'ISO', label: 'Certified Quality', icon: Award },
    { value: '±0.001"', label: 'Close Tolerances', icon: Shield },
  ];

  const differentiators = [
    {
      title: 'In-House DFM Expertise',
      body: 'Nearly five decades of design-for-manufacturability knowledge embedded at every stage — from concept through production ramp.',
    },
    {
      title: 'Surgical-Grade Precision',
      body: 'Ultra-close tolerances and validated processes trusted by global leaders in medical devices, electronics, and safety equipment.',
    },
    {
      title: 'Vertically Integrated',
      body: 'Engineering, moldmaking, injection molding, and quality inspection under one roof — eliminating handoff risk and compressing lead times.',
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-[80px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section label */}
        <div className="flex items-center gap-[10px] mb-[16px]">
          <span className="block w-[36px] h-[3px] bg-[#C95C0A] rounded-full" />
          <span className="font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#4A5E78]">
            About Matrix Plastic Products
          </span>
        </div>

        {/* Main bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]">

          {/* LEFT COLUMN — narrative + stats */}
          <div className="lg:col-span-5 flex flex-col gap-[24px]">

            {/* Headline card */}
            <div className="bg-[#1A5FA8] rounded-[14px] p-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.14)] relative overflow-hidden">
              {/* subtle glow blob */}
              <div className="absolute -top-[40px] -right-[40px] w-[180px] h-[180px] rounded-full bg-[#C95C0A]/10 blur-[60px] pointer-events-none" />
              <h2 className="font-['Barlow_Condensed'] text-[32px] font-[800] tracking-[-0.03em] leading-[1.1] text-[#FFFFFF]/90 mb-[16px]">
                Injection Molding and Moldmaking<br />
                <span className="text-[#C95C0A]">with Surgical Precision</span>
              </h2>
              <p className="font-['Inter'] font-normal text-[15px] leading-[1.65] text-[#FFFFFF]/80 mb-[24px]">
                Matrix Plastic Products is a premier custom manufacturer specializing in injection molding, moldmaking, and assembly. We partner with medical device manufacturers, electronics OEMs, and safety industry engineers to produce ultra-precise molded components and sub-assemblies for their most critical applications.
              </p>
              <a
                href="tel:6305956144"
                className="inline-flex items-center gap-[8px] font-['Inter'] font-medium text-[14px] text-[#FFFFFF]/90 hover:text-[#C95C0A] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                (630) 595-6144
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-[12px]">
              {stats.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] p-[20px] flex flex-col items-center text-center shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  <Icon className="w-5 h-5 text-[#C95C0A] mb-[8px]" strokeWidth={1.5} />
                  <span className="font-['Barlow_Condensed'] text-[22px] font-[800] tracking-[-0.03em] text-[#1A5FA8] leading-none mb-[4px]">
                    {value}
                  </span>
                  <span className="font-['Inter'] text-[11px] font-medium text-[#4A5E78] leading-[1.3]">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            {/* Differentiators */}
            <div className="flex flex-col gap-[12px]">
              {differentiators.map(({ title, body }) => (
                <div
                  key={title}
                  className="bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] px-[24px] py-[20px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:border-[#1A5FA8]/30 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group"
                >
                  <div className="flex items-start gap-[12px]">
                    <span className="mt-[3px] flex-shrink-0 w-[6px] h-[6px] rounded-full bg-[#C95C0A] group-hover:scale-125 transition-all duration-[200ms]" />
                    <div>
                      <h3 className="font-['Barlow_Condensed'] text-[18px] font-[700] text-[#1A5FA8] mb-[4px]">
                        {title}
                      </h3>
                      <p className="font-['Inter'] text-[13px] font-normal text-[#4A5E78] leading-[1.6]">
                        {body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-[12px]">
              <a
                href="https://www.matrixplastic.com/contact-us/request-a-quote"
                className="inline-flex items-center gap-[8px] bg-[#C95C0A] text-[#FFFFFF] font-['Inter'] font-[700] text-[14px] py-[12px] px-[28px] rounded-[6px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                Request a Quote
                <ChevronRight className="w-4 h-4" strokeWidth={2} />
              </a>
              <a
                href="mailto:info@matrixplastic.com"
                className="inline-flex items-center gap-[8px] bg-transparent text-[#1A5FA8] border border-[#1A5FA8] font-['Inter'] font-medium text-[14px] py-[12px] px-[28px] rounded-[6px] hover:bg-[#1A5FA8]/5 focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-2 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                Email Us
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN — asymmetric image bento */}
          <div className="lg:col-span-7 grid grid-cols-2 grid-rows-[auto_auto] gap-[16px]">

            {/* Large featured image — spans full width top */}
            <div className="col-span-2 relative rounded-[14px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.14)] h-[280px] sm:h-[320px]">
              <img
                src="https://www.matrixplastic.com/images/sliders/OrangePushersCompositewithPencil1.jpeg"
                alt="Precision micro-molded orange plastic components alongside a pencil for scale"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.72)] via-[rgba(15,35,64,0.18)] to-transparent" />
              <div className="absolute bottom-[20px] left-[20px] right-[20px]">
                <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.1em] uppercase text-[#C95C0A] block mb-[4px]">
                  Micro Components
                </span>
                <p className="font-['Barlow_Condensed'] text-[20px] font-[700] text-[#FFFFFF]/90 leading-[1.2]">
                  Micro Details at Production Scale
                </p>
              </div>
            </div>

            {/* Bottom-left image — taller */}
            <div className="col-span-1 relative rounded-[14px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.10)] h-[220px]">
              <img
                src="https://www.matrixplastic.com/images/SmartSlider/PagerMold.JPG"
                alt="Precision injection mold tooling for a pager component"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.65)] to-transparent" />
              <div className="absolute bottom-[14px] left-[14px] right-[14px]">
                <span className="font-['JetBrains_Mono'] text-[10px] tracking-[0.1em] uppercase text-[#C95C0A] block mb-[2px]">
                  Moldmaking
                </span>
                <p className="font-['Barlow_Condensed'] text-[15px] font-[700] text-[#FFFFFF]/90 leading-[1.2]">
                  Unparalleled Design Expertise
                </p>
              </div>
            </div>

            {/* Bottom-right — stacked two small */}
            <div className="col-span-1 flex flex-col gap-[16px]">
              <div className="relative rounded-[14px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.10)] h-[100px]">
                <img
                  src="https://www.matrixplastic.com/images/sliders/JuvenileStaplercompositewithcartridgesandpushers.jpeg"
                  alt="Juvenile stapler components and sub-assemblies molded with surgical precision"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.60)] to-transparent" />
                <div className="absolute bottom-[10px] left-[12px] right-[12px]">
                  <p className="font-['Barlow_Condensed'] text-[13px] font-[700] text-[#FFFFFF]/90 leading-[1.2]">
                    Sub-Assemblies
                  </p>
                </div>
              </div>

              <div className="relative rounded-[14px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.10)] h-[100px]">
                <img
                  src="https://www.matrixplastic.com/images/HomepageTiles/BS1_8207-Matrix.jpg"
                  alt="Matrix Plastic Products engineering and design team at work"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.60)] to-transparent" />
                <div className="absolute bottom-[10px] left-[12px] right-[12px]">
                  <p className="font-['Barlow_Condensed'] text-[13px] font-[700] text-[#FFFFFF]/90 leading-[1.2]">
                    Engineering & DFM
                  </p>
                </div>
              </div>
            </div>

            {/* Credential badge strip */}
            <div className="col-span-2 bg-[#EDF1F7] border border-[#D0D9E8] rounded-[14px] px-[24px] py-[16px] flex flex-wrap items-center justify-between gap-[12px] shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-[10px]">
                <Award className="w-5 h-5 text-[#1A5FA8]" strokeWidth={1.5} />
                <span className="font-['Inter'] text-[13px] font-medium text-[#4A5E78]">
                  ISO-Certified Quality Management
                </span>
              </div>
              <div className="w-[1px] h-[24px] bg-[#D0D9E8] hidden sm:block" />
              <div className="flex items-center gap-[10px]">
                <Shield className="w-5 h-5 text-[#1A5FA8]" strokeWidth={1.5} />
                <span className="font-['Inter'] text-[13px] font-medium text-[#4A5E78]">
                  Medical, Electronics & Safety Industries
                </span>
              </div>
              <div className="w-[1px] h-[24px] bg-[#D0D9E8] hidden sm:block" />
              <div className="flex items-center gap-[10px]">
                <Clock className="w-5 h-5 text-[#1A5FA8]" strokeWidth={1.5} />
                <span className="font-['Inter'] text-[13px] font-medium text-[#4A5E78]">
                  Nearly 5 Decades of Precision Manufacturing
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}