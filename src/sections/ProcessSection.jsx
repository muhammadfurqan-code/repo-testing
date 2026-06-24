import { useState } from 'react';
import { FileText, MessageSquare, Settings, CheckCircle, Truck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Submit Your Drawing',
    description: 'Upload your CAD file or technical drawing online — we accept all major formats. No back-and-forth delays.',
    image: 'https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg',
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Fast Quote Turnaround',
    description: 'Our engineers review your specs and return a competitive quote — typically same day. First order is on us.',
    image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg',
  },
  {
    number: '03',
    icon: Settings,
    title: 'Precision Machining',
    description: 'Your part enters our CNC floor immediately. Boring mills, vertical turret lathes, and rapid-setup cells run your job to tight tolerances.',
    image: 'https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Quality Inspection',
    description: 'Every part is measured and verified before it leaves the floor. Critical dimensions checked. No surprises on delivery.',
    image: 'https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg',
  },
  {
    number: '05',
    icon: Truck,
    title: 'Pick-Up or Delivery',
    description: 'Flexible pick-up from our Chicago-area facility or direct delivery to your plant. We keep your line running.',
    image: 'https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide2.jpg',
  },
];

export default function OurProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const active = steps[activeStep];
  const ActiveIcon = active.icon;

  return (
    <section className="py-[80px] bg-[#F4F5F7]">
      <style>{`@keyframes process_fadeSlide { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>

      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[56px]">
          <p className="font-['JetBrains_Mono'] text-[13px] font-medium tracking-[0.12em] uppercase text-[#C8102E] mb-[10px]">
            How It Works
          </p>
          <h2 className="font-['Barlow_Condensed'] text-[clamp(32px,4vw,52px)] font-[800] tracking-[-0.03em] text-[#1C2530] leading-[1.1] mb-[14px]">
            From Drawing to Delivery —<br className="hidden sm:block" /> Superhero Speed, Every Time.
          </h2>
          <p className="font-['Inter'] text-[16px] font-normal text-[#6B7280] max-w-[540px] leading-[1.6]">
            A no-nonsense process built for facility managers who can't afford downtime. Fast quotes, precision machining, and reliable delivery to the Chicago metro area.
          </p>
        </div>

        {/* Main Layout: asymmetric bento — featured image left, steps right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-[32px] items-start">

          {/* Left: Active Step Feature Card */}
          <div className="relative rounded-[12px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.16)] bg-[#1C2530] min-h-[420px] lg:min-h-[540px] flex flex-col justify-end">
            <img
              key={activeStep}
              src={active.image}
              alt={active.title}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
              className="absolute inset-0 w-full h-full object-cover object-center animate-[process_fadeSlide_0.35s_ease-out_forwards]"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.88)] via-[rgba(28,37,48,0.45)] to-transparent" />

            {/* Step badge */}
            <div className="absolute top-[24px] left-[24px] flex items-center gap-[10px]">
              <span className="font-['JetBrains_Mono'] text-[11px] font-medium tracking-[0.14em] uppercase text-[#F0F2F4]/70 bg-[rgba(28,37,48,0.6)] backdrop-blur-[8px] border border-[rgba(255,255,255,0.10)] rounded-[6px] px-[12px] py-[6px]">
                Step {active.number}
              </span>
            </div>

            {/* Content overlay */}
            <div className="relative z-10 p-[32px]">
              <div className="flex items-center gap-[12px] mb-[12px]">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[#C8102E] flex items-center justify-center shadow-[0_0_40px_rgba(200,16,46,0.22)]">
                  <ActiveIcon className="w-5 h-5 text-[#FFFFFF]" strokeWidth={1.5} />
                </div>
                <h3 className="font-['Barlow_Condensed'] text-[24px] font-[600] text-[#F0F2F4]/90 leading-[1.2]">
                  {active.title}
                </h3>
              </div>
              <p className="font-['Inter'] text-[15px] font-normal text-[#F0F2F4]/75 leading-[1.65] max-w-[400px]">
                {active.description}
              </p>
            </div>
          </div>

          {/* Right: Step List */}
          <div className="flex flex-col gap-0">
            {steps.map((step, idx) => {
              const StepIcon = step.icon;
              const isActive = idx === activeStep;
              const isLast = idx === steps.length - 1;

              return (
                <div key={step.number} className="relative flex gap-0">
                  {/* Connector column */}
                  <div className="flex flex-col items-center w-[48px] shrink-0">
                    <button
                      onClick={() => setActiveStep(idx)}
                      aria-label={`View step ${step.number}: ${step.title}`}
                      className={`
                        w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0 z-10
                        transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2
                        ${isActive
                          ? 'bg-[#C8102E] shadow-[0_0_40px_rgba(200,16,46,0.22)]'
                          : 'bg-[#FFFFFF] border border-[#D1D5DB] hover:border-[#C8102E] hover:bg-[#fff5f6]'}
                      `}
                    >
                      <StepIcon
                        className={`w-5 h-5 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'text-[#FFFFFF]' : 'text-[#6B7280]'}`}
                        strokeWidth={1.5}
                      />
                    </button>
                    {!isLast && (
                      <div className={`w-[2px] flex-1 min-h-[24px] mt-[2px] mb-[2px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'bg-[#C8102E]/40' : 'bg-[#D1D5DB]'}`} />
                    )}
                  </div>

                  {/* Step content */}
                  <button
                    onClick={() => setActiveStep(idx)}
                    className={`
                      flex-1 text-left ml-[16px] mb-[4px] rounded-[10px] px-[20px] py-[18px]
                      transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2
                      ${isActive
                        ? 'bg-[#FFFFFF] border border-[#D1D5DB] shadow-[0_4px_16px_rgba(0,0,0,0.12)]'
                        : 'bg-transparent border border-transparent hover:bg-[#FFFFFF] hover:border-[#D1D5DB] hover:shadow-[0_1px_3px_rgba(0,0,0,0.10)]'}
                    `}
                  >
                    <div className="flex items-center gap-[10px] mb-[4px]">
                      <span className="font-['JetBrains_Mono'] text-[11px] font-medium tracking-[0.12em] uppercase text-[#C8102E]">
                        {step.number}
                      </span>
                      {isActive && (
                        <span className="text-[10px] font-['Inter'] font-medium uppercase tracking-[0.10em] text-[#F97316] bg-[#fff7ed] border border-[#fed7aa] rounded-[4px] px-[8px] py-[2px]">
                          Active
                        </span>
                      )}
                    </div>
                    <h4 className={`font-['Barlow_Condensed'] text-[20px] font-[600] leading-[1.2] mb-[4px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'text-[#1C2530]' : 'text-[#6B7280]'}`}>
                      {step.title}
                    </h4>
                    {isActive && (
                      <p className="font-['Inter'] text-[14px] font-normal text-[#6B7280] leading-[1.6] mt-[6px] animate-[process_fadeSlide_0.3s_ease-out_forwards]">
                        {step.description}
                      </p>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-[56px] rounded-[12px] bg-[#1C2530] border border-[rgba(255,255,255,0.07)] px-[32px] py-[28px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
          <div>
            <p className="font-['Barlow_Condensed'] text-[22px] font-[700] text-[#F0F2F4]/90 leading-[1.2] mb-[4px]">
              Ready to get started? Your first order is free.
            </p>
            <p className="font-['Inter'] text-[14px] font-normal text-[#6B7280]">
              Call <a href="tel:6303500075" className="text-[#F0F2F4]/80 hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">630 350-0075</a> or email <a href="mailto:orders@marvel-speed.com" className="text-[#F0F2F4]/80 hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">orders@marvel-speed.com</a>
            </p>
          </div>
          <a
            href="https://marvelspeed.com/contact-us"
            className="shrink-0 bg-[#F97316] text-[#FFFFFF] font-['Inter'] font-[700] text-[15px] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530]"
          >
            Request a Quote →
          </a>
        </div>
      </div>
    </section>
  );
}