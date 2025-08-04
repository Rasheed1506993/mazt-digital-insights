"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

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
}

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
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={leftVariants} className="order-2 lg:order-1">
            <div className="text-center mb-8">
              <motion.img
                variants={imageVariants}
                src="https://aztc.sa/wp-content/uploads/2024/01/logo-alamoudi-gold-100x100.png"
                alt="شعار شركاء الدقة لخدمات الأعمال"
                className="w-20 h-20 mx-auto mb-6"
              />

              <motion.h2 variants={leftVariants} className="text-2xl md:text-3xl font-bold text-[#423f42] mb-4">
                شركاء الدقة لخدمات الأعمال
              </motion.h2>

              <motion.p variants={leftVariants} className="text-gray-600 leading-relaxed mb-8">
                منذ تأسيسه في عام 2020م، ونحن روّاد في مجال الخدمات المحاسبية بفضل التواجد القوي في مكة المكرمة،
                بالإضافة إلى فريقنا المتميز من المحاسبين والمستشارين ذوي الخبرة والكفاءة العالية، الذين يقدمون مجموعة
                شاملة من الخدمات المحاسبية الفعالة والمتطورة، والتي تتضمن إعداد دفاتر المحاسبة، قوائم مالية غير مدققة،
                بالإضافة إلى تقديم استشارات حول ضريبة القيمة المضافة والزكاة، من خلال تطبيق المعايير الدولية المحاسبية
                المعتمدة في المملكة العربية السعودية.
              </motion.p>

              <motion.button
                variants={leftVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#edc870] hover:bg-[#423f42] text-white px-8 py-3 rounded-lg transition-all duration-300 font-semibold"
              >
                قراءة المزيد
              </motion.button>
            </div>
          </motion.div>

          {/* Right Images */}
          <motion.div variants={rightVariants} className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/portrait-young-asian-woman-hand-freelancer-is-working-her-job-computer-tablet-modern-office-doing-accounting-analysis-report-real-estate-investment-data-financial-tax-systems-concept-scaled.jpg"
                  alt="محاسبة احترافية"
                  className="w-full h-64 object-cover transition-transform duration-300"
                />
              </motion.div>

              <motion.div
                variants={imageVariants}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/close-up-man-hand-typing-keyboard-workplace-scaled.jpg"
                  alt="العمل المحاسبي"
                  className="w-full h-64 object-cover transition-transform duration-300"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
