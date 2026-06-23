import { useState } from 'react';
import { ArrowRight, ZoomIn, X } from 'lucide-react';

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const images = [
    {
      url: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg',
      title: 'Marvel Machining Company',
      caption: 'Superhero service keeping your facility running',
    },
    {
      url: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg',
      title: 'Services For Industries',
      caption: 'Fast quotes, online drawing submission, pick-up & delivery',
    },
    {
      url: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide3.jpg',
      title: '1st Order Is Free',
      caption: 'New customers get their first order free',
    },
    {
      url: 'https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg',
      title: 'Low Volume & Rapid Response',
      caption: 'Fast set-up for prototypes and low volume quantities',
    },
    {
      url: 'https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg',
      title: 'CNC Boring',
      caption: 'High tolerance inside bearing and critical dimensions',
    },
    {
      url: 'https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg',
      title: 'Vertical Turret Lathes',
      caption: 'Inside and outside seat machining at various tolerances',
    },
  ];

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setLightboxIndex((i) => (i + 1) % images.length);

  return (
    <section className="py-[80px] bg-[#F4F5F7] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Header */}
        <div className="mb-[56px] flex flex-col md:flex-row md:items-end md:justify-between gap-[24px]">
          <div>
            <span className="inline-block font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C8102E] mb-[12px]">
              Our Work
            </span>
            <h2 className="font-['Barlow_Condensed'] text-[32px] font-[700] tracking-[-0.03em] text-[#1C2331] leading-[1.1] uppercase">
              Precision Machined.<br />
              <span className="text-[#C8102E]">Built to Spec.</span>
            </h2>
            <p className="mt-[14px] font-['Inter'] font-normal text-[15px] text-[#6B7280] max-w-[440px] leading-[1.6]">
              Real shop-floor work from our Chicago-area facility — CNC boring, vertical turret lathes, rapid-response prototypes, and more.
            </p>
          </div>
          <a
            href="https://marvelspeed.com/contact-us"
            className="inline-flex items-center gap-[8px] bg-[#C8102E] text-[#FFFFFF] py-[12px] px-[28px] rounded-[4px] font-['Inter'] font-[700] text-[14px] uppercase tracking-[0.06em] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:bg-[#A50D25] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] self-start md:self-auto whitespace-nowrap focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
          >
            Request a Quote <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>

        {/* Bento / Offset Collage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-12 grid-rows-auto gap-[8px] md:gap-[10px]">

          {/* Tile 0 — Hero large, spans 7 cols, 2 rows */}
          <div
            className="col-span-2 md:col-span-7 md:row-span-2 relative group cursor-pointer overflow-hidden rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] h-[260px] md:h-[480px]"
            onClick={() => openLightbox(0)}
            role="button"
            tabIndex={0}
            aria-label={`View ${images[0].title}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(0)}
          >
            <img
              src={images[0].url}
              alt={images[0].title}
              className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-[rgba(28,35,49,0.45)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:bg-[rgba(28,35,49,0.60)]" />
            <div className="absolute inset-0 flex flex-col justify-end p-[24px] md:p-[32px]">
              <span className="font-['JetBrains_Mono'] text-[11px] text-[#E87722] uppercase tracking-[0.1em] mb-[6px]">Featured</span>
              <h3 className="font-['Barlow_Condensed'] text-[22px] md:text-[28px] font-[700] text-[#F0F2F5]/90 uppercase tracking-[-0.02em] leading-[1.1]">
                {images[0].title}
              </h3>
              <p className="font-['Inter'] text-[13px] text-[#F0F2F5]/75 mt-[6px] leading-[1.5] max-w-[320px]">
                {images[0].caption}
              </p>
            </div>
            <div className="absolute top-[16px] right-[16px] w-[36px] h-[36px] rounded-full bg-[rgba(200,16,46,0.85)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <ZoomIn className="w-4 h-4 text-[#FFFFFF]" strokeWidth={2} />
            </div>
          </div>

          {/* Tile 1 — Top right, spans 5 cols */}
          <div
            className="col-span-1 md:col-span-5 relative group cursor-pointer overflow-hidden rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] h-[160px] md:h-[232px]"
            onClick={() => openLightbox(1)}
            role="button"
            tabIndex={0}
            aria-label={`View ${images[1].title}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(1)}
          >
            <img
              src={images[1].url}
              alt={images[1].title}
              className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-[rgba(28,35,49,0.45)] group-hover:bg-[rgba(28,35,49,0.60)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
            <div className="absolute inset-0 flex flex-col justify-end p-[16px] md:p-[20px]">
              <h3 className="font-['Barlow_Condensed'] text-[16px] md:text-[20px] font-[700] text-[#F0F2F5]/90 uppercase tracking-[-0.02em] leading-[1.1]">
                {images[1].title}
              </h3>
            </div>
            <div className="absolute top-[12px] right-[12px] w-[32px] h-[32px] rounded-full bg-[rgba(200,16,46,0.85)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <ZoomIn className="w-3 h-3 text-[#FFFFFF]" strokeWidth={2} />
            </div>
          </div>

          {/* Tile 2 — Bottom right of top row, spans 5 cols */}
          <div
            className="col-span-1 md:col-span-5 relative group cursor-pointer overflow-hidden rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] h-[160px] md:h-[232px]"
            onClick={() => openLightbox(2)}
            role="button"
            tabIndex={0}
            aria-label={`View ${images[2].title}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(2)}
          >
            <img
              src={images[2].url}
              alt={images[2].title}
              className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-[rgba(28,35,49,0.45)] group-hover:bg-[rgba(28,35,49,0.60)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
            <div className="absolute inset-0 flex flex-col justify-end p-[16px] md:p-[20px]">
              <span className="font-['JetBrains_Mono'] text-[10px] text-[#E87722] uppercase tracking-[0.1em] mb-[4px]">New Customers</span>
              <h3 className="font-['Barlow_Condensed'] text-[16px] md:text-[20px] font-[700] text-[#F0F2F5]/90 uppercase tracking-[-0.02em] leading-[1.1]">
                {images[2].title}
              </h3>
            </div>
            <div className="absolute top-[12px] right-[12px] w-[32px] h-[32px] rounded-full bg-[rgba(200,16,46,0.85)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <ZoomIn className="w-3 h-3 text-[#FFFFFF]" strokeWidth={2} />
            </div>
          </div>

          {/* Bottom row — 3 tiles */}
          {/* Tile 3 — spans 4 cols */}
          <div
            className="col-span-2 md:col-span-4 relative group cursor-pointer overflow-hidden rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] h-[200px] md:h-[240px]"
            onClick={() => openLightbox(3)}
            role="button"
            tabIndex={0}
            aria-label={`View ${images[3].title}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(3)}
          >
            <img
              src={images[3].url}
              alt={images[3].title}
              className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-[rgba(28,35,49,0.45)] group-hover:bg-[rgba(28,35,49,0.60)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
            <div className="absolute inset-0 flex flex-col justify-end p-[16px] md:p-[20px]">
              <h3 className="font-['Barlow_Condensed'] text-[16px] md:text-[18px] font-[700] text-[#F0F2F5]/90 uppercase tracking-[-0.02em] leading-[1.1]">
                {images[3].title}
              </h3>
              <p className="font-['Inter'] text-[12px] text-[#F0F2F5]/70 mt-[4px] leading-[1.4] hidden md:block">
                {images[3].caption}
              </p>
            </div>
            <div className="absolute top-[12px] right-[12px] w-[32px] h-[32px] rounded-full bg-[rgba(200,16,46,0.85)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <ZoomIn className="w-3 h-3 text-[#FFFFFF]" strokeWidth={2} />
            </div>
          </div>

          {/* Tile 4 — spans 5 cols */}
          <div
            className="col-span-1 md:col-span-5 relative group cursor-pointer overflow-hidden rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] h-[200px] md:h-[240px]"
            onClick={() => openLightbox(4)}
            role="button"
            tabIndex={0}
            aria-label={`View ${images[4].title}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(4)}
          >
            <img
              src={images[4].url}
              alt={images[4].title}
              className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-[rgba(28,35,49,0.45)] group-hover:bg-[rgba(28,35,49,0.60)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
            <div className="absolute inset-0 flex flex-col justify-end p-[16px] md:p-[20px]">
              <h3 className="font-['Barlow_Condensed'] text-[16px] md:text-[18px] font-[700] text-[#F0F2F5]/90 uppercase tracking-[-0.02em] leading-[1.1]">
                {images[4].title}
              </h3>
              <p className="font-['Inter'] text-[12px] text-[#F0F2F5]/70 mt-[4px] leading-[1.4] hidden md:block">
                {images[4].caption}
              </p>
            </div>
            <div className="absolute top-[12px] right-[12px] w-[32px] h-[32px] rounded-full bg-[rgba(200,16,46,0.85)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <ZoomIn className="w-3 h-3 text-[#FFFFFF]" strokeWidth={2} />
            </div>
          </div>

          {/* Tile 5 — spans 3 cols with accent CTA overlay */}
          <div
            className="col-span-1 md:col-span-3 relative group cursor-pointer overflow-hidden rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] h-[200px] md:h-[240px]"
            onClick={() => openLightbox(5)}
            role="button"
            tabIndex={0}
            aria-label={`View ${images[5].title}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(5)}
          >
            <img
              src={images[5].url}
              alt={images[5].title}
              className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-[rgba(28,35,49,0.55)] group-hover:bg-[rgba(200,16,46,0.55)] transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
            <div className="absolute inset-0 flex flex-col justify-end p-[16px] md:p-[20px]">
              <h3 className="font-['Barlow_Condensed'] text-[16px] md:text-[18px] font-[700] text-[#F0F2F5]/90 uppercase tracking-[-0.02em] leading-[1.1]">
                {images[5].title}
              </h3>
            </div>
            <div className="absolute top-[12px] right-[12px] w-[32px] h-[32px] rounded-full bg-[rgba(200,16,46,0.85)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <ZoomIn className="w-3 h-3 text-[#FFFFFF]" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-[48px] flex flex-col sm:flex-row items-center justify-between gap-[20px] border-t border-[#D1D5DB] pt-[32px]">
          <p className="font-['Inter'] text-[14px] text-[#6B7280] text-center sm:text-left">
            Every part machined to spec. Rapid response for Chicago-area facilities.
          </p>
          <div className="flex items-center gap-[12px]">
            <a
              href="tel:6303500075"
              className="font-['Inter'] font-medium text-[14px] text-[#C8102E] hover:text-[#A50D25] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 rounded-[2px]"
            >
              630 350-0075
            </a>
            <span className="text-[#D1D5DB]">|</span>
            <a
              href="https://marvelspeed.com/contact-us"
              className="inline-flex items-center gap-[8px] bg-[#E87722] text-[#FFFFFF] py-[12px] px-[28px] rounded-[4px] font-['Inter'] font-[700] text-[14px] uppercase tracking-[0.06em] shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-[#E87722] focus-visible:ring-offset-2"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-[rgba(28,35,49,0.96)] flex items-center justify-center p-[16px] md:p-[40px]"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            className="absolute top-[20px] right-[20px] w-[44px] h-[44px] rounded-full bg-[rgba(255,255,255,0.10)] hover:bg-[#C8102E] flex items-center justify-center transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <X className="w-5 h-5 text-[#F0F2F5]" strokeWidth={2} />
          </button>

          <div
            className="relative max-w-[900px] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[lightboxIndex].url}
              alt={images[lightboxIndex].title}
              className="w-full max-h-[75vh] object-contain rounded-[8px] shadow-[0_12px_40px_rgba(0,0,0,0.16)]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="mt-[20px] flex items-center justify-between">
              <div>
                <h3 className="font-['Barlow_Condensed'] text-[20px] font-[700] text-[#F0F2F5]/90 uppercase tracking-[-0.02em]">
                  {images[lightboxIndex].title}
                </h3>
                <p className="font-['Inter'] text-[13px] text-[#6B7280] mt-[4px]">
                  {images[lightboxIndex].caption}
                </p>
              </div>
              <div className="flex items-center gap-[8px]">
                <button
                  className="w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-[#C8102E] flex items-center justify-center transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-[#C8102E] text-[#F0F2F5]/90 font-['Inter'] font-[700] text-[18px]"
                  onClick={prevImage}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <span className="font-['JetBrains_Mono'] text-[12px] text-[#6B7280]">
                  {lightboxIndex + 1} / {images.length}
                </span>
                <button
                  className="w-[40px] h-[40px] rounded-full bg-[rgba(255,255,255,0.08)] hover:bg-[#C8102E] flex items-center justify-center transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:ring-2 focus-visible:ring-[#C8102E] text-[#F0F2F5]/90 font-['Inter'] font-[700] text-[18px]"
                  onClick={nextImage}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}