import { useState, useEffect } from 'react';
import { Phone, Mail, ArrowRight, CheckCircle, Zap, Shield, Clock } from 'lucide-react';

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      eyebrow: 'A powerful partner you can trust',
      headline: 'Services For\nIndustries',
      sub: 'From fast quotes, and online drawing submission, to fast pick-up and delivery.',
    },
    {
      eyebrow: 'A powerful partner you can trust',
      headline: '1st Order\nIs Free',
      sub: 'We are open for business: New customers get their 1st Order Free.',
    },
    {
      eyebrow: 'A powerful partner you can trust',
      headline: 'Marvel Machining\nCompany',
      sub: 'We keep your facility running with Superhero service.',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const trustItems = [
    { icon: Zap, label: 'Rapid Turnaround', detail: '24–72 hr quotes' },
    { icon: Shield, label: 'Precision Guaranteed', detail: 'Tight tolerances' },
    { icon: Clock, label: 'Chicago Metro', detail: 'Pick-up & delivery' },
    { icon: CheckCircle, label: '1st Order Free', detail: 'New customers' },
  ];

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col overflow-hidden">
      <div
        className="absolute inset-0 bg-[url('https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg')] bg-cover bg-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/35 to-black/15" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col flex-1 max-w-[1200px] mx-auto px-[24px] w-full">
        <div className="flex flex-col justify-center flex-1 pt-[80px] pb-[40px]">
          <div className="max-w-[720px]">
            <div className="inline-flex items-center gap-[8px] mb-[24px] px-[14px] py-[7px] rounded-[6px] bg-[#C8102E]/20 border border-[#C8102E]/40 backdrop-blur-[8px]">
              <span className="w-[6px] h-[6px] rounded-full bg-[#F97316] animate-pulse inline-block" />
              <span className="font-['Barlow_Condensed'] font-[600] text-[13px] tracking-[0.08em] uppercase text-[#F0F2F4]/90">
                {slides[activeSlide].eyebrow}
              </span>
            </div>

            <h1
              key={activeSlide}
              className="font-['Barlow_Condensed'] font-[800] text-[clamp(40px,6vw,80px)] leading-[1.1] tracking-[-0.03em] text-[#F0F2F4]/90 mb-[20px] whitespace-pre-line animate-[hero_heroFadeUp_0.5s_ease-out_both]"
            >
              {slides[activeSlide].headline}
            </h1>

            <p
              key={`sub-${activeSlide}`}
              className="font-['Inter'] font-normal text-[18px] leading-[1.6] text-[#F0F2F4]/80 mb-[36px] max-w-[540px] animate-[hero_heroFadeUp_0.5s_0.1s_ease-out_both]"
            >
              {slides[activeSlide].sub}
            </p>

            <div className="flex flex-wrap gap-[14px] mb-[48px]">
              <a
                href="https://marvelspeed.com/contact-us"
                className="inline-flex items-center gap-[8px] bg-[#F97316] text-[#FFFFFF] font-['Inter'] font-[700] text-[15px] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 hover:shadow-[0_4px_24px_rgba(249,115,22,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
              </a>

              <a
                href="tel:6303500075"
                className="inline-flex items-center gap-[8px] bg-transparent text-[#F0F2F4]/90 border border-[#F0F2F4]/40 font-['Inter'] font-[600] text-[15px] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white/10 hover:border-[#F0F2F4]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2"
              >
                <Phone className="w-5 h-5" strokeWidth={1.5} />
                630 350-0075
              </a>
            </div>

            <div className="flex gap-[8px]">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-[3px] rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 ${
                    i === activeSlide
                      ? 'w-[32px] bg-[#C8102E]'
                      : 'w-[16px] bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 pb-[40px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/10 rounded-[10px] overflow-hidden border border-white/10 backdrop-blur-[12px]">
            {trustItems.map(({ icon: Icon, label, detail }, i) => (
              <div
                key={i}
                className="flex flex-col items-start gap-[6px] px-[20px] py-[18px] bg-black/30 hover:bg-[#C8102E]/20 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group"
              >
                <div className="flex items-center gap-[8px] mb-[2px]">
                  <Icon
                    className="w-5 h-5 text-[#C8102E] group-hover:text-[#F97316] transition-all duration-[200ms]"
                    strokeWidth={1.5}
                  />
                  <span className="font-['Barlow_Condensed'] font-[700] text-[15px] text-[#F0F2F4]/90 uppercase tracking-[0.04em]">
                    {label}
                  </span>
                </div>
                <span className="font-['Inter'] font-normal text-[13px] text-[#F0F2F4]/60">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-[100px] right-[24px] z-10 hidden lg:flex flex-col items-end gap-[12px]">
        <div className="flex flex-col items-end gap-[8px] px-[20px] py-[16px] rounded-[10px] bg-black/40 border border-white/10 backdrop-blur-[12px] shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
          <div className="flex items-center gap-[8px]">
            <Mail className="w-4 h-4 text-[#C8102E]" strokeWidth={1.5} />
            <a
              href="mailto:orders@marvel-speed.com"
              className="font-['Inter'] font-medium text-[13px] text-[#F0F2F4]/80 hover:text-[#F0F2F4] transition-all duration-[200ms] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
            >
              orders@marvel-speed.com
            </a>
          </div>
          <div className="flex items-center gap-[8px]">
            <Phone className="w-4 h-4 text-[#C8102E]" strokeWidth={1.5} />
            <a
              href="tel:6303500075"
              className="font-['Inter'] font-medium text-[13px] text-[#F0F2F4]/80 hover:text-[#F0F2F4] transition-all duration-[200ms] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/50"
            >
              630 350-0075
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes hero_heroFadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}