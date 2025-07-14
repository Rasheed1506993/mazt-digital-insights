import type React from "react"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  initial: { opacity: 0, y: 50, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    y: -10,
    scale: 1.05,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
}

const iconVariants = {
  initial: { scale: 0, rotate: -180 },
  animate: {
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
}

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function TaxIncomePage() {
  return (
    <div className="rtl">
      {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
  backgroundImage: `url(${import.meta.env.BASE_URL}images/tax-income.webp)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
      >
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="container mx-auto px-4 h-full flex items-center">
          <motion.div
            className="relative z-10 text-white max-w-2xl mr-auto py-12 md:py-24 px-4 md:px-[15%]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <motion.div
              className="bg-black/40 text-sm mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              خدمة
            </motion.div>
            <motion.h1
              className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight md:leading-[58px]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              ضريبة الدخل
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              شركاء الدقة لخدمات الأعمال يقدم خدمات شاملة في مجال ضريبة الدخل، حيث يسعى لتقديم تجربة مالية سلسة وموثوقة لعملائه. يضمن
              المكتب تقديم إقرارات الضريبة بفعالية وفي الوقت المحدد، حيث يتولى فريق من المحترفين مهمة حساب ضريبة الدخل
              ومتابعة جميع الجوانب المالية المرتبطة بها. يهدف ذلك إلى تخفيف العبء عن عملائه وتمكينهم من تقديم الإقرارات
              الضريبية بكل يسر وسهولة.
            </motion.p>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-full sm:w-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              أطلب الخدمة الآن
            </motion.button>
          </motion.div>
        </div>
      </section>

      <main className="container mx-auto py-12">
        {/* Services Section */}
        <AnimatedSection className="mb-16">
          <div className="text-center mb-12">
            <motion.h2 className="text-4xl font-bold text-gray-900 mb-4" {...fadeInUp}>
              استشـارات ضريبة الدخل
            </motion.h2>
            <motion.div
              className="max-w-[90%] mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h5 className="text-lg text-gray-700 font-bold">
                يقدم شركاء الدقة لخدمات الأعمال خدمات الاستشارات الضريبية للشركات والمؤسسات، حيث يسهم في تحسين الأداء الضريبي للمنشأة
                وضمان الامتثال الكامل للتشريعات الضريبية.
              </h5>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/dictionary_6690151-50x50.png",
                title: "مراجعة لغة العقود لتحديد التعابير الضريبية",
                description: "تحليل لغة العقود لتحديد التعابير ذات التأثير الضريبي",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/receipt_8459930-50x50.png",
                title: "تقديم توصيات حول مستندات الإقرار الضريبي",
                description: "تقديم توصيات حول مستندات الإقرار الضريبي وإجراءات حفظ المستندات",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/capitalism_5867559-50x50.png",
                title: "تمثيل العملاء أمام الجهات الحكومية",
                description:
                  "تمثيل العملاء أمام مصلحة الزكاة والدخل وجهات حكومية أخرى، والمساعدة في الحصول على الأحكام والقرارات اللازمة.",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/project_2679418-1-50x50.png",
                title: "مراجعة الطرق المحاسبية والقوائم المالية",
                description:
                  "تحليل الطرق المحاسبية للزكاة وتأثيرها على الضرائب، إلى جانب مراجعة القوائم المالية لضمان دقة حساب الزكاة والضرائب.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#edc870] p-4 md:p-6 rounded-lg text-center h-auto min-h-[200px] md:h-[235px] flex flex-col justify-center cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="mb-4" variants={iconVariants}>
                  <img src={service.icon || "/placeholder.svg"} alt={service.title} className="w-12 h-12 mx-auto" />
                </motion.div>
                <motion.h3
                  className="text-lg font-semibold text-gray-800 mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/dictionary_6690151-50x50.png",
                title: "مراجعة لغة العقود لتحديد التعابير الضريبية",
                description: "تحليل لغة العقود لتحديد التعابير ذات التأثير الضريبي",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/pen_10214354-50x50.png",
                title: "إعداد وتقديم الإقرارات الضريبية",
                description: "إعداد الإقرارات الضريبية المؤقتة والنهائية لمصلحة الزكاة والدخل",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/internet_10213778-50x50.png",
                title: "إعداد الاعتراضات والتسوية",
                description: "إعداد الاعتراضات والمشاركة في المفاوضات لتسوية النزاعات.",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/withholding_5055613-50x50.png",
                title: "احتساب وتخفيض الزكاة والضرائب",
                description: "احتساب مبلغ الزكاة والضرائب وتقديم النصائح للتخفيف.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#edc870] p-6 rounded-lg text-center h-[235px] flex flex-col justify-center cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="mb-4" variants={iconVariants}>
                  <img src={service.icon || "/placeholder.svg"} alt={service.title} className="w-12 h-12 mx-auto" />
                </motion.div>
                <motion.h3
                  className="text-lg font-semibold text-gray-800 mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-gray-700 text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {service.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Tax Status Section */}
        <AnimatedSection className="py-12 md:py-16 bg-[#423f42] mb-12 md:mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
                اعرف موقفك من ضريبة الدخل، واستعين بشركاء الدقة لخدمات الأعمال
              </h3>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="bg-transparent border border-white p-4 md:p-6 rounded-lg text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="mb-4" variants={iconVariants}>
                  <div className="bg-[#edc870] p-3 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto flex items-center justify-center">
                    <img
                      src="https://aztc.sa/wp-content/uploads/2024/01/calculating_3406633-50x50.png"
                      alt="Tax Exempt"
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  </div>
                </motion.div>
                <motion.h4
                  className="text-lg md:text-xl font-semibold text-white mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  أنواع الدخل المعفاة من ضريبة الدخل
                </motion.h4>
                <motion.div
                  className="text-white space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="font-medium text-sm md:text-base">الضمان الاجتماعي</p>
                  <p className="font-medium text-sm md:text-base">مبالغ التعويض عن الأضرار</p>
                  <p className="font-medium text-sm md:text-base">الزكاة والصدقات والتبرعات الخيرية</p>
                  <p className="font-medium text-sm md:text-base">دخل العقارات المقدر بنسبة 2.5%</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="bg-transparent border border-white p-4 md:p-6 rounded-lg text-center"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="mb-4" variants={iconVariants}>
                  <div className="bg-[#edc870] p-3 rounded-full w-12 h-12 md:w-16 md:h-16 mx-auto flex items-center justify-center">
                    <img
                      src="https://aztc.sa/wp-content/uploads/2024/01/calculating_3406633-50x50.png"
                      alt="Taxable Income"
                      className="w-6 h-6 md:w-8 md:h-8"
                    />
                  </div>
                </motion.div>
                <motion.h4
                  className="text-lg md:text-xl font-semibold text-white mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  أنواع الدخل الخاضعة لضريبة الدخل
                </motion.h4>
                <motion.div
                  className="text-white space-y-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <p className="font-medium text-sm md:text-base">رواتب الموظفين الأجانب</p>
                  <p className="font-medium text-sm md:text-base">الأرباح الصافية للشركات</p>
                  <p className="font-medium text-sm md:text-base">عائدات الاستثمارات العقارية والمالية</p>
                  <p className="font-medium text-sm md:text-base">الأرباح المحققة من الأنشطة التجارية</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}