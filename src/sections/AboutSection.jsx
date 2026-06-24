import { useState } from 'react';
import { Award, Zap, Clock, Shield, Phone, Mail } from 'lucide-react';

export default function AboutSection() {
  const [imgErrors, setImgErrors] = useState({});

  const stats = [
    { value: '25+', label: 'Years in Operation', icon: Award },
    { value: '48hr', label: 'Rapid Turnaround', icon: Clock },
    { value: '0.001"', label: 'Tolerance Precision', icon: Zap },
    { value: '100%', label: 'Quality Guaranteed', icon: Shield },
  ];

  return (
    <section className="py-[80px] bg-[#F4F5F7]">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="block w-[40px] h-[3px] bg-[#C8102E]"></span>
          <span className="font-['JetBrains_Mono'] text-[13px] font-medium text-[#C8102E] uppercase tracking-[0.12em]">
            About Marvel Machining
          </span>
        </div>

        {/* Main bento grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Large image card — spans 5 cols, 2 rows */}
          <div className="lg:col-span-5 lg:row-span-2 relative rounded-[10px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.16)] min-h-[420px] lg:min-h-[560px]">
            <img
              src="https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg"
              alt="Marvel Machining shop floor — CNC machines in operation"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.82)] via-[rgba(28,37,48,0.35)] to-transparent"></div>

            {/* Badge */}
            <div className="absolute top-6 left-6">
              <span className="inline-block bg-[#C8102E] text-[#FFFFFF] font-['Barlow_Condensed'] font-[700] text-[13px] uppercase tracking-[0.1em] py-[6px] px-[14px] rounded-[6px] shadow-[0_0_40px_rgba(200,16,46,0.22)]">
                Est. Chicago Metro
              </span>
            </div>

            {/* Bottom overlay content */}
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-['Barlow_Condensed'] font-[800] text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.03em] text-[#F0F2F4]/90 mb-2">
                A Powerful Partner<br />You Can Trust
              </p>
              <p className="font-['Inter'] text-[14px] font-normal text-[#F0F2F4]/75 leading-[1.6]">
                Serving industrial facilities across the Chicago metro with superhero speed and precision you can count on.
              </p>
            </div>
          </div>

          {/* Brand story card — spans 7 cols */}
          <div className="lg:col-span-7 bg-[#FFFFFF] border border-[#D1D5DB] rounded-[10px] p-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
            <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#1C2530] mb-4 leading-[1.15]">
              High Accuracy Precision Machining — Built for the Demands of Industry
            </h2>
            <p className="font-['Inter'] text-[15px] font-normal text-[#6B7280] leading-[1.7] mb-5">
              Marvel Machining was founded with one mission: keep Chicago-area facilities running without downtime. We specialize in rapid-response CNC machining, boring, and vertical turret lathe work for plant engineers and maintenance directors who can't afford to wait.
            </p>
            <p className="font-['Inter'] text-[15px] font-normal text-[#6B7280] leading-[1.7] mb-6">
              Our facility is purpose-built for low-volume, fast-turnaround work — from prototype runs and worn-part rebuilds to critical bearing dimensions held to <span className="font-['JetBrains_Mono'] text-[13px] text-[#C8102E] font-medium">0.001"</span> tolerance. No bureaucracy. No runaround. Just parts, fast.
            </p>

            {/* Differentiator callout */}
            <div className="border-l-[3px] border-[#C8102E] pl-5 mb-6 bg-[#F4F5F7] py-[14px] pr-[16px] rounded-r-[6px]">
              <p className="font-['Barlow_Condensed'] text-[20px] font-[700] text-[#1C2530] leading-[1.2] mb-1">
                New Customers: Your 1st Order Is Free
              </p>
              <p className="font-['Inter'] text-[14px] text-[#6B7280] font-normal leading-[1.6]">
                We're open for business and confident enough in our work to put our money where our mouth is. Experience the Marvel difference — zero risk.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://marvelspeed.com/contact-us"
                className="inline-flex items-center gap-2 bg-[#F97316] text-[#FFFFFF] font-['Inter'] font-[700] text-[14px] py-[12px] px-[28px] rounded-[6px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                Request a Quote
              </a>
              <a
                href="tel:6303500075"
                className="inline-flex items-center gap-2 bg-transparent text-[#C8102E] border border-[#C8102E] font-['Inter'] font-medium text-[14px] py-[12px] px-[28px] rounded-[6px] hover:bg-[#C8102E] hover:text-[#FFFFFF] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                <Phone className="w-4 h-4" strokeWidth={1.5} />
                630 350-0075
              </a>
            </div>
          </div>

          {/* Stats row — spans 7 cols, sits below brand story */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="bg-[#FFFFFF] border border-[#D1D5DB] rounded-[10px] p-[20px] shadow-[0_1px_3px_rgba(0,0,0,0.10)] flex flex-col items-start gap-2 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-[2px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                <div className="w-8 h-8 rounded-[6px] bg-[#C8102E]/10 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-[#C8102E]" strokeWidth={1.5} />
                </div>
                <span className="font-['Barlow_Condensed'] text-[26px] font-[800] tracking-[-0.03em] text-[#1C2530] leading-none">
                  {value}
                </span>
                <span className="font-['Inter'] text-[12px] font-medium text-[#6B7280] leading-[1.4]">
                  {label}
                </span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom image strip — asymmetric 3-col bento */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 mt-6">

          {/* Large featured image */}
          <div className="sm:col-span-6 relative rounded-[10px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] h-[240px] sm:h-[280px] group">
            <img
              src="https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg"
              alt="Low volume rapid response CNC machining at Marvel Machining"
              className="w-full h-full object-cover transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.65)] to-transparent"></div>
            <div className="absolute bottom-5 left-5 right-5">
              <span className="font-['Barlow_Condensed'] text-[18px] font-[700] text-[#F0F2F4]/90 leading-[1.2]">
                Low Volume & Rapid Response
              </span>
              <p className="font-['Inter'] text-[12px] text-[#F0F2F4]/70 mt-1 leading-[1.5]">
                Fast set-up for prototypes, low volumes, and worn part rebuilds.
              </p>
            </div>
          </div>

          {/* Two smaller images stacked */}
          <div className="sm:col-span-3 relative rounded-[10px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] h-[200px] sm:h-[280px] group">
            <img
              src="https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg"
              alt="CNC boring mill delivering high tolerance inside bearing dimensions"
              className="w-full h-full object-cover transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.65)] to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="font-['Barlow_Condensed'] text-[16px] font-[700] text-[#F0F2F4]/90 leading-[1.2]">
                CNC Boring
              </span>
            </div>
          </div>

          <div className="sm:col-span-3 relative rounded-[10px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] h-[200px] sm:h-[280px] group">
            <img
              src="https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg"
              alt="Vertical turret lathe machining inside and outside seats"
              className="w-full h-full object-cover transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.65)] to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <span className="font-['Barlow_Condensed'] text-[16px] font-[700] text-[#F0F2F4]/90 leading-[1.2]">
                Vertical Turret Lathes
              </span>
            </div>
          </div>

        </div>

        {/* Contact strip */}
        <div className="mt-6 bg-[#1C2530] rounded-[10px] px-[32px] py-[24px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-[0_0_40px_rgba(200,16,46,0.22)]">
          <div>
            <p className="font-['Barlow_Condensed'] text-[20px] font-[700] text-[#F0F2F4]/90 leading-[1.2]">
              Ready to get your parts machined — fast?
            </p>
            <p className="font-['Inter'] text-[13px] text-[#F0F2F4]/60 mt-1">
              From fast quotes to online drawing submission, pick-up and delivery.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="mailto:orders@marvel-speed.com"
              className="inline-flex items-center gap-2 bg-transparent text-[#F0F2F4]/90 border border-[rgba(255,255,255,0.15)] font-['Inter'] font-medium text-[13px] py-[10px] px-[18px] rounded-[6px] hover:border-[rgba(255,255,255,0.35)] hover:text-[#FFFFFF] focus-visible:ring-2 focus-visible:ring-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <Mail className="w-4 h-4" strokeWidth={1.5} />
              orders@marvel-speed.com
            </a>
            <a
              href="https://marvelspeed.com/contact-us"
              className="inline-flex items-center gap-2 bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-[700] text-[13px] py-[10px] px-[22px] rounded-[6px] hover:bg-[#A50D26] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              Book Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}