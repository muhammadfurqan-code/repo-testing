import { Shield, Clock, Award, Users, CheckCircle, Zap } from 'lucide-react';

function TrustBar() {
  const trustItems = [
    {
      icon: <Clock className="w-5 h-5" strokeWidth={1.5} />,
      label: "Years in Business",
      value: "20+",
    },
    {
      icon: <Zap className="w-5 h-5" strokeWidth={1.5} />,
      label: "Rapid Turnaround",
      value: "24–72 Hr",
    },
    {
      icon: <CheckCircle className="w-5 h-5" strokeWidth={1.5} />,
      label: "1st Order",
      value: "FREE",
      accent: true,
    },
    {
      icon: <Shield className="w-5 h-5" strokeWidth={1.5} />,
      label: "ISO-Compliant Tolerances",
      value: "±0.0001\"",
    },
    {
      icon: <Award className="w-5 h-5" strokeWidth={1.5} />,
      label: "Chicago Metro",
      value: "Local & Fast",
    },
    {
      icon: <Users className="w-5 h-5" strokeWidth={1.5} />,
      label: "Industries Served",
      value: "50+",
    },
  ];

  return (
    <section className="bg-[#1C2530] border-b border-[rgba(255,255,255,0.08)]">
      <div className="max-w-[1200px] mx-auto px-[24px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-0 divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.08)]">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-row md:flex-col lg:flex-row items-center gap-[10px] py-[18px] px-[20px] flex-1 justify-center group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[rgba(200,16,46,0.07)] w-full md:w-auto"
            >
              <div
                className={`flex-shrink-0 flex items-center justify-center w-[36px] h-[36px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  item.accent
                    ? 'bg-[#F97316] text-[#FFFFFF]'
                    : 'bg-[rgba(200,16,46,0.15)] text-[#C8102E]'
                } group-hover:scale-105`}
              >
                {item.icon}
              </div>
              <div className="flex flex-col items-start lg:items-start">
                <span
                  className={`font-['Barlow_Condensed'] font-[800] text-[20px] leading-[1.1] tracking-[-0.03em] ${
                    item.accent ? 'text-[#F97316]' : 'text-[#F0F2F4]/90'
                  }`}
                >
                  {item.value}
                </span>
                <span className="font-['Inter'] font-normal text-[11px] text-[#6B7280] uppercase tracking-[0.06em] whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-center py-[14px] px-[24px] flex-shrink-0">
            <a
              href="tel:6303500075"
              className="font-['Barlow_Condensed'] font-[800] text-[15px] tracking-[0.04em] bg-[#C8102E] text-[#FFFFFF] py-[10px] px-[22px] rounded-[6px] whitespace-nowrap transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#A50D26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530] uppercase"
            >
              630 350-0075
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustBar;