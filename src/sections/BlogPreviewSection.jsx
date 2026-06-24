import { useState } from 'react';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

export default function BlogInsights() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const articles = [
    {
      id: 0,
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg',
      date: 'January 14, 2025',
      readTime: '4 min read',
      category: 'Operations',
      title: 'Low Volume, High Stakes: Why Rapid-Response Machining Wins on the Shop Floor',
      excerpt: 'When your facility needs a replacement part yesterday, waiting weeks for a high-volume run is not an option. Discover how Marvel Machining\'s rapid-response setup slashes lead times for prototypes and low-volume runs without sacrificing tolerance.',
      url: 'https://marvelspeed.com/services_management/low-volume-rapid-response/',
    },
    {
      id: 1,
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg',
      date: 'January 8, 2025',
      readTime: '5 min read',
      category: 'CNC Technology',
      title: 'Inside CNC Boring: Holding Critical Bearing Dimensions to Spec Every Time',
      excerpt: 'Bearing seats and critical inside dimensions leave zero room for error. Our CNC boring mills deliver the high-tolerance repeatability that plant engineers in the Chicago metro rely on — shift after shift, part after part.',
      url: 'https://marvelspeed.com/services_management/cnc-boring/',
    },
    {
      id: 2,
      image: 'https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg',
      date: 'December 30, 2024',
      readTime: '3 min read',
      category: 'Equipment',
      title: 'Vertical Turret Lathes: The Unsung Hero of Heavy Industrial Machining',
      excerpt: 'VTLs handle the large-diameter, heavy-stock work that horizontal lathes simply cannot. Learn how Marvel Machining\'s vertical turret lathes machine inside and outside seats across a wide range of industrial applications.',
      url: 'https://marvelspeed.com/services_management/',
    },
  ];

  return (
    <section className="py-[80px] bg-[#F4F5F7]">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[24px] mb-[56px]">
          <div>
            <div className="flex items-center gap-[10px] mb-[14px]">
              <span className="block w-[36px] h-[3px] bg-[#C8102E] rounded-full"></span>
              <span className="font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C8102E]">
                Industry Insights
              </span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#1C2530] leading-[1.15]">
              From the Marvel Machining Floor
            </h2>
            <p className="font-['Inter'] font-normal text-[#6B7280] text-[15px] mt-[10px] max-w-[480px] leading-[1.6]">
              Practical knowledge for facility managers, plant engineers, and maintenance directors who need parts fast and right the first time.
            </p>
          </div>
          <a
            href="https://marvelspeed.com/contact-us"
            className="inline-flex items-center gap-[8px] font-['Inter'] font-medium text-[#C8102E] text-[14px] border-b-[1.5px] border-[#C8102E] pb-[2px] hover:text-[#A50D26] hover:border-[#A50D26] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] whitespace-nowrap self-start md:self-auto"
          >
            View All Articles
            <ChevronRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>

        {/* Bento Grid — asymmetric: featured large card + two smaller stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-[24px]">

          {/* Featured Card — large */}
          <article
            className="relative bg-[#FFFFFF] border border-[#D1D5DB] rounded-[10px] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.16)] hover:-translate-y-[3px] flex flex-col"
            onMouseEnter={() => setHoveredCard(0)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Image */}
            <div className="relative w-full h-[280px] sm:h-[340px] overflow-hidden bg-[#1C2530]">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105"
                style={{ filter: 'saturate(0.88)' }}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.55)] to-transparent"></div>
              {/* Category badge */}
              <span className="absolute top-[16px] left-[16px] bg-[#C8102E] text-[#FFFFFF] font-['JetBrains_Mono'] text-[11px] font-medium tracking-[0.08em] uppercase px-[10px] py-[5px] rounded-[4px]">
                {articles[0].category}
              </span>
            </div>

            {/* Content */}
            <div className="p-[32px] flex flex-col flex-1">
              <div className="flex items-center gap-[18px] mb-[16px]">
                <span className="flex items-center gap-[6px] font-['Inter'] text-[13px] text-[#6B7280]">
                  <Calendar className="w-[14px] h-[14px]" strokeWidth={1.5} />
                  {articles[0].date}
                </span>
                <span className="flex items-center gap-[6px] font-['Inter'] text-[13px] text-[#6B7280]">
                  <Clock className="w-[14px] h-[14px]" strokeWidth={1.5} />
                  {articles[0].readTime}
                </span>
              </div>
              <h3 className="font-['Barlow_Condensed'] text-[24px] font-[600] tracking-[-0.02em] text-[#1C2530] leading-[1.2] mb-[14px]">
                {articles[0].title}
              </h3>
              <p className="font-['Inter'] font-normal text-[15px] text-[#6B7280] leading-[1.65] flex-1 mb-[24px]">
                {articles[0].excerpt}
              </p>
              <a
                href={articles[0].url}
                className="inline-flex items-center gap-[8px] bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-medium text-[14px] py-[12px] px-[28px] rounded-[6px] self-start hover:bg-[#A50D26] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
              >
                Read Article
                <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </a>
            </div>
          </article>

          {/* Right column — two smaller cards stacked */}
          <div className="flex flex-col gap-[24px]">
            {articles.slice(1).map((article, idx) => (
              <article
                key={article.id}
                className="bg-[#FFFFFF] border border-[#D1D5DB] rounded-[10px] overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:-translate-y-[2px] flex flex-col sm:flex-row lg:flex-col"
                onMouseEnter={() => setHoveredCard(article.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image */}
                <div className="relative w-full sm:w-[180px] sm:flex-shrink-0 lg:w-full h-[180px] sm:h-auto lg:h-[160px] overflow-hidden bg-[#1C2530]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{ filter: 'saturate(0.82)' }}
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.45)] to-transparent"></div>
                  <span className="absolute top-[10px] left-[10px] bg-[#C8102E] text-[#FFFFFF] font-['JetBrains_Mono'] text-[10px] font-medium tracking-[0.08em] uppercase px-[8px] py-[4px] rounded-[4px]">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-[20px] flex flex-col flex-1">
                  <div className="flex items-center gap-[12px] mb-[10px]">
                    <span className="flex items-center gap-[5px] font-['Inter'] text-[12px] text-[#6B7280]">
                      <Calendar className="w-[12px] h-[12px]" strokeWidth={1.5} />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-[5px] font-['Inter'] text-[12px] text-[#6B7280]">
                      <Clock className="w-[12px] h-[12px]" strokeWidth={1.5} />
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-['Barlow_Condensed'] text-[18px] font-[600] tracking-[-0.01em] text-[#1C2530] leading-[1.25] mb-[8px]">
                    {article.title}
                  </h3>
                  <p className="font-['Inter'] font-normal text-[13px] text-[#6B7280] leading-[1.6] mb-[14px] line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
                  <a
                    href={article.url}
                    className="inline-flex items-center gap-[6px] font-['Inter'] font-medium text-[13px] text-[#C8102E] hover:text-[#A50D26] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:underline group"
                  >
                    Read More
                    <ArrowRight className="w-[14px] h-[14px] transition-transform duration-[200ms] group-hover:translate-x-[3px]" strokeWidth={2} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-[56px] bg-[#1C2530] rounded-[10px] px-[32px] py-[28px] flex flex-col sm:flex-row items-center justify-between gap-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
          <div>
            <p className="font-['Barlow_Condensed'] text-[20px] font-[700] tracking-[-0.02em] text-[#F0F2F4]/90 leading-[1.2]">
              Need a part machined fast? New customers get their 1st order free.
            </p>
            <p className="font-['Inter'] text-[13px] text-[#6B7280] mt-[4px]">
              Call <a href="tel:6303500075" className="text-[#F0F2F4]/80 hover:text-[#F97316] transition-all duration-[200ms]">630 350-0075</a> or email <a href="mailto:orders@marvel-speed.com" className="text-[#F0F2F4]/80 hover:text-[#F97316] transition-all duration-[200ms]">orders@marvel-speed.com</a>
            </p>
          </div>
          <a
            href="https://marvelspeed.com/contact-us"
            className="inline-flex items-center gap-[8px] bg-[#F97316] text-[#FFFFFF] font-['Inter'] font-[700] text-[14px] py-[12px] px-[28px] rounded-[6px] whitespace-nowrap hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530] shadow-[0_0_40px_rgba(200,16,46,0.22)]"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}