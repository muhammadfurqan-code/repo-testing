import { useState } from 'react';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    image: 'https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg',
    date: 'January 14, 2025',
    readTime: '4 min read',
    category: 'Operations',
    title: 'Why Rapid-Response Machining Keeps Chicago Facilities Running',
    excerpt:
      'When a critical component fails on the floor, every hour of downtime costs money. Discover how Marvel Machining\'s fast-turnaround CNC services eliminate costly production delays for industrial facilities across the Chicago metro.',
    url: 'https://marvelspeed.com/contact-us',
    featured: true,
  },
  {
    id: 2,
    image: 'https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg',
    date: 'January 8, 2025',
    readTime: '3 min read',
    category: 'CNC Boring',
    title: 'High-Tolerance Boring: What Procurement Teams Need to Know',
    excerpt:
      'Inside bearing dimensions demand zero compromise. Our CNC boring mills hold critical tolerances that protect your equipment and your bottom line.',
    url: 'https://marvelspeed.com/contact-us',
    featured: false,
  },
  {
    id: 3,
    image: 'https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg',
    date: 'December 30, 2024',
    readTime: '3 min read',
    category: 'Vertical Lathes',
    title: 'Vertical Turret Lathes: The Workhorse Behind Precision Seats',
    excerpt:
      'From inside seats to outside profiles, our vertical turret lathes handle the heavy-duty work that keeps your machinery performing at spec.',
    url: 'https://marvelspeed.com/contact-us',
    featured: false,
  },
];

export default function BlogInsights() {
  const [hoveredId, setHoveredId] = useState(null);

  const featured = articles[0];
  const secondary = articles.slice(1);

  return (
    <section className="py-[80px] bg-[#F4F5F7]">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-[16px] mb-[48px]">
          <div>
            <span className="inline-block font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C8102E] mb-[10px]">
              Insights & Updates
            </span>
            <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#1C2331] leading-[1.1]">
              From the Shop Floor
            </h2>
            <p className="font-['Inter'] font-normal text-[#6B7280] text-[15px] mt-[8px] max-w-[480px]">
              Real-world machining knowledge for facility managers, engineers, and procurement teams who can't afford downtime.
            </p>
          </div>
          <a
            href="https://marvelspeed.com/contact-us"
            className="inline-flex items-center gap-[8px] font-['Inter'] font-medium text-[14px] text-[#C8102E] hover:text-[#A50D25] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap group"
          >
            View All Articles
            <ChevronRight className="w-4 h-4 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-[3px]" strokeWidth={2} />
          </a>
        </div>

        {/* Bento Grid: 1 featured large + 2 smaller stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[24px]">

          {/* Featured Card — Large */}
          <article
            className="bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[2px] flex flex-col"
            onMouseEnter={() => setHoveredId(featured.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <div className="relative overflow-hidden h-[260px] sm:h-[320px] lg:h-[360px] flex-shrink-0">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.03]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-[rgba(28,35,49,0.35)]" />
              {/* Category badge overlaid on image */}
              <span className="absolute top-[16px] left-[16px] bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-medium text-[11px] tracking-[0.08em] uppercase px-[10px] py-[5px] rounded-[4px]">
                {featured.category}
              </span>
              <span className="absolute top-[16px] right-[16px] bg-[rgba(28,35,49,0.75)] text-[#F0F2F5]/90 font-['Inter'] text-[11px] px-[10px] py-[5px] rounded-[4px] backdrop-blur-[4px]">
                Featured
              </span>
            </div>

            {/* Body */}
            <div className="p-[32px] flex flex-col flex-1">
              <div className="flex items-center gap-[16px] mb-[14px]">
                <span className="flex items-center gap-[5px] font-['Inter'] text-[13px] text-[#6B7280]">
                  <Calendar className="w-[14px] h-[14px]" strokeWidth={1.5} />
                  {featured.date}
                </span>
                <span className="w-[3px] h-[3px] rounded-full bg-[#D1D5DB]" />
                <span className="flex items-center gap-[5px] font-['Inter'] text-[13px] text-[#6B7280]">
                  <Clock className="w-[14px] h-[14px]" strokeWidth={1.5} />
                  {featured.readTime}
                </span>
              </div>

              <h3 className="font-['Barlow_Condensed'] text-[24px] font-[600] tracking-[-0.02em] text-[#1C2331] leading-[1.2] mb-[12px]">
                {featured.title}
              </h3>
              <p className="font-['Inter'] font-normal text-[15px] text-[#6B7280] leading-[1.65] flex-1 mb-[24px]">
                {featured.excerpt}
              </p>

              <a
                href={featured.url}
                className="inline-flex items-center gap-[8px] self-start bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-semibold text-[14px] py-[12px] px-[28px] rounded-[4px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#A50D25] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 group"
              >
                Read Article
                <ArrowRight className="w-4 h-4 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-[3px]" strokeWidth={2} />
              </a>
            </div>
          </article>

          {/* Secondary Cards — Stacked */}
          <div className="flex flex-col gap-[24px]">
            {secondary.map((article) => (
              <article
                key={article.id}
                className="bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-[2px] flex flex-col sm:flex-row lg:flex-col"
                onMouseEnter={() => setHoveredId(article.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-[180px] sm:h-auto sm:w-[200px] sm:min-h-[180px] lg:h-[180px] lg:w-auto flex-shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:scale-[1.04]"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-[rgba(28,35,49,0.25)]" />
                  <span className="absolute top-[12px] left-[12px] bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-medium text-[10px] tracking-[0.08em] uppercase px-[8px] py-[4px] rounded-[4px]">
                    {article.category}
                  </span>
                </div>

                {/* Body */}
                <div className="p-[24px] flex flex-col flex-1">
                  <div className="flex items-center gap-[12px] mb-[10px]">
                    <span className="flex items-center gap-[4px] font-['Inter'] text-[12px] text-[#6B7280]">
                      <Calendar className="w-[12px] h-[12px]" strokeWidth={1.5} />
                      {article.date}
                    </span>
                    <span className="w-[3px] h-[3px] rounded-full bg-[#D1D5DB]" />
                    <span className="flex items-center gap-[4px] font-['Inter'] text-[12px] text-[#6B7280]">
                      <Clock className="w-[12px] h-[12px]" strokeWidth={1.5} />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-['Barlow_Condensed'] text-[20px] font-[600] tracking-[-0.02em] text-[#1C2331] leading-[1.2] mb-[8px]">
                    {article.title}
                  </h3>
                  <p className="font-['Inter'] font-normal text-[13px] text-[#6B7280] leading-[1.6] flex-1 mb-[16px] line-clamp-3">
                    {article.excerpt}
                  </p>

                  <a
                    href={article.url}
                    className="inline-flex items-center gap-[6px] self-start font-['Inter'] font-semibold text-[13px] text-[#C8102E] hover:text-[#A50D25] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-1 rounded-[2px]"
                  >
                    Read More
                    <ArrowRight className="w-[14px] h-[14px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-[3px]" strokeWidth={2} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-[48px] bg-[#1C2331] rounded-[8px] px-[32px] py-[28px] flex flex-col sm:flex-row items-center justify-between gap-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
          <div>
            <p className="font-['Barlow_Condensed'] text-[20px] font-[600] tracking-[-0.02em] text-[#F0F2F5]/90 leading-[1.2]">
              Ready to put precision to work for your facility?
            </p>
            <p className="font-['Inter'] text-[13px] text-[#6B7280] mt-[4px]">
              New customers get their 1st order free. Fast quotes, online drawing submission, pick-up & delivery.
            </p>
          </div>
          <a
            href="tel:6303500075"
            className="inline-flex items-center gap-[8px] bg-[#E87722] text-[#FFFFFF] font-['Inter'] font-[700] text-[14px] py-[12px] px-[28px] rounded-[4px] whitespace-nowrap transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#E87722] focus-visible:ring-offset-2 shadow-[0_0_40px_rgba(200,16,46,0.22)]"
          >
            Call 630 350-0075
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>

      </div>
    </section>
  );
}