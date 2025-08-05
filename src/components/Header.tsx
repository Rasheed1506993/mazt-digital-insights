import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { TEXTS } from '../constants/texts';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
// Placeholder components to simulate routing without react-router-dom
const useLocation = (path) => ({
  pathname: path,
});


const Header = ({ onNavigate, currentPath }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(currentPath);

  const navItems = [
    { name: TEXTS.header.nav.home, path: '/' },
    { name: TEXTS.header.nav.about, path: '/about' },
    { name: TEXTS.header.nav.services, path: '/services' },
    { name: TEXTS.header.nav.blog, path: '/blog' },
    { name: TEXTS.header.nav.contact, path: '/contact' },
  ];
  
  return (
    <nav className="bg-[#004A99] shadow-lg sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" onClick={() => onNavigate('/')} className="flex items-center">
              <img
  src={'/lovable-uploads/khlogo.png'}
  alt="شركاء الدقة لخدمات الأعمال"
  style={{ height: '60px', width: 'auto' }}
/>


            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => onNavigate(item.path)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-[#004A99] bg-[#EDC870]'
                    : 'text-white hover:text-gray-300 hover:bg-[#003A7A]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info - Hidden on mobile and tablet */}
          <div className="hidden xl:flex items-center space-x-4 space-x-reverse text-xs text-white">
            <div className="flex items-center space-x-1 space-x-reverse">
              <Phone className="h-3 w-3 text-[#EDC870]" />
              <span className="hidden 2xl:inline">{TEXTS.footer.phone}</span>
            </div>
            <div className="flex items-center space-x-1 space-x-reverse">
              <Mail className="h-3 w-3 text-[#EDC870]" />
              <span className="hidden 2xl:inline">{TEXTS.footer.email}</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none p-2"
              aria-label={TEXTS.header.menuLabel}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setIsOpen(false);
                  }}
                  className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-[#004A99] bg-[#EDC870]'
                      : 'text-white hover:text-gray-300 hover:bg-[#002B5F]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
                
              {/* Contact info in mobile menu */}
              <div className="pt-4 pb-2 border-t border-[#004A99] mt-4">
                <div className="px-3 py-2 text-white text-sm">
                  <div className="flex items-center space-x-2 space-x-reverse mb-2">
                    <Phone className="h-4 w-4 text-[#EDC870]" />
                    <span>{TEXTS.footer.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Mail className="h-4 w-4 text-[#EDC870]" />
                    <span className="text-xs">{TEXTS.footer.email}</span>
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
