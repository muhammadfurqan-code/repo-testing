import { Award, Shield, CheckCircle, Clock, Microscope, Layers } from 'lucide-react';

export default function StatsCredentials() {
  const stats = [
    {
      value: '50',
      suffix: '+',
      label: 'Years in Business',
      sublabel: 'Nearly 5 decades of precision manufacturing',
      icon: Clock,
      large: true,
    },
    {
      value: 'ISO',
      suffix: '',
      label: '9001 Certified',
      sublabel: 'Quality management systems',
      icon: Award,
      large: false,
    },
    {
      value: '±0.001"',
      suffix: '',
      label: 'Close Tolerances',
      sublabel: 'Surgical-grade dimensional accuracy',
      icon: Microscope,
      large: false,
    },
    {
      value: '100%',
      suffix: '',
      label: 'In-House Capability',
      sublabel: 'DFM, tooling, molding & inspection',
      icon: Layers,
      large: false,
    },
    {
      value: '3',
      suffix: '',
      label: 'Core Industries Served',
      sublabel: 'Medical, electronics & safety sectors',
      icon: Shield,
      large: false,
    },
    {
      value: 'FDA',
      suffix: '',
      label: 'Compliant Processes',
      sublabel: 'Medical-grade manufacturing standards',
      icon: CheckCircle,
      large: false,
    },
  ];

  const credentials = [
    'ISO 9001 Certified Quality System',
    'Medical Device Component Expertise',
    'In-House Mold Design & Build',
    'DFM Engineering Support',
    'Advanced Material Processing',
    'Cleanroom-Compatible Production',
    'Full Inspection & Validation',
    'Global OEM Partner Experience',
  ];

  return (
    <section className="py-[80px] bg-[#F5F7FA] relative overflow-hidden">
      <style>{`
        @keyframes stats_subtleFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.06; }
          50% { transform: translateY(-18px) rotate(3deg); opacity: 0.10; }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <div
          className="absolute -top-[80px] -left-[80px] w-[420px] h-[420px] rounded-full bg-[#1A5FA8] opacity-[0.06] animate-[stats_subtleFloat_12s_ease-in-out_infinite]"
        />
        <div
          className="absolute -bottom-[60px] -right-[60px] w-[320px] h-[320px] rounded-full bg-[#C95C0A] opacity-[0.05] animate-[stats_subtleFloat_16s_ease-in-out_infinite_reverse]"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-[24px] relative z-10">

        <div className="mb-[56px] max-w-[680px]">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[3px] w-[40px] bg-[#C95C0A] rounded-full" />
            <span className="font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C95C0A]">
              Proven Track Record
            </span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#1A5FA8] leading-[1.15] mb-4">
            Decades of Precision.<br />
            <span className="text-[#4A5E78]">Credentials That Speak for Themselves.</span>
          </h2>
          <p className="font-['Inter'] font-normal text-[16px] text-[#4A5E78] leading-[1.65] max-w-[560px]">
            Matrix Plastic Products brings nearly five decades of in-house expertise to every program — from micro-component tooling to full-scale medical device production. Our certifications, tolerances, and capabilities are the foundation global OEMs rely on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-[20px] mb-[40px]">

          <div className="lg:col-span-5 lg:row-span-2 bg-[#1A5FA8] rounded-[14px] p-[32px] flex flex-col justify-between shadow-[0_12px_40px_rgba(0,0,0,0.14)] relative overflow-hidden group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(26,95,168,0.22)] hover:-translate-y-[2px]">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-[#FFFFFF] opacity-[0.04] translate-x-[60px] -translate-y-[60px]" />
            <div className="absolute bottom-0 left-0 w-[140px] h-[140px] rounded-full bg-[#C95C0A] opacity-[0.12] -translate-x-[40px] translate-y-[40px]" />

            <div className="relative z-10">
              <div className="w-[52px] h-[52px] rounded-[12px] bg-[#FFFFFF]/10 flex items-center justify-center mb-[28px] border border-[#FFFFFF]/20">
                <Clock className="w-6 h-6 text-[#FFFFFF]/90" strokeWidth={1.5} />
              </div>
              <div className="font-['Barlow_Condensed'] text-[clamp(72px,8vw,96px)] font-[800] leading-[1] tracking-[-0.03em] text-[#FFFFFF]/90 mb-[4px]">
                50<span className="text-[#C95C0A]">+</span>
              </div>
              <div className="font-['Barlow_Condensed'] text-[22px] font-[600] text-[#FFFFFF]/90 mb-[10px]">
                Years in Business
              </div>
              <p className="font-['Inter'] text-[14px] text-[#FFFFFF]/70 leading-[1.6]">
                Nearly five decades of continuous in-house DFM, mold making, and precision injection molding expertise — serving global leaders in medical, electronics, and safety industries.
              </p>
            </div>

            <div className="relative z-10 mt-[32px] pt-[24px] border-t border-[#FFFFFF]/15">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#C95C0A] animate-pulse" />
                <span className="font-['JetBrains_Mono'] text-[11px] text-[#FFFFFF]/60 tracking-[0.08em] uppercase">
                  Est. mid-1970s · Elk Grove Village, IL
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] p-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] hover:-translate-y-[2px] group">
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[#EDF1F7] flex items-center justify-center mb-[20px]">
              <Microscope className="w-5 h-5 text-[#1A5FA8]" strokeWidth={1.5} />
            </div>
            <div className="font-['Barlow_Condensed'] text-[42px] font-[800] tracking-[-0.03em] text-[#1A5FA8] leading-[1] mb-[6px]">
              ±0.001<span className="text-[24px] font-[600]">"</span>
            </div>
            <div className="font-['Barlow_Condensed'] text-[18px] font-[600] text-[#1A5FA8] mb-[8px]">
              Close Tolerances
            </div>
            <p className="font-['Inter'] text-[13px] text-[#4A5E78] leading-[1.6]">
              Surgical-grade dimensional accuracy across micro-components and sub-assemblies for critical applications.
            </p>
          </div>

          <div className="lg:col-span-3 bg-[#C95C0A] rounded-[14px] p-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] hover:-translate-y-[2px] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[100px] h-[100px] rounded-full bg-[#FFFFFF] opacity-[0.07] translate-x-[30px] -translate-y-[30px]" />
            <div className="relative z-10">
              <div className="w-[44px] h-[44px] rounded-[10px] bg-[#FFFFFF]/15 flex items-center justify-center mb-[20px]">
                <Award className="w-5 h-5 text-[#FFFFFF]/90" strokeWidth={1.5} />
              </div>
              <div className="font-['Barlow_Condensed'] text-[42px] font-[800] tracking-[-0.03em] text-[#FFFFFF]/90 leading-[1] mb-[6px]">
                ISO
              </div>
              <div className="font-['Barlow_Condensed'] text-[18px] font-[600] text-[#FFFFFF]/90 mb-[8px]">
                9001 Certified
              </div>
              <p className="font-['Inter'] text-[13px] text-[#FFFFFF]/75 leading-[1.6]">
                Rigorous quality management systems governing every stage of production.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] p-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] hover:-translate-y-[2px]">
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[#EDF1F7] flex items-center justify-center mb-[20px]">
              <Layers className="w-5 h-5 text-[#1A5FA8]" strokeWidth={1.5} />
            </div>
            <div className="font-['Barlow_Condensed'] text-[42px] font-[800] tracking-[-0.03em] text-[#1A5FA8] leading-[1] mb-[6px]">
              100%
            </div>
            <div className="font-['Barlow_Condensed'] text-[18px] font-[600] text-[#1A5FA8] mb-[8px]">
              In-House Capability
            </div>
            <p className="font-['Inter'] text-[13px] text-[#4A5E78] leading-[1.6]">
              DFM engineering, mold design & build, injection molding, and full inspection — all under one roof.
            </p>
          </div>

          <div className="lg:col-span-3 bg-[#EDF1F7] border border-[#D0D9E8] rounded-[14px] p-[32px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-[2px]">
            <div className="w-[44px] h-[44px] rounded-[10px] bg-[#FFFFFF] flex items-center justify-center mb-[20px] shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
              <CheckCircle className="w-5 h-5 text-[#C95C0A]" strokeWidth={1.5} />
            </div>
            <div className="font-['Barlow_Condensed'] text-[42px] font-[800] tracking-[-0.03em] text-[#1A5FA8] leading-[1] mb-[6px]">
              FDA
            </div>
            <div className="font-['Barlow_Condensed'] text-[18px] font-[600] text-[#1A5FA8] mb-[8px]">
              Compliant Processes
            </div>
            <p className="font-['Inter'] text-[13px] text-[#4A5E78] leading-[1.6]">
              Medical-grade manufacturing standards for device component production.
            </p>
          </div>
        </div>

        <div className="bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] p-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.10)]">
          <div className="flex items-center gap-3 mb-[24px]">
            <Shield className="w-5 h-5 text-[#1A5FA8]" strokeWidth={1.5} />
            <span className="font-['Barlow_Condensed'] text-[18px] font-[600] text-[#1A5FA8] tracking-[-0.01em]">
              Capability & Compliance Credentials
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-[12px]">
            {credentials.map((cred, i) => (
              <div
                key={i}
                className="flex items-center gap-[10px] bg-[#F5F7FA] border border-[#D0D9E8] rounded-[8px] py-[10px] px-[14px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:border-[#1A5FA8] hover:bg-[#EDF1F7]"
              >
                <div className="w-[6px] h-[6px] rounded-full bg-[#C95C0A] flex-shrink-0" />
                <span className="font-['Inter'] text-[12px] font-medium text-[#4A5E78] leading-[1.4]">
                  {cred}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[48px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[20px] pt-[32px] border-t border-[#D0D9E8]">
          <div>
            <p className="font-['Inter'] text-[15px] text-[#4A5E78] leading-[1.6]">
              Ready to partner with a precision manufacturer your program can depend on?
            </p>
            <p className="font-['JetBrains_Mono'] text-[12px] text-[#4A5E78]/70 mt-[4px] tracking-[0.04em]">
              Call us: (630) 595-6144 · info@matrixplastic.com
            </p>
          </div>
          <a
            href="https://www.matrixplastic.com/contact-us/request-a-quote"
            className="flex-shrink-0 bg-[#C95C0A] text-[#FFFFFF] font-['Inter'] font-[700] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 hover:-translate-y-[1px] hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Request a Quote
          </a>
        </div>

      </div>
    </section>
  );
}