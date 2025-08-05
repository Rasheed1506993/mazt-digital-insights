import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { TEXTS } from '../constants/texts'; // Assuming texts.ts is in ../constants/

// A single function to replace the Lucide icons with inline SVGs
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    Users: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    Award: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.11"/></svg>
    ),
    Laptop: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.94 1.45H3.66a1 1 0 0 1-.94-1.45L4 16"/></svg>
    ),
    UserCheck: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
    ),
  };
  return icons[iconName] || null;
};


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const featureVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-12 md:py-20 bg-[#F9FAFB]" dir="rtl"> {/* Added dir="rtl" */}
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Title */}
          <motion.div variants={titleVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] max-w-4xl mx-auto"> {/* Changed font-semibold to font-bold */}
              {TEXTS.featuresSection.title}
            </h2>
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEXTS.featuresSection.features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                  boxShadow: "0 10px 20px rgba(0,0,0,0.08)", // Added subtle shadow on hover
                }}
                className="text-center p-6 group bg-white rounded-lg shadow-md border border-[#E0E0E0] transform transition-all duration-300" // Added background, rounded corners, shadow, border
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-[#EDC870] rounded-full flex items-center justify-center shadow-sm" // Added background, rounded-full, flex properties, shadow
                >
                  <LucideIcon iconName={feature.icon} className="w-9 h-9 text-[#004A99]" /> {/* Applied palette colors */}
                </motion.div>

                <h3 className="text-lg font-bold text-[#1C1C1C] mb-3">{feature.title}</h3> {/* Changed font-semibold to font-bold */}

                <p className="text-[#6B7280] text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
