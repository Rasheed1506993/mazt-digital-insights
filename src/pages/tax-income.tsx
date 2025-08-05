import type React from "react"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TEXTS } from '../constants/texts';
// TEXTS constant (imported from texts.ts in a real app)


// A single function to replace the Lucide icons with inline SVGs
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    FilePlus: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
    ),
    FileText: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
    ),
    Lightbulb: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 6c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/><path d="M11 17v5"/><path d="M12 14v3"/></svg>
    ),
    CheckCircle: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
    Calculator: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="14"/><line x1="12" x2="12" y1="14" y2="14"/><line x1="8" x2="8" y1="14" y2="14"/><line x1="16" x2="16" y1="10" y2="10"/><line x1="12" x2="12" y1="10" y2="10"/><line x1="8" x2="8" y1="10" y2="10"/></svg>
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

export default function TaxIncomePage() {
  return (
    <div className="rtl">
      {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('/images/tax-income.webp')`, // Placeholder image
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
              className="text-sm mb-2" // Removed bg-black/40 from here as it's redundant with the main overlay
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {TEXTS.taxIncome.hero.serviceLabel}
            </motion.div>
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight md:leading-[58px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {TEXTS.taxIncome.hero.title}
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {TEXTS.taxIncome.hero.description}
            </motion.p>
            <motion.button
              className="bg-[#EDC870] hover:bg-[#D4B564] text-[#004A99] px-6 md:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {TEXTS.taxIncome.hero.button}
            </motion.button>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto py-12">
        {/* Services Section */}
        <AnimatedSection className="mb-16">
          <div className="text-center mb-12">
            <motion.h2 className="text-4xl font-bold text-[#1C1C1C] mb-4" {...fadeInUp}>
              {TEXTS.taxIncome.servicesSection.title}
            </motion.h2>
            <motion.div
              className="max-w-[90%] mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h5 className="text-lg text-[#6B7280] font-bold">
                {TEXTS.taxIncome.servicesSection.intro}
              </h5>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {TEXTS.taxIncome.servicesSection.cards1.map((service, index) => (
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
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {TEXTS.taxIncome.servicesSection.cards2.map((service, index) => (
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

        {/* Tax Status Section */}
        <AnimatedSection className="py-12 md:py-16 bg-[#004A99] mb-12 md:mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                {TEXTS.taxIncome.taxStatusSection.title}
              </h3>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="bg-transparent border border-white p-4 md:p-6 rounded-lg text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="mb-4" variants={iconVariants}>
                  <div className="bg-[#EDC870] p-3 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto flex items-center justify-center">
                    <LucideIcon iconName="Calculator" className="w-6 h-6 md:w-8 md:h-8 text-[#004A99]" />
                  </div>
                </motion.div>
                <motion.h4
                  className="text-lg md:text-xl font-semibold text-white mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {TEXTS.taxIncome.taxStatusSection.exemptIncome.title}
                </motion.h4>
                <motion.div
                  className="text-white space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {TEXTS.taxIncome.taxStatusSection.exemptIncome.items.map((item, index) => (
                    <p key={index} className="font-medium text-sm md:text-base">{item}</p>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="bg-transparent border border-white p-4 md:p-6 rounded-lg text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="mb-4" variants={iconVariants}>
                  <div className="bg-[#EDC870] p-3 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto flex items-center justify-center">
                    <LucideIcon iconName="Calculator" className="w-6 h-6 md:w-8 md:h-8 text-[#004A99]" />
                  </div>
                </motion.div>
                <motion.h4
                  className="text-lg md:text-xl font-semibold text-white mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {TEXTS.taxIncome.taxStatusSection.taxableIncome.title}
                </motion.h4>
                <motion.div
                  className="text-white space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {TEXTS.taxIncome.taxStatusSection.taxableIncome.items.map((item, index) => (
                    <p key={index} className="font-medium text-sm md:text-base">{item}</p>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}
