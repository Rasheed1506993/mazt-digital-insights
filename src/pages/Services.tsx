
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "tax-income",
    title: "ضريبة الدخل",
    description:
      "يتعامل مكتب المازن بكفاءة مع جميع جوانب ضريبة الدخل، بدءًا من تقديم الإشعارات الضريبية وصولًا إلى حساب الضرائب بأقل قدر من الضغط على المنشأة.",
    icon: "https://aztc.sa/wp-content/uploads/2024/01/budget.png",
    href: "/service/tax-income",
  },
  {
    id: "cost-accounting",
    title: "محاسبة التكاليف",
    description:
      "يتم تحليل ومتابعة التكاليف بشكل دوري، مما يساهم في تحديد نقاط التحسين وتحقيق كفاءة أكبر في إدارة الموارد المالية.",
    icon: "https://aztc.sa/wp-content/uploads/2024/01/budget-1.png",
    href: "/service/cost-accounting",
  },
  {
    id: "vat",
    title: "ضريبـة القيمـة المضافـة",
    description:
      "يقدم المكتب حلاً مخصصًا لامتثال المنشئة لضريبة القيمة المضافة، بدءًا من التسجيل وانتهاءً بتقديم التقارير والتصاريح بشكل دوري.",
    icon: "https://aztc.sa/wp-content/uploads/2024/01/budget-2.png",
    href: "/service/vat",
  },
  {
    id: "account-registration",
    title: "تسجيل الحسابات",
    description:
      "يتميز مكتب المازن بتنفيذ عمليات تسجيل الحسابات بدقة وتفصيل، مما يسهم في إنشاء سجل دقيق للمعاملات المالية اليومية و يضمن التزام المنشأة بالمبادئ المحاسبية.",
    icon: "https://aztc.sa/wp-content/uploads/2024/01/budget-3.png",
    href: "/account-registration",
  },
  {
    id: "startup-development",
    title: "تطوير المنشأت الناشئة",
    description:
      "يوفر مكتب المازن استشارات محاسبية متخصصة للمشاريع الناشئة، مساهمًا في توجيهها نحو النجاح وتطويرها بشكل فعّال.",
    icon: "https://aztc.sa/wp-content/uploads/2024/01/business-profile_4886485.png",
    href: "/service/startup-development",
  },
  {
    id: "budgets",
    title: "الموازنات",
    description:
      "يتعاون مكتب المازن مع العملاء في وضع موازنات دقيقة تعكس رؤية مالية شاملة وتسهم في تحقيق الأهداف المالية المستقبلية.",
    icon: "https://aztc.sa/wp-content/uploads/2024/01/accounting_10496581.png",
    href: "/service/budgets",
  },
  {
    id: "zakat",
    title: "الزكاة",
    description:
      "يُقدم المكتب خدمات متكاملة لإعداد إعلانات الزكاة والدخل، مع التركيز على الامتثال الكامل وتقديم النصائح اللازمة.",
    icon: "https://aztc.sa/wp-content/uploads/2024/01/weight_5035401.png",
    href: "/service/zakat",
  },
  {
    id: "withholding-tax",
    title: "ضريبة الاستقطاع",
    description:
      "يدير مكتب المازن الالتزامات المتعلقة بضريبة الاستقطاع بكفاءة، مما يضمن استيفاء الالتزامات الضريبية بدقة وفقًا للتشريعات السارية.",
    icon: "https://aztc.sa/wp-content/uploads/2024/01/money-bag_5755263.png",
    href: "/service/withholding-tax",
  },
];

const workSteps = [
  {
    number: "1",
    title: "دراسة وتحليل الأعمال",
    items: [
      "تحليل النشاط التجاري وفهم طبيعته.",
      "دراسة الحالة المحاسبية والمالية",
      "استعراض وتحليل دليل الحسابات.",
      "تحليل الوضع الضريبي للمنشأة.",
    ],
    bgColor: "#edc870",
  },
  {
    number: "2",
    title: "التنفيذ والمراقبة",
    items: [
      "توزيع المهام على الفرق المختصة.",
      "بدء تنفيذ الخطة المحاسبية والضريبية.",
      "استلام المستندات وفحصها بدقة.",
      "إعداد تقارير شاملة وموثوقة",
    ],
    bgColor: "#423f42",
  },
  {
    number: "3",
    title: "بناء استراتيجية",
    items: [
      "إعداد خطة استراتيجية لتحديد الأهداف والنتائج .",
      "إنشاء خطة محاسبية واضحة لتوجيه الأعمال.",
      "وضع خطة ضريبية واضحة لتحقيق الأداء الأمثل.",
      "تحديد الأهداف من كل تقرير محاسبي وضريبي.",
    ],
    bgColor: "#edc870",
  },
  {
    number: "4",
    title: "قياس النتائج",
    items: [
      "قياس تطور التقارير للعميل.",
      "تحديد مواطن الخلل في النشاط.",
      "توضيح ومناقشة النقاط المؤثرة.",
      "تقديم استشارة مخصصة لتطوير الأعمال",
    ],
    bgColor: "#423f42",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const flipVariants = {
  hidden: { opacity: 0, rotateY: -90 },
  visible: {
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-end"
        style={{
          backgroundImage: "url('/images/services.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-2xl mr-auto lg:mr-16">
            <motion.div
              className="bg-black/40 p-6 sm:p-8 lg:p-12 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                خدماتنا
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                أفضل الخدمات الاستشارية تجعلك تصل إلى هدفك
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#edc870] hover:bg-[#d4b55e] text-[#423f42] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  أطلب الخدمة الآن
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Services Grid Section */}
      <section
        className="py-12 sm:py-16 md:py-20 relative"
        style={{
          backgroundImage: "url('https://aztc.sa/wp-content/uploads/2024/01/map.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={flipVariants}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                }}
                className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                style={{ minHeight: "280px" }}
              >
                <Link to={service.href} className="block h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-[#edc870] rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#d4b55e] transition-colors duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <img
                        src={service.icon || "/placeholder.svg"}
                        alt={service.title}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                      />
                    </motion.div>

                    <h3 className="text-lg sm:text-xl font-bold text-[#423f42] mb-3 sm:mb-4 group-hover:text-[#edc870] transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-1">{service.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {workSteps.map((step, index) => (
              <motion.div key={step.number} variants={itemVariants} className="relative" whileHover={{ scale: 1.02 }}>
                <div
                  className="p-4 sm:p-6 md:p-8 rounded-lg text-white min-h-[280px] sm:min-h-[300px] flex flex-col"
                  style={{ backgroundColor: step.bgColor }}
                >
                  <motion.div
                    className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 sm:mb-4 opacity-20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {step.number}.
                  </motion.div>

                  <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">{step.title}</h3>

                  <ul className="space-y-2 sm:space-y-3 flex-1">
                    {step.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        className="text-xs sm:text-sm leading-relaxed flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + itemIndex * 0.1 }}
                      >
                        <span className="inline-block w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
