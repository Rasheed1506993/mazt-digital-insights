
import React, { Suspense } from 'react';
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import OptimizedHeroSlider from "../components/OptimizedHeroSlider";
import OptimizedServicesSection from "../components/OptimizedServicesSection";

// Lazy load non-critical components
const AboutSection = React.lazy(() => import("../components/AboutSection"));
const PartnersSection = React.lazy(() => import("../components/PartnersSection"));
const StatsSection = React.lazy(() => import("../components/StatsSection"));
const FeaturesSection = React.lazy(() => import("../components/FeaturesSection"));
const ClientsSection = React.lazy(() => import("../components/ClientsSection"));
const ContactSection = React.lazy(() => import("../components/ContactSection"));

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const LoadingFallback = ({ height = "h-64 sm:h-80 md:h-96", bgColor = "bg-gray-100" }) => (
  <div className={`${height} ${bgColor} animate-pulse mx-2 sm:mx-4 md:mx-0`} />
);

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      
      <motion.main 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="content-visibility-auto w-full"
      >
        <motion.div variants={sectionVariants} className="w-full">
          <OptimizedHeroSlider />
        </motion.div>

        <motion.div variants={sectionVariants} className="content-visibility-auto w-full px-2 sm:px-4 md:px-0">
          <Suspense fallback={<LoadingFallback />}>
            <AboutSection />
          </Suspense>
        </motion.div>

        <motion.div variants={sectionVariants} className="content-visibility-auto w-full px-2 sm:px-4 md:px-0">
          <Suspense fallback={<LoadingFallback height="h-48 sm:h-56 md:h-64" bgColor="bg-gray-50" />}>
            <PartnersSection />
          </Suspense>
        </motion.div>

        <motion.div variants={sectionVariants} className="w-full px-2 sm:px-4 md:px-0">
          <OptimizedServicesSection />
        </motion.div>

        <motion.div variants={sectionVariants} className="content-visibility-auto w-full">
          <Suspense fallback={<LoadingFallback height="h-64 sm:h-72 md:h-96" bgColor="bg-gray-800" />}>
            <StatsSection />
          </Suspense>
        </motion.div>

        <motion.div variants={sectionVariants} className="content-visibility-auto w-full px-2 sm:px-4 md:px-0">
          <Suspense fallback={<LoadingFallback />}>
            <FeaturesSection />
          </Suspense>
        </motion.div>

        <motion.div variants={sectionVariants} className="content-visibility-auto w-full px-2 sm:px-4 md:px-0">
          <Suspense fallback={<LoadingFallback height="h-48 sm:h-56 md:h-64" bgColor="bg-gray-50" />}>
            <ClientsSection />
          </Suspense>
        </motion.div>

        <motion.div variants={sectionVariants} className="content-visibility-auto w-full">
          <Suspense fallback={<LoadingFallback />}>
            <ContactSection />
          </Suspense>
        </motion.div>
      </motion.main>
      
    </div>
  );
};

export default Home;
