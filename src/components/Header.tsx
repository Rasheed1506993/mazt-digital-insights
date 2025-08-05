import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { TEXTS } from '../constants/texts'; 
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: TEXTS.header.nav.home, path: '/' },
    { name: TEXTS.header.nav.about, path: '/about' },
    { name: TEXTS.header.nav.services, path: '/services' },
    { name: TEXTS.header.nav.blog, path: '/blog' },
    { name: TEXTS.header.nav.contact, path: '/contact' },
  ];

  // إغلاق القائمة المتنقلة عند تغيير المسار
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleNavigate = (path) => {
    navigate(path);
    // setIsOpen(false); // ليس مطلوب هنا بسبب useEffect، لكن يمكنك إبقاؤه إذا أردت
  };

  return (
    <nav className="bg-[#004A99] shadow-lg sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo مع الاسم بالعربية والإنجليزية */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link to="/" onClick={() => handleNavigate('/')} className="flex items-center space-x-4 space-x-reverse">
              <img
                src={`${import.meta.env.BASE_URL}lovable-uploads/khlogo.png`}
                alt={TEXTS.footer.companyName}
                className="h-16 w-auto rounded-full shadow-md"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-white text-xl md:text-1xl select-none" style={{ lineHeight: 1 }}>
                  {TEXTS.footer.companyName}
                </span>
                <span className="text-[#EDC870] font-semibold text-sm md:text-1xl select-none" style={{ lineHeight: 1, marginTop: '4px' }}>
                  {TEXTS.footer.companyName_en}
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigate(item.path)}
                className={`px-4 py-2 rounded-md text-base font-medium transition-all duration-300 ease-in-out ${
                  location.pathname === item.path
                    ? 'text-[#004A99] bg-[#EDC870] shadow-md'
                    : 'text-white hover:text-[#EDC870] hover:bg-[#003A7A]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Contact Info - Hidden on mobile/tablet */}
          <div className="hidden xl:flex items-center space-x-6 space-x-reverse text-sm text-white">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Phone className="h-4 w-4 text-[#EDC870]" />
              <span>{TEXTS.footer.phone}</span>
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <Mail className="h-4 w-4 text-[#EDC870]" />
              <span>{TEXTS.footer.email}</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#EDC870] focus:outline-none p-2 rounded-md transition-colors duration-300"
              aria-label={TEXTS.header.menuLabel}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#003A7A] border-t border-[#004A99]">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigate(item.path)}
                  className={`block w-full text-left px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                    location.pathname === item.path
                      ? 'text-[#004A99] bg-[#EDC870]'
                      : 'text-white hover:text-[#EDC870] hover:bg-[#002B5F]'
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Contact info in mobile menu */}
              <div className="pt-4 pb-2 border-t border-[#004A99] mt-4">
                <div className="px-3 py-2 text-white text-sm">
                  <div className="flex items-center space-x-2 space-x-reverse mb-2">
                    <Phone className="h-5 w-5 text-[#EDC870]" />
                    <span>{TEXTS.footer.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Mail className="h-5 w-5 text-[#EDC870]" />
                    <span className="text-sm">{TEXTS.footer.email}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
