import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { TEXTS } from '../constants/texts'; // Import TEXTS

// A single function to replace the Lucide icons with inline SVGs
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    ChevronLeft: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m15 18-6-6 6-6"/></svg>
    ),
    ChevronRight: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
    ),
  };
  return icons[iconName] || null;
};

// Placeholder LazyImage component for this environment
const LazyImage = ({ src, alt, className, priority }) => {
  return <img src={src} alt={alt} className={className} loading={priority ? "eager" : "lazy"} />;
};

const slides = TEXTS.heroSlider.slides; // Get slides from TEXTS

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

export default function OptimizedHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentSlideData = useMemo(() => slides[currentSlide], [currentSlide]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const goToSlide = useCallback(
    (index) => {
      setDirection(index > currentSlide ? 1 : -1);
      setCurrentSlide(index);
    },
    [currentSlide],
  );

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section
      className="relative h-[500px] md:h-[700px] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      dir="rtl" // Added RTL direction
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#EDC870]/10 rounded-full -translate-x-48 -translate-y-48 z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#004A99]/10 rounded-full translate-x-48 translate-y-48 z-10"></div>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <LazyImage
              src={currentSlideData.image}
              alt={currentSlideData.title}
              className="w-full h-full object-cover"
              priority={currentSlide === 0}
            />
            {/* Overlay for better text readability - adjusted color */}
            <div className="absolute inset-0 bg-[#004A99]/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center justify-center text-center"> {/* Centered content */}
            <div className="container mx-auto px-4">
              <div className="max-w-4xl text-white">
                <motion.h1
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight"
                >
                  {currentSlideData.title}
                </motion.h1>

                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto hidden md:block"
                >
                  {currentSlideData.description}
                </motion.p>

                <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
                  <Link to="/contact">
                    <button className="bg-[#EDC870] hover:bg-[#D4B564] text-[#004A99] px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 font-semibold text-sm md:text-base shadow-md"> {/* Applied palette colors and shadow */}
                      {currentSlideData.buttonText}
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 right-4 flex items-center z-30"> {/* Changed left to right for RTL */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 shadow-md" // Added shadow
          aria-label="الشريحة السابقة"
        >
          <LucideIcon iconName="ChevronRight" className="w-6 h-6" /> {/* Changed icon to ChevronRight for RTL */}
        </motion.button>
      </div>

      <div className="absolute inset-y-0 left-4 flex items-center z-30"> {/* Changed right to left for RTL */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 shadow-md" // Added shadow
          aria-label="الشريحة التالية"
        >
          <LucideIcon iconName="ChevronLeft" className="w-6 h-6" /> {/* Changed icon to ChevronLeft for RTL */}
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2 space-x-reverse"> {/* Added space-x-reverse for RTL */}
          {slides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 shadow-sm ${ // Added shadow
                index === currentSlide ? "bg-[#EDC870]" : "bg-white/50" // Applied accent color
              }`}
              aria-label={`الذهاب للشريحة ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
