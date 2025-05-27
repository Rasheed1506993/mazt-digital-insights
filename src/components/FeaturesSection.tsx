
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const features = [
  {
    title: "فريق محاسبي مختص",
    description: "مما يضمن وجود فريق خاص لفهم احتياجات عملائنا الفريدة وضمان تلبية توقعاتهم بشكل دقيق وفعال.",
    icon: "https://aztc.sa/wp-content/uploads/2024/01/avatar-64x64.png",
  },
  {
    title: "احترافية عالية في العمل",
    description: "نتميز بالتفاني في تحقيق أعلى مستويات الجودة والأداء المهني في مجال الخدمات المحاسبية.",
    icon: "https://aztc.sa/wp-content/uploads/2024/01/investment-64x64.png",
  },
  {
    title: "برامج محاسبية متطورة",
    description: "لسرعة إنجاز الأعمال، وتسهيل عمليات المراجعة وتعزيز الفعالية في معالجة البيانات المحاسبية.",
    icon: "https://aztc.sa/wp-content/uploads/2024/01/accounting-1-64x64.png",
  },
  {
    title: "تعيين محاسب خاص بك",
    description: "مما يضمن وجود فريق خاص لفهم احتياجات عملائنا الفريدة وضمان تلبية توقعاتهم بشكل دقيق وفعال.",
    icon: "https://aztc.sa/wp-content/uploads/2024/01/book-keeper-64x64.png",
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

const featureVariants = {
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

const FeaturesSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {/* Title */}
          <motion.div variants={titleVariants} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#423f42] max-w-4xl mx-auto">
              تقنية للثقة، جودة للتطور، و مستقبل للتحوّل
            </h2>
          </motion.div>

          {/* Features Grid */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={featureVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="text-center p-6 group"
              >
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={feature.icon || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                <h3 className="text-lg font-semibold text-[#423f42] mb-3">{feature.title}</h3>

                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default FeaturesSection;
