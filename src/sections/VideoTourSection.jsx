import { useState } from 'react';
import { Play, ChevronRight, Eye, Award, Microscope, Settings } from 'lucide-react';

export default function VideoTourSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      id: 0,
      icon: <Settings className="w-5 h-5" strokeWidth={1.5} />,
      label: 'Moldmaking',
      title: 'Precision Mold Engineering',
      description: 'Witness our in-house mold fabrication process — from DFM analysis to hardened steel tooling built to ±0.0002″ tolerances.',
      image: 'https://www.matrixplastic.com/images/SmartSlider/PagerMold.JPG',
      stat: '±0.0002″',
      statLabel: 'Tolerance',
    },
    {
      id: 1,
      icon: <Microscope className="w-5 h-5" strokeWidth={1.5} />,
      label: 'Micro Molding',
      title: 'Micro Components at Scale',
      description: 'Ultra-precise micro molding for medical and electronic applications — components smaller than a pencil tip, produced with repeatable accuracy.',
      image: 'https://www.matrixplastic.com/images/sliders/OrangePushersCompositewithPencil1.jpeg',
      stat: '<0.1g',
      statLabel: 'Shot Weight',
    },
    {
      id: 2,
      icon: <Award className="w-5 h-5" strokeWidth={1.5} />,
      label: 'Assembly',
      title: 'Sub-Assembly & Integration',
      description: 'From single components to complete sub-assemblies — our ISO-certified facility handles complex multi-part integration with surgical precision.',
      image: 'https://www.matrixplastic.com/images/sliders/JuvenileStaplercompositewithcartridgesandpushers.jpeg',
      stat: 'ISO',
      statLabel: 'Certified',
    },
    {
      id: 3,
      icon: <Eye className="w-5 h-5" strokeWidth={1.5} />,
      label: 'Inspection',
      title: 'Quality & Inspection Lab',
      description: 'Every part validated through CMM, optical comparators, and statistical process control — zero-defect delivery for critical applications.',
      image: 'https://www.matrixplastic.com/images/HomepageTiles/BS1_8207-Matrix.jpg',
      stat: '100%',
      statLabel: 'Inspected',
    },
  ];

  const active = chapters[activeChapter];

  return (
    <section className="py-[80px] bg-[#F5F7FA] relative overflow-hidden">
      <style>{`@keyframes video_tour_pulseRing { 0% { transform: scale(1); opacity: 0.7; } 70% { transform: scale(1.55); opacity: 0; } 100% { transform: scale(1.55); opacity: 0; } }`}</style>

      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute top-[-120px] right-[-80px] w-[480px] h-[480px] rounded-full bg-[#1A5FA8] opacity-[0.04] blur-[80px]" />
        <div className="absolute bottom-[-80px] left-[-60px] w-[360px] h-[360px] rounded-full bg-[#C95C0A] opacity-[0.04] blur-[60px]" />
      </div>

      <div className="max-w-[1200px] mx-auto px-[24px]">

        <div className="mb-[56px] flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1A5FA8]/10 border border-[#1A5FA8]/20 rounded-full px-[14px] py-[6px] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#C95C0A] animate-pulse" />
              <span className="font-['JetBrains_Mono'] text-[11px] font-medium text-[#1A5FA8] uppercase tracking-[0.12em]">Facility Tour</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-[clamp(32px,4.5vw,56px)] font-[800] text-[#1A5FA8] leading-[1.05] tracking-[-0.03em]">
              Inside Matrix Plastic<br />
              <span className="text-[#C95C0A]">Products</span>
            </h2>
            <p className="font-['Inter'] font-normal text-[16px] text-[#4A5E78] mt-3 max-w-[480px] leading-[1.65]">
              Nearly 5 decades of in-house expertise — explore our moldmaking, micro molding, assembly, and quality inspection capabilities.
            </p>
          </div>
          <a
            href="https://www.matrixplastic.com/contact-us/request-a-quote"
            className="inline-flex items-center gap-2 bg-[#C95C0A] text-[#FFFFFF] font-['Inter'] font-[700] py-[12px] px-[28px] rounded-[6px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 hover:shadow-[0_12px_40px_rgba(0,0,0,0.14)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 whitespace-nowrap self-start md:self-auto"
          >
            Request a Quote
            <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-start">

          <div className="relative rounded-[14px] overflow-hidden bg-[#0F2340] shadow-[0_12px_40px_rgba(0,0,0,0.14)] group">
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <img
                src={active.image}
                alt={active.title}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="w-full h-full object-cover transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,35,64,0.82)] via-[rgba(15,35,64,0.28)] to-transparent" />

              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play facility tour video"
                  className="absolute inset-0 flex items-center justify-center transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF] focus-visible:ring-offset-2"
                >
                  <div className="relative flex items-center justify-center">
                    <span
                      className="absolute w-[80px] h-[80px] rounded-full bg-[#1A5FA8]/50"
                      style={{ animation: 'pulseRing 2s cubic-bezier(0.4,0,0.6,1) infinite' }}
                    />
                    <div className="relative z-10 w-[72px] h-[72px] rounded-full bg-[#1A5FA8] flex items-center justify-center shadow-[0_0_40px_rgba(26,95,168,0.22)] hover:bg-[#154E8C] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                      <Play className="w-7 h-7 text-[#FFFFFF] ml-1" strokeWidth={2} fill="#FFFFFF" />
                    </div>
                  </div>
                </button>
              )}

              {isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-[rgba(15,35,64,0.88)]">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-[#1A5FA8] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
                    <p className="font-['Inter'] text-[#FFFFFF]/70 text-[13px]">Loading video tour…</p>
                    <button
                      onClick={() => setIsPlaying(false)}
                      className="mt-4 font-['Inter'] text-[12px] text-[#FFFFFF]/50 underline hover:text-[#FFFFFF]/80 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="font-['JetBrains_Mono'] text-[11px] text-[#C95C0A] uppercase tracking-[0.1em] mb-1">{active.label}</p>
                    <h3 className="font-['Barlow_Condensed'] text-[clamp(20px,2.5vw,28px)] font-[700] text-[#FFFFFF]/90 leading-[1.15] tracking-[-0.02em]">{active.title}</h3>
                    <p className="font-['Inter'] text-[14px] text-[#FFFFFF]/70 mt-1 max-w-[420px] leading-[1.55] hidden sm:block">{active.description}</p>
                  </div>
                  <div className="flex-shrink-0 text-right">
                    <p className="font-['Barlow_Condensed'] text-[clamp(28px,3vw,40px)] font-[800] text-[#FFFFFF]/90 leading-[1]">{active.stat}</p>
                    <p className="font-['JetBrains_Mono'] text-[10px] text-[#FFFFFF]/50 uppercase tracking-[0.1em]">{active.statLabel}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0F2340] border-t border-[#D0D9E8]/10 px-6 py-4 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#C95C0A] animate-pulse flex-shrink-0" />
              <p className="font-['Inter'] text-[13px] text-[#FFFFFF]/60">
                <span className="text-[#FFFFFF]/90 font-medium">Matrix Plastic Products</span> — Elk Grove Village, IL · ISO-certified facility · 48+ years of precision manufacturing
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {chapters.map((chapter, idx) => (
              <button
                key={chapter.id}
                onClick={() => { setActiveChapter(idx); setIsPlaying(false); }}
                aria-label={`View ${chapter.title}`}
                className={`group relative rounded-[14px] overflow-hidden border transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-2 ${
                  activeChapter === idx
                    ? 'border-[#1A5FA8] shadow-[0_0_40px_rgba(26,95,168,0.22)] bg-[#FFFFFF]'
                    : 'border-[#D0D9E8] bg-[#FFFFFF] hover:border-[#1A5FA8]/40 hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)]'
                }`}
              >
                <div className="flex items-stretch">
                  <div className="relative w-[88px] flex-shrink-0 overflow-hidden">
                    <img
                      src={chapter.image}
                      alt={chapter.title}
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      className="w-full h-full object-cover transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[rgba(15,35,64,0.35)]" />
                    {activeChapter === idx && (
                      <div className="absolute inset-0 bg-[#1A5FA8]/20 flex items-center justify-center">
                        <div className="w-7 h-7 rounded-full bg-[#1A5FA8] flex items-center justify-center shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                          <Play className="w-3 h-3 text-[#FFFFFF] ml-0.5" strokeWidth={2} fill="#FFFFFF" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 px-4 py-3">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${activeChapter === idx ? 'text-[#1A5FA8]' : 'text-[#4A5E78]'}`}>
                        {chapter.icon}
                      </span>
                      <span className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.1em] text-[#4A5E78]">{chapter.label}</span>
                    </div>
                    <p className={`font-['Barlow_Condensed'] text-[15px] font-[700] leading-[1.2] tracking-[-0.01em] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${activeChapter === idx ? 'text-[#1A5FA8]' : 'text-[#0F2340]'}`}>
                      {chapter.title}
                    </p>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <span className={`font-['Barlow_Condensed'] text-[18px] font-[800] ${activeChapter === idx ? 'text-[#C95C0A]' : 'text-[#4A5E78]'}`}>{chapter.stat}</span>
                      <span className="font-['JetBrains_Mono'] text-[9px] text-[#4A5E78] uppercase tracking-[0.08em]">{chapter.statLabel}</span>
                    </div>
                  </div>

                  <div className={`w-1 flex-shrink-0 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${activeChapter === idx ? 'bg-[#1A5FA8]' : 'bg-transparent'}`} />
                </div>
              </button>
            ))}

            <div className="mt-2 rounded-[14px] bg-[#EDF1F7] border border-[#D0D9E8] p-5">
              <p className="font-['Barlow_Condensed'] text-[16px] font-[700] text-[#1A5FA8] mb-1">Schedule a Live Tour</p>
              <p className="font-['Inter'] text-[13px] text-[#4A5E78] leading-[1.55] mb-3">
                Visit our Elk Grove Village facility and see precision injection molding in action.
              </p>
              <a
                href="tel:6305956144"
                className="inline-flex items-center gap-2 font-['Inter'] font-[700] text-[13px] text-[#FFFFFF] bg-[#1A5FA8] py-[10px] px-[18px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#154E8C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] focus-visible:ring-offset-2 w-full justify-center"
              >
                Call (630) 595-6144
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { VideoTourSection };