import { useState } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Marvel Machining turned around a critical bore repair in under 48 hours. Our line was down and they got us back up fast. Precision was spot-on — no rework needed.",
    name: "Dave Kowalski",
    role: "Maintenance Manager",
    company: "Midwest Steel Fabricators",
    rating: 5,
    image: "https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg",
    featured: true,
  },
  {
    quote: "We've been sending prototype runs to Marvel for two years. Fast quotes, accurate parts, and they actually answer the phone. That's rare in this industry.",
    name: "Sandra Reyes",
    role: "Procurement Lead",
    company: "Apex Industrial Supply",
    rating: 5,
    image: "https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg",
    featured: false,
  },
  {
    quote: "Their vertical turret lathe work on our pump housings was flawless. Tolerances held every time. We won't go anywhere else for large-diameter turning.",
    name: "Tom Briggs",
    role: "Plant Engineer",
    company: "Great Lakes Pump & Valve",
    rating: 5,
    image: "https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg",
    featured: false,
  },
  {
    quote: "First order was free and the quality blew us away. We immediately set up a blanket PO. Marvel Machining is now our primary CNC vendor for the Chicago region.",
    name: "Mike Harrington",
    role: "Facility Director",
    company: "Harrington Industrial Group",
    rating: 5,
    image: "https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg",
    featured: false,
  },
  {
    quote: "Online drawing submission saved us hours every week. The team reviews specs quickly and flags issues before cutting — that kind of communication is invaluable.",
    name: "Lisa Chen",
    role: "Engineering Manager",
    company: "Precision Dynamics LLC",
    rating: 5,
    image: "https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg",
    featured: false,
  },
  {
    quote: "Rapid response isn't just a tagline for Marvel — it's how they operate. Emergency rebuild on a gearbox housing, delivered same day. Saved our production schedule.",
    name: "Carlos Mendez",
    role: "Operations Supervisor",
    company: "Tri-State Manufacturing",
    rating: 5,
    image: "https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide3.jpg",
    featured: false,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-[14px] h-[14px] fill-[#E87722] text-[#E87722]"
          strokeWidth={0}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [hoveredId, setHoveredId] = useState(null);

  const featured = testimonials[0];
  const col1 = [testimonials[1], testimonials[3]];
  const col2 = [testimonials[2], testimonials[4]];
  const col3 = [testimonials[5]];

  return (
    <section className="py-[80px] bg-[#F4F5F7]">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[56px]">
          <div className="flex items-center gap-[10px] mb-[12px]">
            <span className="block w-[36px] h-[3px] bg-[#C8102E] rounded-full" />
            <span className="font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C8102E]">
              Client Testimonials
            </span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#1C2331] leading-[1.1] max-w-[560px]">
            What Facility Managers &amp; Engineers Say About Us
          </h2>
          <p className="mt-[14px] font-['Inter'] text-[15px] font-normal text-[#6B7280] max-w-[480px] leading-[1.6]">
            Real feedback from the industrial teams who rely on Marvel Machining to keep their operations running.
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.55fr_1fr_1fr] gap-[20px] items-start">

          {/* Featured Card — tall, left column */}
          <div
            className="lg:row-span-2 bg-[#1C2331] border border-[#C8102E]/30 rounded-[8px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.16)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px] cursor-default"
            onMouseEnter={() => setHoveredId(0)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image strip */}
            <div className="relative h-[200px] overflow-hidden">
              <img
                src={featured.image}
                alt="Marvel Machining shop floor"
                className="w-full h-full object-cover object-center"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-[rgba(28,35,49,0.55)]" />
              <div className="absolute bottom-[16px] left-[24px]">
                <span className="font-['JetBrains_Mono'] text-[10px] tracking-[0.14em] uppercase text-[#E87722] font-medium">
                  Featured Review
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-[32px]">
              <Quote className="w-[32px] h-[32px] text-[#C8102E] mb-[18px]" strokeWidth={1.5} />
              <StarRating count={featured.rating} />
              <p className="mt-[16px] font-['Inter'] text-[17px] font-normal text-[#F0F2F5]/90 leading-[1.65]">
                "{featured.quote}"
              </p>
              <div className="mt-[28px] pt-[20px] border-t border-[rgba(255,255,255,0.08)]">
                <p className="font-['Barlow_Condensed'] text-[18px] font-[700] tracking-[-0.01em] text-[#F0F2F5]/90">
                  {featured.name}
                </p>
                <p className="font-['Inter'] text-[13px] text-[#6B7280] mt-[2px]">
                  {featured.role}
                </p>
                <p className="font-['Inter'] text-[13px] font-medium text-[#C8102E] mt-[1px]">
                  {featured.company}
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 — two stacked cards */}
          {col1.map((t, idx) => (
            <div
              key={t.name}
              className="bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] p-[28px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px] cursor-default"
              onMouseEnter={() => setHoveredId(`c1-${idx}`)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-start justify-between mb-[14px]">
                <Quote className="w-[22px] h-[22px] text-[#C8102E]" strokeWidth={1.5} />
                <StarRating count={t.rating} />
              </div>
              <p className="font-['Inter'] text-[14px] font-normal text-[#1C2331] leading-[1.65] mb-[20px]">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-[12px] pt-[16px] border-t border-[#D1D5DB]">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-[#F4F5F7] flex-shrink-0">
                  <img
                    src={t.image}
                    alt={`${t.name} at ${t.company}`}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div>
                  <p className="font-['Barlow_Condensed'] text-[15px] font-[700] tracking-[-0.01em] text-[#1C2331] leading-[1.2]">
                    {t.name}
                  </p>
                  <p className="font-['Inter'] text-[12px] text-[#6B7280]">{t.role}</p>
                  <p className="font-['Inter'] text-[12px] font-medium text-[#C8102E]">{t.company}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Column 3 — two stacked cards */}
          {col2.map((t, idx) => (
            <div
              key={t.name}
              className="bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] p-[28px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px] cursor-default"
              onMouseEnter={() => setHoveredId(`c2-${idx}`)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="flex items-start justify-between mb-[14px]">
                <Quote className="w-[22px] h-[22px] text-[#C8102E]" strokeWidth={1.5} />
                <StarRating count={t.rating} />
              </div>
              <p className="font-['Inter'] text-[14px] font-normal text-[#1C2331] leading-[1.65] mb-[20px]">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-[12px] pt-[16px] border-t border-[#D1D5DB]">
                <div className="w-[40px] h-[40px] rounded-full overflow-hidden bg-[#F4F5F7] flex-shrink-0">
                  <img
                    src={t.image}
                    alt={`${t.name} at ${t.company}`}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
                <div>
                  <p className="font-['Barlow_Condensed'] text-[15px] font-[700] tracking-[-0.01em] text-[#1C2331] leading-[1.2]">
                    {t.name}
                  </p>
                  <p className="font-['Inter'] text-[12px] text-[#6B7280]">{t.role}</p>
                  <p className="font-['Inter'] text-[12px] font-medium text-[#C8102E]">{t.company}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Wide bottom card spanning col 2+3 */}
          <div
            className="md:col-span-1 lg:col-span-2 bg-[#C8102E] border border-[#A50D25] rounded-[8px] p-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.16)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#A50D25] hover:-translate-y-[2px] cursor-default"
            onMouseEnter={() => setHoveredId('wide')}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-[20px]">
              <Quote className="w-[28px] h-[28px] text-[#FFFFFF]/60 flex-shrink-0 mt-[2px]" strokeWidth={1.5} />
              <div className="flex-1">
                <StarRating count={col3[0].rating} />
                <p className="mt-[12px] font-['Inter'] text-[15px] font-normal text-[#FFFFFF]/90 leading-[1.65]">
                  "{col3[0].quote}"
                </p>
                <div className="mt-[20px] flex items-center gap-[12px]">
                  <div className="w-[44px] h-[44px] rounded-full overflow-hidden bg-[#A50D25] flex-shrink-0 border-2 border-[#FFFFFF]/20">
                    <img
                      src={col3[0].image}
                      alt={`${col3[0].name} at ${col3[0].company}`}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                  </div>
                  <div>
                    <p className="font-['Barlow_Condensed'] text-[16px] font-[700] tracking-[-0.01em] text-[#FFFFFF] leading-[1.2]">
                      {col3[0].name}
                    </p>
                    <p className="font-['Inter'] text-[12px] text-[#FFFFFF]/70">{col3[0].role}</p>
                    <p className="font-['Inter'] text-[12px] font-medium text-[#FFFFFF]/80">{col3[0].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA strip */}
        <div className="mt-[56px] flex flex-col sm:flex-row items-center justify-between gap-[20px] bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] px-[32px] py-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.10)]">
          <div>
            <p className="font-['Barlow_Condensed'] text-[20px] font-[700] tracking-[-0.02em] text-[#1C2331]">
              Ready to experience Marvel-speed service?
            </p>
            <p className="font-['Inter'] text-[13px] text-[#6B7280] mt-[2px]">
              New customers get their 1st order free. Fast quotes, online drawing submission.
            </p>
          </div>
          <a
            href="mailto:orders@marvel-speed.com"
            className="flex-shrink-0 bg-[#E87722] text-[#FFFFFF] font-['Inter'] font-[700] text-[14px] py-[12px] px-[28px] rounded-[4px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E87722] focus-visible:ring-offset-2 whitespace-nowrap"
          >
            Request a Quote
          </a>
        </div>

      </div>
    </section>
  );
}