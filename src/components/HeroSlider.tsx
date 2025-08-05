import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// A single function to replace the Lucide icons
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

const slides = [
  {
    id: 1,
    title: "شركاء الدقة لخدمات الأعمال",
    description:
      "نساعد أصحاب المنشآت التجارية على إدارة عملياتهم المحاسبية بطرق تمكنهم من اتخاذ قرارات فعالة تساهم في زيادة مبيعاتهم ونمو أعمالهم من خلال مجموعة شاملة من الخدمات المحاسبية.",
    image: "https://aztc.sa/wp-content/uploads/2021/08/wepik-export-20240112174456Clna.jpeg",
    buttonText: "تواصل معنا",
  },
  {
    id: 2,
    title: "إستشارات ضريبة القيمة المضافة",
    description:
      "نقي اصحاب المنشئات التجارية من الغرامات المترتبة على الممارسات الضريبة الخاطئة من خلال تقديم الإقرارات الضريبة بالطريقة الصحيحة وفقا للوائح والأنظمة الضريبية المعمول بها في المملكة.",
    image: "https://aztc.sa/wp-content/uploads/2024/01/wepik-export-20240112202807zxnZ.jpeg",
    buttonText: "تواصل معنا",
  },
  {
    id: 3,
    title: "محاسبة التكاليف",
    description:
      "نساعد أصحاب المنشئات التجارية على تحديد التكاليف الفعلية للمنتجات والخدمات الخاصة بالنشاط التجاري لاتخاذ قرارات خاصة بالتسعير وإحتساب عدد الوحدات المطلوب بيعها للوصول الى نقطة التعادل.",
    image: "https://aztc.sa/wp-content/uploads/2024/01/wepik-export-20240112202807zxnZ.jpeg",
    buttonText: "تواصل معنا",
  },
  {
    id: 4,
    title: "تسجيل الحسابات",
    description:
      "نقوم بتنفيذ عملية تسجيل دقيقة ومفصلة لكل التعاملات المالية التي تحدث في النشاط التجاري لإصدار تقارير مالية تفصيلية تساعد أصحاب المنشئات التجارية على اتخاذ قرارات تساهم في زيادة ربحية ونمو النشاط التجاري",
    image: "https://aztc.sa/wp-content/uploads/2021/08/wepik-export-20240112172525EaNB.jpeg",
    buttonText: "تواصل معنا",
  },
];

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
      duration: 0.8,
      delay: 0.3,
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
      duration: 0.6,
      delay: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      if (newDirection === 1) {
        return (prev + 1) % slides.length;
      } else {
        return prev === 0 ? slides.length - 1 : prev - 1;
      }
    });
  };

  return (
    <section className="relative h-[500px] md:h-[700px] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
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
            <img
              src={slides[currentSlide].image || "https://placehold.co/1920x1080/E0E0E0/333333?text=Hero+Image"}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Overlay to darken image */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 to-[#423f42]/60"></div>
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl text-white text-center">
                <motion.h1
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto hidden md:block"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div variants={buttonVariants} initial="hidden" animate="visible" whileHover="hover">
                  <Link to="/contact">
                    <button className="bg-[#edc870] hover:bg-[#423f42] text-white px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 font-semibold text-sm md:text-base">
                      {slides[currentSlide].buttonText}
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-y-0 left-4 flex items-center z-30">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(-1)}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <LucideIcon iconName="ChevronLeft" size={24} />
        </motion.button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center z-30">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => paginate(1)}
          className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300"
        >
          <LucideIcon iconName="ChevronRight" size={24} />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex space-x-2 space-x-reverse">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => {
                setDirection(index > currentSlide ? 1 : -1);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
