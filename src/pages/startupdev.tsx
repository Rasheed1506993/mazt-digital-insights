import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { TEXTS } from '../constants/texts';


// A single function to replace the Lucide icons with inline SVGs
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    ClipboardCheck: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z"/><path d="M9 7l2 2 4-4"/></svg>
    ),
    LayoutDashboard: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
    ),
    LineChart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 3v18h18"/><path d="m18 6-7 7-5-5-4 4"/></svg>
    ),
    FilePieChart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M10.5 17.5 14 14l-3.5-3.5c2.2-.2 4.1 1.7 3.9 3.9-.2 2.2-2.1 4.1-4.3 3.9"/><path d="M14 14l-3.5 3.5c-2.2.2-4.1-1.7-3.9-3.9.2-2.2 2.1-4.1 4.3-3.9"/></svg>
    ),
    ClipboardList: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 2v4"/><path d="M8 4h8"/><path d="M8 10h8"/><path d="M8 14h8"/><path d="M8 18h8"/></svg>
    ),
    SearchCheck: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m8 11 2 2 4-4"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    ),
    BarChart3: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
    ),
    TrendingUp: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
    ),
    BookText: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/><path d="M8 7h6"/><path d="M8 11h8"/></svg>
    ),
    Receipt: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2H4z"/><path d="M12 10h.01"/><path d="M17 10h.01"/><path d="M7 10h.01"/><path d="M12 14h.01"/><path d="M17 14h.01"/><path d="M7 14h.01"/></svg>
    ),
    Building: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M12 18h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/><path d="M8 18h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M16 18h.01"/></svg>
    ),
    BarChart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
    ),
    PenTool: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l7.5 1.5L18 13z"/><path d="M2 2l7.5 7.5"/><path d="M13 18l-1.5-7.5"/></svg>
    ),
    Globe: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20A14.5 14.5 0 0 0 12 2"/><path d="M2 12h20"/></svg>
    ),
    Wallet: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3"/><path d="M10 12H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-3"/></svg>
    ),
    Gauge: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 14 4-4"/><path d="M3.34 19.06a8.5 8.5 0 0 1 14.32 1.4L21 17"/><path d="M21 7L17.66 4.94A8.5 8.5 0 0 0 3.34 5.94"/><path d="M12 2v20"/></svg>
    ),
    Target: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    ),
    Tag: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12.5 6.4L18.7 12.6a2.41 2.41 0 0 1 0 3.4L13.4 21.3a2.41 2.41 0 0 1-3.4 0L3.7 15.9a2.41 2.41 0 0 1 0-3.4L9.9 6.4a2.41 2.41 0 0 1 3.4 0z"/><circle cx="9" cy="9" r="2"/></svg>
    ),
    Factory: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V8H2v12z"/><path d="M19 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"/><path d="M12 22v-8"/><path d="M8 22v-4"/><path d="M16 22v-4"/></svg>
    ),
    HeartPulse: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.2 12.8H2"/><path d="M22 12.8h-1.2"/><path d="M12 2.8V2"/><path d="M12 22v-1.2"/></svg>
    ),
    ShoppingCart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
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
      staggerChildren: 0.1,
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

export default function StarTupdev() {
  return (
    <div className="min-h-screen bg-[#F9FAFB]" dir="rtl">
      {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('/images/StarTupdev.webp')`, // Placeholder image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-[#004A99]/70" // Primary Blue with increased transparency
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
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
              {TEXTS.starTupdev.hero.serviceLabel}
            </motion.div>
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight md:leading-[58px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {TEXTS.starTupdev.hero.title}
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {TEXTS.starTupdev.hero.description}
            </motion.p>
            <motion.button
              className="bg-[#EDC870] hover:bg-[#D4B564] text-[#004A99] px-6 md:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {TEXTS.starTupdev.hero.button}
            </motion.button>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto py-12">
        {/* Services Section */}
        <AnimatedSection className="mb-16">
          <div className="text-center mb-12">
            <motion.h2 className="text-4xl font-bold text-[#1C1C1C] mb-4" {...fadeInUp}>
              {TEXTS.starTupdev.servicesSection.title}
            </motion.h2>
            <motion.div
              className="max-w-[90%] mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-[#6B7280] font-bold">
                {TEXTS.starTupdev.servicesSection.intro}
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8"
            initial="initial"
            animate="animate"
          >
            {TEXTS.starTupdev.servicesSection.cards1.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#EDC870] p-4 md:p-6 rounded-lg text-center h-auto min-h-[200px] md:h-[235px] flex flex-col justify-center cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="mb-4" variants={iconVariants}>
                  <LucideIcon iconName={service.icon} className="w-12 h-12 mx-auto text-[#004A99]" />
                </motion.div>
                <motion.h3
                  className="text-lg font-semibold text-[#004A99] mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-[#004A99] text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="initial"
            animate="animate"
          >
            {TEXTS.starTupdev.servicesSection.cards2.map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#EDC870] p-6 rounded-lg text-center h-[235px] flex flex-col justify-center cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="mb-4" variants={iconVariants}>
                  <LucideIcon iconName={service.icon} className="w-12 h-12 mx-auto text-[#004A99]" />
                </motion.div>
                <motion.h3
                  className="text-lg font-semibold text-[#004A99] mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-[#004A99] text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Experience Section */}
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
                <h2 className="text-2xl md:text-4xl font-bold text-[#1C1C1C] mb-4 md:mb-6">
                  {TEXTS.starTupdev.experienceSection.title}
                </h2>
                <p className="text-base md:text-lg text-[#6B7280] leading-relaxed">
                  {TEXTS.starTupdev.experienceSection.description}
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Comprehensive Services Section */}
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
                  {TEXTS.starTupdev.comprehensiveServicesSection.title}
                </h2>
                <div className="text-lg text-white/90 space-y-4">
                  <p>{TEXTS.starTupdev.comprehensiveServicesSection.description}</p>
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

        {/* Continuous Success Section */}
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
                <h2 className="text-4xl font-bold text-[#1C1C1C] mb-6">
                  {TEXTS.starTupdev.continuousSuccessSection.title}
                </h2>
                <p className="text-lg text-[#6B7280] leading-relaxed">
                  {TEXTS.starTupdev.continuousSuccessSection.description}
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  );
};
