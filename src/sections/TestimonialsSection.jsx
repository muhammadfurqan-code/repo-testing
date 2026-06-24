import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Marvel Machining saved our production line. We had a critical shaft failure on a Friday afternoon and they had a replacement part machined and delivered by Monday morning. No other shop in the Chicago area could touch that turnaround.",
    name: "Rick Dombrowski",
    role: "Maintenance Director",
    company: "Midwest Steel Fabricators",
    stars: 5,
    image: "https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg",
    size: "large",
  },
  {
    quote: "Their CNC boring work is consistently within tolerance. We've been sending them our bearing housings for two years and have never had a reject. That kind of reliability is hard to find.",
    name: "Sandra Kowalski",
    role: "Plant Engineer",
    company: "Lakeside Industrial Group",
    stars: 5,
    image: "https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg",
    size: "small",
  },
  {
    quote: "Fast quotes, easy drawing submission, and they actually answer the phone. Marvel Machining runs like a well-oiled machine — exactly what you want from a machining partner.",
    name: "Tom Guerrero",
    role: "Facility Manager",
    company: "Aurora Manufacturing Co.",
    stars: 5,
    image: "https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg",
    size: "small",
  },
  {
    quote: "We tried their first-order-free offer and were blown away by the quality. Now they're our go-to shop for all low-volume prototype work. The vertical turret lathe work on our valve seats was flawless.",
    name: "James Petrakis",
    role: "Senior Process Engineer",
    company: "Naperville Fluid Systems",
    stars: 5,
    image: "https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg",
    size: "medium",
  },
  {
    quote: "Responsive, precise, and priced fairly. Marvel Machining keeps our facility running when it matters most. I recommend them to every plant manager I know in the Chicago metro.",
    name: "Denise Hartley",
    role: "Operations Manager",
    company: "Elmhurst Precision Parts",
    stars: 5,
    image: "https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg",
    size: "medium",
  },
  {
    quote: "Their rapid response capability is unmatched. We had a prototype run of 12 custom flanges needed for a client demo — Marvel turned them around in 48 hours with zero dimensional issues.",
    name: "Carlos Reyes",
    role: "Project Engineer",
    company: "Schaumburg Industrial Solutions",
    stars: 5,
    image: "https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide3.jpg",
    size: "small",
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-[3px]">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-[#F97316] text-[#F97316]"
          strokeWidth={1.5}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-[80px] bg-[#F4F5F7]">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[56px] flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-block font-['JetBrains_Mono'] text-[13px] font-medium text-[#C8102E] tracking-[0.08em] uppercase mb-3">
              Client Testimonials
            </span>
            <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#1C2530] leading-[1.15]">
              Trusted by Chicago's<br />
              <span className="text-[#C8102E]">Industrial Facilities</span>
            </h2>
          </div>
          <p className="font-['Inter'] text-[15px] font-normal text-[#6B7280] max-w-[340px] leading-[1.6]">
            Real feedback from plant engineers, maintenance directors, and facility managers who depend on us to keep production moving.
          </p>
        </div>

        {/* Masonry-style Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">

          {/* Card 1 — Large, spans 2 cols on lg */}
          <div className="lg:col-span-2 bg-[#FFFFFF] border border-[#D1D5DB] rounded-[10px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px] group">
            <div className="relative h-[200px] overflow-hidden">
              <img
                src={testimonials[0].image}
                alt="Marvel Machining shop floor"
                className="w-full h-full object-cover transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,37,48,0.55)] to-transparent" />
              <div className="absolute top-4 left-5">
                <Quote className="w-8 h-8 text-[#C8102E] fill-[#C8102E] opacity-80" strokeWidth={1.5} />
              </div>
            </div>
            <div className="p-[32px]">
              <StarRating count={testimonials[0].stars} />
              <p className="font-['Inter'] text-[16px] font-normal text-[#1C2530] leading-[1.7] mt-4 mb-6">
                "{testimonials[0].quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#D1D5DB]">
                <div className="w-10 h-10 rounded-full bg-[#C8102E] flex items-center justify-center flex-shrink-0">
                  <span className="font-['Barlow_Condensed'] text-[16px] font-[700] text-[#FFFFFF]">
                    {testimonials[0].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-['Inter'] text-[14px] font-medium text-[#1C2530]">{testimonials[0].name}</p>
                  <p className="font-['Inter'] text-[13px] text-[#6B7280]">{testimonials[0].role} · {testimonials[0].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 — Small */}
          <div className="bg-[#1C2530] border border-[rgba(255,255,255,0.08)] rounded-[10px] p-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px]">
            <Quote className="w-6 h-6 text-[#C8102E] fill-[#C8102E] mb-4 opacity-90" strokeWidth={1.5} />
            <StarRating count={testimonials[1].stars} />
            <p className="font-['Inter'] text-[14px] font-normal text-[#F0F2F4]/90 leading-[1.7] mt-4 mb-6">
              "{testimonials[1].quote}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,255,255,0.10)]">
              <div className="w-9 h-9 rounded-full bg-[#C8102E] flex items-center justify-center flex-shrink-0">
                <span className="font-['Barlow_Condensed'] text-[15px] font-[700] text-[#FFFFFF]">
                  {testimonials[1].name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-['Inter'] text-[14px] font-medium text-[#F0F2F4]/90">{testimonials[1].name}</p>
                <p className="font-['Inter'] text-[12px] text-[#6B7280]">{testimonials[1].role} · {testimonials[1].company}</p>
              </div>
            </div>
          </div>

          {/* Card 3 — Small, accent left border */}
          <div className="bg-[#FFFFFF] border border-[#D1D5DB] border-l-[4px] border-l-[#F97316] rounded-[10px] p-[32px] shadow-[0_1px_3px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-[2px]">
            <Quote className="w-6 h-6 text-[#F97316] fill-[#F97316] mb-4 opacity-80" strokeWidth={1.5} />
            <StarRating count={testimonials[2].stars} />
            <p className="font-['Inter'] text-[14px] font-normal text-[#1C2530] leading-[1.7] mt-4 mb-6">
              "{testimonials[2].quote}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-[#D1D5DB]">
              <div className="w-9 h-9 rounded-full bg-[#F97316] flex items-center justify-center flex-shrink-0">
                <span className="font-['Barlow_Condensed'] text-[15px] font-[700] text-[#FFFFFF]">
                  {testimonials[2].name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-['Inter'] text-[14px] font-medium text-[#1C2530]">{testimonials[2].name}</p>
                <p className="font-['Inter'] text-[12px] text-[#6B7280]">{testimonials[2].role} · {testimonials[2].company}</p>
              </div>
            </div>
          </div>

          {/* Card 4 — Medium with image thumbnail */}
          <div className="bg-[#FFFFFF] border border-[#D1D5DB] rounded-[10px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px] group">
            <div className="relative h-[120px] overflow-hidden">
              <img
                src={testimonials[3].image}
                alt="CNC machining operation"
                className="w-full h-full object-cover transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(28,37,48,0.45)] to-transparent" />
            </div>
            <div className="p-[32px]">
              <StarRating count={testimonials[3].stars} />
              <p className="font-['Inter'] text-[14px] font-normal text-[#1C2530] leading-[1.7] mt-4 mb-6">
                "{testimonials[3].quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[#D1D5DB]">
                <div className="w-9 h-9 rounded-full bg-[#C8102E] flex items-center justify-center flex-shrink-0">
                  <span className="font-['Barlow_Condensed'] text-[15px] font-[700] text-[#FFFFFF]">
                    {testimonials[3].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-['Inter'] text-[14px] font-medium text-[#1C2530]">{testimonials[3].name}</p>
                  <p className="font-['Inter'] text-[12px] text-[#6B7280]">{testimonials[3].role} · {testimonials[3].company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 — Medium, dark surface elevated */}
          <div className="bg-[#1C2530] border border-[rgba(255,255,255,0.08)] rounded-[10px] p-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] hover:-translate-y-[2px]">
            <div className="flex items-center justify-between mb-4">
              <Quote className="w-6 h-6 text-[#C8102E] fill-[#C8102E] opacity-90" strokeWidth={1.5} />
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#6B7280] tracking-[0.06em] uppercase">Verified Client</span>
            </div>
            <StarRating count={testimonials[4].stars} />
            <p className="font-['Inter'] text-[14px] font-normal text-[#F0F2F4]/90 leading-[1.7] mt-4 mb-6">
              "{testimonials[4].quote}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-[rgba(255,255,255,0.10)]">
              <div className="w-9 h-9 rounded-full bg-[#C8102E] flex items-center justify-center flex-shrink-0">
                <span className="font-['Barlow_Condensed'] text-[15px] font-[700] text-[#FFFFFF]">
                  {testimonials[4].name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-['Inter'] text-[14px] font-medium text-[#F0F2F4]/90">{testimonials[4].name}</p>
                <p className="font-['Inter'] text-[12px] text-[#6B7280]">{testimonials[4].role} · {testimonials[4].company}</p>
              </div>
            </div>
          </div>

          {/* Card 6 — Small, spans full on mobile, accent bg strip */}
          <div className="lg:col-span-3 bg-[#FFFFFF] border border-[#D1D5DB] rounded-[10px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-[2px]">
            <div className="flex flex-col md:flex-row">
              <div className="relative w-full md:w-[280px] h-[180px] md:h-auto flex-shrink-0 overflow-hidden">
                <img
                  src={testimonials[5].image}
                  alt="Precision machined parts"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[rgba(28,37,48,0.55)] to-transparent" />
              </div>
              <div className="p-[32px] flex flex-col justify-center flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <StarRating count={testimonials[5].stars} />
                  <span className="font-['JetBrains_Mono'] text-[11px] text-[#6B7280] tracking-[0.06em] uppercase">48-Hour Turnaround</span>
                </div>
                <Quote className="w-7 h-7 text-[#C8102E] fill-[#C8102E] opacity-80 mb-3" strokeWidth={1.5} />
                <p className="font-['Inter'] text-[15px] font-normal text-[#1C2530] leading-[1.7] mb-6 max-w-[640px]">
                  "{testimonials[5].quote}"
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-[#D1D5DB]">
                  <div className="w-10 h-10 rounded-full bg-[#C8102E] flex items-center justify-center flex-shrink-0">
                    <span className="font-['Barlow_Condensed'] text-[16px] font-[700] text-[#FFFFFF]">
                      {testimonials[5].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[14px] font-medium text-[#1C2530]">{testimonials[5].name}</p>
                    <p className="font-['Inter'] text-[13px] text-[#6B7280]">{testimonials[5].role} · {testimonials[5].company}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom CTA Strip */}
        <div className="mt-[56px] bg-[#1C2530] rounded-[10px] p-[32px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
          <div>
            <p className="font-['Barlow_Condensed'] text-[22px] font-[700] text-[#F0F2F4]/90 tracking-[-0.02em]">
              Ready to experience Superhero Speed?
            </p>
            <p className="font-['Inter'] text-[14px] text-[#6B7280] mt-1">
              New customers get their <span className="text-[#F97316] font-medium">1st order free</span>. Fast quotes. Online drawing submission.
            </p>
          </div>
          <a
            href="mailto:orders@marvel-speed.com"
            className="flex-shrink-0 bg-[#F97316] text-[#FFFFFF] font-['Inter'] font-[700] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530] whitespace-nowrap"
          >
            Request a Quote
          </a>
        </div>

      </div>
    </section>
  );
}