"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calculator, FileText, TrendingUp, Receipt } from "lucide-react"
import { Link } from "react-router-dom";

const services = [
  {
    title: "ضريبة الدخل",
    description:
      "يتعامل شركاء الدقة لخدمات الأعمال بكفاءة مع جميع جوانب ضريبة الدخل، بدءًا من تقديم الإشعارات الضريبية وصولًا إلى حساب الضرائب بأقل قدر من الضغط على المنشأة.",
    icon: Calculator,
    image: "https://aztc.sa/wp-content/uploads/2024/01/budget-70x70.png",
  },
  {
    title: "محاسبة التكاليف",
    description:
      "يتم تحليل ومتابعة التكاليف بشكل دوري، مما يساهم في تحديد نقاط التحسين وتحقيق كفاءة أكبر في إدارة الموارد المالية.",
    icon: TrendingUp,
    image: "https://aztc.sa/wp-content/uploads/2024/01/budget-1-70x70.png",
  },
  {
    title: "ضريبـة القيمـة المضافـة",
    description:
      "يقدم المكتب حلاً مخصصًا لامتثال المنشئة لضريبة القيمة المضافة، بدءًا من التسجيل وانتهاءً بتقديم التقارير والتصاريح بشكل دوري.",
    icon: Receipt,
    image: "https://aztc.sa/wp-content/uploads/2024/01/budget-2-70x70.png",
  },
  {
    title: "تسجيل الحسابات",
    description:
      "يتميز شركاء الدقة لخدمات الأعمال بتنفيذ عمليات تسجيل الحسابات بدقة وتفصيل، مما يسهم في إنشاء سجل دقيق للمعاملات المالية اليومية و يضمن التزام المنشأة بالمبادئ المحاسبية.",
    icon: FileText,
    image: "https://aztc.sa/wp-content/uploads/2024/01/budget-3-70x70.png",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

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
}

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
}

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Header */}
          <motion.div variants={titleVariants} className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://aztc.sa/wp-content/uploads/2024/01/logo-60x60.webp"
                alt="شعار الخدمات"
                className="w-12 h-12"
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
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-8 h-8 filter brightness-0 invert"
                  />
                </motion.div>

                <h3 className="text-lg font-semibold text-[#423f42] mb-3">{service.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
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
  )
}
