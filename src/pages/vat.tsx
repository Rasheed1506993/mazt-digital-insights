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

export default function VATPage() {
  return (
    <div className="rtl">
      {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/investment-decisions-scaled.webp')",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-49"
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
              className="text-sm mb-2"
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
              ضريبة القيمة المضافة
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              نقدم خدمات استشارات ضريبة القيمة المضافة للشركات والمؤسسات، وذلك بهدف دعمها في تحسين أدائها خلال المراحل
              الأولى لتأسيس النشاط التجاري. نحن نوفر استشارات شاملة حول التخطيط الضريبي وتطبيق ضريبة القيمة المضافة،
              سواء داخل المملكة العربية السعودية أو خارجها، كما نحرص على تقديم خدماتنا بدقة واحترافية لضمان التزام
              عملائنا بالتشريعات الضريبية وتحقيق أقصى استفادة من الفرص المتاحة.
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
              استشارات ضريبة القيمة المضافة
            </motion.h2>
            <motion.div
              className="max-w-[90%] mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-700 font-bold">
                يقدم مكتب المازن خدمات الاستشارات الضريبية للشركات والمؤسسات، حيث يسهم في تحسين الأداء الضريبي للمنشأة
                وضمان الامتثال الكامل للتشريعات الضريبية.
              </p>
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
                icon: "https://aztc.sa/wp-content/uploads/2024/01/exemption_10684103-50x50.png",
                title: "التسجيل/إلغاء التسجيل في ضريبة القيمة المضافة",
                description: "نساعد في إجراءات التسجيل وإلغاء التسجيل في ضريبة القيمة المضافة وفقًا لمتطلبات العميل.",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/project_2679418-1-50x50.png",
                title: "إعداد وتقديم الإقرارات الضريبية",
                description: "نقوم بإعداد الإقرارات الضريبية بشكل دقيق وفقًا للقوانين واللوائح الضريبية.",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/termination_7238036-50x50.png",
                title: "تصحيح الإقرارات الضريبية",
                description: "يتمثل دورنا في تحليل الإقرارات الضريبية وتصحيح أي أخطاء محتملة لضمان دقتها وامتثالها.",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/instalment_9881921-50x50.png",
                title: "تقديم الاعتراضات الضريبية",
                description:
                  "نقدم استشارات حول كيفية تقديم الاعتراضات بشكل فعّال، مما يساعد العميل في الدفاع عن حقوقه الضريبية.",
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
                icon: "https://aztc.sa/wp-content/uploads/2024/01/financial_13161444-50x50.png",
                title: "رفع إقرار ضريبة القيمة المضافة",
                description:
                  "نقوم برفع إقرار ضريبة القيمة المضافة بناءً على موافقة العميل بالنيابة عنه وفقًا للإجراءات الرسمية.",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/man_14170697-50x50.png",
                title: "تقديم الاستشارات المحاسبية",
                description:
                  "نقوم بتقديم استشارات محاسبية فعّالة لمساعدة العميل في اتخاذ قرارات مستنيرة وتحسين أدائه المالي على المدى الطويل.",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/documentation_11786883-1-50x50.png",
                title: "إعداد المذكرات وتقديم الدعاوى",
                description:
                  "نقوم بإعداد المذكرات وتمثيل العميل في الدعاوى الضريبية لضمان حقوقه لدى الأمانة العامة للجان الضريبية.",
              },
              {
                icon: null,
                title: "تقديم طلبات التقسيط",
                description:
                  "نقوم بتقديم طلب التقسيط بالنيابة عن العميل في حالة عدم القدرة على سداد الضريبة المستحقة دفعة واحدة.",
                svg: true,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-[#edc870] p-6 rounded-lg text-center h-[235px] flex flex-col justify-center cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div className="mb-4" variants={iconVariants}>
                  {service.svg ? (
                    <div className="w-12 h-12 mx-auto flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 66 66" fill="#E8C26D">
                        <g
                          style={{
                            fill: "none",
                            stroke: "#000",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeMiterlimit: 10,
                            strokeWidth: 1.5,
                          }}
                        >
                          <path d="m50.9 9.6v46.8c0 2.4-2 4.4-4.4 4.4h-40c1.2 0 2.3-.5 3.1-1.3s1.3-1.9 1.3-3.1v-46.8c0-2.4 2-4.4 4.4-4.4h31.1c2.5 0 4.5 2 4.5 4.4z"></path>
                          <path d="m46.5 56.3h-17.8"></path>
                          <path d="m15.4 31.8 11.8.1"></path>
                          <path d="m15.4 36.7h11.8"></path>
                          <path d="m15.4 41.6 31.1.1"></path>
                          <path d="m28.7 46.5 17.8.1"></path>
                          <path d="m28.7 51.4h17.8"></path>
                          <path d="m2 24.7v31.7c0 2.4 2 4.4 4.4 4.4 1.2 0 2.3-.5 3.1-1.3s1.3-1.9 1.3-3.1v-31.7z"></path>
                          <path d="m15.4 17.5h3.6v10h-3.6z"></path>
                          <path d="m29.1 13.5h3.6v13.9h-3.6z"></path>
                          <path d="m22.2 21.4h3.6v6.1h-3.6z"></path>
                          <path d="m36 17.5h3.6v10h-3.6z"></path>
                          <path d="m42.8 9.6h3.6v17.8h-3.6z"></path>
                          <path d="m30.9 31.4h15.5v7h-15.5z"></path>
                          <path d="m15 46.2h10.5v10.5h-10.5z"></path>
                        </g>
                      </svg>
                    </div>
                  ) : (
                    <img src={service.icon || "/placeholder.svg"} alt={service.title} className="w-12 h-12 mx-auto" />
                  )}
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

        {/* Registration Section */}
        <AnimatedSection
          className="py-16 bg-gray-100 bg-cover bg-center bg-no-repeat mb-16"
          style={{
            backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/h2_about_shape03.png')",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInLeft}>
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/1-4-scaled.webp"
                  alt="VAT Registration"
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <motion.div className="text-right" {...fadeInRight}>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">التسجيل في ضريبة القيمة المضافة</h2>
                <div className="text-lg text-gray-700 space-y-4">
                  <p>
                    يقدم مكتب المازن هذه الخدمة لتيسير عملية التسجيل والإلغاء، كما نهدف إلى تقديم دعم متكامل للعملاء
                    لضمان التوافق الضريبي وتحقيق الامتثال الكامل للتشريعات الضريبية في المملكة عبر:
                  </p>
                  <motion.ul
                    className="space-y-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, staggerChildren: 0.1 }}
                  >
                    {[
                      "دراسة الوضع الضريبي: يتم تحليل وفهم الوضع الضريبي للشركة لتحديد مدى استحقاقها للتسجيل في ضريبة القيمة المضافة.",
                      "إعداد المستندات: يتم تجهيز المستندات والمعلومات اللازمة لتقديم طلب التسجيل، مع ضمان الامتثال لمتطلبات الهيئة الضريبية.",
                      "تقديم الطلب: يقوم المكتب بتقديم الطلبات اللازمة للهيئة الضريبية ومتابعة الإجراءات حتى يتم تسجيل الشركة بشكل رسمي.",
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <strong>{item.split(":")[0]}:</strong> {item.split(":")[1]}
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Tax Returns Section */}
        <AnimatedSection
          className="py-16 bg-cover bg-center bg-no-repeat mb-16"
          style={{
            backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/222.png')",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div className="text-right" {...fadeInLeft}>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">إعداد وتقديم الإقرارات الضريبية</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  خدمة إعداد وتقديم الإقرارات الضريبية لضريبة القيمة المضافة من خلال مكتب المازن تمثل جزءًا حيويًا في
                  إدارة الشؤون الضريبية للشركات والمؤسسات. يقوم فريق الخبراء في المكتب بفحص وتقييم البيانات المحاسبية
                  بدقة، ثم يعملون على إعداد الإقرارات بامتثال كامل للقوانين واللوائح الضريبية. يتم التأكد من التقديم في
                  المواعيد المحددة والتواصل الفعّال مع الهيئة الضريبية. الخدمة تشمل متابعة دورية وتصحيح الأخطاء لضمان دقة
                  الإقرارات وتحسين الأداء الضريبي للعميل بشكل مستمر.
                </p>
              </motion.div>
              <motion.div {...fadeInRight}>
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/2-4-scaled.webp"
                  alt="Tax Returns"
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Consulting Section */}
        <AnimatedSection
          className="py-16 bg-gray-100 bg-cover bg-center bg-no-repeat mb-16"
          style={{
            backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/h2_about_shape03.png')",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div {...fadeInLeft}>
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/3-3-scaled.webp"
                  alt="Accounting Consulting"
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <motion.div className="text-right" {...fadeInRight}>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">تقديم الاستشارات المحاسبية</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  تعد هذه الخدمة أساسية لمساعدة الشركات والمؤسسات على فهم وتطبيق التشريعات الضريبية بفعالية، عبر فريق من
                  الخبراء والمحاسبين المعتمدين، لنضمن تقديم استشارات مخصصة لتحليل التأثيرات الضريبية على الأعمال، مما
                  يُمكن العملاء من اتخاذ قرارات سليمة مبنية على تحليلات دقيقة. تشمل الخدمة أيضًا إرشادات حول أمور التسجيل
                  وإلغاء التسجيل في ضريبة القيمة المضافة، وتطبيق أفضل الممارسات لتحسين الامتثال الضريبي وتقليل المخاطر
                  الضريبية.
                </p>
              </motion.div>
            </div>
          </div>
        </AnimatedSection>

        {/* Objections Section */}
        <AnimatedSection
          className="py-16 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/222.png')",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div className="text-right" {...fadeInLeft}>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">تقديم الاعتراضات الضريبية</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  تعكس هذه الخدمة مدى التزامنا بمساعدة الشركات والأفراد في حقوقهم الضريبية. يتخذ فريق الخبراء في المكتب
                  منهجًا دقيقًا لفحص وتحليل الوضع الضريبي للعملاء وتحديد النقاط التي يمكن تقديم الاعتراضات بشأنها. يُقدم
                  المكتب الدعم والمشورة في إعداد الاعتراضات وتقديمها بشكل فعّال، مع متابعة عمليات الربط الزكوي والضريبي
                  وضمان تحقيق أقصى استفادة للعملاء في ظل التشريعات واللوائح الضريبية المعمول بها.
                </p>
              </motion.div>
              <motion.div {...fadeInRight}>
                <img
                  src="https://aztc.sa/wp-content/uploads/2024/01/4-3-scaled.webp"
                  alt="Tax Objections"
                  className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}
