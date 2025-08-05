import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { TEXTS } from '../constants/texts'; // Assuming texts.ts is in ../constants/

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const partnerVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-[#F9FAFB]" dir="rtl"> {/* Added dir="rtl" */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Title Section */}
          <motion.div
            variants={titleVariants}
            className="lg:col-span-4 text-center lg:text-right"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">
              {TEXTS.partnersSection.title}
            </h2>
            <p className="text-[#6B7280] text-lg">
              {TEXTS.partnersSection.description}
            </p>
          </motion.div>

          {/* Partners Grid */}
          <motion.div
            variants={containerVariants}
            className="lg:col-span-8"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {TEXTS.partnersSection.partners.map((partner, index) => (
                <motion.a
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={partnerVariants}
                  whileHover="hover"
                  className="group bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center h-full min-h-[120px] border border-[#E0E0E0] hover:border-[#004A99]" // Applied palette colors for border
                >
                  <div className="relative w-full h-12 sm:h-16">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      loading="lazy"
                      className="w-full h-full object-contain object-center filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <span className="sr-only">{partner.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
