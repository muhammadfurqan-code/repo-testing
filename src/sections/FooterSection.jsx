import { Phone, Mail, Clock, ArrowRight } from 'lucide-react';

function FooterSection() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'CNC Boring', href: 'https://marvelspeed.com/services_management/cnc-boring/' },
    { label: 'Low Volume & Rapid Response', href: 'https://marvelspeed.com/services_management/low-volume-rapid-response/' },
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
    <footer className="bg-[#1C2530] border-t border-[#D1D5DB]/10">
      {/* CTA Banner */}
      <div className="bg-[#C8102E] py-[20px]">
        <div className="max-w-[1200px] mx-auto px-[24px] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-['Barlow_Condensed'] font-[800] text-[22px] tracking-[-0.03em] text-[#FFFFFF] uppercase">
            New Customers: Your 1st Order Is Free
          </p>
          <a
            href="https://marvelspeed.com/contact-us"
            className="inline-flex items-center gap-2 bg-[#F97316] text-[#FFFFFF] font-[700] font-['Inter'] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F97316] focus-visible:ring-offset-2 whitespace-nowrap"
          >
            Book Now
            <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-[1200px] mx-auto px-[24px] py-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div>
              <span className="font-['Barlow_Condensed'] font-[800] text-[28px] tracking-[-0.03em] text-[#F0F2F4]/90 uppercase leading-none">
                Marvel
              </span>
              <span className="font-['Barlow_Condensed'] font-[800] text-[28px] tracking-[-0.03em] text-[#C8102E] uppercase leading-none ml-2">
                Machining
              </span>
            </div>
            <p className="font-['Inter'] font-medium text-[14px] text-[#C8102E] uppercase tracking-[0.08em]">
              Superhero Speed. Precision You Can Trust.
            </p>
            <p className="font-['Inter'] font-normal text-[14px] text-[#F0F2F4]/75 leading-relaxed">
              Serving industrial facility managers, plant engineers, and maintenance directors across the Chicago metro area with rapid-turnaround CNC machining and parts rebuilding.
            </p>
            <div className="mt-2">
              <img
                src="https://marvelspeed.com/wp-content/uploads/2025/01/1-2.jpg"
                alt="Marvel Machining CNC shop floor"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="w-full h-[100px] object-cover rounded-[10px] opacity-70 grayscale hover:grayscale-0 hover:opacity-90 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-5">
            <h3 className="font-['Barlow_Condensed'] font-[700] text-[18px] uppercase tracking-[0.06em] text-[#F0F2F4]/90 border-b border-[#C8102E] pb-2">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 font-['Inter'] font-normal text-[14px] text-[#F0F2F4]/70 hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] rounded-[4px]"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -ml-1 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]" strokeWidth={2} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-5">
            <h3 className="font-['Barlow_Condensed'] font-[700] text-[18px] uppercase tracking-[0.06em] text-[#F0F2F4]/90 border-b border-[#C8102E] pb-2">
              Contact
            </h3>
            <div className="flex flex-col gap-5">
              <a
                href="tel:6303500075"
                className="flex items-start gap-3 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] rounded-[4px]"
              >
                <div className="mt-0.5 w-8 h-8 rounded-[6px] bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                  <Phone className="w-4 h-4 text-[#C8102E] group-hover:text-[#FFFFFF] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-['Inter'] font-medium text-[11px] uppercase tracking-[0.08em] text-[#6B7280] mb-0.5">Phone</p>
                  <p className="font-['JetBrains_Mono'] font-normal text-[15px] text-[#F0F2F4]/90 group-hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    630 350-0075
                  </p>
                </div>
              </a>

              <a
                href="mailto:orders@marvel-speed.com"
                className="flex items-start gap-3 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8102E] rounded-[4px]"
              >
                <div className="mt-0.5 w-8 h-8 rounded-[6px] bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                  <Mail className="w-4 h-4 text-[#C8102E] group-hover:text-[#FFFFFF] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-['Inter'] font-medium text-[11px] uppercase tracking-[0.08em] text-[#6B7280] mb-0.5">Email</p>
                  <p className="font-['JetBrains_Mono'] font-normal text-[13px] text-[#F0F2F4]/90 group-hover:text-[#C8102E] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] break-all">
                    orders@marvel-speed.com
                  </p>
                </div>
              </a>

              <div className="mt-2">
                <a
                  href="https://marvelspeed.com/contact-us"
                  className="inline-flex items-center gap-2 bg-[#C8102E] text-[#FFFFFF] font-['Inter'] font-[700] text-[13px] py-[12px] px-[28px] rounded-[6px] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-[#A50D26] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8102E] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C2530]"
                >
                  Request a Quote
                  <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div className="flex flex-col gap-5">
            <h3 className="font-['Barlow_Condensed'] font-[700] text-[18px] uppercase tracking-[0.06em] text-[#F0F2F4]/90 border-b border-[#C8102E] pb-2">
              Hours of Operation
            </h3>
            <div className="flex items-start gap-3 mb-1">
              <div className="mt-0.5 w-8 h-8 rounded-[6px] bg-[#C8102E]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 text-[#C8102E]" strokeWidth={1.5} />
              </div>
              <p className="font-['Inter'] font-normal text-[13px] text-[#F0F2F4]/70 leading-relaxed">
                Chicago Metro Area — Rapid pickup &amp; delivery available.
              </p>
            </div>
            <ul className="flex flex-col gap-3">
              {hours.map((item) => (
                <li key={item.day} className="flex flex-col gap-0.5 border-b border-[#F0F2F4]/5 pb-3 last:border-0 last:pb-0">
                  <span className="font-['Inter'] font-medium text-[12px] uppercase tracking-[0.06em] text-[#6B7280]">
                    {item.day}
                  </span>
                  <span className="font-['JetBrains_Mono'] font-normal text-[14px] text-[#F0F2F4]/85">
                    {item.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-2 rounded-[10px] overflow-hidden border border-[#F0F2F4]/10">
              <img
                src="https://marvelspeed.com/wp-content/uploads/2025/01/2-1.jpg"
                alt="CNC boring mill in operation at Marvel Machining"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="w-full h-[80px] object-cover opacity-60 grayscale hover:grayscale-0 hover:opacity-80 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F0F2F4]/8">
        <div className="max-w-[1200px] mx-auto px-[24px] py-[24px] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['Inter'] font-normal text-[13px] text-[#6B7280]">
            © {currentYear} Marvel Machining. All rights reserved.
          </p>
          <p className="font-['Inter'] font-normal text-[13px] text-[#6B7280]">
            Serving the Chicago Metro Area — CNC Machining &amp; Precision Parts
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;