import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { TEXTS } from '../constants/texts'; // Assuming texts.ts is in ../constants/

// A single function to replace the Lucide icons with inline SVGs
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    Phone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.1-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-1.18 2.19l-.7.35a16 16 0 0 0 6.06 6.06l.35-.7a2 2 0 0 1 2.19-1.18 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
    Mail: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.93 1.93 0 0 1-2.06 0L2 7"/></svg>
    ),
    MapPin: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 18.7c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/><path d="M12 2a8 8 0 0 0-8 8c0 7.5 8 14 8 14s8-6.5 8-14a8 8 0 0 0-8-8z"/></svg>
    ),
  };
  return icons[iconName] || null;
};

const Footer = () => {
  return (
    <footer className="bg-[#004A99] text-white py-8 sm:py-12" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="text-center md:text-right">
            <div className="mb-4 flex flex-col items-center md:items-start"> {/* Adjusted for better alignment */}
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/khlogo.png`} // Ensure this path is correct
                alt={TEXTS.footer.companyName}
                className="h-20 w-auto mb-2 rounded-full shadow-md" // Added rounded-full and shadow
              />
              <div className="flex flex-col leading-none text-center md:text-right"> {/* Adjusted text alignment */}
                <span className="font-extrabold text-white text-xl md:text-2xl select-none" style={{ lineHeight: 1 }}>
                  {TEXTS.footer.companyName}
                </span>
                <span className="text-[#EDC870] font-semibold text-sm md:text-base select-none" style={{ lineHeight: 1, marginTop: '4px' }}>
                  {TEXTS.footer.companyName_en}
                </span>
              </div>
            </div>

            <p className="text-[#F9FAFB]/80 mb-4 text-sm sm:text-base leading-relaxed">
              {TEXTS.footer.description}
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">{TEXTS.footer.contactInfo}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                <LucideIcon iconName="Phone" className="h-5 w-5 text-[#EDC870]" />
                <span className="text-sm sm:text-base text-[#F9FAFB]">{TEXTS.footer.phone}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                <LucideIcon iconName="Mail" className="h-5 w-5 text-[#EDC870]" />
                <span className="text-sm sm:text-base break-all text-[#F9FAFB]">{TEXTS.footer.email}</span>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-3 space-x-reverse">
                <LucideIcon iconName="MapPin" className="h-5 w-5 text-[#EDC870] mt-1" />
                <span className="text-sm sm:text-base text-[#F9FAFB]">{TEXTS.footer.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-bold mb-4">{TEXTS.footer.quickLinks}</h3>
            <div className="space-y-2">
              <a
                href="#"
                className="block text-[#F9FAFB]/80 hover:text-[#EDC870] transition-colors text-sm sm:text-base"
              >
                {TEXTS.header.nav.services}
              </a>
              <a
                href="#"
                className="block text-[#F9FAFB]/80 hover:text-[#EDC870] transition-colors text-sm sm:text-base"
              >
                {TEXTS.header.nav.about}
              </a>
              <a
                href="#"
                className="block text-[#F9FAFB]/80 hover:text-[#EDC870] transition-colors text-sm sm:text-base"
              >
                {TEXTS.header.nav.blog}
              </a>
              <a
                href="#"
                className="block text-[#F9FAFB]/80 hover:text-[#EDC870] transition-colors text-sm sm:text-base"
              >
                {TEXTS.header.nav.contact}
              </a>
            </div>
          </div>
        </div>

<div className="border-t border-[#003A7A] mt-8 sm:mt-12 pt-6 sm:pt-8 text-center space-y-1">
  <p className="text-[#F9FAFB]/60 text-xs sm:text-sm">{TEXTS.footer.copyright}</p>
  <p className="text-[#EDC870] text-xs sm:text-sm font-light">
    Designed &amp; developed by Mazen Sharaf Al-deen
  </p>
</div>

    
      </div>
    </footer>
  );
};

export default Footer;
