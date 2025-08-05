import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from 'react-router-dom';

const processSteps = [
  {
    step: "01",
    title: "التواصل الأولي",
    description: "نتواصل معك لفهم احتياجاتك ومتطلباتك بشكل دقيق",
  },
  {
    step: "02",
    title: "تحليل الوضع",
    description: "نقوم بتحليل وضعك المالي والمحاسبي الحالي",
  },
  {
    step: "03",
    title: "وضع الخطة",
    description: "نضع خطة عمل مفصلة ومخصصة لاحتياجاتك",
  },
  {
    step: "04",
    title: "التنفيذ",
    description: "نبدأ في تنفيذ الخدمات وفقاً للخطة المتفق عليها",
  },
  {
    step: "05",
    title: "المتابعة",
    description: "نقدم المتابعة المستمرة والدعم اللازم",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

const stepVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ServiceProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={titleVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">كيف نعمل</h2>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              نتبع منهجية واضحة ومنظمة لضمان تقديم أفضل الخدمات لعملائنا
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <motion.div key={index} variants={stepVariants} className="relative text-center">
                <div className="bg-[#FFB300] text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">{step.title}</h3>
                <p className="text-[#6B7280]">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[50%] w-full h-0.5 bg-gray-300 transform translate-x-[50%]"></div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#3A86FF] hover:bg-[#1C1C1C] text-white px-8 py-3 rounded-lg transition-colors"
              >
                ابدأ معنا الآن
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
