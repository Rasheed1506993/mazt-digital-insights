import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TEXTS } from '../constants/texts';


// A single function to replace the Lucide icons with inline SVGs
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    FilePlus: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
    ),
    CheckCircle: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
    PlaySquare: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 8 6 4-6 4Z"/></svg>
    ),
    TrendingUp: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
    ),
    BarChart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>
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
    Briefcase: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
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

const industryCardVariants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    x: 10,
    transition: { duration: 0.3, ease: "easeInOut" },
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

export default function BudgeTs() {
  return (
    <div className="rtl">
      {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url('/images/budgets.webp')`, // Placeholder image
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
              {TEXTS.budgets.hero.serviceLabel}
            </motion.div>
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight md:leading-[58px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {TEXTS.budgets.hero.title}
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {TEXTS.budgets.hero.description}
            </motion.p>
            <motion.button
              className="bg-[#EDC870] hover:bg-[#D4B564] text-[#004A99] px-6 md:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {TEXTS.budgets.hero.button}
            </motion.button>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto py-12">
        {/* Services Section */}
        <AnimatedSection className="mb-16">
          <div className="text-center mb-12">
            <motion.h2 className="text-4xl font-bold text-[#1C1C1C] mb-4" {...fadeInUp}>
              {TEXTS.budgets.servicesSection.title}
            </motion.h2>
            <motion.div
              className="max-w-[90%] mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-[#6B7280] font-bold">
                {TEXTS.budgets.servicesSection.intro}
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {TEXTS.budgets.servicesSection.cards.map((service, index) => (
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
        </AnimatedSection>

        {/* Process Section */}
        <AnimatedSection className="py-16 bg-[#004A99] border-b border-white mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                {TEXTS.budgets.processSection.title}
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {TEXTS.budgets.processSection.cards.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 space-x-reverse cursor-pointer"
                  variants={industryCardVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="bg-[#EDC870] p-3 rounded-full"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-11 h-11 flex items-center justify-center">
                      <LucideIcon iconName={item.icon} className="w-11 h-11 text-[#004A99]" />
                    </div>
                  </motion.div>
                  <motion.div
                    className="text-right"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-white text-sm font-medium">{item.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}
