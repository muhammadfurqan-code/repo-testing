import { Award, Shield, CheckCircle, ExternalLink } from 'lucide-react';

const associations = [
  {
    name: "Society of Plastics Engineers",
    acronym: "SPE",
    description: "Active member of the world's largest plastics technical society, advancing polymer science and engineering excellence.",
    category: "Technical Society",
    since: "Member",
  },
  {
    name: "Plastics Industry Association",
    acronym: "PLASTICS",
    description: "Aligned with the leading trade association representing the full plastics supply chain across North America.",
    category: "Trade Association",
    since: "Member",
  },
  {
    name: "ISO 9001 Certified",
    acronym: "ISO",
    description: "Quality management system certified to ISO 9001 standards, ensuring consistent, auditable processes across every production run.",
    category: "Quality Certification",
    since: "Certified",
  },
  {
    name: "American Mold Builders Association",
    acronym: "AMBA",
    description: "Affiliated with the premier trade association dedicated to the mold building industry, upholding the highest standards in tooling and moldmaking.",
    category: "Industry Association",
    since: "Member",
  },
  {
    name: "Medical Device Manufacturers Association",
    acronym: "MDMA",
    description: "Engaged with the medical device manufacturing community to stay at the forefront of regulatory compliance and precision component standards.",
    category: "Medical Industry",
    since: "Affiliate",
  },
];

export default function AssociationsSection() {
  return (
    <section className="py-[80px] bg-[#F5F7FA] relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #1A5FA8 0%, transparent 60%), radial-gradient(circle at 80% 20%, #C95C0A 0%, transparent 50%)' }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-[24px] relative z-10">

        {/* Section Header */}
        <div className="mb-[56px] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-[3px] h-[32px] bg-[#C95C0A] rounded-full" />
              <span className="font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#4A5E78]">
                Industry Affiliations
              </span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#1A5FA8] leading-[1.1] mb-4">
              Associations &amp; Certifications
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] text-[#4A5E78] leading-[1.65]">
              Matrix Plastic Products maintains active membership in the industry's most respected technical and trade organizations — a commitment to standards, continuous improvement, and the professional community that defines precision manufacturing.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] px-[24px] py-[16px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] self-start lg:self-auto">
            <Shield className="w-5 h-5 text-[#1A5FA8]" strokeWidth={1.5} />
            <span className="font-['Inter'] font-medium text-[14px] text-[#1A5FA8]">ISO 9001 Quality Certified</span>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-auto">

          {/* Featured card — ISO, spans large */}
          <div className="lg:col-span-5 lg:row-span-2 bg-[#1A5FA8] rounded-[14px] p-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.14)] flex flex-col justify-between relative overflow-hidden group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(26,95,168,0.22)] hover:-translate-y-1">
            {/* Background glow orb */}
            <div className="absolute -bottom-12 -right-12 w-[200px] h-[200px] rounded-full bg-[#C95C0A] opacity-10 blur-3xl pointer-events-none" />
            <div className="absolute top-0 right-0 w-[120px] h-[120px] rounded-full bg-[#FFFFFF] opacity-5 blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="w-[56px] h-[56px] rounded-[12px] bg-[#FFFFFF]/10 border border-[#FFFFFF]/20 flex items-center justify-center">
                  <Award className="w-7 h-7 text-[#FFFFFF]/90" strokeWidth={1.5} />
                </div>
                <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.1em] uppercase text-[#FFFFFF]/60 bg-[#FFFFFF]/10 border border-[#FFFFFF]/15 rounded-full px-3 py-1">
                  Quality Certification
                </span>
              </div>

              <div className="font-['Barlow_Condensed'] text-[52px] font-[800] tracking-[-0.03em] text-[#FFFFFF]/90 leading-[1] mb-2">
                ISO
              </div>
              <div className="font-['Barlow_Condensed'] text-[22px] font-[600] text-[#FFFFFF]/80 mb-4 leading-[1.2]">
                9001 Certified
              </div>
              <p className="font-['Inter'] font-normal text-[15px] text-[#FFFFFF]/75 leading-[1.65] mb-6">
                Our quality management system is certified to ISO 9001 standards — ensuring every mold, every part, and every production run meets documented, auditable, and continuously improving quality benchmarks. Precision is not an aspiration; it is our process.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#FFFFFF]/15">
              <CheckCircle className="w-4 h-4 text-[#C95C0A]" strokeWidth={2} />
              <span className="font-['Inter'] font-medium text-[13px] text-[#FFFFFF]/70">
                Audited &amp; Maintained Annually
              </span>
            </div>
          </div>

          {/* SPE */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] p-[32px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex flex-col gap-4 group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-0.5">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-['Barlow_Condensed'] text-[36px] font-[800] tracking-[-0.03em] text-[#1A5FA8] leading-[1]">
                  SPE
                </div>
                <div className="font-['Inter'] font-medium text-[14px] text-[#4A5E78] mt-1">
                  Society of Plastics Engineers
                </div>
              </div>
              <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.08em] uppercase text-[#4A5E78] bg-[#EDF1F7] border border-[#D0D9E8] rounded-full px-3 py-1 whitespace-nowrap">
                Technical Society
              </span>
            </div>
            <p className="font-['Inter'] font-normal text-[14px] text-[#4A5E78] leading-[1.65]">
              Active member of the world's largest plastics technical society, advancing polymer science, engineering best practices, and innovation across the global plastics industry.
            </p>
            <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[#D0D9E8]">
              <div className="w-2 h-2 rounded-full bg-[#1A5FA8]" />
              <span className="font-['Inter'] font-medium text-[12px] text-[#4A5E78]">Active Member</span>
            </div>
          </div>

          {/* AMBA */}
          <div className="lg:col-span-4 bg-[#EDF1F7] border border-[#D0D9E8] rounded-[14px] p-[32px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex flex-col gap-4 group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-0.5">
            <div>
              <div className="font-['Barlow_Condensed'] text-[36px] font-[800] tracking-[-0.03em] text-[#1A5FA8] leading-[1]">
                AMBA
              </div>
              <div className="font-['Inter'] font-medium text-[14px] text-[#4A5E78] mt-1">
                American Mold Builders Association
              </div>
            </div>
            <p className="font-['Inter'] font-normal text-[14px] text-[#4A5E78] leading-[1.65]">
              Affiliated with the premier trade association dedicated to the mold building industry, upholding the highest standards in tooling and moldmaking craftsmanship.
            </p>
            <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[#D0D9E8]">
              <div className="w-2 h-2 rounded-full bg-[#C95C0A]" />
              <span className="font-['Inter'] font-medium text-[12px] text-[#4A5E78]">Active Member</span>
            </div>
          </div>

          {/* PLASTICS */}
          <div className="lg:col-span-3 bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] p-[32px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex flex-col gap-4 group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-0.5">
            <div>
              <div className="font-['Barlow_Condensed'] text-[28px] font-[800] tracking-[-0.03em] text-[#1A5FA8] leading-[1]">
                PLASTICS
              </div>
              <div className="font-['Inter'] font-medium text-[13px] text-[#4A5E78] mt-1">
                Plastics Industry Association
              </div>
            </div>
            <p className="font-['Inter'] font-normal text-[13px] text-[#4A5E78] leading-[1.65]">
              Aligned with the leading trade association representing the full plastics supply chain across North America.
            </p>
            <div className="flex items-center gap-2 mt-auto pt-3 border-t border-[#D0D9E8]">
              <div className="w-2 h-2 rounded-full bg-[#1A5FA8]" />
              <span className="font-['Inter'] font-medium text-[12px] text-[#4A5E78]">Member</span>
            </div>
          </div>

          {/* MDMA — wide bottom */}
          <div className="lg:col-span-12 bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] p-[32px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex flex-col md:flex-row md:items-center gap-6 group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-0.5">
            <div className="flex-shrink-0">
              <div className="w-[64px] h-[64px] rounded-[12px] bg-[#EDF1F7] border border-[#D0D9E8] flex items-center justify-center">
                <Shield className="w-7 h-7 text-[#1A5FA8]" strokeWidth={1.5} />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="font-['Barlow_Condensed'] text-[24px] font-[800] tracking-[-0.03em] text-[#1A5FA8]">MDMA</span>
                <span className="font-['Inter'] font-medium text-[14px] text-[#4A5E78]">Medical Device Manufacturers Association</span>
                <span className="font-['JetBrains_Mono'] text-[11px] tracking-[0.08em] uppercase text-[#4A5E78] bg-[#EDF1F7] border border-[#D0D9E8] rounded-full px-3 py-1">
                  Medical Industry
                </span>
              </div>
              <p className="font-['Inter'] font-normal text-[14px] text-[#4A5E78] leading-[1.65]">
                Engaged with the medical device manufacturing community to remain at the forefront of regulatory compliance, FDA-aligned quality systems, and precision component standards for critical healthcare applications.
              </p>
            </div>
            <div className="flex-shrink-0 flex items-center gap-2 border-l border-[#D0D9E8] pl-6 self-stretch items-center">
              <div className="w-2 h-2 rounded-full bg-[#C95C0A]" />
              <span className="font-['Inter'] font-medium text-[12px] text-[#4A5E78] whitespace-nowrap">Affiliate Member</span>
            </div>
          </div>

        </div>

        {/* Bottom CTA strip */}
        <div className="mt-[48px] bg-[#1A5FA8] rounded-[14px] px-[32px] py-[28px] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 shadow-[0_12px_40px_rgba(0,0,0,0.14)]">
          <div>
            <p className="font-['Barlow_Condensed'] text-[20px] font-[700] text-[#FFFFFF]/90 leading-[1.2] mb-1">
              Ready to work with an ISO-certified precision molder?
            </p>
            <p className="font-['Inter'] font-normal text-[14px] text-[#FFFFFF]/65">
              Nearly 5 decades of moldmaking expertise — call (630) 595-6144 or request a quote today.
            </p>
          </div>
          <a
            href="https://www.matrixplastic.com/contact-us/request-a-quote"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-[#C95C0A] text-[#FFFFFF] font-['Inter'] font-[700] text-[15px] py-[12px] px-[28px] rounded-[6px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A5FA8]"
          >
            Request a Quote
            <ExternalLink className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>

      </div>
    </section>
  );
}