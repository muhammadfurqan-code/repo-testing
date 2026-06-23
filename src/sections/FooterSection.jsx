import { Phone, Mail, Clock, ArrowRight, MapPin } from 'lucide-react';

function FooterSection() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Low Volume & Rapid Response', href: 'https://marvelspeed.com/services_management/low-volume-rapid-response/' },
    { label: 'CNC Boring', href: 'https://marvelspeed.com/services_management/cnc-boring/' },
    { label: 'Vertical Turret Lathes', href: 'https://marvelspeed.com/services_management/vertical-turret-lathes/' },
    { label: 'Request a Quote', href: 'https://marvelspeed.com/contact-us' },
    { label: 'About Marvel Machining', href: 'https://marvelspeed.com/about/' },
    { label: 'Contact Us', href: 'https://marvelspeed.com/contact-us' },
  ];

  const hours = [
    { day: 'Monday – Friday', time: '7:00 AM – 5:00 PM' },
    { day: 'Saturday', time: 'By Appointment' },
    { day: 'Sunday', time: 'Closed' },
  ];

  return (
    <footer className="bg-[#1C2331] border-t-[3px] border-[#C8102E]">
      {/* Pre-footer CTA band */}
      <div className="bg-[#C8102E]">
        <div className="max-w-[1200px] mx-auto px-[24px] py-[28px] flex flex-col sm:flex-row items-center justify-between gap-[16px]">
          <div className="flex flex-col sm:flex-row items-center gap-[12px]">
            <span className="font-['Barlow_Condensed'] font-[800] text-[22px] text-[#FFFFFF] tracking-[-0.03em] uppercase">
              New Customers:
            </span>
            <span className="font-['Inter'] font-medium text-[#FFFFFF]/90 text-[16px]">
              Your 1st Order Is Free — Get a Fast Quote Today
            </span>
          </div>
          <a
            href="https://marvelspeed.com/contact-us"
            className="flex items-center gap-[8px] bg-[#E87722] text-[#FFFFFF] font-[700] font-['Inter'] py-[12px] px-[28px] rounded-[4px] whitespace-nowrap transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFFFFF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#C8102E]"
          >
            Request a Quote
            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1200px] mx-auto px-[24px] py-[64px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1.2fr_1.4fr_1.2fr] gap-[48px]">

          {/* Column 1: Brand */}
          <div className="flex flex-col gap-[20px]">
            <div>
              <span className="font-['Barlow_Condensed'] font-[800] text-[28px] tracking-[-0.03em] text-[#FFFFFF] uppercase leading-none">
                Marvel<span className="text-[#C8102E]"> Machining</span>
              </span>
            </div>
            <p className="font-['Barlow_Condensed'] font-[600] text-[16px] text-[#E87722] uppercase tracking-[0.06em]">
              Superhero Speed. Precision You Can Trust.
            </p>
            <p className="font-['Inter'] font-normal text-[14px] text-[#F0F2F5]/75 leading-[1.7] max-w-[280px]">
              Chicago-area CNC machining built for industrial facilities that can't afford downtime. Fast quotes, rapid turnaround, and tolerances you can count on.
            </p>
            {/* Shop image strip */}
            <div className="flex gap-[8px] mt-[4px]">
              {[
                'https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg',
                'https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg',
                'https://marvelspeed.com/wp-content/uploads/2025/01/3-1.jpg',
              ].map((src, i) => (
                <div key={i} className="w-[72px] h-[52px] rounded-[4px] overflow-hidden border border-[#FFFFFF]/10 flex-shrink-0">
                  <img
                    src={src}
                    alt={`Marvel Machining shop floor ${i + 1}`}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="font-['Barlow_Condensed'] font-[700] text-[18px] text-[#FFFFFF] uppercase tracking-[0.08em] pb-[8px] border-b border-[#FFFFFF]/10">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col gap-[10px]">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="flex items-center gap-[8px] font-['Inter'] font-normal text-[14px] text-[#F0F2F5]/75 hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] rounded-[2px]"
                    >
                      <ArrowRight className="w-[14px] h-[14px] text-[#C8102E] opacity-0 group-hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] -translate-x-[4px] group-hover:translate-x-0" strokeWidth={2} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="font-['Barlow_Condensed'] font-[700] text-[18px] text-[#FFFFFF] uppercase tracking-[0.08em] pb-[8px] border-b border-[#FFFFFF]/10">
              Contact
            </h3>
            <ul className="flex flex-col gap-[16px]">
              <li>
                <a
                  href="tel:6303500075"
                  className="flex items-start gap-[12px] group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] rounded-[2px]"
                >
                  <span className="flex-shrink-0 w-[36px] h-[36px] rounded-[4px] bg-[#C8102E]/15 border border-[#C8102E]/30 flex items-center justify-center mt-[1px] group-hover:bg-[#C8102E]/25 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <Phone className="w-[16px] h-[16px] text-[#C8102E]" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="block font-['Inter'] font-medium text-[11px] text-[#6B7280] uppercase tracking-[0.08em] mb-[2px]">Phone</span>
                    <span className="font-['JetBrains_Mono'] text-[15px] text-[#F0F2F5]/90 group-hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                      630 350-0075
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:orders@marvel-speed.com"
                  className="flex items-start gap-[12px] group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] rounded-[2px]"
                >
                  <span className="flex-shrink-0 w-[36px] h-[36px] rounded-[4px] bg-[#C8102E]/15 border border-[#C8102E]/30 flex items-center justify-center mt-[1px] group-hover:bg-[#C8102E]/25 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <Mail className="w-[16px] h-[16px] text-[#C8102E]" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="block font-['Inter'] font-medium text-[11px] text-[#6B7280] uppercase tracking-[0.08em] mb-[2px]">Email</span>
                    <span className="font-['Inter'] text-[14px] text-[#F0F2F5]/90 group-hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] break-all">
                      orders@marvel-speed.com
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-[12px]">
                  <span className="flex-shrink-0 w-[36px] h-[36px] rounded-[4px] bg-[#C8102E]/15 border border-[#C8102E]/30 flex items-center justify-center mt-[1px]">
                    <MapPin className="w-[16px] h-[16px] text-[#C8102E]" strokeWidth={1.5} />
                  </span>
                  <div>
                    <span className="block font-['Inter'] font-medium text-[11px] text-[#6B7280] uppercase tracking-[0.08em] mb-[2px]">Service Area</span>
                    <span className="font-['Inter'] text-[14px] text-[#F0F2F5]/90 leading-[1.5]">
                      Chicago & Surrounding Areas
                    </span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div className="flex flex-col gap-[16px]">
            <h3 className="font-['Barlow_Condensed'] font-[700] text-[18px] text-[#FFFFFF] uppercase tracking-[0.08em] pb-[8px] border-b border-[#FFFFFF]/10">
              Shop Hours
            </h3>
            <div className="flex items-center gap-[8px] mb-[4px]">
              <Clock className="w-[15px] h-[15px] text-[#E87722]" strokeWidth={1.5} />
              <span className="font-['Inter'] font-medium text-[12px] text-[#E87722] uppercase tracking-[0.06em]">
                Rapid Response Available
              </span>
            </div>
            <ul className="flex flex-col gap-[10px]">
              {hours.map((item) => (
                <li key={item.day} className="flex flex-col gap-[2px]">
                  <span className="font-['Inter'] font-medium text-[12px] text-[#6B7280] uppercase tracking-[0.05em]">
                    {item.day}
                  </span>
                  <span className="font-['JetBrains_Mono'] text-[13px] text-[#F0F2F5]/85">
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-[8px] p-[14px] rounded-[4px] bg-[#E87722]/10 border border-[#E87722]/25">
              <p className="font-['Inter'] font-medium text-[13px] text-[#F0F2F5]/85 leading-[1.6]">
                <span className="text-[#E87722] font-[700]">New customers:</span> Your first order is on us. Call or email to get started.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#FFFFFF]/08">
        <div className="max-w-[1200px] mx-auto px-[24px] py-[20px] flex flex-col sm:flex-row items-center justify-between gap-[12px]">
          <p className="font-['Inter'] font-normal text-[13px] text-[#6B7280]">
            © {currentYear} Marvel Machining. All rights reserved.
          </p>
          <p className="font-['Inter'] font-normal text-[13px] text-[#6B7280]">
            CNC Machining · Boring · Vertical Turret Lathes · Chicago, IL
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;