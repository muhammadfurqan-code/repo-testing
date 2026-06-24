import { useState } from 'react';
import { Phone, Mail, Clock, Send, ChevronRight, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputBase =
    'w-full bg-[#F4F5F7] border border-[#D1D5DB] rounded-[6px] px-[16px] py-[12px] text-[#1C2530] font-[\'Inter\'] font-normal text-[15px] placeholder:text-[#6B7280] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:border-[#C8102E] focus-visible:ring-2 focus-visible:ring-[#C8102E]/20';

  return (
    <section className="py-[80px] bg-[#F4F5F7]" id="contact">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section header */}
        <div className="mb-[56px]">
          <p className="font-['Barlow_Condensed'] text-[#C8102E] text-[14px] font-[700] tracking-[0.12em] uppercase mb-[8px]">
            Get In Touch
          </p>
          <h2 className="font-['Barlow_Condensed'] text-[clamp(32px,4vw,52px)] font-[800] tracking-[-0.03em] text-[#1C2530] leading-[1.1] mb-[16px]">
            Request a Quote Today
          </h2>
          <p className="font-['Inter'] text-[#6B7280] text-[16px] font-normal max-w-[520px] leading-[1.6]">
            Chicago metro facilities trust Marvel Machining for rapid-turnaround CNC work. Tell us what you need — we respond fast.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-[40px] items-start">

          {/* LEFT — Contact Form */}
          <div className="bg-[#FFFFFF] border border-[#D1D5DB] rounded-[10px] p-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-[48px] text-center">
                <div className="w-[64px] h-[64px] rounded-full bg-[#C8102E]/10 flex items-center justify-center mb-[24px]">
                  <Send className="w-7 h-7 text-[#C8102E]" strokeWidth={1.5} />
                </div>
                <h3 className="font-['Barlow_Condensed'] text-[28px] font-[700] text-[#1C2530] mb-[12px]">
                  Quote Request Sent
                </h3>
                <p className="font-['Inter'] text-[#6B7280] text-[15px] leading-[1.6] max-w-[360px]">
                  Our team will review your request and get back to you within one business day. For urgent needs, call us directly.
                </p>
                <a
                  href="tel:6303500075"
                  className="mt-[28px] inline-flex items-center gap-[8px] bg-[#C8102E] text-[#FFFFFF] py-[12px] px-[28px] rounded-[6px] font-['Inter'] font-[700] text-[15px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#A50D26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E]/40"
                >
                  <Phone className="w-5 h-5" strokeWidth={1.5} />
                  630 350-0075
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="font-['Barlow_Condensed'] text-[22px] font-[700] text-[#1C2530] mb-[24px] tracking-[-0.01em]">
                  Tell Us About Your Project
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mb-[16px]">
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Inter'] text-[13px] font-medium text-[#1C2530]">
                      Full Name <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Inter'] text-[13px] font-medium text-[#1C2530]">
                      Company / Facility
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Acme Manufacturing"
                      value={formData.company}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mb-[16px]">
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Inter'] text-[13px] font-medium text-[#1C2530]">
                      Email <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@facility.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Inter'] text-[13px] font-medium text-[#1C2530]">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="(630) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[6px] mb-[16px]">
                  <label className="font-['Inter'] text-[13px] font-medium text-[#1C2530]">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={inputBase + ' cursor-pointer'}
                  >
                    <option value="">Select a service...</option>
                    <option value="cnc-boring">CNC Boring</option>
                    <option value="vertical-turret-lathe">Vertical Turret Lathe</option>
                    <option value="low-volume-rapid">Low Volume & Rapid Response</option>
                    <option value="prototype">Prototype / First Article</option>
                    <option value="parts-rebuild">Parts Rebuild</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[6px] mb-[28px]">
                  <label className="font-['Inter'] text-[13px] font-medium text-[#1C2530]">
                    Project Details <span className="text-[#C8102E]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your part, tolerances, quantity, and turnaround needs..."
                    value={formData.message}
                    onChange={handleChange}
                    className={inputBase + ' resize-none'}
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px]">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-[8px] bg-[#F97316] text-[#FFFFFF] py-[12px] px-[28px] rounded-[6px] font-['Inter'] font-[700] text-[15px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 hover:shadow-[0_4px_16px_rgba(249,115,22,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316]/40"
                  >
                    Send Quote Request
                    <ChevronRight className="w-5 h-5" strokeWidth={2} />
                  </button>
                  <p className="font-['Inter'] text-[#6B7280] text-[13px]">
                    We respond within 1 business day
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT — Contact Details */}
          <div className="flex flex-col gap-[24px]">

            {/* Image panel */}
            <div className="relative rounded-[10px] overflow-hidden h-[200px] border border-[#D1D5DB] shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
              <img
                src="https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg"
                alt="Marvel Machining CNC shop floor"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(28,37,48,0.75)] to-transparent" />
              <div className="absolute bottom-0 left-0 p-[20px]">
                <p className="font-['Barlow_Condensed'] text-[#F0F2F4]/90 text-[13px] font-[600] tracking-[0.1em] uppercase mb-[4px]">
                  Chicago Metro Area
                </p>
                <p className="font-['Barlow_Condensed'] text-[#F0F2F4]/90 text-[20px] font-[800] leading-[1.1]">
                  Superhero Speed.<br />Precision You Can Trust.
                </p>
              </div>
            </div>

            {/* Contact info card */}
            <div className="bg-[#FFFFFF] border border-[#D1D5DB] rounded-[10px] p-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
              <h3 className="font-['Barlow_Condensed'] text-[20px] font-[700] text-[#1C2530] mb-[24px] tracking-[-0.01em]">
                Contact Information
              </h3>

              <div className="flex flex-col gap-[20px]">
                <a
                  href="tel:6303500075"
                  className="flex items-start gap-[14px] group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  <div className="w-[40px] h-[40px] rounded-[8px] bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <Phone className="w-5 h-5 text-[#C8102E]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[12px] font-medium text-[#6B7280] uppercase tracking-[0.08em] mb-[2px]">
                      Phone
                    </p>
                    <p className="font-['Barlow_Condensed'] text-[20px] font-[700] text-[#1C2530] group-hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                      630 350-0075
                    </p>
                  </div>
                </a>

                <div className="h-[1px] bg-[#D1D5DB]" />

                <a
                  href="mailto:orders@marvel-speed.com"
                  className="flex items-start gap-[14px] group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  <div className="w-[40px] h-[40px] rounded-[8px] bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E]/20 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <Mail className="w-5 h-5 text-[#C8102E]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[12px] font-medium text-[#6B7280] uppercase tracking-[0.08em] mb-[2px]">
                      Email
                    </p>
                    <p className="font-['Barlow_Condensed'] text-[18px] font-[700] text-[#1C2530] group-hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] break-all">
                      orders@marvel-speed.com
                    </p>
                  </div>
                </a>

                <div className="h-[1px] bg-[#D1D5DB]" />

                <div className="flex items-start gap-[14px]">
                  <div className="w-[40px] h-[40px] rounded-[8px] bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C8102E]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[12px] font-medium text-[#6B7280] uppercase tracking-[0.08em] mb-[2px]">
                      Service Area
                    </p>
                    <p className="font-['Barlow_Condensed'] text-[18px] font-[700] text-[#1C2530]">
                      Chicago Metro Area
                    </p>
                    <p className="font-['Inter'] text-[13px] text-[#6B7280] mt-[2px]">
                      Fast pick-up & delivery available
                    </p>
                  </div>
                </div>

                <div className="h-[1px] bg-[#D1D5DB]" />

                <div className="flex items-start gap-[14px]">
                  <div className="w-[40px] h-[40px] rounded-[8px] bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#C8102E]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[12px] font-medium text-[#6B7280] uppercase tracking-[0.08em] mb-[6px]">
                      Business Hours
                    </p>
                    <div className="flex flex-col gap-[4px]">
                      <div className="flex justify-between gap-[24px]">
                        <span className="font-['Inter'] text-[13px] font-medium text-[#1C2530]">Mon – Fri</span>
                        <span className="font-['JetBrains_Mono'] text-[13px] text-[#6B7280]">7:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-[24px]">
                        <span className="font-['Inter'] text-[13px] font-medium text-[#1C2530]">Saturday</span>
                        <span className="font-['JetBrains_Mono'] text-[13px] text-[#6B7280]">By Appointment</span>
                      </div>
                      <div className="flex justify-between gap-[24px]">
                        <span className="font-['Inter'] text-[13px] font-medium text-[#1C2530]">Sunday</span>
                        <span className="font-['JetBrains_Mono'] text-[13px] text-[#6B7280]">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* First order free callout */}
            <div className="relative rounded-[10px] overflow-hidden border border-[#C8102E]/30 shadow-[0_0_40px_rgba(200,16,46,0.22)]">
              <div className="absolute inset-0 bg-[#C8102E]" />
              <div className="relative p-[24px] flex items-center gap-[16px]">
                <div className="flex-1">
                  <p className="font-['Barlow_Condensed'] text-[#F0F2F4]/90 text-[13px] font-[600] tracking-[0.1em] uppercase mb-[4px]">
                    New Customers
                  </p>
                  <p className="font-['Barlow_Condensed'] text-[#FFFFFF] text-[22px] font-[800] leading-[1.1] tracking-[-0.02em]">
                    1st Order Is Free
                  </p>
                  <p className="font-['Inter'] text-[#F0F2F4]/90 text-[13px] mt-[6px]">
                    We're open for business — try us risk-free.
                  </p>
                </div>
                <a
                  href="mailto:orders@marvel-speed.com"
                  className="flex-shrink-0 inline-flex items-center gap-[6px] bg-[#FFFFFF] text-[#C8102E] py-[10px] px-[18px] rounded-[6px] font-['Inter'] font-[700] text-[13px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#F4F5F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF]/60"
                >
                  Claim It
                  <ChevronRight className="w-4 h-4" strokeWidth={2} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}