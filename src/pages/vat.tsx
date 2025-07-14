
"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Link } from "react-router-dom"

export default function VATPage() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
    

      {/* Hero Section */}
      <motion.section
        className="relative min-h-[600px] flex items-center justify-end bg-cover bg-center bg-no-repeat"
                style={{
  backgroundImage: `url(${import.meta.env.BASE_URL}images/vat.webp)`,
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
                ضريبة القيمة المضافة
              </motion.h1>
              <motion.p
                className="text-lg text-white/90 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                خدمات شاملة لإدارة ضريبة القيمة المضافة وضمان الامتثال الكامل للأنظمة الضريبية
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

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-[#423f42] mb-6">خدمات ضريبة القيمة المضافة الشاملة</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                نقدم في شركاء الدقة لخدمات الأعمال خدمات متكاملة لإدارة ضريبة القيمة المضافة بما يضمن الامتثال الكامل للوائح الضريبية وتجنب المخالفات.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#423f42] mb-4">خدماتنا الأساسية:</h3>
                <ul className="space-y-3">
                  {[
                    "التسجيل في ضريبة القيمة المضافة",
                    "إعداد وتقديم الإقرارات الضريبية",
                    "حساب الضريبة المستحقة والقابلة للخصم",
                    "مراجعة المعاملات الضريبية",
                    "الاستشارات الضريبية المتخصصة"
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
                <h3 className="text-xl font-bold text-[#423f42] mb-4">المزايا التي نوفرها:</h3>
                <ul className="space-y-3">
                  {[
                    "امتثال كامل للوائح الضريبية",
                    "تجنب الغرامات والمخالفات",
                    "تحسين التدفق النقدي",
                    "تقارير دقيقة ومفصلة",
                    "دعم فني مستمر"
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

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold text-center text-[#423f42] mb-16"
            >
              تفاصيل خدماتنا في ضريبة القيمة المضافة
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Registration Services */}
              <motion.div
                className="relative min-h-[400px] rounded-lg overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://aztc.sa/wp-content/uploads/2021/08/registration.jpg')",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">التسجيل والامتثال</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    نساعدك في التسجيل في ضريبة القيمة المضافة وضمان الامتثال الكامل للوائح الضريبية السعودية.
                  </p>
                  <ul className="space-y-2 text-white/90">
                    <li>• تقييم الوضع الضريبي للمنشأة</li>
                    <li>• إعداد طلبات التسجيل</li>
                    <li>• متابعة الإجراءات مع الهيئة</li>
                    <li>• ضمان الامتثال المستمر</li>
                  </ul>
                </div>
              </motion.div>

              {/* Tax Returns */}
              <motion.div
                className="relative min-h-[400px] rounded-lg overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://aztc.sa/wp-content/uploads/2021/08/tax-returns.jpg')",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">الإقرارات الضريبية</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    إعداد وتقديم الإقرارات الضريبية الدورية بدقة وفي المواعيد المحددة.
                  </p>
                  <ul className="space-y-2 text-white/90">
                    <li>• إعداد الإقرارات الشهرية والربع سنوية</li>
                    <li>• مراجعة البيانات المالية</li>
                    <li>• التقديم الإلكتروني للإقرارات</li>
                    <li>• متابعة المدفوعات والمستردات</li>
                  </ul>
                </div>
              </motion.div>

              {/* Advisory Services */}
              <motion.div
                className="relative min-h-[400px] rounded-lg overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://aztc.sa/wp-content/uploads/2021/08/advisory.jpg')",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">الاستشارات الضريبية</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    استشارات متخصصة لتحسين الوضع الضريبي وتجنب المخاطر الضريبية.
                  </p>
                  <ul className="space-y-2 text-white/90">
                    <li>• تحليل المعاملات الضريبية</li>
                    <li>• تحديد الفرص الضريبية</li>
                    <li>• إدارة المخاطر الضريبية</li>
                    <li>• التخطيط الضريبي الاستراتيجي</li>
                  </ul>
                </div>
              </motion.div>

              {/* Compliance & Audit */}
              <motion.div
                className="relative min-h-[400px] rounded-lg overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: "url('https://aztc.sa/wp-content/uploads/2021/08/compliance.jpg')",
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-white mb-4">المراجعة والامتثال</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    مراجعة شاملة للأنظمة الضريبية وضمان الامتثال الكامل للوائح.
                  </p>
                  <ul className="space-y-2 text-white/90">
                    <li>• مراجعة السجلات الضريبية</li>
                    <li>• تقييم الامتثال للوائح</li>
                    <li>• إعداد التقارير التصحيحية</li>
                    <li>• التدريب على الأنظمة الضريبية</li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-[#423f42] mb-6">عملية العمل معنا</h2>
              <p className="text-lg text-gray-600">
                نتبع منهجية محددة لضمان تقديم أفضل الخدمات في إدارة ضريبة القيمة المضافة
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "التقييم الأولي",
                  description: "دراسة شاملة للوضع الضريبي الحالي للمنشأة"
                },
                {
                  step: "02",
                  title: "التخطيط",
                  description: "وضع خطة عمل مخصصة لإدارة ضريبة القيمة المضافة"
                },
                {
                  step: "03",
                  title: "التنفيذ",
                  description: "تطبيق الحلول الضريبية وإدارة العمليات اليومية"
                },
                {
                  step: "04",
                  title: "المتابعة",
                  description: "مراقبة مستمرة وتحديث الإجراءات حسب التطورات"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-[#edc870] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#423f42] font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#423f42] mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#423f42]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                احصل على استشارة مجانية في ضريبة القيمة المضافة
              </h2>
              <p className="text-xl text-white/90 mb-8">
                تواصل معنا اليوم للحصول على حلول ضريبية متقدمة ومخصصة لاحتياجات منشأتك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-[#edc870] hover:bg-[#d4b55e] text-[#423f42] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  احجز استشارة مجانية
                </Link>
                <a
                  href="tel:+966539628489"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#423f42] font-semibold px-8 py-4 rounded-lg transition-all duration-300"
                >
                  اتصل بنا الآن
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
    </div>
  )
}
