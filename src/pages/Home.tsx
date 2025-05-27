
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

const LoadingFallback = ({ height = "h-96", bgColor = "bg-gray-100" }) => (
  <div className={`${height} ${bgColor} animate-pulse`} />
);

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <motion.main 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="content-visibility-auto"
      >
        <motion.div variants={sectionVariants}>
          <OptimizedHeroSlider />
        </motion.div>

        <motion.div variants={sectionVariants} className="content-visibility-auto">
          <Suspense fallback={<LoadingFallback />}>
            <AboutSection />
          </Suspense>
        </motion.div>

        <motion.div variants={sectionVariants} className="content-visibility-auto">
          <Suspense fallback={<LoadingFallback height="h-64" bgColor="bg-gray-50" />}>
            <PartnersSection />
          </Suspense>
        </motion.div>

        <motion.div variants={sectionVariants}>
          <OptimizedServicesSection />
        </motion.div>

        <motion.div variants={sectionVariants} className="content-visibility-auto">
          <Suspense fallback={<LoadingFallback bgColor="bg-gray-800" />}>
            <StatsSection />
          </Suspense>
        </motion.div>

        <motion.div variants={sectionVariants} className="content-visibility-auto">
          <Suspense fallback={<LoadingFallback />}>
            <FeaturesSection />
          </Suspense>
        </motion.div>

        <motion.div variants={sectionVariants} className="content-visibility-auto">
          <Suspense fallback={<LoadingFallback height="h-64" bgColor="bg-gray-50" />}>
            <ClientsSection />
          </Suspense>
        </motion.div>

        <motion.div variants={sectionVariants} className="content-visibility-auto">
          <Suspense fallback={<LoadingFallback />}>
            <ContactSection />
          </Suspense>
        </motion.div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default Home;
