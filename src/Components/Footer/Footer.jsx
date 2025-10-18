import React from "react";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import logo from '../../assets/Saas-logo.png';

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Updates", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Pricing", href: "#" },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Manifesto", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" },
    ],
    resources: [
      { name: "Examples", href: "#" },
      { name: "Community", href: "#" },
      { name: "Guides", href: "#" },
      { name: "Docs", href: "#" },
    ],
    legal: [
      { name: "Privacy", href: "#" },
      { name: "Terms", href: "#" },
      { name: "Security", href: "#" },
    ],
  };

  return (
   <footer className="w-full bg-black text-white py-[80px] md:py-[40px] sm:py-[40px] max-sm:py-[40px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start gap-[40px] md:gap-0">
          {/* Left Column - Logo and Description */}
          <div className="max-w-[280px] max-sm:max-w-[397px]">
            {/* Logo */}
            <div className="mb-[20px]">
              <img src={logo} className="w-10 h-10" alt="" />
            </div>

            {/* Description */}
            <p className="text-[14px] font-['Inter'] leading-[24px] text-[#BCBCBC] max-md:mb-[31px] mb-[111px]">
              Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.
            </p>

            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-[16px]">
              <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors duration-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
              <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="text-[#A3A3A3] hover:text-white transition-colors duration-200">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Columns - Links */}
          <div className="flex max-sm:flex-col max-sm:gap-[31px] max-sm:pt-[32px]  gap-[48px]">
            {/* Product Column */}
            <div>
              <h3 className="text-[14px] font-['Inter'] text-white mb-[20px]">Product</h3>
              <ul className="space-y-[12px]">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[14px] font-['Inter'] text-[#7B7B7B] hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-[14px] font-['Inter'] text-white mb-[20px]">Company</h3>
              <ul className="space-y-[12px]">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[14px] font-['Inter'] text-[#7B7B7B] hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h3 className="text-[14px] font-['Inter'] text-white mb-[20px]">Resources</h3>
              <ul className="space-y-[12px]">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[14px] font-['Inter'] text-[#7B7B7B] hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-[14px] font-['Inter'] text-white mb-[20px]">Legal</h3>
              <ul className="space-y-[12px]">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-[14px] font-['Inter'] text-[#7B7B7B] hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}