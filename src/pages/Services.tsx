import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TEXTS } from '../constants/texts'; // Assuming texts.ts is in ../constants/

// A single function to replace the Lucide icons with inline SVGs
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    FileText: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
    ),
    Calculator: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="14"/><line x1="12" x2="12" y1="14" y2="14"/><line x1="8" x2="8" y1="14" y2="14"/><line x1="16" x2="16" y1="10" y2="10"/><line x1="12" x2="12" y1="10" y2="10"/><line x1="8" x2="8" y1="10" y2="10"/></svg>
    ),
    Percent: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
    ),
    BookOpen: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    ),
    TrendingUp: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
    ),
    BarChart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
    ),
    Scale: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/></svg>
    ),
    Wallet: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3"/><path d="M10 12H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-3"/></svg>
    ),
  };
  return icons[iconName] || null;
};


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const flipVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-[#F9FAFB]" dir="rtl">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-end"
        style={{
          backgroundImage: `url(${import.meta.env.BASE_URL}images/services.jpeg)`, // Placeholder image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[#004A99]/70"></div> {/* Primary Blue with increased transparency */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl mr-auto lg:mr-16">
            <motion.div
              className="bg-[#004A99]/40 p-6 sm:p-8 lg:p-12 rounded-lg backdrop-blur-sm shadow-xl" // Added shadow
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {TEXTS.services.hero.title}
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {TEXTS.services.hero.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#EDC870] hover:bg-[#D4B564] text-[#004A99] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base shadow-md"
                >
                  {TEXTS.services.hero.button}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid Section */}
      <section
        className="py-12 sm:py-16 md:py-20 relative bg-[#F9FAFB]" // Light background color
        style={{
          backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/map.png')", // Placeholder image
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {TEXTS.services.servicesGrid.map((service, index) => (
              <motion.div
                key={service.id}
                variants={flipVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-[#E0E0E0]" // Added border
                style={{ minHeight: "280px" }}
              >
                <Link to={service.href} className="block h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-[#EDC870] rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#D4B564] transition-colors duration-300 shadow-md" // Added shadow
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <LucideIcon iconName={service.icon} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain text-[#004A99]" />
                    </motion.div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#1C1C1C] mb-3 sm:mb-4 group-hover:text-[#004A99] transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-[#6B7280] text-xs sm:text-sm leading-relaxed flex-1">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {TEXTS.services.workSteps.map((step, index) => (
              <motion.div key={step.number} variants={itemVariants} className="relative" whileHover={{ scale: 1.02 }}>
                <div
                  className="p-4 sm:p-6 md:p-8 rounded-lg text-white min-h-[280px] sm:min-h-[300px] flex flex-col shadow-lg" // Added shadow
                  style={{ backgroundColor: step.bgColor }}
                >
                  <motion.div
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 opacity-20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {step.number}.
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{step.title}</h3>

                  <ul className="space-y-2 sm:space-y-3 flex-1">
                    {step.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="text-xs sm:text-sm leading-relaxed flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + itemIndex * 0.05 }} // Adjusted delay for smoother staggered effect
                      >
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
