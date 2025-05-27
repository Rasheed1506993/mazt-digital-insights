
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AccountRegistration = () => {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-[600px] flex items-center justify-end"
        style={{
          backgroundImage: "url('https://aztc.sa/wp-content/uploads/2021/08/wepik-export-20240112202807zxnZ.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mr-auto lg:mr-16">
            <motion.div
              className="bg-black/40 p-8 lg:p-12 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                تسجيل الحسابات
              </motion.h1>
              <motion.p
                className="text-lg text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                خدمات تسجيل وتنظيم الحسابات المالية بدقة واحترافية لضمان سلامة البيانات
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <Link
                  to="/contact"
                  className="inline-block bg-[#edc870] hover:bg-[#d4b55e] text-[#423f42] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  احجز استشارة
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-[#423f42] mb-6">خدمات تسجيل الحسابات الاحترافية</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                يتميز مكتب المازن بتنفيذ عمليات تسجيل الحسابات بدقة وتفصيل، مما يسهم في إنشاء سجل دقيق للمعاملات
                المالية اليومية ويضمن التزام المنشأة بالمبادئ المحاسبية.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#423f42] mb-4">ما نقدمه:</h3>
                <ul className="space-y-3">
                  {[
                    "تسجيل العمليات اليومية",
                    "إعداد القوائم المالية",
                    "مراجعة الحسابات",
                    "تنظيم الدفاتر المحاسبية",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-[#edc870] ml-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#423f42] mb-4">الفوائد:</h3>
                <ul className="space-y-3">
                  {[
                    "دقة في التسجيل",
                    "امتثال للمعايير المحاسبية",
                    "تقارير مالية موثوقة",
                    "سهولة المراجعة والتدقيق",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-[#edc870] ml-2">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountRegistration;
