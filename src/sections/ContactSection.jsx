import { useState } from 'react';
import { Phone, Mail, Clock, Send, ChevronRight, MapPin } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    partDescription: '',
    quantity: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-[80px] bg-[#F4F5F7]" id="contact">
      <div className="max-w-[1200px] mx-auto px-[24px]">

        {/* Section Header */}
        <div className="mb-[56px]">
          <p className="font-['Barlow_Condensed'] text-[#C8102E] text-[14px] font-[700] uppercase tracking-[0.12em] mb-[8px]">
            Get In Touch
          </p>
          <h2 className="font-['Barlow_Condensed'] text-[clamp(32px,4vw,52px)] font-[800] tracking-[-0.03em] text-[#1C2331] leading-[1.05]">
            Request a Quote.<br />
            <span className="text-[#C8102E]">We Respond Fast.</span>
          </h2>
          <p className="font-['Inter'] text-[#6B7280] text-[16px] font-normal mt-[12px] max-w-[520px]">
            Chicago-area facilities trust Marvel Machining for rapid-response CNC work. Send us your specs — we'll get back to you same day.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-[40px] items-start">

          {/* LEFT — Contact Form */}
          <div className="bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] p-[32px] shadow-[0_4px_16px_rgba(0,0,0,0.12)]">
            {/* Image strip */}
            <div className="relative rounded-[6px] overflow-hidden mb-[28px] h-[180px]">
              <img
                src="https://marvelspeed.com/wp-content/themes/marvel/assets/images/main-slider/slider1/slide1.jpg"
                alt="CNC machining operation at Marvel Machining facility"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-[rgba(28,35,49,0.45)]" />
              <div className="absolute bottom-[16px] left-[20px]">
                <span className="font-['Barlow_Condensed'] text-[#FFFFFF] text-[20px] font-[700] tracking-[0.04em] uppercase">
                  New Customers — 1st Order Free
                </span>
              </div>
            </div>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-[48px] text-center">
                <div className="w-[56px] h-[56px] rounded-full bg-[#C8102E] flex items-center justify-center mb-[20px] shadow-[0_0_40px_rgba(200,16,46,0.22)]">
                  <ChevronRight className="w-7 h-7 text-[#FFFFFF]" strokeWidth={2.5} />
                </div>
                <h3 className="font-['Barlow_Condensed'] text-[28px] font-[700] text-[#1C2331] mb-[8px]">
                  Quote Request Received
                </h3>
                <p className="font-['Inter'] text-[#6B7280] text-[15px] max-w-[340px]">
                  Our team will review your specs and respond same business day. Check your inbox at the email you provided.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-[20px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Inter'] text-[#1C2331] text-[13px] font-medium uppercase tracking-[0.06em]">
                      Full Name <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Smith"
                      className="font-['Inter'] text-[#1C2331] text-[15px] bg-[#F4F5F7] border border-[#D1D5DB] rounded-[4px] px-[14px] py-[10px] outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:border-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-[#6B7280]"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Inter'] text-[#1C2331] text-[13px] font-medium uppercase tracking-[0.06em]">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Industries"
                      className="font-['Inter'] text-[#1C2331] text-[15px] bg-[#F4F5F7] border border-[#D1D5DB] rounded-[4px] px-[14px] py-[10px] outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:border-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-[#6B7280]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Inter'] text-[#1C2331] text-[13px] font-medium uppercase tracking-[0.06em]">
                      Email <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="font-['Inter'] text-[#1C2331] text-[15px] bg-[#F4F5F7] border border-[#D1D5DB] rounded-[4px] px-[14px] py-[10px] outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:border-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-[#6B7280]"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Inter'] text-[#1C2331] text-[13px] font-medium uppercase tracking-[0.06em]">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(630) 000-0000"
                      className="font-['Inter'] text-[#1C2331] text-[15px] bg-[#F4F5F7] border border-[#D1D5DB] rounded-[4px] px-[14px] py-[10px] outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:border-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-[#6B7280]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Inter'] text-[#1C2331] text-[13px] font-medium uppercase tracking-[0.06em]">
                      Part / Service Needed <span className="text-[#C8102E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="partDescription"
                      required
                      value={formData.partDescription}
                      onChange={handleChange}
                      placeholder="e.g. CNC Boring, Lathe work"
                      className="font-['Inter'] text-[#1C2331] text-[15px] bg-[#F4F5F7] border border-[#D1D5DB] rounded-[4px] px-[14px] py-[10px] outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:border-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-[#6B7280]"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label className="font-['Inter'] text-[#1C2331] text-[13px] font-medium uppercase tracking-[0.06em]">
                      Quantity / Volume
                    </label>
                    <input
                      type="text"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g. 5 pieces, prototype"
                      className="font-['Inter'] text-[#1C2331] text-[15px] bg-[#F4F5F7] border border-[#D1D5DB] rounded-[4px] px-[14px] py-[10px] outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:border-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-[#6B7280]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[6px]">
                  <label className="font-['Inter'] text-[#1C2331] text-[13px] font-medium uppercase tracking-[0.06em]">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe tolerances, materials, deadlines, or attach drawing references..."
                    className="font-['Inter'] text-[#1C2331] text-[15px] bg-[#F4F5F7] border border-[#D1D5DB] rounded-[4px] px-[14px] py-[10px] outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:border-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] placeholder:text-[#6B7280] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-[10px] bg-[#E87722] text-[#FFFFFF] font-['Barlow_Condensed'] font-[700] text-[18px] uppercase tracking-[0.06em] py-[14px] px-[28px] rounded-[4px] hover:bg-[#C8102E] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
                >
                  <Send className="w-5 h-5" strokeWidth={1.5} />
                  Submit Quote Request
                </button>

                <p className="font-['Inter'] text-[#6B7280] text-[12px] text-center">
                  Or email drawings directly to{' '}
                  <a
                    href="mailto:orders@marvel-speed.com"
                    className="text-[#C8102E] hover:underline font-medium transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  >
                    orders@marvel-speed.com
                  </a>
                </p>
              </form>
            )}
          </div>

          {/* RIGHT — Contact Details */}
          <div className="flex flex-col gap-[24px]">

            {/* Contact Info Card */}
            <div className="bg-[#1C2331] border border-[rgba(255,255,255,0.08)] rounded-[8px] p-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.16)]">
              <h3 className="font-['Barlow_Condensed'] text-[#F0F2F5]/90 text-[22px] font-[700] uppercase tracking-[0.06em] mb-[24px]">
                Contact Details
              </h3>

              <div className="flex flex-col gap-[20px]">
                <a
                  href="tel:6303500075"
                  className="flex items-start gap-[14px] group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  <div className="w-[40px] h-[40px] rounded-[4px] bg-[#C8102E] flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(200,16,46,0.22)] group-hover:bg-[#A50D25] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <Phone className="w-5 h-5 text-[#FFFFFF]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[#6B7280] text-[11px] uppercase tracking-[0.1em] font-medium mb-[2px]">
                      Phone
                    </p>
                    <p className="font-['Barlow_Condensed'] text-[#F0F2F5]/90 text-[22px] font-[700] tracking-[0.02em] group-hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                      (630) 350-0075
                    </p>
                  </div>
                </a>

                <div className="h-[1px] bg-[rgba(255,255,255,0.08)]" />

                <a
                  href="mailto:orders@marvel-speed.com"
                  className="flex items-start gap-[14px] group transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                >
                  <div className="w-[40px] h-[40px] rounded-[4px] bg-[#C8102E] flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(200,16,46,0.22)] group-hover:bg-[#A50D25] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <Mail className="w-5 h-5 text-[#FFFFFF]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[#6B7280] text-[11px] uppercase tracking-[0.1em] font-medium mb-[2px]">
                      Email
                    </p>
                    <p className="font-['Inter'] text-[#F0F2F5]/90 text-[15px] font-medium break-all group-hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                      orders@marvel-speed.com
                    </p>
                  </div>
                </a>

                <div className="h-[1px] bg-[rgba(255,255,255,0.08)]" />

                <div className="flex items-start gap-[14px]">
                  <div className="w-[40px] h-[40px] rounded-[4px] bg-[#C8102E] flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(200,16,46,0.22)]">
                    <Clock className="w-5 h-5 text-[#FFFFFF]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[#6B7280] text-[11px] uppercase tracking-[0.1em] font-medium mb-[4px]">
                      Business Hours
                    </p>
                    <div className="flex flex-col gap-[4px]">
                      <div className="flex items-center justify-between gap-[24px]">
                        <span className="font-['Inter'] text-[#F0F2F5]/90 text-[14px]">Mon – Fri</span>
                        <span className="font-['JetBrains_Mono'] text-[#F0F2F5]/90 text-[13px] font-medium">7:00 AM – 5:00 PM</span>
                      </div>
                      <div className="flex items-center justify-between gap-[24px]">
                        <span className="font-['Inter'] text-[#6B7280] text-[14px]">Saturday</span>
                        <span className="font-['JetBrains_Mono'] text-[#6B7280] text-[13px]">By Appointment</span>
                      </div>
                      <div className="flex items-center justify-between gap-[24px]">
                        <span className="font-['Inter'] text-[#6B7280] text-[14px]">Sunday</span>
                        <span className="font-['JetBrains_Mono'] text-[#6B7280] text-[13px]">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-[1px] bg-[rgba(255,255,255,0.08)]" />

                <div className="flex items-start gap-[14px]">
                  <div className="w-[40px] h-[40px] rounded-[4px] bg-[#C8102E] flex items-center justify-center flex-shrink-0 shadow-[0_0_40px_rgba(200,16,46,0.22)]">
                    <MapPin className="w-5 h-5 text-[#FFFFFF]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[#6B7280] text-[11px] uppercase tracking-[0.1em] font-medium mb-[2px]">
                      Service Area
                    </p>
                    <p className="font-['Inter'] text-[#F0F2F5]/90 text-[14px]">
                      Chicago & Surrounding Areas
                    </p>
                    <p className="font-['Inter'] text-[#6B7280] text-[13px] mt-[2px]">
                      Fast pick-up & delivery available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Shop Image Card */}
            <div className="relative rounded-[8px] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.16)] h-[200px]">
              <img
                src="https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg"
                alt="CNC boring mill in operation at Marvel Machining"
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-[rgba(28,35,49,0.45)]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[20px]">
                <p className="font-['Barlow_Condensed'] text-[#F0F2F5]/90 text-[13px] uppercase tracking-[0.12em] font-[600] mb-[6px]">
                  Serving Chicago Since Day One
                </p>
                <p className="font-['Barlow_Condensed'] text-[#FFFFFF] text-[26px] font-[800] tracking-[-0.02em] leading-[1.1]">
                  Superhero Speed.<br />Precision You Can Trust.
                </p>
              </div>
            </div>

            {/* CTA Callout */}
            <div className="bg-[#FFFFFF] border border-[#D1D5DB] rounded-[8px] p-[24px] shadow-[0_1px_3px_rgba(0,0,0,0.10)]">
              <p className="font-['Barlow_Condensed'] text-[#1C2331] text-[18px] font-[700] uppercase tracking-[0.04em] mb-[4px]">
                Need It Fast?
              </p>
              <p className="font-['Inter'] text-[#6B7280] text-[14px] mb-[16px]">
                Call us directly for urgent jobs. Same-day quoting available for qualifying orders.
              </p>
              <a
                href="tel:6303500075"
                className="flex items-center justify-center gap-[8px] bg-[#C8102E] text-[#FFFFFF] font-['Barlow_Condensed'] font-[700] text-[17px] uppercase tracking-[0.06em] py-[12px] px-[28px] rounded-[4px] hover:bg-[#A50D25] focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[0_4px_16px_rgba(0,0,0,0.12)]"
              >
                <Phone className="w-5 h-5" strokeWidth={1.5} />
                (630) 350-0075
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}