import { ShieldCheck, Award, Clock, Zap, Phone, Mail } from 'lucide-react';

function TrustBar() {
  const trustItems = [
    {
      icon: <Clock className="w-5 h-5" strokeWidth={1.5} />,
      label: "Years in Business",
      value: "20+",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" strokeWidth={1.5} />,
      label: "Quality Standard",
      value: "ISO-Compliant",
    },
    {
      icon: <Zap className="w-5 h-5" strokeWidth={1.5} />,
      label: "Rapid Response",
      value: "Same-Day Quotes",
    },
    {
      icon: <Award className="w-5 h-5" strokeWidth={1.5} />,
      label: "First Order",
      value: "FREE",
    },
    {
      icon: <Phone className="w-5 h-5" strokeWidth={1.5} />,
      label: "Chicago Area",
      value: "630-350-0075",
      href: "tel:6303500075",
    },
    {
      icon: <Mail className="w-5 h-5" strokeWidth={1.5} />,
      label: "Orders",
      value: "orders@marvel-speed.com",
      href: "mailto:orders@marvel-speed.com",
    },
  ];

  return (
    <section className="bg-[#1C2331] border-y-[1px] border-y-[rgba(255,255,255,0.08)]">
      <div className="max-w-[1200px] mx-auto px-[24px]">
        <div className="flex flex-wrap items-stretch justify-between gap-y-0 divide-x-[1px] divide-[rgba(255,255,255,0.08)]">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[160px] flex items-center gap-[10px] py-[18px] px-[20px] group"
            >
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-center gap-[10px] w-full transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2331] rounded-[2px]"
                  aria-label={`${item.label}: ${item.value}`}
                >
                  <span className="text-[#C8102E] flex-shrink-0 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-[#E87722]">
                    {item.icon}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-['Inter'] text-[10px] font-medium uppercase tracking-[0.08em] text-[#6B7280] leading-none mb-[3px] truncate">
                      {item.label}
                    </span>
                    <span className="font-['Barlow_Condensed'] font-[700] text-[14px] text-[#F0F2F5]/90 leading-tight truncate transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-[#E87722]">
                      {item.value}
                    </span>
                  </div>
                </a>
              ) : (
                <div className="flex items-center gap-[10px] w-full">
                  <span className="text-[#C8102E] flex-shrink-0">
                    {item.icon}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="font-['Inter'] text-[10px] font-medium uppercase tracking-[0.08em] text-[#6B7280] leading-none mb-[3px] truncate">
                      {item.label}
                    </span>
                    <span
                      className={`font-['Barlow_Condensed'] font-[700] text-[14px] leading-tight truncate ${
                        item.value === "FREE"
                          ? "text-[#E87722]"
                          : "text-[#F0F2F5]/90"
                      }`}
                    >
                      {item.value}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustBar;