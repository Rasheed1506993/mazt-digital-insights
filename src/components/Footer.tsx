
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="text-center md:text-right">
            <div className="mb-4 flex justify-center md:justify-start">
              <img 
                src="/lovable-uploads/logo.png" 
                alt="مكتب المازن - MAZT" 
                className="h-12 sm:h-16 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
              مكتب المازن لاستشارات الزكاة والضريبة - شريكك الموثوق في الحلول المحاسبية والضريبية
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">معلومات التواصل</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <span className="text-sm sm:text-base">+966 53 962 8489</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 space-x-reverse">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <span className="text-xs sm:text-sm break-all">mazen1221cool@gmail.com</span>
              </div>
              <div className="flex items-start justify-center md:justify-start space-x-3 space-x-reverse">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 mt-1" />
                <span className="text-sm sm:text-base">جدة - حي الشرقية</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
            <div className="space-y-2">
              <a href="/services" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                خدماتنا
              </a>
              <a href="/about" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                من نحن
              </a>
              <a href="/blog" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                المدونة
              </a>
              <a href="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm sm:text-base">
                اتصل بنا
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © 2024 مكتب المازن لاستشارات الزكاة والضريبة. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
