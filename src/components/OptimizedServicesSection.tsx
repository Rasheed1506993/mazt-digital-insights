

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, memo } from "react"
import LazyImage from "./LazyImage"
import { Link } from 'react-router-dom';

const services = [
  {
    title: "ضريبة الدخل",
    description:
      "يتعامل مكتب المازن بكفاءة مع جميع جوانب ضريبة الدخل، بدءًا من تقديم الإشعارات الضريبية وصولًا إلى حساب الضرائب بأقل قدر من الضغط على المنشأة.",
    image: "https://aztc.sa/wp-content/uploads/2024/01/budget-70x70.png",
  },
  {
    title: "محاسبة التكاليف",
    description:
      "يتم تحليل ومتابعة التكاليف بشكل دوري، مما يساهم في تحديد نقاط التحسين وتحقيق كفاءة أكبر في إدارة الموارد المالية.",
    image: "https://aztc.sa/wp-content/uploads/2024/01/budget-1-70x70.png",
  },
  {
    title: "ضريبـة القيمـة المضافـة",
    description:
      "يقدم المكتب حلاً مخصصًا لامتثال المنشئة لضريبة القيمة المضافة، بدءًا من التسجيل وانتهاءً بتقديم التقارير والتصاريح بشكل دوري.",
    image: "https://aztc.sa/wp-content/uploads/2024/01/budget-2-70x70.png",
  },
  {
    title: "تسجيل الحسابات",
    description:
      "يتميز مكتب المازن بتنفيذ عمليات تسجيل الحسابات بدقة وتفصيل، مما يسهم في إنشاء سجل دقيق للمعاملات المالية اليومية و يضمن التزام المنشأة بالمبادئ المحاسبية.",
    image: "https://aztc.sa/wp-content/uploads/2024/01/budget-3-70x70.png",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const ServiceCard = memo(({ service, index }: { service: (typeof services)[0]; index: number }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{
      y: -5,
      transition: { duration: 0.2 },
    }}
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 text-center group will-change-transform"
  >
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      className="w-16 h-16 bg-[#edc870] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#423f42] transition-colors duration-300"
    >
      <LazyImage
        src={service.image}
        alt={service.title}
        className="w-8 h-8 filter brightness-0 invert"
        width={32}
        height={32}
      />
    </motion.div>

    <h3 className="text-lg font-semibold text-[#423f42] mb-3">{service.title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
  </motion.div>
))

ServiceCard.displayName = "ServiceCard"

export default function OptimizedServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Header */}
          <motion.div variants={titleVariants} className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <LazyImage
                src="https://aztc.sa/wp-content/uploads/2024/01/logo-60x60.webp"
                alt="شعار الخدمات"
                className="w-12 h-12"
                width={48}
                height={48}
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#423f42] mb-4">خدماتنا</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              استشارات محاسبية وضريبية متفرّدة لتحقيق الامتثال المالي وتحسّين الأداء الإداري
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={titleVariants} className="text-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#edc870] hover:bg-[#423f42] text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold"
            >  <Link
              to="/services">
                  قراءة المزيد
            </Link>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
