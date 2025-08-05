import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TEXTS } from '../constants/texts'; // Import TEXTS

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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    Clock: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    Send: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/></svg>
    ),
  };
  return icons[iconName] || null;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sliderImages = TEXTS.contactPage.hero.sliderImages;

  const rightVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Auto-change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setShowSuccessMessage(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB]" dir="rtl">
      {/* Hero Section with Slider */}
      <section
        className="relative bg-gradient-to-r from-[#004A99] to-[#003A7A] text-white py-16 select-none"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundImage: sliderImages[currentSlide], // Use url() for background-image
          transition: 'background-image 0.8s ease-in-out',
          minHeight: '400px',
        }}
      >

        <div className="absolute inset-0 bg-black/40 z-0"></div> {/* Overlay */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">{TEXTS.contactPage.hero.title}</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
            {TEXTS.contactPage.hero.subtitle}
          </p>

          {/* Slider dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 space-x-reverse">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full focus:outline-none transition-colors duration-300 shadow-sm ${
                  currentSlide === index ? 'bg-[#EDC870]' : 'bg-white bg-opacity-60 hover:bg-opacity-90'
                }`}
                aria-label={`انتقال إلى الشريحة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-[#F9FAFB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="text-right">
              <h2 className="text-3xl font-bold text-[#1C1C1C] mb-8">{TEXTS.contactPage.contactInfo.title}</h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-[#EDC870] p-3 rounded-lg shadow-md">
                    <LucideIcon iconName="Phone" className="h-6 w-6 text-[#004A99]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1C1C1C] mb-1">{TEXTS.contactPage.contactInfo.phone.label}</h3>
                    <p className="text-[#6B7280]" dir="ltr">
                      {TEXTS.contactPage.contactInfo.phone.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-[#EDC870] p-3 rounded-lg shadow-md">
                    <LucideIcon iconName="Mail" className="h-6 w-6 text-[#004A99]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1C1C1C] mb-1">{TEXTS.contactPage.contactInfo.email.label}</h3>
                    <p className="text-[#6B7280]">{TEXTS.contactPage.contactInfo.email.value}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-[#EDC870] p-3 rounded-lg shadow-md">
                    <LucideIcon iconName="MapPin" className="h-6 w-6 text-[#004A99]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1C1C1C] mb-1">{TEXTS.contactPage.contactInfo.address.label}</h3>
                    <p className="text-[#6B7280]">{TEXTS.contactPage.contactInfo.address.value}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 space-x-reverse">
                  <div className="bg-[#EDC870] p-3 rounded-lg shadow-md">
                    <LucideIcon iconName="Clock" className="h-6 w-6 text-[#004A99]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#1C1C1C] mb-1">{TEXTS.contactPage.contactInfo.workingHours.label}</h3>
                    <p className="text-[#6B7280]">
                      {TEXTS.contactPage.contactInfo.workingHours.value1}
                      <br />
                      {TEXTS.contactPage.contactInfo.workingHours.value2}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <motion.div variants={rightVariants} className="h-96 lg:h-full min-h-[400px]">
                  <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border border-[#E0E0E0]">
                    <iframe
                      src={TEXTS.contactPage.contactInfo.mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-xl border border-[#E0E0E0]">
              <h2 className="text-3xl font-bold text-[#1C1C1C] mb-8">{TEXTS.contactPage.contactForm.title}</h2>

              {showSuccessMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-md mb-4 text-sm"
                  role="alert"
                >
                  {TEXTS.contactPage.contactForm.successMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    {TEXTS.contactPage.contactForm.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#004A99] focus:border-[#004A99] bg-[#F9FAFB] text-[#1C1C1C] placeholder-[#6B7280]"
                    placeholder={TEXTS.contactPage.contactForm.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    {TEXTS.contactPage.contactForm.emailLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#004A99] focus:border-[#004A99] bg-[#F9FAFB] text-[#1C1C1C] placeholder-[#6B7280]"
                    placeholder={TEXTS.contactPage.contactForm.emailPlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    {TEXTS.contactPage.contactForm.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#004A99] focus:border-[#004A99] bg-[#F9FAFB] text-[#1C1C1C] placeholder-[#6B7280]"
                    placeholder={TEXTS.contactPage.contactForm.phonePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    {TEXTS.contactPage.contactForm.subjectLabel}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#004A99] focus:border-[#004A99] bg-[#F9FAFB] text-[#1C1C1C]"
                  >
                    <option value="">{TEXTS.contactPage.contactForm.subjectPlaceholder}</option>
                    {Object.entries(TEXTS.contactPage.contactForm.subjects).map(([key, value]) => (
                      <option key={key} value={key}>{value}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                    {TEXTS.contactPage.contactForm.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E0E0E0] rounded-lg focus:ring-2 focus:ring-[#004A99] focus:border-[#004A99] bg-[#F9FAFB] text-[#1C1C1C] placeholder-[#6B7280]"
                    placeholder={TEXTS.contactPage.contactForm.messagePlaceholder}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#004A99] hover:bg-[#003A7A] text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 space-x-reverse shadow-md"
                >
                  <LucideIcon iconName="Send" className="h-5 w-5" />
                  <span>{TEXTS.contactPage.contactForm.submitButton}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
