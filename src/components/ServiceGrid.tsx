import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from 'react-router-dom';

const services = [
  {
    title: "ضريبة الدخل",
    description:
      "نقدم خدمات شاملة في إعداد وتقديم إقرارات ضريبة الدخل للشركات والأفراد، مع ضمان الامتثال الكامل للقوانين الضريبية السعودية.",
    features: ["إعداد الإقرارات الضريبية", "التخطيط الضريبي", "مراجعة الوضع الضريبي", "تمثيل أمام الهيئة"],
    icon: "💰",
  },
  {
    title: "محاسبة التكاليف",
    description: "خدمات متخصصة في تحليل وإدارة التكاليف لمساعدة الشركات على تحسين الربحية وتحسين الكفاءة التشغيلية.",
    features: ["تحليل التكاليف", "إعداد تقارير التكلفة", "تحسين العمليات", "مراقبة الأداء المالي"],
    icon: "📊",
  },
  {
    title: "ضريبة القيمة المضافة",
    description: "إدارة شاملة لضريبة القيمة المضافة تشمل التسجيل والإقرارات والامتثال لجميع المتطلبات القانونية.",
    features: ["تسجيل ضريبة القيمة المضافة", "إعداد الإقرارات الشهرية", "مراجعة الفواتير", "استشارات الامتثال"],
    icon: "🧾",
  },
  {
    title: "تسجيل الحسابات",
    description: "خدمات تسجيل وتنظيم الحسابات المالية بدقة واحترافية لضمان سلامة البيانات المالية.",
    features: ["تسجيل العمليات اليومية", "إعداد القوائم المالية", "مراجعة الحسابات", "تنظيم الدفاتر المحاسبية"],
    icon: "📝",
  },
  {
    title: "تطوير الأعمال الناشئة",
    description: "دعم شامل للشركات الناشئة والمتوسطة في النمو والتطوير من خلال الاستشارات المالية والمحاسبية.",
    features: ["التخطيط المالي", "دراسات الجدوى", "إعداد نماذج الأعمال", "استشارات النمو"],
    icon: "🚀",
  },
  {
    title: "إعداد الميزانيات",
    description: "تخطيط وإعداد الميزانيات المالية التفصيلية لمساعدة الشركات على التخطيط المالي الفعال.",
    features: ["إعداد الميزانيات السنوية", "التنبؤ المالي", "تحليل الانحرافات", "تقارير الأداء"],
    icon: "📈",
  },
  {
    title: "الزكاة",
    description: "خدمات متخصصة في حساب وإعداد إقرارات الزكاة وفقاً للأحكام الشرعية والقوانين السعودية.",
    features: ["حساب الزكاة", "إعداد إقرارات الزكاة", "استشارات شرعية", "متابعة مع الهيئة"],
    icon: "🕌",
  },
  {
    title: "ضريبة الاستقطاع",
    description: "إدارة وتطبيق ضريبة الاستقطاع على المدفوعات للمقيمين وغير المقيمين وفقاً للقوانين السعودية.",
    features: ["حساب ضريبة الاستقطاع", "إعداد الإقرارات", "إدارة الشهادات", "الامتثال القانوني"],
    icon: "📋",
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

const cardVariants = {
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

export default function ServiceGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-16 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <motion.div variants={titleVariants} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">خدماتنا التفصيلية</h2>
            <p className="text-lg text-[#6B7280] max-w-3xl mx-auto">
              نقدم مجموعة شاملة من الخدمات المحاسبية والضريبية المتخصصة بأعلى معايير الجودة والاحترافية
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                variants={cardVariants}
                whileHover={{ y: -10, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
                className="bg-white p-8 rounded-lg shadow-lg transition-shadow"
              >
                <div className="flex items-start mb-6">
                  <div className="text-4xl ml-4">{service.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#1C1C1C] mb-3">{service.title}</h3>
                    <p className="text-[#6B7280] leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#1C1C1C] mb-3">ما نقدمه:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-[#6B7280]">
                        <span className="text-[#FFB300] ml-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#3A86FF] hover:bg-[#1C1C1C] text-white py-3 px-6 rounded-lg transition-colors"
                  >
                    اطلب الخدمة
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
