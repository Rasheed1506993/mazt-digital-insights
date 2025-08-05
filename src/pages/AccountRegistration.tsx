import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TEXTS } from '../constants/texts';

// A single function to replace the Lucide icons with inline SVGs
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    CalendarCheck: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/><path d="m9 16 2 2 4-4"/></svg>
    ),
    BookOpen: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
    ClipboardEdit: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 20h.01"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="M12 10l-2 2 4 4 2-2 2-2-4-4z"/></svg>
    ),
    ClipboardX: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="m10 10 4 4"/><path d="m14 10-4 4"/></svg>
    ),
    FileText: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
    ),
    Lightbulb: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 6c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/><path d="M11 17v5"/><path d="M12 14v3"/></svg>
    ),
    LineChart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 3v18h18"/><path d="m18 6-7 7-5-5-4 4"/></svg>
    ),
    FilePieChart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M10.5 17.5 14 14l-3.5-3.5c2.2-.2 4.1 1.7 3.9 3.9-.2 2.2-2.1 4.1-4.3 3.9"/><path d="M14 14l-3.5 3.5c-2.2.2-4.1-1.7-3.9-3.9.2-2.2 2.1-4.1 4.3-3.9"/></svg>
    ),
  };
  return icons[iconName] || null;
};

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -10,
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
}

const iconVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
}

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function AccountRegistration() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]" dir="rtl">
      {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/AccountRegistration.webp')`, // Placeholder image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-[#004A99]/70"></div> {/* Primary Blue with increased transparency */}
        <div className="container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="relative z-10 text-white max-w-2xl mr-auto py-12 md:py-24 px-4 md:px-[15%]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="text-sm mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {TEXTS.accountRegistration.hero.serviceLabel}
            </motion.div>
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight md:leading-[58px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {TEXTS.accountRegistration.hero.title}
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {TEXTS.accountRegistration.hero.description}
            </motion.p>
            <motion.button
              className="bg-[#EDC870] hover:bg-[#D4B564] text-[#004A99] px-6 md:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {TEXTS.accountRegistration.hero.button}
            </motion.button>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto py-12">
        {/* Services Section */}
        <AnimatedSection className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">{TEXTS.accountRegistration.servicesSection.title}</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-[#6B7280] mb-4">
                <strong>{TEXTS.accountRegistration.servicesSection.introStrong1}</strong>
              </p>
              <p className="text-lg text-[#6B7280]">
                <strong>
                  {TEXTS.accountRegistration.servicesSection.introStrong2}
                </strong>
              </p>
            </div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {TEXTS.accountRegistration.servicesSection.cards1.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#EDC870] p-4 md:p-6 rounded-lg text-center h-auto min-h-[200px] md:h-60 flex flex-col justify-center cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="mb-4" variants={iconVariants}>
                  <LucideIcon iconName={service.icon} className="w-12 h-12 mx-auto text-[#004A99]" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#004A99] mb-3">{service.title}</h3>
                <p className="text-[#004A99] text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {TEXTS.accountRegistration.servicesSection.cards2.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#EDC870] p-6 rounded-lg text-center h-60 flex flex-col justify-center cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="mb-4" variants={iconVariants}>
                  <LucideIcon iconName={service.icon} className="w-12 h-12 mx-auto text-[#004A99]" />
                </motion.div>
                <h3 className="text-lg font-semibold text-[#004A99] mb-3">{service.title}</h3>
                <p className="text-[#004A99] text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Bookkeeping Section */}
        <AnimatedSection
          className="py-12 md:py-16 bg-[#F9FAFB] bg-cover bg-center bg-no-repeat mb-12 md:mb-16"
          style={{
            backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/h2_about_shape03.png')", // Placeholder image
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div
                className="order-2 lg:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/1-3.webp" // Placeholder image
                  alt="Bookkeeping"
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                className="text-right order-1 lg:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-2xl md:text-4xl font-bold text-[#1C1C1C] mb-4 md:mb-6">{TEXTS.accountRegistration.bookkeepingSection.title}</h2>
                <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
                  {TEXTS.accountRegistration.bookkeepingSection.description}
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Importance Section */}
        <AnimatedSection
          className="py-16 bg-[#004A99] bg-cover bg-center bg-no-repeat mb-16"
          style={{
            backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/222.png')", // Placeholder image
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="text-right"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  {TEXTS.accountRegistration.importanceSection.title}
                </h2>
                <div className="text-lg text-white/90 space-y-4">
                  <p>{TEXTS.accountRegistration.importanceSection.intro}</p>

                  {TEXTS.accountRegistration.importanceSection.items.map((item, index) => (
                    <div key={index}>
                      <h4 className="font-semibold">• {item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/2-3-scaled.webp" // Placeholder image
                  alt="Financial Analysis"
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tax Study Section */}
        <AnimatedSection
          className="py-16 bg-[#F9FAFB] bg-cover bg-center bg-no-repeat mb-16"
          style={{
            backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/h2_about_shape03.png')", // Placeholder image
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/3-2-scaled.webp" // Placeholder image
                  alt="Tax Study"
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                className="text-right"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-[#1C1C1C] mb-6">{TEXTS.accountRegistration.taxStudySection.title}</h2>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  {TEXTS.accountRegistration.taxStudySection.description}
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Objections Section */}
        <AnimatedSection
          className="py-16 bg-[#004A99] bg-cover bg-center bg-no-repeat mb-16"
          style={{
            backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/222.png')", // Placeholder image
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="text-right"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  {TEXTS.accountRegistration.objectionsSection.title}
                </h2>
                <p className="text-lg text-white/90 leading-relaxed">
                  {TEXTS.accountRegistration.objectionsSection.description}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/4-2-scaled.webp" // Placeholder image
                  alt="Objections"
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Advanced Systems Section */}
        <AnimatedSection className="py-16 bg-[#F9FAFB]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="text-right"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-[#1C1C1C] mb-6">{TEXTS.accountRegistration.advancedSystemsSection.title}</h2>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  {TEXTS.accountRegistration.advancedSystemsSection.description}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/1-3.webp" // Placeholder image
                  alt="Advanced Systems"
                  className="w-full rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
};
