import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';
import { TEXTS } from '../constants/texts';

const Footer = () => {
  return (
    <footer className="bg-[#004A99] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="text-center md:text-right">
            <div className="mb-4 flex justify-center md:justify-start">
              <img
  src={'/lovable-uploads/hlogo.png'}
  alt="شركاء الدقة لخدمات الأعمال"
  className="h-14 sm:h-16 w-auto"
/>

            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              {TEXTS.footer.description}
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">{TEXTS.footer.contactInfo}</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-[#EDC870]" />
                <span className="text-sm sm:text-base">{TEXTS.footer.phone}</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-[#EDC870]" />
                <span className="text-xs sm:text-sm break-all">{TEXTS.footer.email}</span>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-3 space-x-reverse">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#EDC870] mt-1" />
                <span className="text-sm sm:text-base">{TEXTS.footer.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">{TEXTS.footer.quickLinks}</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-[#EDC870] transition-colors text-sm sm:text-base">
                {TEXTS.header.nav.services}
              </a>
              <a href="#" className="block text-gray-300 hover:text-[#EDC870] transition-colors text-sm sm:text-base">
                {TEXTS.header.nav.about}
              </a>
              <a href="#" className="block text-gray-300 hover:text-[#EDC870] transition-colors text-sm sm:text-base">
                {TEXTS.header.nav.blog}
              </a>
              <a href="#" className="block text-gray-300 hover:text-[#EDC870] transition-colors text-sm sm:text-base">
                {TEXTS.header.nav.contact}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#003A7A] mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            {TEXTS.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
