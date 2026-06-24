
import { Phone, Mail, ArrowRight , Clock } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

function FooterSection() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Engineering & DFM', href: 'https://www.matrixplastic.com/index.php/services/engineering-dfm' },
    { label: 'Moldmaking', href: 'https://www.matrixplastic.com/index.php/services/moldmaking' },
    { label: 'Injection Molding', href: 'https://www.matrixplastic.com/index.php/services/injection-molding-solving-problems-reducing-cycle-time-and-improving-yield' },
    { label: 'Quality Inspection', href: 'https://www.matrixplastic.com/index.php/services/inspection' },
    { label: 'Custom Manufacturing', href: 'https://www.matrixplastic.com/index.php/services/custom-manufacturing' },
    { label: 'Request a Quote', href: 'https://www.matrixplastic.com/contact-us/request-a-quote' },
  ];

  const capabilities = [
    { label: 'Micro Molding', href: '#' },
    { label: 'Close-Tolerance Components', href: '#' },
    { label: 'Sub-Assembly', href: '#' },
    { label: 'Medical Device Molding', href: '#' },
    { label: 'ISO-Certified Production', href: '#' },
  ];

  return (
    <footer className="bg-[#0F2340] font-['Inter']">
      <div className="border-b border-[#D0D9E8]/10">
        <div className="max-w-[1200px] mx-auto px-[24px] py-[64px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[48px] gap-y-[48px]">

            {/* Column 1: Brand */}
            <div className="lg:col-span-1 flex flex-col gap-[24px]">
              <a
                href="https://www.matrixplastic.com/"
                className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] rounded-[4px]"
                aria-label="Matrix Plastic Products home"
              >
                <img
                  src="https://www.matrixplastic.com/images/logos/MatrixLogo(R)_horizontal_white_536x129.png"
                  alt="Matrix Plastic Products logo"
                  className="h-12 w-auto object-contain"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.style.display = 'none'; }}
                />
              </a>
              <p className="text-[#FFFFFF]/80 text-[14px] leading-[1.7] font-['Inter'] font-normal max-w-[260px]">
                Injection Molding and Moldmaking with Surgical Precision. Nearly 5 decades of in-house DFM and mold making expertise.
              </p>
              <div className="flex items-center gap-[12px]">
                <span className="inline-block w-[32px] h-[2px] bg-[#C95C0A] rounded-full"></span>
                <span className="text-[#C95C0A] text-[11px] font-['Barlow_Condensed'] font-[700] tracking-[0.12em] uppercase">ISO Certified</span>
              </div>
              <div className="flex gap-[12px] mt-[4px]">
                <a
                  href="#"
                  aria-label="Matrix Plastic Products on LinkedIn"
                  className="w-[36px] h-[36px] rounded-[8px] bg-[#FFFFFF]/8 border border-[#D0D9E8]/15 flex items-center justify-center text-[#FFFFFF]/70 hover:bg-[#1A5FA8] hover:text-[#FFFFFF] hover:border-[#1A5FA8] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8]"
                >
                  <FaLinkedin className="w-[16px] h-[16px]" strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  aria-label="Matrix Plastic Products on Facebook"
                  className="w-[36px] h-[36px] rounded-[8px] bg-[#FFFFFF]/8 border border-[#D0D9E8]/15 flex items-center justify-center text-[#FFFFFF]/70 hover:bg-[#1A5FA8] hover:text-[#FFFFFF] hover:border-[#1A5FA8] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8]"
                >
                  <FaFacebook className="w-[16px] h-[16px]" strokeWidth={1.5} />
                </a>
                <a
                  href="#"
                  aria-label="Matrix Plastic Products on Twitter"
                  className="w-[36px] h-[36px] rounded-[8px] bg-[#FFFFFF]/8 border border-[#D0D9E8]/15 flex items-center justify-center text-[#FFFFFF]/70 hover:bg-[#1A5FA8] hover:text-[#FFFFFF] hover:border-[#1A5FA8] transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8]"
                >
                  <FaTwitter className="w-[16px] h-[16px]" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-[20px]">
              <h3 className="font-['Barlow_Condensed'] font-[700] text-[16px] tracking-[0.08em] uppercase text-[#FFFFFF]/90">
                Services
              </h3>
              <nav aria-label="Footer services navigation">
                <ul className="flex flex-col gap-[10px]">
                  {quickLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-[8px] text-[#FFFFFF]/65 text-[14px] font-normal hover:text-[#FFFFFF]/95 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] rounded-[3px]"
                      >
                        <ArrowRight className="w-[13px] h-[13px] text-[#C95C0A] opacity-0 group-hover:opacity-100 -translate-x-[4px] group-hover:translate-x-0 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] flex-shrink-0" strokeWidth={2} />
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Column 3: Capabilities */}
            <div className="flex flex-col gap-[20px]">
              <h3 className="font-['Barlow_Condensed'] font-[700] text-[16px] tracking-[0.08em] uppercase text-[#FFFFFF]/90">
                Capabilities
              </h3>
              <nav aria-label="Footer capabilities navigation">
                <ul className="flex flex-col gap-[10px]">
                  {capabilities.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="group flex items-center gap-[8px] text-[#FFFFFF]/65 text-[14px] font-normal hover:text-[#FFFFFF]/95 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] rounded-[3px]"
                      >
                        <ArrowRight className="w-[13px] h-[13px] text-[#C95C0A] opacity-0 group-hover:opacity-100 -translate-x-[4px] group-hover:translate-x-0 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] flex-shrink-0" strokeWidth={2} />
                        <span>{item.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-[8px] pt-[20px] border-t border-[#D0D9E8]/10">
                <p className="text-[#FFFFFF]/50 text-[12px] font-['JetBrains_Mono'] tracking-[0.04em] uppercase mb-[8px]">Industries Served</p>
                <div className="flex flex-wrap gap-[6px]">
                  {['Medical', 'Electronics', 'Safety'].map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-[10px] py-[4px] rounded-[4px] bg-[#1A5FA8]/20 border border-[#1A5FA8]/30 text-[#FFFFFF]/75 text-[11px] font-['Inter'] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 4: Contact & Hours */}
            <div className="flex flex-col gap-[20px]">
              <h3 className="font-['Barlow_Condensed'] font-[700] text-[16px] tracking-[0.08em] uppercase text-[#FFFFFF]/90">
                Contact Us
              </h3>
              <div className="flex flex-col gap-[16px]">
                <a
                  href="tel:6305956144"
                  className="group flex items-start gap-[12px] text-[#FFFFFF]/75 hover:text-[#FFFFFF]/95 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] rounded-[3px]"
                >
                  <span className="w-[32px] h-[32px] rounded-[8px] bg-[#1A5FA8]/25 border border-[#1A5FA8]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1A5FA8]/50 transition-all duration-[200ms]">
                    <Phone className="w-[14px] h-[14px] text-[#1A5FA8] group-hover:text-[#FFFFFF]" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[#FFFFFF]/45 text-[11px] font-['Barlow_Condensed'] tracking-[0.08em] uppercase mb-[2px]">Phone</p>
                    <p className="text-[14px] font-medium font-['Inter']">(630) 595-6144</p>
                  </div>
                </a>
                <a
                  href="mailto:info@matrixplastic.com"
                  className="group flex items-start gap-[12px] text-[#FFFFFF]/75 hover:text-[#FFFFFF]/95 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A5FA8] rounded-[3px]"
                >
                  <span className="w-[32px] h-[32px] rounded-[8px] bg-[#1A5FA8]/25 border border-[#1A5FA8]/30 flex items-center justify-center flex-shrink-0 group-hover:bg-[#1A5FA8]/50 transition-all duration-[200ms]">
                    <Mail className="w-[14px] h-[14px] text-[#1A5FA8] group-hover:text-[#FFFFFF]" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[#FFFFFF]/45 text-[11px] font-['Barlow_Condensed'] tracking-[0.08em] uppercase mb-[2px]">Email</p>
                    <p className="text-[14px] font-medium font-['Inter'] break-all">info@matrixplastic.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-[12px]">
                  <span className="w-[32px] h-[32px] rounded-[8px] bg-[#1A5FA8]/25 border border-[#1A5FA8]/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-[14px] h-[14px] text-[#1A5FA8]" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[#FFFFFF]/45 text-[11px] font-['Barlow_Condensed'] tracking-[0.08em] uppercase mb-[4px]">Business Hours</p>
                    <p className="text-[14px] text-[#FFFFFF]/75 font-['Inter']">Mon – Fri: 8:00 AM – 5:00 PM</p>
                    <p className="text-[13px] text-[#FFFFFF]/45 font-['Inter'] mt-[2px]">Central Time</p>
                  </div>
                </div>
              </div>
              <a
                href="https://www.matrixplastic.com/contact-us/request-a-quote"
                className="mt-[8px] inline-flex items-center justify-center gap-[8px] bg-[#C95C0A] text-[#FFFFFF] font-[700] font-['Inter'] py-[12px] px-[28px] rounded-[6px] text-[14px] hover:brightness-110 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C95C0A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2340] shadow-[0_4px_16px_rgba(201,92,10,0.30)]"
              >
                Request a Quote
                <ArrowRight className="w-[15px] h-[15px]" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="border-b border-[#D0D9E8]/10">
        <div className="max-w-[1200px] mx-auto px-[24px] py-[24px]">
          <div className="flex gap-[8px] overflow-x-auto scrollbar-hide">
            {[
              { src: 'https://www.matrixplastic.com/images/sliders/OrangePushersCompositewithPencil1.jpeg', alt: 'Precision micro components with pencil for scale' },
              { src: 'https://www.matrixplastic.com/images/sliders/JuvenileStaplercompositewithcartridgesandpushers.jpeg', alt: 'Juvenile stapler components and sub-assemblies' },
              { src: 'https://www.matrixplastic.com/images/SmartSlider/IMG_5591-Edit.jpg', alt: 'Precision injection molded plastic components' },
              { src: 'https://www.matrixplastic.com/images/SmartSlider/PagerMold.JPG', alt: 'Pager mold tooling detail' },
              { src: 'https://www.matrixplastic.com/images/HomepageTiles/BS1_8207-Matrix.jpg', alt: 'Matrix Plastic Products engineering and design' },
            ].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[80px] h-[56px] rounded-[6px] overflow-hidden border border-[#D0D9E8]/15 opacity-60 hover:opacity-100 transition-all duration-[200ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1200px] mx-auto px-[24px] py-[24px]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-[12px]">
          <p className="text-[#FFFFFF]/40 text-[13px] font-['Inter'] text-center sm:text-left">
            © {currentYear} Matrix Plastic Products. All rights reserved.
          </p>
          <div className="flex items-center gap-[20px]">
            <a
              href="#"
              className="text-[#FFFFFF]/40 text-[13px] font-['Inter'] hover:text-[#FFFFFF]/70 transition-all duration-[200ms] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A5FA8] rounded-[2px]"
            >
              Privacy Policy
            </a>
            <span className="text-[#FFFFFF]/20 text-[13px]">|</span>
            <a
              href="#"
              className="text-[#FFFFFF]/40 text-[13px] font-['Inter'] hover:text-[#FFFFFF]/70 transition-all duration-[200ms] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1A5FA8] rounded-[2px]"
            >
              Terms of Use
            </a>
            <span className="text-[#FFFFFF]/20 text-[13px]">|</span>
            <span className="text-[#FFFFFF]/30 text-[12px] font-['JetBrains_Mono']">ISO 9001 Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;