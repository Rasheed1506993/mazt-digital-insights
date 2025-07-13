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
      staggerChildren: 0.15,
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

const industryCardVariants = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: {
    x: 10,
    transition: { duration: 0.3, ease: "easeInOut" },
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

export default function WithholdingTax() {
  return (
    <div className="rtl">
      {/* Hero Section */}
      <section
        className="relative h-[400px] md:h-[600px] bg-cover bg-center bg-no-repeat overflow-hidden"
                style={{
  backgroundImage: `url(${import.meta.env.BASE_URL}images/withholding-tax.webp)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
}}
      >
        <motion.div
          className="absolute inset-0 bg-black/60"
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
              ضريبة الاستقطاع
            </motion.h1>
            <motion.p
              className="text-sm md:text-lg mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
مكتب المازن يقدم خدمات شاملة في مجال ضريبة الدخل، حيث يسعى لتقديم تجربة مالية سلسة وموثوقة لعملائه. يضمن المكتب تقديم إقرارات الضريبة بفعالية وفي الوقت المحدد، حيث يتولى فريق من المحترفين مهمة حساب ضريبة الدخل ومتابعة جميع الجوانب المالية المرتبطة بها. يهدف ذلك إلى تخفيف العبء عن عملائه وتمكينهم من تقديم الإقرارات الضريبية بكل يسر وسهولة.
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
              استشـارات ضريبة الاستقطاع
            </motion.h2>
            <motion.div
              className="max-w-[90%] mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-lg text-gray-700 font-bold">
                
يقدم مكتب المازن خدمات متكاملة للشركات لضمان التزامها بالضوابط الضريبية وتحقيق أقصى استفادة من نظام الاستقطاع بشكل فعّال
              </p>
            </motion.div>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {[
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/review_12066077-50x50.png",
                title: "تحديد التزامات الاستقطاع",
                description:
                  " لمساعدة الشركات في تحديد الأنشطة والمدفوعات التي تخضع لضريبة الاستقطاع وتحديد النسب المحددة للخصم .",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/stress-test_11245686-50x50.png",
                title: "تطبيق اللوائح الضريبية",
                description:
                  "نعي جيدًا اللوائح والتشريعات الضريبية في المملكة العربية السعودية، مما يساعد على تجنب المشاكل القانونية وتحقيق التوازن الضريبي.",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/strategy_3889706-50x50.png",
                title: "تقديم الإرشادات والتوجيه",
                description:
                  "يقوم المكتب بتقديم الإرشادات اللازمة للشركات حول كيفية تنظيم عمليات الاستقطاع بشكل فعّال وفقًا للمتطلبات القانونية.",
              },
              {
                icon: "https://aztc.sa/wp-content/uploads/2024/01/shopping_7936426-50x50.png",
                title: "الدعم في التفاوض والاعتراض",
                description:
                  "في حالة وجود أي نزاعات ضريبية أو حاجة للتفاوض مع الجهات الضريبية، يقدم المكتب دعمًا قويًا للشركات ويسهم في إعداد الاعتراضات إذا لزم الأم.",
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
        </AnimatedSection>

        {/* Industries Section */}
        <AnimatedSection className="py-16 bg-[#423f42] border-b border-white mb-16">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                الأنشطة المشمولة في ضريبة الاستقطاع
              </h2>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {[
                {
                  icon: "svg",
                  title: "الخدمات المقدمة",
                  description:
                    "يتم استقطاع نسبة ضريبية من الأموال المدفوعة مقابل خدمات معينة مثل الاستشارات، والتصميم، والتسويق. هذا يشمل الشركات التي تقدم خدمات مهنية واستشارات في مجموعة متنوعة من القطاعات.",
                },
                {
                  icon: "https://aztc.sa/wp-content/uploads/2024/01/town_11898494-45x45.png",
                  title: "بيع السلع",
                  description:
                    "في حالة البيع بالجملة أو بالتجزئة، يتم استقطاع ضريبة معينة من قيمة السلع المباعة. يشمل ذلك الشركات التي تشتغل في مجالات التجزئة والجملة.",
                },
                {
                  icon: "https://aztc.sa/wp-content/uploads/2024/01/healthy_13622026-45x45.png",
                  title: "الرواتب والأجور",
                  description:
                    "يتم استقطاع نسبة معينة من رواتب العاملين في القطاعين العام والخاص كجزء من التزاماتهم الضريبية. يُعد هذا جزءًا من الجهود الحكومية لتحصيل الإيرادات الضريبية.",
                },
                {
                  icon: "https://aztc.sa/wp-content/uploads/2024/01/cash_12776579-45x45.png",
                  title: "الإيجارات والعقود",
                  description:
                    "العقود التي تشمل تأجير ممتلكات مثل العقارات والمعدات تخضع أيضًا لضريبة الاستقطاع. يتم تحديد نسبة الضريبة استنادًا إلى قيمة الإيجار أو العقد.",
                },
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 space-x-reverse cursor-pointer"
                  variants={industryCardVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="bg-[#edc870] p-3 rounded-full"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="w-11 h-11 flex items-center justify-center">
                      {industry.icon === "svg" ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 1.70666 1.70666">
                          <g fill="rgb(0,0,0)">
                            <path d="m1.32675 1.41018h-.372555c-.0110394 0-.02-.0089685-.02-.02v-.149736c-.0217047-.28526.16961-.420189.17778-.425799.0550709-.043748.14865-.119417.16065-.132752.0218898-.0243189.0482362-.0382598.0722638-.0382598.020748 0 .0373307.0108465.0443346.029.0174567.0452087-.0264724.118693-.123697.206902-.0275945.0250551-.027626.0357795-.027626.0358898.00069291.0002126.0078622.00394094.0249724.00394094.0246654 0 .0551102-.00767717.0775512-.0195512.129972-.0688622.157736-.225819.158016-.227402l.041122-.272496c.00977953-.064748.0479173-.0877205.077626-.0877205.0185984 0 .0368465.00812598.0513937.022878.021315.021626.0327638.0548858.0322165.0936772-.00058268.0416535-.00011024.116445.00544488.236291.0105551.227736-.189315.444594-.26722.508941-.0654567.0540827-.0864449.170961-.0924134.218693-.00126378.00999213-.00977953.0175039-.0198583.0175039zm-.352555-.0400157h.335165c.00924803-.0596102.0351654-.170039.104177-.227051.073626-.0608031.262528-.264886.252732-.47626-.00558661-.120831-.00606693-.196496-.0054685-.238689.00037008-.0275945-.0071811-.0513071-.0207087-.0650394-.00698819-.00707087-.015126-.0109685-.0229213-.0109685-.0182087 0-.0331535.0210787-.0380669.0536929l-.0411811.272831c-.00127559.00757087-.0315433.178445-.178791.256445-.0282087.0149291-.0650945.0242087-.0962598.0242087-.0442205 0-.0580984-.0188189-.0624291-.0300394-.0127953-.0331378.0255827-.0679724.0381929-.0794173.103197-.093626.119205-.147484.113264-.162874-.00048819-.00127559-.0013189-.00341732-.00702756-.00341732-.00923622 0-.0259016.00655512-.0425433.0250276-.0181929.0202087-.151484.126134-.166638.138134-.00845669.00591732-.181874.129276-.161583.391331.00003937.00051575.00006693.00102756.00006693.00154331l.00000394.130543h.00001575z" />
                          </g>
                        </svg>
                      ) : (
                        <img src={industry.icon || "/placeholder.svg"} alt={industry.title} className="w-11 h-11" />
                      )}
                    </div>
                  </motion.div>
                  <motion.div
                    className="text-right"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">{industry.title}</h3>
                    <p className="text-white text-sm font-medium">{industry.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </AnimatedSection>
      </main>
    </div>
  )
}
