import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { TEXTS } from '../constants/texts';
// Placeholder for Header and Footer to make this component self-contained
const Header = () => <header className="bg-[#004A99] text-white p-4 text-center">Header Placeholder</header>;
const Footer = () => <footer className="bg-[#004A99] text-white p-4 text-center">Footer Placeholder</footer>;

// TEXTS constant (imported from texts.ts in a real app)


// A single function to replace the Lucide icons with inline SVGs
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    Calculator: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="14"/><line x1="12" x2="12" y1="14" y2="14"/><line x1="8" x2="8" y1="14" y2="14"/><line x1="16" x2="16" y1="10" y2="10"/><line x1="12" x2="12" y1="10" y2="10"/><line x1="8" x2="8" y1="10" y2="10"/></svg>
    ),
    FileText: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
    ),
    ShieldCheck: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    Lightbulb: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 6c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/><path d="M11 17v5"/><path d="M12 14v3"/></svg>
    ),
    Briefcase: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
    ),
    Home: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
    Percent: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
    ),
    Users: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
  };
  return icons[iconName] || null;
};


// تعريف حركات Framer Motion
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

export default function WithholdingTax() {
  return (
    <div className="rtl">
      {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/withholding-tax.webp)`,// Placeholder image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-[#004A99]/70" // Primary Blue with opacity
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
              {TEXTS.withholdingTax.hero.serviceLabel}
            </motion.div>
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight md:leading-[58px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {TEXTS.withholdingTax.hero.title}
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {TEXTS.withholdingTax.hero.description}
            </motion.p>
            <motion.button
              className="bg-[#EDC870] hover:bg-[#D4B564] text-[#004A99] px-6 md:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {TEXTS.withholdingTax.hero.button}
            </motion.button>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto py-12">
        {/* Services Section */}
        <AnimatedSection className="mb-16">
          <div className="text-center mb-12">
            <motion.h2 className="text-4xl font-bold text-[#1C1C1C] mb-4" {...fadeInUp}>
              {TEXTS.withholdingTax.servicesSection.title}
            </motion.h2>
            <motion.div
              className="max-w-[90%] mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-[#6B7280] font-bold">
                {TEXTS.withholdingTax.servicesSection.intro}
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {TEXTS.withholdingTax.servicesSection.cards.map((service, index) => (
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

        {/* Industries Section */}
        <AnimatedSection className="py-16 bg-[#004A99] border-b border-white mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                {TEXTS.withholdingTax.activitiesSection.title}
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {TEXTS.withholdingTax.activitiesSection.cards.map((industry, index) => (
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
                      <LucideIcon iconName={industry.icon} className="w-11 h-11 text-[#004A99]" />
                    </div>
                  </motion.div>
                  <motion.div
                    className="text-right"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                    <p className="text-white text-sm font-medium">{industry.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Process Section */}
        <section className="py-20 bg-[#F9FAFB]"> {/* Light gray background */}
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-[#1C1C1C] mb-6">
                  {TEXTS.withholdingTax.processSection.title}
                </h2>
                <p className="text-lg text-[#6B7280]">
                  {TEXTS.withholdingTax.processSection.intro}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {TEXTS.withholdingTax.processSection.steps.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-[#EDC870] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-[#004A99] font-bold text-lg">{item.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">{item.title}</h3>
                    <p className="text-[#6B7280]">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#004A99]"> {/* Primary Blue background */}
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  {TEXTS.withholdingTax.ctaSection.title}
                </h2>
                <p className="text-xl text-white/70 mb-8">
                  {TEXTS.withholdingTax.ctaSection.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact" // Assuming /contact is the path
                    className="bg-[#EDC870] hover:bg-[#D4B564] text-[#004A99] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    {TEXTS.withholdingTax.ctaSection.button1}
                  </a>
                  <a
                    href="tel:+966539628489"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#004A99] font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                  >
                    {TEXTS.withholdingTax.ctaSection.button2}
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
