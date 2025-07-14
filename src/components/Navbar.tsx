
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'الرئيسية', path: '/' },
    { name: 'من نحن', path: '/about' },
    { name: 'الخدمات', path: '/services' },
    { name: 'المدونة', path: '/blog' },
    { name: 'اتصل بنا', path: '/contact' },
  ];
  
  return (
    <nav className="bg-gray-900 shadow-lg sticky top-0 z-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
  src={`${import.meta.env.BASE_URL}lovable-uploads/logo.png`} 
  alt="شركاء الدقة لخدمات الأعمال" 
  className="h-8 sm:h-10 w-auto"
/>

            </Link>
          </div>

          {/* Desktop Navigation */}
<div className="hidden md:flex items-center space-x-8 space-x-reverse">
  {navItems.map((item) => (
    <Link
      key={item.name}
      to={item.path}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        location.pathname === item.path
          ? 'text-gray-900 bg-gray-50'
          : 'text-white hover:text-gray-300 hover:bg-gray-800'
      }`}
    >
      {item.name}
    </Link>
  ))}
</div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 space-x-reverse text-sm text-white">
            <div className="flex items-center space-x-1 space-x-reverse">
              <Phone className="h-4 w-4" />
              <span>+966 53 962 8489</span>
            </div>
            <div className="flex items-center space-x-1 space-x-reverse">
              <Mail className="h-4 w-4" />
              <span>mazen1221cool@gmail.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
  <div className="md:hidden text-white">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
            location.pathname === item.path
              ? 'text-gray-900 bg-gray-50'
              : 'text-white hover:text-gray-300 hover:bg-gray-700'
          }`}
          onClick={() => setIsOpen(false)}
        >
          {item.name}
        </Link>
      ))}
    </div>
  </div>
)}
    </nav>
  );
};

export default Navbar;
