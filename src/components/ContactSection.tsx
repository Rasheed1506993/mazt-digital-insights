import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { TEXTS } from '../constants/texts'; // Assuming texts.ts is in ../constants/

// A single function to replace the Lucide icons
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    MapPin: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    Mail: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    Clock: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
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

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

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

const ctaVariants = {
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

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <>
      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#004A99] to-[#003A7A] relative overflow-hidden" dir="rtl">
        <div className="container mx-auto px-4 text-center">
          <motion.div variants={ctaVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 max-w-4xl mx-auto">
              {TEXTS.contactSection.cta.title}
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              {TEXTS.contactSection.cta.description}
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#EDC870] hover:bg-[#D4B564] text-[#004A99] px-8 py-4 rounded-lg transition-all duration-300 font-semibold text-lg shadow-md"
              >
                {TEXTS.contactSection.cta.button}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={ref} className="py-12 md:py-20 bg-[#F9FAFB]" dir="rtl">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          >
            {/* Left Content */}
            <motion.div variants={leftVariants} className="text-right">
              <div className="mb-8">
                <p className="text-[#004A99] font-semibold mb-2">{TEXTS.contactSection.contactInfoTitle}</p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1C1C1C] mb-6">
                  {/* Render the title with conditional styling for the underlined part */}
                  تواصل مع <span className="underline decoration-[#EDC870]">شركاء الدقة</span> للإستشارات
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {TEXTS.contactSection.contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={leftVariants}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 space-x-reverse group"
                  >
                    <div className="w-10 h-10 bg-[#EDC870] rounded-full flex items-center justify-center group-hover:bg-[#004A99] transition-colors duration-300 shadow-sm">
                      <LucideIcon iconName={info.icon} className="w-5 h-5 text-[#004A99] group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#6B7280] hover:text-[#004A99] transition-colors duration-300"
                        >
                          {info.title}
                        </a>
                      ) : (
                        <span className="text-[#6B7280]">{info.title}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Map */}
            <motion.div variants={rightVariants} className="h-96 lg:h-auto min-h-[400px] lg:min-h-[500px]">
              <div className="w-full h-full rounded-lg overflow-hidden shadow-lg border border-[#E0E0E0]">
                <iframe
                  src={TEXTS.contactSection.mapEmbedUrl}
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

          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
