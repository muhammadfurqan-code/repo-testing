import { useState } from 'react';
import { ArrowRight, ZoomIn, X } from 'lucide-react';

const images = [
  {
    url: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg',
    title: 'Marvel Machining Facility',
    caption: 'State-of-the-art CNC shop floor — Chicago metro area',
    tag: 'Shop Floor',
  },
  {
    url: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg',
    title: 'Services For Industries',
    caption: 'Fast quotes, online drawing submission, pick-up & delivery',
    tag: 'Industrial',
  },
  {
    url: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide3.jpg',
    title: '1st Order Free',
    caption: 'New customers get their first order free — open for business',
    tag: 'Offer',
  },
  {
    url: 'https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg',
    title: 'Low Volume & Rapid Response',
    caption: 'Fast set-up for prototypes, low volumes, and worn part rebuilds',
    tag: 'Rapid Response',
  },
  {
    url: 'https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg',
    title: 'CNC Boring',
    caption: 'High-tolerance inside bearing and critical dimensions',
    tag: 'CNC Boring',
  },
  {
    url: 'https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg',
    title: 'Vertical Turret Lathes',
    caption: 'Inside and outside seat machining at various tolerances',
    tag: 'Lathe Work',
  },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((prev) => (prev - 1 + images.length) % images.length);
  const nextImage = () => setLightbox((prev) => (prev + 1) % images.length);

  return (
    <section className="py-[80px] bg-[#F4F5F7] overflow-hidden">
      <style>{`@keyframes gallery_fadeInUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }`}</style>

      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[56px]">
          <div>
            <span className="inline-block font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C8102E] mb-3">
              Our Work
            </span>
            <h2 className="font-['Barlow_Condensed'] text-[clamp(32px,5vw,56px)] font-[800] tracking-[-0.03em] leading-[1.05] text-[#1C2530]">
              Precision Machined.<br />
              <span className="text-[#C8102E]">Built to Spec.</span>
            </h2>
            <p className="mt-4 font-['Inter'] font-normal text-[16px] text-[#6B7280] max-w-[480px] leading-[1.6]">
              Real work from our Chicago-area shop floor — CNC boring, vertical turret lathe operations, rapid-response prototypes, and industrial part rebuilds.
            </p>
          </div>
          <a
            href="mailto:orders@marvel-speed.com"
            className="self-start md:self-auto inline-flex items-center gap-2 bg-[#C8102E] text-[#FFFFFF] py-[12px] px-[28px] rounded-[6px] font-['Inter'] font-[700] text-[15px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#A50D26] hover:shadow-[0_0_40px_rgba(200,16,46,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2"
          >
            Request a Quote <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>

        {/* Asymmetric Bento Collage Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 grid-rows-auto gap-3 lg:gap-4">

          {/* Card 0 — Hero large, spans 7 cols, 2 rows */}
          <GalleryCard
            item={images[0]}
            index={0}
            onClick={() => openLightbox(0)}
            className="lg:col-span-7 lg:row-span-2 min-h-[320px] lg:min-h-[520px]"
          />

          {/* Card 1 — top right, spans 5 cols */}
          <GalleryCard
            item={images[1]}
            index={1}
            onClick={() => openLightbox(1)}
            className="lg:col-span-5 min-h-[250px]"
          />

          {/* Card 2 — bottom right of top section, spans 5 cols */}
          <GalleryCard
            item={images[2]}
            index={2}
            onClick={() => openLightbox(2)}
            className="lg:col-span-5 min-h-[250px]"
          />

          {/* Card 3 — bottom row left, spans 4 cols */}
          <GalleryCard
            item={images[3]}
            index={3}
            onClick={() => openLightbox(3)}
            className="lg:col-span-4 min-h-[260px]"
          />

          {/* Card 4 — bottom row center, spans 4 cols */}
          <GalleryCard
            item={images[4]}
            index={4}
            onClick={() => openLightbox(4)}
            className="lg:col-span-4 min-h-[260px]"
          />

          {/* Card 5 — bottom row right, spans 4 cols */}
          <GalleryCard
            item={images[5]}
            index={5}
            onClick={() => openLightbox(5)}
            className="lg:col-span-4 min-h-[260px]"
          />
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-[56px] rounded-[10px] bg-[#1C2530] border border-[#D1D5DB]/10 px-[32px] py-[36px] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
          <div>
            <p className="font-['Barlow_Condensed'] text-[24px] font-[600] text-[#F0F2F4]/90 leading-tight">
              Need a part machined fast?
            </p>
            <p className="font-['Inter'] text-[14px] text-[#6B7280] mt-1">
              New customers get their <span className="text-[#F97316] font-medium">1st order free.</span> Call or email — we respond same day.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:6303500075"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-[#C8102E] border-[1.5px] border-[#C8102E] py-[12px] px-[28px] rounded-[6px] font-['Inter'] font-semibold text-[15px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#C8102E] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530]"
            >
              630 350-0075
            </a>
            <a
              href="mailto:orders@marvel-speed.com"
              className="inline-flex items-center justify-center gap-2 bg-[#F97316] text-[#FFFFFF] py-[12px] px-[28px] rounded-[6px] font-['Inter'] font-[700] text-[15px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530]"
            >
              Get a Free Quote <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[#1C2530]/95 backdrop-blur-[12px] flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-[900px] w-full bg-[#FFFFFF] rounded-[10px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.16)] animate-[gallery_fadeInUp_0.25s_ease-out_both]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={images[lightbox].url}
                alt={images[lightbox].title}
                className="w-full object-cover max-h-[560px]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.55)] to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="inline-block font-['JetBrains_Mono'] text-[11px] tracking-[0.1em] uppercase text-[#F97316] mb-2">
                  {images[lightbox].tag}
                </span>
                <h3 className="font-['Barlow_Condensed'] text-[28px] font-[800] text-[#F0F2F4]/90 leading-tight">
                  {images[lightbox].title}
                </h3>
                <p className="font-['Inter'] text-[14px] text-[#F0F2F4]/70 mt-1">
                  {images[lightbox].caption}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between px-6 py-4 border-t border-[#D1D5DB]">
              <button
                onClick={prevImage}
                className="font-['Inter'] text-[14px] font-medium text-[#6B7280] hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-[6px] px-3 py-1"
              >
                ← Previous
              </button>
              <span className="font-['JetBrains_Mono'] text-[12px] text-[#6B7280]">
                {lightbox + 1} / {images.length}
              </span>
              <button
                onClick={nextImage}
                className="font-['Inter'] text-[14px] font-medium text-[#6B7280] hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] rounded-[6px] px-3 py-1"
              >
                Next →
              </button>
            </div>
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 bg-[#1C2530]/80 text-[#F0F2F4]/90 rounded-full p-2 hover:bg-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F0F2F4]"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryCard({ item, index, onClick, className }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[10px] cursor-pointer shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-[#D1D5DB] ${className}`}
      onClick={onClick}
      tabIndex={0}
      role="button"
      aria-label={`View ${item.title}`}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
    >
      <img
        src={item.url}
        alt={item.title}
        className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-105 group-hover:brightness-90"
        onError={(e) => { e.currentTarget.style.display = 'none'; }}
      />

      {/* Gradient overlay always present */}
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.72)] via-[rgba(28,37,48,0.18)] to-transparent pointer-events-none" />

      {/* Tag badge */}
      <div className="absolute top-3 left-3">
        <span className="inline-block font-['JetBrains_Mono'] text-[10px] tracking-[0.1em] uppercase bg-[#C8102E] text-[#FFFFFF] px-[8px] py-[4px] rounded-[4px]">
          {item.tag}
        </span>
      </div>

      {/* Zoom icon on hover */}
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
        <div className="bg-[#FFFFFF]/20 backdrop-blur-[8px] rounded-full p-2 border border-[#FFFFFF]/30">
          <ZoomIn className="w-5 h-5 text-[#FFFFFF]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
        <h3 className="font-['Barlow_Condensed'] text-[20px] font-[700] text-[#F0F2F4]/90 leading-tight">
          {item.title}
        </h3>
        <p className="font-['Inter'] text-[13px] text-[#F0F2F4]/70 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] line-clamp-2">
          {item.caption}
        </p>
      </div>

      {/* Focus ring */}
      <div className="absolute inset-0 rounded-[10px] ring-0 focus-visible:ring-2 focus-visible:ring-[#C8102E] pointer-events-none" />
    </article>
  );
}