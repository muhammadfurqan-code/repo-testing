import { useState } from 'react';
import { ArrowRight, ZoomIn, X } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: 'https://www.matrixplastic.com/images/sliders/OrangePushersCompositewithPencil1.jpeg',
    alt: 'Micro injection molded orange pushers with pencil for scale — precision plastic components',
    label: 'Micro Components',
    sublabel: 'Close-tolerance micro molding with fine detail',
    colSpan: 'col-span-2',
    rowSpan: 'row-span-2',
    featured: true,
  },
  {
    id: 2,
    src: 'https://www.matrixplastic.com/images/sliders/JuvenileStaplercompositewithcartridgesandpushers.jpeg',
    alt: 'Juvenile stapler composite with cartridges and pushers — precision sub-assembly components',
    label: 'Components & Sub-Assemblies',
    sublabel: 'Surgical precision assembly',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    featured: false,
  },
  {
    id: 3,
    src: 'https://www.matrixplastic.com/images/SmartSlider/IMG_5591-Edit.jpg',
    alt: 'Precision injection molded plastic components — cleanroom manufacturing environment',
    label: 'Micro Tooling',
    sublabel: 'Micro molding expertise',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    featured: false,
  },
  {
    id: 4,
    src: 'https://www.matrixplastic.com/images/SmartSlider/PagerMold.JPG',
    alt: 'Pager mold — precision injection mold tooling with design expertise',
    label: 'Unparalleled Moldmaking',
    sublabel: 'Design expertise & mold engineering',
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    featured: false,
  },
  {
    id: 5,
    src: 'https://www.matrixplastic.com/images/HomepageTiles/BS1_8207-Matrix.jpg',
    alt: 'Engineering and design for manufacturability — Matrix Plastic Products facility',
    label: 'Design Engineering',
    sublabel: 'DFM expertise since 1970s',
    colSpan: 'col-span-2',
    rowSpan: 'row-span-1',
    featured: false,
  },
];

export default function GalleryPortfolio() {
  const [lightboxItem, setLightboxItem] = useState(null);

  const openLightbox = (item) => setLightboxItem(item);
  const closeLightbox = () => setLightboxItem(null);

  return (
    <section className="py-[80px] bg-[#F5F7FA]">
      <style>{`
        @keyframes gallery_fadeScaleIn {
          from { opacity: 0; transform: scale(0.96) translateY(12px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[56px] flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="inline-block font-['JetBrains_Mono'] text-[12px] font-medium tracking-[0.12em] uppercase text-[#C95C0A] mb-3">
              Project Portfolio
            </span>
            <h2 className="font-['Barlow_Condensed'] text-[clamp(32px,5vw,56px)] font-[800] tracking-[-0.03em] leading-[1.05] text-[#1A5FA8]">
              Precision Work.<br />
              <span className="text-[#4A5E78]">Proven Results.</span>
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] text-[#4A5E78] mt-4 max-w-[480px] leading-[1.6]">
              Nearly five decades of injection molding and moldmaking excellence — from micro components to complex sub-assemblies for medical, electronics, and safety industries.
            </p>
          </div>
          <a
            href="https://www.matrixplastic.com/contact-us/request-a-quote"
            className="inline-flex items-center gap-2 bg-[#C95C0A] text-[#FFFFFF] font-['Inter'] font-[700] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 hover:shadow-[0_4px_16px_rgba(201,92,10,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 whitespace-nowrap self-start md:self-auto"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
        </div>

        {/* Bento / Offset Collage Grid — Desktop */}
        <div className="hidden md:grid grid-cols-4 grid-rows-[320px_220px] gap-4">

          {/* Featured large tile — col 1-2, row 1-2 */}
          <div
            className="col-span-2 row-span-2 relative rounded-[14px] overflow-hidden cursor-pointer group shadow-[0_12px_40px_rgba(0,0,0,0.14)] border border-[#D0D9E8]"
            onClick={() => openLightbox(galleryItems[0])}
            role="button"
            tabIndex={0}
            aria-label={`View: ${galleryItems[0].label}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(galleryItems[0])}
          >
            <img
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.82)] via-[rgba(15,35,64,0.28)] to-transparent" />
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <span className="bg-[rgba(26,95,168,0.85)] backdrop-blur-[8px] rounded-full p-2 flex items-center justify-center">
                <ZoomIn className="w-5 h-5 text-[#FFFFFF]" strokeWidth={1.5} />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-block font-['JetBrains_Mono'] text-[11px] tracking-[0.1em] uppercase text-[#C95C0A] mb-1">Featured</span>
              <h3 className="font-['Barlow_Condensed'] text-[28px] font-[800] tracking-[-0.02em] text-[#FFFFFF]/90 leading-[1.1]">
                {galleryItems[0].label}
              </h3>
              <p className="font-['Inter'] text-[13px] text-[#FFFFFF]/70 mt-1">
                {galleryItems[0].sublabel}
              </p>
            </div>
          </div>

          {/* Tile 2 — col 3, row 1 */}
          <div
            className="col-span-1 row-span-1 relative rounded-[14px] overflow-hidden cursor-pointer group shadow-[0_4px_16px_rgba(0,0,0,0.10)] border border-[#D0D9E8]"
            onClick={() => openLightbox(galleryItems[1])}
            role="button"
            tabIndex={0}
            aria-label={`View: ${galleryItems[1].label}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(galleryItems[1])}
          >
            <img
              src={galleryItems[1].src}
              alt={galleryItems[1].alt}
              className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.75)] via-[rgba(15,35,64,0.15)] to-transparent" />
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <span className="bg-[rgba(26,95,168,0.85)] backdrop-blur-[8px] rounded-full p-1.5 flex items-center justify-center">
                <ZoomIn className="w-4 h-4 text-[#FFFFFF]" strokeWidth={1.5} />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-['Barlow_Condensed'] text-[18px] font-[700] text-[#FFFFFF]/90 leading-[1.15]">
                {galleryItems[1].label}
              </h3>
              <p className="font-['Inter'] text-[11px] text-[#FFFFFF]/65 mt-0.5">
                {galleryItems[1].sublabel}
              </p>
            </div>
          </div>

          {/* Tile 3 — col 4, row 1 */}
          <div
            className="col-span-1 row-span-1 relative rounded-[14px] overflow-hidden cursor-pointer group shadow-[0_4px_16px_rgba(0,0,0,0.10)] border border-[#D0D9E8]"
            onClick={() => openLightbox(galleryItems[2])}
            role="button"
            tabIndex={0}
            aria-label={`View: ${galleryItems[2].label}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(galleryItems[2])}
          >
            <img
              src={galleryItems[2].src}
              alt={galleryItems[2].alt}
              className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.75)] via-[rgba(15,35,64,0.15)] to-transparent" />
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <span className="bg-[rgba(26,95,168,0.85)] backdrop-blur-[8px] rounded-full p-1.5 flex items-center justify-center">
                <ZoomIn className="w-4 h-4 text-[#FFFFFF]" strokeWidth={1.5} />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-['Barlow_Condensed'] text-[18px] font-[700] text-[#FFFFFF]/90 leading-[1.15]">
                {galleryItems[2].label}
              </h3>
              <p className="font-['Inter'] text-[11px] text-[#FFFFFF]/65 mt-0.5">
                {galleryItems[2].sublabel}
              </p>
            </div>
          </div>

          {/* Tile 4 — col 3, row 2 (narrow) */}
          <div
            className="col-span-1 row-span-1 relative rounded-[14px] overflow-hidden cursor-pointer group shadow-[0_4px_16px_rgba(0,0,0,0.10)] border border-[#D0D9E8]"
            onClick={() => openLightbox(galleryItems[3])}
            role="button"
            tabIndex={0}
            aria-label={`View: ${galleryItems[3].label}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(galleryItems[3])}
          >
            <img
              src={galleryItems[3].src}
              alt={galleryItems[3].alt}
              className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.75)] via-[rgba(15,35,64,0.15)] to-transparent" />
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <span className="bg-[rgba(26,95,168,0.85)] backdrop-blur-[8px] rounded-full p-1.5 flex items-center justify-center">
                <ZoomIn className="w-4 h-4 text-[#FFFFFF]" strokeWidth={1.5} />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-['Barlow_Condensed'] text-[18px] font-[700] text-[#FFFFFF]/90 leading-[1.15]">
                {galleryItems[3].label}
              </h3>
              <p className="font-['Inter'] text-[11px] text-[#FFFFFF]/65 mt-0.5">
                {galleryItems[3].sublabel}
              </p>
            </div>
          </div>

          {/* Tile 5 — col 4, row 2 (wide accent) */}
          <div
            className="col-span-1 row-span-1 relative rounded-[14px] overflow-hidden cursor-pointer group shadow-[0_4px_16px_rgba(0,0,0,0.10)] border border-[#D0D9E8]"
            onClick={() => openLightbox(galleryItems[4])}
            role="button"
            tabIndex={0}
            aria-label={`View: ${galleryItems[4].label}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(galleryItems[4])}
          >
            <img
              src={galleryItems[4].src}
              alt={galleryItems[4].alt}
              className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.05]"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.75)] via-[rgba(15,35,64,0.15)] to-transparent" />
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <span className="bg-[rgba(26,95,168,0.85)] backdrop-blur-[8px] rounded-full p-1.5 flex items-center justify-center">
                <ZoomIn className="w-4 h-4 text-[#FFFFFF]" strokeWidth={1.5} />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-['Barlow_Condensed'] text-[18px] font-[700] text-[#FFFFFF]/90 leading-[1.15]">
                {galleryItems[4].label}
              </h3>
              <p className="font-['Inter'] text-[11px] text-[#FFFFFF]/65 mt-0.5">
                {galleryItems[4].sublabel}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden flex flex-col gap-4">
          {/* Featured */}
          <div
            className="relative rounded-[14px] overflow-hidden cursor-pointer group shadow-[0_12px_40px_rgba(0,0,0,0.14)] border border-[#D0D9E8] h-[280px]"
            onClick={() => openLightbox(galleryItems[0])}
            role="button"
            tabIndex={0}
            aria-label={`View: ${galleryItems[0].label}`}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(galleryItems[0])}
          >
            <img
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.82)] via-[rgba(15,35,64,0.28)] to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="inline-block font-['JetBrains_Mono'] text-[10px] tracking-[0.1em] uppercase text-[#C95C0A] mb-1">Featured</span>
              <h3 className="font-['Barlow_Condensed'] text-[22px] font-[800] text-[#FFFFFF]/90">{galleryItems[0].label}</h3>
              <p className="font-['Inter'] text-[12px] text-[#FFFFFF]/65 mt-0.5">{galleryItems[0].sublabel}</p>
            </div>
          </div>

          {/* 2-col row */}
          <div className="grid grid-cols-2 gap-4">
            {galleryItems.slice(1, 3).map((item) => (
              <div
                key={item.id}
                className="relative rounded-[14px] overflow-hidden cursor-pointer group shadow-[0_4px_16px_rgba(0,0,0,0.10)] border border-[#D0D9E8] h-[160px]"
                onClick={() => openLightbox(item)}
                role="button"
                tabIndex={0}
                aria-label={`View: ${item.label}`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.78)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-['Barlow_Condensed'] text-[14px] font-[700] text-[#FFFFFF]/90 leading-[1.2]">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* 2-col row */}
          <div className="grid grid-cols-2 gap-4">
            {galleryItems.slice(3, 5).map((item) => (
              <div
                key={item.id}
                className="relative rounded-[14px] overflow-hidden cursor-pointer group shadow-[0_4px_16px_rgba(0,0,0,0.10)] border border-[#D0D9E8] h-[160px]"
                onClick={() => openLightbox(item)}
                role="button"
                tabIndex={0}
                aria-label={`View: ${item.label}`}
                onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.78)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-['Barlow_Condensed'] text-[14px] font-[700] text-[#FFFFFF]/90 leading-[1.2]">{item.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-[56px] grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: '50+', label: 'Years of Precision', mono: true },
            { value: 'ISO', label: 'Certified Quality', mono: true },
            { value: '±0.001"', label: 'Tolerance Capability', mono: true },
            { value: '100%', label: 'In-House Moldmaking', mono: true },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#FFFFFF] border border-[#D0D9E8] rounded-[14px] py-[24px] px-[20px] shadow-[0_1px_3px_rgba(0,0,0,0.08)] flex flex-col items-center text-center"
            >
              <span className="font-['Barlow_Condensed'] text-[32px] font-[800] tracking-[-0.02em] text-[#1A5FA8]">
                {stat.value}
              </span>
              <span className="font-['Inter'] text-[12px] font-medium text-[#4A5E78] mt-1 leading-[1.4]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(15,35,64,0.92)] backdrop-blur-[12px] p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${lightboxItem.label}`}
        >
          <div
            className="relative max-w-[900px] w-full animate-[gallery_fadeScaleIn_0.25s_ease-out_forwards]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-[#FFFFFF]/80 hover:text-[#FFFFFF] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] rounded-full p-1"
              aria-label="Close lightbox"
            >
              <X className="w-7 h-7" strokeWidth={1.5} />
            </button>
            <div className="rounded-[14px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.14)] border border-[#D0D9E8]">
              <img
                src={lightboxItem.src}
                alt={lightboxItem.alt}
                className="w-full max-h-[70vh] object-contain bg-[#0F2340]"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="bg-[#FFFFFF] px-[32px] py-[20px] flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h3 className="font-['Barlow_Condensed'] text-[22px] font-[800] tracking-[-0.02em] text-[#1A5FA8]">
                    {lightboxItem.label}
                  </h3>
                  <p className="font-['Inter'] text-[13px] text-[#4A5E78] mt-0.5">
                    {lightboxItem.sublabel}
                  </p>
                </div>
                <a
                  href="https://www.matrixplastic.com/contact-us/request-a-quote"
                  className="inline-flex items-center gap-2 bg-[#C95C0A] text-[#FFFFFF] font-['Inter']font-[700] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}