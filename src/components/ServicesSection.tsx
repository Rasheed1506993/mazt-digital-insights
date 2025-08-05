"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

// A single function to replace the Lucide icons
const LucideIcon = ({ iconName, className }) => {
  const icons = {
    Calculator: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><line x1="8" x2="16" y1="6" y2="6"/><line x1="16" x2="16" y1="14" y2="14"/><line x1="12" x2="12" y1="14" y2="14"/><line x1="8" x2="8" y1="14" y2="14"/><line x1="16" x2="16" y1="10" y2="10"/><line x1="12" x2="12" y1="10" y2="10"/><line x1="8" x2="8" y1="10" y2="10"/></svg>
    ),
    FileText: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
    ),
    TrendingUp: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
    ),
    Receipt: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"/><path d="M8 7h8"/><path d="M8 12h8"/><path d="M8 17h8"/></svg>
    ),
  };
  return icons[iconName] || null;
};

const services = [
  {
    title: "ضريبة الدخل",
    description:
      "يتعامل شركاء الدقة لخدمات الأعمال بكفاءة مع جميع جوانب ضريبة الدخل، بدءًا من تقديم الإشعارات الضريبية وصولًا إلى حساب الضرائب بأقل قدر من الضغط على المنشأة.",
    icon: "Calculator",
    image: "https://aztc.sa/wp-content/uploads/2024/01/budget-70x70.png",
  },
  {
    title: "محاسبة التكاليف",
    description:
      "يتم تحليل ومتابعة التكاليف بشكل دوري، مما يساهم في تحديد نقاط التحسين وتحقيق كفاءة أكبر في إدارة الموارد المالية.",
    icon: "TrendingUp",
    image: "https://aztc.sa/wp-content/uploads/2024/01/budget-1-70x70.png",
  },
  {
    title: "ضريبـة القيمـة المضافـة",
    description:
      "يقدم المكتب حلاً مخصصًا لامتثال المنشئة لضريبة القيمة المضافة، بدءًا من التسجيل وانتهاءً بتقديم التقارير والتصاريح بشكل دوري.",
    icon: "Receipt",
    image: "https://aztc.sa/wp-content/uploads/2024/01/budget-2-70x70.png",
  },
  {
    title: "تسجيل الحسابات",
    description:
      "يتميز شركاء الدقة لخدمات الأعمال بتنفيذ عمليات تسجيل الحسابات بدقة وتفصيل، مما يسهم في إنشاء سجل دقيق للمعاملات المالية اليومية و يضمن التزام المنشأة بالمبادئ المحاسبية.",
    icon: "FileText",
    image: "https://aztc.sa/wp-content/uploads/2024/01/budget-3-70x70.png",
  },
];

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

const cardVariants = {
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

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-12 md:py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Header */}
          <motion.div variants={titleVariants} className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://aztc.sa/wp-content/uploads/2024/01/logo-60x60.webp"
                alt="شعار الخدمات"
                className="w-12 h-12"
                loading="lazy"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-4">خدماتنا</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              استشارات محاسبية وضريبية متفرّدة لتحقيق الامتثال المالي وتحسّين الأداء الإداري
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 bg-[#edc870] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#423f42] transition-colors duration-300"
                >
                  <img
                    src={service.image || "https://placehold.co/60x60/E0E0E0/333333?text=Icon"}
                    alt={service.title}
                    className="w-8 h-8 filter brightness-0 invert"
                    loading="lazy"
                  />
                </motion.div>

                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-3">{service.title}</h3>

                <p className="text-[#6B7280] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={titleVariants} className="text-center">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#edc870] hover:bg-[#423f42] text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold"
              >
                قراءة المزيد
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
